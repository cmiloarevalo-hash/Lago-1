# Estado de trabajo — La U

## Repositorio
`cmiloarevalo-hash/Lago-1`

## Última decisión formal
**EVAL-00 — ACCEPT**

El batch de investigación R03→R09 fue aceptado como evidencia suficiente para avanzar a un experimento operativo mínimo.

## Objetivo estratégico vigente
Validar primero el bucle persistente de un chatbot, no construir todavía una aplicación compleja.

## Work Item activo
**EXP-01 — Persistent Roleplay Cold Resume**  
Issue #16

## Cola inicial

1. **T01 / #17** — crear paquete mínimo de historia persistente
2. **T02 / #18** — ejecutar roleplay, persistir y producir checkpoint
3. **T03 / #19** — cold resume desde un chat web nuevo

## Actividad actual
**T01 / Issue #17**

## Regla persistente
El Implementador actual ejecuta T01 y continúa inmediatamente con T02.

Al final de T02 debe publicar:
**HANDOFF REQUIRED — COLD RESUME**

y detenerse.

T03 NO puede ejecutarse en el mismo chat. Requiere un chat web nuevo sin contexto privado de T01/T02.

## Artefactos permitidos para EXP-01
Una historia de prueba con solamente:
- story.md
- state.json
- memory.md
- transcript.md
- checkpoint.md

No añadir arquitectura salvo bloqueo demostrado.

## Fuera de alcance
- aplicación/backend;
- DB externa;
- vector memory;
- event sourcing completo;
- Chat B;
- evaluator LLM;
- infraestructura multiagente;
- producción.

## Criterio de éxito
Un chat nuevo reconstruye la historia desde GitHub y continúa de manera coherente sin resumen manual del chat anterior.

## Próximo gate
Después de T03:
**READY FOR SUPERVISOR EXP-01 REVIEW**

El Supervisor evalúa continuidad, simplicidad y suficiencia de la persistencia antes de autorizar un experimento de dos chats.
