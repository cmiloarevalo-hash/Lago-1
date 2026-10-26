# Biblia - Guía pastoral — Prototipo estable aceptado (La U 1.3 QA5)

**Nombre oficial del producto confirmado por el Product Owner el 2026-10-26:** **Biblia - Guía pastoral**. «La U 1.3 QA5» es la identificación histórica y técnica del binario probado en el teléfono del Product Owner, **no el nombre oficial del producto**. La corrección se registra solo en documentación, sin modificar APK, metadatos Android, código ni congelación de tareas.

**Fecha de aceptación declarada:** 2026-10-26.  
**Decisión:** el Product Owner informa que tiene instalada en su propio teléfono la versión **La U 1.3 QA5**, la considera estable para su uso como prototipo y solicita expresamente situar esa versión en la rama **`main`** como **prototipo estable aceptado**.

## Baseline aceptada

- Repositorio: `cmiloarevalo-hash/Lago-1`.
- Fuente exacta evaluada y aceptada: `feat/r13-p2-topic-ui @ e3cea7bc360c7fc97187639ca2f72b0c046d6a4a`.
- Rama `main` anterior: `f5ddc402375692aa9cb18cafe76e36992310cda0` (RC02 1.1.2).
- Integración: **fast-forward sin forzar**, con 22 commits de La U 1.3; sin reescritura del historial y sin combinar ramas documentales no aprobadas.
- APK instalada identificada en entrega QA5: `LaU-1.3-QA5-AltoContraste-ARM64.apk`.
- APK QA5: `versionName 1.3-qa.5`, `versionCode 8`, `applicationId com.lago.bibletopicexplorer.qa`, Android DEBUG/ARM64.
- Integridad del binario de referencia en entrega anterior: SHA-256 `b63e8226e5267aab259e3dca3bbf13c99bca7b3e5cb754c4e1eeb0554dcb04c2`.
- APK previamente publicada: https://raw.githubusercontent.com/cmiloarevalo-hash/Lago-1/downloads/r13-qa/LaU-1.3-QA5-AltoContraste-ARM64.apk
- Evidencia técnica/capturas: `apps/bible-topic-explorer/evidence/r13/high-fidelity-qa/R13_HIGH_FIDELITY_DELIVERY.md`. Registro original: https://github.com/cmiloarevalo-hash/Lago-1/issues/65#issuecomment-6097919757.

## Alcance preciso de esta aceptación

**ACEPTADO COMO BASELINE DEL PROTOTIPO:** experiencia de la versión QA5 probada por el Product Owner en su teléfono; apariencia Coral/Natural/Marino; comportamiento actual, funcionalidades actuales y código base de la rama R1.3. `main` pasa a representar ese prototipo de referencia para próximas iteraciones, evitando regresar involuntariamente al aspecto RC02.

**Esta aceptación no declara:** publicación comercial, lanzamiento a tienda, verificación formal de todas las pruebas de accesibilidad/TalkBack, auditoría doctrinal completa ni reproducibilidad de firma de la APK DEBUG. La aceptación física comunicada es del Product Owner; las pruebas previas reportadas son 150/150 Vitest y comprobaciones Android documentadas, no una suite global nueva ejecutada en esta integración.

**Identidad de compilación:** el `app.json` versionado en Git sigue identificando la aplicación base como `1.1.2`, Android `com.lago.bibletopicexplorer` / `versionCode 4`. La APK QA5 instalada se construyó mediante una variante Android de pruebas independiente `.qa` (1.3-qa.5/código 8). **No asumir que compilar `main` sin configurar explícitamente esa variante reproduce el binario QA5.** No se modifica `app.json`, la firma ni el flujo RC02 en esta aceptación documental.

## Próximos trabajos, aún no incorporados

1. Revisar y aprobar editorialmente las dieciséis enseñanzas de **«Guía pastoral — El camino de Jesús»** a partir del Word breve ya preparado. La versión de app aceptada aún contiene las ocho guías previas; **no** presentar los dieciséis módulos como implementados.
2. Desarrollar el contenido aprobado con vínculos rigurosos Antiguo/Nuevo Testamento y enfoque en palabras, obras y legado de Jesús.
3. Integrar cambios de contenido y otras decisiones (por ejemplo, oraciones) únicamente en trabajos posteriores con sus revisiones, sin alterar por accidente esta baseline de QA5.
4. Para cualquier APK posterior, separar claramente variantes QA y distribución oficial, verificar paquete, firma, `versionCode`, checksum, integridad y migración de datos antes de instalar o sustituir nada.

**Estado:** `MAIN_R13_QA5_PROTOTYPE_OWNER_ACCEPTED / PRODUCT_RELEASE_NOT_CLAIMED / EDITORIAL_F01_F16_PENDING`.
