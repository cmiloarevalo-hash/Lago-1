# Corrección candidata 1.11.2 para UX-H4-07

**Autoridad:** intervención del supervisor en PR #72 (borrador), sin modificar el contenido aprobado.

## Problema demostrado en H4

En 1.11.1, al editar una nota del versículo con Gboard abierto a 360×740, el `Modal` muestra el teclado pero **el editor completo, incluido «Guardar nota», queda debajo**. La nota se puede guardar únicamente tras ocultar manualmente el teclado. [Evidencia real 1.11.1](INFORME_UX_H4_1.11.1.md) y [captura](nota_teclado_estable.png).

## Hipótesis y parche acotado

La ventana modal usaba `KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':undefined}`; en Android el componente carecía de comportamiento de evitación. Se cambia a `behavior="padding"` para ambos sistemas, conservando el valor `softwareKeyboardLayoutMode="resize"` de Expo y los controles `Guardar nota`/`Cancelar edición` anteriores al campo.

Referencias técnicas: [Expo Keyboard handling](https://docs.expo.dev/guides/keyboard-handling/) y [React Native KeyboardAvoidingView](https://reactnative.dev/docs/keyboardavoidingview).

## Regresión exigida (NO presumir por CI)

1. Instalar APK candidata **1.11.2, versionCode 14** en emulador H4 sin borrar notas existentes; si las firmas impiden actualización, usar AVD clonada sin destruir datos.
2. En Leer → Génesis 1:1 → Nota → Agregar nota, abrir Gboard: comprobar visualmente que campo y **Guardar nota** queden accesibles a 360×740.
3. Escribir dos párrafos sin ocultar Gboard; pulsar **Guardar nota** con el teclado todavía visible; verificar persistencia en Biblioteca y tras relanzar app.
4. Repetir a 320×640, modo oscuro/Marino, 200% tamaño de lectura; confirmar ausencia de solapamientos.
5. Probar Android Atrás con cambios no guardados y cierre tras ocultar teclado, sin perder ni borrar notas involuntariamente.

**Situación:** esta nota documenta el cambio de código; no prueba éxito real hasta capturas del APK **1.11.2**. Mantener PR #72 en borrador y sin publicar en tiendas.
