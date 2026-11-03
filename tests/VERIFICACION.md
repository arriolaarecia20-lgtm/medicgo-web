# Verificación — 2 de noviembre de 2026

Comando: `node tests/browser.cjs` (Node 22 y Chrome en modo headless, con clics mediante DevTools Protocol).

Resultados satisfactorios:

- Siete páginas bajo un servidor HTTP con prefijo `/medicgo-web/`; enlaces de menú, pie, buscador, perfil, reserva y regreso al catálogo.
- Opción activa, menú móvil, tecla Escape e historial atrás/adelante.
- Veinte especialidades e iconos distintos; cinco perfiles en cada especialidad.
- Cien nombres y archivos de fotografía únicos, también comprobados por SHA-256; carga y decodificación de las imágenes.
- Identidad, especialidad y precio entre catálogo, los cien perfiles y el recorrido de reserva.
- Promedios calculados, distribución y orden de opiniones; ausencia de puntuación en perfiles sin opiniones.
- Búsqueda sin acentos, filtros individuales y combinados, precio ascendente/descendente, mejor valoración, URL persistente, limpiar y cargar más.
- Veinte recorridos de reserva; fecha y hora requeridas, fechas pasadas y fuera de rango, revisión editable y persistencia al recargar.
- Cancelación, reprogramación sin duplicar la reserva y conservación del horario original al cancelar la edición.
- Horas ya pasadas, conflictos entre médicos y conflictos surgidos antes de confirmar; fallo de almacenamiento y almacenamiento corrupto.
- Reserva en móvil, enlaces locales resolubles, botones dentro de la pantalla y ausencia de errores JavaScript o respuestas locales 404.

Revisión visual: las cien fotografías en hojas de contacto, catálogo de escritorio y celular, opiniones y reservas en celular. Se conservan los originales y las fuentes están en CREDITOS.md. Algunas fotos distintas muestran al mismo modelo en otra pose.

Las pruebas usan un reloj fijo del 2 de noviembre de 2026 a las 10:00 en America/Bogota. Escritorio: 1440 × 1100; celular emulado: 390 × 1000. No se probó en un teléfono físico ni en Safari o Firefox. El prefijo de GitHub Pages se verificó localmente; el despliegue público de GitHub es un paso externo posterior al push.
