# Matriz unificada de observaciones y plan mínimo de corrección — 11-11-2026

**Proyecto:** Lago-1 / Biblia Reina-Valera 1909 – Guía pastoral · **Work Item:** [#67](https://github.com/cmiloarevalo-hash/Lago-1/issues/67) · **PR:** [#72](https://github.com/cmiloarevalo-hash/Lago-1/pull/72) (draft)  
**Carácter:** conciliación documental de **cuatro informes de QA** y el anexo E2-R5. No es ejecución de correcciones de código, aceptación de UX, autorización de merge ni publicación. Se preservan los IDs de eventos originales y las capturas.

## Fuente, baseline y criterio de estados

- [E1 — Navegación](etapa1/CIERRE_TECNICO_E1_2026-11-11.md), [E2 — Lectura](etapa2/CIERRE_TECNICO_E2_2026-11-11.md), [anexo E2-R5](etapa2/ANEXO_R5_VERIFICACION_84_REFERENCIAS_2026-11-11.md), [E3 — Datos](etapa3/CIERRE_EJECUCION_E3_2026-11-11.md), [E4 — Accesibilidad](etapa4/ACTA_AUDITORIA_E4_2026-11-11.md).
- **APK ensayada** `1.11.2/code14`, SHA256 `2f35e13a7d40b8c8f74a998bba60ae41d94c1090c0ad9aac173ac62f43644d7e` (código anterior a `4d8b6e5`). **PR HEAD** `4d8b6e5ae2d82a87a2925accc0038025d413caaa` contiene parche visual de Hoy, **no probado en APK**.
- **PASS**: cumple pasos realmente comprobados; **FAIL**: defecto observado; **OBS**: fricción/no conformidad potencial que requiere criterio; **PENDIENTE**: sin evidencia; **ENV**: problema de entorno **sin atribución causal** a la APK.
- **E1:** ejecución técnica terminada 4/5; prueba `UX-E1-05` con lector humano pendiente y vinculada a E4-05. **E2:** 6 casos técnicos ejecutados; cobertura de datos 84/84 no equivale a 84 pulsaciones. **E3:** seis casos ejecutados, pero **no aprobada** por P1. **E4:** ejecución parcial, **no aprobada** por pendientes de APK corregida y validación humana.

## Registro único de problemas y decisiones — sin duplicar eventos

| ID consolidado | Origen y repetición comprobada | Observación / impacto usuario | Prioridad y estado | Acción mínima / criterio de salida |
| --- | --- | --- | --- | --- |
| **CORR-01 — Guardado de notas** | `UX-E3-01 / EV-H4-033`, reproducido en Android **13 y 16**; `E4-03/EV-H4-043` solo certifica **visibilidad** del botón | Con Gboard abierto, primer toque en «Guardar nota» oculta el teclado sin guardar; segundo toque guarda. | **P1, FAIL, ABIERTA**. **La corrección de «Hoy» `4d8b6e5` no se acredita como solución**. | Corregir **flujo de primer toque** sin alterar persistencia. En APK de commit identificado, guardar texto de dos párrafos con teclado abierto **al primer toque**, mostrar confirmación y reabrir tras reinicio; repetir en Android 13/16. |
| **CORR-02 — Cabecera Hoy** | `UX-E4-01 / EV-H4-041` y capturas E4 anteriores: **320×640 y 360×740**, fuente Android **160% y 200%**; se observó ocultación de saludo | La tarjeta del versículo cubre parte del saludo. No depende del zoom del visor. **Fuente 200% por sí sola no es defecto.** | **P1 del binario antiguo, RETEST OBLIGATORIO**. Parche de diseño existe en HEAD `4d8b6e5`, aún sin APK de ese commit. | **Antes de escribir más código**, compilar y verificar APK de HEAD. Capturar Hoy limpio a 320/360 × fuente Android 100/160/200; sin solapamiento ni pérdida de acceso. Si pasa, cerrar; si falla, corrección limitada a layout. |
| **CORR-03 — Contexto Guía pastoral** | `UX-E2-03 / EV-H4-029`, retorno desde enlace bíblico y desde capítulos | Al pulsar Atrás desde el lector, la Guía regresa a portada y pierde capítulo/desplazamiento. | **P2, OBS FUNCIONAL CONFIRMADA, ABIERTA** | Preservar capítulo expandido y posición de scroll al volver. Retest desde enlaces AT/NT de capítulos 1 y 16, sin modificar el contenido editorial. |
| **CORR-04 — Descubribilidad del Diario** | `UX-E1-03 / EV-H4-024`, 320×640 | El Diario existe y abre, pero está fuera de la primera vista del menú; exige scroll. | **P2, OBS, POR VALIDAR CON LECTOR** | En la prueba humana E1-05/E4-05 medir si lo encuentra sin ayuda. No rediseñar el menú antes de esa evidencia. |
| **CORR-05 — Acciones redundantes** | `UX-E3-03 / EV-H4-035` | Dos controles «Cancelar edición» en editor del Diario pueden provocar confusión, **sin fallo de datos demostrado**. | **P2, OBS, POR VALIDAR CON LECTOR** | Validar comprensión en prueba humana; si hay confusión, dejar una salida clara y un único mensaje de descarte, conservando la protección del borrador. |
| **CORR-06 — Texto de revisión editorial** | `UX-E3-04 / EV-H4-036` | Un plan exhibe «original en revisión editorial». Puede comunicar producto no finalizado. | **P2 editorial / DECISIÓN DEL AUTOR** | Consultar intención de publicación; si el rótulo es interno, retirarlo **sin alterar el texto bíblico ni el contenido autoral**. |
| **DEC-01 — Tema oscuro** | `UX-E4-04 / EV-H4-044` | En Ajustes aparecen tres temas **claros** Coral/Natural/Marino. El archivo contiene otros estilos, pero no hay requisito validado de selector oscuro. | **Consulta de producto, NO BUG** | No implementar oscuro por iniciativa técnica; pedir definición del Humano solo si entra en alcance. |
| **ENV-01 — System UI / AVD** | `ENV-E2-R5-001`, `ENV-E4-001`, `ENV-E4-002`, `ENV-E4-003` | Diálogo «System UI isn't responding», pérdida ADB, ejecución de otra app en mismo emulador y falta temporal de dependencias de compilación. | **INFRAESTRUCTURA, sin atribuir a la APK** | Reservar AVD exclusivo de esta APK, RAM suficiente, capturas con identificación de paquete foreground; reintentar una vez con límites. No mezclar capturas de otra app. |
| **GATE-01 — Usuario/autor** | `UX-E1-05`, `UX-E4-05`, `UX-E4-06` | Faltan tres tareas con lector humano en Android físico y aceptación visual consolidada del autor. | **PENDIENTE, bloqueo de aceptación, no defecto de app** | Una sola sesión final con usuario y aprobación autoral; registrar tareas, observaciones y decisión explícita. |

### ¿Qué se repite realmente?

1. **CORR-01**: mismo defecto **reproducido en dos versiones Android**; más fuerte para reproducibilidad.
2. **CORR-02**: mismo defecto visual **en dos resoluciones y escalas elevadas**, no cuatro problemas diferentes; exige retest específico del commit corregido.
3. **ENV-01**: incidencias del **entorno repetidas en E2 y E4**, sin prueba de que sean provocadas por la app.
4. **CORR-03**: pérdida de contexto en navegación pastoral desde diferentes referencias; es **una única observación P2**.
5. Descubribilidad, rótulos y duplicidad de botones son problemas **distintos** del mismo ámbito UX; no hay base para afirmar que cada uno ocurra muchas veces.

## Plan de reparación secuencial — mínimo alcance

| Orden | Acción | Criterio de aceptación / entrega |
| --- | --- | --- |
| **0 — Baseline y entorno** | Mantener PR #72 draft y QA5 intacto. Conservar evidencias y usar AVD **exclusivo** de Guía pastoral. Obtener APK reproducible de commit exacto `4d8b6e5` o posterior con SHA256. | Paquete, versión, commit fuente, firma y SHA256 registrados. No confundir binario 994d con HEAD. |
| **1 — P1 de notas** | Implementador corrige **solo** el guardado inicial con teclado visible. | Primer toque guarda; estado confirmado; persiste tras reinicio; sin regresión del Diario/planes/migración. Android 13 + 16. |
| **2 — P1 visual** | Antes de modificar, probar el parche de Hoy ya existente; arreglar layout **solo si** falla la APK nueva. | Matriz 320×640 y 360×740 × `font_scale=1.0/1.6/2.0`, capturas limpias, saludo visible y controles operables. 200% es condición de accesibilidad, no defecto automático. |
| **3 — P2 demostrada** | Preservar posición/expansión de Guía al regresar del lector; respetar pila de navegación. | AT y NT regresan al capítulo y desplazamiento previo, sin saltar a portada. |
| **4 — P2 sujetas a decisión** | Validación humana de encontrabilidad del Diario, «Cancelar edición» y decisión editorial sobre rótulo. | Modificar **solo** si la prueba/autor lo justifica; conservar las protecciones de borrador. |
| **5 — Regresión y aceptación** | Ejecutar solo casos afectados E2-03/E3-01/E4-01..04; revisar E1-03 si se cambia menú, más prueba humana y consolidación E4-05/E4-06. | Evidencia por caso y SHA; Supervisor `ACCEPT/REWORK/BLOCK/ESCALATE` en Work Item; **aprobación humana separada de merge/publicación**. |

**Reglas:** una corrección mínima por fallo, luego prueba y registro antes de la siguiente. No reabrir los 23 casos sin necesidad. No modificar RV1909 ni guía pastoral aprobada v1.30, ni QA5 ni otros proyectos. Delfín puede implementar **solo mediante el circuito y alcance autorizados de Workflow V3**; el Supervisor verifica y no convierte `PUBLISHED` en `ACCEPT`.

## Estado del plan

**Documentos revisados; correcciones del código aún NO implementadas en este registro.** Este plan ofrece orden técnico y criterios. La aprobación/ejecución de un cambio material nuevo se rige por autoridad del Humano y Workflow V3. Los 4 informes son la evidencia original corregida documentalmente; esta matriz es el índice único de observaciones y evita crear defectos duplicados.
