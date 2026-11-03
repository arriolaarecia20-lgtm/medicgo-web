(() => {
  "use strict";
  const $ = selector => document.querySelector(selector);
  const { especialidades, medicos, iconos } = window.MedicGO;
  const params = new URLSearchParams(location.search);
  const CLAVE = "medicgo-bookings-v2";
  const HORAS = ["08:00", "09:30", "11:00", "12:30", "14:00", "15:30", "17:00", "18:30"];
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const normalizar = value => String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const urlMedico = (page, doctor) => page + ".html?medico=" + encodeURIComponent(doctor.id);
  const imagen = (doctor, clase = "doctor-photo") => '<img class="' + clase + '" src="' + esc(doctor.foto) + '" alt="' + esc(doctor.nombre) + '" loading="lazy">';
  let limite = 6, borrador = null, guardando = false, temporizador;
  const medico = medicos.find(m => m.id === params.get("medico"));
  const reprogramarId = params.get("reserva");

  function notificar(message) {
    $("#toast").textContent = message;
    $("#toast").classList.add("show");
    clearTimeout(temporizador);
    temporizador = setTimeout(() => $("#toast").classList.remove("show"), 4000);
  }
  function fechaISO(date) {
    return date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0");
  }
  function fechaValida(date) {
    return typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date) &&
      !Number.isNaN(new Date(date + "T12:00:00").getTime()) && fechaISO(new Date(date + "T12:00:00")) === date;
  }
  const fechaLegible = date => fechaValida(date)
    ? new Date(date + "T12:00:00").toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" }) : "Fecha no válida";
  function primeraFecha(doctor) {
    const date = new Date();
    if (!doctor.disponibleHoy) date.setDate(date.getDate() + 1);
    return fechaISO(date);
  }
  function ultimaFecha() {
    const date = new Date();
    date.setDate(date.getDate() + 60);
    return fechaISO(date);
  }
  function cargarReservas() {
    try {
      const list = JSON.parse(localStorage.getItem(CLAVE) || "[]");
      if (!Array.isArray(list)) return [];
      return list.filter(r => r && typeof r.id === "string" &&
        medicos.some(d => d.id === r.doctorId) && fechaValida(r.date) &&
        HORAS.includes(r.time) && ["confirmada", "cancelada"].includes(r.status))
        .map(r => {
          const d = medicos.find(d => d.id === r.doctorId);
          return { ...r, doctor: d.nombre, specialty: d.especialidad, price: d.precio };
        });
    } catch { return []; }
  }
  function guardarReservas(list) {
    try { localStorage.setItem(CLAVE, JSON.stringify(list)); return true; }
    catch { notificar("No se pudo guardar. Revisa el almacenamiento de tu navegador."); return false; }
  }
  function reservaEnEdicion(list = cargarReservas()) {
    return list.find(r => r.id === reprogramarId && r.doctorId === medico?.id && r.status === "confirmada");
  }
  function horariosDisponibles(doctor, date, list = cargarReservas(), excluirId = null) {
    if (!fechaValida(date) || date < primeraFecha(doctor) || date > ultimaFecha()) return [];
    return HORAS.filter(time => new Date(date + "T" + time) > new Date() &&
      !list.some(r => r.id !== excluirId && r.status === "confirmada" && r.date === date && r.time === time));
  }
  function valoracion(doctor) {
    return doctor.opiniones
      ? '<span aria-hidden="true">★</span> ' + doctor.valoracion.toFixed(1) + ' <span>· ' + doctor.opiniones + ' opiniones</span>'
      : "Sin opiniones todavía";
  }
  function tarjeta(doctor, list = cargarReservas()) {
    const hoy = horariosDisponibles(doctor, fechaISO(new Date()), list).length > 0;
    return '<article class="doc" data-doctor-id="' + doctor.id + '">' + imagen(doctor) +
      '<div class="doc-top"><div><h3>' + esc(doctor.nombre) + '</h3><p class="sp">' + esc(doctor.especialidad) +
      '</p></div></div><span class="pill">' + (hoy ? "Disponible hoy" : "Consulta próximos horarios") +
      '</span><a class="rating-link" href="' + urlMedico("perfil", doctor) + '#opiniones" aria-label="Opiniones de ' + esc(doctor.nombre) + '">' +
      valoracion(doctor) + '</a><p class="doc-description">' + esc(doctor.descripcion) +
      '</p><p class="muted">' + doctor.experiencia + ' años de experiencia</p><p class="price">S/ ' + doctor.precio +
      '<small> / consulta</small></p><a class="btn" data-profile="' + doctor.id + '" href="' + urlMedico("perfil", doctor) + '">Ver perfil</a></article>';
  }
  function mostrarEspecialidades() {
    if (!$("#tiles")) return;
    const list = location.pathname.endsWith("especialidades.html") ? especialidades : especialidades.slice(0, 4);
    $("#tiles").innerHTML = list.map(e => '<a class="tile" data-specialty="' + esc(e.nombre) +
      '" href="medicos.html?especialidad=' + encodeURIComponent(e.nombre) + '" style="--c:' + e.color + ';--t:' + e.fondo +
      '"><span class="ic"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      iconos[e.icono] + '</svg></span><span><b>' + esc(e.nombre) + '</b><small>' + esc(e.descripcion) + '</small></span></a>').join("");
  }
  function mostrarMedicos() {
    if (!$("#docs")) return;
    const list = cargarReservas(), hoy = fechaISO(new Date());
    const search = normalizar($("#search").value.trim()), specialty = $("#specialty").value;
    const price = $("#price").value, rating = $("#rating").value, availability = $("#availability").value;
    const reviews = $("#reviews-filter").value, order = $("#sort").value;
    const matches = medicos.filter(d =>
      (!search || normalizar(d.nombre + " " + d.especialidad).includes(search)) &&
      (!specialty || specialty === d.especialidad) &&
      (!price || d.precio <= Math.max(0, Number(price))) &&
      (!rating || (d.opiniones > 0 && d.valoracion >= Number(rating))) &&
      (reviews !== "none" || d.opiniones === 0) &&
      (reviews !== "rated" || d.opiniones > 0) &&
      (!availability || (availability === "today"
        ? horariosDisponibles(d, hoy, list).length > 0
        : horariosDisponibles(d, fechaISO(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1)), list).length > 0))
    );
    matches.sort((a, b) => {
      if (order === "low") return a.precio - b.precio;
      if (order === "high") return b.precio - a.precio;
      return (b.valoracion ?? -1) - (a.valoracion ?? -1) || b.opiniones - a.opiniones || a.id.localeCompare(b.id);
    });
    $("#result-count").textContent = "Mostrando " + Math.min(limite, matches.length) + " de " + matches.length + " médicos encontrados";
    $("#docs").innerHTML = matches.slice(0, limite).map(d => tarjeta(d, list)).join("");
    $("#no-doc").hidden = matches.length > 0;
    $("#load-more").hidden = matches.length <= limite;
  }
  function configurarFiltros() {
    if (!$("#specialty")) return;
    $("#specialty").insertAdjacentHTML("beforeend", especialidades.map(e => '<option value="' + esc(e.nombre) + '">' + esc(e.nombre) + '</option>').join(""));
    const fields = { specialty: "especialidad", availability: "availability", sort: "sort", price: "price", rating: "rating", "reviews-filter": "opiniones", search: "q" };
    for (const [id, key] of Object.entries(fields)) {
      if (params.has(key)) $("#" + id).value = params.get(key);
      if (id === "sort" && !$("#sort").value) $("#sort").value = "recommended";
      $("#" + id).addEventListener(["search", "price"].includes(id) ? "input" : "change", () => {
        limite = 6; sincronizar(); mostrarMedicos();
      });
    }
    function sincronizar() {
      const query = new URLSearchParams();
      for (const [id, key] of Object.entries(fields)) if ($("#" + id).value) query.set(key, $("#" + id).value);
      history.replaceState(null, "", location.pathname + (query.size ? "?" + query : ""));
    }
    document.querySelectorAll("[data-clear-filters],#reset-filters").forEach(button => button.onclick = () => {
      for (const id of Object.keys(fields)) $("#" + id).value = id === "sort" ? "recommended" : "";
      limite = 6; sincronizar(); mostrarMedicos(); $("#doctors-title").focus();
    });
    $("#load-more").onclick = () => {
      const previous = document.querySelectorAll("#docs .doc").length;
      limite += 6; mostrarMedicos();
      document.querySelectorAll("#docs [data-profile]")[previous]?.focus();
    };
  }
  function mostrarPerfil() {
    $("#profile-content").innerHTML = imagen(medico, "profile-photo") +
      '<span class="eyebrow">' + esc(medico.especialidad) + '</span><h1 id="profile-title">' + esc(medico.nombre) +
      '</h1><a class="rating-link" href="#opiniones">' + valoracion(medico) +
      '</a><p class="profile-bio">' + esc(medico.descripcion) +
      '</p><div class="profile-stats"><div><b>' + medico.experiencia + ' años</b><small>Experiencia</small></div><div><b>S/ ' +
      medico.precio + '</b><small>Por consulta</small></div></div><p class="availability-note">' +
      (horariosDisponibles(medico, fechaISO(new Date())).length ? "Hay horarios disponibles hoy." : "Revisa los próximos horarios disponibles.") +
      ' Horarios de 08:00 a 18:30, según fecha y reservas de este navegador.</p><a class="btn big full" id="start-reservation" href="' +
      urlMedico("reserva", medico) + '">Reservar</a><div class="dialog-actions"><a class="btn2" href="medicos.html?especialidad=' +
      encodeURIComponent(medico.especialidad) + '">Volver a médicos</a></div><section class="reviews-section" id="opiniones" aria-labelledby="reviews-title"><h2 id="reviews-title" tabindex="-1">Opiniones</h2>' +
      resumenOpiniones() + '</section>';
    if ($("#reviews-sort")) $("#reviews-sort").onchange = mostrarOpiniones;
    mostrarOpiniones();
    if (location.hash === "#opiniones") requestAnimationFrame(() => $("#reviews-title").focus());
  }
  function resumenOpiniones() {
    if (!medico.opiniones) return '<div class="noreserv"><h3>Sin opiniones todavía</h3><p>Este perfil aún no tiene valoraciones. Puedes consultar su información y disponibilidad.</p></div>';
    const distribution = [5, 4, 3, 2, 1].map(score => {
      const count = medico.resenas.filter(r => r.puntuacion === score).length;
      return '<div class="rating-row"><span>' + score + ' ★</span><meter min="0" max="' + medico.opiniones + '" value="' + count +
        '" aria-label="' + count + ' opiniones de ' + score + ' estrellas"></meter><span>' + count + '</span></div>';
    }).join("");
    const highlights = [...new Set(medico.resenas.map(r => r.aspecto))];
    return '<div class="review-overview"><div><strong class="rating-average">' + medico.valoracion.toFixed(1) +
      '</strong><p>de 5 estrellas · ' + medico.opiniones + ' opiniones</p></div><div class="rating-distribution">' + distribution +
      '</div></div><h3>Lo que más destacan</h3><ul class="chips">' +
      highlights.map(h => '<li>' + esc(h) + ' · ' + medico.resenas.filter(r => r.aspecto === h).length + '</li>').join("") +
      '</ul><label class="field review-order">Ordenar opiniones<select id="reviews-sort"><option value="recent">Más recientes</option><option value="best">Mejor valoradas</option></select></label><div id="reviews-list"></div>';
  }
  function mostrarOpiniones() {
    if (!$("#reviews-list")) return;
    const reviews = [...medico.resenas].sort((a, b) => $("#reviews-sort").value === "best"
      ? b.puntuacion - a.puntuacion || b.fecha.localeCompare(a.fecha) : b.fecha.localeCompare(a.fecha));
    $("#reviews-list").innerHTML = reviews.map(r => '<article class="review" data-score="' + r.puntuacion + '" data-date="' + r.fecha +
      '"><div class="head"><b>' + esc(r.autor) + '</b><time datetime="' + r.fecha + '">' + fechaLegible(r.fecha) +
      '</time></div><p class="stars" aria-label="' + r.puntuacion + ' de 5 estrellas">' + "★".repeat(r.puntuacion) + "☆".repeat(5 - r.puntuacion) +
      '</p><p>' + esc(r.texto) + '</p></article>').join("");
  }
  function mostrarHorarios() {
    if (!$("#date")) return;
    const date = $("#date").value, previous = $('[name="time"]:checked')?.value;
    const free = horariosDisponibles(medico, date, cargarReservas(), reprogramarId);
    $("#form-error").textContent = "";
    $("#no-times").textContent = !date ? "Selecciona una fecha para ver los horarios." :
      free.length ? "Hora local de este dispositivo. Los horarios ocupados o pasados están deshabilitados." :
        "No hay horarios disponibles en esa fecha. Elige otra fecha dentro de los próximos 60 días.";
    $("#time-grid").innerHTML = HORAS.map(time => '<label class="time-slot"><input type="radio" name="time" value="' + time +
      '" required ' + (free.includes(time) ? "" : "disabled") + (previous === time && free.includes(time) ? " checked" : "") +
      '><span>' + time + '</span></label>').join("");
    const resumen = () => $("#chosen-summary").textContent = fechaValida($("#date").value)
      ? fechaLegible($("#date").value) + " · " + ($('[name="time"]:checked')?.value || "Selecciona una hora") : "Selecciona una fecha";
    $("#time-grid").onchange = resumen; resumen();
  }
  function abrirReserva(draft = null) {
    const existing = reservaEnEdicion();
    if (reprogramarId && !existing) { errorDetalle("Esta reserva ya no se puede reprogramar."); return; }
    const date = draft?.date || (existing?.date >= primeraFecha(medico) ? existing.date : "");
    $("#reserve-content").innerHTML = '<a class="back-link" href="' + urlMedico("perfil", medico) + '">← Volver al perfil</a>' +
      imagen(medico, "profile-photo") + '<span class="eyebrow">Paso 1 de 2</span><h1 id="reserve-title">' +
      (existing ? "Reprogramar reserva" : "Elige fecha y hora") + '</h1><h2>' + esc(medico.nombre) + '</h2><p>' + esc(medico.especialidad) +
      '</p><form id="reservation-form" novalidate><label class="field">Fecha<input id="date" type="date" min="' + primeraFecha(medico) +
      '" max="' + ultimaFecha() + '" value="' + esc(date) + '" required></label><fieldset><legend>Horarios disponibles</legend><div class="time-grid" id="time-grid"></div><p class="hint" id="no-times" role="status"></p></fieldset>' +
      '<div class="summary"><h3>Resumen de tu reserva</h3><p>' + esc(medico.nombre) + '</p><p>' + esc(medico.especialidad) +
      '</p><p id="chosen-summary"></p><p>Precio: S/ ' + medico.precio + ' · Sin cobro en línea</p></div><p id="form-error" role="alert"></p>' +
      '<button class="btn big full" type="submit">Revisar resumen</button></form><div class="dialog-actions"><a class="btn2" href="' +
      (existing ? "mis-reservas.html" : urlMedico("perfil", medico)) + '">Cancelar</a></div>';
    mostrarHorarios();
    const selected = draft?.time || existing?.time;
    const radio = [...document.querySelectorAll('[name="time"]')].find(r => r.value === selected && !r.disabled);
    if (radio) { radio.checked = true; radio.dispatchEvent(new Event("change", { bubbles: true })); }
    $("#date").onchange = () => {
      // Una fecha nueva exige elegir su horario explícitamente.
      const checked = $('[name="time"]:checked'); if (checked) checked.checked = false;
      mostrarHorarios();
    };
    $("#reservation-form").onsubmit = revisarReserva;
  }
  function revisarReserva(event) {
    event.preventDefault();
    const date = $("#date").value, time = new FormData(event.target).get("time");
    if (!horariosDisponibles(medico, date, cargarReservas(), reprogramarId).includes(time)) {
      $("#form-error").textContent = "Selecciona una fecha válida dentro de los próximos 60 días y un horario futuro disponible.";
      return;
    }
    borrador = { doctorId: medico.id, date, time };
    $("#reserve-content").innerHTML = '<span class="eyebrow">Paso 2 de 2</span><h1 id="reserve-title">Revisa tu reserva</h1>' +
      resumenReserva(borrador) + '<p>Acceso como invitado. No se solicitan datos personales ni se realiza ningún cobro.</p>' +
      '<p id="form-error" role="alert"></p><button class="btn big full" id="confirm-reservation" type="button">' +
      (reprogramarId ? "Confirmar nuevo horario" : "Confirmar reserva") + '</button><div class="dialog-actions"><button class="btn2" id="edit-reservation" type="button">Volver a fecha y hora</button><a class="btn2" href="' +
      (reprogramarId ? "mis-reservas.html" : urlMedico("perfil", medico)) + '">Cancelar</a></div>';
    $("#confirm-reservation").focus();
  }
  function resumenReserva(draft) {
    return '<div class="summary">' + imagen(medico, "profile-photo") + '<h2>' + esc(medico.nombre) + '</h2><p>' + esc(medico.especialidad) +
      '</p><p>' + fechaLegible(draft.date) + ' · ' + esc(draft.time) + '</p><p>S/ ' + medico.precio + ' por consulta</p></div>';
  }
  async function confirmarReserva() {
    if (guardando || !borrador || borrador.doctorId !== medico?.id) return;
    guardando = true; $("#confirm-reservation").disabled = true;
    const save = () => {
      const list = cargarReservas();
      if (reprogramarId && !reservaEnEdicion(list)) {
        $("#form-error").textContent = "Esta reserva se canceló o eliminó. Consulta Mis reservas."; return;
      }
      if (!horariosDisponibles(medico, borrador.date, list, reprogramarId).includes(borrador.time)) {
        $("#form-error").textContent = "Ese horario ya no está disponible. Vuelve a fecha y hora para elegir otro."; return;
      }
      const booking = { ...borrador, id: reprogramarId || "MG-" + crypto.randomUUID(), doctor: medico.nombre,
        specialty: medico.especialidad, price: medico.precio, status: "confirmada" };
      const next = reprogramarId ? list.map(r => r.id === reprogramarId ? booking : r) : [booking, ...list];
      if (!guardarReservas(next)) {
        $("#form-error").textContent = "No se pudo guardar la reserva. Habilita el almacenamiento del navegador e inténtalo de nuevo."; return;
      }
      $("#reserve-content").innerHTML = '<div class="success-icon">✓</div><h1 id="reserve-title">' +
        (reprogramarId ? "Reserva reprogramada" : "¡Tu reserva está lista!") + '</h1><p class="muted">Código ' + esc(booking.id) +
        '</p>' + resumenReserva(booking) + '<p>No se ha solicitado una atención médica real ni realizado un pago.</p><a class="btn big full" id="view-bookings" href="mis-reservas.html">Ver mis reservas</a>';
      borrador = null; $("#view-bookings").focus();
    };
    try {
      // Serializar confirmaciones de pestañas del mismo origen cuando Web Locks está disponible.
      if (navigator.locks) await navigator.locks.request(CLAVE, save); else save();
    } catch { if ($("#form-error")) $("#form-error").textContent = "No se pudo completar la reserva. Inténtalo de nuevo."; }
    finally { guardando = false; if ($("#confirm-reservation")) $("#confirm-reservation").disabled = false; }
  }
  function mostrarReservas() {
    if (!$("#bookings")) return;
    const list = cargarReservas();
    $("#clear").hidden = list.length === 0;
    $("#bookings").innerHTML = list.length ? list.map(r => {
      const doctor = medicos.find(d => d.id === r.doctorId), cancelled = r.status === "cancelada";
      return '<article class="booking">' + imagen(doctor, "booking-photo") + '<div><h3><a href="' + urlMedico("perfil", doctor) + '">' +
        esc(r.doctor) + '</a></h3><p>' + esc(r.specialty) + ' · ' + fechaLegible(r.date) + ' · ' + esc(r.time) +
        '</p><p>S/ ' + r.price + '</p><small>' + esc(r.id) + '</small></div><span class="tag ' + (cancelled ? "x" : "") +
        '">' + (cancelled ? "Cancelada" : "Confirmada") + '</span>' + (cancelled ? "" :
          '<div class="booking-actions"><a class="btn2" data-reschedule="' + esc(r.id) + '" href="' + urlMedico("reserva", doctor) +
          '&reserva=' + encodeURIComponent(r.id) + '">Reprogramar</a><button class="btn2" type="button" data-cancel="' + esc(r.id) +
          '">Cancelar reserva</button></div>') + '</article>';
    }).join("") : '<div class="noreserv"><h3>Aún no tienes reservas</h3><p>Encuentra un médico y elige una fecha y hora para tu consulta.</p><a class="btn" href="medicos.html">Buscar médico</a></div>';
  }
  function errorDetalle(message = "Médico no encontrado") {
    const detail = $("#profile-content") || $("#reserve-content");
    detail.innerHTML = '<h1>' + esc(message) + '</h1><p>Selecciona un perfil del catálogo o consulta tus reservas para continuar.</p><div class="actions"><a class="btn" href="medicos.html">Buscar médico</a><a class="btn2" href="mis-reservas.html">Mis reservas</a></div>';
  }
  const botonMenu = $("#menu-btn"), navegacion = $("#main-nav");
  function cambiarMenu(open) {
    navegacion.classList.toggle("open", open);
    botonMenu.setAttribute("aria-expanded", String(open));
    botonMenu.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  }
  botonMenu.onclick = () => cambiarMenu(!navegacion.classList.contains("open"));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") { const open = navegacion.classList.contains("open"); cambiarMenu(false); if (open) botonMenu.focus(); }
  });
  window.addEventListener("resize", () => { if (innerWidth > 860) cambiarMenu(false); });
  document.addEventListener("click", event => {
    if (!event.target.closest("#main-nav,#menu-btn") || event.target.closest("#main-nav a")) cambiarMenu(false);
    if (event.target.closest("#edit-reservation")) { abrirReserva(borrador); $("#date")?.focus(); }
    if (event.target.closest("#confirm-reservation")) confirmarReserva();
    const cancel = event.target.closest("[data-cancel]");
    if (cancel && confirm("¿Cancelar esta reserva?")) {
      const list = cargarReservas(), booking = list.find(r => r.id === cancel.dataset.cancel);
      if (booking) booking.status = "cancelada";
      if (guardarReservas(list)) { mostrarReservas(); notificar("Reserva cancelada. El horario ha quedado libre."); }
    }
  });
  $("#search-form")?.addEventListener("submit", event => {
    event.preventDefault();
    if ($("#docs")) mostrarMedicos();
    else location.href = "medicos.html?q=" + encodeURIComponent($("#search").value.trim());
  });
  if ($("#clear")) $("#clear").onclick = () => {
    if (confirm("¿Borrar todas las reservas de este navegador?") && guardarReservas([])) mostrarReservas();
  };
  window.addEventListener("storage", event => {
    if (event.key !== CLAVE && event.key !== null) return;
    mostrarReservas(); mostrarMedicos(); if ($("#date")) mostrarHorarios();
  });
  window.addEventListener("pageshow", () => {
    cambiarMenu(false); mostrarReservas(); mostrarMedicos(); if ($("#date")) mostrarHorarios();
  });
  document.addEventListener("error", event => {
    const img = event.target;
    if (img.tagName === "IMG" && !img.src.endsWith("/assets/fallback.svg")) img.src = "assets/fallback.svg";
  }, true);
  mostrarEspecialidades(); configurarFiltros(); mostrarMedicos(); mostrarReservas();
  if ($("#featured-docs")) $("#featured-docs").innerHTML = [medicos[0], medicos[6], medicos[25]].map(d => tarjeta(d)).join("");
  if ($("#profile-content") || $("#reserve-content")) {
    if (!medico) errorDetalle();
    else if ($("#profile-content")) mostrarPerfil();
    else abrirReserva();
  }
})();
