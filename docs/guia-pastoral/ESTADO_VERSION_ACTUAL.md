# Estado de la versión actual — Biblia Reina-Valera 1909 - Guía Pastoral

**Corte de verificación:** 2026-11-09 (America/Santiago).  
**Repositorios y fuente de la aplicación:** [cmiloarevalo-hash/Lago-1](https://github.com/cmiloarevalo-hash/Lago-1), `apps/bible-topic-explorer/`.  
**Este documento identifica la candidata más reciente, no declara autorización de publicación.**

## 1. Últimas versiones y su relación

| Componente / etapa | Identificación exacta | Integración y aceptación |
| --- | --- | --- |
| **Candidata Android más reciente** | **Biblia Reina-Valera 1909 - Guía Pastoral**, `versionName 1.10.1`, `versionCode 11`, `applicationId com.lago.bibletopicexplorer` | Rama `feat/v111-bible-reader-library-journal-20261109` @ `54f687b8d7f547c6f839869410dcefc52de58e0c`; [PR #69](https://github.com/cmiloarevalo-hash/Lago-1/pull/69) **borrador**, base PR #68; **NO fusionado, NO publicado** |
| Candidata anterior | Guía pastoral - Biblia, `versionName 1.10.0`, `versionCode 10` | Rama `feat/v110-reader-explore-menu-20261108` @ `a032c81460e9b24f523e58f23b49744c7988c28b`; [PR #68](https://github.com/cmiloarevalo-hash/Lago-1/pull/68) **borrador**, no fusionado |
| **Último prototipo físicamente aceptado** | **La U 1.3 QA5**, `versionName 1.3-qa.5`, `versionCode 8`, `com.lago.bibletopicexplorer.qa` | Instalación y aceptación declaradas por el Product Owner el 26-10-2026. Conservado como baseline en `main`; **no equivalen sus paquetes ni firmas** |
| **Última fuente editorial** | **Guía pastoral: «El camino de Jesús y sus enseñanzas» v1.30** | Documento autoral `docs/guia-pastoral/Guia_Pastoral_El_camino_de_Jesus_y_sus_ensenanzas_v1.30.docx`, con 16 capítulos y 4 temas; contenido integrado en PR #68 y heredado por PR #69 |

**La nomenclatura vigente reemplaza los rótulos antiguos «La U» / «Guía pastoral - Biblia» solo en el nombre de producto de la candidata; los documentos históricos y las APK previas conservan sus nombres originales por trazabilidad.**

## 2. Evidencia de compilación e integridad de la candidata 1.10.1

- **M2**: [workflow 42562061977](https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/42562061977), `success`; TypeScript, **162 pruebas en 35 archivos**, comprobación de dependencias y bundle Android.
- **M5**: [workflow 42562062000](https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/42562062000), `success`, para el mismo commit `54f687b8d7f547c6f839869410dcefc52de58e0c`.
- Archivo APK: `Biblia-Reina-Valera-1909-Guia-Pastoral-v1.10.1-PRUEBA.apk`, **87.618.632 bytes**; suma SHA-256 **`fea39101ff04f531d121c78eb5b4df0fe53be9622e4134e92a87210839e9b06c`** comprobada contra el checksum del artefacto original.
- Descarga directa: [APK de prueba](https://raw.githubusercontent.com/cmiloarevalo-hash/Lago-1/downloads/v1101-qa/Biblia-Reina-Valera-1909-Guia-Pastoral-v1.10.1-PRUEBA.apk), [ZIP](https://raw.githubusercontent.com/cmiloarevalo-hash/Lago-1/downloads/v1101-qa/Biblia-Reina-Valera-1909-Guia-Pastoral-v1.10.1-PRUEBA.zip), [SHA-256](https://raw.githubusercontent.com/cmiloarevalo-hash/Lago-1/downloads/v1101-qa/Biblia-Reina-Valera-1909-Guia-Pastoral-v1.10.1-PRUEBA.apk.sha256).
- Los enlaces públicos directos de APK y ZIP respondieron **HTTP 200** y devolvieron el `Content-Length` esperado en comprobaciones desde el equipo conectado. **Esto no demuestra por sí solo instalación en el celular**.
- Archivos hospedados en rama técnica `downloads/v1101-qa`, separada de `main`; **no son la URL definitiva de la tienda**.
- Identificadores Android según `app.json` del commit probado: `name=Biblia Reina-Valera 1909 - Guía Pastoral`, `version=1.10.1`, `package=com.lago.bibletopicexplorer`, `versionCode=11`, `scheme=guiapastoralbiblia`.

## 3. Funciones implementadas en el código de 1.10.1

| Área | Cambio registrado | Límite de verificación |
| --- | --- | --- |
| Biblia / lector | Selección nativa de tramo textual, **Copiar selección** exacta, barra inferior de acciones, notas, destacados y compartir | Requiere QA táctil de pulsación larga y arrastre de marcadores |
| Textos bíblicos y pastorales | Selección habilitada en textos de lectura y desarrollo, incluidos planes y guía | Comprobar en cada pantalla sobre Android |
| Notas | Editor en contexto redimensionable al abrir teclado (`softwareKeyboardLayoutMode=resize`) | Comprobar teclado físico/virtual y solapamientos |
| Guardados | Pantalla propia; título, tema y color por referencia; almacenamiento local mediante tabla aditiva | Comprobar migración y persistencia |
| Actividad reciente | Pantalla propia por fecha y capítulo, con hora local; historial rápido permanece en Biblioteca | Verificar hora/zona del dispositivo |
| Diario de reflexiones | Desde el menú hamburguesa; se separa de Biblioteca y conserva la reflexión anterior en tabla local | Comprobar edición, reinicio y agrupación anual |
| Recordatorios | Nombre libre y plan bíblico; día pendiente del plan, notificación local y apertura de destino | Verificar permiso y disparo real de Android |
| Identidad, contacto y menú | Nombre nuevo, correo `apkcristianas@gmail.com` en enlace `mailto:`; Juegos/SoundCloud ocultos, Dinámicas pastorales disponibles; retirado rótulo de «sin conexión» | Comprobar diseño y enlace de correo |
| Guía pastoral | Texto autoral **v1.30**, 16 capítulos, 16 preguntas y referencias vinculadas al RV1909 local | La revisión editorial y QA visual final siguen siendo controles distintos |

El corpus RV1909 se conserva en SQLite local. **Eliminar el rótulo «sin conexión» no significa eliminar lectura sin internet.**

## 4. Pendiente o fuera de esta candidata

1. **QA Android física/emulador:** capturas actuales y prueba de selección por palabra, copia parcial, notas con teclado abierto, accesibilidad, navegación, enlaces compartidos, historial, migración y permisos/notificaciones. El AVD del PC no arrancó por falta de controlador de aceleración; capturas anteriores de R1.3/QA5 **no validan** la nueva candidata.
2. **Identidad de producción:** firma/certificado definitivo, instalación y actualización, seguridad de datos, aprobación del propietario; no sustituir QA5 automáticamente.
3. **Acceso con Google:** aún no hay credenciales OAuth ni proyecto Supabase conectado, ni base de datos remota de correos configurada; no registrar usuarios ni almacenar correos sin autorización y configuración reales.
4. **Noticias y boletines:** no se ha habilitado servicio de correo masivo/push; debe requerir consentimiento independiente, bajas y tratamiento de datos documentado. La notificación **local de un plan de lectura no es una notificación push comercial**.
5. **Enlaces de versículos a nuevos usuarios:** esquema `guiapastoralbiblia://` para dispositivos con app; faltan dominio HTTPS y destino de instalación/fallback verificado.
6. **Tienda y difusión:** no hay confirmación de APK de producción aprobada, ficha publicada en Uptodown ni TinyURL activo; seguir [plan de publicación](PUBLICACION_UPTODOWN.md).

## 5. Decisiones y continuidad

- El Product Owner autorizó cambios posteriores al congelamiento del 26-10-2026 específicamente para la aplicación y guía; esto **no convierte automáticamente las demás tareas antiguas en autorizadas**.
- El código 1.10.1 **no está fusionado en `main`**; la PR #69 depende de #68. No confundir **compilar**, **probar automáticamente**, **aceptar visualmente**, **fusionar** e **instalar/publicar**.
- Preservar `docs/r13/PROTOTIPO_ESTABLE_ACEPTADO_QA5.md` y capturas históricas sin reescribirlas como evidencia 1.10.1.
- Fuentes: [PR #68](https://github.com/cmiloarevalo-hash/Lago-1/pull/68), [PR #69](https://github.com/cmiloarevalo-hash/Lago-1/pull/69), [actividad #67](https://github.com/cmiloarevalo-hash/Lago-1/issues/67), [M2](https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/42562061977), [M5](https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/42562062000), [aceptación QA5](../r13/PROTOTIPO_ESTABLE_ACEPTADO_QA5.md).
