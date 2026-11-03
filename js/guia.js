(() => {
  'use strict';
  const { especialidades, medicos, iconos } = window.MedicGO;
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icon = key => `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconos[key]}</svg>`;
  const doctor = medicos[0];
  const doctorCard = `<div class="guide-doctor"><img src="${esc(doctor.foto)}" alt="${esc(doctor.nombre)}" width="88" height="88"><div><h3>${esc(doctor.nombre)}</h3><p>${esc(doctor.especialidad)}</p><p>${doctor.experiencia} años de experiencia</p><p class="guide-rating"><span aria-hidden="true">★</span> ${doctor.valoracion.toFixed(1)} · ${doctor.opiniones} opiniones</p></div></div>`;
  const summary = `<dl class="guide-summary"><div><dt>Profesional</dt><dd>${esc(doctor.nombre)}</dd></div><div><dt>Especialidad</dt><dd>${esc(doctor.especialidad)}</dd></div><div><dt>Fecha y hora de ejemplo</dt><dd>18 de noviembre · 09:30</dd></div><div><dt>Modalidad</dt><dd>Consulta a domicilio</dd></div><div><dt>Precio por consulta</dt><dd>S/ ${doctor.precio}</dd></div></dl>`;
  const steps = [
    { title:'Elige una especialidad', icon:'medicina', text:'Empieza por el área de atención que necesitas. Explora las especialidades y conoce qué ofrece cada una.', link:'Explorar especialidades', href:'especialidades.html', visual: `<div class="guide-specialties">${especialidades.slice(0,4).map(e => `<div class="guide-specialty"><span style="color:${e.color};background:${e.fondo}">${icon(e.icono)}</span><h3>${esc(e.nombre)}</h3><p>${esc(e.descripcion)}</p></div>`).join('')}</div>` },
    { title:'Compara médicos', icon:'especialidad17', text:'Compara experiencia, tarifa y valoraciones. Usa los filtros del buscador para encontrar opciones que se adapten a ti.', link:'Buscar médico', href:'medicos.html', visual: `${doctorCard}<div class="guide-facts"><span>${doctor.experiencia} años de experiencia</span><strong>S/ ${doctor.precio} / consulta</strong></div><p>${esc(doctor.descripcion)}</p>` },
    { title:'Revisa su perfil y opiniones', icon:'corazon', text:'Conoce mejor al profesional: revisa su experiencia, su enfoque y las opiniones de quienes ya lo consultaron.', link:'Conocer este perfil', href:`perfil.html?medico=${encodeURIComponent(doctor.id)}`, visual: `${doctorCard}<blockquote class="guide-review"><p class="guide-rating">${doctor.resenas[0].puntuacion} de 5 estrellas</p><p>“${esc(doctor.resenas[0].texto)}”</p><footer>${esc(doctor.resenas[0].autor)} · ${esc(doctor.resenas[0].aspecto)}</footer></blockquote>` },
    { title:'Selecciona fecha y hora', icon:'especialidad10', text:'En el perfil del médico, abre la opción de reservar. Elige una fecha y uno de los horarios disponibles para tu consulta.', link:'Buscar médico', href:'medicos.html', visual:`<div class="guide-calendar"><h3>Noviembre · ejemplo de selección</h3><div class="guide-days">${['L','M','X','J','V','S','D'].map(d=>`<span aria-hidden="true">${d}</span>`).join('')}${Array.from({length:30},(_,i)=>`<span class="${i===17?'is-selected':''}">${i+1}</span>`).join('')}</div><p>Fecha elegida: 18 de noviembre</p><div class="guide-times"><span>08:00</span><strong>09:30 · Elegido</strong><span>11:00</span></div></div>` },
    { title:'Revisa y confirma', icon:'especialidad10', text:'Antes de confirmar, comprueba el profesional, la fecha, la hora y el precio. Si necesitas ajustar algo, vuelve a la selección de horario.', link:'Buscar médico', href:'medicos.html', visual:`<h3>Resumen de tu consulta</h3>${summary}<p class="guide-note">En la reserva real, confirma cuando todos los datos estén correctos.</p>` },
    { title:'Consulta tus reservas', icon:'especialidad19', text:'En Mis reservas puedes ver tus consultas y sus detalles. Si cambian tus planes, también puedes cancelar o reprogramar una reserva.', link:'Ver mis reservas', href:'mis-reservas.html', visual:`<div class="guide-booking-status">✓ Reserva confirmada · ejemplo</div>${summary}<p class="guide-note">Encuentra tus consultas en Mis reservas.</p>` }
  ];
  let current = 0;
  const panel = document.querySelector('#guide-panel');
  const buttons = steps.map((step,i) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-controls','guide-panel');
    button.innerHTML = `<span class="guide-step-number">${i+1}</span><span>${esc(step.title)}</span><span class="guide-step-icon">${icon(step.icon)}</span>`;
    button.addEventListener('click',()=>show(i));
    li.append(button);
    document.querySelector('#guide-steps').append(li);
    return button;
  });
  function show(index, focusPanel = false) {
    current = index;
    buttons.forEach((button,i)=> {
      if (i===index) button.setAttribute('aria-current','step');
      else button.removeAttribute('aria-current');
    });
    const step = steps[index];
    document.querySelector('#guide-progress').textContent = `Paso ${index+1} de ${steps.length}`;
    panel.innerHTML = `<h2 id="guide-title">${esc(step.title)}</h2><p class="guide-explanation">${esc(step.text)}</p><div class="guide-preview"><p class="guide-example-label">VISTA DE EJEMPLO · No crea ni modifica reservas</p>${step.visual}</div><a class="guide-link" href="${step.href}">${step.link} <span aria-hidden="true">↗</span></a>`;
    document.querySelector('#guide-prev').disabled = index===0;
    document.querySelector('#guide-next').disabled = index===steps.length-1;
    if (focusPanel) panel.focus({preventScroll:true});
  }
  document.querySelector('#guide-prev').addEventListener('click',()=>show(current-1,true));
  document.querySelector('#guide-next').addEventListener('click',()=>show(current+1,true));
  show(0);
  document.querySelector('#interactive-guide').hidden = false;
})();
