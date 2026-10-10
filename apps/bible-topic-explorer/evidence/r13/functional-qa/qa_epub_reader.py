"""QA synthetic EPUB navigation and progress, package QA only. Restores original chapter."""
import sys,time,xml.etree.ElementTree as ET
from pathlib import Path
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
def labels():return [x[0] for x in q.nodes()]
def assert_label(s):
 ok=any(s in l for l in labels());print('ASSERT',s,'PASS' if ok else 'FAIL',flush=True)
 if not ok:raise AssertionError(s)
def hit(s):q.click(s);time.sleep(.8)
def cap(stem):
 (HERE/(stem+'.png')).write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
 ET.ElementTree(q.dump()).write(HERE/(stem+'.xml'),encoding='utf-8',xml_declaration=True)
assert_label('LaU-QA-test.epub')
assert_label('Sección 2 de 2')
hit('← Anterior')
assert_label('Sección 1 de 2')
cap('epub-first-chapter')
hit('Siguiente →')
assert_label('Sección 2 de 2')
assert_label('Lectura y progreso local de prueba.')
cap('epub-second-chapter-restored')
print('EPUB_LOCAL_TWO_CHAPTERS_PASS',flush=True)
hit('← Mis libros')
assert_label('Retomar LaU-QA-test.pdf')
print('BOOK_INDEX_PASS',flush=True)
