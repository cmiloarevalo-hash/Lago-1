# R1.3 — 5 referencias visuales y storyboard UX
**Fuente autoritativa:** [cinco SVGs y README del Supervisor](https://github.com/cmiloarevalo-hash/Lago-1/tree/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references) — son **reconstrucciones vectoriales conceptuales**, no capturas de implementación ni PNG originales. No reproducir sus versos como citas canónicas sin comprobación.

| Vista de referencia | Diseño vinculante | Recomendación / riesgo |
|---|---|---|
| [01 Opciones versículo](https://github.com/cmiloarevalo-hash/Lago-1/blob/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references/01-opciones-versiculo.svg) | pulsación **larga**, nota ampliable prioritaria, lápiz/papelera pequeños, guardar referencia secundario, 3 círculos tono | ofrecer acción accesible equivalente a pulsación larga, confirmación antes de borrar |
| [02 Lectura de nota](https://github.com/cmiloarevalo-hash/Lago-1/blob/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references/02-lectura-nota.svg) | bolita discreta de nota = **solo lectura**, expandir/editar | bolita puede ser pequeña visualmente, *hit target* >=48dp, jamás abre hoja completa accidentalmente |
| [03 Menú ☰](https://github.com/cmiloarevalo-hash/Lago-1/blob/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references/03-menu-hamburguesa.svg) | 4 tabs fijos + Spotify, juegos, canciones, temas, Biblioteca y ajustes | música personal separada de repertorio pastoral; menú accesible Back |
| [04 Spotify compacto](https://github.com/cmiloarevalo-hash/Lago-1/blob/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references/04-spotify-compacto.svg) | estado de pista y play/pause/prev/next plegable si SDK permite | **HOLD** controles hasta autenticación y verificación legal; fallback real link externo |
| [05 Índice temático](https://github.com/cmiloarevalo-hash/Lago-1/blob/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references/05-indice-tematico.svg) | `Palabras` literal y `Temas` conceptual separadas, pasaje con rango y retorno | no sustituir 100 IDs, rango RV1909 verificado, revisión doctrinal antes de entregar |

## Wireflows contractuales
```text
La U: Hoy | Explorar | Leer | Biblioteca      [☰]
☰: Temas · Juegos pastorales · Canciones pastorales · Música/Spotify · Mis libros · Ajustes
Explorar: [Palabras]  (coincidencia literal RV1909)  |  [Temas] (100 ids editoriales)
Temas → familia → tema → subtema → referencias contextuales → Reader RV1909 [rango] → Volver
Reader: tap bolita tenue → LEER NOTA COMPLETA → Expandir / Editar; LONG PRESS → HOJA OPCIONES
Biblioteca → Mis notas / Destacados / Referencias / Reflexiones / Mis libros
Spotify personal: conexión válida → barra plegable (SOLO SDK GO); si no → Abrir Spotify
```
**Foco:** no ocultar contenido bajo barra; Android Back retorna posición original, biblioteca conserva privacidad y datos de la versión actual; 200% tipografía y TalkBack. No renderizar pantallas falseadas como implementación.