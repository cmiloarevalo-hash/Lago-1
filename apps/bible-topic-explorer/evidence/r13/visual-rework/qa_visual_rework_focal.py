"""Focal QA: changed imagery (Hoy/Planes across 3 themes), Coral reader header,
pastoral bibliographic footer, YouTube honest placeholder. Isolated QA package ONLY.
Never clears storage, never installs on production package.
"""
from pathlib import Path
import time,sys,xml.etree.ElementTree as ET
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/"android-visual-qa"))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='backslashreplace')
def hit(label):
 q.click(label);time.sleep(1.05)
def evidence(stem):
 time.sleep(.9)
 raw=q.adb('exec-out','screencap','-p',text=False).stdout
 (HERE/(stem+'.png')).write_bytes(raw)
 ET.ElementTree(q.dump()).write(HERE/(stem+'.xml'),encoding='utf-8',xml_declaration=True)
 print('EVIDENCE',stem,len(raw),flush=True)
def labels():
 return [n[0] for n in q.nodes()]
def expect(fragment):
 present=any(fragment in x for x in labels())
 print('ASSERT',repr(fragment),'PASS' if present else 'FAIL',flush=True)
 if not present:raise AssertionError(fragment)
def top():
 for i in range(3):
  q.adb('shell','input','swipe','530','570','530','1760','410');time.sleep(.35)
names={'coral':'Coral · rosa y crema','natural':'Natural · salvia y beige','marine':'Marino · azul y dorado'}
for theme,name in names.items():
 print('THEME',theme,flush=True)
 hit('Abrir ajustes');hit(name)
 evidence(f'rework-{theme}-selected')
 hit('Hoy');evidence(f'rework-{theme}-hoy')
 if theme=='coral':
  hit('Continuar lectura');top();expect('Filipenses 4')
  evidence('rework-coral-leer-head')
  hit('Hoy')
 hit('Planes · A tu ritmo');hit('Comenzar plan')
 evidence(f'rework-{theme}-planes')
 hit('Hoy')
print('PASTORAL',flush=True)
hit('Abrir menú de navegación');hit('Guía pastoral')
hit('Acogida con respeto')
found=False
for i in range(12):
 lab=labels()
 if any('USCCB · Renewing the Vision · 1997' in s for s in lab) and any('UNICEF · Formación Kit Adolescente · 2018' in s for s in lab):
  print('FOOTER_VISIBLE',i,flush=True);found=True;break
 q.adb('shell','input','swipe','540','1950','540','520','430');time.sleep(.4)
if not found: raise AssertionError('compact bibliographic footer not visible')
expect('USCCB · Renewing the Vision · 1997')
expect('UNICEF · Formación Kit Adolescente · 2018')
expect('Santa Sede · Protección de menores · 2019')
evidence('rework-pastoral-footnote')
print('YOUTUBE',flush=True)
hit('Hoy');hit('Abrir menú de navegación');hit('YouTube · vídeo visible')
expect('Lista pendiente de aprobación')
assert all('PENDIENTE_PLAYLIST' not in s for s in labels()),'Technical status leaked to visible UI'
evidence('rework-youtube-pending')
print('FOCAL_ANDROID_PASS',flush=True)
