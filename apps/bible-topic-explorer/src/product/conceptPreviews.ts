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
    "subtopic": "identidad y relación",
    "synopsis": "Dios: explorar identidad y relación comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Confesión de unicidad y llamado al amor integral"
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
        "rationale": "Discurso de Pablo sobre Creador y cercanía, en contexto de Atenas"
      }
    ]
  },
  {
    "topicId": "jesus",
    "family": "Dios y fe",
    "subtopic": "identidad y misión",
    "synopsis": "Jesús: explorar identidad y misión comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Identidad de Jesús unida al anuncio de pasión"
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
        "rationale": "Prólogo del evangelio: Verbo y encarnación"
      }
    ]
  },
  {
    "topicId": "confianza",
    "family": "Dios y fe",
    "subtopic": "apoyo ante incertidumbre",
    "synopsis": "Confianza: explorar apoyo ante incertidumbre comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "El salmista admite temor y busca apoyo"
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
        "rationale": "Jesús aborda preocupaciones materiales"
      }
    ]
  },
  {
    "topicId": "voluntad-de-dios",
    "family": "Dios y fe",
    "subtopic": "discernimiento y justicia",
    "synopsis": "Voluntad de dios: explorar discernimiento y justicia comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Prácticas que Dios requiere frente al ritualismo"
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
        "rationale": "Renovar criterios de discernimiento"
      }
    ]
  },
  {
    "topicId": "amor",
    "family": "Amor y relaciones",
    "subtopic": "acciones de amor",
    "synopsis": "Amor: explorar acciones de amor comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Amor como criterio de dones y prácticas"
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
        "rationale": "Mandamiento de reconocerse por amor mutuo"
      }
    ]
  },
  {
    "topicId": "matrimonio",
    "family": "Amor y relaciones",
    "subtopic": "alianza y respeto",
    "synopsis": "Matrimonio: explorar alianza y respeto comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Relato fundante de compañía y vínculo"
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
        "rationale": "Amor práctico, contextualizado a comunidad no solo parejas"
      }
    ]
  },
  {
    "topicId": "perdon",
    "family": "Perdón y restauración",
    "subtopic": "perdón y responsabilidad",
    "synopsis": "Perdón: explorar perdón y responsabilidad comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Parábola advierte incoherencia de falta de misericordia"
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
        "rationale": "Jesús ora por quienes le dañan"
      }
    ]
  },
  {
    "topicId": "tentacion",
    "family": "Perdón y restauración",
    "subtopic": "decidir bajo presión",
    "synopsis": "Tentación: explorar decidir bajo presión comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Narración de tentaciones de Jesús"
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
        "rationale": "Pablo aconseja discernir riesgos en comunidad"
      }
    ]
  },
  {
    "topicId": "paz",
    "family": "Vida interior",
    "subtopic": "paz interior y activa",
    "synopsis": "Paz: explorar paz interior y activa comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Paz prometida en situación de despedida"
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
        "rationale": "Bienaventuranza de quienes construyen paz"
      }
    ]
  },
  {
    "topicId": "esperanza",
    "family": "Vida interior",
    "subtopic": "esperanza resiliente",
    "synopsis": "Esperanza: explorar esperanza resiliente comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Esperanza vinculada a perseverancia y dificultades"
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
        "rationale": "Horizonte de esperanza con pruebas reales"
      }
    ]
  },
  {
    "topicId": "gozo",
    "family": "Vida interior",
    "subtopic": "alegría no forzada",
    "synopsis": "Gozo: explorar alegría no forzada comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Invitación a alegrarse junto a práctica de cuidado"
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
        "rationale": "Fiesta por encuentro de lo perdido"
      }
    ]
  },
  {
    "topicId": "paciencia",
    "family": "Vida interior",
    "subtopic": "espera activa",
    "synopsis": "Paciencia: explorar espera activa comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Imagen del labrador y perseverancia"
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
        "rationale": "Paciencia en descripción del amor"
      }
    ]
  },
  {
    "topicId": "miedo",
    "family": "Dificultades y emociones",
    "subtopic": "temor y compañía",
    "synopsis": "Miedo: explorar temor y compañía comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "El salmista nombra el temor"
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
        "rationale": "Discípulos asustados durante tormenta"
      }
    ]
  },
  {
    "topicId": "ansiedad",
    "family": "Dificultades y emociones",
    "subtopic": "preocupación y apoyo",
    "synopsis": "Ansiedad: explorar preocupación y apoyo comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Enseñanza sobre afán cotidiano"
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
        "rationale": "Oración y prácticas comunitarias en incertidumbre"
      }
    ]
  },
  {
    "topicId": "sufrimiento",
    "family": "Dificultades y emociones",
    "subtopic": "acompañamiento en dolor",
    "synopsis": "Sufrimiento: explorar acompañamiento en dolor comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Esperanza situada en gemido y fragilidad"
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
        "rationale": "Consuelo compartido en sufrimientos"
      }
    ]
  },
  {
    "topicId": "oracion",
    "family": "Oración y práctica espiritual",
    "subtopic": "hablar con Dios",
    "synopsis": "Oración: explorar hablar con Dios comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Enseñanza sobre oración sin exhibicionismo"
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
        "rationale": "Discípulos piden aprender a orar"
      }
    ]
  },
  {
    "topicId": "adoracion",
    "family": "Oración y práctica espiritual",
    "subtopic": "adorar con sentido",
    "synopsis": "Adoración: explorar adorar con sentido comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Diálogo samaritana vincula culto y verdad"
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
        "rationale": "Salmo llama a postrarse y reconocer cuidado"
      }
    ]
  },
  {
    "topicId": "ayuno",
    "family": "Oración y práctica espiritual",
    "subtopic": "prácticas libres",
    "synopsis": "Ayuno: explorar prácticas libres comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Jesús rechaza ostentación del ayuno"
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
        "rationale": "Profeta vincula ayuno con justicia social"
      }
    ]
  },
  {
    "topicId": "generosidad",
    "family": "Carácter y conducta",
    "subtopic": "dar sin presión",
    "synopsis": "Generosidad: explorar dar sin presión comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Ofrenda viuda en contexto de crítica institucional"
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
        "rationale": "Dar voluntariamente, sin tristeza ni compulsión"
      }
    ]
  },
  {
    "topicId": "decisiones",
    "family": "Decisiones y vida cotidiana",
    "subtopic": "elección prudente",
    "synopsis": "Decisiones: explorar elección prudente comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Elegir camino de vida en alianza"
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
        "rationale": "Calcular antes de emprender compromiso"
      }
    ]
  },
  {
    "topicId": "sexualidad",
    "family": "Decisiones y vida cotidiana",
    "subtopic": "dignidad y consentimiento",
    "synopsis": "Sexualidad: explorar dignidad y consentimiento comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Pablo debate cuerpo y responsabilidad en comunidad"
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
        "rationale": "Relato de relación y compañía"
      }
    ]
  },
  {
    "topicId": "mandamientos",
    "family": "Biblia y comprensión",
    "subtopic": "normas y amor",
    "synopsis": "Mandamientos: explorar normas y amor comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Diez mandamientos en alianza"
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
        "rationale": "Jesús resume ley en dos amores"
      }
    ]
  },
  {
    "topicId": "fruto-del-espiritu",
    "family": "Esperanza y vida cristiana",
    "subtopic": "frutos y vida",
    "synopsis": "Fruto del espíritu: explorar frutos y vida comparando dos escenas o enseñanzas en contexto, con una aplicación no coercitiva.",
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
        "rationale": "Contraste de frutos y obras en Gálatas"
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
        "rationale": "Permanecer y dar fruto en imagen de vid"
      }
    ]
  }
];
export const previewByTopicId = new Map(conceptPreviews.map(row=>[row.topicId,row]));
