# Informe UX reproducible: H4 / Android 13 / APK 1.11.1

**Fecha:** 9 de noviembre de 2026. **Rol:** Supervisión Workflow V3. **Estado:** evaluación en ejecución; versión candidata, no aprobada para publicación.

## Alcance y validez

El Humano indicó expresamente que la prioridad es **experiencia de usuario** y que el **contenido** de Biblia Reina-Valera 1909 y Guía pastoral v1.30 ya le satisface. Estas pruebas NO autorizan modificar el contenido ni aprobar el diseño final.

**Equipo:** DESKTOP-4H532OG (H4), Windows 10 Pro, Ryzen 5 1600X, 32 GB RAM, Radeon RX 570. Android Emulator 37.2.13 con Windows Hypervisor Platform activo; AVD `Biblia_H4_API33`, Android 13 / API 33, pantalla emulada **360 × 740 px, densidad 160 dpi**, GPU host, 4 vCPU y 6144 MB asignados. Instalación inicial ADB `Success`, app `com.lago.bibletopicexplorer` versionName **1.11.1**, versionCode **13**, CI de origen [M5 #42645041383](https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/42645041383), SHA-256 APK `6371a1ac5e3477eec0cf35934e483a3d81771b301e4e882c5d12b90cb67576d6`.

**Método:** acciones de toque, pulsación larga, escritura y Atrás mediante Android Debug Bridge, comprobadas con **capturas extraídas del propio AVD**. Es QA funcional y visual supervisada, **no** un estudio de usabilidad con personas reales. No inferir satisfacción de los usuarios únicamente de estos resultados.

**Arranque del AVD:** en el primer inicio en frío hubo ANR de `com.android.systemui` y Bluetooth, durante servicios del sistema Android. El AVD se reinició sin borrar datos, aumentó de 3 a 6 GB RAM, pasó a 4 núcleos y GPU host; tras completar el arranque se pudo probar la app. No atribuir el ANR a la APK sin evidencia adicional.

## Resultado por recorrido humano

| Caso | Acción y expectativa UX | Resultado | Evidencia |
|---|---|---|---|
| H4-01 Inicio | Entender la pantalla Hoy y los cuatro destinos inferiores | **APROBADO en pantalla compacta**; jerarquía legible, barra inferior visible | [Inicio](inicio_v1111.png) |
| H4-02 Buscar y leer | Leer → Génesis → capítulo 1 | **APROBADO**, 3 pulsaciones; texto legible y numerales distinguibles | [Lectura](genesis_1_lectura.png) |
| H4-03 Selección parcial | Mantener pulsada «principio» sin abrir teclado | **APROBADO**; marcadores nativos y acciones Android Copy / Share / Translate | [Selección](seleccion_nativa.png) |
| H4-04 Opciones de versículo | Acceder a Nota, Resaltar, Compartir y Guardar referencia | **APROBADO**, acciones visibles en el primer panel; no requiere entrar a otra pestaña | [Opciones](opciones_versiculo_corregido.png) |
| H4-05 Guardar y recuperar | Guardar Génesis 1:1 y abrirlo desde Biblioteca | **APROBADO**; contador 1 y referencia recuperada | [Biblioteca](biblioteca_guardado.png) |
| H4-06 Atrás Android | Desde Versículos guardados, pulsar Atrás | **APROBADO**; regresa a portada Biblioteca, no al lector | [Atrás](boton_atras_biblioteca.png) |
| H4-07 Nota bíblica/teclado | Abrir Agregar nota y escribir con teclado visible | **NO CONFORME — P1**; teclado cubre por completo formulario y «Guardar nota», incluso tras finalizar la animación | [Teclado abierto](nota_teclado_estable.png) |
| H4-08 Guardar nota | Ocultar teclado, guardar y volver a Biblioteca | **FUNCIONAL CON OBSTÁCULO UX**; la nota `Prueba de nota H4` sí se guardó y recuperó en Notas bíblicas, pero exige ocultar teclado | [Panel recuperado](nota_teclado_oculto.png) / [Nota recuperada](biblioteca_nota_recuperada.png) |
| H4-09 Diario | Crear título y dos párrafos con teclado, guardar y recuperar | **APROBADO con observación P2**; «Guardar reflexión» permanece visible mientras se escribe; el texto del cuerpo ocupa área pequeña con teclado | [Edición](diario_cuerpo_teclado.png) / [Guardado](diario_guardado.png) |
| H4-10 Menú secundario | Encontrar Diario y recursos sin saturación | **APROBADO con observación P2**; marca compacta, pero Diario exige abrir menú y desplazarse | [Menú](menu_lateral.png) |
| H4-11 Hora de recordatorio | Elegir hora sin teclado manual | **APROBADO**; selector de hora nativo Android | [Reloj](selector_hora_nativo.png) |
| H4-12 Permiso de notificación | Activar aviso opt-in con consentimiento Android | **APROBADO hasta programación**; pidió permiso Android y mostró «Notificación Activada» tras concederlo; NO se verificó recepción ni apertura del día pendiente | [Activación](recordatorio_activado.png) |
| H4-13 Escala de lectura y temas | Confirmar 80–200% y navegación estable por las familias | **INCONCLUSO**; se vieron temas y opciones de tamaño, pero tras varias acciones ADB la pantalla cambió inesperadamente al Diario con contenido modificado no producido por las órdenes registradas; no atribuir a la app ni considerar pasado | Sin captura concluyente |
| H4-14 Datos en actualización | Actualizar APK de una versión anterior conservando datos | **PENDIENTE en H4**; primera instalación limpia | No ejecutada |
| H4-15 Prueba con lectores humanos | Éxito sin instrucciones, lenguaje, comodidad y preferencia | **PENDIENTE**; la simulación ADB no la sustituye | Revisión humana |

## Defectos y recomendaciones de prioridad

### P1 — Bloqueo de edición de notas bíblicas con teclado

**Reproducción:** Leer → Génesis 1 → menú del versículo 1 → Nota → Agregar nota → aparece Gboard. **Esperado:** el área de escritura y la acción «Guardar nota» siguen visibles y accesibles, sin necesitar cerrar teclado. **Observado:** desaparece el panel completo bajo teclado, aunque el campo mantiene foco y el texto puede persistirse una vez ocultado el teclado. Evidencia con capturas antes/después, incluida la espera de estabilización.

**Hipótesis técnica a verificar (no diagnóstico confirmado):** `Modal` transparente con `KeyboardAvoidingView` sin `behavior` para Android y hoja anclada abajo; `softwareKeyboardLayoutMode='resize'` de Expo no garantiza el ajuste de esa ventana modal. Probar corrección con manejo efectivo de altura de teclado, editor redimensionable, acción guardar fija y test instrumental en el AVD, **no solo Vitest textual**.

**Puerta de aceptación:** editar 2 párrafos con Gboard abierto a 360×740 y 320×640, ver cursor, texto y Guardar; pulsar Guardar sin ocultar teclado; confirmar persistencia tras reiniciar app; confirmar diálogo de descarte de cambios sin guardar.

### P2 — Diario con poco espacio visible al teclear

Mientras Gboard está abierto, «Guardar reflexión» sigue accesible arriba, pero se observan pocas líneas del cuerpo. Validar desplazamiento automático del campo enfocado, orientación vertical y fuentes grandes, sin cubrir controles ni perder borradores.

### P2 — Descubribilidad de Mi diario

La opción no se encuentra en las cuatro pestañas; está en el menú lateral y puede requerir desplazamiento. Mantener el principio de baja saturación pero evaluar acceso desde Biblioteca o una acción contextual clara, antes de imponer nuevas pestañas.

### Pendientes

- Escalado de lectura de 80 a 200%, contraste de los tres temas (Coral, Natural, Marino) y ajustes de accesibilidad.
- Recorrido completo de Explorar por familia y tema, con retorno coherente, sin interferencia entre sesiones.
- Recepción efectiva y deep link del aviso de lectura programado.
- Migración sobre datos existentes, Android físico y validación visual consolidada por el autor.
- Evitar confundir ANR del sistema Android del emulador en primer arranque con defectos atribuibles a la app.

## Decisión de supervisión

**NO APROBAR ni fusionar PR #72 todavía.** La APK 1.11.1 logra lectura, selección, guardados, Atrás, diario y horario de recordatorios, pero **NO SUPERA UX-H4-07**. El contenido RV1909 y guía pastoral no se modifica. Repetir evidencia en un APK corregido (versión y `versionCode` nuevos) y elevar al Humano la revisión visual consolidada.
