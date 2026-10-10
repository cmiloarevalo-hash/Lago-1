from pathlib import Path
import time,xml.etree.ElementTree as ET
import qa_device as q
out=Path(__file__).parent
def click(t):
 q.click(t);time.sleep(.6)
def shot(stem):
 time.sleep(.8);q.shot(stem);ET.ElementTree(q.dump()).write(out/(stem+'.xml'),encoding='utf-8',xml_declaration=True)
def top():
 for _ in range(4):q.adb('shell','input','swipe','545','450','545','1850','330');time.sleep(.32)
click('Abrir ajustes')
click('Coral · rosa y crema')
click('Hoy')
click('Continuar lectura')
top()
shot('coral-leer')
for n in [160,200]:
 click('Abrir ajustes')
 click(str(n)+'%')
 click('Hoy')
 click('Continuar lectura')
 top()
 shot('reader-scale-'+str(n))
 print('SCALE_CAPTURADA',n,flush=True)
click('Abrir ajustes')
click('100%')
click('Hoy')
q.shot('post-accessibility-hoy')
print('RESTORED_100_PERCENT',flush=True)
