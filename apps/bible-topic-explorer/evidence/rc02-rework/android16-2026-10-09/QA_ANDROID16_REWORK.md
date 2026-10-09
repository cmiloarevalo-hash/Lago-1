# RC02 REWORK — QA Android 16 (emulador)

**Fecha:** 2026-10-09. **Alcance:** QA **real sobre emulador Android API 36 / x86_64**, no prueba sobre teléfono físico del Human. **Código probado:** `b3a5156a1a273b51b08d4530b96da115bd16515a`. Este documento está archivado en una rama QA para **no iniciar otra compilación con cambios de evidencia** en main. No es una publicación ni una certificación integral de accesibilidad.

## Entorno y método
- Dispositivo: AVD `emulator-5554`, Android 16, Android SDK adb; Windows desktop conectado por Desktop Commander.
- Compilación **diagnóstica local** sobre commit `b3a5156...`, fuente RV1909 sin cambios. En `app.json` **únicamente de la copia local**: `com.lago.bibletopicexplorer.qa`; generación `assembleRelease` (`x86_64`), JavaScript empaquetado, `adb install -r` PASS. Esta variante NO es segunda APK candidata pública, pues usa package QA para no interferir con versión de Human.
- Antes se intentó build Debug que mostró pantalla roja al no conectarse con Metro. **No se usa como evidencia funcional**; se sustituyó por Release QA con JS integrado. En versión anterior de la UI se detectó texto invisible en pestaña seleccionada; se corrigió con `theme.primaryText` en commit `b3a5156...` y se repitieron todas las imágenes relevantes.
- Capturas **PNG genuinas extraídas de emulador** vía `adb shell screencap -p`, sin mockups ni generación artificial; UI inspeccionada vía `adb shell uiautomator dump`. Ajustes system `font_scale=1.0/1.6/2.0`.

## Comprobaciones y resultados
| Caso | Resultado Android | Evidencia |
|---|---|---|
| 100% Lavanda claro predeterminado, color botón principal `#E0E7FF`, labels de tabs con contraste, RV1909 local Mateo 6:34 | **PASS visual/funcional** | [Hoy lavanda fijo](11-hoy-lavanda-fixed-100.png) |
| Ajustes con 3 temas Lavanda claro / Celeste neutro / Oscuro, mutuamente seleccionables | **PASS**, se observó `accessibilityState selected` y cambio de colores | [Lavanda](12-ajustes-lavanda-100.png), [Celeste](13-ajustes-celeste-100.png), [Oscuro](14-ajustes-oscuro-100.png), [Lavanda restaurada](15-ajustes-lavanda-restored.png) |
| Cambio de tema persistido localmente, regreso a Lavanda | **PASS**, seleccionó y restauró tema; almacenamiento SQLite confirmado por Settings `Preferencias guardadas en este dispositivo` | mismos PNG; la prueba de cambio de app/reinicio aplica a anotaciones, no simula migración de tema legacy |
| Música: seis categorías, **primera** playlist aprobada `25HDm6Qx8mZoJWWdgFLz62`, botones completos sin recorte | **PASS** en 100%, 160%, 200% de escalado; card scrolleable y botones táctiles completos | [Música 100%](16-musica-lavanda-100.png), [Música 160%](18-musica-lavanda-160.png), [Música 200% (CTA visible)](20-musica-200-cta-visible.png) |
| Tap de botón primera playlist aprobada `https://open.spotify.com/playlist/25HDm6Qx8mZoJWWdgFLz62` | **PASS apertura externa:** adb `dumpsys activity activities` confirmó `topResumedActivity=com.android.chrome/...FirstRunActivity`. **LIMIT:** Chrome en primer arranque, no se afirmó reproducción, autenticación, licencia ni contenido del catálogo. | [Chrome fuera de app](17-spotify-external-browser.png) |
| Biblioteca → versículo RV1909 Mateo 6:1 → `Destacar lavanda` → Biblioteca muestra **Mateo 6:1 · lavanda**, no `Matt` ni `lavender` | **PASS Android**, más allá de test unitario: ADB `uiautomator` reportó `Mateo 6:1 · lavanda` tras persistencia. | [Biblioteca](21-biblioteca-mateo-lavanda.png) |
| Persistencia de destacados tras `am force-stop` + relanzamiento de paquete QA | **PASS**, `uiautomator dump` mostró nuevamente `Mateo 6:1 · lavanda`. | [Biblioteca](21-biblioteca-mateo-lavanda.png) + dato dump posterior |
| Protección de RV1909 y 100 temas | **PASS por igualdad de Git blob SHA-1** vs baseline, sin texto modificado | [Issue #61](https://github.com/cmiloarevalo-hash/Lago-1/issues/61) + manifest Git |
| Gradle Android 16 fuente final | **PASS** `assembleRelease` local 2m48s, posterior cambio pestañas compiló incremental en 50s | comandos registrados en checkpoint #61 |
| Physical phone real / permisos alarmas / firma upgrade previa | **NOT RUN / HUMAN GATE** | No se pretende sustituir la validación del Human |

## Matriz de capturas, procedencia Git
Las siguientes capturas fueron generadas sobre la app Android real; sus **Git blob SHA1** están asociados a PNG bit a bit versionados, y el contenedor temporal local no aporta permisos editoriales.

| Archivo | Blob Git SHA-1 | Comprobación |
|---|---|---|
| [11-hoy-lavanda-fixed-100.png](11-hoy-lavanda-fixed-100.png) | `99003bb43040e788efc0a518ebc2f8b55cd29337` | Android emulator PNG |
| [12-ajustes-lavanda-100.png](12-ajustes-lavanda-100.png) | `0a206a0f4face51229d711b465ed3ef484693b50` | Android emulator PNG |
| [13-ajustes-celeste-100.png](13-ajustes-celeste-100.png) | `cd6ea281a4248f33461977c0466c381f8e9bab43` | Android emulator PNG |
| [14-ajustes-oscuro-100.png](14-ajustes-oscuro-100.png) | `25dc551d1cdfa008a51bf7f218ce952b96d3b042` | Android emulator PNG |
| [15-ajustes-lavanda-restored.png](15-ajustes-lavanda-restored.png) | `a4e28bde272cd264ee05133e4d95f9fd1f1a21bc` | Android emulator PNG |
| [16-musica-lavanda-100.png](16-musica-lavanda-100.png) | `dc61910bef674ecdee47f6a25e68070802a340ae` | Android emulator PNG |
| [17-spotify-external-browser.png](17-spotify-external-browser.png) | `26add70e84eaf4350782a486ab0004db7dccd44d` | Android emulator PNG |
| [18-musica-lavanda-160.png](18-musica-lavanda-160.png) | `af23f82bb76abaf9d5ac70eebf9aef20046dff21` | Android emulator PNG |
| [20-musica-200-cta-visible.png](20-musica-200-cta-visible.png) | `c4b65542d05faed07a32c681f1b61c963f38a383` | Android emulator PNG |
| [21-biblioteca-mateo-lavanda.png](21-biblioteca-mateo-lavanda.png) | `0a1e12a6c034a9da99e89b102b46d491ec68191b` | Android emulator PNG |

## Restricciones
Sin datos personales ni credenciales, solo texto RV1909 suministrado legítimamente en app, navegación, permisos locales. Captura Chrome revela primer inicio, **no prueba** que Spotify reproduzca música; el enlace HTTPS se valida por código/test y el tap abre browser externo. Los derechos de grabación/reproducción pública no se infieren. La variante `com.lago.bibletopicexplorer.qa` es diagnóstica, no el APK final con package original.

**Dictamen:** **PASS para las comprobaciones visibles y persistencia de destacado en Android 16**; queda QA físico del Human y no se declara lanzamiento.
