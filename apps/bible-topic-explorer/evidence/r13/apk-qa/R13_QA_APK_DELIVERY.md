# La U 1.3 — QA APK de descarga (2026-10-10)

**Orden del Product Owner:** aplazar por ahora QA global de TalkBack/accesibilidad y demás comprobaciones abiertas; generar **APK instalable de prueba** sin merge ni release productiva. **Entrada canónica:** Issue #65, autorización [#6096458051](https://github.com/cmiloarevalo-hash/Lago-1/issues/65#issuecomment-6096458051).

## Fuente exacta y alcance

- Rama de código: `feat/r13-p2-topic-ui`, HEAD fuente `2e25b5581c49dd2079ba266a823d0fe829f41d2c` (diferencia frente a `f564268` = evidencia QA funcional, sin cambios de fuente).
- JavaScript/assets de Coral/Natural/Marino empaquetados en la aplicación; `debuggableVariants=[]` fuerza bundle local para variante DEBUG.
- Build: `gradlew.bat :app:assembleDebug --offline --console=plain` (**PASS**, archivo de 160,812,218 bytes, hash `230a7049f955257a4c175bca64627c3308e84c9fe69c5c821e204389af4056af`).
- Build de descarga ARM64: `gradlew.bat :app:assembleDebug -PreactNativeArchitectures=arm64-v8a --offline --console=plain` (**PASS**, archivo de 61,600,020 bytes).
- **Hash SHA-256 del APK ARM64:** `4200a7e4460c0b52530c44c6f781d15027582d7aa8b3020ad86dd8cbb8bfe3a6`.
- Validación read-only ZIP: `ABIS arm64-v8a`; `BUNDLE_EMBEDDED True`; `NATIVE_LIB_COUNT 17`; `APK_MALFORMED_MEMBER None`.
- `aapt dump badging`: package `com.lago.bibletopicexplorer.qa`, versionCode `4`, versionName `1.1.2`, min SDK `24`, target SDK `36`; etiqueta «Explorador Bíblico · QA R1.3».
- `apksigner verify --print-certs`: **válido, firmado con Android Debug** (NO producción), fingerprint certificado SHA-256 `fac61745dc0903786fb9ede62a962b399f7348f0bb6f899b8332667591033b9c`.
- Los dos APK son **DEBUG/QA** de paquete separado y no reemplazan la aplicación oficial `com.lago.bibletopicexplorer`.

## Distribución y verificación

**Descarga ARM64 directa (GitHub raw HTTPS):** [LaU-1.3-QA-ARM64-debug.apk](https://raw.githubusercontent.com/cmiloarevalo-hash/Lago-1/downloads/r13-qa/LaU-1.3-QA-ARM64-debug.apk)

**Rama de distribución aislada:** [`downloads/r13-qa`](https://github.com/cmiloarevalo-hash/Lago-1/tree/downloads/r13-qa), commit [`6093cbc2709ada6ecd23856c79a67828bc6814d5`](https://github.com/cmiloarevalo-hash/Lago-1/commit/6093cbc2709ada6ecd23856c79a67828bc6814d5) (**orphan**: únicamente APK QA y README, sin mezclar código). `curl.exe --head --location` desde host registró **HTTP 200**, `Content-Length: 61600020` y `Content-Type: application/octet-stream`; el SHA-256 de la copia previa a push coincide con el hash de origen. No APK de producción ni GitHub Release productiva.

**Copia local:** `C:\Users\cmilo\Downloads\LaU-1.3-QA-ARM64-debug.apk`. El APK universal de QA se conserva aparte localmente, para arquitecturas alternativas y emulador.

**Advertencia de GitHub:** binario 58,75 MiB supera recomendación 50 MiB, pero la rama se publicó y el enlace HTTPS devuelve HTTP 200. No hay cambio en `main`.

## Gate aplazado por Owner (no aprobado)

- **PENDIENTE** conformidad visual estética Owner.
- **NOT RUN** TalkBack real, medición global de accesibilidad, importación de PDF/EPUB nuevos, lector PDF externo, exportación/verificación de respaldos, todas las referencias externas de ocho guías.
- **BLOCKED_EXTERNAL** playlist/reproducción YouTube auténtica; **BLOCKED_LICENSE/EDITORIAL** letras de canciones y aprobación humana de contenidos.
- Este APK es **para instalar/probar en dispositivo ARM64**, no para tiendas, ni firmado comercialmente, ni apto para gestionar información crítica. El usuario final debe conservar la app oficial y sus datos.

**Registro:** no se ejecutó una nueva sesión de regresión global después de compilar la APK. Evidencia de las pruebas Android anteriores sigue en Issue #65 y `evidence/r13/functional-qa/`. No hay merge, desinstalación, reinstalación sobre paquete oficial ni afectación del corpus RV1909/100 topics.


## Copia universal final conservada para QA local

Tras guardar el APK ARM64 destinado a la descarga, se ejecutó nuevamente `assembleDebug` con `-PreactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_64` para conservar también una copia **multi-ABI** independiente en el host: `C:\Users\cmilo\Downloads\LaU-1.3-QA-Universal-debug.apk`. Tamaño final **160,811,814 bytes**, SHA-256 `16192fa542492a1dfb7c15731f7a5ce79c5c90d65fe0fb729a882ce66fe0cb15`, log `assemble-debug-universal-final.log`. Esta copia universal **no** forma parte de la rama pública `downloads/r13-qa`; la descarga directa publicada es la versión ARM64, y ambos artefactos son QA DEBUG aislados.
