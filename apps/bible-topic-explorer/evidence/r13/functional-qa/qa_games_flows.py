"""Functional local Android QA for biblical games. No user data, package QA only."""
import sys,time,re,xml.etree.ElementTree as ET
from pathlib import Path
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
def wait(t=.5):time.sleep(t)
def labels():return [x[0] for x in q.nodes()]
def check(s):
 good=any(s in x for x in labels());print('ASSERT',s,'PASS' if good else 'FAIL',flush=True)
 if not good:raise AssertionError(s)
def hit(s):q.click(s);wait()
def shot(n):
 (HERE/(n+'.png')).write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
 ET.ElementTree(q.dump()).write(HERE/(n+'.xml'),encoding='utf-8',xml_declaration=True)
 print('EVIDENCE',n,flush=True)
# Trivia: known biblical answer on screen.
check('Pregunta 1 de 5')
hit('Lucas')
check('Respuesta correcta')
check('Puntuación provisional: 1 de 1')
shot('games-trivia-answer')
hit('Siguiente pregunta')
check('Pregunta 2 de 5')
hit('Reiniciar juego')
check('Pregunta 1 de 5')
check('Puntuación provisional: 0 de 0')
print('TRIVIA_AND_RESET_PASS',flush=True)
# True/false: exercise choice, explanation, next, restart.
hit('Verdadero/falso')
check('Pregunta 1 de')
candidates=[s for s in labels() if s=='Verdadero' or s=='Falso']
assert candidates,'V/F buttons missing'
hit('Verdadero')
assert any('Respuesta correcta' in s or 'Respuesta para revisar' in s for s in labels()),'missing feedback'
check('Puntuación provisional:')
shot('games-truefalse-answer')
hit('Siguiente pregunta')
check('Pregunta 2 de')
hit('Reiniciar juego')
check('Pregunta 1 de')
check('Puntuación provisional: 0 de 0')
print('TRUEFALSE_AND_RESET_PASS',flush=True)
# Sequence: labels 1,2,3 come from local RV1909. Reorder if needed.
hit('Ordenar versículos')
wait(1)
check('RV1909 · Salmos 23:')
def sequence():
 return [m.group(1) for s in labels() if (m:=re.match(r'^RV1909 · Salmos 23:([123])$',s))]
def swipe():
 q.adb('shell','input','swipe','540','1920','540','730','380');wait(.3)
def at_visible(s):
 for _ in range(5):
  a=[n for n in q.nodes() if n[0]==s and n[3]=='true' and 310<n[2]<2130]
  if a:
   q.tap(a[0][1],a[0][2]);wait(.6);print('TAP',s,flush=True);return
  swipe()
 raise RuntimeError('button not visible: '+s)
order=sequence()
print('INITIAL_ORDER',order,flush=True)
assert len(order)==3 and set(order)=={'1','2','3'},'not three real local verse labels'
# Bubble-insert desired value at each position using the move-up control.
for i,target in enumerate(['1','2','3']):
 for _ in range(3):
  order=sequence()
  j=order.index(target)
  if j<=i:break
  at_visible('Subir versículo '+target)
 else:raise AssertionError('cannot move '+target)
print('FINAL_ORDER',sequence(),flush=True)
assert sequence()==['1','2','3'],'sequence not solved'
check('Orden correcto de los versículos en Salmos 23.')
shot('games-sequence-solved')
at_visible('Mezclar de nuevo')
assert sequence()!=['1','2','3'],'re-mix did not reset order'
print('SEQUENCE_AND_RESET_PASS',flush=True)
print('GAMES_QA_PASS',flush=True)
