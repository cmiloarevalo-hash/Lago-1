# La U 1.3 — APK QA 4 (SoundCloud externo y Temas para jóvenes)

**Descargar [LaU-1.3-QA4-SoundCloud-Temas-ARM64.apk](LaU-1.3-QA4-SoundCloud-Temas-ARM64.apk)**

> APK Android **DEBUG/QA**, no firma ni aprobación de producción. Diseñado para teléfonos Android **ARM64** (Android 7.0 o posterior) y paquete separado de la aplicación oficial. No desinstalar la oficial ni borrar sus datos.

## Identidad

- Archivo: `LaU-1.3-QA4-SoundCloud-Temas-ARM64.apk`
- Tamaño: **61.596.012 bytes** (≈61,6 MB decimales).
- SHA-256: **`9daa4c42cb54eb29ba080b00ca82020b6779e58262bae05d742edf9f9f5b88b3`**
- Versión Android: `1.3-qa.4` (`versionCode 7`), aplicación `com.lago.bibletopicexplorer.qa`, Android mínimo API 24, ABI `arm64-v8a`.
- Certificado: **CN=Android Debug**, verificado con `apksigner`; JS/Hermes y assets están incorporados. Funciona sin Metro, pero **SoundCloud externo requiere conexión**.
- Fuente y evidencia: [`feat/r13-p2-topic-ui @ cfc918f21ac3c6951cae574b732dbafe5cfee424`](https://github.com/cmiloarevalo-hash/Lago-1/commit/cfc918f21ac3c6951cae574b732dbafe5cfee424), [informe de QA](https://github.com/cmiloarevalo-hash/Lago-1/blob/cfc918f21ac3c6951cae574b732dbafe5cfee424/apps/bible-topic-explorer/evidence/r13/owner-ux-update/SOUNDCLOUD_YOUTH_QA_REPORT.md).

## Qué cambió

SoundCloud ya **NO** muestra simulación de reproductor ni campo de URL HTTP/HTTPS: solo botón para abrir SoundCloud (app o navegador según Android) y tres enlaces a listas reales **de terceros** (niños, instrumental de estudio y pastoral juvenil). Su contenido es externo, mutable, **no aprobado ni licenciado por La U**; revisar todas las pistas con una persona responsable antes de usarlas con menores.

Explorar → Temas presenta tarjetas compactas, iconos discretos, títulos mejor proporcionados y lenguaje para jóvenes en 23 previews, con **46 referencias bíblicas intactas RV1909**. Los 100 IDs y demás datos locales permanecen sin cambio. Se conserva además el trabajo anterior: Dinámicas visuales, bibliografía, tres temas claros, Cancionero/YouTube ocultos, estado privado.

**QA:** TypeScript PASS; 149/149 pruebas fuente PASS; compilación DEBUG e instalación en emulador PASS, UX focal de SoundCloud/Paz/Esperanza/Back PASS. No se ha probado reproducción SoundCloud con cuenta/pista en un dispositivo físico, ni QA global TalkBack, respaldos, contenido editorial o derechos de músicas: siguen pendientes/aplazados.

**Importante:** `main` no cambia; es un APK de prueba separada, no entrega productiva ni Play Store.
