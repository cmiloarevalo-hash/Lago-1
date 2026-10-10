"""QA game flows from trivia answered; package com.lago.bibletopicexplorer.qa only."""
import sys,time,re,xml.etree.ElementTree as ET
from pathlib import Path
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
def wait(t=.45):time.sleep(t)
def labels():return [r[0] for r in q.nodes()]
def swipe(up):
 q.adb('shell','input','swipe','530','1850' if up else '530','530' if up else '1800','370')
 wait(.5)
def search(needle):
 return [r for r in q.nodes() if r[3]=='true' and needle.casefold() in r[0].casefold() and 340<r[2]<2110]
def hit(needle):
 for i in range(8):
  hitlist=search(needle)
  if hitlist:
   v=hitlist[0];q.tap(v[1],v[2]);print('TAP',needle,v,flush=True);wait(.65);return
  swipe(i<4)
 raise AssertionError('not clickable visible '+needle+' '+str(labels()[:12]))
def check(needle):
 for i in range(8):
  if any(needle in s for s in labels()):
   print('ASSERT',needle,'PASS',flush=True);return
  swipe(i<4)
 raise AssertionError('not shown '+needle)
def save(name):
 (HERE/(name+'.png')).write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
 ET.ElementTree(q.dump()).write(HERE/(name+'.xml'),encoding='utf-8',xml_declaration=True)
 print('CAPTURE',name,flush=True)
# Trivia answer has been selected in current QA instance.
check('Puntuación provisional: 1 de 1')
save('games-trivia-correct')
hit('Siguiente pregunta')
check('Pregunta 2 de 5')
hit('Reiniciar juego')
check('Pregunta 1 de 5')
check('Puntuación provisional: 0 de 0')
print('TRIVIA_RESTART_PASS',flush=True)
hit('Verdadero/falso')
check('Pregunta 1 de')
hit('Verdadero')
assert any('Respuesta correcta' in x or 'Respuesta para revisar' in x for x in labels()),'No explanation after V/F choice'
check('Puntuación provisional:')
save('games-truefalse-feedback')
hit('Siguiente pregunta')
check('Pregunta 2 de')
hit('Reiniciar juego')
check('Puntuación provisional: 0 de 0')
print('TRUE_FALSE_RESTART_PASS',flush=True)
hit('Ordenar versículos')
check('RV1909 · Salmos 23:')
def order():
 return [m.group(1) for s in labels() if (m:=re.match(r'^RV1909 · Salmos 23:([123])$',s))]
o=order()
print('SEQ_INITIAL',o,flush=True)
assert len(o)==3 and set(o)==set('123')
# UI generated solely from local RV1909 verse identities; solve with accessible up controls.
for i,target in enumerate(['1','2','3']):
 for _ in range(4):
  o=order()
  j=o.index(target)
  if j<=i:break
  hit('Subir versículo '+target)
 else:raise AssertionError('could not position '+target)
print('SEQ_FINAL',order(),flush=True)
assert order()==['1','2','3']
check('Orden correcto de los versículos en Salmos 23.')
save('games-sequence-complete')
hit('Mezclar de nuevo')
assert order()!=['1','2','3'],'reset sequence did not change order'
print('SEQUENCE_RESET_PASS',flush=True)
print('GAMES_ALL_THREE_PASS',flush=True)
