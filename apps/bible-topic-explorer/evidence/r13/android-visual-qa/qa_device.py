"""Isolated Android emulator QA helper. Targets only com.lago.bibletopicexplorer.qa.
CLI: py -3 qa_device.py dump | tap 'text' | xy X Y | swipe X Y X Y | shot name | back | launch | font 1.6
No uninstall, clear data, or contact with production package.
"""
import sys,subprocess,time,re,xml.etree.ElementTree as ET
sys.stdout.reconfigure(encoding='utf-8',errors='backslashreplace')
from pathlib import Path
ROOT=Path(__file__).resolve().parent
PACKAGE='com.lago.bibletopicexplorer.qa'
def adb(*args, text=True,timeout=40):
 return subprocess.run(['adb','-s','emulator-5554',*args],check=True,capture_output=True,text=text,encoding='utf-8' if text else None,errors='replace' if text else None,timeout=timeout)
def dump():
 adb('shell','uiautomator','dump','/sdcard/lau_qa_window.xml',timeout=45)
 raw=adb('exec-out','cat','/sdcard/lau_qa_window.xml').stdout
 return ET.fromstring(raw[raw.index('<?xml'):])
def nodes():
 root=dump();out=[]
 for e in root.iter('node'):
  label=e.attrib.get('text','') or e.attrib.get('content-desc','')
  if not label: continue
  bounds=re.findall(r'\d+',e.attrib.get('bounds',''))
  if len(bounds)!=4:continue
  x1,y1,x2,y2=map(int,bounds)
  out.append((label,(x1+x2)//2,(y1+y2)//2,e.attrib.get('clickable','false')))
 return out
def tap(x,y):adb('shell','input','tap',str(x),str(y))
def click(needle,index=0):
 all_nodes=nodes(); a=[x for x in all_nodes if x[3]=='true' and x[0].casefold()==needle.casefold()] or [x for x in all_nodes if x[3]=='true' and needle.casefold() in x[0].casefold()]
 if not a:raise RuntimeError('Cannot find '+repr(needle)+'; visible: '+str([x[0] for x in nodes()]))
 print('CLICK',a[index]);tap(a[index][1],a[index][2])
def shot(name):
 f=ROOT/(name+'.png')
 result=adb('exec-out','screencap','-p',text=False)
 f.write_bytes(result.stdout)
 print('SCREENSHOT',f.name, len(result.stdout))
def entry():
 k=sys.argv[1] if len(sys.argv)>1 else 'dump'
 if k=='dump':
  for n in nodes():print('%s [%s,%s] %s'%n)
 if k=='tap':click(sys.argv[2],int(sys.argv[3]) if len(sys.argv)>3 else 0)
 if k=='xy':tap(int(sys.argv[2]),int(sys.argv[3]))
 if k=='swipe':adb('shell','input','swipe',*sys.argv[2:])
 if k=='shot':shot(sys.argv[2])
 if k=='back':adb('shell','input','keyevent','4')
 if k=='launch':adb('shell','am','start','-n',PACKAGE+'/.MainActivity')
 if k=='stop':adb('shell','am','force-stop',PACKAGE)
 if k=='font':adb('shell','settings','put','system','font_scale',sys.argv[2])
 if k=='wait':time.sleep(float(sys.argv[2]))
 if k=='type':adb('shell','input','text',sys.argv[2])
if __name__=='__main__':entry()
