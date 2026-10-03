# Estado de trabajo — La U

## Última decisión formal
**EVAL-00 — ACCEPT**

## Work Item activo
**EXP-01 — Persistent Roleplay Cold Resume**  
Issue #16

## Estado experimental
**HANDOFF REQUIRED — COLD RESUME**

T01 y T02 fueron completadas por el primer chat Implementador.

## Evidencia T02
- HEAD final: `8ef334751ac1e6a0ce723f6a6c2faf2934fb13e3`
- 17 turnos de roleplay
- 4 bloques persistidos
- cinco artefactos únicamente bajo `stories/exp-01/`:
  - `story.md`
  - `state.json`
  - `memory.md`
  - `transcript.md`
  - `checkpoint.md`
- Issue #18 contiene:
  - `IMPLEMENTER COMPLETE — EXP-01/T02`
  - `HANDOFF REQUIRED — COLD RESUME`

## Actividad siguiente
**T03 / Issue #19 — Cold resume desde un chat web nuevo**

## Regla crítica
T03 NO puede ejecutarse en el chat que realizó T01/T02 ni en un chat que reciba un resumen manual de la historia.

El nuevo chat debe reconstruir el estado desde GitHub.

## Orden de lectura para el nuevo chat
1. `.project/CONTEXT.md`
2. `.project/WORK_STATE.md`
3. Issue #16
4. Issue #19
5. `stories/exp-01/story.md`
6. `stories/exp-01/state.json`
7. `stories/exp-01/memory.md`
8. `stories/exp-01/checkpoint.md`

El transcript completo sólo debe consultarse si aparece una ambigüedad concreta.

## Objetivo T03
- reconstruir el contexto sin explicación humana;
- declarar qué entiende que ocurre;
- continuar 8–12 turnos;
- persistir los mismos cinco artefactos;
- registrar faltantes/contradicciones;
- cerrar con:
  - `IMPLEMENTER COMPLETE — EXP-01/T03`
  - `READY FOR SUPERVISOR EXP-01 REVIEW`

## Próximo gate
Después de T03, el Supervisor evalúa si la persistencia mínima es suficiente.
