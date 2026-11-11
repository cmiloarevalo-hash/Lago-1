# QA UX ASUS — checkpoint de cuatro etapas (11-11-2026)

**Work Item:** #67; **PR candidata:** #72 (draft); **ejecución:** ASUS-UX-R2-20261111.
**Regla:** este checkpoint complementa, no reemplaza, el [programa de 23 casos y 4 etapas](../../2026-11-09/H4/ux_4_etapas/PLAN_QA_UX_4_ETAPAS.md) y el [registro previo](../../2026-11-09/H4/ux_4_etapas/REGISTRO_EVENTOS.md).
**Decisión:** NINGUNA ETAPA CERRADA. Se probó una muestra de flujos reales, no la matriz íntegra ni usuarios físicos; no autoriza corrección irrestricta, aceptación de UX, merge ni publicación.

## Identidad de prueba y controles
- Host: ASUS Windows 11, AMD Ryzen 7 7445HS, Android SDK local; emulador **creado exclusivamente para este trabajo**: `Lago1_QA_ASUS_API36`, ADB `emulator-5580`, Android **16 / API 36**.
- Resolución física inicial `320x640`, densidad `160`; se probó además `wm size 360x740`. Escala tipográfica nativa Android `font_scale=1.0/1.6/2.0`; **no** zoom del visor/navegador. Restaurado `320x640` y `font_scale=1.0`, avión desactivado.
- APK instalada SOLO en ese AVD: `Biblia-RV1909-v1.11.2-PR72-994d-TECLADO-PRUEBA.apk`; `com.lago.bibletopicexplorer`; `versionName=1.11.2`, `versionCode=14`, 88.146.240 bytes, SHA-256 **`2f35e13a7d40b8c8f74a998bba60ae41d94c1090c0ad9aac173ac62f43644d7e`** (verificado antes de instalar).
- **Crítico:** APK de la revisión documental `994d171`, anterior al arreglo de cabecera de `4d8b6e5`. El PR #72 tenía HEAD `4d8b6e5ae2d82a87a2925accc0038025d413caaa`; NO se ha producido/instalado una APK demostrablemente generada desde ese HEAD. Las fallas de cabecera observadas NO desacreditan el arreglo no instalado.
- Sin alteración de QA5 ni de los dos AVD preexistentes del ASUS. El AVD consumió recursos y tardó en iniciar; esos eventos de entorno no se clasifican como defectos de la app.

## Estado por etapa (sin cierres)
| Etapa | Casos de programa | Ejecuciones observadas | Por qué NO se cierra |
|---|---|---|---|
| **1 — Descubrimiento** | UX-E1-01…05 | Hoy, Explorar, Leer, Biblioteca y menú navegables | Falta 1er uso y 3 tareas sin guía con lector humano; menú requiere scroll para Diario |
| **2 — Lectura/exploración** | UX-E2-01…06 | Jesús → Marcos 8:27 → Atrás; guía capítulo 1 → Salmo 119:105; selección nativa y Share Android; Éxodo 1 con modo avión | Falta revisión exhaustiva de 16 capítulos y referencias, y validación humana; regreso guía pierde scroll |
| **3 — Acciones y persistencia** | UX-E3-01…06 | Nota 2 párrafos guardada y recuperada tras reinicio; Diario guardado; día 1 de plan completado; selector horario nativo | **P1 Guardar nota necesita 2 toques con teclado**; falta reabrir diario/plan tras reinicio, entrega de notificación y migración |
| **4 — Accesibilidad y aceptación** | UX-E4-01…06 | 320x640 y 360x740, fuente 100/160/200%, aspecto Marino, teclado Gboard | **P1 cabecera Hoy solapada a 160/200% en APK anterior a 4d8b6e5**; falta APK corregida, dispositivo físico y revisión visual humana |

## Eventos nuevos (continuación del registro, IDs únicos)
| Evento | Prueba | Esperado / observado | Estado / siguiente acción |
|---|---|---|---|
| **EV-H4-011** | UX-E1-01/E1-02 | En 320x640 se muestran y abren 4 pestañas; Biblioteca tiene 0 favoritos/0 notas en instalación limpia. [Captura](ASUS_E1_04_biblioteca.png) | **PASS técnico parcial**; falta lector sin instrucciones |
| **EV-H4-012** | UX-E1-03 | Diario existe pero exige desplazar menú; sin indicio de inaccesibilidad | **OBS P2**; estudio de descubribilidad |
| **EV-H4-013** | UX-E2-01/E2-02 | Explorar → Dios y fe → Jesús → Marcos 8:27, pasaje 27 resaltado; Atrás retorna al tema. [Lector](ASUS_E2_02_marcos_reader.png) | **PASS** para ese recorrido |
| **EV-H4-014** | UX-E2-03 | Guía cap. 1 abrió Salmo 119:105; Atrás devolvió **a la portada de Guía**, no a la posición/capítulo abierto | **OBS P2**, registrar pérdida de contexto; no modificar contenido autoral sin autorización |
| **EV-H4-015** | UX-E2-05 | Pulsación larga en «principio» de Génesis 1:1 mostró selección nativa con marcadores y Copy/Share; Share abrió panel Android y previsualizó «principio». [Selección](ASUS_E2_05_selection_native.png) | **PASS** |
| **EV-H4-016** | UX-E2-06 | Modo avión activado y reinicio de app; **Éxodo 1 se leyó sin conexión**. Modo avión desactivado al concluir. [Offline](ASUS_E2_06_offline_exodo1.png) | **PASS** para texto local; no extrapolar a PDF/EPUB |
| **EV-H4-017** | UX-E3-01 | Génesis 1:1: escribir dos párrafos con Gboard, tocar **una vez** Guardar: Gboard se cierra pero nota sigue en editor; tocar **segunda vez**: confirma guardado. Reiniciar: Biblioteca muestra ambos párrafos. [Antes](ASUS_E3_note_two_lines.png), [primer toque](ASUS_E3_note_first_save.png), [segundo toque](ASUS_E3_note_second_save.png), [persistencia](ASUS_E3_note_persisted.png) | **FAIL P1** reproducido en ASUS Android 16 y H4 Android 13: Guardar debe funcionar al primer toque sin cerrar teclado previamente |
| **EV-H4-018** | UX-E3-02/E3-03 | Diario nuevo «Diario ASUS QA», dos párrafos, Guardar reflexión: mensaje «Reflexión guardada» y entrada año 2026 en listado. Editor incluye dos «Cancelar edición» (texto arriba y acción junto a Guardar). [Guardado](ASUS_E3_diario_saved.png) | **PASS guardado inicial**; **OBS P2 redundancia**; persistencia tras reinicio/descarte no verificados en ASUS |
| **EV-H4-019** | UX-E3-04 | Plan «Encuentro con Jesús» inicia, día 1 visible, se pulsa «Marcar día completado» y pasa a «Marcar como pendiente». [Marcado](ASUS_E3_plan_day1_marked.png) | **PASS interacción local**, persistencia tras reinicio pendiente. La tarjeta muestra «texto original en revisión editorial»: **OBS editorial**, decidir si visible al público |
| **EV-H4-020** | UX-E3-05 | Ajustes muestran plan próximo «día 2 de 7», nombre de recordatorio editable y selector Android nativo de hora. Se interactuó con selector horario; **no** se confirmó entrega efectiva ni deep link | **PARCIAL**, no declarar avisos funcionando |
| **EV-H4-021** | UX-E4-01/E4-03 | En `360x740` al `font_scale=1.6/2.0` saludo «Qué bueno que estás aquí» queda cubierto por tarjeta; 100% legible. [160%](ASUS_E4_hoy_360_font_1_6.png), [200%](ASUS_E4_hoy_360_font_2_0.png). En 320x640 al 160/200 también hay solape; cabecera y etiqueta Biblioteca reacomodadas | **FAIL P1** **solo de APK previa** al parche `4d8b6e5`; repetir una vez compilado ese HEAD. No confundir escala del sistema con zoom del visor |

## Próximas acciones controladas
1. **No dar por terminada ninguna etapa.** Continuar primero los pendientes E1 humano y E2 16 capítulos; registrar las ejecuciones de forma acumulativa.
2. En E3 retestar **P1 nota/teclado** sobre una APK de nuevo HEAD, recuperar Diario y plan tras cierre/reinicio, comprobar recordatorio **entregado**, links, y datos tras upgrade en AVD aislado.
3. En E4 repetir 320x640 y 360x740 × `1.0/1.6/2.0` sobre APK verificablemente construida desde `4d8b6e5` **o posterior**, luego oscuro/Marino, Android físico, validación visual humana consolidada.
4. No alterar RV1909, guía autoral v1.30, QA5 ni publicar/fusionar PR #72. Clasificar PASS solo pasos realmente observados; para cambios no compilados usar PENDIENTE, no PASS/FAIL.

**Evidencia**: las capturas adjuntas a este checkpoint son screenshots ADB originales capturados en el ASUS, sin zoom o redimensionado post-proceso. Otros screenshots de la sesión siguen en la carpeta local del ASUS. Este documento es el registro central GitHub de los hallazgos y no implica aceptación de la UX.
