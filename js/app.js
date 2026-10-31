(() => {
  "use strict";

  const $ = selector => document.querySelector(selector);

  const esc = value => String(value ?? "").replace(
    /[&<>"']/g,
    character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]
  );

  const normalizar = value => String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  /* ICONOS */
  const iconos = {
    medicina: `
      <path d="M5 3v6a4 4 0 0 0 8 0V3"/>
      <path d="M9 13v1.5a5.5 5.5 0 0 0 11 0V13"/>
      <circle cx="20" cy="11" r="2"/>
    `,
    pediatria: `
      <circle cx="12" cy="12" r="9"/>
      <path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/>
      <path d="M9 9.5h.01M15 9.5h.01"/>
    `,
    ginecologia: `
      <circle cx="12" cy="9" r="5"/>
      <path d="M12 14v8M9 18h6"/>
    `,
    piel: `
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>
    `,
    huesos: `
      <path d="M7 7a2.5 2.5 0 1 1-2.5-2.5A2.5 2.5 0 0 1 7 7l10 10a2.5 2.5 0 1 1 2.5 2.5A2.5 2.5 0 0 1 17 17L7 7z"/>
    `,
    corazon: `
      <path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/>
      <path d="M8 12h2l1.5-2 2 4 1.5-2h1"/>
    `,
    cerebro: `
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 3 3 3 0 0 0 1.5 2.6A3 3 0 0 0 8 17a3 3 0 0 0 4 2V4.5A3 3 0 0 0 9 4zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 3 3 3 0 0 1-1.5 2.6A3 3 0 0 1 16 17a3 3 0 0 1-4 2V4.5A3 3 0 0 1 15 4z"/>
    `
  };

  /* ESPECIALIDADES */
  const especialidades = [
    {
      nombre: "Medicina general",
      descripcion: "Chequeos y atención integral",
      icono: "medicina",
      color: "#1b5bff",
      fondo: "#e4edff"
    },
    {
      nombre: "Pediatría",
      descripcion: "Salud y control infantil",
      icono: "pediatria",
      color: "#d9822b",
      fondo: "#fff1de"
    },
    {
      nombre: "Ginecología",
      descripcion: "Salud de la mujer",
      icono: "ginecologia",
      color: "#d9446b",
      fondo: "#ffe6ee"
    },
    {
      nombre: "Dermatología",
      descripcion: "Cuidado de la piel",
      icono: "piel",
      color: "#c0455f",
      fondo: "#ffe9ec"
    },
    {
      nombre: "Traumatología",
      descripcion: "Huesos y articulaciones",
      icono: "huesos",
      color: "#1b78ff",
      fondo: "#e1efff"
    },
    {
      nombre: "Cardiología",
      descripcion: "Salud cardiovascular",
      icono: "corazon",
      color: "#e0405a",
      fondo: "#ffe6ea"
    },
    {
      nombre: "Psiquiatría",
      descripcion: "Bienestar emocional",
      icono: "cerebro",
      color: "#2563eb",
      fondo: "#e1e9ff"
    },
    {
      nombre: "Neurología",
      descripcion: "Salud del sistema nervioso",
      icono: "cerebro",
      color: "#1b5bff",
      fondo: "#e4edff"
    }
  ];

  /* PERFILES ACADÉMICOS */
  const nombres = [
    [
      "Dr. Luis Pérez",
      "Dra. Camila Soto",
      "Dra. Elena Ruiz",
      "Dr. Carlos Medina",
      "Dra. Lucía Castro"
    ],
    [
      "Dr. Miguel Ramírez",
      "Dra. Ana Torres",
      "Dra. Paula Vega",
      "Dr. Diego Silva",
      "Dra. Rosa Herrera"
    ],
    [
      "Dr. Andrés Rojas",
      "Dra. Valeria Gómez",
      "Dra. Isabel León",
      "Dr. Jorge Paredes",
      "Dra. Sofía Flores"
    ],
    [
      "Dr. Martín Salas",
      "Dra. Daniela Cruz",
      "Dra. Mariana Díaz",
      "Dr. Sergio Vidal",
      "Dra. Patricia Ramos"
    ],
    [
      "Dr. Rafael Ortiz",
      "Dra. Andrea Luna",
      "Dra. Beatriz Ríos",
      "Dr. Fernando Mora",
      "Dra. Teresa Paz"
    ],
    [
      "Dr. Eduardo Gil",
      "Dra. Claudia Solís",
      "Dra. Natalia Reyes",
      "Dr. Manuel Costa",
      "Dra. Victoria Lara"
    ],
    [
      "Dr. Ricardo Peña",
      "Dra. Alicia Campos",
      "Dra. Gabriela Núñez",
      "Dr. Alberto Fuentes",
      "Dra. Julia Bravo"
    ],
    [
      "Dr. Óscar Molina",
      "Dra. Cristina Arias",
      "Dra. Mónica Aguilar",
      "Dr. Pablo Santos",
      "Dra. Carmen Ibáñez"
    ]
  ];

  const medicos = especialidades.flatMap(
    (especialidad, indiceEspecialidad) =>
      nombres[indiceEspecialidad].map((nombre, indice) => ({
        id: `med-${indiceEspecialidad}-${indice}`,
        nombre,
        especialidad: especialidad.nombre,
        foto: `assets/medicos/med-${indiceEspecialidad}-${indice}.jpg`,
        valoracion: (
          4.5 + ((indiceEspecialidad + indice) % 5) / 10
        ).toFixed(1),
        opiniones: 24 + indiceEspecialidad * 7 + indice * 13,
        precio: 80 + indiceEspecialidad * 10 + indice * 15,
        disponibleHoy: indice % 3 !== 2,
        experiencia: 6 + indice * 2
      }))
  );

  let limite = 6;
  let medicoSeleccionado = null;
  let temporizador;

  const CLAVE = "medicgo-bookings-v2";

  /* NOTIFICACIONES */
  function notificar(mensaje) {
    $("#toast").textContent = mensaje;
    $("#toast").classList.add("show");

    clearTimeout(temporizador);

    temporizador = setTimeout(() => {
      $("#toast").classList.remove("show");
    }, 3500);
  }

  /* GUARDADO LOCAL */
  function cargarReservas() {
    try {
      const lista = JSON.parse(
        localStorage.getItem(CLAVE) || "[]"
      );

      if (!Array.isArray(lista)) return [];

      return lista.filter(reserva =>
        reserva &&
        typeof reserva.id === "string" &&
        typeof reserva.doctor === "string" &&
        typeof reserva.date === "string" &&
        typeof reserva.time === "string"
      );
    } catch {
      return [];
    }
  }

  function guardarReservas(lista) {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(lista));
      return true;
    } catch {
      notificar(
        "No se pudo guardar. Revisa el almacenamiento de tu navegador."
      );
      return false;
    }
  }

  /* FECHAS */
  function fechaISO(fecha) {
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const dia = String(fecha.getDate()).padStart(2, "0");

    return `${año}-${mes}-${dia}`;
  }

  function fechaLegible(fecha) {
    return new Date(`${fecha}T12:00:00`).toLocaleDateString(
      "es-PE",
      {
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    );
  }

  function primeraFecha(medico) {
    const fecha = new Date();

    if (!medico.disponibleHoy) {
      fecha.setDate(fecha.getDate() + 1);
    }

    return fechaISO(fecha);
  }

  function ultimaFecha() {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + 60);
    return fechaISO(fecha);
  }

  function imagenMedico(medico, clase = "doctor-photo") {
    return `
      <img
        class="${clase}"
        src="${esc(medico.foto)}"
        alt="Fotografía ilustrativa de ${esc(medico.nombre)}"
        loading="lazy"
      >
    `;
  }

  /* MOSTRAR ESPECIALIDADES */
  function mostrarEspecialidades() {
    $("#tiles").innerHTML = especialidades.map(especialidad => `
      <a
        class="tile"
        href="#medicos"
        data-specialty="${esc(especialidad.nombre)}"
        style="
          --c:${especialidad.color};
          --t:${especialidad.fondo};
        "
      >
        <span class="ic">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            ${iconos[especialidad.icono]}
          </svg>
        </span>

        <span>
          <b>${esc(especialidad.nombre)}</b>
          <small>${esc(especialidad.descripcion)}</small>
        </span>
      </a>
    `).join("");
  }

  /* MOSTRAR Y FILTRAR MÉDICOS */
  function mostrarMedicos() {
    const busqueda = normalizar($("#search").value.trim());
    const especialidad = $("#specialty").value;
    const disponibilidad = $("#availability").value;
    const orden = $("#sort").value;

    const lista = medicos.filter(medico => {
      const coincideEspecialidad =
        !especialidad ||
        medico.especialidad === especialidad;

      const coincideBusqueda = normalizar(
        `${medico.nombre} ${medico.especialidad}`
      ).includes(busqueda);

      const coincideDisponibilidad =
        !disponibilidad ||
        (
          disponibilidad === "today"
            ? medico.disponibleHoy
            : !medico.disponibleHoy
        );

      return (
        coincideEspecialidad &&
        coincideBusqueda &&
        coincideDisponibilidad
      );
    });

    lista.sort((a, b) => {
      if (orden === "low") return a.precio - b.precio;
      if (orden === "high") return b.precio - a.precio;

      return Number(b.valoracion) - Number(a.valoracion);
    });

    $("#result-count").textContent =
      `${lista.length} médicos encontrados`;

    $("#docs").innerHTML = lista.slice(0, limite).map(medico => `
      <article class="doc">
        ${imagenMedico(medico)}

        <div class="doc-top">
          <div>
            <h3>${esc(medico.nombre)}</h3>
            <p class="sp">${esc(medico.especialidad)}</p>
          </div>
        </div>

        <span class="pill">
          ${
            medico.disponibleHoy
              ? "Disponible hoy"
              : "Disponible desde mañana"
          }
        </span>

        <p>
          ★ ${medico.valoracion}
          · ${medico.opiniones} valoraciones
        </p>

        <p class="price">
          S/ ${medico.precio}
          <small> / consulta</small>
        </p>

        <button
          class="btn"
          type="button"
          data-profile="${medico.id}"
        >
          Ver perfil
        </button>
      </article>
    `).join("");

    $("#no-doc").hidden = lista.length > 0;
    $("#load-more").hidden = lista.length <= limite;
  }

  /* PERFIL */
  function abrirPerfil(id) {
    medicoSeleccionado = medicos.find(medico =>
      medico.id === id
    );

    if (!medicoSeleccionado) return;

    const medico = medicoSeleccionado;

    $("#profile-content").innerHTML = `
      ${imagenMedico(medico, "profile-photo")}

      <span class="eyebrow">
        ${esc(medico.especialidad)}
      </span>

      <h2 id="profile-title">${esc(medico.nombre)}</h2>

      <p>
        ★ ${medico.valoracion}
        · ${medico.opiniones} valoraciones
      </p>

      <p class="profile-bio">
        Un espacio para cuidar de ti. Consulta este perfil
        y elige un horario de atención en
        ${esc(medico.especialidad.toLowerCase())}.
      </p>

      <div class="profile-stats">
        <div>
          <b>${medico.experiencia} años</b>
          <small>Experiencia referencial</small>
        </div>

        <div>
          <b>S/ ${medico.precio}</b>
          <small>Tarifa por consulta</small>
        </div>
      </div>

      <p class="hint">
        Perfil académico. Fotografía e información ilustrativas.
      </p>

      <button
        class="btn big full"
        id="start-reservation"
        type="button"
      >
        Elegir fecha y hora
      </button>
    `;

    $("#profile-dialog").showModal();
  }

  /* FORMULARIO DE RESERVA */
  function abrirReserva() {
    if (!medicoSeleccionado) return;

    $("#profile-dialog").close();

    const medico = medicoSeleccionado;

    $("#reserve-content").innerHTML = `
      <span class="eyebrow">Agenda tu atención</span>

      <h2 id="reserve-title">Elige fecha y hora</h2>

      <p>
        ${esc(medico.nombre)}
        · ${esc(medico.especialidad)}
      </p>

      <form id="reservation-form">
        <label class="field">
          Fecha
          <input
            id="date"
            type="date"
            min="${primeraFecha(medico)}"
            max="${ultimaFecha()}"
            value="${primeraFecha(medico)}"
            required
          >
        </label>

        <fieldset>
          <legend>Horarios disponibles</legend>
          <div class="time-grid" id="time-grid"></div>
        </fieldset>

        <div class="summary">
          <b>Resumen de tu reserva</b>
          <p>${esc(medico.nombre)}</p>

          <p id="chosen-summary">
            Selecciona un horario
          </p>

          <p>
            Tarifa referencial: S/ ${medico.precio}
            · Sin cobro en línea
          </p>
        </div>

        <p class="hint">
          Esta reserva es simulada y no solicita
          una visita médica real.
        </p>

        <p id="form-error" role="alert"></p>

        <button class="btn big full" type="submit">
          Confirmar reserva simulada
        </button>
      </form>
    `;

    $("#reserve-dialog").showModal();

    mostrarHorarios();

    $("#date").addEventListener("change", mostrarHorarios);

    $("#reservation-form").addEventListener(
      "submit",
      confirmarReserva
    );
  }

  /* HORARIOS */
  function mostrarHorarios() {
    const dia = $("#date").value;
    const ahora = new Date();

    const ocupados = cargarReservas().filter(reserva =>
      reserva.doctorId === medicoSeleccionado.id &&
      reserva.date === dia &&
      reserva.status !== "cancelada"
    );

    const horas = [
      "08:00",
      "09:30",
      "11:00",
      "12:30",
      "14:00",
      "15:30",
      "17:00",
      "18:30"
    ];

    $("#time-grid").innerHTML = horas.map(hora => {
      const pasado =
        !dia ||
        new Date(`${dia}T${hora}`) <= ahora;

      const ocupado = ocupados.some(reserva =>
        reserva.time === hora
      );

      return `
        <label class="time-slot">
          <input
            type="radio"
            name="time"
            value="${hora}"
            required
            ${pasado || ocupado ? "disabled" : ""}
          >
          <span>${hora}</span>
        </label>
      `;
    }).join("");

    $("#chosen-summary").textContent = dia
      ? `${fechaLegible(dia)} · Selecciona una hora`
      : "Selecciona una fecha";

    $("#time-grid").onchange = evento => {
      $("#chosen-summary").textContent =
        `${fechaLegible(dia)} · ${evento.target.value}`;
    };
  }

  /* CONFIRMACIÓN */
  function confirmarReserva(evento) {
    evento.preventDefault();

    const medico = medicoSeleccionado;
    const fecha = $("#date").value;
    const hora = new FormData(evento.target).get("time");
    const lista = cargarReservas();

    if (
      !hora ||
      !fecha ||
      fecha < primeraFecha(medico) ||
      fecha > ultimaFecha() ||
      new Date(`${fecha}T${hora}`) <= new Date()
    ) {
      $("#form-error").textContent =
        "Selecciona una fecha y un horario futuro.";
      return;
    }

    const duplicada = lista.some(reserva =>
      reserva.doctorId === medico.id &&
      reserva.date === fecha &&
      reserva.time === hora &&
      reserva.status !== "cancelada"
    );

    if (duplicada) {
      $("#form-error").textContent =
        "Ya tienes una reserva en ese horario. Elige otro.";

      mostrarHorarios();
      return;
    }

    const reserva = {
      id: "MG-" + Date.now().toString(36).toUpperCase(),
      doctorId: medico.id,
      doctor: medico.nombre,
      specialty: medico.especialidad,
      date: fecha,
      time: hora,
      price: medico.precio,
      status: "confirmada"
    };

    if (!guardarReservas([reserva, ...lista])) return;

    mostrarReservas();

    $("#reserve-content").innerHTML = `
      <div class="success-icon">✓</div>

      <h2 id="reserve-title">¡Tu reserva está lista!</h2>

      <p class="muted">Código ${esc(reserva.id)}</p>

      <div class="summary">
        <h3>${esc(medico.nombre)}</h3>
        <p>${esc(medico.especialidad)}</p>
        <p>${fechaLegible(fecha)} · ${esc(hora)}</p>
        <p>S/ ${medico.precio} · Tarifa referencial</p>
      </div>

      <p>
        Reserva simulada. No se ha solicitado una atención
        médica real ni realizado un pago.
      </p>

      <button
        class="btn big full"
        id="view-bookings"
        type="button"
      >
        Ver mis reservas
      </button>
    `;
  }

  /* LISTA DE RESERVAS */
  function mostrarReservas() {
    const lista = cargarReservas();

    $("#clear").hidden = lista.length === 0;

    if (lista.length === 0) {
      $("#bookings").innerHTML = `
        <div class="noreserv">
          <h3>Aún no tienes reservas</h3>

          <p>
            Elige una especialidad y encuentra un horario para ti.
          </p>

          <a class="btn" href="#medicos">
            Buscar médico
          </a>
        </div>
      `;
      return;
    }

    $("#bookings").innerHTML = lista.map(reserva => `
      <article class="booking">
        <div>
          <h3>${esc(reserva.doctor)}</h3>

          <p>
            ${esc(reserva.specialty)}
            · ${esc(fechaLegible(reserva.date))}
            · ${esc(reserva.time)}
          </p>

          <p>${esc(reserva.id)}</p>
        </div>

        <span class="tag ${
          reserva.status === "cancelada" ? "x" : ""
        }">
          ${
            reserva.status === "cancelada"
              ? "Cancelada"
              : "Simulada"
          }
        </span>

        ${
          reserva.status === "cancelada"
            ? ""
            : `
              <button
                class="btn2"
                type="button"
                data-cancel="${esc(reserva.id)}"
              >
                Cancelar reserva
              </button>
            `
        }
      </article>
    `).join("");
  }

  /* OPCIONES DEL FILTRO */
  $("#specialty").insertAdjacentHTML(
    "beforeend",
    especialidades.map(especialidad => `
      <option value="${esc(especialidad.nombre)}">
        ${esc(especialidad.nombre)}
      </option>
    `).join("")
  );

  ["specialty", "availability", "sort"].forEach(id => {
    $("#" + id).addEventListener("change", () => {
      limite = 6;
      mostrarMedicos();
    });
  });

  /* BUSCADOR */
  $("#search").addEventListener("input", () => {
    limite = 6;
    mostrarMedicos();
  });

  $("#search-form").addEventListener("submit", evento => {
    evento.preventDefault();

    $("#medicos").scrollIntoView({
      behavior: "smooth"
    });
  });

  /* VER MÁS */
  $("#load-more").onclick = () => {
    limite += 6;
    mostrarMedicos();
  };

  /* LIMPIAR FILTROS */
  $("#reset-filters").onclick = () => {
    $("#search").value = "";
    $("#specialty").value = "";
    $("#availability").value = "";
    $("#sort").value = "recommended";

    limite = 6;
    mostrarMedicos();
  };

  /* BOTONES DE TARJETAS Y VENTANAS */
  document.addEventListener("click", evento => {
    const especialidad = evento.target.closest(
      "[data-specialty]"
    );

    const perfil = evento.target.closest("[data-profile]");
    const cancelar = evento.target.closest("[data-cancel]");
    const cerrar = evento.target.closest("[data-close]");

    if (especialidad) {
      $("#specialty").value = especialidad.dataset.specialty;
      $("#search").value = "";
      $("#availability").value = "";

      limite = 6;
      mostrarMedicos();
    }

    if (perfil) {
      abrirPerfil(perfil.dataset.profile);
    }

    if (cerrar) {
      cerrar.closest("dialog").close();
    }

    if (evento.target.closest("#start-reservation")) {
      abrirReserva();
    }

    if (evento.target.closest("#view-bookings")) {
      $("#reserve-dialog").close();

      $("#mis-reservas").scrollIntoView({
        behavior: "smooth"
      });
    }

    if (cancelar) {
      if (!confirm("¿Cancelar esta reserva?")) return;

      const lista = cargarReservas();

      const reserva = lista.find(item =>
        item.id === cancelar.dataset.cancel
      );

      if (reserva) {
        reserva.status = "cancelada";
      }

      if (guardarReservas(lista)) {
        mostrarReservas();
        notificar("Reserva cancelada.");
      }
    }
  });

  /* BORRAR RESERVAS */
  $("#clear").onclick = () => {
    if (!confirm("¿Borrar todas las reservas de este navegador?")) {
      return;
    }

    if (guardarReservas([])) {
      mostrarReservas();
      notificar("Reservas borradas.");
    }
  };

  /* MENÚ EN CELULAR */
  const botonMenu = $("#menu-btn");
  const navegacion = $("#main-nav");

  function cambiarMenu(abierto) {
    navegacion.classList.toggle("open", abierto);

    botonMenu.setAttribute(
      "aria-expanded",
      String(abierto)
    );

    botonMenu.setAttribute(
      "aria-label",
      abierto ? "Cerrar menú" : "Abrir menú"
    );
  }

  botonMenu.onclick = () => {
    cambiarMenu(!navegacion.classList.contains("open"));
  };

  navegacion.addEventListener("click", evento => {
    if (evento.target.closest("a")) {
      cambiarMenu(false);
    }
  });

  document.addEventListener("keydown", evento => {
    if (evento.key === "Escape") {
      cambiarMenu(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      cambiarMenu(false);
    }
  });

  window.addEventListener("storage", mostrarReservas);

  /* IMAGEN ALTERNATIVA */
  document.addEventListener("error", evento => {
    const imagen = evento.target;

    if (
      imagen.tagName === "IMG" &&
      !imagen.src.endsWith("/assets/fallback.svg")
    ) {
      imagen.src = "assets/fallback.svg";
    }
  }, true);

  /* INICIAR */
  mostrarEspecialidades();
  mostrarMedicos();
  mostrarReservas();
})();
