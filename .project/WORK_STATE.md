# Estado de trabajo — La U

## Última decisión formal
**EXP-01 — REWORK**

## Motivo del REWORK
T04 fue ejecutada con el mismo chat narrativo previo, no con un chat completamente nuevo.

Por tanto T04 conserva valor como evidencia de continuidad y persistencia segura, pero NO valida reemplazabilidad.

## Evidencia todavía válida
- continuidad narrativa hasta 250 turnos;
- reentradas repetidas desde GitHub;
- memory compacta;
- escritura segura por scope + diff;
- batches autónomos de 5, 10 y 20 micro-sesiones;
- 86 turnos bajo una sola solicitud persistente en S6.

## Evidencia pendiente
Reemplazo real por un chat web completamente nuevo.

## Actividad actual
**T05 — Verified fresh-chat takeover**

## Precondición humana
Abrir una conversación web completamente nueva antes de ejecutar T05.

No reutilizar el chat fijo ni el chat que ejecutó T04.

No proporcionar resumen narrativo.

## Protocolo
El nuevo chat debe asumir `NARRATIVE TEST AGENT` y reconstruir todo desde:
- `.project/CONTEXT.md`;
- `.project/WORK_STATE.md`;
- `.project/NARRATIVE_CHAT_PROTOCOL.md`;
- Issue T05;
- story/state/memory/checkpoint.

`transcript.md` no debe usarse para bootstrap salvo ambigüedad concreta.

## Escritura autorizada
Sólo:
- `stories/exp-01/transcript.md`
- `stories/exp-01/state.json`
- `stories/exp-01/memory.md`
- `stories/exp-01/checkpoint.md`

## Read-only
- `stories/exp-01/story.md`
- `.project/*`
- `README.md`

## Gate T05
`IMPLEMENTER COMPLETE — EXP-01/T05`
`READY FOR SUPERVISOR VERIFIED-FRESH-CHAT REVIEW`

Después detenerse.