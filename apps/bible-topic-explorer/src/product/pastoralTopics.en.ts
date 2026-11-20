/** Bible – Pastoral Guide — original editorial revision 1.30, 16 chapters, 4 themes.
 * SOURCE OF TRUTH: docs/guia-pastoral/Guia_Pastoral_El_camino_de_Jesus_y_sus_ensenanzas_v1.30.docx
 * Original SHA-256: B44ECF5AA4FCF78CE852C8A0FB0A6335452DA5779207657E4E3142F0B935FB59
 * English translation of the author-supplied Spanish DOCX; pastoral editorial review pending.
 * Reference labels are separated into explicit same-chapter ranges for offline navigation.
 */
export const PASTORAL_GUIDE_VERSION='1.30';
export const PASTORAL_GUIDE_TITLE="Bible – Pastoral Guide";
export const PASTORAL_GUIDE_SUBTITLE="The path of Jesus and his teachings";
export const PASTORAL_GUIDE_INTRO="These pages invite you to know Jesus through his words, his encounters and his actions. Jesus knew the Scriptures that today make up the Old Testament and taught us to discover the love of God the Father. Each chapter offers biblical readings from the Old and New Testaments, a close reflection and a question to continue learning.";
export type PastoralReference={label:string;book:string;chapter:number;start:number;end:number};
export type PastoralTopic={id:string;number:number;title:string;themeId:number;themeTitle:string;themeObjective:string;readingsOld:readonly PastoralReference[];readingsNew:readonly PastoralReference[];paragraphs:readonly string[];question:string;questionKind:'introspection'|'debate'};
export const pastoralTopics:readonly PastoralTopic[]=[
  {
    "id": "cap-01",
    "number": 1,
    "title": "What is the Bible and where does it come from?",
    "themeId": 1,
    "themeTitle": "Discover the Bible and know Jesus",
    "themeObjective": "Learn to recognize the Scriptures and understand how Jesus knew them, interpreted them, and used them to speak about the Father.",
    "readingsOld": [
      {
        "label": "Psalm 119:105",
        "book": "Psalms",
        "chapter": 119,
        "start": 105,
        "end": 105
      },
      {
        "label": "Nehemiah 8:8",
        "book": "Nehemiah",
        "chapter": 8,
        "start": 8,
        "end": 8
      }
    ],
    "readingsNew": [
      {
        "label": "Luke 24:44–45",
        "book": "Luke",
        "chapter": 24,
        "start": 44,
        "end": 45
      },
      {
        "label": "Matthew 22:29",
        "book": "Matthew",
        "chapter": 22,
        "start": 29,
        "end": 29
      }
    ],
    "paragraphs": [
      "The Bible was not written in one go. It brings together texts from various periods: stories, laws, poems, prayers, teachings and testimonies of faith. The texts that we today call the Old Testament existed before Jesus. The writings of the New Testament emerged after his public life, in the first Christian communities. Knowing this origin helps us understand why the Bible brings together different voices and genres. In its pages we find stories such as that of Noah and the patriarchs, the story of a people searching for God, the voice of the prophets and the prayers of the psalms. Many of these texts were handed down over centuries.",
      "A psalm presents the word of God as a light that guides the path. Jesus knew those Scriptures: he refers to the Law of Moses, the Prophets and the Psalms, and helps his disciples understand them. He also warns against the error of not understanding the Scriptures. Therefore, before drawing conclusions from a passage, it is important to know who is speaking, who is being addressed, and what is happening. The Bible is best understood when we read it with attention and respect for its context.",
      "When a biblical word is unfamiliar, we do not need to pretend that we understand it. We can stop, look for what it means and reread the story. For example, a prophet was a person who communicated a message from God to the people; a psalm is a prayer or a song. If we open the Gospel of Luke, we can first read who is speaking and then look up the Old Testament passage that is mentioned. This is how we understand, step by step, without feeling that we must know everything before starting.",
      "In Nehemiah's time, the people heard the Scriptures and were helped to understand what they read. Much later, Jesus knew them and explained them to his disciples, showing them how they could illuminate his path. Reading the Bible is entering that story of search, trust and encounter with God."
    ],
    "question": "What would I like to understand better about the Bible?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-02",
    "number": 2,
    "title": "How are the Old and New Testaments related?",
    "themeId": 1,
    "themeTitle": "Discover the Bible and know Jesus",
    "themeObjective": "Learn to recognize the Scriptures and understand how Jesus knew them, interpreted them, and used them to speak about the Father.",
    "readingsOld": [
      {
        "label": "Jeremiah 31:31–34",
        "book": "Jeremiah",
        "chapter": 31,
        "start": 31,
        "end": 34
      },
      {
        "label": "Exodus 24:8",
        "book": "Exodus",
        "chapter": 24,
        "start": 8,
        "end": 8
      }
    ],
    "readingsNew": [
      {
        "label": "Matthew 5:17",
        "book": "Matthew",
        "chapter": 5,
        "start": 17,
        "end": 17
      },
      {
        "label": "Luke 22:20",
        "book": "Luke",
        "chapter": 22,
        "start": 20,
        "end": 20
      }
    ],
    "paragraphs": [
      "Jesus lived within the history and faith of Israel. When he spoke of the Law and the Prophets, he did not refer to books that were foreign to him: they were the Scriptures that his people knew. Jesus affirms that he did not come to abolish the Law or the Prophets, but to fulfill them. To understand this statement we need to study both what existed before Jesus and the teachings that his disciples transmitted afterwards.",
      "Jeremiah had announced a new covenant: God promised to put his teaching in the hearts of his people, to make himself known and to forgive their faults. At the Last Supper, Jesus spoke of the new covenant as he shared the cup with his disciples. For Christians, the surrender of Jesus and his resurrection illuminate that promise. The new alliance does not mean that God stops loving the people of Israel nor that its ancient history loses value. The New Testament arises from the experience of those who followed Jesus and understood his life, death and resurrection in light of the Old Testament texts. Knowing both sides helps avoid hasty interpretations.",
      "The word covenant refers to a binding commitment. In these passages, God takes the initiative to reach out to his people and calls them to live faithfully. Jeremiah announces that his teaching will not only remain written: it can also be received in the heart. As we read the Last Supper, we should remember that promise and ask ourselves what it means for us to receive forgiveness and respond with love. A young person can begin by acknowledging a mistake, apologizing, and keeping a promise made to another person. Thus, what we read begins to guide our decisions.",
      "In the Exodus, the covenant remembers God's commitment to his people. By speaking of a new covenant at the Last Supper, Jesus places himself within that story of fidelity and opens to his disciples a path of trust, forgiveness and shared life with God."
    ],
    "question": "What changes in me when I discover that Jesus knew the Old Testament?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-03",
    "number": 3,
    "title": "Jesus knows and explains the Scriptures",
    "themeId": 1,
    "themeTitle": "Discover the Bible and know Jesus",
    "themeObjective": "Learn to recognize the Scriptures and understand how Jesus knew them, interpreted them, and used them to speak about the Father.",
    "readingsOld": [
      {
        "label": "Deuteronomy 8:3",
        "book": "Deuteronomy",
        "chapter": 8,
        "start": 3,
        "end": 3
      },
      {
        "label": "Exodus 20:13",
        "book": "Exodus",
        "chapter": 20,
        "start": 13,
        "end": 13
      }
    ],
    "readingsNew": [
      {
        "label": "Luke 4:1–13",
        "book": "Luke",
        "chapter": 4,
        "start": 1,
        "end": 13
      },
      {
        "label": "Matthew 5:17",
        "book": "Matthew",
        "chapter": 5,
        "start": 17,
        "end": 17
      },
      {
        "label": "Matthew 5:21–22",
        "book": "Matthew",
        "chapter": 5,
        "start": 21,
        "end": 22
      }
    ],
    "paragraphs": [
      "The Gospels present Jesus as a teacher who does not limit himself to repeating familiar words. After forty days in the desert, Jesus faces temptations and responds with words from Deuteronomy. When you are invited to turn a stone into bread, remember that life is not sustained by food alone, but also by the word of God. Their responses show that the Scriptures are part of their understanding of decisions and faithfulness to God. They are not decorations to win an argument.",
      "Deuteronomy is one of the books of the Old Testament. By quoting it, Jesus shows that a received teaching can support a difficult decision. In the desert story we are not asked to imagine new conversations: it is enough to observe that Jesus responds to each temptation relying on what he knows of the word of God. We too can stop before acting and remember a teaching that helps us choose responsibly.",
      "On another occasion, Jesus remembers the commandment \"Thou shalt not kill\", known since the Law of Moses. Then he invites us to look at the heart: contempt and anger can also hurt our relationships. Jesus is not satisfied with our avoiding harm; teaches to cultivate respect and seek reconciliation. Thus, the Scriptures become a guide for our daily decisions.",
      "Let's think about a discussion between colleagues. Maybe no one will hit another, but mockery, insults and contempt can also hurt. Jesus' teaching invites us to recognize that harm, stop feeding it, and seek a fair way to speak. We can start by listening, admitting a hurtful word, or asking for help to reconcile. Learning the scriptures is not just about remembering them: it means allowing them to guide what we do when we are angry.",
      "In the desert and when teaching the crowd, Jesus returns to the Scriptures that he knows from his town. Their words encourage us to read them carefully and to bring to life the love and respect they teach."
    ],
    "question": "Can we understand a teaching without knowing its context?",
    "questionKind": "debate"
  },
  {
    "id": "cap-04",
    "number": 4,
    "title": "God loves us: knowing the Father",
    "themeId": 1,
    "themeTitle": "Discover the Bible and know Jesus",
    "themeObjective": "Learn to recognize the Scriptures and understand how Jesus knew them, interpreted them, and used them to speak about the Father.",
    "readingsOld": [
      {
        "label": "Psalm 103:8–13",
        "book": "Psalms",
        "chapter": 103,
        "start": 8,
        "end": 13
      },
      {
        "label": "Hosea 11:1–4",
        "book": "Hosea",
        "chapter": 11,
        "start": 1,
        "end": 4
      },
      {
        "label": "Genesis 1:27",
        "book": "Genesis",
        "chapter": 1,
        "start": 27,
        "end": 27
      }
    ],
    "readingsNew": [
      {
        "label": "Luke 15:1–3",
        "book": "Luke",
        "chapter": 15,
        "start": 1,
        "end": 3
      },
      {
        "label": "Luke 15:11–32",
        "book": "Luke",
        "chapter": 15,
        "start": 11,
        "end": 32
      }
    ],
    "paragraphs": [
      "Jesus responds to the discontent of those who criticize his receiving people considered sinners. Among his teachings he tells the parable of a father and his two sons. The minor leaves his home, loses what he received and decides to return. The father comes out to meet him and welcomes him. The older brother, on the other hand, is reluctant to celebrate that return.",
      "Luke explains that people rejected because of their behavior or by others’ judgments came to Jesus. Some Pharisees and teachers of the Law criticized him because he received them and shared the table with them. To respond, Jesus told several stories about the joy of recovering what was lost. One of them is known as the parable of the prodigal son, although we can also call it the parable of the father and his two sons. Knowing that beginning allows us to better understand why Jesus spoke about forgiveness.",
      "With this story Jesus brings us closer to the heart of God the Father. The son returns recognizing that he was wrong and, before he can explain everything, his father runs to meet him. Love does not erase the consequences of decisions, but it also does not reduce a person to their mistakes. And while the older brother resists celebrating, the father also invites him to participate in the joy. Jesus thus shows that forgiveness opens a door to begin again.",
      "Psalm 103 speaks of God's compassion as that of a father for his children; Hosea remembers his tenderness toward Israel. In the parable of the father and his two sons, Jesus helps us discover a faithful Father, who does not stop loving and welcomes those who return to him with open arms.",
      "When Jesus calls God Father, he invites us to trust in his care and mercy; He is not saying that God is a human father. The Bible presents God as the creator of life and close to people. If someone makes a mistake at home or with their friends, this parable teaches them to recognize the mistake and look for a new beginning. It also challenges us not to close the door to those who want to change. Welcoming with love does not mean justifying the damage: it means offering an opportunity to repair it."
    ],
    "question": "How can mercy and justice coexist?",
    "questionKind": "debate"
  },
  {
    "id": "cap-05",
    "number": 5,
    "title": "Love of God and neighbor",
    "themeId": 2,
    "themeTitle": "Learn to love and trust as Jesus taught",
    "themeObjective": "Understand Jesus' teachings about love, forgiveness, trust and prayer in our relationships.",
    "readingsOld": [
      {
        "label": "Deuteronomy 6:4–5",
        "book": "Deuteronomy",
        "chapter": 6,
        "start": 4,
        "end": 5
      },
      {
        "label": "Leviticus 19:18",
        "book": "Leviticus",
        "chapter": 19,
        "start": 18,
        "end": 18
      }
    ],
    "readingsNew": [
      {
        "label": "Mark 12:28–34",
        "book": "Mark",
        "chapter": 12,
        "start": 28,
        "end": 34
      },
      {
        "label": "Luke 10:25–37",
        "book": "Luke",
        "chapter": 10,
        "start": 25,
        "end": 37
      },
      {
        "label": "Matthew 14:14",
        "book": "Matthew",
        "chapter": 14,
        "start": 14,
        "end": 14
      },
      {
        "label": "John 13:34–35",
        "book": "John",
        "chapter": 13,
        "start": 34,
        "end": 35
      }
    ],
    "paragraphs": [
      "A scribe asked Jesus what the main commandment was. Jesus expressly cited two commandments from the Old Testament: love God and love your neighbor. He did not present love as a passing emotion, but as a profound orientation for life. Loving God with all our hearts is reflected in the way we listen to, respect and help others. The way we relate to God cannot be separated from the way we treat people.",
      "In the parable of the Good Samaritan, Jesus tells of a wounded man on the side of the road. The person who stops to attend to him is a Samaritan, someone from whom some listeners would not have expected such a gesture. Caring is not born from a label or an appearance, but from compassion that turns into help. For us, love can be expressed by listening at home, sharing with a brother, respecting those who think differently or accompanying someone who needs help. Love does not require accepting bad treatment; recognizes the dignity of everyone, including his own.",
      "In the time of Jesus there were tensions between Jews and Samaritans. That is why it is important that it is precisely a Samaritan who stops before the wounded man: help overcomes a division that many took for granted. The teaching can be recognized today when we see that a companion is excluded because of his origin, his appearance or his beliefs. Loving your neighbor can begin by approaching them without ridicule, listening to them, and seeking support if someone is hurting them. Jesus teaches us that a person's dignity never depends solely on the group they belong to or how much they are like us.",
      "When Jesus saw a crowd in need, he also felt compassion for them. And by asking his disciples to love one another as he has loved them, he left them a simple sign to recognize each other: love that is demonstrated with actions."
    ],
    "question": "How do I show love at home every day?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-06",
    "number": 6,
    "title": "Jesus teaches mercy and forgiveness",
    "themeId": 2,
    "themeTitle": "Learn to love and trust as Jesus taught",
    "themeObjective": "Understand Jesus' teachings about love, forgiveness, trust and prayer in our relationships.",
    "readingsOld": [
      {
        "label": "Micah 7:18–19",
        "book": "Micah",
        "chapter": 7,
        "start": 18,
        "end": 19
      },
      {
        "label": "Psalm 103:8–12",
        "book": "Psalms",
        "chapter": 103,
        "start": 8,
        "end": 12
      }
    ],
    "readingsNew": [
      {
        "label": "Matthew 18:21–35",
        "book": "Matthew",
        "chapter": 18,
        "start": 21,
        "end": 35
      },
      {
        "label": "Luke 15:11–32",
        "book": "Luke",
        "chapter": 15,
        "start": 11,
        "end": 32
      },
      {
        "label": "Luke 23:34",
        "book": "Luke",
        "chapter": 23,
        "start": 34,
        "end": 34
      },
      {
        "label": "Luke 17:3–4",
        "book": "Luke",
        "chapter": 17,
        "start": 3,
        "end": 4
      }
    ],
    "paragraphs": [
      "Peter asks Jesus how many times he must forgive. Jesus teaches him that forgiveness is not counted as if it had a limit. He then tells the story of a servant who is forgiven a large debt, but who then refuses to show mercy to another who owes him much less. He who has received compassion is also called to offer it. During the crucifixion, the Gospel records Jesus' plea to the Father for forgiveness of those who were making him suffer. His teachings and actions invite us not to respond to harm with more harm.",
      "Jesus also helps us understand God's forgiveness. In the parable of the son who returns, the father welcomes him with joy. The meaning of that teaching is especially clear: God's mercy is open to all people, without excluding anyone because of their past. Receiving that forgiveness is related to recognizing mistakes, repenting and being open to change. Forgiveness does not make the harm committed right; offers the possibility of starting over.",
      "We can bring this teaching to prayer with simple words: “Father, I recognize what I did wrong and I ask your forgiveness; Help me change.\" Sincerity of heart is important, but it does not make forgiveness an automatic phrase. If we hurt someone, we can also apologize and repair whatever is in our power. Jesus invites us to trust in God's mercy and to respond with actions, without losing sight of justice or care for those who suffered.",
      "How do you practice this every day? In the family, admit a hurtful response and apologize. Between brothers, listen to the damage caused and repair what is possible. With your neighbor, avoid revenge and seek a fair response. Forgiving does not require forgetting, automatically regaining trust, or living with someone who commits violence. Love and mercy also protect people's dignity and safety.",
      "Micah presents God as delighting in mercy, and Psalm 103 celebrates his compassion. Jesus makes that same love visible: God can forgive us, give us strength to change and teach us to treat others with a mercy that does not renounce justice."
    ],
    "question": "How can I practice forgiveness every day?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-07",
    "number": 7,
    "title": "Trust in God without denying difficulties",
    "themeId": 2,
    "themeTitle": "Learn to love and trust as Jesus taught",
    "themeObjective": "Understand Jesus' teachings about love, forgiveness, trust and prayer in our relationships.",
    "readingsOld": [
      {
        "label": "Psalm 23:4",
        "book": "Psalms",
        "chapter": 23,
        "start": 4,
        "end": 4
      },
      {
        "label": "Psalm 42:5–6",
        "book": "Psalms",
        "chapter": 42,
        "start": 5,
        "end": 6
      }
    ],
    "readingsNew": [
      {
        "label": "Mark 8:31",
        "book": "Mark",
        "chapter": 8,
        "start": 31,
        "end": 31
      },
      {
        "label": "Mark 10:33–45",
        "book": "Mark",
        "chapter": 10,
        "start": 33,
        "end": 45
      },
      {
        "label": "Mark 14:32–42",
        "book": "Mark",
        "chapter": 14,
        "start": 32,
        "end": 42
      },
      {
        "label": "Luke 1:26–33",
        "book": "Luke",
        "chapter": 1,
        "start": 26,
        "end": 33
      },
      {
        "label": "Luke 2:34–35",
        "book": "Luke",
        "chapter": 2,
        "start": 34,
        "end": 35
      }
    ],
    "paragraphs": [
      "Before his arrest, in the garden of Gethsemane, Jesus lives one of the most difficult hours narrated in the Gospels. He knows that suffering is coming. Marcos says that he is deeply frightened and distressed. He asks his disciples to stay close and step aside to pray. Jesus feels fear and sadness, as any of us can feel in a difficult situation. Precisely at that moment he turns to the Father in prayer. His trust does not erase the pain, but it accompanies it.",
      "Jesus had already announced to his disciples that he would suffer, die and rise again. He had also spoken of his mission to serve and give his life to many, a delivery that the Christian faith understands as part of its saving and redemptive work. In Gethsemane he expresses to the Father his desire for that hour to pass, but ends up trusting himself to his will. His faith does not deny fear: it leads him to prayer.",
      "Mary also lived her journey of faith between promises and painful moments. Gabriel announced who his son would be and Simeon spoke of opposition and a pain that would pierce his soul. She received those words without knowing everything that would come next. His story reminds us that trusting in God does not mean having all the answers, but rather continuing to walk even when the future is uncertain.",
      "The trust that Jesus teaches does not require us to feign bravery or hide suffering. We can be afraid, ask for company, seek help and go to the Father. When accompanying someone who suffers, we can also offer listening and presence. Faith does not promise a life without difficulties; invites you to go through them without giving up hope.",
      "A young person can live this confidence by saying in prayer: “Father, I am afraid and I need help.” You can also talk to a trusted person and seek company. Asking for support does not diminish faith; It allows you to go through difficulty with hope.",
      "Psalm 23 speaks of a God who accompanies even in the dark valley; Psalm 42 shows how a sad person can continue to put their hope in Him. They are words of prayer that help us understand why Jesus, in Gethsemane, seeks the Father when he needs strength most."
    ],
    "question": "Can we be afraid and still trust in God?",
    "questionKind": "debate"
  },
  {
    "id": "cap-08",
    "number": 8,
    "title": "Pray as Jesus taught us",
    "themeId": 2,
    "themeTitle": "Learn to love and trust as Jesus taught",
    "themeObjective": "Understand Jesus' teachings about love, forgiveness, trust and prayer in our relationships.",
    "readingsOld": [
      {
        "label": "Psalm 103:1–5",
        "book": "Psalms",
        "chapter": 103,
        "start": 1,
        "end": 5
      },
      {
        "label": "Proverbs 30:8–9",
        "book": "Proverbs",
        "chapter": 30,
        "start": 8,
        "end": 9
      }
    ],
    "readingsNew": [
      {
        "label": "Luke 11:1–4",
        "book": "Luke",
        "chapter": 11,
        "start": 1,
        "end": 4
      },
      {
        "label": "Matthew 6:9–13",
        "book": "Matthew",
        "chapter": 6,
        "start": 9,
        "end": 13
      },
      {
        "label": "Mark 1:35",
        "book": "Mark",
        "chapter": 1,
        "start": 35,
        "end": 35
      },
      {
        "label": "Mark 11:25",
        "book": "Mark",
        "chapter": 11,
        "start": 25,
        "end": 25
      }
    ],
    "paragraphs": [
      "The disciples watched Jesus pray. One day, one of them asked him: \"Lord, teach us to pray.\" Luke tells of that meeting and, together with Matthew, transmits the Lord's Prayer to us. Mark also presents Jesus seeking moments of prayer and teaching forgiveness. In these scenes we discover that praying is approaching God the Father with confidence, not repeating words without understanding them.",
      "By beginning with the Father and hallowing his name, we recognize the greatness of God and turn to him with gratitude and trust. When we ask for His Kingdom to come, we can open our hearts to His love, His justice, and His peace. But the Kingdom is not reduced to an internal feeling: it also guides our way of living and treating others.",
      "By asking for our daily bread, we entrust God with our real needs and remember those who need food and care. We can also think about the inner food that sustains our life: love, hope and strength. This spiritual reflection complements, but does not replace, the concrete meaning of bread.",
      "By asking for forgiveness, we acknowledge our mistakes and remember that we are also called to forgive. After knowing his teaching on mercy, the Lord's Prayer invites us to also bring forgiveness to our prayer. Finally, by asking not to fall into temptation and to be delivered from evil, we ask for help to turn away from bad intentions and decisions that harm others. Thus, prayer unites praise to God with the desire to live better.",
      "Psalm 103 invites us to bless and thank God for his goodness; Proverbs reminds us of the value of necessary bread. By praying the Lord's Prayer, we continue that path of praise and trust: we talk to God about what we need and we learn to also look at the needs of others.",
      "We can practice it with a simple prayer: \"Father God, hear my prayer. In the name of Jesus Christ, who gave his life for love, I ask your forgiveness for my mistakes. May your Holy Spirit help me live with peace, goodness and hope. Join me during this day and teach me to treat my brothers with love. Amen.\" It is not a mandatory formula: each person can turn to God with sincere words and confidence, as Jesus taught."
    ],
    "question": "How can I ask in prayer with confidence in God the Father?",
    "questionKind": "debate"
  },
  {
    "id": "cap-09",
    "number": 9,
    "title": "Jesus announces good news and hope",
    "themeId": 3,
    "themeTitle": "Follow the example of Jesus in the world",
    "themeObjective": "Study concrete actions of Jesus in the face of need, injustice, authority and conflict.",
    "readingsOld": [
      {
        "label": "Isaiah 61:1–2",
        "book": "Isaiah",
        "chapter": 61,
        "start": 1,
        "end": 2
      }
    ],
    "readingsNew": [
      {
        "label": "Luke 4:16–21",
        "book": "Luke",
        "chapter": 4,
        "start": 16,
        "end": 21
      },
      {
        "label": "Mark 1:14–15",
        "book": "Mark",
        "chapter": 1,
        "start": 14,
        "end": 15
      },
      {
        "label": "Matthew 11:28",
        "book": "Matthew",
        "chapter": 11,
        "start": 28,
        "end": 28
      }
    ],
    "paragraphs": [
      "In the synagogue of Nazareth, Luke tells that Jesus read a passage from Isaiah and spoke of good news for the poor, freedom and restoration. Then he announced that that Scripture was fulfilled before those who heard him. The scene allows us to understand how Jesus publicly presented his mission: not as a teaching separate from people's lives, but related to those who suffered and hoped for change.",
      "The expression good news is also called Gospel. Jesus did not just announce ideas to think about: he spoke of the nearness of the Kingdom of God and showed through his actions his care for people. For someone who has never heard that message, it means they can approach God with confidence, recognize their mistakes, and begin to change. Justice, mercy and hope are not separate issues from that news; They are part of the path to which Jesus invites.",
      "The good news of Jesus is an invitation to trust and start again. Mark presents it by announcing the nearness of the Kingdom of God and calling to believe in the Gospel. In Matthew, Jesus invites those who are tired and burdened to come to him. His hope is not to promise that all difficulties will end immediately, but to open a path of comfort, dignity, and new life for those who listen to him.",
      "We can hear that message when we lack encouragement, when someone feels alone or when a situation does not seem to change. Jesus sets his sights on those who suffer and encourages us to approach them with the same tenderness. Where someone receives company, listening and help, good news can begin to become visible.",
      "Good news can become concrete among brothers and companions: treating those who have been excluded fairly, sharing a meal, asking for forgiveness after an offense or accompanying those who are sad. They are also expressed by trusting in God the Father when a situation overcomes us, without stopping looking for solutions and help. One gesture does not solve all problems, but it can open space for respect and solidarity. There we begin to see what it means to live the hope that Jesus announced."
    ],
    "question": "Where can I place my hope?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-10",
    "number": 10,
    "title": "Justice and service to those in need",
    "themeId": 3,
    "themeTitle": "Follow the example of Jesus in the world",
    "themeObjective": "Study concrete actions of Jesus in the face of need, injustice, authority and conflict.",
    "readingsOld": [
      {
        "label": "Isaiah 58:6–10",
        "book": "Isaiah",
        "chapter": 58,
        "start": 6,
        "end": 10
      },
      {
        "label": "Deuteronomy 15:7–11",
        "book": "Deuteronomy",
        "chapter": 15,
        "start": 7,
        "end": 11
      }
    ],
    "readingsNew": [
      {
        "label": "Mark 6:30–44",
        "book": "Mark",
        "chapter": 6,
        "start": 30,
        "end": 44
      },
      {
        "label": "Matthew 14:14",
        "book": "Matthew",
        "chapter": 14,
        "start": 14,
        "end": 14
      }
    ],
    "paragraphs": [
      "Mark relates that Jesus and his disciples were seeking to rest, but a crowd came to them. Jesus saw those people, felt compassion, and began to teach them. As evening fell, the disciples proposed to send them away so that they could look for food. Jesus replied that they themselves should feed them. They only found five loaves and two fish, but Jesus took the food, pronounced the blessing and distributed it through his disciples. Everyone ate and was satisfied. The Gospel presents this gesture as an extraordinary sign of Jesus' generosity and care.",
      "The story speaks of a crowd with a very specific need: they were hungry. Jesus does not limit himself to advising patience, but invites his disciples to participate in the response. Faith in God the Father is expressed here together with a human task: to look at what is missing and share what we have. Thinking about justice also means asking ourselves if someone around us is going without food, company or help, and what we can do without waiting for extraordinary resources.",
      "The scene unites teaching and concrete love. Jesus does not treat the crowd as a problem that interrupts his plans: he looks at them with compassion and acts. His disciples also participate, although at first they believe that they do not have enough resources. We may not be able to solve all the needs, but we can share what we have, listen with respect and help without humiliating. The compassion of Jesus teaches us to take the first step.",
      "Isaiah encourages sharing bread with those who are hungry, and Deuteronomy invites us to open our hands in the face of need. In the encounter with the crowd, Jesus turns care into an action that brings everyone together.",
      "The Gospels also say that Jesus cared for and healed sick people. We can pray for those who need health and trust in God's love, but we should not promise a miracle or blame anyone if an illness continues. Faith involves the heart and our decisions: trust, ask for help, accompany and act with kindness. When faced with a need, we can organize a small collection, share a snack or accompany someone to seek support. Thus, trust does not remain just a thought: it becomes concrete care."
    ],
    "question": "Who in my community could I help?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-11",
    "number": 11,
    "title": "Humility and leadership that serves",
    "themeId": 3,
    "themeTitle": "Follow the example of Jesus in the world",
    "themeObjective": "Study concrete actions of Jesus in the face of need, injustice, authority and conflict.",
    "readingsOld": [
      {
        "label": "Micah 6:8",
        "book": "Micah",
        "chapter": 6,
        "start": 8,
        "end": 8
      },
      {
        "label": "Isaiah 42:1–4",
        "book": "Isaiah",
        "chapter": 42,
        "start": 1,
        "end": 4
      }
    ],
    "readingsNew": [
      {
        "label": "John 13:1–17",
        "book": "John",
        "chapter": 13,
        "start": 1,
        "end": 17
      },
      {
        "label": "Mark 10:42–45",
        "book": "Mark",
        "chapter": 10,
        "start": 42,
        "end": 45
      }
    ],
    "paragraphs": [
      "During a dinner with his disciples, Jesus gets up, grabs a towel, and begins to wash their feet, a humble task. Pedro is surprised and resists his Master serving him in that way. Jesus makes him understand that this gesture has a deep meaning. The one who was recognized as Master and Lord bows before his friends to teach them that love also knows how to serve.",
      "To understand Peter's surprise, let us remember that washing feet was a task associated with humble service. Jesus reverses what his disciples expected from a teacher: instead of demanding to be attended to, he attends to others. He does not invite them to just admire that gesture, but to learn from it. Humility is not about thinking that we are worth less; It consists of recognizing that our dignity does not depend on being above another person.",
      "On another occasion, when the disciples were thinking about who would occupy the most important places, Jesus spoke to them about a different leadership: whoever wants to be great must become a servant of others. His authority does not seek to impose, but to care. In the family, at school or in a community, we can recognize those who guide well because they listen, help, share responsibilities and respect people.",
      "Micah brings together justice, mercy and humility; Isaiah presents the image of a servant attentive to those who suffer. Jesus shows us how greatness can be expressed in a gesture as simple as leaning down to help another.",
      "Serving with love doesn't just happen in church or when we give money. It can also be greeting with joy, listening without interrupting, helping at home without expecting applause or respectfully defending a colleague who has been treated unfairly. When we avoid making fun of someone or speaking badly about them, we are taking care of our coexistence. Jesus teaches us to look at others as a brother in dignity, not as someone inferior. A good leader can ask for help, admit a mistake, and be the first to collaborate."
    ],
    "question": "Can the leader also serve?",
    "questionKind": "debate"
  },
  {
    "id": "cap-12",
    "number": 12,
    "title": "Peace and reconciliation",
    "themeId": 3,
    "themeTitle": "Follow the example of Jesus in the world",
    "themeObjective": "Study concrete actions of Jesus in the face of need, injustice, authority and conflict.",
    "readingsOld": [
      {
        "label": "Psalm 34:14",
        "book": "Psalms",
        "chapter": 34,
        "start": 14,
        "end": 14
      },
      {
        "label": "Proverbs 15:1",
        "book": "Proverbs",
        "chapter": 15,
        "start": 1,
        "end": 1
      }
    ],
    "readingsNew": [
      {
        "label": "Matthew 5:9",
        "book": "Matthew",
        "chapter": 5,
        "start": 9,
        "end": 9
      },
      {
        "label": "Matthew 5:23–24",
        "book": "Matthew",
        "chapter": 5,
        "start": 23,
        "end": 24
      },
      {
        "label": "Luke 22:47–51",
        "book": "Luke",
        "chapter": 22,
        "start": 47,
        "end": 51
      },
      {
        "label": "John 18:10",
        "book": "John",
        "chapter": 18,
        "start": 10,
        "end": 10
      }
    ],
    "paragraphs": [
      "Jesus calls those who work for peace blessed. It also teaches to take damaged relationships seriously: it invites us to seek reconciliation before continuing with an offering. But his teaching does not remain in words. During his arrest, Peter wounds the high priest's servant with a sword, as John tells it. Luke relates that Jesus stops the violence and heals the wounded man's ear. Even in an hour of danger, Jesus protects life.",
      "The scene of the arrest allows us to see that Jesus did not respond to the aggression by causing another wound. Their decision to stop the violence does not make the injustice of what was happening disappear. Therefore, when he talks about peace, he does not invite us to remain silent in the face of harm. Reconciliation needs truth, responsibility and protection of people. Christian peace is not feigning tranquility, but seeking the good without multiplying suffering.",
      "The peace Jesus speaks of is not the same as pretending that an injustice never occurred. It requires attention to harm, responsibility and respect for people. Authentic reconciliation cannot be imposed or replace the protection of those who are in danger. We can seek paths to dialogue and reparation without demanding that someone return to an abusive relationship. Jesus' attitude toward violence invites us to understand that building peace involves caring for the life and dignity of all.",
      "Psalm 34 calls for seeking peace, and Proverbs reminds us that a calm response can calm anger. Both teachings illuminate the actions of Jesus and encourage us to contribute to peace with respect and courage.",
      "In daily life we ​​can take care of our thoughts before turning them into words: check a rumor before sharing it, avoid offensive messages, and seek out a trusted adult when a conflict becomes dangerous. The Old Testament already called to turn away from evil and seek peace. Jesus deepens this teaching with concrete actions. We can ask God the Father for serenity and courage to treat others with respect, without confusing having faith with accepting abuse or injustice."
    ],
    "question": "How can we contribute to peace without hiding injustice?",
    "questionKind": "debate"
  },
  {
    "id": "cap-13",
    "number": 13,
    "title": "Jesus, our Savior",
    "themeId": 4,
    "themeTitle": "Understand the legacy of Jesus and live it",
    "themeObjective": "Understand surrender, the hope of the resurrection and the continuity of Jesus' teachings.",
    "readingsOld": [
      {
        "label": "Isaiah 53:4–6",
        "book": "Isaiah",
        "chapter": 53,
        "start": 4,
        "end": 6
      },
      {
        "label": "Psalm 22:1",
        "book": "Psalms",
        "chapter": 22,
        "start": 1,
        "end": 1
      }
    ],
    "readingsNew": [
      {
        "label": "Luke 19:1–10",
        "book": "Luke",
        "chapter": 19,
        "start": 1,
        "end": 10
      },
      {
        "label": "Mark 10:45",
        "book": "Mark",
        "chapter": 10,
        "start": 45,
        "end": 45
      },
      {
        "label": "Mark 15:21–39",
        "book": "Mark",
        "chapter": 15,
        "start": 21,
        "end": 39
      },
      {
        "label": "Hebrews 7:25",
        "book": "Hebrews",
        "chapter": 7,
        "start": 25,
        "end": 25
      }
    ],
    "paragraphs": [
      "In Jericho, Jesus approaches Zacchaeus, a tax collector rejected by many. The Gospel relates that this meeting gives rise to a concrete decision: Zacchaeus speaks of sharing his goods and returning what was unjustly obtained. Jesus presents his mission as the search for those who were lost. Salvation thus appears related to the encounter, transformation and repair of damage.",
      "The Gospels also present Jesus announcing that he would give his life and tell of his sacrifice on the cross. For the Christian faith, Jesus, the Son of God, gives himself out of love to open a path of salvation and forgiveness for humanity. His dedication is not a defeat of love: it manifests the extent to which his fidelity to the Father and his love for us reaches. That is why Jesus is much more than a teacher of good advice; His life, his sacrifice and his resurrection sustain Christian hope.",
      "To understand the reference to Isaiah, it is useful to know that this Old Testament book contains a passage about a servant of God who suffers from the pain and faults of others. It is not necessary to have read the chapter before to understand the relationship: Christians recognize in that suffering a light that helps to contemplate the surrender of Jesus. The cross reminds us that Jesus did not deviate from his mission to love, even when that love led him to suffering and death.",
      "Isaiah speaks of a servant who bears the suffering of many; Christians have recognized in those words a light to understand the dedication of Jesus. On the cross, Jesus also remembers the beginning of Psalm 22. Even in suffering, the story told in the Gospels leads us to trust and hope.",
      "The Christian faith calls this saving work redemption. By approaching God we can sincerely acknowledge our sins, ask for forgiveness and trust in Jesus Christ, who intercedes for us before the Father. Praying in his name is not repeating magic words: it is coming with a heart willing to change and, when possible, repair the damage caused. His sacrifice teaches us that no one is beyond the reach of God's love and invites us to treat each person with that same dignity."
    ],
    "question": "What does Jesus' sacrifice, offered out of love for humanity, mean to me?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-14",
    "number": 14,
    "title": "The resurrection and Christian hope",
    "themeId": 4,
    "themeTitle": "Understand the legacy of Jesus and live it",
    "themeObjective": "Understand surrender, the hope of the resurrection and the continuity of Jesus' teachings.",
    "readingsOld": [
      {
        "label": "Psalm 16:8–11",
        "book": "Psalms",
        "chapter": 16,
        "start": 8,
        "end": 11
      }
    ],
    "readingsNew": [
      {
        "label": "Luke 24:1–35",
        "book": "Luke",
        "chapter": 24,
        "start": 1,
        "end": 35
      },
      {
        "label": "Acts 2:25–32",
        "book": "Acts",
        "chapter": 2,
        "start": 25,
        "end": 32
      }
    ],
    "paragraphs": [
      "Luke says that some women went to the tomb and found it empty. There they heard the announcement that Jesus had risen. At first, the disciples did not understand what had happened. Later, two of them walked towards Emmaus full of sadness for the death of Jesus. Jesus himself came close, listened to their concerns, explained the Scriptures to them, and they finally recognized him when he blessed and broke the bread. Those walkers discovered that hope could be reborn even after a profound loss.",
      "Luke specifies that Jesus took the bread, pronounced the blessing, broke it and shared it with the travelers. This gesture helps us understand what it means to bless: to recognize the good received and turn to God with gratitude. It is not a phrase that guarantees that everything will turn out as we wish. In the story, the disciples recognize Jesus at that meeting, after listening to him explain the Scriptures. Christian hope can also grow when we remember his words and share the table with others.",
      "The resurrection is the heart of Christian hope: death did not have the last word about Jesus. In the book of Acts, Peter announces that good news and finds words in the Old Testament to explain it to his people. The joy of Easter does not force us to deny sadness or questions; invites us to trust that God can open paths of life even when everything seems closed.",
      "Psalm 16 expresses confidence that God does not abandon those who trust themselves to him. Peter takes up that psalm when announcing the resurrection. Thus, an ancient prayer of hope helps the first Christians understand the new life of Jesus.",
      "A simple way to bring this teaching to life is to give thanks before eating and think about those who prepared or made that food possible. We can also ask ourselves if anyone in our community needs to break bread. Blessing encourages us to recognize God's gifts without forgetting others. In the face of loss or sadness, as happened to the Emmaus walkers, we can seek company, listen to the word of Jesus and keep open the possibility of finding hope."
    ],
    "question": "What questions does the announcement of the resurrection awaken in me?",
    "questionKind": "introspection"
  },
  {
    "id": "cap-15",
    "number": 15,
    "title": "Remain in Jesus and bear fruit",
    "themeId": 4,
    "themeTitle": "Understand the legacy of Jesus and live it",
    "themeObjective": "Understand surrender, the hope of the resurrection and the continuity of Jesus' teachings.",
    "readingsOld": [
      {
        "label": "Jeremiah 17:7–8",
        "book": "Jeremiah",
        "chapter": 17,
        "start": 7,
        "end": 8
      },
      {
        "label": "Psalm 1:1–3",
        "book": "Psalms",
        "chapter": 1,
        "start": 1,
        "end": 3
      }
    ],
    "readingsNew": [
      {
        "label": "John 15:1–12",
        "book": "John",
        "chapter": 15,
        "start": 1,
        "end": 12
      },
      {
        "label": "1 John 1:9",
        "book": "1 John",
        "chapter": 1,
        "start": 9,
        "end": 9
      },
      {
        "label": "Hebrews 7:25",
        "book": "Hebrews",
        "chapter": 7,
        "start": 25,
        "end": 25
      }
    ],
    "paragraphs": [
      "Jesus uses the image of a vine and its branches to talk about his relationship with his disciples. A branch does not bear fruit apart from that which allows it to live. With this comparison, Jesus invites us to remain in him and in his love. This is a teaching image, not an agricultural episode that we must reconstruct as a biographical fact.",
      "Abiding in Jesus can also be expressed in prayer. The disciples do not receive the image of the vine to learn only a beautiful comparison: Jesus invites them to live united with him and to keep his teaching of love. If a person recognizes that they have done harm, they can approach Jesus Christ with sincerity and ask for help to change. The Christian faith teaches that Jesus intercedes for us before God the Father; That is why we can pray with confidence and repentance, without thinking that a few words replace the decisions we must make.",
      "The meaning of remaining is not reduced to repeating religious words. In the same passage, Jesus relates that permanence to keeping his commandments and loving one another. The fruits can be recognized in decisions that take care of people's dignity, in more responsible relationships and in sincere service. No one can measure another person's entire inner life by their appearance. Therefore, before judging others, it is advisable to examine what produces our own way of living.",
      "Jeremiah and one of the psalms use the image of trees receiving sustenance and bearing fruit. This similarity helps to study the image of the vine that Jesus teaches, without claiming that Jesus was quoting those passages.",
      "For example, we can say: \"Jesus, I acknowledge my mistakes and I ask for your forgiveness. Help me to repair what I did wrong, to care for others and to remain in your love. Bring me closer to the Father and guide my decisions. Amen.\" No one needs a perfect prayer to start talking to God. Sincerity also becomes visible later: when we stop behavior that hurts, we apologize or choose to serve. Thus, the fruit that Jesus speaks of does not remain only in an image, but appears in our way of living."
    ],
    "question": "How do we recognize the fruit of a teaching?",
    "questionKind": "debate"
  },
  {
    "id": "cap-16",
    "number": 16,
    "title": "Live what you have learned: love with actions",
    "themeId": 4,
    "themeTitle": "Understand the legacy of Jesus and live it",
    "themeObjective": "Understand surrender, the hope of the resurrection and the continuity of Jesus' teachings.",
    "readingsOld": [
      {
        "label": "Leviticus 19:34",
        "book": "Leviticus",
        "chapter": 19,
        "start": 34,
        "end": 34
      },
      {
        "label": "Proverbs 3:27–28",
        "book": "Proverbs",
        "chapter": 3,
        "start": 27,
        "end": 28
      },
      {
        "label": "Genesis 1:27",
        "book": "Genesis",
        "chapter": 1,
        "start": 27,
        "end": 27
      }
    ],
    "readingsNew": [
      {
        "label": "John 13:34–35",
        "book": "John",
        "chapter": 13,
        "start": 34,
        "end": 35
      },
      {
        "label": "John 14:6",
        "book": "John",
        "chapter": 14,
        "start": 6,
        "end": 6
      },
      {
        "label": "Matthew 7:24–27",
        "book": "Matthew",
        "chapter": 7,
        "start": 24,
        "end": 27
      },
      {
        "label": "James 2:14–17",
        "book": "James",
        "chapter": 2,
        "start": 14,
        "end": 17
      },
      {
        "label": "Matthew 12:50",
        "book": "Matthew",
        "chapter": 12,
        "start": 50,
        "end": 50
      },
      {
        "label": "John 20:17",
        "book": "John",
        "chapter": 20,
        "start": 17,
        "end": 17
      }
    ],
    "paragraphs": [
      "After reviewing the teachings and actions of Jesus, we return to a fundamental invitation: to love others as he taught. Everything learned can be brought together in our daily lives: trust in God the Father, mercy in the face of mistakes, care for those who suffer, humility when serving, the peace that protects and the hope that accompanies. Jesus shows us a path of love that does not end when we close these pages.",
      "The Bible presents God the Father as the creator of life, and Jesus teaches us to approach him with confidence. Jesus also calls brothers those who seek to do the will of the Father, and after being resurrected he speaks of his brothers. This closeness invites us to recognize the same dignity in each person, without feeling superior to anyone. His sacrifice out of love calls us to respond with love.",
      "In one of his teachings, Jesus compares someone who listens and puts his words into practice with someone who builds on a firm foundation. Later, the letter of James will insist, from the teaching of the Christian community, that faith should not be separated from works. In our daily lives, this learning can take shape by listening to a family member, respecting a brother, repairing an injustice, or helping without seeking recognition. It's not about doing something spectacular: it's about practicing love with consistency, freedom and responsibility.",
      "Leviticus calls to love the stranger as oneself; The book of Proverbs invites us not to postpone the good we can do. They are new keys to continue exploring the practical love that Jesus taught.",
      "Jesus told his disciples that he is the way that leads to the Father. Following him does not mean knowing everything immediately: it means letting ourselves be taught, trusting in God's love and trying again when we make a mistake. Every gesture of mercy, every sincere help and every decision to take care of life can be one more step on that path.",
      "This journey ends here, but the study of Jesus continues. The Gospels contain other encounters, conversations and teachings to discover. We can reopen them, investigate new connections with the Old Testament, and find, with each reading, more conscious ways to love. The last page does not close the path: it invites you to continue learning."
    ],
    "question": "How do we continue learning to love like Jesus?",
    "questionKind": "debate"
  }
];
