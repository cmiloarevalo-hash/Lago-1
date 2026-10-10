# La U 1.3 — QA Android DEBUG consolidada y cotejo visual

**Fecha:** 2026-10-10. **Autorización:** Issue #65, comentario #6095301528. **Baseline visual:** `feat/r13-p2-topic-ui @ 1df8964986030fa7c301b020cbdf360f2b3c9f5e`. **Paquete QA:** `com.lago.bibletopicexplorer.qa`; emulador `emulator-5554` (API 36). **NO** producción, merge ni release. Referencias: `evidence/r13-approved-ux-reference`, commit `90c0498`: `owner-01-coral.png`, `owner-02-natural.png`, `owner-03-marino.png`.

## Resultado visual de nueve capturas Android

[Hoja de contacto 3×3](qa-nine-screens-contact-sheet.jpg). Cada celda procede de PNG real separado; no se han generado renders de UI artificiales. Evidencia XML asociada para las 9 capturas. La estructura editorial real está muy por encima del baseline geométrico, pero **la fidelidad fotográfica/editorial NO es pixel-perfect** frente al Owner: imágenes originales ilustradas planas en lugar de paisajes/libro fotográficos y mayor densidad de versículo que el mockup. Se requiere dictamen visual humano.

| Tema | Hoy | Leer | Planes | Observación comparativa |
|---|---|---|---|---|
| Coral | [PNG](coral-hoy.png) / [XML](coral-hoy.xml) | [PNG](coral-leer.png) / [XML](coral-leer.xml) | [PNG](coral-planes.png) / [XML](coral-planes.xml) | Rosa claro, hero con paisaje, tarjeta superpuesta y CTA; verso diario real largo; imagen de libro y progreso. La primera captura de Leer se tomó con scroll desplazado y no muestra cabecera: repetición focal [coral-reader-top-recheck.png](coral-reader-top-recheck.png) confirma `Filipenses 4` y serif correctos. |
| Natural | [PNG](natural-hoy.png) / [XML](natural-hoy.xml) | [PNG](natural-leer.png) / [XML](natural-leer.xml) | [PNG](natural-planes.png) / [XML](natural-planes.xml) | Fondo claro salvia/beige, separaciones legibles, capítulo centrado, tarjeta editorial libro/7 días; arte más gráfico y menos fotográfico que referencia. |
| Marino | [PNG](marine-hoy.png) / [XML](marine-hoy.xml) | [PNG](marine-leer.png) / [XML](marine-leer.xml) | [PNG](marine-planes.png) / [XML](marine-planes.xml) | Marino mantiene fondo claro con CTA azul/dorado; misma arquitectura y 4 tabs; paisaje ilustrado no fotográfico. |

**Evaluación estructural:** los tres temas muestran imagen integrada, tarjeta de verso superpuesta, serif de lectura, CTAs pill, tarjetas de plan ilustradas, barra y siete pasos reales. La fidelidad de fotografía, ritmo de detalles, tipografía ornamental, iconos y resolución visual sigue siendo una decisión del Owner; **no confundir captura generada con aceptación del diseño**.

## Evidencia de módulos adicionales y flujos

| Caso | Evidencia | Resultado restringido |
|---|---|---|
| Navegación y selector tres temas | `*-settings.png/xml`, `drawer-marine.png`, `qa-matrix-*.log` | **PASS observado**: Coral/Natural/Marino seleccionados, acceso real a Hoy/Leer/Planes, pestañas inferiores Hoy/Explorar/Leer/Biblioteca visibles. Resto de secuencias Back anidadas: **NOT RUN** en esta ronda. |
| Guía pastoral | `pastoral-index.png`, `pastoral-acogida-expanded.png`, `pastoral-sources-linked.png/xml`, `qa-pastoral-run.log` | **PASS visual** ocho títulos/acordeón de Acogida y bibliografía breve azul visible con enlaces USCCB/UNICEF y RV1909. `pastoral-to-rv1909.png`, `pastoral-external-link.png` conservan evidencia de destinos. Verificación exhaustiva de todas las fuentes externas: **NOT RUN**. |
| Planes persistencia | `qa-plan-progress.log`, `plan-7of7.png/xml`, `qa-plan-reset.log`, `plan-restart-7of7.png`, `plan-reset-0of7.png`, `plan-note-preserved-after-reset.png` | **PASS observado** 7/7, cold restart mantuvo 7/7, reset confirmado 0/7 y nota sintética `NOTA_PLAN_QA_R13_PERSISTENTE` intacta. No borrar otra información privada. |
| Cancionero | `cancionero-index.png`, `cancionero-editor.png`, `cancionero-letra-guardada.png`, `cancionero-after-restart.png` | **Evidencia visual disponible** catálogo/editor/nota guardada y reinicio. Confirmación jurídica: **BLOCKED_LICENSE**, 0/20 letras externas licenciadas, originales pendientes. |
| YouTube | `youtube-pending.png` | **PASS de honestidad visual** ventana reconocible con estado playlist pendiente, sin fingir reproducción. Reproducción real: **BLOCKED_EXTERNAL** playlist aprobada ausente. |
| Escalado/legibilidad | `reader-scale-160.png/xml`, `reader-scale-200.png/xml`, `qa-access-reader-corrected.log` | **PASS de captura de lector real** para 160%/200% y restauración a 100%. No equivale a auditoría exhaustiva de TalkBack/contraste/targets, **NOT RUN** esos subcasos. |
| Notas/destacados lector, PDF/EPUB, respaldo, juegos trivia/VF/orden textual | Sin evidencia Android nueva específica en este directorio | **NOT RUN en esta ronda**: requieren QA focal, no inferir PASS. Pruebas fuente históricas no sustituyen Android. |
| Integridad core | Ningún cambio fuente al corpus RV1909 ni `topics.ts` en commit visual `1df8964`; pruebas fuente 135/135 PASS en entrega anterior | **PASS de preservación por diff**; no afirmar comparación completa de datos de usuario en emulador. |

## Compilación DEBUG QA y problemas de infraestructura

El historial contiene **cuatro invocaciones de Gradle** documentadas (`gradle-debug-build.log`, `gradle-debug-build-attempt2.log`, `gradle-debug-build-attempt3.log`, `gradle-debug-embedded-bundle.log`): 2 FAIL de configuración/entorno y 2 **BUILD SUCCESSFUL** (4m30s y 1m14s). El segundo empaqueta JS embebido; la app se abrió en emulador de paquete QA separado. No reinterpretar como «una única invocación perfecta». `app.config.js` es override LOCAL QA y `package.json` tiene ajuste efímero de script; **no se publican** para producto. Logs conservados en evidencia; ninguna firma/apk release generada.

## Hallazgos, corrección focalizada y pendientes

1. **INCIDENCIA DE EVIDENCIA RESUELTA SIN CAMBIO DE CÓDIGO:** `coral-leer.png` presenta scroll desplazado sin encabezado. Se reabrió lector, se desplazó al inicio y se capturó `coral-reader-top-recheck.png`: **PASS** del encabezado RV1909/«Filipenses 4». No repetir 9 capturas ni crear build por ello.
2. **DESVIACIÓN VISUAL ABIERTA:** arte procedural en capas de ilustración vs fotografía atmosférica de los tres mockups. Es sustantiva, requiere revisión Owner, no un error de color. El corpus real diario más largo reduce aire libre frente a la muestra del mockup.
3. **ACCESIBILIDAD PARCIAL:** lector real al 160/200 comprobado en capturas; navegación TalkBack, tamaños interactivos medidos, contraste automatizado real a escala completa y todos los scrolls **NOT RUN**.
4. **FUNCIONAL PARCIAL:** no declarar aprobados juegos completos, importación PDF/EPUB/backup, persistencia de notas/destacados o todas las rutas Back sin evidencia verificable; conservar gate específico en caso de exigirlo Supervisor.
5. **EDITORIAL / MEDIOS:** playlist YouTube y derechos de letras bloqueados; 28 sesiones/8 guías y contenidos pastorales sujetos a dictamen humano.

**Resultado de QA actual:** **EVIDENCIA VISUAL 3×3 COMPLETA / QA FUNCIONAL PARCIAL / REVISIÓN FINAL OBLIGATORIA**. Ningún fallo de prueba de fuente reportado para SHA integrado; no se lanza otra compilación Android ni se prueba producción. Solicitar decisión explícita del Supervisor sobre fidelidad visual y restantes NOT RUN antes de cualquier aprobación global.

`READY FOR SUPERVISOR R13 ANDROID VISUAL QA REVIEW`
