// Pruebas sin dependencias: Node 22+ y Chrome o Edge instalado.
// Ejecutar desde la raíz: node tests/browser.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const { spawn } = require('node:child_process');
const { createHash } = require('node:crypto');

const root = path.resolve(__dirname, '..');
const prefix = '/medicgo-web/';
const storageKey = 'medicgo-bookings-v2';
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
const browserPath = [process.env.MEDICGO_BROWSER,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
].filter(Boolean).find(file => fs.existsSync(file));
assert(browserPath, 'Define MEDICGO_BROWSER con la ruta de Chrome o Edge.');
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (!url.pathname.startsWith(prefix)) { res.writeHead(404).end(); return; }
  const local = decodeURIComponent(url.pathname.slice(prefix.length)) || 'index.html';
  const file = path.resolve(root, local);
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  fs.readFile(file, (error, bytes) => {
    if (error) { res.writeHead(404).end(); return; }
    const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' }).end(bytes);
  });
});
let browser, socket, call;
const screenshots = fs.mkdtempSync(path.join(os.tmpdir(), 'medicgo-flows-'));

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}${prefix}`;
  browser = spawn(browserPath, ['--headless=new', '--no-first-run', '--no-default-browser-check',
    '--disable-background-networking', '--disable-component-update', '--disable-sync',
    '--remote-debugging-port=0', '--user-data-dir=' + fs.mkdtempSync(path.join(os.tmpdir(), 'medicgo-browser-')), 'about:blank'
  ], { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe'] });
  const endpoint = await new Promise((resolve, reject) => {
    let output = '';
    const timer = setTimeout(() => reject(Error('Chrome no inició en 15 segundos')), 15000);
    browser.on('error', reject);
    browser.stderr.on('data', chunk => {
      output += chunk;
      const match = output.match(/DevTools listening on (ws:\/\/[^\s]+)/);
      if (match) { clearTimeout(timer); resolve(match[1]); }
    });
  });
  const pages = await (await fetch(`http://${new URL(endpoint).host}/json`)).json();
  socket = new WebSocket(pages.find(page => page.type === 'page').webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  let id = 0, acceptDialog = true;
  const pending = new Map(), exceptions = [], broken = [];
  call = (method, params = {}) => new Promise((resolve, reject) => {
    const messageId = ++id;
    const timer = setTimeout(() => { pending.delete(messageId); reject(Error(`Timeout: ${method}`)); }, 20000);
    pending.set(messageId, { resolve, reject, timer });
    socket.send(JSON.stringify({ id: messageId, method, params }));
  });
  socket.onmessage = event => {
    const message = JSON.parse(event.data);
    if (message.id) {
      const request = pending.get(message.id);
      if (!request) return;
      clearTimeout(request.timer); pending.delete(message.id);
      message.error ? request.reject(Error(JSON.stringify(message.error))) : request.resolve(message.result);
    } else if (message.method === 'Runtime.exceptionThrown') {
      exceptions.push(message.params.exceptionDetails);
    } else if (message.method === 'Network.responseReceived') {
      const response = message.params.response;
      if (response.url.startsWith(base) && response.status >= 400) broken.push(response.url);
    } else if (message.method === 'Page.javascriptDialogOpening') {
      call('Page.handleJavaScriptDialog', { accept: acceptDialog }).catch(() => {});
    }
  };
  const evaluate = async expression => {
    const result = await call('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    assert(!result.exceptionDetails, JSON.stringify(result.exceptionDetails));
    return result.result.value;
  };
  const waitFor = async expression => {
    for (let i = 0; i < 100; i++) { if (await evaluate(expression)) return; await pause(50); }
    throw Error('No se cumplió: ' + expression);
  };
  const click = async selector => {
    const point = await evaluate(`(async () => {
      await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
      const element = document.querySelector(${JSON.stringify(selector)});
      if (!element) throw Error('Control inexistente: ' + ${JSON.stringify(selector)});
      element.scrollIntoView({behavior:'instant',block:'center'});
      await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
      const box = element.getBoundingClientRect();
      if (!box.width || !box.height) throw Error('Control oculto: ' + ${JSON.stringify(selector)});
      return { x: box.x + box.width / 2, y: box.y + box.height / 2 };
    })()`);
    await call('Input.dispatchMouseEvent', { type: 'mousePressed', button: 'left', clickCount: 1, ...point });
    await call('Input.dispatchMouseEvent', { type: 'mouseReleased', button: 'left', clickCount: 1, ...point });
  };
  const setValue = (selector, value, event = 'change') => evaluate(`(() => {
    const input = document.querySelector(${JSON.stringify(selector)});
    input.value = ${JSON.stringify(value)}; input.dispatchEvent(new Event(${JSON.stringify(event)}, {bubbles:true}));
  })()`);
  const stored = () => evaluate(`JSON.parse(localStorage.getItem('${storageKey}') || '[]')`);
  const count = () => evaluate('document.querySelectorAll("#docs .doc").length');
  const screenshot = async name => {
    const shot = await call('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(screenshots, name + '.png'), Buffer.from(shot.data, 'base64'));
  };
  await call('Runtime.enable'); await call('Page.enable'); await call('Network.enable');
  await call('Emulation.setTimezoneOverride', { timezoneId: 'America/Bogota' });
  // Hora fija para poder comprobar tanto horarios pasados como futuros del día.
  await call('Page.addScriptToEvaluateOnNewDocument', { source: `
    const RealDate = Date; const now = RealDate.parse('2026-11-02T15:00:00Z');
    globalThis.Date = class extends RealDate { constructor(...args){super(...(args.length ? args : [now]));} static now(){return now;} };
    addEventListener('DOMContentLoaded',()=>document.documentElement.style.scrollBehavior='auto');
  ` });
  await call('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1100, deviceScaleFactor: 1, mobile: false });

  const go=async(file)=>{await call('Page.navigate',{url:base+file});await waitFor('document.readyState === "complete"');};
  const navigateClick=async(selector,ending)=>{await click(selector);await waitFor('location.pathname.endsWith('+JSON.stringify(ending)+') && document.readyState === "complete"');};
  await go('index.html');
  assert.equal(await evaluate('document.querySelectorAll("#featured-docs .doc").length'),3);
  assert(await evaluate('[...document.querySelectorAll("a")].filter(a=>a.textContent.trim()==="Buscar médico").every(a=>a.getAttribute("href")==="medicos.html"&&!a.target)'));
  await setValue('#search','cardiologia','input');await navigateClick('#search-form button','medicos.html');
  assert.equal(await count(),5);
  await go('index.html');await navigateClick('a[href="especialidades.html"].btn2','especialidades.html');
  await go('index.html');await navigateClick('a[href="medicos.html"].btn2','medicos.html');
  await screenshot('catalogo-escritorio');
  for(const route of ['index.html','especialidades.html','medicos.html','como-funciona.html','mis-reservas.html']) {
    await navigateClick('#main-nav a[href="'+route+'"]',route);
    assert.equal(await evaluate('document.querySelector("#main-nav [aria-current=page]").getAttribute("href")'),route);
  }
  assert(await evaluate('Boolean(document.querySelector(".noreserv a"))'));
  await go('especialidades.html');
  const specialties=await evaluate('[...document.querySelectorAll(".tile")].map(a=>({name:a.dataset.specialty,href:a.getAttribute("href")}))');
  assert.equal(specialties.length,20);
  for(const [i,s] of specialties.entries()) {
    await go(s.href); assert.equal(await count(),5);
    assert(await evaluate('[...document.querySelectorAll("#docs .sp")].every(e=>e.textContent==='+JSON.stringify(s.name)+')'));
    const p=await evaluate('({name:document.querySelector("#docs h3").textContent,photo:document.querySelector("#docs img").getAttribute("src")})');
    await navigateClick('#docs [data-profile]','perfil.html');
    assert.equal(await evaluate('document.querySelector("#profile-title").textContent'),p.name);
    assert.equal(await evaluate('document.querySelector("#profile-content img").getAttribute("src")'),p.photo);
    await navigateClick('#start-reservation','reserva.html');
    for(const date of ['', '2026-10-30','2027-02-01']) {
      await setValue('#date',date); await click('#reservation-form button[type=submit]');
      assert(await evaluate('Boolean(document.querySelector("#form-error").textContent)'));
    }
    const chosenDate='2026-11-'+String(2+i).padStart(2,'0');
    await setValue('#date',chosenDate);await click('[name=time][value="11:00"]');
    await click('#reservation-form button[type=submit]'); await click('#edit-reservation');
    assert.equal(await evaluate('document.querySelector("[name=time]:checked").value'),'11:00');
    await click('#reservation-form button[type=submit]');await click('#confirm-reservation');await waitFor('Boolean(document.querySelector("#view-bookings"))');
    assert.equal((await stored()).length,i+1);
    await navigateClick('#view-bookings','mis-reservas.html');
    assert.equal(await evaluate('document.querySelectorAll(".booking").length'),i+1);
  }
  const original=(await stored())[0];
  await navigateClick('[data-reschedule]','reserva.html');
  await setValue('#date','2026-11-24');await click('[name=time][value="14:00"]');
  await click('#reservation-form button[type=submit]');await click('#confirm-reservation');await waitFor('Boolean(document.querySelector("#view-bookings"))');
  await navigateClick('#view-bookings','mis-reservas.html');
  assert.equal((await stored()).length,20);
  assert.equal((await stored()).find(r=>r.id===original.id).date,'2026-11-24');
  await click('[data-cancel]'); assert.equal((await stored()).filter(r=>r.status==='cancelada').length,1);
  await call('Page.reload');await waitFor('Boolean(document.querySelector(".tag.x"))');
  await go('medicos.html');
  await setValue('#search','oscar molina','input');assert.equal(await count(),1);
  await setValue('#search','no existe','input');assert.equal(await count(),0);
  await click('#clear-filters');
  await setValue('#price','100','input'); assert(await evaluate('[...document.querySelectorAll(".price")].every(e=>Number(e.textContent.match(/[0-9]+/)[0])<=100)'));
  await click('#clear-filters');await setValue('#rating','5');
  assert(await evaluate('[...document.querySelectorAll("#docs .rating-link")].every(e=>e.textContent.includes("5.0"))'));
  await setValue('#reviews-filter','none');assert.equal(await count(),0);
  await click('#clear-filters');await setValue('#reviews-filter','none');
  assert(await evaluate('document.querySelector("#result-count").textContent.includes("11 médicos")'));
  assert(await evaluate('[...document.querySelectorAll("#docs .rating-link")].every(e=>e.textContent==="Sin opiniones todavía")'));
  await click('#clear-filters');await setValue('#availability','today');
  assert(await evaluate('document.querySelector("#result-count").textContent.includes("80 médicos")'));
  await click('#clear-filters');
  while(!await evaluate('document.querySelector("#load-more").hidden')) await click('#load-more');
  assert.equal(await count(),100);
  const photos=await evaluate('[...document.querySelectorAll("#docs img")].map(i=>i.getAttribute("src"))');
  assert.equal(new Set(photos).size,100);
  assert.equal(new Set(photos.map(p=>createHash('sha256').update(fs.readFileSync(path.join(root,p))).digest('hex'))).size,100);
  for(const order of ['low','high','rating']) {
    await setValue('#sort',order);
    while(!await evaluate('document.querySelector("#load-more").hidden')) await click('#load-more');
    const values=await evaluate('[...document.querySelectorAll("#docs .doc")].map(e=>window.MedicGO.medicos.find(d=>d.id===e.dataset.doctorId)).map(d=>'+(order==='rating'?'d.valoracion ?? -1':'d.precio')+')');
    assert(values.every((v,i)=>!i||(order==='low'?v>=values[i-1]:v<=values[i-1])));
  }
  await click('#clear-filters');await setValue('#specialty','Cardiología');await setValue('#search','eduardo','input');
  await setValue('#price','160','input');await setValue('#rating','4');await setValue('#availability','today');await setValue('#reviews-filter','rated');
  assert.equal(await count(),1);
  assert(await evaluate('document.querySelector("#docs h3").textContent.includes("Eduardo")'));
  await call('Page.reload');await waitFor('Boolean(document.querySelector("#docs .doc"))');assert.equal(await count(),1);
  await setValue('#price','1','input');assert.equal(await count(),0);
  await click('#no-doc [data-clear-filters]');assert.equal(await count(),6);
  while(!await evaluate('document.querySelector("#load-more").hidden')) await click('#load-more');
  await evaluate('(async()=>{const images=[...document.querySelectorAll("#docs img")];images.forEach(i=>i.loading="eager");await Promise.all(images.map(i=>i.decode()));})()');
  const doctors=await evaluate('window.MedicGO.medicos');
  assert.equal(new Set(doctors.map(d=>d.nombre)).size,100);
  assert.equal(new Set(await evaluate('window.MedicGO.especialidades.map(e=>window.MedicGO.iconos[e.icono])')).size,20);
  for(const d of doctors) {
    await go('perfil.html?medico='+d.id+'#opiniones');
    assert.equal(await evaluate('document.querySelector("#profile-title").textContent'),d.nombre);
    assert.equal(await evaluate('document.querySelector("#profile-content img").getAttribute("src")'),d.foto);
    assert(await evaluate('document.querySelector("#profile-content").textContent.includes("S/ '+d.precio+'")'));
    if(d.opiniones) {
      assert.equal(d.valoracion,Number((d.resenas.reduce((a,r)=>a+r.puntuacion,0)/d.opiniones).toFixed(1)));
      assert.equal(await evaluate('document.querySelectorAll("#reviews-list .review").length'),d.opiniones);
      assert.equal(await evaluate('[...document.querySelectorAll(".rating-row meter")].reduce((a,e)=>a+Number(e.value),0)'),d.opiniones);
      await setValue('#reviews-sort','best');
      assert(await evaluate('[...document.querySelectorAll(".review")].every((e,i,a)=>!i||Number(e.dataset.score)<=Number(a[i-1].dataset.score))'));
    } else {
      assert(await evaluate('document.querySelector("#opiniones").textContent.includes("Sin opiniones todavía")'));
      assert(!await evaluate('Boolean(document.querySelector(".rating-average"))'));
    }
  }
  console.log('PASS: 100 fichas, identidad, fotografías, distribución y orden de opiniones; 20 especialidades y filtros combinados.');
  await go('medicos.html');await navigateClick('#docs .rating-link','perfil.html');
  assert.equal(await evaluate('location.hash'),'#opiniones');
  await go('medicos.html');await navigateClick('#docs [data-profile]','perfil.html');
  await evaluate('history.back()');await waitFor('location.pathname.endsWith("medicos.html")');
  await evaluate('history.forward()');await waitFor('location.pathname.endsWith("perfil.html")');
  for(const file of ['perfil.html','reserva.html','perfil.html?medico=invalid','reserva.html?medico=invalid']) {
    await go(file);assert(await evaluate('document.querySelector("main").textContent.includes("Médico no encontrado")'));
  }
  await go('reserva.html?medico=med-0-0');await setValue('#date','2026-11-03');
  assert(await evaluate('document.querySelector(\'[name=time][value="11:00"]\').disabled'));
  await setValue('#date','2026-11-02');
  assert(await evaluate('document.querySelector(\'[name=time][value="08:00"]\').disabled && document.querySelector(\'[name=time][value="09:30"]\').disabled'));
  await setValue('#date','2026-11-25');await click('[name=time][value="14:00"]');await click('#reservation-form button[type=submit]');
  const beforeConflict=(await stored()).length;
  await evaluate('(()=>{const list=JSON.parse(localStorage.getItem("medicgo-bookings-v2"));localStorage.setItem("medicgo-bookings-v2",JSON.stringify([{...list[0],id:"conflict-test",doctorId:"med-1-0",date:"2026-11-25",time:"14:00",status:"confirmada"},...list]));})()');
  await click('#confirm-reservation');await waitFor('document.querySelector("#form-error").textContent.includes("ya no")');
  assert.equal((await stored()).length,beforeConflict+1);
  await evaluate('localStorage.setItem("medicgo-bookings-v2",JSON.stringify(JSON.parse(localStorage.getItem("medicgo-bookings-v2")).filter(r=>r.id!=="conflict-test")))');
  await click('#edit-reservation');await click('[name=time][value="15:30"]');await click('#reservation-form button[type=submit]');
  await evaluate('window.originalSetItem=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){if(k==="medicgo-bookings-v2")throw Error("almacenamiento bloqueado");return originalSetItem.call(this,k,v)}');
  await click('#confirm-reservation');await waitFor('document.querySelector("#form-error").textContent.includes("No se pudo guardar")');
  assert.equal((await stored()).length,beforeConflict);
  await evaluate('Storage.prototype.setItem=window.originalSetItem');
  await go('mis-reservas.html');
  const beforeReprogram=(await stored()).find(r=>r.status==='confirmada');
  await navigateClick('[data-reschedule]','reserva.html');await setValue('#date','2026-11-28');
  await navigateClick('.dialog-actions a','mis-reservas.html');
  assert.equal((await stored()).find(r=>r.id===beforeReprogram.id).date,beforeReprogram.date);
  const snapshot=await stored();
  await evaluate('localStorage.setItem("medicgo-bookings-v2","invalid-json")');
  await call('Page.reload');await waitFor('Boolean(document.querySelector(".noreserv"))');
  await evaluate('localStorage.setItem("medicgo-bookings-v2",'+JSON.stringify(JSON.stringify(snapshot))+')');
  await go('perfil.html?medico=med-0-0#opiniones');await screenshot('opiniones-escritorio');
  await call('Emulation.setDeviceMetricsOverride',{width:390,height:1000,deviceScaleFactor:1,mobile:true});
  for(const file of ['index.html','especialidades.html','medicos.html','perfil.html?medico=med-0-0','reserva.html?medico=med-0-0','como-funciona.html','mis-reservas.html']) {
    await go(file);
    assert(await evaluate('document.documentElement.scrollWidth<=innerWidth'));
    assert.deepEqual(await evaluate('(async()=>{const bad=[];for(const a of document.querySelectorAll("a")){if(a.origin===location.origin && !(await fetch(a.href)).ok)bad.push(a.href);}return bad;})()'),[]);
    await click('#menu-btn');assert(await evaluate('document.querySelector("#menu-btn").getAttribute("aria-expanded")==="true"'));
    await call('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape'});
    assert(await evaluate('document.querySelector("#menu-btn").getAttribute("aria-expanded")==="false"'));
    await click('#menu-btn');
    await navigateClick('#main-nav a[href="medicos.html"]','medicos.html');
  }
  await go('perfil.html?medico=med-0-0#opiniones');await screenshot('opiniones-movil');
  await go('medicos.html');await screenshot('catalogo-movil');
  await go('reserva.html?medico=med-0-0');await setValue('#date','2026-11-03');await click('[name=time][value="14:00"]');await click('#reservation-form button[type=submit]');await click('#confirm-reservation');await waitFor('Boolean(document.querySelector("#view-bookings"))');await navigateClick('#view-bookings','mis-reservas.html');
  await screenshot('reservas-movil');
  assert(await evaluate('[...document.querySelectorAll(".booking-actions a,.booking-actions button")].every(e=>e.getBoundingClientRect().right<=innerWidth)'));
  await click('#clear');assert.equal((await stored()).length,0);
  assert.deepEqual(exceptions,[]);assert.deepEqual(broken,[]);
  console.log('PASS: siete páginas bajo /medicgo-web/, menú activo y móvil, historial, 20 especialidades con cinco médicos, 100 perfiles/fotos únicos, opiniones y promedios, filtros, 20 reservas, validaciones, edición, persistencia, cancelación, reprogramación y reserva móvil.');
  console.log('Capturas de revisión visual: '+screenshots);
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(async () => {
  if (call && socket?.readyState === WebSocket.OPEN) { try { await call('Browser.close'); } catch {} }
  socket?.close(); browser?.kill(); server.close();
});
