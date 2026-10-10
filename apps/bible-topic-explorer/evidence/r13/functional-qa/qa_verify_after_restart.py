"""Finishes QA persistence recheck after cold restart; isolated QA package only."""
import sys,time,xml.etree.ElementTree as ET
from pathlib import Path
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
q.click('Continuar lectura');time.sleep(1)
labels=[x[0] for x in q.nodes()]
def assertion(name,cond):
 print('ASSERT',name,'PASS' if cond else 'FAIL',flush=True)
 if not cond:raise AssertionError(name)
assertion('note-bubble-after-cold-restart',any('Leer nota privada de Filipenses 4:6' in s for s in labels))
assertion('rose-highlight-after-cold-restart',any('Opciones de versículo. Filipenses 4:6' in s and 'destacado' in s for s in labels))
q.click('Leer nota privada de Filipenses 4:6');time.sleep(.7)
labels=[x[0] for x in q.nodes()]
assertion('exact-note-token-after-cold-restart',any('QA_R13_SYNTHETIC_NOTE_20261010' in s for s in labels))
(HERE/'note-read-after-restart.png').write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
ET.ElementTree(q.dump()).write(HERE/'note-read-after-restart.xml',encoding='utf-8',xml_declaration=True)
q.click('Cerrar lectura');time.sleep(.6)
print('PERSISTENT_NOTE_HIGHLIGHT_PASS',flush=True)
