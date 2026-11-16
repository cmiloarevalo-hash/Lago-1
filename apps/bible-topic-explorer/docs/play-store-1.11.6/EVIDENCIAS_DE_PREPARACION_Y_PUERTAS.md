# Evidencia consolidada de preparación — Google Play 1.11.6

**Fecha:** 16-11-2026 (UTC/Chile)  
**Issue:** #79; **PR:** #80, rama `release/play-v1.11.6-preparacion` (DRAFT, sin merge).  
**Base aprobada:** `main` SHA `896b72978b6eb4ad807007d33753a511ccf861ef` — fuente app congelada `1.11.6` / `versionCode=18` / `com.lago.bibletopicexplorer`.

## 1. Integridad de versión y ausencia de funciones posteriores

- Aplicación gratuita, sin anuncios propios declarados, sin login Google, sin registro electrónico, sin TTS, sin suscripción ni Play Billing.
- **Único cambio de código UI** contra versión aprobada: enlace a la política pública en «Ajustes → Privacidad y fuente», requerido para cumplimiento Google Play. No altera la Biblia RV1909, notas, progreso, contenido, preferencias ni las pantallas aprobadas.
- La rama de TTS 1.20.0/PR #78, la actividad de Uptodown #76 y `main` no se modificaron.
- El resto de los cambios son documentación, assets y workflow CI aislado.

## 2. Compilaciones y controles verificados

- **M2 PASS:** https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/43924630236 — typecheck, tests, check de dependencias Expo, bundle Metro.
- **Play AAB PASS:** https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/43924630324 — `bundleRelease` y validaciones nativas. La ejecución corresponde al commit `54eb87cf37a1acd4d767d33c088a8d3d80c14b7e` que incorpora el workflow y la UI; los commits posteriores del PR únicamente añaden/corrigen documentación.
- **Artefacto GitHub Actions ID:** `14256116911`, nombre `Play-RV1909-v1.11.6-AAB-PREPARACION-NO_SUBIR_SIN_VERIFICAR_FIRMA`.
- **AAB extraído del artefacto:** `Biblia-Guia-Pastoral-RV1909-v1.11.6-AAB-SIN_FIRMA_DE_CARGA_VERIFICADA.aab`, **66.056.002 bytes**, **SHA-256 `c597d8b2f849afa0a6eb6ba26416edc0a113857ef2adbceb0b1772bfe75367c2`**, concordante con `.sha256` generado por CI.
- **Bibliotecas del AAB:** `17` nativas por arquitectura: `arm64-v8a`, `armeabi-v7a`, `x86`, `x86_64`. `libexpo-sqlite.so` presente en **las cuatro** (la primera compilación sin fuente solo la incluía en ARM64; se corrigió exclusivamente el procedimiento de build mediante `-Pexpo.sqlite.enableFTS=true`). Los 17 ELF de `arm64-v8a` y los 17 ELF de `x86_64` cumplen `PT_LOAD >= 16384` bytes; validado en CI y repetido con `readelf -lW` al descargar el AAB.
- **Firma actual del AAB de revisión:** `CN=Android Debug, OU=Android, O=Unknown` (certificado SHA-256 `fac61745dc0903786fb9ede62a962b399f7348f0bb6f899b8332667591033b9c`). **Este AAB NO ES APTO PARA CARGA DEFINITIVA a Google Play.**
- **Certificado de distribución oficial ya creado en Lenovo para Uptodown (Issue #76):** `CN=Guia Pastoral, OU=Aplicaciones, O=Camilo Arevalo, C=CL`, SHA-256 `53a945bea42c6e2ea04136eafbbd07220295c33723b4da11b574d707c7c8b1a1`. La clave privada NO se ha copiado al repo ni a esta conversación. Hay que decidir Play App Signing/clave de carga considerando continuidad entre tiendas y respaldos.
- Copia del ZIP AAB de revisión registrada en el Google Drive conectado; nombre `Lago1_GooglePlay_1.11.6_AAB_REVISION_NO_SUBIR.zip`, ID `17-d1b08pXosUI2A2IUskfVZfaMrvc7SZ`. Acceso según permisos del propietario, **no pública automáticamente**.

## 3. Capturas reales ASUS

Equipo: ASUS TUF Gaming A16, AVD `Lago1_QA_ASUS_API36`, 1080×1920 framebuffer, Android API36, x86_64. APK QA **v1.11.6/code18** recompilada desde source aprobado sin cambios funcionales usando compilación directa de `expo-sqlite` para x86_64; instaló, abrió `MainActivity` y no generó error/crash. El APK original de CI no abría en x86_64 por faltar `libexpo-sqlite.so` para esa ABI; ese problema quedó resuelto en el AAB Play final de revisión.

Ocho PNGs originales sin recorte artificial, filtros ni simulaciones, en `capturas/`:

| PNG | Vista | Resolución |
|---|---|---|
| `01_Hoy.png` | Bienvenida, paisaje y versículo diario | 1080×1920 |
| `02_Explorar.png` | Familias de temas bíblicos | 1080×1920 |
| `03_Leer.png` | Selección de libros RV1909 | 1080×1920 |
| `04_Genesis_1.png` | Texto de Génesis 1, versículos originales | 1080×1920 |
| `05_Biblioteca.png` | Historial/colección local | 1080×1920 |
| `06_Planes.png` | Planes con fotografía editorial | 1080×1920 |
| `07_Ajustes.png` | Preferencias y tamaño de letra | 1080×1920 |
| `08_Guia_Pastoral.png` | Contenido de la guía pastoral | 1080×1920 |

Gráficos en `assets/`: `icon_512.png` (512×512 PNG, 193.794 bytes, basado en icono original) y `feature_1024x500.png` (1024×500 PNG, 804.086 bytes, paisaje de origen documentado en `assets/editorial/PHOTO_LICENSES.md`).

## 4. Política y declaraciones

- Política pública Google Pages: **https://cmiloarevalo-hash.github.io/Lago-1/**, comprobada desde ASUS con respuesta HTTP **200**, texto 1.11.6 visible y acceso sin autenticación.
- Enlace directo agregado en Ajustes de rama Play.
- Documentos de ficha, privacidad, Data safety, guía de subida y checklist completos en carpeta de esta actividad; manifest del APK auditado con AAPT36, incluidos `INTERNET`, `POST_NOTIFICATIONS`, `SYSTEM_ALERT_WINDOW` (requiere verificación), `READ/WRITE_EXTERNAL_STORAGE` legacy y `com.google.android.c2dm.permission.RECEIVE`.
- **No se ha afirmado ausencia absoluta de recolección por bibliotecas**. Formulario Data safety permanece condicionado a auditoría final/SDK y declaración del titular.

## 5. Puertas pendientes — no confundir con fallo de compilación

1. **Obtener y resguardar de forma segura firma de carga válida**, preferir evaluar la identidad de firma existente en Lenovo para continuidad intertiendas; no usar firma Debug; verificar clave y AAB re-firmado.
2. **Verificación de instalación y permisos en Android físico** del paquete de distribución firmado; comprobar app, notas, exportación, aviso local, y Play App Signing.
3. **Acceso a Play Console y formularios**: existencia/tipo de cuenta, identidad pública, países, clasificación IARC, edades, declaración Data safety y demás exigencias del titular. Si cuenta personal nueva (13-11-2023 o posterior), prueba cerrada de 12 testers/14 días si aplica.
4. **Publicación** no ejecutada ni autorizada como acción en esta preparación. No se afirma `SUBMITTED` ni `PUBLISHED`.

**RESULTADO SUPERVISOR:** Documentación/artefactos de publicación preparados y auditados; **release uploading BLOQUEADA por firma de producción y formularios/QA de consola**, no por compilación del AAB.

## Actualización — nuevo icono aprobado (16-11-2026)

- Orden directa del Humano: sustituir el icono estándar por la composición pastoral con corona, luz, personas y estrella, en la aplicación instalada y en Play Store.
- Arte original íntegro guardado en assets/logo_aprobado_original_1254.png; variantes 1024, 512, adaptativa y monocromática documentadas en ICONO_APROBADO.md.
- Respetados package com.lago.bibletopicexplorer, versionName 1.11.6, versionCode 18, sin features 1.20.0.
- QA nativa ASUS (AVD API36 x86_64): Expo prebuild creó recursos mipmap; Gradle assembleRelease con SQLite compilado de fuente completó sin errores; adb install -r devolvió Success; MainActivity arrancó correctamente; no hubo registros de crash.
- En pantalla real del lanzador Pixel AVD, el icono muestra la nueva corona, luz y Biblia; evidencia PNG original en evidencias/Icono_instalado_ASUS_API36_1080x1920.png. El original es de 1080×1920, sin montaje.
- La APK local de QA tiene firma Debug y no se puede entregar como actualización de producción ni instalar sobre una versión firmada con una clave diferente. La firma de distribución sigue pendiente de validación en Lenovo y Play App Signing.
