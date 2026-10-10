"""Isolated QA flow: synthetic note and highlight at RV1909 Philippians 4:6. Does not delete data."""
import sys,time,xml.etree.ElementTree as ET
from pathlib import Path
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
TOKEN='QA_R13_SYNTHETIC_NOTE_20261010'
def wait(n=.6):time.sleep(n)
def labels():return [x[0] for x in q.nodes()]
def require(x):
 found=any(x in l for l in labels())
 print('ASSERT',x,'PASS' if found else 'FAIL',flush=True)
 if not found:raise AssertionError(x)
def capture(n):
 (HERE/(n+'.png')).write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
 ET.ElementTree(q.dump()).write(HERE/(n+'.xml'),encoding='utf-8',xml_declaration=True)
 print('EVIDENCE',n,flush=True)
def hit(s):q.click(s);wait()
# Precondition: test-only isolated package is showing the virgin note editor of Philippians 4:6.
require('Tu nota privada')
require('Guardar nota')
q.click('Escribe tu nota personal')
q.adb('shell','input','text',TOKEN)
wait()
q.adb('shell','input','keyevent','4')
wait()
require(TOKEN)
hit('Guardar nota')
require('Nota privada guardada.')
capture('note-saved')
# Reopen original verse, confirm note persisted on-screen, add highlight without modifying an existing one.
hit('Opciones de versículo. Filipenses 4:6')
hit('Abrir opciones de Filipenses 4:6')
require(TOKEN)
# If an old mark exists do not overwrite it.
marks=[e.attrib for e in q.dump().iter('node') if e.attrib.get('content-desc','').startswith('Destacar ')]
if any(m.get('selected')=='true' for m in marks):
 print('HIGHLIGHT_SKIPPED_EXISTING',flush=True)
else:
 hit('Destacar rosa')
 require('Destacar rosa')
 print('HIGHLIGHT_ROSE_SELECTED',flush=True)
capture('note-highlight-initial')
hit('Cerrar opciones')
# Hard app restart, QA package only, no clearing data or reinstall.
q.adb('shell','am','force-stop',q.PACKAGE)
q.adb('shell','am','start','-n',q.PACKAGE+'/.MainActivity')
wait(2.2)
hit('Continuar lectura')
wait()
current=labels()
assert any('Opciones de versículo. Filipenses 4:6' in l and 'destacado' in l for l in current),'highlight absent after restart'
print('HIGHLIGHT_PERSISTED_PASS',flush=True)
# Reopen note and verify the precise synthetic token survives cold restart.
hit('Opciones de versículo. Filipenses 4:6')
hit('Abrir opciones de Filipenses 4:6')
require(TOKEN)
capture('note-highlight-after-restart')
print('NOTE_AND_HIGHLIGHT_PERSISTED_PASS',flush=True)
hit('Cerrar opciones')
