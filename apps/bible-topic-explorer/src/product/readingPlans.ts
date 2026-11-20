/** R1.3: 4 independent seven-day journeys; 28 ORIGINAL editorial drafts.
 * Text is not a quotation or a pastoral endorsement. WEBP passages are linked, not copied.
 * Existence and exact source-label sequences must be audited against frozen SQLite before release.
 */
export type ReadingDay={day:number;title:string;book:string;chapter:number;start:number;end:number;reflection:string;prayer:string;action:string;editorial:'EN_REVISION'};
export type ReadingPlan={id:string;title:string;theme:string;intro:string;days:readonly ReadingDay[]};
const content=[
 {id:'encuentro',title:"Encounter with Jesus",theme:'Gospels',intro:"Seven encounters to discover gestures of Jesus in their context.",days:[
 ['Called to Listen',"Mark",1,14,20,"The first disciples respond in a specific situation. Listen to what happens before applying the reading to your story.","Jesus, accompany my decisions today.","Listen for five minutes without interrupting."],
 ['Seeking Rest',"Matthew",11,25,30,"The rest offered must be read in relation to the call of Jesus, without denying health needs.","Lord, teach us to accompany with respect.","Offer help without imposing it."],
 ["Share what's there","John",6,1,15,"Shared food opens up questions about collective responsibility. Don't reduce the story to a promise of wealth.","Jesus, give us prudent generosity.","Share an available resource."],
 ['Listening Along the Way',"Luke",10,38,42,"Two ways of welcoming appear in tension; do not turn the comparison into a reproach against domestic work.","Lord, give us attentive listening.","Take a screen-free moment for someone."],
 ["Approach with respect","Mark",10,46,52,"Jesus asks what the other person needs instead of presupposing it.","Help us listen before we decide.","Ask first how you can help."],
 ["walk with questions","Luke",24,13,35,"Travelers explain their experience; The context of the story shapes recognition.","Accompany our doubts with patience.","Ask an honest question about your reading."],
 ["stay in love","John",15,1,12,"The vine image presents relationships and responsibility; Read the entire speech before drawing conclusions.","Lord, may our love be seen in works.","Recognize a contribution from your community."]
 ]},
 {id:'amor',title:"Love in action",theme:'Service',intro:"Practice care, limits and solidarity without exposing others.",days:[
 ["Love in word and deed","1 John",3,16,20,'Care is expressed through concrete actions, not just words.',"Teach us to act with tenderness.","Do a small, respectful action."],
 ["The unexpected neighbor","Luke",10,25,37,"Asking who is a neighbor changes when reading the entire story and its dialogue.","Give us eyes to listen to the other.","Learn about a real community resource."],
 ["Serve without prominence","Mark",10,35,45,"The service of Jesus confronts positions of prestige; It does not justify abuse or forced submission.","Free us from the desire to dominate.","Give the floor to another voice."],
 ["Love that takes care of limits","1 Corinthians",13,1,13,"Poetry about love is not a substitute for protection from harm or violence.","Teach us patience with dignity.","Write down a respectful boundary."],
 ["Share responsibly","Acts",2,42,47,"The community shares resources in context; Do not impose donations or publish data.","Help us hold together.","See what help is really useful."],
 ['Caring in Community',"Galatians",6,1,10,"Exhortation combines helping and taking responsibility.","May we care without controlling.","Accompany without asking for private information."],
 ["A new practice","Romans",12,9,18,"Sincere love is expressed in bonds and prudent coexistence.","May good grow among us.","Be grateful for an invisible task."]
 ]},
 {id:'esperanza',title:'Hope and Trust',theme:'Reflection',intro:"Read biblical promises with context and without trivializing suffering.",days:[
 ["An expressed trust","Psalms",23,1,6,"The psalm employs images of care and danger; It does not promise absence of pain.","Accompany our difficult paths.","Write something that sustains you."],
 ['Strength in Community',"Isaiah",40,27,31,"Consolation speaks to a tired people; avoid using it to demand performance.","Help us rest without guilt.","Respect your own or someone else's pause."],
 ['Shared Rest',"Matthew",6,25,34,"Teaching asks about anxiety and priorities; does not invalidate material difficulties.","Give us wisdom to ask for support.","Identify specific help."],
 ['Walking Through Doubt',"Psalms",42,1,11,"The sentence describes discouragement with candor; allows you to express questions.","Receive our sincere words.","Listen without trying to fix everything."],
 ["Wait patiently","Romans",8,18,27,'The passage speaks of suffering and hope together.',"Give us patience without resignation to harm.","Identify a possible action today."],
 ["Remember the company","Lamentations",3,19,26,"The lament is placed before the declaration of trust.","Support those who mourn losses.","Offer company without asking for explanations."],
 ['Active Hope',"1 Peter",1,3,9,"Hope is linked to a community under pressure; does not guarantee immediate results.","May our hope produce care.",'Write down a concrete act of solidarity.']
 ]},
 {id:'oracion',title:"Prayer and community",theme:'Prayer',intro:"Seven readings on voluntary prayer, listening and coexistence.",days:[
 ["The taught prayer","Matthew",6,5,15,"Jesus presents a prayer within a teaching on motivations.","Teach us to pray with simplicity.",'Choose a moment of silence.'],
 ['Praying Amid Doubts',"Psalms",13,1,6,"The psalm includes difficult questions before an expression of confidence.","Listen to our questions.","Allows for honest conversation."],
 ["Gather with purpose","Acts",4,23,31,"The community responds in prayer to a conflict; reading the context avoids generalizations.",'Care for our community.',"Think about who we should listen to."],
 ["Joy without pressure","Philippians",4,4,9,"The invitation to pray appears in a community letter; does not deny clinical anxiety.","May we accompany with consideration.","Share gratitude without demanding happiness."],
 ['Praying and Discerning',"James",1,2,8,"The request for wisdom occurs in a context of difficulties; does not promise an infallible decision.","Give us humility to consult.","Consult a decision with someone you trust."],
 ["tell the truth","Psalms",139,1,18,"Poetry reflects on knowledge and presence; does not justify human surveillance.","Help us to be transparent with respect.","Review a privacy boundary."],
 ["Share carefully","Colossians",3,12,17,"The aforementioned attitudes are located in a specific coexistence.","May gratitude be expressed in actions.","Give recognition to a discreet person."]
 ]}
] as const;
export const readingPlans:readonly ReadingPlan[]=content.map(p=>({...p,days:p.days.map((d,index)=>({
 day:index+1,title:d[0],book:d[1],chapter:d[2],start:d[3],end:d[4],
 reflection:d[5],prayer:d[6],action:d[7],editorial:'EN_REVISION' as const
}))}));
export const planById=(id:string)=>readingPlans.find(p=>p.id===id);
