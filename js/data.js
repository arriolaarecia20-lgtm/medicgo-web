/* Catálogo académico compartido por todas las páginas. */
window.MedicGO = {
  "iconos": {
    "medicina": "\n      <path d=\"M5 3v6a4 4 0 0 0 8 0V3\"/>\n      <path d=\"M9 13v1.5a5.5 5.5 0 0 0 11 0V13\"/>\n      <circle cx=\"20\" cy=\"11\" r=\"2\"/>\n    ",
    "pediatria": "\n      <circle cx=\"12\" cy=\"12\" r=\"9\"/>\n      <path d=\"M8.5 14.5a4.5 4.5 0 0 0 7 0\"/>\n      <path d=\"M9 9.5h.01M15 9.5h.01\"/>\n    ",
    "ginecologia": "\n      <circle cx=\"12\" cy=\"9\" r=\"5\"/>\n      <path d=\"M12 14v8M9 18h6\"/>\n    ",
    "piel": "\n      <path d=\"M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z\"/>\n    ",
    "huesos": "\n      <path d=\"M7 7a2.5 2.5 0 1 1-2.5-2.5A2.5 2.5 0 0 1 7 7l10 10a2.5 2.5 0 1 1 2.5 2.5A2.5 2.5 0 0 1 17 17L7 7z\"/>\n    ",
    "corazon": "\n      <path d=\"M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z\"/>\n      <path d=\"M8 12h2l1.5-2 2 4 1.5-2h1\"/>\n    ",
    "cerebro": "\n      <path d=\"M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 3 3 3 0 0 0 1.5 2.6A3 3 0 0 0 8 17a3 3 0 0 0 4 2V4.5A3 3 0 0 0 9 4zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 3 3 3 0 0 1-1.5 2.6A3 3 0 0 1 16 17a3 3 0 0 1-4 2V4.5A3 3 0 0 1 15 4z\"/>\n    ",
    "cerebroPsiquiatria": "M4 12a8 8 0 1 1 16 0c0 3-2 5-5 6v3H8v-4H4v-5zM10 10c0-3 4-3 4 0 0 2-2 2-2 4m0 2h.01",
    "especialidad8": "<path d=\"M12 3v5m-3-3h6M7 22v-6l3-5h4l3 5v6M10 16v6m4-6v6M5 10h14\"/>",
    "especialidad9": "<path d=\"M12 3v18M5 7c0-4 5-4 7 0 2-4 7-4 7 0s-5 4-7 0c-2 4-7 4-7 0M6 16h12m-9-3v6m6-6v6\"/>",
    "especialidad10": "<path d=\"M8 3h8v4H8zM6 5H4v17h16V5h-2M8 12h8m-4-4v8\"/>",
    "especialidad11": "<path d=\"M9 3v6c-4 0-6 3-5 7s6 6 10 4 7-8 4-11c-2-2-4-1-5 1V3M8 16c3 0 3-4 6-3\"/>",
    "especialidad12": "<path d=\"M12 3v8m0-4-3 3C5 5 2 13 3 18c1 4 6 2 7-1V9m2-2 3 3c4-5 7 3 6 8-1 4-6 2-7-1V9\"/>",
    "especialidad13": "<path d=\"M4 4l6 6m4 4 6 6M7 3 3 7l5 5m8 0 5 5-4 4-5-5M9 9l6 6m-7 0 7-7\"/>",
    "especialidad14": "<path d=\"M8 3v8m8-8v8M6 12c0-4 12-4 12 0 0 5-3 7-6 7s-6-2-6-7m6 7v3\"/>",
    "especialidad15": "<path d=\"M8 4C3 1 1 10 4 15s6 3 6-1V8c0-2-2-1-2-4zm8 0c5-3 7 6 4 11s-6 3-6-1V8c0-2 2-1 2-4zM10 12h4\"/>",
    "especialidad16": "<path d=\"M9 18c-1-3-5-3-5-8a8 8 0 0 1 16 0c0 5-5 5-5 9a3 3 0 0 1-6-1M9 10a3 3 0 0 1 6 0c0 2-3 2-3 5\"/>",
    "especialidad17": "<path d=\"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0\"/>",
    "especialidad18": "<path d=\"M12 3v18M3 12h18M5 5l14 14M5 19 19 5M9 3l3 3 3-3M3 9l3 3-3 3m6 6 3-3 3 3m6-12-3 3 3 3\"/>",
    "especialidad19": "<path d=\"M2 11 12 3l10 8M5 10v11h14V10M9 21v-6h6v6M9 10h6m-3-3v6\"/>"
  },
  "especialidades": [
    {
      "nombre": "Medicina general",
      "descripcion": "Atención integral y orientación inicial",
      "icono": "medicina",
      "color": "#1b5bff",
      "fondo": "#e4edff",
      "detalle": "Evaluación general, revisión de antecedentes y orientación para el seguimiento de la salud en casa.",
      "tema": "cuidados generales"
    },
    {
      "nombre": "Pediatría",
      "descripcion": "Acompañamiento de la salud infantil",
      "icono": "pediatria",
      "color": "#d9822b",
      "fondo": "#fff1de",
      "detalle": "Consulta de seguimiento del crecimiento y revisión de inquietudes sobre los cuidados cotidianos de niñas y niños.",
      "tema": "crecimiento y cuidados infantiles"
    },
    {
      "nombre": "Ginecología",
      "descripcion": "Orientación en salud ginecológica",
      "icono": "ginecologia",
      "color": "#d9446b",
      "fondo": "#ffe6ee",
      "detalle": "Revisión de antecedentes y orientación en salud ginecológica. Las pruebas y procedimientos que requieren equipamiento se realizan en un centro.",
      "tema": "antecedentes ginecológicos"
    },
    {
      "nombre": "Dermatología",
      "descripcion": "Orientación para el cuidado de la piel",
      "icono": "piel",
      "color": "#c0455f",
      "fondo": "#ffe9ec",
      "detalle": "Revisión clínica de inquietudes sobre piel, cabello y uñas, con orientación para su seguimiento.",
      "tema": "cuidados de la piel"
    },
    {
      "nombre": "Traumatología",
      "descripcion": "Evaluación de huesos y articulaciones",
      "icono": "huesos",
      "color": "#1b78ff",
      "fondo": "#e1efff",
      "detalle": "Consulta para revisar molestias del aparato locomotor y el seguimiento de la movilidad cotidiana.",
      "tema": "movilidad cotidiana"
    },
    {
      "nombre": "Cardiología",
      "descripcion": "Seguimiento de la salud cardiovascular",
      "icono": "corazon",
      "color": "#e0405a",
      "fondo": "#ffe6ea",
      "detalle": "Revisión de antecedentes, informes y hábitos relacionados con la salud cardiovascular.",
      "tema": "antecedentes cardiovasculares"
    },
    {
      "nombre": "Psiquiatría",
      "descripcion": "Acompañamiento de la salud mental",
      "icono": "cerebroPsiquiatria",
      "color": "#2563eb",
      "fondo": "#e1e9ff",
      "detalle": "Consulta para conversar sobre bienestar emocional, revisar antecedentes y organizar un seguimiento individual.",
      "tema": "bienestar emocional"
    },
    {
      "nombre": "Neurología",
      "descripcion": "Seguimiento del sistema nervioso",
      "icono": "cerebro",
      "color": "#1b5bff",
      "fondo": "#e4edff",
      "detalle": "Evaluación clínica y revisión de antecedentes neurológicos, con orientación sobre el seguimiento y los cuidados en casa.",
      "tema": "seguimiento neurológico"
    },
    {
      "nombre": "Geriatría",
      "descripcion": "Acompañamiento integral de las personas mayores",
      "detalle": "Seguimiento del bienestar y de las rutinas de cuidado de personas mayores en su entorno familiar.",
      "tema": "movilidad y rutinas diarias",
      "icono": "especialidad8",
      "color": "#1b5bff",
      "fondo": "#e4edff"
    },
    {
      "nombre": "Endocrinología",
      "descripcion": "Seguimiento hormonal y metabólico",
      "detalle": "Revisión de antecedentes y seguimiento de condiciones hormonales y metabólicas con orientación para el cuidado cotidiano.",
      "tema": "hábitos y seguimiento metabólico",
      "icono": "especialidad9",
      "color": "#1b5bff",
      "fondo": "#e4edff"
    },
    {
      "nombre": "Medicina interna",
      "descripcion": "Atención integral de personas adultas",
      "detalle": "Evaluación clínica de personas adultas y revisión conjunta de antecedentes, tratamientos y necesidades de seguimiento.",
      "tema": "antecedentes y tratamientos",
      "icono": "especialidad10",
      "color": "#1b5bff",
      "fondo": "#e4edff"
    },
    {
      "nombre": "Gastroenterología",
      "descripcion": "Orientación sobre salud digestiva",
      "detalle": "Consulta para revisar molestias digestivas, antecedentes y hábitos. Los estudios instrumentales requieren un centro adecuado.",
      "tema": "hábitos y molestias digestivas",
      "icono": "especialidad11",
      "color": "#1b5bff",
      "fondo": "#e4edff"
    },
    {
      "nombre": "Neumología",
      "descripcion": "Seguimiento de la salud respiratoria",
      "detalle": "Revisión clínica de síntomas y antecedentes respiratorios y acompañamiento de su seguimiento en casa.",
      "tema": "síntomas y rutinas respiratorias",
      "icono": "especialidad12",
      "color": "#1b5bff",
      "fondo": "#e4edff"
    },
    {
      "nombre": "Reumatología",
      "descripcion": "Cuidado de articulaciones y movilidad",
      "detalle": "Evaluación de molestias articulares y seguimiento de condiciones reumatológicas con atención a las actividades diarias.",
      "tema": "movilidad y molestias articulares",
      "icono": "especialidad13",
      "color": "#1b5bff",
      "fondo": "#e4edff"
    },
    {
      "nombre": "Urología",
      "descripcion": "Orientación sobre salud urinaria",
      "detalle": "Consulta para revisar antecedentes y molestias urinarias. Los procedimientos y estudios especializados se realizan en centros adecuados.",
      "tema": "antecedentes y salud urinaria",
      "icono": "especialidad14",
      "color": "#1b5bff",
      "fondo": "#e4edff"
    },
    {
      "nombre": "Nefrología",
      "descripcion": "Seguimiento del cuidado renal",
      "detalle": "Revisión de antecedentes, informes disponibles y hábitos relacionados con el cuidado renal y su seguimiento.",
      "tema": "informes y cuidado renal",
      "icono": "especialidad15",
      "color": "#1b5bff",
      "fondo": "#e4edff"
    },
    {
      "nombre": "Otorrinolaringología",
      "descripcion": "Oído, nariz y garganta",
      "detalle": "Orientación clínica sobre molestias de oído, nariz y garganta; las exploraciones que requieren equipamiento se derivan a un centro.",
      "tema": "molestias de oído, nariz y garganta",
      "icono": "especialidad16",
      "color": "#1b5bff",
      "fondo": "#e4edff"
    },
    {
      "nombre": "Oftalmología",
      "descripcion": "Orientación y seguimiento visual",
      "detalle": "Revisión de antecedentes visuales y orientación inicial. Las pruebas con aparatos y procedimientos se realizan en un centro especializado.",
      "tema": "antecedentes y necesidades visuales",
      "icono": "especialidad17",
      "color": "#1b5bff",
      "fondo": "#e4edff"
    },
    {
      "nombre": "Alergología",
      "descripcion": "Seguimiento de síntomas alérgicos",
      "detalle": "Consulta para revisar antecedentes, síntomas y posibles desencadenantes. Las pruebas y procedimientos requieren instalaciones adecuadas.",
      "tema": "síntomas y posibles desencadenantes",
      "icono": "especialidad18",
      "color": "#1b5bff",
      "fondo": "#e4edff"
    },
    {
      "nombre": "Medicina familiar",
      "descripcion": "Cuidado continuo de toda la familia",
      "detalle": "Acompañamiento de diferentes etapas de la vida y orientación sobre cuidados, prevención y continuidad de la atención familiar.",
      "tema": "rutinas de cuidado familiar",
      "icono": "especialidad19",
      "color": "#1b5bff",
      "fondo": "#e4edff"
    }
  ],
  "medicos": [
    {
      "id": "med-0-0",
      "nombre": "Dr. Luis Pérez",
      "especialidad": "Medicina general",
      "foto": "assets/medicos/med-0-0.jpg",
      "descripcion": "Evaluación general, revisión de antecedentes y orientación para el seguimiento de la salud en casa.",
      "experiencia": 6,
      "precio": 80,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-0-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-03",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Luis Pérez sobre cuidados generales, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-0-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-08",
          "puntuacion": 4,
          "aspecto": "Escucha atenta",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Luis Pérez sobre cuidados generales, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-0-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-13",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Luis Pérez sobre cuidados generales, tuvo paciencia cuando pedí repetir una explicación."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-0-1",
      "nombre": "Dra. Camila Soto",
      "especialidad": "Medicina general",
      "foto": "assets/medicos/med-0-1.jpg",
      "descripcion": "Evaluación general, revisión de antecedentes y orientación para el seguimiento de la salud en casa.",
      "experiencia": 8,
      "precio": 95,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-1-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-04",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Camila Soto sobre cuidados generales, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-1-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-09",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Camila Soto sobre cuidados generales, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-1-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-14",
          "puntuacion": 3,
          "aspecto": "Organización",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Camila Soto sobre cuidados generales, revisó conmigo los antecedentes de forma ordenada. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-1-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-19",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Camila Soto sobre cuidados generales, la conversación comenzó a la hora acordada."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-0-2",
      "nombre": "Dra. Elena Ruiz",
      "especialidad": "Medicina general",
      "foto": "assets/medicos/med-0-2.jpg",
      "descripcion": "Evaluación general, revisión de antecedentes y orientación para el seguimiento de la salud en casa.",
      "experiencia": 10,
      "precio": 110,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-2-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-05",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Elena Ruiz sobre cuidados generales, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-2-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-10",
          "puntuacion": 3,
          "aspecto": "Claridad al explicar",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Elena Ruiz sobre cuidados generales, resumió los puntos que habíamos comentado antes de terminar. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-2-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-15",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Elena Ruiz sobre cuidados generales, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-2-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-20",
          "puntuacion": 4,
          "aspecto": "Escucha atenta",
          "texto": "Me escuchó con atención. En la consulta con Dra. Elena Ruiz sobre cuidados generales, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-2-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-25",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Elena Ruiz sobre cuidados generales, tuvo paciencia cuando pedí repetir una explicación."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.4
    },
    {
      "id": "med-0-3",
      "nombre": "Dr. Carlos Medina",
      "especialidad": "Medicina general",
      "foto": "assets/medicos/med-0-3.jpg",
      "descripcion": "Evaluación general, revisión de antecedentes y orientación para el seguimiento de la salud en casa.",
      "experiencia": 12,
      "precio": 125,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-3-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-06",
          "puntuacion": 3,
          "aspecto": "Escucha atenta",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Carlos Medina sobre cuidados generales, me permitió detallar mis inquietudes sin interrumpirme. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-3-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-11",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Carlos Medina sobre cuidados generales, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-3-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-16",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Me escuchó con atención. En la consulta con Dr. Carlos Medina sobre cuidados generales, escuchó mis preguntas y respondió con respeto."
        }
      ],
      "opiniones": 3,
      "valoracion": 4
    },
    {
      "id": "med-0-4",
      "nombre": "Dra. Lucía Castro",
      "especialidad": "Medicina general",
      "foto": "assets/medicos/med-0-4.jpg",
      "descripcion": "Evaluación general, revisión de antecedentes y orientación para el seguimiento de la salud en casa.",
      "experiencia": 14,
      "precio": 140,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-4-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-07",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Lucía Castro sobre cuidados generales, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-4-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-12",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Me escuchó con atención. En la consulta con Dra. Lucía Castro sobre cuidados generales, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-4-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-17",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Lucía Castro sobre cuidados generales, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-4-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-22",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Lucía Castro sobre cuidados generales, resumió los puntos que habíamos comentado antes de terminar."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.8
    },
    {
      "id": "med-1-0",
      "nombre": "Dr. Miguel Ramírez",
      "especialidad": "Pediatría",
      "foto": "assets/medicos/med-1-0.jpg",
      "descripcion": "Consulta de seguimiento del crecimiento y revisión de inquietudes sobre los cuidados cotidianos de niñas y niños.",
      "experiencia": 6,
      "precio": 90,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-5-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-08",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Me escuchó con atención. En la consulta con Dr. Miguel Ramírez sobre crecimiento y cuidados infantiles, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-5-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-13",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Miguel Ramírez sobre crecimiento y cuidados infantiles, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-5-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-18",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Miguel Ramírez sobre crecimiento y cuidados infantiles, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-5-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-23",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Miguel Ramírez sobre crecimiento y cuidados infantiles, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-5-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-04",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Miguel Ramírez sobre crecimiento y cuidados infantiles, escuchó mis preguntas y respondió con respeto."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.6
    },
    {
      "id": "med-1-1",
      "nombre": "Dra. Ana Torres",
      "especialidad": "Pediatría",
      "foto": "assets/medicos/med-1-1.jpg",
      "descripcion": "Consulta de seguimiento del crecimiento y revisión de inquietudes sobre los cuidados cotidianos de niñas y niños.",
      "experiencia": 8,
      "precio": 105,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-6-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-09",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Ana Torres sobre crecimiento y cuidados infantiles, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-6-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-14",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Ana Torres sobre crecimiento y cuidados infantiles, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-6-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-19",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Ana Torres sobre crecimiento y cuidados infantiles, dejó claro qué información convenía tener para la próxima consulta."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-1-2",
      "nombre": "Dra. Paula Vega",
      "especialidad": "Pediatría",
      "foto": "assets/medicos/med-1-2.jpg",
      "descripcion": "Consulta de seguimiento del crecimiento y revisión de inquietudes sobre los cuidados cotidianos de niñas y niños.",
      "experiencia": 10,
      "precio": 120,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-7-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-10",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Paula Vega sobre crecimiento y cuidados infantiles, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-7-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-15",
          "puntuacion": 4,
          "aspecto": "Puntualidad",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Paula Vega sobre crecimiento y cuidados infantiles, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-7-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-20",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Paula Vega sobre crecimiento y cuidados infantiles, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-7-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-25",
          "puntuacion": 3,
          "aspecto": "Claridad al explicar",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Paula Vega sobre crecimiento y cuidados infantiles, explicó con palabras sencillas lo que revisaríamos en el seguimiento. Me habría gustado disponer de un resumen más breve al final."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-1-3",
      "nombre": "Dr. Diego Silva",
      "especialidad": "Pediatría",
      "foto": "assets/medicos/med-1-3.jpg",
      "descripcion": "Consulta de seguimiento del crecimiento y revisión de inquietudes sobre los cuidados cotidianos de niñas y niños.",
      "experiencia": 12,
      "precio": 135,
      "disponibleHoy": true,
      "resenas": [],
      "opiniones": 0,
      "valoracion": null
    },
    {
      "id": "med-1-4",
      "nombre": "Dra. Rosa Herrera",
      "especialidad": "Pediatría",
      "foto": "assets/medicos/med-1-4.jpg",
      "descripcion": "Consulta de seguimiento del crecimiento y revisión de inquietudes sobre los cuidados cotidianos de niñas y niños.",
      "experiencia": 14,
      "precio": 150,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-9-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-12",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Rosa Herrera sobre crecimiento y cuidados infantiles, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-9-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-17",
          "puntuacion": 3,
          "aspecto": "Organización",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Rosa Herrera sobre crecimiento y cuidados infantiles, dejó claro qué información convenía tener para la próxima consulta. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-9-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-22",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Rosa Herrera sobre crecimiento y cuidados infantiles, revisó conmigo los antecedentes de forma ordenada."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.3
    },
    {
      "id": "med-2-0",
      "nombre": "Dr. Andrés Rojas",
      "especialidad": "Ginecología",
      "foto": "assets/medicos/med-2-0.jpg",
      "descripcion": "Revisión de antecedentes y orientación en salud ginecológica. Las pruebas y procedimientos que requieren equipamiento se realizan en un centro.",
      "experiencia": 6,
      "precio": 100,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-10-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-13",
          "puntuacion": 3,
          "aspecto": "Puntualidad",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Andrés Rojas sobre antecedentes ginecológicos, la conversación comenzó a la hora acordada. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-10-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-18",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Andrés Rojas sobre antecedentes ginecológicos, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-10-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-23",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Andrés Rojas sobre antecedentes ginecológicos, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-10-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-04",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Me escuchó con atención. En la consulta con Dr. Andrés Rojas sobre antecedentes ginecológicos, me permitió detallar mis inquietudes sin interrumpirme."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-2-1",
      "nombre": "Dra. Valeria Gómez",
      "especialidad": "Ginecología",
      "foto": "assets/medicos/med-2-1.jpg",
      "descripcion": "Revisión de antecedentes y orientación en salud ginecológica. Las pruebas y procedimientos que requieren equipamiento se realizan en un centro.",
      "experiencia": 8,
      "precio": 115,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-11-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-14",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Valeria Gómez sobre antecedentes ginecológicos, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-11-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-19",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Valeria Gómez sobre antecedentes ginecológicos, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-11-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-24",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Me escuchó con atención. En la consulta con Dra. Valeria Gómez sobre antecedentes ginecológicos, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-11-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-05",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Valeria Gómez sobre antecedentes ginecológicos, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-11-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-10",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Valeria Gómez sobre antecedentes ginecológicos, revisó conmigo los antecedentes de forma ordenada."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.6
    },
    {
      "id": "med-2-2",
      "nombre": "Dra. Isabel León",
      "especialidad": "Ginecología",
      "foto": "assets/medicos/med-2-2.jpg",
      "descripcion": "Revisión de antecedentes y orientación en salud ginecológica. Las pruebas y procedimientos que requieren equipamiento se realizan en un centro.",
      "experiencia": 10,
      "precio": 130,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-12-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-15",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Isabel León sobre antecedentes ginecológicos, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-12-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-20",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Me escuchó con atención. En la consulta con Dra. Isabel León sobre antecedentes ginecológicos, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-12-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-25",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Isabel León sobre antecedentes ginecológicos, la conversación comenzó a la hora acordada."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-2-3",
      "nombre": "Dr. Jorge Paredes",
      "especialidad": "Ginecología",
      "foto": "assets/medicos/med-2-3.jpg",
      "descripcion": "Revisión de antecedentes y orientación en salud ginecológica. Las pruebas y procedimientos que requieren equipamiento se realizan en un centro.",
      "experiencia": 12,
      "precio": 145,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-13-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-16",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Me escuchó con atención. En la consulta con Dr. Jorge Paredes sobre antecedentes ginecológicos, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-13-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-21",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Jorge Paredes sobre antecedentes ginecológicos, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-13-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-26",
          "puntuacion": 4,
          "aspecto": "Escucha atenta",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Jorge Paredes sobre antecedentes ginecológicos, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-13-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-07",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Jorge Paredes sobre antecedentes ginecológicos, tuvo paciencia cuando pedí repetir una explicación."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.8
    },
    {
      "id": "med-2-4",
      "nombre": "Dra. Sofía Flores",
      "especialidad": "Ginecología",
      "foto": "assets/medicos/med-2-4.jpg",
      "descripcion": "Revisión de antecedentes y orientación en salud ginecológica. Las pruebas y procedimientos que requieren equipamiento se realizan en un centro.",
      "experiencia": 14,
      "precio": 160,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-14-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-17",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Sofía Flores sobre antecedentes ginecológicos, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-14-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-22",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Sofía Flores sobre antecedentes ginecológicos, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-14-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-03",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Sofía Flores sobre antecedentes ginecológicos, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-14-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-08",
          "puntuacion": 3,
          "aspecto": "Organización",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Sofía Flores sobre antecedentes ginecológicos, revisó conmigo los antecedentes de forma ordenada. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-14-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-13",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Sofía Flores sobre antecedentes ginecológicos, la conversación comenzó a la hora acordada."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.4
    },
    {
      "id": "med-3-0",
      "nombre": "Dr. Martín Salas",
      "especialidad": "Dermatología",
      "foto": "assets/medicos/med-3-0.jpg",
      "descripcion": "Revisión clínica de inquietudes sobre piel, cabello y uñas, con orientación para su seguimiento.",
      "experiencia": 6,
      "precio": 110,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-15-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-18",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Martín Salas sobre cuidados de la piel, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-15-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-23",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Martín Salas sobre cuidados de la piel, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-15-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-04",
          "puntuacion": 3,
          "aspecto": "Claridad al explicar",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Martín Salas sobre cuidados de la piel, resumió los puntos que habíamos comentado antes de terminar. Me habría gustado disponer de un resumen más breve al final."
        }
      ],
      "opiniones": 3,
      "valoracion": 4
    },
    {
      "id": "med-3-1",
      "nombre": "Dra. Daniela Cruz",
      "especialidad": "Dermatología",
      "foto": "assets/medicos/med-3-1.jpg",
      "descripcion": "Revisión clínica de inquietudes sobre piel, cabello y uñas, con orientación para su seguimiento.",
      "experiencia": 8,
      "precio": 125,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-16-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-19",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Daniela Cruz sobre cuidados de la piel, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-16-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-24",
          "puntuacion": 3,
          "aspecto": "Escucha atenta",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Daniela Cruz sobre cuidados de la piel, me permitió detallar mis inquietudes sin interrumpirme. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-16-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-05",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Daniela Cruz sobre cuidados de la piel, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-16-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-10",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Daniela Cruz sobre cuidados de la piel, escuchó mis preguntas y respondió con respeto."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-3-2",
      "nombre": "Dra. Mariana Díaz",
      "especialidad": "Dermatología",
      "foto": "assets/medicos/med-3-2.jpg",
      "descripcion": "Revisión clínica de inquietudes sobre piel, cabello y uñas, con orientación para su seguimiento.",
      "experiencia": 10,
      "precio": 140,
      "disponibleHoy": false,
      "resenas": [],
      "opiniones": 0,
      "valoracion": null
    },
    {
      "id": "med-3-3",
      "nombre": "Dr. Sergio Vidal",
      "especialidad": "Dermatología",
      "foto": "assets/medicos/med-3-3.jpg",
      "descripcion": "Revisión clínica de inquietudes sobre piel, cabello y uñas, con orientación para su seguimiento.",
      "experiencia": 12,
      "precio": 155,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-18-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-21",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Sergio Vidal sobre cuidados de la piel, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-18-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-26",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Sergio Vidal sobre cuidados de la piel, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-18-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-07",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Sergio Vidal sobre cuidados de la piel, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-3-4",
      "nombre": "Dra. Patricia Ramos",
      "especialidad": "Dermatología",
      "foto": "assets/medicos/med-3-4.jpg",
      "descripcion": "Revisión clínica de inquietudes sobre piel, cabello y uñas, con orientación para su seguimiento.",
      "experiencia": 14,
      "precio": 170,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-19-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-22",
          "puntuacion": 4,
          "aspecto": "Escucha atenta",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Patricia Ramos sobre cuidados de la piel, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-19-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-03",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Patricia Ramos sobre cuidados de la piel, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-19-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-08",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Me escuchó con atención. En la consulta con Dra. Patricia Ramos sobre cuidados de la piel, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-19-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-13",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Patricia Ramos sobre cuidados de la piel, dejó claro qué información convenía tener para la próxima consulta."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.5
    },
    {
      "id": "med-4-0",
      "nombre": "Dr. Rafael Ortiz",
      "especialidad": "Traumatología",
      "foto": "assets/medicos/med-4-0.jpg",
      "descripcion": "Consulta para revisar molestias del aparato locomotor y el seguimiento de la movilidad cotidiana.",
      "experiencia": 6,
      "precio": 120,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-20-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-23",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Rafael Ortiz sobre movilidad cotidiana, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-20-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-04",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Me escuchó con atención. En la consulta con Dr. Rafael Ortiz sobre movilidad cotidiana, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-20-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-09",
          "puntuacion": 4,
          "aspecto": "Puntualidad",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Rafael Ortiz sobre movilidad cotidiana, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-20-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-14",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Rafael Ortiz sobre movilidad cotidiana, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-20-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-19",
          "puntuacion": 3,
          "aspecto": "Claridad al explicar",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Rafael Ortiz sobre movilidad cotidiana, explicó con palabras sencillas lo que revisaríamos en el seguimiento. Me habría gustado disponer de un resumen más breve al final."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.4
    },
    {
      "id": "med-4-1",
      "nombre": "Dra. Andrea Luna",
      "especialidad": "Traumatología",
      "foto": "assets/medicos/med-4-1.jpg",
      "descripcion": "Consulta para revisar molestias del aparato locomotor y el seguimiento de la movilidad cotidiana.",
      "experiencia": 8,
      "precio": 135,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-21-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-24",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Me escuchó con atención. En la consulta con Dra. Andrea Luna sobre movilidad cotidiana, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-21-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-05",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Andrea Luna sobre movilidad cotidiana, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-21-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-10",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Andrea Luna sobre movilidad cotidiana, me permitió detallar mis inquietudes sin interrumpirme."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-4-2",
      "nombre": "Dra. Beatriz Ríos",
      "especialidad": "Traumatología",
      "foto": "assets/medicos/med-4-2.jpg",
      "descripcion": "Consulta para revisar molestias del aparato locomotor y el seguimiento de la movilidad cotidiana.",
      "experiencia": 10,
      "precio": 150,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-22-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-25",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Beatriz Ríos sobre movilidad cotidiana, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-22-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-06",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Beatriz Ríos sobre movilidad cotidiana, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-22-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-11",
          "puntuacion": 3,
          "aspecto": "Organización",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Beatriz Ríos sobre movilidad cotidiana, dejó claro qué información convenía tener para la próxima consulta. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-22-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-16",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Beatriz Ríos sobre movilidad cotidiana, revisó conmigo los antecedentes de forma ordenada."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-4-3",
      "nombre": "Dr. Fernando Mora",
      "especialidad": "Traumatología",
      "foto": "assets/medicos/med-4-3.jpg",
      "descripcion": "Consulta para revisar molestias del aparato locomotor y el seguimiento de la movilidad cotidiana.",
      "experiencia": 12,
      "precio": 165,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-23-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-26",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Fernando Mora sobre movilidad cotidiana, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-23-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-07",
          "puntuacion": 3,
          "aspecto": "Puntualidad",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Fernando Mora sobre movilidad cotidiana, la conversación comenzó a la hora acordada. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-23-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-12",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Fernando Mora sobre movilidad cotidiana, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-23-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-17",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Fernando Mora sobre movilidad cotidiana, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-23-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-22",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Fernando Mora sobre movilidad cotidiana, me permitió detallar mis inquietudes sin interrumpirme."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.4
    },
    {
      "id": "med-4-4",
      "nombre": "Dra. Teresa Paz",
      "especialidad": "Traumatología",
      "foto": "assets/medicos/med-4-4.jpg",
      "descripcion": "Consulta para revisar molestias del aparato locomotor y el seguimiento de la movilidad cotidiana.",
      "experiencia": 14,
      "precio": 180,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-24-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-03",
          "puntuacion": 3,
          "aspecto": "Claridad al explicar",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Teresa Paz sobre movilidad cotidiana, explicó con palabras sencillas lo que revisaríamos en el seguimiento. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-24-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-08",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Teresa Paz sobre movilidad cotidiana, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-24-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-13",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Teresa Paz sobre movilidad cotidiana, tuvo paciencia cuando pedí repetir una explicación."
        }
      ],
      "opiniones": 3,
      "valoracion": 4
    },
    {
      "id": "med-5-0",
      "nombre": "Dr. Eduardo Gil",
      "especialidad": "Cardiología",
      "foto": "assets/medicos/med-5-0.jpg",
      "descripcion": "Revisión de antecedentes, informes y hábitos relacionados con la salud cardiovascular.",
      "experiencia": 6,
      "precio": 130,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-25-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-04",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Eduardo Gil sobre antecedentes cardiovasculares, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-25-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-09",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Eduardo Gil sobre antecedentes cardiovasculares, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-25-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-14",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Eduardo Gil sobre antecedentes cardiovasculares, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-25-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-19",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Eduardo Gil sobre antecedentes cardiovasculares, la conversación comenzó a la hora acordada."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.8
    },
    {
      "id": "med-5-1",
      "nombre": "Dra. Claudia Solís",
      "especialidad": "Cardiología",
      "foto": "assets/medicos/med-5-1.jpg",
      "descripcion": "Revisión de antecedentes, informes y hábitos relacionados con la salud cardiovascular.",
      "experiencia": 8,
      "precio": 145,
      "disponibleHoy": true,
      "resenas": [],
      "opiniones": 0,
      "valoracion": null
    },
    {
      "id": "med-5-2",
      "nombre": "Dra. Natalia Reyes",
      "especialidad": "Cardiología",
      "foto": "assets/medicos/med-5-2.jpg",
      "descripcion": "Revisión de antecedentes, informes y hábitos relacionados con la salud cardiovascular.",
      "experiencia": 10,
      "precio": 160,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-27-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-06",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Natalia Reyes sobre antecedentes cardiovasculares, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-27-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-11",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Natalia Reyes sobre antecedentes cardiovasculares, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-27-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-16",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Me escuchó con atención. En la consulta con Dra. Natalia Reyes sobre antecedentes cardiovasculares, escuchó mis preguntas y respondió con respeto."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-5-3",
      "nombre": "Dr. Manuel Costa",
      "especialidad": "Cardiología",
      "foto": "assets/medicos/med-5-3.jpg",
      "descripcion": "Revisión de antecedentes, informes y hábitos relacionados con la salud cardiovascular.",
      "experiencia": 12,
      "precio": 175,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-28-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-07",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Manuel Costa sobre antecedentes cardiovasculares, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-28-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-12",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Me escuchó con atención. En la consulta con Dr. Manuel Costa sobre antecedentes cardiovasculares, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-28-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-17",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Manuel Costa sobre antecedentes cardiovasculares, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-28-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-22",
          "puntuacion": 3,
          "aspecto": "Claridad al explicar",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Manuel Costa sobre antecedentes cardiovasculares, resumió los puntos que habíamos comentado antes de terminar. Me habría gustado disponer de un resumen más breve al final."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-5-4",
      "nombre": "Dra. Victoria Lara",
      "especialidad": "Cardiología",
      "foto": "assets/medicos/med-5-4.jpg",
      "descripcion": "Revisión de antecedentes, informes y hábitos relacionados con la salud cardiovascular.",
      "experiencia": 14,
      "precio": 190,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-29-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-08",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Me escuchó con atención. En la consulta con Dra. Victoria Lara sobre antecedentes cardiovasculares, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-29-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-13",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Victoria Lara sobre antecedentes cardiovasculares, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-29-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-18",
          "puntuacion": 3,
          "aspecto": "Escucha atenta",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Victoria Lara sobre antecedentes cardiovasculares, me permitió detallar mis inquietudes sin interrumpirme. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-29-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-23",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Victoria Lara sobre antecedentes cardiovasculares, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-29-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-04",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Victoria Lara sobre antecedentes cardiovasculares, escuchó mis preguntas y respondió con respeto."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.2
    },
    {
      "id": "med-6-0",
      "nombre": "Dr. Ricardo Peña",
      "especialidad": "Psiquiatría",
      "foto": "assets/medicos/med-6-0.jpg",
      "descripcion": "Consulta para conversar sobre bienestar emocional, revisar antecedentes y organizar un seguimiento individual.",
      "experiencia": 6,
      "precio": 140,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-30-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-09",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Ricardo Peña sobre bienestar emocional, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-30-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-14",
          "puntuacion": 3,
          "aspecto": "Trato amable",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Ricardo Peña sobre bienestar emocional, escuchó mis preguntas y respondió con respeto. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-30-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-19",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Ricardo Peña sobre bienestar emocional, dejó claro qué información convenía tener para la próxima consulta."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.3
    },
    {
      "id": "med-6-1",
      "nombre": "Dra. Alicia Campos",
      "especialidad": "Psiquiatría",
      "foto": "assets/medicos/med-6-1.jpg",
      "descripcion": "Consulta para conversar sobre bienestar emocional, revisar antecedentes y organizar un seguimiento individual.",
      "experiencia": 8,
      "precio": 155,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-31-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-10",
          "puntuacion": 3,
          "aspecto": "Organización",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Alicia Campos sobre bienestar emocional, revisó conmigo los antecedentes de forma ordenada. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-31-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-15",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Alicia Campos sobre bienestar emocional, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-31-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-20",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Alicia Campos sobre bienestar emocional, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-31-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-25",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Alicia Campos sobre bienestar emocional, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-6-2",
      "nombre": "Dra. Gabriela Núñez",
      "especialidad": "Psiquiatría",
      "foto": "assets/medicos/med-6-2.jpg",
      "descripcion": "Consulta para conversar sobre bienestar emocional, revisar antecedentes y organizar un seguimiento individual.",
      "experiencia": 10,
      "precio": 170,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-32-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-11",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Gabriela Núñez sobre bienestar emocional, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-32-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-16",
          "puntuacion": 4,
          "aspecto": "Escucha atenta",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Gabriela Núñez sobre bienestar emocional, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-32-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-21",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Gabriela Núñez sobre bienestar emocional, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-32-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-26",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Gabriela Núñez sobre bienestar emocional, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-32-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-07",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Gabriela Núñez sobre bienestar emocional, dejó claro qué información convenía tener para la próxima consulta."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.6
    },
    {
      "id": "med-6-3",
      "nombre": "Dr. Alberto Fuentes",
      "especialidad": "Psiquiatría",
      "foto": "assets/medicos/med-6-3.jpg",
      "descripcion": "Consulta para conversar sobre bienestar emocional, revisar antecedentes y organizar un seguimiento individual.",
      "experiencia": 12,
      "precio": 185,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-33-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-12",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Alberto Fuentes sobre bienestar emocional, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-33-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-17",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Alberto Fuentes sobre bienestar emocional, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-33-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-22",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Alberto Fuentes sobre bienestar emocional, revisó conmigo los antecedentes de forma ordenada."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-6-4",
      "nombre": "Dra. Julia Bravo",
      "especialidad": "Psiquiatría",
      "foto": "assets/medicos/med-6-4.jpg",
      "descripcion": "Consulta para conversar sobre bienestar emocional, revisar antecedentes y organizar un seguimiento individual.",
      "experiencia": 14,
      "precio": 200,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-34-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-13",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Julia Bravo sobre bienestar emocional, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-34-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-18",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Julia Bravo sobre bienestar emocional, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-34-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-23",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Julia Bravo sobre bienestar emocional, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-34-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-04",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Me escuchó con atención. En la consulta con Dra. Julia Bravo sobre bienestar emocional, me permitió detallar mis inquietudes sin interrumpirme."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.8
    },
    {
      "id": "med-7-0",
      "nombre": "Dr. Óscar Molina",
      "especialidad": "Neurología",
      "foto": "assets/medicos/med-7-0.jpg",
      "descripcion": "Evaluación clínica y revisión de antecedentes neurológicos, con orientación sobre el seguimiento y los cuidados en casa.",
      "experiencia": 6,
      "precio": 150,
      "disponibleHoy": true,
      "resenas": [],
      "opiniones": 0,
      "valoracion": null
    },
    {
      "id": "med-7-1",
      "nombre": "Dra. Cristina Arias",
      "especialidad": "Neurología",
      "foto": "assets/medicos/med-7-1.jpg",
      "descripcion": "Evaluación clínica y revisión de antecedentes neurológicos, con orientación sobre el seguimiento y los cuidados en casa.",
      "experiencia": 8,
      "precio": 165,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-36-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-15",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Cristina Arias sobre seguimiento neurológico, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-36-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-20",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Me escuchó con atención. En la consulta con Dra. Cristina Arias sobre seguimiento neurológico, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-36-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-25",
          "puntuacion": 3,
          "aspecto": "Puntualidad",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Cristina Arias sobre seguimiento neurológico, la conversación comenzó a la hora acordada. Me habría gustado disponer de un resumen más breve al final."
        }
      ],
      "opiniones": 3,
      "valoracion": 4
    },
    {
      "id": "med-7-2",
      "nombre": "Dra. Mónica Aguilar",
      "especialidad": "Neurología",
      "foto": "assets/medicos/med-7-2.jpg",
      "descripcion": "Evaluación clínica y revisión de antecedentes neurológicos, con orientación sobre el seguimiento y los cuidados en casa.",
      "experiencia": 10,
      "precio": 180,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-37-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-16",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Me escuchó con atención. En la consulta con Dra. Mónica Aguilar sobre seguimiento neurológico, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-37-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-21",
          "puntuacion": 3,
          "aspecto": "Claridad al explicar",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Mónica Aguilar sobre seguimiento neurológico, explicó con palabras sencillas lo que revisaríamos en el seguimiento. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-37-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-26",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Mónica Aguilar sobre seguimiento neurológico, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-37-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-07",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Mónica Aguilar sobre seguimiento neurológico, tuvo paciencia cuando pedí repetir una explicación."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-7-3",
      "nombre": "Dr. Pablo Santos",
      "especialidad": "Neurología",
      "foto": "assets/medicos/med-7-3.jpg",
      "descripcion": "Evaluación clínica y revisión de antecedentes neurológicos, con orientación sobre el seguimiento y los cuidados en casa.",
      "experiencia": 12,
      "precio": 195,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-38-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-17",
          "puntuacion": 3,
          "aspecto": "Trato amable",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Pablo Santos sobre seguimiento neurológico, tuvo paciencia cuando pedí repetir una explicación. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-38-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-22",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Pablo Santos sobre seguimiento neurológico, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-38-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-03",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Pablo Santos sobre seguimiento neurológico, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-38-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-08",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Pablo Santos sobre seguimiento neurológico, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-38-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-13",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Pablo Santos sobre seguimiento neurológico, la conversación comenzó a la hora acordada."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.4
    },
    {
      "id": "med-7-4",
      "nombre": "Dra. Carmen Ibáñez",
      "especialidad": "Neurología",
      "foto": "assets/medicos/med-7-4.jpg",
      "descripcion": "Evaluación clínica y revisión de antecedentes neurológicos, con orientación sobre el seguimiento y los cuidados en casa.",
      "experiencia": 14,
      "precio": 210,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-39-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-18",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Carmen Ibáñez sobre seguimiento neurológico, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-39-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-23",
          "puntuacion": 4,
          "aspecto": "Puntualidad",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Carmen Ibáñez sobre seguimiento neurológico, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-39-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-04",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Carmen Ibáñez sobre seguimiento neurológico, resumió los puntos que habíamos comentado antes de terminar."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-8-0",
      "nombre": "Dr. Gabriel Acosta",
      "especialidad": "Geriatría",
      "foto": "assets/medicos/med-8-0.jpg",
      "descripcion": "Seguimiento del bienestar y de las rutinas de cuidado de personas mayores en su entorno familiar.",
      "experiencia": 11,
      "precio": 164,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-40-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-19",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Gabriel Acosta sobre movilidad y rutinas diarias, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-40-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-24",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Gabriel Acosta sobre movilidad y rutinas diarias, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-40-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-05",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Gabriel Acosta sobre movilidad y rutinas diarias, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-40-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-10",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Gabriel Acosta sobre movilidad y rutinas diarias, escuchó mis preguntas y respondió con respeto."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.5
    },
    {
      "id": "med-8-1",
      "nombre": "Dr. Nicolás Cárdenas",
      "especialidad": "Geriatría",
      "foto": "assets/medicos/med-8-1.jpg",
      "descripcion": "Seguimiento del bienestar y de las rutinas de cuidado de personas mayores en su entorno familiar.",
      "experiencia": 12,
      "precio": 179,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-41-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-20",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Nicolás Cárdenas sobre movilidad y rutinas diarias, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-41-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-25",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Nicolás Cárdenas sobre movilidad y rutinas diarias, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-41-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-06",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Nicolás Cárdenas sobre movilidad y rutinas diarias, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-41-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-11",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Nicolás Cárdenas sobre movilidad y rutinas diarias, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-41-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-16",
          "puntuacion": 3,
          "aspecto": "Claridad al explicar",
          "texto": "Me escuchó con atención. En la consulta con Dr. Nicolás Cárdenas sobre movilidad y rutinas diarias, resumió los puntos que habíamos comentado antes de terminar. Me habría gustado disponer de un resumen más breve al final."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.4
    },
    {
      "id": "med-8-2",
      "nombre": "Dra. Inés Cordero",
      "especialidad": "Geriatría",
      "foto": "assets/medicos/med-8-2.jpg",
      "descripcion": "Seguimiento del bienestar y de las rutinas de cuidado de personas mayores en su entorno familiar.",
      "experiencia": 13,
      "precio": 194,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-42-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-21",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Inés Cordero sobre movilidad y rutinas diarias, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-42-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-26",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Inés Cordero sobre movilidad y rutinas diarias, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-42-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-07",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Inés Cordero sobre movilidad y rutinas diarias, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-8-3",
      "nombre": "Dr. Sebastián Navarro",
      "especialidad": "Geriatría",
      "foto": "assets/medicos/med-8-3.jpg",
      "descripcion": "Seguimiento del bienestar y de las rutinas de cuidado de personas mayores en su entorno familiar.",
      "experiencia": 14,
      "precio": 209,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-43-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-22",
          "puntuacion": 4,
          "aspecto": "Escucha atenta",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Sebastián Navarro sobre movilidad y rutinas diarias, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-43-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-03",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Sebastián Navarro sobre movilidad y rutinas diarias, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-43-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-08",
          "puntuacion": 3,
          "aspecto": "Trato amable",
          "texto": "Me escuchó con atención. En la consulta con Dr. Sebastián Navarro sobre movilidad y rutinas diarias, escuchó mis preguntas y respondió con respeto. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-43-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-13",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Sebastián Navarro sobre movilidad y rutinas diarias, dejó claro qué información convenía tener para la próxima consulta."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-8-4",
      "nombre": "Dra. Fernanda Rivas",
      "especialidad": "Geriatría",
      "foto": "assets/medicos/med-8-4.jpg",
      "descripcion": "Seguimiento del bienestar y de las rutinas de cuidado de personas mayores en su entorno familiar.",
      "experiencia": 15,
      "precio": 224,
      "disponibleHoy": true,
      "resenas": [],
      "opiniones": 0,
      "valoracion": null
    },
    {
      "id": "med-9-0",
      "nombre": "Dr. Mauricio Escobar",
      "especialidad": "Endocrinología",
      "foto": "assets/medicos/med-9-0.jpg",
      "descripcion": "Revisión de antecedentes y seguimiento de condiciones hormonales y metabólicas con orientación para el cuidado cotidiano.",
      "experiencia": 16,
      "precio": 172,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-45-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-24",
          "puntuacion": 3,
          "aspecto": "Claridad al explicar",
          "texto": "Me escuchó con atención. En la consulta con Dr. Mauricio Escobar sobre hábitos y seguimiento metabólico, resumió los puntos que habíamos comentado antes de terminar. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-45-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-05",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Mauricio Escobar sobre hábitos y seguimiento metabólico, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-45-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-10",
          "puntuacion": 4,
          "aspecto": "Escucha atenta",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Mauricio Escobar sobre hábitos y seguimiento metabólico, me permitió detallar mis inquietudes sin interrumpirme."
        }
      ],
      "opiniones": 3,
      "valoracion": 4
    },
    {
      "id": "med-9-1",
      "nombre": "Dra. Julieta Quiroz",
      "especialidad": "Endocrinología",
      "foto": "assets/medicos/med-9-1.jpg",
      "descripcion": "Revisión de antecedentes y seguimiento de condiciones hormonales y metabólicas con orientación para el cuidado cotidiano.",
      "experiencia": 17,
      "precio": 187,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-46-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-25",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Julieta Quiroz sobre hábitos y seguimiento metabólico, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-46-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-06",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Julieta Quiroz sobre hábitos y seguimiento metabólico, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-46-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-11",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Julieta Quiroz sobre hábitos y seguimiento metabólico, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-46-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-16",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Julieta Quiroz sobre hábitos y seguimiento metabólico, revisó conmigo los antecedentes de forma ordenada."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.8
    },
    {
      "id": "med-9-2",
      "nombre": "Dr. Hugo Solano",
      "especialidad": "Endocrinología",
      "foto": "assets/medicos/med-9-2.jpg",
      "descripcion": "Revisión de antecedentes y seguimiento de condiciones hormonales y metabólicas con orientación para el cuidado cotidiano.",
      "experiencia": 18,
      "precio": 202,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-47-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-26",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Hugo Solano sobre hábitos y seguimiento metabólico, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-47-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-07",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Hugo Solano sobre hábitos y seguimiento metabólico, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-47-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-12",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Hugo Solano sobre hábitos y seguimiento metabólico, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-47-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-17",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Hugo Solano sobre hábitos y seguimiento metabólico, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-47-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-22",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Hugo Solano sobre hábitos y seguimiento metabólico, me permitió detallar mis inquietudes sin interrumpirme."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.6
    },
    {
      "id": "med-9-3",
      "nombre": "Dra. Lorena Robles",
      "especialidad": "Endocrinología",
      "foto": "assets/medicos/med-9-3.jpg",
      "descripcion": "Revisión de antecedentes y seguimiento de condiciones hormonales y metabólicas con orientación para el cuidado cotidiano.",
      "experiencia": 7,
      "precio": 217,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-48-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-03",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Lorena Robles sobre hábitos y seguimiento metabólico, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-48-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-08",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Lorena Robles sobre hábitos y seguimiento metabólico, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-48-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-13",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Lorena Robles sobre hábitos y seguimiento metabólico, tuvo paciencia cuando pedí repetir una explicación."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-9-4",
      "nombre": "Dra. Micaela Galindo",
      "especialidad": "Endocrinología",
      "foto": "assets/medicos/med-9-4.jpg",
      "descripcion": "Revisión de antecedentes y seguimiento de condiciones hormonales y metabólicas con orientación para el cuidado cotidiano.",
      "experiencia": 8,
      "precio": 232,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-49-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-04",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Micaela Galindo sobre hábitos y seguimiento metabólico, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-49-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-09",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Micaela Galindo sobre hábitos y seguimiento metabólico, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-49-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-14",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Micaela Galindo sobre hábitos y seguimiento metabólico, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-49-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-19",
          "puntuacion": 3,
          "aspecto": "Puntualidad",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Micaela Galindo sobre hábitos y seguimiento metabólico, la conversación comenzó a la hora acordada. Me habría gustado disponer de un resumen más breve al final."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-10-0",
      "nombre": "Dra. Raquel Andrade",
      "especialidad": "Medicina interna",
      "foto": "assets/medicos/med-10-0.jpg",
      "descripcion": "Evaluación clínica de personas adultas y revisión conjunta de antecedentes, tratamientos y necesidades de seguimiento.",
      "experiencia": 9,
      "precio": 180,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-50-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-05",
          "puntuacion": 4,
          "aspecto": "Puntualidad",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Raquel Andrade sobre antecedentes y tratamientos, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-50-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-10",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Raquel Andrade sobre antecedentes y tratamientos, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-50-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-15",
          "puntuacion": 3,
          "aspecto": "Claridad al explicar",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Raquel Andrade sobre antecedentes y tratamientos, explicó con palabras sencillas lo que revisaríamos en el seguimiento. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-50-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-20",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Me escuchó con atención. En la consulta con Dra. Raquel Andrade sobre antecedentes y tratamientos, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-50-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-25",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Raquel Andrade sobre antecedentes y tratamientos, tuvo paciencia cuando pedí repetir una explicación."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.2
    },
    {
      "id": "med-10-1",
      "nombre": "Dr. Iván Carrillo",
      "especialidad": "Medicina interna",
      "foto": "assets/medicos/med-10-1.jpg",
      "descripcion": "Evaluación clínica de personas adultas y revisión conjunta de antecedentes, tratamientos y necesidades de seguimiento.",
      "experiencia": 10,
      "precio": 195,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-51-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-06",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Iván Carrillo sobre antecedentes y tratamientos, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-51-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-11",
          "puntuacion": 3,
          "aspecto": "Trato amable",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Iván Carrillo sobre antecedentes y tratamientos, tuvo paciencia cuando pedí repetir una explicación. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-51-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-16",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Me escuchó con atención. En la consulta con Dr. Iván Carrillo sobre antecedentes y tratamientos, escuchó mis preguntas y respondió con respeto."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.3
    },
    {
      "id": "med-10-2",
      "nombre": "Dra. Catalina Valdés",
      "especialidad": "Medicina interna",
      "foto": "assets/medicos/med-10-2.jpg",
      "descripcion": "Evaluación clínica de personas adultas y revisión conjunta de antecedentes, tratamientos y necesidades de seguimiento.",
      "experiencia": 11,
      "precio": 210,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-52-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-07",
          "puntuacion": 3,
          "aspecto": "Organización",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Catalina Valdés sobre antecedentes y tratamientos, dejó claro qué información convenía tener para la próxima consulta. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-52-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-12",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Me escuchó con atención. En la consulta con Dra. Catalina Valdés sobre antecedentes y tratamientos, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-52-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-17",
          "puntuacion": 4,
          "aspecto": "Puntualidad",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Catalina Valdés sobre antecedentes y tratamientos, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-52-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-22",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Catalina Valdés sobre antecedentes y tratamientos, resumió los puntos que habíamos comentado antes de terminar."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-10-3",
      "nombre": "Dra. Amalia Salcedo",
      "especialidad": "Medicina interna",
      "foto": "assets/medicos/med-10-3.jpg",
      "descripcion": "Evaluación clínica de personas adultas y revisión conjunta de antecedentes, tratamientos y necesidades de seguimiento.",
      "experiencia": 12,
      "precio": 225,
      "disponibleHoy": true,
      "resenas": [],
      "opiniones": 0,
      "valoracion": null
    },
    {
      "id": "med-10-4",
      "nombre": "Dr. Matías Duarte",
      "especialidad": "Medicina interna",
      "foto": "assets/medicos/med-10-4.jpg",
      "descripcion": "Evaluación clínica de personas adultas y revisión conjunta de antecedentes, tratamientos y necesidades de seguimiento.",
      "experiencia": 13,
      "precio": 240,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-54-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-09",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Matías Duarte sobre antecedentes y tratamientos, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-54-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-14",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Matías Duarte sobre antecedentes y tratamientos, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-54-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-19",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Matías Duarte sobre antecedentes y tratamientos, dejó claro qué información convenía tener para la próxima consulta."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-11-0",
      "nombre": "Dra. Leonor Ferrer",
      "especialidad": "Gastroenterología",
      "foto": "assets/medicos/med-11-0.jpg",
      "descripcion": "Consulta para revisar molestias digestivas, antecedentes y hábitos. Los estudios instrumentales requieren un centro adecuado.",
      "experiencia": 14,
      "precio": 188,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-55-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-10",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Leonor Ferrer sobre hábitos y molestias digestivas, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-55-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-15",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Leonor Ferrer sobre hábitos y molestias digestivas, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-55-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-20",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Leonor Ferrer sobre hábitos y molestias digestivas, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-55-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-25",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Leonor Ferrer sobre hábitos y molestias digestivas, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.8
    },
    {
      "id": "med-11-1",
      "nombre": "Dra. Florencia Benítez",
      "especialidad": "Gastroenterología",
      "foto": "assets/medicos/med-11-1.jpg",
      "descripcion": "Consulta para revisar molestias digestivas, antecedentes y hábitos. Los estudios instrumentales requieren un centro adecuado.",
      "experiencia": 15,
      "precio": 203,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-56-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-11",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Florencia Benítez sobre hábitos y molestias digestivas, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-56-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-16",
          "puntuacion": 4,
          "aspecto": "Escucha atenta",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Florencia Benítez sobre hábitos y molestias digestivas, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-56-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-21",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Florencia Benítez sobre hábitos y molestias digestivas, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-56-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-26",
          "puntuacion": 3,
          "aspecto": "Trato amable",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Florencia Benítez sobre hábitos y molestias digestivas, escuchó mis preguntas y respondió con respeto. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-56-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-07",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Florencia Benítez sobre hábitos y molestias digestivas, dejó claro qué información convenía tener para la próxima consulta."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.4
    },
    {
      "id": "med-11-2",
      "nombre": "Dra. Alba Villanueva",
      "especialidad": "Gastroenterología",
      "foto": "assets/medicos/med-11-2.jpg",
      "descripcion": "Consulta para revisar molestias digestivas, antecedentes y hábitos. Los estudios instrumentales requieren un centro adecuado.",
      "experiencia": 16,
      "precio": 218,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-57-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-12",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Alba Villanueva sobre hábitos y molestias digestivas, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-57-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-17",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Alba Villanueva sobre hábitos y molestias digestivas, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-57-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-22",
          "puntuacion": 3,
          "aspecto": "Organización",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Alba Villanueva sobre hábitos y molestias digestivas, revisó conmigo los antecedentes de forma ordenada. Me habría gustado disponer de un resumen más breve al final."
        }
      ],
      "opiniones": 3,
      "valoracion": 4
    },
    {
      "id": "med-11-3",
      "nombre": "Dra. Amelia Vera",
      "especialidad": "Gastroenterología",
      "foto": "assets/medicos/med-11-3.jpg",
      "descripcion": "Consulta para revisar molestias digestivas, antecedentes y hábitos. Los estudios instrumentales requieren un centro adecuado.",
      "experiencia": 17,
      "precio": 233,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-58-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-13",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Amelia Vera sobre hábitos y molestias digestivas, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-58-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-18",
          "puntuacion": 3,
          "aspecto": "Claridad al explicar",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Amelia Vera sobre hábitos y molestias digestivas, resumió los puntos que habíamos comentado antes de terminar. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-58-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-23",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Amelia Vera sobre hábitos y molestias digestivas, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-58-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-04",
          "puntuacion": 4,
          "aspecto": "Escucha atenta",
          "texto": "Me escuchó con atención. En la consulta con Dra. Amelia Vera sobre hábitos y molestias digestivas, me permitió detallar mis inquietudes sin interrumpirme."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-11-4",
      "nombre": "Dra. Carolina Campos",
      "especialidad": "Gastroenterología",
      "foto": "assets/medicos/med-11-4.jpg",
      "descripcion": "Consulta para revisar molestias digestivas, antecedentes y hábitos. Los estudios instrumentales requieren un centro adecuado.",
      "experiencia": 18,
      "precio": 248,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-59-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-14",
          "puntuacion": 3,
          "aspecto": "Escucha atenta",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Carolina Campos sobre hábitos y molestias digestivas, me permitió detallar mis inquietudes sin interrumpirme. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-59-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-19",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Carolina Campos sobre hábitos y molestias digestivas, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-59-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-24",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Me escuchó con atención. En la consulta con Dra. Carolina Campos sobre hábitos y molestias digestivas, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-59-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-05",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Carolina Campos sobre hábitos y molestias digestivas, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-59-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-10",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Carolina Campos sobre hábitos y molestias digestivas, revisó conmigo los antecedentes de forma ordenada."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.4
    },
    {
      "id": "med-12-0",
      "nombre": "Dra. Verónica Márquez",
      "especialidad": "Neumología",
      "foto": "assets/medicos/med-12-0.jpg",
      "descripcion": "Revisión clínica de síntomas y antecedentes respiratorios y acompañamiento de su seguimiento en casa.",
      "experiencia": 7,
      "precio": 196,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-60-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-15",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Verónica Márquez sobre síntomas y rutinas respiratorias, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-60-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-20",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Me escuchó con atención. En la consulta con Dra. Verónica Márquez sobre síntomas y rutinas respiratorias, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-60-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-25",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Verónica Márquez sobre síntomas y rutinas respiratorias, la conversación comenzó a la hora acordada."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-12-1",
      "nombre": "Dr. Rubén Céspedes",
      "especialidad": "Neumología",
      "foto": "assets/medicos/med-12-1.jpg",
      "descripcion": "Revisión clínica de síntomas y antecedentes respiratorios y acompañamiento de su seguimiento en casa.",
      "experiencia": 8,
      "precio": 211,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-61-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-16",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Me escuchó con atención. En la consulta con Dr. Rubén Céspedes sobre síntomas y rutinas respiratorias, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-61-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-21",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Rubén Céspedes sobre síntomas y rutinas respiratorias, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-61-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-26",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Rubén Céspedes sobre síntomas y rutinas respiratorias, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-61-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-07",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Rubén Céspedes sobre síntomas y rutinas respiratorias, tuvo paciencia cuando pedí repetir una explicación."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.5
    },
    {
      "id": "med-12-2",
      "nombre": "Dr. Alonso Osorio",
      "especialidad": "Neumología",
      "foto": "assets/medicos/med-12-2.jpg",
      "descripcion": "Revisión clínica de síntomas y antecedentes respiratorios y acompañamiento de su seguimiento en casa.",
      "experiencia": 9,
      "precio": 226,
      "disponibleHoy": false,
      "resenas": [],
      "opiniones": 0,
      "valoracion": null
    },
    {
      "id": "med-12-3",
      "nombre": "Dra. Pilar Becerra",
      "especialidad": "Neumología",
      "foto": "assets/medicos/med-12-3.jpg",
      "descripcion": "Revisión clínica de síntomas y antecedentes respiratorios y acompañamiento de su seguimiento en casa.",
      "experiencia": 10,
      "precio": 241,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-63-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-18",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Pilar Becerra sobre síntomas y rutinas respiratorias, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-63-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-23",
          "puntuacion": 4,
          "aspecto": "Puntualidad",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Pilar Becerra sobre síntomas y rutinas respiratorias, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-63-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-04",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Pilar Becerra sobre síntomas y rutinas respiratorias, resumió los puntos que habíamos comentado antes de terminar."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-12-4",
      "nombre": "Dr. Emilio Montes",
      "especialidad": "Neumología",
      "foto": "assets/medicos/med-12-4.jpg",
      "descripcion": "Revisión clínica de síntomas y antecedentes respiratorios y acompañamiento de su seguimiento en casa.",
      "experiencia": 11,
      "precio": 256,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-64-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-19",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Emilio Montes sobre síntomas y rutinas respiratorias, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-64-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-24",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Emilio Montes sobre síntomas y rutinas respiratorias, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-64-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-05",
          "puntuacion": 3,
          "aspecto": "Trato amable",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Emilio Montes sobre síntomas y rutinas respiratorias, tuvo paciencia cuando pedí repetir una explicación. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-64-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-10",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Emilio Montes sobre síntomas y rutinas respiratorias, escuchó mis preguntas y respondió con respeto."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-13-0",
      "nombre": "Dra. Jimena Zamora",
      "especialidad": "Reumatología",
      "foto": "assets/medicos/med-13-0.jpg",
      "descripcion": "Evaluación de molestias articulares y seguimiento de condiciones reumatológicas con atención a las actividades diarias.",
      "experiencia": 12,
      "precio": 204,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-65-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-20",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Jimena Zamora sobre movilidad y molestias articulares, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-65-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-25",
          "puntuacion": 3,
          "aspecto": "Organización",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Jimena Zamora sobre movilidad y molestias articulares, dejó claro qué información convenía tener para la próxima consulta. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-65-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-06",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Jimena Zamora sobre movilidad y molestias articulares, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-65-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-11",
          "puntuacion": 4,
          "aspecto": "Puntualidad",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Jimena Zamora sobre movilidad y molestias articulares, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-65-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-16",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Me escuchó con atención. En la consulta con Dra. Jimena Zamora sobre movilidad y molestias articulares, resumió los puntos que habíamos comentado antes de terminar."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.4
    },
    {
      "id": "med-13-1",
      "nombre": "Dr. Samuel Correa",
      "especialidad": "Reumatología",
      "foto": "assets/medicos/med-13-1.jpg",
      "descripcion": "Evaluación de molestias articulares y seguimiento de condiciones reumatológicas con atención a las actividades diarias.",
      "experiencia": 13,
      "precio": 219,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-66-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-21",
          "puntuacion": 3,
          "aspecto": "Puntualidad",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Samuel Correa sobre movilidad y molestias articulares, la conversación comenzó a la hora acordada. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-66-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-26",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Samuel Correa sobre movilidad y molestias articulares, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-66-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-07",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Samuel Correa sobre movilidad y molestias articulares, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        }
      ],
      "opiniones": 3,
      "valoracion": 4
    },
    {
      "id": "med-13-2",
      "nombre": "Dr. David Portillo",
      "especialidad": "Reumatología",
      "foto": "assets/medicos/med-13-2.jpg",
      "descripcion": "Evaluación de molestias articulares y seguimiento de condiciones reumatológicas con atención a las actividades diarias.",
      "experiencia": 14,
      "precio": 234,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-67-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-22",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. David Portillo sobre movilidad y molestias articulares, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-67-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-03",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. David Portillo sobre movilidad y molestias articulares, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-67-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-08",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Me escuchó con atención. En la consulta con Dr. David Portillo sobre movilidad y molestias articulares, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-67-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-13",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. David Portillo sobre movilidad y molestias articulares, dejó claro qué información convenía tener para la próxima consulta."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.8
    },
    {
      "id": "med-13-3",
      "nombre": "Dra. Clara Ocampo",
      "especialidad": "Reumatología",
      "foto": "assets/medicos/med-13-3.jpg",
      "descripcion": "Evaluación de molestias articulares y seguimiento de condiciones reumatológicas con atención a las actividades diarias.",
      "experiencia": 15,
      "precio": 249,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-68-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-23",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Clara Ocampo sobre movilidad y molestias articulares, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-68-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-04",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Me escuchó con atención. En la consulta con Dra. Clara Ocampo sobre movilidad y molestias articulares, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-68-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-09",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Clara Ocampo sobre movilidad y molestias articulares, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-68-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-14",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Clara Ocampo sobre movilidad y molestias articulares, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-68-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-19",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Clara Ocampo sobre movilidad y molestias articulares, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.6
    },
    {
      "id": "med-13-4",
      "nombre": "Dr. Tomás Cabrera",
      "especialidad": "Reumatología",
      "foto": "assets/medicos/med-13-4.jpg",
      "descripcion": "Evaluación de molestias articulares y seguimiento de condiciones reumatológicas con atención a las actividades diarias.",
      "experiencia": 16,
      "precio": 264,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-69-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-24",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Me escuchó con atención. En la consulta con Dr. Tomás Cabrera sobre movilidad y molestias articulares, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-69-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-05",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Tomás Cabrera sobre movilidad y molestias articulares, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-69-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-10",
          "puntuacion": 4,
          "aspecto": "Escucha atenta",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Tomás Cabrera sobre movilidad y molestias articulares, me permitió detallar mis inquietudes sin interrumpirme."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-14-0",
      "nombre": "Dra. Sara Acosta",
      "especialidad": "Urología",
      "foto": "assets/medicos/med-14-0.jpg",
      "descripcion": "Consulta para revisar antecedentes y molestias urinarias. Los procedimientos y estudios especializados se realizan en centros adecuados.",
      "experiencia": 17,
      "precio": 212,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-70-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-25",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Sara Acosta sobre antecedentes y salud urinaria, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-70-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-06",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Sara Acosta sobre antecedentes y salud urinaria, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-70-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-11",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Sara Acosta sobre antecedentes y salud urinaria, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-70-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-16",
          "puntuacion": 3,
          "aspecto": "Organización",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Sara Acosta sobre antecedentes y salud urinaria, revisó conmigo los antecedentes de forma ordenada. Me habría gustado disponer de un resumen más breve al final."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-14-1",
      "nombre": "Dr. Julián Cárdenas",
      "especialidad": "Urología",
      "foto": "assets/medicos/med-14-1.jpg",
      "descripcion": "Consulta para revisar antecedentes y molestias urinarias. Los procedimientos y estudios especializados se realizan en centros adecuados.",
      "experiencia": 18,
      "precio": 227,
      "disponibleHoy": true,
      "resenas": [],
      "opiniones": 0,
      "valoracion": null
    },
    {
      "id": "med-14-2",
      "nombre": "Dr. Esteban Cordero",
      "especialidad": "Urología",
      "foto": "assets/medicos/med-14-2.jpg",
      "descripcion": "Consulta para revisar antecedentes y molestias urinarias. Los procedimientos y estudios especializados se realizan en centros adecuados.",
      "experiencia": 7,
      "precio": 242,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-72-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-03",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Esteban Cordero sobre antecedentes y salud urinaria, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-72-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-08",
          "puntuacion": 3,
          "aspecto": "Escucha atenta",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Esteban Cordero sobre antecedentes y salud urinaria, me permitió detallar mis inquietudes sin interrumpirme. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-72-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-13",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Esteban Cordero sobre antecedentes y salud urinaria, tuvo paciencia cuando pedí repetir una explicación."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.3
    },
    {
      "id": "med-14-3",
      "nombre": "Dr. Daniel Navarro",
      "especialidad": "Urología",
      "foto": "assets/medicos/med-14-3.jpg",
      "descripcion": "Consulta para revisar antecedentes y molestias urinarias. Los procedimientos y estudios especializados se realizan en centros adecuados.",
      "experiencia": 8,
      "precio": 257,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-73-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-04",
          "puntuacion": 3,
          "aspecto": "Trato amable",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Daniel Navarro sobre antecedentes y salud urinaria, escuchó mis preguntas y respondió con respeto. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-73-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-09",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Daniel Navarro sobre antecedentes y salud urinaria, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-73-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-14",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Daniel Navarro sobre antecedentes y salud urinaria, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-73-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-19",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Daniel Navarro sobre antecedentes y salud urinaria, la conversación comenzó a la hora acordada."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-14-4",
      "nombre": "Dr. Alejandro Rivas",
      "especialidad": "Urología",
      "foto": "assets/medicos/med-14-4.jpg",
      "descripcion": "Consulta para revisar antecedentes y molestias urinarias. Los procedimientos y estudios especializados se realizan en centros adecuados.",
      "experiencia": 9,
      "precio": 272,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-74-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-05",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Alejandro Rivas sobre antecedentes y salud urinaria, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-74-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-10",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Alejandro Rivas sobre antecedentes y salud urinaria, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-74-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-15",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Alejandro Rivas sobre antecedentes y salud urinaria, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-74-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-20",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Me escuchó con atención. En la consulta con Dr. Alejandro Rivas sobre antecedentes y salud urinaria, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-74-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-25",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Alejandro Rivas sobre antecedentes y salud urinaria, tuvo paciencia cuando pedí repetir una explicación."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.6
    },
    {
      "id": "med-15-0",
      "nombre": "Dra. Silvia Escobar",
      "especialidad": "Nefrología",
      "foto": "assets/medicos/med-15-0.jpg",
      "descripcion": "Revisión de antecedentes, informes disponibles y hábitos relacionados con el cuidado renal y su seguimiento.",
      "experiencia": 10,
      "precio": 220,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-75-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-06",
          "puntuacion": 4,
          "aspecto": "Escucha atenta",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Silvia Escobar sobre informes y cuidado renal, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-75-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-11",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Silvia Escobar sobre informes y cuidado renal, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-75-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-16",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Me escuchó con atención. En la consulta con Dra. Silvia Escobar sobre informes y cuidado renal, escuchó mis preguntas y respondió con respeto."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-15-1",
      "nombre": "Dra. Regina Quiroz",
      "especialidad": "Nefrología",
      "foto": "assets/medicos/med-15-1.jpg",
      "descripcion": "Revisión de antecedentes, informes disponibles y hábitos relacionados con el cuidado renal y su seguimiento.",
      "experiencia": 11,
      "precio": 235,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-76-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-07",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Regina Quiroz sobre informes y cuidado renal, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-76-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-12",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Me escuchó con atención. En la consulta con Dra. Regina Quiroz sobre informes y cuidado renal, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-76-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-17",
          "puntuacion": 4,
          "aspecto": "Puntualidad",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Regina Quiroz sobre informes y cuidado renal, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-76-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-22",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Regina Quiroz sobre informes y cuidado renal, resumió los puntos que habíamos comentado antes de terminar."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.8
    },
    {
      "id": "med-15-2",
      "nombre": "Dr. Marcos Solano",
      "especialidad": "Nefrología",
      "foto": "assets/medicos/med-15-2.jpg",
      "descripcion": "Revisión de antecedentes, informes disponibles y hábitos relacionados con el cuidado renal y su seguimiento.",
      "experiencia": 12,
      "precio": 250,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-77-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-08",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Me escuchó con atención. En la consulta con Dr. Marcos Solano sobre informes y cuidado renal, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-77-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-13",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Marcos Solano sobre informes y cuidado renal, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-77-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-18",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Marcos Solano sobre informes y cuidado renal, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-77-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-23",
          "puntuacion": 3,
          "aspecto": "Trato amable",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Marcos Solano sobre informes y cuidado renal, tuvo paciencia cuando pedí repetir una explicación. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-77-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-04",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Marcos Solano sobre informes y cuidado renal, escuchó mis preguntas y respondió con respeto."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.4
    },
    {
      "id": "med-15-3",
      "nombre": "Dra. Noelia Robles",
      "especialidad": "Nefrología",
      "foto": "assets/medicos/med-15-3.jpg",
      "descripcion": "Revisión de antecedentes, informes disponibles y hábitos relacionados con el cuidado renal y su seguimiento.",
      "experiencia": 13,
      "precio": 265,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-78-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-09",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Noelia Robles sobre informes y cuidado renal, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-78-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-14",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Noelia Robles sobre informes y cuidado renal, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-78-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-19",
          "puntuacion": 3,
          "aspecto": "Organización",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Noelia Robles sobre informes y cuidado renal, dejó claro qué información convenía tener para la próxima consulta. Me habría gustado disponer de un resumen más breve al final."
        }
      ],
      "opiniones": 3,
      "valoracion": 4
    },
    {
      "id": "med-15-4",
      "nombre": "Dra. Gabriela Galindo",
      "especialidad": "Nefrología",
      "foto": "assets/medicos/med-15-4.jpg",
      "descripcion": "Revisión de antecedentes, informes disponibles y hábitos relacionados con el cuidado renal y su seguimiento.",
      "experiencia": 14,
      "precio": 280,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-79-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-10",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Gabriela Galindo sobre informes y cuidado renal, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-79-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-15",
          "puntuacion": 3,
          "aspecto": "Puntualidad",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Gabriela Galindo sobre informes y cuidado renal, la conversación comenzó a la hora acordada. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-79-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-20",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Gabriela Galindo sobre informes y cuidado renal, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-79-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-25",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Gabriela Galindo sobre informes y cuidado renal, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-16-0",
      "nombre": "Dr. Francisco Andrade",
      "especialidad": "Otorrinolaringología",
      "foto": "assets/medicos/med-16-0.jpg",
      "descripcion": "Orientación clínica sobre molestias de oído, nariz y garganta; las exploraciones que requieren equipamiento se derivan a un centro.",
      "experiencia": 15,
      "precio": 228,
      "disponibleHoy": true,
      "resenas": [],
      "opiniones": 0,
      "valoracion": null
    },
    {
      "id": "med-16-1",
      "nombre": "Dr. Arturo Carrillo",
      "especialidad": "Otorrinolaringología",
      "foto": "assets/medicos/med-16-1.jpg",
      "descripcion": "Orientación clínica sobre molestias de oído, nariz y garganta; las exploraciones que requieren equipamiento se derivan a un centro.",
      "experiencia": 16,
      "precio": 243,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-81-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-12",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Arturo Carrillo sobre molestias de oído, nariz y garganta, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-81-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-17",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Arturo Carrillo sobre molestias de oído, nariz y garganta, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-81-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-22",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Arturo Carrillo sobre molestias de oído, nariz y garganta, revisó conmigo los antecedentes de forma ordenada."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-16-2",
      "nombre": "Dra. Rocío Valdés",
      "especialidad": "Otorrinolaringología",
      "foto": "assets/medicos/med-16-2.jpg",
      "descripcion": "Orientación clínica sobre molestias de oído, nariz y garganta; las exploraciones que requieren equipamiento se derivan a un centro.",
      "experiencia": 17,
      "precio": 258,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-82-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-13",
          "puntuacion": 4,
          "aspecto": "Puntualidad",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Rocío Valdés sobre molestias de oído, nariz y garganta, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-82-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-18",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Rocío Valdés sobre molestias de oído, nariz y garganta, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-82-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-23",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Rocío Valdés sobre molestias de oído, nariz y garganta, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-82-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-04",
          "puntuacion": 4,
          "aspecto": "Escucha atenta",
          "texto": "Me escuchó con atención. En la consulta con Dra. Rocío Valdés sobre molestias de oído, nariz y garganta, me permitió detallar mis inquietudes sin interrumpirme."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.5
    },
    {
      "id": "med-16-3",
      "nombre": "Dr. Víctor Salcedo",
      "especialidad": "Otorrinolaringología",
      "foto": "assets/medicos/med-16-3.jpg",
      "descripcion": "Orientación clínica sobre molestias de oído, nariz y garganta; las exploraciones que requieren equipamiento se derivan a un centro.",
      "experiencia": 18,
      "precio": 273,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-83-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-14",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Víctor Salcedo sobre molestias de oído, nariz y garganta, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-83-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-19",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Víctor Salcedo sobre molestias de oído, nariz y garganta, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-83-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-24",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "Me escuchó con atención. En la consulta con Dr. Víctor Salcedo sobre molestias de oído, nariz y garganta, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-83-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-05",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Víctor Salcedo sobre molestias de oído, nariz y garganta, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-83-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-10",
          "puntuacion": 3,
          "aspecto": "Organización",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Víctor Salcedo sobre molestias de oído, nariz y garganta, revisó conmigo los antecedentes de forma ordenada. Me habría gustado disponer de un resumen más breve al final."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.4
    },
    {
      "id": "med-16-4",
      "nombre": "Dr. Ricardo Duarte",
      "especialidad": "Otorrinolaringología",
      "foto": "assets/medicos/med-16-4.jpg",
      "descripcion": "Orientación clínica sobre molestias de oído, nariz y garganta; las exploraciones que requieren equipamiento se derivan a un centro.",
      "experiencia": 7,
      "precio": 288,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-84-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-15",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Ricardo Duarte sobre molestias de oído, nariz y garganta, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-84-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-20",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Me escuchó con atención. En la consulta con Dr. Ricardo Duarte sobre molestias de oído, nariz y garganta, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-84-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-25",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Ricardo Duarte sobre molestias de oído, nariz y garganta, la conversación comenzó a la hora acordada."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-17-0",
      "nombre": "Dr. Héctor Ferrer",
      "especialidad": "Oftalmología",
      "foto": "assets/medicos/med-17-0.jpg",
      "descripcion": "Revisión de antecedentes visuales y orientación inicial. Las pruebas con aparatos y procedimientos se realizan en un centro especializado.",
      "experiencia": 8,
      "precio": 236,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-85-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-16",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Me escuchó con atención. En la consulta con Dr. Héctor Ferrer sobre antecedentes y necesidades visuales, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-85-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-21",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Héctor Ferrer sobre antecedentes y necesidades visuales, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-85-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-26",
          "puntuacion": 3,
          "aspecto": "Escucha atenta",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Héctor Ferrer sobre antecedentes y necesidades visuales, me permitió detallar mis inquietudes sin interrumpirme. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-85-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-07",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Héctor Ferrer sobre antecedentes y necesidades visuales, tuvo paciencia cuando pedí repetir una explicación."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-17-1",
      "nombre": "Dr. Joaquín Benítez",
      "especialidad": "Oftalmología",
      "foto": "assets/medicos/med-17-1.jpg",
      "descripcion": "Revisión de antecedentes visuales y orientación inicial. Las pruebas con aparatos y procedimientos se realizan en un centro especializado.",
      "experiencia": 9,
      "precio": 251,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-86-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-17",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Joaquín Benítez sobre antecedentes y necesidades visuales, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-86-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-22",
          "puntuacion": 3,
          "aspecto": "Trato amable",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Joaquín Benítez sobre antecedentes y necesidades visuales, escuchó mis preguntas y respondió con respeto. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-86-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-03",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Joaquín Benítez sobre antecedentes y necesidades visuales, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-86-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-08",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Joaquín Benítez sobre antecedentes y necesidades visuales, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-86-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-13",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Joaquín Benítez sobre antecedentes y necesidades visuales, la conversación comenzó a la hora acordada."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.4
    },
    {
      "id": "med-17-2",
      "nombre": "Dra. Esther Villanueva",
      "especialidad": "Oftalmología",
      "foto": "assets/medicos/med-17-2.jpg",
      "descripcion": "Revisión de antecedentes visuales y orientación inicial. Las pruebas con aparatos y procedimientos se realizan en un centro especializado.",
      "experiencia": 10,
      "precio": 266,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-87-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-18",
          "puntuacion": 3,
          "aspecto": "Organización",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Esther Villanueva sobre antecedentes y necesidades visuales, revisó conmigo los antecedentes de forma ordenada. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-87-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-23",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Esther Villanueva sobre antecedentes y necesidades visuales, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-87-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-04",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Esther Villanueva sobre antecedentes y necesidades visuales, resumió los puntos que habíamos comentado antes de terminar."
        }
      ],
      "opiniones": 3,
      "valoracion": 4
    },
    {
      "id": "med-17-3",
      "nombre": "Dr. Felipe Vera",
      "especialidad": "Oftalmología",
      "foto": "assets/medicos/med-17-3.jpg",
      "descripcion": "Revisión de antecedentes visuales y orientación inicial. Las pruebas con aparatos y procedimientos se realizan en un centro especializado.",
      "experiencia": 11,
      "precio": 281,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-88-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-19",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Felipe Vera sobre antecedentes y necesidades visuales, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-88-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-24",
          "puntuacion": 4,
          "aspecto": "Escucha atenta",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Felipe Vera sobre antecedentes y necesidades visuales, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-88-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-05",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Felipe Vera sobre antecedentes y necesidades visuales, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-88-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-10",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Felipe Vera sobre antecedentes y necesidades visuales, escuchó mis preguntas y respondió con respeto."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.8
    },
    {
      "id": "med-17-4",
      "nombre": "Dra. Diana Campos",
      "especialidad": "Oftalmología",
      "foto": "assets/medicos/med-17-4.jpg",
      "descripcion": "Revisión de antecedentes visuales y orientación inicial. Las pruebas con aparatos y procedimientos se realizan en un centro especializado.",
      "experiencia": 12,
      "precio": 296,
      "disponibleHoy": true,
      "resenas": [],
      "opiniones": 0,
      "valoracion": null
    },
    {
      "id": "med-18-0",
      "nombre": "Dr. Rodrigo Márquez",
      "especialidad": "Alergología",
      "foto": "assets/medicos/med-18-0.jpg",
      "descripcion": "Consulta para revisar antecedentes, síntomas y posibles desencadenantes. Las pruebas y procedimientos requieren instalaciones adecuadas.",
      "experiencia": 13,
      "precio": 244,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-90-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-21",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dr. Rodrigo Márquez sobre síntomas y posibles desencadenantes, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-90-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-26",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Rodrigo Márquez sobre síntomas y posibles desencadenantes, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-90-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-07",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Rodrigo Márquez sobre síntomas y posibles desencadenantes, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-18-1",
      "nombre": "Dr. Leonardo Céspedes",
      "especialidad": "Alergología",
      "foto": "assets/medicos/med-18-1.jpg",
      "descripcion": "Consulta para revisar antecedentes, síntomas y posibles desencadenantes. Las pruebas y procedimientos requieren instalaciones adecuadas.",
      "experiencia": 14,
      "precio": 259,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-91-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-22",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Leonardo Céspedes sobre síntomas y posibles desencadenantes, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-91-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-03",
          "puntuacion": 4,
          "aspecto": "Trato amable",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Leonardo Céspedes sobre síntomas y posibles desencadenantes, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-91-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-08",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Me escuchó con atención. En la consulta con Dr. Leonardo Céspedes sobre síntomas y posibles desencadenantes, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-91-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-13",
          "puntuacion": 3,
          "aspecto": "Organización",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Leonardo Céspedes sobre síntomas y posibles desencadenantes, dejó claro qué información convenía tener para la próxima consulta. Me habría gustado disponer de un resumen más breve al final."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-18-2",
      "nombre": "Dra. Miriam Osorio",
      "especialidad": "Alergología",
      "foto": "assets/medicos/med-18-2.jpg",
      "descripcion": "Consulta para revisar antecedentes, síntomas y posibles desencadenantes. Las pruebas y procedimientos requieren instalaciones adecuadas.",
      "experiencia": 15,
      "precio": 274,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-92-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-23",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Miriam Osorio sobre síntomas y posibles desencadenantes, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-92-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-04",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Me escuchó con atención. En la consulta con Dra. Miriam Osorio sobre síntomas y posibles desencadenantes, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-92-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-09",
          "puntuacion": 3,
          "aspecto": "Puntualidad",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dra. Miriam Osorio sobre síntomas y posibles desencadenantes, la conversación comenzó a la hora acordada. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-92-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-14",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Miriam Osorio sobre síntomas y posibles desencadenantes, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-92-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-19",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Miriam Osorio sobre síntomas y posibles desencadenantes, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.2
    },
    {
      "id": "med-18-3",
      "nombre": "Dr. Álvaro Becerra",
      "especialidad": "Alergología",
      "foto": "assets/medicos/med-18-3.jpg",
      "descripcion": "Consulta para revisar antecedentes, síntomas y posibles desencadenantes. Las pruebas y procedimientos requieren instalaciones adecuadas.",
      "experiencia": 16,
      "precio": 289,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-93-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-24",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Me escuchó con atención. En la consulta con Dr. Álvaro Becerra sobre síntomas y posibles desencadenantes, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-93-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-05",
          "puntuacion": 3,
          "aspecto": "Claridad al explicar",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Álvaro Becerra sobre síntomas y posibles desencadenantes, explicó con palabras sencillas lo que revisaríamos en el seguimiento. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-93-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-10",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Álvaro Becerra sobre síntomas y posibles desencadenantes, me permitió detallar mis inquietudes sin interrumpirme."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.3
    },
    {
      "id": "med-18-4",
      "nombre": "Dr. Simón Montes",
      "especialidad": "Alergología",
      "foto": "assets/medicos/med-18-4.jpg",
      "descripcion": "Consulta para revisar antecedentes, síntomas y posibles desencadenantes. Las pruebas y procedimientos requieren instalaciones adecuadas.",
      "experiencia": 17,
      "precio": 304,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-94-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-25",
          "puntuacion": 3,
          "aspecto": "Trato amable",
          "texto": "Repasamos los puntos de la consulta. En la consulta con Dr. Simón Montes sobre síntomas y posibles desencadenantes, tuvo paciencia cuando pedí repetir una explicación. Me habría gustado disponer de un resumen más breve al final."
        },
        {
          "id": "op-94-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-06",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dr. Simón Montes sobre síntomas y posibles desencadenantes, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-94-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-11",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dr. Simón Montes sobre síntomas y posibles desencadenantes, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-94-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-16",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dr. Simón Montes sobre síntomas y posibles desencadenantes, revisó conmigo los antecedentes de forma ordenada."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.3
    },
    {
      "id": "med-19-0",
      "nombre": "Dra. Elisa Zamora",
      "especialidad": "Medicina familiar",
      "foto": "assets/medicos/med-19-0.jpg",
      "descripcion": "Acompañamiento de diferentes etapas de la vida y orientación sobre cuidados, prevención y continuidad de la atención familiar.",
      "experiencia": 18,
      "precio": 252,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-95-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-26",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Hablamos de mis rutinas en casa. En la consulta con Dra. Elisa Zamora sobre rutinas de cuidado familiar, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-95-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-07",
          "puntuacion": 4,
          "aspecto": "Puntualidad",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Elisa Zamora sobre rutinas de cuidado familiar, la conversación comenzó a la hora acordada."
        },
        {
          "id": "op-95-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-12",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Elisa Zamora sobre rutinas de cuidado familiar, resumió los puntos que habíamos comentado antes de terminar."
        },
        {
          "id": "op-95-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-17",
          "puntuacion": 5,
          "aspecto": "Claridad al explicar",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Elisa Zamora sobre rutinas de cuidado familiar, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-95-4",
          "autor": "Visitante E.",
          "fecha": "2026-10-22",
          "puntuacion": 4,
          "aspecto": "Escucha atenta",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Elisa Zamora sobre rutinas de cuidado familiar, me permitió detallar mis inquietudes sin interrumpirme."
        }
      ],
      "opiniones": 5,
      "valoracion": 4.6
    },
    {
      "id": "med-19-1",
      "nombre": "Dra. Olivia Correa",
      "especialidad": "Medicina familiar",
      "foto": "assets/medicos/med-19-1.jpg",
      "descripcion": "Acompañamiento de diferentes etapas de la vida y orientación sobre cuidados, prevención y continuidad de la atención familiar.",
      "experiencia": 7,
      "precio": 267,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-96-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-03",
          "puntuacion": 4,
          "aspecto": "Claridad al explicar",
          "texto": "Me dio tiempo para preguntar. En la consulta con Dra. Olivia Correa sobre rutinas de cuidado familiar, explicó con palabras sencillas lo que revisaríamos en el seguimiento."
        },
        {
          "id": "op-96-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-08",
          "puntuacion": 5,
          "aspecto": "Escucha atenta",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Olivia Correa sobre rutinas de cuidado familiar, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-96-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-13",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Olivia Correa sobre rutinas de cuidado familiar, tuvo paciencia cuando pedí repetir una explicación."
        }
      ],
      "opiniones": 3,
      "valoracion": 4.7
    },
    {
      "id": "med-19-2",
      "nombre": "Dra. Marta Portillo",
      "especialidad": "Medicina familiar",
      "foto": "assets/medicos/med-19-2.jpg",
      "descripcion": "Acompañamiento de diferentes etapas de la vida y orientación sobre cuidados, prevención y continuidad de la atención familiar.",
      "experiencia": 8,
      "precio": 282,
      "disponibleHoy": false,
      "resenas": [
        {
          "id": "op-97-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-04",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "Ordenamos las dudas que había anotado. En la consulta con Dra. Marta Portillo sobre rutinas de cuidado familiar, escuchó mis preguntas y respondió con respeto."
        },
        {
          "id": "op-97-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-09",
          "puntuacion": 5,
          "aspecto": "Organización",
          "texto": "Pude conversar sin sentir prisa. En la consulta con Dra. Marta Portillo sobre rutinas de cuidado familiar, dejó claro qué información convenía tener para la próxima consulta."
        },
        {
          "id": "op-97-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-14",
          "puntuacion": 4,
          "aspecto": "Organización",
          "texto": "Revisamos los informes que tenía. En la consulta con Dra. Marta Portillo sobre rutinas de cuidado familiar, revisó conmigo los antecedentes de forma ordenada."
        },
        {
          "id": "op-97-3",
          "autor": "Visitante D.",
          "fecha": "2026-09-19",
          "puntuacion": 5,
          "aspecto": "Puntualidad",
          "texto": "La conversación siguió un orden claro. En la consulta con Dra. Marta Portillo sobre rutinas de cuidado familiar, la conversación comenzó a la hora acordada."
        }
      ],
      "opiniones": 4,
      "valoracion": 4.8
    },
    {
      "id": "med-19-3",
      "nombre": "Dra. Renata Ocampo",
      "especialidad": "Medicina familiar",
      "foto": "assets/medicos/med-19-3.jpg",
      "descripcion": "Acompañamiento de diferentes etapas de la vida y orientación sobre cuidados, prevención y continuidad de la atención familiar.",
      "experiencia": 9,
      "precio": 297,
      "disponibleHoy": true,
      "resenas": [],
      "opiniones": 0,
      "valoracion": null
    },
    {
      "id": "med-19-4",
      "nombre": "Dr. Adrián Cabrera",
      "especialidad": "Medicina familiar",
      "foto": "assets/medicos/med-19-4.jpg",
      "descripcion": "Acompañamiento de diferentes etapas de la vida y orientación sobre cuidados, prevención y continuidad de la atención familiar.",
      "experiencia": 10,
      "precio": 312,
      "disponibleHoy": true,
      "resenas": [
        {
          "id": "op-99-0",
          "autor": "Visitante A.",
          "fecha": "2026-10-06",
          "puntuacion": 4,
          "aspecto": "Escucha atenta",
          "texto": "Revisamos los informes que tenía. En la consulta con Dr. Adrián Cabrera sobre rutinas de cuidado familiar, me permitió detallar mis inquietudes sin interrumpirme."
        },
        {
          "id": "op-99-1",
          "autor": "Visitante B.",
          "fecha": "2026-09-11",
          "puntuacion": 5,
          "aspecto": "Trato amable",
          "texto": "La conversación siguió un orden claro. En la consulta con Dr. Adrián Cabrera sobre rutinas de cuidado familiar, tuvo paciencia cuando pedí repetir una explicación."
        },
        {
          "id": "op-99-2",
          "autor": "Visitante C.",
          "fecha": "2026-10-16",
          "puntuacion": 3,
          "aspecto": "Trato amable",
          "texto": "Me escuchó con atención. En la consulta con Dr. Adrián Cabrera sobre rutinas de cuidado familiar, escuchó mis preguntas y respondió con respeto. Me habría gustado disponer de un resumen más breve al final."
        }
      ],
      "opiniones": 3,
      "valoracion": 4
    }
  ]
};
