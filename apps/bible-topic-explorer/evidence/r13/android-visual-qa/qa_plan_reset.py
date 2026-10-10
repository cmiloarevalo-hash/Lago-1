import time,xml.etree.ElementTree as ET
from pathlib import Path
import qa_device as q
ROOT=Path(__file__).parent
def swipe_up():q.adb('shell','input','swipe','530','1900','530','600','420');time.sleep(.4)
def swipe_down():q.adb('shell','input','swipe','530','510','530','1860','420');time.sleep(.4)
def find(t):return [v for v in q.nodes() if v[3]=='true' and t.casefold() in v[0].casefold() and 300<v[2]<2100]
def scroll_to(t,scroll):
 for _ in range(7):
  n=find(t)
  if n:return n[0]
  scroll()
 raise RuntimeError('not visible: '+t)
q.adb('shell','am','force-stop',q.PACKAGE)
q.adb('shell','am','start','-n',q.PACKAGE+'/.MainActivity')
time.sleep(7)
q.click('Abrir menú de navegación');q.click('Planes de lectura');q.click('Comenzar plan')
time.sleep(1)
for _ in range(3):swipe_down()
labels=[n[0] for n in q.nodes()]
assert '7 de 7 días' in labels,'7/7 not persisted: '+str(labels[-20:])
print('COLD_RESTART_7OF7_PASS',flush=True);q.shot('plan-restart-7of7')
b=scroll_to('Reiniciar progreso (sin borrar notas)',swipe_up);q.tap(b[1],b[2]);time.sleep(.8)
print('CONFIRM_DIALOG',[n[0] for n in q.nodes() if 'reiniciar' in n[0].lower() or n[0]=='Cancelar'],flush=True)
q.click('Reiniciar progreso')
time.sleep(1)
for _ in range(3):swipe_down()
labs=[n[0] for n in q.nodes()]
assert '0 de 7 días' in labs,'reset did not update: '+str(labs[-20:])
print('RESET_0OF7_PASS',flush=True);q.shot('plan-reset-0of7')
q.click('Continuar · día 1')
for _ in range(4):swipe_up()
n=[n[0] for n in q.nodes()]
print('DAY1_AFTER_RESET',[s for s in n if 'NOTA_PLAN' in s or 'Marcar día' in s],flush=True)
assert any('NOTA_PLAN_QA_R13_PERSISTENTE' in s for s in n),'plan note missing after reset'
q.shot('plan-note-preserved-after-reset')
print('NOTE_PRESERVED_PASS',flush=True)
