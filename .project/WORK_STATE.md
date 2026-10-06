# Estado de trabajo — La U

## Última decisión formal
**P03 MASTER REMEDIATION PLAN — SUPERVISOR ACCEPT**

## Actividad activa
**R01 — implementación continua W1→W4**

Issue:
`#49`

Estado:
**AUTHORIZED / ACTIVE — ONE CONTINUOUS BATCH**

Exact implementation baseline:
`47b769d2b8f9af2e9ff710969f3bdc0af2ef76e8`

## Cambios a implementar sin pausas intermedias
1. Android Back navega dentro de la app; en raíz pregunta si realmente se quiere salir.
2. UI visible en español: `Explorador Bíblico`, `sin conexión`.
3. Safe areas reales para status/navigation bars Android.
4. Identidad visual más luminosa, cálida y atractiva; eliminar dominancia verde oscuro.
5. Compactar hero/cards/spacing manteniendo >=48dp y legibilidad.
6. Aplicar el tratamiento a Hoy, Explorar, Leer/Reader, Biblioteca y Ajustes.
7. Guardado real desde Reader usando persistencia local existente.

## Paleta visual aprobada por Product Owner
- background `#FAF9F6`;
- surface `#FFFFFF`;
- primary green `#16A34A`;
- blue `#3B82F6`;
- amber `#F59E0B`;
- coral `#F97316`;
- purple `#8B5CF6`;
- primary text `#111827`;
- secondary text `#6B7280`;
- border `#E5E7EB`.

Dark mode:
base neutral charcoal/navy, no green-black dominance.

Acceptance visual:
el cambio debe ser inmediatamente perceptible físicamente; si puede describirse como `se ve igual`, falla el objetivo visual.

## Invariantes
Preservar:
- RV1909/SQLite;
- 100 temas;
- A–Z;
- free-form/topic;
- whole-term/literal/reference semantics;
- `amor`/`llamó`;
- offline/local;
- slug/package/npm/DB identities;
- persistencia local.

## Workflow simplificado
Implementer ejecuta:
`W1 → W2 → W3 → W4`

Checkpoint breve tras cada wave, pero **sin esperar Supervisor**.

Gate único al final:
`IMPLEMENTER COMPLETE — R01 W1-W4 CONTINUOUS REMEDIATION`
`READY FOR SUPERVISOR R01 IMPLEMENTATION REVIEW`

Después Supervisor revisa una vez, genera W5/APK y se hace prueba física.

## Evidencia física
`evidence/exp02/android-physical-2026-10-06/`

Private chat history is not authoritative; GitHub durable state is authoritative.