# Anexo R5 — Etapa 2: integridad completa de referencias RV1909

**Fecha:** 11-11-2026 · **Caso:** `UX-E2-04` · **Ejecución:** `ASUS-UX-E2-R5` · **Work Item:** #67 · **PR:** #72 (draft) · **Estado:** `PASS de integridad de referencias + registro de evento de infraestructura`. Complementa, sin reemplazar, el [cierre técnico E2](CIERRE_TECNICO_E2_2026-11-11.md).

**Instrucción operativa actual:** continuar solo Etapa 2. No realizar pruebas E3/E4 ni reparaciones durante este anexo. No modificar código aprobado RV1909 ni guía pastoral v1.30, QA5 ni merge/publicación.

## Identidad, fuentes y alcance

- APK de navegación usada en R4: `com.lago.bibletopicexplorer`, v1.11.2/code14, SHA256 `2f35e13a7d40b8c8f74a998bba60ae41d94c1090c0ad9aac173ac62f43644d7e`; AVD ASUS Android 16 API36 `emulator-5580`, 320×640, font_scale Android `1.0`, sin zoom de pantalla/navegador.
- **Comprobación R5 de datos**: archivo `src/product/pastoralTopics.ts` y SQLite `assets/data/bible-topic-explorer.db` del checkout del PR HEAD `4d8b6e5ae2d82a87a2925accc0038025d413caaa`. El archivo `pastoralTopics.ts` tiene mismo SHA Git `224294b18ba125714f59e260e4d5ca059c679ba3` en la revisión de la APK `994d171` y en HEAD. La DB verificada corresponde al checkout; no se afirma una comparación byte a byte entre DB de APK 994d y DB de HEAD.
- La verificación R5 cruza **cada rango y cada número de versículo solicitado** contra la base RV1909. Esto es una prueba **estructural de integridad de destinos**, NO 84 pulsaciones físicas en Android. Las capturas y pulsaciones en E2-R4 ya documentaron la apertura de 16/16 capítulos, referencias AT/NT representativas, selección/compartir y lectura offline.

## Registro E2-R5

| ID evento | Escenario y esperado | Resultado/decisión |
|---|---|---|
| `EV-H4-039` / `UX-E2-04-R5` | Para cada una de las 84 referencias declaradas, el libro y capítulo RV1909 existen en SQLite y cada versículo en el intervalo `start..end` está cubierto por filas locales. | **PASS estructural 84/84**. 32 AT + 52 NT, 387 posiciones de versículo cubiertas, **0 faltantes**; [84 entradas verificables por referencia](E2_R5_84_REFERENCIAS_20261111.json). |
| `EV-H4-040` / `UX-E2-04-R5` | Comprobar completitud de contenido fuente: 16 capítulos en cuatro temas, sus preguntas y párrafos. | **PASS estructural**: `4+4+4+4` capítulos, **80 párrafos**, **16 preguntas** (8 de introspección y 8 de debate), sin faltantes; [resultado](E2_R5_STRUCTURE_20261111.json). |
| `ENV-E2-R5-001` | Reabrir el AVD para continuar pruebas UI; acceder sin bloqueo del sistema. | **INCONCLUSO de infraestructura:** Android mostró `System UI isn't responding` al reabrir la sesión, después perdió conexión ADB/emulador. [Captura de System UI](E2_R5_actual.png). **No atribuir este ANR a la aplicación**: no hay evidencia causal ni reproducción controlada. Se detuvo el intento de interfaz para no degradar el ASUS. |

## Alcance final y límites

1. **E2-R4 existente:** 16/16 capítulos abiertos de verdad en AVD y capturados, links AT Levítico 19:34 / NT Lucas 24:44–45 abiertos, Marcos desde Explorar, selección y Android Share, Éxodo offline.
2. **E2-R5 nuevo:** 84/84 referencias *existentes* en el SQLite del repositorio; todas las 387 posiciones de versículo resueltas, 16 preguntas y 80 párrafos representados. No se inventan 84 toques ni lectura pastoral literal por persona.
3. **Única fricción UX P2 activa de E2:** volver desde un lector a la Guía reinicia su desplazamiento y expansión. Mantener como mejora posterior, no reparar ahora.
4. **Estado:** la **Etapa 2 permanece cerrada en alcance técnico remoto**, con esta ampliación de evidencia. La aceptación humana sigue pendiente de la revisión visual/UX consolidada. El bloqueo System UI es **entorno**, no un error demostrado de la APK.
5. **Próximas acciones**: no repetir indefinidamente E2 por un fallo esporádico del AVD. Conservar el programa de cuatro etapas, pasar a la siguiente solo bajo instrucción/continuidad del usuario y retestar casos afectados tras correcciones concretas. PR #72 se mantiene draft; QA5 no modificado.

## Archivos de evidencia

- [Log completo de las 84 referencias, con libro, capítulo, intervalo y estado de cada versículo](E2_R5_84_REFERENCIAS_20261111.json)
- [Validación estructural de cuatro temas, 16 capítulos, 80 párrafos y 16 preguntas](E2_R5_STRUCTURE_20261111.json)
- [Captura del incidente externo de Android System UI](E2_R5_actual.png)
- [Informe original con capturas de 16 capítulos y prueba táctil](CIERRE_TECNICO_E2_2026-11-11.md)

**Control de supervisor:** se registran hallazgos sin alterar funcionalidades, contenidos editoriales o permisos de fusión. No se declara aceptación total de experiencia humana.
