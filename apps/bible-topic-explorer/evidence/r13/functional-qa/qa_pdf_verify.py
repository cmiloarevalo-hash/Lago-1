"""Finish synthetic PDF progress persisted after cold restart; QA package only."""
import sys,time,xml.etree.ElementTree as ET
from pathlib import Path
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
def ok(s):
 found=any(s in x[0] for x in q.nodes());print('ASSERT',s,'PASS' if found else 'FAIL',flush=True)
 if not found:raise AssertionError(s)
def hit(s):
 for n in range(4):
  try:q.click(s);time.sleep(1);return
  except RuntimeError:time.sleep(1)
 raise AssertionError('Failed click '+s)
ok('Qué bueno que estás aquí')
hit('Abrir menú de navegación')
hit('Mis libros PDF/EPUB')
ok('Retomar LaU-QA-test.pdf')
hit('Retomar LaU-QA-test.pdf')
ok('Progreso anotado manualmente: 20%')
(HERE/'pdf-progress-20-after-restart.png').write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
ET.ElementTree(q.dump()).write(HERE/'pdf-progress-20-after-restart.xml',encoding='utf-8',xml_declaration=True)
print('PDF_PROGRESS_AFTER_COLD_RESTART_PASS',flush=True)
hit('− 10 %')
ok('Progreso anotado manualmente: 10%')
print('SYNTHETIC_PDF_PROGRESS_RESTORED',flush=True)
