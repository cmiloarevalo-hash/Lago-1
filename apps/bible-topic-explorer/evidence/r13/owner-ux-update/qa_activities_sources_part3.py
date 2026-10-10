"""Conclude focal activity screen UI QA from already open guide; QA package only."""
from pathlib import Path
import sys,time,xml.etree.ElementTree as ET
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
def labels():return [n[0] for n in q.nodes()]
def has(x):return any(x.casefold() in y.casefold() for y in labels())
def scroll(up=True):
 q.adb('shell','input','swipe','530','1820' if up else '530','530' if up else '1750','330');time.sleep(.5)
def require(name,check):
 print('CHECK',name,'PASS' if check else 'FAIL',flush=True)
 if not check:raise AssertionError(name+' '+repr(labels()))
def shot(stem):
 (HERE/(stem+'.png')).write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
 ET.ElementTree(q.dump()).write(HERE/(stem+'.xml'),encoding='utf-8',xml_declaration=True)
require('guide-title',has('Ronda de nombres y gestos'))
require('safety-text-initially-hidden',not has('No exigir participación ni contacto físico'))
for i in range(5):
 if has('Cuidado y accesibilidad'):break
 scroll()
require('discreet-info-link',has('Cuidado y accesibilidad'))
shot('ux3-activity-detail')
btn=[r for r in q.nodes() if 'Ver recomendaciones de cuidado' in r[0] and r[3]=='true' and 80<r[2]<2250]
require('interactive-safety-control',bool(btn))
q.tap(btn[0][1],btn[0][2]);time.sleep(.8)
require('safety-shown-after-click',has('No exigir participación ni contacto físico'))
shot('ux3-activity-consent-details')
# Android Back navigation returns to the previous guide list without losing records.
q.adb('shell','input','keyevent','4');time.sleep(.8)
for i in range(6):
 if has('Elige una dinámica'):break
 scroll(False)
require('back-to-activities-list',has('Elige una dinámica'))
shot('ux3-activities-return-list')
print('OWNER_UX3_ANDROID_PASS',flush=True)
