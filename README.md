# Medic GO

Proyecto académico de atención médica a domicilio. Perfiles, fotografías, experiencias, precios y valoraciones ilustrativos. Las reservas simuladas no solicitan atención real ni procesan pagos.

## Páginas
- `index.html`: presentación, buscador y selecciones destacadas.
- `especialidades.html`: 20 especialidades con enlaces al catálogo filtrado.
- `medicos.html`: 100 perfiles, cinco por especialidad, búsqueda y filtros.
- `perfil.html?medico=med-0-0`: datos del médico seleccionado.
- `reserva.html?medico=med-0-0`: fecha, horario, revisión y confirmación.
- `como-funciona.html`: guía del recorrido.
- `mis-reservas.html`: reservas locales y cancelación.

Se conservan las 40 fotografías originales y se añaden 60 fotografías locales con fuentes en CREDITOS.md; se mantienen los datos de cada perfil entre páginas. No se solicitan datos personales. El almacenamiento usa la clave existente `medicgo-bookings-v2` y conserva reservas anteriores válidas. Borrar los datos del navegador elimina las reservas; no se sincronizan entre dispositivos.

## Ejecución y pruebas
Sirve la carpeta con un servidor HTTP local (por ejemplo Live Server). Ejecuta `node tests/browser.cjs` con Node 22+ y Chrome o Edge; `MEDICGO_BROWSER` permite indicar otra ruta del navegador. La prueba usa un navegador temporal y sirve la web bajo `/medicgo-web/` para comprobar navegación, filtros, historial, fotografías, reservas, validaciones, persistencia, cancelación, reprogramación, opiniones y móvil.

## GitHub Pages
Publica desde `main`, carpeta raíz. Las siete páginas, CSS, JavaScript y assets deben permanecer en su ubicación. Los enlaces y recursos usan rutas relativas compatibles con `/medicgo-web/`. No se requiere compilación ni reescritura de rutas.
