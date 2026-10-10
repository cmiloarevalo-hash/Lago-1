"""9 Android emulator screenshots on same isolated QA install.

Three themes x Hoy/Leer/Planes. Preserve app storage, do not reset plan data.
Records selector choice and chapter heading; screenshots are actual adb screencaps.
"""
import time,sys,xml.etree.ElementTree as ET
from pathlib import Path
OUT=Path(__file__).parent
sys.path.insert(0,str(OUT.parent/"android-visual-qa"))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='backslashreplace')
def hit(label):
 q.click(label);time.sleep(1.1)
def shot(key):
 time.sleep(.9)
 f=OUT/(key+'.png')
 f.write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
 ET.ElementTree(q.dump()).write(OUT/(key+'.xml'),encoding='utf-8',xml_declaration=True)
 print('REAL_ANDROID',key,f.stat().st_size,flush=True)
def top():
 for _ in range(4):
  q.adb('shell','input','swipe','520','530','520','1890','360');time.sleep(.3)
def check(x):
 values=[n[0] for n in q.nodes()]
 if not any(x in s for s in values):
  raise AssertionError('Missing '+x+': '+repr(values[:24]))
 print('ASSERT_PASS',x,flush=True)
THEMES={'coral':'Coral · rosa y crema','natural':'Natural · salvia y beige','marine':'Marino · azul y dorado'}
for theme,selector in THEMES.items():
 print('THEME',theme,flush=True)
 hit('Abrir ajustes')
 hit(selector);check(selector)
 shot('qa-'+theme+'-selector')
 hit('Hoy')
 shot('qa-'+theme+'-hoy')
 hit('Continuar lectura');top();check('Filipenses 4')
 shot('qa-'+theme+'-leer')
 hit('Hoy')
 hit('Planes · A tu ritmo')
 hit('Comenzar plan')
 shot('qa-'+theme+'-planes')
 hit('Hoy')
print('NINE_SCREEN_MATRIX_PASS',flush=True)
