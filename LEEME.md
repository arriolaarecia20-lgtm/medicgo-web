# Medic GO

Abre esta carpeta completa en VS Code y sirve el proyecto con un servidor HTTP local, como Live Server. Conserva juntos los siete HTML, css, js y assets.

La navegación abre páginas independientes en la misma pestaña. El catálogo tiene 20 especialidades y 100 perfiles. Los filtros se conservan en la URL; los perfiles, opiniones y reservas comparten el catálogo de js/data.js.

Para probar manualmente:

1. En Inicio, usa el buscador y los enlaces para ver todas las especialidades y médicos.
2. Selecciona una especialidad y combina búsqueda, precio, valoración, opiniones y disponibilidad.
3. Abre un perfil, revisa Opiniones y cambia su orden.
4. Pulsa Reservar, elige fecha y hora, revisa el resumen y confirma.
5. Abre Mis reservas, recarga, reprograma y cancela. Cancelar la edición debe conservar el horario anterior.
6. Prueba los menús en celular y los botones de atrás y adelante del navegador.

Las reservas se guardan solo en este navegador, sin datos personales, pagos ni solicitudes reales. Se conservan las reservas anteriores válidas de la clave medicgo-bookings-v2.

Ejecuta node tests/browser.cjs con Node 22+ y Chrome o Edge para las pruebas automáticas. Consulta [README.md](README.md) para la estructura y GitHub Pages, y [CREDITOS.md](CREDITOS.md) para las fuentes de fotografías.
