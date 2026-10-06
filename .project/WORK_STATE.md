# Estado de trabajo — La U

## Última decisión formal
**EXP-02 / D01–D08 VISUAL REDESIGN — ACCEPT**

## Producto aceptado hasta ahora
- ciclo funcional M1→M5: ACCEPT;
- rediseño visual D01→D08: ACCEPT;
- evidencia física Android posterior detectó defectos adicionales de navegación/localización/safe-area que requieren corrección separada.

## Evidencia física Android
Ruta:
`evidence/exp02/android-physical-2026-10-06/`

Commit de evidencia:
`1c4c71a7526c796c158ac8b6afbe95e7e1d023e4`

La evidencia física del dispositivo prevalece sobre supuestos derivados sólo de tests.

## Actividad activa
**F01 — Android Back: navegación interna + confirmación de salida**

Issue:
`#46`

Estado:
**AUTHORIZED / ACTIVE**

Exact execution baseline:
`592d232e3c528a7f20bc99c486602b66e853d257`

Implementer writable scope:
`apps/bible-topic-explorer/**`

Read-only / forbidden:
- `.project/*`;
- `README.md`;
- `stories/*`;
- `evidence/*`;
- paths outside the app;
- corpus/search semantics.

F01 acceptance contract:
- hardware Back uses internal app history when available;
- Reader/Ajustes return to their prior in-app destination;
- no exit dialog while an internal destination exists;
- at root, Android Back shows:
  - `Salir de la aplicación`;
  - `¿Realmente quieres salir?`;
  - `Cancelar`;
  - `Salir`;
- Cancelar keeps app open;
- Salir explicitly exits Android;
- listener cleanup and history semantics are deterministic;
- tests/typecheck/regressions pass.

Final F01 gate markers:
`IMPLEMENTER COMPLETE — F01 ANDROID BACK`
`READY FOR SUPERVISOR F01 REVIEW`

Implementer must stop after those markers.

## Siguiente actividad
**F02 — Localización visible al español + safe areas Android**

Issue:
`#47`

Estado:
**BLOCKED BY F01**

Do not implement F02 until F01 receives Supervisor ACCEPT.

Frozen F02 decisions:
- visible product name: `Explorador Bíblico`;
- visible `offline` → `sin conexión`;
- preserve technical slug/package/npm/db names;
- correct top status-bar and bottom navigation/gesture safe areas based on physical evidence.

After F01 ACCEPT, F02 baseline becomes the accepted F01 HEAD and Supervisor publishes a separate Work Order.

## Workflow
`F01 Implementer → Supervisor review → F01 ACCEPT → F02 Implementer → Supervisor review → build APK → physical Android verification`.