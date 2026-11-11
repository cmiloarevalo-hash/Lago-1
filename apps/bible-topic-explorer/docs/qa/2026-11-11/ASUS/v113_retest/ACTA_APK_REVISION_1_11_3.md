# Acta de APK candidata para revisión humana — Guía Pastoral 1.11.3

**Fecha:** 11-11-2026 · **Repositorio:** Lago-1 · **Work Item:** #67 · **PR:** #72 (sigue **draft**) · **commit de código:** `43b9f27531a33f4856d288cdb233b65540e2d559`.

**Dictamen del supervisor:** `CANDIDATA INSTALABLE / RETEST TÉCNICO FAVORABLE, PENDIENTE REVISIÓN HUMANA`. No es release de producción, ni aprobación de autor, ni autorización de merge o publicación en Uptodown/Wix. No alterar QA5.

## 1. Identidad del binario probado y entregado

| Propiedad | Dato verificado |
| --- | --- |
| Nombre de entrega | `Guia_Pastoral_Biblia_v1.11.3_REVISION.apk` |
| Package Android | `com.lago.bibletopicexplorer` |
| Versión / código | `1.11.3 / 15` |
| APK tamaño | `88.147.172 bytes` |
| SHA-256 | `e8da495438cdd4e3047f57f8620fdb0a1991b7ef12069341499857bcd0438cfd` |
| SHA-256 de certificado | `fac61745dc0903786fb9ede62a962b399f7348f0bb6f899b8332667591033b9c` |
| min/target SDK | `24 / 36` |
| Fuente | [M5 GitHub Actions #43118228612](https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/43118228612) — **success** |
| Verificaciones | [M2 #43118228607](https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/43118228607) — **success**; typecheck + 169 pruebas automatizadas |
| Prueba instalada | ASUS, AVD **nuevo y exclusivo** `Lago1_V113_QA_API36`, Android 16 API36, ADB `emulator-5586` |

**Advertencia administrativa:** el archivo fuente y el artefacto ZIP de M5 mantienen el nombre histórico «v1.11.2» porque el nombre del workflow no se actualizó. No implica una versión antigua: **aapt inspeccionó el APK y confirmó 1.11.3/versionCode15**. Para entregar se usa nombre de archivo corregido; el hash del contenido es idéntico al del artifact.

## 2. Retests Android de problemas de la matriz unificada

| Caso/observación | Procedimiento real | Resultado / evidencia |
| --- | --- | --- |
| **CORR-01 / UX-E3-01 / EV-H4-033 / retest R6** | Abrir Leer → Génesis 1:1 → Nota → Agregar nota, con Gboard visible escribir texto sintético `QA113_Primer_Toque_Nota`. Pulsar exactamente **una vez** «Guardar nota». Forzar cierre/reabrir aplicación y luego nota de Génesis 1:1. | **PASS**: primer toque cierra editor y aparece «Correcto: Nota privada guardada.»; al relanzar, el texto se recupera íntegro. [Antes](Guia_v113_note_before_save.png) · [Primer toque](Guia_v113_note_firsttap.png) · [Reapertura](Guia_v113_note_reopened.png). El resultado demuestra esta ruta en Android 16, no en todos los teclados y SO. |
| **CORR-03 / UX-E2-03 / EV-H4-029 / retest R6** | Menú → Guía pastoral → TEMA 1 → abrir capítulo 1 «¿Qué es la Biblia y de dónde viene?» → pulsar Salmo 119:105 → Android Atrás. | **PASS**: vuelve con **capítulo 1 todavía expandido** y su bloque de enlaces/texto en pantalla, sin saltar a la portada. [Capítulo abierto](Guia_v113_chap1_open.png) · [Regreso](Guia_v113_pastoral_back.png). Validación hecha con un enlace AT; otro NT y capítulo 16 siguen para regresión ampliada. |
| **CORR-02 / UX-E4-01..02 / EV-H4-041 / retest R6** | AVD 360×740 y 320×640, fuente nativa Android 100/160/200%. App reiniciada para cada escala; imágenes estables sin zoom externo. | **PASS** del defecto de solapamiento en 360×740 a 160% y 200%: cabecera y subtítulo completos, tarjeta debajo. [160%](Guia_v113_160_stable.png) · [200%](Guia_v113_200.png). A 320×640 [160%](Guia_v113_320_font_1_6.png) / [200%](Guia_v113_320_font_2_0.png) la cabecera sigue legible, pero el encabezado superior se parte y el tab «Biblioteca» usa dos líneas: **OBS P2 de adaptación**, no pérdida de control. A 200%, la tarjeta queda bajo el primer pliegue y requiere desplazamiento, resultado esperable si todo el texto se amplía. |
| **CORR-05 / UX-E3-03** | Revisión de código en commit `43b9f27`: se retiró una segunda acción «Cancelar edición» del Diario. | **Implementado / TEST AUTOMATIZADO**, sin nueva inspección manual de esa pantalla en APK 1.11.3. |
| **CORR-06 / UX-E3-04** | Se reemplazó rótulo de revisión editorial por «7 lecturas · Biblia Reina-Valera 1909» en catálogo de planes. | **Implementado / TEST AUTOMATIZADO**, sin nuevo retest visual manual de Planes en APK 1.11.3. La obra RV1909 y la guía pastoral 1.30 permanecen sin editar. |

## 3. Incidencias de infraestructura y límites

- `ENV-V113-001`: en el primer arranque del AVD aislado, apareció un diálogo **«System UI isn't responding»**. Se pulsó **Wait** y se obtuvo una captura posterior limpia de Hoy. Este síntoma ya se observó con otras versiones y no está atribuido causalmente a la APK.
- RAM del ASUS fluctuó por la carga de AVD; se **detuvo solo la compilación Gradle local del supervisor** y se mantuvo GitHub Actions como fuente binaria aprobada. **No se tocó QA5 ni otro proyecto Android.**
- Retest manual limitado a Android **16** en este commit; Android 13, dispositivo físico, teclado de terceros, prueba de usuario sin instrucciones y aceptación visual del autor **siguen pendientes**.
- `CORR-04` visibilidad del Diario en menú y tema oscuro **no** se cambiaron sin evidencia o criterio autoral. No se declara UX global aceptada.

## 4. Instrucciones de revisión del autor

Instalar en Android compatible sin borrar QA5. Como el paquete y certificado de pruebas coinciden con candidatas anteriores, Android puede tratarla como actualización; conservar una copia de notas/diario si se va a actualizar una instalación con datos reales. **No usar la APK como release pública**.

Revisar primero: (a) crear una nota con teclado abierto y guardar de un toque; (b) guía capítulo 1 y 16, pulsar versículos y regresar; (c) Hoy en escala normal y ampliada; (d) Diario, plan y recordatorios; (e) persistencia de datos; (f) experiencia visual general. Registrar cualquier nuevo evento como `UX-E#-NN-R7` con captura, versión y resultado.

**Siguiente puerta:** el autor revisa la APK. Supervisor consolida su respuesta y decide `ACCEPT/REWORK/BLOCK` antes de considerar merge/publicación. El PR #72 permanece draft; la emisión de esta acta **no es aprobación final**.
