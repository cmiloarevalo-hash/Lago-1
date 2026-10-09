# La U 1.3 — referencias visuales de experiencia
**Estado:** UX conceptual; estos SVG son **reconstrucciones vectoriales de las propuestas conversadas**, no capturas de una aplicación implementada ni los PNG originales generados en ChatGPT.

| Imagen | Uso obligatorio |
|---|---|
| [01-opciones-versiculo.svg](01-opciones-versiculo.svg) | Pulsación **larga** del versículo abre hoja completa; protagonismo de nota; lápiz y papelera pequeños, guardar referencia secundario, tres círculos de colores, sin texto instructivo extenso |
| [02-lectura-nota.svg](02-lectura-nota.svg) | **Pelotita muy discreta** al lado del versículo abre nota **solamente lectura**, con expandir y editar; no abre opciones de destacado |
| [03-menu-hamburguesa.svg](03-menu-hamburguesa.svg) | ☰ conserva cuatro pestañas; temas, música, juegos pastorales, canciones, biblioteca y ajustes |
| [04-spotify-compacto.svg](04-spotify-compacto.svg) | Mini-reproductor plegable estilo Waze **solo si Spotify SDK/permisos lo permiten**, controles reales Play/Pausa, Anterior/Siguiente y fallback |
| [05-indice-tematico.svg](05-indice-tematico.svg) | `Palabras` separado de `Temas`, 100 temas organizados en pasajes (ejemplos editoriales a verificar), clic a referencia y rango exacto |

## Criterios recientes del Product Owner
- Notas largas deben poder leerse completas y tener mayor espacio que los controles. Tocar nota/lápiz inicia edición; pequeña papelera debe confirmar antes de borrar.
- El indicador flotante/burbuja **solo lee la nota**. El menú completo se abre por **pulsación larga** del versículo.
- Colores Rosa `#FCE1EA`, Lavanda `#E0E7FF`, Durazno `#FFE6CE`: pulsar color elegido otra vez lo quita.
- Biblia RV1909, 66 libros y 100 temas intactos. Los textos ilustrativos de estas maquetas **no son citas del corpus**.
- Spotify debe operar únicamente cuando sea viable/permitido; nunca botones falsos ni audio incorporado sin licencia.
- Canciones pastorales = guías para animadores, diferentes de Spotify personal. Juegos hasta 20, priorizando evidencia.
- Biblioteca conserva notas/destacados y proyecta `Mis libros` con PDF/EPUB del usuario, offline, privacidad y respaldo.
- No implementar código, descargar corpus ni generar APK a partir de estas referencias sin autorización del Supervisor.

[Investigación y presentación R1.3 — Issue #65](https://github.com/cmiloarevalo-hash/Lago-1/issues/65).
