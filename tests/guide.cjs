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
  await go('como-funciona.html');
  await waitFor('!document.querySelector("#interactive-guide").hidden');
  const before = await evaluate('JSON.stringify(localStorage)');
  assert.equal(await evaluate('document.querySelectorAll("#guide-steps button").length'),6);
  for (const width of [1440,760,390,320]) {
    await call('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<800});
    for(let i=0;i<6;i++) {
      await click(`#guide-steps li:nth-child(${i+1}) button`);
      assert.equal(await evaluate('document.querySelector("#guide-progress").textContent'),`Paso ${i+1} de 6`);
      assert.equal(await evaluate('document.querySelectorAll("[aria-current=step]").length'),1);
      assert(await evaluate('document.documentElement.scrollWidth <= innerWidth'),`overflow ${width} step ${i+1}`);
      const href=await evaluate('document.querySelector(".guide-link").getAttribute("href")');
      assert.equal((await fetch(base+href)).status,200);
    }
    assert(await evaluate(`(()=>{const a=document.querySelector('.guide-steps').getBoundingClientRect(),b=document.querySelector('.guide-card').getBoundingClientRect();return innerWidth>760?a.right<=b.left:a.bottom<=b.top})()`));
    await screenshot('guia-'+width);
  }
  assert(await evaluate('document.querySelector("#guide-next").disabled'));
  for(let i=5;i>0;i--) await click('#guide-prev');
  assert(await evaluate('document.querySelector("#guide-prev").disabled'));
  for(let i=0;i<5;i++) await click('#guide-next');
  assert.equal(await evaluate('document.activeElement.id'),'guide-panel');
  await call('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
  await call('Page.bringToFront');
  await evaluate('document.querySelector("#guide-steps button").focus()');
  await call('Input.dispatchKeyEvent',{type:'keyDown',text:'\r',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
  await call('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
  await waitFor('document.querySelector("#guide-progress").textContent === "Paso 1 de 6"');
  assert.equal(await evaluate('getComputedStyle(document.activeElement).outlineStyle'),'solid');
  await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  assert.equal(await evaluate('getComputedStyle(document.querySelector("#guide-panel")).animationName'),'none');
  assert.equal(await evaluate('JSON.stringify(localStorage)'),before);
  assert.equal(await evaluate('document.querySelector(".guide-finish a").getAttribute("href")'),'medicos.html');
  assert.deepEqual(exceptions,[]);assert.deepEqual(broken,[]);
  console.log('PASS: six steps, buttons, keyboard, focus, links, storage unchanged, reduced motion and four viewport widths.');
  console.log('Screenshots: '+screenshots);
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(async () => {
  if (call && socket?.readyState === WebSocket.OPEN) { try { await call('Browser.close'); } catch {} }
  socket?.close(); browser?.kill(); server.close();
});