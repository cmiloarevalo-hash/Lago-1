# Estado de trabajo — La U

## Última decisión formal
**EXP-01/S6 — ACCEPT**

## Capacidad demostrada
Una sola solicitud persistente completó:
- 20 micro-sesiones autónomas X01 → X20;
- 86 turnos narrativos nuevos;
- cursor total 153 → 238;
- 20 reentradas desde estado durable;
- 20 persistencias;
- 20 verificaciones de diff;
- 0 bloqueos reales;
- 0 reentradas que necesitaran transcript para reconstrucción;
- 0 dependencia declarada de memoria privada.

## Escala al cierre S6
- transcript.md: 55802 caracteres;
- memory.md: 1957 caracteres;
- checkpoint.md: 3170 caracteres.

## Protocolo vigente
`.project/NARRATIVE_CHAT_PROTOCOL.md`

## Decisión estratégica
No se escala inmediatamente a 40 micro-sesiones.

El siguiente experimento cambia de dimensión: comprobar si un chat completamente nuevo puede asumir el rol a partir de GitHub, después de la estabilización extensa del chat fijo.

## Actividad actual
**T04 / Issue #21 — Fresh-chat takeover / cold resume**

## Requisito crítico
Ejecutar T04 desde un chat web completamente nuevo.

El humano NO debe proporcionar resumen narrativo manual.

El nuevo chat debe:
- asumir `NARRATIVE TEST AGENT`;
- leer CONTEXT, WORK_STATE y NARRATIVE_CHAT_PROTOCOL;
- reconstruir la historia desde story/state/memory/checkpoint;
- no usar transcript para bootstrap salvo ambigüedad concreta;
- publicar ENTRY CHECKPOINT antes de narrar;
- ejecutar 3 micro-sesiones A → B → C;
- persistir y verificar diff después de cada una.

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

## Gate T04
Después de C:
`IMPLEMENTER COMPLETE — EXP-01/T04`

y
`READY FOR SUPERVISOR EXP-01 REPLACEMENT REVIEW`

Después detenerse.