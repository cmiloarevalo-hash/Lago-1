# Biblia Reina-Valera 1909 - Guía Pastoral

Aplicación cristiana para Android que reúne la Biblia Reina-Valera 1909, una guía pastoral de 16 capítulos y recursos personales de lectura y reflexión. **«La U»** es el nombre histórico del prototipo, conservado en artefactos y registros antiguos.

> **Estado verificado el 9 de noviembre de 2026:** la versión más reciente **compilada para pruebas es 1.10.1**. No se ha incorporado a `main`, ni aprobado para publicación. El último prototipo físicamente aceptado sigue siendo **La U 1.3 QA5**.

## Versiones, sin confundir etapas

| Referencia | Versión / código | Estado |
| --- | --- | --- |
| **Última candidata compilada** | **1.10.1 / Android versionCode 11**, `com.lago.bibletopicexplorer` | [PR #69](https://github.com/cmiloarevalo-hash/Lago-1/pull/69), **borrador**; validación automática aprobada, QA táctil pendiente |
| Candidata anterior | 1.10.0 / 10 | [PR #68](https://github.com/cmiloarevalo-hash/Lago-1/pull/68), borrador; no aprobada para publicación |
| **Última aceptada en teléfono** | **La U 1.3 QA5** / código 8, `com.lago.bibletopicexplorer.qa` | Prototipo estable de referencia; aceptación declarada el 26-10-2026; **no es una release comercial** |
| Guía pastoral autoral | **«El camino de Jesús y sus enseñanzas» v1.30** | Documento fuente en `docs/guia-pastoral/`; 16 capítulos integrados en la candidata |

**La rama `main` mantiene la baseline del prototipo**, no la compilación 1.10.1. No identificar `versionName`, paquete ni firma de QA5 con los de una candidata.

## Descarga de la última APK candidata 1.10.1 (solo pruebas)

- **[APK directa para Android](https://raw.githubusercontent.com/cmiloarevalo-hash/Lago-1/downloads/v1101-qa/Biblia-Reina-Valera-1909-Guia-Pastoral-v1.10.1-PRUEBA.apk)** — 87.618.632 bytes. Enlace público comprobado con respuesta HTTP 200.
- **[ZIP con APK y comprobante](https://raw.githubusercontent.com/cmiloarevalo-hash/Lago-1/downloads/v1101-qa/Biblia-Reina-Valera-1909-Guia-Pastoral-v1.10.1-PRUEBA.zip)** — 43.836.267 bytes. Enlace público comprobado con respuesta HTTP 200.
- [Comprobante SHA-256](https://raw.githubusercontent.com/cmiloarevalo-hash/Lago-1/downloads/v1101-qa/Biblia-Reina-Valera-1909-Guia-Pastoral-v1.10.1-PRUEBA.apk.sha256) — `fea39101ff04f531d121c78eb5b4df0fe53be9622e4134e92a87210839e9b06c`.
- [Compilación verificable de GitHub Actions](https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/42562062000).

**Advertencia:** estos archivos están identificados como **PRUEBA / CANDIDATA**. No constituyen la APK final de Uptodown ni una actualización aprobada de los datos del teléfono. Se requiere QA física de selección de palabras, teclado, navegación, notas, historial, recordatorios y compatibilidad de firma.

## Cambios de las candidatas 1.10 y 1.10.1

En código y compilación se incluyen: selección táctil de fragmentos bíblicos y botón **Copiar selección**; barra inferior para nota/resaltado/compartir; guía pastoral v1.30; temas desarrollados en Explorar; nuevo nombre de la app; guardados organizables por nombre, tema y color; historial de lectura por día y hora local; diario de reflexiones independiente; recordatorio personal vinculado a un plan bíblico. Los juegos y SoundCloud se ocultan de la navegación mientras las dinámicas pastorales se conservan. Se retiraron indicadores visibles de «prototipo» y «sin conexión» sin eliminar la lectura bíblica local.

**Validación automática de 1.10.1:** [M2, 162 pruebas y TypeScript aprobados](https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/42562061977) y [M5, APK compilada correctamente](https://github.com/cmiloarevalo-hash/Lago-1/actions/runs/42562062000). **No hay todavía evidencia de QA manual en Android para 1.10.1.**

**Aún no implementado:** acceso con Google, base de datos remota de correos, consentimiento de boletines y envío de noticias; publicación en tienda y enlace HTTPS universal para compartir versículos cuando el destinatario no tenga la app.

[Detalle completo, evidencias, diferencias de versión y bloqueos](docs/guia-pastoral/ESTADO_VERSION_ACTUAL.md).

## Publicación futura (no ejecutada)

- **Web pública:** https://headless-vffpmunurhz-apkcristianas-140d.wix-site-host.com/
- **Tienda inicial prevista:** Uptodown, **aún sin ficha aprobada de esta versión**.
- **Enlace corto elegido:** `https://tinyurl.com/GuiaPastoralBiblia`, **pendiente de creación/activación y verificación**; no usarlo todavía como descarga.
- **Contacto visible en la candidata:** **apkcristianas@gmail.com** (abre la aplicación de correo).

[Estado consolidado previo: guía y web Wix](docs/guia-pastoral/ESTADO_GUIA_Y_WEB_2026-11-09.md) · [Plan y ficha de Uptodown](docs/guia-pastoral/PUBLICACION_UPTODOWN.md) · [Historial de aceptación QA5](docs/r13/PROTOTIPO_ESTABLE_ACEPTADO_QA5.md) · [Actividad de lanzamiento #67](https://github.com/cmiloarevalo-hash/Lago-1/issues/67).
