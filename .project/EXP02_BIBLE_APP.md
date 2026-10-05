# EXP-02 — Bible Topic Explorer Mobile

## Estado del plan

**P00 — ACCEPT. Cola final congelada por Supervisor.**

La cola siguiente sustituye la cola candidata anterior. Es el plan autorizado de EXP-02.

La autorización de ejecución debe respetar las dependencias: **R01–R10 primero; I01–I10 sólo después de cerrar R10 y su contrato del MVP.**

## Propósito
Construir un prototipo móvil en español para explorar la Biblia por temas con resultados trazables, búsqueda offline y recordatorio matutino local.

## Decisiones congeladas de P00
- Baseline recomendado: Reina-Valera 1909; ninguna ingestión sin gate de licencia ELIGIBLE.
- Segunda traducción sólo si R04 demuestra valor/licencia/costo aceptables.
- No prometer deuterocanónicos hasta validar fuente estructurada y procedencia.
- Separar `translation`, `book_coverage`, `canon_profile` y `versification_profile`.
- Tanaj/texto hebreo es corpus contextual, no denominación cristiana.
- Hebreo/griego contextual no bloquea el MVP español.
- Import preferido: USFM 3.1 / USX / USJ; OSIS como adapter; USFX sólo legado.
- Runtime: SQLite local normalizado.
- Conteo literal, formas normalizadas y cobertura temática son métricas distintas.
- Baseline de búsqueda: FTS5 lexical + expansión temática curada/versionada/explicable.
- Embeddings, vector DB y LLM no son requisitos del MVP.
- Explicaciones MVP deterministas y trazables.
- Stack candidato: React Native + Expo + TypeScript + SQLite empaquetado.
- Función matutina: notificación local; no alarma exacta/critical alert.
- Búsqueda y lectura básica deben funcionar offline.
- Sin backend, cuentas, pagos ni API runtime obligatoria.

## Cola final — exactamente 20 actividades medianas

### Investigación

**R01 — Inventario de corpus, repositorios y procedencia**  
Entregable: catálogo de fuentes candidatas españolas y contextuales con URL primaria, mantenedor, formato, versión/release y estado de mantenimiento. No copiar textos.  
Dependencia: P00.

**R02 — Matriz de licencias, redistribución y atribución**  
Entregable: por candidato, rights holder/source, licencia exacta, redistribución, derivados, ShareAlike, atribución y decisión `ELIGIBLE / DEFER / REJECT`.  
Dependencia: R01.

**R03 — Modelo de canon, tradición y versificación**  
Entregable: especificación separada de `translation`, `book_coverage`, `canon_profile` y `versification_profile`; perfiles mínimos católico, `protestant_66`, ortodoxo documentado y hebreo contextual.  
Dependencia: R01.

**R04 — Selección de corpus español y gate de cobertura**  
Entregable: corpus primario MVP; decisión sobre segunda traducción; validar o diferir fuente estructurada de deuterocanónicos; matriz libro/cobertura/licencia.  
Dependencias: R02, R03.

**R05 — Evaluar corpus hebreo/griego contextual**  
Entregable: decisión `BUNDLE / TOOLING-ONLY / DEFER` para OSHB/WLC y SBLGNT con utilidad, licencia y costo de integración.  
Dependencias: R02, R03.

**R06 — Contrato de ingestión, IDs y normalización**  
Entregable: contrato de import para USFM 3.1/USX/USJ y OSIS cuando aplique; USFX sólo legado; IDs de libro/capítulo/verso, metadata fuente/licencia y esquema SQLite interno mínimo.  
Dependencias: R03, R04, R05.

**R07 — Definición formal de tema y métricas**  
Entregable: especificar literal exacto, formas normalizadas y cobertura temática como métricas distintas; pequeño gold set trazable para amor, perdón y misericordia.  
Dependencias: R04, R06.

**R08 — Baseline de búsqueda y ranking explicable**  
Entregable: diseñar/evaluar FTS5 lexical + expansión temática versionada/curada; definir gate medible para una prueba posterior de dense/hybrid.  
Dependencias: R06, R07.

**R09 — Freeze móvil: offline, almacenamiento y notificaciones**  
Entregable: decisión de stack, SQLite empaquetado, permisos/scheduling Android/iOS y semántica de notificación local; no alarma exacta.  
Dependencias: R06, R08.

**R10 — Contrato final del MVP y protocolo de evaluación**  
Entregable: congelar alcance, criterios de aceptación, dataset de prueba y gates de licencia, offline, canon/cobertura, exactitud de conteos, calidad temática, atribución y notificaciones.  
Dependencias: R02–R09.

### Implementación

**I01 — Scaffold móvil mínimo y harness de pruebas**  
Entregable: proyecto Expo/React Native/TypeScript ejecutable en Android/iOS, pruebas básicas y estructura mínima. Sin backend/cuentas/API runtime obligatoria.  
Dependencia: R10.

**I02 — Modelo SQLite local y metadata de fuentes/canon**  
Entregable: tablas normalizadas para traducciones, libros, versículos, cobertura, perfiles de canon, temas y licencia/atribución; soporte para DB preempaquetada.  
Dependencias: R06, R10, I01.

**I03 — Pipeline reproducible de ingestión del corpus aprobado**  
Entregable: importar sólo corpus `ELIGIBLE`, con source/release/checksum/licencia pinneados; generar asset SQLite reproducible.  
Dependencias: R02, R04, R06, I02.

**I04 — Búsqueda literal e índice FTS5**  
Entregable: consulta token/frase, normalización documentada, resultados trazables y conteo literal reproducible por traducción; no usar stemmer inglés para español.  
Dependencias: R07, R08, I03.

**I05 — Motor temático mínimo explicable**  
Entregable: topic definitions versionadas, expansión de términos y ranking explicable; cada hit indica criterio de recuperación. Sin embeddings obligatorios.  
Dependencias: R07, R08, I04.

**I06 — Pantalla de búsqueda y resultados**  
Entregable: entrada de tema; conteo literal separado del número/cobertura de versículos temáticos; referencia y traducción visibles.  
Dependencias: I04, I05.

**I07 — Vista de versículo, contexto y procedencia**  
Entregable: versículo + referencia + contexto local + traducción + fuente/licencia; comparación sólo si R04 aprobó una segunda traducción y fue ingerida.  
Dependencias: I03, I06.

**I08 — Filtros por traducción/canon/tradición con disclosure de cobertura**  
Entregable: filtros sólo cuando datos reales los soporten; no insinuar cobertura inexistente.  
Dependencias: R03, R04, I02, I07.

**I09 — Recordatorio matutino local y offline**  
Entregable: permisos, hora elegida, programación/reprogramación local y selección determinista de mensaje/versículo offline; degradación clara si se deniega permiso. Sin exact alarm/critical alert.  
Dependencias: R09, I01, I03.

**I10 — QA end-to-end, evaluación y demo del MVP**  
Entregable: ejecutar gold set y verificar conteos/referencias, thematic retrieval, canon/cobertura, atribución/licencias, airplane mode/offline, cold start y notificación; documentar fallos y readiness.  
Dependencias: R10, I04–I09.

## Política de ejecución persistente
- Cada actividad deja evidencia durable y checkpoint antes de avanzar.
- El agente continúa sin esperar revisión entre actividades autorizadas salvo bloqueo real o gate explícito.
- Ningún corpus se ingiere antes de `ELIGIBLE`.
- R01–R10 constituyen el batch de investigación autorizado siguiente.
- I01–I10 permanecen bloqueadas hasta que R10 congele el contrato final del MVP y exista autorización durable de implementación.
- Todo cambio de alcance se registra antes de ejecutarse.

## Primer siguiente paso
**R01 — Inventario de corpus, repositorios y procedencia.**
