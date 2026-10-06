# Estado de trabajo — La U

## Última decisión formal
**EXP-02 / M5 — REWORK**

## Estado del programa
El programa de producto está aceptado hasta **80%**.

Milestones formalmente aceptados:
- M1 — definición completa de producto: ACCEPT → 20%;
- M2 — base técnica + UI funcional: ACCEPT → 40%;
- M3 — integración funcional local: ACCEPT → 60%;
- M4 — hardening + UX: ACCEPT → 80%.

Baseline aceptado post-M4:
`019b95f16f55355d5a33c942db6c389a770c9b3f`

## Actividad actual
**Issue #40 — M5 Android APK release package (80→100%)**

M5 todavía NO está aceptado y 100% NO está declarado.

## Evidencia M5 ya completada
- regresión/QA de release;
- configuración Android/build;
- generación de APK nativo real mediante Gradle `assembleRelease`;
- publicación de artifact recuperable en GitHub Actions;
- prueba física inicial en Android.

## Hallazgo de la prueba física
La prueba en dispositivo detectó un defecto material de UX/semántica:
- la búsqueda temática podía contaminarse con coincidencias por substring;
- ejemplo observado: tema `amor` podía recuperar contenido no relacionado por coincidencias tipo `llamó`/`amó`;
- free-form podía cambiar silenciosamente a intención temática.

Supervisor decidió **REWORK**.

## Rework M5 implementado
Candidate HEAD:
`2c97ff81fedc2a6abde806c8fea94c7cf70b39b5`

Cambios principales:
- catálogo congelado de exactamente 100 temas curados expuesto mediante selector A–Z;
- selección temática explícita separada de búsqueda free-form;
- texto free-form permanece búsqueda literal/palabra/frase;
- matching temático exige términos normalizados completos, no substrings arbitrarios;
- regresión específica evita que `amor` recupere Génesis 1:5 por `llamó`;
- tests congelan 100 topic IDs únicos.

## Verificación automática del rework
- CI run `37409530802`: SUCCESS;
- typecheck: PASS;
- tests: PASS;
- Expo dependency check: PASS;
- Android bundle smoke: PASS;
- APK build run `37409530792`: SUCCESS;
- Gradle `assembleRelease`: SUCCESS.

Nuevo artifact:
- name: `bible-topic-explorer-v1-apk`;
- artifact ID: `11388962164`;
- APK SHA-256: `5f0257c3becad918117206c819670f7123792b6571173667aa4c28ebd6e0da8e`;
- archive digest: `sha256:a712b1892034b235d6a49ce4f253dbcf0cc307ba410ac2ec744497ea5a7a2b98`.

## Gate pendiente
Falta repetir en un dispositivo Android físico, usando el APK del rework:
1. instalación;
2. arranque;
3. selector A–Z de 100 temas;
4. búsqueda temática `amor` sin contaminación por substrings;
5. búsqueda free-form separada;
6. flujos críticos de Hoy/Biblia/Biblioteca/Ajustes;
7. comportamiento offline.

Después de esa evidencia, Supervisor revisa M5.

## Regla de cierre
No declarar 100% ni cerrar M5 hasta que la prueba física del APK corregido pase.

## Nota de continuidad
Issue #31 corresponde al batch MVP anterior y ya no es la autoridad operativa actual. La continuidad vigente es la secuencia de milestones M1→M5 y el work item activo es Issue #40.

## Próxima acción autorizada
Ejecutar verificación física Android sobre el APK corregido de HEAD `2c97ff81...`, persistir evidencia en Issue #40 y volver a gate de Supervisor.
## Investigación de diseño completada — P02
**P02 — Psicología visual y UX móvil: ACCEPT**

Issue #43 quedó cerrada.

Decisiones congeladas:
- dirección emocional: `calma viva`;
- paleta light/dark multirole con verde base + amber/coral/sky controlados;
- tipografía semántica ampliada;
- spacing 4/8/12/16/24/32/48;
- radii 8/12/16/24; pill sólo chips/selectors;
- menos card-heavy UI;
- navegación Hoy / Explorar / Leer / Biblioteca;
- CTA y selected states explícitos;
- progreso descriptivo sin streak/guilt;
- WCAG/Android/Apple thresholds cuantitativos;
- recorrido principal orientado siempre de vuelta al texto.

Batch visual propuesto:
`D01 → D02 → D03 → D04 → D05 → D06 → D07 → D08`

**Estado del batch visual: PLANIFICADO, NO AUTORIZADO.**

Gate previo obligatorio:
terminar M5 / Issue #40 con verificación física del APK corregido.

Después de M5 ACCEPT podrá autorizarse D01–D08 sin cambiar search/corpus semantics.
## Batch visual preparado
**Issue #44 — D01–D08 Rediseño visual y accesibilidad post-M5**

Estado:
**PREPARED / NOT AUTHORIZED**

Precondición:
M5 / Issue #40 debe recibir Supervisor ACCEPT.

Baseline de D01:
se fijará al post-M5 accepted HEAD; no existe SHA autorizado todavía.

Alcance:
- design tokens;
- shared components;
- navigation chrome;
- Explorar;
- Leer/Reader;
- Biblioteca/Ajustes/Hoy;
- onboarding/feedback;
- QA visual/accesible.

Restricción:
preservar exactamente corpus/search semantics y la corrección M5 del catálogo de 100 temas.

No iniciar D01 antes del cierre de M5.