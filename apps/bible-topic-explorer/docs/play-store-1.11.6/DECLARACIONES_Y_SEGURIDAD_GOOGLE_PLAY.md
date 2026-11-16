# Play Console — respuestas preparadas con origen y nivel de certeza (v1.11.6)

## Base técnica comprobada
- Fuente: commit de `main` `896b72978b6eb4ad807007d33753a511ccf861ef`, versión 1.11.6/code18.
- Dependencias: Expo SDK57, React Native 0.86, expo-sqlite, expo-notifications, expo-document-picker, expo-file-system, expo-intent-launcher, expo-clipboard, RN WebView. No dependencias explícitas de Firebase Analytics, AdMob, Google Play Billing, auth ni backend en `package.json`.
- Persistencia local: `src/db/sqliteLocalPersistence.ts`, `src/db/localBackup.ts`; notificaciones locales voluntarias: `src/product/reminders.ts`.
- Plataforma: `com.lago.bibletopicexplorer`, Android targetSdk 36 confirmado en APK aprobada y ejecución ASUS; minSdk 24.
- Conclusión limitada: no se observó flujo propio de envío de datos personales a servidores. Las dependencias, permisos finales y tráfico de red requieren verificación binaria/manual antes de jurar el formulario.

## Formularios propuestos (NO presentados)

| Pregunta / tema | Propuesta | Confianza / acción |
|---|---|---|
| ¿La aplicación incluye anuncios? | NO | Alta para código app; comprobar permisos y SDK en AAB |
| ¿La aplicación es gratuita? | SÍ | Decisión del titular, versión 1.11.6 |
| ¿Tiene compras en la app? | NO | Alta: sin Billing |
| ¿Es necesario iniciar sesión? | NO | Alta: no hay flujo de login |
| Acceso para revisores | Completo, sin usuario ni contraseña | Alta |
| ¿Hay cuentas para eliminar? | NO, sin cuentas remotas | Alta |
| ¿Recopila datos de usuarios fuera del dispositivo? | **Propuesta: NO** | Pendiente auditar SDKs/tráfico del AAB real. Distinguir almacenamiento local de recolección remota |
| ¿Comparte datos con terceros? | **Propuesta: NO** desde funcionalidad propia | Pendiente auditoría binaria y clasificación de enlaces externos |
| ¿La información personal está cifrada en tránsito? | No hay transmisión propia de información local | Responder conforme al formulario final, no declarar cifrado inexistente |
| Eliminación de información local | El usuario puede borrar datos de la app o desinstalar; backup externo bajo control del usuario | Alta |
| Política de privacidad | Texto preparado, falta URL HTTPS pública estable y enlace interno | BLOQUEANTE |
| Notificaciones | Opcionales, locales y sujetas a permiso Android | Alta |
| Contenido | Lectura bíblica cristiana, textos religiosos y reflexión; contiene referencias a acontecimientos violentos presentes en el corpus | Para IARC, responder honestamente al cuestionario; nunca inventar clasificación |
| Público objetivo | Adultos y jóvenes, **grupos etarios a seleccionar por titular** | BLOQUEANTE si no definido; evitar selección de menores de 13 sin cumplimiento Families |
| Países / disponibilidad | Sin lista decidida; seleccionar legalmente por titular | Requiere Play Console |
| Declaración de app de noticias | No es una app periodística/noticiosa | Alta |
| Permisos sensibles | No se aprecia uso de SMS, registros de llamadas, ubicación precisa, cámara ni micrófono en código propio | Verificar manifiesto final |
| Archivos de usuario | Importación/selección/exportación voluntaria mediante proveedor de Android; sin subida automática propia | Confirmar manifests y UX |

## Matriz práctica de datos (para revisar formulario Data safety)

- Notas, diario y reflexiones: datos introducidos por el usuario, en SQLite local. **Procesados en dispositivo, sin envío propio identificado**.
- Favoritos, historial y progreso: almacenamiento local.
- Ajustes: apariencia, tamaño de letra, avisos y horario guardados localmente.
- Exportación JSON: opción manual hacia carpeta elegida. El desarrollador no recibe la copia.
- Notificaciones: el usuario concede permisos Android; se programan localmente.
- Enlaces externos y correo: apertura por gesto del usuario en apps externas. No equivale a recolectar directamente la información en los servidores del desarrollador.

La definición de "recopilar" en Data safety incluye transmisiones efectuadas por SDKs de terceros: https://support.google.com/googleplay/android-developer/answer/10787469 .

## Acciones aún necesarias para afirmar las declaraciones
1. Descomprimir AAB, revisar bibliotecas y manifiesto final: INTERNET, POST_NOTIFICATIONS, AD_ID u otros permisos.
2. Ejecutar app en dispositivo compatible y revisar tráfico y comportamientos con y sin conexión si es posible.
3. Comparar resultado con política de privacidad final.
4. Completar IARC y Público objetivo en la cuenta real; las respuestas deben corresponder a sus circunstancias y al contenido bíblico.
5. No llamar "ACEPTADO" a ningún formulario sin confirmación de Play Console.
