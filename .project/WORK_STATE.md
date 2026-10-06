# Estado de trabajo — La U

## Última decisión formal
**EXP-02 / D01–D08 VISUAL REDESIGN — ACCEPT**

## Estado del producto
El ciclo funcional V1 M1→M5 permanece en **100% ACCEPT**.

El rediseño visual/accesible post-M5 D01→D08 también está **ACCEPTED**.

## Baseline y HEAD visual
- baseline D01: `21de4309923c575cd2f43f866d5d925255293e7e`;
- final D08 / canonical `main`: `d464ff79c20b787b54a34ba2f053b0829b1107ab`;
- compare: 8 commits ahead, 0 behind;
- Issue #44: CLOSED / COMPLETED.

## Evidencia D01→D08
- 8 actividades completadas, una por commit;
- scope completo dentro de `apps/bible-topic-explorer/**`;
- typecheck: PASS;
- tests finales: 74/74 PASS;
- Expo dependency check: PASS;
- Android export/bundle smoke: PASS;
- contrastes light/dark automatizados dentro de thresholds congelados;
- minimum touch target: 48dp;
- structural 200% text scaling contract: PASS;
- selected states no dependen sólo de color;
- Reduce Motion policy: PASS.

## Contrato funcional preservado
- RV1909 intacta;
- exactamente 100 temas curados;
- selector A–Z preservado;
- free-form separado de tema curado;
- matching por términos completos preservado;
- regresión `amor` / `llamó`: PASS;
- literal / related / thematic siguen separados;
- core offline SQLite preservado.

Frozen blobs reportados byte-identical baseline→HEAD:
- `assets/data/bible-topic-explorer.db`;
- `src/product/topics.ts`;
- `src/product/search.ts`;
- `data/schema.sql`.

## Diseño aceptado
Dirección:
`calma viva`.

Implementado:
- paletas light/dark multirole;
- tipografía semántica;
- spacing 4/8/12/16/24/32/48;
- radii 8/12/16/24, pills reservados;
- shared primitives accesibles;
- navegación Hoy / Explorar / Leer / Biblioteca;
- Explorar con Temas A–Z separado de búsqueda textual;
- Reader con jerarquía libro→capítulo→texto;
- Biblioteca/Ajustes/Hoy refinados;
- onboarding contextual;
- feedback success/info/warning/error sin coerción.

## Limitaciones de hardware QA pendientes
Estas limitaciones NO bloquean el ACCEPT del batch visual de prototipo, pero sí deben ejecutarse antes de declarar accesibilidad plenamente validada para producción:
- manual visual traversal a 200% system text size;
- TalkBack manual en Android;
- VoiceOver manual en iOS.

El Implementer no reportó estas pruebas como PASS; quedaron correctamente marcadas NOT RUN por falta de runtime/dispositivo.

## Próximo gate recomendado
Antes de considerar una release visual de producción:
1. construir APK post-redesign desde `d464ff79...`;
2. prueba física Android de flujos visuales principales;
3. 200% text size real;
4. TalkBack traversal;
5. VoiceOver traversal cuando exista target iOS;
6. persistir hallazgos/correcciones como un gate separado.

## Actividad activa
Ningún batch de implementación abierto.

Estado actual:
**EXP-02 prototype functional + visual redesign accepted.**
## Corrección activa — F01 Android Back
**Issue #46 — AUTHORIZED**

Evidencia física:
el botón Atrás de Android puede cerrar la aplicación en vez de volver dentro de ella.

Diagnóstico:
`App.tsx` no mantenía historial de Route ni interceptaba `hardwareBackPress`.

Baseline exacto:
`bf8448ecc2d97c67e221abd182bd8c69fdd65ade`

Contrato:
- si existe historial interno: volver dentro de la app;
- si no existe historial: mostrar `Salir de la aplicación` / `¿Realmente quieres salir?`;
- `Cancelar`: permanecer;
- `Salir`: cierre Android explícito;
- preservar corpus/search/100 temas/offline/rediseño visual.

Gate:
`READY FOR SUPERVISOR F01 REVIEW`.
## Evidencia física Android persistida
Commit de evidencia:
`1c4c71a7526c796c158ac8b6afbe95e7e1d023e4`

Ruta:
`evidence/exp02/android-physical-2026-10-06/`

Contiene:
- contact sheet de 9 capturas de dispositivo real;
- hashes SHA-256 de las capturas originales;
- hallazgos observables de UI.

La evidencia física debe prevalecer sobre supuestos derivados sólo de tests.

## Correcciones activas

### F01 — Android Back
Issue #46 — AUTHORIZED / FIRST

Contrato:
- back interno navega dentro de la app;
- en raíz pregunta `¿Realmente quieres salir?`;
- `Cancelar` mantiene la app;
- `Salir` cierra Android explícitamente.

### F02 — Español visible + safe areas
Issue #47 — AUTHORIZED AFTER F01

Nombre visible congelado:
`Explorador Bíblico`

Copy:
- `offline` visible → `sin conexión`;
- mantener identificadores internos técnicos sin renombrar.

Safe-area:
- header fuera de status bar;
- bottom nav fuera de navigation/gesture area;
- sin paddings específicos por modelo.

Secuencia:
`F01 → Supervisor gate → F02 → Supervisor gate → nuevo APK físico`.