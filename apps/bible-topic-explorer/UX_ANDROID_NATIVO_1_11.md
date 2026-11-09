# Investigación y rediseño UX Android — candidata 1.11.0

**Decisión del autor:** 09-11-2026. El contenido bíblico y pastoral está aprobado; se cambia exclusivamente su presentación e interacción. **La 1.10.1 se rechaza como línea de continuidad** ([PR #69 cerrada](https://github.com/cmiloarevalo-hash/Lago-1/pull/69)). Este trabajo deriva de **1.10.0**, [PR #68](https://github.com/cmiloarevalo-hash/Lago-1/pull/68), commit `a032c81460e9b24f523e58f23b49744c7988c28b`. No trasplantar las pantallas de 1.10.1.

## Objetivo

En Android, el lector debe poder leer sin ventanas invasivas, seleccionar **palabras exactas** con los marcadores nativos, identificar sin esfuerzo dónde están sus guardados, notas e historial, y editar sin que el teclado cubra los controles. Evitar menús redundantes y botones repetidos. Mantener el contenido, la Biblia RV1909 y la guía editorial v1.30 (16 capítulos), sin reescribir textos.

## Investigación técnica y decisiones

| Patrón | Lo que ofrece el sistema Android | Decisión de interfaz |
| --- | --- | --- |
| Navegación | Patrón de barra inferior, recomendado para **3–5 destinos principales** | Conservar **Hoy, Explorar, Leer, Biblioteca**. Los recursos pastorales, el diario y ajustes siguen en el menú secundario. No añadir más pestañas. |
| Selección y copia | React Native `Text selectable` activa selección nativa del sistema, marcadores y **Copiar** contextual | **Separar** el texto seleccionable del botón de acciones del versículo (48 dp). Eliminar la captura personalizada de pulsación larga y el campo de entrada usado para leer. El sistema copia exactamente la selección, sin teclado. |
| Compartir | `Share.share` usa la hoja de compartir del dispositivo | Mantener compartir en el menú de acciones del versículo; no inventar lista propia de apps. Se requiere app receptora instalada para el enlace `guiapastoralbiblia://`. |
| Escritura | `KeyboardAvoidingView` + ajuste del área de pantalla `resize` | Campos de notas y diario desplazables cuando aparece el teclado; no tapar botón Guardar. |
| Hora del recordatorio | Cuadro de selección de hora del sistema (`DateTimePickerAndroid`) | Una sola acción **Elegir hora**, con horario de 24 horas; sustituir las múltiples fichas de horas predeterminadas en Android. |
| Notificación local | Canales, permiso explícito, programación y reacción a notificación mediante `expo-notifications` | Solicitar permiso solo cuando la persona activa el aviso; abrir el **día pendiente del plan**. No usar tokens push ni servicios remotos. |
| Atrás | Botón/gesto Android y controlador de retroceso React Native | Mantener navegación a pantallas previas sin borrar datos, y confirmación de salida en raíz. No prometer animación predictiva si no se ha implementado. |
| Accesibilidad | Objetivos táctiles **al menos 48 dp**, etiquetas de acciones y contenido escalable | Los numerales de versículos son botones de 48 dp; el cuerpo bíblico no es un botón, sino texto seleccionable. Acciones diferenciadas por texto, no solo color. |

**Fuentes verificadas al diseñar:**

- [Android Developers: layouts y navegación](https://developer.android.com/design/ui/mobile/guides/layout-and-content/layout-and-nav-patterns)
- [Android Developers: accesibilidad y objetivo táctil 48 dp](https://developer.android.com/design/ui/mobile/guides/foundations/accessibility)
- [React Native: propiedad `Text.selectable`](https://reactnative.dev/docs/text)
- [Android Developers: copiar/pegar y confirmación nativa en Android 13+](https://developer.android.com/develop/ui/views/touch-and-input/copy-paste)
- [Android Developers: tratamiento `adjustResize` del teclado](https://developer.android.com/develop/ui/views/touch-and-input/keyboard-input/visibility)
- [React Native: KeyboardAvoidingView](https://reactnative.dev/docs/keyboardavoidingview)
- [Expo SDK 57: selector nativo de fecha/hora](https://docs.expo.dev/versions/v57.0.0/sdk/date-time-picker/)
- [Expo SDK 57: notificaciones locales](https://docs.expo.dev/versions/v57.0.0/sdk/notifications/)

## Nueva organización de la información

```text
NAVEGACIÓN INFERIOR (4 destinos)
  Hoy         → Versículo del día + tres accesos claros, sin repetir tarjetas
  Explorar    → Temas / búsqueda → pasaje bíblico seleccionable
  Leer        → Libros → capítulos → texto nativo seleccionable
  Biblioteca  → Continuar lectura
                Guardados (pantalla propia: nombre, tema, color)
                Notas bíblicas (pantalla propia)
                Actividad reciente (fecha, hora local y capítulo)
                Historial rápido (al final)

MENÚ SECUNDARIO
  Planes de lectura · Temas bíblicos
  Guía pastoral v1.30 · Dinámicas pastorales
  Mi diario de reflexiones (pantalla propia, orden por año)
  Mis libros PDF/EPUB · Ajustes · Fuentes y contacto

AJUSTES
  Apariencia · Tamaño de letra
  Recordatorio ligado a plan, con nombre propio y selector nativo de hora
  Ayudas iniciales · Respaldo privado · Fuentes
```

Las colecciones personales y el diario conservan SQLite local. Se añaden tablas de **metadatos**, sin alterar ni reemplazar el corpus RV1909 ni las tablas previas. Los destacados por versículo se mantienen; la clasificación de guardados no exige conexión.

## Qué es realmente nativo y qué no

- **Nativo del dispositivo:** selección/copia contextual de Android, hoja compartir, cuadro de elegir hora, teclado en pantalla, permisos/canales/avisos locales, acción de volver y la apertura de correo en la app predeterminada.
- **Interfaces React Native que invocan servicios Android:** `Text`, `Share`, `KeyboardAvoidingView`, `BackHandler`, `Linking`, `expo-notifications`, `@react-native-community/datetimepicker`.
- **No nativo y mantenido dentro de la aplicación:** catálogo de temas y libros bíblicos, guía pastoral, diarios, tarjetas/colores, clasificación por tema, seguimiento de planes, horarios guardados y persistencia SQLite. El aspecto no puede describirse como \"Material 3 completo\" sin migrar efectivamente todos los componentes.
- **No incorporado:** cuenta Google, almacenamiento remoto de correos, campañas de noticias, activación de dominio HTTPS para invitaciones, firma de distribución ni publicación en tiendas.

## Criterios para aceptar visualmente una APK

1. En Mateo/Salmos/Juan, mantener pulsada una **palabra**, arrastrar los marcadores y copiar un fragmento exacto **sin mostrar teclado**. El número del versículo abre acciones sin bloquear la selección.
2. Acciones de nota, destacado, guardado y compartir operan de forma independiente; Android muestra apps reales en el panel Compartir.
3. Al escribir una nota o reflexión larga, teclado visible, texto y Guardar accesibles. Volver atrás no elimina el escrito por accidente.
4. Biblioteca tiene 3 entradas claras, un historial rápido y pantallas internas de guardados/notas/actividad; los horarios corresponden a la zona del teléfono.
5. Mi diario aparece en menú hamburguesa, no como campo mezclado entre guardados. La reflexión anterior conserva su contenido.
6. Recordatorio: elegir plan y nombre, abrir la hora con un cuadro nativo Android, confirmar activación y pulsar notificación para abrir el día pendiente.
7. Verificar fuentes legibles a 100%, 160% y 200% y objetivos táctiles >=48 dp. Capturar pantallas de esta misma versión en Android real.
8. Probar migración con datos reales **sin desinstalar la versión anterior** y verificar compatibilidad de firma antes de cualquier actualización.

**Evidencia de control:** CI M2 (TypeScript, pruebas, Bundle Android), M5 (APK + checksum), QA Android real; estos pasos son distintos. Una compilación exitosa **no significa aprobación de UX ni autorización para publicar**.
