/** P2: 22 initial context samples + Esperanza (candidate only); NONE human-approved.
 * Original Spanish summaries and references from R13 research, not Bible text.
 * The 100 canonical IDs remain exclusively in topics.ts. */
export type TopicEditorialStatus = 'PROPUESTO' | 'EN_REVISION' | 'VALIDADO';
export interface ConceptPassage {reference:string;book:string;chapter:number;start:number;end:number;sourceVerseLabel:string;sourceVerseLabels:readonly string[];rationale:string;}
export interface ConceptPreview {topicId:string;family:string;subtopic:string;synopsis:string;status:TopicEditorialStatus;pastoralCaution:string;existenceChecked:boolean;passages:readonly ConceptPassage[];}
export const researchSource = 'evidence/r13-content-research-2026-10-09/apps/bible-topic-explorer/evidence/r13/research/CATALOGO_100_TEMAS.csv';
export const researchCorpusGitBlob = 'def02a2ca0684d6b4d8491c7f12d06e910d76519';
export const conceptPreviews:readonly ConceptPreview[] = [
  {
    "topicId": "dios",
    "family": "Dios y fe",
    "subtopic": "¿Quién es Dios para ti?",
    "synopsis": "¿Cómo es Dios y por qué tantas personas hablan de él? Estos pasajes muestran cómo la Biblia lo presenta y nos invitan a hacer nuestras propias preguntas.",
    "status": "EN_REVISION",
    "pastoralCaution": "No usar Hch 17 como aprobación total de cultos locales",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Deuteronomio 6:4–5",
        "book": "Deuteronomio",
        "chapter": 6,
        "start": 4,
        "end": 5,
        "sourceVerseLabel": "4",
        "sourceVerseLabels": [
          "4",
          "5"
        ],
        "rationale": "Descubre cómo se habla de amar a Dios con todo el corazón."
      },
      {
        "reference": "Hechos 17:24–28",
        "book": "Hechos",
        "chapter": 17,
        "start": 24,
        "end": 28,
        "sourceVerseLabel": "24",
        "sourceVerseLabels": [
          "24",
          "25",
          "26",
          "27",
          "28"
        ],
        "rationale": "Pablo conversa sobre Dios con personas que tenían otras creencias."
      }
    ]
  },
  {
    "topicId": "jesus",
    "family": "Dios y fe",
    "subtopic": "¿Quién es Jesús?",
    "synopsis": "Muchos conocen su nombre, pero ¿qué decía Jesús sobre sí mismo? Conoce lo que pensaban sus amigos y cómo empieza el Evangelio de Juan.",
    "status": "EN_REVISION",
    "pastoralCaution": "Marcos incluye malentendido de Pedro",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Marcos 8:27–31",
        "book": "Marcos",
        "chapter": 8,
        "start": 27,
        "end": 31,
        "sourceVerseLabel": "27",
        "sourceVerseLabels": [
          "27",
          "28",
          "29",
          "30",
          "31"
        ],
        "rationale": "Jesús pregunta a sus amigos quién creen que es."
      },
      {
        "reference": "Juan 1:1–14",
        "book": "Juan",
        "chapter": 1,
        "start": 1,
        "end": 14,
        "sourceVerseLabel": "1",
        "sourceVerseLabels": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14"
        ],
        "rationale": "Juan presenta a Jesús y explica qué significa su llegada."
      }
    ]
  },
  {
    "topicId": "confianza",
    "family": "Dios y fe",
    "subtopic": "Cuando no sabes qué hacer",
    "synopsis": "Hay días en que todo parece incierto. Estos textos invitan a reconocer lo que sentimos y pensar en dónde encontramos apoyo.",
    "status": "EN_REVISION",
    "pastoralCaution": "No reemplaza decisiones prudentes ni ayuda profesional",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Salmos 56:3–4",
        "book": "Salmos",
        "chapter": 56,
        "start": 3,
        "end": 4,
        "sourceVerseLabel": "3",
        "sourceVerseLabels": [
          "3",
          "4"
        ],
        "rationale": "Una persona reconoce que siente miedo y busca apoyo en Dios."
      },
      {
        "reference": "Mateo 6:25–34",
        "book": "Mateo",
        "chapter": 6,
        "start": 25,
        "end": 34,
        "sourceVerseLabel": "25",
        "sourceVerseLabels": [
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34"
        ],
        "rationale": "Jesús habla de las preocupaciones de cada día."
      }
    ]
  },
  {
    "topicId": "voluntad-de-dios",
    "family": "Dios y fe",
    "subtopic": "Elegir lo que hace bien",
    "synopsis": "¿Cómo decidir cuando hay varias opciones? La Biblia invita a pensar en la justicia, la bondad y el cuidado de los demás.",
    "status": "EN_REVISION",
    "pastoralCaution": "Miqueas denuncia desigualdad real",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Miqueas 6:6–8",
        "book": "Miqueas",
        "chapter": 6,
        "start": 6,
        "end": 8,
        "sourceVerseLabel": "6",
        "sourceVerseLabels": [
          "6",
          "7",
          "8"
        ],
        "rationale": "Miqueas pone el acento en la justicia y la bondad."
      },
      {
        "reference": "Romanos 12:1–2",
        "book": "Romanos",
        "chapter": 12,
        "start": 1,
        "end": 2,
        "sourceVerseLabel": "1",
        "sourceVerseLabels": [
          "1",
          "2"
        ],
        "rationale": "Pablo invita a revisar nuestra manera de pensar y actuar."
      }
    ]
  },
  {
    "topicId": "amor",
    "family": "Amor y relaciones",
    "subtopic": "Amar con hechos",
    "synopsis": "El cariño se nota en cómo tratamos a las personas. Aquí puedes descubrir qué significa amar más allá de las palabras.",
    "status": "EN_REVISION",
    "pastoralCaution": "No usar 1 Co 13 para tolerar abusos",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "1 Corintios 13:1–13",
        "book": "1 Corintios",
        "chapter": 13,
        "start": 1,
        "end": 13,
        "sourceVerseLabel": "1",
        "sourceVerseLabels": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13"
        ],
        "rationale": "Pablo muestra por qué el amor importa más que aparentar."
      },
      {
        "reference": "Juan 13:34–35",
        "book": "Juan",
        "chapter": 13,
        "start": 34,
        "end": 35,
        "sourceVerseLabel": "34",
        "sourceVerseLabels": [
          "34",
          "35"
        ],
        "rationale": "Jesús invita a sus seguidores a cuidarse unos a otros."
      }
    ]
  },
  {
    "topicId": "matrimonio",
    "family": "Amor y relaciones",
    "subtopic": "Respeto en las relaciones",
    "synopsis": "Una relación sana necesita respeto, escucha y cuidado mutuo. Lee estos pasajes y conversa sobre cómo construir vínculos que hagan bien.",
    "status": "EN_REVISION",
    "pastoralCaution": "No forzar modelo sobre situaciones personales",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Génesis 2:18–25",
        "book": "Génesis",
        "chapter": 2,
        "start": 18,
        "end": 25,
        "sourceVerseLabel": "18",
        "sourceVerseLabels": [
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25"
        ],
        "rationale": "Un relato sobre la compañía y la unión entre personas."
      },
      {
        "reference": "1 Corintios 13:4–7",
        "book": "1 Corintios",
        "chapter": 13,
        "start": 4,
        "end": 7,
        "sourceVerseLabel": "4",
        "sourceVerseLabels": [
          "4",
          "5",
          "6",
          "7"
        ],
        "rationale": "Pablo describe gestos de amor que sirven en toda relación."
      }
    ]
  },
  {
    "topicId": "perdon",
    "family": "Perdón y restauración",
    "subtopic": "¿Qué hacemos después de un daño?",
    "synopsis": "Perdonar puede ser difícil y no significa permitir que el daño continúe. Estos textos ayudan a pensar en la misericordia y la responsabilidad.",
    "status": "EN_REVISION",
    "pastoralCaution": "Perdón no cancela protección y justicia",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Mateo 18:21–35",
        "book": "Mateo",
        "chapter": 18,
        "start": 21,
        "end": 35,
        "sourceVerseLabel": "21",
        "sourceVerseLabels": [
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35"
        ],
        "rationale": "Una historia de Jesús pregunta qué hacemos con el perdón recibido."
      },
      {
        "reference": "Lucas 23:32–34",
        "book": "Lucas",
        "chapter": 23,
        "start": 32,
        "end": 34,
        "sourceVerseLabel": "32",
        "sourceVerseLabels": [
          "32",
          "33",
          "34"
        ],
        "rationale": "Jesús ora incluso en un momento de profundo sufrimiento."
      }
    ]
  },
  {
    "topicId": "tentacion",
    "family": "Perdón y restauración",
    "subtopic": "Decidir bajo presión",
    "synopsis": "A veces nos piden hacer cosas que no queremos. Estos pasajes ayudan a pensar antes de elegir y a buscar apoyo cuando lo necesitamos.",
    "status": "EN_REVISION",
    "pastoralCaution": "No implicar que trauma equivale a tentación",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Mateo 4:1–11",
        "book": "Mateo",
        "chapter": 4,
        "start": 1,
        "end": 11,
        "sourceVerseLabel": "1",
        "sourceVerseLabels": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11"
        ],
        "rationale": "Jesús enfrenta decisiones difíciles y responde con firmeza."
      },
      {
        "reference": "1 Corintios 10:12–13",
        "book": "1 Corintios",
        "chapter": 10,
        "start": 12,
        "end": 13,
        "sourceVerseLabel": "12",
        "sourceVerseLabels": [
          "12",
          "13"
        ],
        "rationale": "Pablo anima a mantenerse atento y buscar una salida."
      }
    ]
  },
  {
    "topicId": "paz",
    "family": "Vida interior",
    "subtopic": "Encontrar calma y construir paz",
    "synopsis": "La paz no es solo sentirse tranquilo: también es aprender a tratar bien a los demás. ¿Qué puedes hacer hoy para llevar un poco de paz?",
    "status": "EN_REVISION",
    "pastoralCaution": "No equiparar paz con ausencia de conflicto",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Juan 14:25–27",
        "book": "Juan",
        "chapter": 14,
        "start": 25,
        "end": 27,
        "sourceVerseLabel": "25",
        "sourceVerseLabels": [
          "25",
          "26",
          "27"
        ],
        "rationale": "Jesús habla de paz a sus amigos antes de despedirse."
      },
      {
        "reference": "Mateo 5:9–12",
        "book": "Mateo",
        "chapter": 5,
        "start": 9,
        "end": 12,
        "sourceVerseLabel": "9",
        "sourceVerseLabels": [
          "9",
          "10",
          "11",
          "12"
        ],
        "rationale": "Jesús llama felices a quienes trabajan por la paz."
      }
    ]
  },
  {
    "topicId": "esperanza",
    "family": "Vida interior",
    "subtopic": "Seguir adelante cuando cuesta",
    "synopsis": "Cuando algo sale mal, es normal perder el ánimo. Estos textos muestran que podemos mantener la esperanza sin negar los momentos difíciles.",
    "status": "PROPUESTO",
    "pastoralCaution": "No prometer solución instantánea",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Romanos 5:1–5",
        "book": "Romanos",
        "chapter": 5,
        "start": 1,
        "end": 5,
        "sourceVerseLabel": "1",
        "sourceVerseLabels": [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "rationale": "Pablo relaciona la esperanza con aprender a perseverar."
      },
      {
        "reference": "1 Pedro 1:3–9",
        "book": "1 Pedro",
        "chapter": 1,
        "start": 3,
        "end": 9,
        "sourceVerseLabel": "3",
        "sourceVerseLabels": [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9"
        ],
        "rationale": "Una carta anima a conservar la esperanza en medio de las pruebas."
      }
    ]
  },
  {
    "topicId": "gozo",
    "family": "Vida interior",
    "subtopic": "Alegría sin fingir",
    "synopsis": "No tenemos que sonreír todo el tiempo. La Biblia habla de una alegría que convive con los días difíciles y con la alegría de reencontrarse.",
    "status": "EN_REVISION",
    "pastoralCaution": "La tristeza sigue siendo legítima",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Filipenses 4:4–9",
        "book": "Filipenses",
        "chapter": 4,
        "start": 4,
        "end": 9,
        "sourceVerseLabel": "4",
        "sourceVerseLabels": [
          "4",
          "5",
          "6",
          "7",
          "8",
          "9"
        ],
        "rationale": "Pablo invita a la alegría y a cuidar lo que pensamos."
      },
      {
        "reference": "Lucas 15:3–7",
        "book": "Lucas",
        "chapter": 15,
        "start": 3,
        "end": 7,
        "sourceVerseLabel": "3",
        "sourceVerseLabels": [
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "rationale": "Jesús cuenta una historia sobre la alegría de encontrar lo perdido."
      }
    ]
  },
  {
    "topicId": "paciencia",
    "family": "Vida interior",
    "subtopic": "Aprender a esperar",
    "synopsis": "Esperar no siempre es fácil, sobre todo cuando queremos resultados rápidos. Estos textos muestran cómo vivir ese tiempo con paciencia y amor.",
    "status": "EN_REVISION",
    "pastoralCaution": "No normalizar abusos",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Santiago 5:7–11",
        "book": "Santiago",
        "chapter": 5,
        "start": 7,
        "end": 11,
        "sourceVerseLabel": "7",
        "sourceVerseLabels": [
          "7",
          "8",
          "9",
          "10",
          "11"
        ],
        "rationale": "Santiago compara la paciencia con la espera de quien siembra."
      },
      {
        "reference": "1 Corintios 13:4–7",
        "book": "1 Corintios",
        "chapter": 13,
        "start": 4,
        "end": 7,
        "sourceVerseLabel": "4",
        "sourceVerseLabels": [
          "4",
          "5",
          "6",
          "7"
        ],
        "rationale": "Pablo recuerda que el amor también sabe esperar."
      }
    ]
  },
  {
    "topicId": "miedo",
    "family": "Dificultades y emociones",
    "subtopic": "Cuando sientes miedo",
    "synopsis": "Sentir miedo es humano. Estas historias muestran que podemos hablar de lo que nos asusta y pedir compañía.",
    "status": "EN_REVISION",
    "pastoralCaution": "No usar relato para negar peligros objetivos",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Salmos 56:3–4",
        "book": "Salmos",
        "chapter": 56,
        "start": 3,
        "end": 4,
        "sourceVerseLabel": "3",
        "sourceVerseLabels": [
          "3",
          "4"
        ],
        "rationale": "Un salmo pone en palabras el miedo de una persona."
      },
      {
        "reference": "Marcos 4:35–41",
        "book": "Marcos",
        "chapter": 4,
        "start": 35,
        "end": 41,
        "sourceVerseLabel": "35",
        "sourceVerseLabels": [
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41"
        ],
        "rationale": "Los amigos de Jesús se asustan durante una tormenta."
      }
    ]
  },
  {
    "topicId": "ansiedad",
    "family": "Dificultades y emociones",
    "subtopic": "Cuando las preocupaciones pesan",
    "synopsis": "A veces la cabeza no deja de dar vueltas. Estos pasajes invitan a hablar de lo que sentimos y a buscar apoyo; no reemplazan la ayuda profesional.",
    "status": "EN_REVISION",
    "pastoralCaution": "No sustituir atención clínica",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Mateo 6:25–34",
        "book": "Mateo",
        "chapter": 6,
        "start": 25,
        "end": 34,
        "sourceVerseLabel": "25",
        "sourceVerseLabels": [
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34"
        ],
        "rationale": "Jesús habla de las preocupaciones por el día a día."
      },
      {
        "reference": "Filipenses 4:6–9",
        "book": "Filipenses",
        "chapter": 4,
        "start": 6,
        "end": 9,
        "sourceVerseLabel": "6",
        "sourceVerseLabels": [
          "6",
          "7",
          "8",
          "9"
        ],
        "rationale": "Pablo menciona la oración y pensamientos que ayudan a cuidar el corazón."
      }
    ]
  },
  {
    "topicId": "sufrimiento",
    "family": "Dificultades y emociones",
    "subtopic": "No pasar solo los días difíciles",
    "synopsis": "Cuando alguien sufre, escuchar y acompañar puede marcar una diferencia. Estos textos hablan de esperanza y de consuelo compartido.",
    "status": "EN_REVISION",
    "pastoralCaution": "No moralizar enfermedad o duelo",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Romanos 8:18–27",
        "book": "Romanos",
        "chapter": 8,
        "start": 18,
        "end": 27,
        "sourceVerseLabel": "18",
        "sourceVerseLabels": [
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27"
        ],
        "rationale": "Pablo reconoce que toda la creación atraviesa momentos difíciles."
      },
      {
        "reference": "2 Corintios 1:3–7",
        "book": "2 Corintios",
        "chapter": 1,
        "start": 3,
        "end": 7,
        "sourceVerseLabel": "3",
        "sourceVerseLabels": [
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "rationale": "Una carta habla de recibir y compartir consuelo."
      }
    ]
  },
  {
    "topicId": "oracion",
    "family": "Oración y práctica espiritual",
    "subtopic": "Hablar con Dios con confianza",
    "synopsis": "No hacen falta palabras perfectas para orar. Estos pasajes presentan maneras sencillas de hablar con Dios y escuchar.",
    "status": "EN_REVISION",
    "pastoralCaution": "No confundir pedir con obtener cualquier deseo",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Mateo 6:5–13",
        "book": "Mateo",
        "chapter": 6,
        "start": 5,
        "end": 13,
        "sourceVerseLabel": "5",
        "sourceVerseLabels": [
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13"
        ],
        "rationale": "Jesús enseña a orar con sencillez, sin buscar aplausos."
      },
      {
        "reference": "Lucas 11:1–13",
        "book": "Lucas",
        "chapter": 11,
        "start": 1,
        "end": 13,
        "sourceVerseLabel": "1",
        "sourceVerseLabels": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13"
        ],
        "rationale": "Los discípulos le piden a Jesús que les enseñe a orar."
      }
    ]
  },
  {
    "topicId": "adoracion",
    "family": "Oración y práctica espiritual",
    "subtopic": "¿Por qué adoramos?",
    "synopsis": "Adorar es más que repetir canciones o gestos. Lee cómo la Biblia relaciona la adoración con la verdad, la gratitud y nuestra manera de vivir.",
    "status": "EN_REVISION",
    "pastoralCaution": "No confundir adoración con solo música",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Juan 4:19–26",
        "book": "Juan",
        "chapter": 4,
        "start": 19,
        "end": 26,
        "sourceVerseLabel": "19",
        "sourceVerseLabels": [
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26"
        ],
        "rationale": "Jesús conversa sobre la adoración con una mujer samaritana."
      },
      {
        "reference": "Salmos 95:1–7",
        "book": "Salmos",
        "chapter": 95,
        "start": 1,
        "end": 7,
        "sourceVerseLabel": "1",
        "sourceVerseLabels": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "rationale": "Un salmo invita a cantar y agradecer a Dios."
      }
    ]
  },
  {
    "topicId": "ayuno",
    "family": "Oración y práctica espiritual",
    "subtopic": "Una práctica con sentido",
    "synopsis": "Ayunar aparece en la Biblia como una práctica espiritual, pero nunca debe imponerse. Estos textos preguntan qué importa más: parecer bueno o actuar con justicia.",
    "status": "EN_REVISION",
    "pastoralCaution": "No imponer ayuno alimentario a menores",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Mateo 6:16–18",
        "book": "Mateo",
        "chapter": 6,
        "start": 16,
        "end": 18,
        "sourceVerseLabel": "16",
        "sourceVerseLabels": [
          "16",
          "17",
          "18"
        ],
        "rationale": "Jesús cuestiona hacer del ayuno un espectáculo."
      },
      {
        "reference": "Isaías 58:3–9",
        "book": "Isaías",
        "chapter": 58,
        "start": 3,
        "end": 9,
        "sourceVerseLabel": "3",
        "sourceVerseLabels": [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9"
        ],
        "rationale": "Isaías relaciona las prácticas religiosas con ayudar a quien lo necesita."
      }
    ]
  },
  {
    "topicId": "generosidad",
    "family": "Carácter y conducta",
    "subtopic": "Compartir sin obligación",
    "synopsis": "Ser generoso puede ser dar tiempo, escuchar o ayudar. La Biblia invita a pensar en lo que significa compartir sin presionar a nadie.",
    "status": "EN_REVISION",
    "pastoralCaution": "No usar viuda para presionar donaciones",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Marcos 12:41–44",
        "book": "Marcos",
        "chapter": 12,
        "start": 41,
        "end": 44,
        "sourceVerseLabel": "41",
        "sourceVerseLabels": [
          "41",
          "42",
          "43",
          "44"
        ],
        "rationale": "Jesús observa una ofrenda pequeña en un contexto difícil."
      },
      {
        "reference": "2 Corintios 9:6–11",
        "book": "2 Corintios",
        "chapter": 9,
        "start": 6,
        "end": 11,
        "sourceVerseLabel": "6",
        "sourceVerseLabels": [
          "6",
          "7",
          "8",
          "9",
          "10",
          "11"
        ],
        "rationale": "Pablo habla de dar libremente y sin presión."
      }
    ]
  },
  {
    "topicId": "decisiones",
    "family": "Decisiones y vida cotidiana",
    "subtopic": "Elegir con calma",
    "synopsis": "Las decisiones pequeñas también importan. Estos pasajes invitan a pensar en las consecuencias y a elegir con responsabilidad.",
    "status": "EN_REVISION",
    "pastoralCaution": "No coaccionar elecciones vocacionales",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Deuteronomio 30:15–20",
        "book": "Deuteronomio",
        "chapter": 30,
        "start": 15,
        "end": 20,
        "sourceVerseLabel": "15",
        "sourceVerseLabels": [
          "15",
          "16",
          "17",
          "18",
          "19",
          "20"
        ],
        "rationale": "Un texto propone pensar qué camino conduce a la vida."
      },
      {
        "reference": "Lucas 14:28–33",
        "book": "Lucas",
        "chapter": 14,
        "start": 28,
        "end": 33,
        "sourceVerseLabel": "28",
        "sourceVerseLabels": [
          "28",
          "29",
          "30",
          "31",
          "32",
          "33"
        ],
        "rationale": "Jesús usa un ejemplo cotidiano sobre planear antes de actuar."
      }
    ]
  },
  {
    "topicId": "sexualidad",
    "family": "Decisiones y vida cotidiana",
    "subtopic": "Cuidar tu cuerpo y tus decisiones",
    "synopsis": "Tu cuerpo y tus límites merecen respeto. Estos pasajes abren preguntas sobre dignidad, responsabilidad y relaciones sin presiones.",
    "status": "EN_REVISION",
    "pastoralCaution": "Revisión pastoral experta; no usar como coerción",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "1 Corintios 6:12–20",
        "book": "1 Corintios",
        "chapter": 6,
        "start": 12,
        "end": 20,
        "sourceVerseLabel": "12",
        "sourceVerseLabels": [
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20"
        ],
        "rationale": "Pablo habla de cuidar el cuerpo y actuar con responsabilidad."
      },
      {
        "reference": "Génesis 2:18–25",
        "book": "Génesis",
        "chapter": 2,
        "start": 18,
        "end": 25,
        "sourceVerseLabel": "18",
        "sourceVerseLabels": [
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25"
        ],
        "rationale": "Un relato bíblico invita a pensar en la compañía y el vínculo."
      }
    ]
  },
  {
    "topicId": "mandamientos",
    "family": "Biblia y comprensión",
    "subtopic": "Reglas para aprender a cuidar",
    "synopsis": "Las reglas pueden parecer muchas. Estos pasajes ayudan a descubrir qué relación tienen los mandamientos con el respeto y el amor a los demás.",
    "status": "EN_REVISION",
    "pastoralCaution": "No emplear para amenazar menores",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Éxodo 20:1–17",
        "book": "Éxodo",
        "chapter": 20,
        "start": 1,
        "end": 17,
        "sourceVerseLabel": "1",
        "sourceVerseLabels": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17"
        ],
        "rationale": "Conoce los mandamientos dados al pueblo de Israel."
      },
      {
        "reference": "Mateo 22:34–40",
        "book": "Mateo",
        "chapter": 22,
        "start": 34,
        "end": 40,
        "sourceVerseLabel": "34",
        "sourceVerseLabels": [
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40"
        ],
        "rationale": "Jesús resume el camino de la ley en amar a Dios y al prójimo."
      }
    ]
  },
  {
    "topicId": "fruto-del-espiritu",
    "family": "Esperanza y vida cristiana",
    "subtopic": "Lo bueno que crece en nosotros",
    "synopsis": "La paciencia, la bondad y el amor se ven en nuestros actos. La Biblia usa la imagen de un fruto para hablar de ese crecimiento.",
    "status": "EN_REVISION",
    "pastoralCaution": "Frutos no permiten evaluar personas como mejores",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Gálatas 5:22–26",
        "book": "Gálatas",
        "chapter": 5,
        "start": 22,
        "end": 26,
        "sourceVerseLabel": "22",
        "sourceVerseLabels": [
          "22",
          "23",
          "24",
          "25",
          "26"
        ],
        "rationale": "Pablo enumera actitudes que ayudan a vivir mejor con otros."
      },
      {
        "reference": "Juan 15:1–8",
        "book": "Juan",
        "chapter": 15,
        "start": 1,
        "end": 8,
        "sourceVerseLabel": "1",
        "sourceVerseLabels": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "rationale": "Jesús utiliza la imagen de una vid para hablar de crecer y dar fruto."
      }
    ]
  }
];
export const previewByTopicId = new Map(conceptPreviews.map(row=>[row.topicId,row]));
