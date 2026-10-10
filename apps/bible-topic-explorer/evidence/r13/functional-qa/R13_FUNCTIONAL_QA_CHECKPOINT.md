# La U 1.3 — QA funcional Android focal de continuación

**Fecha:** 2026-10-10. **GO Supervisor:** Issue #65, comentario [#6096215738](https://github.com/cmiloarevalo-hash/Lago-1/issues/65#issuecomment-6096215738). **ENTRY:** [#6096253441](https://github.com/cmiloarevalo-hash/Lago-1/issues/65#issuecomment-6096253441). **Candidato de código sin modificar:** `feat/r13-p2-topic-ui @ f5642680ad7a53581ce10b05c06614afe2bc8310`. **Emulador:** `emulator-5554`, paquete independiente `com.lago.bibletopicexplorer.qa`. El paquete oficial `com.lago.bibletopicexplorer` permanece instalado, sin interacción en esta sesión.

## Matriz de resultados nuevos: PASS solo en el alcance medido

| Caso / alcance Android realmente recorrido | Estado | Evidencia / límites |
| --- | --- | --- |
| Nota privada de RV1909, Filipenses 4:6 | **PASS** guardado + lectura posterior al cold restart | Texto ficticio `QA_R13_SYNTHETIC_NOTE_20261010`. [captura de nota reabierta](note-read-after-restart.png) y [log](qa_verify_after_restart.log). Se comprobó la burbuja de nota tras reinicio. |
| Destacado de versículo, Filipenses 4:6 | **PASS** rosa persistente tras cold restart | [Captura previa](note-and-mark-before-restart.png), [reapertura](note-read-after-restart.png), [log](qa_verify_after_restart.log). No se sobrescribió una nota existente; el versículo estaba libre de nota. |
| Trivia | **PASS** una respuesta correcta, feedback, salto a pregunta 2 y reinicio a pregunta 1/0 puntos | [captura](games-trivia-correct.png), [log](qa_games_resume.log). No se afirma haber agotado las cinco preguntas. |
| Verdadero/Falso | **PASS** respuesta en Juan 15, feedback, salto a pregunta 2 y reset a 0 puntos | [captura](games-truefalse-feedback.png), [log](qa_games_finish.log). No se afirma haber agotado todas las preguntas. |
| Ordenar versículos | **PASS** etiquetas reales Salmos 23:1–3, orden `2,3,1` → `1,2,3`, mensaje de acierto y nueva mezcla | [captura](games-sequence-complete.png), [log](qa_games_finish.log). Las etiquetas vienen del corpus local RV1909. |
| Android Back anidado y salida | **PASS** Juegos → Dinámicas → lector Filipenses 4 → Hoy → aviso de salida → **Cancelar**, app permanece | [log](qa_back_nested.log), [capturas de paso](back-games-to-activities.png), [diálogo raíz](back-root-confirmation.png). No implica regresión exhaustiva de todas las rutas Back. |
| EPUB local existente de QA | **PASS** dos secciones legibles, Anterior → Siguiente, vuelve a sección 2, índice conservado | Ficción `LaU-QA-test.epub` **previamente importada** (1 KB); [primera sección](epub-first-chapter.png), [segunda](epub-second-chapter-restored.png), [log](qa_epub_reader.log). Importar EPUB nuevo: **NOT RUN**. |
| PDF local existente de QA | **PASS** progreso 10% → 20% → cold restart → 20%, restaurado a 10% | Ficción `LaU-QA-test.pdf` **previamente importada** (1 KB); [antes](pdf-progress-20-before-restart.png), [tras reinicio](pdf-progress-20-after-restart.png), [log](qa_pdf_verify.log). Apertura en visor externo e importación nueva: **NOT RUN**. |
| Selector de documentos | **PASS limitado**: abrir selector Android y cancelarlo sin importar archivo; mensaje «Selección cancelada» | [script](qa_books_cancel.py), [log](qa_books_cancel.log). El primer Back ascendió un nivel dentro de DocumentsUI; un segundo Back devolvió a la app sin crear registro nuevo. |
| `main` / datos oficiales / APK release | **SIN INTERVENCIÓN** | No se instalaron APK, no se compilaron builds, no hubo desinstalación, limpieza de datos, ni cambios de código. Únicamente fixtures YA existentes y nueva nota/destacado **dentro del paquete QA aislado**. |

## Incidencias del *harness* (NO atribuir falsos FAIL de producto)

1. Un primer script exigía que un banner temporal «Nota privada guardada» siguiera visible; había desaparecido, pero la nota estaba realmente guardada: burbuja y contenido confirmado después de cold restart. Ver [log inicial](qa_notes_persistence.log).
2. La primera versión de prueba de juegos pulsó «Verdadero/falso» al buscar «Verdadero» por subcadena; se corrigió la selección exacta y la ronda definitiva pasó. Ver [log fallido](qa_games_resume.log) y [log final](qa_games_finish.log).
3. Justo después de relanzar la app QA, una lectura de `uiautomator` devolvió nodos vacíos antes de que la pantalla terminara de estabilizarse; la revalidación del progreso PDF tras el arranque confirmó el 20% persistente. Ver [log inicial](qa_pdf_progress.log) y [log final](qa_pdf_verify.log).
4. En DocumentsUI, Back desde una subcarpeta volvió al directorio padre, no inmediatamente a La U. Segunda pulsación canceló sin importar archivo; no se clasificó como defecto.

Se guardan scripts y logs diagnósticos para auditoría, incluso intentos iniciales fallidos. Los `PASS` definitivos son los descritos en la matriz; no reinterpretar errores de automatización como éxito de productos sin recheck.

## Pendientes que NO pasan a PASS por este checkpoint

- **NOT RUN:** prueba de **TalkBack** real (locución/foco), contraste/targets medidos sistemáticamente, reflujo exhaustivo; importación *nueva* PDF/EPUB y visualización PDF con app externa; exportación y verificación del contenido del respaldo privado; apertura de todas las URL externas de los ocho temas pastorales; rutas Back ajenas al recorrido probado; funciones no cubiertas explícitamente por esta tabla.
- **BLOCKED_EXTERNAL:** playlist YouTube aprobada y verificación de reproducción real. Estado visual de espera ya aceptado en gate anterior.
- **BLOCKED_LICENSE / EDITORIAL:** distribución de 20 letras ajenas, cuatro borradores originales, dictamen de 28 sesiones, ocho guías y las fichas de 100 temas.
- **VISUAL OWNER SIGNOFF PENDING:** aprobación estética de las fotos y la composición Coral/Natural/Marino por el Product Owner. El Supervisor aceptó el rework focal; no es autorización de publicación.

## Protección, alcance y siguiente gate

Esta continuación usa **el APK QA instalado** y no contiene nuevo código funcional ni builds. El único cambio versionable son **scripts, logs, XML, capturas y este informe** bajo `apps/bible-topic-explorer/evidence/r13/functional-qa/**`. `main`, RV1909/66 libros, 100 `topicIds`, preferencias y datos privados de producción no fueron tocados. No confundir el package `com.lago.bibletopicexplorer.qa` con la versión productiva.

**STOP PARA SUPERVISOR:** decidir si completar pruebas NOT RUN restantes en otro bloque focalizado. No hay GO de merge, release ni APK de producción; el plan anterior 7 tareas/40 horas continúa CANCELADO.

`READY FOR SUPERVISOR R13 FUNCTIONAL QA CHECKPOINT REVIEW`
