from pathlib import Path
import time,xml.etree.ElementTree as ET
import qa_device as q
out=Path(__file__).parent
def click(t):q.click(t);time.sleep(.6)
def up():q.adb('shell','input','swipe','530','1890','530','790','430');time.sleep(.4)
def down():q.adb('shell','input','swipe','530','515','530','1790','430');time.sleep(.4)
for pct in [160,200]:
 click('Abrir ajustes');click(str(pct)+'%');click('Hoy')
 for i in range(6):
  a=[x for x in q.nodes() if 'Continuar lectura' in x[0] and x[3]=='true' and 400<x[2]<2040]
  if a:break
  up()
 else:raise RuntimeError('continue out of reach '+str(pct))
 q.tap(a[0][1],a[0][2]);time.sleep(1.6)
 for i in range(5):down()
 labs=[x[0] for x in q.nodes()]
 assert any('Filipenses 4' in x for x in labs),'not in reader at '+str(pct)+': '+str(labs[:15])
 print('READER_REAL',pct,flush=True)
 q.shot('reader-scale-'+str(pct))
 ET.ElementTree(q.dump()).write(out/('reader-scale-'+str(pct)+'.xml'),encoding='utf-8',xml_declaration=True)
click('Abrir ajustes');click('100%');click('Hoy')
print('RESTORED_SCALE_100',flush=True)
