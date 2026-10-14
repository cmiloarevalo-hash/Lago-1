# ATLAS EDITORIAL DE LA U 1.3 — MAPA Y CONTENIDOS COMPLETOS

**Fecha de inventario:** 14 de octubre de 2026. **Estado:** borrador editorial creado con apoyo de IA; revisión del Product Owner y del Supervisor pendientes.

**Base verificada:** `feat/r13-p2-topic-ui @ e3cea7bc360c7fc97187639ca2f72b0c046d6a4a`. Rama documental `docs/r13-atlas-editorial-20261014`.

**Modo de uso:** edite el texto bajo cada `TEXTO EDITABLE`, pero conserve `ID ESTRUCTURAL — NO EDITAR` y cada clave `#campo`. El TSV localiza el valor en el código. No se ha modificado la aplicación ni se han exportado datos privados o el corpus RV1909.


## 0. Árbol comprobado y estados de navegación

```text
LA U 1.3
├─ HOY → bienvenida → versículo rotativo → accesos → planes/explorar/biblioteca
├─ EXPLORAR → familias → A–Z → 100 temas → 23 fichas con pasajes → lector
├─ LEER → RV1909 → Antiguo/Nuevo Testamento → libro → capítulo → versículo
│             └─ notas / resaltados / referencias guardadas (personales, no exportados)
├─ BIBLIOTECA → referencias / notas / resaltados / reflexión / historial
└─ MENÚ ☰ (7 destinos desde secondaryMenu.ts)
   ├─ Planes de lectura → 4 planes × 7 días
   ├─ Temas bíblicos → Explorar
   ├─ Guía pastoral → 8 temas
   ├─ Dinámicas y juegos → 20 dinámicas → 3 modos de juego
   ├─ SoundCloud · música → 3 enlaces externos
   ├─ Mis libros PDF/EPUB → índice / lector local (archivos privados omitidos)
   └─ Ajustes → apariencia / tamaño / recordatorio / backup / privacidad
NO ACCESIBLES DESDE EL MENÚ ACTUAL: Cancionero, fichas musicales, YouTube y Spotify.
```

Estados: `VISIBLE_CODIGO` = ruta conectada en `App.tsx`/menú, sin prueba física actual; `OCULTO_SIN_RUTA` = datos/componente presente sin acceso en el menú; `SIN_TEXTO` = ficha pendiente; `PERSONAL_NO_EXPORTADO` = datos privados excluidos.

## 1. Hoy · 14 lecturas de rotación


### Lectura 1 · hoy/lectura-01

**ID ESTRUCTURAL — NO EDITAR:** `hoy/lectura-01`
**Ruta:** Hoy → Versículo diario → rotación 1
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/today.ts`

**REFERENCIA** · `hoy/lectura-01#referencia` — TEXTO EDITABLE
Salmos 23:1

**CATEGORIA** · `hoy/lectura-01#categoria` — TEXTO EDITABLE
Paz

**PROMPT** · `hoy/lectura-01#prompt` — TEXTO EDITABLE
Lee el salmo completo y considera qué significa el cuidado.


### Lectura 2 · hoy/lectura-02

**ID ESTRUCTURAL — NO EDITAR:** `hoy/lectura-02`
**Ruta:** Hoy → Versículo diario → rotación 2
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/today.ts`

**REFERENCIA** · `hoy/lectura-02#referencia` — TEXTO EDITABLE
Mateo 6:34

**CATEGORIA** · `hoy/lectura-02#categoria` — TEXTO EDITABLE
Paz

**PROMPT** · `hoy/lectura-02#prompt` — TEXTO EDITABLE
Lee el contexto antes de pensar en tu día.


### Lectura 3 · hoy/lectura-03

**ID ESTRUCTURAL — NO EDITAR:** `hoy/lectura-03`
**Ruta:** Hoy → Versículo diario → rotación 3
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/today.ts`

**REFERENCIA** · `hoy/lectura-03#referencia` — TEXTO EDITABLE
Filipenses 4:6

**CATEGORIA** · `hoy/lectura-03#categoria` — TEXTO EDITABLE
Consuelo

**PROMPT** · `hoy/lectura-03#prompt` — TEXTO EDITABLE
Observa cómo se propone afrontar la inquietud.


### Lectura 4 · hoy/lectura-04

**ID ESTRUCTURAL — NO EDITAR:** `hoy/lectura-04`
**Ruta:** Hoy → Versículo diario → rotación 4
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/today.ts`

**REFERENCIA** · `hoy/lectura-04#referencia` — TEXTO EDITABLE
Proverbios 3:5

**CATEGORIA** · `hoy/lectura-04#categoria` — TEXTO EDITABLE
Propósito

**PROMPT** · `hoy/lectura-04#prompt` — TEXTO EDITABLE
Lee los versos cercanos y piensa en la confianza.


### Lectura 5 · hoy/lectura-05

**ID ESTRUCTURAL — NO EDITAR:** `hoy/lectura-05`
**Ruta:** Hoy → Versículo diario → rotación 5
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/today.ts`

**REFERENCIA** · `hoy/lectura-05#referencia` — TEXTO EDITABLE
Juan 15:12

**CATEGORIA** · `hoy/lectura-05#categoria` — TEXTO EDITABLE
Amor

**PROMPT** · `hoy/lectura-05#prompt` — TEXTO EDITABLE
Lee el capítulo y observa la invitación al amor.


### Lectura 6 · hoy/lectura-06

**ID ESTRUCTURAL — NO EDITAR:** `hoy/lectura-06`
**Ruta:** Hoy → Versículo diario → rotación 6
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/today.ts`

**REFERENCIA** · `hoy/lectura-06#referencia` — TEXTO EDITABLE
Romanos 12:12

**CATEGORIA** · `hoy/lectura-06#categoria` — TEXTO EDITABLE
Fortaleza

**PROMPT** · `hoy/lectura-06#prompt` — TEXTO EDITABLE
Considera el contexto de la perseverancia.


### Lectura 7 · hoy/lectura-07

**ID ESTRUCTURAL — NO EDITAR:** `hoy/lectura-07`
**Ruta:** Hoy → Versículo diario → rotación 7
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/today.ts`

**REFERENCIA** · `hoy/lectura-07#referencia` — TEXTO EDITABLE
Isaías 41:10

**CATEGORIA** · `hoy/lectura-07#categoria` — TEXTO EDITABLE
Esperanza

**PROMPT** · `hoy/lectura-07#prompt` — TEXTO EDITABLE
Lee el contexto histórico antes de aplicarlo a hoy.


### Lectura 8 · hoy/lectura-08

**ID ESTRUCTURAL — NO EDITAR:** `hoy/lectura-08`
**Ruta:** Hoy → Versículo diario → rotación 8
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/today.ts`

**REFERENCIA** · `hoy/lectura-08#referencia` — TEXTO EDITABLE
Salmos 46:1

**CATEGORIA** · `hoy/lectura-08#categoria` — TEXTO EDITABLE
Fortaleza

**PROMPT** · `hoy/lectura-08#prompt` — TEXTO EDITABLE
Lee el salmo completo para apreciar el lenguaje de refugio.


### Lectura 9 · hoy/lectura-09

**ID ESTRUCTURAL — NO EDITAR:** `hoy/lectura-09`
**Ruta:** Hoy → Versículo diario → rotación 9
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/today.ts`

**REFERENCIA** · `hoy/lectura-09#referencia` — TEXTO EDITABLE
1 Tesalonicenses 5:18

**CATEGORIA** · `hoy/lectura-09#categoria` — TEXTO EDITABLE
Gratitud

**PROMPT** · `hoy/lectura-09#prompt` — TEXTO EDITABLE
Lee también los versos cercanos para comprender la exhortación.


### Lectura 10 · hoy/lectura-10

**ID ESTRUCTURAL — NO EDITAR:** `hoy/lectura-10`
**Ruta:** Hoy → Versículo diario → rotación 10
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/today.ts`

**REFERENCIA** · `hoy/lectura-10#referencia` — TEXTO EDITABLE
Eclesiastés 4:9

**CATEGORIA** · `hoy/lectura-10#categoria` — TEXTO EDITABLE
Amistad

**PROMPT** · `hoy/lectura-10#prompt` — TEXTO EDITABLE
Lee el contexto sobre el acompañamiento y el trabajo compartido.


### Lectura 11 · hoy/lectura-11

**ID ESTRUCTURAL — NO EDITAR:** `hoy/lectura-11`
**Ruta:** Hoy → Versículo diario → rotación 11
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/today.ts`

**REFERENCIA** · `hoy/lectura-11#referencia` — TEXTO EDITABLE
Efesios 4:32

**CATEGORIA** · `hoy/lectura-11#categoria` — TEXTO EDITABLE
Perdón

**PROMPT** · `hoy/lectura-11#prompt` — TEXTO EDITABLE
Considera la compasión junto al contexto de la carta.


### Lectura 12 · hoy/lectura-12

**ID ESTRUCTURAL — NO EDITAR:** `hoy/lectura-12`
**Ruta:** Hoy → Versículo diario → rotación 12
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/today.ts`

**REFERENCIA** · `hoy/lectura-12#referencia` — TEXTO EDITABLE
2 Corintios 1:4

**CATEGORIA** · `hoy/lectura-12#categoria` — TEXTO EDITABLE
Consuelo

**PROMPT** · `hoy/lectura-12#prompt` — TEXTO EDITABLE
Lee el capítulo para comprender de dónde nace el consuelo.


### Lectura 13 · hoy/lectura-13

**ID ESTRUCTURAL — NO EDITAR:** `hoy/lectura-13`
**Ruta:** Hoy → Versículo diario → rotación 13
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/today.ts`

**REFERENCIA** · `hoy/lectura-13#referencia` — TEXTO EDITABLE
Salmos 121:2

**CATEGORIA** · `hoy/lectura-13#categoria` — TEXTO EDITABLE
Esperanza

**PROMPT** · `hoy/lectura-13#prompt` — TEXTO EDITABLE
Recorre el salmo completo sin aislar una promesa.


### Lectura 14 · hoy/lectura-14

**ID ESTRUCTURAL — NO EDITAR:** `hoy/lectura-14`
**Ruta:** Hoy → Versículo diario → rotación 14
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/today.ts`

**REFERENCIA** · `hoy/lectura-14#referencia` — TEXTO EDITABLE
Colosenses 3:14

**CATEGORIA** · `hoy/lectura-14#categoria` — TEXTO EDITABLE
Amor

**PROMPT** · `hoy/lectura-14#prompt` — TEXTO EDITABLE
Relaciona el verso con la convivencia que describe el pasaje.

**Dinámica:** `readingForDate` rota por la fecha local, y `TodayScreen` carga el texto del versículo desde SQLite. La cita bíblica no se transcribe.

## 2. Explorar · 100 temas y fichas editoriales

Los 100 IDs provienen de `src/product/topics.ts`; se verificaron 23 registros desarrollados en `conceptPreviews.ts`, no 100. Los demás muestran **SIN TEXTO EDITORIAL AÚN** para no inventar contenidos.

**Familias:** Dios y fe · Amor y relaciones · Perdón y restauración · Vida interior · Dificultades y emociones · Oración y práctica espiritual · Carácter y conducta · Decisiones y vida cotidiana · Biblia y comprensión · Esperanza y vida cristiana

### Dios · tema/dios

**ID ESTRUCTURAL — NO EDITAR:** `tema/dios`
**Ruta:** Explorar → Dios y fe → Dios
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/dios#titulo` — TEXTO EDITABLE
Dios

**FAMILIA** · `tema/dios#familia` — TEXTO EDITABLE
Dios y fe

**ID ORIGINAL** · `tema/dios#id_original` — TEXTO EDITABLE
dios

**LETRA AZ** · `tema/dios#letra_az` — TEXTO EDITABLE
D

**ALIAS** · `tema/dios#alias` — TEXTO EDITABLE
Señor · Jehová

**RELACIONADOS** · `tema/dios#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/dios#subtema` — TEXTO EDITABLE
¿Quién es Dios para ti?

**RESENA** · `tema/dios#resena` — TEXTO EDITABLE
¿Cómo es Dios y por qué tantas personas hablan de él? Estos pasajes muestran cómo la Biblia lo presenta y nos invitan a hacer nuestras propias preguntas.

**ADVERTENCIA PASTORAL** · `tema/dios#advertencia_pastoral` — TEXTO EDITABLE
No usar Hch 17 como aprobación total de cultos locales

**ESTADO REVISION** · `tema/dios#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/dios#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/dios#pasaje_1_referencia` — TEXTO EDITABLE
Deuteronomio 6:4–5

**PASAJE 1 RATIONALE** · `tema/dios#pasaje_1_rationale` — TEXTO EDITABLE
Descubre cómo se habla de amar a Dios con todo el corazón.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/dios#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
4, 5

**PASAJE 2 REFERENCIA** · `tema/dios#pasaje_2_referencia` — TEXTO EDITABLE
Hechos 17:24–28

**PASAJE 2 RATIONALE** · `tema/dios#pasaje_2_rationale` — TEXTO EDITABLE
Pablo conversa sobre Dios con personas que tenían otras creencias.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/dios#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
24, 25, 26, 27, 28


### Jesús · tema/jesus

**ID ESTRUCTURAL — NO EDITAR:** `tema/jesus`
**Ruta:** Explorar → Dios y fe → Jesús
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/jesus#titulo` — TEXTO EDITABLE
Jesús

**FAMILIA** · `tema/jesus#familia` — TEXTO EDITABLE
Dios y fe

**ID ORIGINAL** · `tema/jesus#id_original` — TEXTO EDITABLE
jesus

**LETRA AZ** · `tema/jesus#letra_az` — TEXTO EDITABLE
J

**ALIAS** · `tema/jesus#alias` — TEXTO EDITABLE
Cristo · Jesucristo

**RELACIONADOS** · `tema/jesus#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/jesus#subtema` — TEXTO EDITABLE
¿Quién es Jesús?

**RESENA** · `tema/jesus#resena` — TEXTO EDITABLE
Muchos conocen su nombre, pero ¿qué decía Jesús sobre sí mismo? Conoce lo que pensaban sus amigos y cómo empieza el Evangelio de Juan.

**ADVERTENCIA PASTORAL** · `tema/jesus#advertencia_pastoral` — TEXTO EDITABLE
Marcos incluye malentendido de Pedro

**ESTADO REVISION** · `tema/jesus#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/jesus#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/jesus#pasaje_1_referencia` — TEXTO EDITABLE
Marcos 8:27–31

**PASAJE 1 RATIONALE** · `tema/jesus#pasaje_1_rationale` — TEXTO EDITABLE
Jesús pregunta a sus amigos quién creen que es.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/jesus#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
27, 28, 29, 30, 31

**PASAJE 2 REFERENCIA** · `tema/jesus#pasaje_2_referencia` — TEXTO EDITABLE
Juan 1:1–14

**PASAJE 2 RATIONALE** · `tema/jesus#pasaje_2_rationale` — TEXTO EDITABLE
Juan presenta a Jesús y explica qué significa su llegada.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/jesus#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14


### Espíritu Santo · tema/espiritu-santo

**ID ESTRUCTURAL — NO EDITAR:** `tema/espiritu-santo`
**Ruta:** Explorar → Dios y fe → Espíritu Santo
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/espiritu-santo#titulo` — TEXTO EDITABLE
Espíritu Santo

**FAMILIA** · `tema/espiritu-santo#familia` — TEXTO EDITABLE
Dios y fe

**ID ORIGINAL** · `tema/espiritu-santo#id_original` — TEXTO EDITABLE
espiritu-santo

**LETRA AZ** · `tema/espiritu-santo#letra_az` — TEXTO EDITABLE
E

**ALIAS** · `tema/espiritu-santo#alias` — TEXTO EDITABLE
Espíritu de Dios

**RELACIONADOS** · `tema/espiritu-santo#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/espiritu-santo#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/espiritu-santo#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/espiritu-santo#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/espiritu-santo#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### fe · tema/fe

**ID ESTRUCTURAL — NO EDITAR:** `tema/fe`
**Ruta:** Explorar → Dios y fe → fe
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/fe#titulo` — TEXTO EDITABLE
fe

**FAMILIA** · `tema/fe#familia` — TEXTO EDITABLE
Dios y fe

**ID ORIGINAL** · `tema/fe#id_original` — TEXTO EDITABLE
fe

**LETRA AZ** · `tema/fe#letra_az` — TEXTO EDITABLE
F

**ALIAS** · `tema/fe#alias` — TEXTO EDITABLE
creer · creyó · creyeron

**RELACIONADOS** · `tema/fe#relacionados` — TEXTO EDITABLE
confianza · creer

**SUBTEMA** · `tema/fe#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/fe#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/fe#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/fe#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### confianza · tema/confianza

**ID ESTRUCTURAL — NO EDITAR:** `tema/confianza`
**Ruta:** Explorar → Dios y fe → confianza
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/confianza#titulo` — TEXTO EDITABLE
confianza

**FAMILIA** · `tema/confianza#familia` — TEXTO EDITABLE
Dios y fe

**ID ORIGINAL** · `tema/confianza#id_original` — TEXTO EDITABLE
confianza

**LETRA AZ** · `tema/confianza#letra_az` — TEXTO EDITABLE
C

**ALIAS** · `tema/confianza#alias` — TEXTO EDITABLE
confiar · confió

**RELACIONADOS** · `tema/confianza#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/confianza#subtema` — TEXTO EDITABLE
Cuando no sabes qué hacer

**RESENA** · `tema/confianza#resena` — TEXTO EDITABLE
Hay días en que todo parece incierto. Estos textos invitan a reconocer lo que sentimos y pensar en dónde encontramos apoyo.

**ADVERTENCIA PASTORAL** · `tema/confianza#advertencia_pastoral` — TEXTO EDITABLE
No reemplaza decisiones prudentes ni ayuda profesional

**ESTADO REVISION** · `tema/confianza#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/confianza#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/confianza#pasaje_1_referencia` — TEXTO EDITABLE
Salmos 56:3–4

**PASAJE 1 RATIONALE** · `tema/confianza#pasaje_1_rationale` — TEXTO EDITABLE
Una persona reconoce que siente miedo y busca apoyo en Dios.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/confianza#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
3, 4

**PASAJE 2 REFERENCIA** · `tema/confianza#pasaje_2_referencia` — TEXTO EDITABLE
Mateo 6:25–34

**PASAJE 2 RATIONALE** · `tema/confianza#pasaje_2_rationale` — TEXTO EDITABLE
Jesús habla de las preocupaciones de cada día.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/confianza#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
25, 26, 27, 28, 29, 30, 31, 32, 33, 34


### gracia · tema/gracia

**ID ESTRUCTURAL — NO EDITAR:** `tema/gracia`
**Ruta:** Explorar → Dios y fe → gracia
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/gracia#titulo` — TEXTO EDITABLE
gracia

**FAMILIA** · `tema/gracia#familia` — TEXTO EDITABLE
Dios y fe

**ID ORIGINAL** · `tema/gracia#id_original` — TEXTO EDITABLE
gracia

**LETRA AZ** · `tema/gracia#letra_az` — TEXTO EDITABLE
G

**ALIAS** · `tema/gracia#alias` — TEXTO EDITABLE
favor

**RELACIONADOS** · `tema/gracia#relacionados` — TEXTO EDITABLE
misericordia · salvación

**SUBTEMA** · `tema/gracia#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/gracia#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/gracia#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/gracia#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### salvación · tema/salvacion

**ID ESTRUCTURAL — NO EDITAR:** `tema/salvacion`
**Ruta:** Explorar → Dios y fe → salvación
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/salvacion#titulo` — TEXTO EDITABLE
salvación

**FAMILIA** · `tema/salvacion#familia` — TEXTO EDITABLE
Dios y fe

**ID ORIGINAL** · `tema/salvacion#id_original` — TEXTO EDITABLE
salvacion

**LETRA AZ** · `tema/salvacion#letra_az` — TEXTO EDITABLE
S

**ALIAS** · `tema/salvacion#alias` — TEXTO EDITABLE
salvar · salvó · salvos

**RELACIONADOS** · `tema/salvacion#relacionados` — TEXTO EDITABLE
redención · vida eterna

**SUBTEMA** · `tema/salvacion#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/salvacion#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/salvacion#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/salvacion#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### evangelio · tema/evangelio

**ID ESTRUCTURAL — NO EDITAR:** `tema/evangelio`
**Ruta:** Explorar → Dios y fe → evangelio
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/evangelio#titulo` — TEXTO EDITABLE
evangelio

**FAMILIA** · `tema/evangelio#familia` — TEXTO EDITABLE
Dios y fe

**ID ORIGINAL** · `tema/evangelio#id_original` — TEXTO EDITABLE
evangelio

**LETRA AZ** · `tema/evangelio#letra_az` — TEXTO EDITABLE
E

**ALIAS** · `tema/evangelio#alias` — TEXTO EDITABLE
buenas nuevas

**RELACIONADOS** · `tema/evangelio#relacionados` — TEXTO EDITABLE
Cristo · salvación

**SUBTEMA** · `tema/evangelio#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/evangelio#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/evangelio#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/evangelio#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### reino de Dios · tema/reino-de-dios

**ID ESTRUCTURAL — NO EDITAR:** `tema/reino-de-dios`
**Ruta:** Explorar → Dios y fe → reino de Dios
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/reino-de-dios#titulo` — TEXTO EDITABLE
reino de Dios

**FAMILIA** · `tema/reino-de-dios#familia` — TEXTO EDITABLE
Dios y fe

**ID ORIGINAL** · `tema/reino-de-dios#id_original` — TEXTO EDITABLE
reino-de-dios

**LETRA AZ** · `tema/reino-de-dios#letra_az` — TEXTO EDITABLE
R

**ALIAS** · `tema/reino-de-dios#alias` — TEXTO EDITABLE
reino de los cielos

**RELACIONADOS** · `tema/reino-de-dios#relacionados` — TEXTO EDITABLE
reino · justicia

**SUBTEMA** · `tema/reino-de-dios#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/reino-de-dios#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/reino-de-dios#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/reino-de-dios#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### voluntad de Dios · tema/voluntad-de-dios

**ID ESTRUCTURAL — NO EDITAR:** `tema/voluntad-de-dios`
**Ruta:** Explorar → Dios y fe → voluntad de Dios
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/voluntad-de-dios#titulo` — TEXTO EDITABLE
voluntad de Dios

**FAMILIA** · `tema/voluntad-de-dios#familia` — TEXTO EDITABLE
Dios y fe

**ID ORIGINAL** · `tema/voluntad-de-dios#id_original` — TEXTO EDITABLE
voluntad-de-dios

**LETRA AZ** · `tema/voluntad-de-dios#letra_az` — TEXTO EDITABLE
V

**ALIAS** · `tema/voluntad-de-dios#alias` — TEXTO EDITABLE
voluntad del Señor

**RELACIONADOS** · `tema/voluntad-de-dios#relacionados` — TEXTO EDITABLE
obediencia · mandamientos

**SUBTEMA** · `tema/voluntad-de-dios#subtema` — TEXTO EDITABLE
Elegir lo que hace bien

**RESENA** · `tema/voluntad-de-dios#resena` — TEXTO EDITABLE
¿Cómo decidir cuando hay varias opciones? La Biblia invita a pensar en la justicia, la bondad y el cuidado de los demás.

**ADVERTENCIA PASTORAL** · `tema/voluntad-de-dios#advertencia_pastoral` — TEXTO EDITABLE
Miqueas denuncia desigualdad real

**ESTADO REVISION** · `tema/voluntad-de-dios#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/voluntad-de-dios#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/voluntad-de-dios#pasaje_1_referencia` — TEXTO EDITABLE
Miqueas 6:6–8

**PASAJE 1 RATIONALE** · `tema/voluntad-de-dios#pasaje_1_rationale` — TEXTO EDITABLE
Miqueas pone el acento en la justicia y la bondad.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/voluntad-de-dios#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
6, 7, 8

**PASAJE 2 REFERENCIA** · `tema/voluntad-de-dios#pasaje_2_referencia` — TEXTO EDITABLE
Romanos 12:1–2

**PASAJE 2 RATIONALE** · `tema/voluntad-de-dios#pasaje_2_rationale` — TEXTO EDITABLE
Pablo invita a revisar nuestra manera de pensar y actuar.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/voluntad-de-dios#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
1, 2


### amor · tema/amor

**ID ESTRUCTURAL — NO EDITAR:** `tema/amor`
**Ruta:** Explorar → Amor y relaciones → amor
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/amor#titulo` — TEXTO EDITABLE
amor

**FAMILIA** · `tema/amor#familia` — TEXTO EDITABLE
Amor y relaciones

**ID ORIGINAL** · `tema/amor#id_original` — TEXTO EDITABLE
amor

**LETRA AZ** · `tema/amor#letra_az` — TEXTO EDITABLE
A

**ALIAS** · `tema/amor#alias` — TEXTO EDITABLE
amar · amó · amados

**RELACIONADOS** · `tema/amor#relacionados` — TEXTO EDITABLE
caridad · prójimo

**SUBTEMA** · `tema/amor#subtema` — TEXTO EDITABLE
Amar con hechos

**RESENA** · `tema/amor#resena` — TEXTO EDITABLE
El cariño se nota en cómo tratamos a las personas. Aquí puedes descubrir qué significa amar más allá de las palabras.

**ADVERTENCIA PASTORAL** · `tema/amor#advertencia_pastoral` — TEXTO EDITABLE
No usar 1 Co 13 para tolerar abusos

**ESTADO REVISION** · `tema/amor#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/amor#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/amor#pasaje_1_referencia` — TEXTO EDITABLE
1 Corintios 13:1–13

**PASAJE 1 RATIONALE** · `tema/amor#pasaje_1_rationale` — TEXTO EDITABLE
Pablo muestra por qué el amor importa más que aparentar.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/amor#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13

**PASAJE 2 REFERENCIA** · `tema/amor#pasaje_2_referencia` — TEXTO EDITABLE
Juan 13:34–35

**PASAJE 2 RATIONALE** · `tema/amor#pasaje_2_rationale` — TEXTO EDITABLE
Jesús invita a sus seguidores a cuidarse unos a otros.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/amor#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
34, 35


### amistad · tema/amistad

**ID ESTRUCTURAL — NO EDITAR:** `tema/amistad`
**Ruta:** Explorar → Amor y relaciones → amistad
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/amistad#titulo` — TEXTO EDITABLE
amistad

**FAMILIA** · `tema/amistad#familia` — TEXTO EDITABLE
Amor y relaciones

**ID ORIGINAL** · `tema/amistad#id_original` — TEXTO EDITABLE
amistad

**LETRA AZ** · `tema/amistad#letra_az` — TEXTO EDITABLE
A

**ALIAS** · `tema/amistad#alias` — TEXTO EDITABLE
amigo · amigos

**RELACIONADOS** · `tema/amistad#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/amistad#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/amistad#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/amistad#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/amistad#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### familia · tema/familia

**ID ESTRUCTURAL — NO EDITAR:** `tema/familia`
**Ruta:** Explorar → Amor y relaciones → familia
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/familia#titulo` — TEXTO EDITABLE
familia

**FAMILIA** · `tema/familia#familia` — TEXTO EDITABLE
Amor y relaciones

**ID ORIGINAL** · `tema/familia#id_original` — TEXTO EDITABLE
familia

**LETRA AZ** · `tema/familia#letra_az` — TEXTO EDITABLE
F

**ALIAS** · `tema/familia#alias` — TEXTO EDITABLE
casa · hogar

**RELACIONADOS** · `tema/familia#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/familia#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/familia#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/familia#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/familia#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### matrimonio · tema/matrimonio

**ID ESTRUCTURAL — NO EDITAR:** `tema/matrimonio`
**Ruta:** Explorar → Amor y relaciones → matrimonio
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/matrimonio#titulo` — TEXTO EDITABLE
matrimonio

**FAMILIA** · `tema/matrimonio#familia` — TEXTO EDITABLE
Amor y relaciones

**ID ORIGINAL** · `tema/matrimonio#id_original` — TEXTO EDITABLE
matrimonio

**LETRA AZ** · `tema/matrimonio#letra_az` — TEXTO EDITABLE
M

**ALIAS** · `tema/matrimonio#alias` — TEXTO EDITABLE
marido · mujer · esposo · esposa

**RELACIONADOS** · `tema/matrimonio#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/matrimonio#subtema` — TEXTO EDITABLE
Respeto en las relaciones

**RESENA** · `tema/matrimonio#resena` — TEXTO EDITABLE
Una relación sana necesita respeto, escucha y cuidado mutuo. Lee estos pasajes y conversa sobre cómo construir vínculos que hagan bien.

**ADVERTENCIA PASTORAL** · `tema/matrimonio#advertencia_pastoral` — TEXTO EDITABLE
No forzar modelo sobre situaciones personales

**ESTADO REVISION** · `tema/matrimonio#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/matrimonio#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/matrimonio#pasaje_1_referencia` — TEXTO EDITABLE
Génesis 2:18–25

**PASAJE 1 RATIONALE** · `tema/matrimonio#pasaje_1_rationale` — TEXTO EDITABLE
Un relato sobre la compañía y la unión entre personas.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/matrimonio#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
18, 19, 20, 21, 22, 23, 24, 25

**PASAJE 2 REFERENCIA** · `tema/matrimonio#pasaje_2_referencia` — TEXTO EDITABLE
1 Corintios 13:4–7

**PASAJE 2 RATIONALE** · `tema/matrimonio#pasaje_2_rationale` — TEXTO EDITABLE
Pablo describe gestos de amor que sirven en toda relación.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/matrimonio#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
4, 5, 6, 7


### hijos · tema/hijos

**ID ESTRUCTURAL — NO EDITAR:** `tema/hijos`
**Ruta:** Explorar → Amor y relaciones → hijos
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/hijos#titulo` — TEXTO EDITABLE
hijos

**FAMILIA** · `tema/hijos#familia` — TEXTO EDITABLE
Amor y relaciones

**ID ORIGINAL** · `tema/hijos#id_original` — TEXTO EDITABLE
hijos

**LETRA AZ** · `tema/hijos#letra_az` — TEXTO EDITABLE
H

**ALIAS** · `tema/hijos#alias` — TEXTO EDITABLE
hijo · hija · hijas

**RELACIONADOS** · `tema/hijos#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/hijos#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/hijos#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/hijos#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/hijos#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### prójimo · tema/projimo

**ID ESTRUCTURAL — NO EDITAR:** `tema/projimo`
**Ruta:** Explorar → Amor y relaciones → prójimo
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/projimo#titulo` — TEXTO EDITABLE
prójimo

**FAMILIA** · `tema/projimo#familia` — TEXTO EDITABLE
Amor y relaciones

**ID ORIGINAL** · `tema/projimo#id_original` — TEXTO EDITABLE
projimo

**LETRA AZ** · `tema/projimo#letra_az` — TEXTO EDITABLE
P

**ALIAS** · `tema/projimo#alias` — TEXTO EDITABLE
prójimos

**RELACIONADOS** · `tema/projimo#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/projimo#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/projimo#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/projimo#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/projimo#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### comunidad · tema/comunidad

**ID ESTRUCTURAL — NO EDITAR:** `tema/comunidad`
**Ruta:** Explorar → Amor y relaciones → comunidad
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/comunidad#titulo` — TEXTO EDITABLE
comunidad

**FAMILIA** · `tema/comunidad#familia` — TEXTO EDITABLE
Amor y relaciones

**ID ORIGINAL** · `tema/comunidad#id_original` — TEXTO EDITABLE
comunidad

**LETRA AZ** · `tema/comunidad#letra_az` — TEXTO EDITABLE
C

**ALIAS** · `tema/comunidad#alias` — TEXTO EDITABLE
hermanos · congregación

**RELACIONADOS** · `tema/comunidad#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/comunidad#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/comunidad#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/comunidad#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/comunidad#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### unidad · tema/unidad

**ID ESTRUCTURAL — NO EDITAR:** `tema/unidad`
**Ruta:** Explorar → Amor y relaciones → unidad
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/unidad#titulo` — TEXTO EDITABLE
unidad

**FAMILIA** · `tema/unidad#familia` — TEXTO EDITABLE
Amor y relaciones

**ID ORIGINAL** · `tema/unidad#id_original` — TEXTO EDITABLE
unidad

**LETRA AZ** · `tema/unidad#letra_az` — TEXTO EDITABLE
U

**ALIAS** · `tema/unidad#alias` — TEXTO EDITABLE
unánimes · uno

**RELACIONADOS** · `tema/unidad#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/unidad#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/unidad#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/unidad#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/unidad#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### reconciliación · tema/reconciliacion

**ID ESTRUCTURAL — NO EDITAR:** `tema/reconciliacion`
**Ruta:** Explorar → Amor y relaciones → reconciliación
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/reconciliacion#titulo` — TEXTO EDITABLE
reconciliación

**FAMILIA** · `tema/reconciliacion#familia` — TEXTO EDITABLE
Amor y relaciones

**ID ORIGINAL** · `tema/reconciliacion#id_original` — TEXTO EDITABLE
reconciliacion

**LETRA AZ** · `tema/reconciliacion#letra_az` — TEXTO EDITABLE
R

**ALIAS** · `tema/reconciliacion#alias` — TEXTO EDITABLE
reconciliar · reconciliados

**RELACIONADOS** · `tema/reconciliacion#relacionados` — TEXTO EDITABLE
paz · perdón

**SUBTEMA** · `tema/reconciliacion#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/reconciliacion#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/reconciliacion#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/reconciliacion#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### servicio · tema/servicio

**ID ESTRUCTURAL — NO EDITAR:** `tema/servicio`
**Ruta:** Explorar → Amor y relaciones → servicio
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/servicio#titulo` — TEXTO EDITABLE
servicio

**FAMILIA** · `tema/servicio#familia` — TEXTO EDITABLE
Amor y relaciones

**ID ORIGINAL** · `tema/servicio#id_original` — TEXTO EDITABLE
servicio

**LETRA AZ** · `tema/servicio#letra_az` — TEXTO EDITABLE
S

**ALIAS** · `tema/servicio#alias` — TEXTO EDITABLE
servir · siervo

**RELACIONADOS** · `tema/servicio#relacionados` — TEXTO EDITABLE
siervo · prójimo

**SUBTEMA** · `tema/servicio#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/servicio#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/servicio#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/servicio#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### perdón · tema/perdon

**ID ESTRUCTURAL — NO EDITAR:** `tema/perdon`
**Ruta:** Explorar → Perdón y restauración → perdón
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/perdon#titulo` — TEXTO EDITABLE
perdón

**FAMILIA** · `tema/perdon#familia` — TEXTO EDITABLE
Perdón y restauración

**ID ORIGINAL** · `tema/perdon#id_original` — TEXTO EDITABLE
perdon

**LETRA AZ** · `tema/perdon#letra_az` — TEXTO EDITABLE
P

**ALIAS** · `tema/perdon#alias` — TEXTO EDITABLE
perdonar · perdonó · perdonados

**RELACIONADOS** · `tema/perdon#relacionados` — TEXTO EDITABLE
misericordia · reconciliación

**SUBTEMA** · `tema/perdon#subtema` — TEXTO EDITABLE
¿Qué hacemos después de un daño?

**RESENA** · `tema/perdon#resena` — TEXTO EDITABLE
Perdonar puede ser difícil y no significa permitir que el daño continúe. Estos textos ayudan a pensar en la misericordia y la responsabilidad.

**ADVERTENCIA PASTORAL** · `tema/perdon#advertencia_pastoral` — TEXTO EDITABLE
Perdón no cancela protección y justicia

**ESTADO REVISION** · `tema/perdon#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/perdon#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/perdon#pasaje_1_referencia` — TEXTO EDITABLE
Mateo 18:21–35

**PASAJE 1 RATIONALE** · `tema/perdon#pasaje_1_rationale` — TEXTO EDITABLE
Una historia de Jesús pregunta qué hacemos con el perdón recibido.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/perdon#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35

**PASAJE 2 REFERENCIA** · `tema/perdon#pasaje_2_referencia` — TEXTO EDITABLE
Lucas 23:32–34

**PASAJE 2 RATIONALE** · `tema/perdon#pasaje_2_rationale` — TEXTO EDITABLE
Jesús ora incluso en un momento de profundo sufrimiento.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/perdon#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
32, 33, 34


### misericordia · tema/misericordia

**ID ESTRUCTURAL — NO EDITAR:** `tema/misericordia`
**Ruta:** Explorar → Perdón y restauración → misericordia
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/misericordia#titulo` — TEXTO EDITABLE
misericordia

**FAMILIA** · `tema/misericordia#familia` — TEXTO EDITABLE
Perdón y restauración

**ID ORIGINAL** · `tema/misericordia#id_original` — TEXTO EDITABLE
misericordia

**LETRA AZ** · `tema/misericordia#letra_az` — TEXTO EDITABLE
M

**ALIAS** · `tema/misericordia#alias` — TEXTO EDITABLE
misericordioso · compadecer

**RELACIONADOS** · `tema/misericordia#relacionados` — TEXTO EDITABLE
compasión · perdón

**SUBTEMA** · `tema/misericordia#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/misericordia#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/misericordia#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/misericordia#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### arrepentimiento · tema/arrepentimiento

**ID ESTRUCTURAL — NO EDITAR:** `tema/arrepentimiento`
**Ruta:** Explorar → Perdón y restauración → arrepentimiento
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/arrepentimiento#titulo` — TEXTO EDITABLE
arrepentimiento

**FAMILIA** · `tema/arrepentimiento#familia` — TEXTO EDITABLE
Perdón y restauración

**ID ORIGINAL** · `tema/arrepentimiento#id_original` — TEXTO EDITABLE
arrepentimiento

**LETRA AZ** · `tema/arrepentimiento#letra_az` — TEXTO EDITABLE
A

**ALIAS** · `tema/arrepentimiento#alias` — TEXTO EDITABLE
arrepentíos · arrepentirse

**RELACIONADOS** · `tema/arrepentimiento#relacionados` — TEXTO EDITABLE
confesión · perdón

**SUBTEMA** · `tema/arrepentimiento#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/arrepentimiento#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/arrepentimiento#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/arrepentimiento#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### pecado · tema/pecado

**ID ESTRUCTURAL — NO EDITAR:** `tema/pecado`
**Ruta:** Explorar → Perdón y restauración → pecado
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/pecado#titulo` — TEXTO EDITABLE
pecado

**FAMILIA** · `tema/pecado#familia` — TEXTO EDITABLE
Perdón y restauración

**ID ORIGINAL** · `tema/pecado#id_original` — TEXTO EDITABLE
pecado

**LETRA AZ** · `tema/pecado#letra_az` — TEXTO EDITABLE
P

**ALIAS** · `tema/pecado#alias` — TEXTO EDITABLE
pecados · pecar

**RELACIONADOS** · `tema/pecado#relacionados` — TEXTO EDITABLE
iniquidad · transgresión

**SUBTEMA** · `tema/pecado#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/pecado#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/pecado#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/pecado#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### tentación · tema/tentacion

**ID ESTRUCTURAL — NO EDITAR:** `tema/tentacion`
**Ruta:** Explorar → Perdón y restauración → tentación
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/tentacion#titulo` — TEXTO EDITABLE
tentación

**FAMILIA** · `tema/tentacion#familia` — TEXTO EDITABLE
Perdón y restauración

**ID ORIGINAL** · `tema/tentacion#id_original` — TEXTO EDITABLE
tentacion

**LETRA AZ** · `tema/tentacion#letra_az` — TEXTO EDITABLE
T

**ALIAS** · `tema/tentacion#alias` — TEXTO EDITABLE
tentado · tentar

**RELACIONADOS** · `tema/tentacion#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/tentacion#subtema` — TEXTO EDITABLE
Decidir bajo presión

**RESENA** · `tema/tentacion#resena` — TEXTO EDITABLE
A veces nos piden hacer cosas que no queremos. Estos pasajes ayudan a pensar antes de elegir y a buscar apoyo cuando lo necesitamos.

**ADVERTENCIA PASTORAL** · `tema/tentacion#advertencia_pastoral` — TEXTO EDITABLE
No implicar que trauma equivale a tentación

**ESTADO REVISION** · `tema/tentacion#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/tentacion#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/tentacion#pasaje_1_referencia` — TEXTO EDITABLE
Mateo 4:1–11

**PASAJE 1 RATIONALE** · `tema/tentacion#pasaje_1_rationale` — TEXTO EDITABLE
Jesús enfrenta decisiones difíciles y responde con firmeza.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/tentacion#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11

**PASAJE 2 REFERENCIA** · `tema/tentacion#pasaje_2_referencia` — TEXTO EDITABLE
1 Corintios 10:12–13

**PASAJE 2 RATIONALE** · `tema/tentacion#pasaje_2_rationale` — TEXTO EDITABLE
Pablo anima a mantenerse atento y buscar una salida.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/tentacion#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
12, 13


### culpa · tema/culpa

**ID ESTRUCTURAL — NO EDITAR:** `tema/culpa`
**Ruta:** Explorar → Perdón y restauración → culpa
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/culpa#titulo` — TEXTO EDITABLE
culpa

**FAMILIA** · `tema/culpa#familia` — TEXTO EDITABLE
Perdón y restauración

**ID ORIGINAL** · `tema/culpa#id_original` — TEXTO EDITABLE
culpa

**LETRA AZ** · `tema/culpa#letra_az` — TEXTO EDITABLE
C

**ALIAS** · `tema/culpa#alias` — TEXTO EDITABLE
culpable · iniquidad

**RELACIONADOS** · `tema/culpa#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/culpa#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/culpa#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/culpa#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/culpa#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### restauración · tema/restauracion

**ID ESTRUCTURAL — NO EDITAR:** `tema/restauracion`
**Ruta:** Explorar → Perdón y restauración → restauración
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/restauracion#titulo` — TEXTO EDITABLE
restauración

**FAMILIA** · `tema/restauracion#familia` — TEXTO EDITABLE
Perdón y restauración

**ID ORIGINAL** · `tema/restauracion#id_original` — TEXTO EDITABLE
restauracion

**LETRA AZ** · `tema/restauracion#letra_az` — TEXTO EDITABLE
R

**ALIAS** · `tema/restauracion#alias` — TEXTO EDITABLE
restaurar · restituir

**RELACIONADOS** · `tema/restauracion#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/restauracion#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/restauracion#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/restauracion#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/restauracion#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### confesión · tema/confesion

**ID ESTRUCTURAL — NO EDITAR:** `tema/confesion`
**Ruta:** Explorar → Perdón y restauración → confesión
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/confesion#titulo` — TEXTO EDITABLE
confesión

**FAMILIA** · `tema/confesion#familia` — TEXTO EDITABLE
Perdón y restauración

**ID ORIGINAL** · `tema/confesion#id_original` — TEXTO EDITABLE
confesion

**LETRA AZ** · `tema/confesion#letra_az` — TEXTO EDITABLE
C

**ALIAS** · `tema/confesion#alias` — TEXTO EDITABLE
confesar · confesamos

**RELACIONADOS** · `tema/confesion#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/confesion#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/confesion#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/confesion#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/confesion#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### obediencia · tema/obediencia

**ID ESTRUCTURAL — NO EDITAR:** `tema/obediencia`
**Ruta:** Explorar → Perdón y restauración → obediencia
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/obediencia#titulo` — TEXTO EDITABLE
obediencia

**FAMILIA** · `tema/obediencia#familia` — TEXTO EDITABLE
Perdón y restauración

**ID ORIGINAL** · `tema/obediencia#id_original` — TEXTO EDITABLE
obediencia

**LETRA AZ** · `tema/obediencia#letra_az` — TEXTO EDITABLE
O

**ALIAS** · `tema/obediencia#alias` — TEXTO EDITABLE
obedecer · obedeció

**RELACIONADOS** · `tema/obediencia#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/obediencia#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/obediencia#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/obediencia#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/obediencia#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### santidad · tema/santidad

**ID ESTRUCTURAL — NO EDITAR:** `tema/santidad`
**Ruta:** Explorar → Perdón y restauración → santidad
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/santidad#titulo` — TEXTO EDITABLE
santidad

**FAMILIA** · `tema/santidad#familia` — TEXTO EDITABLE
Perdón y restauración

**ID ORIGINAL** · `tema/santidad#id_original` — TEXTO EDITABLE
santidad

**LETRA AZ** · `tema/santidad#letra_az` — TEXTO EDITABLE
S

**ALIAS** · `tema/santidad#alias` — TEXTO EDITABLE
santo · santos

**RELACIONADOS** · `tema/santidad#relacionados` — TEXTO EDITABLE
obediencia · santo

**SUBTEMA** · `tema/santidad#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/santidad#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/santidad#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/santidad#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### paz · tema/paz

**ID ESTRUCTURAL — NO EDITAR:** `tema/paz`
**Ruta:** Explorar → Vida interior → paz
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/paz#titulo` — TEXTO EDITABLE
paz

**FAMILIA** · `tema/paz#familia` — TEXTO EDITABLE
Vida interior

**ID ORIGINAL** · `tema/paz#id_original` — TEXTO EDITABLE
paz

**LETRA AZ** · `tema/paz#letra_az` — TEXTO EDITABLE
P

**ALIAS** · `tema/paz#alias` — TEXTO EDITABLE
pacificar

**RELACIONADOS** · `tema/paz#relacionados` — TEXTO EDITABLE
reconciliación · reposo

**SUBTEMA** · `tema/paz#subtema` — TEXTO EDITABLE
Encontrar calma y construir paz

**RESENA** · `tema/paz#resena` — TEXTO EDITABLE
La paz no es solo sentirse tranquilo: también es aprender a tratar bien a los demás. ¿Qué puedes hacer hoy para llevar un poco de paz?

**ADVERTENCIA PASTORAL** · `tema/paz#advertencia_pastoral` — TEXTO EDITABLE
No equiparar paz con ausencia de conflicto

**ESTADO REVISION** · `tema/paz#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/paz#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/paz#pasaje_1_referencia` — TEXTO EDITABLE
Juan 14:25–27

**PASAJE 1 RATIONALE** · `tema/paz#pasaje_1_rationale` — TEXTO EDITABLE
Jesús habla de paz a sus amigos antes de despedirse.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/paz#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
25, 26, 27

**PASAJE 2 REFERENCIA** · `tema/paz#pasaje_2_referencia` — TEXTO EDITABLE
Mateo 5:9–12

**PASAJE 2 RATIONALE** · `tema/paz#pasaje_2_rationale` — TEXTO EDITABLE
Jesús llama felices a quienes trabajan por la paz.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/paz#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
9, 10, 11, 12


### esperanza · tema/esperanza

**ID ESTRUCTURAL — NO EDITAR:** `tema/esperanza`
**Ruta:** Explorar → Vida interior → esperanza
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** PROPUESTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/esperanza#titulo` — TEXTO EDITABLE
esperanza

**FAMILIA** · `tema/esperanza#familia` — TEXTO EDITABLE
Vida interior

**ID ORIGINAL** · `tema/esperanza#id_original` — TEXTO EDITABLE
esperanza

**LETRA AZ** · `tema/esperanza#letra_az` — TEXTO EDITABLE
E

**ALIAS** · `tema/esperanza#alias` — TEXTO EDITABLE
esperar

**RELACIONADOS** · `tema/esperanza#relacionados` — TEXTO EDITABLE
promesa · esperar

**SUBTEMA** · `tema/esperanza#subtema` — TEXTO EDITABLE
Seguir adelante cuando cuesta

**RESENA** · `tema/esperanza#resena` — TEXTO EDITABLE
Cuando algo sale mal, es normal perder el ánimo. Estos textos muestran que podemos mantener la esperanza sin negar los momentos difíciles.

**ADVERTENCIA PASTORAL** · `tema/esperanza#advertencia_pastoral` — TEXTO EDITABLE
No prometer solución instantánea

**ESTADO REVISION** · `tema/esperanza#estado_revision` — TEXTO EDITABLE
PROPUESTO

**VERIFICACION EXISTENCIA** · `tema/esperanza#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/esperanza#pasaje_1_referencia` — TEXTO EDITABLE
Romanos 5:1–5

**PASAJE 1 RATIONALE** · `tema/esperanza#pasaje_1_rationale` — TEXTO EDITABLE
Pablo relaciona la esperanza con aprender a perseverar.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/esperanza#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
1, 2, 3, 4, 5

**PASAJE 2 REFERENCIA** · `tema/esperanza#pasaje_2_referencia` — TEXTO EDITABLE
1 Pedro 1:3–9

**PASAJE 2 RATIONALE** · `tema/esperanza#pasaje_2_rationale` — TEXTO EDITABLE
Una carta anima a conservar la esperanza en medio de las pruebas.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/esperanza#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
3, 4, 5, 6, 7, 8, 9


### gozo · tema/gozo

**ID ESTRUCTURAL — NO EDITAR:** `tema/gozo`
**Ruta:** Explorar → Vida interior → gozo
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/gozo#titulo` — TEXTO EDITABLE
gozo

**FAMILIA** · `tema/gozo#familia` — TEXTO EDITABLE
Vida interior

**ID ORIGINAL** · `tema/gozo#id_original` — TEXTO EDITABLE
gozo

**LETRA AZ** · `tema/gozo#letra_az` — TEXTO EDITABLE
G

**ALIAS** · `tema/gozo#alias` — TEXTO EDITABLE
gozar · alegría

**RELACIONADOS** · `tema/gozo#relacionados` — TEXTO EDITABLE
alegría · regocijo

**SUBTEMA** · `tema/gozo#subtema` — TEXTO EDITABLE
Alegría sin fingir

**RESENA** · `tema/gozo#resena` — TEXTO EDITABLE
No tenemos que sonreír todo el tiempo. La Biblia habla de una alegría que convive con los días difíciles y con la alegría de reencontrarse.

**ADVERTENCIA PASTORAL** · `tema/gozo#advertencia_pastoral` — TEXTO EDITABLE
La tristeza sigue siendo legítima

**ESTADO REVISION** · `tema/gozo#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/gozo#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/gozo#pasaje_1_referencia` — TEXTO EDITABLE
Filipenses 4:4–9

**PASAJE 1 RATIONALE** · `tema/gozo#pasaje_1_rationale` — TEXTO EDITABLE
Pablo invita a la alegría y a cuidar lo que pensamos.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/gozo#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
4, 5, 6, 7, 8, 9

**PASAJE 2 REFERENCIA** · `tema/gozo#pasaje_2_referencia` — TEXTO EDITABLE
Lucas 15:3–7

**PASAJE 2 RATIONALE** · `tema/gozo#pasaje_2_rationale` — TEXTO EDITABLE
Jesús cuenta una historia sobre la alegría de encontrar lo perdido.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/gozo#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
3, 4, 5, 6, 7


### gratitud · tema/gratitud

**ID ESTRUCTURAL — NO EDITAR:** `tema/gratitud`
**Ruta:** Explorar → Vida interior → gratitud
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/gratitud#titulo` — TEXTO EDITABLE
gratitud

**FAMILIA** · `tema/gratitud#familia` — TEXTO EDITABLE
Vida interior

**ID ORIGINAL** · `tema/gratitud#id_original` — TEXTO EDITABLE
gratitud

**LETRA AZ** · `tema/gratitud#letra_az` — TEXTO EDITABLE
G

**ALIAS** · `tema/gratitud#alias` — TEXTO EDITABLE
agradecer

**RELACIONADOS** · `tema/gratitud#relacionados` — TEXTO EDITABLE
acción de gracias · alabanza

**SUBTEMA** · `tema/gratitud#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/gratitud#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/gratitud#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/gratitud#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### paciencia · tema/paciencia

**ID ESTRUCTURAL — NO EDITAR:** `tema/paciencia`
**Ruta:** Explorar → Vida interior → paciencia
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/paciencia#titulo` — TEXTO EDITABLE
paciencia

**FAMILIA** · `tema/paciencia#familia` — TEXTO EDITABLE
Vida interior

**ID ORIGINAL** · `tema/paciencia#id_original` — TEXTO EDITABLE
paciencia

**LETRA AZ** · `tema/paciencia#letra_az` — TEXTO EDITABLE
P

**ALIAS** · `tema/paciencia#alias` — TEXTO EDITABLE
paciente · esperar

**RELACIONADOS** · `tema/paciencia#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/paciencia#subtema` — TEXTO EDITABLE
Aprender a esperar

**RESENA** · `tema/paciencia#resena` — TEXTO EDITABLE
Esperar no siempre es fácil, sobre todo cuando queremos resultados rápidos. Estos textos muestran cómo vivir ese tiempo con paciencia y amor.

**ADVERTENCIA PASTORAL** · `tema/paciencia#advertencia_pastoral` — TEXTO EDITABLE
No normalizar abusos

**ESTADO REVISION** · `tema/paciencia#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/paciencia#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/paciencia#pasaje_1_referencia` — TEXTO EDITABLE
Santiago 5:7–11

**PASAJE 1 RATIONALE** · `tema/paciencia#pasaje_1_rationale` — TEXTO EDITABLE
Santiago compara la paciencia con la espera de quien siembra.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/paciencia#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
7, 8, 9, 10, 11

**PASAJE 2 REFERENCIA** · `tema/paciencia#pasaje_2_referencia` — TEXTO EDITABLE
1 Corintios 13:4–7

**PASAJE 2 RATIONALE** · `tema/paciencia#pasaje_2_rationale` — TEXTO EDITABLE
Pablo recuerda que el amor también sabe esperar.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/paciencia#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
4, 5, 6, 7


### humildad · tema/humildad

**ID ESTRUCTURAL — NO EDITAR:** `tema/humildad`
**Ruta:** Explorar → Vida interior → humildad
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/humildad#titulo` — TEXTO EDITABLE
humildad

**FAMILIA** · `tema/humildad#familia` — TEXTO EDITABLE
Vida interior

**ID ORIGINAL** · `tema/humildad#id_original` — TEXTO EDITABLE
humildad

**LETRA AZ** · `tema/humildad#letra_az` — TEXTO EDITABLE
H

**ALIAS** · `tema/humildad#alias` — TEXTO EDITABLE
humilde

**RELACIONADOS** · `tema/humildad#relacionados` — TEXTO EDITABLE
mansedumbre · servicio

**SUBTEMA** · `tema/humildad#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/humildad#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/humildad#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/humildad#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### sabiduría · tema/sabiduria

**ID ESTRUCTURAL — NO EDITAR:** `tema/sabiduria`
**Ruta:** Explorar → Vida interior → sabiduría
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/sabiduria#titulo` — TEXTO EDITABLE
sabiduría

**FAMILIA** · `tema/sabiduria#familia` — TEXTO EDITABLE
Vida interior

**ID ORIGINAL** · `tema/sabiduria#id_original` — TEXTO EDITABLE
sabiduria

**LETRA AZ** · `tema/sabiduria#letra_az` — TEXTO EDITABLE
S

**ALIAS** · `tema/sabiduria#alias` — TEXTO EDITABLE
sabio · sabios

**RELACIONADOS** · `tema/sabiduria#relacionados` — TEXTO EDITABLE
entendimiento · prudencia

**SUBTEMA** · `tema/sabiduria#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/sabiduria#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/sabiduria#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/sabiduria#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### valentía · tema/valentia

**ID ESTRUCTURAL — NO EDITAR:** `tema/valentia`
**Ruta:** Explorar → Vida interior → valentía
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/valentia#titulo` — TEXTO EDITABLE
valentía

**FAMILIA** · `tema/valentia#familia` — TEXTO EDITABLE
Vida interior

**ID ORIGINAL** · `tema/valentia#id_original` — TEXTO EDITABLE
valentia

**LETRA AZ** · `tema/valentia#letra_az` — TEXTO EDITABLE
V

**ALIAS** · `tema/valentia#alias` — TEXTO EDITABLE
valiente · esfuerzo

**RELACIONADOS** · `tema/valentia#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/valentia#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/valentia#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/valentia#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/valentia#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### contentamiento · tema/contentamiento

**ID ESTRUCTURAL — NO EDITAR:** `tema/contentamiento`
**Ruta:** Explorar → Vida interior → contentamiento
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/contentamiento#titulo` — TEXTO EDITABLE
contentamiento

**FAMILIA** · `tema/contentamiento#familia` — TEXTO EDITABLE
Vida interior

**ID ORIGINAL** · `tema/contentamiento#id_original` — TEXTO EDITABLE
contentamiento

**LETRA AZ** · `tema/contentamiento#letra_az` — TEXTO EDITABLE
C

**ALIAS** · `tema/contentamiento#alias` — TEXTO EDITABLE
contento

**RELACIONADOS** · `tema/contentamiento#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/contentamiento#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/contentamiento#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/contentamiento#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/contentamiento#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### dominio propio · tema/dominio-propio

**ID ESTRUCTURAL — NO EDITAR:** `tema/dominio-propio`
**Ruta:** Explorar → Vida interior → dominio propio
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/dominio-propio#titulo` — TEXTO EDITABLE
dominio propio

**FAMILIA** · `tema/dominio-propio#familia` — TEXTO EDITABLE
Vida interior

**ID ORIGINAL** · `tema/dominio-propio#id_original` — TEXTO EDITABLE
dominio-propio

**LETRA AZ** · `tema/dominio-propio#letra_az` — TEXTO EDITABLE
D

**ALIAS** · `tema/dominio-propio#alias` — TEXTO EDITABLE
templanza

**RELACIONADOS** · `tema/dominio-propio#relacionados` — TEXTO EDITABLE
templanza · disciplina

**SUBTEMA** · `tema/dominio-propio#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/dominio-propio#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/dominio-propio#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/dominio-propio#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### miedo · tema/miedo

**ID ESTRUCTURAL — NO EDITAR:** `tema/miedo`
**Ruta:** Explorar → Dificultades y emociones → miedo
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/miedo#titulo` — TEXTO EDITABLE
miedo

**FAMILIA** · `tema/miedo#familia` — TEXTO EDITABLE
Dificultades y emociones

**ID ORIGINAL** · `tema/miedo#id_original` — TEXTO EDITABLE
miedo

**LETRA AZ** · `tema/miedo#letra_az` — TEXTO EDITABLE
M

**ALIAS** · `tema/miedo#alias` — TEXTO EDITABLE
temor · temer

**RELACIONADOS** · `tema/miedo#relacionados` — TEXTO EDITABLE
temor · confianza

**SUBTEMA** · `tema/miedo#subtema` — TEXTO EDITABLE
Cuando sientes miedo

**RESENA** · `tema/miedo#resena` — TEXTO EDITABLE
Sentir miedo es humano. Estas historias muestran que podemos hablar de lo que nos asusta y pedir compañía.

**ADVERTENCIA PASTORAL** · `tema/miedo#advertencia_pastoral` — TEXTO EDITABLE
No usar relato para negar peligros objetivos

**ESTADO REVISION** · `tema/miedo#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/miedo#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/miedo#pasaje_1_referencia` — TEXTO EDITABLE
Salmos 56:3–4

**PASAJE 1 RATIONALE** · `tema/miedo#pasaje_1_rationale` — TEXTO EDITABLE
Un salmo pone en palabras el miedo de una persona.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/miedo#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
3, 4

**PASAJE 2 REFERENCIA** · `tema/miedo#pasaje_2_referencia` — TEXTO EDITABLE
Marcos 4:35–41

**PASAJE 2 RATIONALE** · `tema/miedo#pasaje_2_rationale` — TEXTO EDITABLE
Los amigos de Jesús se asustan durante una tormenta.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/miedo#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
35, 36, 37, 38, 39, 40, 41


### ansiedad · tema/ansiedad

**ID ESTRUCTURAL — NO EDITAR:** `tema/ansiedad`
**Ruta:** Explorar → Dificultades y emociones → ansiedad
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/ansiedad#titulo` — TEXTO EDITABLE
ansiedad

**FAMILIA** · `tema/ansiedad#familia` — TEXTO EDITABLE
Dificultades y emociones

**ID ORIGINAL** · `tema/ansiedad#id_original` — TEXTO EDITABLE
ansiedad

**LETRA AZ** · `tema/ansiedad#letra_az` — TEXTO EDITABLE
A

**ALIAS** · `tema/ansiedad#alias` — TEXTO EDITABLE
afán · afanes

**RELACIONADOS** · `tema/ansiedad#relacionados` — TEXTO EDITABLE
afán · preocupación

**SUBTEMA** · `tema/ansiedad#subtema` — TEXTO EDITABLE
Cuando las preocupaciones pesan

**RESENA** · `tema/ansiedad#resena` — TEXTO EDITABLE
A veces la cabeza no deja de dar vueltas. Estos pasajes invitan a hablar de lo que sentimos y a buscar apoyo; no reemplazan la ayuda profesional.

**ADVERTENCIA PASTORAL** · `tema/ansiedad#advertencia_pastoral` — TEXTO EDITABLE
No sustituir atención clínica

**ESTADO REVISION** · `tema/ansiedad#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/ansiedad#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/ansiedad#pasaje_1_referencia` — TEXTO EDITABLE
Mateo 6:25–34

**PASAJE 1 RATIONALE** · `tema/ansiedad#pasaje_1_rationale` — TEXTO EDITABLE
Jesús habla de las preocupaciones por el día a día.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/ansiedad#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
25, 26, 27, 28, 29, 30, 31, 32, 33, 34

**PASAJE 2 REFERENCIA** · `tema/ansiedad#pasaje_2_referencia` — TEXTO EDITABLE
Filipenses 4:6–9

**PASAJE 2 RATIONALE** · `tema/ansiedad#pasaje_2_rationale` — TEXTO EDITABLE
Pablo menciona la oración y pensamientos que ayudan a cuidar el corazón.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/ansiedad#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
6, 7, 8, 9


### tristeza · tema/tristeza

**ID ESTRUCTURAL — NO EDITAR:** `tema/tristeza`
**Ruta:** Explorar → Dificultades y emociones → tristeza
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/tristeza#titulo` — TEXTO EDITABLE
tristeza

**FAMILIA** · `tema/tristeza#familia` — TEXTO EDITABLE
Dificultades y emociones

**ID ORIGINAL** · `tema/tristeza#id_original` — TEXTO EDITABLE
tristeza

**LETRA AZ** · `tema/tristeza#letra_az` — TEXTO EDITABLE
T

**ALIAS** · `tema/tristeza#alias` — TEXTO EDITABLE
triste · llorar

**RELACIONADOS** · `tema/tristeza#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/tristeza#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/tristeza#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/tristeza#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/tristeza#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### soledad · tema/soledad

**ID ESTRUCTURAL — NO EDITAR:** `tema/soledad`
**Ruta:** Explorar → Dificultades y emociones → soledad
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/soledad#titulo` — TEXTO EDITABLE
soledad

**FAMILIA** · `tema/soledad#familia` — TEXTO EDITABLE
Dificultades y emociones

**ID ORIGINAL** · `tema/soledad#id_original` — TEXTO EDITABLE
soledad

**LETRA AZ** · `tema/soledad#letra_az` — TEXTO EDITABLE
S

**ALIAS** · `tema/soledad#alias` — TEXTO EDITABLE
solo · desamparado

**RELACIONADOS** · `tema/soledad#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/soledad#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/soledad#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/soledad#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/soledad#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### enojo · tema/enojo

**ID ESTRUCTURAL — NO EDITAR:** `tema/enojo`
**Ruta:** Explorar → Dificultades y emociones → enojo
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/enojo#titulo` — TEXTO EDITABLE
enojo

**FAMILIA** · `tema/enojo#familia` — TEXTO EDITABLE
Dificultades y emociones

**ID ORIGINAL** · `tema/enojo#id_original` — TEXTO EDITABLE
enojo

**LETRA AZ** · `tema/enojo#letra_az` — TEXTO EDITABLE
E

**ALIAS** · `tema/enojo#alias` — TEXTO EDITABLE
ira · airarse

**RELACIONADOS** · `tema/enojo#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/enojo#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/enojo#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/enojo#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/enojo#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### sufrimiento · tema/sufrimiento

**ID ESTRUCTURAL — NO EDITAR:** `tema/sufrimiento`
**Ruta:** Explorar → Dificultades y emociones → sufrimiento
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/sufrimiento#titulo` — TEXTO EDITABLE
sufrimiento

**FAMILIA** · `tema/sufrimiento#familia` — TEXTO EDITABLE
Dificultades y emociones

**ID ORIGINAL** · `tema/sufrimiento#id_original` — TEXTO EDITABLE
sufrimiento

**LETRA AZ** · `tema/sufrimiento#letra_az` — TEXTO EDITABLE
S

**ALIAS** · `tema/sufrimiento#alias` — TEXTO EDITABLE
padecer · aflicción

**RELACIONADOS** · `tema/sufrimiento#relacionados` — TEXTO EDITABLE
aflicción · paciencia

**SUBTEMA** · `tema/sufrimiento#subtema` — TEXTO EDITABLE
No pasar solo los días difíciles

**RESENA** · `tema/sufrimiento#resena` — TEXTO EDITABLE
Cuando alguien sufre, escuchar y acompañar puede marcar una diferencia. Estos textos hablan de esperanza y de consuelo compartido.

**ADVERTENCIA PASTORAL** · `tema/sufrimiento#advertencia_pastoral` — TEXTO EDITABLE
No moralizar enfermedad o duelo

**ESTADO REVISION** · `tema/sufrimiento#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/sufrimiento#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/sufrimiento#pasaje_1_referencia` — TEXTO EDITABLE
Romanos 8:18–27

**PASAJE 1 RATIONALE** · `tema/sufrimiento#pasaje_1_rationale` — TEXTO EDITABLE
Pablo reconoce que toda la creación atraviesa momentos difíciles.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/sufrimiento#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
18, 19, 20, 21, 22, 23, 24, 25, 26, 27

**PASAJE 2 REFERENCIA** · `tema/sufrimiento#pasaje_2_referencia` — TEXTO EDITABLE
2 Corintios 1:3–7

**PASAJE 2 RATIONALE** · `tema/sufrimiento#pasaje_2_rationale` — TEXTO EDITABLE
Una carta habla de recibir y compartir consuelo.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/sufrimiento#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
3, 4, 5, 6, 7


### duelo · tema/duelo

**ID ESTRUCTURAL — NO EDITAR:** `tema/duelo`
**Ruta:** Explorar → Dificultades y emociones → duelo
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/duelo#titulo` — TEXTO EDITABLE
duelo

**FAMILIA** · `tema/duelo#familia` — TEXTO EDITABLE
Dificultades y emociones

**ID ORIGINAL** · `tema/duelo#id_original` — TEXTO EDITABLE
duelo

**LETRA AZ** · `tema/duelo#letra_az` — TEXTO EDITABLE
D

**ALIAS** · `tema/duelo#alias` — TEXTO EDITABLE
luto · lloro

**RELACIONADOS** · `tema/duelo#relacionados` — TEXTO EDITABLE
consuelo · lloro

**SUBTEMA** · `tema/duelo#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/duelo#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/duelo#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/duelo#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### desánimo · tema/desanimo

**ID ESTRUCTURAL — NO EDITAR:** `tema/desanimo`
**Ruta:** Explorar → Dificultades y emociones → desánimo
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/desanimo#titulo` — TEXTO EDITABLE
desánimo

**FAMILIA** · `tema/desanimo#familia` — TEXTO EDITABLE
Dificultades y emociones

**ID ORIGINAL** · `tema/desanimo#id_original` — TEXTO EDITABLE
desanimo

**LETRA AZ** · `tema/desanimo#letra_az` — TEXTO EDITABLE
D

**ALIAS** · `tema/desanimo#alias` — TEXTO EDITABLE
desmayar · desfallecer

**RELACIONADOS** · `tema/desanimo#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/desanimo#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/desanimo#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/desanimo#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/desanimo#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### preocupación · tema/preocupacion

**ID ESTRUCTURAL — NO EDITAR:** `tema/preocupacion`
**Ruta:** Explorar → Dificultades y emociones → preocupación
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/preocupacion#titulo` — TEXTO EDITABLE
preocupación

**FAMILIA** · `tema/preocupacion#familia` — TEXTO EDITABLE
Dificultades y emociones

**ID ORIGINAL** · `tema/preocupacion#id_original` — TEXTO EDITABLE
preocupacion

**LETRA AZ** · `tema/preocupacion#letra_az` — TEXTO EDITABLE
P

**ALIAS** · `tema/preocupacion#alias` — TEXTO EDITABLE
afán · cuidado

**RELACIONADOS** · `tema/preocupacion#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/preocupacion#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/preocupacion#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/preocupacion#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/preocupacion#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### cansancio · tema/cansancio

**ID ESTRUCTURAL — NO EDITAR:** `tema/cansancio`
**Ruta:** Explorar → Dificultades y emociones → cansancio
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/cansancio#titulo` — TEXTO EDITABLE
cansancio

**FAMILIA** · `tema/cansancio#familia` — TEXTO EDITABLE
Dificultades y emociones

**ID ORIGINAL** · `tema/cansancio#id_original` — TEXTO EDITABLE
cansancio

**LETRA AZ** · `tema/cansancio#letra_az` — TEXTO EDITABLE
C

**ALIAS** · `tema/cansancio#alias` — TEXTO EDITABLE
cansado · fatiga

**RELACIONADOS** · `tema/cansancio#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/cansancio#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/cansancio#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/cansancio#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/cansancio#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### oración · tema/oracion

**ID ESTRUCTURAL — NO EDITAR:** `tema/oracion`
**Ruta:** Explorar → Oración y práctica espiritual → oración
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/oracion#titulo` — TEXTO EDITABLE
oración

**FAMILIA** · `tema/oracion#familia` — TEXTO EDITABLE
Oración y práctica espiritual

**ID ORIGINAL** · `tema/oracion#id_original` — TEXTO EDITABLE
oracion

**LETRA AZ** · `tema/oracion#letra_az` — TEXTO EDITABLE
O

**ALIAS** · `tema/oracion#alias` — TEXTO EDITABLE
orar · orad

**RELACIONADOS** · `tema/oracion#relacionados` — TEXTO EDITABLE
petición · intercesión

**SUBTEMA** · `tema/oracion#subtema` — TEXTO EDITABLE
Hablar con Dios con confianza

**RESENA** · `tema/oracion#resena` — TEXTO EDITABLE
No hacen falta palabras perfectas para orar. Estos pasajes presentan maneras sencillas de hablar con Dios y escuchar.

**ADVERTENCIA PASTORAL** · `tema/oracion#advertencia_pastoral` — TEXTO EDITABLE
No confundir pedir con obtener cualquier deseo

**ESTADO REVISION** · `tema/oracion#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/oracion#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/oracion#pasaje_1_referencia` — TEXTO EDITABLE
Mateo 6:5–13

**PASAJE 1 RATIONALE** · `tema/oracion#pasaje_1_rationale` — TEXTO EDITABLE
Jesús enseña a orar con sencillez, sin buscar aplausos.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/oracion#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
5, 6, 7, 8, 9, 10, 11, 12, 13

**PASAJE 2 REFERENCIA** · `tema/oracion#pasaje_2_referencia` — TEXTO EDITABLE
Lucas 11:1–13

**PASAJE 2 RATIONALE** · `tema/oracion#pasaje_2_rationale` — TEXTO EDITABLE
Los discípulos le piden a Jesús que les enseñe a orar.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/oracion#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13


### alabanza · tema/alabanza

**ID ESTRUCTURAL — NO EDITAR:** `tema/alabanza`
**Ruta:** Explorar → Oración y práctica espiritual → alabanza
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/alabanza#titulo` — TEXTO EDITABLE
alabanza

**FAMILIA** · `tema/alabanza#familia` — TEXTO EDITABLE
Oración y práctica espiritual

**ID ORIGINAL** · `tema/alabanza#id_original` — TEXTO EDITABLE
alabanza

**LETRA AZ** · `tema/alabanza#letra_az` — TEXTO EDITABLE
A

**ALIAS** · `tema/alabanza#alias` — TEXTO EDITABLE
alabar · alabad

**RELACIONADOS** · `tema/alabanza#relacionados` — TEXTO EDITABLE
adoración · acción de gracias

**SUBTEMA** · `tema/alabanza#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/alabanza#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/alabanza#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/alabanza#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### adoración · tema/adoracion

**ID ESTRUCTURAL — NO EDITAR:** `tema/adoracion`
**Ruta:** Explorar → Oración y práctica espiritual → adoración
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/adoracion#titulo` — TEXTO EDITABLE
adoración

**FAMILIA** · `tema/adoracion#familia` — TEXTO EDITABLE
Oración y práctica espiritual

**ID ORIGINAL** · `tema/adoracion#id_original` — TEXTO EDITABLE
adoracion

**LETRA AZ** · `tema/adoracion#letra_az` — TEXTO EDITABLE
A

**ALIAS** · `tema/adoracion#alias` — TEXTO EDITABLE
adorar · adorad

**RELACIONADOS** · `tema/adoracion#relacionados` — TEXTO EDITABLE
alabanza · Dios

**SUBTEMA** · `tema/adoracion#subtema` — TEXTO EDITABLE
¿Por qué adoramos?

**RESENA** · `tema/adoracion#resena` — TEXTO EDITABLE
Adorar es más que repetir canciones o gestos. Lee cómo la Biblia relaciona la adoración con la verdad, la gratitud y nuestra manera de vivir.

**ADVERTENCIA PASTORAL** · `tema/adoracion#advertencia_pastoral` — TEXTO EDITABLE
No confundir adoración con solo música

**ESTADO REVISION** · `tema/adoracion#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/adoracion#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/adoracion#pasaje_1_referencia` — TEXTO EDITABLE
Juan 4:19–26

**PASAJE 1 RATIONALE** · `tema/adoracion#pasaje_1_rationale` — TEXTO EDITABLE
Jesús conversa sobre la adoración con una mujer samaritana.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/adoracion#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
19, 20, 21, 22, 23, 24, 25, 26

**PASAJE 2 REFERENCIA** · `tema/adoracion#pasaje_2_referencia` — TEXTO EDITABLE
Salmos 95:1–7

**PASAJE 2 RATIONALE** · `tema/adoracion#pasaje_2_rationale` — TEXTO EDITABLE
Un salmo invita a cantar y agradecer a Dios.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/adoracion#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
1, 2, 3, 4, 5, 6, 7


### ayuno · tema/ayuno

**ID ESTRUCTURAL — NO EDITAR:** `tema/ayuno`
**Ruta:** Explorar → Oración y práctica espiritual → ayuno
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/ayuno#titulo` — TEXTO EDITABLE
ayuno

**FAMILIA** · `tema/ayuno#familia` — TEXTO EDITABLE
Oración y práctica espiritual

**ID ORIGINAL** · `tema/ayuno#id_original` — TEXTO EDITABLE
ayuno

**LETRA AZ** · `tema/ayuno#letra_az` — TEXTO EDITABLE
A

**ALIAS** · `tema/ayuno#alias` — TEXTO EDITABLE
ayunar · ayunó

**RELACIONADOS** · `tema/ayuno#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/ayuno#subtema` — TEXTO EDITABLE
Una práctica con sentido

**RESENA** · `tema/ayuno#resena` — TEXTO EDITABLE
Ayunar aparece en la Biblia como una práctica espiritual, pero nunca debe imponerse. Estos textos preguntan qué importa más: parecer bueno o actuar con justicia.

**ADVERTENCIA PASTORAL** · `tema/ayuno#advertencia_pastoral` — TEXTO EDITABLE
No imponer ayuno alimentario a menores

**ESTADO REVISION** · `tema/ayuno#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/ayuno#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/ayuno#pasaje_1_referencia` — TEXTO EDITABLE
Mateo 6:16–18

**PASAJE 1 RATIONALE** · `tema/ayuno#pasaje_1_rationale` — TEXTO EDITABLE
Jesús cuestiona hacer del ayuno un espectáculo.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/ayuno#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
16, 17, 18

**PASAJE 2 REFERENCIA** · `tema/ayuno#pasaje_2_referencia` — TEXTO EDITABLE
Isaías 58:3–9

**PASAJE 2 RATIONALE** · `tema/ayuno#pasaje_2_rationale` — TEXTO EDITABLE
Isaías relaciona las prácticas religiosas con ayudar a quien lo necesita.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/ayuno#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
3, 4, 5, 6, 7, 8, 9


### meditación · tema/meditacion

**ID ESTRUCTURAL — NO EDITAR:** `tema/meditacion`
**Ruta:** Explorar → Oración y práctica espiritual → meditación
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/meditacion#titulo` — TEXTO EDITABLE
meditación

**FAMILIA** · `tema/meditacion#familia` — TEXTO EDITABLE
Oración y práctica espiritual

**ID ORIGINAL** · `tema/meditacion#id_original` — TEXTO EDITABLE
meditacion

**LETRA AZ** · `tema/meditacion#letra_az` — TEXTO EDITABLE
M

**ALIAS** · `tema/meditacion#alias` — TEXTO EDITABLE
meditar

**RELACIONADOS** · `tema/meditacion#relacionados` — TEXTO EDITABLE
palabra · ley

**SUBTEMA** · `tema/meditacion#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/meditacion#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/meditacion#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/meditacion#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### lectura bíblica · tema/lectura-biblica

**ID ESTRUCTURAL — NO EDITAR:** `tema/lectura-biblica`
**Ruta:** Explorar → Oración y práctica espiritual → lectura bíblica
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/lectura-biblica#titulo` — TEXTO EDITABLE
lectura bíblica

**FAMILIA** · `tema/lectura-biblica#familia` — TEXTO EDITABLE
Oración y práctica espiritual

**ID ORIGINAL** · `tema/lectura-biblica#id_original` — TEXTO EDITABLE
lectura-biblica

**LETRA AZ** · `tema/lectura-biblica#letra_az` — TEXTO EDITABLE
L

**ALIAS** · `tema/lectura-biblica#alias` — TEXTO EDITABLE
Escritura · Escrituras

**RELACIONADOS** · `tema/lectura-biblica#relacionados` — TEXTO EDITABLE
Escrituras · palabra

**SUBTEMA** · `tema/lectura-biblica#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/lectura-biblica#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/lectura-biblica#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/lectura-biblica#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### escucha · tema/escucha

**ID ESTRUCTURAL — NO EDITAR:** `tema/escucha`
**Ruta:** Explorar → Oración y práctica espiritual → escucha
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/escucha#titulo` — TEXTO EDITABLE
escucha

**FAMILIA** · `tema/escucha#familia` — TEXTO EDITABLE
Oración y práctica espiritual

**ID ORIGINAL** · `tema/escucha#id_original` — TEXTO EDITABLE
escucha

**LETRA AZ** · `tema/escucha#letra_az` — TEXTO EDITABLE
E

**ALIAS** · `tema/escucha#alias` — TEXTO EDITABLE
oír · oye

**RELACIONADOS** · `tema/escucha#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/escucha#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/escucha#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/escucha#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/escucha#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### petición · tema/peticion

**ID ESTRUCTURAL — NO EDITAR:** `tema/peticion`
**Ruta:** Explorar → Oración y práctica espiritual → petición
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/peticion#titulo` — TEXTO EDITABLE
petición

**FAMILIA** · `tema/peticion#familia` — TEXTO EDITABLE
Oración y práctica espiritual

**ID ORIGINAL** · `tema/peticion#id_original` — TEXTO EDITABLE
peticion

**LETRA AZ** · `tema/peticion#letra_az` — TEXTO EDITABLE
P

**ALIAS** · `tema/peticion#alias` — TEXTO EDITABLE
pedir · pedid

**RELACIONADOS** · `tema/peticion#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/peticion#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/peticion#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/peticion#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/peticion#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### intercesión · tema/intercesion

**ID ESTRUCTURAL — NO EDITAR:** `tema/intercesion`
**Ruta:** Explorar → Oración y práctica espiritual → intercesión
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/intercesion#titulo` — TEXTO EDITABLE
intercesión

**FAMILIA** · `tema/intercesion#familia` — TEXTO EDITABLE
Oración y práctica espiritual

**ID ORIGINAL** · `tema/intercesion#id_original` — TEXTO EDITABLE
intercesion

**LETRA AZ** · `tema/intercesion#letra_az` — TEXTO EDITABLE
I

**ALIAS** · `tema/intercesion#alias` — TEXTO EDITABLE
interceder · ruego

**RELACIONADOS** · `tema/intercesion#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/intercesion#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/intercesion#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/intercesion#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/intercesion#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### acción de gracias · tema/accion-de-gracias

**ID ESTRUCTURAL — NO EDITAR:** `tema/accion-de-gracias`
**Ruta:** Explorar → Oración y práctica espiritual → acción de gracias
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/accion-de-gracias#titulo` — TEXTO EDITABLE
acción de gracias

**FAMILIA** · `tema/accion-de-gracias#familia` — TEXTO EDITABLE
Oración y práctica espiritual

**ID ORIGINAL** · `tema/accion-de-gracias#id_original` — TEXTO EDITABLE
accion-de-gracias

**LETRA AZ** · `tema/accion-de-gracias#letra_az` — TEXTO EDITABLE
A

**ALIAS** · `tema/accion-de-gracias#alias` — TEXTO EDITABLE
gracias · agradecimiento

**RELACIONADOS** · `tema/accion-de-gracias#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/accion-de-gracias#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/accion-de-gracias#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/accion-de-gracias#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/accion-de-gracias#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### honestidad · tema/honestidad

**ID ESTRUCTURAL — NO EDITAR:** `tema/honestidad`
**Ruta:** Explorar → Carácter y conducta → honestidad
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/honestidad#titulo` — TEXTO EDITABLE
honestidad

**FAMILIA** · `tema/honestidad#familia` — TEXTO EDITABLE
Carácter y conducta

**ID ORIGINAL** · `tema/honestidad#id_original` — TEXTO EDITABLE
honestidad

**LETRA AZ** · `tema/honestidad#letra_az` — TEXTO EDITABLE
H

**ALIAS** · `tema/honestidad#alias` — TEXTO EDITABLE
verdad · íntegro

**RELACIONADOS** · `tema/honestidad#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/honestidad#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/honestidad#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/honestidad#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/honestidad#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### generosidad · tema/generosidad

**ID ESTRUCTURAL — NO EDITAR:** `tema/generosidad`
**Ruta:** Explorar → Carácter y conducta → generosidad
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/generosidad#titulo` — TEXTO EDITABLE
generosidad

**FAMILIA** · `tema/generosidad#familia` — TEXTO EDITABLE
Carácter y conducta

**ID ORIGINAL** · `tema/generosidad#id_original` — TEXTO EDITABLE
generosidad

**LETRA AZ** · `tema/generosidad#letra_az` — TEXTO EDITABLE
G

**ALIAS** · `tema/generosidad#alias` — TEXTO EDITABLE
generoso · dar

**RELACIONADOS** · `tema/generosidad#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/generosidad#subtema` — TEXTO EDITABLE
Compartir sin obligación

**RESENA** · `tema/generosidad#resena` — TEXTO EDITABLE
Ser generoso puede ser dar tiempo, escuchar o ayudar. La Biblia invita a pensar en lo que significa compartir sin presionar a nadie.

**ADVERTENCIA PASTORAL** · `tema/generosidad#advertencia_pastoral` — TEXTO EDITABLE
No usar viuda para presionar donaciones

**ESTADO REVISION** · `tema/generosidad#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/generosidad#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/generosidad#pasaje_1_referencia` — TEXTO EDITABLE
Marcos 12:41–44

**PASAJE 1 RATIONALE** · `tema/generosidad#pasaje_1_rationale` — TEXTO EDITABLE
Jesús observa una ofrenda pequeña en un contexto difícil.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/generosidad#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
41, 42, 43, 44

**PASAJE 2 REFERENCIA** · `tema/generosidad#pasaje_2_referencia` — TEXTO EDITABLE
2 Corintios 9:6–11

**PASAJE 2 RATIONALE** · `tema/generosidad#pasaje_2_rationale` — TEXTO EDITABLE
Pablo habla de dar libremente y sin presión.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/generosidad#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
6, 7, 8, 9, 10, 11


### justicia · tema/justicia

**ID ESTRUCTURAL — NO EDITAR:** `tema/justicia`
**Ruta:** Explorar → Carácter y conducta → justicia
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/justicia#titulo` — TEXTO EDITABLE
justicia

**FAMILIA** · `tema/justicia#familia` — TEXTO EDITABLE
Carácter y conducta

**ID ORIGINAL** · `tema/justicia#id_original` — TEXTO EDITABLE
justicia

**LETRA AZ** · `tema/justicia#letra_az` — TEXTO EDITABLE
J

**ALIAS** · `tema/justicia#alias` — TEXTO EDITABLE
justo · justos

**RELACIONADOS** · `tema/justicia#relacionados` — TEXTO EDITABLE
juicio · justo

**SUBTEMA** · `tema/justicia#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/justicia#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/justicia#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/justicia#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### compasión · tema/compasion

**ID ESTRUCTURAL — NO EDITAR:** `tema/compasion`
**Ruta:** Explorar → Carácter y conducta → compasión
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/compasion#titulo` — TEXTO EDITABLE
compasión

**FAMILIA** · `tema/compasion#familia` — TEXTO EDITABLE
Carácter y conducta

**ID ORIGINAL** · `tema/compasion#id_original` — TEXTO EDITABLE
compasion

**LETRA AZ** · `tema/compasion#letra_az` — TEXTO EDITABLE
C

**ALIAS** · `tema/compasion#alias` — TEXTO EDITABLE
compasivo · compadecer

**RELACIONADOS** · `tema/compasion#relacionados` — TEXTO EDITABLE
misericordia · prójimo

**SUBTEMA** · `tema/compasion#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/compasion#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/compasion#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/compasion#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### bondad · tema/bondad

**ID ESTRUCTURAL — NO EDITAR:** `tema/bondad`
**Ruta:** Explorar → Carácter y conducta → bondad
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/bondad#titulo` — TEXTO EDITABLE
bondad

**FAMILIA** · `tema/bondad#familia` — TEXTO EDITABLE
Carácter y conducta

**ID ORIGINAL** · `tema/bondad#id_original` — TEXTO EDITABLE
bondad

**LETRA AZ** · `tema/bondad#letra_az` — TEXTO EDITABLE
B

**ALIAS** · `tema/bondad#alias` — TEXTO EDITABLE
bueno · benignidad

**RELACIONADOS** · `tema/bondad#relacionados` — TEXTO EDITABLE
amor · misericordia

**SUBTEMA** · `tema/bondad#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/bondad#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/bondad#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/bondad#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### fidelidad · tema/fidelidad

**ID ESTRUCTURAL — NO EDITAR:** `tema/fidelidad`
**Ruta:** Explorar → Carácter y conducta → fidelidad
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/fidelidad#titulo` — TEXTO EDITABLE
fidelidad

**FAMILIA** · `tema/fidelidad#familia` — TEXTO EDITABLE
Carácter y conducta

**ID ORIGINAL** · `tema/fidelidad#id_original` — TEXTO EDITABLE
fidelidad

**LETRA AZ** · `tema/fidelidad#letra_az` — TEXTO EDITABLE
F

**ALIAS** · `tema/fidelidad#alias` — TEXTO EDITABLE
fiel · fieles

**RELACIONADOS** · `tema/fidelidad#relacionados` — TEXTO EDITABLE
fe · fiel

**SUBTEMA** · `tema/fidelidad#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/fidelidad#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/fidelidad#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/fidelidad#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### responsabilidad · tema/responsabilidad

**ID ESTRUCTURAL — NO EDITAR:** `tema/responsabilidad`
**Ruta:** Explorar → Carácter y conducta → responsabilidad
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/responsabilidad#titulo` — TEXTO EDITABLE
responsabilidad

**FAMILIA** · `tema/responsabilidad#familia` — TEXTO EDITABLE
Carácter y conducta

**ID ORIGINAL** · `tema/responsabilidad#id_original` — TEXTO EDITABLE
responsabilidad

**LETRA AZ** · `tema/responsabilidad#letra_az` — TEXTO EDITABLE
R

**ALIAS** · `tema/responsabilidad#alias` — TEXTO EDITABLE
mayordomo · encargo

**RELACIONADOS** · `tema/responsabilidad#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/responsabilidad#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/responsabilidad#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/responsabilidad#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/responsabilidad#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### trabajo · tema/trabajo

**ID ESTRUCTURAL — NO EDITAR:** `tema/trabajo`
**Ruta:** Explorar → Carácter y conducta → trabajo
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/trabajo#titulo` — TEXTO EDITABLE
trabajo

**FAMILIA** · `tema/trabajo#familia` — TEXTO EDITABLE
Carácter y conducta

**ID ORIGINAL** · `tema/trabajo#id_original` — TEXTO EDITABLE
trabajo

**LETRA AZ** · `tema/trabajo#letra_az` — TEXTO EDITABLE
T

**ALIAS** · `tema/trabajo#alias` — TEXTO EDITABLE
trabajar · obra

**RELACIONADOS** · `tema/trabajo#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/trabajo#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/trabajo#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/trabajo#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/trabajo#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### descanso · tema/descanso

**ID ESTRUCTURAL — NO EDITAR:** `tema/descanso`
**Ruta:** Explorar → Carácter y conducta → descanso
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/descanso#titulo` — TEXTO EDITABLE
descanso

**FAMILIA** · `tema/descanso#familia` — TEXTO EDITABLE
Carácter y conducta

**ID ORIGINAL** · `tema/descanso#id_original` — TEXTO EDITABLE
descanso

**LETRA AZ** · `tema/descanso#letra_az` — TEXTO EDITABLE
D

**ALIAS** · `tema/descanso#alias` — TEXTO EDITABLE
reposo · descansar

**RELACIONADOS** · `tema/descanso#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/descanso#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/descanso#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/descanso#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/descanso#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### disciplina · tema/disciplina

**ID ESTRUCTURAL — NO EDITAR:** `tema/disciplina`
**Ruta:** Explorar → Carácter y conducta → disciplina
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/disciplina#titulo` — TEXTO EDITABLE
disciplina

**FAMILIA** · `tema/disciplina#familia` — TEXTO EDITABLE
Carácter y conducta

**ID ORIGINAL** · `tema/disciplina#id_original` — TEXTO EDITABLE
disciplina

**LETRA AZ** · `tema/disciplina#letra_az` — TEXTO EDITABLE
D

**ALIAS** · `tema/disciplina#alias` — TEXTO EDITABLE
corrección · disciplinar

**RELACIONADOS** · `tema/disciplina#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/disciplina#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/disciplina#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/disciplina#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/disciplina#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### decisiones · tema/decisiones

**ID ESTRUCTURAL — NO EDITAR:** `tema/decisiones`
**Ruta:** Explorar → Decisiones y vida cotidiana → decisiones
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/decisiones#titulo` — TEXTO EDITABLE
decisiones

**FAMILIA** · `tema/decisiones#familia` — TEXTO EDITABLE
Decisiones y vida cotidiana

**ID ORIGINAL** · `tema/decisiones#id_original` — TEXTO EDITABLE
decisiones

**LETRA AZ** · `tema/decisiones#letra_az` — TEXTO EDITABLE
D

**ALIAS** · `tema/decisiones#alias` — TEXTO EDITABLE
escoger · elegir

**RELACIONADOS** · `tema/decisiones#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/decisiones#subtema` — TEXTO EDITABLE
Elegir con calma

**RESENA** · `tema/decisiones#resena` — TEXTO EDITABLE
Las decisiones pequeñas también importan. Estos pasajes invitan a pensar en las consecuencias y a elegir con responsabilidad.

**ADVERTENCIA PASTORAL** · `tema/decisiones#advertencia_pastoral` — TEXTO EDITABLE
No coaccionar elecciones vocacionales

**ESTADO REVISION** · `tema/decisiones#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/decisiones#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/decisiones#pasaje_1_referencia` — TEXTO EDITABLE
Deuteronomio 30:15–20

**PASAJE 1 RATIONALE** · `tema/decisiones#pasaje_1_rationale` — TEXTO EDITABLE
Un texto propone pensar qué camino conduce a la vida.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/decisiones#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
15, 16, 17, 18, 19, 20

**PASAJE 2 REFERENCIA** · `tema/decisiones#pasaje_2_referencia` — TEXTO EDITABLE
Lucas 14:28–33

**PASAJE 2 RATIONALE** · `tema/decisiones#pasaje_2_rationale` — TEXTO EDITABLE
Jesús usa un ejemplo cotidiano sobre planear antes de actuar.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/decisiones#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
28, 29, 30, 31, 32, 33


### propósito · tema/proposito

**ID ESTRUCTURAL — NO EDITAR:** `tema/proposito`
**Ruta:** Explorar → Decisiones y vida cotidiana → propósito
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/proposito#titulo` — TEXTO EDITABLE
propósito

**FAMILIA** · `tema/proposito#familia` — TEXTO EDITABLE
Decisiones y vida cotidiana

**ID ORIGINAL** · `tema/proposito#id_original` — TEXTO EDITABLE
proposito

**LETRA AZ** · `tema/proposito#letra_az` — TEXTO EDITABLE
P

**ALIAS** · `tema/proposito#alias` — TEXTO EDITABLE
propósitos · designio

**RELACIONADOS** · `tema/proposito#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/proposito#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/proposito#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/proposito#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/proposito#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### dirección · tema/direccion

**ID ESTRUCTURAL — NO EDITAR:** `tema/direccion`
**Ruta:** Explorar → Decisiones y vida cotidiana → dirección
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/direccion#titulo` — TEXTO EDITABLE
dirección

**FAMILIA** · `tema/direccion#familia` — TEXTO EDITABLE
Decisiones y vida cotidiana

**ID ORIGINAL** · `tema/direccion#id_original` — TEXTO EDITABLE
direccion

**LETRA AZ** · `tema/direccion#letra_az` — TEXTO EDITABLE
D

**ALIAS** · `tema/direccion#alias` — TEXTO EDITABLE
guiar · camino

**RELACIONADOS** · `tema/direccion#relacionados` — TEXTO EDITABLE
sabiduría · camino

**SUBTEMA** · `tema/direccion#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/direccion#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/direccion#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/direccion#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### dinero · tema/dinero

**ID ESTRUCTURAL — NO EDITAR:** `tema/dinero`
**Ruta:** Explorar → Decisiones y vida cotidiana → dinero
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/dinero#titulo` — TEXTO EDITABLE
dinero

**FAMILIA** · `tema/dinero#familia` — TEXTO EDITABLE
Decisiones y vida cotidiana

**ID ORIGINAL** · `tema/dinero#id_original` — TEXTO EDITABLE
dinero

**LETRA AZ** · `tema/dinero#letra_az` — TEXTO EDITABLE
D

**ALIAS** · `tema/dinero#alias` — TEXTO EDITABLE
riquezas · tesoro

**RELACIONADOS** · `tema/dinero#relacionados` — TEXTO EDITABLE
riquezas · generosidad

**SUBTEMA** · `tema/dinero#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/dinero#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/dinero#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/dinero#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### trabajo y vocación · tema/trabajo-y-vocacion

**ID ESTRUCTURAL — NO EDITAR:** `tema/trabajo-y-vocacion`
**Ruta:** Explorar → Decisiones y vida cotidiana → trabajo y vocación
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/trabajo-y-vocacion#titulo` — TEXTO EDITABLE
trabajo y vocación

**FAMILIA** · `tema/trabajo-y-vocacion#familia` — TEXTO EDITABLE
Decisiones y vida cotidiana

**ID ORIGINAL** · `tema/trabajo-y-vocacion#id_original` — TEXTO EDITABLE
trabajo-y-vocacion

**LETRA AZ** · `tema/trabajo-y-vocacion#letra_az` — TEXTO EDITABLE
T

**ALIAS** · `tema/trabajo-y-vocacion#alias` — TEXTO EDITABLE
obra · oficio

**RELACIONADOS** · `tema/trabajo-y-vocacion#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/trabajo-y-vocacion#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/trabajo-y-vocacion#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/trabajo-y-vocacion#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/trabajo-y-vocacion#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### estudios · tema/estudios

**ID ESTRUCTURAL — NO EDITAR:** `tema/estudios`
**Ruta:** Explorar → Decisiones y vida cotidiana → estudios
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/estudios#titulo` — TEXTO EDITABLE
estudios

**FAMILIA** · `tema/estudios#familia` — TEXTO EDITABLE
Decisiones y vida cotidiana

**ID ORIGINAL** · `tema/estudios#id_original` — TEXTO EDITABLE
estudios

**LETRA AZ** · `tema/estudios#letra_az` — TEXTO EDITABLE
E

**ALIAS** · `tema/estudios#alias` — TEXTO EDITABLE
aprender · enseñar

**RELACIONADOS** · `tema/estudios#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/estudios#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/estudios#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/estudios#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/estudios#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### tiempo · tema/tiempo

**ID ESTRUCTURAL — NO EDITAR:** `tema/tiempo`
**Ruta:** Explorar → Decisiones y vida cotidiana → tiempo
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/tiempo#titulo` — TEXTO EDITABLE
tiempo

**FAMILIA** · `tema/tiempo#familia` — TEXTO EDITABLE
Decisiones y vida cotidiana

**ID ORIGINAL** · `tema/tiempo#id_original` — TEXTO EDITABLE
tiempo

**LETRA AZ** · `tema/tiempo#letra_az` — TEXTO EDITABLE
T

**ALIAS** · `tema/tiempo#alias` — TEXTO EDITABLE
días · hora

**RELACIONADOS** · `tema/tiempo#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/tiempo#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/tiempo#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/tiempo#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/tiempo#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### salud · tema/salud

**ID ESTRUCTURAL — NO EDITAR:** `tema/salud`
**Ruta:** Explorar → Decisiones y vida cotidiana → salud
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/salud#titulo` — TEXTO EDITABLE
salud

**FAMILIA** · `tema/salud#familia` — TEXTO EDITABLE
Decisiones y vida cotidiana

**ID ORIGINAL** · `tema/salud#id_original` — TEXTO EDITABLE
salud

**LETRA AZ** · `tema/salud#letra_az` — TEXTO EDITABLE
S

**ALIAS** · `tema/salud#alias` — TEXTO EDITABLE
sanar · sanidad

**RELACIONADOS** · `tema/salud#relacionados` — TEXTO EDITABLE
sanar · enfermedad

**SUBTEMA** · `tema/salud#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/salud#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/salud#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/salud#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### sexualidad · tema/sexualidad

**ID ESTRUCTURAL — NO EDITAR:** `tema/sexualidad`
**Ruta:** Explorar → Decisiones y vida cotidiana → sexualidad
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/sexualidad#titulo` — TEXTO EDITABLE
sexualidad

**FAMILIA** · `tema/sexualidad#familia` — TEXTO EDITABLE
Decisiones y vida cotidiana

**ID ORIGINAL** · `tema/sexualidad#id_original` — TEXTO EDITABLE
sexualidad

**LETRA AZ** · `tema/sexualidad#letra_az` — TEXTO EDITABLE
S

**ALIAS** · `tema/sexualidad#alias` — TEXTO EDITABLE
fornicación · adulterio

**RELACIONADOS** · `tema/sexualidad#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/sexualidad#subtema` — TEXTO EDITABLE
Cuidar tu cuerpo y tus decisiones

**RESENA** · `tema/sexualidad#resena` — TEXTO EDITABLE
Tu cuerpo y tus límites merecen respeto. Estos pasajes abren preguntas sobre dignidad, responsabilidad y relaciones sin presiones.

**ADVERTENCIA PASTORAL** · `tema/sexualidad#advertencia_pastoral` — TEXTO EDITABLE
Revisión pastoral experta; no usar como coerción

**ESTADO REVISION** · `tema/sexualidad#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/sexualidad#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/sexualidad#pasaje_1_referencia` — TEXTO EDITABLE
1 Corintios 6:12–20

**PASAJE 1 RATIONALE** · `tema/sexualidad#pasaje_1_rationale` — TEXTO EDITABLE
Pablo habla de cuidar el cuerpo y actuar con responsabilidad.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/sexualidad#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
12, 13, 14, 15, 16, 17, 18, 19, 20

**PASAJE 2 REFERENCIA** · `tema/sexualidad#pasaje_2_referencia` — TEXTO EDITABLE
Génesis 2:18–25

**PASAJE 2 RATIONALE** · `tema/sexualidad#pasaje_2_rationale` — TEXTO EDITABLE
Un relato bíblico invita a pensar en la compañía y el vínculo.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/sexualidad#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
18, 19, 20, 21, 22, 23, 24, 25


### conflictos · tema/conflictos

**ID ESTRUCTURAL — NO EDITAR:** `tema/conflictos`
**Ruta:** Explorar → Decisiones y vida cotidiana → conflictos
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/conflictos#titulo` — TEXTO EDITABLE
conflictos

**FAMILIA** · `tema/conflictos#familia` — TEXTO EDITABLE
Decisiones y vida cotidiana

**ID ORIGINAL** · `tema/conflictos#id_original` — TEXTO EDITABLE
conflictos

**LETRA AZ** · `tema/conflictos#letra_az` — TEXTO EDITABLE
C

**ALIAS** · `tema/conflictos#alias` — TEXTO EDITABLE
contienda · pleito

**RELACIONADOS** · `tema/conflictos#relacionados` — TEXTO EDITABLE
paz · reconciliación

**SUBTEMA** · `tema/conflictos#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/conflictos#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/conflictos#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/conflictos#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### creación · tema/creacion

**ID ESTRUCTURAL — NO EDITAR:** `tema/creacion`
**Ruta:** Explorar → Biblia y comprensión → creación
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/creacion#titulo` — TEXTO EDITABLE
creación

**FAMILIA** · `tema/creacion#familia` — TEXTO EDITABLE
Biblia y comprensión

**ID ORIGINAL** · `tema/creacion#id_original` — TEXTO EDITABLE
creacion

**LETRA AZ** · `tema/creacion#letra_az` — TEXTO EDITABLE
C

**ALIAS** · `tema/creacion#alias` — TEXTO EDITABLE
crear · creó

**RELACIONADOS** · `tema/creacion#relacionados` — TEXTO EDITABLE
Dios · crear

**SUBTEMA** · `tema/creacion#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/creacion#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/creacion#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/creacion#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### pacto · tema/pacto

**ID ESTRUCTURAL — NO EDITAR:** `tema/pacto`
**Ruta:** Explorar → Biblia y comprensión → pacto
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/pacto#titulo` — TEXTO EDITABLE
pacto

**FAMILIA** · `tema/pacto#familia` — TEXTO EDITABLE
Biblia y comprensión

**ID ORIGINAL** · `tema/pacto#id_original` — TEXTO EDITABLE
pacto

**LETRA AZ** · `tema/pacto#letra_az` — TEXTO EDITABLE
P

**ALIAS** · `tema/pacto#alias` — TEXTO EDITABLE
alianza · pactó

**RELACIONADOS** · `tema/pacto#relacionados` — TEXTO EDITABLE
promesa · ley

**SUBTEMA** · `tema/pacto#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/pacto#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/pacto#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/pacto#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### ley · tema/ley

**ID ESTRUCTURAL — NO EDITAR:** `tema/ley`
**Ruta:** Explorar → Biblia y comprensión → ley
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/ley#titulo` — TEXTO EDITABLE
ley

**FAMILIA** · `tema/ley#familia` — TEXTO EDITABLE
Biblia y comprensión

**ID ORIGINAL** · `tema/ley#id_original` — TEXTO EDITABLE
ley

**LETRA AZ** · `tema/ley#letra_az` — TEXTO EDITABLE
L

**ALIAS** · `tema/ley#alias` — TEXTO EDITABLE
mandato · estatutos

**RELACIONADOS** · `tema/ley#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/ley#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/ley#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/ley#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/ley#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### profecía · tema/profecia

**ID ESTRUCTURAL — NO EDITAR:** `tema/profecia`
**Ruta:** Explorar → Biblia y comprensión → profecía
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/profecia#titulo` — TEXTO EDITABLE
profecía

**FAMILIA** · `tema/profecia#familia` — TEXTO EDITABLE
Biblia y comprensión

**ID ORIGINAL** · `tema/profecia#id_original` — TEXTO EDITABLE
profecia

**LETRA AZ** · `tema/profecia#letra_az` — TEXTO EDITABLE
P

**ALIAS** · `tema/profecia#alias` — TEXTO EDITABLE
profeta · profetizar

**RELACIONADOS** · `tema/profecia#relacionados` — TEXTO EDITABLE
profeta · promesa

**SUBTEMA** · `tema/profecia#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/profecia#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/profecia#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/profecia#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### parábolas · tema/parabolas

**ID ESTRUCTURAL — NO EDITAR:** `tema/parabolas`
**Ruta:** Explorar → Biblia y comprensión → parábolas
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/parabolas#titulo` — TEXTO EDITABLE
parábolas

**FAMILIA** · `tema/parabolas#familia` — TEXTO EDITABLE
Biblia y comprensión

**ID ORIGINAL** · `tema/parabolas#id_original` — TEXTO EDITABLE
parabolas

**LETRA AZ** · `tema/parabolas#letra_az` — TEXTO EDITABLE
P

**ALIAS** · `tema/parabolas#alias` — TEXTO EDITABLE
parábola

**RELACIONADOS** · `tema/parabolas#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/parabolas#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/parabolas#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/parabolas#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/parabolas#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### milagros · tema/milagros

**ID ESTRUCTURAL — NO EDITAR:** `tema/milagros`
**Ruta:** Explorar → Biblia y comprensión → milagros
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/milagros#titulo` — TEXTO EDITABLE
milagros

**FAMILIA** · `tema/milagros#familia` — TEXTO EDITABLE
Biblia y comprensión

**ID ORIGINAL** · `tema/milagros#id_original` — TEXTO EDITABLE
milagros

**LETRA AZ** · `tema/milagros#letra_az` — TEXTO EDITABLE
M

**ALIAS** · `tema/milagros#alias` — TEXTO EDITABLE
señales · maravillas

**RELACIONADOS** · `tema/milagros#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/milagros#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/milagros#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/milagros#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/milagros#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### resurrección · tema/resurreccion

**ID ESTRUCTURAL — NO EDITAR:** `tema/resurreccion`
**Ruta:** Explorar → Biblia y comprensión → resurrección
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/resurreccion#titulo` — TEXTO EDITABLE
resurrección

**FAMILIA** · `tema/resurreccion#familia` — TEXTO EDITABLE
Biblia y comprensión

**ID ORIGINAL** · `tema/resurreccion#id_original` — TEXTO EDITABLE
resurreccion

**LETRA AZ** · `tema/resurreccion#letra_az` — TEXTO EDITABLE
R

**ALIAS** · `tema/resurreccion#alias` — TEXTO EDITABLE
resucitar · resucitó

**RELACIONADOS** · `tema/resurreccion#relacionados` — TEXTO EDITABLE
vida · Jesús

**SUBTEMA** · `tema/resurreccion#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/resurreccion#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/resurreccion#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/resurreccion#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### cruz · tema/cruz

**ID ESTRUCTURAL — NO EDITAR:** `tema/cruz`
**Ruta:** Explorar → Biblia y comprensión → cruz
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/cruz#titulo` — TEXTO EDITABLE
cruz

**FAMILIA** · `tema/cruz#familia` — TEXTO EDITABLE
Biblia y comprensión

**ID ORIGINAL** · `tema/cruz#id_original` — TEXTO EDITABLE
cruz

**LETRA AZ** · `tema/cruz#letra_az` — TEXTO EDITABLE
C

**ALIAS** · `tema/cruz#alias` — TEXTO EDITABLE
crucificar · crucificado

**RELACIONADOS** · `tema/cruz#relacionados` — TEXTO EDITABLE
Cristo · salvación

**SUBTEMA** · `tema/cruz#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/cruz#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/cruz#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/cruz#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### mandamientos · tema/mandamientos

**ID ESTRUCTURAL — NO EDITAR:** `tema/mandamientos`
**Ruta:** Explorar → Biblia y comprensión → mandamientos
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/mandamientos#titulo` — TEXTO EDITABLE
mandamientos

**FAMILIA** · `tema/mandamientos#familia` — TEXTO EDITABLE
Biblia y comprensión

**ID ORIGINAL** · `tema/mandamientos#id_original` — TEXTO EDITABLE
mandamientos

**LETRA AZ** · `tema/mandamientos#letra_az` — TEXTO EDITABLE
M

**ALIAS** · `tema/mandamientos#alias` — TEXTO EDITABLE
mandamiento · mandó

**RELACIONADOS** · `tema/mandamientos#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/mandamientos#subtema` — TEXTO EDITABLE
Reglas para aprender a cuidar

**RESENA** · `tema/mandamientos#resena` — TEXTO EDITABLE
Las reglas pueden parecer muchas. Estos pasajes ayudan a descubrir qué relación tienen los mandamientos con el respeto y el amor a los demás.

**ADVERTENCIA PASTORAL** · `tema/mandamientos#advertencia_pastoral` — TEXTO EDITABLE
No emplear para amenazar menores

**ESTADO REVISION** · `tema/mandamientos#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/mandamientos#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/mandamientos#pasaje_1_referencia` — TEXTO EDITABLE
Éxodo 20:1–17

**PASAJE 1 RATIONALE** · `tema/mandamientos#pasaje_1_rationale` — TEXTO EDITABLE
Conoce los mandamientos dados al pueblo de Israel.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/mandamientos#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17

**PASAJE 2 REFERENCIA** · `tema/mandamientos#pasaje_2_referencia` — TEXTO EDITABLE
Mateo 22:34–40

**PASAJE 2 RATIONALE** · `tema/mandamientos#pasaje_2_rationale` — TEXTO EDITABLE
Jesús resume el camino de la ley en amar a Dios y al prójimo.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/mandamientos#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
34, 35, 36, 37, 38, 39, 40


### promesas · tema/promesas

**ID ESTRUCTURAL — NO EDITAR:** `tema/promesas`
**Ruta:** Explorar → Biblia y comprensión → promesas
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/promesas#titulo` — TEXTO EDITABLE
promesas

**FAMILIA** · `tema/promesas#familia` — TEXTO EDITABLE
Biblia y comprensión

**ID ORIGINAL** · `tema/promesas#id_original` — TEXTO EDITABLE
promesas

**LETRA AZ** · `tema/promesas#letra_az` — TEXTO EDITABLE
P

**ALIAS** · `tema/promesas#alias` — TEXTO EDITABLE
promesa · prometió

**RELACIONADOS** · `tema/promesas#relacionados` — TEXTO EDITABLE
pacto · esperanza

**SUBTEMA** · `tema/promesas#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/promesas#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/promesas#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/promesas#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### vida eterna · tema/vida-eterna

**ID ESTRUCTURAL — NO EDITAR:** `tema/vida-eterna`
**Ruta:** Explorar → Esperanza y vida cristiana → vida eterna
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/vida-eterna#titulo` — TEXTO EDITABLE
vida eterna

**FAMILIA** · `tema/vida-eterna#familia` — TEXTO EDITABLE
Esperanza y vida cristiana

**ID ORIGINAL** · `tema/vida-eterna#id_original` — TEXTO EDITABLE
vida-eterna

**LETRA AZ** · `tema/vida-eterna#letra_az` — TEXTO EDITABLE
V

**ALIAS** · `tema/vida-eterna#alias` — TEXTO EDITABLE
vida perpetua

**RELACIONADOS** · `tema/vida-eterna#relacionados` — TEXTO EDITABLE
salvación · resurrección

**SUBTEMA** · `tema/vida-eterna#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/vida-eterna#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/vida-eterna#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/vida-eterna#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### muerte · tema/muerte

**ID ESTRUCTURAL — NO EDITAR:** `tema/muerte`
**Ruta:** Explorar → Esperanza y vida cristiana → muerte
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/muerte#titulo` — TEXTO EDITABLE
muerte

**FAMILIA** · `tema/muerte#familia` — TEXTO EDITABLE
Esperanza y vida cristiana

**ID ORIGINAL** · `tema/muerte#id_original` — TEXTO EDITABLE
muerte

**LETRA AZ** · `tema/muerte#letra_az` — TEXTO EDITABLE
M

**ALIAS** · `tema/muerte#alias` — TEXTO EDITABLE
morir · muerto

**RELACIONADOS** · `tema/muerte#relacionados` — TEXTO EDITABLE
resurrección · vida

**SUBTEMA** · `tema/muerte#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/muerte#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/muerte#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/muerte#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### juicio · tema/juicio

**ID ESTRUCTURAL — NO EDITAR:** `tema/juicio`
**Ruta:** Explorar → Esperanza y vida cristiana → juicio
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/juicio#titulo` — TEXTO EDITABLE
juicio

**FAMILIA** · `tema/juicio#familia` — TEXTO EDITABLE
Esperanza y vida cristiana

**ID ORIGINAL** · `tema/juicio#id_original` — TEXTO EDITABLE
juicio

**LETRA AZ** · `tema/juicio#letra_az` — TEXTO EDITABLE
J

**ALIAS** · `tema/juicio#alias` — TEXTO EDITABLE
juzgar · juez

**RELACIONADOS** · `tema/juicio#relacionados` — TEXTO EDITABLE
justicia · juez

**SUBTEMA** · `tema/juicio#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/juicio#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/juicio#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/juicio#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### cielo · tema/cielo

**ID ESTRUCTURAL — NO EDITAR:** `tema/cielo`
**Ruta:** Explorar → Esperanza y vida cristiana → cielo
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/cielo#titulo` — TEXTO EDITABLE
cielo

**FAMILIA** · `tema/cielo#familia` — TEXTO EDITABLE
Esperanza y vida cristiana

**ID ORIGINAL** · `tema/cielo#id_original` — TEXTO EDITABLE
cielo

**LETRA AZ** · `tema/cielo#letra_az` — TEXTO EDITABLE
C

**ALIAS** · `tema/cielo#alias` — TEXTO EDITABLE
cielos

**RELACIONADOS** · `tema/cielo#relacionados` — TEXTO EDITABLE
NO CONSTA

**SUBTEMA** · `tema/cielo#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/cielo#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/cielo#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/cielo#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### misión · tema/mision

**ID ESTRUCTURAL — NO EDITAR:** `tema/mision`
**Ruta:** Explorar → Esperanza y vida cristiana → misión
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/mision#titulo` — TEXTO EDITABLE
misión

**FAMILIA** · `tema/mision#familia` — TEXTO EDITABLE
Esperanza y vida cristiana

**ID ORIGINAL** · `tema/mision#id_original` — TEXTO EDITABLE
mision

**LETRA AZ** · `tema/mision#letra_az` — TEXTO EDITABLE
M

**ALIAS** · `tema/mision#alias` — TEXTO EDITABLE
enviar · enviados

**RELACIONADOS** · `tema/mision#relacionados` — TEXTO EDITABLE
evangelio · enviar

**SUBTEMA** · `tema/mision#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/mision#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/mision#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/mision#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### discipulado · tema/discipulado

**ID ESTRUCTURAL — NO EDITAR:** `tema/discipulado`
**Ruta:** Explorar → Esperanza y vida cristiana → discipulado
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/discipulado#titulo` — TEXTO EDITABLE
discipulado

**FAMILIA** · `tema/discipulado#familia` — TEXTO EDITABLE
Esperanza y vida cristiana

**ID ORIGINAL** · `tema/discipulado#id_original` — TEXTO EDITABLE
discipulado

**LETRA AZ** · `tema/discipulado#letra_az` — TEXTO EDITABLE
D

**ALIAS** · `tema/discipulado#alias` — TEXTO EDITABLE
discípulo · discípulos

**RELACIONADOS** · `tema/discipulado#relacionados` — TEXTO EDITABLE
discípulo · seguir

**SUBTEMA** · `tema/discipulado#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/discipulado#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/discipulado#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/discipulado#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### testimonio · tema/testimonio

**ID ESTRUCTURAL — NO EDITAR:** `tema/testimonio`
**Ruta:** Explorar → Esperanza y vida cristiana → testimonio
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/testimonio#titulo` — TEXTO EDITABLE
testimonio

**FAMILIA** · `tema/testimonio#familia` — TEXTO EDITABLE
Esperanza y vida cristiana

**ID ORIGINAL** · `tema/testimonio#id_original` — TEXTO EDITABLE
testimonio

**LETRA AZ** · `tema/testimonio#letra_az` — TEXTO EDITABLE
T

**ALIAS** · `tema/testimonio#alias` — TEXTO EDITABLE
testigo · testigos

**RELACIONADOS** · `tema/testimonio#relacionados` — TEXTO EDITABLE
testigo · evangelio

**SUBTEMA** · `tema/testimonio#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/testimonio#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/testimonio#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/testimonio#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### iglesia · tema/iglesia

**ID ESTRUCTURAL — NO EDITAR:** `tema/iglesia`
**Ruta:** Explorar → Esperanza y vida cristiana → iglesia
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/iglesia#titulo` — TEXTO EDITABLE
iglesia

**FAMILIA** · `tema/iglesia#familia` — TEXTO EDITABLE
Esperanza y vida cristiana

**ID ORIGINAL** · `tema/iglesia#id_original` — TEXTO EDITABLE
iglesia

**LETRA AZ** · `tema/iglesia#letra_az` — TEXTO EDITABLE
I

**ALIAS** · `tema/iglesia#alias` — TEXTO EDITABLE
iglesias · congregación

**RELACIONADOS** · `tema/iglesia#relacionados` — TEXTO EDITABLE
comunidad · hermanos

**SUBTEMA** · `tema/iglesia#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/iglesia#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/iglesia#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/iglesia#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### dones · tema/dones

**ID ESTRUCTURAL — NO EDITAR:** `tema/dones`
**Ruta:** Explorar → Esperanza y vida cristiana → dones
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** SIN_TEXTO
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/dones#titulo` — TEXTO EDITABLE
dones

**FAMILIA** · `tema/dones#familia` — TEXTO EDITABLE
Esperanza y vida cristiana

**ID ORIGINAL** · `tema/dones#id_original` — TEXTO EDITABLE
dones

**LETRA AZ** · `tema/dones#letra_az` — TEXTO EDITABLE
D

**ALIAS** · `tema/dones#alias` — TEXTO EDITABLE
don · ministerios

**RELACIONADOS** · `tema/dones#relacionados` — TEXTO EDITABLE
servicio · Espíritu

**SUBTEMA** · `tema/dones#subtema` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**RESENA** · `tema/dones#resena` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**ADVERTENCIA PASTORAL** · `tema/dones#advertencia_pastoral` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN

**PASAJES** · `tema/dones#pasajes` — TEXTO EDITABLE
SIN TEXTO EDITORIAL AÚN


### fruto del Espíritu · tema/fruto-del-espiritu

**ID ESTRUCTURAL — NO EDITAR:** `tema/fruto-del-espiritu`
**Ruta:** Explorar → Esperanza y vida cristiana → fruto del Espíritu
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/topics.ts`

**TITULO** · `tema/fruto-del-espiritu#titulo` — TEXTO EDITABLE
fruto del Espíritu

**FAMILIA** · `tema/fruto-del-espiritu#familia` — TEXTO EDITABLE
Esperanza y vida cristiana

**ID ORIGINAL** · `tema/fruto-del-espiritu#id_original` — TEXTO EDITABLE
fruto-del-espiritu

**LETRA AZ** · `tema/fruto-del-espiritu#letra_az` — TEXTO EDITABLE
F

**ALIAS** · `tema/fruto-del-espiritu#alias` — TEXTO EDITABLE
fruto · Espíritu

**RELACIONADOS** · `tema/fruto-del-espiritu#relacionados` — TEXTO EDITABLE
amor · gozo · paz

**SUBTEMA** · `tema/fruto-del-espiritu#subtema` — TEXTO EDITABLE
Lo bueno que crece en nosotros

**RESENA** · `tema/fruto-del-espiritu#resena` — TEXTO EDITABLE
La paciencia, la bondad y el amor se ven en nuestros actos. La Biblia usa la imagen de un fruto para hablar de ese crecimiento.

**ADVERTENCIA PASTORAL** · `tema/fruto-del-espiritu#advertencia_pastoral` — TEXTO EDITABLE
Frutos no permiten evaluar personas como mejores

**ESTADO REVISION** · `tema/fruto-del-espiritu#estado_revision` — TEXTO EDITABLE
EN_REVISION

**VERIFICACION EXISTENCIA** · `tema/fruto-del-espiritu#verificacion_existencia` — TEXTO EDITABLE
true

**PASAJE 1 REFERENCIA** · `tema/fruto-del-espiritu#pasaje_1_referencia` — TEXTO EDITABLE
Gálatas 5:22–26

**PASAJE 1 RATIONALE** · `tema/fruto-del-espiritu#pasaje_1_rationale` — TEXTO EDITABLE
Pablo enumera actitudes que ayudan a vivir mejor con otros.

**PASAJE 1 ETIQUETAS DE VERSICULOS** · `tema/fruto-del-espiritu#pasaje_1_etiquetas_de_versiculos` — TEXTO EDITABLE
22, 23, 24, 25, 26

**PASAJE 2 REFERENCIA** · `tema/fruto-del-espiritu#pasaje_2_referencia` — TEXTO EDITABLE
Juan 15:1–8

**PASAJE 2 RATIONALE** · `tema/fruto-del-espiritu#pasaje_2_rationale` — TEXTO EDITABLE
Jesús utiliza la imagen de una vid para hablar de crecer y dar fruto.

**PASAJE 2 ETIQUETAS DE VERSICULOS** · `tema/fruto-del-espiritu#pasaje_2_etiquetas_de_versiculos` — TEXTO EDITABLE
1, 2, 3, 4, 5, 6, 7, 8


## 3. Leer · índice de los 66 libros

El corpus RV1909 se consulta en ejecución y **no se incluye**. Los capítulos y versículos exactos se extraen de SQLite: no se declara un número de capítulos sin verificar. El índice de libros es la lista codificada en `books.ts`.

### Génesis · biblia/libro-01

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-01`
**Ruta:** Leer → Antiguo Testamento → Génesis
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-01#nombre_libro` — TEXTO EDITABLE
Génesis


### Éxodo · biblia/libro-02

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-02`
**Ruta:** Leer → Antiguo Testamento → Éxodo
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-02#nombre_libro` — TEXTO EDITABLE
Éxodo


### Levítico · biblia/libro-03

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-03`
**Ruta:** Leer → Antiguo Testamento → Levítico
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-03#nombre_libro` — TEXTO EDITABLE
Levítico


### Números · biblia/libro-04

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-04`
**Ruta:** Leer → Antiguo Testamento → Números
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-04#nombre_libro` — TEXTO EDITABLE
Números


### Deuteronomio · biblia/libro-05

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-05`
**Ruta:** Leer → Antiguo Testamento → Deuteronomio
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-05#nombre_libro` — TEXTO EDITABLE
Deuteronomio


### Josué · biblia/libro-06

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-06`
**Ruta:** Leer → Antiguo Testamento → Josué
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-06#nombre_libro` — TEXTO EDITABLE
Josué


### Jueces · biblia/libro-07

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-07`
**Ruta:** Leer → Antiguo Testamento → Jueces
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-07#nombre_libro` — TEXTO EDITABLE
Jueces


### Rut · biblia/libro-08

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-08`
**Ruta:** Leer → Antiguo Testamento → Rut
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-08#nombre_libro` — TEXTO EDITABLE
Rut


### 1 Samuel · biblia/libro-09

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-09`
**Ruta:** Leer → Antiguo Testamento → 1 Samuel
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-09#nombre_libro` — TEXTO EDITABLE
1 Samuel


### 2 Samuel · biblia/libro-10

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-10`
**Ruta:** Leer → Antiguo Testamento → 2 Samuel
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-10#nombre_libro` — TEXTO EDITABLE
2 Samuel


### 1 Reyes · biblia/libro-11

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-11`
**Ruta:** Leer → Antiguo Testamento → 1 Reyes
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-11#nombre_libro` — TEXTO EDITABLE
1 Reyes


### 2 Reyes · biblia/libro-12

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-12`
**Ruta:** Leer → Antiguo Testamento → 2 Reyes
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-12#nombre_libro` — TEXTO EDITABLE
2 Reyes


### 1 Crónicas · biblia/libro-13

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-13`
**Ruta:** Leer → Antiguo Testamento → 1 Crónicas
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-13#nombre_libro` — TEXTO EDITABLE
1 Crónicas


### 2 Crónicas · biblia/libro-14

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-14`
**Ruta:** Leer → Antiguo Testamento → 2 Crónicas
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-14#nombre_libro` — TEXTO EDITABLE
2 Crónicas


### Esdras · biblia/libro-15

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-15`
**Ruta:** Leer → Antiguo Testamento → Esdras
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-15#nombre_libro` — TEXTO EDITABLE
Esdras


### Nehemías · biblia/libro-16

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-16`
**Ruta:** Leer → Antiguo Testamento → Nehemías
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-16#nombre_libro` — TEXTO EDITABLE
Nehemías


### Ester · biblia/libro-17

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-17`
**Ruta:** Leer → Antiguo Testamento → Ester
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-17#nombre_libro` — TEXTO EDITABLE
Ester


### Job · biblia/libro-18

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-18`
**Ruta:** Leer → Antiguo Testamento → Job
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-18#nombre_libro` — TEXTO EDITABLE
Job


### Salmos · biblia/libro-19

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-19`
**Ruta:** Leer → Antiguo Testamento → Salmos
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-19#nombre_libro` — TEXTO EDITABLE
Salmos


### Proverbios · biblia/libro-20

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-20`
**Ruta:** Leer → Antiguo Testamento → Proverbios
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-20#nombre_libro` — TEXTO EDITABLE
Proverbios


### Eclesiastés · biblia/libro-21

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-21`
**Ruta:** Leer → Antiguo Testamento → Eclesiastés
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-21#nombre_libro` — TEXTO EDITABLE
Eclesiastés


### Cantares · biblia/libro-22

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-22`
**Ruta:** Leer → Antiguo Testamento → Cantares
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-22#nombre_libro` — TEXTO EDITABLE
Cantares


### Isaías · biblia/libro-23

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-23`
**Ruta:** Leer → Antiguo Testamento → Isaías
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-23#nombre_libro` — TEXTO EDITABLE
Isaías


### Jeremías · biblia/libro-24

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-24`
**Ruta:** Leer → Antiguo Testamento → Jeremías
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-24#nombre_libro` — TEXTO EDITABLE
Jeremías


### Lamentaciones · biblia/libro-25

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-25`
**Ruta:** Leer → Antiguo Testamento → Lamentaciones
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-25#nombre_libro` — TEXTO EDITABLE
Lamentaciones


### Ezequiel · biblia/libro-26

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-26`
**Ruta:** Leer → Antiguo Testamento → Ezequiel
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-26#nombre_libro` — TEXTO EDITABLE
Ezequiel


### Daniel · biblia/libro-27

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-27`
**Ruta:** Leer → Antiguo Testamento → Daniel
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-27#nombre_libro` — TEXTO EDITABLE
Daniel


### Oseas · biblia/libro-28

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-28`
**Ruta:** Leer → Antiguo Testamento → Oseas
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-28#nombre_libro` — TEXTO EDITABLE
Oseas


### Joel · biblia/libro-29

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-29`
**Ruta:** Leer → Antiguo Testamento → Joel
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-29#nombre_libro` — TEXTO EDITABLE
Joel


### Amós · biblia/libro-30

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-30`
**Ruta:** Leer → Antiguo Testamento → Amós
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-30#nombre_libro` — TEXTO EDITABLE
Amós


### Abdías · biblia/libro-31

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-31`
**Ruta:** Leer → Antiguo Testamento → Abdías
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-31#nombre_libro` — TEXTO EDITABLE
Abdías


### Jonás · biblia/libro-32

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-32`
**Ruta:** Leer → Antiguo Testamento → Jonás
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-32#nombre_libro` — TEXTO EDITABLE
Jonás


### Miqueas · biblia/libro-33

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-33`
**Ruta:** Leer → Antiguo Testamento → Miqueas
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-33#nombre_libro` — TEXTO EDITABLE
Miqueas


### Nahúm · biblia/libro-34

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-34`
**Ruta:** Leer → Antiguo Testamento → Nahúm
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-34#nombre_libro` — TEXTO EDITABLE
Nahúm


### Habacuc · biblia/libro-35

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-35`
**Ruta:** Leer → Antiguo Testamento → Habacuc
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-35#nombre_libro` — TEXTO EDITABLE
Habacuc


### Sofonías · biblia/libro-36

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-36`
**Ruta:** Leer → Antiguo Testamento → Sofonías
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-36#nombre_libro` — TEXTO EDITABLE
Sofonías


### Hageo · biblia/libro-37

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-37`
**Ruta:** Leer → Antiguo Testamento → Hageo
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-37#nombre_libro` — TEXTO EDITABLE
Hageo


### Zacarías · biblia/libro-38

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-38`
**Ruta:** Leer → Antiguo Testamento → Zacarías
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-38#nombre_libro` — TEXTO EDITABLE
Zacarías


### Malaquías · biblia/libro-39

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-39`
**Ruta:** Leer → Antiguo Testamento → Malaquías
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-39#nombre_libro` — TEXTO EDITABLE
Malaquías


### Mateo · biblia/libro-40

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-40`
**Ruta:** Leer → Nuevo Testamento → Mateo
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-40#nombre_libro` — TEXTO EDITABLE
Mateo


### Marcos · biblia/libro-41

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-41`
**Ruta:** Leer → Nuevo Testamento → Marcos
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-41#nombre_libro` — TEXTO EDITABLE
Marcos


### Lucas · biblia/libro-42

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-42`
**Ruta:** Leer → Nuevo Testamento → Lucas
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-42#nombre_libro` — TEXTO EDITABLE
Lucas


### Juan · biblia/libro-43

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-43`
**Ruta:** Leer → Nuevo Testamento → Juan
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-43#nombre_libro` — TEXTO EDITABLE
Juan


### Hechos · biblia/libro-44

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-44`
**Ruta:** Leer → Nuevo Testamento → Hechos
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-44#nombre_libro` — TEXTO EDITABLE
Hechos


### Romanos · biblia/libro-45

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-45`
**Ruta:** Leer → Nuevo Testamento → Romanos
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-45#nombre_libro` — TEXTO EDITABLE
Romanos


### 1 Corintios · biblia/libro-46

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-46`
**Ruta:** Leer → Nuevo Testamento → 1 Corintios
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-46#nombre_libro` — TEXTO EDITABLE
1 Corintios


### 2 Corintios · biblia/libro-47

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-47`
**Ruta:** Leer → Nuevo Testamento → 2 Corintios
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-47#nombre_libro` — TEXTO EDITABLE
2 Corintios


### Gálatas · biblia/libro-48

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-48`
**Ruta:** Leer → Nuevo Testamento → Gálatas
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-48#nombre_libro` — TEXTO EDITABLE
Gálatas


### Efesios · biblia/libro-49

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-49`
**Ruta:** Leer → Nuevo Testamento → Efesios
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-49#nombre_libro` — TEXTO EDITABLE
Efesios


### Filipenses · biblia/libro-50

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-50`
**Ruta:** Leer → Nuevo Testamento → Filipenses
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-50#nombre_libro` — TEXTO EDITABLE
Filipenses


### Colosenses · biblia/libro-51

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-51`
**Ruta:** Leer → Nuevo Testamento → Colosenses
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-51#nombre_libro` — TEXTO EDITABLE
Colosenses


### 1 Tesalonicenses · biblia/libro-52

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-52`
**Ruta:** Leer → Nuevo Testamento → 1 Tesalonicenses
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-52#nombre_libro` — TEXTO EDITABLE
1 Tesalonicenses


### 2 Tesalonicenses · biblia/libro-53

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-53`
**Ruta:** Leer → Nuevo Testamento → 2 Tesalonicenses
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-53#nombre_libro` — TEXTO EDITABLE
2 Tesalonicenses


### 1 Timoteo · biblia/libro-54

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-54`
**Ruta:** Leer → Nuevo Testamento → 1 Timoteo
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-54#nombre_libro` — TEXTO EDITABLE
1 Timoteo


### 2 Timoteo · biblia/libro-55

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-55`
**Ruta:** Leer → Nuevo Testamento → 2 Timoteo
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-55#nombre_libro` — TEXTO EDITABLE
2 Timoteo


### Tito · biblia/libro-56

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-56`
**Ruta:** Leer → Nuevo Testamento → Tito
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-56#nombre_libro` — TEXTO EDITABLE
Tito


### Filemón · biblia/libro-57

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-57`
**Ruta:** Leer → Nuevo Testamento → Filemón
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-57#nombre_libro` — TEXTO EDITABLE
Filemón


### Hebreos · biblia/libro-58

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-58`
**Ruta:** Leer → Nuevo Testamento → Hebreos
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-58#nombre_libro` — TEXTO EDITABLE
Hebreos


### Santiago · biblia/libro-59

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-59`
**Ruta:** Leer → Nuevo Testamento → Santiago
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-59#nombre_libro` — TEXTO EDITABLE
Santiago


### 1 Pedro · biblia/libro-60

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-60`
**Ruta:** Leer → Nuevo Testamento → 1 Pedro
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-60#nombre_libro` — TEXTO EDITABLE
1 Pedro


### 2 Pedro · biblia/libro-61

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-61`
**Ruta:** Leer → Nuevo Testamento → 2 Pedro
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-61#nombre_libro` — TEXTO EDITABLE
2 Pedro


### 1 Juan · biblia/libro-62

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-62`
**Ruta:** Leer → Nuevo Testamento → 1 Juan
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-62#nombre_libro` — TEXTO EDITABLE
1 Juan


### 2 Juan · biblia/libro-63

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-63`
**Ruta:** Leer → Nuevo Testamento → 2 Juan
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-63#nombre_libro` — TEXTO EDITABLE
2 Juan


### 3 Juan · biblia/libro-64

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-64`
**Ruta:** Leer → Nuevo Testamento → 3 Juan
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-64#nombre_libro` — TEXTO EDITABLE
3 Juan


### Judas · biblia/libro-65

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-65`
**Ruta:** Leer → Nuevo Testamento → Judas
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-65#nombre_libro` — TEXTO EDITABLE
Judas


### Apocalipsis · biblia/libro-66

**ID ESTRUCTURAL — NO EDITAR:** `biblia/libro-66`
**Ruta:** Leer → Nuevo Testamento → Apocalipsis
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** ESTRUCTURAL
**Origen técnico:** `apps/bible-topic-explorer/src/product/books.ts`

**NOMBRE LIBRO** · `biblia/libro-66#nombre_libro` — TEXTO EDITABLE
Apocalipsis

Se excluyen notas, resaltados, marcadores, historial, reflexiones y demás datos personales.

## 4. Planes de lectura · 4 planes / 28 días


### Encuentro con Jesús · plan/encuentro

**ID ESTRUCTURAL — NO EDITAR:** `plan/encuentro`
**Ruta:** Menú → Planes → Encuentro con Jesús
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/encuentro#titulo` — TEXTO EDITABLE
Encuentro con Jesús

**TEMA** · `plan/encuentro#tema` — TEXTO EDITABLE
Evangelios

**PRESENTACION** · `plan/encuentro#presentacion` — TEXTO EDITABLE
Siete encuentros para descubrir gestos de Jesús en su contexto.


### Día 1: Llamados a escuchar · plan/encuentro/dia-1

**ID ESTRUCTURAL — NO EDITAR:** `plan/encuentro/dia-1`
**Ruta:** Menú → Planes → Encuentro con Jesús → Día 1
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/encuentro/dia-1#titulo` — TEXTO EDITABLE
Llamados a escuchar

**REFERENCIA** · `plan/encuentro/dia-1#referencia` — TEXTO EDITABLE
Marcos 1:14–20

**REFLEXION** · `plan/encuentro/dia-1#reflexion` — TEXTO EDITABLE
Los primeros discípulos responden en una situación concreta. Escucha qué ocurre antes de aplicar la lectura a tu historia.

**ORACION** · `plan/encuentro/dia-1#oracion` — TEXTO EDITABLE
Jesús, acompaña mis decisiones de hoy.

**ACCION** · `plan/encuentro/dia-1#accion` — TEXTO EDITABLE
Escucha cinco minutos sin interrumpir.

**REVISION** · `plan/encuentro/dia-1#revision` — TEXTO EDITABLE
EN_REVISION


### Día 2: En busca de descanso · plan/encuentro/dia-2

**ID ESTRUCTURAL — NO EDITAR:** `plan/encuentro/dia-2`
**Ruta:** Menú → Planes → Encuentro con Jesús → Día 2
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/encuentro/dia-2#titulo` — TEXTO EDITABLE
En busca de descanso

**REFERENCIA** · `plan/encuentro/dia-2#referencia` — TEXTO EDITABLE
Mateo 11:25–30

**REFLEXION** · `plan/encuentro/dia-2#reflexion` — TEXTO EDITABLE
El descanso ofrecido debe leerse en relación con el llamado de Jesús, sin negar necesidades de salud.

**ORACION** · `plan/encuentro/dia-2#oracion` — TEXTO EDITABLE
Señor, enséñanos a acompañar con respeto.

**ACCION** · `plan/encuentro/dia-2#accion` — TEXTO EDITABLE
Ofrece ayuda sin imponerla.

**REVISION** · `plan/encuentro/dia-2#revision` — TEXTO EDITABLE
EN_REVISION


### Día 3: Compartir lo que hay · plan/encuentro/dia-3

**ID ESTRUCTURAL — NO EDITAR:** `plan/encuentro/dia-3`
**Ruta:** Menú → Planes → Encuentro con Jesús → Día 3
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/encuentro/dia-3#titulo` — TEXTO EDITABLE
Compartir lo que hay

**REFERENCIA** · `plan/encuentro/dia-3#referencia` — TEXTO EDITABLE
Juan 6:1–15

**REFLEXION** · `plan/encuentro/dia-3#reflexion` — TEXTO EDITABLE
El alimento compartido abre preguntas sobre responsabilidad colectiva. No reduzcas el relato a una promesa de riqueza.

**ORACION** · `plan/encuentro/dia-3#oracion` — TEXTO EDITABLE
Jesús, danos generosidad prudente.

**ACCION** · `plan/encuentro/dia-3#accion` — TEXTO EDITABLE
Comparte un recurso disponible.

**REVISION** · `plan/encuentro/dia-3#revision` — TEXTO EDITABLE
EN_REVISION


### Día 4: Escuchar en el camino · plan/encuentro/dia-4

**ID ESTRUCTURAL — NO EDITAR:** `plan/encuentro/dia-4`
**Ruta:** Menú → Planes → Encuentro con Jesús → Día 4
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/encuentro/dia-4#titulo` — TEXTO EDITABLE
Escuchar en el camino

**REFERENCIA** · `plan/encuentro/dia-4#referencia` — TEXTO EDITABLE
Lucas 10:38–42

**REFLEXION** · `plan/encuentro/dia-4#reflexion` — TEXTO EDITABLE
Dos formas de acoger aparecen en tensión; no conviertas la comparación en reproche contra el trabajo doméstico.

**ORACION** · `plan/encuentro/dia-4#oracion` — TEXTO EDITABLE
Señor, danos escucha atenta.

**ACCION** · `plan/encuentro/dia-4#accion` — TEXTO EDITABLE
Dedica un momento sin pantallas a alguien.

**REVISION** · `plan/encuentro/dia-4#revision` — TEXTO EDITABLE
EN_REVISION


### Día 5: Acercarse con respeto · plan/encuentro/dia-5

**ID ESTRUCTURAL — NO EDITAR:** `plan/encuentro/dia-5`
**Ruta:** Menú → Planes → Encuentro con Jesús → Día 5
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/encuentro/dia-5#titulo` — TEXTO EDITABLE
Acercarse con respeto

**REFERENCIA** · `plan/encuentro/dia-5#referencia` — TEXTO EDITABLE
Marcos 10:46–52

**REFLEXION** · `plan/encuentro/dia-5#reflexion` — TEXTO EDITABLE
Jesús pregunta qué necesita la otra persona en lugar de presuponerlo.

**ORACION** · `plan/encuentro/dia-5#oracion` — TEXTO EDITABLE
Ayúdanos a escuchar antes de decidir.

**ACCION** · `plan/encuentro/dia-5#accion` — TEXTO EDITABLE
Pregunta primero cómo puedes ayudar.

**REVISION** · `plan/encuentro/dia-5#revision` — TEXTO EDITABLE
EN_REVISION


### Día 6: Caminar con preguntas · plan/encuentro/dia-6

**ID ESTRUCTURAL — NO EDITAR:** `plan/encuentro/dia-6`
**Ruta:** Menú → Planes → Encuentro con Jesús → Día 6
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/encuentro/dia-6#titulo` — TEXTO EDITABLE
Caminar con preguntas

**REFERENCIA** · `plan/encuentro/dia-6#referencia` — TEXTO EDITABLE
Lucas 24:13–35

**REFLEXION** · `plan/encuentro/dia-6#reflexion` — TEXTO EDITABLE
Los viajeros explican su experiencia; el contexto del relato da forma al reconocimiento.

**ORACION** · `plan/encuentro/dia-6#oracion` — TEXTO EDITABLE
Acompaña nuestras dudas con paciencia.

**ACCION** · `plan/encuentro/dia-6#accion` — TEXTO EDITABLE
Formula una pregunta honesta sobre tu lectura.

**REVISION** · `plan/encuentro/dia-6#revision` — TEXTO EDITABLE
EN_REVISION


### Día 7: Permanecer en el amor · plan/encuentro/dia-7

**ID ESTRUCTURAL — NO EDITAR:** `plan/encuentro/dia-7`
**Ruta:** Menú → Planes → Encuentro con Jesús → Día 7
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/encuentro/dia-7#titulo` — TEXTO EDITABLE
Permanecer en el amor

**REFERENCIA** · `plan/encuentro/dia-7#referencia` — TEXTO EDITABLE
Juan 15:1–12

**REFLEXION** · `plan/encuentro/dia-7#reflexion` — TEXTO EDITABLE
La imagen de la vid presenta relaciones y responsabilidad; lee todo el discurso antes de sacar conclusiones.

**ORACION** · `plan/encuentro/dia-7#oracion` — TEXTO EDITABLE
Señor, que nuestro amor se vea en obras.

**ACCION** · `plan/encuentro/dia-7#accion` — TEXTO EDITABLE
Reconoce un aporte de tu comunidad.

**REVISION** · `plan/encuentro/dia-7#revision` — TEXTO EDITABLE
EN_REVISION


### Amor en acción · plan/amor

**ID ESTRUCTURAL — NO EDITAR:** `plan/amor`
**Ruta:** Menú → Planes → Amor en acción
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/amor#titulo` — TEXTO EDITABLE
Amor en acción

**TEMA** · `plan/amor#tema` — TEXTO EDITABLE
Servicio

**PRESENTACION** · `plan/amor#presentacion` — TEXTO EDITABLE
Practicar cuidado, límites y solidaridad sin exponer a otros.


### Día 1: Amar de palabra y hecho · plan/amor/dia-1

**ID ESTRUCTURAL — NO EDITAR:** `plan/amor/dia-1`
**Ruta:** Menú → Planes → Amor en acción → Día 1
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/amor/dia-1#titulo` — TEXTO EDITABLE
Amar de palabra y hecho

**REFERENCIA** · `plan/amor/dia-1#referencia` — TEXTO EDITABLE
1 Juan 3:16–20

**REFLEXION** · `plan/amor/dia-1#reflexion` — TEXTO EDITABLE
El cuidado se expresa mediante acciones concretas, no solo discursos.

**ORACION** · `plan/amor/dia-1#oracion` — TEXTO EDITABLE
Enséñanos a actuar con ternura.

**ACCION** · `plan/amor/dia-1#accion` — TEXTO EDITABLE
Haz una acción pequeña y respetuosa.

**REVISION** · `plan/amor/dia-1#revision` — TEXTO EDITABLE
EN_REVISION


### Día 2: El prójimo inesperado · plan/amor/dia-2

**ID ESTRUCTURAL — NO EDITAR:** `plan/amor/dia-2`
**Ruta:** Menú → Planes → Amor en acción → Día 2
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/amor/dia-2#titulo` — TEXTO EDITABLE
El prójimo inesperado

**REFERENCIA** · `plan/amor/dia-2#referencia` — TEXTO EDITABLE
Lucas 10:25–37

**REFLEXION** · `plan/amor/dia-2#reflexion` — TEXTO EDITABLE
Preguntar quién es prójimo cambia al leer la historia completa y su diálogo.

**ORACION** · `plan/amor/dia-2#oracion` — TEXTO EDITABLE
Danos ojos para escuchar al otro.

**ACCION** · `plan/amor/dia-2#accion` — TEXTO EDITABLE
Conoce un recurso comunitario real.

**REVISION** · `plan/amor/dia-2#revision` — TEXTO EDITABLE
EN_REVISION


### Día 3: Servir sin protagonismo · plan/amor/dia-3

**ID ESTRUCTURAL — NO EDITAR:** `plan/amor/dia-3`
**Ruta:** Menú → Planes → Amor en acción → Día 3
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/amor/dia-3#titulo` — TEXTO EDITABLE
Servir sin protagonismo

**REFERENCIA** · `plan/amor/dia-3#referencia` — TEXTO EDITABLE
Marcos 10:35–45

**REFLEXION** · `plan/amor/dia-3#reflexion` — TEXTO EDITABLE
El servicio de Jesús confronta posiciones de prestigio; no justifica abusos ni sumisión forzada.

**ORACION** · `plan/amor/dia-3#oracion` — TEXTO EDITABLE
Libéranos del deseo de dominar.

**ACCION** · `plan/amor/dia-3#accion` — TEXTO EDITABLE
Cede la palabra a otra voz.

**REVISION** · `plan/amor/dia-3#revision` — TEXTO EDITABLE
EN_REVISION


### Día 4: Amor que cuida límites · plan/amor/dia-4

**ID ESTRUCTURAL — NO EDITAR:** `plan/amor/dia-4`
**Ruta:** Menú → Planes → Amor en acción → Día 4
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/amor/dia-4#titulo` — TEXTO EDITABLE
Amor que cuida límites

**REFERENCIA** · `plan/amor/dia-4#referencia` — TEXTO EDITABLE
1 Corintios 13:1–13

**REFLEXION** · `plan/amor/dia-4#reflexion` — TEXTO EDITABLE
La poesía sobre el amor no sustituye la protección ante daño o violencia.

**ORACION** · `plan/amor/dia-4#oracion` — TEXTO EDITABLE
Enséñanos paciencia con dignidad.

**ACCION** · `plan/amor/dia-4#accion` — TEXTO EDITABLE
Anota un límite respetuoso.

**REVISION** · `plan/amor/dia-4#revision` — TEXTO EDITABLE
EN_REVISION


### Día 5: Compartir responsablemente · plan/amor/dia-5

**ID ESTRUCTURAL — NO EDITAR:** `plan/amor/dia-5`
**Ruta:** Menú → Planes → Amor en acción → Día 5
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/amor/dia-5#titulo` — TEXTO EDITABLE
Compartir responsablemente

**REFERENCIA** · `plan/amor/dia-5#referencia` — TEXTO EDITABLE
Hechos 2:42–47

**REFLEXION** · `plan/amor/dia-5#reflexion` — TEXTO EDITABLE
La comunidad comparte recursos en contexto; no impongas donaciones ni publiques datos.

**ORACION** · `plan/amor/dia-5#oracion` — TEXTO EDITABLE
Ayúdanos a sostenernos juntos.

**ACCION** · `plan/amor/dia-5#accion` — TEXTO EDITABLE
Consulta qué ayuda es realmente útil.

**REVISION** · `plan/amor/dia-5#revision` — TEXTO EDITABLE
EN_REVISION


### Día 6: Cuidar en comunidad · plan/amor/dia-6

**ID ESTRUCTURAL — NO EDITAR:** `plan/amor/dia-6`
**Ruta:** Menú → Planes → Amor en acción → Día 6
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/amor/dia-6#titulo` — TEXTO EDITABLE
Cuidar en comunidad

**REFERENCIA** · `plan/amor/dia-6#referencia` — TEXTO EDITABLE
Gálatas 6:1–10

**REFLEXION** · `plan/amor/dia-6#reflexion` — TEXTO EDITABLE
La exhortación combina ayudar y asumir responsabilidades.

**ORACION** · `plan/amor/dia-6#oracion` — TEXTO EDITABLE
Que cuidemos sin controlar.

**ACCION** · `plan/amor/dia-6#accion` — TEXTO EDITABLE
Acompaña sin pedir información privada.

**REVISION** · `plan/amor/dia-6#revision` — TEXTO EDITABLE
EN_REVISION


### Día 7: Una práctica nueva · plan/amor/dia-7

**ID ESTRUCTURAL — NO EDITAR:** `plan/amor/dia-7`
**Ruta:** Menú → Planes → Amor en acción → Día 7
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/amor/dia-7#titulo` — TEXTO EDITABLE
Una práctica nueva

**REFERENCIA** · `plan/amor/dia-7#referencia` — TEXTO EDITABLE
Romanos 12:9–18

**REFLEXION** · `plan/amor/dia-7#reflexion` — TEXTO EDITABLE
El amor sincero se expresa en vínculos y convivencia prudente.

**ORACION** · `plan/amor/dia-7#oracion` — TEXTO EDITABLE
Que el bien crezca entre nosotros.

**ACCION** · `plan/amor/dia-7#accion` — TEXTO EDITABLE
Agradece una tarea invisible.

**REVISION** · `plan/amor/dia-7#revision` — TEXTO EDITABLE
EN_REVISION


### Esperanza y confianza · plan/esperanza

**ID ESTRUCTURAL — NO EDITAR:** `plan/esperanza`
**Ruta:** Menú → Planes → Esperanza y confianza
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/esperanza#titulo` — TEXTO EDITABLE
Esperanza y confianza

**TEMA** · `plan/esperanza#tema` — TEXTO EDITABLE
Reflexión

**PRESENTACION** · `plan/esperanza#presentacion` — TEXTO EDITABLE
Leer promesas bíblicas con contexto y sin trivializar el sufrimiento.


### Día 1: Una confianza expresada · plan/esperanza/dia-1

**ID ESTRUCTURAL — NO EDITAR:** `plan/esperanza/dia-1`
**Ruta:** Menú → Planes → Esperanza y confianza → Día 1
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/esperanza/dia-1#titulo` — TEXTO EDITABLE
Una confianza expresada

**REFERENCIA** · `plan/esperanza/dia-1#referencia` — TEXTO EDITABLE
Salmos 23:1–6

**REFLEXION** · `plan/esperanza/dia-1#reflexion` — TEXTO EDITABLE
El salmo emplea imágenes de cuidado y peligro; no promete ausencia de dolor.

**ORACION** · `plan/esperanza/dia-1#oracion` — TEXTO EDITABLE
Acompaña nuestros caminos difíciles.

**ACCION** · `plan/esperanza/dia-1#accion` — TEXTO EDITABLE
Escribe algo que te sostiene.

**REVISION** · `plan/esperanza/dia-1#revision` — TEXTO EDITABLE
EN_REVISION


### Día 2: Fuerza en comunidad · plan/esperanza/dia-2

**ID ESTRUCTURAL — NO EDITAR:** `plan/esperanza/dia-2`
**Ruta:** Menú → Planes → Esperanza y confianza → Día 2
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/esperanza/dia-2#titulo` — TEXTO EDITABLE
Fuerza en comunidad

**REFERENCIA** · `plan/esperanza/dia-2#referencia` — TEXTO EDITABLE
Isaías 40:27–31

**REFLEXION** · `plan/esperanza/dia-2#reflexion` — TEXTO EDITABLE
La consolación habla a un pueblo cansado; evita usarla para exigir rendimiento.

**ORACION** · `plan/esperanza/dia-2#oracion` — TEXTO EDITABLE
Ayúdanos a descansar sin culpa.

**ACCION** · `plan/esperanza/dia-2#accion` — TEXTO EDITABLE
Respeta una pausa propia o ajena.

**REVISION** · `plan/esperanza/dia-2#revision` — TEXTO EDITABLE
EN_REVISION


### Día 3: Descanso compartido · plan/esperanza/dia-3

**ID ESTRUCTURAL — NO EDITAR:** `plan/esperanza/dia-3`
**Ruta:** Menú → Planes → Esperanza y confianza → Día 3
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/esperanza/dia-3#titulo` — TEXTO EDITABLE
Descanso compartido

**REFERENCIA** · `plan/esperanza/dia-3#referencia` — TEXTO EDITABLE
Mateo 6:25–34

**REFLEXION** · `plan/esperanza/dia-3#reflexion` — TEXTO EDITABLE
La enseñanza pregunta por ansiedad y prioridades; no invalida dificultades materiales.

**ORACION** · `plan/esperanza/dia-3#oracion` — TEXTO EDITABLE
Danos sabiduría para pedir apoyo.

**ACCION** · `plan/esperanza/dia-3#accion` — TEXTO EDITABLE
Identifica una ayuda concreta.

**REVISION** · `plan/esperanza/dia-3#revision` — TEXTO EDITABLE
EN_REVISION


### Día 4: Caminar en la duda · plan/esperanza/dia-4

**ID ESTRUCTURAL — NO EDITAR:** `plan/esperanza/dia-4`
**Ruta:** Menú → Planes → Esperanza y confianza → Día 4
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/esperanza/dia-4#titulo` — TEXTO EDITABLE
Caminar en la duda

**REFERENCIA** · `plan/esperanza/dia-4#referencia` — TEXTO EDITABLE
Salmos 42:1–11

**REFLEXION** · `plan/esperanza/dia-4#reflexion` — TEXTO EDITABLE
La oración describe desaliento con franqueza; permite expresar preguntas.

**ORACION** · `plan/esperanza/dia-4#oracion` — TEXTO EDITABLE
Recibe nuestras palabras sinceras.

**ACCION** · `plan/esperanza/dia-4#accion` — TEXTO EDITABLE
Escucha sin intentar arreglar todo.

**REVISION** · `plan/esperanza/dia-4#revision` — TEXTO EDITABLE
EN_REVISION


### Día 5: Esperar con paciencia · plan/esperanza/dia-5

**ID ESTRUCTURAL — NO EDITAR:** `plan/esperanza/dia-5`
**Ruta:** Menú → Planes → Esperanza y confianza → Día 5
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/esperanza/dia-5#titulo` — TEXTO EDITABLE
Esperar con paciencia

**REFERENCIA** · `plan/esperanza/dia-5#referencia` — TEXTO EDITABLE
Romanos 8:18–27

**REFLEXION** · `plan/esperanza/dia-5#reflexion` — TEXTO EDITABLE
El texto nombra sufrimiento y esperanza juntos.

**ORACION** · `plan/esperanza/dia-5#oracion` — TEXTO EDITABLE
Danos paciencia sin resignación al daño.

**ACCION** · `plan/esperanza/dia-5#accion` — TEXTO EDITABLE
Identifica una acción posible hoy.

**REVISION** · `plan/esperanza/dia-5#revision` — TEXTO EDITABLE
EN_REVISION


### Día 6: Recordar la compañía · plan/esperanza/dia-6

**ID ESTRUCTURAL — NO EDITAR:** `plan/esperanza/dia-6`
**Ruta:** Menú → Planes → Esperanza y confianza → Día 6
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/esperanza/dia-6#titulo` — TEXTO EDITABLE
Recordar la compañía

**REFERENCIA** · `plan/esperanza/dia-6#referencia` — TEXTO EDITABLE
Lamentaciones 3:19–26

**REFLEXION** · `plan/esperanza/dia-6#reflexion` — TEXTO EDITABLE
El lamento se sitúa antes de la declaración de confianza.

**ORACION** · `plan/esperanza/dia-6#oracion` — TEXTO EDITABLE
Sostén a quienes lamentan pérdidas.

**ACCION** · `plan/esperanza/dia-6#accion` — TEXTO EDITABLE
Ofrece compañía sin pedir explicaciones.

**REVISION** · `plan/esperanza/dia-6#revision` — TEXTO EDITABLE
EN_REVISION


### Día 7: Esperanza activa · plan/esperanza/dia-7

**ID ESTRUCTURAL — NO EDITAR:** `plan/esperanza/dia-7`
**Ruta:** Menú → Planes → Esperanza y confianza → Día 7
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/esperanza/dia-7#titulo` — TEXTO EDITABLE
Esperanza activa

**REFERENCIA** · `plan/esperanza/dia-7#referencia` — TEXTO EDITABLE
1 Pedro 1:3–9

**REFLEXION** · `plan/esperanza/dia-7#reflexion` — TEXTO EDITABLE
La esperanza se vincula a una comunidad bajo presión; no garantiza resultados inmediatos.

**ORACION** · `plan/esperanza/dia-7#oracion` — TEXTO EDITABLE
Que nuestra esperanza produzca cuidado.

**ACCION** · `plan/esperanza/dia-7#accion` — TEXTO EDITABLE
Anota un gesto concreto de solidaridad.

**REVISION** · `plan/esperanza/dia-7#revision` — TEXTO EDITABLE
EN_REVISION


### Oración y comunidad · plan/oracion

**ID ESTRUCTURAL — NO EDITAR:** `plan/oracion`
**Ruta:** Menú → Planes → Oración y comunidad
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/oracion#titulo` — TEXTO EDITABLE
Oración y comunidad

**TEMA** · `plan/oracion#tema` — TEXTO EDITABLE
Oración

**PRESENTACION** · `plan/oracion#presentacion` — TEXTO EDITABLE
Siete lecturas sobre oración voluntaria, escucha y convivencia.


### Día 1: La oración enseñada · plan/oracion/dia-1

**ID ESTRUCTURAL — NO EDITAR:** `plan/oracion/dia-1`
**Ruta:** Menú → Planes → Oración y comunidad → Día 1
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/oracion/dia-1#titulo` — TEXTO EDITABLE
La oración enseñada

**REFERENCIA** · `plan/oracion/dia-1#referencia` — TEXTO EDITABLE
Mateo 6:5–15

**REFLEXION** · `plan/oracion/dia-1#reflexion` — TEXTO EDITABLE
Jesús presenta una oración dentro de una enseñanza sobre motivaciones.

**ORACION** · `plan/oracion/dia-1#oracion` — TEXTO EDITABLE
Enséñanos a orar con sencillez.

**ACCION** · `plan/oracion/dia-1#accion` — TEXTO EDITABLE
Busca un momento de silencio voluntario.

**REVISION** · `plan/oracion/dia-1#revision` — TEXTO EDITABLE
EN_REVISION


### Día 2: Orar en medio de dudas · plan/oracion/dia-2

**ID ESTRUCTURAL — NO EDITAR:** `plan/oracion/dia-2`
**Ruta:** Menú → Planes → Oración y comunidad → Día 2
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/oracion/dia-2#titulo` — TEXTO EDITABLE
Orar en medio de dudas

**REFERENCIA** · `plan/oracion/dia-2#referencia` — TEXTO EDITABLE
Salmos 13:1–6

**REFLEXION** · `plan/oracion/dia-2#reflexion` — TEXTO EDITABLE
El salmo incluye preguntas difíciles antes de una expresión de confianza.

**ORACION** · `plan/oracion/dia-2#oracion` — TEXTO EDITABLE
Escucha nuestras preguntas.

**ACCION** · `plan/oracion/dia-2#accion` — TEXTO EDITABLE
Permite una conversación sincera.

**REVISION** · `plan/oracion/dia-2#revision` — TEXTO EDITABLE
EN_REVISION


### Día 3: Reunirse con propósito · plan/oracion/dia-3

**ID ESTRUCTURAL — NO EDITAR:** `plan/oracion/dia-3`
**Ruta:** Menú → Planes → Oración y comunidad → Día 3
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/oracion/dia-3#titulo` — TEXTO EDITABLE
Reunirse con propósito

**REFERENCIA** · `plan/oracion/dia-3#referencia` — TEXTO EDITABLE
Hechos 4:23–31

**REFLEXION** · `plan/oracion/dia-3#reflexion` — TEXTO EDITABLE
La comunidad responde en oración a un conflicto; leer el contexto evita generalizaciones.

**ORACION** · `plan/oracion/dia-3#oracion` — TEXTO EDITABLE
Cuida nuestra comunidad.

**ACCION** · `plan/oracion/dia-3#accion` — TEXTO EDITABLE
Piensa a quién debemos escuchar.

**REVISION** · `plan/oracion/dia-3#revision` — TEXTO EDITABLE
EN_REVISION


### Día 4: Alegría sin presión · plan/oracion/dia-4

**ID ESTRUCTURAL — NO EDITAR:** `plan/oracion/dia-4`
**Ruta:** Menú → Planes → Oración y comunidad → Día 4
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/oracion/dia-4#titulo` — TEXTO EDITABLE
Alegría sin presión

**REFERENCIA** · `plan/oracion/dia-4#referencia` — TEXTO EDITABLE
Filipenses 4:4–9

**REFLEXION** · `plan/oracion/dia-4#reflexion` — TEXTO EDITABLE
La invitación a orar aparece en una carta comunitaria; no niega ansiedad clínica.

**ORACION** · `plan/oracion/dia-4#oracion` — TEXTO EDITABLE
Que acompañemos con consideración.

**ACCION** · `plan/oracion/dia-4#accion` — TEXTO EDITABLE
Comparte gratitud sin exigir felicidad.

**REVISION** · `plan/oracion/dia-4#revision` — TEXTO EDITABLE
EN_REVISION


### Día 5: Orar y discernir · plan/oracion/dia-5

**ID ESTRUCTURAL — NO EDITAR:** `plan/oracion/dia-5`
**Ruta:** Menú → Planes → Oración y comunidad → Día 5
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/oracion/dia-5#titulo` — TEXTO EDITABLE
Orar y discernir

**REFERENCIA** · `plan/oracion/dia-5#referencia` — TEXTO EDITABLE
Santiago 1:2–8

**REFLEXION** · `plan/oracion/dia-5#reflexion` — TEXTO EDITABLE
El pedido de sabiduría ocurre en un marco de dificultades; no promete una decisión infalible.

**ORACION** · `plan/oracion/dia-5#oracion` — TEXTO EDITABLE
Danos humildad para consultar.

**ACCION** · `plan/oracion/dia-5#accion` — TEXTO EDITABLE
Consulta una decisión con alguien de confianza.

**REVISION** · `plan/oracion/dia-5#revision` — TEXTO EDITABLE
EN_REVISION


### Día 6: Decir la verdad · plan/oracion/dia-6

**ID ESTRUCTURAL — NO EDITAR:** `plan/oracion/dia-6`
**Ruta:** Menú → Planes → Oración y comunidad → Día 6
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/oracion/dia-6#titulo` — TEXTO EDITABLE
Decir la verdad

**REFERENCIA** · `plan/oracion/dia-6#referencia` — TEXTO EDITABLE
Salmos 139:1–18

**REFLEXION** · `plan/oracion/dia-6#reflexion` — TEXTO EDITABLE
La poesía reflexiona sobre conocimiento y presencia; no justifica vigilancia humana.

**ORACION** · `plan/oracion/dia-6#oracion` — TEXTO EDITABLE
Ayúdanos a ser transparentes con respeto.

**ACCION** · `plan/oracion/dia-6#accion` — TEXTO EDITABLE
Revisa un límite de privacidad.

**REVISION** · `plan/oracion/dia-6#revision` — TEXTO EDITABLE
EN_REVISION


### Día 7: Compartir con cuidado · plan/oracion/dia-7

**ID ESTRUCTURAL — NO EDITAR:** `plan/oracion/dia-7`
**Ruta:** Menú → Planes → Oración y comunidad → Día 7
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/readingPlans.ts`

**TITULO** · `plan/oracion/dia-7#titulo` — TEXTO EDITABLE
Compartir con cuidado

**REFERENCIA** · `plan/oracion/dia-7#referencia` — TEXTO EDITABLE
Colosenses 3:12–17

**REFLEXION** · `plan/oracion/dia-7#reflexion` — TEXTO EDITABLE
Las actitudes mencionadas se ubican en una convivencia concreta.

**ORACION** · `plan/oracion/dia-7#oracion` — TEXTO EDITABLE
Que la gratitud se exprese en acciones.

**ACCION** · `plan/oracion/dia-7#accion` — TEXTO EDITABLE
Da reconocimiento a una persona discreta.

**REVISION** · `plan/oracion/dia-7#revision` — TEXTO EDITABLE
EN_REVISION


## 5. Guía pastoral · ocho apartados completos


### Acogida con respeto · pastoral/acogida

**ID ESTRUCTURAL — NO EDITAR:** `pastoral/acogida`
**Ruta:** Menú → Guía pastoral → Acogida con respeto
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralTopics.ts`

**TITULO** · `pastoral/acogida#titulo` — TEXTO EDITABLE
Acogida con respeto

**OBJETIVO** · `pastoral/acogida#objetivo` — TEXTO EDITABLE
Diseñar un encuentro en el que nadie sea presionado a revelar su historia.

**EDAD** · `pastoral/acogida#edad` — TEXTO EDITABLE
12–18 años

**PARTICIPANTES** · `pastoral/acogida#participantes` — TEXTO EDITABLE
6–24 personas

**RESPONSABLES ADULTOS** · `pastoral/acogida#responsables_adultos` — TEXTO EDITABLE
Mínimo dos adultos responsables visibles, según normas de la organización.

**ROLES** · `pastoral/acogida#roles` — TEXTO EDITABLE
Un adulto coordina y otro supervisa accesibilidad; jóvenes eligen cómo presentarse y ayudan a organizar turnos.

**MATERIALES** · `pastoral/acogida#materiales` — TEXTO EDITABLE
Tarjetas con nombres opcionales; salón accesible.

**ADAPTACIONES** · `pastoral/acogida#adaptaciones` — TEXTO EDITABLE
Para 12–14 usar tarjetas; para mayores, facilitar diálogo libre; ofrecer lectura/escritura o voz.

**FACILITACION** · `pastoral/acogida#facilitacion` — TEXTO EDITABLE
Evitar interrupciones, bromas sobre identidad y contacto físico obligado.

**RELACION CON CRISTO** · `pastoral/acogida#relacion_con_cristo` — TEXTO EDITABLE
Leer la acogida de Jesús como invitación al amor activo, sin presentar equivalencias automáticas.

**ORACION** · `pastoral/acogida#oracion` — TEXTO EDITABLE
Jesús, ayúdanos a recibir a cada persona con dignidad.

**PROTECCION CONSENTIMIENTO** · `pastoral/acogida#proteccion_consentimiento` — TEXTO EDITABLE
No pedir teléfonos, fotografías ni relatos íntimos; cumplir normativa local de menores.

**PASO 1** · `pastoral/acogida#paso_1` — TEXTO EDITABLE
Dar bienvenida e indicar que participar o pasar es válido.

**PASO 2** · `pastoral/acogida#paso_2` — TEXTO EDITABLE
Formar grupos pequeños; proponer afinidades cotidianas no sensibles.

**PASO 3** · `pastoral/acogida#paso_3` — TEXTO EDITABLE
Recoger necesidades generales sin nombres y agradecer las contribuciones.

**REFERENCIA BIBLICA** · `pastoral/acogida#referencia_biblica` — TEXTO EDITABLE
Marcos 10:13–16

**MOTIVO BIBLICO** · `pastoral/acogida#motivo_biblico` — TEXTO EDITABLE
Jesús recibe a quienes otros querían apartar; incluir el contexto inmediato.

**FUENTE 1 SOURCETITLE** · `pastoral/acogida#fuente_1_sourceTitle` — TEXTO EDITABLE
Renewing the Vision: A Framework for Catholic Youth Ministry

**FUENTE 1 SOURCEAUTHORORORG** · `pastoral/acogida#fuente_1_sourceAuthorOrOrg` — TEXTO EDITABLE
United States Conference of Catholic Bishops (USCCB)

**FUENTE 1 SOURCEURL** · `pastoral/acogida#fuente_1_sourceUrl` — TEXTO EDITABLE
https://www.usccb.org/topics/youth-and-young-adult-ministries/renewing-vision

**FUENTE 1 SOURCEDATEORVERSION** · `pastoral/acogida#fuente_1_sourceDateOrVersion` — TEXTO EDITABLE
Junio de 1997

**FUENTE 1 APPLICABLESECTION** · `pastoral/acogida#fuente_1_applicableSection` — TEXTO EDITABLE
orientación y liderazgo juvenil

**FUENTE 1 REUSEBASIS** · `pastoral/acogida#fuente_1_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 1 CHECKEDAT** · `pastoral/acogida#fuente_1_checkedAt` — TEXTO EDITABLE
2026-10-10

**FUENTE 2 SOURCETITLE** · `pastoral/acogida#fuente_2_sourceTitle` — TEXTO EDITABLE
Adolescent Kit training package for programme leaders

**FUENTE 2 SOURCEAUTHORORORG** · `pastoral/acogida#fuente_2_sourceAuthorOrOrg` — TEXTO EDITABLE
UNICEF

**FUENTE 2 SOURCEURL** · `pastoral/acogida#fuente_2_sourceUrl` — TEXTO EDITABLE
https://www.unicef.org/adolescentkit/reports/adolescent-kit-training-package-programme-leaders

**FUENTE 2 SOURCEDATEORVERSION** · `pastoral/acogida#fuente_2_sourceDateOrVersion` — TEXTO EDITABLE
Mayo de 2018

**FUENTE 2 APPLICABLESECTION** · `pastoral/acogida#fuente_2_applicableSection` — TEXTO EDITABLE
dinámicas participativas e inclusión

**FUENTE 2 REUSEBASIS** · `pastoral/acogida#fuente_2_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 2 CHECKEDAT** · `pastoral/acogida#fuente_2_checkedAt` — TEXTO EDITABLE
2026-10-10

**FUENTE 3 SOURCETITLE** · `pastoral/acogida#fuente_3_sourceTitle` — TEXTO EDITABLE
Guidelines for the Protection of Children and Vulnerable Persons

**FUENTE 3 SOURCEAUTHORORORG** · `pastoral/acogida#fuente_3_sourceAuthorOrOrg` — TEXTO EDITABLE
Santa Sede

**FUENTE 3 SOURCEURL** · `pastoral/acogida#fuente_3_sourceUrl` — TEXTO EDITABLE
https://www.vatican.va/resources/resources_protezioneminori-lineeguida_20190326_en.html

**FUENTE 3 SOURCEDATEORVERSION** · `pastoral/acogida#fuente_3_sourceDateOrVersion` — TEXTO EDITABLE
2019

**FUENTE 3 APPLICABLESECTION** · `pastoral/acogida#fuente_3_applicableSection` — TEXTO EDITABLE
protección de menores y personas vulnerables; jurisdicción específica

**FUENTE 3 REUSEBASIS** · `pastoral/acogida#fuente_3_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 3 CHECKEDAT** · `pastoral/acogida#fuente_3_checkedAt` — TEXTO EDITABLE
2026-10-10


### Amor de Dios y Jesucristo · pastoral/amor

**ID ESTRUCTURAL — NO EDITAR:** `pastoral/amor`
**Ruta:** Menú → Guía pastoral → Amor de Dios y Jesucristo
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralTopics.ts`

**TITULO** · `pastoral/amor#titulo` — TEXTO EDITABLE
Amor de Dios y Jesucristo

**OBJETIVO** · `pastoral/amor#objetivo` — TEXTO EDITABLE
Relacionar el mensaje cristiano de amor con decisiones respetuosas.

**EDAD** · `pastoral/amor#edad` — TEXTO EDITABLE
13–20 años

**PARTICIPANTES** · `pastoral/amor#participantes` — TEXTO EDITABLE
4–20 personas

**RESPONSABLES ADULTOS** · `pastoral/amor#responsables_adultos` — TEXTO EDITABLE
Dos adultos responsables presentes, uno para facilitar dudas.

**ROLES** · `pastoral/amor#roles` — TEXTO EDITABLE
Líder contextualiza el pasaje; jóvenes formulan preguntas; cofacilitador observa inclusividad.

**MATERIALES** · `pastoral/amor#materiales` — TEXTO EDITABLE
RV1909 local, notas individuales.

**ADAPTACIONES** · `pastoral/amor#adaptaciones` — TEXTO EDITABLE
Permitir respuestas privadas; separar observación textual de aplicación; lectura asistida.

**FACILITACION** · `pastoral/amor#facilitacion` — TEXTO EDITABLE
No usar el amor divino para exigir tolerar violencia o culpa.

**RELACION CON CRISTO** · `pastoral/amor#relacion_con_cristo` — TEXTO EDITABLE
Distinguir la enseñanza cristiana sobre amor de recomendaciones psicológicas.

**ORACION** · `pastoral/amor#oracion` — TEXTO EDITABLE
Jesucristo, que nuestras acciones reflejen cuidado y verdad.

**PROTECCION CONSENTIMIENTO** · `pastoral/amor#proteccion_consentimiento` — TEXTO EDITABLE
Escuchar sin diagnosticar; derivar cualquier situación de riesgo al protocolo competente.

**PASO 1** · `pastoral/amor#paso_1` — TEXTO EDITABLE
Leer en voz alta el pasaje sin aislar una frase.

**PASO 2** · `pastoral/amor#paso_2` — TEXTO EDITABLE
Pedir observaciones sobre las palabras y su destinatario.

**PASO 3** · `pastoral/amor#paso_3` — TEXTO EDITABLE
Elegir libremente una acción de cuidado concreto.

**REFERENCIA BIBLICA** · `pastoral/amor#referencia_biblica` — TEXTO EDITABLE
Juan 15:9–17

**MOTIVO BIBLICO** · `pastoral/amor#motivo_biblico` — TEXTO EDITABLE
Amor mutuo dentro del discurso de despedida; no usar como orden de sumisión a daño.

**FUENTE 1 SOURCETITLE** · `pastoral/amor#fuente_1_sourceTitle` — TEXTO EDITABLE
Renewing the Vision: A Framework for Catholic Youth Ministry

**FUENTE 1 SOURCEAUTHORORORG** · `pastoral/amor#fuente_1_sourceAuthorOrOrg` — TEXTO EDITABLE
United States Conference of Catholic Bishops (USCCB)

**FUENTE 1 SOURCEURL** · `pastoral/amor#fuente_1_sourceUrl` — TEXTO EDITABLE
https://www.usccb.org/topics/youth-and-young-adult-ministries/renewing-vision

**FUENTE 1 SOURCEDATEORVERSION** · `pastoral/amor#fuente_1_sourceDateOrVersion` — TEXTO EDITABLE
Junio de 1997

**FUENTE 1 APPLICABLESECTION** · `pastoral/amor#fuente_1_applicableSection` — TEXTO EDITABLE
orientación y liderazgo juvenil

**FUENTE 1 REUSEBASIS** · `pastoral/amor#fuente_1_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 1 CHECKEDAT** · `pastoral/amor#fuente_1_checkedAt` — TEXTO EDITABLE
2026-10-10

**FUENTE 2 SOURCETITLE** · `pastoral/amor#fuente_2_sourceTitle` — TEXTO EDITABLE
Guidelines for the Protection of Children and Vulnerable Persons

**FUENTE 2 SOURCEAUTHORORORG** · `pastoral/amor#fuente_2_sourceAuthorOrOrg` — TEXTO EDITABLE
Santa Sede

**FUENTE 2 SOURCEURL** · `pastoral/amor#fuente_2_sourceUrl` — TEXTO EDITABLE
https://www.vatican.va/resources/resources_protezioneminori-lineeguida_20190326_en.html

**FUENTE 2 SOURCEDATEORVERSION** · `pastoral/amor#fuente_2_sourceDateOrVersion` — TEXTO EDITABLE
2019

**FUENTE 2 APPLICABLESECTION** · `pastoral/amor#fuente_2_applicableSection` — TEXTO EDITABLE
protección de menores y personas vulnerables; jurisdicción específica

**FUENTE 2 REUSEBASIS** · `pastoral/amor#fuente_2_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 2 CHECKEDAT** · `pastoral/amor#fuente_2_checkedAt` — TEXTO EDITABLE
2026-10-10


### Liderazgo juvenil compartido · pastoral/liderazgo

**ID ESTRUCTURAL — NO EDITAR:** `pastoral/liderazgo`
**Ruta:** Menú → Guía pastoral → Liderazgo juvenil compartido
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralTopics.ts`

**TITULO** · `pastoral/liderazgo#titulo` — TEXTO EDITABLE
Liderazgo juvenil compartido

**OBJETIVO** · `pastoral/liderazgo#objetivo` — TEXTO EDITABLE
Asignar tareas concretas a jóvenes con voz real y sin reemplazar supervisión adulta.

**EDAD** · `pastoral/liderazgo#edad` — TEXTO EDITABLE
14–21 años

**PARTICIPANTES** · `pastoral/liderazgo#participantes` — TEXTO EDITABLE
8–30 personas

**RESPONSABLES ADULTOS** · `pastoral/liderazgo#responsables_adultos` — TEXTO EDITABLE
Dos adultos, con responsabilidades y protocolos formales.

**ROLES** · `pastoral/liderazgo#roles` — TEXTO EDITABLE
Jóvenes proponen, diseñan y evalúan; adultos acompañan, resuelven permisos y seguridad.

**MATERIALES** · `pastoral/liderazgo#materiales` — TEXTO EDITABLE
Pizarra de tareas, recursos disponibles.

**ADAPTACIONES** · `pastoral/liderazgo#adaptaciones` — TEXTO EDITABLE
Rotar roles; proveer alternativas sin hablar en público.

**FACILITACION** · `pastoral/liderazgo#facilitacion` — TEXTO EDITABLE
Aceptar desacuerdos y repartir visibilidad.

**RELACION CON CRISTO** · `pastoral/liderazgo#relacion_con_cristo` — TEXTO EDITABLE
El modelo de servicio se diferencia del control sobre compañeros.

**ORACION** · `pastoral/liderazgo#oracion` — TEXTO EDITABLE
Danos humildad para servir y escuchar.

**PROTECCION CONSENTIMIENTO** · `pastoral/liderazgo#proteccion_consentimiento` — TEXTO EDITABLE
Adultos conservan deber de cuidado y autorizaciones; no delegar entrevistas individuales a menores.

**PASO 1** · `pastoral/liderazgo#paso_1` — TEXTO EDITABLE
Presentar una meta realista y límites de tiempo.

**PASO 2** · `pastoral/liderazgo#paso_2` — TEXTO EDITABLE
Distribuir tareas elegidas voluntariamente por capacidad e interés.

**PASO 3** · `pastoral/liderazgo#paso_3` — TEXTO EDITABLE
Definir cómo pedir ayuda, verificar permisos y evaluar sin exponer a nadie.

**REFERENCIA BIBLICA** · `pastoral/liderazgo#referencia_biblica` — TEXTO EDITABLE
Marcos 10:35–45

**MOTIVO BIBLICO** · `pastoral/liderazgo#motivo_biblico` — TEXTO EDITABLE
Jesús cuestiona la búsqueda de puestos de prestigio.

**FUENTE 1 SOURCETITLE** · `pastoral/liderazgo#fuente_1_sourceTitle` — TEXTO EDITABLE
Renewing the Vision: A Framework for Catholic Youth Ministry

**FUENTE 1 SOURCEAUTHORORORG** · `pastoral/liderazgo#fuente_1_sourceAuthorOrOrg` — TEXTO EDITABLE
United States Conference of Catholic Bishops (USCCB)

**FUENTE 1 SOURCEURL** · `pastoral/liderazgo#fuente_1_sourceUrl` — TEXTO EDITABLE
https://www.usccb.org/topics/youth-and-young-adult-ministries/renewing-vision

**FUENTE 1 SOURCEDATEORVERSION** · `pastoral/liderazgo#fuente_1_sourceDateOrVersion` — TEXTO EDITABLE
Junio de 1997

**FUENTE 1 APPLICABLESECTION** · `pastoral/liderazgo#fuente_1_applicableSection` — TEXTO EDITABLE
orientación y liderazgo juvenil

**FUENTE 1 REUSEBASIS** · `pastoral/liderazgo#fuente_1_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 1 CHECKEDAT** · `pastoral/liderazgo#fuente_1_checkedAt` — TEXTO EDITABLE
2026-10-10

**FUENTE 2 SOURCETITLE** · `pastoral/liderazgo#fuente_2_sourceTitle` — TEXTO EDITABLE
Adolescent Kit training package for programme leaders

**FUENTE 2 SOURCEAUTHORORORG** · `pastoral/liderazgo#fuente_2_sourceAuthorOrOrg` — TEXTO EDITABLE
UNICEF

**FUENTE 2 SOURCEURL** · `pastoral/liderazgo#fuente_2_sourceUrl` — TEXTO EDITABLE
https://www.unicef.org/adolescentkit/reports/adolescent-kit-training-package-programme-leaders

**FUENTE 2 SOURCEDATEORVERSION** · `pastoral/liderazgo#fuente_2_sourceDateOrVersion` — TEXTO EDITABLE
Mayo de 2018

**FUENTE 2 APPLICABLESECTION** · `pastoral/liderazgo#fuente_2_applicableSection` — TEXTO EDITABLE
dinámicas participativas e inclusión

**FUENTE 2 REUSEBASIS** · `pastoral/liderazgo#fuente_2_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 2 CHECKEDAT** · `pastoral/liderazgo#fuente_2_checkedAt` — TEXTO EDITABLE
2026-10-10

**FUENTE 3 SOURCETITLE** · `pastoral/liderazgo#fuente_3_sourceTitle` — TEXTO EDITABLE
Guidelines for the Protection of Children and Vulnerable Persons

**FUENTE 3 SOURCEAUTHORORORG** · `pastoral/liderazgo#fuente_3_sourceAuthorOrOrg` — TEXTO EDITABLE
Santa Sede

**FUENTE 3 SOURCEURL** · `pastoral/liderazgo#fuente_3_sourceUrl` — TEXTO EDITABLE
https://www.vatican.va/resources/resources_protezioneminori-lineeguida_20190326_en.html

**FUENTE 3 SOURCEDATEORVERSION** · `pastoral/liderazgo#fuente_3_sourceDateOrVersion` — TEXTO EDITABLE
2019

**FUENTE 3 APPLICABLESECTION** · `pastoral/liderazgo#fuente_3_applicableSection` — TEXTO EDITABLE
protección de menores y personas vulnerables; jurisdicción específica

**FUENTE 3 REUSEBASIS** · `pastoral/liderazgo#fuente_3_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 3 CHECKEDAT** · `pastoral/liderazgo#fuente_3_checkedAt` — TEXTO EDITABLE
2026-10-10


### Protección y consentimiento · pastoral/proteccion

**ID ESTRUCTURAL — NO EDITAR:** `pastoral/proteccion`
**Ruta:** Menú → Guía pastoral → Protección y consentimiento
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralTopics.ts`

**TITULO** · `pastoral/proteccion#titulo` — TEXTO EDITABLE
Protección y consentimiento

**OBJETIVO** · `pastoral/proteccion#objetivo` — TEXTO EDITABLE
Prevenir riesgos y conocer los límites de una reunión pastoral.

**EDAD** · `pastoral/proteccion#edad` — TEXTO EDITABLE
12–21 años

**PARTICIPANTES** · `pastoral/proteccion#participantes` — TEXTO EDITABLE
4–30 personas

**RESPONSABLES ADULTOS** · `pastoral/proteccion#responsables_adultos` — TEXTO EDITABLE
Mínimo dos adultos acreditados; aplicar proporción exigida localmente.

**ROLES** · `pastoral/proteccion#roles` — TEXTO EDITABLE
Responsables verifican espacios y protocolos; jóvenes conocen canales para pedir ayuda.

**MATERIALES** · `pastoral/proteccion#materiales` — TEXTO EDITABLE
Contacto institucional oficial y protocolo local vigente.

**ADAPTACIONES** · `pastoral/proteccion#adaptaciones` — TEXTO EDITABLE
Usar formatos visuales y orales; canal confidencial adecuado a edad.

**FACILITACION** · `pastoral/proteccion#facilitacion` — TEXTO EDITABLE
No prometer confidencialidad absoluta ante riesgo inmediato.

**RELACION CON CRISTO** · `pastoral/proteccion#relacion_con_cristo` — TEXTO EDITABLE
La dignidad de cada persona guía el encuentro; no legitima ocultar daños.

**ORACION** · `pastoral/proteccion#oracion` — TEXTO EDITABLE
Que nuestro cuidado proteja la dignidad de todos.

**PROTECCION CONSENTIMIENTO** · `pastoral/proteccion#proteccion_consentimiento` — TEXTO EDITABLE
Este resumen NO reemplaza protocolo local, personal formado ni obligación legal de informar.

**PASO 1** · `pastoral/proteccion#paso_1` — TEXTO EDITABLE
Explicar reglas de respeto, privacidad y contacto físico.

**PASO 2** · `pastoral/proteccion#paso_2` — TEXTO EDITABLE
Presentar canales formales de denuncia y pedir consentimiento para actividades.

**PASO 3** · `pastoral/proteccion#paso_3` — TEXTO EDITABLE
Revisar accesos, salidas y acompañamiento sin aislar a ningún menor.

**REFERENCIA BIBLICA** · `pastoral/proteccion#referencia_biblica` — TEXTO EDITABLE
Mateo 18:1–6

**MOTIVO BIBLICO** · `pastoral/proteccion#motivo_biblico` — TEXTO EDITABLE
Discusión sobre pequeños y responsabilidad; su interpretación no sustituye normas de protección.

**FUENTE 1 SOURCETITLE** · `pastoral/proteccion#fuente_1_sourceTitle` — TEXTO EDITABLE
Guidelines for the Protection of Children and Vulnerable Persons

**FUENTE 1 SOURCEAUTHORORORG** · `pastoral/proteccion#fuente_1_sourceAuthorOrOrg` — TEXTO EDITABLE
Santa Sede

**FUENTE 1 SOURCEURL** · `pastoral/proteccion#fuente_1_sourceUrl` — TEXTO EDITABLE
https://www.vatican.va/resources/resources_protezioneminori-lineeguida_20190326_en.html

**FUENTE 1 SOURCEDATEORVERSION** · `pastoral/proteccion#fuente_1_sourceDateOrVersion` — TEXTO EDITABLE
2019

**FUENTE 1 APPLICABLESECTION** · `pastoral/proteccion#fuente_1_applicableSection` — TEXTO EDITABLE
protección de menores y personas vulnerables; jurisdicción específica

**FUENTE 1 REUSEBASIS** · `pastoral/proteccion#fuente_1_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 1 CHECKEDAT** · `pastoral/proteccion#fuente_1_checkedAt` — TEXTO EDITABLE
2026-10-10

**FUENTE 2 SOURCETITLE** · `pastoral/proteccion#fuente_2_sourceTitle` — TEXTO EDITABLE
Adolescent Kit training package for programme leaders

**FUENTE 2 SOURCEAUTHORORORG** · `pastoral/proteccion#fuente_2_sourceAuthorOrOrg` — TEXTO EDITABLE
UNICEF

**FUENTE 2 SOURCEURL** · `pastoral/proteccion#fuente_2_sourceUrl` — TEXTO EDITABLE
https://www.unicef.org/adolescentkit/reports/adolescent-kit-training-package-programme-leaders

**FUENTE 2 SOURCEDATEORVERSION** · `pastoral/proteccion#fuente_2_sourceDateOrVersion` — TEXTO EDITABLE
Mayo de 2018

**FUENTE 2 APPLICABLESECTION** · `pastoral/proteccion#fuente_2_applicableSection` — TEXTO EDITABLE
dinámicas participativas e inclusión

**FUENTE 2 REUSEBASIS** · `pastoral/proteccion#fuente_2_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 2 CHECKEDAT** · `pastoral/proteccion#fuente_2_checkedAt` — TEXTO EDITABLE
2026-10-10


### Oración voluntaria y contexto bíblico · pastoral/oracion

**ID ESTRUCTURAL — NO EDITAR:** `pastoral/oracion`
**Ruta:** Menú → Guía pastoral → Oración voluntaria y contexto bíblico
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralTopics.ts`

**TITULO** · `pastoral/oracion#titulo` — TEXTO EDITABLE
Oración voluntaria y contexto bíblico

**OBJETIVO** · `pastoral/oracion#objetivo` — TEXTO EDITABLE
Invitar a un momento de oración sin presión o evaluación espiritual.

**EDAD** · `pastoral/oracion#edad` — TEXTO EDITABLE
12–21 años

**PARTICIPANTES** · `pastoral/oracion#participantes` — TEXTO EDITABLE
3–30 personas

**RESPONSABLES ADULTOS** · `pastoral/oracion#responsables_adultos` — TEXTO EDITABLE
Dos facilitadores adultos en actividades con menores.

**ROLES** · `pastoral/oracion#roles` — TEXTO EDITABLE
Líder lee el contexto, cofacilitador habilita alternativas; participantes pueden guardar silencio.

**MATERIALES** · `pastoral/oracion#materiales` — TEXTO EDITABLE
RV1909 local; espacio accesible.

**ADAPTACIONES** · `pastoral/oracion#adaptaciones` — TEXTO EDITABLE
Silencio, lectura escrita, pictogramas o voz; opción de permanecer sentado.

**FACILITACION** · `pastoral/oracion#facilitacion` — TEXTO EDITABLE
No evaluar a otros según sus emociones o asistencia.

**RELACION CON CRISTO** · `pastoral/oracion#relacion_con_cristo` — TEXTO EDITABLE
La oración enseñada por Jesús se presenta sin promesas de resultados mecánicos.

**ORACION** · `pastoral/oracion#oracion` — TEXTO EDITABLE
Danos atención, sabiduría y respeto en esta reunión.

**PROTECCION CONSENTIMIENTO** · `pastoral/oracion#proteccion_consentimiento` — TEXTO EDITABLE
Nunca forzar confesiones, contacto físico ni supervisión uno a uno.

**PASO 1** · `pastoral/oracion#paso_1` — TEXTO EDITABLE
Presentar el tema y declarar voluntaria la participación.

**PASO 2** · `pastoral/oracion#paso_2` — TEXTO EDITABLE
Leer el texto completo del apartado seleccionado.

**PASO 3** · `pastoral/oracion#paso_3` — TEXTO EDITABLE
Ofrecer una pregunta abierta y una oración sugerida, sin pedir testimonios.

**REFERENCIA BIBLICA** · `pastoral/oracion#referencia_biblica` — TEXTO EDITABLE
Mateo 6:5–15

**MOTIVO BIBLICO** · `pastoral/oracion#motivo_biblico` — TEXTO EDITABLE
Instrucciones sobre motivación y oración en contexto del sermón.

**FUENTE 1 SOURCETITLE** · `pastoral/oracion#fuente_1_sourceTitle` — TEXTO EDITABLE
Renewing the Vision: A Framework for Catholic Youth Ministry

**FUENTE 1 SOURCEAUTHORORORG** · `pastoral/oracion#fuente_1_sourceAuthorOrOrg` — TEXTO EDITABLE
United States Conference of Catholic Bishops (USCCB)

**FUENTE 1 SOURCEURL** · `pastoral/oracion#fuente_1_sourceUrl` — TEXTO EDITABLE
https://www.usccb.org/topics/youth-and-young-adult-ministries/renewing-vision

**FUENTE 1 SOURCEDATEORVERSION** · `pastoral/oracion#fuente_1_sourceDateOrVersion` — TEXTO EDITABLE
Junio de 1997

**FUENTE 1 APPLICABLESECTION** · `pastoral/oracion#fuente_1_applicableSection` — TEXTO EDITABLE
orientación y liderazgo juvenil

**FUENTE 1 REUSEBASIS** · `pastoral/oracion#fuente_1_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 1 CHECKEDAT** · `pastoral/oracion#fuente_1_checkedAt` — TEXTO EDITABLE
2026-10-10

**FUENTE 2 SOURCETITLE** · `pastoral/oracion#fuente_2_sourceTitle` — TEXTO EDITABLE
Guidelines for the Protection of Children and Vulnerable Persons

**FUENTE 2 SOURCEAUTHORORORG** · `pastoral/oracion#fuente_2_sourceAuthorOrOrg` — TEXTO EDITABLE
Santa Sede

**FUENTE 2 SOURCEURL** · `pastoral/oracion#fuente_2_sourceUrl` — TEXTO EDITABLE
https://www.vatican.va/resources/resources_protezioneminori-lineeguida_20190326_en.html

**FUENTE 2 SOURCEDATEORVERSION** · `pastoral/oracion#fuente_2_sourceDateOrVersion` — TEXTO EDITABLE
2019

**FUENTE 2 APPLICABLESECTION** · `pastoral/oracion#fuente_2_applicableSection` — TEXTO EDITABLE
protección de menores y personas vulnerables; jurisdicción específica

**FUENTE 2 REUSEBASIS** · `pastoral/oracion#fuente_2_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 2 CHECKEDAT** · `pastoral/oracion#fuente_2_checkedAt` — TEXTO EDITABLE
2026-10-10


### Inclusión y accesibilidad · pastoral/inclusion

**ID ESTRUCTURAL — NO EDITAR:** `pastoral/inclusion`
**Ruta:** Menú → Guía pastoral → Inclusión y accesibilidad
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralTopics.ts`

**TITULO** · `pastoral/inclusion#titulo` — TEXTO EDITABLE
Inclusión y accesibilidad

**OBJETIVO** · `pastoral/inclusion#objetivo` — TEXTO EDITABLE
Reducir barreras sensoriales, motrices, económicas y comunicativas.

**EDAD** · `pastoral/inclusion#edad` — TEXTO EDITABLE
12–21 años

**PARTICIPANTES** · `pastoral/inclusion#participantes` — TEXTO EDITABLE
5–25 personas

**RESPONSABLES ADULTOS** · `pastoral/inclusion#responsables_adultos` — TEXTO EDITABLE
Dos responsables, uno enfocado en accesibilidad.

**ROLES** · `pastoral/inclusion#roles` — TEXTO EDITABLE
Jóvenes eligen modo de participación; adulto confirma accesos y materiales adaptables.

**MATERIALES** · `pastoral/inclusion#materiales` — TEXTO EDITABLE
Texto ampliado, espacio sin obstáculos y alternativa escrita.

**ADAPTACIONES** · `pastoral/inclusion#adaptaciones` — TEXTO EDITABLE
No presumir habilidad, diagnóstico o recursos de un participante.

**FACILITACION** · `pastoral/inclusion#facilitacion` — TEXTO EDITABLE
Permitir tiempo adicional y lenguaje claro.

**RELACION CON CRISTO** · `pastoral/inclusion#relacion_con_cristo` — TEXTO EDITABLE
La convivencia abierta se inspira en prácticas de acogida, sin adjudicar diagnósticos al texto.

**ORACION** · `pastoral/inclusion#oracion` — TEXTO EDITABLE
Enséñanos a hacer espacio para todos.

**PROTECCION CONSENTIMIENTO** · `pastoral/inclusion#proteccion_consentimiento` — TEXTO EDITABLE
No recopilar datos médicos ni divulgar adaptaciones individuales.

**PASO 1** · `pastoral/inclusion#paso_1` — TEXTO EDITABLE
Preguntar necesidades operativas de forma privada y opcional.

**PASO 2** · `pastoral/inclusion#paso_2` — TEXTO EDITABLE
Ofrecer tareas que puedan realizarse sentado, por voz o por escrito.

**PASO 3** · `pastoral/inclusion#paso_3` — TEXTO EDITABLE
Revisar barreras materiales y recibir retroalimentación sin señalar a nadie.

**REFERENCIA BIBLICA** · `pastoral/inclusion#referencia_biblica` — TEXTO EDITABLE
Romanos 12:4–13

**MOTIVO BIBLICO** · `pastoral/inclusion#motivo_biblico` — TEXTO EDITABLE
Imagen de la comunidad con diversos dones; leer el capítulo.

**FUENTE 1 SOURCETITLE** · `pastoral/inclusion#fuente_1_sourceTitle` — TEXTO EDITABLE
Adolescent Kit training package for programme leaders

**FUENTE 1 SOURCEAUTHORORORG** · `pastoral/inclusion#fuente_1_sourceAuthorOrOrg` — TEXTO EDITABLE
UNICEF

**FUENTE 1 SOURCEURL** · `pastoral/inclusion#fuente_1_sourceUrl` — TEXTO EDITABLE
https://www.unicef.org/adolescentkit/reports/adolescent-kit-training-package-programme-leaders

**FUENTE 1 SOURCEDATEORVERSION** · `pastoral/inclusion#fuente_1_sourceDateOrVersion` — TEXTO EDITABLE
Mayo de 2018

**FUENTE 1 APPLICABLESECTION** · `pastoral/inclusion#fuente_1_applicableSection` — TEXTO EDITABLE
dinámicas participativas e inclusión

**FUENTE 1 REUSEBASIS** · `pastoral/inclusion#fuente_1_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 1 CHECKEDAT** · `pastoral/inclusion#fuente_1_checkedAt` — TEXTO EDITABLE
2026-10-10

**FUENTE 2 SOURCETITLE** · `pastoral/inclusion#fuente_2_sourceTitle` — TEXTO EDITABLE
Renewing the Vision: A Framework for Catholic Youth Ministry

**FUENTE 2 SOURCEAUTHORORORG** · `pastoral/inclusion#fuente_2_sourceAuthorOrOrg` — TEXTO EDITABLE
United States Conference of Catholic Bishops (USCCB)

**FUENTE 2 SOURCEURL** · `pastoral/inclusion#fuente_2_sourceUrl` — TEXTO EDITABLE
https://www.usccb.org/topics/youth-and-young-adult-ministries/renewing-vision

**FUENTE 2 SOURCEDATEORVERSION** · `pastoral/inclusion#fuente_2_sourceDateOrVersion` — TEXTO EDITABLE
Junio de 1997

**FUENTE 2 APPLICABLESECTION** · `pastoral/inclusion#fuente_2_applicableSection` — TEXTO EDITABLE
orientación y liderazgo juvenil

**FUENTE 2 REUSEBASIS** · `pastoral/inclusion#fuente_2_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 2 CHECKEDAT** · `pastoral/inclusion#fuente_2_checkedAt` — TEXTO EDITABLE
2026-10-10


### Servicio comunitario responsable · pastoral/servicio

**ID ESTRUCTURAL — NO EDITAR:** `pastoral/servicio`
**Ruta:** Menú → Guía pastoral → Servicio comunitario responsable
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralTopics.ts`

**TITULO** · `pastoral/servicio#titulo` — TEXTO EDITABLE
Servicio comunitario responsable

**OBJETIVO** · `pastoral/servicio#objetivo` — TEXTO EDITABLE
Organizar una acción pequeña y consultada sin prometer soluciones universales.

**EDAD** · `pastoral/servicio#edad` — TEXTO EDITABLE
14–21 años

**PARTICIPANTES** · `pastoral/servicio#participantes` — TEXTO EDITABLE
6–30 personas

**RESPONSABLES ADULTOS** · `pastoral/servicio#responsables_adultos` — TEXTO EDITABLE
Dos responsables de evaluación y permisos.

**ROLES** · `pastoral/servicio#roles` — TEXTO EDITABLE
Jóvenes eligen acciones; adultos verifican autorización, riesgos y proveedores.

**MATERIALES** · `pastoral/servicio#materiales` — TEXTO EDITABLE
Lista de tareas, contactos institucionales autorizados.

**ADAPTACIONES** · `pastoral/servicio#adaptaciones` — TEXTO EDITABLE
Ofrecer acciones remotas o sentadas y sin gastos obligatorios.

**FACILITACION** · `pastoral/servicio#facilitacion` — TEXTO EDITABLE
Evitar hacer del servicio una competición.

**RELACION CON CRISTO** · `pastoral/servicio#relacion_con_cristo` — TEXTO EDITABLE
Jesús presenta el servicio como contrapunto a buscar prestigio.

**ORACION** · `pastoral/servicio#oracion` — TEXTO EDITABLE
Que nuestro servicio escuche y cuide.

**PROTECCION CONSENTIMIENTO** · `pastoral/servicio#proteccion_consentimiento` — TEXTO EDITABLE
No pedir fondos o datos personales sin autorización institucional.

**PASO 1** · `pastoral/servicio#paso_1` — TEXTO EDITABLE
Escuchar a la comunidad antes de definir necesidades.

**PASO 2** · `pastoral/servicio#paso_2` — TEXTO EDITABLE
Priorizar una acción segura con consentimiento y tareas realistas.

**PASO 3** · `pastoral/servicio#paso_3` — TEXTO EDITABLE
Evaluar con la comunidad sin publicar fotografías o datos sin permiso.

**REFERENCIA BIBLICA** · `pastoral/servicio#referencia_biblica` — TEXTO EDITABLE
Marcos 10:42–45

**MOTIVO BIBLICO** · `pastoral/servicio#motivo_biblico` — TEXTO EDITABLE
Contraste entre dominio y servicio en el camino hacia Jerusalén.

**FUENTE 1 SOURCETITLE** · `pastoral/servicio#fuente_1_sourceTitle` — TEXTO EDITABLE
Renewing the Vision: A Framework for Catholic Youth Ministry

**FUENTE 1 SOURCEAUTHORORORG** · `pastoral/servicio#fuente_1_sourceAuthorOrOrg` — TEXTO EDITABLE
United States Conference of Catholic Bishops (USCCB)

**FUENTE 1 SOURCEURL** · `pastoral/servicio#fuente_1_sourceUrl` — TEXTO EDITABLE
https://www.usccb.org/topics/youth-and-young-adult-ministries/renewing-vision

**FUENTE 1 SOURCEDATEORVERSION** · `pastoral/servicio#fuente_1_sourceDateOrVersion` — TEXTO EDITABLE
Junio de 1997

**FUENTE 1 APPLICABLESECTION** · `pastoral/servicio#fuente_1_applicableSection` — TEXTO EDITABLE
orientación y liderazgo juvenil

**FUENTE 1 REUSEBASIS** · `pastoral/servicio#fuente_1_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 1 CHECKEDAT** · `pastoral/servicio#fuente_1_checkedAt` — TEXTO EDITABLE
2026-10-10

**FUENTE 2 SOURCETITLE** · `pastoral/servicio#fuente_2_sourceTitle` — TEXTO EDITABLE
Adolescent Kit training package for programme leaders

**FUENTE 2 SOURCEAUTHORORORG** · `pastoral/servicio#fuente_2_sourceAuthorOrOrg` — TEXTO EDITABLE
UNICEF

**FUENTE 2 SOURCEURL** · `pastoral/servicio#fuente_2_sourceUrl` — TEXTO EDITABLE
https://www.unicef.org/adolescentkit/reports/adolescent-kit-training-package-programme-leaders

**FUENTE 2 SOURCEDATEORVERSION** · `pastoral/servicio#fuente_2_sourceDateOrVersion` — TEXTO EDITABLE
Mayo de 2018

**FUENTE 2 APPLICABLESECTION** · `pastoral/servicio#fuente_2_applicableSection` — TEXTO EDITABLE
dinámicas participativas e inclusión

**FUENTE 2 REUSEBASIS** · `pastoral/servicio#fuente_2_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 2 CHECKEDAT** · `pastoral/servicio#fuente_2_checkedAt` — TEXTO EDITABLE
2026-10-10

**FUENTE 3 SOURCETITLE** · `pastoral/servicio#fuente_3_sourceTitle` — TEXTO EDITABLE
Guidelines for the Protection of Children and Vulnerable Persons

**FUENTE 3 SOURCEAUTHORORORG** · `pastoral/servicio#fuente_3_sourceAuthorOrOrg` — TEXTO EDITABLE
Santa Sede

**FUENTE 3 SOURCEURL** · `pastoral/servicio#fuente_3_sourceUrl` — TEXTO EDITABLE
https://www.vatican.va/resources/resources_protezioneminori-lineeguida_20190326_en.html

**FUENTE 3 SOURCEDATEORVERSION** · `pastoral/servicio#fuente_3_sourceDateOrVersion` — TEXTO EDITABLE
2019

**FUENTE 3 APPLICABLESECTION** · `pastoral/servicio#fuente_3_applicableSection` — TEXTO EDITABLE
protección de menores y personas vulnerables; jurisdicción específica

**FUENTE 3 REUSEBASIS** · `pastoral/servicio#fuente_3_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 3 CHECKEDAT** · `pastoral/servicio#fuente_3_checkedAt` — TEXTO EDITABLE
2026-10-10


### Desacuerdos y reparación · pastoral/conflictos

**ID ESTRUCTURAL — NO EDITAR:** `pastoral/conflictos`
**Ruta:** Menú → Guía pastoral → Desacuerdos y reparación
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralTopics.ts`

**TITULO** · `pastoral/conflictos#titulo` — TEXTO EDITABLE
Desacuerdos y reparación

**OBJETIVO** · `pastoral/conflictos#objetivo` — TEXTO EDITABLE
Dialogar sobre desacuerdos cotidianos sin imponer reconciliación insegura.

**EDAD** · `pastoral/conflictos#edad` — TEXTO EDITABLE
13–21 años

**PARTICIPANTES** · `pastoral/conflictos#participantes` — TEXTO EDITABLE
6–20 personas

**RESPONSABLES ADULTOS** · `pastoral/conflictos#responsables_adultos` — TEXTO EDITABLE
Dos adultos, con derivación institucional si existe riesgo.

**ROLES** · `pastoral/conflictos#roles` — TEXTO EDITABLE
Líder modera tiempos; cofacilitador ofrece opción de retirarse; jóvenes acuerdan turnos.

**MATERIALES** · `pastoral/conflictos#materiales` — TEXTO EDITABLE
Reglas de diálogo escritas.

**ADAPTACIONES** · `pastoral/conflictos#adaptaciones` — TEXTO EDITABLE
Respuestas anónimas o escritas; no dramatizar vivencias de participantes.

**FACILITACION** · `pastoral/conflictos#facilitacion` — TEXTO EDITABLE
No forzar perdón público ni mediación ante abuso.

**RELACION CON CRISTO** · `pastoral/conflictos#relacion_con_cristo` — TEXTO EDITABLE
La exhortación al diálogo se interpreta con cuidado y límites.

**ORACION** · `pastoral/conflictos#oracion` — TEXTO EDITABLE
Danos paciencia para hablar con justicia.

**PROTECCION CONSENTIMIENTO** · `pastoral/conflictos#proteccion_consentimiento` — TEXTO EDITABLE
Ante violencia o protección de menores, priorizar medidas y profesionales, no dinámicas grupales.

**PASO 1** · `pastoral/conflictos#paso_1` — TEXTO EDITABLE
Presentar un conflicto ficticio no violento.

**PASO 2** · `pastoral/conflictos#paso_2` — TEXTO EDITABLE
Escuchar perspectivas y separar hechos, opiniones y necesidades.

**PASO 3** · `pastoral/conflictos#paso_3` — TEXTO EDITABLE
Explorar acuerdos voluntarios y canales de ayuda para riesgos reales.

**REFERENCIA BIBLICA** · `pastoral/conflictos#referencia_biblica` — TEXTO EDITABLE
Mateo 18:15–20

**MOTIVO BIBLICO** · `pastoral/conflictos#motivo_biblico` — TEXTO EDITABLE
Pasaje sobre conflictos comunitarios que no sustituye protocolos de abuso.

**FUENTE 1 SOURCETITLE** · `pastoral/conflictos#fuente_1_sourceTitle` — TEXTO EDITABLE
Renewing the Vision: A Framework for Catholic Youth Ministry

**FUENTE 1 SOURCEAUTHORORORG** · `pastoral/conflictos#fuente_1_sourceAuthorOrOrg` — TEXTO EDITABLE
United States Conference of Catholic Bishops (USCCB)

**FUENTE 1 SOURCEURL** · `pastoral/conflictos#fuente_1_sourceUrl` — TEXTO EDITABLE
https://www.usccb.org/topics/youth-and-young-adult-ministries/renewing-vision

**FUENTE 1 SOURCEDATEORVERSION** · `pastoral/conflictos#fuente_1_sourceDateOrVersion` — TEXTO EDITABLE
Junio de 1997

**FUENTE 1 APPLICABLESECTION** · `pastoral/conflictos#fuente_1_applicableSection` — TEXTO EDITABLE
orientación y liderazgo juvenil

**FUENTE 1 REUSEBASIS** · `pastoral/conflictos#fuente_1_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 1 CHECKEDAT** · `pastoral/conflictos#fuente_1_checkedAt` — TEXTO EDITABLE
2026-10-10

**FUENTE 2 SOURCETITLE** · `pastoral/conflictos#fuente_2_sourceTitle` — TEXTO EDITABLE
Guidelines for the Protection of Children and Vulnerable Persons

**FUENTE 2 SOURCEAUTHORORORG** · `pastoral/conflictos#fuente_2_sourceAuthorOrOrg` — TEXTO EDITABLE
Santa Sede

**FUENTE 2 SOURCEURL** · `pastoral/conflictos#fuente_2_sourceUrl` — TEXTO EDITABLE
https://www.vatican.va/resources/resources_protezioneminori-lineeguida_20190326_en.html

**FUENTE 2 SOURCEDATEORVERSION** · `pastoral/conflictos#fuente_2_sourceDateOrVersion` — TEXTO EDITABLE
2019

**FUENTE 2 APPLICABLESECTION** · `pastoral/conflictos#fuente_2_applicableSection` — TEXTO EDITABLE
protección de menores y personas vulnerables; jurisdicción específica

**FUENTE 2 REUSEBASIS** · `pastoral/conflictos#fuente_2_reuseBasis` — TEXTO EDITABLE
ORIGINAL_SINTESIS

**FUENTE 2 CHECKEDAT** · `pastoral/conflictos#fuente_2_checkedAt` — TEXTO EDITABLE
2026-10-10


## 6. Dinámicas · veinte fichas originales completas


### Ronda de nombres y gestos · actividad/ronda-nombres

**ID ESTRUCTURAL — NO EDITAR:** `actividad/ronda-nombres`
**Ruta:** Menú → Dinámicas → Ronda de nombres y gestos
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/ronda-nombres#titulo` — TEXTO EDITABLE
Ronda de nombres y gestos

**CATEGORIA** · `actividad/ronda-nombres#categoria` — TEXTO EDITABLE
Conocer al grupo

**OBJETIVO** · `actividad/ronda-nombres#objetivo` — TEXTO EDITABLE
Aprender nombres sin exponer historias personales.

**PARTICIPANTES** · `actividad/ronda-nombres#participantes` — TEXTO EDITABLE
5–20

**MINUTOS** · `actividad/ronda-nombres#minutos` — TEXTO EDITABLE
10

**MATERIALES** · `actividad/ronda-nombres#materiales` — TEXTO EDITABLE
Ninguno

**EDAD PARTICULAR** · `actividad/ronda-nombres#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/ronda-nombres#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/ronda-nombres#paso_1` — TEXTO EDITABLE
Cada persona dice su nombre y elige un gesto simple.

**PASO 2** · `actividad/ronda-nombres#paso_2` — TEXTO EDITABLE
El siguiente repite el gesto anterior y presenta el suyo.

**PASO 3** · `actividad/ronda-nombres#paso_3` — TEXTO EDITABLE
Cierra con una vuelta donde todos puedan pasar si lo desean.

**CONVERSACION** · `actividad/ronda-nombres#conversacion` — TEXTO EDITABLE
¿Qué ayudó a recordar a los demás?

**CUIDADOS** · `actividad/ronda-nombres#cuidados` — TEXTO EDITABLE
No exigir participación ni contacto físico.


### Tres puntos en común · actividad/puntos-comunes

**ID ESTRUCTURAL — NO EDITAR:** `actividad/puntos-comunes`
**Ruta:** Menú → Dinámicas → Tres puntos en común
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/puntos-comunes#titulo` — TEXTO EDITABLE
Tres puntos en común

**CATEGORIA** · `actividad/puntos-comunes#categoria` — TEXTO EDITABLE
Conocer al grupo

**OBJETIVO** · `actividad/puntos-comunes#objetivo` — TEXTO EDITABLE
Encontrar afinidades sin presuponer experiencias.

**PARTICIPANTES** · `actividad/puntos-comunes#participantes` — TEXTO EDITABLE
6–24

**MINUTOS** · `actividad/puntos-comunes#minutos` — TEXTO EDITABLE
12

**MATERIALES** · `actividad/puntos-comunes#materiales` — TEXTO EDITABLE
Papel opcional

**EDAD PARTICULAR** · `actividad/puntos-comunes#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/puntos-comunes#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/puntos-comunes#paso_1` — TEXTO EDITABLE
Formar grupos de tres o cuatro.

**PASO 2** · `actividad/puntos-comunes#paso_2` — TEXTO EDITABLE
Dialogar y hallar tres gustos o intereses compartidos.

**PASO 3** · `actividad/puntos-comunes#paso_3` — TEXTO EDITABLE
Compartir uno con el grupo grande.

**CONVERSACION** · `actividad/puntos-comunes#conversacion` — TEXTO EDITABLE
¿Qué nos sorprendió de las coincidencias?

**CUIDADOS** · `actividad/puntos-comunes#cuidados` — TEXTO EDITABLE
No preguntar por ingresos, relaciones o experiencias íntimas.


### Mapa de esperanzas · actividad/mapa-esperanza

**ID ESTRUCTURAL — NO EDITAR:** `actividad/mapa-esperanza`
**Ruta:** Menú → Dinámicas → Mapa de esperanzas
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/mapa-esperanza#titulo` — TEXTO EDITABLE
Mapa de esperanzas

**CATEGORIA** · `actividad/mapa-esperanza#categoria` — TEXTO EDITABLE
Reflexión

**OBJETIVO** · `actividad/mapa-esperanza#objetivo` — TEXTO EDITABLE
Dar espacio a metas concretas y posibles.

**PARTICIPANTES** · `actividad/mapa-esperanza#participantes` — TEXTO EDITABLE
4–25

**MINUTOS** · `actividad/mapa-esperanza#minutos` — TEXTO EDITABLE
15

**MATERIALES** · `actividad/mapa-esperanza#materiales` — TEXTO EDITABLE
Tarjetas y marcadores

**EDAD PARTICULAR** · `actividad/mapa-esperanza#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/mapa-esperanza#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/mapa-esperanza#paso_1` — TEXTO EDITABLE
Ofrecer escribir una meta anónima para la comunidad.

**PASO 2** · `actividad/mapa-esperanza#paso_2` — TEXTO EDITABLE
Agrupar tarjetas por temas sin atribuir autores.

**PASO 3** · `actividad/mapa-esperanza#paso_3` — TEXTO EDITABLE
Elegir juntos una acción pequeña que dependa del grupo.

**CONVERSACION** · `actividad/mapa-esperanza#conversacion` — TEXTO EDITABLE
¿Qué podemos hacer esta semana?

**CUIDADOS** · `actividad/mapa-esperanza#cuidados` — TEXTO EDITABLE
No pedir revelar angustias, trauma ni información identificable.


### Un puente con papel · actividad/puente-papel

**ID ESTRUCTURAL — NO EDITAR:** `actividad/puente-papel`
**Ruta:** Menú → Dinámicas → Un puente con papel
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/puente-papel#titulo` — TEXTO EDITABLE
Un puente con papel

**CATEGORIA** · `actividad/puente-papel#categoria` — TEXTO EDITABLE
Colaboración

**OBJETIVO** · `actividad/puente-papel#objetivo` — TEXTO EDITABLE
Practicar escucha y planificación.

**PARTICIPANTES** · `actividad/puente-papel#participantes` — TEXTO EDITABLE
6–30

**MINUTOS** · `actividad/puente-papel#minutos` — TEXTO EDITABLE
18

**MATERIALES** · `actividad/puente-papel#materiales` — TEXTO EDITABLE
Papel y cinta

**EDAD PARTICULAR** · `actividad/puente-papel#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/puente-papel#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/puente-papel#paso_1` — TEXTO EDITABLE
Formar equipos y entregar materiales iguales.

**PASO 2** · `actividad/puente-papel#paso_2` — TEXTO EDITABLE
Construir un puente de papel que sostenga un objeto ligero.

**PASO 3** · `actividad/puente-papel#paso_3` — TEXTO EDITABLE
Probar estructuras y comentar decisiones sin competir por personas.

**CONVERSACION** · `actividad/puente-papel#conversacion` — TEXTO EDITABLE
¿Qué cambió cuando escuchamos propuestas distintas?

**CUIDADOS** · `actividad/puente-papel#cuidados` — TEXTO EDITABLE
Evitar objetos pesados y exclusiones por habilidad motora.


### Historia en cadena · actividad/historias-en-cadena

**ID ESTRUCTURAL — NO EDITAR:** `actividad/historias-en-cadena`
**Ruta:** Menú → Dinámicas → Historia en cadena
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/historias-en-cadena#titulo` — TEXTO EDITABLE
Historia en cadena

**CATEGORIA** · `actividad/historias-en-cadena#categoria` — TEXTO EDITABLE
Colaboración

**OBJETIVO** · `actividad/historias-en-cadena#objetivo` — TEXTO EDITABLE
Crear una historia colectiva con turnos.

**PARTICIPANTES** · `actividad/historias-en-cadena#participantes` — TEXTO EDITABLE
5–25

**MINUTOS** · `actividad/historias-en-cadena#minutos` — TEXTO EDITABLE
12

**MATERIALES** · `actividad/historias-en-cadena#materiales` — TEXTO EDITABLE
Ninguno

**EDAD PARTICULAR** · `actividad/historias-en-cadena#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/historias-en-cadena#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/historias-en-cadena#paso_1` — TEXTO EDITABLE
Proponer una escena neutral de ayuda comunitaria.

**PASO 2** · `actividad/historias-en-cadena#paso_2` — TEXTO EDITABLE
Cada persona añade una frase o dice paso.

**PASO 3** · `actividad/historias-en-cadena#paso_3` — TEXTO EDITABLE
Cerrar con tres posibles finales y elegir uno juntos.

**CONVERSACION** · `actividad/historias-en-cadena#conversacion` — TEXTO EDITABLE
¿Cómo cambió la historia al sumar otras voces?

**CUIDADOS** · `actividad/historias-en-cadena#cuidados` — TEXTO EDITABLE
No narrar intimidad ajena ni convertir experiencias dolorosas en juego.


### Palabras que cuidan · actividad/palabras-que-cuidan

**ID ESTRUCTURAL — NO EDITAR:** `actividad/palabras-que-cuidan`
**Ruta:** Menú → Dinámicas → Palabras que cuidan
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/palabras-que-cuidan#titulo` — TEXTO EDITABLE
Palabras que cuidan

**CATEGORIA** · `actividad/palabras-que-cuidan#categoria` — TEXTO EDITABLE
Reflexión

**OBJETIVO** · `actividad/palabras-que-cuidan#objetivo` — TEXTO EDITABLE
Reconocer lenguaje de acogida.

**PARTICIPANTES** · `actividad/palabras-que-cuidan#participantes` — TEXTO EDITABLE
4–20

**MINUTOS** · `actividad/palabras-que-cuidan#minutos` — TEXTO EDITABLE
15

**MATERIALES** · `actividad/palabras-que-cuidan#materiales` — TEXTO EDITABLE
Tarjetas

**EDAD PARTICULAR** · `actividad/palabras-que-cuidan#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/palabras-que-cuidan#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/palabras-que-cuidan#paso_1` — TEXTO EDITABLE
Escribir frases breves que den bienvenida.

**PASO 2** · `actividad/palabras-que-cuidan#paso_2` — TEXTO EDITABLE
En parejas elegir cuáles acompañan mejor sin juzgar.

**PASO 3** · `actividad/palabras-que-cuidan#paso_3` — TEXTO EDITABLE
Crear un cartel colectivo con lenguaje inclusivo.

**CONVERSACION** · `actividad/palabras-que-cuidan#conversacion` — TEXTO EDITABLE
¿Qué palabras nos hacen sentir escuchados?

**CUIDADOS** · `actividad/palabras-que-cuidan#cuidados` — TEXTO EDITABLE
Evitar corregir testimonios personales en público.


### Mapa de acciones del barrio · actividad/barrio-acciones

**ID ESTRUCTURAL — NO EDITAR:** `actividad/barrio-acciones`
**Ruta:** Menú → Dinámicas → Mapa de acciones del barrio
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/barrio-acciones#titulo` — TEXTO EDITABLE
Mapa de acciones del barrio

**CATEGORIA** · `actividad/barrio-acciones#categoria` — TEXTO EDITABLE
Servicio

**OBJETIVO** · `actividad/barrio-acciones#objetivo` — TEXTO EDITABLE
Proponer servicio viable sin promesas irreales.

**PARTICIPANTES** · `actividad/barrio-acciones#participantes` — TEXTO EDITABLE
5–25

**MINUTOS** · `actividad/barrio-acciones#minutos` — TEXTO EDITABLE
25

**MATERIALES** · `actividad/barrio-acciones#materiales` — TEXTO EDITABLE
Papel grande y lápices

**EDAD PARTICULAR** · `actividad/barrio-acciones#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/barrio-acciones#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/barrio-acciones#paso_1` — TEXTO EDITABLE
Anotar recursos comunitarios existentes conocidos por el grupo.

**PASO 2** · `actividad/barrio-acciones#paso_2` — TEXTO EDITABLE
Identificar una necesidad que pueda abordarse con consentimiento.

**PASO 3** · `actividad/barrio-acciones#paso_3` — TEXTO EDITABLE
Acordar responsables y verificar antes de publicar o contactar.

**CONVERSACION** · `actividad/barrio-acciones#conversacion` — TEXTO EDITABLE
¿A quién debemos escuchar antes de actuar?

**CUIDADOS** · `actividad/barrio-acciones#cuidados` — TEXTO EDITABLE
No compartir direcciones privadas ni recopilar datos de terceros.


### Lectura con tres preguntas · actividad/lectura-tres-preguntas

**ID ESTRUCTURAL — NO EDITAR:** `actividad/lectura-tres-preguntas`
**Ruta:** Menú → Dinámicas → Lectura con tres preguntas
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/lectura-tres-preguntas#titulo` — TEXTO EDITABLE
Lectura con tres preguntas

**CATEGORIA** · `actividad/lectura-tres-preguntas#categoria` — TEXTO EDITABLE
Biblia en diálogo

**OBJETIVO** · `actividad/lectura-tres-preguntas#objetivo` — TEXTO EDITABLE
Leer un texto en contexto sin imponer interpretaciones.

**PARTICIPANTES** · `actividad/lectura-tres-preguntas#participantes` — TEXTO EDITABLE
3–20

**MINUTOS** · `actividad/lectura-tres-preguntas#minutos` — TEXTO EDITABLE
20

**MATERIALES** · `actividad/lectura-tres-preguntas#materiales` — TEXTO EDITABLE
Biblia RV1909 local

**EDAD PARTICULAR** · `actividad/lectura-tres-preguntas#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/lectura-tres-preguntas#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/lectura-tres-preguntas#paso_1` — TEXTO EDITABLE
Elegir en grupo un pasaje completo y leerlo despacio.

**PASO 2** · `actividad/lectura-tres-preguntas#paso_2` — TEXTO EDITABLE
Cada persona observa qué dice, qué no dice y qué pregunta despierta.

**PASO 3** · `actividad/lectura-tres-preguntas#paso_3` — TEXTO EDITABLE
Distinguir observaciones del texto de aplicaciones personales.

**CONVERSACION** · `actividad/lectura-tres-preguntas#conversacion` — TEXTO EDITABLE
¿Qué necesitaríamos estudiar antes de enseñar este pasaje?

**CUIDADOS** · `actividad/lectura-tres-preguntas#cuidados` — TEXTO EDITABLE
La interpretación es propuesta para diálogo, no validación pastoral humana.


### Escucha de dos minutos · actividad/escucha-dos-minutos

**ID ESTRUCTURAL — NO EDITAR:** `actividad/escucha-dos-minutos`
**Ruta:** Menú → Dinámicas → Escucha de dos minutos
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/escucha-dos-minutos#titulo` — TEXTO EDITABLE
Escucha de dos minutos

**CATEGORIA** · `actividad/escucha-dos-minutos#categoria` — TEXTO EDITABLE
Conocer al grupo

**OBJETIVO** · `actividad/escucha-dos-minutos#objetivo` — TEXTO EDITABLE
Escuchar sin interrumpir.

**PARTICIPANTES** · `actividad/escucha-dos-minutos#participantes` — TEXTO EDITABLE
4–24

**MINUTOS** · `actividad/escucha-dos-minutos#minutos` — TEXTO EDITABLE
12

**MATERIALES** · `actividad/escucha-dos-minutos#materiales` — TEXTO EDITABLE
Reloj

**EDAD PARTICULAR** · `actividad/escucha-dos-minutos#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/escucha-dos-minutos#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/escucha-dos-minutos#paso_1` — TEXTO EDITABLE
En parejas, elegir un tema cotidiano y neutral.

**PASO 2** · `actividad/escucha-dos-minutos#paso_2` — TEXTO EDITABLE
Una persona habla dos minutos; la otra escucha sin aconsejar.

**PASO 3** · `actividad/escucha-dos-minutos#paso_3` — TEXTO EDITABLE
Cambiar roles y agradecer sin repetir lo oído al grupo.

**CONVERSACION** · `actividad/escucha-dos-minutos#conversacion` — TEXTO EDITABLE
¿Qué diferencia hay entre oír y escuchar?

**CUIDADOS** · `actividad/escucha-dos-minutos#cuidados` — TEXTO EDITABLE
No usar relatos sensibles ni grabar conversaciones.


### Camino de acuerdos · actividad/camino-acuerdos

**ID ESTRUCTURAL — NO EDITAR:** `actividad/camino-acuerdos`
**Ruta:** Menú → Dinámicas → Camino de acuerdos
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/camino-acuerdos#titulo` — TEXTO EDITABLE
Camino de acuerdos

**CATEGORIA** · `actividad/camino-acuerdos#categoria` — TEXTO EDITABLE
Colaboración

**OBJETIVO** · `actividad/camino-acuerdos#objetivo` — TEXTO EDITABLE
Practicar deliberación respetuosa.

**PARTICIPANTES** · `actividad/camino-acuerdos#participantes` — TEXTO EDITABLE
6–30

**MINUTOS** · `actividad/camino-acuerdos#minutos` — TEXTO EDITABLE
20

**MATERIALES** · `actividad/camino-acuerdos#materiales` — TEXTO EDITABLE
Papelógrafo

**EDAD PARTICULAR** · `actividad/camino-acuerdos#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/camino-acuerdos#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/camino-acuerdos#paso_1` — TEXTO EDITABLE
Plantear una decisión simulada de organización de evento.

**PASO 2** · `actividad/camino-acuerdos#paso_2` — TEXTO EDITABLE
Cada equipo explica opciones con ventajas y riesgos.

**PASO 3** · `actividad/camino-acuerdos#paso_3` — TEXTO EDITABLE
Consensuar un criterio y decidir cómo revisar el acuerdo.

**CONVERSACION** · `actividad/camino-acuerdos#conversacion` — TEXTO EDITABLE
¿Qué hicimos cuando surgieron diferencias?

**CUIDADOS** · `actividad/camino-acuerdos#cuidados` — TEXTO EDITABLE
Ningún participante debe revelar convicciones íntimas.


### Objetos de gratitud · actividad/gratitud-objetos

**ID ESTRUCTURAL — NO EDITAR:** `actividad/gratitud-objetos`
**Ruta:** Menú → Dinámicas → Objetos de gratitud
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/gratitud-objetos#titulo` — TEXTO EDITABLE
Objetos de gratitud

**CATEGORIA** · `actividad/gratitud-objetos#categoria` — TEXTO EDITABLE
Reflexión

**OBJETIVO** · `actividad/gratitud-objetos#objetivo` — TEXTO EDITABLE
Expresar agradecimiento libremente.

**PARTICIPANTES** · `actividad/gratitud-objetos#participantes` — TEXTO EDITABLE
4–20

**MINUTOS** · `actividad/gratitud-objetos#minutos` — TEXTO EDITABLE
12

**MATERIALES** · `actividad/gratitud-objetos#materiales` — TEXTO EDITABLE
Objetos cotidianos opcionales

**EDAD PARTICULAR** · `actividad/gratitud-objetos#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/gratitud-objetos#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/gratitud-objetos#paso_1` — TEXTO EDITABLE
Presentar un objeto cotidiano o una palabra.

**PASO 2** · `actividad/gratitud-objetos#paso_2` — TEXTO EDITABLE
Explicar una razón sencilla para agradecer o pasar.

**PASO 3** · `actividad/gratitud-objetos#paso_3` — TEXTO EDITABLE
Terminar reconociendo el aporte del grupo.

**CONVERSACION** · `actividad/gratitud-objetos#conversacion` — TEXTO EDITABLE
¿Qué gestos de gratitud podemos practicar?

**CUIDADOS** · `actividad/gratitud-objetos#cuidados` — TEXTO EDITABLE
No asumir que todos atraviesan circunstancias fáciles.


### Versículo y contexto · actividad/versiculo-contexto

**ID ESTRUCTURAL — NO EDITAR:** `actividad/versiculo-contexto`
**Ruta:** Menú → Dinámicas → Versículo y contexto
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/versiculo-contexto#titulo` — TEXTO EDITABLE
Versículo y contexto

**CATEGORIA** · `actividad/versiculo-contexto#categoria` — TEXTO EDITABLE
Biblia en diálogo

**OBJETIVO** · `actividad/versiculo-contexto#objetivo` — TEXTO EDITABLE
Evitar interpretaciones aisladas.

**PARTICIPANTES** · `actividad/versiculo-contexto#participantes` — TEXTO EDITABLE
4–20

**MINUTOS** · `actividad/versiculo-contexto#minutos` — TEXTO EDITABLE
20

**MATERIALES** · `actividad/versiculo-contexto#materiales` — TEXTO EDITABLE
Biblia RV1909 local

**EDAD PARTICULAR** · `actividad/versiculo-contexto#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/versiculo-contexto#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/versiculo-contexto#paso_1` — TEXTO EDITABLE
Elegir una referencia y leer el capítulo cercano.

**PASO 2** · `actividad/versiculo-contexto#paso_2` — TEXTO EDITABLE
En equipos ubicar hablante, destinatario y situación textual.

**PASO 3** · `actividad/versiculo-contexto#paso_3` — TEXTO EDITABLE
Compartir una pregunta para estudio adicional.

**CONVERSACION** · `actividad/versiculo-contexto#conversacion` — TEXTO EDITABLE
¿Qué cambió al leer antes y después?

**CUIDADOS** · `actividad/versiculo-contexto#cuidados` — TEXTO EDITABLE
No etiquetar conclusiones como doctrina aprobada.


### Semillas de ideas · actividad/semillas-ideas

**ID ESTRUCTURAL — NO EDITAR:** `actividad/semillas-ideas`
**Ruta:** Menú → Dinámicas → Semillas de ideas
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/semillas-ideas#titulo` — TEXTO EDITABLE
Semillas de ideas

**CATEGORIA** · `actividad/semillas-ideas#categoria` — TEXTO EDITABLE
Servicio

**OBJETIVO** · `actividad/semillas-ideas#objetivo` — TEXTO EDITABLE
Convertir deseos de ayuda en propuestas concretas.

**PARTICIPANTES** · `actividad/semillas-ideas#participantes` — TEXTO EDITABLE
5–30

**MINUTOS** · `actividad/semillas-ideas#minutos` — TEXTO EDITABLE
18

**MATERIALES** · `actividad/semillas-ideas#materiales` — TEXTO EDITABLE
Notas adhesivas

**EDAD PARTICULAR** · `actividad/semillas-ideas#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/semillas-ideas#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/semillas-ideas#paso_1` — TEXTO EDITABLE
Cada persona anota una idea de apoyo comunitario.

**PASO 2** · `actividad/semillas-ideas#paso_2` — TEXTO EDITABLE
Agrupar por recursos y accesibilidad.

**PASO 3** · `actividad/semillas-ideas#paso_3` — TEXTO EDITABLE
Escoger un piloto pequeño que requiera pocos permisos.

**CONVERSACION** · `actividad/semillas-ideas#conversacion` — TEXTO EDITABLE
¿Cómo evaluaremos si fue útil?

**CUIDADOS** · `actividad/semillas-ideas#cuidados` — TEXTO EDITABLE
No ofrecer servicios profesionales sin calificación.


### Cadena de agradecimiento · actividad/cadena-agradecimiento

**ID ESTRUCTURAL — NO EDITAR:** `actividad/cadena-agradecimiento`
**Ruta:** Menú → Dinámicas → Cadena de agradecimiento
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/cadena-agradecimiento#titulo` — TEXTO EDITABLE
Cadena de agradecimiento

**CATEGORIA** · `actividad/cadena-agradecimiento#categoria` — TEXTO EDITABLE
Conocer al grupo

**OBJETIVO** · `actividad/cadena-agradecimiento#objetivo` — TEXTO EDITABLE
Visibilizar aportes observables.

**PARTICIPANTES** · `actividad/cadena-agradecimiento#participantes` — TEXTO EDITABLE
5–25

**MINUTOS** · `actividad/cadena-agradecimiento#minutos` — TEXTO EDITABLE
10

**MATERIALES** · `actividad/cadena-agradecimiento#materiales` — TEXTO EDITABLE
Ninguno

**EDAD PARTICULAR** · `actividad/cadena-agradecimiento#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/cadena-agradecimiento#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/cadena-agradecimiento#paso_1` — TEXTO EDITABLE
Nombrar una acción colaborativa que se haya visto hoy.

**PASO 2** · `actividad/cadena-agradecimiento#paso_2` — TEXTO EDITABLE
Agradecer sin evaluar rasgos personales.

**PASO 3** · `actividad/cadena-agradecimiento#paso_3` — TEXTO EDITABLE
Permitir silencios y cerrar reconociendo el esfuerzo conjunto.

**CONVERSACION** · `actividad/cadena-agradecimiento#conversacion` — TEXTO EDITABLE
¿Qué gestos nos animaron a participar?

**CUIDADOS** · `actividad/cadena-agradecimiento#cuidados` — TEXTO EDITABLE
Evitar favoritismos y elogios de apariencia.


### Equipo sin palabras · actividad/equipo-sin-palabras

**ID ESTRUCTURAL — NO EDITAR:** `actividad/equipo-sin-palabras`
**Ruta:** Menú → Dinámicas → Equipo sin palabras
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/equipo-sin-palabras#titulo` — TEXTO EDITABLE
Equipo sin palabras

**CATEGORIA** · `actividad/equipo-sin-palabras#categoria` — TEXTO EDITABLE
Colaboración

**OBJETIVO** · `actividad/equipo-sin-palabras#objetivo` — TEXTO EDITABLE
Explorar comunicación no verbal accesible.

**PARTICIPANTES** · `actividad/equipo-sin-palabras#participantes` — TEXTO EDITABLE
6–20

**MINUTOS** · `actividad/equipo-sin-palabras#minutos` — TEXTO EDITABLE
15

**MATERIALES** · `actividad/equipo-sin-palabras#materiales` — TEXTO EDITABLE
Fichas de figuras

**EDAD PARTICULAR** · `actividad/equipo-sin-palabras#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/equipo-sin-palabras#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/equipo-sin-palabras#paso_1` — TEXTO EDITABLE
Cada equipo recibe piezas para ordenar una secuencia.

**PASO 2** · `actividad/equipo-sin-palabras#paso_2` — TEXTO EDITABLE
Resolver primero con señas voluntarias y apoyo escrito.

**PASO 3** · `actividad/equipo-sin-palabras#paso_3` — TEXTO EDITABLE
Comparar cómo se coordinó el equipo.

**CONVERSACION** · `actividad/equipo-sin-palabras#conversacion` — TEXTO EDITABLE
¿Qué barreras hubo y cómo las reducimos?

**CUIDADOS** · `actividad/equipo-sin-palabras#cuidados` — TEXTO EDITABLE
Adaptar con texto/audio; no excluir por sordera, visión o movilidad.


### Preguntas ante una parábola · actividad/parabolas-preguntas

**ID ESTRUCTURAL — NO EDITAR:** `actividad/parabolas-preguntas`
**Ruta:** Menú → Dinámicas → Preguntas ante una parábola
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/parabolas-preguntas#titulo` — TEXTO EDITABLE
Preguntas ante una parábola

**CATEGORIA** · `actividad/parabolas-preguntas#categoria` — TEXTO EDITABLE
Biblia en diálogo

**OBJETIVO** · `actividad/parabolas-preguntas#objetivo` — TEXTO EDITABLE
Distinguir relato, audiencia y aplicación.

**PARTICIPANTES** · `actividad/parabolas-preguntas#participantes` — TEXTO EDITABLE
4–20

**MINUTOS** · `actividad/parabolas-preguntas#minutos` — TEXTO EDITABLE
22

**MATERIALES** · `actividad/parabolas-preguntas#materiales` — TEXTO EDITABLE
Texto bíblico

**EDAD PARTICULAR** · `actividad/parabolas-preguntas#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/parabolas-preguntas#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/parabolas-preguntas#paso_1` — TEXTO EDITABLE
Elegir una parábola y leer el contexto narrativo.

**PASO 2** · `actividad/parabolas-preguntas#paso_2` — TEXTO EDITABLE
Formular preguntas de observación sin debatir quién tiene razón.

**PASO 3** · `actividad/parabolas-preguntas#paso_3` — TEXTO EDITABLE
Proponer investigación pastoral posterior si hay desacuerdos.

**CONVERSACION** · `actividad/parabolas-preguntas#conversacion` — TEXTO EDITABLE
¿Qué información falta para comprender mejor el relato?

**CUIDADOS** · `actividad/parabolas-preguntas#cuidados` — TEXTO EDITABLE
No atribuir a Dios afirmaciones del grupo sin revisión contextual.


### Red de servicio · actividad/red-servicio

**ID ESTRUCTURAL — NO EDITAR:** `actividad/red-servicio`
**Ruta:** Menú → Dinámicas → Red de servicio
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/red-servicio#titulo` — TEXTO EDITABLE
Red de servicio

**CATEGORIA** · `actividad/red-servicio#categoria` — TEXTO EDITABLE
Servicio

**OBJETIVO** · `actividad/red-servicio#objetivo` — TEXTO EDITABLE
Conectar capacidades disponibles con tareas prudentes.

**PARTICIPANTES** · `actividad/red-servicio#participantes` — TEXTO EDITABLE
5–25

**MINUTOS** · `actividad/red-servicio#minutos` — TEXTO EDITABLE
20

**MATERIALES** · `actividad/red-servicio#materiales` — TEXTO EDITABLE
Pizarra

**EDAD PARTICULAR** · `actividad/red-servicio#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/red-servicio#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/red-servicio#paso_1` — TEXTO EDITABLE
Listar tareas de un evento hipotético.

**PASO 2** · `actividad/red-servicio#paso_2` — TEXTO EDITABLE
Distribuirlas por disponibilidad voluntaria.

**PASO 3** · `actividad/red-servicio#paso_3` — TEXTO EDITABLE
Nombrar apoyo alternativo y verificar consentimientos.

**CONVERSACION** · `actividad/red-servicio#conversacion` — TEXTO EDITABLE
¿A quién dejamos fuera sin querer?

**CUIDADOS** · `actividad/red-servicio#cuidados` — TEXTO EDITABLE
No registrar teléfonos personales ni horarios privados en público.


### Pausa de observación · actividad/pausa-observacion

**ID ESTRUCTURAL — NO EDITAR:** `actividad/pausa-observacion`
**Ruta:** Menú → Dinámicas → Pausa de observación
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/pausa-observacion#titulo` — TEXTO EDITABLE
Pausa de observación

**CATEGORIA** · `actividad/pausa-observacion#categoria` — TEXTO EDITABLE
Reflexión

**OBJETIVO** · `actividad/pausa-observacion#objetivo` — TEXTO EDITABLE
Atender a lo que ocurre antes de reaccionar.

**PARTICIPANTES** · `actividad/pausa-observacion#participantes` — TEXTO EDITABLE
3–25

**MINUTOS** · `actividad/pausa-observacion#minutos` — TEXTO EDITABLE
12

**MATERIALES** · `actividad/pausa-observacion#materiales` — TEXTO EDITABLE
Papel

**EDAD PARTICULAR** · `actividad/pausa-observacion#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/pausa-observacion#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/pausa-observacion#paso_1` — TEXTO EDITABLE
Invitar a observar un espacio tranquilo por un minuto.

**PASO 2** · `actividad/pausa-observacion#paso_2` — TEXTO EDITABLE
Anotar algo oído o visto sin evaluarlo.

**PASO 3** · `actividad/pausa-observacion#paso_3` — TEXTO EDITABLE
Compartir cómo cambiaron las observaciones al escuchar a otros.

**CONVERSACION** · `actividad/pausa-observacion#conversacion` — TEXTO EDITABLE
¿Qué solemos pasar por alto?

**CUIDADOS** · `actividad/pausa-observacion#cuidados` — TEXTO EDITABLE
Alternativa sentada o con ojos abiertos; no imponer ejercicios corporales.


### Tarea compartida · actividad/tarea-compartida

**ID ESTRUCTURAL — NO EDITAR:** `actividad/tarea-compartida`
**Ruta:** Menú → Dinámicas → Tarea compartida
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/tarea-compartida#titulo` — TEXTO EDITABLE
Tarea compartida

**CATEGORIA** · `actividad/tarea-compartida#categoria` — TEXTO EDITABLE
Colaboración

**OBJETIVO** · `actividad/tarea-compartida#objetivo` — TEXTO EDITABLE
Repartir responsabilidades con equidad.

**PARTICIPANTES** · `actividad/tarea-compartida#participantes` — TEXTO EDITABLE
6–30

**MINUTOS** · `actividad/tarea-compartida#minutos` — TEXTO EDITABLE
15

**MATERIALES** · `actividad/tarea-compartida#materiales` — TEXTO EDITABLE
Papel y marcadores

**EDAD PARTICULAR** · `actividad/tarea-compartida#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/tarea-compartida#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/tarea-compartida#paso_1` — TEXTO EDITABLE
Plantear la preparación de una reunión ficticia.

**PASO 2** · `actividad/tarea-compartida#paso_2` — TEXTO EDITABLE
Asignar tareas considerando fortalezas y accesibilidad.

**PASO 3** · `actividad/tarea-compartida#paso_3` — TEXTO EDITABLE
Revisar qué quedó sin cubrir y ajustar juntos.

**CONVERSACION** · `actividad/tarea-compartida#conversacion` — TEXTO EDITABLE
¿Qué significa colaborar sin sobrecargar?

**CUIDADOS** · `actividad/tarea-compartida#cuidados` — TEXTO EDITABLE
Evitar presión para asumir voluntariados reales.


### Un próximo paso · actividad/proximo-paso

**ID ESTRUCTURAL — NO EDITAR:** `actividad/proximo-paso`
**Ruta:** Menú → Dinámicas → Un próximo paso
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralActivities.ts`

**TITULO** · `actividad/proximo-paso#titulo` — TEXTO EDITABLE
Un próximo paso

**CATEGORIA** · `actividad/proximo-paso#categoria` — TEXTO EDITABLE
Servicio

**OBJETIVO** · `actividad/proximo-paso#objetivo` — TEXTO EDITABLE
Cerrar con compromisos pequeños y opcionales.

**PARTICIPANTES** · `actividad/proximo-paso#participantes` — TEXTO EDITABLE
3–30

**MINUTOS** · `actividad/proximo-paso#minutos` — TEXTO EDITABLE
15

**MATERIALES** · `actividad/proximo-paso#materiales` — TEXTO EDITABLE
Tarjetas

**EDAD PARTICULAR** · `actividad/proximo-paso#edad_particular` — TEXTO EDITABLE
NO CONSTA

**IMAGEN** · `actividad/proximo-paso#imagen` — TEXTO EDITABLE
NO CONSTA

**PASO 1** · `actividad/proximo-paso#paso_1` — TEXTO EDITABLE
Cada persona elige una acción solidaria realista o dice paso.

**PASO 2** · `actividad/proximo-paso#paso_2` — TEXTO EDITABLE
En pequeños grupos identificar obstáculos generales.

**PASO 3** · `actividad/proximo-paso#paso_3` — TEXTO EDITABLE
Acordar fecha para evaluar, sin vigilar decisiones individuales.

**CONVERSACION** · `actividad/proximo-paso#conversacion` — TEXTO EDITABLE
¿Cómo acompañar sin controlar?

**CUIDADOS** · `actividad/proximo-paso#cuidados` — TEXTO EDITABLE
No pedir pruebas de cumplimiento ni datos sensibles.


## 7. Juegos interactivos · preguntas, respuestas y referencias


### Pregunta t1 · juego/trivia/t1

**ID ESTRUCTURAL — NO EDITAR:** `juego/trivia/t1`
**Ruta:** Dinámicas → Trivia → t1
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralGames.ts`

**PREGUNTA** · `juego/trivia/t1#pregunta` — TEXTO EDITABLE
¿En qué evangelio aparece el diálogo sobre el buen samaritano?

**OPCION 1** · `juego/trivia/t1#opcion_1` — TEXTO EDITABLE
Lucas

**OPCION 2** · `juego/trivia/t1#opcion_2` — TEXTO EDITABLE
Marcos

**OPCION 3** · `juego/trivia/t1#opcion_3` — TEXTO EDITABLE
Juan

**RESPUESTA INDICE** · `juego/trivia/t1#respuesta_indice` — TEXTO EDITABLE
0

**RESPUESTA TEXTO** · `juego/trivia/t1#respuesta_texto` — TEXTO EDITABLE
Lucas

**EXPLICACION** · `juego/trivia/t1#explicacion` — TEXTO EDITABLE
Leer Lucas 10:25–37 y su pregunta inicial antes de aplicar la parábola.

**REFERENCIA** · `juego/trivia/t1#referencia` — TEXTO EDITABLE
Lucas 10:25–37


### Pregunta t2 · juego/trivia/t2

**ID ESTRUCTURAL — NO EDITAR:** `juego/trivia/t2`
**Ruta:** Dinámicas → Trivia → t2
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralGames.ts`

**PREGUNTA** · `juego/trivia/t2#pregunta` — TEXTO EDITABLE
¿Qué capítulo de Juan presenta la imagen de la vid?

**OPCION 1** · `juego/trivia/t2#opcion_1` — TEXTO EDITABLE
Juan 3

**OPCION 2** · `juego/trivia/t2#opcion_2` — TEXTO EDITABLE
Juan 15

**OPCION 3** · `juego/trivia/t2#opcion_3` — TEXTO EDITABLE
Juan 21

**RESPUESTA INDICE** · `juego/trivia/t2#respuesta_indice` — TEXTO EDITABLE
1

**RESPUESTA TEXTO** · `juego/trivia/t2#respuesta_texto` — TEXTO EDITABLE
Juan 15

**EXPLICACION** · `juego/trivia/t2#explicacion` — TEXTO EDITABLE
Juan 15:1–12 usa esta imagen dentro del discurso de Jesús.

**REFERENCIA** · `juego/trivia/t2#referencia` — TEXTO EDITABLE
Juan 15:1–12


### Pregunta t3 · juego/trivia/t3

**ID ESTRUCTURAL — NO EDITAR:** `juego/trivia/t3`
**Ruta:** Dinámicas → Trivia → t3
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralGames.ts`

**PREGUNTA** · `juego/trivia/t3#pregunta` — TEXTO EDITABLE
¿Qué salmo comienza con la imagen del pastor?

**OPCION 1** · `juego/trivia/t3#opcion_1` — TEXTO EDITABLE
Salmos 23

**OPCION 2** · `juego/trivia/t3#opcion_2` — TEXTO EDITABLE
Salmos 13

**OPCION 3** · `juego/trivia/t3#opcion_3` — TEXTO EDITABLE
Salmos 42

**RESPUESTA INDICE** · `juego/trivia/t3#respuesta_indice` — TEXTO EDITABLE
0

**RESPUESTA TEXTO** · `juego/trivia/t3#respuesta_texto` — TEXTO EDITABLE
Salmos 23

**EXPLICACION** · `juego/trivia/t3#explicacion` — TEXTO EDITABLE
Salmos 23:1–6 contiene imágenes de cuidado y peligro.

**REFERENCIA** · `juego/trivia/t3#referencia` — TEXTO EDITABLE
Salmos 23:1–6


### Pregunta t4 · juego/trivia/t4

**ID ESTRUCTURAL — NO EDITAR:** `juego/trivia/t4`
**Ruta:** Dinámicas → Trivia → t4
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralGames.ts`

**PREGUNTA** · `juego/trivia/t4#pregunta` — TEXTO EDITABLE
¿En cuál texto aparece una enseñanza sobre el servicio frente al prestigio?

**OPCION 1** · `juego/trivia/t4#opcion_1` — TEXTO EDITABLE
Marcos 10:35–45

**OPCION 2** · `juego/trivia/t4#opcion_2` — TEXTO EDITABLE
Juan 6:1–15

**OPCION 3** · `juego/trivia/t4#opcion_3` — TEXTO EDITABLE
Salmos 139:1–18

**RESPUESTA INDICE** · `juego/trivia/t4#respuesta_indice` — TEXTO EDITABLE
0

**RESPUESTA TEXTO** · `juego/trivia/t4#respuesta_texto` — TEXTO EDITABLE
Marcos 10:35–45

**EXPLICACION** · `juego/trivia/t4#explicacion` — TEXTO EDITABLE
Marcos 10 confronta la ambición de puestos con el servicio.

**REFERENCIA** · `juego/trivia/t4#referencia` — TEXTO EDITABLE
Marcos 10:35–45


### Pregunta t5 · juego/trivia/t5

**ID ESTRUCTURAL — NO EDITAR:** `juego/trivia/t5`
**Ruta:** Dinámicas → Trivia → t5
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralGames.ts`

**PREGUNTA** · `juego/trivia/t5#pregunta` — TEXTO EDITABLE
¿En qué carta se encuentra el capítulo sobre el amor?

**OPCION 1** · `juego/trivia/t5#opcion_1` — TEXTO EDITABLE
Romanos 8

**OPCION 2** · `juego/trivia/t5#opcion_2` — TEXTO EDITABLE
1 Corintios 13

**OPCION 3** · `juego/trivia/t5#opcion_3` — TEXTO EDITABLE
Gálatas 6

**RESPUESTA INDICE** · `juego/trivia/t5#respuesta_indice` — TEXTO EDITABLE
1

**RESPUESTA TEXTO** · `juego/trivia/t5#respuesta_texto` — TEXTO EDITABLE
1 Corintios 13

**EXPLICACION** · `juego/trivia/t5#explicacion` — TEXTO EDITABLE
1 Corintios 13 se lee dentro de la discusión comunitaria de la carta.

**REFERENCIA** · `juego/trivia/t5#referencia` — TEXTO EDITABLE
1 Corintios 13:1–13


### Pregunta f1 · juego/vf/f1

**ID ESTRUCTURAL — NO EDITAR:** `juego/vf/f1`
**Ruta:** Dinámicas → Verdadero/Falso → f1
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralGames.ts`

**ENUNCIADO** · `juego/vf/f1#enunciado` — TEXTO EDITABLE
En Juan 15 se utiliza la imagen de una vid.

**RESPUESTA** · `juego/vf/f1#respuesta` — TEXTO EDITABLE
Verdadero

**EXPLICACION** · `juego/vf/f1#explicacion` — TEXTO EDITABLE
Juan 15:1–12 emplea la vid para hablar de permanecer.

**REFERENCIA** · `juego/vf/f1#referencia` — TEXTO EDITABLE
Juan 15:1–12


### Pregunta f2 · juego/vf/f2

**ID ESTRUCTURAL — NO EDITAR:** `juego/vf/f2`
**Ruta:** Dinámicas → Verdadero/Falso → f2
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralGames.ts`

**ENUNCIADO** · `juego/vf/f2#enunciado` — TEXTO EDITABLE
La parábola del buen samaritano se encuentra en el libro de Génesis.

**RESPUESTA** · `juego/vf/f2#respuesta` — TEXTO EDITABLE
Falso

**EXPLICACION** · `juego/vf/f2#explicacion` — TEXTO EDITABLE
Se lee en Lucas 10:25–37.

**REFERENCIA** · `juego/vf/f2#referencia` — TEXTO EDITABLE
Lucas 10:25–37


### Pregunta f3 · juego/vf/f3

**ID ESTRUCTURAL — NO EDITAR:** `juego/vf/f3`
**Ruta:** Dinámicas → Verdadero/Falso → f3
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralGames.ts`

**ENUNCIADO** · `juego/vf/f3#enunciado` — TEXTO EDITABLE
El Salmo 23 habla solamente de lugares tranquilos y no menciona peligro.

**RESPUESTA** · `juego/vf/f3#respuesta` — TEXTO EDITABLE
Falso

**EXPLICACION** · `juego/vf/f3#explicacion` — TEXTO EDITABLE
También nombra un valle oscuro; leer Salmos 23:1–6.

**REFERENCIA** · `juego/vf/f3#referencia` — TEXTO EDITABLE
Salmos 23:1–6


### Pregunta f4 · juego/vf/f4

**ID ESTRUCTURAL — NO EDITAR:** `juego/vf/f4`
**Ruta:** Dinámicas → Verdadero/Falso → f4
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralGames.ts`

**ENUNCIADO** · `juego/vf/f4#enunciado` — TEXTO EDITABLE
Marcos 10:42–45 contrapone dominio y servicio.

**RESPUESTA** · `juego/vf/f4#respuesta` — TEXTO EDITABLE
Verdadero

**EXPLICACION** · `juego/vf/f4#explicacion` — TEXTO EDITABLE
El pasaje se sitúa después de la petición de puestos de honor.

**REFERENCIA** · `juego/vf/f4#referencia` — TEXTO EDITABLE
Marcos 10:35–45


### Pregunta f5 · juego/vf/f5

**ID ESTRUCTURAL — NO EDITAR:** `juego/vf/f5`
**Ruta:** Dinámicas → Verdadero/Falso → f5
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralGames.ts`

**ENUNCIADO** · `juego/vf/f5#enunciado` — TEXTO EDITABLE
Mateo 6 contiene una enseñanza sobre oración.

**RESPUESTA** · `juego/vf/f5#respuesta` — TEXTO EDITABLE
Verdadero

**EXPLICACION** · `juego/vf/f5#explicacion` — TEXTO EDITABLE
El contexto de Mateo 6:5–15 incluye orientaciones sobre motivación.

**REFERENCIA** · `juego/vf/f5#referencia` — TEXTO EDITABLE
Mateo 6:5–15


### Ordenar tres versículos de Salmos 23 (RV1909) · juego/ordenar-versiculos

**ID ESTRUCTURAL — NO EDITAR:** `juego/ordenar-versiculos`
**Ruta:** Dinámicas → Ordenar versículos
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralGames.ts`

**TITULO** · `juego/ordenar-versiculos#titulo` — TEXTO EDITABLE
Ordenar tres versículos de Salmos 23 (RV1909)

**REFERENCIA** · `juego/ordenar-versiculos#referencia` — TEXTO EDITABLE
Salmos 23:1–3

**TEXTO VERSICULOS** · `juego/ordenar-versiculos#texto_versiculos` — TEXTO EDITABLE
TEXTO RV1909 NO EXPORTADO


## 8. Cancionero, fichas musicales y opciones externas

**Visibilidad:** SoundCloud está conectado desde el menú. Las letras del Cancionero, el módulo de fichas pastorales, YouTube y las listas históricas Spotify no son destinos del menú actual. No se incluyen letras comerciales de terceros.


### Luz en el camino de hoy · cancion/original/luz-en-el-camino

**ID ESTRUCTURAL — NO EDITAR:** `cancion/original/luz-en-el-camino`
**Ruta:** Componente sin ruta → Cancionero → Luz en el camino de hoy
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/originalLyrics.ts`

**TITLE** · `cancion/original/luz-en-el-camino#title` — TEXTO EDITABLE
Luz en el camino de hoy

**AUTHOR** · `cancion/original/luz-en-el-camino#author` — TEXTO EDITABLE
Texto original preparado para el proyecto La U

**VERSION** · `cancion/original/luz-en-el-camino#version` — TEXTO EDITABLE
Versión española original 1.0 (2026)

**LANGUAGE** · `cancion/original/luz-en-el-camino#language` — TEXTO EDITABLE
es

**RIGHTS** · `cancion/original/luz-en-el-camino#rights` — TEXTO EDITABLE
ORIGINAL_PROYECTO

**LICENCENOTE** · `cancion/original/luz-en-el-camino#licenceNote` — TEXTO EDITABLE
Letra escrita originalmente para La U; uso interno del proyecto. Titularidad, atribución final y distribución pública pendientes de confirmación del Owner.

**SOURCE** · `cancion/original/luz-en-el-camino#source` — TEXTO EDITABLE
Creación original para R1.3; no procede de canciones existentes.

**EDITORIAL** · `cancion/original/luz-en-el-camino#editorial` — TEXTO EDITABLE
EN_REVISION

**LYRICS** · `cancion/original/luz-en-el-camino#lyrics` — TEXTO EDITABLE
```text
Cuando el día parece largo,
una mano puede ayudar;
con palabras y con silencio
otro paso vamos a dar.

Camina a nuestro lado,
enséñanos a escuchar;
que el cuidado sea concreto
y la paz tenga un lugar.

No buscamos ser los primeros
ni aplausos para seguir;
si una voz queda a la sombra,
hagamos espacio para oír.

Camina a nuestro lado,
enséñanos a escuchar;
que el cuidado sea concreto
y la paz tenga un lugar.
```


### Mesa abierta para todos · cancion/original/mesa-abierta

**ID ESTRUCTURAL — NO EDITAR:** `cancion/original/mesa-abierta`
**Ruta:** Componente sin ruta → Cancionero → Mesa abierta para todos
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/originalLyrics.ts`

**TITLE** · `cancion/original/mesa-abierta#title` — TEXTO EDITABLE
Mesa abierta para todos

**AUTHOR** · `cancion/original/mesa-abierta#author` — TEXTO EDITABLE
Texto original preparado para el proyecto La U

**VERSION** · `cancion/original/mesa-abierta#version` — TEXTO EDITABLE
Versión española original 1.0 (2026)

**LANGUAGE** · `cancion/original/mesa-abierta#language` — TEXTO EDITABLE
es

**RIGHTS** · `cancion/original/mesa-abierta#rights` — TEXTO EDITABLE
ORIGINAL_PROYECTO

**LICENCENOTE** · `cancion/original/mesa-abierta#licenceNote` — TEXTO EDITABLE
Creación original; aprobación del Owner para publicación externa pendiente.

**SOURCE** · `cancion/original/mesa-abierta#source` — TEXTO EDITABLE
Creación original para R1.3.

**EDITORIAL** · `cancion/original/mesa-abierta#editorial` — TEXTO EDITABLE
EN_REVISION

**LYRICS** · `cancion/original/mesa-abierta#lyrics` — TEXTO EDITABLE
```text
Hay un sitio junto a la mesa,
hay un nombre por aprender;
nadie llega como un extraño
cuando hay tiempo para entender.

Haz de nuestras manos refugio,
haz de nuestra voz una invitación;
sin preguntas que lastimen,
con respeto y con atención.

Si el camino trae cansancio,
nadie tiene que explicar;
una silla, un vaso de agua,
un silencio pueden cuidar.

Haz de nuestras manos refugio,
haz de nuestra voz una invitación;
sin preguntas que lastimen,
con respeto y con atención.
```


### Sembrar esperanza · cancion/original/sembrar-esperanza

**ID ESTRUCTURAL — NO EDITAR:** `cancion/original/sembrar-esperanza`
**Ruta:** Componente sin ruta → Cancionero → Sembrar esperanza
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/originalLyrics.ts`

**TITLE** · `cancion/original/sembrar-esperanza#title` — TEXTO EDITABLE
Sembrar esperanza

**AUTHOR** · `cancion/original/sembrar-esperanza#author` — TEXTO EDITABLE
Texto original preparado para el proyecto La U

**VERSION** · `cancion/original/sembrar-esperanza#version` — TEXTO EDITABLE
Versión española original 1.0 (2026)

**LANGUAGE** · `cancion/original/sembrar-esperanza#language` — TEXTO EDITABLE
es

**RIGHTS** · `cancion/original/sembrar-esperanza#rights` — TEXTO EDITABLE
ORIGINAL_PROYECTO

**LICENCENOTE** · `cancion/original/sembrar-esperanza#licenceNote` — TEXTO EDITABLE
Creación original; aprobación del Owner para publicación externa pendiente.

**SOURCE** · `cancion/original/sembrar-esperanza#source` — TEXTO EDITABLE
Creación original para R1.3.

**EDITORIAL** · `cancion/original/sembrar-esperanza#editorial` — TEXTO EDITABLE
EN_REVISION

**LYRICS** · `cancion/original/sembrar-esperanza#lyrics` — TEXTO EDITABLE
```text
Una semilla no hace ruido
cuando empieza a germinar;
un pequeño gesto sencillo
puede a otros acompañar.

Hoy sembramos esperanza
en el suelo que hay aquí;
con paciencia y con ternura,
aprendemos a servir.

Si la tarde viene oscura,
no fingimos claridad;
nos unimos paso a paso
sin negar la dificultad.

Hoy sembramos esperanza
en el suelo que hay aquí;
con paciencia y con ternura,
aprendemos a servir.
```


### Manos disponibles · cancion/original/manos-disponibles

**ID ESTRUCTURAL — NO EDITAR:** `cancion/original/manos-disponibles`
**Ruta:** Componente sin ruta → Cancionero → Manos disponibles
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** EN_REVISION
**Origen técnico:** `apps/bible-topic-explorer/src/product/originalLyrics.ts`

**TITLE** · `cancion/original/manos-disponibles#title` — TEXTO EDITABLE
Manos disponibles

**AUTHOR** · `cancion/original/manos-disponibles#author` — TEXTO EDITABLE
Texto original preparado para el proyecto La U

**VERSION** · `cancion/original/manos-disponibles#version` — TEXTO EDITABLE
Versión española original 1.0 (2026)

**LANGUAGE** · `cancion/original/manos-disponibles#language` — TEXTO EDITABLE
es

**RIGHTS** · `cancion/original/manos-disponibles#rights` — TEXTO EDITABLE
ORIGINAL_PROYECTO

**LICENCENOTE** · `cancion/original/manos-disponibles#licenceNote` — TEXTO EDITABLE
Creación original; aprobación del Owner para publicación externa pendiente.

**SOURCE** · `cancion/original/manos-disponibles#source` — TEXTO EDITABLE
Creación original para R1.3.

**EDITORIAL** · `cancion/original/manos-disponibles#editorial` — TEXTO EDITABLE
EN_REVISION

**LYRICS** · `cancion/original/manos-disponibles#lyrics` — TEXTO EDITABLE
```text
No prometo mil respuestas
ni conocer todo el dolor;
puedo ofrecerte mi escucha,
puedo pedir ayuda hoy.

Manos disponibles,
corazones con verdad;
cada paso es compartido,
nadie debe caminar en soledad.

Si nos faltan las palabras,
respetamos el callar;
si alguien pide su espacio,
lo sabemos acompañar.

Manos disponibles,
corazones con verdad;
cada paso es compartido,
nadie debe caminar en soledad.
```


### Alabaré · cancion/ficha/alabare

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/alabare`
**Ruta:** Componente sin ruta → Canciones → Alabaré
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/alabare#titulo` — TEXTO EDITABLE
Alabaré

**MOMENTO** · `cancion/ficha/alabare#momento` — TEXTO EDITABLE
Bienvenida

**OBJETIVO** · `cancion/ficha/alabare#objetivo` — TEXTO EDITABLE
Iniciar un encuentro alegre.

**PREGUNTA** · `cancion/ficha/alabare#pregunta` — TEXTO EDITABLE
¿Qué significa agradecer en comunidad?

**ADVERTENCIA** · `cancion/ficha/alabare#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Pescador de hombres · cancion/ficha/pescador-hombres

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/pescador-hombres`
**Ruta:** Componente sin ruta → Canciones → Pescador de hombres
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/pescador-hombres#titulo` — TEXTO EDITABLE
Pescador de hombres

**MOMENTO** · `cancion/ficha/pescador-hombres#momento` — TEXTO EDITABLE
Reflexión

**OBJETIVO** · `cancion/ficha/pescador-hombres#objetivo` — TEXTO EDITABLE
Dialogar sobre respuesta y vocación.

**PREGUNTA** · `cancion/ficha/pescador-hombres#pregunta` — TEXTO EDITABLE
¿Qué invitaciones de servicio reconocemos?

**ADVERTENCIA** · `cancion/ficha/pescador-hombres#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Dios está aquí · cancion/ficha/dios-esta-aqui

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/dios-esta-aqui`
**Ruta:** Componente sin ruta → Canciones → Dios está aquí
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/dios-esta-aqui#titulo` — TEXTO EDITABLE
Dios está aquí

**MOMENTO** · `cancion/ficha/dios-esta-aqui#momento` — TEXTO EDITABLE
Oración

**OBJETIVO** · `cancion/ficha/dios-esta-aqui#objetivo` — TEXTO EDITABLE
Facilitar silencio y atención.

**PREGUNTA** · `cancion/ficha/dios-esta-aqui#pregunta` — TEXTO EDITABLE
¿Cómo preparamos un espacio de escucha?

**ADVERTENCIA** · `cancion/ficha/dios-esta-aqui#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Nadie te ama como yo · cancion/ficha/nadie-te-ama

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/nadie-te-ama`
**Ruta:** Componente sin ruta → Canciones → Nadie te ama como yo
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/nadie-te-ama#titulo` — TEXTO EDITABLE
Nadie te ama como yo

**MOMENTO** · `cancion/ficha/nadie-te-ama#momento` — TEXTO EDITABLE
Reflexión

**OBJETIVO** · `cancion/ficha/nadie-te-ama#objetivo` — TEXTO EDITABLE
Hablar de acogida sin presiones.

**PREGUNTA** · `cancion/ficha/nadie-te-ama#pregunta` — TEXTO EDITABLE
¿Qué actos concretos expresan cuidado?

**ADVERTENCIA** · `cancion/ficha/nadie-te-ama#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Cuán grande es Él · cancion/ficha/cuan-grande

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/cuan-grande`
**Ruta:** Componente sin ruta → Canciones → Cuán grande es Él
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/cuan-grande#titulo` — TEXTO EDITABLE
Cuán grande es Él

**MOMENTO** · `cancion/ficha/cuan-grande#momento` — TEXTO EDITABLE
Oración

**OBJETIVO** · `cancion/ficha/cuan-grande#objetivo` — TEXTO EDITABLE
Apreciar asombro y gratitud.

**PREGUNTA** · `cancion/ficha/cuan-grande#pregunta` — TEXTO EDITABLE
¿Qué nos inspira asombro en la creación?

**ADVERTENCIA** · `cancion/ficha/cuan-grande#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Sublime gracia · cancion/ficha/sublime-gracia

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/sublime-gracia`
**Ruta:** Componente sin ruta → Canciones → Sublime gracia
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/sublime-gracia#titulo` — TEXTO EDITABLE
Sublime gracia

**MOMENTO** · `cancion/ficha/sublime-gracia#momento` — TEXTO EDITABLE
Reflexión

**OBJETIVO** · `cancion/ficha/sublime-gracia#objetivo` — TEXTO EDITABLE
Conversar sobre cambio y reconciliación.

**PREGUNTA** · `cancion/ficha/sublime-gracia#pregunta` — TEXTO EDITABLE
¿Por qué una segunda oportunidad importa?

**ADVERTENCIA** · `cancion/ficha/sublime-gracia#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Te doy gloria · cancion/ficha/te-doy-gloria

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/te-doy-gloria`
**Ruta:** Componente sin ruta → Canciones → Te doy gloria
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/te-doy-gloria#titulo` — TEXTO EDITABLE
Te doy gloria

**MOMENTO** · `cancion/ficha/te-doy-gloria#momento` — TEXTO EDITABLE
Oración

**OBJETIVO** · `cancion/ficha/te-doy-gloria#objetivo` — TEXTO EDITABLE
Expresar gratitud compartida.

**PREGUNTA** · `cancion/ficha/te-doy-gloria#pregunta` — TEXTO EDITABLE
¿Cómo expresamos gratitud sin competir?

**ADVERTENCIA** · `cancion/ficha/te-doy-gloria#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Eres todopoderoso · cancion/ficha/eres-todopoderoso

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/eres-todopoderoso`
**Ruta:** Componente sin ruta → Canciones → Eres todopoderoso
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/eres-todopoderoso#titulo` — TEXTO EDITABLE
Eres todopoderoso

**MOMENTO** · `cancion/ficha/eres-todopoderoso#momento` — TEXTO EDITABLE
Bienvenida

**OBJETIVO** · `cancion/ficha/eres-todopoderoso#objetivo` — TEXTO EDITABLE
Animar participación voluntaria.

**PREGUNTA** · `cancion/ficha/eres-todopoderoso#pregunta` — TEXTO EDITABLE
¿Qué cualidades atribuimos a la esperanza?

**ADVERTENCIA** · `cancion/ficha/eres-todopoderoso#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Mi universo · cancion/ficha/mi-universo

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/mi-universo`
**Ruta:** Componente sin ruta → Canciones → Mi universo
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/mi-universo#titulo` — TEXTO EDITABLE
Mi universo

**MOMENTO** · `cancion/ficha/mi-universo#momento` — TEXTO EDITABLE
Reflexión

**OBJETIVO** · `cancion/ficha/mi-universo#objetivo` — TEXTO EDITABLE
Explorar prioridades personales con libertad.

**PREGUNTA** · `cancion/ficha/mi-universo#pregunta` — TEXTO EDITABLE
¿Qué orienta nuestras decisiones cotidianas?

**ADVERTENCIA** · `cancion/ficha/mi-universo#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Ven, Espíritu Santo · cancion/ficha/ven-espiritu

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/ven-espiritu`
**Ruta:** Componente sin ruta → Canciones → Ven, Espíritu Santo
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/ven-espiritu#titulo` — TEXTO EDITABLE
Ven, Espíritu Santo

**MOMENTO** · `cancion/ficha/ven-espiritu#momento` — TEXTO EDITABLE
Oración

**OBJETIVO** · `cancion/ficha/ven-espiritu#objetivo` — TEXTO EDITABLE
Crear un tiempo tranquilo de reflexión.

**PREGUNTA** · `cancion/ficha/ven-espiritu#pregunta` — TEXTO EDITABLE
¿Qué preguntas traemos a este encuentro?

**ADVERTENCIA** · `cancion/ficha/ven-espiritu#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Abre mis ojos · cancion/ficha/abre-mis-ojos

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/abre-mis-ojos`
**Ruta:** Componente sin ruta → Canciones → Abre mis ojos
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/abre-mis-ojos#titulo` — TEXTO EDITABLE
Abre mis ojos

**MOMENTO** · `cancion/ficha/abre-mis-ojos#momento` — TEXTO EDITABLE
Oración

**OBJETIVO** · `cancion/ficha/abre-mis-ojos#objetivo` — TEXTO EDITABLE
Favorecer atención y aprendizaje.

**PREGUNTA** · `cancion/ficha/abre-mis-ojos#pregunta` — TEXTO EDITABLE
¿Qué necesitamos escuchar hoy?

**ADVERTENCIA** · `cancion/ficha/abre-mis-ojos#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Al estar aquí · cancion/ficha/al-estar-aqui

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/al-estar-aqui`
**Ruta:** Componente sin ruta → Canciones → Al estar aquí
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/al-estar-aqui#titulo` — TEXTO EDITABLE
Al estar aquí

**MOMENTO** · `cancion/ficha/al-estar-aqui#momento` — TEXTO EDITABLE
Bienvenida

**OBJETIVO** · `cancion/ficha/al-estar-aqui#objetivo` — TEXTO EDITABLE
Reconocer la presencia de los demás.

**PREGUNTA** · `cancion/ficha/al-estar-aqui#pregunta` — TEXTO EDITABLE
¿Cómo contribuimos a una bienvenida sincera?

**ADVERTENCIA** · `cancion/ficha/al-estar-aqui#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Cristo te necesita para amar · cancion/ficha/cristo-te-necesita

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/cristo-te-necesita`
**Ruta:** Componente sin ruta → Canciones → Cristo te necesita para amar
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/cristo-te-necesita#titulo` — TEXTO EDITABLE
Cristo te necesita para amar

**MOMENTO** · `cancion/ficha/cristo-te-necesita#momento` — TEXTO EDITABLE
Envío

**OBJETIVO** · `cancion/ficha/cristo-te-necesita#objetivo` — TEXTO EDITABLE
Traducir la reflexión en servicio.

**PREGUNTA** · `cancion/ficha/cristo-te-necesita#pregunta` — TEXTO EDITABLE
¿A quién podemos escuchar antes de ayudar?

**ADVERTENCIA** · `cancion/ficha/cristo-te-necesita#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Enciende una luz · cancion/ficha/enciende-una-luz

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/enciende-una-luz`
**Ruta:** Componente sin ruta → Canciones → Enciende una luz
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/enciende-una-luz#titulo` — TEXTO EDITABLE
Enciende una luz

**MOMENTO** · `cancion/ficha/enciende-una-luz#momento` — TEXTO EDITABLE
Envío

**OBJETIVO** · `cancion/ficha/enciende-una-luz#objetivo` — TEXTO EDITABLE
Proponer acciones pequeñas de esperanza.

**PREGUNTA** · `cancion/ficha/enciende-una-luz#pregunta` — TEXTO EDITABLE
¿Qué gesto concreto está a nuestro alcance?

**ADVERTENCIA** · `cancion/ficha/enciende-una-luz#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### El Señor es mi pastor · cancion/ficha/senor-mi-pastor

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/senor-mi-pastor`
**Ruta:** Componente sin ruta → Canciones → El Señor es mi pastor
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/senor-mi-pastor#titulo` — TEXTO EDITABLE
El Señor es mi pastor

**MOMENTO** · `cancion/ficha/senor-mi-pastor#momento` — TEXTO EDITABLE
Reflexión

**OBJETIVO** · `cancion/ficha/senor-mi-pastor#objetivo` — TEXTO EDITABLE
Conversar sobre confianza y acompañamiento.

**PREGUNTA** · `cancion/ficha/senor-mi-pastor#pregunta` — TEXTO EDITABLE
¿Qué significa acompañar sin controlar?

**ADVERTENCIA** · `cancion/ficha/senor-mi-pastor#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Ven, te invito · cancion/ficha/ven-te-invito

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/ven-te-invito`
**Ruta:** Componente sin ruta → Canciones → Ven, te invito
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/ven-te-invito#titulo` — TEXTO EDITABLE
Ven, te invito

**MOMENTO** · `cancion/ficha/ven-te-invito#momento` — TEXTO EDITABLE
Bienvenida

**OBJETIVO** · `cancion/ficha/ven-te-invito#objetivo` — TEXTO EDITABLE
Abrir espacio a nuevas personas.

**PREGUNTA** · `cancion/ficha/ven-te-invito#pregunta` — TEXTO EDITABLE
¿Qué barreras debemos eliminar para acoger?

**ADVERTENCIA** · `cancion/ficha/ven-te-invito#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Aquí estoy, Señor · cancion/ficha/aqui-estoy

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/aqui-estoy`
**Ruta:** Componente sin ruta → Canciones → Aquí estoy, Señor
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/aqui-estoy#titulo` — TEXTO EDITABLE
Aquí estoy, Señor

**MOMENTO** · `cancion/ficha/aqui-estoy#momento` — TEXTO EDITABLE
Envío

**OBJETIVO** · `cancion/ficha/aqui-estoy#objetivo` — TEXTO EDITABLE
Reflexionar sobre disponibilidad.

**PREGUNTA** · `cancion/ficha/aqui-estoy#pregunta` — TEXTO EDITABLE
¿Cómo ponemos límites sanos al voluntariado?

**ADVERTENCIA** · `cancion/ficha/aqui-estoy#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Dame un nuevo corazón · cancion/ficha/dame-corazon

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/dame-corazon`
**Ruta:** Componente sin ruta → Canciones → Dame un nuevo corazón
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/dame-corazon#titulo` — TEXTO EDITABLE
Dame un nuevo corazón

**MOMENTO** · `cancion/ficha/dame-corazon#momento` — TEXTO EDITABLE
Reflexión

**OBJETIVO** · `cancion/ficha/dame-corazon#objetivo` — TEXTO EDITABLE
Reconocer la posibilidad de cambiar.

**PREGUNTA** · `cancion/ficha/dame-corazon#pregunta` — TEXTO EDITABLE
¿Qué prácticas ayudan a aprender de errores?

**ADVERTENCIA** · `cancion/ficha/dame-corazon#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Tu fidelidad · cancion/ficha/tu-fidelidad

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/tu-fidelidad`
**Ruta:** Componente sin ruta → Canciones → Tu fidelidad
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/tu-fidelidad#titulo` — TEXTO EDITABLE
Tu fidelidad

**MOMENTO** · `cancion/ficha/tu-fidelidad#momento` — TEXTO EDITABLE
Oración

**OBJETIVO** · `cancion/ficha/tu-fidelidad#objetivo` — TEXTO EDITABLE
Expresar agradecimiento sin idealizar experiencias.

**PREGUNTA** · `cancion/ficha/tu-fidelidad#pregunta` — TEXTO EDITABLE
¿Qué acciones generan confianza?

**ADVERTENCIA** · `cancion/ficha/tu-fidelidad#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### No hay lugar más alto · cancion/ficha/no-hay-lugar

**ID ESTRUCTURAL — NO EDITAR:** `cancion/ficha/no-hay-lugar`
**Ruta:** Componente sin ruta → Canciones → No hay lugar más alto
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LICENCIA_PENDIENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/pastoralSongs.ts`

**TITULO** · `cancion/ficha/no-hay-lugar#titulo` — TEXTO EDITABLE
No hay lugar más alto

**MOMENTO** · `cancion/ficha/no-hay-lugar#momento` — TEXTO EDITABLE
Oración

**OBJETIVO** · `cancion/ficha/no-hay-lugar#objetivo` — TEXTO EDITABLE
Facilitar recogimiento sin imponer respuesta emocional.

**PREGUNTA** · `cancion/ficha/no-hay-lugar#pregunta` — TEXTO EDITABLE
¿Qué aporta el silencio a una reunión?

**ADVERTENCIA** · `cancion/ficha/no-hay-lugar#advertencia` — TEXTO EDITABLE
Sugerencia para diálogo, sin transcribir letras ni declarar revisión doctrinal. Verifica intérprete, versión, enlace y licencias antes de uso público.


### Canciones cristianas para niños · musica/soundcloud/ninos

**ID ESTRUCTURAL — NO EDITAR:** `musica/soundcloud/ninos`
**Ruta:** Menú → SoundCloud → Canciones cristianas para niños
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EXTERNO
**Origen técnico:** `apps/bible-topic-explorer/src/product/soundcloud.ts`

**TITLE** · `musica/soundcloud/ninos#title` — TEXTO EDITABLE
Canciones cristianas para niños

**BY** · `musica/soundcloud/ninos#by` — TEXTO EDITABLE
Syntax Creative · Christian Kids

**DESCRIPTION** · `musica/soundcloud/ninos#description` — TEXTO EDITABLE
Una selección externa de alabanza infantil; repertorio principalmente en inglés.

**URL** · `musica/soundcloud/ninos#url` — TEXTO EDITABLE
https://soundcloud.com/syntaxcreative/sets/christian-childrens-music


### Instrumentales para acompañar el estudio · musica/soundcloud/estudio

**ID ESTRUCTURAL — NO EDITAR:** `musica/soundcloud/estudio`
**Ruta:** Menú → SoundCloud → Instrumentales para acompañar el estudio
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EXTERNO
**Origen técnico:** `apps/bible-topic-explorer/src/product/soundcloud.ts`

**TITLE** · `musica/soundcloud/estudio#title` — TEXTO EDITABLE
Instrumentales para acompañar el estudio

**BY** · `musica/soundcloud/estudio#by` — TEXTO EDITABLE
Bassage · Christian Instrumental

**DESCRIPTION** · `musica/soundcloud/estudio#description` — TEXTO EDITABLE
Música instrumental de fondo para una tarea o un momento de lectura.

**URL** · `musica/soundcloud/estudio#url` — TEXTO EDITABLE
https://soundcloud.com/bassaaaa/sets/christian-instrumental


### Música para encuentros juveniles · musica/soundcloud/pastoral

**ID ESTRUCTURAL — NO EDITAR:** `musica/soundcloud/pastoral`
**Ruta:** Menú → SoundCloud → Música para encuentros juveniles
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** EXTERNO
**Origen técnico:** `apps/bible-topic-explorer/src/product/soundcloud.ts`

**TITLE** · `musica/soundcloud/pastoral#title` — TEXTO EDITABLE
Música para encuentros juveniles

**BY** · `musica/soundcloud/pastoral#by` — TEXTO EDITABLE
Worship Music Recordings · Christian Youth Club EDM

**DESCRIPTION** · `musica/soundcloud/pastoral#description` — TEXTO EDITABLE
Selección cristiana electrónica; comprobar antes de utilizarla en el grupo.

**URL** · `musica/soundcloud/pastoral#url` — TEXTO EDITABLE
https://soundcloud.com/worship_records/sets/christian-youth-club-edm


### Playlist seleccionada por el Product Owner · musica/spotify/approved

**ID ESTRUCTURAL — NO EDITAR:** `musica/spotify/approved`
**Ruta:** Código sin ruta → Spotify → Playlist seleccionada por el Product Owner
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LEGADO
**Origen técnico:** `apps/bible-topic-explorer/src/product/music.ts`

**CATEGORY** · `musica/spotify/approved#category` — TEXTO EDITABLE
Playlist recomendada

**TITLE** · `musica/spotify/approved#title` — TEXTO EDITABLE
Playlist seleccionada por el Product Owner

**CURATOR** · `musica/spotify/approved#curator` — TEXTO EDITABLE
Enlace proporcionado por el Product Owner

**URL** · `musica/spotify/approved#url` — TEXTO EDITABLE
https://open.spotify.com/playlist/25HDm6Qx8mZoJWWdgFLz62


### Música cristiana para orar en la noche · musica/spotify/calm

**ID ESTRUCTURAL — NO EDITAR:** `musica/spotify/calm`
**Ruta:** Código sin ruta → Spotify → Música cristiana para orar en la noche
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LEGADO
**Origen técnico:** `apps/bible-topic-explorer/src/product/music.ts`

**CATEGORY** · `musica/spotify/calm#category` — TEXTO EDITABLE
Calma y oración

**TITLE** · `musica/spotify/calm#title` — TEXTO EDITABLE
Música cristiana para orar en la noche

**CURATOR** · `musica/spotify/calm#curator` — TEXTO EDITABLE
CanZion (catálogo público citado en P05)

**URL** · `musica/spotify/calm#url` — TEXTO EDITABLE
https://open.spotify.com/playlist/4Q44PJN7jSUd2JInNXTY3X


### Gozo Cristiano · musica/spotify/encouragement

**ID ESTRUCTURAL — NO EDITAR:** `musica/spotify/encouragement`
**Ruta:** Código sin ruta → Spotify → Gozo Cristiano
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LEGADO
**Origen técnico:** `apps/bible-topic-explorer/src/product/music.ts`

**CATEGORY** · `musica/spotify/encouragement#category` — TEXTO EDITABLE
Ánimo

**TITLE** · `musica/spotify/encouragement#title` — TEXTO EDITABLE
Gozo Cristiano

**CURATOR** · `musica/spotify/encouragement#curator` — TEXTO EDITABLE
The musica cristiana blog

**URL** · `musica/spotify/encouragement#url` — TEXTO EDITABLE
https://open.spotify.com/playlist/6f7UmwlyEW6LYq0zRDwwwu


### Lo mejor del 2025–2026 — AD Uch · musica/spotify/praise

**ID ESTRUCTURAL — NO EDITAR:** `musica/spotify/praise`
**Ruta:** Código sin ruta → Spotify → Lo mejor del 2025–2026 — AD Uch
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LEGADO
**Origen técnico:** `apps/bible-topic-explorer/src/product/music.ts`

**CATEGORY** · `musica/spotify/praise#category` — TEXTO EDITABLE
Alabanza

**TITLE** · `musica/spotify/praise#title` — TEXTO EDITABLE
Lo mejor del 2025–2026 — AD Uch

**CURATOR** · `musica/spotify/praise#curator` — TEXTO EDITABLE
AdoradoresChile

**URL** · `musica/spotify/praise#url` — TEXTO EDITABLE
https://open.spotify.com/playlist/1QgTdWclM8YgGeoV50RnEC


### Worship en español · musica/spotify/worship

**ID ESTRUCTURAL — NO EDITAR:** `musica/spotify/worship`
**Ruta:** Código sin ruta → Spotify → Worship en español
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LEGADO
**Origen técnico:** `apps/bible-topic-explorer/src/product/music.ts`

**CATEGORY** · `musica/spotify/worship#category` — TEXTO EDITABLE
Adoración

**TITLE** · `musica/spotify/worship#title` — TEXTO EDITABLE
Worship en español

**CURATOR** · `musica/spotify/worship#curator` — TEXTO EDITABLE
Herson

**URL** · `musica/spotify/worship#url` — TEXTO EDITABLE
https://open.spotify.com/playlist/5LDbKSwjzPrenEmF4dVGCp


### Música cristiana en español · musica/spotify/youth

**ID ESTRUCTURAL — NO EDITAR:** `musica/spotify/youth`
**Ruta:** Código sin ruta → Spotify → Música cristiana en español
**Visibilidad:** OCULTO_SIN_RUTA
**Estado editorial:** LEGADO
**Origen técnico:** `apps/bible-topic-explorer/src/product/music.ts`

**CATEGORY** · `musica/spotify/youth#category` — TEXTO EDITABLE
Jóvenes

**TITLE** · `musica/spotify/youth#title` — TEXTO EDITABLE
Música cristiana en español

**CURATOR** · `musica/spotify/youth#curator` — TEXTO EDITABLE
Cesar Betancourt (categoría editorial, no certificación de edad)

**URL** · `musica/spotify/youth#url` — TEXTO EDITABLE
https://open.spotify.com/playlist/1C6WtBg6l9OPRtxWsyjHd0


## 9. Menú actual (siete destinos)


### Planes de lectura · menu/plans

**ID ESTRUCTURAL — NO EDITAR:** `menu/plans`
**Ruta:** Menú ☰ → Planes de lectura
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** VIGENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/secondaryMenu.ts`

**LABEL** · `menu/plans#label` — TEXTO EDITABLE
Planes de lectura

**GROUP** · `menu/plans#group` — TEXTO EDITABLE
Lectura y reflexión

**KIND** · `menu/plans#kind` — TEXTO EDITABLE
plans


### Temas bíblicos · menu/topics

**ID ESTRUCTURAL — NO EDITAR:** `menu/topics`
**Ruta:** Menú ☰ → Temas bíblicos
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** VIGENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/secondaryMenu.ts`

**LABEL** · `menu/topics#label` — TEXTO EDITABLE
Temas bíblicos

**GROUP** · `menu/topics#group` — TEXTO EDITABLE
Lectura y reflexión

**KIND** · `menu/topics#kind` — TEXTO EDITABLE
topics


### Guía pastoral · menu/pastoral

**ID ESTRUCTURAL — NO EDITAR:** `menu/pastoral`
**Ruta:** Menú ☰ → Guía pastoral
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** VIGENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/secondaryMenu.ts`

**LABEL** · `menu/pastoral#label` — TEXTO EDITABLE
Guía pastoral

**GROUP** · `menu/pastoral#group` — TEXTO EDITABLE
Pastoral y música

**KIND** · `menu/pastoral#kind` — TEXTO EDITABLE
pastoral


### Dinámicas y juegos · menu/games

**ID ESTRUCTURAL — NO EDITAR:** `menu/games`
**Ruta:** Menú ☰ → Dinámicas y juegos
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** VIGENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/secondaryMenu.ts`

**LABEL** · `menu/games#label` — TEXTO EDITABLE
Dinámicas y juegos

**GROUP** · `menu/games#group` — TEXTO EDITABLE
Pastoral y música

**KIND** · `menu/games#kind` — TEXTO EDITABLE
guides


### SoundCloud · música · menu/soundcloud

**ID ESTRUCTURAL — NO EDITAR:** `menu/soundcloud`
**Ruta:** Menú ☰ → SoundCloud · música
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** VIGENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/secondaryMenu.ts`

**LABEL** · `menu/soundcloud#label` — TEXTO EDITABLE
SoundCloud · música

**GROUP** · `menu/soundcloud#group` — TEXTO EDITABLE
Pastoral y música

**KIND** · `menu/soundcloud#kind` — TEXTO EDITABLE
soundcloud


### Mis libros PDF/EPUB · menu/my-books

**ID ESTRUCTURAL — NO EDITAR:** `menu/my-books`
**Ruta:** Menú ☰ → Mis libros PDF/EPUB
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** VIGENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/secondaryMenu.ts`

**LABEL** · `menu/my-books#label` — TEXTO EDITABLE
Mis libros PDF/EPUB

**GROUP** · `menu/my-books#group` — TEXTO EDITABLE
Mi espacio

**KIND** · `menu/my-books#kind` — TEXTO EDITABLE
my-books


### Ajustes · menu/settings

**ID ESTRUCTURAL — NO EDITAR:** `menu/settings`
**Ruta:** Menú ☰ → Ajustes
**Visibilidad:** VISIBLE_CODIGO
**Estado editorial:** VIGENTE
**Origen técnico:** `apps/bible-topic-explorer/src/product/secondaryMenu.ts`

**LABEL** · `menu/settings#label` — TEXTO EDITABLE
Ajustes

**GROUP** · `menu/settings#group` — TEXTO EDITABLE
Mi espacio

**KIND** · `menu/settings#kind` — TEXTO EDITABLE
settings


## 10. Apéndice · textos incrustados en interfaz (en extracción)

Las pantallas y mensajes se inventarían en el bloque suplementario de este mismo documento. La extracción del contenido del producto de los capítulos 1–9 es literal. La UI incluye textos combinados con datos dinámicos; estos se señalan como dinámicos o pendientes de contrastar.


### App.tsx · interfaz/app-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/app-tsx`
**Ruta:** Interfaz → App
**Visibilidad:** VISIBLE_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/App.tsx`

Se registran literales de origen (incluidos textos condicionales o técnicos que requieren revisión manual de visibilidad). No se interpreta cada literal como una pantalla adicional.

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0026_001` — TEXTO EDITABLE
(initialNavigationState());const [drawerOpen,setDrawerOpen]=useState(false);const [topicUi,setTopicUi]=useState

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0026_002` — TEXTO EDITABLE
new SQLiteLocalPersistence(db),[db]);const [preferences,setPreferences]=useState

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0029_003` — TEXTO EDITABLE
Salir de la aplicación

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0029_004` — TEXTO EDITABLE
¿Realmente quieres salir?

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0031_005` — TEXTO EDITABLE
Rango no encontrado

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0031_006` — TEXTO EDITABLE
Lectura no disponible

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0031_007` — TEXTO EDITABLE
No fue posible abrir ese rango RV1909 en el corpus local.

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0059_008` — TEXTO EDITABLE
Abrir menú de navegación

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0059_009` — TEXTO EDITABLE
Abre los destinos reales de La U, incluidos temas, dinámicas, canciones y libros personales.

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0060_010` — TEXTO EDITABLE
Abrir ajustes

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0060_011` — TEXTO EDITABLE
La U

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0060_012` — TEXTO EDITABLE
RV1909 · sin conexión

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0065_013` — TEXTO EDITABLE
La U

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0066_014` — TEXTO EDITABLE
Recursos para tu camino

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0067_015` — TEXTO EDITABLE
Tu biblioteca bíblica y pastoral, en un solo lugar.

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0068_016` — TEXTO EDITABLE
Lectura y reflexión

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0068_017` — TEXTO EDITABLE
Pastoral y música

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0068_018` — TEXTO EDITABLE
Mi espacio

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0080_019` — TEXTO EDITABLE
Sobre La U, bibliografía, linkografía y créditos

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0081_020` — TEXTO EDITABLE
ⓘ  Prototipo · IA y estudios

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0082_021` — TEXTO EDITABLE
Bibliografía y fuentes ↗

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0084_022` — TEXTO EDITABLE
Cerrar menú

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0086_023` — TEXTO EDITABLE
Cerrar menú

**TEXTO LITERAL** · `interfaz/app-tsx#literal_l0090_024` — TEXTO EDITABLE
Cerrar menú tocando fuera

### TodayScreen.tsx · interfaz/src-ui-screens-todayscreen-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-screens-todayscreen-tsx`
**Ruta:** Interfaz → TodayScreen
**Visibilidad:** VISIBLE_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/src/ui/screens/TodayScreen.tsx`

Se registran literales de origen (incluidos textos condicionales o técnicos que requieren revisión manual de visibilidad). No se interpreta cada literal como una pantalla adicional.

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0023_001` — TEXTO EDITABLE
A tu ritmo

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0023_002` — TEXTO EDITABLE
100 temas

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0023_003` — TEXTO EDITABLE
Música oficial

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0023_004` — TEXTO EDITABLE
Tus guardados

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0025_005` — TEXTO EDITABLE
Prototipo creado con apoyo de IA y estudios. Ver bibliografía y créditos.

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0026_006` — TEXTO EDITABLE
ⓘ  Prototipo con apoyo de IA y estudios

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0027_007` — TEXTO EDITABLE
Fuentes ↗

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0032_008` — TEXTO EDITABLE
LA U · UN MOMENTO PARA TI

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0033_009` — TEXTO EDITABLE
Qué bueno que estás aquí.

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0034_010` — TEXTO EDITABLE
Una pausa para que la Palabra ilumine tu día.

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0038_011` — TEXTO EDITABLE
Versículo de hoy 

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0039_012` — TEXTO EDITABLE
☀  VERSÍCULO DEL DÍA

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0041_013` — TEXTO EDITABLE
Consultando la Biblia local…

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0042_014` — TEXTO EDITABLE
Lectura local no disponible.

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0044_015` — TEXTO EDITABLE
No se encontró este pasaje en el corpus local.

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0049_016` — TEXTO EDITABLE
Continuar lectura  →

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0057_017` — TEXTO EDITABLE
Para ti hoy

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0057_018` — TEXTO EDITABLE
Acompaña tu camino

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0058_019` — TEXTO EDITABLE
Comenzar un plan de lectura

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0059_020` — TEXTO EDITABLE
Un camino de siete días

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0059_021` — TEXTO EDITABLE
Lecturas y reflexiones con progreso local.

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0061_022` — TEXTO EDITABLE
Explorar pasajes y temas

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0062_023` — TEXTO EDITABLE
Encuentra tu próximo pasaje

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0062_024` — TEXTO EDITABLE
100 temas para explorar la Palabra.

**TEXTO LITERAL** · `interfaz/src-ui-screens-todayscreen-tsx#literal_l0064_025` — TEXTO EDITABLE
La lectura RV1909 y tus notas funcionan sin conexión.

### SearchScreen.tsx · interfaz/src-ui-screens-searchscreen-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-screens-searchscreen-tsx`
**Ruta:** Interfaz → SearchScreen
**Visibilidad:** VISIBLE_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/src/ui/screens/SearchScreen.tsx`

Se registran literales de origen (incluidos textos condicionales o técnicos que requieren revisión manual de visibilidad). No se interpreta cada literal como una pantalla adicional.

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0011_001` — TEXTO EDITABLE
Dios y fe

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0011_002` — TEXTO EDITABLE
Amor y relaciones

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0011_003` — TEXTO EDITABLE
Perdón y restauración

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0012_004` — TEXTO EDITABLE
Vida interior

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0012_005` — TEXTO EDITABLE
Dificultades y emociones

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0012_006` — TEXTO EDITABLE
Oración y práctica espiritual

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0013_007` — TEXTO EDITABLE
Carácter y conducta

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0013_008` — TEXTO EDITABLE
Decisiones y vida cotidiana

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0013_009` — TEXTO EDITABLE
Biblia y comprensión

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0014_010` — TEXTO EDITABLE
Esperanza y vida cristiana

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0023_011` — TEXTO EDITABLE
Dios y fe

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0023_012` — TEXTO EDITABLE
Preguntas sobre creer y confiar

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0024_013` — TEXTO EDITABLE
Amor y relaciones

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0024_014` — TEXTO EDITABLE
Amistades, familia y respeto

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0025_015` — TEXTO EDITABLE
Perdón y restauración

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0025_016` — TEXTO EDITABLE
Aprender de los errores

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0026_017` — TEXTO EDITABLE
Vida interior

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0026_018` — TEXTO EDITABLE
Calma, alegría y esperanza

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0027_019` — TEXTO EDITABLE
Dificultades y emociones

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0027_020` — TEXTO EDITABLE
Lo que sentimos también importa

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0028_021` — TEXTO EDITABLE
Oración y práctica espiritual

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0028_022` — TEXTO EDITABLE
Espacios para conectar con Dios

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0029_023` — TEXTO EDITABLE
Carácter y conducta

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0029_024` — TEXTO EDITABLE
Decisiones que se notan

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0030_025` — TEXTO EDITABLE
Decisiones y vida cotidiana

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0030_026` — TEXTO EDITABLE
Lo que vivimos cada día

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0031_027` — TEXTO EDITABLE
Biblia y comprensión

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0031_028` — TEXTO EDITABLE
Descubre las historias bíblicas

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0032_029` — TEXTO EDITABLE
Esperanza y vida cristiana

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0032_030` — TEXTO EDITABLE
Caminar con fe y esperanza

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0084_031` — TEXTO EDITABLE
Explorar temas

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0085_032` — TEXTO EDITABLE
Elige lo que te interesa o te preocupa. Encuentra una idea y léela en la Biblia.

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0089_033` — TEXTO EDITABLE
Ocultar información sobre las fichas

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0089_034` — TEXTO EDITABLE
Información sobre las fichas

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0096_035` — TEXTO EDITABLE
Las explicaciones son una propuesta y están en revisión. Los pasajes bíblicos se pueden leer en RV1909.

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0098_036` — TEXTO EDITABLE
← Volver a los temas

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0098_037` — TEXTO EDITABLE
← Volver a familias

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0099_038` — TEXTO EDITABLE
Elige una familia

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0106_039` — TEXTO EDITABLE
Explora este tema

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0110_040` — TEXTO EDITABLE
Ver los 100 temas A–Z

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0112_041` — TEXTO EDITABLE
Índice A–Z

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0112_042` — TEXTO EDITABLE
Toca el tema que quieras descubrir.

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0118_043` — TEXTO EDITABLE
Ver concepto 

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0124_044` — TEXTO EDITABLE
Un tema para descubrir

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0129_045` — TEXTO EDITABLE
No hay temas para esta letra.

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0137_046` — TEXTO EDITABLE
Algo nuevo por descubrir

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0139_047` — TEXTO EDITABLE
Todavía estamos preparando una explicación sencilla para este tema. Puedes explorar los otros temas mientras tanto.

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0143_048` — TEXTO EDITABLE
Léelo en la Biblia

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0144_049` — TEXTO EDITABLE
Dos pasajes para leer y pensar a tu ritmo.

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0149_050` — TEXTO EDITABLE
 en RV1909

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0151_051` — TEXTO EDITABLE
Leer este pasaje

**TEXTO LITERAL** · `interfaz/src-ui-screens-searchscreen-tsx#literal_l0154_052` — TEXTO EDITABLE
Los pasajes de este tema todavía se están preparando.

### BibleScreen.tsx · interfaz/src-ui-screens-biblescreen-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-screens-biblescreen-tsx`
**Ruta:** Interfaz → BibleScreen
**Visibilidad:** VISIBLE_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/src/ui/screens/BibleScreen.tsx`

Se registran literales de origen (incluidos textos condicionales o técnicos que requieren revisión manual de visibilidad). No se interpreta cada literal como una pantalla adicional.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0019_001` — TEXTO EDITABLE
([]); const [chapterCount, setChapterCount] = useState(0); const [loading, setLoading] = useState(false); const [error, setError] = useState

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0021_002` — TEXTO EDITABLE
([]); const [highlights,setHighlights]=useState

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0027_003` — TEXTO EDITABLE
No se pudo leer este capítulo desde el corpus local.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0039_004` — TEXTO EDITABLE
No se pudo actualizar el guardado local.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0048_005` — TEXTO EDITABLE
Eliminar nota privada

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0048_006` — TEXTO EDITABLE
¿Eliminar esta nota de forma permanente? El destacado no se eliminará.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0049_007` — TEXTO EDITABLE
Eliminar nota

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0051_008` — TEXTO EDITABLE
Nota privada guardada.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0051_009` — TEXTO EDITABLE
Nota eliminada.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0051_010` — TEXTO EDITABLE
No se pudo guardar la nota local.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0052_011` — TEXTO EDITABLE
Nota eliminada.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0052_012` — TEXTO EDITABLE
No se pudo eliminar la nota.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0053_013` — TEXTO EDITABLE
Versículo destacado.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0053_014` — TEXTO EDITABLE
Destacado eliminado.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0053_015` — TEXTO EDITABLE
No se pudo actualizar el destacado.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0055_016` — TEXTO EDITABLE
reader.verse?'–'+reader.verseEnd:'') : ''); const atFirstChapter = reader.chapter

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0056_017` — TEXTO EDITABLE
← Volver a Explorar

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0057_018` — TEXTO EDITABLE
LA PALABRA · REINA-VALERA 1909

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0062_019` — TEXTO EDITABLE
Cargando capítulo local…

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0062_020` — TEXTO EDITABLE
No hay versículos para este capítulo.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0071_021` — TEXTO EDITABLE
Opciones de versículo. 

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0071_022` — TEXTO EDITABLE
 · seleccionado

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0071_023` — TEXTO EDITABLE
 · guardado

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0071_024` — TEXTO EDITABLE
 · destacado

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0072_025` — TEXTO EDITABLE
Mantén pulsado para abrir las opciones; toca una vez para mostrar el botón Opciones.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0079_026` — TEXTO EDITABLE
Leer nota privada de 

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0080_027` — TEXTO EDITABLE
Abre solamente la lectura de la nota. Hay un botón separado para editar.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0084_028` — TEXTO EDITABLE
Abrir opciones de 

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0086_029` — TEXTO EDITABLE
⋯ Opciones

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0098_030` — TEXTO EDITABLE
Contenido completo de la nota privada

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0103_031` — TEXTO EDITABLE
Editar ✎

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0105_032` — TEXTO EDITABLE
Cerrar lectura

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0115_033` — TEXTO EDITABLE
Tu nota privada

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0116_034` — TEXTO EDITABLE
Nota privada del versículo

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0117_035` — TEXTO EDITABLE
Escribe tu nota personal…

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0120_036` — TEXTO EDITABLE
Guardar nota

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0121_037` — TEXTO EDITABLE
Cancelar edición

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0124_038` — TEXTO EDITABLE
Nota privada completa

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0128_039` — TEXTO EDITABLE
Este versículo todavía no tiene nota privada.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0130_040` — TEXTO EDITABLE
✎ Editar nota

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0130_041` — TEXTO EDITABLE
✎ Agregar nota

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0131_042` — TEXTO EDITABLE
▤ Eliminar

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0138_043` — TEXTO EDITABLE
Pulsa para quitar este color.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0138_044` — TEXTO EDITABLE
Pulsa para aplicar este color.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0146_045` — TEXTO EDITABLE
Quitar referencia guardada

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0146_046` — TEXTO EDITABLE
Guardar referencia

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0149_047` — TEXTO EDITABLE
Cerrar opciones

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0154_048` — TEXTO EDITABLE
Navegar por el capítulo

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0154_049` — TEXTO EDITABLE
Capítulo anterior

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0154_050` — TEXTO EDITABLE
Capítulo siguiente

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0156_051` — TEXTO EDITABLE
← Cambiar libro

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0156_052` — TEXTO EDITABLE
LEER · RV1909

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0156_053` — TEXTO EDITABLE
Elige un capítulo para abrir el texto.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0156_054` — TEXTO EDITABLE
Cargando capítulos disponibles…

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0156_055` — TEXTO EDITABLE
No se pudo leer la metadata local de capítulos.

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0157_056` — TEXTO EDITABLE
Antiguo Testamento

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0157_057` — TEXTO EDITABLE
Capítulos →

**TEXTO LITERAL** · `interfaz/src-ui-screens-biblescreen-tsx#literal_l0157_058` — TEXTO EDITABLE
Nuevo Testamento

### LibraryScreen.tsx · interfaz/src-ui-screens-libraryscreen-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-screens-libraryscreen-tsx`
**Ruta:** Interfaz → LibraryScreen
**Visibilidad:** VISIBLE_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/src/ui/screens/LibraryScreen.tsx`

Se registran literales de origen (incluidos textos condicionales o técnicos que requieren revisión manual de visibilidad). No se interpreta cada literal como una pantalla adicional.

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0017_001` — TEXTO EDITABLE
(null);const restored=useRef(restoreY

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0019_002` — TEXTO EDITABLE
([]);const [highlights,setHighlights]=useState

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0020_003` — TEXTO EDITABLE
([]); const [history, setHistory] = useState

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0021_004` — TEXTO EDITABLE
Cargando biblioteca local…

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0022_005` — TEXTO EDITABLE
No se pudo leer la biblioteca local.

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0025_006` — TEXTO EDITABLE
No se pudo guardar la reflexión local.

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0031_007` — TEXTO EDITABLE
Retoma lo que has leído y guardado en este dispositivo.

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0033_008` — TEXTO EDITABLE
Última lectura: 

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0033_009` — TEXTO EDITABLE
Continuar leyendo

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0033_010` — TEXTO EDITABLE
ÚLTIMA LECTURA

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0033_011` — TEXTO EDITABLE
Cuando abras un capítulo, podrás retomarlo desde aquí.

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0034_012` — TEXTO EDITABLE
Guarda o quita versículos directamente desde el lector.

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0034_013` — TEXTO EDITABLE
Abrir →

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0034_014` — TEXTO EDITABLE
Aún no guardas referencias.

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0035_015` — TEXTO EDITABLE
Notas por versículo

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0035_016` — TEXTO EDITABLE
Privadas, guardadas sólo en SQLite local.

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0035_017` — TEXTO EDITABLE
Abrir →

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0035_018` — TEXTO EDITABLE
Aún no has creado notas por versículo.

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0036_019` — TEXTO EDITABLE
Actividad reciente

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0037_020` — TEXTO EDITABLE
Reflexión privada

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0037_021` — TEXTO EDITABLE
Se guarda únicamente en este dispositivo.

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0037_022` — TEXTO EDITABLE
Tu reflexión

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0037_023` — TEXTO EDITABLE
Escribe para ti…

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0037_024` — TEXTO EDITABLE
Guardar reflexión

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0038_025` — TEXTO EDITABLE
Abrir →

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0038_026` — TEXTO EDITABLE
Mostrar menos

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0038_027` — TEXTO EDITABLE
Ver historial reciente

**TEXTO LITERAL** · `interfaz/src-ui-screens-libraryscreen-tsx#literal_l0038_028` — TEXTO EDITABLE
Aún no hay lecturas registradas.

### SettingsScreen.tsx · interfaz/src-ui-screens-settingsscreen-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-screens-settingsscreen-tsx`
**Ruta:** Interfaz → SettingsScreen
**Visibilidad:** VISIBLE_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/src/ui/screens/SettingsScreen.tsx`

Se registran literales de origen (incluidos textos condicionales o técnicos que requieren revisión manual de visibilidad). No se interpreta cada literal como una pantalla adicional.

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0014_001` — TEXTO EDITABLE
Coral · rosa y crema

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0014_002` — TEXTO EDITABLE
Natural · salvia y beige

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0014_003` — TEXTO EDITABLE
Marino · azul y dorado

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0017_004` — TEXTO EDITABLE
Cargando preferencias locales…

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0017_005` — TEXTO EDITABLE
new SQLiteLocalPersistence(db),[db]);const [prefs,setPrefs]=useState(defaultPreferences);const [status,setStatus]=useState('Cargando preferencias locales…');const [statusKind,setStatusKind]=useState

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0017_006` — TEXTO EDITABLE
('info');const [reminderState,setReminderState]=useState

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0018_007` — TEXTO EDITABLE
No se pudieron leer las preferencias locales.

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0019_008` — TEXTO EDITABLE
Preferencias guardadas en este dispositivo.

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0019_009` — TEXTO EDITABLE
No se pudieron guardar las preferencias locales.

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0025_010` — TEXTO EDITABLE
Permiso de notificaciones denegado. Puedes habilitarlo en ajustes de Android.

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0025_011` — TEXTO EDITABLE
Recordatorios no disponibles en este dispositivo.

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0031_012` — TEXTO EDITABLE
Preferencias locales, sin cuenta obligatoria.

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0032_013` — TEXTO EDITABLE
Tres atmósferas editoriales con fondos claros; tu elección se conserva en este dispositivo.

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0033_014` — TEXTO EDITABLE
Tamaño de lectura

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0033_015` — TEXTO EDITABLE
Ajusta el texto bíblico. La interfaz sigue el escalado de texto del sistema dentro de límites seguros para la navegación fija.

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0034_016` — TEXTO EDITABLE
Recordatorio diario

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0034_017` — TEXTO EDITABLE
Una invitación local a Hoy, desactivada por defecto. Android puede retrasarla.

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0034_018` — TEXTO EDITABLE
Hora local

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0034_019` — TEXTO EDITABLE
Estado real

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0034_020` — TEXTO EDITABLE
Permiso denegado

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0034_021` — TEXTO EDITABLE
No disponible

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0034_022` — TEXTO EDITABLE
Desactivar recordatorio

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0034_023` — TEXTO EDITABLE
Activar recordatorio diario

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0034_024` — TEXTO EDITABLE
Un momento para la Palabra · Tu lectura de hoy te espera. Léela a tu ritmo. Al tocar, abre Hoy.

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0034_025` — TEXTO EDITABLE
Notificación local best-effort: requiere permiso y no garantiza una hora exacta. Sin servidor ni cuenta.

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0035_026` — TEXTO EDITABLE
Volver a mostrar ayudas contextuales

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0035_027` — TEXTO EDITABLE
Marcar introducción como vista

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0036_028` — TEXTO EDITABLE
Respaldo manual y privado

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0036_029` — TEXTO EDITABLE
Exporta una copia JSON solo al elegir una carpeta de Android; no se sube a la nube automáticamente ni se borran datos.

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0036_030` — TEXTO EDITABLE
Exportar copia de notas y destacados

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0036_031` — TEXTO EDITABLE
Respaldo privado

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0036_032` — TEXTO EDITABLE
El archivo JSON incluirá notas, destacados, historial y preferencias. Elige una carpeta que controles; quien tenga el archivo podrá leer tus notas. No se borrará nada.

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0036_033` — TEXTO EDITABLE
Elegir carpeta

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0036_034` — TEXTO EDITABLE
Respaldo creado: 

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0036_035` — TEXTO EDITABLE
Respaldo no realizado: selección cancelada, destino incompatible o error al escribir. Los datos originales no cambian.

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0036_036` — TEXTO EDITABLE
No restaura automáticamente ni incluye archivos PDF/EPUB; conserva únicamente su índice de lectura. Guarda el JSON en un lugar seguro.

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0037_037` — TEXTO EDITABLE
Privacidad y fuente

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0037_038` — TEXTO EDITABLE
No requerida

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0037_039` — TEXTO EDITABLE
Datos de uso

**TEXTO LITERAL** · `interfaz/src-ui-screens-settingsscreen-tsx#literal_l0037_040` — TEXTO EDITABLE
Reina-Valera 1909 · BibleAquifer · dominio público/CC0 del paquete.

### PlansScreen.tsx · interfaz/src-ui-screens-plansscreen-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-screens-plansscreen-tsx`
**Ruta:** Interfaz → PlansScreen
**Visibilidad:** VISIBLE_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/src/ui/screens/PlansScreen.tsx`

Se registran literales de origen (incluidos textos condicionales o técnicos que requieren revisión manual de visibilidad). No se interpreta cada literal como una pantalla adicional.

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0017_001` — TEXTO EDITABLE
No fue posible leer el avance local.

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0022_002` — TEXTO EDITABLE
No se pudo guardar. Las notas anteriores permanecen intactas.

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0023_003` — TEXTO EDITABLE
Reiniciar avance de este plan

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0023_004` — TEXTO EDITABLE
Solo se quitarán las marcas de progreso; tus notas privadas se conservarán.

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0023_005` — TEXTO EDITABLE
Reiniciar progreso

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0023_006` — TEXTO EDITABLE
No se pudo reiniciar.

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0024_007` — TEXTO EDITABLE
Planes de lectura

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0026_008` — TEXTO EDITABLE
← Volver al plan

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0026_009` — TEXTO EDITABLE
← Todos los planes

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0026_010` — TEXTO EDITABLE
← Volver

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0027_011` — TEXTO EDITABLE
Un encuentro con la Palabra · RV1909

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0032_012` — TEXTO EDITABLE
✦ DESTACADO

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0032_013` — TEXTO EDITABLE
✧ 7 DÍAS

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0035_014` — TEXTO EDITABLE
7 lecturas · texto original en revisión editorial

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0036_015` — TEXTO EDITABLE
Comenzar plan  →

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0042_016` — TEXTO EDITABLE
PLAN DE SIETE DÍAS

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0045_017` — TEXTO EDITABLE
Tu progreso

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0047_018` — TEXTO EDITABLE
, completado

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0047_019` — TEXTO EDITABLE
, pendiente

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0047_020` — TEXTO EDITABLE
r.day===d.day&&r.done);const current=day===d.day||!day&&d.day===nextDay;return

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0050_021` — TEXTO EDITABLE
Continuar · día 

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0057_022` — TEXTO EDITABLE
Leer pasaje en contexto →

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0060_023` — TEXTO EDITABLE
Oración libre

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0061_024` — TEXTO EDITABLE
Un paso para hoy

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0063_025` — TEXTO EDITABLE
Mis notas privadas

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0064_026` — TEXTO EDITABLE
Escribe lo que quieras conservar…

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0064_027` — TEXTO EDITABLE
Nota privada del día 

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0065_028` — TEXTO EDITABLE
Guardar mi nota

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0066_029` — TEXTO EDITABLE
Marcar como pendiente

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0066_030` — TEXTO EDITABLE
Marcar día completado ✓

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0068_031` — TEXTO EDITABLE
Tus siete lecturas

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0068_032` — TEXTO EDITABLE
Elige un día

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0069_033` — TEXTO EDITABLE
Abrir día 

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0069_034` — TEXTO EDITABLE
r.day===d.day&&r.done);const current=d.day===nextDay;return

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0074_035` — TEXTO EDITABLE
Reiniciar progreso (sin borrar notas)

**TEXTO LITERAL** · `interfaz/src-ui-screens-plansscreen-tsx#literal_l0076_036` — TEXTO EDITABLE
Los pasajes RV1909 son locales. Las reflexiones están pendientes de revisión pastoral.

### PastoralScreen.tsx · interfaz/src-ui-screens-pastoralscreen-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-screens-pastoralscreen-tsx`
**Ruta:** Interfaz → PastoralScreen
**Visibilidad:** VISIBLE_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/src/ui/screens/PastoralScreen.tsx`

Se registran literales de origen (incluidos textos condicionales o técnicos que requieren revisión manual de visibilidad). No se interpreta cada literal como una pantalla adicional.

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0009_001` — TEXTO EDITABLE
UNICEF · Formación Kit Adolescente · 2018

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0010_002` — TEXTO EDITABLE
USCCB · Renewing the Vision · 1997

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0011_003` — TEXTO EDITABLE
santa sede

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0011_004` — TEXTO EDITABLE
Santa Sede · Protección de menores · 2019

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0021_005` — TEXTO EDITABLE
← Recursos

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0022_006` — TEXTO EDITABLE
Guía pastoral

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0023_007` — TEXTO EDITABLE
Ocho temas para acompañar encuentros juveniles, con propuestas originales y referencias al final de cada tema.

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0024_008` — TEXTO EDITABLE
En revisión editorial · Aplicar siempre los protocolos locales de protección.

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0030_009` — TEXTO EDITABLE
Contraer tema

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0030_010` — TEXTO EDITABLE
Desplegar tema

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0036_011` — TEXTO EDITABLE
Para preparar el encuentro

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0037_012` — TEXTO EDITABLE
Responsables y jóvenes

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0038_013` — TEXTO EDITABLE
Paso a paso

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0039_014` — TEXTO EDITABLE
Adaptaciones y cuidado

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0039_015` — TEXTO EDITABLE
Protección y consentimiento

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0040_016` — TEXTO EDITABLE
Fe y reflexión

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0042_017` — TEXTO EDITABLE
Fuentes y referencias

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0043_018` — TEXTO EDITABLE
No fue posible abrir la fuente externa. Puedes seguir leyendo sin conexión.

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0047_019` — TEXTO EDITABLE
Leer pasaje RV1909 

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralscreen-tsx#literal_l0055_020` — TEXTO EDITABLE
Las fuentes documentan contexto; no implican aval institucional ni permiso de reproducción.

### ActivitiesScreen.tsx · interfaz/src-ui-screens-activitiesscreen-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-screens-activitiesscreen-tsx`
**Ruta:** Interfaz → ActivitiesScreen
**Visibilidad:** VISIBLE_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/src/ui/screens/ActivitiesScreen.tsx`

Se registran literales de origen (incluidos textos condicionales o técnicos que requieren revisión manual de visibilidad). No se interpreta cada literal como una pantalla adicional.

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0027_001` — TEXTO EDITABLE
← Volver a dinámicas

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0027_002` — TEXTO EDITABLE
← Volver al menú

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0034_003` — TEXTO EDITABLE
edad sugerida

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0038_004` — TEXTO EDITABLE
Cómo hacerlo

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0049_005` — TEXTO EDITABLE
Para conversar

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0052_006` — TEXTO EDITABLE
Ocultar recomendaciones de cuidado

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0052_007` — TEXTO EDITABLE
Ver recomendaciones de cuidado

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0054_008` — TEXTO EDITABLE
Ocultar indicaciones

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0054_009` — TEXTO EDITABLE
Cuidado y accesibilidad

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0060_010` — TEXTO EDITABLE
Dinámicas pastorales

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0061_011` — TEXTO EDITABLE
Encuentros sencillos para reunir, compartir y aprender.

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0065_012` — TEXTO EDITABLE
minutos aprox.

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0066_013` — TEXTO EDITABLE
edad sugerida

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0068_014` — TEXTO EDITABLE
Jugar trivia, verdadero/falso y ordenar versículos

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0069_015` — TEXTO EDITABLE
Juegos bíblicos

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0069_016` — TEXTO EDITABLE
Trivia · Verdadero/Falso · Ordenar versículos

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0071_017` — TEXTO EDITABLE
Elige una dinámica

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0073_018` — TEXTO EDITABLE
Abrir guía 

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0080_019` — TEXTO EDITABLE
Ocultar información de prototipo

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0080_020` — TEXTO EDITABLE
Información de prototipo

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0080_021` — TEXTO EDITABLE
Ocultar información

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0080_022` — TEXTO EDITABLE
Guías en revisión editorial

**TEXTO LITERAL** · `interfaz/src-ui-screens-activitiesscreen-tsx#literal_l0081_023` — TEXTO EDITABLE
Estas propuestas originales son un prototipo para orientar facilitadores, no sustituyen formación ni protocolos de protección y todavía requieren revisión humana.

### PastoralGamesScreen.tsx · interfaz/src-ui-screens-pastoralgamesscreen-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-screens-pastoralgamesscreen-tsx`
**Ruta:** Interfaz → PastoralGamesScreen
**Visibilidad:** VISIBLE_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/src/ui/screens/PastoralGamesScreen.tsx`

Se registran literales de origen (incluidos textos condicionales o técnicos que requieren revisión manual de visibilidad). No se interpreta cada literal como una pantalla adicional.

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0016_001` — TEXTO EDITABLE
Rango incompleto para esta actividad.

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0019_002` — TEXTO EDITABLE
No se pudo leer RV1909 local.

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0030_003` — TEXTO EDITABLE
← Volver a las dinámicas

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0031_004` — TEXTO EDITABLE
Juegos bíblicos · RV1909

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0032_005` — TEXTO EDITABLE
Tres actividades interactivas originales en revisión editorial. Las explicaciones no sustituyen un estudio contextual humano.

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0036_006` — TEXTO EDITABLE
Ordenar versículos

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0040_007` — TEXTO EDITABLE
Toca una fila y usa «Subir» o «Bajar». Se ordenan etiquetas reales de la Biblia local; no es necesario arrastrar.

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0043_008` — TEXTO EDITABLE
Subir versículo 

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0044_009` — TEXTO EDITABLE
Bajar versículo 

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0046_010` — TEXTO EDITABLE
Orden correcto de los versículos en Salmos 23.

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0046_011` — TEXTO EDITABLE
Ordena las etiquetas 1, 2 y 3 para completar.

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0047_012` — TEXTO EDITABLE
Mezclar de nuevo

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0053_013` — TEXTO EDITABLE
Respuesta correcta

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0053_014` — TEXTO EDITABLE
Respuesta para revisar

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0056_015` — TEXTO EDITABLE
Volver a jugar

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0056_016` — TEXTO EDITABLE
Siguiente pregunta

**TEXTO LITERAL** · `interfaz/src-ui-screens-pastoralgamesscreen-tsx#literal_l0059_017` — TEXTO EDITABLE
Reiniciar juego


### HymnalScreen.tsx · interfaz/src-ui-screens-hymnalscreen-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-screens-hymnalscreen-tsx`
**Ruta:** Código → HymnalScreen
**Visibilidad:** OCULTO_SIN_RUTA
**Origen técnico:** `apps/bible-topic-explorer/src/ui/screens/HymnalScreen.tsx`

Literales registrados desde fuente. Puede contener valores condicionales o cadenas de carácter técnico que no se muestran al usuario; requiere confirmación por el Supervisor.

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0014_001` — TEXTO EDITABLE
No se pudieron leer tus letras locales.

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0019_002` — TEXTO EDITABLE
Completa título y letra.

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0019_003` — TEXTO EDITABLE
No se pudo guardar. Límite: título 160 caracteres y letra 15.000 caracteres.

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0028_004` — TEXTO EDITABLE
← Cancionero

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0028_005` — TEXTO EDITABLE
← Recursos

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0030_006` — TEXTO EDITABLE
Letras para leer y cantar a tu ritmo. Tus apuntes permanecen en el dispositivo.

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0033_007` — TEXTO EDITABLE
Editar mi letra

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0033_008` — TEXTO EDITABLE
Mi nueva letra

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0034_009` — TEXTO EDITABLE
Solo para uso personal privado. No se sincroniza ni publica.

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0035_010` — TEXTO EDITABLE
Título de letra personal

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0035_011` — TEXTO EDITABLE
Título de la canción

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0036_012` — TEXTO EDITABLE
Texto completo de mi letra

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0036_013` — TEXTO EDITABLE
Escribe aquí tu letra…

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0037_014` — TEXTO EDITABLE
Guardar en este dispositivo

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0038_015` — TEXTO EDITABLE
:active?

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0040_016` — TEXTO EDITABLE
Editar mi letra ✎

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0040_017` — TEXTO EDITABLE
Mi letra · privada y disponible sin conexión

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0041_018` — TEXTO EDITABLE
Borrador original · distribución pendiente de autorización

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0042_019` — TEXTO EDITABLE
Letra pendiente de derechos

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0042_020` — TEXTO EDITABLE
Este título aún no tiene permiso documentado para distribuir su letra. Aquí no se sustituye por una versión inventada ni se copia material protegido.

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0042_021` — TEXTO EDITABLE
La disponibilidad exige autorización de la obra y versión concretas.

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0045_022` — TEXTO EDITABLE
Buscar títulos del cancionero

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0045_023` — TEXTO EDITABLE
⌕  Busca una canción…

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0048_024` — TEXTO EDITABLE
Letras disponibles

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0049_025` — TEXTO EDITABLE
0 canciones externas autorizadas para distribuir. La revisión de derechos sigue abierta.

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0051_026` — TEXTO EDITABLE
Mis letras

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0052_027` — TEXTO EDITABLE
+ Escribir mi letra privada

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0053_028` — TEXTO EDITABLE
Guardada solo en este dispositivo

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0053_029` — TEXTO EDITABLE
Aún no tienes letras privadas con esta búsqueda.

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0054_030` — TEXTO EDITABLE
Pendientes de derechos

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0055_031` — TEXTO EDITABLE
Borrador original · autorización en revisión

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0056_032` — TEXTO EDITABLE
Título conocido · letra no incluida

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0057_033` — TEXTO EDITABLE
Sin títulos pendientes para esta búsqueda.

**TEXTO LITERAL** · `interfaz/src-ui-screens-hymnalscreen-tsx#literal_l0058_034` — TEXTO EDITABLE
4 borradores originales requieren confirmación de titularidad y distribución; 20 letras conocidas siguen sin licencia acreditada.

### SongsScreen.tsx · interfaz/src-ui-screens-songsscreen-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-screens-songsscreen-tsx`
**Ruta:** Código → SongsScreen
**Visibilidad:** OCULTO_SIN_RUTA
**Origen técnico:** `apps/bible-topic-explorer/src/ui/screens/SongsScreen.tsx`

Literales registrados desde fuente. Puede contener valores condicionales o cadenas de carácter técnico que no se muestran al usuario; requiere confirmación por el Supervisor.

**TEXTO LITERAL** · `interfaz/src-ui-screens-songsscreen-tsx#literal_l0012_001` — TEXTO EDITABLE
No se pudo abrir la búsqueda oficial de Spotify. Puedes seguir usando las guías sin conexión.

**TEXTO LITERAL** · `interfaz/src-ui-screens-songsscreen-tsx#literal_l0015_002` — TEXTO EDITABLE
← Volver a canciones

**TEXTO LITERAL** · `interfaz/src-ui-screens-songsscreen-tsx#literal_l0015_003` — TEXTO EDITABLE
← Volver al menú

**TEXTO LITERAL** · `interfaz/src-ui-screens-songsscreen-tsx#literal_l0016_004` — TEXTO EDITABLE
Canciones pastorales

**TEXTO LITERAL** · `interfaz/src-ui-screens-songsscreen-tsx#literal_l0017_005` — TEXTO EDITABLE
20 fichas de conversación originales asociadas a títulos de canciones. La música permanece en servicios externos.

**TEXTO LITERAL** · `interfaz/src-ui-screens-songsscreen-tsx#literal_l0018_006` — TEXTO EDITABLE
Cada enlace abre una búsqueda en Spotify (plataforma oficial), NO una pista comprobada. Escoge intérprete y versión; ninguna letra o grabación se aloja en La U.

**TEXTO LITERAL** · `interfaz/src-ui-screens-songsscreen-tsx#literal_l0023_007` — TEXTO EDITABLE
Propósito del encuentro

**TEXTO LITERAL** · `interfaz/src-ui-screens-songsscreen-tsx#literal_l0024_008` — TEXTO EDITABLE
Pregunta propia para conversar

**TEXTO LITERAL** · `interfaz/src-ui-screens-songsscreen-tsx#literal_l0026_009` — TEXTO EDITABLE
Buscar «

**TEXTO LITERAL** · `interfaz/src-ui-screens-songsscreen-tsx#literal_l0026_010` — TEXTO EDITABLE
» en Spotify ↗

**TEXTO LITERAL** · `interfaz/src-ui-screens-songsscreen-tsx#literal_l0028_011` — TEXTO EDITABLE
Para proyección, ejecución o difusión pública, verifica derechos y licencias. Spotify nativo permanece bloqueado externamente.

**TEXTO LITERAL** · `interfaz/src-ui-screens-songsscreen-tsx#literal_l0030_012` — TEXTO EDITABLE
Filtrar por momento

**TEXTO LITERAL** · `interfaz/src-ui-screens-songsscreen-tsx#literal_l0033_013` — TEXTO EDITABLE
20 fichas disponibles

**TEXTO LITERAL** · `interfaz/src-ui-screens-songsscreen-tsx#literal_l0038_014` — TEXTO EDITABLE
Ver ficha: 

### SoundCloudScreen.tsx · interfaz/src-ui-screens-soundcloudscreen-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-screens-soundcloudscreen-tsx`
**Ruta:** Código → SoundCloudScreen
**Visibilidad:** VISIBLE_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/src/ui/screens/SoundCloudScreen.tsx`

Literales registrados desde fuente. Puede contener valores condicionales o cadenas de carácter técnico que no se muestran al usuario; requiere confirmación por el Supervisor.

**TEXTO LITERAL** · `interfaz/src-ui-screens-soundcloudscreen-tsx#literal_l0017_001` — TEXTO EDITABLE
← Recursos

**TEXTO LITERAL** · `interfaz/src-ui-screens-soundcloudscreen-tsx#literal_l0018_002` — TEXTO EDITABLE
Música en SoundCloud

**TEXTO LITERAL** · `interfaz/src-ui-screens-soundcloudscreen-tsx#literal_l0019_003` — TEXTO EDITABLE
La música se escucha directamente en SoundCloud, no dentro de La U. Si tienes su aplicación instalada, Android puede abrirla; de lo contrario utilizará tu navegador.

**TEXTO LITERAL** · `interfaz/src-ui-screens-soundcloudscreen-tsx#literal_l0025_004` — TEXTO EDITABLE
Música en su plataforma oficial

**TEXTO LITERAL** · `interfaz/src-ui-screens-soundcloudscreen-tsx#literal_l0028_005` — TEXTO EDITABLE
Abrir SoundCloud ↗

**TEXTO LITERAL** · `interfaz/src-ui-screens-soundcloudscreen-tsx#literal_l0030_006` — TEXTO EDITABLE
Listas para descubrir

**TEXTO LITERAL** · `interfaz/src-ui-screens-soundcloudscreen-tsx#literal_l0031_007` — TEXTO EDITABLE
Algunas propuestas externas para explorar. Se abren en SoundCloud y pueden cambiar con el tiempo.

**TEXTO LITERAL** · `interfaz/src-ui-screens-soundcloudscreen-tsx#literal_l0034_008` — TEXTO EDITABLE
Abrir en SoundCloud: 

**TEXTO LITERAL** · `interfaz/src-ui-screens-soundcloudscreen-tsx#literal_l0035_009` — TEXTO EDITABLE
Abre una lista externa; puede usar la aplicación SoundCloud o el navegador.

**TEXTO LITERAL** · `interfaz/src-ui-screens-soundcloudscreen-tsx#literal_l0049_010` — TEXTO EDITABLE
Estas listas no son propias ni están aprobadas por La U. Antes de reproducirlas con niños, una persona responsable debe comprobar sus canciones, su contenido y las condiciones de uso. La U no descarga ni redistribuye audio.

**TEXTO LITERAL** · `interfaz/src-ui-screens-soundcloudscreen-tsx#literal_l0050_011` — TEXTO EDITABLE
No se pudo abrir SoundCloud. Comprueba la conexión e inténtalo otra vez.

### MusicScreen.tsx · interfaz/src-ui-screens-musicscreen-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-screens-musicscreen-tsx`
**Ruta:** Código → MusicScreen
**Visibilidad:** OCULTO_SIN_RUTA
**Origen técnico:** `apps/bible-topic-explorer/src/ui/screens/MusicScreen.tsx`

Literales registrados desde fuente. Puede contener valores condicionales o cadenas de carácter técnico que no se muestran al usuario; requiere confirmación por el Supervisor.

**TEXTO LITERAL** · `interfaz/src-ui-screens-musicscreen-tsx#literal_l0011_001` — TEXTO EDITABLE
El enlace no es válido.

**TEXTO LITERAL** · `interfaz/src-ui-screens-musicscreen-tsx#literal_l0013_002` — TEXTO EDITABLE
No se pudo abrir Spotify ni el navegador. Comprueba tu conexión y vuelve a intentarlo.

**TEXTO LITERAL** · `interfaz/src-ui-screens-musicscreen-tsx#literal_l0013_003` — TEXTO EDITABLE
Enlace no disponible

**TEXTO LITERAL** · `interfaz/src-ui-screens-musicscreen-tsx#literal_l0013_004` — TEXTO EDITABLE
La lectura sin conexión continúa disponible.

**TEXTO LITERAL** · `interfaz/src-ui-screens-musicscreen-tsx#literal_l0016_005` — TEXTO EDITABLE
← Volver a Hoy

**TEXTO LITERAL** · `interfaz/src-ui-screens-musicscreen-tsx#literal_l0017_006` — TEXTO EDITABLE
Música para acompañarte

**TEXTO LITERAL** · `interfaz/src-ui-screens-musicscreen-tsx#literal_l0018_007` — TEXTO EDITABLE
Playlists cristianas públicas, para escucha personal y opcional. Spotify se abre fuera de La U; puede necesitar conexión, app o cuenta según el servicio.

**TEXTO LITERAL** · `interfaz/src-ui-screens-musicscreen-tsx#literal_l0020_008` — TEXTO EDITABLE
Explorar por ánimo

**TEXTO LITERAL** · `interfaz/src-ui-screens-musicscreen-tsx#literal_l0025_009` — TEXTO EDITABLE
Abrir en Spotify ↗

**TEXTO LITERAL** · `interfaz/src-ui-screens-musicscreen-tsx#literal_l0028_010` — TEXTO EDITABLE
La U no reproduce ni guarda música. Los enlaces y su disponibilidad pueden cambiar; para reuniones públicas comprueba permisos musicales del lugar.

### YouTubeScreen.tsx · interfaz/src-ui-screens-youtubescreen-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-screens-youtubescreen-tsx`
**Ruta:** Código → YouTubeScreen
**Visibilidad:** OCULTO_SIN_RUTA
**Origen técnico:** `apps/bible-topic-explorer/src/ui/screens/YouTubeScreen.tsx`

Literales registrados desde fuente. Puede contener valores condicionales o cadenas de carácter técnico que no se muestran al usuario; requiere confirmación por el Supervisor.

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0010_001` — TEXTO EDITABLE
No se pudo abrir YouTube; comprueba la conexión o la aplicación externa.

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0012_002` — TEXTO EDITABLE
← Recursos

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0013_003` — TEXTO EDITABLE
Música en YouTube

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0014_004` — TEXTO EDITABLE
Escucha y mira desde el reproductor oficial, cuando elijas una lista válida. La Biblia no necesita internet.

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0016_005` — TEXTO EDITABLE
VÍDEO VISIBLE

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0021_006` — TEXTO EDITABLE
No se pudo cargar la lista. Puedes abrirla en YouTube.

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0022_007` — TEXTO EDITABLE
La lista puede no permitir su inserción. Ábrela en YouTube.

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0025_008` — TEXTO EDITABLE
Sin vídeo cargado. Playlist pendiente de aprobación. No hay reproducción.

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0027_009` — TEXTO EDITABLE
Selecciona una lista de YouTube

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0028_010` — TEXTO EDITABLE
Aún no hay playlist aprobada ni vista previa real.

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0029_011` — TEXTO EDITABLE
Lista pendiente de aprobación

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0031_012` — TEXTO EDITABLE
Abrir esta lista en YouTube ↗

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0031_013` — TEXTO EDITABLE
Quitar vídeo visible

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0035_014` — TEXTO EDITABLE
Elegir una playlist

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0036_015` — TEXTO EDITABLE
Pega una URL auténtica de playlist, seleccionada por ti. Algunas listas no permiten inserción por región o derechos.

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0037_016` — TEXTO EDITABLE
URL de playlist YouTube

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0037_017` — TEXTO EDITABLE
https://www.youtube.com/playlist?list=…

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0039_018` — TEXTO EDITABLE
Cargar vídeo oficial visible

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0040_019` — TEXTO EDITABLE
Abrir YouTube ↗

**TEXTO LITERAL** · `interfaz/src-ui-screens-youtubescreen-tsx#literal_l0042_020` — TEXTO EDITABLE
La U no descarga ni extrae audio, no reproduce en segundo plano, no oculta los controles ni anuncia playback antes de comprobarlo.

### PersonalBooksScreen.tsx · interfaz/src-ui-screens-personalbooksscreen-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-screens-personalbooksscreen-tsx`
**Ruta:** Código → PersonalBooksScreen
**Visibilidad:** VISIBLE_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/src/ui/screens/PersonalBooksScreen.tsx`

Literales registrados desde fuente. Puede contener valores condicionales o cadenas de carácter técnico que no se muestran al usuario; requiere confirmación por el Supervisor.

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0017_001` — TEXTO EDITABLE
No se pudo consultar el índice privado de libros.

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0022_002` — TEXTO EDITABLE
No se pudo leer este EPUB; se conserva el documento original.

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0029_003` — TEXTO EDITABLE
Selección cancelada: no se guardó ningún archivo.

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0030_004` — TEXTO EDITABLE
Documento copiado al almacenamiento privado de La U, sin subirlo a internet.

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0031_005` — TEXTO EDITABLE
No se pudo importar el archivo. Comprueba formato (PDF o EPUB), tamaño y espacio disponible.

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0036_006` — TEXTO EDITABLE
Avance guardado en este dispositivo.

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0037_007` — TEXTO EDITABLE
No se pudo guardar el avance local.

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0041_008` — TEXTO EDITABLE
No existe un visor PDF compatible o falta permiso local. El archivo privado sigue guardado, sin enviarse a ningún servicio.

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0045_009` — TEXTO EDITABLE
← Mis libros

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0045_010` — TEXTO EDITABLE
← Volver al menú

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0046_011` — TEXTO EDITABLE
Mis libros PDF/EPUB

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0047_012` — TEXTO EDITABLE
Documentos personales que eliges desde el selector del sistema Android. Copia local privada, sin cuenta, sincronización ni subida automática.

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0055_013` — TEXTO EDITABLE
Lectura PDF local

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0056_014` — TEXTO EDITABLE
Abrir con una aplicación lectora instalada en Android. El documento se comparte temporalmente con la aplicación que tú elijas; La U no lo sube a la red.

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0057_015` — TEXTO EDITABLE
Abrir PDF en lector del dispositivo ↗

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0058_016` — TEXTO EDITABLE
El avance se anota manualmente aquí porque La U no recibe la página actual del visor externo.

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0063_017` — TEXTO EDITABLE
Lectura EPUB sin conexión

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0064_018` — TEXTO EDITABLE
Vista de texto sin estilos, imágenes ni scripts del EPUB. La versión con formato original requiere un lector compatible.

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0065_019` — TEXTO EDITABLE
Preparando capítulos locales…

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0068_020` — TEXTO EDITABLE
← Anterior

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0069_021` — TEXTO EDITABLE
Siguiente →

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0076_022` — TEXTO EDITABLE
El avance es privado y se puede retomar. No eliminamos tus archivos, notas ni destacados.

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0078_023` — TEXTO EDITABLE
Añadir un libro

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0079_024` — TEXTO EDITABLE
Elegir PDF o EPUB de mi dispositivo

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0080_025` — TEXTO EDITABLE
PDF hasta 100 MB; EPUB hasta 25 MB. El EPUB se lee como texto local; PDF usa una aplicación instalada. No se importan archivos desde la nube automáticamente.

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0082_026` — TEXTO EDITABLE
Mis documentos · 

**TEXTO LITERAL** · `interfaz/src-ui-screens-personalbooksscreen-tsx#literal_l0086_027` — TEXTO EDITABLE
Sin documentos aún. Tus archivos bíblicos RV1909 y notas existentes no cambian.

### AboutSourcesScreen.tsx · interfaz/src-ui-screens-aboutsourcesscreen-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-screens-aboutsourcesscreen-tsx`
**Ruta:** Código → AboutSourcesScreen
**Visibilidad:** VISIBLE_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/src/ui/screens/AboutSourcesScreen.tsx`

Literales registrados desde fuente. Puede contener valores condicionales o cadenas de carácter técnico que no se muestran al usuario; requiere confirmación por el Supervisor.

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0010_001` — TEXTO EDITABLE
Jordan Moore · Paisaje natural

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0010_002` — TEXTO EDITABLE
Fotografía de paisaje utilizada como base de tratamiento tonal propio.

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0011_003` — TEXTO EDITABLE
Sixteen Miles Out · Libro abierto

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0011_004` — TEXTO EDITABLE
Fotografía de libro utilizada como base de tratamiento tonal propio.

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0012_005` — TEXTO EDITABLE
Unsplash License

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0012_006` — TEXTO EDITABLE
Condiciones aplicables a las fotografías anteriores.

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0015_007` — TEXTO EDITABLE
Abrir fuente 

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0025_008` — TEXTO EDITABLE
← Volver

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0026_009` — TEXTO EDITABLE
Sobre La U

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0028_010` — TEXTO EDITABLE
Un proyecto en construcción

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0029_011` — TEXTO EDITABLE
La U es un prototipo desarrollado con apoyo de inteligencia artificial y consulta de estudios, textos bíblicos y fuentes documentales. Sus contenidos se están revisando y no constituyen una publicación doctrinal aprobada ni cuentan con aval de las instituciones citadas.

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0031_012` — TEXTO EDITABLE
Bibliografía y linkografía

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0032_013` — TEXTO EDITABLE
Los enlaces identifican obras e instituciones consultadas; se presentan resúmenes y propuestas originales, no reproducciones de sus textos ni avales.

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0035_014` — TEXTO EDITABLE
 · Referencia para 

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0037_015` — TEXTO EDITABLE
Biblia y recursos locales

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0038_016` — TEXTO EDITABLE
Reina-Valera 1909 (RV1909): corpus bíblico de lectura local. Los pasajes se identifican por libro, capítulo y versículo. El contenido personal (notas, destacados y progreso) queda en el dispositivo.

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0039_017` — TEXTO EDITABLE
Imágenes y créditos

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0041_018` — TEXTO EDITABLE
Música y contenidos propios

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0042_019` — TEXTO EDITABLE
SoundCloud se abre en su aplicación o sitio web; La U no aloja, reproduce ni redistribuye música. Las listas sugeridas pertenecen a terceros y deben revisarse antes de usarse con menores. Las ilustraciones geométricas de actividades son dibujos originales del proyecto. No se muestran letras de canciones de terceros sin autorización.

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0043_020` — TEXTO EDITABLE
Consultar siempre la licencia vigente en cada origen. Las fuentes son bibliografía de contexto, no permisos generales para copiar contenidos ni respaldo editorial o institucional.

**TEXTO LITERAL** · `interfaz/src-ui-screens-aboutsourcesscreen-tsx#literal_l0044_021` — TEXTO EDITABLE
No se pudo abrir el enlace. Puedes volver a intentarlo cuando tengas conexión.

### primitives.tsx · interfaz/src-ui-primitives-tsx

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-ui-primitives-tsx`
**Ruta:** Código → primitives
**Visibilidad:** VISIBLE_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/src/ui/primitives.tsx`

Literales registrados desde fuente. Puede contener valores condicionales o cadenas de carácter técnico que no se muestran al usuario; requiere confirmación por el Supervisor.

**TEXTO LITERAL** · `interfaz/src-ui-primitives-tsx#literal_l0014_001` — TEXTO EDITABLE
Cargando…

**TEXTO LITERAL** · `interfaz/src-ui-primitives-tsx#literal_l0016_002` — TEXTO EDITABLE
${tier}. ${reference}. ${text}

**TEXTO LITERAL** · `interfaz/src-ui-primitives-tsx#literal_l0016_003` — TEXTO EDITABLE
Abrir contexto →

**TEXTO LITERAL** · `interfaz/src-ui-primitives-tsx#literal_l0017_004` — TEXTO EDITABLE
${label}: ${value}

**TEXTO LITERAL** · `interfaz/src-ui-primitives-tsx#literal_l0017_005` — TEXTO EDITABLE
; if (!onPress) return

**TEXTO LITERAL** · `interfaz/src-ui-primitives-tsx#literal_l0017_006` — TEXTO EDITABLE
; return

**TEXTO LITERAL** · `interfaz/src-ui-primitives-tsx#literal_l0018_007` — TEXTO EDITABLE
: hint ?

### uxCopy.ts · interfaz/src-product-uxcopy-ts

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-product-uxcopy-ts`
**Ruta:** Código → uxCopy.ts
**Visibilidad:** COMPARTIDO_EN_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/src/product/uxCopy.ts`

Literales registrados desde fuente. Puede contener valores condicionales o cadenas de carácter técnico que no se muestran al usuario; requiere confirmación por el Supervisor.

**TEXTO LITERAL** · `interfaz/src-product-uxcopy-ts#literal_l0002_001` — TEXTO EDITABLE
Dos formas de explorar

**TEXTO LITERAL** · `interfaz/src-product-uxcopy-ts#literal_l0003_002` — TEXTO EDITABLE
Elige un tema curado desde A–Z o usa la búsqueda textual. Lo que escribes libremente nunca se convierte en un tema por sorpresa.

**TEXTO LITERAL** · `interfaz/src-product-uxcopy-ts#literal_l0004_003` — TEXTO EDITABLE
El sistema operativo puede retrasar una notificación. Puedes cambiar o apagar el recordatorio cuando quieras.

**TEXTO LITERAL** · `interfaz/src-product-uxcopy-ts#literal_l0005_004` — TEXTO EDITABLE
Guardado en tu biblioteca.

**TEXTO LITERAL** · `interfaz/src-product-uxcopy-ts#literal_l0006_005` — TEXTO EDITABLE
Referencia retirada de guardados.

**TEXTO LITERAL** · `interfaz/src-product-uxcopy-ts#literal_l0007_006` — TEXTO EDITABLE
Reflexión guardada en este dispositivo.

### preferences.ts · interfaz/src-product-preferences-ts

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-product-preferences-ts`
**Ruta:** Código → preferences.ts
**Visibilidad:** COMPARTIDO_EN_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/src/product/preferences.ts`

Literales registrados desde fuente. Puede contener valores condicionales o cadenas de carácter técnico que no se muestran al usuario; requiere confirmación por el Supervisor.

**TEXTO LITERAL** · `interfaz/src-product-preferences-ts#literal_l0018_001` — TEXTO EDITABLE
Biblia para cada día

**TEXTO LITERAL** · `interfaz/src-product-preferences-ts#literal_l0018_002` — TEXTO EDITABLE
Lee, busca y continúa sin crear una cuenta.

**TEXTO LITERAL** · `interfaz/src-product-preferences-ts#literal_l0019_003` — TEXTO EDITABLE
Funciona sin conexión

**TEXTO LITERAL** · `interfaz/src-product-preferences-ts#literal_l0019_004` — TEXTO EDITABLE
El núcleo usa la Biblia guardada en tu dispositivo.

**TEXTO LITERAL** · `interfaz/src-product-preferences-ts#literal_l0020_005` — TEXTO EDITABLE
A tu ritmo

**TEXTO LITERAL** · `interfaz/src-product-preferences-ts#literal_l0020_006` — TEXTO EDITABLE
Puedes activar un recordatorio local cuando tú decidas.

### navigation.ts · interfaz/src-product-navigation-ts

**ID ESTRUCTURAL — NO EDITAR:** `interfaz/src-product-navigation-ts`
**Ruta:** Código → navigation.ts
**Visibilidad:** COMPARTIDO_EN_CODIGO
**Origen técnico:** `apps/bible-topic-explorer/src/product/navigation.ts`

Literales registrados desde fuente. Puede contener valores condicionales o cadenas de carácter técnico que no se muestran al usuario; requiere confirmación por el Supervisor.


## 11. Observaciones para revisión del Product Owner

- 100 IDs canónicos: 23 previews y 77 SIN TEXTO EDITORIAL AÚN.
- No alterar la RV1909 ni incorporar contenido privado de usuarios.
- 28 días de planes y 20 dinámicas son propuestas en revisión; la guía pastoral incluye todas sus advertencias y fuentes.
- 4 letras originales en código: titularidad y distribución externa pendientes de autorización.
- La edad 12+ de actividades se muestra globalmente en la pantalla, no en cada registro fuente.
- El menú expone SoundCloud externo, no Spotify ni YouTube; las pantallas musicales históricas se inventarían como ocultas.
- Ninguna prueba Android ni build forma parte del encargo documental.
- Revisión y aceptación pertenecen al Supervisor; nunca autocertificar ACCEPT.

## 12. Tabla de cobertura

| Módulo | Fichas | Estado |
|---|---:|---|
| Hoy | 14 | Registrado por fuente |
| Temas | 100 | 23 desarrollados, 77 sin cuerpo |
| Biblia | 66 | Registrado por fuente |
| Planes | 4 | Registrado por fuente |
| Días de plan | 28 | Registrado por fuente |
| Guía pastoral | 8 | Registrado por fuente |
| Dinámicas | 20 | Registrado por fuente |
| Trivia | 5 | Registrado por fuente |
| Verdadero/Falso | 5 | Registrado por fuente |
| Ordenar versículos | 1 | Registrado por fuente |
| Cancionero original | 4 | Registrado por fuente |
| Fichas de canciones | 20 | Registrado por fuente |
| SoundCloud | 3 | Registrado por fuente |
| Spotify histórico | 6 | Registrado por fuente |
| Menú | 7 | Registrado por fuente |

| Interfaz (primera tanda) | 10 | 323 literales; ver anexo de origen |

| Interfaz (segunda tanda) | 11 | 156 literales; ver anexo de origen |

**Fuente:** https://github.com/cmiloarevalo-hash/Lago-1/tree/e3cea7bc360c7fc97187639ca2f72b0c046d6a4a/apps/bible-topic-explorer
