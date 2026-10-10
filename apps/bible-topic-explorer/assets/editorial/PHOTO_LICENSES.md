# La U R1.3 — procedencia y licencia de las fotografías editoriales

**Rework focalizado solicitado en Issue #65 / #6095945205; verificado el 2026-10-10.**

Se reemplazaron las seis ilustraciones planas anteriores por **seis adaptaciones tonales derivadas de dos fotografías publicadas expresamente como “Free to use under the Unsplash License”**. Los archivos están empaquetados sin conexión: no se consumen servicios de fotografías en tiempo de ejecución.

| Archivo original preservado | Autor / página de origen | URL fija de la fotografía descargada | Fecha identificada |
|---|---|---|---|
| `source/sunrise-jordan-moore.jpg` | Jordan Moore (@depthbymoore), [Sunrise behind jagged mountains over a serene lake](https://unsplash.com/photos/sunrise-behind-jagged-mountains-over-a-serene-lake-zkxUih6aJg0) | `https://images.unsplash.com/photo-1770153810676-bcdbf0027ff1` | 2026-02-03 |
| `source/bible-sixteen-miles-out.jpg` | Sixteen Miles Out (@sixteenmilesout), [Open book with a cup of coffee and plant](https://unsplash.com/photos/open-book-with-a-cup-of-coffee-and-plant-2U5JIp0jA-A) | `https://images.unsplash.com/photo-1759149789753-9a6053f03725` | 2025-09-29 |

**Licencia verificada:** [Unsplash License](https://unsplash.com/license), que permite descargar, modificar e incorporar imágenes para usos comerciales y no comerciales, sin requerir permiso previo ni atribución; la atribución aquí se da voluntariamente. Prohibiciones relevantes: no revender fotografías sin transformación sustancial ni construir un servicio competitivo de recopilación de fotografías. Este repositorio integra las fotos con gradación pastel editorial como parte de una aplicación bíblica, no como banco de imágenes.

**Transformaciones locales:** `scripts/render_editorial_photo_treatments.py`, reproducible sin red a partir de los dos originales y Pillow + NumPy. Exporta `landscape-{coral,natural,marine}.png` y `book-{coral,natural,marine}.png` (seis imágenes con parámetros distintos de exposición, niebla, grano y tratamiento tonal). Se conservaron intencionalmente el amanecer, la vegetación, el volumen del libro y la taza. Fotos distintas de las de los tres mockups del Product Owner.

**Alcance del permiso:** fotos y sus adaptaciones únicamente; **no hay licencia de textos bíblicos RV1960, letras ajenas ni marcas de los diseños originales** en estos assets. Las fuentes, la titularidad y la autorización editorial/distribución del producto siguen pendientes de gate del Owner. `main` y el corpus RV1909 no se modifican.

## R1.3 — rework de alto contraste (2026-10-10)

Las mismas dos fotografías con licencia documentada sirven de origen a la nueva gradación de mayor contraste, colores identificables Coral (rosa), Natural (oliva) y Marino (azul profundo). No se han tomado píxeles de las imágenes del Owner, ni se han incluido logotipos, audio o texto RV1960. `scripts/render_editorial_photo_treatments.py` reproduce los seis PNG fotográficos de la rama.

Los tres adornos `botanical-coral.png`, `botanical-natural.png` y `botanical-marine.png` son **ilustraciones originales creadas algorítmicamente para La U**: curvas, tallos y hojas vectoriales rasterizadas mediante Pillow sin fotografías, SVG, clipart o librerías gráficas externas. Se usan sobre la imagen de Planes como ornamento temático, no como indicador de estado. Todos los recursos se distribuyen localmente y no llaman a terceros durante la lectura.

Los derechos de las dos fotografías se rigen por [Unsplash License](https://unsplash.com/license), enlazada arriba; los adornos originales se producen en el proyecto. La aprobación estética y editorial de la app sigue reservada al Owner.
