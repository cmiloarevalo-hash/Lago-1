# Estado de trabajo — La U

## Última decisión formal
**EXP-02 / D01–D08 VISUAL REDESIGN — ACCEPT**

## Estado actual
Las pruebas físicas Android posteriores revelaron defectos y oportunidades que no deben corregirse de forma aislada sin una planificación integral.

## Evidencia física
Ruta durable:
`evidence/exp02/android-physical-2026-10-06/`

La evidencia de dispositivo físico prevalece sobre inferencias derivadas sólo de tests.

## Actividad activa
**P03 — Auditoría física integral + plan maestro de correcciones UX/Android**

Issue:
`#48`

Estado:
**AUTHORIZED / RESEARCH-PLANNING ONLY**

Implementer debe ejecutar:
`P03-01 → P03-02 → ... → P03-15`

Objetivo:
- inventariar evidencia;
- auditar navegación Android;
- safe areas/system chrome;
- español/naming;
- jerarquía/densidad;
- percepción real del rediseño;
- pantalla por pantalla;
- Explorar;
- Reader;
- Hoy/Biblioteca/Ajustes;
- accesibilidad/device QA;
- impacto técnico/dependencias;
- registro de preguntas/inconsistencias;
- plan maestro de implementación;
- contrato final de ejecución persistente/anidada.

Restricción:
**NO IMPLEMENTATION DURING P03.**

Final gate:
`IMPLEMENTER COMPLETE — P03 MASTER REMEDIATION PLAN`
`READY FOR SUPERVISOR P03 PLAN REVIEW`

## F01 / Issue #46
Estado:
**PAUSED / INPUT TO P03**

Requisito conocido:
- hardware Back debe volver dentro de la app;
- sólo en raíz preguntar `¿Realmente quieres salir?`;
- Cancelar mantiene la app;
- Salir cierra Android.

## F02 / Issue #47
Estado:
**PAUSED / INPUT TO P03**

Requisitos conocidos:
- nombre visible propuesto: `Explorador Bíblico`;
- copy visible en español (`sin conexión`);
- safe areas top/bottom;
- identificadores técnicos internos preservados salvo razón concreta.

## Próximo gate Supervisor
Cuando P03 esté listo:
1. revisar evidencia y plan;
2. resolver Q-IDs/dudas;
3. corregir inconsistencias;
4. congelar plan final;
5. crear/autorizAR un master implementation batch persistente/anidado;
6. ejecutar por waves con checkpoints y gates sólo donde hagan falta;
7. construir APK final;
8. validar físicamente en Android.

## Política
Private chat history is not authoritative. GitHub durable state is authoritative.