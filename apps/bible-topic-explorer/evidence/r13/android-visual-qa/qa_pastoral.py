import time,xml.etree.ElementTree as ET
from pathlib import Path
import qa_device as q
ROOT=Path(__file__).parent
q.click('Acogida con respeto');time.sleep(.8)
q.shot('pastoral-acogida-expanded')
for i in range(10):
 visible=[n for n in q.nodes() if ('UNICEF' in n[0] or 'USCCB' in n[0]) and n[3]=='true' and 300<n[2]<2050]
 if visible:print('VISIBLE_SOURCES',i,visible,flush=True);break
 q.adb('shell','input','swipe','550','1920','550','530','480');time.sleep(.5)
else:print('SOURCES_NOT_VISIBLE',flush=True)
q.shot('pastoral-sources-linked')
root=q.dump();ET.ElementTree(root).write(ROOT/'pastoral-sources-linked.xml',encoding='utf-8',xml_declaration=True)
print('LINK_LABELS',[n for n in q.nodes() if 'UNICEF' in n[0] or 'USCCB' in n[0] or 'RV1909 ·' in n[0]],flush=True)
