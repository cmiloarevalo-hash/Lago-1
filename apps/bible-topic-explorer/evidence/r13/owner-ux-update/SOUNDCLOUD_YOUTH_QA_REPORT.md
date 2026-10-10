# La U 1.3 — SoundCloud externo + Temas comprensibles para jóvenes

**Fecha:** 2026-10-10 · **Pedido del Owner:** SoundCloud instalado pero módulo actual parece imagen, no permite escuchar; quitar reproductor y entrada HTTP, conservar solo «Abrir SoundCloud» y ofrecer listas reales externas para niños/estudio/pastoral. También mejorar Temas: evitar vocabulario rígido («identidad y relación», «paz interior y activa», «esperanza resiliente»), equilibrar tipografía/tamaño y sumar iconografía discreta.

## Integración

- **SoundCloud:** eliminado de la UI `WebView`, reproductor simulado/estático, `TextInput` de URL HTTPS, botón de carga y mensajes técnicos HTTP. **CTA único principal «Abrir SoundCloud ↗»** mediante `Linking.openURL('https://soundcloud.com')`. Android decide si usa aplicación SoundCloud asociada al enlace o navegador; no se promete forzar abrir la app. Tres sugerencias enlazadas independientemente (menores, instrumental para estudio, música cristiana juvenil). Las tres URLs constan como playlists externas reales en índice SoundCloud, pero **NO hubo revisión de todas las canciones ni reproducción**; informamos que los curadores, el repertorio y permisos pueden variar. No descarga/copia/streaming desde La U; enlaces y nombres solo, sin letras ni covers de terceros.
- **Temas:** 100 ids canónicos, 10 familias y BD SQLite RV1909 SIN CAMBIOS. Se reescribieron **23 subtemas y 23 sinopsis**, más 46 razones de lectura de los 23 previews disponibles. Se conservaron **46 rangos bíblicos exactos** (libro/capítulo/versos `sourceVerseLabels`), estados `EN_REVISION` y advertencias editoriales. **77 temas sin preview aprobado** mantienen índice y mensaje honesto de ficha en preparación, sin inventar referencias.
- **Interfaz Explorar:** filas horizontales de 72–88dp con icono y título de 17–18sp, subtítulo de 13sp, flecha discreta; tarjetas de lectura compactas con icono de libro, referencia RV1909 y acción mínima de 48dp. Texto principal 15,5sp, interlineado 24. Íconos propios hechos con glifos disponibles; sin copiar imágenes. Mantiene scroll de vuelta desde lector/lista, selección por familia y A–Z y botón contextual ⓘ. No se reintroduce búsqueda literal.

## QA realizada

| Control | Resultado | Evidencia |
| --- | --- | --- |
| TypeScript (`tsc --noEmit`) | **PASS** | `soundcloud-youth-typecheck.log` |
| Vitest (32 archivos) | **149/149 PASS** | `soundcloud-youth-vitest.log`, incluyendo nuevos tests de integridad de citas/juventud |
| Android DEBUG universal, código actualizado | **PASS** | `soundcloud-youth-universal-build.log` |
| Instalar encima del paquete QA `com.lago.bibletopicexplorer.qa` | **PASS** | `soundcloud-youth-android-install.log`; app oficial `com.lago.bibletopicexplorer` no tocada |
| SoundCloud botón externo, sin URL/TextInput, tres listas visibles | **PASS interfaz**, reproducción externa **NOT RUN** | `soundcloud-youth-android-qa.log`, `qa4-soundcloud-external-list.png` |
| Explorar → Vida interior: fila Paz, título/subtítulo/ícono | **PASS** | `qa4-youth-topic-list.png` |
| Paz: explicación comprensible, dos citas correctas, regreso | **PASS** | `qa4-youth-peace-detail.png` |
| Esperanza: título sencillo, dos citas correctas | **PASS** | `qa4-youth-hope-detail.png` |
| Reproducción de las listas con SoundCloud instalado en teléfono físico | **NOT RUN** | Se requiere conexión y contenido externo variable |
| QA global TalkBack/backup/importaciones y aprobación doctrinal/editorial | **POSPUESTA/BLOCKED** | Issue #65 |

### Derecho de autor y salvaguardas
Los enlaces a playlists no autorizan bajar, copiar, distribuir letras/audio, sincronizar música ni reproducirla públicamente sin permisos pertinentes. Los catálogos externos son dinámicos; **un adulto debe escuchar y revisar las canciones antes de usarlas con menores**. El prototipo no afirma aval de una institución ni aprobación doctrinal humana. Candidatos de música mencionados en SoundCloud: Syntax Creative / Christian Kids, Bassage / Christian Instrumental, Worship Music Recordings / Christian Youth Club EDM.

**Invariantes:** ningún merge a `main`, sin publicación de APK de producción, sin eliminación de datos de usuarios, sin tocar SQLite RV1909, notas, destacados, progreso, 66 libros, 100 IDs ni versión oficial instalada. La versión entregable sigue siendo APK Android DEBUG QA aislada, no release firmado.
