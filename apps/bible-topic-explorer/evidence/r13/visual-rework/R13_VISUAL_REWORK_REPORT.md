# La U 1.3 — Rework visual focalizado · informe para revisión

**Fecha:** 2026-10-10. **Dictamen de origen:** [Supervisor #6095945205](https://github.com/cmiloarevalo-hash/Lago-1/issues/65#issuecomment-6095945205). **Rama:** `feat/r13-p2-topic-ui`; **baseline:** `7f5c1a10be1d66b8a6385008d8714a0093dd83cf`. **Resultado:** candidato visual corregido, Android DEBUG focal PASS en el alcance descrito; **NO** aceptación de diseño ni funcional global.

## Evidencia visual real contra baseline y tres referencias originales

- [Hoja ANTES vs AHORA: Hoy y Planes, Coral/Natural/Marino](visual-rework-before-after.jpg) — 12 screenshots Android reales, seis antiguos y seis actualizados; la hoja solo los redimensiona, no genera interfaces falsas.
- **Coral:** [selector realmente Coral](rework-coral-selected.png) → [Hoy](rework-coral-hoy.png) → [Leer en parte superior](rework-coral-leer-head.png) → [Planes](rework-coral-planes.png). XML homólogos; ver secuencia `qa_visual_rework_focal-retry.log`, comprobación `Filipenses 4` PASS.
- **Natural:** [Hoy](rework-natural-hoy.png) y [Planes](rework-natural-planes.png), junto a [selector](rework-natural-selected.png). **Marino:** [Hoy](rework-marine-hoy.png) y [Planes](rework-marine-planes.png), [selector](rework-marine-selected.png).
- **Guía pastoral:** [bibliografía al pie](rework-pastoral-footnote.png) / XML; **YouTube:** [pantalla pendiente honesta](rework-youtube-pending.png) / XML.
- **Referencias de aprobación del Owner:** [Coral](https://github.com/cmiloarevalo-hash/Lago-1/blob/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references/owner-01-coral.png), [Natural](https://github.com/cmiloarevalo-hash/Lago-1/blob/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references/owner-02-natural.png), [Marino](https://github.com/cmiloarevalo-hash/Lago-1/blob/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references/owner-03-marino.png).

### Comparación sustantiva — qué cambió de verdad

| Área | Antes `7f5c1a1` | Ahora, revisión focal | Observaciones restantes |
|---|---|---|---|
| Hoy 3 temas | Colinas/valles vectoriales planos en dos imágenes | Fotografía de montaña, amanecer, bosque y lago, coloreada independientemente en tres paletas claras; atmósfera, grano, profundidad de campo y texto sobre fondo con velo suave; estructura, RV1909, CTA pill y 4 quick links conservados | La fotografía licenciada no es la misma foto de los mockups. Versículo RV1909 real más largo requiere tarjeta vertical generosa: no recortar la Palabra para forzar fidelidad pixel. Owner decide. |
| Planes 3 temas | Ilustración plana de libro/taza | Fotografía real de libro abierto, taza y planta con luz difusa, gradaciones Coral/Natural/Marino; título en serif y progreso 0–7 sin cambios | Fotos más naturales y menos vectoriales; falta dictamen editorial final de Owner. |
| Guía · fuentes | Enlaces grandes, negritas, textos explicativos | Pie breve con institución/documento/año verificado: USCCB 1997, UNICEF 2018, Santa Sede 2019, RV1909 · 1909; enlaces `#155E99` discretos, texto 13.5sp, filas mínimas 48dp; sin URL cruda ni `checkedAt/reuseBasis` visible | Captura corresponde a Acogida; no proclamar test de los ocho desplegables ni abrir todos los enlaces. |
| Leer · Coral | Primera imagen sin cabecera por scroll; recheck anterior era paleta Natural | Secuencia nueva muestra selector Coral y encabezado `Filipenses 4` en scroll al inicio, usando solo revisión focal | PASS para encabezado y estado seleccionado; el resto de lector no fue modificado. |
| YouTube | Estado técnico `PENDIENTE_PLAYLIST` visible | Pie natural `Lista pendiente de aprobación`; ventana 16:9, sin vídeo ficticio, código interno original conservado | Reproducción real `BLOCKED_EXTERNAL` sin playlist aprobada. |

### Licencias y autoría

Dos fotografías **con licencia Unsplash explícita**, transformadas y almacenadas offline en `assets/editorial/`:
- [Jordan Moore, paisaje amanecer](https://unsplash.com/photos/sunrise-behind-jagged-mountains-over-a-serene-lake-zkxUih6aJg0) (publicación 2026-02-03).
- [Sixteen Miles Out, Biblia/libro con taza y planta](https://unsplash.com/photos/open-book-with-a-cup-of-coffee-and-plant-2U5JIp0jA-A) (2025-09-29).

[Documento de licencia, URL original y tratamiento](../../../assets/editorial/PHOTO_LICENSES.md); [Unsplash License](https://unsplash.com/license). Se conservan los dos JPG fuente para reproducibilidad, no se copian fotos de mockups ni marcas ajenas, ni se incorpora RV1960. `scripts/render_editorial_photo_treatments.py` genera los seis PNG por tema a partir de las dos fotos descargadas y gradación Pillow/NumPy (no dependencias en app ni red al ejecutarla). **Créditos documentales no sustituyen aprobación final de publicación por Owner.**

**Fuentes pastorales y años:** [USCCB Renewing the Vision (1997)](https://www.usccb.org/topics/youth-and-young-adult-ministries/renewing-vision); [UNICEF Adolescent Kit, training package (mayo 2018)](https://www.unicef.org/adolescentkit/reports/adolescent-kit-training-package-programme-leaders); [Santa Sede / Vicariato de Ciudad del Vaticano, directrices de menores (26 marzo 2019)](https://www.vatican.va/resources/resources_protezioneminori-lineeguida_20190326_en.html). La referencia vaticana tiene **ámbito institucional propio**, no reemplaza protocolos locales.

### Builds, pruebas y veracidad del resultado

**Emulador:** `emulator-5554`, paquete exclusivo `com.lago.bibletopicexplorer.qa`. Instalación `adb install -r` preservando datos del **paquete QA**; nunca se instaló ni limpió `com.lago.bibletopicexplorer` de producción.

**Gradle DEBUG focal — 3 invocaciones, registros separados:** primer intento `gradle-visual-rework-focal.log` **FAIL infra** (`ANDROID_HOME/sdk.dir` ausentes), segundo `gradle-visual-rework-focal-retry-sdk.log` **BUILD SUCCESSFUL (1m18s)**, tercero **incremental dirigido al bundle JS** `gradle-visual-rework-focal-bundle-recheck.log` **BUILD SUCCESSFUL (54s)**. Se comprobó hash SHA-256 idéntico del `assets/index.android.bundle` del APK DEBUG y del bundle compilado. No Gradle release ni firma productiva.

**Fuente:** TypeScript `tsc --noEmit` **PASS**, contratos afectados 23/23 existentes más 3/3 nuevos `src/ui/r13VisualReworkContract.test.ts` **PASS**. No se reran las 135 pruebas históricas no impactadas (PASS de SHA previo, no nueva QA).

**Ronda Android focal:** siete capturas de pantalla principal/planes/coral lector y selector, dos capturas secundarias; pruebas exitosas reflejadas en `qa_visual_rework_focal-retry.log` y `qa_pastoral_youtube_footer_recheck.log`. Intento preliminar de UI con click transitorio FAIL porque vista aún no se estabilizaba; reintento de matriz reparó el click; primera comprobación de fuentes quedó limitada por scroll y el recheck al pie confirmó **3/3 fuentes presentes, azules y clicables**. Ninguna corrección de lógica fue requerida por esos dos incidentes de automatización.

### Alcance conservado / STOP

**PASS históricos no afectados:** progreso 7/7, reset sin borrar nota, escritura del Cancionero privado, YouTube sin reproducción ficticia y lector a 160/200%, solo por revisión de diff contra `7f5c1a1`. **NO EQUIVALEN A NUEVOS PASS Android.**

**NOT RUN abiertos:** TalkBack completo, contraste real automatizado/targets en todos los dispositivos, notas y destacados del lector post-restart, secuencias completas Back, PDF/EPUB, respaldo, juegos trivia/VF/orden textual, validación íntegra de fuentes de las ocho guías. **BLOCKED:** playlists YouTube para reproducción, derechos externos (0/20), cuatro originales pendientes, juicio editorial de guías/planes/temas.

**Protecciones:** cambios únicamente `apps/bible-topic-explorer/**` UI/arte/contratos/evidencia; `main`, RV1909/66 libros, `topics.ts` con 100 IDs, notas/destacados, PDF/EPUB y datos privados no tocados. Sin merge ni APK producción. QA local `app.config.js` efímera eliminada después del build.

**STOP:** este checkpoint solicita revisión visual de la composición por Product Owner/Supervisor. **Ningún PASS de esta ronda da autorización de merge o release.**

`READY FOR SUPERVISOR R13 VISUAL REWORK REVIEW`
