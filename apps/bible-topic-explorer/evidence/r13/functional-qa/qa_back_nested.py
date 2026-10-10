"""Nested Android Back and root cancel QA. Isolated package only."""
import sys,time,xml.etree.ElementTree as ET
from pathlib import Path
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
def labels():return [r[0] for r in q.nodes()]
def contain(term):return any(term in s for s in labels())
def capture(name):
 (HERE/(name+'.png')).write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
 ET.ElementTree(q.dump()).write(HERE/(name+'.xml'),encoding='utf-8',xml_declaration=True)
def back():q.adb('shell','input','keyevent','4');time.sleep(.9)
def expect(t):
 okay=contain(t);print('ASSERT',t,'PASS' if okay else 'FAIL',flush=True)
 if not okay:raise AssertionError(t+' '+str(labels()[:15]))
expect('Ordenar versículos')
back();expect('Dinámicas pastorales');capture('back-games-to-activities')
back();expect('Filipenses 4');capture('back-activities-to-reader')
back();expect('Qué bueno que estás aquí');capture('back-reader-to-hoy')
back();expect('Salir de la aplicación')
capture('back-root-confirmation')
q.click('Cancelar');time.sleep(.7)
expect('Qué bueno que estás aquí')
print('ANDROID_BACK_NESTED_ROOT_CANCEL_PASS',flush=True)
