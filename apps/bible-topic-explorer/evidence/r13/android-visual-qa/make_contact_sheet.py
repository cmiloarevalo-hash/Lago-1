"""Generate review-only 3x3 contact sheet of actual emulator screenshots."""
from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
import hashlib
root=Path(__file__).parent
themes=['coral','natural','marine']
screens=['hoy','leer','planes']
thumb=(324,720)
sheet=Image.new('RGB',(3*thumb[0],3*(thumb[1]+38)),(241,242,244))
d=ImageDraw.Draw(sheet)
missing=[]
for j,screen in enumerate(screens):
 for i,theme in enumerate(themes):
  f=root/f'{theme}-{screen}.png'
  x,y=i*thumb[0],j*(thumb[1]+38)
  if not f.exists():
   missing.append(f.name);continue
  pic=Image.open(f).convert('RGB')
  pic.thumbnail(thumb)
  sheet.paste(pic,(x+(thumb[0]-pic.width)//2,y+32))
  d.text((x+10,y+8),f'{theme.upper()} · {screen.upper()}',fill=(20,25,33))
  print(f.name,Image.open(f).size,hashlib.sha256(f.read_bytes()).hexdigest()[:12])
sheet.save(root/'qa-nine-screens-contact-sheet.jpg',quality=89)
print('missing',missing)
