import sys,time
from pathlib import Path
sys.path.insert(0,str(Path(__file__).parent.parent/"android-visual-qa"))
import qa_device as q
sys.stdout.reconfigure(encoding="utf-8",errors="replace")
what=sys.argv[1]
if what=="epub":
 q.adb('shell','input','swipe','535','1830','535','620','400');time.sleep(.5)
 q.click('Retomar LaU-QA-test.epub');time.sleep(1.0)
elif what=="pdf":
 q.click('Retomar LaU-QA-test.pdf');time.sleep(.8)
for row in q.nodes():print(row,flush=True)
