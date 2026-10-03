# Estado de trabajo — La U

## Última decisión formal
**EXP-01 — REWORK**

## Motivo
T03 demostró continuidad narrativa en cold resume, pero su commit final eliminó archivos fuera de scope:
- `.project/CONTEXT.md`
- `.project/WORK_STATE.md`
- `README.md`
- `stories/exp-01/story.md`

Los documentos de control `.project/CONTEXT.md` y `README.md` ya fueron restaurados por el Supervisor.

## Estado actual
**REWORK — SAFE PERSISTENCE**

## Objetivo
Corregir la integridad del repositorio y volver a probar persistencia con escritura acotada.

## Trabajo autorizado
1. restaurar `stories/exp-01/story.md` exactamente desde baseline pre-T03;
2. identificar causa del borrado inesperado;
3. documentar regla de escritura segura;
4. ejecutar una nueva reanudación corta desde otro chat nuevo;
5. antes de commit final, inspeccionar diff vs baseline;
6. aceptar sólo cambios en paths autorizados.

## Regla de seguridad
Antes de cualquier commit final:
- comparar contra baseline;
- listar archivos modificados;
- abortar si aparece cualquier archivo no autorizado;
- abortar si aparece un borrado inesperado.

## Bloqueado
- Chat B;
- aplicación/backend;
- cualquier expansión arquitectónica.

## Próximo gate
La revalidación termina con:
**READY FOR SUPERVISOR EXP-01 REWORK REVIEW**
