"""Focal follow-up: sources scrolled fully into view and YouTube microcopy.
Uses the already-open QA Guide; never revisits previously passing six photo screens.
"""
from pathlib import Path
import time,sys,xml.etree.ElementTree as ET
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='backslashreplace')
def hit(name):q.click(name);time.sleep(.9)
def capture(name):
 time.sleep(.6)
 (HERE/(name+'.png')).write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
 ET.ElementTree(q.dump()).write(HERE/(name+'.xml'),encoding='utf-8',xml_declaration=True)
 print('CAPTURE',name,flush=True)
for i in range(7):
 q.adb('shell','input','swipe','540','1850','540','610','500')
 time.sleep(.5)
 visible=[n for n in q.nodes() if 'Santa Sede · Protección' in n[0] and 280<n[2]<1940]
 if visible:print('SANTA_SEDE_VISIBLE',visible,flush=True);break
else:raise AssertionError('Santa Sede not visible after scrolling')
all_labels=[n[0] for n in q.nodes()]
for needle in ['USCCB · Renewing the Vision · 1997','UNICEF · Formación Kit Adolescente · 2018','Santa Sede · Protección de menores · 2019']:
 found=any(needle in l for l in all_labels)
 print('FOOTER_ASSERT',needle,'PASS' if found else 'OFFSCREEN',flush=True)
capture('rework-pastoral-footnote')
hit('Hoy');hit('Abrir menú de navegación');hit('YouTube · vídeo visible')
labels=[n[0] for n in q.nodes()]
assert any('Lista pendiente de aprobación' in l for l in labels),'Natural user microcopy missing'
assert not any('PENDIENTE_PLAYLIST' in l for l in labels),'Internal status leaked'
capture('rework-youtube-pending')
print('PASS_FOOTER_AND_YOUTUBE',flush=True)
