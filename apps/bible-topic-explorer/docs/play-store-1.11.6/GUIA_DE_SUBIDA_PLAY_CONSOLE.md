# Instrucciones de carga real a Google Play — versión 1.11.6

**Estado:** Preparación técnica y editorial. **No subida a Play Console, no aprobada ni publicada.** El asistente no ha utilizado credenciales de Play Console.

## A. Identidad congelada y precio

- Aplicación: **Biblia - Guía pastoral Reina Valera 1909**.
- Nombre para Play Store: **Biblia - Guía Pastoral** (cumple 30 caracteres).
- ID de paquete: `com.lago.bibletopicexplorer`.
- Versión: `1.11.6`, `versionCode=18`.
- Tipo: **Aplicación gratuita**, sin compra, anuncio ni suscripción en esta versión.
- Idioma ficha: español; datos de contacto `apkcristianas@gmail.com`.
- Funciones de v1.20.0, TTS, Google Sign-In, email registration y futuras suscripciones **NO EXISTEN en esta versión**. No publicitarlas aquí.
- La selección «Gratis» para la descarga no se convierte posteriormente en «De pago» para el mismo producto de Play; una futura suscripción interna, si se implementa en otra versión, requerirá facturación y políticas de Google Play y es independiente de esta entrega.

## B. Archivos preparados

- `FICHA_GOOGLE_PLAY_es-CL.md`: nombre, breve, extensa, novedades, categoría propuesta y metadatos.
- `POLITICA_DE_PRIVACIDAD_es.md`: texto para archivo; web pública **https://cmiloarevalo-hash.github.io/Lago-1/**, comprobada HTTP 200.
- `DECLARACIONES_Y_SEGURIDAD_GOOGLE_PLAY.md`: matriz basada en código; se debe revisar el AAB real y completar respuestas condicionales en Consola.
- `capturas/01_Hoy.png` ... `08_Guia_Pastoral.png`: 8 PNGs auténticos del emulador ASUS, 1080×1920. Usar 4–8 según ficha y evitar texto encimado.
- `assets/icon_512.png`: icono 512×512.
- `assets/feature_1024x500.png`: imagen promocional 1024×500.

## C. Firma (puerta obligatoria)

1. No subir **ningún AAB firmado con CN=Android Debug**; la compilación de GitHub Actions es de verificación.
2. La firma de distribución de la APK 1.11.6 de Uptodown ya existe **solo bajo control del autor en Lenovo**, según Issue #76, hito `#issuecomment-6866219471`. No copiar claves ni contraseñas a GitHub, ChatGPT ni Drive.
3. **Certificado histórico de producción:** `CN=Guia Pastoral, OU=Aplicaciones, O=Camilo Arevalo, C=CL`, SHA-256 `53a945bea42c6e2ea04136eafbbd07220295c33723b4da11b574d707c7c8b1a1`. Validar de nuevo con herramienta local antes de firmar cualquier AAB.
4. **Elegir conscientemente la estrategia de Play App Signing** en la primera alta: la clave de firma de la app de Google Play y la clave privada de **carga** pueden ser distintas. Usar el mismo paquete con certificados incompatibles en tiendas diferentes puede impedir actualizar una instalación sin reinstalar. Si se desea mantener continuidad con Uptodown, configurar apropiadamente la clave de firma de la app en Play según el procedimiento disponible; no asumir que firmar un AAB con la clave de carga garantiza esa continuidad.
5. Firmar el AAB de carga en el dispositivo autorizado y bajo supervisión del titular, sin exponer contraseña en argumentos visibles, archivos de configuración o logs. Respaldar la clave fuera del equipo en lugar protegido. Verificar con `jarsigner -verify -verbose -certs <archivo.aab>` y `keytool -printcert -jarfile <archivo.aab>`, junto con SHA-256 y los campos v1.11.6/code18.
6. AAB de Play solo es apto tras pasar **M2 + prueba de compilación AAB + presencia de SQLite en todas las ABI incluidas + alineación de 16 KiB en las bibliotecas 64-bit + firma de carga válida**, y tras verificar el certificado en Play Console.
7. **No solicitar contraseñas al chat.** Aprobación de la política de Play App Signing la realiza el titular en Play Console.

## D. Orden de entrada en Play Console

1. Verificar que exista una cuenta de desarrollador validada y el perfil público correcto; si no, crearla como titular, completar verificación y tarifa.
2. **Crear aplicación** → «Aplicación» → idioma predeterminado español → **Gratis**, con declaraciones que correspondan al uso verdadero.
3. **Presencia en Google Play / ficha principal**: copiar texto de `FICHA_GOOGLE_PLAY_es-CL.md`; icono y banner en `assets/`; subir fotos originales en `capturas/`. Revisar que las imágenes describan la 1.11.6 real.
4. **Política de privacidad**: `https://cmiloarevalo-hash.github.io/Lago-1/`; enlace in-app en «Ajustes → Privacidad y fuente» de la rama preparada. Debe estar disponible sin login.
5. **Contenido de la aplicación**: publicidad «No», acceso «Todas las funciones sin cuenta», clasificación etaria IARC veraz, público objetivo real, respuestas sobre apps de noticias/salud/gobierno si aparecen, seguridad de datos cotejada con el AAB/SDKs. No inventar respuestas para cuestionarios interactivos desconocidos.
6. **Países y regiones**: escoger explícitamente territorios deseados; no predecir opciones ni habilitar disponibilidad sin validación de titularidad/leyes locales.
7. **Pruebas**: enviar AAB de carga firmado a prueba interna/cerrada y ejecutar QA de instalación, notas, recordatorios y visual en Android físico. Si cuenta personal fue creada desde 13-11-2023, realizar los controles de Play para acceso a producción, incluidos al menos 12 testers inscritos 14 días continuos si son aplicables.
8. Solo después de todos los controles, presentar solicitud de publicación en producción. Google revisa y decide; **un AAB compilado no implica publicación**.

## E. Bloqueos concretos que no se deben omitir

- **Firma de carga de producción** pendiente en el equipo con keystore, tras comprobación de certificado y opción de Play App Signing.
- **Compatibilidad ABI**: el primer AAB de CI incluía `libexpo-sqlite.so` únicamente en ARM64 pese a contener otras bibliotecas para varias ABI. El workflow Play fue ajustado para compilar SQLite desde código fuente y rechazar artefactos sin SQLite en cada ABI anunciada; comprobar nueva ejecución antes de firma.
- **Formulario Data safety y permisos**: auditar AAB final y responder en consola; cuestionario IARC/edad/países y estado de cuenta no se deben inventar.
- **Publicación** no fue autorizada como acción en esta tarea de preparación; no se ha realizado ningún envío a Google Play.

## Enlaces oficiales

- [Ayuda ficha de Play](https://support.google.com/googleplay/android-developer/answer/9859152)
- [Especificaciones gráficos](https://support.google.com/googleplay/android-developer/answer/9866151)
- [Data safety](https://support.google.com/googleplay/android-developer/answer/10787469)
- [Requisitos de testing de cuentas personales](https://support.google.com/googleplay/android-developer/answer/14151465)
- [Google Play App Signing](https://developer.android.com/studio/publish/app-signing)
- [Android 16 KiB](https://developer.android.com/guide/practices/page-sizes)
