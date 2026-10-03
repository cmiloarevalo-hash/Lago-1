# Estado de trabajo — La U

## Última decisión formal
**EXP-01 — ACCEPT**

## Estado
EXP-01 está COMPLETADO y cerrado.

## Resultado final
El prototipo validó que GitHub puede actuar como memoria durable externa para un Narrative Test Agent y que el trabajador puede ser reemplazado por una conversación nueva bajo protocolo explícito.

## Evidencia validada
- continuidad narrativa hasta 262 turnos;
- reentradas repetidas desde durable state;
- transcript no utilizado como memoria primaria;
- memory compacta;
- persistencia segura por baseline/scope/diff;
- batch autónomo de 5 micro-sesiones / 32 turnos;
- batch autónomo de 10 micro-sesiones / 40 turnos;
- batch autónomo de 20 micro-sesiones / 86 turnos;
- T05: fresh-chat takeover de 3 micro-sesiones / 12 turnos.

## Corrección histórica
T04 fue ejecutada con el mismo chat previo y NO cuenta como prueba de reemplazabilidad.

T05 fue creada específicamente para repetir esa dimensión desde una conversación nueva.

## Caveat
La condición de chat nuevo es atestada por el humano; GitHub no puede verificar identidad de conversación.

El no uso de transcript para bootstrap es un reporte operacional; Git sí verifica la coherencia del resultado persistido.

## Arquitectura mínima validada
- `stories/exp-01/story.md` — configuración estable;
- `stories/exp-01/state.json` — estado actual;
- `stories/exp-01/memory.md` — hechos durables mínimos;
- `stories/exp-01/checkpoint.md` — punto exacto de reanudación;
- `stories/exp-01/transcript.md` — archivo histórico/evidencia;
- `.project/NARRATIVE_CHAT_PROTOCOL.md` — protocolo operativo.

## Trabajo activo
Ninguno.

## Próxima decisión humana
No iniciar nada automáticamente.

Opciones futuras:
1. generalizar a otra historia;
2. repetir fresh-chat takeover varias veces para estimar tasa de éxito;
3. introducir Chat B como continuity controller;
4. probar el mismo patrón en una tarea no narrativa.