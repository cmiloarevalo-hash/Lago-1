# ESTADO VIGENTE — PROTOTIPO ESTABLE ACEPTADO · ACTIVIDADES CONGELADAS

**Fecha de decisión del Product Owner: 2026-10-26.**

## Nombre oficial del producto (corrección posterior del Product Owner)

**Nombre oficial del producto:** **Biblia - Guía pastoral**.

El nombre «La U» es una denominación histórica/interna del proyecto y de sus artefactos de prototipo, incluido **La U 1.3 QA5**. **No** designa otro producto. Los identificadores técnicos, la APK instalada, la referencia del código y el historial de GitHub conservan sus nombres preexistentes para trazabilidad. Esta corrección de nomenclatura **es documental** y no autoriza renombrar, recompilar o modificar el binario, abrir actividades ni descongelar el proyecto.


## Decisión vinculante actual

El Product Owner declaró **La U 1.3 QA5** instalada en su teléfono como **prototipo estable aceptado**, ordenó incorporarla a `main` y posteriormente ordenó: «quiero cerrar todas las otras actividades quedan congeladas, ya se armo el prototipo».

**Estado de trabajo: CONGELADO / SIN ACTIVIDADES AUTORIZADAS.** No hay implementación, investigación, revisión editorial, builds, APKs, integración de ramas ni ejecución de colas pendientes en curso. Cerrar tareas abiertas en GitHub es administrativo y **no significa** que todo el contenido histórico esté completado.

## Baseline conservada

- Repositorio: `cmiloarevalo-hash/Lago-1`, rama `main`.
- Código del prototipo aceptado: commit `e3cea7bc360c7fc97187639ca2f72b0c046d6a4a`, integrado por avance directo (fast-forward) a `main` desde `feat/r13-p2-topic-ui`; commits documentales posteriores no modifican el código del prototipo.
- Versión APK de referencia en el teléfono: **La U 1.3 QA5** (`com.lago.bibletopicexplorer.qa`, Android DEBUG), **no** un release comercial.
- Acta de aceptación: `docs/r13/PROTOTIPO_ESTABLE_ACEPTADO_QA5.md`.
- Sin modificación ni desinstalación de las aplicaciones del teléfono. Preservar RV1909, datos personales, 100 temas, diseño Coral/Natural/Marino y demás componentes existentes.

## Congelación de actividades

**Todas las issues actualmente abiertas de este repositorio deben quedar CERRADAS con motivo `not_planned` para el trabajo pendiente, conservando íntegro su historial, y con comentario de congelación.**

Inventario identificado antes del cierre (20 issues):
`#1, #2, #3, #4, #5, #6, #7, #8, #9, #10, #12, #13, #15, #17, #18, #19, #58, #61, #64, #65`.

Congeladas expresamente, entre otras:
- Guía pastoral «El camino de Jesús», módulos F01–F16: Word y propuestas preservados; **NO implementados ni aprobados como contenidos finales**.
- Sustitución de SoundCloud por oraciones, 15 textos propuestos y demás cambios editoriales.
- Nuevas APK, mejoras de funcionalidad, accesibilidad, TalkBack, importaciones, copias de seguridad, imágenes, juegos y ajustes visuales.
- Investigación de Biblia española propia y cualquier proyecto experimental/cola antigua de romance o memoria persistente aún abierto.

Los documentos, ramas históricas, capturas, binarios y notas previas **se conservan**, no se borran ni se mezclan retroactivamente con `main`. La congelación es **indefinida** hasta nueva autorización **explícita del Product Owner** con alcance y rama definidos; no reabrir ni crear tareas por suposiciones, automatismos o antiguas instrucciones.

**NO autoriza** eliminación de archivos, reseteo de datos, reinstalación, nueva release, borrado de ramas o modificación de la APK aceptada.

## Historial sustituido (sin vigencia operativa)

El texto posterior se conserva exclusivamente para trazabilidad. Las antiguas declaraciones «AUTHORIZED / ACTIVE» y las colas W1–W4 quedan **REVOCADAS POR ESTA DECISIÓN**.

---

# Estado de trabajo — La U

## Última decisión formal
**P03 MASTER REMEDIATION PLAN — SUPERVISOR ACCEPT**

## Actividad activa
**R01 — implementación continua W1→W4**

Issue:
`#49`

Estado:
**AUTHORIZED / ACTIVE — ONE CONTINUOUS BATCH**

Exact implementation baseline:
`47b769d2b8f9af2e9ff710969f3bdc0af2ef76e8`

## Cambios a implementar sin pausas intermedias
1. Android Back navega dentro de la app; en raíz pregunta si realmente se quiere salir.
2. UI visible en español: `Explorador Bíblico`, `sin conexión`.
3. Safe areas reales para status/navigation bars Android.
4. Identidad visual más luminosa, cálida y atractiva; eliminar dominancia verde oscuro.
5. Compactar hero/cards/spacing manteniendo >=48dp y legibilidad.
6. Aplicar el tratamiento a Hoy, Explorar, Leer/Reader, Biblioteca y Ajustes.
7. Guardado real desde Reader usando persistencia local existente.

## Paleta visual aprobada por Product Owner
- background `#FAF9F6`;
- surface `#FFFFFF`;
- primary green `#16A34A`;
- blue `#3B82F6`;
- amber `#F59E0B`;
- coral `#F97316`;
- purple `#8B5CF6`;
- primary text `#111827`;
- secondary text `#6B7280`;
- border `#E5E7EB`.

Dark mode:
base neutral charcoal/navy, no green-black dominance.

Acceptance visual:
el cambio debe ser inmediatamente perceptible físicamente; si puede describirse como `se ve igual`, falla el objetivo visual.

## Invariantes
Preservar:
- RV1909/SQLite;
- 100 temas;
- A–Z;
- free-form/topic;
- whole-term/literal/reference semantics;
- `amor`/`llamó`;
- offline/local;
- slug/package/npm/DB identities;
- persistencia local.

## Workflow simplificado
Implementer ejecuta:
`W1 → W2 → W3 → W4`

Checkpoint breve tras cada wave, pero **sin esperar Supervisor**.

Gate único al final:
`IMPLEMENTER COMPLETE — R01 W1-W4 CONTINUOUS REMEDIATION`
`READY FOR SUPERVISOR R01 IMPLEMENTATION REVIEW`

Después Supervisor revisa una vez, genera W5/APK y se hace prueba física.

## Evidencia física
`evidence/exp02/android-physical-2026-10-06/`

Private chat history is not authoritative; GitHub durable state is authoritative.