# La U 1.3 — APK QA5 de alto contraste (Coral / Natural / Marino)

**[Descargar APK Android ARM64](LaU-1.3-QA5-AltoContraste-ARM64.apk)**

> **Aplicación de prueba DEBUG/QA, no versión de producción.** Está separada de la aplicación oficial mediante el identificador `com.lago.bibletopicexplorer.qa`. Compatible con teléfonos ARM64 a partir de Android 7 (API 24). No desinstalar ni limpiar datos de la aplicación oficial.

## Identidad e integridad

- Archivo: `LaU-1.3-QA5-AltoContraste-ARM64.apk`
- Versión en manifiesto: `1.3-qa.5` (`versionCode 8`), paquete `com.lago.bibletopicexplorer.qa`.
- Tamaño: **61.707.377 bytes**.
- SHA-256: **`b63e8226e5267aab259e3dca3bbf13c99bca7b3e5cb754c4e1eeb0554dcb04c2`**.
- ABI: `arm64-v8a`; JavaScript/Hermes y contenido bíblico local incorporados; sin dependencia de Metro para abrir la app.
- Firma `apksigner`: certificado **CN=Android Debug**, no firma oficial de publicación.
- Compilación: `gradlew.bat :app:assembleDebug -PreactNativeArchitectures=arm64-v8a --offline --console=plain` **PASS**.
- Fuente: [`feat/r13-p2-topic-ui @ e3cea7bc360c7fc97187639ca2f72b0c046d6a4a`](https://github.com/cmiloarevalo-hash/Lago-1/commit/e3cea7bc360c7fc97187639ca2f72b0c046d6a4a).
- Evidencias de pruebas y comparativa [nueve pantallas Android](https://github.com/cmiloarevalo-hash/Lago-1/blob/e3cea7bc360c7fc97187639ca2f72b0c046d6a4a/apps/bible-topic-explorer/evidence/r13/high-fidelity-qa/comparison-owner-vs-android-3x3.jpg); [informe](https://github.com/cmiloarevalo-hash/Lago-1/blob/e3cea7bc360c7fc97187639ca2f72b0c046d6a4a/apps/bible-topic-explorer/evidence/r13/high-fidelity-qa/R13_HIGH_FIDELITY_DELIVERY.md).

## Novedades

Rework de **mayor contraste** solicitado por el Owner: Coral rosa definido, Natural oliva profundo, Marino azul intenso; fondos claros, fotografías retocadas, tres adornos botánicos originales en Planes, CTA/destacados/progreso visibles. Mantiene cuatro tabs Hoy, Explorar, Leer, Biblioteca, Biblia RV1909, 100 temas, progreso 7 días, SoundCloud externo (sin audio integrado), Cancionero y YouTube ocultos y datos privados sin limpieza.

## Estado de QA

- TypeScript `tsc --noEmit` **PASS** y **150/150 tests fuente PASS**.
- Compilación DEBUG universal y ARM64 **PASS**, 9 capturas Android de emulador + 6 rechecks para cambios de Hoy/Planes.
- **Fidelidad visual:** mejora de contraste y ornamento comprobada; sigue habiendo diferencias de composición, fotos, contenido RV1909 real y navegación Android respecto a mocks iOS «Luz». El Owner debe decidir si la estética final le satisface.
- Auditoría global TalkBack/accesibilidad, PDF/EPUB nuevos, backup, derechos musicales y revisión editorial siguen sin aprobarse o aplazados. No es un APK de tienda ni habilita merge a `main`.

**Descarga directa alternativa:** https://raw.githubusercontent.com/cmiloarevalo-hash/Lago-1/downloads/r13-qa/LaU-1.3-QA5-AltoContraste-ARM64.apk
