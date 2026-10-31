# Medic GO — web para tu MVP

## Abrir en tu computadora
1. Extrae todo el ZIP. Conserva tu proyecto anterior como respaldo.
2. En VS Code elige File > Open Folder y selecciona esta carpeta (la que contiene index.html).
3. Para una primera vista, abre index.html con Chrome. Para trabajar y probar almacenamiento, usa siempre el mismo servidor local, por ejemplo Open with Live Server si ya tienes esa extensión.
4. No abras solo el HTML aislado: css, js y assets deben permanecer junto a index.html.

## Qué contiene
- index.html: inicio, especialidades, catálogo y reservas, con ventanas para perfil y fecha/hora.
- css/styles.css: estilos originales y ampliaciones adaptables a pantallas pequeñas.
- js/app.js: 40 perfiles (5 en cada una de 8 especialidades), filtros, buscador, perfiles, calendario, reservas y cancelaciones.
- assets: fotografías descargadas e ilustración alternativa.

El logo sigue siendo el provisional que recibí. Para reproducir exactamente tus fotos y logo de Figma, sustituye los archivos por sus exportaciones. Las fotografías actuales son ilustrativas y no corresponden a los nombres de los perfiles. Los mismos retratos se reutilizan entre especialidades; los nombres de los perfiles son distintos.

No hay registro, formularios personales, ubicación ni pagos. Los perfiles y horarios son datos académicos. La reserva se guarda solo en este navegador: no se envía a un profesional. El aviso aparece al reservar y confirmar, sin franjas repetitivas en el inicio. Cambiar de navegador, dirección local o dispositivo no comparte las reservas.

## Prueba el recorrido
1. Elige Pediatría; deben aparecer 5 perfiles.
2. Ordena por menor precio.
3. Abre Ver perfil > Elegir fecha y hora.
4. Elige una fecha futura y una hora > Confirmar reserva simulada.
5. Abre Mis reservas, recarga la página y cancela la reserva.
6. Prueba un nombre inexistente, restablece con Ver todos y prueba el menú en celular.

## Publicar en GitHub sin comandos
1. Entra a https://github.com/new con tu cuenta.
2. Nombre del repositorio: medicgo-web. Selecciona Public si deseas compartir código y web públicamente. Agrega README y crea el repositorio.
3. Dentro del repositorio, Add file > Upload files.
4. Arrastra EL CONTENIDO de esta carpeta: index.html, css, js, assets, LEEME.md y CREDITOS.md. No subas el ZIP ni la carpeta contenedora entera.
5. Commit changes para guardar la subida.
6. Settings > Pages > Build and deployment > Source: Deploy from a branch.
7. Branch: main. Folder: /(root). Save.
8. Espera a que termine el despliegue y abre el enlace que muestra Pages. Su formato es https://TU-USUARIO.github.io/medicgo-web/.

Es fundamental que index.html quede en la raíz del repositorio. Usa exactamente ese nombre (sin (1)).

Documentación: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Vincular VS Code con ese repositorio
Una vez publicado, usa la copia clonada como tu carpeta de trabajo:
1. En VS Code, Ctrl+Shift+P > Git: Clone.
2. Pega la URL de tu repositorio, por ejemplo https://github.com/TU-USUARIO/medicgo-web.git.
3. Elige una carpeta de destino distinta del proyecto actual y abre la copia clonada.
4. Si VS Code indica que falta Git, instálalo desde https://git-scm.com/downloads y reinicia VS Code.
5. Para cada cambio, guarda los archivos y abre Source Control (icono de ramificaciones a la izquierda).
6. Pulsa + junto a Changes para preparar los cambios, escribe un mensaje y haz Commit.
7. Pulsa Sync Changes y autentícate en GitHub si se solicita. Pages actualizará la web cuando termine la publicación.

No pegues contraseñas ni tokens dentro del código.

## Verificación realizada
Comprobación de sintaxis JavaScript, enlaces locales, presencia de fotografías y pruebas de lógica con DOM simulado para catálogo, filtros, perfil, reserva y persistencia. No se ha verificado la presentación ni el recorrido en un navegador real en este entorno. El sitio todavía no se ha subido a tu GitHub.
