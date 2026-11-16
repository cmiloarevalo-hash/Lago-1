# Plan de entrega Google Play: v1.11.6, gratuita

## Prioridad 1 — Artefacto
- [x] Source baseline aprobado y estable: `896b72978b6eb4ad807007d33753a511ccf861ef` — v1.11.6/code18.
- [x] Rama independiente y workflow AAB de revisión preparados, sin afectar a v1.20.0 ni a Uptodown.
- [ ] Ejecución de AAB comprobada: `bundleRelease`, SHA256 y ABI. Un artefacto CI puede tener **firma de depuración**; no subir así.
- [ ] AAB firmado **con clave de carga** correcta en un entorno protegido; documentar SHA y certificado; **no subir keystore a Git**.
- [ ] Comparar firma/certificado de distribución y estrategia Play App Signing (si se desea compatibilidad con la versión externa).
- [ ] Verificación real de compatibilidad 16 KiB para bibliotecas ELF en ARM64, y de cada ABI que Play distribuya.
- [ ] Confirmar targetSdk >=36 y package/versionCode exactos en AAB; sin promesas de versión posterior.

## Prioridad 2 — Ficha y cumplimiento
- [x] Ficha de tienda, descripción breve/extensa, versión, soporte y categoría propuestos.
- [x] Política de privacidad específica para v1.11.6 preparada.
- [ ] Política publicada en **página HTML HTTPS pública sin login**, URL verificada, y enlazada **dentro de la versión que se sube** (requisito Google Play incluso sin cuentas).
- [ ] Auditar AAB/permisos/terceros; confirmar Data safety de manera veraz.
- [ ] Completar Play Console: categoría, ficha, idioma, App access, ads, Target audience, IARC content rating, Government apps, Data safety y demás formularios aplicables.
- [ ] Confirmar cuenta Play Console activa, perfil de desarrollador y pago de alta si aplica.
- [ ] Confirmar tipo/antigüedad de cuenta: cuentas **personales nuevas desde 13-11-2023** requieren prueba cerrada con **12 testers durante 14 días continuos** antes de pedir acceso a producción.
- [ ] Países de distribución determinados por el titular.
- [ ] Sin precios, suscripción, Google Login ni lector en voz alta en esta publicación.

## Prioridad 3 — Capturas fieles, de calidad
- [ ] Capturas auténticas de v1.11.6, sin UI alterada: Hoy/Inicio, lectura Biblia, Exploración temática, Planes, Biblioteca y Ajustes.
- [ ] Ideal: 4–8 fotos de teléfono en 1080x1920 píxeles (9:16) PNG/JPEG, sin capturar pantallas de launcher ni crash.
- [ ] No añadir textos, elementos u opciones que la versión no tiene; limpieza de barra de estado posible solo en emulador.
- [ ] Imagen promocional (feature graphic) 1024x500 PNG/JPG, no es captura; icono de Play 512x512 PNG <1MiB, generado desde recurso autorizado.
- [ ] Revisar legibilidad y contraste a tamaño móvil.

**Evidencia ASUS:** Emulador `Lago1_QA_ASUS_API36` (Android API36/x86_64) y la APK aprobada 1.11.6 instalada. **Bloqueo observado al abrir:** el APK tiene `libexpo-sqlite.so` para `arm64-v8a`, pero no para `x86_64`; Android produce `UnsatisfiedLinkError: libexpo-sqlite.so not found`. No presentar pantallas de este AVD fallido como capturas válidas. Intentar un build de QA específico x86_64 o un dispositivo arm64; conservar fuente v1.11.6.

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
