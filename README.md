# La U 1.3 — APK QA Android (NO PRODUCCIÓN)

**Descarga:** [LaU-1.3-QA-ARM64-debug.apk](LaU-1.3-QA-ARM64-debug.apk)

> APK DEBUG de pruebas, firmado con el certificado DEBUG local de Android. No es APK comercial/release y NO sustituye la instalación oficial.
>
> **Arquitectura:** ARM64 (`arm64-v8a`) solamente. Para la mayoría de teléfonos Android ARM64 recientes. No instalar en emulador x86/x86_64 ni dispositivos solo de 32 bits.
>
> **Android mínimo:** API 24 (Android 7.0). **Paquete aislado:** `com.lago.bibletopicexplorer.qa`, etiqueta «Explorador Bíblico · QA R1.3». Puede convivir con la instalación oficial `com.lago.bibletopicexplorer`.

## Procedencia

- Repositorio: [cmiloarevalo-hash/Lago-1](https://github.com/cmiloarevalo-hash/Lago-1).
- Rama de fuente: `feat/r13-p2-topic-ui`, código `f5642680ad7a53581ce10b05c06614afe2bc8310`, último checkpoint de evidencia `2e25b5581c49dd2079ba266a823d0fe829f41d2c`.
- Comando de creación: `gradlew.bat :app:assembleDebug -PreactNativeArchitectures=arm64-v8a --offline --console=plain`.
- JS y recursos empaquetados en APK (`BUNDLE_EMBEDDED=True`); no es un cliente Metro dependiente del PC.
- Firma: certificado **CN=Android Debug**, verificado con `apksigner verify --print-certs`; no firma de producción.
- Tamaño: **61,600,020 bytes**.
- SHA-256: `4200a7e4460c0b52530c44c6f781d15027582d7aa8b3020ad86dd8cbb8bfe3a6`.

## Instalación

En Android ARM64, descarga el archivo APK y ábrelo desde el gestor de archivos. Android puede requerir habilitar «Instalar apps desconocidas» para la aplicación que abrió el archivo. No desinstales ni limpies datos de la app oficial. La app QA usa un identificador independiente.

## Limitaciones y puertas pendientes

La revisión visual Coral/Natural/Marino y QA funcional focal están documentadas en [Issue #65](https://github.com/cmiloarevalo-hash/Lago-1/issues/65). El Product Owner pospuso controles funcionales globales. **PENDIENTES**: conformidad visual Owner, TalkBack, auditoría global de accesibilidad, importación nueva PDF/EPUB, respaldo/exportación, validaciones editoriales y derechos musicales. YouTube sin playlist aprobada muestra espera honesta; no hay reproducción inventada. **No hay merge a `main` ni APK de producción.**

Esta rama `downloads/r13-qa` contiene **solo el artefacto QA y esta descripción** para descarga; no introduce cambios en el código del producto.
