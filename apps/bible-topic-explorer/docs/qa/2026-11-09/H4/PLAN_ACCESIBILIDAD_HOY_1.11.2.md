# Accesibilidad de Hoy con fuente grande (incidencia H4-19)

La APK 1.11.1 presentó recorte de la frase editorial «Qué bueno que estás aquí» cuando la fuente del sistema subió al 160% con una pantalla 360×740. El contenedor de la imagen tenía `height:175`, `overflow:'hidden'` y la tarjeta se superponía con `marginTop:-54`.

## Corrección en candidata 1.11.2

`TodayScreen` consulta `useWindowDimensions().fontScale`; desde **1.3** usa altura flexible para la imagen (`height:'auto', minHeight:175`) y elimina la superposición negativa de la tarjeta. A escala estándar, se conserva el diseño anterior. Esta adaptación no modifica los textos.

Referencia: [React Native useWindowDimensions](https://reactnative.dev/docs/usewindowdimensions), que actualiza el `fontScale` cuando cambian las preferencias del sistema.

## Prueba de aceptación pendiente

Instalar APK compilada desde el HEAD del código **posterior** a esta corrección. En H4 Android 13, verificar Hoy con `font_scale` **1.0, 1.6, 2.0** a **360×740** y **320×640**. Capturar pantalla y comprobar que el saludo completo aparece, sin superposición, texto cortado ni pérdida de navegación. Restaurar la escala original al terminar. No declarar el arreglo aprobado hasta observarlo en dispositivo.

Evidencia del fallo: [captura 1.11.1 al 160%](ux_font160_home.png) / [informe UX H4](INFORME_UX_H4_1.11.1.md).
