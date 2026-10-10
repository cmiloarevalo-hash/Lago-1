/** Educational draft questions derived from references; not pastorally approved. */
export type QuizQuestion={id:string;prompt:string;options:readonly [string,string,string];correct:number;reason:string;reference:string};
export const triviaQuestions:readonly QuizQuestion[]=[
 {id:'t1',prompt:'¿En qué evangelio aparece el diálogo sobre el buen samaritano?',options:['Lucas','Marcos','Juan'],correct:0,reason:'Leer Lucas 10:25–37 y su pregunta inicial antes de aplicar la parábola.',reference:'Lucas 10:25–37'},
 {id:'t2',prompt:'¿Qué capítulo de Juan presenta la imagen de la vid?',options:['Juan 3','Juan 15','Juan 21'],correct:1,reason:'Juan 15:1–12 usa esta imagen dentro del discurso de Jesús.',reference:'Juan 15:1–12'},
 {id:'t3',prompt:'¿Qué salmo comienza con la imagen del pastor?',options:['Salmos 23','Salmos 13','Salmos 42'],correct:0,reason:'Salmos 23:1–6 contiene imágenes de cuidado y peligro.',reference:'Salmos 23:1–6'},
 {id:'t4',prompt:'¿En cuál texto aparece una enseñanza sobre el servicio frente al prestigio?',options:['Marcos 10:35–45','Juan 6:1–15','Salmos 139:1–18'],correct:0,reason:'Marcos 10 confronta la ambición de puestos con el servicio.',reference:'Marcos 10:35–45'},
 {id:'t5',prompt:'¿En qué carta se encuentra el capítulo sobre el amor?',options:['Romanos 8','1 Corintios 13','Gálatas 6'],correct:1,reason:'1 Corintios 13 se lee dentro de la discusión comunitaria de la carta.',reference:'1 Corintios 13:1–13'}
];
export const trueFalseQuestions:readonly {id:string;statement:string;correct:boolean;reason:string;reference:string}[]=[
 {id:'f1',statement:'En Juan 15 se utiliza la imagen de una vid.',correct:true,reason:'Juan 15:1–12 emplea la vid para hablar de permanecer.',reference:'Juan 15:1–12'},
 {id:'f2',statement:'La parábola del buen samaritano se encuentra en el libro de Génesis.',correct:false,reason:'Se lee en Lucas 10:25–37.',reference:'Lucas 10:25–37'},
 {id:'f3',statement:'El Salmo 23 habla solamente de lugares tranquilos y no menciona peligro.',correct:false,reason:'También nombra un valle oscuro; leer Salmos 23:1–6.',reference:'Salmos 23:1–6'},
 {id:'f4',statement:'Marcos 10:42–45 contrapone dominio y servicio.',correct:true,reason:'El pasaje se sitúa después de la petición de puestos de honor.',reference:'Marcos 10:35–45'},
 {id:'f5',statement:'Mateo 6 contiene una enseñanza sobre oración.',correct:true,reason:'El contexto de Mateo 6:5–15 incluye orientaciones sobre motivación.',reference:'Mateo 6:5–15'}
];
export const sequenceGame={book:'Salmos',chapter:23,start:1,end:3,label:'Ordenar tres versículos de Salmos 23 (RV1909)'};
