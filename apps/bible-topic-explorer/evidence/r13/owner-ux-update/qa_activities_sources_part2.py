"""Focal Android QA of prototype disclosure, bibliographic links and short activity guide.
Only com.lago.bibletopicexplorer.qa, no DB cleanup or app-production access.
"""
import sys,time,xml.etree.ElementTree as ET
from pathlib import Path
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
def labels():return [row[0] for row in q.nodes()]
def contains(text):return any(text.casefold() in row.casefold() for row in labels())
def wait(t=.7):time.sleep(t)
def verify(label,condition):
 print('ASSERT',label,'PASS' if condition else 'FAIL',flush=True)
 if not condition:raise AssertionError(label+' '+str(labels()[:22]))
def scroll(up=True):
 q.adb('shell','input','swipe','530','1820' if up else '550','530','530' if up else '1750','380');wait(.35)
def tap(needle):
 for i in range(8):
  choices=[row for row in q.nodes() if needle.casefold() in row[0].casefold() and row[3]=='true' and 80<row[2]<2290]
  if choices:
   match=choices[0];q.tap(match[1],match[2]);print('TAP',needle,flush=True);wait(.8);return
  scroll(i<6)
 raise AssertionError('missing button '+needle+' '+str(labels()[:30]))
def shot(stem):
 (HERE/(stem+'.png')).write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
 ET.ElementTree(q.dump()).write(HERE/(stem+'.xml'),encoding='utf-8',xml_declaration=True)
 print('CAPTURE',stem,flush=True)
q.adb('shell','input','keyevent','4');wait(1)
tap('Abrir menú')
verify('drawer-credits-link',contains('Bibliografía y fuentes'))
verify('no-youtube-songs',not contains('Cancionero') and not contains('YouTube'))
shot('ux3-drawer-credits')
tap('Dinámicas y juegos')
verify('activities-overview',contains('Dinámicas pastorales'))
verify('twenty-activities',contains('20') and contains('dinámicas'))
verify('illustration-on-screen',contains('Dibujo original de cuatro personas'))
verify('no-prominent-blue-editorial',not contains('Son propuestas de facilitación'))
shot('ux3-activities-overview')
tap('Abrir guía Ronda de nombres y gestos')
verify('real-group-size',contains('5–20') and contains('personas'))
verify('real-duration',contains('10') and contains('minutos'))
verify('original-art-in-guide',contains('Dibujo original de cuatro personas'))
verify('short-step-guide',contains('Cómo hacerlo') and contains('Materiales'))
verify('consent-info-collapsed',contains('Cuidado y accesibilidad') and not contains('No exigir participación ni contacto físico'))
shot('ux3-activity-detail')
tap('Ver recomendaciones de cuidado')
verify('safety-opens-on-request',contains('No exigir participación ni contacto físico'))
shot('ux3-activity-consent-details')
tap('← Volver a dinámicas')
verify('back-to-activities-overview',contains('Elige una dinámica'))
print('OWNER_UX3_ACTIVITY_ATTRIBUTION_ANDROID_PASS',flush=True)
