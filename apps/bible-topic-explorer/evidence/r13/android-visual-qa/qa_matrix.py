"""One consolidated local Android screenshot matrix; 3 themes × 3 screens.
Never clears application data; targets QA package only.
"""
import time,sys,xml.etree.ElementTree as ET
from pathlib import Path
import qa_device as q
ROOT=Path(__file__).parent
def evidence(stem):
 time.sleep(1.4)
 xml=q.dump()
 ET.ElementTree(xml).write(ROOT/(stem+'.xml'),encoding='utf-8',xml_declaration=True)
 q.shot(stem)
 print('UI_EVIDENCE',stem,flush=True)
def hit(name):
 q.click(name);time.sleep(.85)
def top():
 for _ in range(3):q.adb('shell','input','swipe','525','520','525','1750','400');time.sleep(.5)
def capture(theme):
 print('START_THEME',theme,flush=True)
 hit('Abrir ajustes')
 hit({'coral':'Coral · rosa y crema','natural':'Natural · salvia y beige','marine':'Marino · azul y dorado'}[theme])
 evidence(theme+'-settings')
 hit('Hoy')
 evidence(theme+'-hoy')
 hit('Continuar lectura')
 time.sleep(1.5)
 top()
 evidence(theme+'-leer')
 hit('Hoy')
 hit('Planes · A tu ritmo')
 hit('Comenzar plan')
 evidence(theme+'-planes')
 print('END_THEME',theme,flush=True)
if __name__=='__main__':
 for t in sys.argv[1:] or ['coral','natural','marine']:
  try:capture(t)
  except Exception as e:
   print('FAIL_THEME',t,repr(e),flush=True)
   raise
