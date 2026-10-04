# EXP-02 — Bible Topic Explorer Mobile

## Propósito

Investigar y construir un prototipo móvil sencillo para explorar la Biblia por temas.

Ejemplos de temas:
- amor;
- perdón;
- misericordia;
- esperanza;
- fe;
- justicia;
- temor;
- gracia.

El usuario debe poder escribir un tema y recibir resultados útiles y trazables:
- versículos;
- referencias;
- capítulos relacionados;
- traducción/corpus usado;
- conteos;
- explicación breve;
- contexto;
- comparación cuando corresponda.

El prototipo también debe evaluar una función matutina de recordatorio/notificación con un mensaje o versículo relacionado.

## Hipótesis principal

Un agente implementador nuevo puede investigar fuentes bíblicas abiertas, definir una representación neutral entre tradiciones cristianas, construir un buscador temático móvil mínimo y ejecutar una cola mediana de trabajo persistente desde GitHub.

## Principios

1. GitHub es estado durable.
2. El chat es trabajador reemplazable.
3. No asumir que todas las Biblias cristianas tienen exactamente el mismo canon.
4. No confundir:
   - ocurrencia literal de una palabra;
   - versículo relacionado semánticamente con un tema.
5. Toda cita bíblica debe conservar referencia y traducción.
6. No inventar versículos ni referencias.
7. No presentar una tradición cristiana como teológicamente superior.
8. Licencia y derechos de redistribución son requisito de entrada, no detalle posterior.

## Alcance religioso inicial

La investigación debe distinguir, como mínimo:
- tradición católica;
- tradición protestante/evangélica;
- tradición ortodoxa;
- texto hebreo/Tanaj como corpus contextual no cristiano cuando sea útil para el Antiguo Testamento.

Para el Nuevo Testamento, investigar el núcleo de 27 libros compartido por las tradiciones cristianas principales y separar las diferencias de canon que aparecen sobre todo en el Antiguo Testamento.

No intentar representar en el MVP todas las denominaciones cristianas existentes.

## Hallazgos iniciales del Supervisor que deben ser verificados

- Reina-Valera 1909 tiene fuentes digitales de dominio público.
- eBible.org ofrece Biblias españolas abiertas y formatos de desarrollo.
- BibleAquifer publica recursos bíblicos abiertamente licenciados.
- Open Scriptures Hebrew Bible ofrece un corpus hebreo con licencia abierta.
- SBL Greek New Testament tiene licencia CC BY 4.0.
- USFM/USFX y OSIS son candidatos de interoperabilidad.
- Algunas Biblias abiertas incluyen libros de canon ampliado.
- Una “alarma” móvil y una notificación local programada no son necesariamente la misma capacidad en Android/iOS.

Estos son puntos de partida, no decisiones finales.

## MVP deseado

Aplicación móvil, inicialmente en español.

Flujo principal:
1. usuario abre app;
2. escribe tema;
3. ve resultados ordenados;
4. distingue conteo literal de cobertura temática;
5. abre un resultado;
6. ve versículo + referencia + traducción + contexto breve;
7. puede filtrar por corpus/tradición/traducción si los datos lo permiten;
8. puede activar un mensaje matutino programado.

## Métricas mínimas del buscador

Para un tema como “amor”, el prototipo debe poder mostrar por separado:
- número de ocurrencias literales del término o formas normalizadas;
- número de versículos recuperados por expansión temática;
- fuentes/traducciones en las que se calculó;
- criterios usados.

Nunca presentar un conteo temático como si fuera un conteo literal.

## Explicaciones

Las explicaciones deben ser:
- cortas;
- trazables al texto;
- descriptivas;
- sensibles a diferencias de traducción;
- explícitas cuando una interpretación varíe por tradición.

Para el MVP, investigar si conviene:
- explicación determinista;
- resumen generado por LLM con grounding;
- explicación precalculada;
- combinación.

No implementar una capa teológica compleja sin necesidad.

## Recordatorio matutino

El MVP debe investigar y, si es viable, implementar:
- hora elegida por usuario;
- notificación local;
- mensaje/versículo del día;
- funcionamiento razonable sin backend.

No prometer comportamiento de “reloj despertador exacto” multiplataforma hasta validar restricciones de Android/iOS.

## Datos

Preferir inicialmente:
- dominio público;
- CC0;
- CC BY;
- otras licencias abiertas compatibles y documentadas.

No copiar al repositorio traducciones modernas con derechos incompatibles.

Toda fuente incorporada debe tener:
- nombre;
- idioma;
- tradición/canon cuando corresponda;
- licencia;
- URL de origen;
- formato;
- versión/fecha si existe.

## No objetivos del prototipo

- comentario teológico exhaustivo;
- doctrina comparada completa;
- IA pastoral;
- reemplazar estudio bíblico académico;
- sincronización de cuentas;
- backend complejo;
- pagos;
- red social;
- vector DB obligatorio;
- soportar todas las Biblias del mundo;
- alarma exacta tipo despertador si requiere complejidad nativa desproporcionada.

## Cola candidata de 20 actividades medianas

### Investigación
R01. Landscape de repositorios, APIs y datasets bíblicos abiertos.
R02. Matriz de licencias y redistribución para traducciones/corpus candidatos.
R03. Mapa de canon/tradición: católico, protestante/evangélico, ortodoxo y contexto hebreo.
R04. Selección de corpus españoles para MVP y corpus originales/contextuales opcionales.
R05. Formatos y normalización: USFM/USFX/OSIS/JSON; identificadores libro-capítulo-versículo.
R06. Definición de “tema”: ocurrencia literal vs tema semántico; taxonomía mínima.
R07. Evaluación de búsqueda lexical, sinónimos, lemas, embeddings y enfoque híbrido.
R08. Política de explicación, citas, contexto y neutralidad intertradicional.
R09. Investigación móvil: stack, almacenamiento offline y notificaciones/alarma.
R10. Arquitectura MVP, criterios de éxito y plan de evaluación.

### Implementación
I01. Scaffold del prototipo móvil y estructura de proyecto.
I02. Pipeline reproducible de ingestión para corpus abiertos seleccionados.
I03. Modelo normalizado de versos, traducciones, canon/tradición y metadatos.
I04. Índice local y conteo literal por término/forma normalizada.
I05. Motor temático mínimo con expansión de términos y ranking explicable.
I06. Pantalla principal de búsqueda y resultados por tema.
I07. Vista de versículo/contexto y comparación entre traducciones/corpus.
I08. Filtros por traducción/canon/tradición + transparencia de fuente/licencia.
I09. Recordatorio matutino/notificación local con mensaje o versículo.
I10. Dataset de prueba, QA temático, evaluación de precisión y demo del MVP.

## Gate de planificación

Estas 20 actividades son una cola candidata.

Antes de ejecutarlas, un Implementador nuevo debe auditarlas y responder:
- qué mantendría;
- qué fusionaría;
- qué dividiría;
- qué reordenaría;
- dependencias;
- riesgos;
- fuentes/repositories prioritarios;
- definición exacta del MVP;
- propuesta final de 20 actividades medianas.

El Implementador NO debe comenzar implementación en P00.

Después:
`READY FOR SUPERVISOR EXP-02 PLAN REVIEW`

y detenerse.
