# Estado de trabajo — La U

## Última decisión formal
**EXP-01 — ACCEPT**

## Estado
EXP-01 está COMPLETADO y cerrado.

## Resultado principal
Se validó un patrón mínimo de roleplay persistente basado en:
- configuración estable;
- estado mutable compacto;
- memoria durable mínima;
- checkpoint de reanudación;
- transcript histórico como evidencia;
- protocolo operativo explícito.

## Capacidad demostrada
- continuidad narrativa hasta 250 turnos;
- reentradas repetidas sin usar transcript como memoria primaria;
- batch autónomo de 5 micro-sesiones;
- batch autónomo de 10 micro-sesiones;
- batch autónomo de 20 micro-sesiones / 86 turnos bajo una sola solicitud;
- reemplazo por chat completamente nuevo después de 238 turnos acumulados;
- T04 añadió 12 turnos y terminó en cursor 250.

## Persistencia segura
Después del fallo T03 se adoptó:
- baseline explícito;
- escritura sólo en paths autorizados;
- revisión obligatoria de diff;
- cero deletes/renames inesperados;
- detener/reparar ante inconsistencia.

Esta disciplina fue validada durante S1–S6 y T04.

## Arquitectura mínima validada
- `stories/exp-01/story.md` — configuración estable;
- `stories/exp-01/state.json` — estado actual;
- `stories/exp-01/memory.md` — hechos durables mínimos;
- `stories/exp-01/checkpoint.md` — punto exacto de reanudación;
- `stories/exp-01/transcript.md` — archivo histórico/evidencia;
- `.project/NARRATIVE_CHAT_PROTOCOL.md` — protocolo de entrada y operación.

## Trabajo activo
Ninguno.

## Próxima decisión humana
Elegir el siguiente eje experimental:
1. generalizar el patrón a otra historia / otro Narrative Test Agent;
2. introducir Chat B como curador/continuity controller;
3. diseñar otra prueba específica antes de añadir arquitectura.

No iniciar automáticamente ninguna de estas rutas.