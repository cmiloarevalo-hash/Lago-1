"""QA synthetic plan completion. Never mutates the official package, QA ID only."""
import time,xml.etree.ElementTree as ET
from pathlib import Path
import qa_device as q
ROOT=Path(__file__).parent
def swipe_up():q.adb('shell','input','swipe','550','1900','550','590','400');time.sleep(.4)
def swipe_down():q.adb('shell','input','swipe','540','530','540','1870','400');time.sleep(.4)
def find_label(t):
 return [v for v in q.nodes() if v[3]=='true' and t.casefold() in v[0].casefold() and 300<v[2]<2100]
def locate(t,up):
 for i in range(7):
  matches=find_label(t)
  if matches:return matches[0]
  up()
 raise RuntimeError('not visible after scrolling '+t)
def click_visible(t,scroll):
 loc=locate(t,scroll)
 q.tap(loc[1],loc[2]);print('CLICK',t,loc,flush=True);time.sleep(1)
for day in range(2,8):
 click_visible('Continuar · día '+str(day),swipe_down)
 click_visible('Marcar día completado',swipe_up)
 q.adb('shell','input','keyevent','4');time.sleep(1)
 print('DONE_DAY',day,flush=True)
for _ in range(3):swipe_down()
labels=[x[0] for x in q.nodes()]
print('LABELS_FINAL',[s for s in labels if '7 de 7' in s or '7 días' in s or 'Continuar' in s][:9],flush=True)
q.shot('plan-7of7')
ET.ElementTree(q.dump()).write(ROOT/'plan-7of7.xml',encoding='utf-8',xml_declaration=True)
