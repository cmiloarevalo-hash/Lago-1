# Control de calidad previo a la publicación — Guía pastoral - Biblia

> **ACTUALIZACIÓN 13-11-2026:** el autor aprobó expresamente el producto visual/funcional **Android v1.11.6 (versionCode 18)** y ordenó merge/cierre del desarrollo. PR #68 y #73 **fusionados a main** (`090c054b9b83a7d47c5a8d4779ebae67726af9e8`). APK concreta: 82.988.420 bytes; SHA-256 `fd384c32a5d82bc199390ff265c4d6cc66d8aad2da70a6996fe9ca5bf7754d27`; CI M2/M5 PASS en HEAD de #73. **Esta aprobación de desarrollo no verifica ni cierra automáticamente los puntos de distribución en Uptodown**: firma actual `CN=Android Debug`, falta firma de producción persistente, perfil/correo públicos, requisitos legales/privacidad, capturas de tienda, envío y prueba de descarga de Uptodown. Los checkboxes sin comprobación efectiva **permanecen pendientes**, aunque el Issue #67 se archive a petición del Humano. Los apartados que siguen reflejan el protocolo registrado 09-11-2026.


**Fecha del plan:** 2026-11-09 (Chile). **Estado:** protocolo preparado; **NO EJECUTADO** sobre una APK final aprobada.  
**Actividad:** [#67](https://github.com/cmiloarevalo-hash/Lago-1/issues/67) · [Ficha de Uptodown](PUBLICACION_UPTODOWN.md) · [Estado de guía y web](ESTADO_GUIA_Y_WEB_2026-11-09.md).

> Para toda IA: no confundir una compilación de CI ni una versión candidata con **release firmada y aprobada**. La APK estable QA5 no debe sustituirse ni desinstalarse como efecto de las pruebas. Conservar copias de datos locales antes de comprobar migraciones.

## A. Identificación y control documental

- [ ] El autor entregó o identificó **el archivo APK concreto** que quiere publicar y aprobó su contenido.
- [ ] Nombre comercial final confirmado (en Wix, ficha Uptodown, app, launcher y título de documento).
- [ ] Correo público de soporte final confirmado y probado mediante `mailto:`.
- [ ] Número exacto de versión, `versionCode`, `applicationId` / package y fecha de compilación extraídos de **ese APK**, no de una rama.
- [ ] Verificado **SHA-256** del APK entregado; registrar hash y nombre en esta bitácora.
- [ ] Firma **de producción** y certificado persistente comprobados; archivo de clave privada y credenciales **fuera de GitHub**.
- [ ] Licencia de software, licencias de imágenes/recursos, atribuciones de Biblia y derechos de textos verificados.
- [ ] Se leyó la **política de privacidad** conforme al comportamiento real de la versión final y está disponible mediante URL pública si se requiere.
- [ ] Estado del perfil de desarrollador Uptodown comprobado por su titular. **No subir hasta autorización explícita.**

### Diferencias detectadas al revisar ramas (NO RESUELTAS)

| Concepto | Ficha/web preparadas | APK candidata #69, rama v1.10.1 | Acción |
| --- | --- | --- | --- |
| Nombre | `Guía pastoral - Biblia` | `Biblia Reina-Valera 1909 - Guía Pastoral` | Autor decide nombre final antes de publicación |
| Correo | `cmiloarevalo@gmail.com` (candidata antigua) | `apkcristianas@gmail.com` | Autor confirma dirección pública de soporte |
| Versión | Sin versión aprobada en ficha | `1.10.1` / `versionCode 11` en `app.json` | Confirmar manifest del APK real |
| Android package | Pendiente | `com.lago.bibletopicexplorer` en la rama #69 | Confirmar APK real y ruta de actualizaciones |
| Guía | 16 capítulos previstos | PR #68 declara texto autoral **v1.30**, heredado por PR #69 | Cotejar con texto **aprobado** por el autor |
| Firma | Producción pendiente | PR #68 informó firma de **debug**; no se verificó firma de producción en #69 | No distribuir si no hay firma definitiva |

**Antecedentes:** [PR #68](https://github.com/cmiloarevalo-hash/Lago-1/pull/68) y [PR #69](https://github.com/cmiloarevalo-hash/Lago-1/pull/69), ambos abiertos y en borrador al registrar este protocolo. PR #69 es **acumulativo y apunta a la rama de PR #68**. No hacer merge directo a `main` ni suponer que el PR #66 (guía v1.0.1) contiene el texto nuevo.

## B. Prueba funcional de la APK final (Android físico)

- [ ] Instalación limpia: abrir app, permisos, título y versión correctos.
- [ ] Revisión visual: ni etiquetas «prototipo» ni accesos visibles a Juegos o SoundCloud; conservar créditos y origen de recursos.
- [ ] Los **16 capítulos** aparecen en el orden aprobado, con títulos, párrafos y preguntas correctos.
- [ ] Cada capítulo muestra las referencias de **Antiguo y Nuevo Testamento**, con enlaces que abren pasajes correctos de RV1909.
- [ ] Biblia RV1909 abre capítulos y versículos; comparar muestras reales de texto bíblico.
- [ ] Probar lectura **sin datos ni Wi-Fi** donde se haya anunciado funcionamiento local.
- [ ] Probar notas, favoritos/resaltados, biblioteca, diario/reflexiones y progreso; cerrar y volver a abrir para comprobar persistencia.
- [ ] Probar selección y copia **de texto exacto**, compartido y teclado Android (cambios específicos de #69).
- [ ] Probar recordatorios optativos por plan, hora y navegación desde notificación; permisos de Android correctos.
- [ ] Revisar accesibilidad básica: tamaño de letra, contraste, zonas táctiles, navegación y comportamiento al girar/teclado.
- [ ] Confirmar menú, créditos, contacto y enlaces de fuentes; ausencia de funciones que impliquen respaldo institucional inexistente.
- [ ] Validar que los datos personales no se expongan en capturas, backups ni enlaces compartidos.
- [ ] **No instalar encima de QA5** si package/firma difieren; verificar conservación y migración desde una copia controlada, sin arriesgar datos reales.
- [ ] Repetir prueba en otro Android o emulador funcional si está disponible; registrar Android/versión/modelo y fallos.

## C. Preparación de ficha Uptodown (sin enviar)

- [ ] Aprobar texto breve (máximo 70 caracteres) y descripción de **exactamente 3 párrafos** en español, acorde con APK definitiva.
- [ ] Autor entregó **3–6 capturas auténticas** (ideal 4–6) y las aprobó, sin datos privados.
- [ ] Ícono correcto, categoría, idioma, autor, nacionalidad y clasificación por edad revisados.
- [ ] Disponibilidad gratuita/modelo de licencia, ausencia/presencia de anuncios, compras y suscripciones confirmadas.
- [ ] Changelog de versión: solo funcionalidades y correcciones efectivamente presentes.
- [ ] URL de política de privacidad y web oficial comprobadas; correo final revisado.
- [ ] **Autorización del autor para subir** APK exacta y enviar a revisión Uptodown.
- [ ] Al aprobarse: registrar URL de ficha **real** y fecha, enlazar desde Wix y probar descarga e instalación.
- [ ] TinyURL `https://tinyurl.com/GuiaPastoralBiblia`: activar en servicio externo y verificar redirección real a Wix; **no darlo por activo antes**.

## D. Acta de aprobación de release — completar al final, no anticipar

| Dato | Valor verificado |
| --- | --- |
| Nombre del APK | PENDIENTE |
| Versión visible | PENDIENTE |
| versionCode | PENDIENTE |
| applicationId | PENDIENTE |
| Firma producción y certificado | PENDIENTE |
| SHA-256 del APK | PENDIENTE |
| Fecha de pruebas | PENDIENTE |
| Android(es) probados | PENDIENTE |
| 16 capítulos cotejados | PENDIENTE |
| Nombre comercial autorizado | PENDIENTE |
| Correo autorizado | PENDIENTE |
| Capturas | PENDIENTE |
| Autor y fecha de autorización | PENDIENTE |
| Cuenta Uptodown y URL pública | PENDIENTE |

**Regla de avance:** cumplir sección A y B y obtener autorización del autor antes de completar sección C. Si algo falla, corregir en rama de trabajo y volver a ejecutar QA; **no marcar la subtarea #6 como completa solo por existir un archivo de CI**.
