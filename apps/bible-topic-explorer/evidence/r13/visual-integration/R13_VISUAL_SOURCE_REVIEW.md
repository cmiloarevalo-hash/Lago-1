# La U 1.3 — entrega de integración visual antes de QA Android

**Work item canónico:** [Issue #65 / #6094795215](https://github.com/cmiloarevalo-hash/Lago-1/issues/65#issuecomment-6094795215). **Alcance:** transformación fuente en `feat/r13-p2-topic-ui`, no release. **Base:** `e0b06eb1d02405f107731e89290385e96d4cfb5e`; `main` debe permanecer `f5ddc402375692aa9cb18cafe76e36992310cda0`. **Estado:** SOURCE INTEGRATED / VISUAL OWNER REVIEW REQUIRED / ANDROID QA NOT RUN (nueva composición).

## Imágenes originales del Owner usadas para comparación

- [Coral — tres pantallas](https://github.com/cmiloarevalo-hash/Lago-1/blob/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references/owner-01-coral.png)
- [Natural — tres pantallas](https://github.com/cmiloarevalo-hash/Lago-1/blob/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references/owner-02-natural.png)
- [Marino — tres pantallas](https://github.com/cmiloarevalo-hash/Lago-1/blob/evidence/r13-approved-ux-reference/apps/bible-topic-explorer/evidence/r13/visual-references/owner-03-marino.png)

Son **referencias**, NO fotos copiadas, marca «Luz», RV1960 ni controles de reproducción empaquetados.

## Matriz antes → después por pantalla y tema (9 cotejos)

La matriz evalúa **estructura y recursos implementados en fuente** frente a las tres PNG. No transforma código fuente en prueba de apariencia real, rendering Android, accesibilidad o aceptación del Owner.

| Combinación | Antes en QA integrada (e0b06eb) | Ahora: cambio concreto de composición | Pendiente obligatorio |
|---|---|---|---|
| Hoy · Coral | Hero geométrico plano, tarjeta vertical rígida | `landscape-coral.png`; mensaje editorial sobre paisaje, tarjeta de versículo superpuesta, paisaje dentro de CTA, píldora coral y cuatro accesos pastel | Captura Android coral, contraste, 160/200%, revisión de profundidad |
| Leer · Coral | Lista técnica con etiquetas «seleccionado» visibles y bloque instructivo | Título de libro/capítulo centrado en serif, regla de acento, números discretos a izquierda de texto RV1909; notas, lectura y pulsación larga sin cambio semántico | Cotejar serif/reflujo, selección real y notas al 200% |
| Planes · Coral | Ficha repetida con «✦ 7» | `book-coral.png`, imagen superior con título y CTA pill, progreso numérico+barra+7 círculos reales y filas por día | Captura índice y detalle/progreso, prueba Android persistencia |
| Hoy · Natural | Misma estructura antigua, oliva por tokens | `landscape-natural.png` con tinta salvia/oliva y composición editorial compartida | Render Android y sensibilidad del Owner al arte original |
| Leer · Natural | Cambio de paleta sin jerarquía | Encabezado serif, numeración y lectura RV1909 con fondo claro salvia y acentos | Captura y legibilidad; notas guardadas |
| Planes · Natural | Tarjetas sin imagen | `book-natural.png`, hero editorial del plan, avance/días activos dinámicos | Captura, prueba 7/7, reset que conserva notas |
| Hoy · Marino | Paleta clara pero ilustración plana | `landscape-marine.png`; base clara, azul profundo, acentos dorados, paisaje y tarjeta superpuesta | Cotejo Android sin convertir Marino en oscuro |
| Leer · Marino | Layout técnico estándar | Lector serif/número azul discreto, selección real, capítulo como protagonista y controles en segundo plano | Captura Android, contraste/foco/scroll |
| Planes · Marino | Ilustración genérica «✦ 7» | `book-marine.png`; imagen de libro, CTA azul, avance con círculos y lista jerarquizada | Captura y cold restart |

**Decisiones de fidelidad:** Conservamos blancos/cremas, composición apilada, imágenes dentro de tarjetas, jerarquía serif/sans, elevación y CTAs tipo pill. Las fotografías de referencia se sustituyen por ilustraciones atmosféricas originales programáticas: esto evita copiar fotos inciertas pero **la coincidencia fotográfica fina sigue pendiente de revisión**, no se declara fidelidad pixel-perfect. No se representa audio inexistente ni se copia la Biblia RV1960.

## Otros módulos / comparación de forma

| Área | Composición ahora integrada | Estado |
|---|---|---|
| ☰ | Tres grupos («Lectura y reflexión», «Pastoral y música», «Mi espacio»), filas con pictogramas y divisores finos, sin duplicar las cuatro pestañas y sin acceso Spotify | SOURCE INTEGRATED; Android NOT RUN |
| Cuatro tabs | Hoy · Explorar · Leer · Biblioteca exactamente. Ajustes secundario | SOURCE INTEGRATED; Android NOT RUN nuevo tema |
| Temas/migración | Ajustes muestra únicamente Coral, Natural y Marino; valores antiguos lavanda→coral, sky/dark/contrast→marino, desconocidos→natural; `UPDATE app_preferences SET theme` acotado e idempotente, manteniendo escala, notificación e información privada | TEST UNITARIO PASS; cold restart Android NOT RUN |
| Guía pastoral | 8 acordeones, título+resumen cerrado, secciones cortas abiertas; al pie bibliografía azul `#155E99`, enlazada por fuente real y botón RV1909 local, sin URLs crudas ni metadatos `checkedAt/reuseBasis`; aviso editorial ligero | SOURCE INTEGRATED; Android/links/TalkBack NOT RUN |
| Cancionero | Lector serif, búsqueda, separación entre «Letras disponibles», «Mis letras» y «Pendientes de derechos»; editor personal offline preservado, 4 borradores originales explicitados | SOURCE INTEGRATED; 0/20 letras conocidas autorizadas, 4 borradores NO autorizados para distribución |
| YouTube | Tarjeta 16:9 con encabezado reconocible y estado explícito `PENDIENTE_PLAYLIST`; solo construye WebView del embed oficial tras URL real de playlist introducida por usuario; video visible, sin autoplay/audio simulado | `BLOCKED_EXTERNAL` sin playlist aprobada ni playback comprobado |
| Spotify | Eliminados botón/ruta/menu/widget accesibles de UI; los archivos de evidencia y módulos históricos no se borran | Fuente navegable sin Spotify |

## Arte y trazabilidad de licencia

Los **6 PNG de `assets/editorial/`** están generados de cero por `scripts/generate-editorial-art.py` con Pillow, semillas deterministas. Dos composiciones (panorama forestal/lago con capas de niebla; libro ilustrado con mesa y taza), cada una con colorimetría Coral/Natural/Marino. **No** se descargaron fotografías, marcas, portadas, iconos de terceros, textos protegidos ni archivos de los mockups originales. Derechos de uso: recursos nuevos originales del proyecto generados para esta feature; **documentar la autorización final de incorporación/distribución con el Product Owner antes de APK de producción**. La identidad oficial de YouTube solo aparece como representación de plataforma; reproductor WebView real de YouTube conserva controles/condiciones.

## Cambios y protecciones

- UI: `TodayScreen.tsx`, `BibleScreen.tsx`, `PlansScreen.tsx`, `PastoralScreen.tsx`, `HymnalScreen.tsx`, `YouTubeScreen.tsx`, `App.tsx`, `primitives.tsx`, nuevo `editorialArt.ts`.
- Navegación/tema/datos: `secondaryMenu.ts`, `navigation.ts`, `preferences.ts`, `SettingsScreen.tsx`, `sqliteLocalPersistence.ts` (solo preferencia `theme`; NO notas/corpus).
- Contratos actualizados: `preferencesTheme.test.ts`, `secondaryMenu.test.ts`, `navigation.test.ts`, `integratedModules.test.ts`, `finalIntegration.test.ts`, `r13NotesDrawerContract.test.ts`, `sqliteLocalPersistence.test.ts`.
- Sin ediciones de `main`, RV1909 SQLite, `topics.ts`, contenidos de 100 topicIds, datos de usuarios, workflows o raíz. Nada de `clear data`, desinstalación oficial, firma, release, PR o merge.

## Estados de verificación y próximo gate

**Pruebas de fuente:** TypeScript `tsc --noEmit` PASS en trabajo actual tras dependencias instaladas; primera corrida Vitest tras el delta: 132/133 PASS, una expectativa heredada de `lavender` que no corresponde al nuevo requisito; test actualizado y aumentado con dos controles de migración, corrida focal posterior 8/8 PASS. Reconfirmación final de suite completa asociada al SHA final: ver checkpoint del Issue #65.

**ANDROID (nueva composición): NOT RUN.** No se ejecutó Gradle, ADB ni compilación Android para este rework. Conservamos `132/132` y debug QA histórico `e0b06eb` solo como evidencia del código antiguo y módulos realmente no impactados; navegación/tipos/estilos globales cambiados **sí requieren nueva QA consolidada**.

**Pendientes de QA Android futura:** captura por 3×3 con la app real, persistencia de preferencias/avances/letras y notas tras cold restart, 7/7/reset, Back, acceso a fuente enlazada y RV1909 offline, contraste al 160/200%, TalkBack, retorno, foco y ausencia de regresiones en privados impactados; juegos V/F, texto real de ordenar versículos, variantes de dinámicas permanecen NOT RUN/PARTIAL previamente señalados; editorial de 28 sesiones, 8 guías, 100 fichas y licencias permanece BLOCKED_EDITORIAL/BLOCKED_LICENSE donde aplica.

**GATE:** detenerse tras integrar y dejar evidencia. Sin aprobación automática de diseño, QA, merge o APK producción. Marcador del work item: `READY FOR SUPERVISOR R13 VISUAL IMPLEMENTATION REVIEW`.
