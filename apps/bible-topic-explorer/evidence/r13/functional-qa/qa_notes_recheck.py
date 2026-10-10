"""Synthetic note/highlight persistence; QA package only. No deletion of records."""
import sys,time,xml.etree.ElementTree as ET
from pathlib import Path
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
TOKEN='QA_R13_SYNTHETIC_NOTE_20261010'
def wait(n=.75):time.sleep(n)
def labels():return [x[0] for x in q.nodes()]
def require(x):
 found=any(x in l for l in labels())
 print('ASSERT',x,'PASS' if found else 'FAIL',flush=True)
 if not found:raise AssertionError(x)
def hit(s):q.click(s);wait()
def evidence(n):
 (HERE/(n+'.png')).write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
 ET.ElementTree(q.dump()).write(HERE/(n+'.xml'),encoding='utf-8',xml_declaration=True)
 print('CAPTURE',n,flush=True)
require('Leer nota privada de Filipenses 4:6')
hit('Abrir opciones de Filipenses 4:6')
require(TOKEN)
marks=[e.attrib for e in q.dump().iter('node') if e.attrib.get('content-desc','').startswith('Destacar ')]
if any(x.get('selected')=='true' for x in marks):
 print('HIGHLIGHT_EXISTING_NOT_OVERWRITTEN',flush=True)
else:
 hit('Destacar rosa')
 print('HIGHLIGHT_APPLIED',flush=True)
evidence('note-and-mark-before-restart')
hit('Cerrar opciones')
q.adb('shell','am','force-stop',q.PACKAGE)
q.adb('shell','am','start','-n',q.PACKAGE+'/.MainActivity')
wait(2.3)
hit('Continuar lectura')
ls=labels()
require('Leer nota privada de Filipenses 4:6')
if not any('Opciones de versículo. Filipenses 4:6' in x and 'destacado' in x for x in ls):
 raise AssertionError('Highlight not announced after restart')
print('HIGHLIGHT_AFTER_COLD_RESTART_PASS',flush=True)
hit('Abrir opciones de Filipenses 4:6' if any('Abrir opciones de Filipenses 4:6' in x for x in labels()) else 'Opciones de versículo. Filipenses 4:6')
if not any(TOKEN in x for x in labels()):
 hit('Abrir opciones de Filipenses 4:6')
require(TOKEN)
evidence('note-and-mark-after-restart')
hit('Cerrar opciones')
print('QA_SYNTHETIC_NOTE_HIGHLIGHT_COLD_RESTART_PASS',flush=True)
