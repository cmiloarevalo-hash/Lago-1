# Estado de trabajo — La U

## Última decisión formal
**EXP-01 — REWORK**

## Hallazgo
El cold resume narrativo de T03 funcionó, pero el commit final modificó/eliminó archivos fuera de scope. Por ello se requiere mejorar disciplina de persistencia antes de continuar con reemplazos de chat.

## Protocolo operativo nuevo
Existe:
`.project/NARRATIVE_CHAT_PROTOCOL.md`

Todo chat narrativo debe ejecutar ese protocolo de entrada antes de generar contenido.

## Estrategia actual
**FIXED NARRATIVE TEST AGENT**

Por decisión humana, durante la etapa de estabilización se utilizará el mismo chat web como agente narrativo fijo.

El chat conserva una identidad operativa estable:
**NARRATIVE TEST AGENT**

Aunque sea el mismo chat, al comenzar cada sesión debe actuar como si su memoria privada no fuera autoridad:
- releer repositorio;
- declarar baseline;
- reconstruir contexto;
- declarar paths autorizados;
- persistir sólo dentro de scope.

## Reparación de integridad
`stories/exp-01/story.md` fue restaurado por el Supervisor desde el baseline durable pre-T03 en el commit `a5b2fc813bb31f47cbfb8430731b077e5a32259e`.

La causa exacta del borrado T03 no está demostrada; la hipótesis más probable es una operación de escritura que no preservó correctamente el árbol base. La mitigación obligatoria es revisión de diff y scope antes de completar cualquier persistencia.

## Actividad inmediata
**S1 / Issue #22 — Estabilizar Narrative Test Agent fijo**

S1 está DESBLOQUEADA. El mismo chat narrativo fijo debe reiniciar su protocolo de entrada contra el HEAD actual.

S1 usa el mismo chat narrativo durante tres bloques cortos persistentes.

## Actividad diferida
**T04 / Issue #21 — cold resume desde otro chat nuevo**

T04 queda PAUSED hasta que S1 reciba revisión del Supervisor.

## Paths narrativos mutables autorizados
- `stories/exp-01/transcript.md`
- `stories/exp-01/state.json`
- `stories/exp-01/memory.md`
- `stories/exp-01/checkpoint.md`

## Read-only para el Narrative Test Agent
- `stories/exp-01/story.md`
- `.project/*`
- `README.md`

## Regla de persistencia
Antes de considerar completa cualquier escritura:
1. registrar HEAD baseline;
2. aplicar sólo cambios autorizados;
3. inspeccionar diff;
4. confirmar cero deletes inesperados;
5. confirmar cero paths fuera de scope.

## Gate de estabilización
Después de tres bloques S1:
**READY FOR SUPERVISOR FIXED-CHAT REVIEW**

Sólo después se decidirá cuándo volver a probar reemplazo/cold-resume con otro chat.
