"""Re-check ONLY Hoy and Planes in all themes after legibility/leaf refinements.

Leave the previously verified three Leer screenshots untouched.
Actual screenshots from emulator-5554 via ADB, no user data resets.
"""
import time,sys,xml.etree.ElementTree as ET
from pathlib import Path
OUT=Path(__file__).parent
sys.path.insert(0,str(OUT.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='backslashreplace')
themes={'coral':'Coral · rosa y crema','natural':'Natural · salvia y beige','marine':'Marino · azul y dorado'}
def hit(x):q.click(x);time.sleep(.75)
def shot(key):
 raw=q.adb('exec-out','screencap','-p',text=False).stdout
 (OUT/(key+'.png')).write_bytes(raw)
 ET.ElementTree(q.dump()).write(OUT/(key+'.xml'),encoding='utf-8',xml_declaration=True)
 print('RECHECK',key,len(raw),flush=True)
for theme,label in themes.items():
 hit('Abrir ajustes');hit(label)
 hit('Hoy')
 shot('qa-'+theme+'-hoy')
 hit('Planes · A tu ritmo');hit('Comenzar plan')
 shot('qa-'+theme+'-planes')
 hit('Hoy')
print('CHANGED_ONLY_6_PASS',flush=True)
