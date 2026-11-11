# Etapa 4 — Auditoría de accesibilidad y visualización (E4-R6)

**Fecha:** 11-11-2026 · **Supervisor QA:** ASUS / Android · **Work Item:** #67 · **PR:** #72 (**draft**)
**Dictamen:** **EJECUCIÓN TÉCNICA PARCIAL / BLOQUEADA PARA ACEPTACIÓN**. Esta acta registra lo verificado y lo que no pudo terminarse. **No declara etapa 4 cerrada ni aplicación aprobada**.

## Baseline y separación de escalas

- AVD de QA `Lago1_QA_ASUS_API36` / serial `emulator-5580`, Android 16 API36; configuración normal: 320×640, densidad 160 dpi, fuente Android `font_scale=1.0`.
- APK que sí se pudo ejecutar: `com.lago.bibletopicexplorer` **1.11.2 / versionCode 14**, SHA-256 `2f35e13a7d40b8c8f74a998bba60ae41d94c1090c0ad9aac173ac62f43644d7e`, desde revisión de prueba `994d171`. **No contiene** la modificación posterior del título de Hoy `4d8b6e5`.
- Controles distintos: (1) tamaño real/resolución AVD, (2) `font_scale` de Android, (3) preferencia «Tamaño de lectura» propia de la app, (4) zoom de visor de capturas/GitHub. **Las capturas no se redimensionaron ni se aplicó zoom externo**. `200%` es una condición extrema de accesibilidad, **no** el tamaño normal ni una razón por sí sola para calificar la app como defectuosa.
- Restaurado `font_scale=1.0` y resolución física `320x640`. La preferencia de tema fue cambiada a Marino **solo en AVD de QA** para esta revisión.

## Matriz y registro de eventos

| Evento / caso | Qué se hizo y evidencia | Observado | Estado / corrección futura |
| --- | --- | --- | --- |
| **EV-H4-041 / UX-E4-01** | Hoy a 360×740 y fuente Android 100/160/200%, capturas **estables anteriores** de la misma APK [160%](../ASUS_E4_hoy_360_font_1_6.png), [200%](../ASUS_E4_hoy_360_font_2_0.png). | A fuente normal la cabecera es legible; a **160% el saludo queda parcialmente cubierto por la tarjeta**, a 200% el recorte es mayor. No es zoom de imagen. | **FAIL P1 de esta APK antigua**, no de `4d8b6e5`. 200% es prueba de estrés; priorizar corrección/validación a 160%. |
| **EV-H4-042 / UX-E4-02** | Inspección de revisión más reciente: `TodayScreen.tsx` cambió de blob `8a2bb4ae93cfc3bf8ada08f0ac84daa278fde634` a `997008dfe0fa8230aae5234806d3fd38d3380933`. Introduce `fontScale>=1.3`, altura flexible del hero y `overlapLargeText.marginTop=0`. Se intentó preparar toolchain local, pero `npm ci --offline` carecía de `xcode-4.0.0.tgz`, y la instalación con acceso al registro se interrumpió al degradarse la RAM/AVD. No había APK generada desde ese HEAD. | **El parche está en código, NO probado en Android.** El AVD tenía solo el APK 1.11.2 anterior. | **BLOQUEADO / PENDIENTE**: obtener APK firmada/debug identificada con commit SHA y retestar 320/360 × 100/160/200%. No afirmar éxito ni fracaso del parche. |
| **EV-H4-043 / UX-E4-03** | Android 16, 320×640, sistema al 100%, tema Marino: [nota y Gboard](E4_note_keyboard_marine_320_100.png). | «Guardar nota» y «Cancelar edición» quedan visibles sobre el teclado; campo muestra 2 párrafos. | **PASS de visibilidad a 100%.** El **fallo funcional ya existente** de primer toque de Guardar se mantiene en `UX-E3-01 / EV-H4-033` (no duplicar). **160% y 200% con Gboard** no validados por interrupción de entorno. |
| **EV-H4-044 / UX-E4-04** | [Ajustes Natural](E4_settings_default.png), [Marino seleccionado](E4_marine_settings.png), [Hoy Marino](E4_marine_home.png), [Génesis Marino](E4_genesis1_marine.png). Auditoría estática de `src/ui/theme.ts` [ratios por combinación](E4_contrast_declared_colors.json). | Tres apariencias públicas de fondos claros: Coral, Natural, Marino. Colores principales texto/fondo y controles en esos tres temas: **mínimo 5.29:1** de contraste en los pares auditados, arriba de umbral WCAG AA 4.5:1 para texto normal. La fuente define `minimumTouchTarget=48` y se usa en varios componentes (p. ej. enlaces, versículos, opciones). | **PASS parcial** visual a 100% y estático para pares de colores seleccionados. **No prueba** todos los fondos fotográficos, tamaños táctiles renderizados, lectores de pantalla ni modo oscuro del SO. La app no expone un cuarto tema oscuro en Ajustes: **OBS P2 de alcance/producto**, no defecto sin requisito. |
| **EV-H4-045 / UX-E4-05** | Android físico y lector humano completando 3 tareas sin guía | No se conectó dispositivo físico ni participó un lector humano en esta ejecución. La automatización ADB no sustituye esta evaluación. | **PENDIENTE de prueba humana** (incluye deuda `UX-E1-05`), sin PASS. |
| **EV-H4-046 / UX-E4-06** | Revisión visual consolidada con aprobación del autor antes de publicación | No se pidió/obtuvo aprobación visual del autor ni se presentó una APK de HEAD corregido. | **PENDIENTE**. PR #72 sigue draft; no autorizar merge/publicación. |

## Incidentes de entorno — no imputar automáticamente a la APK

- **ENV-E4-001:** en la primera matriz automatizada de seis capturas, Android mostró el diálogo **«System UI isn't responding»** tapando el centro. [Captura inválida de matriz](E4_anr_obstruye_hoy_320_100.png). **Las seis imágenes se excluyeron de la evaluación visual**. Tras elegir «Wait», se capturó [Hoy limpio 320×640 / 100%](E4_after_wait.png). Esta ANR de System UI tiene origen no determinado y no constituye por sí sola un fallo de Guía Pastoral.
- **ENV-E4-002:** durante la prueba de Gboard al pasar el sistema a `font_scale=1.6`, el emulador mostró actividad ajena a Guía Pastoral. `dumpsys activity` confirmó `topResumedActivity=app.sopadeletras.cristiana.debug/...MainActivity`. **Se detuvieron las interacciones con ese AVD para no interferir con otra prueba.** La captura de esa otra aplicación no se publica ni se considera evidencia de Guía Pastoral. Se restauró el `font_scale` a `1.0`.
- **ENV-E4-003:** intento de instalar dependencias para compilar APK desde HEAD interrumpido; no se generó ni instaló ninguna APK de parche. No modificar PR ni confundir compilación fallida del entorno con defecto funcional.

## Contraste y objetivos táctiles: límites de las inferencias

La inspección de `theme.ts` no reemplaza medición de contraste sobre fotografías, ni verificación táctil en dispositivos reales. `SettingsScreen.tsx` ofrece solamente tres temas claros y deja el «Tamaño de lectura» independiente del sistema. Los blobs `theme.ts` y `SettingsScreen.tsx` son iguales entre `994d171` y `4d8b6e5`. El contraste de cinco pares por tema en los temas públicos supera 4.5:1; no equivale a certificación WCAG de toda la app.

## Puerta de salida y continuidad

**Estado del cierre de Etapa 4: NO APROBADO / PENDIENTE.** Está documentada la parte técnica realizada y sus evidencias. Antes de aceptación final:
1. Obtener APK inequívoca desde `4d8b6e5` o commit posterior, ejecutar regresión E4-01/E4-02 con imágenes limpias 320×640 y 360×740 a fuente 100/160/200, especialmente 160%.
2. Completar E4-03 a escala 160/200 con teclado en emulador no compartido, y evaluar controles táctiles/contraste real incluyendo modo oscuro del dispositivo si es requisito.
3. Completar Android físico y revisión con usuario (E4-05), después aprobación visual autor (E4-06).
4. Mantener sin correcciones hasta consolidar y priorizar hallazgos, sin cambiar RV1909 ni guía editorial v1.30. **QA5 intacta, PR #72 draft, sin merge ni publicación**.

**Trazabilidad:** eventos `EV-H4-041…046`, incidentes `ENV-E4-001…003`; no se renumeran ni duplican `EV-H4-033` del teclado ni `EV-H4-009` de fuentes antiguas. Retests futuros conservan ID del caso, agregan `R7` o mayor y el commit exacto de la APK.
