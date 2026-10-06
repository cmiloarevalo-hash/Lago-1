# Estado de trabajo — La U

## Última decisión formal
**P03 MASTER REMEDIATION PLAN — SUPERVISOR ACCEPT**

## P03
Issue `#48` completó P03-01→P03-15 sin cambios de código/dependencias/app. Baseline de planificación verificado intacto:
`062069a45094876fe28dd9cc7ebc6cfab2a2d9e5`.

Plan aceptado:
`W1 [gate] → W2 [gate] → W3 [gate] → W4 persistent nested [gate] → W5 physical/release [final gate]`.

## Decisiones congeladas
- Book picker: orden canónico AT/NT.
- Explorar: búsqueda libre/referencia primero; Temas A–Z inmediatamente descubrible y separado.
- Hoy: `Continúa a tu ritmo` se conserva como apoyo compacto de una línea.
- Biblioteca/Reader: reemplazar demo-save por guardado real desde Reader usando persistencia local existente.
- Safe area: `react-native-safe-area-context` sólo si se verifica compatibilidad Expo 57 antes de escribir dependencia; ninguna otra dependencia nueva autorizada.
- Android Back: cambios significativos de tab participan en historial acotado/deduplicado; reselecciones/redirecciones programáticas no agregan ruido; confirmación de salida sólo cuando se agota historial.
- Evidencia visual final: originales individuales + SHA-256 + manifest obligatorio.
- Gate actual Android; VoiceOver NOT RUN salvo autorización iOS separada.

## Invariantes globales
Preservar en cada wave:
- RV1909 + SQLite bundled;
- exactamente 100 temas;
- A–Z;
- free-form/topic separados;
- whole-term/topic y literal/reference semantics;
- regresión `amor` / `llamó`;
- core offline/local;
- slug/package/npm/DB identities;
- compatibilidad de persistencia local.

## Actividad activa
**R01 — Master remediation Android/UX W1→W5**
Issue `#49`.

### W1 — ACTIVE / AUTHORIZED
W1.1 deterministic route history → W1.2 Android Back/root exit → W1.3 Leer sub-navigation coherence.

Implementer writable scope:
`apps/bible-topic-explorer/**`.

Implementer debe publicar ENTRY CHECKPOINT antes de código y detenerse al publicar:
`IMPLEMENTER COMPLETE — R01 W1 ANDROID CORRECTNESS`
`READY FOR SUPERVISOR R01 W1 REVIEW`.

### W2-W5
**PLANNED / SEQUENCE-BLOCKED** hasta el gate anterior correspondiente.

W2: español visible + safe areas + chrome compacto.
W3: densidad/jerarquía compartida + color funcional.
W4: Explore → Leer/Reader → Hoy → Biblioteca → Ajustes/onboarding/feedback como batch persistente anidado.
W5: CI/static → APK exact candidate → prueba física Android → evidencia original → final gate.

## F01 / F02
Issues #46/#47 permanecen como inputs históricos; sus requisitos están absorbidos por R01 W1/W2. No ejecutar como batches paralelos.

## Evidencia física
Ruta actual:
`evidence/exp02/android-physical-2026-10-06/`.

La evidencia física prevalece sobre proxies estáticos para safe areas, Back, 200% y TalkBack.

## Política
Private chat history is not authoritative. GitHub durable state is authoritative.