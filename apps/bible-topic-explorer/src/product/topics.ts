export interface TopicDefinition { id:string; label:string; family:string; aliases:readonly string[]; relatedTerms:readonly string[]; version:'m1-v1'; }
const rows: readonly [string,string,string,readonly string[],readonly string[]][] = [
  [
    "dios",
    "God",
    "God and Faith",
    [
      "Mister",
      "Jehovah"
    ],
    []
  ],
  [
    "jesus",
    "Jesus",
    "God and Faith",
    [
      "Christ",
      "Christ"
    ],
    []
  ],
  [
    "espiritu-santo",
    "Holy Spirit",
    "God and Faith",
    [
      "Spirit of God"
    ],
    []
  ],
  [
    "fe",
    "Faith",
    "God and Faith",
    [
      "believe",
      "believed",
      "they believed"
    ],
    [
      "trust",
      "believe"
    ]
  ],
  [
    "confianza",
    "Trust",
    "God and Faith",
    [
      "rely",
      "trusted"
    ],
    []
  ],
  [
    "gracia",
    "Grace",
    "God and Faith",
    [
      "favor"
    ],
    [
      "mercy",
      "salvation"
    ]
  ],
  [
    "salvacion",
    "Salvation",
    "God and Faith",
    [
      "save",
      "except",
      "saved"
    ],
    [
      "redemption",
      "eternal life"
    ]
  ],
  [
    "evangelio",
    "Gospel",
    "God and Faith",
    [
      "good news"
    ],
    [
      "Christ",
      "salvation"
    ]
  ],
  [
    "reino-de-dios",
    "Kingdom of God",
    "God and Faith",
    [
      "kingdom of heaven"
    ],
    [
      "kingdom",
      "justice"
    ]
  ],
  [
    "voluntad-de-dios",
    "God’s Will",
    "God and Faith",
    [
      "will of the Lord"
    ],
    [
      "obedience",
      "commandments"
    ]
  ],
  [
    "amor",
    "Love",
    "Love and Relationships",
    [
      "love",
      "loved",
      "loved ones"
    ],
    [
      "charity",
      "neighbor"
    ]
  ],
  [
    "amistad",
    "Friendship",
    "Love and Relationships",
    [
      "friend",
      "friends"
    ],
    []
  ],
  [
    "familia",
    "Family",
    "Love and Relationships",
    [
      "home",
      "home"
    ],
    []
  ],
  [
    "matrimonio",
    "Marriage",
    "Love and Relationships",
    [
      "husband",
      "women",
      "husband",
      "wife"
    ],
    []
  ],
  [
    "hijos",
    "Children",
    "Love and Relationships",
    [
      "son",
      "daughter",
      "daughters"
    ],
    []
  ],
  [
    "projimo",
    "Neighbor",
    "Love and Relationships",
    [
      "neighbors"
    ],
    []
  ],
  [
    "comunidad",
    "Community",
    "Love and Relationships",
    [
      "siblings",
      "congregation"
    ],
    []
  ],
  [
    "unidad",
    "Unity",
    "Love and Relationships",
    [
      "unanimous",
      "one"
    ],
    []
  ],
  [
    "reconciliacion",
    "Reconciliation",
    "Love and Relationships",
    [
      "reconcile",
      "reconciled"
    ],
    [
      "peace",
      "sorry"
    ]
  ],
  [
    "servicio",
    "Service",
    "Love and Relationships",
    [
      "serve",
      "servant"
    ],
    [
      "servant",
      "neighbor"
    ]
  ],
  [
    "perdon",
    "Forgiveness",
    "Forgiveness and Restoration",
    [
      "forgive",
      "forgave",
      "forgiven"
    ],
    [
      "mercy",
      "reconciliation"
    ]
  ],
  [
    "misericordia",
    "Mercy",
    "Forgiveness and Restoration",
    [
      "merciful",
      "sympathize"
    ],
    [
      "compassion",
      "sorry"
    ]
  ],
  [
    "arrepentimiento",
    "Repentance",
    "Forgiveness and Restoration",
    [
      "repent",
      "regret"
    ],
    [
      "confession",
      "sorry"
    ]
  ],
  [
    "pecado",
    "Sin",
    "Forgiveness and Restoration",
    [
      "sins",
      "sin"
    ],
    [
      "iniquity",
      "transgression"
    ]
  ],
  [
    "tentacion",
    "Temptation",
    "Forgiveness and Restoration",
    [
      "tempted",
      "tempt"
    ],
    []
  ],
  [
    "culpa",
    "Guilt",
    "Forgiveness and Restoration",
    [
      "guilty",
      "iniquity"
    ],
    []
  ],
  [
    "restauracion",
    "Restoration",
    "Forgiveness and Restoration",
    [
      "restore",
      "return"
    ],
    []
  ],
  [
    "confesion",
    "Confession",
    "Forgiveness and Restoration",
    [
      "confess",
      "we confess"
    ],
    []
  ],
  [
    "obediencia",
    "Obedience",
    "Forgiveness and Restoration",
    [
      "obey",
      "obeyed"
    ],
    []
  ],
  [
    "santidad",
    "Holiness",
    "Forgiveness and Restoration",
    [
      "holy",
      "saints"
    ],
    [
      "obedience",
      "holy"
    ]
  ],
  [
    "paz",
    "Peace",
    "Inner Life",
    [
      "pacify"
    ],
    [
      "reconciliation",
      "repose"
    ]
  ],
  [
    "esperanza",
    "Hope",
    "Inner Life",
    [
      "wait"
    ],
    [
      "promise",
      "wait"
    ]
  ],
  [
    "gozo",
    "Joy",
    "Inner Life",
    [
      "enjoy",
      "happiness"
    ],
    [
      "happiness",
      "joy"
    ]
  ],
  [
    "gratitud",
    "Gratitude",
    "Inner Life",
    [
      "thank"
    ],
    [
      "thanksgiving",
      "praise"
    ]
  ],
  [
    "paciencia",
    "Patience",
    "Inner Life",
    [
      "patient",
      "wait"
    ],
    []
  ],
  [
    "humildad",
    "Humility",
    "Inner Life",
    [
      "humble"
    ],
    [
      "meekness",
      "service"
    ]
  ],
  [
    "sabiduria",
    "Wisdom",
    "Inner Life",
    [
      "sage",
      "wise"
    ],
    [
      "understanding",
      "prudence"
    ]
  ],
  [
    "valentia",
    "Courage",
    "Inner Life",
    [
      "brave",
      "effort"
    ],
    []
  ],
  [
    "contentamiento",
    "Contentment",
    "Inner Life",
    [
      "glad"
    ],
    []
  ],
  [
    "dominio-propio",
    "Self-control",
    "Inner Life",
    [
      "temperance"
    ],
    [
      "temperance",
      "discipline"
    ]
  ],
  [
    "miedo",
    "Fear",
    "Difficulties and Emotions",
    [
      "fear",
      "fear"
    ],
    [
      "fear",
      "trust"
    ]
  ],
  [
    "ansiedad",
    "Anxiety",
    "Difficulties and Emotions",
    [
      "eagerness",
      "desires"
    ],
    [
      "eagerness",
      "worry"
    ]
  ],
  [
    "tristeza",
    "Sadness",
    "Difficulties and Emotions",
    [
      "sad",
      "cry"
    ],
    []
  ],
  [
    "soledad",
    "Loneliness",
    "Difficulties and Emotions",
    [
      "only",
      "helpless"
    ],
    []
  ],
  [
    "enojo",
    "Anger",
    "Difficulties and Emotions",
    [
      "gonna",
      "get angry"
    ],
    []
  ],
  [
    "sufrimiento",
    "Suffering",
    "Difficulties and Emotions",
    [
      "suffer",
      "affliction"
    ],
    [
      "affliction",
      "patience"
    ]
  ],
  [
    "duelo",
    "Grief",
    "Difficulties and Emotions",
    [
      "mourning",
      "cry"
    ],
    [
      "comfort",
      "cry"
    ]
  ],
  [
    "desanimo",
    "Discouragement",
    "Difficulties and Emotions",
    [
      "faint",
      "falter"
    ],
    []
  ],
  [
    "preocupacion",
    "Worry",
    "Difficulties and Emotions",
    [
      "eagerness",
      "careful"
    ],
    []
  ],
  [
    "cansancio",
    "Fatigue",
    "Difficulties and Emotions",
    [
      "tired",
      "fatigue"
    ],
    []
  ],
  [
    "oracion",
    "Prayer",
    "Prayer and Spiritual Practice",
    [
      "pray",
      "pray"
    ],
    [
      "request",
      "intercession"
    ]
  ],
  [
    "alabanza",
    "Praise",
    "Prayer and Spiritual Practice",
    [
      "praise",
      "praise"
    ],
    [
      "worship",
      "thanksgiving"
    ]
  ],
  [
    "adoracion",
    "Worship",
    "Prayer and Spiritual Practice",
    [
      "worship",
      "adore"
    ],
    [
      "praise",
      "God"
    ]
  ],
  [
    "ayuno",
    "Fasting",
    "Prayer and Spiritual Practice",
    [
      "fast",
      "fast"
    ],
    []
  ],
  [
    "meditacion",
    "Meditation",
    "Prayer and Spiritual Practice",
    [
      "meditate"
    ],
    [
      "word",
      "law"
    ]
  ],
  [
    "lectura-biblica",
    "Bible Reading",
    "Prayer and Spiritual Practice",
    [
      "Writing",
      "Scriptures"
    ],
    [
      "Scriptures",
      "words"
    ]
  ],
  [
    "escucha",
    "Listening",
    "Prayer and Spiritual Practice",
    [
      "hear",
      "hey"
    ],
    []
  ],
  [
    "peticion",
    "Petition",
    "Prayer and Spiritual Practice",
    [
      "ask",
      "ask"
    ],
    []
  ],
  [
    "intercesion",
    "Intercession",
    "Prayer and Spiritual Practice",
    [
      "intercede",
      "request"
    ],
    []
  ],
  [
    "accion-de-gracias",
    "Thanksgiving",
    "Prayer and Spiritual Practice",
    [
      "thank you",
      "gratitude"
    ],
    []
  ],
  [
    "honestidad",
    "Honesty",
    "Character and Conduct",
    [
      "TRUE",
      "full"
    ],
    []
  ],
  [
    "generosidad",
    "Generosity",
    "Character and Conduct",
    [
      "generous",
      "give"
    ],
    []
  ],
  [
    "justicia",
    "Justice",
    "Character and Conduct",
    [
      "fair",
      "fair"
    ],
    [
      "judgment",
      "fair"
    ]
  ],
  [
    "compasion",
    "Compassion",
    "Character and Conduct",
    [
      "compassionate",
      "sympathize"
    ],
    [
      "mercy",
      "neighbor"
    ]
  ],
  [
    "bondad",
    "Kindness",
    "Character and Conduct",
    [
      "Well",
      "benignity"
    ],
    [
      "love",
      "mercy"
    ]
  ],
  [
    "fidelidad",
    "Faithfulness",
    "Character and Conduct",
    [
      "faithful",
      "faithful"
    ],
    [
      "faith",
      "faithful"
    ]
  ],
  [
    "responsabilidad",
    "Responsibility",
    "Character and Conduct",
    [
      "butler",
      "charge"
    ],
    []
  ],
  [
    "trabajo",
    "Work",
    "Character and Conduct",
    [
      "work",
      "construction site"
    ],
    []
  ],
  [
    "descanso",
    "Rest",
    "Character and Conduct",
    [
      "repose",
      "rest"
    ],
    []
  ],
  [
    "disciplina",
    "Discipline",
    "Character and Conduct",
    [
      "correction",
      "discipline"
    ],
    []
  ],
  [
    "decisiones",
    "Decisions",
    "Decisions and Daily Life",
    [
      "choose",
      "choose"
    ],
    []
  ],
  [
    "proposito",
    "Purpose",
    "Decisions and Daily Life",
    [
      "purposes",
      "plan"
    ],
    []
  ],
  [
    "direccion",
    "Guidance",
    "Decisions and Daily Life",
    [
      "guide",
      "path"
    ],
    [
      "wisdom",
      "path"
    ]
  ],
  [
    "dinero",
    "Money",
    "Decisions and Daily Life",
    [
      "riches",
      "treasure"
    ],
    [
      "riches",
      "generosity"
    ]
  ],
  [
    "trabajo-y-vocacion",
    "Work and Vocation",
    "Decisions and Daily Life",
    [
      "construction site",
      "job"
    ],
    []
  ],
  [
    "estudios",
    "Studies",
    "Decisions and Daily Life",
    [
      "learn",
      "teach"
    ],
    []
  ],
  [
    "tiempo",
    "Time",
    "Decisions and Daily Life",
    [
      "days",
      "hour"
    ],
    []
  ],
  [
    "salud",
    "Health",
    "Decisions and Daily Life",
    [
      "heal",
      "health"
    ],
    [
      "heal",
      "disease"
    ]
  ],
  [
    "sexualidad",
    "Sexuality",
    "Decisions and Daily Life",
    [
      "fornication",
      "adultery"
    ],
    []
  ],
  [
    "conflictos",
    "Conflicts",
    "Decisions and Daily Life",
    [
      "contest",
      "lawsuit"
    ],
    [
      "peace",
      "reconciliation"
    ]
  ],
  [
    "creacion",
    "Creation",
    "Bible and Understanding",
    [
      "create",
      "believe"
    ],
    [
      "God",
      "create"
    ]
  ],
  [
    "pacto",
    "Covenant",
    "Bible and Understanding",
    [
      "alliance",
      "covenant"
    ],
    [
      "promise",
      "law"
    ]
  ],
  [
    "ley",
    "Law",
    "Bible and Understanding",
    [
      "mandate",
      "statutes"
    ],
    []
  ],
  [
    "profecia",
    "Prophecy",
    "Bible and Understanding",
    [
      "prophet",
      "prophesy"
    ],
    [
      "prophet",
      "promise"
    ]
  ],
  [
    "parabolas",
    "Parables",
    "Bible and Understanding",
    [
      "parable"
    ],
    []
  ],
  [
    "milagros",
    "Miracles",
    "Bible and Understanding",
    [
      "signs",
      "wonders"
    ],
    []
  ],
  [
    "resurreccion",
    "Resurrection",
    "Bible and Understanding",
    [
      "resurrect",
      "resurrected"
    ],
    [
      "life",
      "Jesus"
    ]
  ],
  [
    "cruz",
    "Cross",
    "Bible and Understanding",
    [
      "crucify",
      "crucified"
    ],
    [
      "Christ",
      "salvation"
    ]
  ],
  [
    "mandamientos",
    "Commandments",
    "Bible and Understanding",
    [
      "commandment",
      "command"
    ],
    []
  ],
  [
    "promesas",
    "Promises",
    "Bible and Understanding",
    [
      "promise",
      "promised"
    ],
    [
      "covenant",
      "hope"
    ]
  ],
  [
    "vida-eterna",
    "Eternal Life",
    "Hope and Christian Life",
    [
      "perpetual life"
    ],
    [
      "salvation",
      "Resurrection"
    ]
  ],
  [
    "muerte",
    "Death",
    "Hope and Christian Life",
    [
      "die",
      "dead"
    ],
    [
      "Resurrection",
      "life"
    ]
  ],
  [
    "juicio",
    "Judgment",
    "Hope and Christian Life",
    [
      "judge",
      "judge"
    ],
    [
      "justice",
      "judge"
    ]
  ],
  [
    "cielo",
    "Heaven",
    "Hope and Christian Life",
    [
      "Heavens"
    ],
    []
  ],
  [
    "mision",
    "Mission",
    "Hope and Christian Life",
    [
      "send",
      "sent"
    ],
    [
      "gospel",
      "send"
    ]
  ],
  [
    "discipulado",
    "Discipleship",
    "Hope and Christian Life",
    [
      "disciple",
      "disciples"
    ],
    [
      "disciple",
      "continue"
    ]
  ],
  [
    "testimonio",
    "Testimony",
    "Hope and Christian Life",
    [
      "witness",
      "witnesses"
    ],
    [
      "witness",
      "gospel"
    ]
  ],
  [
    "iglesia",
    "Church",
    "Hope and Christian Life",
    [
      "churches",
      "congregation"
    ],
    [
      "community",
      "siblings"
    ]
  ],
  [
    "dones",
    "Gifts",
    "Hope and Christian Life",
    [
      "gift",
      "ministries"
    ],
    [
      "service",
      "Spirit"
    ]
  ],
  [
    "fruto-del-espiritu",
    "Fruit of the Spirit",
    "Hope and Christian Life",
    [
      "fruit",
      "Spirit"
    ],
    [
      "love",
      "joy",
      "peace"
    ]
  ]
];
export const topicCatalog: readonly TopicDefinition[] = rows.map(([id,label,family,aliases,relatedTerms])=>({id,label,family,aliases,relatedTerms,version:'m1-v1'}));
export function normalizeTopicText(value:string){return value.trim().toLocaleLowerCase('en').normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
const topicIndex=new Map<string,TopicDefinition>();
for(const topic of topicCatalog){for(const key of [topic.id,topic.label,...topic.aliases]) topicIndex.set(normalizeTopicText(key),topic);}
export function resolveTopic(value:string):TopicDefinition|undefined{return topicIndex.get(normalizeTopicText(value));}
export function isTopic(value:string){return resolveTopic(value)!==undefined;}
