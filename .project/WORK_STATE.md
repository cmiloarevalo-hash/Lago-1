# Estado de trabajo — La U

## Última decisión formal
**EXP-02/R01-R10 — ACCEPT**

## Estado
La investigación R01–R10 está completada y aceptada.

## Evidencia
- R01–R10 completadas en orden en Issue #29;
- baseline y HEAD de investigación: `328201a3ced41a1997911843b537f1315602f12b`;
- 0 commits durante investigación;
- 0 ingestión;
- 0 implementación;
- contrato final del MVP congelado por R10.

## Actividad actual
**Issue #31 — EXP-02/I01-I10 — Implementar MVP Bible Topic Explorer Mobile**

## Batch autorizado
**I01 → I02 → I03 → I04 → I05 → I06 → I07 → I08 → I09 → I10**

Ejecutar en continuidad, con persistencia/checkpoint/diff después de cada actividad y sin esperar revisión intermedia salvo bloqueo real.

## Scope de escritura
Únicamente:
`apps/bible-topic-explorer/**`

## Read-only / forbidden
- `README.md`
- `.project/*`
- `stories/*`
- cualquier otro path.

## Contrato MVP
- RV1909 única traducción runtime;
- source/release/license/checksum pinneados;
- 66 libros esperados;
- sin deuterocanónicos runtime;
- sin bundle hebreo/griego;
- SQLite local + FTS5;
- literal / lexical-related / thematic separados;
- temas v1: amor, perdón, misericordia;
- 9 fixtures gold;
- explanations deterministas;
- Expo + React Native + TypeScript;
- offline-first;
- reminder local best-effort;
- sin backend/vector DB/LLM/exact alarm.

## Gate final
Después de I10:
`IMPLEMENTER COMPLETE — EXP-02/I01-I10`
`READY FOR SUPERVISOR EXP-02 MVP REVIEW`

Después detenerse.