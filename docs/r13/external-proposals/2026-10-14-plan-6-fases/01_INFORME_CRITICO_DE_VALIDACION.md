# INFORME CRÍTICO DE VALIDACIÓN — LA U 1.3

**Fecha de consulta y corte:** 14 de octubre de 2026. **Rol:** Research & Prototype Implementer. **Objeto:** evaluar una propuesta externa; **no ejecutarla**. **Conclusión:** **APROVECHABLE COMO BANCO DE IDEAS, PERO NO APROBADA NI LISTA PARA IMPLEMENTAR**.

**Documento examinado:** `00_FUENTE_EXTERNA_ORIGINAL.md` (original aportado por el Product Owner, sin modificar), 40.468 bytes, 490 líneas, SHA-256 `0586c8e77e2c7e7f340ceb391ad03220be42f6adb23769167ca82fae8bd53fbb`. **Autor intelectual externo:** no consta. Documento original `LA_U_13_PLAN_INTEGRAL_ACTUALIZACION_6_FASES(2).md` con el mismo contenido/huella del `(1).md` solicitado.

**Base comparada:** [rama de código `feat/r13-p2-topic-ui`, commit `e3cea7b`](https://github.com/cmiloarevalo-hash/Lago-1/tree/e3cea7bc360c7fc97187639ca2f72b0c046d6a4a), más atlas editorial/TSV y cuaderno [`c821142`](https://github.com/cmiloarevalo-hash/Lago-1/commit/c82114234ee63150879d0ede4271d3a7e4269708). Autorización: [Issue #65, comentario #6176016973](https://github.com/cmiloarevalo-hash/Lago-1/issues/65#issuecomment-6176016973).

## 1. Resumen ejecutivo para el Product Owner

La propuesta plantea una formación **cristocéntrica** que relacione la Escritura de Israel con las enseñanzas de Jesús; pretende enriquecer dinámicas presenciales, diversificar mecánicas y fortalecer esperanza/acompañamiento. Es coherente **en principio** con el propósito de La U si se evita convertir analogías en supuestas citas de Jesús, si se respetan diferencias denominacionales y si las experiencias reales de comunidades son aportadas por responsables humanos, no inventadas por IA. No autoriza cambios.

**Hechos comprobados en el repositorio:** cuatro tabs inferiores señaladas por navegación, siete destinos del menú; 100 temas (23 reseñas desarrolladas, 77 sin ficha), 14 lecturas Hoy, cuatro planes de siete días, ocho guías pastorales, veinte dinámicas de tres pasos, cinco trivia, cinco verdadero/falso y una secuencia de versos. Las tres plantillas de actividades nuevas pertenecen al **Word**, no al código. La presencia física real de cada pantalla no fue examinada en esta auditoría.

**Separación decisiva:** las 16 enseñanzas F01–F16, las 20 transformaciones D01–D20, los juegos N01–N03, la categorización futura de Hoy y las fotos P01–P10 son **PROPUESTAS**, no funciones ni contenidos disponibles ya en la APK. El documento base **«86 páginas» queda NO VERIFICADO** porque no se aportó prueba de paginación real y permanecía abierto el QA de Word.

### Dictamen por eje

| Eje | Dictamen | Fundamento práctico |
|---|---|---|
| Jesús y conexión AT→NT | **ACEPTAR COMO IDEA / AJUSTAR** | Marcos 12 cita Deuteronomio y Levítico; Lucas 4 aplica Isaías, pero la mayoría de las demás relaciones son temáticas, no citas. |
| Currículo F01–F16 | **AJUSTAR; REQUIERE REVISIÓN HUMANA** | No está implementado; distinguir palabras de Jesús, narración evangélica, epístolas e interpretación confesional. |
| Diversificar 20 dinámicas | **ACEPTAR COMO IDEA**, solo como opciones | Puede mejorar participación, pero la mecánica actual está cerrada a tres pasos y hay que asegurar adaptaciones y medidas de protección. |
| 14 lecturas Hoy | **ACEPTAR COMO IDEA** la auditoría de mensajes | No cambiar referencias ni rotación; promesas espirituales deben leerse en contexto. |
| Fichas 8–11 años | **AJUSTAR / REVISIÓN HUMANA** | Fuera del ámbito general 12+ registrado; la propuesta misma las condiciona a aprobación. |
| Fotografía P01–P10 | **REQUIERE REVISIÓN HUMANA** | Diez páginas encontradas y fotógrafos coinciden; licencia Pexels identificada, pero releases de modelos/personas y adecuación a uso religioso/menores no probados. |
| Rediseño de app | **DESCARTAR** en este trabajo | Dirección visual actual conservada expresamente por el Product Owner. |
| Biblia RV1909 / 4 planes / trivia / datos privados | **CONSERVAR / NO MODIFICAR** | Invariantes del Supervisor. |
| Ejecutar seis fases de inmediato | **DESCARTAR** | GO fue solo a esta validación previa, con gates separados. |

## 2. Qué coincide y qué no coincide con el producto

Consulta directa de código en `apps/bible-topic-explorer/src/product/` (todas las rutas y versión en matriz `02`): `secondaryMenu.ts` declara **siete** destinos; `today.ts` contiene **14** objetos de lectura con `book/chapter/verse/category/prompt`; `readingPlans.ts` define **4** planes y **28** días; `pastoralTopics.ts` contiene **8** guías; `pastoralActivities.ts` define **20** actividades cuya interfaz de datos usa `steps: readonly [string,string,string]`; `pastoralGames.ts` define **5 + 5** preguntas y `sequenceGame`. En cotejo mecánico del expediente, **D01–D20 reconcilian 20/20 slugs de actividad** y **H01–H14 reconcilian 14/14 pares de referencia/categoría** con el código. `topics.ts`, `conceptIndex.ts`, `conceptPreviews.ts` y el atlas anterior sustentan los cien títulos, las 23 vistas contextuales y 77 pendientes.

**No respaldado como hecho:** 86 páginas de Word, recepción física de fotografías en la APK, nuevas reglas de pelota/circuitos en el código, módulo F01–F16 como pantalla actual, menores de 8–11 como público autorizado, disponibilidad legal de fotografía para afiliación religiosa. Las nuevas rutas curriculares, modificaciones de datos y fotografías tienen riesgo de introducir funciones/diseño no autorizados.

## 3. Auditoría bíblica F01–F16 (resumen; detalle por fila en matriz 03)

Se usaron páginas de [RV1909 eBible](https://ebible.org/spaRV1909/index.htm) para leer los capítulos señalados en AT y NT. Se comprobó la **identidad del libro, capítulo, contexto de la escena y voz de los hablantes**. La lectura cristiana de las Escrituras puede ser legítima como enseñanza religiosa sin presentarse como deducción histórica indiscutible o consenso interconfesional.

- **CITA EXPRESA DE JESÚS — F03 y F05.** Marcos 12:28–34 / 29–31 contiene explícitamente el mandamiento de Deuteronomio 6:4–5 y el de Levítico 19:18. **Aceptar como idea** para dos pilotos no masivos. [Marcos 12](https://ebible.org/spaRV1909/MRK12.htm), [Deut 6](https://ebible.org/spaRV1909/DEU06.htm), [Lev 19](https://ebible.org/spaRV1909/LEV19.htm).
- **LECTURA Y APLICACIÓN EXPLÍCITA — F09.** Lucas 4:16–21 describe a Jesús leyendo un texto de Isaías y afirmando cumplimiento. **Matiz:** verificar las diferencias textuales con Isaías 61:1–2 y la conexión con Isaías 58; Lucas no reproduce íntegramente Isaías 61:2. [Lucas 4](https://ebible.org/spaRV1909/LUK04.htm); [Isaías 61](https://ebible.org/spaRV1909/ISA61.htm).
- **DOS VOCES — F01.** Lucas 24 presenta a Jesús explicando Escrituras. **2 Timoteo 3:16–17 es texto epistolar**, no cita de Jesús. Salmos 119:105 tampoco es citado directamente por Jesús en ese pasaje. **Ajustar etiqueta y atribución.** [Lucas 24](https://ebible.org/spaRV1909/LUK24.htm); [2 Timoteo 3](https://ebible.org/spaRV1909/2TI03.htm).
- **CONTINUIDAD Y PACTO — F02.** Jeremías 31:31–34, Lucas 22:19–20 y Mateo 5:17 pueden compararse sobre pacto/cumplimiento, pero **Mateo 5:17 no es cita expresa de Jeremías 31**. Las tradiciones pueden discrepar sobre articulación AT/NT: asesor teológico humano.
- **CONTINUIDAD TEMÁTICA — F04, F06–F08, F10–F12.** Ideas de misericordia, cuidado, oración, justicia, servicio y paz tienen pasajes relevantes, pero **no** equivalen a citas literales de Jesús de todos los textos AT elegidos. Leer parábolas y discursos completos; no forzar reconciliación en contextos de abuso ni oración en público.
- **INTERPRETACIÓN CONFESIONAL/APOSTÓLICA — F13.** Isaías 53:4–6 admite lectura cristológica **identificada como cristiana**, no profecía literal exclusiva presentada como único consenso. 1 Corintios 15:3–4 es declaración apostólica; Juan 3:16–17 requiere además cuidado en atribución exacta del hablante según tradiciones de puntuación/edición. Requiere revisor bíblico/pastoral. [Isaías 53](https://ebible.org/spaRV1909/ISA53.htm); [1 Cor 15](https://ebible.org/spaRV1909/1CO15.htm).
- **INTERPRETACIÓN APOSTÓLICA — F14.** Hechos 2:25–32 es el **discurso de Pedro** que cita/aplica Salmos 16 a la resurrección, NO palabras directas de Jesús. Lucas 24:1–12 es narrativa de Pascua. **Ajustar** atribución. [Hechos 2](https://ebible.org/spaRV1909/ACT02.htm).
- **ANALOGÍA — F15.** Jeremías 17:7–8 usa la imagen del árbol junto al agua; Juan 15:1–12 usa la vid y los pámpanos. **No existe cita literal de Jeremías por Jesús** en Juan 15. Aceptar solo la analogía señalada como tal. [Jer 17](https://ebible.org/spaRV1909/JER17.htm); [Juan 15](https://ebible.org/spaRV1909/JHN15.htm).
- **JESÚS Y APÓSTOL — F16.** Juan 13:34–35 es enseñanza de Jesús; Santiago 2:14–17 es exhortación epistolar posterior. Levítico 19:18 funciona como antecedente temático. **Ajustar distinción de voz**.

La clasificación detallada para **las dieciséis** filas se conserva en `03_MATRIZ_BIBLICA_F01_F16.csv` con pasajes, voz, enlace RV1909, cautelas y dictamen.

## 4. Actividades presenciales y protección

La intención de evitar veinte fichas idénticas de «sentarse y conversar» es valiosa **como hipótesis pedagógica**, no un diagnóstico empírico de aburrimiento de jóvenes reales. El repositorio contiene mecánicas variadas ya (puente de papel, observación, narración, lectura, trabajo de equipo); un diagnóstico de repetición necesita leer cada una sin caricaturizar lo existente.

Los cambios D01–D20 preservan normalmente nombre/ID propuestos; en la app actual los veinte objetos tienen **tres pasos**, por lo que una mecánica de seis estaciones no aparece automáticamente. Revisar necesidades de accesibilidad, instrucciones coherentes, materiales, responsables, tiempos, aforo, espacio y edades. Mantener opciones sentada/escrita/voz; pelota muy blanda y sin lanzar a cara si se propone; cooperación sin humillación. Con menores, observación de normas locales, dos adultos responsables donde lo disponga la ficha, consentimiento, no recolección de datos sensibles, no forzar tocarse, orar, revelar intimidad, reconciliarse con agresores ni exponerse a riesgo. Aplicar derivación profesional cuando hay salud mental, abuso o protección.

La nueva propuesta **8–11 años** no forma parte del target actual 12+ sin nueva autorización. Los grupos 12–14 y 15–18 ameritan pilotos diferenciados. N01–N03 son solo candidatos; no introducir experiencias locales inventadas ni obligaciones de oración.

Fuentes pedagógicas oficiales: [UNICEF guías](https://www.unicef.org/adolescentkit/facilitation-guides), [UNICEF recursos](https://www.unicef.org/adolescentkit/facilitation-resources). Su aplicabilidad es facilitación e inclusión adolescente, **no doctrina cristiana** ni aval de la aplicación.

## 5. Derechos de fotografía y pertinencia visual

Las **diez** URLs P01–P10 de Pexels respondieron y el **autor mostrado coincide en cada caso** con la tabla externa. El enlace de [licencia oficial Pexels](https://www.pexels.com/license/) permite uso general en sitios/aplicaciones y modificaciones sin atribución obligatoria, pero contiene prohibiciones de representación ofensiva de personas identificables, apariencia de aval de personas/marcas, reventa de ejemplares no transformados y usos de marca. [Pexels, guía sobre terceros y consentimiento](https://help.pexels.com/hc/es/articles/360042295214--Puedo-usar-las-fotos-y-los-videos-para-un-proyecto-comercial) advierte posibles derechos adicionales de privacidad, marcas o permisos de terceros.

**No son CC0 ni dominio público; 0 de 10 aprobadas para incorporación.** No se obtuvo constancia individual de modelo/release, consentimiento de menores, ni autorización a relacionar sus rostros con un grupo religioso o el producto La U. En particular:
- **P01/P02:** recreación y balón; P02 muestra actividad con balones inflables grandes, no necesariamente el circuito sugerido.
- **P03/P04/P10:** fotografías de niños haciendo manualidades; pertinentes a creatividad, pero el rango aparente puede quedar por debajo de 12+ y requieren más cautela de derechos de imagen.
- **P05/P06:** reunión de ideas/notas; **P06 muestra adultos profesionales**, no un grupo juvenil ni necesariamente servicio comunitario.
- **P07:** persona escribiendo; no prueba que se trate de una oración, propósito o práctica íntima real.
- **P08/P09:** estudio bíblico/oración de **adultos**, no demuestra escenas de la comunidad La U; riesgo adicional de atribuir afiliación religiosa, aunque P09 sí muestra contexto religioso.

Los detalles de foto, autor, URL, observación de página, licencia general, derechos pendientes, población y destino aparecen individualmente en `04_REGISTRO_FOTOGRAFIAS_P01_P10.csv`. **No se descargó, subió ni incrustó ninguna fotografía.**

## 6. Otras fuentes y alcance real del respaldo

| Fuente | Comprobación a 2026-10-14 | Qué respalda / qué NO respalda |
|---|---|---|
| [eBible RV1909](https://ebible.org/details.php?id=spaRV1909) | Texto accesible, etiquetado public domain; capítulos F01–F16 consultados | Vocabulario, pasajes y hablantes bíblicos; **no** aprueba la interpretación doctrinal del proyecto. |
| [Vaticano II, Dei Verbum](https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_sp.html) | Página oficial accesible | Posición católica sobre revelación/Escritura/Tradición y magisterio; **no** consenso protestante ni aval de La U. |
| [UNICEF Adolescent Kit, guías](https://www.unicef.org/adolescentkit/facilitation-guides) y [recursos](https://www.unicef.org/adolescentkit/facilitation-resources) | Páginas oficiales accesibles; facilitan actividades, estructura, seguridad adolescente | Metodología; **no** enseñanza de Jesús ni patrocinio/aval teológico. |
| [Pexels licencia](https://www.pexels.com/license/) | Reglas visibles | Licencia marco de fotos Pexels; **no** certeza de derechos de imagen, releases ni dominio público. |
| [Wikimedia Commons reutilización](https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia) | Página accesible | Cada archivo tiene términos específicos; no hay licencia universal ni permiso de usar imágenes de terceros sin ver ficha. |
| [United Bible Societies](https://unitedbiblesocieties.org/es/) | La página presentó bloqueo/verificación automatizada en la consulta; **NO SE LEYÓ el contenido específico** | No se atribuye a la organización ningún respaldo factual concreto más allá de URL y nombre propuestos. |

**La procedencia y derechos del propio texto externo también siguen pendientes:** el Product Owner lo adjuntó para auditarlo, pero no se acreditó su autor intelectual ni una licencia general para difusión pública. Se archivó exactamente por orden documental, dejando reserva expresa en `00_PROCEDENCIA_Y_SHA256.md`.

## 7. Recomendación y prioridades

**Primero estudiar el enfoque de la FASE 1, no ejecutar la Fase 1 completa automáticamente.** Recomiendo un gate pequeño: verificar las ocho guías, veinte dinámicas, catorce textos de Hoy y la seguridad de sus materiales en una matriz corta de uso real; incluir un mini-diagnóstico de mecánicas y lagunas textuales, sin abrir contenido de desarrollo. Esta auditoría ya contiene el censo fuente/identificadores; un futuro piloto autorizado puede concentrarse en utilidad pastoral, no repetir ingeniería de inventario.

Solo si Supervisor y Product Owner aprueban cada paso, luego explorar **dos pilotos bíblicos de FASE 2 (F01 y F05)**, después **3–5 dinámicas piloto de FASE 3** con protección real; FASE 4 solo edición propuesta de mensajes Hoy; FASE 5 requiere verificación humana independiente de fuentes, licencias y seguridad; FASE 6 no debe montar paquete «APROBADO» antes de revisar.

Decisiones explícitas y unidad de trabajo propuesta ≤10 horas humanas equivalentes por gate en `05_DECISIONES_PENDIENTES_Y_PLAN_GATES.md`. Esta estimación no es tiempo realmente ejecutado ni autorización.

## 8. Método, límites y resultado

**Comprobado:** SHA local, igualdad exacta del original almacenado, cotejo estático de ocho archivos de producto e inventario editorial, 20/20 slugs D, 14/14 referencias/categorías H, 16 relaciones bíblicas con páginas RV1909, diez páginas Pexels y fuentes oficiales señaladas. Evidencia versionada y fecha en las matrices.

**No comprobado:** ejecución física de la APK; la cifra de 86 páginas del Word en un editor; releases/modelo, consentimiento de menores, derechos de imagen específica de uso religioso, autenticidad del contexto de cada modelo fotográfico; aval de un experto teológico; compatibilidad con política local de protección; autoría y derechos públicos del texto externo; contenido de la URL de UBS bloqueada.

**Archivos modificados previstos:** exclusivamente este expediente en `docs/r13/external-proposals/2026-10-14-plan-6-fases/`, nueva rama documental. **No hay modificación de app, corpus RV1909, lógica de lectura, UI, datos privados, planes, trivia, Word editorial, `main` o APK.** No se efectuaron builds, Android QA ni merges.

**Estado final de la validación:** **IMPLEMENTER DOCUMENTAL COMPLETE — READY FOR SUPERVISOR VALIDATION REVIEW — NO ACCEPT.** El Supervisor decide calidad del informe; Product Owner decide si alguna idea pasa a una etapa posterior y autoriza desarrollo por separado.
