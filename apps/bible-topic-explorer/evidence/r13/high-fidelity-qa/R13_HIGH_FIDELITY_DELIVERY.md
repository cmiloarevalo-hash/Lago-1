# La U 1.3 — Corrección visual de alto contraste · entrega QA5

**Producto:** La U / Explorador Bíblico. **Fecha:** 2026-10-10. **Autorización:** orden de Product Owner [Issue #65, #6097630407](https://github.com/cmiloarevalo-hash/Lago-1/issues/65#issuecomment-6097630407). Rama de integración `feat/r13-p2-topic-ui` (no `main`). Se prepara una APK **DEBUG/QA `1.3-qa.5`, `versionCode 8`**, appId `com.lago.bibletopicexplorer.qa`, sin reemplazar la app oficial.

## Evidencia Android y fuente

- **Vitest: PASS 150/150, 32 ficheros.** Log `source-vitest.log`.
- **TypeScript: PASS `tsc --noEmit`.** Log `source-typecheck.log`.
- **DEBUG Android:** builds anteriores al nuevo cambio de metadata `gradle-debug-high-fidelity.log` (PASS) y recheck `gradle-debug-focal-recheck.log` (PASS), mismos cambios visuales. Build ARM64 final pendiente de registrar en `gradle-debug-arm64-delivery.log`.
- **9/9 capturas Android reales:** `qa-{coral,natural,marine}-{hoy,leer,planes}.png`; selector de tema adicional `qa-*-selector.png`. Capturadas en `emulator-5554` con `com.lago.bibletopicexplorer.qa`; traza `capture_matrix.log` con `NINE_SCREEN_MATRIX_PASS`. **6 rechecks** de Hoy y Planes tras ajuste de assets con `CHANGED_ONLY_6_PASS`, log `recapture_changed_only.log`. No se repitieron las 3 de Leer sin cambio causal.
- **Comparativa visual de 9 pares:** `comparison-owner-vs-android-3x3.jpg` pone original Owner a la izquierda y runtime Android a la derecha. Los originales están en la rama `evidence/r13-approved-ux-reference` (3 tripticos), sin copiarse como assets.

## Matriz honesta de fidelidad visual

| Variante | Pantalla | Resultado observado / desviación respecto a referencia |
| --- | --- | --- |
| Coral | Hoy | PASS color coral intenso y CTA, foto en hero y tarjeta editorial; composición actual más vertical y larga que mock, texto real Filipenses 4 no Salmos 23. |
| Coral | Leer | PASS RV1909 legible, subrayado coral y encabezado central; no reproduce UI de audio de referencia. |
| Coral | Planes | PASS botón coral, progreso de 7 días, foto y ornamento botánico visibles; estructura de planes reales y progreso local difiere de la referencia 3/7 estática. |
| Natural | Hoy | PASS oliva definido, fotografía cálida y tarjetas; hero actual de texto diferente y distintas tarjetas secundarias. |
| Natural | Leer | PASS acentos oliva, lector RV1909 y foco real Filipenses 4; diferente del Salmo 23 del mock, por contenido real. |
| Natural | Planes | PASS verde oliva, botánico y fotografía original licenciada; título real «Encuentro con Jesús» y días aún no marcados según fixture. |
| Marino | Hoy | PASS azul profundo en CTA/acciones y fotografía; presentación más densa que mock, legible. |
| Marino | Leer | PASS números/guía de color azul y encabezado bíblico; distinto contenido bíblico RV1909 real. |
| Marino | Planes | PASS CTA/progreso azul, foto contrastada y hojas; layout de lista de planes distinto al listado de días del mock. |

**Límite visual importante:** la implementación aumenta contraste y ornamentación **pero no es réplica pixel-perfect**. El mock es iOS «Luz»/RV1960; la app es Android «La U»/RV1909 y usa cuatro tabs. El Product Owner aún puede pedir una ronda adicional para igualar composición (sobre todo alturas de tarjeta hero, lectura y detalle de Planes). No declarar aceptación estética final por existencia de PNG.

## Activos, datos y derechos

Se conservan los dos orígenes fotográficos con licencia Unsplash y créditos [PHOTO_LICENSES.md](../../assets/editorial/PHOTO_LICENSES.md), ahora tratados con gradaciones más definidas. Tres ornamentos botánicos son trazados gráficos originales reproducibles con `scripts/render_editorial_photo_treatments.py`. Ningún pixel del mock se ha copiado como asset; ninguna marca «Luz», RV1960, canción, reproductor falso o letra ajena se añade. **Misma rama de UX:** SoundCloud enlace externo, YouTube y Cancionero ocultos; temas juveniles, 100 IDs, planes/notas/destacados sin limpieza, bibliografía y prototipo IA.

Se posponen según Owner: auditoría global TalkBack, PDF/EPUB nuevo, backup, revisión doctrinal y derechos musicales. Este QA evalúa compilación y apariencia de 9 pantallas; no avala un release de producción.

**Protección:** sin merge `main`, sin APK productivo ni firma release; app oficial y datos privados no tocados. Descarga del artefacto solo tras verificar APK, firma, checksum y publicar en rama independiente `downloads/r13-qa`. Último gate: evaluación visual del Owner en dispositivo físico.
