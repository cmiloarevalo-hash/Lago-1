# R1.3 P2 — Checkpoint y matriz de evidencia (2026-10-09, Chile)

**Rol:** IMPLEMENTER. **Gate:** Supervisor #65, decisión [#6092279702](https://github.com/cmiloarevalo-hash/Lago-1/issues/65#issuecomment-6092279702). **Estado de paquete: PARTIAL — fuente y pruebas locales PASS; Android P2 NO VERIFICADO; STOP para revisión.** No etiquetar Android como PASS por disponer de pruebas previas P0.

## Identidad, alcance y límites

- Rama nueva: `feat/r13-p2-topic-ui`; **commit exacto de producto probado:** `4624b66056c7a7b143d257aff1c4586d0380646b`, descendiente de `feat/r13-a1-a5 @ 9f4784070c117b37b8e1dcfd9ad063d3db64e9da`.
- `main=f5ddc402375692aa9cb18cafe76e36992310cda0`, congelado; no merge, PR, APK de producción, modificación de release, firma ni actualización de la app oficial.
- Verificación por blob Git local, **igual `main` y rama P2**: `assets/data/bible-topic-explorer.db` = `def02a2ca0684d6b4d8491c7f12d06e910d76519`, `src/product/topics.ts` = `d96a9d32e0ab2ffa7ada1205e7d29b05ff01f8ea`. 66 libros RV1909 y los 100 IDs canónicos sin alteración.
- Configuración diagnóstica Windows `apps/bible-topic-explorer/app.json` (QA `.qa`) **preexistente y sin comitear**; tampoco se comitearon exports ni scripts de P0 ajenos al lote.
- Spotify P1 **BLOCKED EXTERNAL / NOT RUN**: integración native pendiente de Owner y proveedor; `MusicScreen` y enlace a playlist externa conservados, sin reproducción ni botones ficticios.

## Entregables y presupuesto humano *estimado* (no medido)

| Paquete | Estado | Estimación humana equivalente | Evidencia |
|---|---|---:|---|
| P2.1 Palabras / Temas | PASS fuente + tests | 1,5 h | Dos modos; `Palabras` continúa usando `SQLiteBibleRepository.searchLiteral(query)`; conceptual no llama `searchTopic` ni escanea todo SQLite. |
| P2.2 Contrato editorial | PASS fuente + 46 rangos comprobados técnicamente | 2,0 h | `conceptPreviews.ts` desde investigación `ee194e4...`; `sourceVerseLabel` y `sourceVerseLabels`; advertencias y procedencia. |
| P2.3 Familia → tema → subtema → rango | PASS fuente + tests; Android NOT RUN | 2,0 h | 10 familias, 100 conceptos canónicos, A–Z alternativo; 23 fichas piloto con estados visibles. |
| P2.4 Lector rango/retorno | PASS fuente + tests; Android NOT RUN | 2,0 h | Primer foco, todas las etiquetas del rango resaltadas, navegación exacta y estado de temas preservado en AppContent. |
| P2.5 TS, tests, Expo y Android | PARTIAL | 1,0 h | TS/Vitest/Expo PASS; Android P2 y capturas 100/160/200% **NOT RUN**. |
| **Total** | **PARTIAL** | **8,5 h** | Dentro del techo normal proyectado 10 h; **horas humanas reales: NO MEDIDO**. |

La suma de previsiones es aproximación de trabajo humano, **no** el tiempo de cómputo ni una afirmación de horas trabajadas.

### Contrato editorial honesto

- **100** IDs intactos. **22** fichas con lectura contextual inicial en investigación (`EN_REVISION`; aprobación pastoral humana **pendiente**), más **1** ficha `Esperanza` explícitamente `PROPUESTO`; en total **23** fichas piloto y **46** rangos candidatos renderizables.
- **77** temas restantes sin ficha de pasajes mostrable; **78/100** requieren aún revisión contextual completa según dossier original, incluida Esperanza. **0** fichas `VALIDADO` por editor/catequista humano. Los temas sin ficha muestran aviso, no falsos pasajes aprobados.
- La comprobación técnica de existencia y etiquetas de origen en SQLite **no equivale** a validación doctrinal. No se incorporaron textos bíblicos de terceros ni se modificó la traducción RV1909.
- Ejemplos: `Adoración` → Juan 4:19–26 y Salmos 95:1–7 (ambos **EN_REVISION**); `Perdón` y `Amor` EN_REVISION; `Esperanza` PROPUESTO.
- Dataset regenerable con `node evidence/r13/p2/generatePilot.cjs`, usando fuente histórica Git fijada; no añade capítulos al corpus.

## Pruebas locales sobre el commit exacto de producto

[Comandos y cronometraje bruto](p2-local-checks.txt) · [TypeScript](p2-typecheck.log) · [Vitest](p2-vitest.log) · [Expo Android export](p2-expo-export.log) · [Auditoría SQLite](p2-sqlite-audit.log).

| Verificación | Resultado real | Tiempo de proceso medido |
|---|---|---:|
| `npm run typecheck` | **PASS**, exit 0 | 3,24 s |
| `npm test` | **PASS**, 117/117 tests, 26 archivos: 110 existentes + 7 P2, exit 0 | 2,09 s |
| `npx expo export --platform android --output-dir dist-r13-p2-local` | **PASS**, export de recursos JS Android, exit 0; **no APK** | 12,26 s |
| `node evidence/r13/p2/verifyPilotSqlite.cjs` | **PASS**, lectura SQLite exclusiva read-only; 46/46 listas exactas `source_verse_label` cotejadas; SHA256 corpus `474c743865e30a8cb98730b7a2280566ac60b8c3c21a3b8c0bfb2118a739c1fb` | No medido |

**Máquina (tres controles iniciales): 17,59 s sumados.** No CI GitHub Actions M2 acreditada para commit P2; estos controles son **equivalentes locales**, no certificado de release. No se ha demostrado ejecución de la nueva UI en Android.

## Android API36 — intentos, límites y NO RUN honestos

1. **Entorno vivo:** AVD `emulator-5554`, Android 16/API36, fuente 100% (`font_scale=1.0`). Paquete productivo `com.lago.bibletopicexplorer` 1.1.2 intacto; paquete separado `com.lago.bibletopicexplorer.qa` 1.1.2 en dispositivo.
2. El QA previamente instalado presentó interfaz **ANTERIOR** (`Busca texto o referencias, o recorre 100 temas curados`), no `Palabras · búsqueda literal` ni `Temas · índice conceptual`. **Las jerarquías XML obtenidas NO se usan como evidencia de P2.**
3. Se intentó lanzar Expo Go con `adb reverse tcp:8082 tcp:8082` y `exp://127.0.0.1:8082`. Terminó en `host.exp.exponent/.experience.ErrorActivity`, seguido de ventana `Expo Go isn't responding`: [captura de ERROR, no PASS](p2-expo-error-not-qa-pass.png). No se confirmó carga del bundle P2.
4. Se inició compilación Gradle Debug **exclusivamente** para `applicationId 'com.lago.bibletopicexplorer.qa'` con `:app:assembleDebug --offline`, [registro parcial](p2-qa-debug-gradle.log); alcanzó configuración `:expo`, **sin resultado final ni APK QA verificable**. Por tanto `BUILD DEBUG QA = INCONCLUSO/NOT COMPLETED`, nunca `PASS`. No se compiló release.
5. Android P2: modo Palabras/Temas **NOT RUN**; familia→Adoración **NOT RUN**; apertura exacta y retorno **NOT RUN**; fuente 100%, 160%, 200% **NOT RUN**; temas lavanda/celeste/oscuro y TalkBack **NOT RUN**. Ninguna captura de P0 se reutiliza como P2.

## Riesgos, revisión y próximo gate

- Validar que el bundle real de `feat/r13-p2-topic-ui` pueda montarse en el paquete Android **QA separado**, observar con `uiautomator` y capturas los modos, `Adoración` → Juan 4:19–26 y Salmos 95:1–7, sombreado de todos los versos y botón/Back, y repetir al 100/160/200%.
- P3/P4 deben completar revisión contextual (78 pendientes y segunda firma humana); jamás publicar como avalados 100 temas solo por esta prueba técnica.
- Llevar al QA final P10: TalkBack, escala/tema completa y QA pendiente de P0. P1 Spotify externo aún requiere sus credenciales/autorización y decisión final de alcance.
- Si Supervisor exige Android P2 PASS como criterio de aceptación del lote, marcar **REWORK limitado a QA** antes de GO P3; no inferir aceptación por los 117 tests.

**Estado:** `P2 PARTIAL (local PASS / Android NOT RUN)`; **Supervisor debe decidir ACCEPT con reservas o REWORK**. No crear automatizaciones ni iniciar P3. No APK de producción.

READY FOR SUPERVISOR R13 P2 TOPIC UI REVIEW
