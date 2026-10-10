import sys,time
from pathlib import Path
sys.path.insert(0,str(Path(__file__).parent.parent/"android-visual-qa"))
import qa_device as q
sys.stdout.reconfigure(encoding="utf-8",errors="replace")
mode=sys.argv[1]
if mode=="menu":q.click("Dinámicas y juegos");time.sleep(.9)
elif mode=="games":q.click("Jugar trivia, verdadero/falso y ordenar versículos");time.sleep(.9)
elif mode=="vf":q.click("Verdadero/falso");time.sleep(.9)
elif mode=="sequence":q.click("Ordenar versículos");time.sleep(.9)
for row in q.nodes():print(row,flush=True)
