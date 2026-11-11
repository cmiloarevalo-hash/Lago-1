# Cierre técnico — Etapa 2: Lectura, comprensión y exploración

**Fecha:** 11-11-2026 · **Sesión:** ASUS-UX-E2-R4 · **Work Item:** #67 · **PR:** #72 (draft) · **Estado:** CERRADA EN ALCANCE TÉCNICO DE QA, con observaciones P2 y límites de cobertura explícitos. No equivale a aprobación humana ni a aceptación comercial.

## Identidad exacta y método
- Equipo ASUS Windows 11, AVD exclusivo `Lago1_QA_ASUS_API36`, Android 16 / API36, `emulator-5580`, 320×640, densidad 160, `font_scale=1.0`. No se modificó zoom de navegador ni captura. Al terminar pruebas, mantener valor 1.0.
- APK instalada de QA `Biblia-RV1909-v1.11.2-PR72-994d-TECLADO-PRUEBA.apk`: `versionName=1.11.2`, `versionCode=14`, SHA-256 `2f35e13a7d40b8c8f74a998bba60ae41d94c1090c0ad9aac173ac62f43644d7e`. Contiene cambios anteriores al commit `4d8b6e5`; NO aprobar correcciones más recientes por estos ensayos.
- Se combinó inspección ADB de la interfaz, capturas originales y verificación no destructiva de datos en `src/product/pastoralTopics.ts`. Este archivo tiene Git blob SHA `224294b18ba125714f59e260e4d5ca059c679ba3` **idéntico** entre la referencia de APK `994d171` y HEAD posterior `4d8b6e5`; la verificación de datos no mezcla revisiones distintas.
- Este cierre sucede **después** del registro de Etapa 1, y antes de comenzar Etapa 3. No se corrigió código ni se modificó contenido aprobado RV1909 o guía editorial v1.30. QA5 permanece intacto.

## Matriz de resultados

| Caso/evento | Tarea de usuario, criterio y ejecución | Resultado |
|---|---|---|
| `UX-E2-01` / `EV-H4-027` | Explorar → Dios y fe → Jesús; se identifica tema y referencias. Confirmación en la sesión ASUS previa de la **misma APK**, [lectura visual de tema](../ASUS_E2_02_marcos_reader.png) y [checkpoint](../CHECKPOINT_UX_4_ETAPAS_2026-11-11.md). | **PASS técnico** |
| `UX-E2-02` / `EV-H4-028` | Jesús → Marcos 8:27–31 → lector con pasaje enfocado → Android Atrás devuelve al tema. [Captura del lector](../ASUS_E2_02_marcos_reader.png). | **PASS técnico** |
| `UX-E2-03` / `EV-H4-029` | Guía pastoral → capítulo 1 → Salmo 119:105 → lector → Atrás. Complemento con Lucas 24:44–45 en el capítulo 1, [captura NT](E2_04_cap01_ref_NT_Luc24.png). | **PASS para apertura/retorno**, **OBS P2**: al regresar desde el lector, la Guía vuelve a su portada y se pierde desplazamiento/expansión previa; [evidencia](E2_04_cap16_ref_AT_back.png) |
| `UX-E2-04` / `EV-H4-030` | **Inventario completo 16/16**: se recorrieron cuatro temas y se abrieron **todos los capítulos** en AVD; cada uno mostró el bloque de referencias AT/NT y el inicio de su texto. [Registro de 16 ejecuciones](E2_04_ui_16_status.json), [capturas cap. 01](E2_04_cap01_abierto.png) a [cap. 16](E2_04_cap16_abierto.png). El archivo de datos contiene **16 títulos, 4×4 capítulos, 84 referencias (32 AT + 52 NT), 16 preguntas y párrafos en todos los capítulos**, sin etiquetas vacías ni rangos invertidos; [validación](E2_metadata_validation.json). Se verificó en pantalla el conjunto de nueve enlaces del cap. 16, incluidos los que requieren desplazamiento, y se probó **un AT** Levítico 19:34 [lectura](E2_04_cap16_ref_AT_Lev19.png) y **un NT** Lucas 24:44–45 [lectura](E2_04_cap01_ref_NT_Luc24.png). | **PASS técnico de inventario y apertura 16/16**. **Alcance:** no se ejecutaron 84 pulsaciones individuales de enlaces ni lectura humana literal de toda la prosa; la navegación se muestreó por tipo, con referencias del archivo verificadas estructuralmente. Sin afirmar lo no ejecutado. |
| `UX-E2-05` / `EV-H4-031` | Génesis 1:1: mantener pulsado «principio», observar controles de selección nativos Android, elegir «Share» y verificar hoja de compartir. [Selección](../ASUS_E2_05_selection_native.png), [checkpoint](../CHECKPOINT_UX_4_ETAPAS_2026-11-11.md). | **PASS técnico** del panel y hoja Android; no se compartió información con terceros. |
| `UX-E2-06` / `EV-H4-032` | Modo avión activado, reinicio de la app, abrir Éxodo 1 con versículos visibles, desactivar modo avión después. [Captura sin conexión](../ASUS_E2_06_offline_exodo1.png). | **PASS técnico** para lectura bíblica local. No se extrapola a importar PDFs/EPUB ni a conexión de servicios. |

## Lista de capturas individuales de apertura por capítulo

| Tema | Capítulos abiertos en Android |
| --- | --- |
| **1** | [01](E2_04_cap01_abierto.png), [02](E2_04_cap02_abierto.png), [03](E2_04_cap03_abierto.png), [04](E2_04_cap04_abierto.png) |
| **2** | [05](E2_04_cap05_abierto.png), [06](E2_04_cap06_abierto.png), [07](E2_04_cap07_abierto.png), [08](E2_04_cap08_abierto.png) |
| **3** | [09](E2_04_cap09_abierto.png), [10](E2_04_cap10_abierto.png), [11](E2_04_cap11_abierto.png), [12](E2_04_cap12_abierto.png) |
| **4** | [13](E2_04_cap13_abierto.png), [14](E2_04_cap14_abierto.png), [15](E2_04_cap15_abierto.png), [16](E2_04_cap16_abierto.png) |

## Observaciones y puerta de cierre

- **P2 UX navegación:** al salir de una referencia bíblica vinculada desde la Guía pastoral, Atrás devuelve al inicio, no a la sección/capítulo anterior. Es una mejora futura; no se corrige ahora.
- **Límite técnico explícito:** cada capítulo fue **abierto realmente** y los datos de 84 referencias fueron inspeccionados; no se certifica la semántica editorial de los párrafos ni el comportamiento de cada enlace individual. Esto queda disponible para auditoría puntual posterior si el autor lo solicita.
- **Etapa 2: CERRADA EN ALCANCE TÉCNICO REMOTO**, sin P0/P1 observados en su navegación, con el pendiente de experiencia de lector real concentrado en la revisión humana de Etapa 4.
- Handoff: congelar estos resultados y **avanzar exclusivamente a Etapa 3**, realizar sus seis casos y producir documento distinto; aplazar correcciones hasta consolidar la QA. PR #72 draft, no merge ni publicación.
