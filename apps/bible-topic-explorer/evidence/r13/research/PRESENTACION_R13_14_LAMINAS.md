# La U 1.3 — presentación ejecutiva de investigación y propuesta
**14 láminas navegables · 2026-10-09 · Revisión del Supervisor, Issue #65**
**Estado de producto:** investigación terminada como **propuesta**, **NO** despliegue/autorización editorial, licencias ni APK. Rama documental `evidence/r13-content-research-2026-10-09`; `main` sin alterar.

---

## LÁMINA 01/14 — La U: de buscador de versículos a herramientas de lectura y pastoral
**Problema a resolver:** para un joven/animador, «versículos que contienen *amor*» no equivale a «pasajes que explican *amor*». El lector necesita referencias contextualizadas, notas accesibles, guía de dinámicas segura y música sin derechos supuestos.

> **Promesa de R1.3 condicionada:** explorar con sentido, leer offline, cuidar la privacidad y facilitar reuniones, sin romper la Biblia autorizada **RV1909 (66 libros)** ni el buscador literal.

**Usuario meta:** adolescentes 12+ con responsables, catequistas y animadores chilenos/latinoamericanos. **Matriz de valor:** claridad contextual | accesibilidad 200% | cero cuenta | offline | salvaguarda | licencias.

## LÁMINA 02/14 — Panel de evidencia: qué hay y qué NO hay
| Recurso | Inventario verificable hoy | Estado de aprobación |
|---|---:|---|
| Índice existente | **100/100 topicIds** preservados | 100 fichas propuestas |
| Pasajes para temas | **200/200 rangos existentes** en RV1909; 35 libros | **22** muestras contextualizadas inicialmente, **78** pendientes de lectura editorial exhaustiva |
| Dinámicas | **20/20** seleccionadas, pasos, edades, duración, cuidado | **8** guías completas, **0** pilotos |
| Canciones | **20/20** títulos/URLs de fuentes católicas | 5 guías sin música, **0** licencias de uso público o empaquetado |
| Spotify | SDK remoto y límites actuales contrastados con Spotify | piloto nativo **NO RUN**, distribución masiva **HOLD** |
| Mis libros PDF/EPUB | fuentes Android SAF y Readium documentadas | prototipo Android **NO RUN** |

**No confundir:** “existe rango en SQLite” ≠ “pasaje pastoralmente validado”; “hay canción en web” ≠ “se permite reproducirla públicamente”; “SDK documentado” ≠ “funciona en La U para todos”.

## LÁMINA 03/14 — Arquitectura: ☰ agrega recursos, las cuatro pestañas no se tocan
![Menú hamburguesa conceptual aprobado](https://raw.githubusercontent.com/cmiloarevalo-hash/Lago-1/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references/03-menu-hamburguesa.svg)

```text
                        ☰ MENÚ SECUNDARIO
   ┌──────────────────────────────────────────────────┐
   │ Temas · Juegos · Canciones · Música/Spotify        │
   │ Mis libros · Ajustes                              │
   └──────────────────────────────────────────────────┘
    HOY          EXPLORAR         LEER        BIBLIOTECA
    (4 tabs permanentes y navegación Android Back)
```

**Diferencia funcional:** Música/Spotify = escucha personal externa, opcional; Canciones pastorales = repertorio/guías para responsables sin audio ni letra integrada. El drawer vuelve al punto original y nunca superpone una actividad al texto bíblico.

## LÁMINA 04/14 — Dos gestos de nota: lectura discreta ≠ edición
<details><summary>Referencia 01 — hoja de opciones del versículo (pulsación larga)</summary>

![Opciones versículo conceptual](https://raw.githubusercontent.com/cmiloarevalo-hash/Lago-1/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references/01-opciones-versiculo.svg)

</details>

![Referencia 02 — burbuja de lectura de nota](https://raw.githubusercontent.com/cmiloarevalo-hash/Lago-1/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references/02-lectura-nota.svg)

**Gestos obligatorios:** bolita casi invisible + área táctil 48dp → **SOLO leer nota completa**; `Expandir` para nota extensa y lápiz secundario para editar. **Pulsación larga** → hoja distinta con nota arriba, editar/papelera (confirmar), Guardar referencia secundario, tres círculos compactos rosa `#FCE1EA`, lavanda `#E0E7FF`, durazno `#FFE6CE`; pulsar mismo círculo = quitar tono. Acceso alternativo explícito para quienes no pueden mantener pulsado. Prueba futura: notas de varios párrafos, teclado, 200%, TalkBack, regreso al mismo versículo.

## LÁMINA 05/14 — Explorar: dos respuestas diferentes a la misma palabra
![Referencia 05 — Palabras versus Temas](https://raw.githubusercontent.com/cmiloarevalo-hash/Lago-1/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references/05-indice-tematico.svg)

```text
[PALABRAS]  → 'amor' → coincidencias literales RV1909 explicadas
[TEMAS]    → Amor y relaciones → Amor → cuidado mutuo
           → 1 Corintios 13:1–13  /  Juan 13:34–35
           → [Abrir capítulo y señalar rango] ← Volver al tema
```

La lista curada no ejecuta una búsqueda general `LIKE '%adoración%'` para resolver Adoración. Tiene pasajes previamente auditados, renderizado inmediato de tarjetas, etiquetado de versiones y vuelta a posición A–Z. No sustituye búsqueda por términos completos, libre o por referencia.

## LÁMINA 06/14 — 100 temas: identidad y cobertura sin inventar otros
**Las 10 familias existentes se mantienen con 10 IDs cada una.** [Abrir catálogo completo (100 filas)](CATALOGO_100_TEMAS.csv) · [Metodología y hash](TEMAS_METODO_Y_AUDITORIA.md).

| Familia existente | Temas | Rangos presentes |
|---|---:|---:|
| Dios y fe | 10 | 20/20 |
| Amor y relaciones | 10 | 20/20 |
| Perdón y restauración | 10 | 20/20 |
| Vida interior | 10 | 20/20 |
| Dificultades y emociones | 10 | 20/20 |
| Oración y práctica espiritual | 10 | 20/20 |
| Carácter y conducta | 10 | 20/20 |
| Decisiones y vida cotidiana | 10 | 20/20 |
| Biblia y comprensión | 10 | 20/20 |
| Esperanza y vida cristiana | 10 | 20/20 |
| **TOTAL** | **100** | **200/200** |

**Qué se verificó materialmente:** copia SQLite idéntica al blob GitHub `def02a2…`, `bookId`, capítulo, inicio/fin y `sourceVerseLabel`. **Qué falta:** segunda lectura y firma catequética de los 100, ensayo juvenil y pruebas de interfaz. Cada fila conserva motivo textual original, subtema, sinopsis y advertencia de descontextualización.

## LÁMINA 07/14 — 18 ejemplos de temas: referencias y por qué sirven
| Tema | Pasaje 1 (contexto) | Pasaje 2 (contraste) | Salvaguarda |
|---|---|---|---|
| Dios | Dt 6:4–5: unicidad/amor | Hch 17:24–28: creador/cercanía | discurso paulino histórico |
| Confianza | Sal 56:3–4: miedo nombrado | Mt 6:25–34: preocupación diaria | no sustituye ayuda |
| Amor | 1 Co 13:1–13: caridad en comunidad | Jn 13:34–35: amor mutuo | no tolerar abuso |
| Prójimo | Lc 10:25–37: samaritano cuida | Mt 22:34–40: dos amores | ayuda segura |
| Perdón | Mt 18:21–35: misericordia | Lc 23:32–34: intercesión de Jesús | no borrar justicia |
| Arrepentimiento | Lc 19:1–10: reparación | Hch 2:37–41: respuesta comunitaria | sin confesión obligada |
| Paz | Jn 14:25–27: paz despedida | Mt 5:9–12: construir paz | no es ocultar conflicto |
| Esperanza | Rom 5:1–5: resistencia | 1 Pe 1:3–9: pruebas/esperanza | no prometer éxito |
| Miedo | Sal 56:3–4: temor explícito | Mc 4:35–41: discípulos asustados | riesgos reales |
| Ansiedad | Mt 6:25–34: afanes | Flp 4:6–9: prácticas comunitarias | atención clínica sigue |
| Oración | Mt 6:5–13: sin exhibición | Lc 11:1–13: enseñar a pedir | no resultado garantizado |
| Adoración | Jn 4:19–26: verdad/culto | Sal 95:1–7: pueblo y canto | no solo Spotify |
| Ayuno | Mt 6:16–18: sin ostentación | Is 58:3–9: justicia social | nunca imponer a menores |
| Generosidad | Mc 12:41–44: viuda/ofrenda | 2 Co 9:6–11: dar libremente | no presionar dinero |
| Decisiones | Dt 30:15–20: opciones alianza | Lc 14:28–33: calcular compromisos | libertad personal |
| Sexualidad | 1 Co 6:12–20: ética corporal | Gn 2:18–25: relación/compañía | revisión pastoral experta |
| Mandamientos | Ex 20:1–17: Decálogo | Mt 22:34–40: síntesis de amor | no intimidar |
| Fruto del Espíritu | Ga 5:22–26: frutos/comunidad | Jn 15:1–8: metáfora de vid | no comparar personas |

**Verificación:** en las 200 referencias se comprobó existencia de todos los versículos esperados; los 18 ejemplos son recortes de la matriz de 100, no textos importados de otra traducción. Motivos/contexto/guardrails completos en CSV.

## LÁMINA 08/14 — 20 dinámicas seleccionadas para pastoral juvenil
[**Catálogo 20 con pasos, tiempo, edades, participantes, materiales y referencia**](CATALOGO_20_DINAMICAS.csv).
**8 que pueden leerse como ficha completa**: Mapa del buen prójimo, Pistas hacia Emaús, Trivia en equipo, Parábolas sin confundir, Un cuerpo varios dones, Acciones de servicio posibles, Bienaventuranzas hoy, Diez y uno que agradece.

| Prioridad | Valor | Contexto/edad/tiempo | Estado |
|---|---|---|---|
| A — 8 guías completas | accesibles y cooperativas | 12–15+ / 12–22 min | propuesta, no piloto |
| B — otras 12 instrucciones | comunidad, escucha, discernimiento | 12–15+ / 10–20 min | propuesta abreviada |
| Fuera del lector 66 libros | Sir 6 y Sb 7 (P06 #07/#23) | texto deuterocanónico | excluido de enlace RV1909 |

**Formato futuro:** contenido textual de guía **offline**, sin juegos que recopilen datos de menores ni obliguen a confesiones. Trivia digital solo con respuestas contrastadas, accesibilidad y catequista; la primera edición puede publicar 8 guías antes que 20 botones de juego de dudosa calidad.

## LÁMINA 09/14 — Qué recibe el animador (no solo un título de juego)
[**Abrir las 8 guías originales completas**](GUIAS_8_DINAMICAS.md). Cada ficha tiene lectura precisa, grupo, materiales, pasos con minutos, preguntas, criterios y salvaguarda.

**Ejemplo: «Mapa del buen prójimo» · Lc 10:25–37 · 18 min**
```text
0–3   leer la pregunta/contexto     (nadie interpreta violencia)
3–7   ordenar personajes/acciones    (roles escritos u observador)
7–12  diseñar ayuda segura           (adulto, límites, consentimiento)
12–16 contrastar con el relato      (no moralizar a los jóvenes)
16–18 cierre voluntario              (sin datos personales)
```
**Control pastoral:** facilitador adulto, cero presión religiosa, protocolos de menores, roles sentados, grupos inclusivos. **NO RUN:** duración real, piloto con grupo, comprensión y revisión catequética. La ficha NO es la autorización de una actividad de riesgo o de una reunión pública.

## LÁMINA 10/14 — Veinte canciones: repertorio católico, no 20 archivos musicales
[**Catálogo auditado 20**](CATALOGO_20_CANCIONES.csv) · [**Cinco guías de animador sin audio/letras**](GUIAS_5_CANCIONES.md).

| Ejemplo de selección | Fuente primaria | Objetivo original propuesto |
|---|---|---|
| «Bienvenida» / «Reggaeton de las Gracias» | Betsaida (Chile) — [discografía](https://www.betsaida.cl/discograf%C3%ADa) | acogida y gratitud no obligatorias |
| «Ciudadanos del Cielo» / «Jesús, Samaritano» | Betsaida | comunidad y atención al prójimo |
| «Tu modo» — original Adão SJ, versión Fones SJ | [Fones autor/adaptación](https://cfones.cl/canciones/tu-modo/) | servicio sin protagonismo |
| «Buen Pastor» — Fones | [fuente](https://cfones.cl/canciones/buen-pastor/) | oración/acompañamiento |
| «Há Pressa no Ar» | [Himno JMJ Lisboa 2023](https://www.lisboa2023.org/es/himno) | misión y disponibilidad |

**Selección:** 20 de 22 documentadas en #63; se excluyen «Burrito Fiel» (encaje adolescente por validar) y «Santo Betsaida» (posible norma litúrgica). Compositor **NO VERIFICADO** en pistas donde la discografía solo avala al intérprete. No se declara canción apropiada para Misa ni autorizada para uso grupal. Cinco guías originales funcionan sin conexión/audio.

## LÁMINA 11/14 — La decisión jurídica es funcional, no una nota al pie
[**Matriz de derechos detallada**](CANCIONES_LICENCIAS_Y_SELECCION.md)

| Acción | Estado |
|---|---|
| Listar título, autor comprobado y enlace oficial | **GO documental** |
| Guía original sin letras/partituras/audio | **GO como propuesta**, revisión pastoral |
| Incrustar letra, canción, arreglo, portada o pista en APK | **NO GO** sin permiso escrito por componente |
| Usar Spotify personal como altavoz parroquial/escolar | **NO GO como licencia de ejecución pública** |
| Abrir Spotify externamente para uso personal | **GO con conexión/fallback** |
| Reproducir música con derechos en actos públicos | **BLOCK** hasta evaluación de titulares y permiso |

**Razonamiento:** composición, letra/traducción, arreglo, master audiovisual y ejecución pública son derechos diferentes. **0 licencias concedidas**. Fuente: [Spotify condiciones uso público](https://support.spotify.com/es-gl/article/spotify-public-commercial-use/) + P06-C.

## LÁMINA 12/14 — Spotify «como Waze»: interfaz plausible, derecho/acceso no acreditados
![Spotify mini-bar conceptual, condicionado](https://raw.githubusercontent.com/cmiloarevalo-hash/Lago-1/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references/04-spotify-compacto.svg)

| Ruta | Controles Play/Pausa/Prev/Next reales | Decisión |
|---|---|---|
| Link externo a playlist del Product Owner | control lo ofrece Spotify, no La U | **GO — mantener** |
| App Remote Android + Spotify instalado, auth, SDK nativo Expo/prebuild | SDK permite en principio comandos y `PlayerState` | **HOLD piloto Android de 5 usuarios** |
| Web API/Embed sin permisos ni app nativa | no equivale a dock remoto Waze fiable | **NO GO producto** |

**Política reciente:** [Spotify julio 2026](https://developer.spotify.com/blog/2026-07-23-web-api-quota-updates) aumenta client IDs dev a **25**, no el límite de usuarios; [quota vigente](https://developer.spotify.com/documentation/web-api/concepts/quota-modes) exige Premium del dueño y **máximo 5 usuarios** en dev; acceso ampliado requiere partner/organización con escala elevada, no garantía para La U. **No asumir que reglas Web API son idénticas a App Remote:** confirmar con Spotify. La barra **solo se muestra si se conecta y funcionan comandos**, se pliega sin cubrir versículos; de lo contrario botón honesto «Abrir Spotify». [Documento GO/NO-GO](SPOTIFY_FACTIBILIDAD_GO_NO_GO.md).

## LÁMINA 13/14 — Biblioteca privada y Mis libros: archivos que la persona ya posee
```text
              BIBLIOTECA
   Mis notas · Destacados · Referencias · Reflexiones
   └── MIS LIBROS → [Importar PDF / EPUB del usuario]
                  → [Leer offline] [Retomar posición] [Eliminar copia]
                  → [Exportar respaldo manual de anotaciones]
```
**Fuentes:** [Android SAF](https://developer.android.com/training/data-storage/shared/documents-files) `ACTION_OPEN_DOCUMENT` + permisos URI persistibles cuando proceda; [Readium Kotlin](https://readium.org/kotlin-toolkit/latest/) compatible con EPUB/PDF, pero requiere integración Android nativa y auditoría. Para EPUB guardar `Locator`/progreso, PDF retomar página; PDF escaneado **no** implica búsqueda de texto ni OCR disponible. Offline mediante copia privada interna autorizada, SHA256 y estado de espacio. **Desinstalar elimina copias privadas y notas salvo respaldo explícito**; actualizaciones sin borrar. Archivos con DRM se rechazan si lector no está autorizado, sin eludir protección. **No descargar libros pirateados ni mezclar documentos con RV1909**. [Privacidad y flujo completo](BIBLIOTECA_PDF_EPUB_PRIVACIDAD.md).

## LÁMINA 14/14 — MVP por gates, esfuerzo posterior y decisión solicitada
| Módulo | Decisión recomendada de INVESTIGACIÓN | Próximo gate |
|---|---|---|
| Temas | **GO CON RECORTES:** piloto 20 + ampliar a 100 tras doble revisión | 100/100 firma editorial, retorno/rango Android, cero descontextualización |
| Notas visuales | **GO diseño** sujeto a QA de #61 y compatibilidad | 2 gestos separados, 200%, SQLite intacta |
| Juegos | **GO CON RECORTES:** 8 guías, expandir a 20 si piloto satisface | protección menores y catequista |
| Canciones | **GO informacional:** 20 nombres/fuentes, 5 guías sin audio | autores, letras/temas validados, cero audio no licenciado |
| Spotify miniplayer | **HOLD / NO GO público**; enlace externo GO | autorización SDK/App Remote, Premium/dev users/licencia pública por separado |
| Mis libros PDF/EPUB | **GO factibilidad por lotes** | permisos SAF, lector nativo, backup seguro y DRM |

**Ingeniería FUTURA, no autorizada ahora; horas HUMANAS estimadas**: temas/rango/return **14h** (2 lotes 7–8); notas/interacción **10h**; guías offline **8h**; catálogo canciones/enlaces **6h**; PDF+EPUB/posiciones **24h** (3 lotes ~8); prototipo Spotify **12h** (separado y sujeto a gate); backup/datos **10h**; pruebas Android/accesibilidad/CI **10h**. **Total estimado ingeniería ≈94h** por lotes típicos 8–10h, tareas individuales 1–2h; adicional **20–30h editoriales humanas** para doble revisión/ensayos según disponibilidad y licencias desconocidas. **No equivale a tiempo empleado por la IA.**

**Supervisor debe decidir `ACCEPT / REWORK / BLOCK / ESCALATE` POR MÓDULO**, priorizar piloto de 20 temas + 8 guías + 20 canciones informativas, y autorizar ingeniería en nuevo gate únicamente tras RC02 pertinente. El índice completo existe documentalmente pero la revisión editorial profunda y derechos no están aprobados. No hay APK ni integración.

---
**Anexos en esta misma rama:** [100 temas](CATALOGO_100_TEMAS.csv) · [20 dinámicas](CATALOGO_20_DINAMICAS.csv) · [20 canciones](CATALOGO_20_CANCIONES.csv) · [8 fichas](GUIAS_8_DINAMICAS.md) · [5 canciones/guías](GUIAS_5_CANCIONES.md) · [método RV1909](TEMAS_METODO_Y_AUDITORIA.md) · [derechos](CANCIONES_LICENCIAS_Y_SELECCION.md) · [Spotify](SPOTIFY_FACTIBILIDAD_GO_NO_GO.md) · [Biblioteca](BIBLIOTECA_PDF_EPUB_PRIVACIDAD.md) · [UX visual](UX_CINCO_REFERENCIAS_Y_FLUJOS.md).
