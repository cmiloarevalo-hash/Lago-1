# Guía pastoral - Biblia — ficha de Uptodown y procedimiento de publicación

> **ACTUALIZACIÓN VIGENTE — 13-11-2026 (sobre el historial del 09-11-2026).**
> **DESARROLLO DE LA APLICACIÓN COMPLETADO Y APROBADO EXPRESAMENTE POR EL AUTOR:** Android **1.11.6 / versionCode 18**, paquete `com.lago.bibletopicexplorer`. La base **PR #68** y versión final **PR #73** fueron fusionadas a `main`, commit `090c054b9b83a7d47c5a8d4779ebae67726af9e8`. El PR #66 (guía v1.0.1) fue cerrado por obsoleto, sin merge, y el PR #72 / 1.11.5 permanece descartado.
> **EVIDENCIA DEL APK APROBADO:** `Biblia-Guia-Pastoral-Reina-Valera-1909-v1.11.6-REVISION.apk`, 82.988.420 bytes, SHA-256 `fd384c32a5d82bc199390ff265c4d6cc66d8aad2da70a6996fe9ca5bf7754d27`; M2 [SUCCESS](https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/43278323903) y M5 [SUCCESS](https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/43278324089) en HEAD de PR #73. Imagen de montaña, mensaje secundario completo y contraste suave integrados, aprobación visual expresa del autor.
> **DISTRIBUCIÓN NO REALIZADA:** esta APK existente está firmada con **Android Debug** (`CN=Android Debug`), no con certificado de producción. No se ha creado/enviado ficha ni aprobado publicación en **Uptodown**; captura de pantallas para tienda, titular de correo, firma definitiva, licencias/privacidad y validación de descarga desde Uptodown siguen pendientes. La aprobación de desarrollo y autorización de merge **NO son autorización de envío a tienda**. La web Wix existe y la descarga QA se alojó en su Media Manager; no afirmar distribución por Uptodown.
> **CIERRE ADMINISTRATIVO:** por orden del Humano, cerrar las actividades de **desarrollo** y el Issue #67 como expediente concluido/archivado, con la parte Uptodown explícitamente **no ejecutada**. Este documento conserva el procedimiento para una futura orden de publicación, sin inventar tareas terminadas. El texto histórico más abajo describe el estado del 09-11-2026, no el actual.


> **Documento canónico de publicación.** Fecha del registro: **2026-11-09** (Chile, America/Santiago).  
> **Estado: BORRADOR PREPARADO, SIN ENVÍO A UPTODOWN, PENDIENTE DE APROBACIÓN FINAL DEL AUTOR.**  
> Actividad madre: [#67](https://github.com/cmiloarevalo-hash/Lago-1/issues/67).  
> Alcance: distribución inicial **solo en Uptodown**, con la web de Wix como puerta de entrada. **No usar GitHub como destino para lectores.**

## 1. Decisiones registradas hoy

- El autor confirmó que otra IA está terminando/compilando la APK. **La compilación definitiva NO se ha recibido ni aprobado en este registro.** Hay que esperar su revisión.
- La web pública **ya existe**: https://headless-vffpmunurhz-apkcristianas-140d.wix-site-host.com/ . Publicación confirmada en Wix; **no está verificado que tenga aún un enlace válido de descarga de Uptodown**.
- Primera tienda seleccionada: **Uptodown** (https://www.uptodown.com/). Sin publicación inicial en Google Play ni otras tiendas.
- El autor se encargará de **3 a 6 capturas reales** de la APK final; **recomendación de Uptodown: 4 o más**, preferencia operativa **4–6**. Imágenes **pendientes**, sin generarlas ni subir otras no aprobadas.
- La ficha tendrá **exactamente 3 párrafos de descripción principal** más una **sección de imágenes**; el título, texto corto, datos técnicos y contacto son metadatos aparte.
- **Correos observados en candidatas distintas:** `cmiloarevalo@gmail.com` (anterior) y `apkcristianas@gmail.com` (PR #69). Deben conciliarse antes de publicar.
- No añadir rediseños, videos, funcionalidades o material promocional que no se haya solicitado.
- No crear ficha, enviar archivos, pulsar Submit for review, ni modificar el APK/web sin autorización del autor y verificación final.


### Enlace corto escogido para difusión (PENDIENTE DE ACTIVACIÓN)

- **Alias seleccionado por el autor:** `https://tinyurl.com/GuiaPastoralBiblia`.
- **Uso previsto:** enlace público fácil de recordar para encontrar **Guía pastoral - Biblia** y llegar a la descarga de la APK una vez aprobada y publicada en Uptodown.
- **Estado real al 2026-11-09:** nombre/URL **propuesto, no creado ni reservado en TinyURL, y sin redirección verificada**. **NO anunciarlo aún como enlace funcional de descarga de APK.**
- **Destino recomendado inicialmente:** página Wix pública `https://headless-vffpmunurhz-apkcristianas-140d.wix-site-host.com/`, desde la que se accederá a Uptodown cuando haya ficha oficial. No inventar URL de tienda ni enlazar al repositorio público para lectores.
- **Activación pendiente:** crear el alias en TinyURL si está disponible, registrar la URL efectiva y el destino, verificar desde navegador/móvil y solo después etiquetarlo como enlace oficial y agregarlo a materiales de difusión.


### Verificación de última candidata y control QA — 09-11-2026

- **Nueva candidata identificada:** [PR #69, v1.10.1](https://github.com/cmiloarevalo-hash/Lago-1/pull/69), acumulativa sobre [PR #68](https://github.com/cmiloarevalo-hash/Lago-1/pull/68). Ambos permanecen abiertos y en **borrador**; sus CI M2/M5 reportan resultados satisfactorios pero **no hay QA manual ni firma de producción confirmada**. No distribuir sus artefactos como release final.
- **Desajuste de nombre:** la ficha y web proponen **Guía pastoral - Biblia**; el `app.json` de la candidata #69 declara **Biblia Reina-Valera 1909 - Guía Pastoral**. El autor debe elegir una identidad final antes de publicar.
- **Desajuste de correo:** este borrador venía de `cmiloarevalo@gmail.com`; la candidata #69 presenta **`apkcristianas@gmail.com`** en Créditos. **Ambas direcciones constan en fuentes del proyecto, pero ninguna debe anunciarse como contacto público definitivo sin decisión del autor.**
- **Guía:** PR #68 declara 16 capítulos de edición autoral v1.30, heredados por PR #69; confirmar contenido final aprobado en la APK entregada. No sobrescribir con la edición v1.0.1 de PR #66.
- **Control de lanzamiento detallado:** [CONTROL_QA_APK_UPTODOWN.md](CONTROL_QA_APK_UPTODOWN.md). Casillas sin marcar hasta pruebas y autorización.
- **Web Wix:** se confirmó publicada por el servicio Wix. No se ha verificado que ofrezca un botón real de descarga Uptodown; aún no existe URL oficial de Uptodown.


### Textos adicionales para el sitio Wix — 09-11-2026

- Se prepararon [instrucciones seguras de instalación y borrador de política de privacidad](TEXTOS_WEB_INSTALACION_Y_PRIVACIDAD.md), para aplicar **después de la revisión y autorización del autor**. El documento no modifica el sitio vivo.
- La sección privacidad usa datos visibles de la **candidata #69** (SQLite local, notificaciones opcionales), pero **no equivale a una auditoría definitiva**; falta verificar la APK final y los terceros.
- **Advertencia sobre derechos:** el archivo `apps/bible-topic-explorer/LICENSE` contiene copyright MIT de **650 Industries/Expo** y no determina la licencia de distribución de todos los contenidos de la obra. Deben verificarse los derechos/licencia propios antes de elegir «Propietaria» u otra opción en Uptodown.
- Se definió texto de estado **«Descarga para Android: próximamente en Uptodown»**. Solo habilitar el botón después de obtener una ficha oficial real.

## 2. Datos de la ficha (borrador operativo)

| Campo | Contenido | Estado |
| --- | --- | --- |
| Nombre | **POR DEFINIR:** Guía pastoral - Biblia (web/ficha) / Biblia Reina-Valera 1909 - Guía Pastoral (candidata #69) | Conciliar con el autor antes de enviar |
| Plataforma | Android | Confirmado como objetivo |
| Idioma inicial de ficha | Español | Propuesto |
| Costo para lector | Gratuito | **Confirmar con el autor y en la APK** |
| Desarrollador / autor | Camilo Arévalo | Consta en pantalla de créditos candidata |
| Correo de soporte | **POR DEFINIR:** cmiloarevalo@gmail.com (candidata anterior) / apkcristianas@gmail.com (candidata #69) | **El autor decide qué dirección se hará pública** |
| Sitio oficial | https://headless-vffpmunurhz-apkcristianas-140d.wix-site-host.com/ | Publicado |
| Formato de instalación | APK | Uptodown lo admite; **archivo final pendiente** |
| Categoría | Educación o equivalente disponible en el formulario | Pendiente de elegir |
| Edad recomendada / PEGI | Según contenido real | Pendiente de definir |
| Ícono | PNG cuadrado; recomendable 512 × 512 px | Pendiente de comprobar / adjuntar |
| Capturas | 3–6 capturas verticales reales del APK final (ideal 4–6) | **Pendiente: autor** |
| Versión, versionCode, package ID | Candidata #69: 1.10.1 / 11 / com.lago.bibletopicexplorer | **Pendiente de comprobar en el APK aprobado; no son valores de release** |
| Firma / certificado, SHA-256 del archivo | Verificar paquete final y conservar evidencia fuera de secretos | **Pendiente: QA** |
| Etapa | Final Release **solo cuando esté aprobada** | Pendiente |
| Novedades / changelog | Redactar tras revisar la versión final | Pendiente |
| Permisos, funcionamiento offline, datos locales | Verificar en APK final y comunicar con exactitud | Pendiente |
| Licencia y derecho de distribución | Verificar derechos de todos los componentes, textos y activos | Pendiente |
| Política de privacidad | Preparar/validar enlace público según tratamiento real de datos | Pendiente |
| URL pública definitiva de Uptodown | Se obtiene tras aprobación editorial de Uptodown | No existe todavía |

### Texto corto para Uptodown

Biblia RV1909 y 16 capítulos para conocer y seguir a Jesús

### Descripción larga para Uptodown — 3 párrafos; propuesta para revisión

**Guía pastoral - Biblia** es una aplicación cristiana para Android que reúne la lectura de la Biblia Reina-Valera 1909 y una guía pastoral de 16 capítulos dedicada a conocer a Jesús y sus enseñanzas. Está pensada para jóvenes, familias y comunidades que desean acercarse a los Evangelios con un lenguaje claro, incluso si todavía no conocen bien las historias bíblicas. Cada capítulo propone referencias del Antiguo y Nuevo Testamento y una pregunta para seguir aprendiendo.

En la guía se explican encuentros, parábolas y enseñanzas de Jesús, con atención al contexto y a su aplicación en la vida diaria. El lector puede reflexionar sobre la oración, el amor a Dios Padre y al prójimo, el perdón sincero, la misericordia, la justicia, el servicio y la esperanza. La aplicación incorpora lectura bíblica local y herramientas personales para guardar notas y seguir el progreso de lectura.

El recorrido invita a descubrir por qué la fe cristiana reconoce a Jesús como Salvador, el significado de su entrega y resurrección y la importancia de vivir el amor con hechos. Los ejemplos buscan ayudar a llevar estas enseñanzas a la familia, las amistades y la comunidad, sin dar por supuesto que todos conocen la Biblia. Es un recurso educativo cristiano independiente, desarrollado por Camilo Arévalo, para leer, conversar y seguir profundizando en las Escrituras.

**Control editorial:** texto de 218 palabras, distribuidas en **3 párrafos**. La segunda parte menciona notas y seguimiento; confirmar esas funciones en la APK final o corregir únicamente las afirmaciones que no correspondan. La ficha se mantiene en **borrador**, no en estado de aprobación final. No prometer un respaldo eclesiástico o institucional inexistente.

## 3. Sección de imágenes — PENDIENTE DEL AUTOR

La descripción principal termina en los 3 párrafos anteriores. Esta sección es una **galería separada** (no contiene imágenes todavía).

- [ ] Imagen 1 — pantalla inicial de la APK definitiva
- [ ] Imagen 2 — lectura de la Biblia
- [ ] Imagen 3 — índice / capítulos de enseñanzas de Jesús
- [ ] Imagen 4 — interior de un capítulo con referencias y reflexión (**preferible, 4 como mínimo**)
- [ ] Imagen 5 — función personal real que esté presente en el APK final (opcional)
- [ ] Imagen 6 — otra pantalla relevante de la versión final (opcional)

**Criterio:** capturas auténticas, legibles, verticales, sin inventar pantallas; revisar que no expongan notas ni datos personales. Uptodown permite capturas por idioma y recomienda al menos cuatro. El banner de 1024 × 500 px es opcional, **fuera de alcance por ahora**, igual que el vídeo.

## 4. Procedimiento secuencial (quién hace qué)

1. **Finalizar APK — otra IA / equipo técnico.** Entregar APK firmada y sus datos reales: nombre, versión, package ID, versionCode, certificado, permisos, hash SHA-256, cambios. No utilizar el artefacto QA como publicación definitiva.
2. **Revisión funcional — autor.** Instalar en un Android real; comprobar inicio, Biblia, 16 capítulos aprobados, navegación, referencias, lectura sin conexión, notas/progreso y créditos. Autorizar por escrito la versión exacta. Proteger QA5 y datos existentes; confirmar ruta de actualización y certificado persistente.
3. **Revisión de ficha — autor + IA coordinadora.** Comparar cada afirmación de los 3 párrafos con funciones verificadas en la APK final; aprobar título, descripción corta, nombre de autor, correo público y categoría.
4. **Imágenes — autor.** Aportar 3–6 capturas de la compilación aprobada; ideal 4–6. Revisar privacidad y coincidencia visual con la versión de descarga.
5. **Datos legales y de soporte — autor + IA coordinadora.** Verificar licencias de aplicación y recursos, permisos, política de privacidad/URL, derechos de publicación, idioma y grupo etario. No divulgar secretos ni clave privada de firma.
6. **Cuenta Uptodown — autor.** Registrarse/iniciar sesión en la [Consola para desarrolladores](https://www.uptodown.com/developers), confirmar acceso a cuenta y organización responsable. Solo quien tenga derechos debe enviar la APK.
7. **Crear ficha — operador autorizado.** Apps → Add new app → Android → adjuntar APK final → nombre, icono, autor, web, categoría, edad, correo si corresponde → breve de máximo 70 caracteres y descripción de al menos 50 palabras → galería → versión y changelog → modelo/licencia/distribución. **Guardar como borrador para revisión**.
8. **Aprobación y envío — autor.** Tras verificación final de ficha, imágenes, versión y derechos, autoriza expresamente **Submit for review**. Uptodown revisa y decide si publica; no se garantiza fecha.
9. **Enlace web — operador autorizado.** Tras la publicación y obtención de **URL real oficial de Uptodown**, añadir en la web Wix el botón/enlace de descarga apuntando a la ficha oficial (no al repositorio ni a una dirección inventada). Registrar URL y fecha.
10. **Prueba de extremo a extremo — QA/autor.** Abrir web pública desde móvil, entrar en Uptodown, descargar APK, instalar, abrir y verificar contenidos/versiones; corregir problemas antes de dar por completada la subtarea #8 de la actividad #67.

### Puntos de control (NO AVANZAR sin ellos)

- **G1:** APK definitiva aprobada, firma y versión coherentes, QA real completada.
- **G2:** tres párrafos, imágenes, metadatos, contacto, privacidad y licencias aprobados por el autor.
- **G3:** cuenta de Uptodown validada y autorización explícita de envío.
- **G4:** revisión/aprobación de Uptodown, URL real y prueba de descarga desde la web.
- No publicar APK no aprobada ni inventar versión, pantallas, certificaciones o URL de tienda.

## 5. Registro de acontecimientos

| Fecha (Chile) | Evento | Evidencia / situación |
| --- | --- | --- |
| 2026-11-09 | Se comprobó que existe la web de Wix **Guía pastoral - Biblia** y figura como publicada. | https://headless-vffpmunurhz-apkcristianas-140d.wix-site-host.com/ |
| 2026-11-09 | El autor escogió **Uptodown como primera y única tienda inicial** y solicitó una ficha de **3 párrafos** con **3–6 imágenes**. | Decisión comunicada en conversación; imágenes a cargo del autor |
| 2026-11-09 | Se seleccionó el alias de difusión `https://tinyurl.com/GuiaPastoralBiblia`; **aún no activado ni verificado**. | Pendiente de alta en TinyURL y prueba de redirección |
| 2026-11-09 | Se identificó PR #69 (v1.10.1) y se abrió lista de QA de distribución; nombre/correo no coinciden con borrador anterior. | [Control QA y aprobación](CONTROL_QA_APK_UPTODOWN.md) |
| 2026-11-09 | Se redactaron instrucciones seguras de instalación y política de privacidad provisional; no están publicadas en Wix. | [Textos web](TEXTOS_WEB_INSTALACION_Y_PRIVACIDAD.md) |
| 2026-11-09 | Se documentó el correo profesional, el borrador de ficha y el plan de 10 pasos. | Este archivo y [actividad #67](https://github.com/cmiloarevalo-hash/Lago-1/issues/67) |
| 2026-11-09 | La APK está siendo terminada/compilada por otra IA; **no se ha publicado ni aprobado aún**. | Pendiente de entrega y pruebas |

**Actualización de bitácora:** cuando se reciba APK final, se aprueben imágenes, se envíe a revisión o se publique, añadir fecha, versión, responsables, SHA-256, enlace oficial y resultado de prueba. Mantener las entradas anteriores; no sobrescribir historia.

## 6. Referencias oficiales de Uptodown (consultadas 2026-11-09)

- [Cómo publicar una app](https://support.uptodown.com/hc/es/articles/360053260491-C%C3%B3mo-publicar-una-app-en-Uptodown) — formulario, metadatos, ficha, versión y licencia. Actualizado 07-10-2026.
- [Guía básica y coste](https://support.uptodown.com/hc/es/articles/4424141383181-Gu%C3%ADa-b%C3%A1sica-para-registrarse-y-publicar-apps-en-Uptodown) — publicación gratuita. Actualizado 07-10-2026.
- [Criterios de publicación](https://support.uptodown.com/hc/es/articles/360052792972-Criterios-de-publicaci%C3%B3n-de-apps-en-Uptodown) — posibles motivos de rechazo. Actualizado 20-10-2026.
- [Guía de capturas y ficha](https://support.uptodown.com/hc/es/articles/37101277576205-Gu%C3%ADa-ASO-y-buenas-pr%C3%A1cticas-al-publicar-aplicaciones-en-Uptodown) — al menos cuatro capturas recomendado; 200 palabras recomendado (no obligatorio).
- [Formatos soportados](https://support.uptodown.com/hc/es/articles/360053260051-Formatos-de-archivo-soportados-en-Uptodown) — APK y XAPK.
- [Plazos de revisión](https://support.uptodown.com/hc/es/articles/360061046792-Cu%C3%A1nto-tiempo-tarda-en-publicarse-una-aplicaci%C3%B3n-en-Uptodown) — no hay plazo garantizado.

## 7. Convenciones para futuras IA y colaboradores

Este es el **único documento fuente de verdad del material de publicación de Uptodown**. Antes de editar la web, redactar material comercial o preparar un envío:
1. Leer este archivo y la actividad [#67](https://github.com/cmiloarevalo-hash/Lago-1/issues/67).
2. Verificar que la APK final sea la versión aprobada y distinguir datos confirmados de propuestas.
3. Conservar la estructura de **3 párrafos + sección de 3 a 6 imágenes** hasta instrucción expresa del autor.
4. No publicar, reemplazar la APK, subir capturas, hacer cambios de tienda o lanzar descargas sin aprobación expresa.
5. Actualizar **este archivo, la bitácora y el Issue #67** cuando exista un hito real; no asumir que algo pendiente se completó.
6. Esta documentación es pública en GitHub: **nunca insertar claves de firma, contraseñas, datos privados ni tokens**. El correo profesional aquí documentado es visible públicamente.
