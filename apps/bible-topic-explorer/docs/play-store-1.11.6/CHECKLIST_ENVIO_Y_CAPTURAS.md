# Plan de entrega Google Play: v1.11.6, gratuita

## Prioridad 1 — Artefacto
- [x] Source baseline aprobado y estable: `896b72978b6eb4ad807007d33753a511ccf861ef` — v1.11.6/code18.
- [x] Rama independiente y workflow AAB de revisión preparados, sin afectar a v1.20.0 ni a Uptodown.
- [x] AAB de revisión compilado y comprobado: `bundleRelease` PASS en [run 43924630324](https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/43924630324), SHA-256 verificado, cuatro ABI con SQLite nativo de código fuente. **Está firmado Android Debug; NO SUBIR así.**
- [ ] AAB firmado **con clave de carga** correcta en un entorno protegido; documentar SHA y certificado; **no subir keystore a Git**.
- [ ] Comparar firma/certificado de distribución y estrategia Play App Signing (si se desea compatibilidad con la versión externa).
- [x] Alineación ELF PT_LOAD ≥ 16 KiB comprobada para **todas** las bibliotecas ARM64 y x86_64 del AAB, además de SQLite presente en cada ABI. [ ] Validación completa del bundle desde Play Console/Android físico antes de publicación.
- [x] `app.json` CI validado sin cambio: package `com.lago.bibletopicexplorer`, `versionName=1.11.6`, `versionCode=18`; API objetivo 36 verificada en APK/Gradle. No se incorporan funciones posteriores.

## Prioridad 2 — Ficha y cumplimiento
- [x] Ficha de tienda, descripción breve/extensa, versión, soporte y categoría propuestos.
- [x] Política de privacidad específica para v1.11.6 preparada.
- [x] Política pública HTTPS sin login: https://cmiloarevalo-hash.github.io/Lago-1/ (respuesta HTTP 200 y contenido v1.11.6 comprobados), enlace en Ajustes de la rama Play. Requiere validar finalmente en Android físico tras firma.
- [ ] Auditar AAB/permisos/terceros; confirmar Data safety de manera veraz.
- [ ] Completar Play Console: categoría, ficha, idioma, App access, ads, Target audience, IARC content rating, Government apps, Data safety y demás formularios aplicables.
- [ ] Confirmar cuenta Play Console activa, perfil de desarrollador y pago de alta si aplica.
- [ ] Confirmar tipo/antigüedad de cuenta: cuentas **personales nuevas desde 13-11-2023** requieren prueba cerrada con **12 testers durante 14 días continuos** antes de pedir acceso a producción.
- [ ] Países de distribución determinados por el titular.
- [ ] Sin precios, suscripción, Google Login ni lector en voz alta en esta publicación.

## Prioridad 3 — Capturas fieles, de calidad
- [x] Capturas auténticas de v1.11.6, sin UI alterada: Hoy/Inicio, lectura Biblia, Exploración temática, Planes, Biblioteca y Ajustes. 8 PNGs reales en `capturas/`, 1080×1920.
- [x] 8 fotos de pantalla auténticas en 1080x1920 píxeles (9:16) PNG, sin launcher/crash ni reescalados.
- [ ] No añadir textos, elementos u opciones que la versión no tiene; limpieza de barra de estado posible solo en emulador.
- [x] Banner 1024x500 PNG (sin alfa) y icono Play 512x512 PNG <1MiB, ambos en `assets/`; fuente gráfica y licencia verificadas.
- [x] Revisado visualmente en capturas reales 1080×1920; todos los encabezados y textos legibles, sin mockups, pantalla inicial y contenido bíblico correctos.

**Evidencia ASUS:** Emulador `Lago1_QA_ASUS_API36` (API36/x86_64) y APK 1.11.6/code18 original instalaron correctamente pero la precompilación SQLite carecía de librería x86_64, causando `UnsatisfiedLinkError`. **Resuelto solo para QA del emulador:** se usó el mismo source aprobado `896b729`, compilando módulo `expo-sqlite` nativo para x86_64 vía `-Pexpo.sqlite.enableFTS=true` y evitando en ASUS un segundo NDK no instalado mediante ajuste en `node_modules` de la copia local de QA. Gradle `assembleRelease` PASS; emulador lanzó `MainActivity`, mostró la app real y no registró crash. Se capturaron 8 PNG originales mediante `adb shell screencap -p` a framebuffer 1080×1920; no reescalado. El AAB Play necesita compilar SQLite de código fuente para todas las ABIs anunciadas; workflow actualizado y nueva verificación CI pendiente.

## Especificaciones oficiales
- Ficha: https://support.google.com/googleplay/android-developer/answer/9859152
- Imágenes: https://support.google.com/googleplay/android-developer/answer/9866151
- Privacidad y Data safety: https://support.google.com/googleplay/android-developer/answer/10787469
- Revisiones y declaraciones: https://support.google.com/googleplay/android-developer/answer/9859455
- Cuenta personal y 12/14: https://support.google.com/googleplay/android-developer/answer/14151465
- SDK 36 desde agosto 2026: https://developer.android.com/google/play/requirements/target-sdk
- 16KiB: https://developer.android.com/guide/practices/page-sizes
- Firma de AAB y Play: https://developer.android.com/studio/publish/app-signing

**Estado de publicación:** NO PUBLICADA EN GOOGLE PLAY. No confundir este issue/PR con aceptación de tienda.

## Capturas reales verificadas — ASUS, 16-11-2026

Archivo: `docs/play-store-1.11.6/capturas/` (archivo PNG original, 1080×1920 cada uno): `01_Hoy.png`, `02_Explorar.png`, `03_Leer.png`, `04_Genesis_1.png`, `05_Biblioteca.png`, `06_Planes.png`, `07_Ajustes.png`, `08_Guia_Pastoral.png`.

**Identidad de la app que se capturó:** `com.lago.bibletopicexplorer`, `versionName=1.11.6`, `versionCode=18`, `targetSdk=36`. La única diferencia con la compilación CI aprobada es la reconstrucción nativa de SQLite x86_64 requerida para usar el emulador. Ni el texto bíblico, ni el diseño, ni las funciones se modificaron; no se utilizaron imágenes generadas ni pantallas de 1.20.0.

**Licencias:** `assets/editorial/PHOTO_LICENSES.md` en `main` documenta la fotografía de Jordan Moore de Unsplash para el banner editado; icono obtenido de `assets/icon.png` de la aplicación.
