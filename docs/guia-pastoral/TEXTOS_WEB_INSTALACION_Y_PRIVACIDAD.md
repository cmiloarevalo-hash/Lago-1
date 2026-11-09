# Textos listos para revisión — web pública e instalación de APK

**Proyecto:** Guía pastoral - Biblia · **Registro:** 2026-11-09 (Chile)  
**Estado:** **BORRADOR INTERNO, NO PUBLICAR SIN REVISIÓN Y AUTORIZACIÓN DEL AUTOR.**  
**Destino editorial:** página Wix ya publicada: https://headless-vffpmunurhz-apkcristianas-140d.wix-site-host.com/  
**Fuente de verdad comercial:** [PUBLICACION_UPTODOWN.md](PUBLICACION_UPTODOWN.md) · **QA:** [CONTROL_QA_APK_UPTODOWN.md](CONTROL_QA_APK_UPTODOWN.md) · **Tarea:** [#67](https://github.com/cmiloarevalo-hash/Lago-1/issues/67).

## 1. Texto breve para la página web

### Título

**Guía pastoral - Biblia**

### Presentación

Lee la Biblia Reina-Valera 1909 y descubre las enseñanzas de Jesús mediante 16 capítulos de formación cristiana para jóvenes, familias y comunidades. Los capítulos presentan referencias del Antiguo y Nuevo Testamento, explican pasajes bíblicos y ayudan a llevar el amor, la oración, la misericordia y la esperanza a la vida cotidiana.

### Estado de descarga: no disponible aún

**Descarga para Android: próximamente en Uptodown.**

Este proyecto todavía está preparando su primera APK pública. Cuando se apruebe la versión definitiva, el botón **«Descargar en Uptodown»** se enlazará a la **ficha oficial verificada**. No usar la URL de GitHub ni un archivo de pruebas como alternativa.

**Página web existente:** https://headless-vffpmunurhz-apkcristianas-140d.wix-site-host.com/  
**Enlace corto previsto:** https://tinyurl.com/GuiaPastoralBiblia — **NO ACTIVADO NI VERIFICADO**.

## 2. Instrucciones de instalación (publicar solo con URL oficial)

1. Desde tu teléfono Android, abre la **ficha oficial de Guía pastoral - Biblia en Uptodown**; usa el botón de descarga de esa ficha (enlace pendiente).
2. Descarga el archivo APK de la versión aprobada. Comprueba que el nombre de la aplicación y el desarrollador coincidan con los informados en la ficha.
3. Abre el archivo descargado. Si Android solicita permiso para instalar aplicaciones desde esa fuente, revisa la advertencia y autorízalo **solo si confías en la procedencia del archivo**. No es necesario desactivar mecanismos de protección del teléfono.
4. Pulsa **Instalar**, abre la aplicación y revisa la sección **Acerca de** para consultar la versión y el contacto de soporte.
5. Si la instalación falla, comprueba el espacio disponible y la compatibilidad del dispositivo. No sustituyas una instalación de QA que contenga datos personales sin un respaldo y un procedimiento de actualización validado.

**Seguridad:** los menús pueden variar según fabricante y versión de Android. Descarga únicamente desde la ficha oficial confirmada. Evita archivos reempaquetados compartidos por terceros.

## 3. Borrador de política de privacidad — REQUIERE VERIFICACIÓN DE APK Y RESPONSABLE

> **No presentar este apartado como política vigente hasta confirmar comportamiento real, permisos, responsable del tratamiento, versión y URL de contacto.** El texto se infiere de componentes de la candidata #69; puede ser inexacto para una compilación posterior.

### Política de privacidad de Guía pastoral - Biblia

**Última revisión:** pendiente de aprobación y publicación.

**Responsable y contacto.** La aplicación es desarrollada por Camilo Arévalo. Correo de soporte **por confirmar**: la candidata reciente muestra `apkcristianas@gmail.com`, mientras una edición anterior muestra `cmiloarevalo@gmail.com`. La página pública debe indicar **solo el correo aprobado**.

**Información que usa la aplicación.** En la candidata revisada, la Biblia y la guía pastoral pueden consultarse localmente. Las notas, pasajes guardados, resaltados, reflexiones, historial, preferencias y progreso se almacenan mediante bases de datos locales del dispositivo. Si el usuario importa libros o crea copias de respaldo, debe controlar dónde guarda o comparte esos archivos.

**Recordatorios.** La aplicación puede solicitar autorización para mostrar notificaciones locales de lectura. Su activación es opcional y puede cambiarse desde los ajustes de la aplicación o del dispositivo. Según el código revisado, la programación no requiere una suscripción ni un servicio remoto de envío de notificaciones; verificar este comportamiento en la APK final.

**Servicios y sitios externos.** Algunas funciones de contacto, atribuciones bibliográficas, compartir y enlaces web pueden abrir aplicaciones o servicios de terceros. Si una persona envía un correo de soporte, su proveedor de correo procesará ese mensaje según sus propias condiciones. La aplicación no puede controlar las políticas de privacidad de los servicios externos.

**Almacenamiento y eliminación.** La información personal guardada localmente permanece en el dispositivo hasta que el usuario la borre por medios disponibles o elimine los datos de la aplicación. Desinstalar la aplicación puede eliminar los datos locales; no prometer recuperación automática ni sincronización sin verificarla.

**Datos de menores y seguridad.** La aplicación está orientada también a usuarios jóvenes. No se deben pedir en la ficha datos sensibles innecesarios; las capturas de pantalla públicas no deben exponer datos o escritos personales.

**Comprobaciones pendientes antes de aprobar el texto:** permisos reales del manifiesto; presencia o ausencia de telemetría y comunicaciones de red; tratamiento de enlaces WebView; copia de seguridad local y eliminación; clasificación de edad; identidad/correo oficiales; mecanismo de actualización; servicios de terceros que pudieran introducirse en el release firmado.

## 4. Definiciones técnicas ya comprobadas en código, NO validadas sobre APK final

| Componente | Evidencia en candidata #69 | Límite |
| --- | --- | --- |
| Biblioteca, notas, resaltados, diario, preferencias | `src/db/sqliteLocalPersistence.ts` define tablas SQLite de almacenamiento local | No es prueba de comportamiento runtime del APK |
| Recordatorios | `src/product/reminders.ts` usa notificaciones locales programadas | Confirmar permiso en Android final |
| Dependencias | `package.json` incluye Expo SQLite, Notificaciones y manejo de documentos | No equivale a auditoría integral de tráfico |
| Licencias | `apps/bible-topic-explorer/LICENSE` contiene un aviso MIT de **650 Industries/Expo** | **No asumir que otorga licencia MIT a la aplicación completa o sus textos** |
| Nombre/correo | PR #69 declara `Biblia Reina-Valera 1909 - Guía Pastoral` y `apkcristianas@gmail.com` | Falta cotejar con decisión del autor y página Wix |
| Firma APK | #68 señaló firma de debug y #69 no documenta una firma de producción aprobada | **No publicar** hasta certificado de producción validado |

## 5. Lista de liberación de estos textos

- [ ] Confirmar que el nombre y correo de soporte coinciden en APK, web y Uptodown.
- [ ] Confirmar que no existen cuentas, publicidad, compras o recolección de telemetría omitidas del borrador.
- [ ] Confirmar versión, permisos, almacenamiento y configuración de copias locales de la APK aprobada.
- [ ] Redactar/validar licencia de distribución del proyecto y créditos de terceros (el archivo Expo MIT no basta).
- [ ] Autor aprueba expresamente el contenido de esta página y la política de privacidad.
- [ ] Publicar la página de privacidad (o sección pública con URL estable) y registrar su dirección real.
- [ ] Añadir enlace oficial de Uptodown **solo cuando exista y haya sido comprobado**.
- [ ] Verificar en un teléfono Android la web, la política, el botón y la descarga.

## 6. Registro de alcance

Este archivo **no cambia el sitio de Wix** ni la aplicación Android; contiene textos y reglas para su revisión. Una publicación efectiva requiere decisión y aprobación del autor. En particular, no declarar activo el enlace TinyURL ni insinuar que Uptodown ofrece ya la descarga.
