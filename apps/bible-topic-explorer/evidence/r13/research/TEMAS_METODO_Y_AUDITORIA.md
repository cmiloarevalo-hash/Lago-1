# R1.3 — catálogo de 100 temas: método y trazabilidad
**Fecha 2026-10-09.** Estado: `100/100 topicIds existentes conservados`, `200/200 rangos existentes verificados en RV1909`, `22/100 temas muestreados editorialmente`, restantes pendientes de doble lectura contextual por editor pastoral. **No significa 100 temas doctrinalmente aprobados ni probados con jóvenes.**

## Fuente técnica cotejada SIN modificar corpus
- GitHub main base `f5ddc402375692aa9cb18cafe76e36992310cda0`, `src/product/topics.ts` Git blob `d96a9d32e0ab2ffa7ada1205e7d29b05ff01f8ea`, **100 ID y 10 familias**.
- Copia **solo lectura** del SQLite **RV1909** obtenida de la APK 1.1.1 ya archivada en la conversación (recurso `res/bL.db`, header SQLite), tamaño **7,008,256 bytes**. Calculado Git blob `def02a2ca0684d6b4d8491c7f12d06e910d76519` y cotejado en vivo con SHA del DB en `main`: **MATCH exacto**. SHA256 de los bytes `474c743865e30a8cb98730b7a2280566ac60b8c3c21a3b8c0bfb2118a739c1fb`.
- Consulta para cada rango: `SELECT source_verse_label, verse_start, verse_end FROM verses WHERE translation_id='rv1909' AND book_id=? AND chapter_num=? AND verse_start BETWEEN ? AND ? ORDER BY id`; conjunto cubre todos los números de inicio–fin. Se preservan las etiquetas `sourceVerseLabel` de la edición y la ID del libro; si es una división o combinación, UX buscará el primer identificador válido y señalará el rango, nunca `parseInt` como identidad única.
- **Resultado del script de auditoría local:** 100 topicIds únicos, 200 referencias con capítulo/rango, 200 cobertura de versículos=PASS, 35 libros utilizados, **0 errores de libro/rango**. No se sube texto bíblico, DB, APK ni corpus.

## Dataset principal
[CATALOGO_100_TEMAS.csv](CATALOGO_100_TEMAS.csv) — **100 filas**, columnas: `orden,topicId,title,categoria,subtema,sinopsisOriginal,ref1,sourceVerseLabels1,motivo1,ref2,sourceVerseLabels2,motivo2,reservaPastoral,statusExistencia,statusEditorial,corpusGitBlob`.
- `statusExistencia=VERIFICADA` = únicamente **existencia del rango en RV1909**, no permiso para publicar nueva traducción ni validez doctrinal.
- `statusEditorial=REVISADO_CONTEXTO_MUESTRA` = 22 temas: se inspeccionó comienzo, final y secuencia de ambos pasajes en SQLite; **verificación inicial por Implementer, no doble firma de catequista/editor**.
- `statusEditorial=PROPUESTO_PENDIENTE_REVISION_CONTEXTUAL` = 78 temas: motivos y reserva pastoral propuestos, requieren examen de todo el contexto y sign-off.
- `reservaPastoral` protege contra citar de forma abusiva juicio, disciplina, sexualidad, salud, duelo, violencia y promesas.
- Una referencia repetida en temas distintos **no equivale** a tema duplicado: se justifica con motivo propio. Siguiente gate: doble cotejo editorial/catequético y prueba de navegación con etiqueta compuesta y retorno a temas. No transformar este CSV directamente en release sin aceptación.

## UX contractual (solo propuesta)
`Explorar → [Palabras (literal actual) | Temas (nuevo índice)] → categoría → tema → subtema → tarjeta de pasaje contextual → lector RV1909 capítulo, resaltar rango y retornar a índice`. Modo `Palabras` conserva búsqueda de términos completos, sin convertirse en consulta temática. Tap Adoración debe renderizar la lista editorial **de solo 2 pasajes** inmediatamente (no búsqueda LIKE corpus), más adelante ampliar previa revisión.

## Auditoría de revisión de muestra
Temas muestreados por comienzo/final/contexto: `1,2,5,10,11,14,21,25,31,33,35,41,42,46,51,53,54,62,71,79,89,100`. Para fines editoriales, `1 Co 13` es sobre caridad/comunidad en Corinto, no exclusivamente matrimonio; `Jer 29` es promesa histórica a exiliados, no fórmula de éxito; `Mr 12` de la viuda exige cautela contra presión económica; `Mt 6` no reemplaza acompañamiento psicológico; `Jn 4` trata culto, no género musical.
