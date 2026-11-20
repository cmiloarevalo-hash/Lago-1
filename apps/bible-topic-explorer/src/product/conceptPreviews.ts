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
    "family": "God and Faith",
    "subtopic": "Who is God for you?",
    "synopsis": "What is God like and why do so many people talk about him? These passages show how the Bible presents it and invite us to ask our own questions.",
    "status": "EN_REVISION",
    "pastoralCaution": "Do not use Acts 17 as full approval of local cults",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Deuteronomy 6:4–5",
        "book": "Deuteronomy",
        "chapter": 6,
        "start": 4,
        "end": 5,
        "sourceVerseLabel": "4",
        "sourceVerseLabels": [
          "4",
          "5"
        ],
        "rationale": "Discover how to talk about loving God with all your heart."
      },
      {
        "reference": "Acts 17:24–28",
        "book": "Acts",
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
        "rationale": "Paul talks about God with people who had other beliefs."
      }
    ]
  },
  {
    "topicId": "jesus",
    "family": "God and Faith",
    "subtopic": "Who is Jesus?",
    "synopsis": "Many know his name, but what did Jesus say about himself? Learn what his friends thought and how the Gospel of John begins.",
    "status": "EN_REVISION",
    "pastoralCaution": "Mark includes Peter's misunderstanding",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Mark 8:27–31",
        "book": "Mark",
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
        "rationale": "Jesus asks his friends who they think he is."
      },
      {
        "reference": "John 1:1–14",
        "book": "John",
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
        "rationale": "John introduces Jesus and explains what his arrival means."
      }
    ]
  },
  {
    "topicId": "confianza",
    "family": "God and Faith",
    "subtopic": "When you don't know what to do",
    "synopsis": "There are days when everything seems uncertain. These texts invite us to recognize what we feel and think about where we find support.",
    "status": "EN_REVISION",
    "pastoralCaution": "It is not a substitute for prudent decisions or professional help",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Psalms 56:3–4",
        "book": "Psalms",
        "chapter": 56,
        "start": 3,
        "end": 4,
        "sourceVerseLabel": "3",
        "sourceVerseLabels": [
          "3",
          "4"
        ],
        "rationale": "A person recognizes that they feel afraid and looks to God for support."
      },
      {
        "reference": "Matthew 6:25–34",
        "book": "Matthew",
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
        "rationale": "Jesus speaks about the concerns of every day."
      }
    ]
  },
  {
    "topicId": "voluntad-de-dios",
    "family": "God and Faith",
    "subtopic": "Choose what you do well",
    "synopsis": "How to decide when there are several options? The Bible invites us to think about justice, kindness, and caring for others.",
    "status": "EN_REVISION",
    "pastoralCaution": "Micah denounces real inequality",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Micah 6:6–8",
        "book": "Micah",
        "chapter": 6,
        "start": 6,
        "end": 8,
        "sourceVerseLabel": "6",
        "sourceVerseLabels": [
          "6",
          "7",
          "8"
        ],
        "rationale": "Micah emphasizes justice and kindness."
      },
      {
        "reference": "Romans 12:1–2",
        "book": "Romans",
        "chapter": 12,
        "start": 1,
        "end": 2,
        "sourceVerseLabel": "1",
        "sourceVerseLabels": [
          "1",
          "2"
        ],
        "rationale": "Paul invites us to reflect on how we think and act."
      }
    ]
  },
  {
    "topicId": "amor",
    "family": "Love and Relationships",
    "subtopic": "Love with facts",
    "synopsis": "Affection is evident in how we treat people. Here you can discover what it means to love beyond words.",
    "status": "EN_REVISION",
    "pastoralCaution": "Do not use 1 Cor 13 to tolerate abuse",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "1 Corinthians 13:1–13",
        "book": "1 Corinthians",
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
        "rationale": "Paul shows why love matters more than appearances."
      },
      {
        "reference": "John 13:34–35",
        "book": "John",
        "chapter": 13,
        "start": 34,
        "end": 35,
        "sourceVerseLabel": "34",
        "sourceVerseLabels": [
          "34",
          "35"
        ],
        "rationale": "Jesus invites his followers to care for each other."
      }
    ]
  },
  {
    "topicId": "matrimonio",
    "family": "Love and Relationships",
    "subtopic": "Respect in relationships",
    "synopsis": "A healthy relationship needs respect, listening and mutual care. Read these passages and talk about how to build relationships that do good.",
    "status": "EN_REVISION",
    "pastoralCaution": "Do not force a model on personal situations",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Genesis 2:18–25",
        "book": "Genesis",
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
        "rationale": "A story about company and the union between people."
      },
      {
        "reference": "1 Corinthians 13:4–7",
        "book": "1 Corinthians",
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
        "rationale": "Paul describes gestures of love that serve every relationship."
      }
    ]
  },
  {
    "topicId": "perdon",
    "family": "Forgiveness and Restoration",
    "subtopic": "What do we do after damage?",
    "synopsis": "Forgiveness can be difficult and does not mean allowing the harm to continue. These texts help us think about mercy and responsibility.",
    "status": "EN_REVISION",
    "pastoralCaution": "Forgiveness does not cancel protection and justice",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Matthew 18:21–35",
        "book": "Matthew",
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
        "rationale": "A story about Jesus asks what we do with the forgiveness we receive."
      },
      {
        "reference": "Luke 23:32–34",
        "book": "Luke",
        "chapter": 23,
        "start": 32,
        "end": 34,
        "sourceVerseLabel": "32",
        "sourceVerseLabels": [
          "32",
          "33",
          "34"
        ],
        "rationale": "Jesus prays even in a moment of deep suffering."
      }
    ]
  },
  {
    "topicId": "tentacion",
    "family": "Forgiveness and Restoration",
    "subtopic": "Decide under pressure",
    "synopsis": "Sometimes they ask us to do things we don't want to do. These passages help us think before choosing and seek support when we need it.",
    "status": "EN_REVISION",
    "pastoralCaution": "Do not imply that trauma equals temptation",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Matthew 4:1–11",
        "book": "Matthew",
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
        "rationale": "Jesus faces difficult decisions and responds firmly."
      },
      {
        "reference": "1 Corinthians 10:12–13",
        "book": "1 Corinthians",
        "chapter": 10,
        "start": 12,
        "end": 13,
        "sourceVerseLabel": "12",
        "sourceVerseLabels": [
          "12",
          "13"
        ],
        "rationale": "Paul encourages us to stay alert and look for a way out."
      }
    ]
  },
  {
    "topicId": "paz",
    "family": "Inner Life",
    "subtopic": "Find calm and build peace",
    "synopsis": "Peace is not just feeling calm: it is also learning to treat others well. What can you do today to bring a little peace?",
    "status": "EN_REVISION",
    "pastoralCaution": "Do not equate peace with the absence of conflict",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "John 14:25–27",
        "book": "John",
        "chapter": 14,
        "start": 25,
        "end": 27,
        "sourceVerseLabel": "25",
        "sourceVerseLabels": [
          "25",
          "26",
          "27"
        ],
        "rationale": "Jesus speaks of peace to his friends before saying goodbye."
      },
      {
        "reference": "Matthew 5:9–12",
        "book": "Matthew",
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
        "rationale": "Jesus calls happy those who work for peace."
      }
    ]
  },
  {
    "topicId": "esperanza",
    "family": "Inner Life",
    "subtopic": "Keep going when it gets hard",
    "synopsis": "When something goes wrong, it is normal to lose heart. These texts show that we can maintain hope without denying difficult times.",
    "status": "PROPUESTO",
    "pastoralCaution": "Don't promise instant solution",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Romans 5:1–5",
        "book": "Romans",
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
        "rationale": "Paul relates hope to learning to persevere."
      },
      {
        "reference": "1 Peter 1:3–9",
        "book": "1 Peter",
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
        "rationale": "A letter encourages maintaining hope in the midst of trials."
      }
    ]
  },
  {
    "topicId": "gozo",
    "family": "Inner Life",
    "subtopic": "Unfeigned joy",
    "synopsis": "We don't have to smile all the time. The Bible speaks of a joy that coexists with difficult days and with the joy of being reunited.",
    "status": "EN_REVISION",
    "pastoralCaution": "Sadness is still legitimate",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Philippians 4:4–9",
        "book": "Philippians",
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
        "rationale": "Paul invites us to joy and to take care of what we think."
      },
      {
        "reference": "Luke 15:3–7",
        "book": "Luke",
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
        "rationale": "Jesus tells a story about the joy of finding what is lost."
      }
    ]
  },
  {
    "topicId": "paciencia",
    "family": "Inner Life",
    "subtopic": "Learn to wait",
    "synopsis": "Waiting is not always easy, especially when we want quick results. These texts show how to live that time with patience and love.",
    "status": "EN_REVISION",
    "pastoralCaution": "No normalizar abusos",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "James 5:7–11",
        "book": "James",
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
        "rationale": "Santiago compares patience with the waiting of someone who sows."
      },
      {
        "reference": "1 Corinthians 13:4–7",
        "book": "1 Corinthians",
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
        "rationale": "Paul reminds us that love also knows how to wait."
      }
    ]
  },
  {
    "topicId": "miedo",
    "family": "Difficulties and Emotions",
    "subtopic": "When you feel afraid",
    "synopsis": "Feeling fear is human. These stories show that we can talk about what scares us and ask for company.",
    "status": "EN_REVISION",
    "pastoralCaution": "Do not use story to deny objective dangers",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Psalms 56:3–4",
        "book": "Psalms",
        "chapter": 56,
        "start": 3,
        "end": 4,
        "sourceVerseLabel": "3",
        "sourceVerseLabels": [
          "3",
          "4"
        ],
        "rationale": "A psalm puts a person's fear into words."
      },
      {
        "reference": "Mark 4:35–41",
        "book": "Mark",
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
        "rationale": "Jesus' friends are scared during a storm."
      }
    ]
  },
  {
    "topicId": "ansiedad",
    "family": "Difficulties and Emotions",
    "subtopic": "When worries weigh heavy",
    "synopsis": "Sometimes your head won't stop spinning. These passages invite us to talk about what we feel and seek support; They do not replace professional help.",
    "status": "EN_REVISION",
    "pastoralCaution": "Do not substitute clinical care",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Matthew 6:25–34",
        "book": "Matthew",
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
        "rationale": "Jesus talks about everyday worries."
      },
      {
        "reference": "Philippians 4:6–9",
        "book": "Philippians",
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
        "rationale": "Paul mentions prayer and thoughts that help take care of the heart."
      }
    ]
  },
  {
    "topicId": "sufrimiento",
    "family": "Difficulties and Emotions",
    "subtopic": "Don't go through difficult days alone",
    "synopsis": "When someone suffers, listening and accompanying can make a difference. These texts speak of hope and shared comfort.",
    "status": "EN_REVISION",
    "pastoralCaution": "No moralizar enfermedad o duelo",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Romans 8:18–27",
        "book": "Romans",
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
        "rationale": "Paul recognizes that all creation goes through difficult times."
      },
      {
        "reference": "2 Corinthians 1:3–7",
        "book": "2 Corinthians",
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
        "rationale": "A letter talks about receiving and sharing comfort."
      }
    ]
  },
  {
    "topicId": "oracion",
    "family": "Prayer and Spiritual Practice",
    "subtopic": "Talk to God with confidence",
    "synopsis": "You don't need perfect words to pray. These passages present simple ways to talk to God and listen.",
    "status": "EN_REVISION",
    "pastoralCaution": "Do not confuse asking with obtaining any desire",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Matthew 6:5–13",
        "book": "Matthew",
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
        "rationale": "Jesus teaches to pray with simplicity, without seeking applause."
      },
      {
        "reference": "Luke 11:1–13",
        "book": "Luke",
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
        "rationale": "The disciples ask Jesus to teach them how to pray."
      }
    ]
  },
  {
    "topicId": "adoracion",
    "family": "Prayer and Spiritual Practice",
    "subtopic": "Why do we worship?",
    "synopsis": "Worship is more than repeating songs or gestures. Read how the Bible connects worship with truth, gratitude, and our way of life.",
    "status": "EN_REVISION",
    "pastoralCaution": "Don't confuse worship with just music",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "John 4:19–26",
        "book": "John",
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
        "rationale": "Jesus talks about worship with a Samaritan woman."
      },
      {
        "reference": "Psalms 95:1–7",
        "book": "Psalms",
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
        "rationale": "A psalm invites us to sing and thank God."
      }
    ]
  },
  {
    "topicId": "ayuno",
    "family": "Prayer and Spiritual Practice",
    "subtopic": "A meaningful practice",
    "synopsis": "Fasting appears in the Bible as a spiritual practice, but it should never be imposed. These texts ask what matters more: appearing good or acting justly.",
    "status": "EN_REVISION",
    "pastoralCaution": "No imponer ayuno alimentario a menores",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Matthew 6:16–18",
        "book": "Matthew",
        "chapter": 6,
        "start": 16,
        "end": 18,
        "sourceVerseLabel": "16",
        "sourceVerseLabels": [
          "16",
          "17",
          "18"
        ],
        "rationale": "Jesus questions making a spectacle of fasting."
      },
      {
        "reference": "Isaiah 58:3–9",
        "book": "Isaiah",
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
        "rationale": "Isaiah relates religious practices to helping those in need."
      }
    ]
  },
  {
    "topicId": "generosidad",
    "family": "Character and Conduct",
    "subtopic": "Share without obligation",
    "synopsis": "Being generous can be giving time, listening or helping. The Bible invites us to think about what it means to share without pressuring anyone.",
    "status": "EN_REVISION",
    "pastoralCaution": "Do not use widow to pressure donations",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Mark 12:41–44",
        "book": "Mark",
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
        "rationale": "Jesus observes a small offering in a difficult context."
      },
      {
        "reference": "2 Corinthians 9:6–11",
        "book": "2 Corinthians",
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
        "rationale": "Paul talks about giving freely and without pressure."
      }
    ]
  },
  {
    "topicId": "decisiones",
    "family": "Decisions and Daily Life",
    "subtopic": "Choose calmly",
    "synopsis": "Small decisions matter too. These passages invite us to think about the consequences and to choose responsibly.",
    "status": "EN_REVISION",
    "pastoralCaution": "No coaccionar elecciones vocacionales",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Deuteronomy 30:15–20",
        "book": "Deuteronomy",
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
        "rationale": "A text proposes to think about what path leads to life."
      },
      {
        "reference": "Luke 14:28–33",
        "book": "Luke",
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
        "rationale": "Jesus uses an everyday example about planning before acting."
      }
    ]
  },
  {
    "topicId": "sexualidad",
    "family": "Decisions and Daily Life",
    "subtopic": "Take care of your body and your decisions",
    "synopsis": "Your body and your limits deserve respect. These passages open up questions about dignity, responsibility, and relationships without pressure.",
    "status": "EN_REVISION",
    "pastoralCaution": "Expert Pastoral Review; do not use as coercion",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "1 Corinthians 6:12–20",
        "book": "1 Corinthians",
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
        "rationale": "Paul talks about taking care of the body and acting responsibly."
      },
      {
        "reference": "Genesis 2:18–25",
        "book": "Genesis",
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
        "rationale": "A biblical story invites us to think about company and bonding."
      }
    ]
  },
  {
    "topicId": "mandamientos",
    "family": "Bible and Understanding",
    "subtopic": "Rules to learn to care",
    "synopsis": "The rules may seem like many. These passages help us discover how the commandments relate to respect and love for others.",
    "status": "EN_REVISION",
    "pastoralCaution": "Do not use to threaten minors",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Exodus 20:1–17",
        "book": "Exodus",
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
        "rationale": "Know the commandments given to the people of Israel."
      },
      {
        "reference": "Matthew 22:34–40",
        "book": "Matthew",
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
        "rationale": "Jesus summarizes the way of the law in loving God and neighbor."
      }
    ]
  },
  {
    "topicId": "fruto-del-espiritu",
    "family": "Hope and Christian Life",
    "subtopic": "The good that grows in us",
    "synopsis": "Patience, kindness and love are seen in our actions. The Bible uses the image of a fruit to talk about that growth.",
    "status": "EN_REVISION",
    "pastoralCaution": "Fruits do not allow people to be evaluated as better",
    "existenceChecked": true,
    "passages": [
      {
        "reference": "Galatians 5:22–26",
        "book": "Galatians",
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
        "rationale": "Paul lists attitudes that help to live better with others."
      },
      {
        "reference": "John 15:1–8",
        "book": "John",
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
        "rationale": "Jesus uses the image of a vine to talk about growing and bearing fruit."
      }
    ]
  }
];
export const previewByTopicId = new Map(conceptPreviews.map(row=>[row.topicId,row]));
