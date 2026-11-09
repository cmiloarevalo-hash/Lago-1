# Estado consolidado — Guía pastoral y página web

**Registro:** 9 de noviembre de 2026, Chile (America/Santiago).  
**Objeto:** traspaso de contexto a personas y agentes de IA que colaboren en el repositorio.  
**Alcance de esta integración:** **solo documentación**. No es un merge de código Android, ni aprobación editorial ni autorización de publicación de APK.

## 1. Qué ya existe

- **Sitio web público en Wix:** [Guía pastoral - Biblia](https://headless-vffpmunurhz-apkcristianas-140d.wix-site-host.com/). El sitio figura publicado en Wix. Aún no se ha confirmado que su enlace de descarga desde Uptodown funcione.
- **Ficha pública planificada para Uptodown:** [PUBLICACION_UPTODOWN.md](PUBLICACION_UPTODOWN.md). Contiene descripción de tres párrafos, apartado de imágenes, datos por confirmar, requisitos y pasos de publicación.
- **Actividad de coordinación:** [GitHub Issue #67](https://github.com/cmiloarevalo-hash/Lago-1/issues/67).
- **Instrucciones para IA:** [AGENTS.md](../../AGENTS.md) y [README](../../README.md).
- **Enlace corto seleccionado:** `https://tinyurl.com/GuiaPastoralBiblia` — **NO ACTIVO / NO VERIFICADO**. Solo nombre propuesto y registrado en la documentación. Si se crea, el destino recomendado es la página de Wix; verificar redirección antes de difundir.

## 2. Manuscrito de la guía pastoral

- Proyecto literario: **El camino de Jesús y sus enseñanzas**, 16 capítulos, para jóvenes y comunidades cristianas.
- Criterio editorial comunicado por el autor: conservar los párrafos y la voz del manuscrito existente; introducir únicamente complementos de claridad, contexto bíblico y enseñanza práctica cuando estén aprobados. No asumir que el lector conoce parábolas ni personajes.
- La versión de la guía que se incorpore a la APK debe ser la **aprobada expresamente por el autor**. No sustituir automáticamente el texto por una edición histórica.
- El **PR #68** declara una versión editorial **v1.30** de 16 capítulos y su documento fuente, pero permanece **draft** y no está fusionado a `main`; no deducir de su título que la APK final ya esté aceptada.

## 3. Estado del Android y conflictos de metadatos

| Recurso | Estado el 09-11-2026 | Precaución |
| --- | --- | --- |
| [PR #66](https://github.com/cmiloarevalo-hash/Lago-1/pull/66) | Draft con contenido pastoral anterior v1.0.1 | No mergearlo encima del contenido editorial más reciente sin conciliación |
| [PR #68](https://github.com/cmiloarevalo-hash/Lago-1/pull/68) | Draft v1.10 con guía v1.30; CI de compilación exitosa | QA real incompleta; APK firmada con clave debug, **no es release distribuible** |
| [PR #69](https://github.com/cmiloarevalo-hash/Lago-1/pull/69) | Draft v1.10.1, **basado en la rama de #68** (no directamente en `main`) | Pruebas manuales y firma de producción pendientes; no merge automático |
| APK de distribución | **Pendiente de revisión y autorización del autor** | No subir a Uptodown ni cambiar la descarga hasta autorización |

**Datos por conciliar antes de la publicación:** el borrador comercial usa **Guía pastoral - Biblia** y correo **cmiloarevalo@gmail.com** (visible en una candidata anterior), mientras el PR #68 declara **apkcristianas@gmail.com** y el PR #69 plantea el nombre **Biblia Reina-Valera 1909 - Guía Pastoral**. Estos cambios de identidad/contacto **no quedan aprobados por el mero hecho de estar escritos en una rama**. Confirmar contra APK final e instrucciones del autor antes de actualizar ficha, web o cuenta de Uptodown.

## 4. Secuencia de publicación acordada

1. Otra IA/equipo entrega APK definitiva y metadatos técnicos verificables.
2. Autor la revisa en Android: capítulos, referencias bíblicas, navegación, notas/datos, lectura offline, versión, firma y actualización.
3. Se concilian nombre público, contacto, descripción de tres párrafos y derechos/licencias.
4. El autor aporta **3 a 6 capturas reales**; idealmente 4–6.
5. Con autorización expresa, crear y enviar ficha Uptodown con APK aprobada.
6. Una vez aprobada la ficha, registrar su **URL real**.
7. Enlazar desde la **web Wix** a Uptodown; probar descarga e instalación de extremo a extremo.
8. Si se crea y verifica TinyURL, registrar dirección final, redirección y fecha. **No confundir un alias propuesto con enlace activo.**
9. Actualizar este registro, el documento canónico y el Issue #67 con evidencia de cada hito.

**Estado de este registro:** web publicada y documentación preparada; **sin lanzamiento de APK**. La integración documental a `main` no concede aprobación de código ni cierra las subtareas técnicas.

## 5. Disciplina de colaboración

- Cualquier IA que participe en la guía, la web o la publicación debe leer la ficha canónica y el Issue #67.
- No sobrescribir revisiones editoriales del autor ni alterar la instalación QA5.
- No afirmar que TinyURL funciona, que Uptodown tiene ficha pública ni que la firma de producción está lista hasta verificarlo.
- Mantener credenciales, tokens y claves de firma fuera del repositorio público.
- Usar `main` como referencia de documentación fusionada; mantener código experimental en sus PRs hasta pruebas y aprobación.
