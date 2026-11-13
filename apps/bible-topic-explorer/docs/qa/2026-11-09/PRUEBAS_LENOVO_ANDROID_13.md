# QA real de la APK — Lenovo / Android 13

**Fecha:** 9 de noviembre de 2026. **Supervisor:** IA, Workflow V3. **Autorización humana:** probar APK 1.11.0 en Lenovo, instalar emulador o solucionar problemas técnicos.

## Entorno comprobado

- Lenovo 82XA, Intel Core i3-N305, Windows 10 Pro 19045, 8 GB RAM, 320 × 640 píxeles de pantalla emulada, densidad 160 dpi.
- Android Emulator 37.2.13, AVD `SLC_Test_API33`, imagen Google APIs x86_64, Android **13 / API 33**.
- Después de la activación administrativa y reinicio, `emulator -accel-check` confirma: **WHPX (10.0.19045) is installed and usable**, código **0**.
- Sin cambios en QA5, Android físico del autor, contenido bíblico, ni datos de otro paquete.

## Versión realmente instalada: 1.11.0 (versionCode 12)

APK compilada en [M5](https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/42570135199), SHA-256 `6f78a81a08fb715d76c93099fe311776f026ebc8635044066b0cf6da8fc0de74`.

`adb install` = **Success**. Android confirma `com.lago.bibletopicexplorer`, `versionName=1.11.0` y `versionCode=12`; la aplicación abrió `MainActivity`, proceso vivo y sin `FATAL EXCEPTION` de la aplicación en los registros examinados.

### Evidencia visual y funcional

| Prueba | Resultado en el dispositivo | Captura |
| --- | --- | --- |
| Inicio Hoy, navegación inferior | **APROBADO**: interfaz renderiza en 320×640, pestañas visibles | [home.png](home.png) |
| Lectura RV1909, Génesis 1 | **APROBADO**: pasajes bíblicos y números de versículo, sin reescritura | [genesis_select.png](genesis_select.png) |
| Selección de palabra | **APROBADO**: pulsación larga en «principio» activa marcadores de Android y menú **Copy/Share/Select all**, sin teclado | [genesis_select.png](genesis_select.png) |
| Nota privada en Génesis 1:1 | **APROBADO CON OBSERVACIÓN**: se escribió y guardó `Nota de prueba en Android 13` en SQLite | [biblioteca_notas.png](biblioteca_notas.png) |
| Resaltar y guardar referencia | **APROBADO**: resaltado lavanda aplicado, referencia guardada en Biblioteca | [verse_bookmarked.png](verse_bookmarked.png) |
| Biblioteca y listado de notas | **APROBADO**: se recuperó el texto exacto de la nota guardada | [biblioteca_notas.png](biblioteca_notas.png) |
| Teclado en editor de nota | **FALLÓ UX**: al mostrarse teclado nativo, el botón **Guardar nota** quedó parcialmente tapado | [note_typing.png](note_typing.png) |
| Botón Atrás desde Notas bíblicas | **FALLÓ UX**: regresó al lector Génesis 1 en vez de la portada de Biblioteca | [biblioteca_notes_back.png](biblioteca_notes_back.png) |
| Menú secundario | **FALLÓ UX MENOR**: título completo con fuente de 37 px ocupa 3 líneas en pantalla pequeña | [menu_drawer.png](menu_drawer.png) |
| Cabecera principal | **FALLÓ UX MENOR**: Ajustes ocupó una segunda fila, restando espacio vertical a toda la aplicación | [settings_actual.png](settings_actual.png) |
| Selector horario nativo | **APROBADO**: abre el reloj de Android con acciones Cancel/OK | [native_timepicker.png](native_timepicker.png) |
| Diario independiente | **APROBADO con incidencia**: acceso desde menú; al aparecer teclado, editor quedó desplazado fuera del área visible | [journal_title_typed.png](journal_title_typed.png) |
| Guardar referencia desde menú inicial | **FALLÓ UX**: acción aparece solo después de pulsar Nota o Resaltar; no es visible al abrir directamente las opciones del versículo | Reproducido en la sesión ADB |

## Correcciones preparadas en candidata 1.11.1 (versionCode 13)

- Mantener **Guardar nota** visible en la cabecera del editor de versículo, ocultar controles ajenos durante edición, evitar reajuste doble del teclado en Android.
- Evitar pérdida accidental: confirmar descarte de una nota modificada.
- Mostrar **Guardar/Quitar referencia** al abrir las opciones de un versículo, sin exigir otra pestaña.
- Interceptar **Atrás** en pantallas internas de Biblioteca para volver a su portada.
- Compactar la marca del menú lateral a `Biblia RV1909` con tamaño de 27 px.
- Simplificar la barra superior a icono de Ajustes con etiqueta accesible, sin segunda fila en 320 px.
- Mientras se escribe en Mi diario, ocultar bloques introductorios y listados ajenos; mantener Guardar/Cancelar arriba, proteger cambios y controlar Atrás.
- Conservar RV1909 y los 16 capítulos pastorales v1.30 sin alteraciones.

**Verificación estática inicial de correcciones:** TypeScript correcto, **167/167 pruebas** en 35 archivos, cuatro regresiones UX añadidas.

**Puerta pendiente:** compilar **APK 1.11.1**, instalarla en este AVD sin borrar sus datos de prueba y repetir capturas/acciones de todos los casos fallidos. Lo anterior es evidencia de la **1.11.0** y **no** debe presentarse como validación visual de 1.11.1. Tampoco equivale a aprobación humana del diseño ni publicación en Uptodown.
