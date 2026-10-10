"""Focal Android QA for Owner UX; only com.lago.bibletopicexplorer.qa."""
from pathlib import Path
import sys,time,xml.etree.ElementTree as ET
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
def wait(t=.8):time.sleep(t)
def nodes():return q.nodes()
def texts():return [e[0] for e in nodes()]
def show(term):
 return any(term.casefold() in s.casefold() for s in texts())
def verify(t,ok):
 print('CHECK',t,'PASS' if ok else 'FAIL',flush=True)
 if not ok:raise AssertionError(t+' '+str(texts()[:28]))
def visible_match(t):
 return [n for n in nodes() if t.casefold() in n[0].casefold() and n[3]=='true' and 120<n[2]<2340]
def swipe(up=True):
 q.adb('shell','input','swipe','530','1840' if up else '600','530' if up else '1750','360');wait(.4)
def tap(t):
 for i in range(9):
  a=visible_match(t)
  if a:
   print('TAP',t,a[0],flush=True)
   q.tap(a[0][1],a[0][2]);wait();return
  swipe(i<7)
 raise AssertionError('not visible '+t)
def shot(n):
 (HERE/(n+'.png')).write_bytes(q.adb('exec-out','screencap','-p',text=False).stdout)
 ET.ElementTree(q.dump()).write(HERE/(n+'.xml'),encoding='utf-8',xml_declaration=True)
 print('EVIDENCE',n,flush=True)
# Re-enter QA via explicit component only, never official.
q.adb('shell','am','force-stop',q.PACKAGE)
q.adb('shell','am','start','-n',q.PACKAGE+'/.MainActivity')
wait(2.0)
for _ in range(12):
 if show('bueno que'):break
 wait(1.3)
if show('Recursos para tu camino'):
 tap('Cerrar men')
if not show('bueno que'):
 tap('Hoy')
verify('Today loaded',show('bueno que'))
verify('SoundCloud tile',show('SoundCloud'))
verify('No YouTube home',not show('YouTube'))
shot('owner-hoy-soundcloud')
tap('SoundCloud')
verify('SoundCloud actual official module',show('SoundCloud') and show('Cargar reproductor SoundCloud'))
verify('Honest no-playback state',show('Tu m'))
shot('owner-soundcloud-empty')
tap('← Recursos')
tap('Abrir men')
verify('SoundCloud drawer',show('SoundCloud'))
verify('Songs hidden',not show('Cancionero'))
verify('YouTube hidden',not show('YouTube'))
shot('owner-drawer-no-songs-youtube')
tap('pastoral')
tap('Acogida con respeto')
verify('First expansion',show('Para preparar el encuentro'))
tap('consentimiento')
wait(.8)
pos=visible_match('consentimiento')
verify('Fourth expansion heading near top',bool(pos) and 305<pos[0][2]<1180)
verify('Fourth start visible',show('Prevenir riesgos') or show('Para preparar el encuentro'))
shot('owner-pastoral-fourth-top')
tap('Hoy')
tap('Explorar')
verify('Explore topics only',show('Explorar temas') and show('Temas'))
verify('Literal search hidden',not show('Palabras · búsqueda literal') and not show('Texto o referencia'))
verify('Editorial notice initially hidden',not show('Las fichas y sus referencias'))
shot('owner-explore-top')
tap('informaci')
verify('Editorial notice on demand',show('Las fichas y sus referencias'))
shot('owner-explore-info-open')
tap('Ocultar informaci')
tap('Ver los 100 temas')
verify('Topic letter list',show('100 temas'))
shot('owner-explore-index')
tap('Biblioteca')
verify('Library tab',show('Biblioteca'))
verify('Highlights hidden from library',not any(s=='Destacados' for s in texts()))
shot('owner-library-highlights-hidden')
print('QA_OWNER_UX_FOCAL_PASS',flush=True)
