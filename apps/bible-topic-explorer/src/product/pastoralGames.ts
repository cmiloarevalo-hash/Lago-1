/** Educational draft questions derived from references; not pastorally approved. */
export type QuizQuestion={id:string;prompt:string;options:readonly [string,string,string];correct:number;reason:string;reference:string};
export const triviaQuestions:readonly QuizQuestion[]=[
 {id:'t1',prompt:"In which gospel does the dialogue about the Good Samaritan appear?",options:["Luke","Mark","John"],correct:0,reason:"Read Luke 10:25–37 and its opening question before applying the parable.",reference:"Luke 10:25–37"},
 {id:'t2',prompt:"Which chapter of John presents the image of the vine?",options:["John 3","John 15","John 21"],correct:1,reason:"John 15:1–12 uses this image within Jesus' speech.",reference:"John 15:1–12"},
 {id:'t3',prompt:"Which psalm begins with the image of the shepherd?",options:["Psalms 23","Psalms 13","Psalms 42"],correct:0,reason:"Psalms 23:1–6 contains images of care and danger.",reference:"Psalms 23:1–6"},
 {id:'t4',prompt:"In which text does a teaching about service versus prestige appear?",options:["Mark 10:35–45","John 6:1–15","Psalms 139:1–18"],correct:0,reason:"Mark 10 confronts ambition for office with service.",reference:"Mark 10:35–45"},
 {id:'t5',prompt:"In which letter is the chapter about love found?",options:['Romans 8','1 Corinthians 13',"Galatians 6"],correct:1,reason:"1 Corinthians 13 is read within the communal discussion of the letter.",reference:'1 Corinthians 13:1–13'}
];
export const trueFalseQuestions:readonly {id:string;statement:string;correct:boolean;reason:string;reference:string}[]=[
 {id:'f1',statement:"In John 15 the image of a vine is used.",correct:true,reason:"John 15:1–12 uses the vine to speak of abiding.",reference:"John 15:1–12"},
 {id:'f2',statement:"The parable of the Good Samaritan is found in the book of Genesis.",correct:false,reason:"It is read in Luke 10:25–37.",reference:"Luke 10:25–37"},
 {id:'f3',statement:'Psalm 23 speaks only of peaceful places and mentions no danger.',correct:false,reason:"It also names a dark valley; read Psalms 23:1–6.",reference:"Psalms 23:1–6"},
 {id:'f4',statement:"Mark 10:42–45 contrasts dominion and service.",correct:true,reason:"The passage is placed after the request for positions of honor.",reference:"Mark 10:35–45"},
 {id:'f5',statement:"Matthew 6 contains a teaching on prayer.",correct:true,reason:"The context of Matthew 6:5–15 includes guidance on motivation.",reference:"Matthew 6:5–15"}
];
export const sequenceGame={book:"Psalms",chapter:23,start:1,end:3,label:"Sort three verses from Psalms 23 (WEBP)"};
