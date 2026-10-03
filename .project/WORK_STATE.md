# Estado de trabajo — La U

## Última decisión formal
**EXP-01/S5 — ACCEPT**

## Capacidad demostrada
Una sola solicitud persistente completó:
- 10 micro-sesiones autónomas N → W;
- 40 turnos narrativos nuevos;
- cursor total 113 → 152;
- 10 reentradas desde estado durable;
- 10 persistencias;
- 10 verificaciones de diff;
- 0 bloqueos reales;
- 0 reentradas que necesitaran transcript para reconstrucción;
- 0 dependencia declarada de memoria privada.

## Memoria al cierre S5
- memory.md: 2163 caracteres;
- checkpoint.md: 2983 caracteres;
- transcript.md: 42401 caracteres.

## Protocolo vigente
`.project/NARRATIVE_CHAT_PROTOCOL.md`

## Estrategia actual
**FIXED NARRATIVE TEST AGENT**

Se mantiene el mismo chat narrativo.

## Actividad actual
**S6 / Issue #27 — Capacity probe — 20 micro-sesiones autónomas**

## Objetivo
Extender el mínimo demostrado desde 10 a 20 micro-sesiones consecutivas bajo una sola solicitud persistente.

## Batch S6
**X01 → X02 → X03 → X04 → X05 → X06 → X07 → X08 → X09 → X10 → X11 → X12 → X13 → X14 → X15 → X16 → X17 → X18 → X19 → X20**

Cada micro-sesión:
- 3–5 turnos;
- reentrada desde estado durable;
- ENTRY CHECKPOINT;
- roleplay;
- persistencia;
- diff;
- checkpoint;
- continuar inmediatamente si no hay bloqueo.

## Estado narrativo de entrada
- Inés salió del edificio el domingo a las 09:00;
- transporte y hora de llegada no persistidos;
- check-in de llegada pendiente;
- relación con interés mutuo, sin compromiso formal;
- comunicación a distancia asincrónica y sin frecuencia mínima.

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

## Regla de autonomía
No esperar revisión entre X01–X20.
No pedir autorización.
Detenerse sólo ante bloqueo real o al gate final.

## Actividad diferida
**T04 / Issue #21 — reemplazo por chat nuevo**
Permanece PAUSED.

## Gate S6
Después de X20:
**READY FOR SUPERVISOR CAPACITY-20 REVIEW**

Después detenerse.
