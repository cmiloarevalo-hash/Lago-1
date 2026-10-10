"""Test existing synthetic PDF progress through cold restart; restore initial progress. QA only."""
import sys,time,xml.etree.ElementTree as ET
from pathlib import Path
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
def labels():return [x[0] for x in q.nodes()]
def need(t):
 found=any(t in x for x in labels());print('ASSERT',t,'PASS' if found else 'FAIL',flush=True)
 if not found:raise AssertionError(t)
def hit(t):q.click(t);time.sleep(.75)
def capture(t):
 (HERE/(t+'.png')).write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
 ET.ElementTree(q.dump()).write(HERE/(t+'.xml'),encoding='utf-8',xml_declaration=True)
need('LaU-QA-test.pdf')
need('Progreso anotado manualmente: 10%')
hit('+ 10 %')
need('Progreso anotado manualmente: 20%')
capture('pdf-progress-20-before-restart')
q.adb('shell','am','force-stop',q.PACKAGE)
q.adb('shell','am','start','-n',q.PACKAGE+'/.MainActivity')
for i in range(12):
 time.sleep(1)
 if any('Abrir menú de navegación' in x for x in labels()):break
else:raise RuntimeError('QA home did not stabilize')
hit('Abrir menú de navegación');hit('Mis libros PDF/EPUB')
need('Retomar LaU-QA-test.pdf')
hit('Retomar LaU-QA-test.pdf')
need('Progreso anotado manualmente: 20%')
capture('pdf-progress-20-after-restart')
print('PDF_PROGRESS_PERSISTENCE_PASS',flush=True)
hit('− 10 %')
need('Progreso anotado manualmente: 10%')
print('PDF_QA_FIXTURE_RESTORED_10_PERCENT',flush=True)
