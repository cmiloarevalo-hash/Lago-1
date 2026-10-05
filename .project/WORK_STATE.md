# Estado de trabajo — La U

## Última decisión formal
**EXP-02/P00 — ACCEPT**

## Estado
P00 está completado. La cola final de 20 actividades quedó congelada en `.project/EXP02_BIBLE_APP.md`.

## Evidencia de P00
- investigación y planificación únicamente;
- baseline P00: `5d859b97e186640158bf1e0368e42070e80066a4`;
- durante P00 no hubo commits de implementación ni ingestión;
- fuentes/licencias, canon/tradición/versificación, formatos, búsqueda, offline y notificaciones fueron auditados;
- cola final: 10 actividades de investigación + 10 de implementación.

## Actividad autorizada siguiente
**Batch de investigación R01 → R10.**

El agente debe ejecutar R01–R10 secuencialmente, persistiendo evidencia y checkpoint por actividad, sin esperar revisión intermedia salvo bloqueo real.

## Gate duro
**I01–I10 NO están autorizadas todavía.**

La implementación sólo puede comenzar después de:
1. completar R10;
2. congelar el contrato final del MVP;
3. publicar el gate final del batch de investigación;
4. recibir decisión formal del Supervisor.

## Archivos obligatorios de entrada
1. `.project/CONTEXT.md`
2. `.project/WORK_STATE.md`
3. `.project/IMPLEMENTER_PROTOCOL.md`
4. `.project/EXP02_BIBLE_APP.md`
5. Issue #29
6. Issue #30 y decisión P00

## Primer siguiente paso
**R01 — Inventario de corpus, repositorios y procedencia.**

## Reglas críticas
- no ingerir ningún corpus sin decisión `ELIGIBLE` de R02/R04;
- no confundir conteo literal con cobertura temática;
- no asumir equivalencia traducción/tradición/canon;
- Tanaj/hebreo es corpus contextual, no denominación cristiana;
- no backend/vector DB/LLM obligatorios;
- notificación local, no alarma exacta;
- función principal offline-first.

## Gate del batch de investigación
Al completar R10 publicar:
`IMPLEMENTER COMPLETE — EXP-02/R01-R10`
`READY FOR SUPERVISOR EXP-02 RESEARCH BATCH REVIEW`

Después detenerse. No iniciar I01.
