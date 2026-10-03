# Contexto operativo del proyecto — La U

## Propósito de este documento
Este archivo existe para que cualquier agente o colaborador que reciba acceso al repositorio pueda entender qué se está investigando, qué se intenta construir, en qué fase se encuentra el trabajo y cómo continuar sin depender de memoria externa del chat.

No es documentación promocional ni README.

## Objetivo del proyecto
Construir un prototipo llamado **La U** para experimentar con **tareas persistentes y conversaciones persistentes entre chats web de inteligencia artificial**.

El caso de uso inicial será la creación de **cuentos románticos** mediante roleplay narrativo entre personajes adultos. El romance no es el fin técnico único: funciona como dominio de prueba porque exige continuidad de personajes, memoria, progresión emocional, escenas, quiebres, secundarios, reanudación y desenlace.

## Objetivo de la investigación
Determinar qué arquitectura narrativa, memoria mínima, protocolo de conversación, organización de archivos y división de responsabilidades permiten que dos chats web trabajen de forma persistente sobre una historia romántica y puedan detenerse/reanudarse sin perder continuidad.

La investigación debe responder, entre otras, estas preguntas:
- cómo estructurar un cuento romántico completo;
- cómo representar beats, quiebres, clímax y desenlace;
- cómo mantener personajes principales consistentes;
- cuándo introducir personajes secundarios y cuánta memoria necesitan;
- cómo modelar escenas públicas y privadas;
- qué información mínima debe persistirse para reanudar;
- cómo coordinar dos chats web con roles distintos;
- qué cadencia de turnos, resúmenes y checkpoints funciona mejor;
- cómo almacenar inicialmente estado y memoria usando archivos y subdirectorios de GitHub;
- cómo evolucionar de un prototipo basado en archivos a una arquitectura escalable.

## Hipótesis del prototipo 1
El primer prototipo puede funcionar sin base de datos externa, usando el repositorio GitHub como almacenamiento durable de:
- configuración de personajes;
- estado de la relación;
- estado de escena;
- memoria resumida;
- checkpoints;
- resultados de investigación;
- artefactos de evaluación.

Esta hipótesis debe ser probada, no asumida como arquitectura definitiva.

## Experiencia narrativa inicial
El dominio de prueba es **Cuentos románticos — Prototipo 1**.

Características iniciales:
- dos protagonistas inequívocamente adultos;
- configuración inicial de rol masculino y femenino;
- romance de consumo generalista;
- tres escenarios públicos;
- dos escenarios privados;
- personajes secundarios opcionales;
- progresión narrativa con inicio, desarrollo, quiebres, crisis/clímax y desenlace;
- memoria persistente mínima;
- posibilidad de pausar y reanudar la historia.

Los roles masculino/femenino son atributos de personaje, no estereotipos conductuales obligatorios.

## Modelo experimental de dos chats web
Se trabajará inicialmente con **dos chats web persistentes**.

### Chat A — Actor / escritor de roleplay
Responsable de ejecutar la conversación narrativa y personificar los roles autorizados para la escena.

Debe poder:
- interpretar protagonistas;
- respetar perspectiva y conocimiento de cada personaje;
- avanzar beats y escenas;
- registrar checkpoints;
- reanudar desde memoria mínima.

### Chat B — función por validar
La investigación debe determinar la función óptima. Candidatos:
- director narrativo;
- curador de memoria;
- controlador de continuidad;
- resumidor;
- evaluador;
- combinación acotada de las anteriores.

No se debe asumir todavía que Chat B participa directamente en el diálogo narrativo.

## Persistencia
Toda actividad de investigación o desarrollo debe producir evidencia durable en GitHub.

Para investigación:
- issue específica;
- checkpoints en la issue;
- fuentes;
- hallazgos;
- inferencias;
- decisiones provisionales;
- preguntas abiertas;
- cierre técnico marcado **IMPLEMENTER COMPLETE — RXX**;
- avance inmediato a la siguiente actividad de la cola persistente.

La evaluación formal no ocurre actividad por actividad. El Supervisor revisa el conjunto completo después de la síntesis R09, cuando la Issue #1 queda marcada **READY FOR SUPERVISOR BATCH REVIEW**.

Para implementación futura:
- cambios versionados;
- evidencia verificable;
- evaluación antes de aceptación.

## Diseño por fases
El proyecto se organizará en **cinco fases**. La forma exacta de esas cinco fases debe ser propuesta y justificada por el Implementador como actividad de investigación antes de autorizar desarrollo sustancial.

La propuesta debe separar, como mínimo:
1. investigación y definición del experimento;
2. protocolo narrativo/memoria;
3. prototipo funcional;
4. pruebas persistentes entre chats;
5. consolidación/evaluación de la versión 1.

Estos nombres son orientativos; el Implementador debe validar dependencias, criterios de entrada/salida y entregables.

## Principio de alcance
No entregar actividades enormes. Cada actividad debe ser suficientemente pequeña para:
- poder pausarse;
- dejar checkpoint;
- ser retomada por otro agente;
- producir evidencia verificable;
- ser revisada por el Supervisor.

## Estado actual
La investigación está en **modo persistente por lote**. El Implementador ejecuta secuencialmente la cola definida en `.project/WORK_STATE.md`, guardando checkpoints y cierres técnicos sin esperar evaluación entre tareas.

No existe autorización todavía para construir la aplicación completa. La revisión del Supervisor ocurre al final del batch, después de R09.

## Continuidad para nuevos agentes
Al entrar al proyecto:
1. leer este documento;
2. leer la issue padre de investigación;
3. identificar la actividad autorizada;
4. leer checkpoints previos;
5. trabajar sólo dentro del scope;
6. persistir evidencia antes de detenerse;
7. marcar la actividad **IMPLEMENTER COMPLETE — RXX** al terminar;
8. continuar con la siguiente actividad de la cola sin esperar evaluación;
9. detenerse sólo al completar R09 o ante un bloqueo que impida continuar.

## Nombre de producto
**La U**

## Nombre experimental de contenido
**Cuentos románticos — Prototipo 1**
