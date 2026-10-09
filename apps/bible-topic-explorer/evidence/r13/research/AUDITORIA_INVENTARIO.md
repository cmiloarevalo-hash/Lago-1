# R1.3 — INVENTARIO DE EVIDENCIAS Y AUDITORÍA DE INTEGRIDAD
Fecha: 2026-10-09. **Datos NO son release, ni aprobación editorial final.**

## Inventario versionado bajo esta rama de evidencia
- `PRESENTACION_R13_14_LAMINAS.md` — 14 secciones, los 5 SVG remotos del Supervisor referenciados directamente desde su propia rama.
- `CATALOGO_100_TEMAS.csv`: 100 filas × 2 rangos = **200**, existencia verificada vía SQLite RV1909 exacto, 22 muestras iniciales; 78 por revisar.
- `TEMAS_METODO_Y_AUDITORIA.md`: método de auditoría, SHA objeto/canon y etiquetas fuente.
- `CATALOGO_20_DINAMICAS.csv`: 20, completa instrucciones, edades, tiempos, materiales, seguridad y vínculo RV1909.
- `GUIAS_8_DINAMICAS.md`: 8 fichas originales con minuto a minuto, objetivos, inclusión, criterios; sin pilotos.
- `CATALOGO_20_CANCIONES.csv`: 20, fuente originaria y derechos separados, no licencias para audio.
- `GUIAS_5_CANCIONES.md`: 5 guías originales libres de fragmentos protegidos.
- `CANCIONES_LICENCIAS_Y_SELECCION.md`: descarte de 2/22 y evaluación de derechos.
- `SPOTIFY_FACTIBILIDAD_GO_NO_GO.md`: 2026 Feb/Jul, App Remote/Web API, elegibilidad y fallback.
- `BIBLIOTECA_PDF_EPUB_PRIVACIDAD.md`: SAF, Readium, libros propios offline, preservación de datos.
- `UX_CINCO_REFERENCIAS_Y_FLUJOS.md`: cinco SVG de la rama del Supervisor, separación de notas/drawer/Temas/Palabras/Spotify.
- `AUDITORIA_INVENTARIO.md`: esta lista y gates.

## Identidades y hashes de fuentes
`main` observado en R13-01: `f5ddc402375692aa9cb18cafe76e36992310cda0`. No se escribe en main.
`src/product/topics.ts` Git blob: `d96a9d32e0ab2ffa7ada1205e7d29b05ff01f8ea`.
`assets/data/bible-topic-explorer.db` Git blob: `def02a2ca0684d6b4d8491c7f12d06e910d76519`.
RV1909 DB byte SHA-256: `474c743865e30a8cb98730b7a2280566ac60b8c3c21a3b8c0bfb2118a739c1fb`, tamaño 7,008,256, 66 libros. Comprobó correlación de blob Git por hash con bytes de copia de SQLite del APK anterior ya descargado; **no se versionó** la copia ni el APK. 100 topicIds únicos, 200 referencias existentes, 0 rango inexistente.
Fuentes pastorales: [P06-B](https://github.com/cmiloarevalo-hash/Lago-1/issues/63#issuecomment-6070816653) y [P06-C](https://github.com/cmiloarevalo-hash/Lago-1/issues/63#issuecomment-6070838718) aprobados **solo como investigación**. Supervisor visual branch `13df197a21e5d3c8d19a65e71e37ac6f5cede1c1`.

## Semáforo editorial real
`VERIFICADA existencia` = existencia física de libro-capítulo-versos en RV1909; `REVISADO_CONTEXTO_MUESTRA` = lectura inicial del Implementer, no aprobación de doble firma; `PROPUESTO_PENDIENTE_REVISION_CONTEXTUAL` = falta de revisión profunda; `NO RUN` = ausencia de pilotos jóvenes, pruebas SDK o Android de nuevos módulos; `BLOCK` = contenido protegido sin permiso. **Cualquier recomendación GO es del módulo conceptual, NO GO de código sin decisión del Supervisor.**

## Mediciones de trabajo: HONESTIDAD
Seis lotes de **9h humanas EQUIVALENTES ESTIMADAS** = 54h **presupuestadas**; NO son horas humanas realizadas, tiempo de IA, tiempo CI o costo. Las actividades 1–2h del Issue #65 siguen siendo descomposición editorial; horas humanas ejecutadas por lote `NO MEDIDO`; tiempo de pared start/end de cada paquete `NO MEDIDO` (ausencia de cronometraje continuo fiable); no se asigna 0 ni 54 horas trabajadas. Script de auditoría local se ejecutó en segundos, distinto de revisión humana.
**Supervisor** debe aprobar/retrabajar/bloquear por módulo y exigir segunda revisión antes de producción. Nunca se creó otro APK ni corpus, PR, cambios UI, workflow o editoriales en main.