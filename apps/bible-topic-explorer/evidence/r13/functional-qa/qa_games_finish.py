"""Resume V/F and text-ordering in isolated QA. Correctly discriminate 'Verdadero' from 'Verdadero/falso'."""
import sys,time,re,xml.etree.ElementTree as ET
from pathlib import Path
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
def wait(t=.55):time.sleep(t)
def labels():return [r[0] for r in q.nodes()]
def swipe(up):
 q.adb('shell','input','swipe','530','1850' if up else '550','530' if up else '1800','370');wait(.35)
def hit(needle):
 for i in range(8):
  r=[x for x in q.nodes() if x[3]=='true' and x[0]==needle and 320<x[2]<2100]
  if not r:r=[x for x in q.nodes() if x[3]=='true' and needle.casefold() in x[0].casefold() and 320<x[2]<2100]
  if r:
   q.tap(r[0][1],r[0][2]);print('TAP',needle,r[0],flush=True);wait();return
  swipe(i<4)
 raise AssertionError('not visible/clickable '+needle)
def check(needle):
 for i in range(8):
  if any(needle in s for s in labels()):print('ASSERT',needle,'PASS',flush=True);return
  swipe(i<4)
 raise AssertionError('label missing '+needle)
def shot(name):
 (HERE/(name+'.png')).write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
 ET.ElementTree(q.dump()).write(HERE/(name+'.xml'),encoding='utf-8',xml_declaration=True)
 print('CAPTURE',name,flush=True)
check('En Juan 15')
hit('Verdadero')
check('Respuesta correcta')
check('Puntuación provisional: 1 de 1')
shot('games-truefalse-feedback')
hit('Siguiente pregunta')
check('Pregunta 2 de 5')
hit('Reiniciar juego')
check('Pregunta 1 de 5')
check('Puntuación provisional: 0 de 0')
print('TRUE_FALSE_AND_RESTART_PASS',flush=True)
hit('Ordenar versículos')
check('RV1909 · Salmos 23:')
def order():
 return [m.group(1) for s in labels() if (m:=re.match(r'^RV1909 · Salmos 23:([123])$',s))]
print('SEQUENCE_INITIAL',order(),flush=True)
assert len(order())==3 and set(order())==set('123'),'missing local verse labels'
for i,target in enumerate(['1','2','3']):
 for _ in range(4):
  o=order();j=o.index(target)
  if j<=i:break
  hit('Subir versículo '+target)
 else:raise AssertionError('unable to sort '+target)
print('SEQUENCE_FINAL',order(),flush=True)
assert order()==['1','2','3'],'sequence did not sort'
check('Orden correcto de los versículos en Salmos 23.')
shot('games-sequence-complete')
hit('Mezclar de nuevo')
assert order()!=['1','2','3'],'sequence did not mix/reset'
print('SEQUENCE_RESET_PASS',flush=True)
print('GAMES_THREE_MODES_PASS',flush=True)
