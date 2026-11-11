# Etapa 1 — CIERRE TÉCNICO de descubrimiento y navegación

> **Conciliación documental de 11-11-2026.** Se preservan capturas, pruebas e IDs originales. La [matriz unificada](../MATRIZ_UNIFICADA_OBSERVACIONES_Y_PLAN_2026-11-11.md) fija observaciones, prioridad, estado y plan. Esto corrige documentación, **no implementa código**.

**Fecha:** 11-11-2026 · **Sesión:** `ASUS-UX-E1-R3` · **Work Item:** [#67](https://github.com/cmiloarevalo-hash/Lago-1/issues/67) · **PR:** [#72](https://github.com/cmiloarevalo-hash/Lago-1/pull/72) (draft)

**Decisión:** `E1: EJECUCIÓN TÉCNICA CERRADA (4/5 casos con PASS; E1-05 pendiente humano)`. Ningún P0/P1 de navegación observado. **No equivale a aceptación UX por un usuario humano**: el caso original `UX-E1-05` exige una persona sin instrucciones y queda **PENDIENTE / trasladado a la única revisión humana consolidada `UX-E4-05`**, sin afirmarlo como aprobado. La cabecera de Hoy se gestiona como CORR-02/E4; no duplicar el hallazgo en E1. Las futuras correcciones se prueban en su caso original. Esta delimitación explícita atiende la instrucción humana de terminar y registrar una etapa antes de comenzar otra.

## Baseline inequívoca

- PC ASUS Windows 11, AVD de QA exclusivo `Lago1_QA_ASUS_API36`, Android 16 (API 36), serial `emulator-5580`.
- Pantalla `320 × 640`, densidad `160`, `font_scale=1.0`, avión desactivado; capturas de ADB sin zoom o redimensionado del navegador.
- APK instalada `com.lago.bibletopicexplorer`, **1.11.2/versionCode 14**, `Biblia-RV1909-v1.11.2-PR72-994d-TECLADO-PRUEBA.apk`, SHA-256 `2f35e13a7d40b8c8f74a998bba60ae41d94c1090c0ad9aac173ac62f43644d7e`.
- La APK **no** incluye el parche posterior `4d8b6e5` de Hoy. No extrapolar las pruebas de esta APK al HEAD de PR #72. Restricciones: QA5 y emuladores preexistentes sin cambios, PR draft, sin merge/publicación, sin alterar RV1909/guía pastoral v1.30.

## Casos de Etapa 1 — única fuente de cierre técnico

| ID / evento | Escenario, pasos y expectativa | Observado y evidencia | Dictamen |
|---|---|---|---|
| `UX-E1-01` / `EV-H4-022` | Inicio Hoy: identificar versículo y hallar acción «Continuar lectura» tras scroll; pulsarla y regresar | [Hoy](E1_01_inicio_estable.png), [scroll/CTA](E1_01_hoy_contenido_inferior.png), [Isaías 41:10 en lector](E1_01_continuar_lectura.png), [Atrás a Hoy](E1_04_atras_a_hoy.png) | **PASS técnico** |
| `UX-E1-02` / `EV-H4-023` | Desde Hoy, con una pulsación alternar cuatro pestañas y retornar; títulos adecuados, barra fija | [Explorar](E1_02_explorar.png), [Leer](E1_02_leer.png), [Biblioteca](E1_02_biblioteca.png) y [retorno Hoy](E1_02_hoy_retorno.png). Biblioteca reconoce la última lectura Isaías 41:10 | **PASS técnico** |
| `UX-E1-03` / `EV-H4-024` | Abrir hamburguesa, localizar «Mi diario de reflexiones» y entrar | [Menú inicial](E1_03_menu_sin_scroll.png) no muestra Diario por falta de espacio; [scroll](E1_03_menu_con_diario.png) lo revela, [Diario abierto](E1_03_diario_encontrado.png) | **PASS acceso; OBS P2 descubribilidad**: requiere scroll; no solicitar cambios hasta consolidado |
| `UX-E1-04` / `EV-H4-025` | Comprobar Atrás nativo desde lector, Diario y menú desplegado | [Lector → Hoy](E1_04_atras_a_hoy.png), [Diario → Hoy](E1_04_atras_desde_diario.png), [menú → cierre con Atrás](E1_04_menu_cerrado_con_atras.png) | **PASS técnico** |
| `UX-E1-05` / `EV-H4-026` | Tres tareas de navegación **sin orientación y con lector humano** | Hay recorridos técnicos con operador (Biblia→Génesis, Explorar→Jesús, Biblioteca→Notas) en [checkpoint ASUS previo](../CHECKPOINT_UX_4_ETAPAS_2026-11-11.md), pero **NO** equivalen a una persona nueva sin instrucciones. No se dispone de participante humano en esta ejecución | **NO EJECUTADO como prueba humana**; diferido a `UX-E4-05`, sin declarar PASS |

## Control de calidad de la automatización

Se **descartó** una ejecución asistida de E1-05 en esta sesión porque el comando PowerShell `R` se resolvió como alias de historial y, aun al repetir con `ResetApp`, los toques absolutos sobre pestañas con scroll persistente llevaron a Éxodo, Perdón y Actividad reciente, no a los destinos declarados de Génesis/Jesús/Notas. No se imputan esos resultados como fallos de la aplicación ni como éxitos de los destinos pretendidos. Las capturas de los casos E1-01 a E1-04 sí se inspeccionaron visualmente y corresponden a las pantallas descritas.

## Eventos y prioridad para corrección posterior

- **`EV-H4-024 / OBS-P2`**: el menú de 320×640 exige desplazamiento para descubrir Diario. Acceso funcional y sin bloqueo. Considerar únicamente junto a la revisión de experiencia consolidada; no rediseñar ahora.
- **No hay nuevos defectos P0/P1 demostrados de navegación en la Etapa 1.** Fallos de teclado/escala detectados en etapas E3/E4 siguen registrados allí y **no** se mezclan con el cierre de E1.
- **Puerta humana pendiente**: `UX-E1-05` se valida con una persona real durante `UX-E4-05`, manteniendo trazabilidad al mismo ID original. Esta deuda no se oculta ni se redefine como prueba pasada.

## Handoff de continuidad

**Etapa 1: cierre técnico archivado y congelado** en esta evidencia de GitHub. **Continuidad vigente:** E2 terminó su ejecución técnica, E3 tiene un P1 abierto y E4 continúa pendiente de aceptación; seguir el plan y los retests mínimos de la matriz unificada. Ningún cierre técnico autoriza fusión, distribución ni aceptación del autor.

## Conciliación de observaciones — E1

- **CORR-04 / EV-H4-024 — OBS P2:** el Diario necesita desplazamiento del menú en 320×640. Acceso funcional; confirmar impacto con usuario antes de rediseñar.
- **GATE-01 / UX-E1-05 — PENDIENTE:** tres tareas con usuario sin instrucciones, vinculadas a E4-05; no se cuentan entre los 4 PASS técnicos.
- No se observaron P0/P1 de navegación en estos recorridos. Las incidencias de cabecera y teclado pertenecen a E4/E3, respectivamente.
