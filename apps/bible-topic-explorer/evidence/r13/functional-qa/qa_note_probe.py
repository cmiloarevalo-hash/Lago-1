"""QA package only; UI probe."""
import sys,time
from pathlib import Path
sys.path.insert(0,str(Path(__file__).parent.parent/"android-visual-qa"))
import qa_device as q
sys.stdout.reconfigure(encoding="utf-8",errors="replace")
mode=sys.argv[1]
if mode=="options":
 q.click("Opciones de versículo. Filipenses 4:6")
 time.sleep(.5)
 q.click("Abrir opciones de Filipenses 4:6")
 time.sleep(.7)
elif mode=="editor":
 q.click("✎ Agregar nota")
 time.sleep(.5)
for row in q.nodes():
 print(row,flush=True)
