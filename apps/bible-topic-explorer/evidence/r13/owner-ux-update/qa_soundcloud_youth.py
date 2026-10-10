"""Focal real Android QA of direct-open SoundCloud and youth topic cards. QA package only."""
from pathlib import Path
import sys,time,xml.etree.ElementTree as ET
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
def nodes():return q.nodes()
def labels():return [n[0] for n in nodes()]
def has(t):return any(t.casefold() in r.casefold() for r in labels())
def assertit(name,ok):
 print('ASSERT',name,'PASS' if ok else 'FAIL',flush=True)
 if not ok:raise AssertionError(name+' '+str(labels()[:25]))
def swipe(up=True):
 q.adb('shell','input','swipe','545','1810' if up else '510','545' if up else '1700','360');time.sleep(.4)
def tap(t):
 for i in range(8):
  found=[a for a in nodes() if t.casefold() in a[0].casefold() and a[3]=='true' and 105<a[2]<2340]
  if found:
   q.tap(found[0][1],found[0][2]);print('TAP',t,flush=True);time.sleep(.8);return
  swipe(i<6)
 raise AssertionError('button not visible '+t)
def capture(n):
 (HERE/(n+'.png')).write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
 ET.ElementTree(q.dump()).write(HERE/(n+'.xml'),encoding='utf-8',xml_declaration=True)
 print('CAPTURE',n,flush=True)
q.adb('shell','am','force-stop',q.PACKAGE)
q.adb('shell','am','start','-n',q.PACKAGE+'/.MainActivity')
time.sleep(3)
for i in range(10):
 if has('Hoy'):break
 time.sleep(1)
tap('Hoy')
assertit('Today SoundCloud tile',has('SoundCloud'))
tap('SoundCloud')
assertit('External SoundCloud screen',has('Abrir SoundCloud') and has('Listas para descubrir'))
assertit('No URL text input',not any('Enlace de SoundCloud' in n for n in labels()))
assertit('Three external suggestions',has('Canciones cristianas para niños') and has('Instrumentales para acompañar el estudio') and has('Música para encuentros juveniles'))
capture('qa4-soundcloud-external-list')
# Do not follow third-party links during QA; do not start playback.
tap('← Recursos')
tap('Explorar')
assertit('Explore youth entry',has('Explorar temas'))
tap('Explorar Vida interior')
assertit('Youth topic row',has('Paz') and has('Encontrar calma y construir paz'))
capture('qa4-youth-topic-list')
tap('Ver concepto paz')
assertit('Youth peace heading',has('Encontrar calma y construir paz'))
assertit('Bible references RV1909',has('Juan 14:25') and has('Mateo 5:9'))
assertit('Readable youth copy',has('La paz no es solo sentirse tranquilo'))
capture('qa4-youth-peace-detail')
tap('← Volver a los temas')
assertit('Back to family list',has('Paz') and has('Esperanza'))
tap('Ver concepto esperanza')
assertit('Hope without jargon',has('Seguir adelante cuando cuesta'))
assertit('Hope references intact',has('Romanos 5:1') and has('1 Pedro 1:3'))
capture('qa4-youth-hope-detail')
print('ANDROID_SOUNDCLOUD_YOUTH_FOCAL_PASS',flush=True)
