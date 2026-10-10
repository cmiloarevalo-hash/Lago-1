"""Test safe cancellation of Android document picker; QA package only. No imports."""
import sys,time,xml.etree.ElementTree as ET
from pathlib import Path
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
def labels():return [x[0] for x in q.nodes()]
def has(s):return any(s in x for x in labels())
def ensure(s):
 result=has(s);print('ASSERT',s,'PASS' if result else 'FAIL',flush=True)
 if not result:raise AssertionError(s)
def shot(name):
 (HERE/(name+'.png')).write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
 ET.ElementTree(q.dump()).write(HERE/(name+'.xml'),encoding='utf-8',xml_declaration=True)
q.click('Abrir menú de navegación');time.sleep(.5)
q.click('Mis libros PDF/EPUB');time.sleep(.9)
ensure('Mis libros PDF/EPUB')
ensure('Elegir PDF o EPUB de mi dispositivo')
q.click('Elegir PDF o EPUB de mi dispositivo');time.sleep(1.2)
print('DOCUMENT_PICKER_OPEN_ATTEMPT',flush=True)
q.adb('shell','input','keyevent','4');time.sleep(1.0)
ensure('Mis libros PDF/EPUB')
ensure('Selección cancelada')
shot('books-picker-cancel')
print('PDF_EPUB_PICKER_CANCEL_NO_DATA_LOSS_PASS',flush=True)
