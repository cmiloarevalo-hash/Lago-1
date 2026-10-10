"""Simplify only 23 editorial sample copy fields. Preserve topic IDs, reference ranges, corpus and review status."""
from pathlib import Path
import json
P=Path(__file__).resolve().parents[3]/'src/product/conceptPreviews.ts'
s=P.read_text(encoding='utf-8')
blob=s.split('export const conceptPreviews:readonly ConceptPreview[] = ',1)[1].split('\n];',1)[0]+'\n]'
rows=json.loads(blob)
# Each entry = youth-friendly heading, concise explanation, two grounded reasons to read.
COPY={
 'dios':('¿Quién es Dios para ti?',
   '¿Cómo es Dios y por qué tantas personas hablan de él? Estos pasajes muestran cómo la Biblia lo presenta y nos invitan a hacer nuestras propias preguntas.',
   ('Descubre cómo se habla de amar a Dios con todo el corazón.','Pablo conversa sobre Dios con personas que tenían otras creencias.')),
 'jesus':('¿Quién es Jesús?',
   'Muchos conocen su nombre, pero ¿qué decía Jesús sobre sí mismo? Conoce lo que pensaban sus amigos y cómo empieza el Evangelio de Juan.',
   ('Jesús pregunta a sus amigos quién creen que es.','Juan presenta a Jesús y explica qué significa su llegada.')),
 'confianza':('Cuando no sabes qué hacer',
   'Hay días en que todo parece incierto. Estos textos invitan a reconocer lo que sentimos y pensar en dónde encontramos apoyo.',
   ('Una persona reconoce que siente miedo y busca apoyo en Dios.','Jesús habla de las preocupaciones de cada día.')),
 'voluntad-de-dios':('Elegir lo que hace bien',
   '¿Cómo decidir cuando hay varias opciones? La Biblia invita a pensar en la justicia, la bondad y el cuidado de los demás.',
   ('Miqueas pone el acento en la justicia y la bondad.','Pablo invita a revisar nuestra manera de pensar y actuar.')),
 'amor':('Amar con hechos',
   'El cariño se nota en cómo tratamos a las personas. Aquí puedes descubrir qué significa amar más allá de las palabras.',
   ('Pablo muestra por qué el amor importa más que aparentar.','Jesús invita a sus seguidores a cuidarse unos a otros.')),
 'matrimonio':('Respeto en las relaciones',
   'Una relación sana necesita respeto, escucha y cuidado mutuo. Lee estos pasajes y conversa sobre cómo construir vínculos que hagan bien.',
   ('Un relato sobre la compañía y la unión entre personas.','Pablo describe gestos de amor que sirven en toda relación.')),
 'perdon':('¿Qué hacemos después de un daño?',
   'Perdonar puede ser difícil y no significa permitir que el daño continúe. Estos textos ayudan a pensar en la misericordia y la responsabilidad.',
   ('Una historia de Jesús pregunta qué hacemos con el perdón recibido.','Jesús ora incluso en un momento de profundo sufrimiento.')),
 'tentacion':('Decidir bajo presión',
   'A veces nos piden hacer cosas que no queremos. Estos pasajes ayudan a pensar antes de elegir y a buscar apoyo cuando lo necesitamos.',
   ('Jesús enfrenta decisiones difíciles y responde con firmeza.','Pablo anima a mantenerse atento y buscar una salida.')),
 'paz':('Encontrar calma y construir paz',
   'La paz no es solo sentirse tranquilo: también es aprender a tratar bien a los demás. ¿Qué puedes hacer hoy para llevar un poco de paz?',
   ('Jesús habla de paz a sus amigos antes de despedirse.','Jesús llama felices a quienes trabajan por la paz.')),
 'esperanza':('Seguir adelante cuando cuesta',
   'Cuando algo sale mal, es normal perder el ánimo. Estos textos muestran que podemos mantener la esperanza sin negar los momentos difíciles.',
   ('Pablo relaciona la esperanza con aprender a perseverar.','Una carta anima a conservar la esperanza en medio de las pruebas.')),
 'gozo':('Alegría sin fingir',
   'No tenemos que sonreír todo el tiempo. La Biblia habla de una alegría que convive con los días difíciles y con la alegría de reencontrarse.',
   ('Pablo invita a la alegría y a cuidar lo que pensamos.','Jesús cuenta una historia sobre la alegría de encontrar lo perdido.')),
 'paciencia':('Aprender a esperar',
   'Esperar no siempre es fácil, sobre todo cuando queremos resultados rápidos. Estos textos muestran cómo vivir ese tiempo con paciencia y amor.',
   ('Santiago compara la paciencia con la espera de quien siembra.','Pablo recuerda que el amor también sabe esperar.')),
 'miedo':('Cuando sientes miedo',
   'Sentir miedo es humano. Estas historias muestran que podemos hablar de lo que nos asusta y pedir compañía.',
   ('Un salmo pone en palabras el miedo de una persona.','Los amigos de Jesús se asustan durante una tormenta.')),
 'ansiedad':('Cuando las preocupaciones pesan',
   'A veces la cabeza no deja de dar vueltas. Estos pasajes invitan a hablar de lo que sentimos y a buscar apoyo; no reemplazan la ayuda profesional.',
   ('Jesús habla de las preocupaciones por el día a día.','Pablo menciona la oración y pensamientos que ayudan a cuidar el corazón.')),
 'sufrimiento':('No pasar solo los días difíciles',
   'Cuando alguien sufre, escuchar y acompañar puede marcar una diferencia. Estos textos hablan de esperanza y de consuelo compartido.',
   ('Pablo reconoce que toda la creación atraviesa momentos difíciles.','Una carta habla de recibir y compartir consuelo.')),
 'oracion':('Hablar con Dios con confianza',
   'No hacen falta palabras perfectas para orar. Estos pasajes presentan maneras sencillas de hablar con Dios y escuchar.',
   ('Jesús enseña a orar con sencillez, sin buscar aplausos.','Los discípulos le piden a Jesús que les enseñe a orar.')),
 'adoracion':('¿Por qué adoramos?',
   'Adorar es más que repetir canciones o gestos. Lee cómo la Biblia relaciona la adoración con la verdad, la gratitud y nuestra manera de vivir.',
   ('Jesús conversa sobre la adoración con una mujer samaritana.','Un salmo invita a cantar y agradecer a Dios.')),
 'ayuno':('Una práctica con sentido',
   'Ayunar aparece en la Biblia como una práctica espiritual, pero nunca debe imponerse. Estos textos preguntan qué importa más: parecer bueno o actuar con justicia.',
   ('Jesús cuestiona hacer del ayuno un espectáculo.','Isaías relaciona las prácticas religiosas con ayudar a quien lo necesita.')),
 'generosidad':('Compartir sin obligación',
   'Ser generoso puede ser dar tiempo, escuchar o ayudar. La Biblia invita a pensar en lo que significa compartir sin presionar a nadie.',
   ('Jesús observa una ofrenda pequeña en un contexto difícil.','Pablo habla de dar libremente y sin presión.')),
 'decisiones':('Elegir con calma',
   'Las decisiones pequeñas también importan. Estos pasajes invitan a pensar en las consecuencias y a elegir con responsabilidad.',
   ('Un texto propone pensar qué camino conduce a la vida.','Jesús usa un ejemplo cotidiano sobre planear antes de actuar.')),
 'sexualidad':('Cuidar tu cuerpo y tus decisiones',
   'Tu cuerpo y tus límites merecen respeto. Estos pasajes abren preguntas sobre dignidad, responsabilidad y relaciones sin presiones.',
   ('Pablo habla de cuidar el cuerpo y actuar con responsabilidad.','Un relato bíblico invita a pensar en la compañía y el vínculo.')),
 'mandamientos':('Reglas para aprender a cuidar',
   'Las reglas pueden parecer muchas. Estos pasajes ayudan a descubrir qué relación tienen los mandamientos con el respeto y el amor a los demás.',
   ('Conoce los mandamientos dados al pueblo de Israel.','Jesús resume el camino de la ley en amar a Dios y al prójimo.')),
 'fruto-del-espiritu':('Lo bueno que crece en nosotros',
   'La paciencia, la bondad y el amor se ven en nuestros actos. La Biblia usa la imagen de un fruto para hablar de ese crecimiento.',
   ('Pablo enumera actitudes que ayudan a vivir mejor con otros.','Jesús utiliza la imagen de una vid para hablar de crecer y dar fruto.'))
}
assert set(COPY)=={x['topicId'] for x in rows},'All samples need owner youth edit'
for x in rows:
 new_heading,new_synopsis,reason=COPY[x['topicId']]
 assert len(reason)==len(x['passages'])
 for key,value in [('subtopic',new_heading),('synopsis',new_synopsis)]:
  old_literal=json.dumps(x[key],ensure_ascii=False)
  new_literal=json.dumps(value,ensure_ascii=False)
  # Match only within row by unique legacy string content.
  assert s.count('"'+key+'": '+old_literal)==1,('duplicate old',x['topicId'],key)
  s=s.replace('"'+key+'": '+old_literal,'"'+key+'": '+new_literal)
 for passage,new_reason in zip(x['passages'],reason):
  old=json.dumps(passage['rationale'],ensure_ascii=False)
  assert s.count('"rationale": '+old)==1,('duplicate rationale',x['topicId'],old)
  s=s.replace('"rationale": '+old,'"rationale": '+json.dumps(new_reason,ensure_ascii=False))
P.write_text(s,encoding='utf-8',newline='\n')
print('REVISED',len(rows),'editorial previews (23 subtitles, 23 synopses, 46 passage rationales), no IDs/references/status changes')
