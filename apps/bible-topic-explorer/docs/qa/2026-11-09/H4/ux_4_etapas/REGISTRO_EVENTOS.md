# Libro de eventos UX H4 · 2026-11-09

Referente: [Plan en cuatro etapas](PLAN_QA_UX_4_ETAPAS.md). Sesión `UX-H4-20261109-S02`. Para cada evento futuro mantener identificador y agregar retest `R2` con **APK exacta, hash, fecha, configuración, esperado/observado, pasos y evidencia**. El informe anterior de teclado y fuente del mismo APK se reutiliza; no se duplican capturas.

| Evento | Casos | Estado/severidad | Observación verificada / pasos / evidencia | Acción futura |
|---|---|---|---|---|
| EV-H4-001 | E1-01/E1-02 | PASS parcial | Hoy, Explorar, Biblioteca y Leer navegan; [Hoy](A01_hoy_inicio.png), [Explorar](A02_explorar_portada.png) | Prueba de primer uso humano |
| EV-H4-002 | E1-03 | OBS P2 | Menú abre; Diario aparece tras deslizar, [menú](A04_menu_lateral.png), [desplazado](E01_menu_desplazado.png) | Validar descubribilidad antes de rediseño |
| EV-H4-003 | E2-01/E2-02 | PASS | Explorar → Dios y fe → Jesús → Marcos 8:27, pasaje resaltado; Atrás restaura tema y posición, [tema](C03_explore_jesus.png), [lector](C05_explore_to_reader.png), [retorno](C06_back_explore.png) | Repetir segunda familia |
| EV-H4-004 | E2-03 | PASS limitado | Guía capítulo 1 → Salmo 119:105 abre lector AT, Atrás retorna, [capítulo](D03_guia_capitulo1.png), [lector](D04_guia_enlace_salmo.png) | Verificar los 16 capítulos y NT |
| EV-H4-005 | E3-01 | **FAIL P1** | Misma APK, nota en Génesis 1:1: Gboard deja Guardar visible pero primer toque solo oculta teclado, segundo confirma, persiste tras reiniciar. [Capturas y pasos exactos](../control_zoom_teclado_1112/INFORME_CONTROL_ZOOM_TECLADO_1112.md) | Resolver un toque en Gboard; no cambiar texto |
| EV-H4-006 | E3-02 | **INCONCLUSO** | Se abrió Diario y editor ([captura](E03_diario_editor.png)); después de intentos ADB de texto apareció menú lateral ([captura](E04_diario_teclado.png)). El origen no se puede atribuir a la app con fiabilidad | Repetir con controlador único, no declarar bug ni pérdida de contenido |
| EV-H4-007 | E3-03 | OBS P2 | En Diario «Cancelar edición» aparece en regreso y barra de acciones, [editor](E03_diario_editor.png) | Medir confusión real con lectores |
| EV-H4-008 | E3-04 | OBS/PARCIAL | Plan «Encuentro con Jesús» incluye leyenda «texto original en revisión editorial», [tarjeta](F02_plan_tarjeta.png); iniciar y conservar progreso no probados | Determinar si rótulo editorial está destinado al público; consultar autor si hace falta |
| EV-H4-009 | E4-01 | **FAIL P1** solo APK anterior al arreglo | En fuente Android 100% saludo completo; 160/200% título tapado por tarjeta; mismo 360×740, densidad 160, zoom de visor sin cambios. [Evidencia](../control_zoom_teclado_1112/INFORME_CONTROL_ZOOM_TECLADO_1112.md) | Compilar y comprobar código posterior a `4d8b6e5`, no inferir de CI |
| EV-H4-010 | Método | OBS entorno | Capturas precoces de Hoy mostraron pantalla de carga blanca; se esperó estabilización para obtener evidencias válidas | No imputar pantalla blanca temporal a app |

**Estado de cierre:** evidencias de ADB, no estudio de usabilidad con participantes humanos. Incidencias P1 y pendientes impiden aceptar UX. PR #72 draft sin merge/publicación y QA5 intacto.
