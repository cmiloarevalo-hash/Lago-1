/** Edición pastoral aprobada para integración: Jesús, el Maestro del Amor — El camino de Jesús.
 * Fuente: versión 1.0.1 (2026-10-28), documento editorial original del proyecto.
 * Contenido íntegro para lectura local: las referencias figuran al principio, fuera de la prosa.
 * Las lecturas se vinculan con RV1909; no se generan relatos ni se reinterpretan los párrafos.
 */
export const PASTORAL_GUIDE_VERSION='1.0.1 · 28-10-2026';
export const PASTORAL_GUIDE_TITLE='Jesús, el Maestro del Amor';
export const PASTORAL_GUIDE_SUBTITLE='El camino de Jesús';
export type PastoralReference={label:string;book:string;chapter:number;start:number;end:number};
export type PastoralTopic={id:string;number:number;title:string;themeId:number;themeTitle:string;themeObjective:string;readingsOld:readonly PastoralReference[];readingsNew:readonly PastoralReference[];paragraphs:readonly string[];question:string;questionKind:'introspection'|'debate'};
export const pastoralTopics:readonly PastoralTopic[]=[
  {
    "id": "cap-01",
    "number": 1,
    "title": "¿Qué es la Biblia y de dónde viene?",
    "themeId": 1,
    "themeTitle": "Descubrir la Biblia y conocer a Jesús",
    "themeObjective": "Aprender a reconocer las Escrituras y comprender cómo Jesús las conoció, interpretó y utilizó para hablar del Padre.",
    "readingsOld": [
      {
        "label": "Salmo 119:105",
        "book": "Salmos",
        "chapter": 119,
        "start": 105,
        "end": 105
      },
      {
        "label": "Nehemías 8:8",
        "book": "Nehemías",
        "chapter": 8,
        "start": 8,
        "end": 8
      }
    ],
    "readingsNew": [
      {
        "label": "Lucas 24:44–45",
        "book": "Lucas",
        "chapter": 24,
        "start": 44,
        "end": 45
      },
      {
        "label": "Mateo 22:29",
        "book": "Mateo",
        "chapter": 22,
        "start": 29,
        "end": 29
      }
    ],
    "paragraphs": [
      "La Biblia no fue escrita de una sola vez. Reúne textos de diversas épocas: relatos, leyes, poemas, oraciones, enseñanzas y testimonios de fe. Las Escrituras de Israel, que los cristianos llamamos Antiguo Testamento, existían antes de Jesús. Los escritos del Nuevo Testamento surgieron después de su vida pública, en las primeras comunidades cristianas. Conocer este origen nos ayuda a entender por qué la Biblia reúne voces y géneros diferentes.",
      "Un salmo presenta la palabra de Dios como una luz que orienta el camino. Jesús conocía esas Escrituras: se refiere a la Ley de Moisés, los Profetas y los Salmos, y ayuda a sus discípulos a comprenderlos. También advierte sobre el error de no entender las Escrituras. Por eso, antes de sacar conclusiones de un pasaje, conviene conocer quién habla, a quién se dirige y qué sucede. La Biblia se comprende mejor cuando la leemos con atención y respeto por su contexto.",
      "En el libro de Nehemías, las Escrituras se leen y explican para que el pueblo comprenda su sentido. Esa preocupación por comprender prepara nuestro encuentro con Jesús, que también explica las Escrituras a sus discípulos."
    ],
    "question": "¿Qué me gustaría comprender mejor de la Biblia?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-02",
    "number": 2,
    "title": "¿Cómo se relacionan el Antiguo y el Nuevo Testamento?",
    "themeId": 1,
    "themeTitle": "Descubrir la Biblia y conocer a Jesús",
    "themeObjective": "Aprender a reconocer las Escrituras y comprender cómo Jesús las conoció, interpretó y utilizó para hablar del Padre.",
    "readingsOld": [
      {
        "label": "Jeremías 31:31–34",
        "book": "Jeremías",
        "chapter": 31,
        "start": 31,
        "end": 34
      },
      {
        "label": "Éxodo 24:8",
        "book": "Éxodo",
        "chapter": 24,
        "start": 8,
        "end": 8
      }
    ],
    "readingsNew": [
      {
        "label": "Mateo 5:17",
        "book": "Mateo",
        "chapter": 5,
        "start": 17,
        "end": 17
      },
      {
        "label": "Lucas 22:20",
        "book": "Lucas",
        "chapter": 22,
        "start": 20,
        "end": 20
      }
    ],
    "paragraphs": [
      "Jesús vivió dentro de la historia y de la fe de Israel. Cuando habló de la Ley y los Profetas, no se refirió a libros extraños para él: eran las Escrituras que conocía su pueblo. Jesús afirma que no vino a abolir la Ley o los Profetas, sino a darles cumplimiento. Para comprender esa afirmación necesitamos estudiar tanto lo que existía antes de Jesús como las enseñanzas que sus discípulos transmitieron después.",
      "El profeta Jeremías había anunciado una nueva alianza, y Lucas presenta a Jesús hablando de una nueva alianza en la última cena. La fe cristiana establece una relación entre esos pasajes. Esa lectura no elimina la historia ni el significado propio de los textos antiguos. El Nuevo Testamento surge de la experiencia de quienes siguieron a Jesús y entendieron su vida, muerte y resurrección a la luz de las Escrituras de Israel. Conocer ambas partes ayuda a evitar interpretaciones apresuradas.",
      "El Éxodo presenta una alianza sellada con sangre. Al hablar de la nueva alianza en la última cena, Jesús emplea un lenguaje que sus oyentes podían relacionar con la historia de Israel."
    ],
    "question": "¿Qué cambia cuando descubro que Jesús conocía las Escrituras de Israel?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-03",
    "number": 3,
    "title": "Jesús conoce y explica las Escrituras",
    "themeId": 1,
    "themeTitle": "Descubrir la Biblia y conocer a Jesús",
    "themeObjective": "Aprender a reconocer las Escrituras y comprender cómo Jesús las conoció, interpretó y utilizó para hablar del Padre.",
    "readingsOld": [
      {
        "label": "Deuteronomio 8:3",
        "book": "Deuteronomio",
        "chapter": 8,
        "start": 3,
        "end": 3
      },
      {
        "label": "Éxodo 20:13",
        "book": "Éxodo",
        "chapter": 20,
        "start": 13,
        "end": 13
      }
    ],
    "readingsNew": [
      {
        "label": "Lucas 4:1–13",
        "book": "Lucas",
        "chapter": 4,
        "start": 1,
        "end": 13
      },
      {
        "label": "Mateo 5:21–22",
        "book": "Mateo",
        "chapter": 5,
        "start": 21,
        "end": 22
      }
    ],
    "paragraphs": [
      "Los Evangelios presentan a Jesús como un maestro que no se limita a repetir palabras conocidas. En el relato de las tentaciones, Jesús responde citando el libro del Deuteronomio. Sus respuestas muestran que las Escrituras forman parte de su manera de comprender las decisiones y la fidelidad a Dios. No son adornos para ganar una discusión.",
      "En una de sus enseñanzas, Jesús recuerda una enseñanza conocida y conduce a sus oyentes a mirar más allá del acto visible: también importa la actitud que alimenta el desprecio y la violencia. Estudiar su enseñanza requiere observar la pregunta, el contexto y el sentido de sus palabras. Un versículo aislado puede confundirse con facilidad. Jesús nos invita a examinar lo que una enseñanza pide al corazón y a las acciones, sin perder de vista su origen.",
      "Jesús responde a una tentación retomando palabras del Deuteronomio y, en otra enseñanza, parte del mandamiento que prohíbe matar. Aquí la conexión es explícita: Jesús cita y profundiza enseñanzas de las Escrituras que conocía."
    ],
    "question": "¿Podemos comprender una enseñanza sin conocer su contexto?",
    "questionKind": "debate"
  },
  {
    "id": "cap-04",
    "number": 4,
    "title": "Dios nos ama: conocer al Padre",
    "themeId": 1,
    "themeTitle": "Descubrir la Biblia y conocer a Jesús",
    "themeObjective": "Aprender a reconocer las Escrituras y comprender cómo Jesús las conoció, interpretó y utilizó para hablar del Padre.",
    "readingsOld": [
      {
        "label": "Salmo 103:8–13",
        "book": "Salmos",
        "chapter": 103,
        "start": 8,
        "end": 13
      },
      {
        "label": "Oseas 11:1–4",
        "book": "Oseas",
        "chapter": 11,
        "start": 1,
        "end": 4
      }
    ],
    "readingsNew": [
      {
        "label": "Lucas 15:1–3",
        "book": "Lucas",
        "chapter": 15,
        "start": 1,
        "end": 3
      },
      {
        "label": "Lucas 15:11–32",
        "book": "Lucas",
        "chapter": 15,
        "start": 11,
        "end": 32
      }
    ],
    "paragraphs": [
      "Jesús responde al descontento de quienes critican que reciba a personas consideradas pecadoras. Entre sus enseñanzas cuenta la parábola de un padre y sus dos hijos. El menor abandona su hogar, pierde lo que recibió y decide regresar. El padre sale a su encuentro y lo acoge. El hermano mayor, en cambio, se resiste a celebrar ese regreso.",
      "Jesús cuenta una parábola, no una crónica de una familia concreta. Mediante sus personajes nos invita a pensar en la misericordia de Dios y en lo difícil que puede resultar alegrarnos cuando alguien recibe una nueva oportunidad. El amor del padre no convierte en buenas las decisiones que causaron daño, pero tampoco reduce al hijo a sus errores. En esa tensión entre responsabilidad, acogida y resentimiento aparece una enseñanza que prepara nuestro estudio del amor al prójimo.",
      "Un salmo compara la compasión de Dios con la de un padre; el profeta Oseas evoca el cuidado divino hacia Israel. La parábola de Jesús no cita esos pasajes, pero dialoga con esa tradición de misericordia."
    ],
    "question": "¿Cómo pueden convivir la misericordia y la justicia?",
    "questionKind": "debate"
  },
  {
    "id": "cap-05",
    "number": 5,
    "title": "El amor a Dios y al prójimo",
    "themeId": 2,
    "themeTitle": "Aprender a amar y confiar como Jesús enseñó",
    "themeObjective": "Comprender las enseñanzas de Jesús sobre el amor, el perdón, la confianza y la oración en nuestras relaciones.",
    "readingsOld": [
      {
        "label": "Deuteronomio 6:4–5",
        "book": "Deuteronomio",
        "chapter": 6,
        "start": 4,
        "end": 5
      },
      {
        "label": "Levítico 19:18",
        "book": "Levítico",
        "chapter": 19,
        "start": 18,
        "end": 18
      }
    ],
    "readingsNew": [
      {
        "label": "Marcos 12:28–34",
        "book": "Marcos",
        "chapter": 12,
        "start": 28,
        "end": 34
      },
      {
        "label": "Lucas 10:25–37",
        "book": "Lucas",
        "chapter": 10,
        "start": 25,
        "end": 37
      }
    ],
    "paragraphs": [
      "Un escriba preguntó a Jesús cuál era el mandamiento principal. Jesús citó expresamente dos mandamientos de las Escrituras de Israel: amar a Dios y amar al prójimo. No presentó el amor como una emoción pasajera, sino como una orientación profunda para la vida. La manera de relacionarnos con Dios no puede separarse de la manera en que tratamos a las personas.",
      "En la parábola del buen samaritano, Jesús muestra a un hombre herido y a otro que decide detenerse para cuidarlo. Lo importante no es solamente quién conoce una norma religiosa, sino quién actúa con misericordia. Para nosotros, amar puede expresarse al escuchar en casa, compartir con un hermano, respetar a quien piensa distinto o acompañar a alguien que necesita ayuda. El amor no exige aceptar malos tratos; reconoce la dignidad de todos, incluida la propia."
    ],
    "question": "¿Cómo demuestro amor en casa cada día?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-06",
    "number": 6,
    "title": "Jesús enseña misericordia y perdón",
    "themeId": 2,
    "themeTitle": "Aprender a amar y confiar como Jesús enseñó",
    "themeObjective": "Comprender las enseñanzas de Jesús sobre el amor, el perdón, la confianza y la oración en nuestras relaciones.",
    "readingsOld": [
      {
        "label": "Miqueas 7:18–19",
        "book": "Miqueas",
        "chapter": 7,
        "start": 18,
        "end": 19
      },
      {
        "label": "Salmo 103:8–12",
        "book": "Salmos",
        "chapter": 103,
        "start": 8,
        "end": 12
      }
    ],
    "readingsNew": [
      {
        "label": "Mateo 18:21–35",
        "book": "Mateo",
        "chapter": 18,
        "start": 21,
        "end": 35
      },
      {
        "label": "Lucas 15:11–32",
        "book": "Lucas",
        "chapter": 15,
        "start": 11,
        "end": 32
      },
      {
        "label": "Lucas 23:34",
        "book": "Lucas",
        "chapter": 23,
        "start": 34,
        "end": 34
      },
      {
        "label": "Lucas 17:3–4",
        "book": "Lucas",
        "chapter": 17,
        "start": 3,
        "end": 4
      }
    ],
    "paragraphs": [
      "Pedro pregunta a Jesús cuántas veces debe perdonar. Jesús le responde que la misericordia no debe convertirse en una cuenta limitada y cuenta la parábola del siervo perdonado que se niega a perdonar a otro. Quien ha recibido compasión también está llamado a ofrecerla. Durante la crucifixión, el Evangelio recoge la súplica de Jesús al Padre por el perdón de quienes lo estaban haciendo sufrir. Sus enseñanzas y sus acciones nos invitan a no responder al daño con más daño.",
      "Jesús también nos ayuda a comprender el perdón de Dios. En la parábola del hijo que regresa, el padre recibe al hijo que regresa. El sentido de aquella enseñanza resulta especialmente claro: la misericordia de Dios está abierta a todas las personas, sin excluir a nadie por su pasado. Recibir ese perdón se relaciona con reconocer los errores, arrepentirse y abrirse al cambio. El perdón no convierte en correcto el daño cometido; ofrece la posibilidad de comenzar de nuevo.",
      "El profeta Miqueas presenta a Dios como quien se complace en la misericordia, y un salmo celebra su compasión y perdón. Son antecedentes temáticos de la enseñanza de Jesús, no citas textuales de sus parábolas.",
      "¿Cómo puedo practicar el perdón cada día?"
    ],
    "question": "¿Cómo se practica esto cada día? En la familia, admitir una respuesta hiriente y pedir disculpas. Entre hermanos, escuchar el daño causado y reparar lo posible. Con el prójimo, evitar la venganza y buscar una respuesta justa. Perdonar no exige olvidar, recuperar automáticamente la confianza ni convivir con quien ejerce violencia. El amor y la misericordia también protegen la dignidad y la seguridad de las personas.",
    "questionKind": "introspection"
  },
  {
    "id": "cap-07",
    "number": 7,
    "title": "Confiar en Dios sin negar las dificultades",
    "themeId": 2,
    "themeTitle": "Aprender a amar y confiar como Jesús enseñó",
    "themeObjective": "Comprender las enseñanzas de Jesús sobre el amor, el perdón, la confianza y la oración en nuestras relaciones.",
    "readingsOld": [
      {
        "label": "Salmo 23:4",
        "book": "Salmos",
        "chapter": 23,
        "start": 4,
        "end": 4
      },
      {
        "label": "Salmo 42:5–6",
        "book": "Salmos",
        "chapter": 42,
        "start": 5,
        "end": 6
      }
    ],
    "readingsNew": [
      {
        "label": "Marcos 8:31",
        "book": "Marcos",
        "chapter": 8,
        "start": 31,
        "end": 31
      },
      {
        "label": "Marcos 10:33–45",
        "book": "Marcos",
        "chapter": 10,
        "start": 33,
        "end": 45
      },
      {
        "label": "Marcos 14:32–42",
        "book": "Marcos",
        "chapter": 14,
        "start": 32,
        "end": 42
      },
      {
        "label": "Lucas 1:26–33",
        "book": "Lucas",
        "chapter": 1,
        "start": 26,
        "end": 33
      },
      {
        "label": "Lucas 2:34–35",
        "book": "Lucas",
        "chapter": 2,
        "start": 34,
        "end": 35
      }
    ],
    "paragraphs": [
      "Antes de su arresto, en el huerto de Getsemaní, Jesús vive una de las horas más difíciles que narran los Evangelios. Sabe que se aproxima el sufrimiento. Marcos cuenta que se atemoriza y se angustia profundamente. Pide a sus discípulos que permanezcan cerca y se aparta para orar. No es una escena de alguien incapaz de sentir dolor, sino de Jesús afrontando una experiencia humana real. Su temor no desaparece por conocer a Dios Padre.",
      "Jesús ya había anunciado a sus discípulos que sufriría, moriría y resucitaría. También había hablado de su misión de servir y entregar la vida por muchos, entrega que la fe cristiana comprende como parte de su obra salvadora y redentora. En Getsemaní expresa al Padre su deseo de que aquella hora pase, pero termina confiándose a su voluntad. Su fe no niega el miedo: lo lleva a la oración.",
      "Su madre María también había recibido anuncios sobre el futuro de Jesús. El ángel Gabriel le anunció la identidad y el reinado de su hijo. Más adelante, Simeón le habló de oposición y de un dolor que atravesaría su propia alma. La Biblia no afirma que María conociera de antemano todos los detalles del arresto o de la crucifixión. Esta distinción nos permite comprender su experiencia sin añadir hechos que los Evangelios no narran.",
      "La confianza que Jesús enseña no nos exige fingir valentía ni ocultar el sufrimiento. Podemos tener miedo, pedir compañía, buscar ayuda y acudir al Padre. Al acompañar a alguien que sufre, también podemos ofrecer escucha y presencia. La fe no promete una vida sin dificultades; invita a atravesarlas sin renunciar a la esperanza.",
      "Un salmo habla de confianza incluso al atravesar un valle oscuro; otro salmo muestra una esperanza que convive con la tristeza. Esas oraciones ayudan a comprender Getsemaní, aunque Marcos no afirma que Jesús las citara allí."
    ],
    "question": "¿Podemos tener miedo y seguir confiando en Dios?",
    "questionKind": "debate"
  },
  {
    "id": "cap-08",
    "number": 8,
    "title": "Orar como Jesús nos enseñó",
    "themeId": 2,
    "themeTitle": "Aprender a amar y confiar como Jesús enseñó",
    "themeObjective": "Comprender las enseñanzas de Jesús sobre el amor, el perdón, la confianza y la oración en nuestras relaciones.",
    "readingsOld": [
      {
        "label": "Salmo 103:1–5",
        "book": "Salmos",
        "chapter": 103,
        "start": 1,
        "end": 5
      },
      {
        "label": "Proverbios 30:8–9",
        "book": "Proverbios",
        "chapter": 30,
        "start": 8,
        "end": 9
      }
    ],
    "readingsNew": [
      {
        "label": "Lucas 11:1–4",
        "book": "Lucas",
        "chapter": 11,
        "start": 1,
        "end": 4
      },
      {
        "label": "Mateo 6:9–13",
        "book": "Mateo",
        "chapter": 6,
        "start": 9,
        "end": 13
      },
      {
        "label": "Marcos 1:35",
        "book": "Marcos",
        "chapter": 1,
        "start": 35,
        "end": 35
      },
      {
        "label": "Marcos 11:25",
        "book": "Marcos",
        "chapter": 11,
        "start": 25,
        "end": 25
      }
    ],
    "paragraphs": [
      "Los discípulos vieron a Jesús orar y uno de ellos le pidió que les enseñara. El Evangelio de Lucas conserva esa escena y una forma del Padre Nuestro. Mateo presenta otra versión de la misma oración, con algunas diferencias de redacción y extensión según los manuscritos y traducciones. Marcos no recoge una versión del Padre Nuestro, pero sí muestra a Jesús orando a solas y enseñando sobre la oración y el perdón. Leer estas fuentes juntas nos ayuda a comprender su enseñanza sin confundir los textos.",
      "Al comenzar por el Padre y santificar su nombre, reconocemos la grandeza de Dios y nos dirigimos a él con gratitud y confianza. Cuando pedimos que venga su Reino, podemos abrir nuestro corazón a su amor, su justicia y su paz. Pero el Reino no se reduce a un sentimiento interior: también orienta nuestra manera de vivir y tratar a los demás.",
      "Al pedir el pan de cada día, confiamos a Dios nuestras necesidades reales y recordamos a quienes necesitan alimento y cuidado. También podemos pensar en el alimento interior que sostiene nuestra vida: amor, esperanza y fortaleza. Esta reflexión espiritual complementa, pero no reemplaza, el sentido concreto del pan.",
      "Al pedir perdón, reconocemos nuestros errores y recordamos que también estamos llamados a perdonar. Después de conocer su enseñanza sobre la misericordia, el Padre Nuestro nos invita a llevar el perdón también a nuestra oración. Finalmente, al pedir no caer en tentación y ser librados del mal, solicitamos ayuda para apartarnos de las malas intenciones y de las decisiones que dañan a otros. Así, la oración une la alabanza a Dios con el deseo de vivir mejor.",
      "Un salmo expresa alabanza y gratitud a Dios; el libro de Proverbios pide el pan necesario. Ambas oraciones muestran raíces antiguas de la alabanza y del sustento cotidiano que encontramos en el Padre Nuestro."
    ],
    "question": "¿Qué cambia cuando comprendemos lo que pedimos al orar?",
    "questionKind": "debate"
  },
  {
    "id": "cap-09",
    "number": 9,
    "title": "Jesús anuncia buenas noticias y esperanza",
    "themeId": 3,
    "themeTitle": "Seguir el ejemplo de Jesús en el mundo",
    "themeObjective": "Estudiar cómo Jesús manifestó su amor en acciones de esperanza, justicia, servicio, humildad y paz.",
    "readingsOld": [
      {
        "label": "Isaías 61:1–2",
        "book": "Isaías",
        "chapter": 61,
        "start": 1,
        "end": 2
      }
    ],
    "readingsNew": [
      {
        "label": "Lucas 4:16–21",
        "book": "Lucas",
        "chapter": 4,
        "start": 16,
        "end": 21
      }
    ],
    "paragraphs": [
      "En la sinagoga de Nazaret, Lucas cuenta que Jesús leyó un pasaje de Isaías y habló de buenas noticias para los pobres, libertad y restauración. Después anunció que aquella Escritura se cumplía ante quienes lo escuchaban. La escena permite comprender cómo Jesús presentó públicamente su misión: no como una enseñanza separada de la vida de las personas, sino relacionada con quienes sufrían y esperaban un cambio.",
      "La esperanza que aparece aquí no debe confundirse con una promesa de que toda dificultad terminará de inmediato. El mensaje de Jesús dirige la mirada hacia quienes suelen quedar al margen y plantea una nueva manera de reconocer su dignidad. Comprender su anuncio exige atender al texto de Isaías y a la reacción de sus oyentes. La buena noticia también nos ayuda a preguntarnos a quién estamos dejando de escuchar en nuestra comunidad."
    ],
    "question": "¿Dónde hace falta esperanza a mi alrededor?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-10",
    "number": 10,
    "title": "Justicia y servicio a quienes lo necesitan",
    "themeId": 3,
    "themeTitle": "Seguir el ejemplo de Jesús en el mundo",
    "themeObjective": "Estudiar cómo Jesús manifestó su amor en acciones de esperanza, justicia, servicio, humildad y paz.",
    "readingsOld": [
      {
        "label": "Isaías 58:6–10",
        "book": "Isaías",
        "chapter": 58,
        "start": 6,
        "end": 10
      },
      {
        "label": "Deuteronomio 15:7–11",
        "book": "Deuteronomio",
        "chapter": 15,
        "start": 7,
        "end": 11
      }
    ],
    "readingsNew": [
      {
        "label": "Marcos 6:30–44",
        "book": "Marcos",
        "chapter": 6,
        "start": 30,
        "end": 44
      }
    ],
    "paragraphs": [
      "Marcos relata que Jesús y sus discípulos buscaban descansar, pero una multitud llegó hasta ellos. Jesús vio a las personas, sintió compasión y comenzó a enseñarles. Más tarde, cuando llegó la hora de comer, los discípulos propusieron despedirlas. Jesús los involucró en la atención de aquella necesidad y el Evangelio narra la distribución del alimento entre todos.",
      "La escena une enseñanza y cuidado concreto. Jesús no trata a la multitud como un problema que interrumpe sus planes: reconoce su necesidad. Sus discípulos también participan, aunque al principio creen que no tienen recursos suficientes. Este episodio nos invita a pensar en la justicia y el servicio desde la responsabilidad compartida. Ayudar no es hacer sentir inferior a otra persona ni decidir por ella; es reconocer su dignidad y actuar con consideración. El amor se vuelve visible cuando atendemos necesidades reales con respeto.",
      "El profeta Isaías une la justicia con compartir el pan y atender al necesitado; el Deuteronomio invita a abrir la mano ante la pobreza. Marcos no dice que Jesús los citara al alimentar a la multitud: la relación es de continuidad ética."
    ],
    "question": "¿A quién podría ayudar con respeto?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-11",
    "number": 11,
    "title": "La humildad y el liderazgo que sirve",
    "themeId": 3,
    "themeTitle": "Seguir el ejemplo de Jesús en el mundo",
    "themeObjective": "Estudiar cómo Jesús manifestó su amor en acciones de esperanza, justicia, servicio, humildad y paz.",
    "readingsOld": [
      {
        "label": "Miqueas 6:8",
        "book": "Miqueas",
        "chapter": 6,
        "start": 8,
        "end": 8
      },
      {
        "label": "Isaías 42:1–4",
        "book": "Isaías",
        "chapter": 42,
        "start": 1,
        "end": 4
      }
    ],
    "readingsNew": [
      {
        "label": "Juan 13:1–17",
        "book": "Juan",
        "chapter": 13,
        "start": 1,
        "end": 17
      },
      {
        "label": "Marcos 10:42–45",
        "book": "Marcos",
        "chapter": 10,
        "start": 42,
        "end": 45
      }
    ],
    "paragraphs": [
      "Durante una cena con sus discípulos, Jesús se levanta, toma una toalla y les lava los pies. El Evangelio de Juan presenta la sorpresa de Pedro y la explicación posterior de Jesús. Quien era reconocido como Maestro y Señor realiza una tarea humilde. El Evangelio no nos pide imaginar esta escena: la narra como una acción concreta que los discípulos tuvieron que aprender a interpretar.",
      "En otra enseñanza, Jesús también contrapone el dominio ejercido por los poderosos con el servicio al que llama a sus seguidores. Ambas escenas muestran una enseñanza coherente: la autoridad no debería utilizarse para engrandecerse a costa de otros. Servir significa hacerse responsable del bienestar ajeno, sin perder la dignidad propia ni exigir sumisión a quien recibe ayuda. En la familia, en un grupo o en una comunidad, el liderazgo puede reconocerse por el modo en que escucha, cuida y comparte responsabilidades.",
      "Miqueas reúne justicia, misericordia y humildad; Isaías describe a un siervo atento a los débiles. Estos textos enriquecen el análisis del servicio de Jesús, sin atribuirle citas que Juan no registra."
    ],
    "question": "¿Qué cambia cuando quien dirige también sirve?",
    "questionKind": "debate"
  },
  {
    "id": "cap-12",
    "number": 12,
    "title": "La paz y la reconciliación",
    "themeId": 3,
    "themeTitle": "Seguir el ejemplo de Jesús en el mundo",
    "themeObjective": "Estudiar cómo Jesús manifestó su amor en acciones de esperanza, justicia, servicio, humildad y paz.",
    "readingsOld": [
      {
        "label": "Salmo 34:14",
        "book": "Salmos",
        "chapter": 34,
        "start": 14,
        "end": 14
      },
      {
        "label": "Proverbios 15:1",
        "book": "Proverbios",
        "chapter": 15,
        "start": 1,
        "end": 1
      }
    ],
    "readingsNew": [
      {
        "label": "Mateo 5:9",
        "book": "Mateo",
        "chapter": 5,
        "start": 9,
        "end": 9
      },
      {
        "label": "Mateo 5:23–24",
        "book": "Mateo",
        "chapter": 5,
        "start": 23,
        "end": 24
      },
      {
        "label": "Lucas 22:47–51",
        "book": "Lucas",
        "chapter": 22,
        "start": 47,
        "end": 51
      }
    ],
    "paragraphs": [
      "Jesús llama bienaventurados a quienes trabajan por la paz. También enseña a tomar en serio las relaciones dañadas: invita a buscar la reconciliación antes de continuar con una ofrenda. Pero su enseñanza no se queda en palabras. Durante su arresto uno de los presentes hiere a un hombre; Jesús interviene para detener la violencia y sana al herido.",
      "La paz de la que habla Jesús no equivale a fingir que nunca ocurrió una injusticia. Requiere atención al daño, responsabilidad y respeto por las personas. Una reconciliación auténtica no puede imponerse ni sustituir la protección de quien está en peligro. Podemos buscar caminos de diálogo y reparación sin exigir que alguien vuelva a una relación abusiva. La actitud de Jesús ante la violencia nos invita a comprender que construir paz implica cuidar la vida y la dignidad de todos.",
      "Un salmo llama a buscar la paz, mientras el libro de Proverbios recuerda que una respuesta serena puede reducir el enojo. Son enseñanzas de Israel que ayudan a pensar las acciones de Jesús ante el conflicto."
    ],
    "question": "¿Cómo construimos la paz sin ocultar una injusticia?",
    "questionKind": "debate"
  },
  {
    "id": "cap-13",
    "number": 13,
    "title": "Jesús, nuestro Salvador",
    "themeId": 4,
    "themeTitle": "Comprender el legado de Jesús y vivirlo",
    "themeObjective": "Comprender su entrega, la esperanza cristiana y cómo seguir aprendiendo a amar con hechos.",
    "readingsOld": [
      {
        "label": "Isaías 53:4–6",
        "book": "Isaías",
        "chapter": 53,
        "start": 4,
        "end": 6
      },
      {
        "label": "Salmo 22:1",
        "book": "Salmos",
        "chapter": 22,
        "start": 1,
        "end": 1
      }
    ],
    "readingsNew": [
      {
        "label": "Lucas 19:1–10",
        "book": "Lucas",
        "chapter": 19,
        "start": 1,
        "end": 10
      },
      {
        "label": "Marcos 10:45",
        "book": "Marcos",
        "chapter": 10,
        "start": 45,
        "end": 45
      },
      {
        "label": "Marcos 15:21–39",
        "book": "Marcos",
        "chapter": 15,
        "start": 21,
        "end": 39
      }
    ],
    "paragraphs": [
      "En Jericó, Jesús se acerca a Zaqueo, un recaudador de impuestos rechazado por muchos. El Evangelio relata que ese encuentro da lugar a una decisión concreta: Zaqueo habla de compartir sus bienes y devolver lo obtenido injustamente. Jesús presenta su misión como la búsqueda de quienes estaban perdidos. La salvación aparece así relacionada con el encuentro, la transformación y la reparación del daño.",
      "Los Evangelios también muestran a Jesús hablando de entregar su vida y narran su muerte en la cruz. La fe cristiana interpreta esa entrega como central para comprender la salvación. Es importante distinguir lo que cuentan los textos de la explicación teológica que los creyentes desarrollan a partir de ellos. Jesús no es presentado solamente como alguien que enseña normas: su vida y su entrega ocupan un lugar decisivo en el mensaje cristiano. Estudiar la salvación exige tiempo, preguntas y respeto por la profundidad del tema.",
      "La tradición cristiana relaciona las palabras de Isaías, sobre el siervo que sufre, con la entrega salvadora de Jesús. En la cruz, además, Jesús pronuncia el comienzo de un salmo: esta última conexión aparece expresamente en el relato."
    ],
    "question": "¿Qué significa para mí que Jesús hablara de salvar?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-14",
    "number": 14,
    "title": "La resurrección y la esperanza cristiana",
    "themeId": 4,
    "themeTitle": "Comprender el legado de Jesús y vivirlo",
    "themeObjective": "Comprender su entrega, la esperanza cristiana y cómo seguir aprendiendo a amar con hechos.",
    "readingsOld": [
      {
        "label": "Salmo 16:8–11",
        "book": "Salmos",
        "chapter": 16,
        "start": 8,
        "end": 11
      }
    ],
    "readingsNew": [
      {
        "label": "Lucas 24:1–35",
        "book": "Lucas",
        "chapter": 24,
        "start": 1,
        "end": 35
      },
      {
        "label": "Hechos 2:25–32",
        "book": "Hechos",
        "chapter": 2,
        "start": 25,
        "end": 32
      }
    ],
    "paragraphs": [
      "El Evangelio de Lucas relata que unas mujeres fueron al sepulcro y lo encontraron vacío. Cuando contaron lo ocurrido, algunos discípulos no creyeron su testimonio. Más adelante, el mismo capítulo presenta a dos seguidores camino a Emaús, confundidos por la muerte de Jesús. El relato muestra que la esperanza pascual no surgió en personas que nunca habían sentido tristeza o incertidumbre.",
      "La resurrección es una afirmación central de la fe cristiana y los Evangelios la transmiten mediante sus testimonios narrativos. En el libro de los Hechos, Pedro interpreta la resurrección a la luz de un salmo: esa es ya la predicación de un discípulo, no una frase pronunciada por Jesús durante su ministerio. Comprender esta diferencia ayuda a leer con cuidado. La esperanza cristiana no obliga a negar las pérdidas; propone mirar la vida y la muerte desde la convicción de que la historia de Jesús no terminó en la cruz.",
      "Ese salmo expresa confianza en que Dios no abandona a quien se encomienda a él. Su lectura en Hechos muestra cómo los primeros cristianos volvieron a las antiguas Escrituras para comprender los acontecimientos de Pascua."
    ],
    "question": "¿Qué preguntas me despierta el anuncio de la resurrección?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-15",
    "number": 15,
    "title": "Permanecer en Jesús y dar fruto",
    "themeId": 4,
    "themeTitle": "Comprender el legado de Jesús y vivirlo",
    "themeObjective": "Comprender su entrega, la esperanza cristiana y cómo seguir aprendiendo a amar con hechos.",
    "readingsOld": [
      {
        "label": "Jeremías 17:7–8",
        "book": "Jeremías",
        "chapter": 17,
        "start": 7,
        "end": 8
      },
      {
        "label": "Salmo 1:1–3",
        "book": "Salmos",
        "chapter": 1,
        "start": 1,
        "end": 3
      }
    ],
    "readingsNew": [
      {
        "label": "Juan 15:1–12",
        "book": "Juan",
        "chapter": 15,
        "start": 1,
        "end": 12
      }
    ],
    "paragraphs": [
      "Jesús utiliza la imagen de una vid y sus ramas para hablar de la relación con sus discípulos. Una rama no da fruto separada de aquello que le permite vivir. Con esta comparación, Jesús invita a permanecer en él y en su amor. Se trata de una imagen de enseñanza, no de un episodio agrícola que debamos reconstruir como hecho biográfico.",
      "El sentido de permanecer no se reduce a repetir palabras religiosas. En el mismo pasaje, Jesús relaciona esa permanencia con guardar sus mandamientos y amarse unos a otros. Los frutos pueden reconocerse en decisiones que cuidan la dignidad de las personas, en relaciones más responsables y en un servicio sincero. Nadie puede medir toda la vida interior de otra persona por su apariencia. Por eso, antes de juzgar al prójimo, conviene examinar qué produce nuestra propia manera de vivir.",
      "Jeremías y uno de los salmos utilizan la imagen de árboles que reciben sustento y dan fruto. Esa semejanza ayuda a estudiar la imagen de la vid que enseña Jesús, sin afirmar que Jesús estuviera citando esos pasajes."
    ],
    "question": "¿Cómo reconocemos el fruto de una enseñanza?",
    "questionKind": "debate"
  },
  {
    "id": "cap-16",
    "number": 16,
    "title": "Vivir lo aprendido: amar con hechos",
    "themeId": 4,
    "themeTitle": "Comprender el legado de Jesús y vivirlo",
    "themeObjective": "Comprender su entrega, la esperanza cristiana y cómo seguir aprendiendo a amar con hechos.",
    "readingsOld": [
      {
        "label": "Levítico 19:34",
        "book": "Levítico",
        "chapter": 19,
        "start": 34,
        "end": 34
      },
      {
        "label": "Proverbios 3:27–28",
        "book": "Proverbios",
        "chapter": 3,
        "start": 27,
        "end": 28
      }
    ],
    "readingsNew": [
      {
        "label": "Juan 13:34–35",
        "book": "Juan",
        "chapter": 13,
        "start": 34,
        "end": 35
      },
      {
        "label": "Mateo 7:24–27",
        "book": "Mateo",
        "chapter": 7,
        "start": 24,
        "end": 27
      },
      {
        "label": "Santiago 2:14–17",
        "book": "Santiago",
        "chapter": 2,
        "start": 14,
        "end": 17
      }
    ],
    "paragraphs": [
      "Después de recorrer las enseñanzas y acciones de Jesús, volvemos a una invitación fundamental: amar a los demás como él enseñó. No necesitamos repetir aquí todo lo estudiado. Ahora podemos reunirlo: la misericordia ante los errores, el cuidado de quien sufre, la humildad al servir, la paz que protege y la esperanza que acompaña.",
      "En una de sus enseñanzas, Jesús compara a quien escucha y pone en práctica sus palabras con alguien que construye sobre una base firme. Más adelante, la carta de Santiago insistirá, desde la enseñanza de la comunidad cristiana, en que la fe no debe quedar separada de las obras. En nuestra vida cotidiana, ese aprendizaje puede tomar forma al escuchar a un familiar, respetar a un hermano, reparar una injusticia o ayudar sin buscar reconocimiento. No se trata de hacer algo espectacular: se trata de practicar el amor con constancia, libertad y responsabilidad.",
      "El Levítico llama a amar al extranjero como a uno mismo; el libro de Proverbios invita a no postergar el bien que podemos hacer. Son nuevas claves para seguir explorando el amor práctico que enseñó Jesús.",
      "Este recorrido termina aquí, pero el estudio de Jesús continúa. Los Evangelios guardan otros encuentros, conversaciones y enseñanzas por descubrir. Podemos volver a abrirlos, investigar nuevas conexiones con las Escrituras de Israel y encontrar, con cada lectura, maneras más conscientes de amar. La última página no cierra el camino: invita a seguir aprendiendo."
    ],
    "question": "¿Cómo seguimos aprendiendo a amar como Jesús?",
    "questionKind": "debate"
  }
];
