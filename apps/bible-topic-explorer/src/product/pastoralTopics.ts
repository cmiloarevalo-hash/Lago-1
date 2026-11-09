/** Guía pastoral - Biblia — versión editorial 1.30, 16 capítulos, 4 temas.
 * SOURCE OF TRUTH: docs/guia-pastoral/Guia_Pastoral_El_camino_de_Jesus_y_sus_ensenanzas_v1.30.docx
 * Original SHA-256: B44ECF5AA4FCF78CE852C8A0FB0A6335452DA5779207657E4E3142F0B935FB59
 * The prose and reflection questions below are transcribed verbatim from the author-supplied DOCX.
 * Reference labels are separated into explicit same-chapter ranges for offline navigation.
 */
export const PASTORAL_GUIDE_VERSION='1.30';
export const PASTORAL_GUIDE_TITLE='Guía pastoral - Biblia';
export const PASTORAL_GUIDE_SUBTITLE='El camino de Jesús y sus enseñanzas';
export const PASTORAL_GUIDE_INTRO="Estas páginas invitan a conocer a Jesús a través de sus palabras, sus encuentros y sus acciones. Jesús conoció las Escrituras que hoy forman el Antiguo Testamento y enseñó a descubrir el amor de Dios Padre. Cada capítulo ofrece lecturas bíblicas del Antiguo y Nuevo Testamento, una reflexión cercana y una pregunta para seguir aprendiendo.";
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
      "La Biblia no fue escrita de una sola vez. Reúne textos de diversas épocas: relatos, leyes, poemas, oraciones, enseñanzas y testimonios de fe. Los textos que hoy llamamos Antiguo Testamento existían antes de Jesús. Los escritos del Nuevo Testamento surgieron después de su vida pública, en las primeras comunidades cristianas. Conocer este origen nos ayuda a entender por qué la Biblia reúne voces y géneros diferentes. En sus páginas encontramos relatos como el de Noé y los patriarcas, la historia de un pueblo que busca a Dios, la voz de los profetas y las oraciones de los salmos. Muchos de esos textos se transmitieron a lo largo de siglos.",
      "Un salmo presenta la palabra de Dios como una luz que orienta el camino. Jesús conocía esas Escrituras: se refiere a la Ley de Moisés, los Profetas y los Salmos, y ayuda a sus discípulos a comprenderlos. También advierte sobre el error de no entender las Escrituras. Por eso, antes de sacar conclusiones de un pasaje, conviene conocer quién habla, a quién se dirige y qué sucede. La Biblia se comprende mejor cuando la leemos con atención y respeto por su contexto.",
      "Cuando una palabra bíblica resulta desconocida, no necesitamos fingir que la entendemos. Podemos detenernos, buscar qué significa y volver a leer el relato. Por ejemplo, un profeta era una persona que comunicaba un mensaje de Dios a su pueblo; un salmo es una oración o un canto. Si abrimos el Evangelio de Lucas, podemos leer primero quién está hablando y después buscar el pasaje del Antiguo Testamento que se menciona. Así vamos comprendiendo, paso a paso, sin sentir que debemos saberlo todo antes de comenzar.",
      "En tiempos de Nehemías, el pueblo escuchó las Escrituras y recibió ayuda para comprender lo leído. Mucho después, Jesús las conoció y las explicó a sus discípulos, mostrándoles cómo podían iluminar su camino. Leer la Biblia es entrar en esa historia de búsqueda, confianza y encuentro con Dios."
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
      "Jeremías había anunciado una nueva alianza: Dios prometía poner su enseñanza en el corazón de su pueblo, darse a conocer y perdonar sus faltas. En la última cena, Jesús habló de la nueva alianza al compartir la copa con sus discípulos. Para los cristianos, la entrega de Jesús y su resurrección iluminan esa promesa. La nueva alianza no significa que Dios deje de amar al pueblo de Israel ni que su antigua historia pierda valor. El Nuevo Testamento surge de la experiencia de quienes siguieron a Jesús y entendieron su vida, muerte y resurrección a la luz de los textos del Antiguo Testamento. Conocer ambas partes ayuda a evitar interpretaciones apresuradas.",
      "La palabra alianza significa un vínculo de compromiso. En estos pasajes, Dios toma la iniciativa de acercarse a su pueblo y lo llama a vivir en fidelidad. Jeremías anuncia que su enseñanza no quedará solamente escrita: también podrá ser acogida en el corazón. Al leer la última cena, conviene recordar esa promesa y preguntarnos qué significa para nosotros recibir el perdón y responder con amor. Un joven puede empezar por reconocer una falta, pedir disculpas y cumplir una promesa hecha a otra persona. Así, lo que leemos comienza a orientar nuestras decisiones.",
      "En el Éxodo, la alianza recuerda el compromiso de Dios con su pueblo. Al hablar de una nueva alianza en la última cena, Jesús se sitúa dentro de esa historia de fidelidad y abre a sus discípulos un camino de confianza, perdón y vida compartida con Dios."
    ],
    "question": "¿Qué cambia en mí cuando descubro que Jesús conocía el Antiguo Testamento?",
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
        "label": "Mateo 5:17",
        "book": "Mateo",
        "chapter": 5,
        "start": 17,
        "end": 17
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
      "Los Evangelios presentan a Jesús como un maestro que no se limita a repetir palabras conocidas. Tras cuarenta días en el desierto, Jesús afronta las tentaciones y responde con palabras del Deuteronomio. Cuando se le invita a convertir una piedra en pan, recuerda que la vida no se sostiene solamente con alimento, sino también con la palabra de Dios. Sus respuestas muestran que las Escrituras forman parte de su manera de comprender las decisiones y la fidelidad a Dios. No son adornos para ganar una discusión.",
      "El Deuteronomio es uno de los libros del Antiguo Testamento. Al citarlo, Jesús muestra que una enseñanza recibida puede sostener una decisión difícil. En el relato del desierto no se nos pide imaginar conversaciones nuevas: basta observar que Jesús responde a cada tentación apoyándose en lo que conoce de la palabra de Dios. También nosotros podemos detenernos antes de actuar y recordar una enseñanza que nos ayude a elegir con responsabilidad.",
      "En otra ocasión, Jesús recuerda el mandamiento «No matarás», conocido desde la Ley de Moisés. Luego invita a mirar el corazón: el desprecio y la ira también pueden herir nuestras relaciones. Jesús no se conforma con que evitemos hacer daño; enseña a cultivar el respeto y a buscar la reconciliación. Así, las Escrituras se convierten en una guía para nuestras decisiones de cada día.",
      "Pensemos en una discusión entre compañeros. Tal vez nadie llegue a golpear a otro, pero las burlas, los insultos y el desprecio también pueden lastimar. La enseñanza de Jesús nos invita a reconocer ese daño, dejar de alimentarlo y buscar una forma justa de hablar. Podemos comenzar por escuchar, admitir una palabra hiriente o pedir ayuda para reconciliarnos. Aprender las Escrituras no consiste solo en recordarlas: significa permitir que orienten lo que hacemos cuando estamos enojados.",
      "En el desierto y al enseñar a la multitud, Jesús vuelve a las Escrituras que conoce desde su pueblo. Sus palabras nos animan a leerlas con atención y a llevar a la vida el amor y el respeto que enseñan."
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
      },
      {
        "label": "Génesis 1:27",
        "book": "Génesis",
        "chapter": 1,
        "start": 27,
        "end": 27
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
      "Lucas explica que se acercaban a Jesús personas rechazadas por su conducta o por la manera en que otros las juzgaban. Algunos fariseos y maestros de la Ley lo criticaban porque las recibía y compartía la mesa con ellas. Para responder, Jesús contó varias historias sobre la alegría de recuperar lo perdido. Una de ellas es conocida como la parábola del hijo pródigo, aunque también podemos llamarla la parábola del padre y sus dos hijos. Conocer ese comienzo nos permite entender mejor por qué Jesús habló del perdón.",
      "Con esta historia Jesús nos acerca al corazón de Dios Padre. El hijo vuelve reconociendo que se equivocó y, antes de que pueda explicarlo todo, su padre corre a recibirlo. El amor no borra las consecuencias de las decisiones, pero tampoco reduce a una persona a sus errores. Y mientras el hermano mayor se resiste a celebrar, el padre lo invita también a participar de la alegría. Jesús muestra así que el perdón abre una puerta para comenzar de nuevo.",
      "El Salmo 103 habla de la compasión de Dios como la de un padre por sus hijos; Oseas recuerda su ternura hacia Israel. En la parábola del padre y sus dos hijos, Jesús nos ayuda a descubrir a un Padre fiel, que no deja de amar y recibe con los brazos abiertos a quien vuelve a él.",
      "Cuando Jesús llama Padre a Dios, nos invita a confiar en su cuidado y su misericordia; no está diciendo que Dios sea un padre humano. La Biblia presenta a Dios como creador de la vida y cercano a las personas. Si alguien se equivoca en casa o con sus amistades, esta parábola enseña a reconocer el error y buscar un nuevo comienzo. También nos desafía a no cerrar la puerta a quien desea cambiar. Acoger con amor no significa justificar el daño: significa ofrecer una oportunidad para repararlo."
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
      },
      {
        "label": "Mateo 14:14",
        "book": "Mateo",
        "chapter": 14,
        "start": 14,
        "end": 14
      },
      {
        "label": "Juan 13:34–35",
        "book": "Juan",
        "chapter": 13,
        "start": 34,
        "end": 35
      }
    ],
    "paragraphs": [
      "Un escriba preguntó a Jesús cuál era el mandamiento principal. Jesús citó expresamente dos mandamientos del Antiguo Testamento: amar a Dios y amar al prójimo. No presentó el amor como una emoción pasajera, sino como una orientación profunda para la vida. Amar a Dios con todo el corazón se refleja en el modo en que escuchamos, respetamos y ayudamos a los demás. La manera de relacionarnos con Dios no puede separarse de la manera en que tratamos a las personas.",
      "En la parábola del buen samaritano, Jesús habla de un hombre herido al borde del camino. Quien se detiene a atenderlo es un samaritano, alguien de quien algunos oyentes no habrían esperado ese gesto. El cuidado no nace de una etiqueta ni de una apariencia, sino de la compasión que se convierte en ayuda. Para nosotros, amar puede expresarse al escuchar en casa, compartir con un hermano, respetar a quien piensa distinto o acompañar a alguien que necesita ayuda. El amor no exige aceptar malos tratos; reconoce la dignidad de todos, incluida la propia.",
      "En tiempos de Jesús existían tensiones entre judíos y samaritanos. Por eso resulta importante que sea precisamente un samaritano quien se detenga ante el hombre herido: la ayuda supera una división que muchos daban por sentada. La enseñanza puede reconocerse hoy cuando vemos que excluyen a un compañero por su origen, su aspecto o sus creencias. Amar al prójimo puede comenzar por acercarnos sin burlas, escucharlo y buscar apoyo si alguien lo está lastimando. Jesús nos enseña que la dignidad de una persona nunca depende únicamente del grupo al que pertenece ni de cuánto se parece a nosotros.",
      "Cuando Jesús vio a una multitud necesitada, también sintió compasión por ella. Y al pedir a sus discípulos que se amen unos a otros como él los ha amado, les dejó una señal sencilla para reconocerse: el amor que se demuestra con hechos."
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
      "Pedro pregunta a Jesús cuántas veces debe perdonar. Jesús le enseña que el perdón no se cuenta como si tuviera un límite. Entonces narra la historia de un siervo al que se le perdona una gran deuda, pero que después se niega a tener misericordia con otro que le debe mucho menos. Quien ha recibido compasión también está llamado a ofrecerla. Durante la crucifixión, el Evangelio recoge la súplica de Jesús al Padre por el perdón de quienes lo estaban haciendo sufrir. Sus enseñanzas y sus acciones nos invitan a no responder al daño con más daño.",
      "Jesús también nos ayuda a comprender el perdón de Dios. En la parábola del hijo que regresa, el padre lo acoge con alegría. El sentido de aquella enseñanza resulta especialmente claro: la misericordia de Dios está abierta a todas las personas, sin excluir a nadie por su pasado. Recibir ese perdón se relaciona con reconocer los errores, arrepentirse y abrirse al cambio. El perdón no convierte en correcto el daño cometido; ofrece la posibilidad de comenzar de nuevo.",
      "Podemos llevar esta enseñanza a la oración con palabras sencillas: «Padre, reconozco lo que hice mal y te pido perdón; ayúdame a cambiar». La sinceridad del corazón es importante, pero no convierte el perdón en una frase automática. Si herimos a alguien, también podemos pedirle disculpas y reparar lo que esté en nuestras manos. Jesús nos invita a confiar en la misericordia de Dios y a responder con hechos, sin perder de vista la justicia ni el cuidado de quienes sufrieron.",
      "¿Cómo se practica esto cada día? En la familia, admitir una respuesta hiriente y pedir disculpas. Entre hermanos, escuchar el daño causado y reparar lo posible. Con el prójimo, evitar la venganza y buscar una respuesta justa. Perdonar no exige olvidar, recuperar automáticamente la confianza ni convivir con quien ejerce violencia. El amor y la misericordia también protegen la dignidad y la seguridad de las personas.",
      "Miqueas presenta a Dios como quien se complace en la misericordia, y el Salmo 103 celebra su compasión. Jesús hace visible ese mismo amor: Dios puede perdonarnos, darnos fuerzas para cambiar y enseñarnos a tratar a los demás con una misericordia que no renuncia a la justicia."
    ],
    "question": "¿Cómo puedo practicar el perdón cada día?",
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
      "Antes de su arresto, en el huerto de Getsemaní, Jesús vive una de las horas más difíciles que narran los Evangelios. Sabe que se aproxima el sufrimiento. Marcos cuenta que se atemoriza y se angustia profundamente. Pide a sus discípulos que permanezcan cerca y se aparta para orar. Jesús siente miedo y tristeza, como puede sentirlos cualquiera de nosotros en una situación difícil. Precisamente en ese momento se vuelve al Padre en oración. Su confianza no borra el dolor, pero lo acompaña.",
      "Jesús ya había anunciado a sus discípulos que sufriría, moriría y resucitaría. También había hablado de su misión de servir y entregar la vida por muchos, entrega que la fe cristiana comprende como parte de su obra salvadora y redentora. En Getsemaní expresa al Padre su deseo de que aquella hora pase, pero termina confiándose a su voluntad. Su fe no niega el miedo: lo lleva a la oración.",
      "María también vivió su camino de fe entre promesas y momentos dolorosos. Gabriel le anunció quién sería su hijo y Simeón le habló de oposición y de un dolor que atravesaría su alma. Ella recibió aquellas palabras sin conocer todo lo que vendría después. Su historia nos recuerda que confiar en Dios no significa tener todas las respuestas, sino seguir caminando aun cuando el futuro es incierto.",
      "La confianza que Jesús enseña no nos exige fingir valentía ni ocultar el sufrimiento. Podemos tener miedo, pedir compañía, buscar ayuda y acudir al Padre. Al acompañar a alguien que sufre, también podemos ofrecer escucha y presencia. La fe no promete una vida sin dificultades; invita a atravesarlas sin renunciar a la esperanza.",
      "Un joven puede vivir esta confianza al decir en oración: «Padre, tengo miedo y necesito ayuda». También puede hablar con una persona de confianza y buscar compañía. Pedir apoyo no disminuye la fe; permite atravesar la dificultad con esperanza.",
      "El Salmo 23 habla de un Dios que acompaña incluso en el valle oscuro; el Salmo 42 muestra cómo una persona triste puede seguir poniendo su esperanza en él. Son palabras de oración que nos ayudan a comprender por qué Jesús, en Getsemaní, busca al Padre cuando más necesita fortaleza."
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
      "Los discípulos veían a Jesús orar. Un día, uno de ellos le pidió: «Señor, enséñanos a orar». Lucas cuenta aquel encuentro y, junto con Mateo, nos transmite el Padre Nuestro. Marcos también presenta a Jesús buscando momentos de oración y enseñando a perdonar. En estas escenas descubrimos que orar es acercarnos a Dios Padre con confianza, no repetir palabras sin comprenderlas.",
      "Al comenzar por el Padre y santificar su nombre, reconocemos la grandeza de Dios y nos dirigimos a él con gratitud y confianza. Cuando pedimos que venga su Reino, podemos abrir nuestro corazón a su amor, su justicia y su paz. Pero el Reino no se reduce a un sentimiento interior: también orienta nuestra manera de vivir y tratar a los demás.",
      "Al pedir el pan de cada día, confiamos a Dios nuestras necesidades reales y recordamos a quienes necesitan alimento y cuidado. También podemos pensar en el alimento interior que sostiene nuestra vida: amor, esperanza y fortaleza. Esta reflexión espiritual complementa, pero no reemplaza, el sentido concreto del pan.",
      "Al pedir perdón, reconocemos nuestros errores y recordamos que también estamos llamados a perdonar. Después de conocer su enseñanza sobre la misericordia, el Padre Nuestro nos invita a llevar el perdón también a nuestra oración. Finalmente, al pedir no caer en tentación y ser librados del mal, solicitamos ayuda para apartarnos de las malas intenciones y de las decisiones que dañan a otros. Así, la oración une la alabanza a Dios con el deseo de vivir mejor.",
      "El Salmo 103 invita a bendecir y agradecer a Dios por sus bondades; Proverbios recuerda el valor del pan necesario. Al rezar el Padre Nuestro, continuamos ese camino de alabanza y confianza: hablamos con Dios de lo que necesitamos y aprendemos a mirar también las necesidades de los demás.",
      "Podemos practicarlo con una oración sencilla: «Dios Padre, escucha mi oración. En nombre de Jesucristo, que entregó su vida por amor, te pido perdón por mis errores. Que tu Espíritu Santo me ayude a vivir con paz, bondad y esperanza. Acompáñame durante este día y enséñame a tratar a mis hermanos con amor. Amén». No es una fórmula obligatoria: cada persona puede dirigirse a Dios con palabras sinceras y confianza, como Jesús enseñó."
    ],
    "question": "¿Cómo puedo pedir en oración con confianza en Dios Padre?",
    "questionKind": "debate"
  },
  {
    "id": "cap-09",
    "number": 9,
    "title": "Jesús anuncia buenas noticias y esperanza",
    "themeId": 3,
    "themeTitle": "Seguir el ejemplo de Jesús en el mundo",
    "themeObjective": "Estudiar acciones concretas de Jesús ante la necesidad, la injusticia, la autoridad y los conflictos.",
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
      },
      {
        "label": "Marcos 1:14–15",
        "book": "Marcos",
        "chapter": 1,
        "start": 14,
        "end": 15
      },
      {
        "label": "Mateo 11:28",
        "book": "Mateo",
        "chapter": 11,
        "start": 28,
        "end": 28
      }
    ],
    "paragraphs": [
      "En la sinagoga de Nazaret, Lucas cuenta que Jesús leyó un pasaje de Isaías y habló de buenas noticias para los pobres, libertad y restauración. Después anunció que aquella Escritura se cumplía ante quienes lo escuchaban. La escena permite comprender cómo Jesús presentó públicamente su misión: no como una enseñanza separada de la vida de las personas, sino relacionada con quienes sufrían y esperaban un cambio.",
      "La expresión buenas noticias también recibe el nombre de Evangelio. Jesús no anunció solamente ideas para pensar: habló de la cercanía del Reino de Dios y mostró con sus acciones el cuidado por las personas. Para alguien que nunca escuchó ese mensaje, significa que puede acercarse a Dios con confianza, reconocer sus errores y comenzar a cambiar. La justicia, la misericordia y la esperanza no son asuntos separados de esa noticia; forman parte del camino al que Jesús invita.",
      "Las buenas noticias de Jesús son una invitación a confiar y a comenzar de nuevo. Marcos lo presenta anunciando la cercanía del Reino de Dios y llamando a creer en el Evangelio. En Mateo, Jesús invita a acercarse a él a quienes están cansados y agobiados. Su esperanza no consiste en prometer que todas las dificultades terminarán de inmediato, sino en abrir un camino de consuelo, dignidad y vida nueva para quienes lo escuchan.",
      "Podemos escuchar ese mensaje cuando nos falta ánimo, cuando alguien se siente solo o cuando una situación parece no cambiar. Jesús pone su mirada en quienes sufren y nos anima a acercarnos a ellos con la misma ternura. Allí donde alguien recibe compañía, escucha y ayuda, una buena noticia puede empezar a hacerse visible.",
      "Las buenas noticias pueden hacerse concretas entre hermanos y compañeros: tratar con justicia a quien ha sido excluido, compartir un alimento, pedir perdón después de una ofensa o acompañar al que está triste. También se expresan al confiar en Dios Padre cuando una situación nos supera, sin dejar de buscar soluciones y ayuda. Un gesto no resuelve todos los problemas, pero puede abrir espacio para el respeto y la solidaridad. Allí empieza a verse lo que significa vivir la esperanza que Jesús anunció."
    ],
    "question": "¿Dónde puedo depositar mi esperanza?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-10",
    "number": 10,
    "title": "Justicia y servicio a quienes lo necesitan",
    "themeId": 3,
    "themeTitle": "Seguir el ejemplo de Jesús en el mundo",
    "themeObjective": "Estudiar acciones concretas de Jesús ante la necesidad, la injusticia, la autoridad y los conflictos.",
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
      },
      {
        "label": "Mateo 14:14",
        "book": "Mateo",
        "chapter": 14,
        "start": 14,
        "end": 14
      }
    ],
    "paragraphs": [
      "Marcos relata que Jesús y sus discípulos buscaban descansar, pero una multitud llegó hasta ellos. Jesús vio a aquellas personas, sintió compasión y comenzó a enseñarles. Al caer la tarde, los discípulos propusieron despedirlas para que buscaran alimento. Jesús les respondió que ellos mismos les dieran de comer. Solo encontraron cinco panes y dos peces, pero Jesús tomó los alimentos, pronunció la bendición y los repartió por medio de sus discípulos. Todos comieron y quedaron satisfechos. El Evangelio presenta este gesto como un signo extraordinario de la generosidad y el cuidado de Jesús.",
      "El relato habla de una multitud con una necesidad muy concreta: tenía hambre. Jesús no se limita a aconsejar paciencia, sino que invita a sus discípulos a participar en la respuesta. La fe en Dios Padre se expresa aquí junto con una tarea humana: mirar lo que hace falta y compartir lo que tenemos. Pensar en la justicia también significa preguntarnos si alguien a nuestro alrededor está quedando sin alimento, compañía o ayuda, y qué podemos hacer sin esperar a tener recursos extraordinarios.",
      "La escena une enseñanza y amor concreto. Jesús no trata a la multitud como un problema que interrumpe sus planes: la mira con compasión y actúa. Sus discípulos también participan, aunque al principio creen que no tienen suficientes recursos. Nosotros quizá no podamos resolver todas las necesidades, pero sí podemos compartir lo que tenemos, escuchar con respeto y ayudar sin humillar. La compasión de Jesús nos enseña a dar el primer paso.",
      "Isaías anima a compartir el pan con quien tiene hambre, y el Deuteronomio invita a abrir la mano ante la necesidad. En el encuentro con la multitud, Jesús convierte el cuidado en una acción que reúne a todos.",
      "Los Evangelios cuentan, además, que Jesús atendió y sanó a personas enfermas. Podemos orar por quien necesita salud y confiar en el amor de Dios, pero no debemos prometer un milagro ni culpar a nadie si una enfermedad continúa. La fe involucra el corazón y nuestras decisiones: confiar, pedir ayuda, acompañar y actuar con bondad. Ante una necesidad, podemos organizar una pequeña colecta, compartir una merienda o acompañar a alguien a buscar apoyo. Así la confianza no queda solo en un pensamiento: se vuelve cuidado concreto."
    ],
    "question": "¿A quién de mi comunidad podría ayudar?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-11",
    "number": 11,
    "title": "La humildad y el liderazgo que sirve",
    "themeId": 3,
    "themeTitle": "Seguir el ejemplo de Jesús en el mundo",
    "themeObjective": "Estudiar acciones concretas de Jesús ante la necesidad, la injusticia, la autoridad y los conflictos.",
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
      "Durante una cena con sus discípulos, Jesús se levanta, toma una toalla y comienza a lavarles los pies, una tarea humilde. Pedro se sorprende y se resiste a que su Maestro le sirva de esa manera. Jesús le hace entender que ese gesto tiene un significado profundo. Quien era reconocido como Maestro y Señor se inclina ante sus amigos para enseñarles que el amor también sabe servir.",
      "Para comprender la sorpresa de Pedro, recordemos que lavar los pies era una tarea asociada al servicio humilde. Jesús invierte lo que sus discípulos esperaban de un maestro: en vez de exigir ser atendido, atiende a los demás. No los invita a admirar solamente aquel gesto, sino a aprender de él. La humildad no consiste en pensar que valemos menos; consiste en reconocer que nuestra dignidad no depende de estar por encima de otra persona.",
      "En otra ocasión, cuando los discípulos pensaban en quién ocuparía los lugares más importantes, Jesús les habló de un liderazgo distinto: quien quiera ser grande ha de hacerse servidor de los demás. Su autoridad no busca imponerse, sino cuidar. En la familia, en la escuela o en una comunidad, podemos reconocer a quien guía bien porque escucha, ayuda, comparte responsabilidades y respeta a las personas.",
      "Miqueas reúne justicia, misericordia y humildad; Isaías presenta la imagen de un siervo atento a quienes sufren. Jesús nos muestra cómo la grandeza puede expresarse en un gesto tan sencillo como inclinarse para ayudar a otro.",
      "Servir con amor no ocurre solamente en la iglesia o cuando damos dinero. También puede ser saludar con alegría, escuchar sin interrumpir, ayudar en casa sin esperar aplausos o defender con respeto a un compañero tratado injustamente. Cuando evitamos burlarnos de alguien o hablar mal de él, estamos cuidando nuestra convivencia. Jesús nos enseña a mirar al otro como un hermano en dignidad, no como alguien inferior. Un buen líder puede pedir ayuda, reconocer un error y ser el primero en colaborar."
    ],
    "question": "¿El líder también puede servir?",
    "questionKind": "debate"
  },
  {
    "id": "cap-12",
    "number": 12,
    "title": "La paz y la reconciliación",
    "themeId": 3,
    "themeTitle": "Seguir el ejemplo de Jesús en el mundo",
    "themeObjective": "Estudiar acciones concretas de Jesús ante la necesidad, la injusticia, la autoridad y los conflictos.",
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
      },
      {
        "label": "Juan 18:10",
        "book": "Juan",
        "chapter": 18,
        "start": 10,
        "end": 10
      }
    ],
    "paragraphs": [
      "Jesús llama bienaventurados a quienes trabajan por la paz. También enseña a tomar en serio las relaciones dañadas: invita a buscar la reconciliación antes de continuar con una ofrenda. Pero su enseñanza no se queda en palabras. Durante su arresto, Pedro hiere con una espada al siervo del sumo sacerdote, como cuenta Juan. Lucas relata que Jesús detiene la violencia y cura la oreja del hombre herido. Incluso en una hora de peligro, Jesús protege la vida.",
      "La escena del arresto permite ver que Jesús no respondía a la agresión promoviendo otra herida. Su decisión de detener la violencia no hace desaparecer la injusticia de lo que estaba ocurriendo. Por eso, cuando habla de paz, no nos invita a permanecer callados ante el daño. La reconciliación necesita verdad, responsabilidad y protección de las personas. La paz cristiana no es fingir tranquilidad, sino buscar el bien sin multiplicar el sufrimiento.",
      "La paz de la que habla Jesús no equivale a fingir que nunca ocurrió una injusticia. Requiere atención al daño, responsabilidad y respeto por las personas. Una reconciliación auténtica no puede imponerse ni sustituir la protección de quien está en peligro. Podemos buscar caminos de diálogo y reparación sin exigir que alguien vuelva a una relación abusiva. La actitud de Jesús ante la violencia nos invita a comprender que construir paz implica cuidar la vida y la dignidad de todos.",
      "El Salmo 34 llama a buscar la paz, y Proverbios recuerda que una respuesta serena puede calmar el enojo. Ambas enseñanzas iluminan las acciones de Jesús y nos animan a contribuir a la paz con respeto y valentía.",
      "En la vida diaria podemos cuidar nuestros pensamientos antes de convertirlos en palabras: comprobar un rumor antes de compartirlo, evitar mensajes ofensivos y buscar a un adulto de confianza cuando un conflicto se vuelve peligroso. El Antiguo Testamento ya llamaba a apartarse del mal y buscar la paz. Jesús profundiza esa enseñanza con acciones concretas. Podemos pedir a Dios Padre serenidad y valentía para tratar a otros con respeto, sin confundir tener fe con aceptar abusos o injusticias."
    ],
    "question": "¿Cómo podemos contribuir a la paz sin ocultar una injusticia?",
    "questionKind": "debate"
  },
  {
    "id": "cap-13",
    "number": 13,
    "title": "Jesús, nuestro Salvador",
    "themeId": 4,
    "themeTitle": "Comprender el legado de Jesús y vivirlo",
    "themeObjective": "Comprender la entrega, la esperanza de la resurrección y la continuidad de las enseñanzas de Jesús.",
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
      },
      {
        "label": "Hebreos 7:25",
        "book": "Hebreos",
        "chapter": 7,
        "start": 25,
        "end": 25
      }
    ],
    "paragraphs": [
      "En Jericó, Jesús se acerca a Zaqueo, un recaudador de impuestos rechazado por muchos. El Evangelio relata que ese encuentro da lugar a una decisión concreta: Zaqueo habla de compartir sus bienes y devolver lo obtenido injustamente. Jesús presenta su misión como la búsqueda de quienes estaban perdidos. La salvación aparece así relacionada con el encuentro, la transformación y la reparación del daño.",
      "Los Evangelios también presentan a Jesús anunciando que entregaría su vida y cuentan su sacrificio en la cruz. Para la fe cristiana, Jesús, el Hijo de Dios, se entrega por amor para abrir a la humanidad un camino de salvación y perdón. Su entrega no es una derrota del amor: manifiesta hasta dónde llega su fidelidad al Padre y su amor por nosotros. Por eso Jesús es mucho más que un maestro de buenos consejos; su vida, su sacrificio y su resurrección sostienen la esperanza cristiana.",
      "Para comprender la referencia a Isaías, conviene saber que ese libro del Antiguo Testamento contiene un pasaje sobre un servidor de Dios que sufre por el dolor y las faltas de otros. No es necesario haber leído antes el capítulo para entender la relación: los cristianos reconocen en ese sufrimiento una luz que ayuda a contemplar la entrega de Jesús. La cruz recuerda que Jesús no se apartó de su misión de amar, incluso cuando ese amor lo llevó al sufrimiento y a la muerte.",
      "Isaías habla de un siervo que carga con el sufrimiento de muchos; los cristianos han reconocido en esas palabras una luz para comprender la entrega de Jesús. En la cruz, Jesús recuerda también el comienzo del Salmo 22. Aun en el sufrimiento, la historia que narran los Evangelios nos conduce hacia la confianza y la esperanza.",
      "La fe cristiana llama redención a esa obra salvadora. Al acercarnos a Dios podemos reconocer sinceramente nuestros pecados, pedir perdón y confiar en Jesucristo, que intercede por nosotros ante el Padre. Orar en su nombre no es repetir palabras mágicas: es acudir con un corazón dispuesto a cambiar y, cuando sea posible, reparar el daño causado. Su sacrificio nos enseña que nadie está fuera del alcance del amor de Dios y nos invita a tratar a cada persona con esa misma dignidad."
    ],
    "question": "¿Qué significa para mí el sacrificio de Jesús por amor a la humanidad?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-14",
    "number": 14,
    "title": "La resurrección y la esperanza cristiana",
    "themeId": 4,
    "themeTitle": "Comprender el legado de Jesús y vivirlo",
    "themeObjective": "Comprender la entrega, la esperanza de la resurrección y la continuidad de las enseñanzas de Jesús.",
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
      "Lucas cuenta que unas mujeres fueron al sepulcro y lo encontraron vacío. Allí escucharon el anuncio de que Jesús había resucitado. Al principio, los discípulos no comprendieron lo ocurrido. Más tarde, dos de ellos caminaban hacia Emaús llenos de tristeza por la muerte de Jesús. El mismo Jesús se acercó, escuchó sus preocupaciones, les explicó las Escrituras y finalmente lo reconocieron cuando bendijo y partió el pan. Aquellos caminantes descubrieron que la esperanza podía renacer incluso después de una pérdida profunda.",
      "Lucas precisa que Jesús tomó el pan, pronunció la bendición, lo partió y lo compartió con los caminantes. Ese gesto ayuda a comprender lo que significa bendecir: reconocer el bien recibido y dirigirse a Dios con gratitud. No se trata de una frase que garantiza que todo saldrá como deseamos. En el relato, los discípulos reconocen a Jesús en aquel encuentro, después de escucharlo explicar las Escrituras. La esperanza cristiana también puede crecer cuando recordamos sus palabras y compartimos la mesa con otros.",
      "La resurrección es el corazón de la esperanza cristiana: la muerte no tuvo la última palabra sobre Jesús. En el libro de los Hechos, Pedro anuncia esa buena noticia y encuentra en el Antiguo Testamento palabras para explicarla a su pueblo. La alegría de la Pascua no nos obliga a negar la tristeza o las preguntas; nos invita a confiar en que Dios puede abrir caminos de vida aun cuando todo parece cerrado.",
      "El Salmo 16 expresa confianza en que Dios no abandona a quien se encomienda a él. Pedro retoma ese salmo al anunciar la resurrección. Así, una antigua oración de esperanza ayuda a los primeros cristianos a comprender la vida nueva de Jesús.",
      "Una manera sencilla de llevar esta enseñanza a la vida es agradecer antes de comer y pensar en quienes prepararon o hicieron posible ese alimento. También podemos preguntarnos si alguien de nuestra comunidad necesita compartir el pan. Bendecir nos anima a reconocer los dones de Dios sin olvidar a los demás. Ante una pérdida o una tristeza, como les ocurrió a los caminantes de Emaús, podemos buscar compañía, escuchar la palabra de Jesús y mantener abierta la posibilidad de encontrar esperanza."
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
    "themeObjective": "Comprender la entrega, la esperanza de la resurrección y la continuidad de las enseñanzas de Jesús.",
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
      },
      {
        "label": "1 Juan 1:9",
        "book": "1 Juan",
        "chapter": 1,
        "start": 9,
        "end": 9
      },
      {
        "label": "Hebreos 7:25",
        "book": "Hebreos",
        "chapter": 7,
        "start": 25,
        "end": 25
      }
    ],
    "paragraphs": [
      "Jesús utiliza la imagen de una vid y sus ramas para hablar de la relación con sus discípulos. Una rama no da fruto separada de aquello que le permite vivir. Con esta comparación, Jesús invita a permanecer en él y en su amor. Se trata de una imagen de enseñanza, no de un episodio agrícola que debamos reconstruir como hecho biográfico.",
      "Permanecer en Jesús también puede expresarse en la oración. Los discípulos no reciben la imagen de la vid para aprender solo una comparación bonita: Jesús los invita a vivir unidos a él y a guardar su enseñanza del amor. Si una persona reconoce que ha hecho daño, puede acercarse a Jesucristo con sinceridad y pedirle ayuda para cambiar. La fe cristiana enseña que Jesús intercede por nosotros ante Dios Padre; por eso podemos orar con confianza y arrepentimiento, sin pensar que unas palabras sustituyen las decisiones que debemos tomar.",
      "El sentido de permanecer no se reduce a repetir palabras religiosas. En el mismo pasaje, Jesús relaciona esa permanencia con guardar sus mandamientos y amarse unos a otros. Los frutos pueden reconocerse en decisiones que cuidan la dignidad de las personas, en relaciones más responsables y en un servicio sincero. Nadie puede medir toda la vida interior de otra persona por su apariencia. Por eso, antes de juzgar al prójimo, conviene examinar qué produce nuestra propia manera de vivir.",
      "Jeremías y uno de los salmos utilizan la imagen de árboles que reciben sustento y dan fruto. Esa semejanza ayuda a estudiar la imagen de la vid que enseña Jesús, sin afirmar que Jesús estuviera citando esos pasajes.",
      "Por ejemplo, podemos decir: «Jesús, reconozco mis errores y te pido perdón. Ayúdame a reparar lo que hice mal, a cuidar a los demás y a permanecer en tu amor. Acércame al Padre y guía mis decisiones. Amén». Nadie necesita una oración perfecta para comenzar a hablar con Dios. La sinceridad se hace visible también después: cuando dejamos una conducta que hiere, pedimos disculpas o elegimos servir. Así, el fruto del que habla Jesús no queda solo en una imagen, sino que aparece en nuestra manera de vivir."
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
    "themeObjective": "Comprender la entrega, la esperanza de la resurrección y la continuidad de las enseñanzas de Jesús.",
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
      },
      {
        "label": "Génesis 1:27",
        "book": "Génesis",
        "chapter": 1,
        "start": 27,
        "end": 27
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
        "label": "Juan 14:6",
        "book": "Juan",
        "chapter": 14,
        "start": 6,
        "end": 6
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
      },
      {
        "label": "Mateo 12:50",
        "book": "Mateo",
        "chapter": 12,
        "start": 50,
        "end": 50
      },
      {
        "label": "Juan 20:17",
        "book": "Juan",
        "chapter": 20,
        "start": 17,
        "end": 17
      }
    ],
    "paragraphs": [
      "Después de recorrer las enseñanzas y acciones de Jesús, volvemos a una invitación fundamental: amar a los demás como él enseñó. Todo lo aprendido puede reunirse en nuestra vida cotidiana: la confianza en Dios Padre, la misericordia ante los errores, el cuidado de quien sufre, la humildad al servir, la paz que protege y la esperanza que acompaña. Jesús nos muestra un camino de amor que no termina cuando cerramos estas páginas.",
      "La Biblia presenta a Dios Padre como creador de la vida, y Jesús nos enseña a acercarnos a él con confianza. Jesús también llama hermanos a quienes buscan hacer la voluntad del Padre, y después de resucitar habla de sus hermanos. Esa cercanía invita a reconocer la misma dignidad en cada persona, sin sentirnos superiores a nadie. Su sacrificio por amor nos llama a responder con amor.",
      "En una de sus enseñanzas, Jesús compara a quien escucha y pone en práctica sus palabras con alguien que construye sobre una base firme. Más adelante, la carta de Santiago insistirá, desde la enseñanza de la comunidad cristiana, en que la fe no debe quedar separada de las obras. En nuestra vida cotidiana, ese aprendizaje puede tomar forma al escuchar a un familiar, respetar a un hermano, reparar una injusticia o ayudar sin buscar reconocimiento. No se trata de hacer algo espectacular: se trata de practicar el amor con constancia, libertad y responsabilidad.",
      "El Levítico llama a amar al extranjero como a uno mismo; el libro de Proverbios invita a no postergar el bien que podemos hacer. Son nuevas claves para seguir explorando el amor práctico que enseñó Jesús.",
      "Jesús dijo a sus discípulos que él es el camino que conduce al Padre. Seguirlo no significa saberlo todo de inmediato: significa dejarnos enseñar, confiar en el amor de Dios y volver a intentarlo cuando nos equivocamos. Cada gesto de misericordia, cada ayuda sincera y cada decisión de cuidar la vida puede ser un paso más en ese camino.",
      "Este recorrido termina aquí, pero el estudio de Jesús continúa. Los Evangelios guardan otros encuentros, conversaciones y enseñanzas por descubrir. Podemos volver a abrirlos, investigar nuevas conexiones con el Antiguo Testamento y encontrar, con cada lectura, maneras más conscientes de amar. La última página no cierra el camino: invita a seguir aprendiendo."
    ],
    "question": "¿Cómo seguimos aprendiendo a amar como Jesús?",
    "questionKind": "debate"
  }
];
