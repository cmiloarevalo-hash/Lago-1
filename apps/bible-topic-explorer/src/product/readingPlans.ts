/** R1.3: 4 independent seven-day journeys; 28 ORIGINAL editorial drafts.
 * Text is not a quotation or a pastoral endorsement. RV1909 passages are linked, not copied.
 * Existence and exact source-label sequences must be audited against frozen SQLite before release.
 */
export type ReadingDay={day:number;title:string;book:string;chapter:number;start:number;end:number;reflection:string;prayer:string;action:string;editorial:'EN_REVISION'};
export type ReadingPlan={id:string;title:string;theme:string;intro:string;days:readonly ReadingDay[]};
const content=[
 {id:'encuentro',title:'Encuentro con Jesús',theme:'Evangelios',intro:'Siete encuentros para descubrir gestos de Jesús en su contexto.',days:[
 ['Llamados a escuchar','Marcos',1,14,20,'Los primeros discípulos responden en una situación concreta. Escucha qué ocurre antes de aplicar la lectura a tu historia.','Jesús, acompaña mis decisiones de hoy.','Escucha cinco minutos sin interrumpir.'],
 ['En busca de descanso','Mateo',11,25,30,'El descanso ofrecido debe leerse en relación con el llamado de Jesús, sin negar necesidades de salud.','Señor, enséñanos a acompañar con respeto.','Ofrece ayuda sin imponerla.'],
 ['Compartir lo que hay','Juan',6,1,15,'El alimento compartido abre preguntas sobre responsabilidad colectiva. No reduzcas el relato a una promesa de riqueza.','Jesús, danos generosidad prudente.','Comparte un recurso disponible.'],
 ['Escuchar en el camino','Lucas',10,38,42,'Dos formas de acoger aparecen en tensión; no conviertas la comparación en reproche contra el trabajo doméstico.','Señor, danos escucha atenta.','Dedica un momento sin pantallas a alguien.'],
 ['Acercarse con respeto','Marcos',10,46,52,'Jesús pregunta qué necesita la otra persona en lugar de presuponerlo.','Ayúdanos a escuchar antes de decidir.','Pregunta primero cómo puedes ayudar.'],
 ['Caminar con preguntas','Lucas',24,13,35,'Los viajeros explican su experiencia; el contexto del relato da forma al reconocimiento.','Acompaña nuestras dudas con paciencia.','Formula una pregunta honesta sobre tu lectura.'],
 ['Permanecer en el amor','Juan',15,1,12,'La imagen de la vid presenta relaciones y responsabilidad; lee todo el discurso antes de sacar conclusiones.','Señor, que nuestro amor se vea en obras.','Reconoce un aporte de tu comunidad.']
 ]},
 {id:'amor',title:'Amor en acción',theme:'Servicio',intro:'Practicar cuidado, límites y solidaridad sin exponer a otros.',days:[
 ['Amar de palabra y hecho','1 Juan',3,16,20,'El cuidado se expresa mediante acciones concretas, no solo discursos.','Enséñanos a actuar con ternura.','Haz una acción pequeña y respetuosa.'],
 ['El prójimo inesperado','Lucas',10,25,37,'Preguntar quién es prójimo cambia al leer la historia completa y su diálogo.','Danos ojos para escuchar al otro.','Conoce un recurso comunitario real.'],
 ['Servir sin protagonismo','Marcos',10,35,45,'El servicio de Jesús confronta posiciones de prestigio; no justifica abusos ni sumisión forzada.','Libéranos del deseo de dominar.','Cede la palabra a otra voz.'],
 ['Amor que cuida límites','1 Corintios',13,1,13,'La poesía sobre el amor no sustituye la protección ante daño o violencia.','Enséñanos paciencia con dignidad.','Anota un límite respetuoso.'],
 ['Compartir responsablemente','Hechos',2,42,47,'La comunidad comparte recursos en contexto; no impongas donaciones ni publiques datos.','Ayúdanos a sostenernos juntos.','Consulta qué ayuda es realmente útil.'],
 ['Cuidar en comunidad','Gálatas',6,1,10,'La exhortación combina ayudar y asumir responsabilidades.','Que cuidemos sin controlar.','Acompaña sin pedir información privada.'],
 ['Una práctica nueva','Romanos',12,9,18,'El amor sincero se expresa en vínculos y convivencia prudente.','Que el bien crezca entre nosotros.','Agradece una tarea invisible.']
 ]},
 {id:'esperanza',title:'Esperanza y confianza',theme:'Reflexión',intro:'Leer promesas bíblicas con contexto y sin trivializar el sufrimiento.',days:[
 ['Una confianza expresada','Salmos',23,1,6,'El salmo emplea imágenes de cuidado y peligro; no promete ausencia de dolor.','Acompaña nuestros caminos difíciles.','Escribe algo que te sostiene.'],
 ['Fuerza en comunidad','Isaías',40,27,31,'La consolación habla a un pueblo cansado; evita usarla para exigir rendimiento.','Ayúdanos a descansar sin culpa.','Respeta una pausa propia o ajena.'],
 ['Descanso compartido','Mateo',6,25,34,'La enseñanza pregunta por ansiedad y prioridades; no invalida dificultades materiales.','Danos sabiduría para pedir apoyo.','Identifica una ayuda concreta.'],
 ['Caminar en la duda','Salmos',42,1,11,'La oración describe desaliento con franqueza; permite expresar preguntas.','Recibe nuestras palabras sinceras.','Escucha sin intentar arreglar todo.'],
 ['Esperar con paciencia','Romanos',8,18,27,'El texto nombra sufrimiento y esperanza juntos.','Danos paciencia sin resignación al daño.','Identifica una acción posible hoy.'],
 ['Recordar la compañía','Lamentaciones',3,19,26,'El lamento se sitúa antes de la declaración de confianza.','Sostén a quienes lamentan pérdidas.','Ofrece compañía sin pedir explicaciones.'],
 ['Esperanza activa','1 Pedro',1,3,9,'La esperanza se vincula a una comunidad bajo presión; no garantiza resultados inmediatos.','Que nuestra esperanza produzca cuidado.','Anota un gesto concreto de solidaridad.']
 ]},
 {id:'oracion',title:'Oración y comunidad',theme:'Oración',intro:'Siete lecturas sobre oración voluntaria, escucha y convivencia.',days:[
 ['La oración enseñada','Mateo',6,5,15,'Jesús presenta una oración dentro de una enseñanza sobre motivaciones.','Enséñanos a orar con sencillez.','Busca un momento de silencio voluntario.'],
 ['Orar en medio de dudas','Salmos',13,1,6,'El salmo incluye preguntas difíciles antes de una expresión de confianza.','Escucha nuestras preguntas.','Permite una conversación sincera.'],
 ['Reunirse con propósito','Hechos',4,23,31,'La comunidad responde en oración a un conflicto; leer el contexto evita generalizaciones.','Cuida nuestra comunidad.','Piensa a quién debemos escuchar.'],
 ['Alegría sin presión','Filipenses',4,4,9,'La invitación a orar aparece en una carta comunitaria; no niega ansiedad clínica.','Que acompañemos con consideración.','Comparte gratitud sin exigir felicidad.'],
 ['Orar y discernir','Santiago',1,2,8,'El pedido de sabiduría ocurre en un marco de dificultades; no promete una decisión infalible.','Danos humildad para consultar.','Consulta una decisión con alguien de confianza.'],
 ['Decir la verdad','Salmos',139,1,18,'La poesía reflexiona sobre conocimiento y presencia; no justifica vigilancia humana.','Ayúdanos a ser transparentes con respeto.','Revisa un límite de privacidad.'],
 ['Compartir con cuidado','Colosenses',3,12,17,'Las actitudes mencionadas se ubican en una convivencia concreta.','Que la gratitud se exprese en acciones.','Da reconocimiento a una persona discreta.']
 ]}
] as const;
export const readingPlans:readonly ReadingPlan[]=content.map(p=>({...p,days:p.days.map((d,index)=>({
 day:index+1,title:d[0],book:d[1],chapter:d[2],start:d[3],end:d[4],
 reflection:d[5],prayer:d[6],action:d[7],editorial:'EN_REVISION' as const
}))}));
export const planById=(id:string)=>readingPlans.find(p=>p.id===id);
