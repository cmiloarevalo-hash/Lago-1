"""Probe safe QA package. Only com.lago.bibletopicexplorer.qa."""
import sys,time
from pathlib import Path
sys.path.insert(0,str(Path(__file__).parent.parent/"android-visual-qa"))
import qa_device as q
sys.stdout.reconfigure(encoding="utf-8",errors="replace")
mode=sys.argv[1] if len(sys.argv)>1 else "reader"
if mode=="reader":
 q.click("Continuar lectura")
 time.sleep(1.3)
elif mode=="home":
 q.click("Hoy")
 time.sleep(1)
elif mode=="menu":
 q.click("Abrir menú de navegación")
 time.sleep(.8)
for row in q.nodes():
 print(row,flush=True)
