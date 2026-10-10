# La U 1.3 — UX visual, crédito intelectual y APK QA (2026-10-10)

**Owner:** cambios directos autorizados, QA global previamente pospuesta. **Rama:** `feat/r13-p2-topic-ui`; **scope:** Pantallas, navegación y evidencias bajo `apps/bible-topic-explorer`. **No hubo merge a main ni release de producción.**

## Cambios realizados

1. YouTube oculto y sustituido por **SoundCloud** con panel naranja y WebView de reproductor *oficial*, que solo intenta reproducir un enlace de pista/lista `https://soundcloud.com/...` proporcionado por el usuario. Sin auto-play, sin catálogo pirata, sin contenido falsificado. La reproducción real de un contenido concreto **NOT RUN** (sin enlace autorizado).
2. Cancionero oculto del menú y de Hoy, datos preservados sin purgar SQLite. El módulo no visible permanece en código para reversibilidad.
3. Guía pastoral: apertura/scroll que lleva el título del acordeón seleccionado cerca de la parte alta; cuarto tema verificado en Android. No se reescriben los contenidos pastorales ni se eliminan las fuentes enlazadas.
4. Explorar: solo familias/temas y 100 entradas de índice; quitada interfaz de búsqueda literal, sin cambiar índice/BD. Información editorial y cautela contextual tras ⓘ, ocultas por defecto; código subyacente de búsqueda se conserva. Vuelta desde lector guarda scroll local para no volver a empezar.
5. Biblioteca: «Destacados» ocultos de UI; los marcados siguen persistidos en base SQLite, sin borrado.
6. **Dinámicas pastorales:** 20 guías originales ahora organizadas como fichas cortas: rango `groupSize` individual exacto, minutos exactos, edad **sugerida** desde 12 años, objetivo, materiales, tres pasos numerados, preguntas y cuidado opcional tras ⓘ. Se usa `GroupIllustration.tsx`: figuras humanas simples originales hechas mediante primitivas React Native; no reproduce contenido de imágenes externas ni traslada las dos maquetas de referencia como assets.
7. **Transparencia:** aviso discreto al inicio de Hoy «Prototipo con apoyo de IA y estudios» con acceso a «Sobre La U». En el pie del menú ☰, enlace «Bibliografía y fuentes» que abre citas verificables USCCB/UNICEF/Santa Sede, referencia RV1909, créditos fotográficos Jordan Moore y Sixteen Miles Out (Unsplash), licencia Unsplash y nota sobre reproductor SoundCloud. Los nombres están enlazados a origen oficial sin mostrar URLs crudas ni fingir aval. Avisos azules editoriales intrusivos ocultos/reemplazados por detalles bajo demanda, **sin suprimir alertas funcionales esenciales**.

## Pruebas de fuente y Android

- **TypeScript:** PASS `tsc --noEmit`. **Vitest:** PASS, ver `source-typecheck-final.log` y `source-vitest-final.log` (30+ archivos, pruebas finales incluidas).
- **APK Android QA**: PASS `gradlew :app:assembleDebug`, build universal y luego ARM64. Variante `com.lago.bibletopicexplorer.qa`, versionCode 6 / versionName `1.3-qa.3` en build local, certificado DEBUG, JS/Hermes empaquetado para offline; **no se publica release firmada**. Emulador `emulator-5554`: instalación sobre paquete QA PASS, sin tocar la oficial.
- **Android UX focal:** `android-focal-qa.log` alcanzó **PASS integral** para hoy SoundCloud + no YouTube, SoundCloud fallback, menú sin Cancionero ni YouTube, apertura 4ª sección pastoral con título visible, Explorar solo temas, icono editorial ⓘ con ocultar/mostrar, índice A–Z y Biblioteca sin sección Destacados.
- **Android disclosure:** `android-ux3-focal.log` acredita PASS desde Hoy al prototipo y pantalla Sobre La U, enlaces a USCCB/UNICEF/Santa Sede y créditos fotográficos; capturas `ux3-hoy-prototype.png`, `ux3-about-credits.png`.
- **Android Dinámicas:** `android-ux3-part2.log` acredita PASS menú ☰ con fuentes discretas, 20 fichas, ilustración original, apertura de «Ronda de nombres y gestos», rango real 5–20, 10 minutos, ilustración y pasos/materiales de la guía. Capturas `ux3-drawer-credits.png`, `ux3-activities-overview.png`. **Verificación específica del control de cuidado en pantalla desplazada NOT COMPLETED:** el automatizador buscó botón fuera de área visible y, al reanudar, el emulador cambió a pantalla SoundCloud por interacción concurrente; NO se presume PASS de este recheck. El control sí existe en JSX y el texto sensible está condicionado a `showCare`.
- **Pruebas sin ejecutar:** importación PDF/EPUB nuevos, TalkBack, accesibilidad global, respaldo/exportación, reproducción SoundCloud real, validación doctrinal/derechos de las letras. Siguen aplazadas/bloqueadas conforme Owner/Issue #65.

## Seguridad y entrega

Sin cambios en `main`, RV1909, 66 libros, 100 topicIDs ni datos privados; no reset/uninstall de la aplicación oficial `com.lago.bibletopicexplorer`. El APK DEBUG QA actualizado se entrega por GitHub en rama aislada y se comprueba SHA256. **No equiparar un APK instalable QA con aprobación de producción.**
