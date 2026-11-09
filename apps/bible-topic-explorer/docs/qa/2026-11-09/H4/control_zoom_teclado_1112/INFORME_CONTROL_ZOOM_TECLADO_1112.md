# QA H4 — control de escala y teclado en APK 1.11.2 (9 nov 2026)

**Rol:** supervisión independiente. **Estado:** REWORK para guardado de nota en un solo toque; P1 de cabecera reproducido en APK anterior a la corrección de Hoy. No aprueba publicación.

## Identidad de la APK bajo prueba
- Equipo: H4 `DESKTOP-4H532OG`, emulador aislado `emulator-5556`, Android 13/API 33.
- Pantalla: `wm size 360x740` y `wm density 160`; imágenes originales de 360×740 píxeles.
- App: `com.lago.bibletopicexplorer`, `versionName=1.11.2`, `versionCode=14`.
- Archivo QA instalado en H4: `Biblia-RV1909-v1.11.2-PR72-994d-TECLADO-PRUEBA.apk`, SHA-256 **`2f35e13a7d40b8c8f74a998bba60ae41d94c1090c0ad9aac173ac62f43644d7e`** (verificación de descarga e instalación en registro H4).
- Este candidato contiene el parche de teclado `f31f08d` incluido antes del commit documental `994d171`; **NO contiene** el arreglo posterior de Hoy `4d8b6e5`. No utilizar estos resultados para aprobar o rechazar la nueva corrección de Hoy.

## Escala controlada, no zoom de visor ni aumento de imagen
Se usó `adb shell settings put system font_scale` y se reinició la actividad antes de cada captura, manteniendo resolución/densidad y esperando a que el contenido cargara. No se alteró el zoom de GitHub, navegador ni la escala de visualización del emulador. Las primeras capturas tomadas a los 2 segundos mostraron la pantalla de carga blanca: **descartadas por no ser evidencia estable**.

| Escala de fuente Android | Resultado estable | Evidencia |
| --- | --- | --- |
| 100% (`1.0`) | Cabecera «Qué bueno que estás aquí» legible | [Captura](font_100_estable.png) |
| 160% (`1.6`) | **P1**: título de Hoy parcialmente oculto por la tarjeta superpuesta | [Captura](font_160_estable.png) |
| 200% (`2.0`) | **P1**: título más recortado; versículo ocupa mayor altura | [Captura](font_200_estable.png) |

**Interpretación acotada:** no hay evidencia de que el recurso gráfico de fondo haya cambiado su tamaño intrínseco; lo que se expandió fue la tipografía de Android y hubo solape de contenido. Es necesario generar APK **posterior a `4d8b6e5`** y repetir en 360×740 y 320×640 antes de validar ese parche. `font_scale` fue restaurado a **1.0**.

## Teclado/Gboard — flujo real de un toque
Recorrido con escala 100%: **Leer → Génesis → capítulo 1 → numeral 1 → Nota → Agregar nota**.
1. Con Gboard abierto, el editor, «Guardar nota» y «Cancelar edición» quedan **visibles**. Esto mejora frente a 1.11.1.
2. Se escribieron dos párrafos: «QA H4 primera linea» y «Segunda linea zoom». El botón se mantuvo visible ([captura](nota_gboard_dos_parrafos.png)).
3. **Primer toque** en «Guardar nota», con Gboard todavía abierto: se ocultó Gboard pero **el editor siguió abierto y sin confirmación de guardado** ([captura](nota_tras_primer_toque.png)).
4. **Segundo toque** en «Guardar nota» ya sin Gboard: cerró editor y mostró «Correcto: Nota privada guardada» ([captura](nota_tras_segundo_toque.png)).
5. Tras forzar parada y relanzar la app, **Biblioteca → Notas bíblicas** mostró la nota de Génesis 1:1 con ambos párrafos intactos ([captura](nota_persistida_tras_reinicio.png)).

**Resultado:** visibilidad del panel **PASS**, persistencia después del segundo toque **PASS**, aceptación de «Guardar sin ocultar antes el teclado» **FAIL/P1**. El primer toque no debe limitarse a descartar Gboard. Revisar la secuencia de eventos táctiles de `Action`/TextInput/Modal y garantizar guardado efectivo con **un solo toque** mientras Gboard está abierto; confirmar en AVD, no solo test textual.

## Puerta de salida y límites
- La rama de PR #72 permanece en borrador. No se fusionó ni publicó nada y no se tocó la instalación QA5.
- El commit de la corrección de Hoy `4d8b6e5` se revisó como código, **no** como APK. Al momento de esta verificación, M2 `42671541964` y M5 `42671542505` estaban finalizados en `failure` con **0 jobs** y M5 sin artefactos; no atribuir causa sin logs.
- Pendientes: producir APK exacta con ambas correcciones, revalidar el primer toque de Guardar, fuentes 100/160/200% en 360×740 y 320×640, modo oscuro/Marino, pruebas físicas y aprobación visual humana.
