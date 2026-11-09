# Programa QA UX · cuatro etapas continuas · H4 · 2026-11-09

**Work Item**: #67 · **PR**: #72 (draft). **Sesión**: UX-H4-20261109-S02. **AVD**: H4 DESKTOP-4H532OG, Android 13/API33, emulator-5556, pantalla 360×740, densidad 160 dpi y fuente del sistema 100% salvo prueba expresa. **APK instalada**: com.lago.bibletopicexplorer, 1.11.2 / versionCode 14, SHA256 `2f35e13a7d40b8c8f74a998bba60ae41d94c1090c0ad9aac173ac62f43644d7e`, binario anterior a la corrección de Hoy del commit `4d8b6e5`. **PR HEAD** a la consulta: `4d8b6e5ae2d82a87a2925accc0038025d413caaa`. El código HEAD no se equipara a la APK ensayada.

## Identificación invariable

`UX-E1-01` = caso 01 de etapa 1; `EV-H4-001` = evento 001. Para repetir mantener el mismo caso con ejecución `R2`/fecha/versión/firmas, sin sobrescribir resultados. Estados: PASS (observado), FAIL (incumplimiento demostrado), OBS (fricción o mejora no confirmada), INCONCLUSO (interferencia o prueba incompleta), PENDIENTE (no ejecutado). Incidencias: P0/P1/P2 según impacto. No dar «PASS» a una pantalla solo por una captura de carga o por CI. Un controlador del emulador por vez. Nunca modificar QA5, contenido aprobado RV1909 o guía pastoral v1.30, ni fusionar/publicar sin autorización.

## Etapa 1 — Descubrimiento y navegación

**Objetivo de usuario:** encontrar lectura, exploración, guardados y diario sin instrucciones. **Condición de continuidad:** cuatro destinos navegables y regreso predecible; registrar fricciones.

| Caso | Recorrido esperado | Resultado |
|---|---|---|
| UX-E1-01 | Abrir Hoy y comprender qué ofrece | PASS; [Hoy](A01_hoy_inicio.png) |
| UX-E1-02 | Usar pestañas Hoy / Explorar / Leer / Biblioteca | PASS parcial: Hoy/Explorar/Biblioteca y Leer observados, [Explorar](A02_explorar_portada.png), [Biblioteca](A03_biblioteca_portada.png) |
| UX-E1-03 | Localizar Mi diario desde menú | OBS P2: requiere desplazamiento, [menú](A04_menu_lateral.png), [desplazado](E01_menu_desplazado.png) |
| UX-E1-04 | Pulsar Atrás desde página secundaria | PASS para Explorar → lector → Explorar, [retorno](C06_back_explore.png) |
| UX-E1-05 | Tres tareas sin orientación, con persona real | PENDIENTE |

**Etapa 1: parcial**, no equivale a prueba de usuario humano.

## Etapa 2 — Lectura, comprensión y exploración

**Objetivo de usuario:** encontrar tema, abrir texto correcto, interpretar referencias y regresar sin perder contexto. **Condición de continuidad:** enlaces funcionales y ubicación comprensible.

| Caso | Recorrido esperado | Resultado |
|---|---|---|
| UX-E2-01 | Explorar → Dios y fe → Jesús | PASS, [familia](C02_explore_family.png), [tema](C03_explore_jesus.png) |
| UX-E2-02 | Jesús → Marcos 8:27 → Atrás | PASS, [referencias](C04_explore_jesus_links.png), [lector](C05_explore_to_reader.png), [retorno](C06_back_explore.png) |
| UX-E2-03 | Guía pastoral → capítulo 1 → Salmo 119:105 → Atrás | PASS limitado, [capítulo](D03_guia_capitulo1.png), [lector](D04_guia_enlace_salmo.png) |
| UX-E2-04 | Recorrer 16 capítulos completos y enlaces AT/NT | PENDIENTE; capítulo 1 no valida los 16 |
| UX-E2-05 | Selección contextual de frase y compartir en esta APK | PENDIENTE en sesión S02 |
| UX-E2-06 | Leer con conexión desactivada | PENDIENTE |

**Etapa 2: parcial.** No modificar el contenido editorial aprobado.

## Etapa 3 — Escritura, acciones y conservación de datos

**Objetivo de usuario:** realizar acciones con un solo toque; guardar y recuperar datos, sin perder borradores. **Condición de continuidad:** comprobación de persistencia y acciones nativas.

| Caso | Recorrido esperado | Resultado |
|---|---|---|
| UX-E3-01 | Escribir nota bíblica con Gboard abierto y Guardar en **un toque** | FAIL P1: primer toque oculta teclado, segundo guarda; persistencia PASS, [evidencia anterior de la misma APK](../control_zoom_teclado_1112/INFORME_CONTROL_ZOOM_TECLADO_1112.md) |
| UX-E3-02 | Crear diario, guardar, reabrir y proteger descarte | INCONCLUSO: editor abierto, pero captura tras ADB mostró menú sin explicación fiable; [editor](E03_diario_editor.png), [sesión interferida](E04_diario_teclado.png) |
| UX-E3-03 | Controles claros en diario | OBS P2: aparece «Cancelar edición» duplicado, [editor](E03_diario_editor.png) |
| UX-E3-04 | Comenzar plan y recuperar progreso | Parcial: catálogo y Comenzar visibles, ejecución pendiente, [planes](F01_planes_portada.png), [tarjeta](F02_plan_tarjeta.png) |
| UX-E3-05 | Activar recordatorio, recibirlo y entrar a día pendiente | PENDIENTE recepción y deep link |
| UX-E3-06 | Actualizar conservando notas, guardados, diario | PENDIENTE; nunca sobre QA5 |

**Etapa 3: abierta por FAIL P1, otros pendientes e INCONCLUSO.**

## Etapa 4 — Accesibilidad, coherencia y aceptación

**Objetivo de usuario:** texto legible y controles accesibles en dispositivos y preferencias habituales, sin confundir escalas.

| Caso | Recorrido esperado | Resultado |
|---|---|---|
| UX-E4-01 | Hoy en 360×740 con fuente Android 100/160/200% | FAIL P1 a 160/200%; **APK anterior al commit correctivo**; [informe anterior](../control_zoom_teclado_1112/INFORME_CONTROL_ZOOM_TECLADO_1112.md) |
| UX-E4-02 | Repetir fuente 100/160/200% en APK que incluya `4d8b6e5` | PENDIENTE |
| UX-E4-03 | Pantalla 320×640 y Gboard sin ocultar botones | PENDIENTE |
| UX-E4-04 | Marino/oscuro, contraste, selección, objetivos táctiles | PENDIENTE |
| UX-E4-05 | Android físico y lector humano | PENDIENTE |
| UX-E4-06 | Revisión visual consolidada y aprobación del autor | PENDIENTE |

**Etapa 4: abierta.** La fuente Android, el zoom de visualización del emulador, el zoom del navegador y el tamaño de fuente interno de la app son cuatro controles diferentes; registrar cuál se modificó.

## Flujo continuo de control

`E1 navegación → E2 lectura → E3 tareas y datos → E4 accesibilidad y revisión humana → correcciones mínimas → retest de casos afectados`.

Permitir pruebas independientes pese a defectos sin declarar el hito aceptado. **No resolver ahora los defectos encontrados:** primero completar inventario, registrar prioridades y consolidar una única solicitud de REWORK cuando haya suficiente evidencia. En cada ejecución: ID, pasos, esperado, observado, APK/SHA, dispositivo, escala, captura, estado, severidad, próximo paso. Los eventos verificables están en [REGISTRO_EVENTOS.md](REGISTRO_EVENTOS.md).
