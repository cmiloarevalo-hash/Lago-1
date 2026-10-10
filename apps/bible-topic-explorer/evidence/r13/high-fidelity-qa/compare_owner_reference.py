"""Side by side actual Android screenshots against three Owner PNGs.

Each Owner PNG is a triptych. This script crops only the original phone image:
no reference content is copied into the app. Android images are raw ADB pixels.
"""
from PIL import Image,ImageDraw,ImageFont,ImageOps
from pathlib import Path
OUT=Path(__file__).parent
REF=Path(r'C:/Users/cmilo/Lago-1-r13-visual-reference/apps/bible-topic-explorer/evidence/r13/visual-references')
THEMES={'coral':'owner-01-coral.png','natural':'owner-02-natural.png','marine':'owner-03-marino.png'}
SCREENS=['hoy','leer','planes']
unit_w,unit_h=218,484
title_h=64
cell_w=2*unit_w+22
cell_h=unit_h+title_h+14
canvas=Image.new('RGB',(3*cell_w+32,3*cell_h+34),'#F7F6F4')
d=ImageDraw.Draw(canvas)
font=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',19)
small=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',13)
d.text((18,6),'LA U 1.3 — OWNER ORIGINAL / ANDROID DEBUG (9 cotejos)',fill='#1F2B36',font=font)
for row,(theme,f) in enumerate(THEMES.items()):
 original=Image.open(REF/f).convert('RGB'); width,height=original.size
 for col,screen in enumerate(SCREENS):
  x=16+col*cell_w;y=34+row*cell_h
  x0=int(width*(.027+col*.326));x1=int(width*(.324+col*.326))
  y0=int(height*.062);y1=int(height*.933)
  mock=original.crop((x0,y0,x1,y1))
  android=Image.open(OUT/f'qa-{theme}-{screen}.png').convert('RGB')
  mock=ImageOps.fit(mock,(unit_w,unit_h),method=Image.Resampling.LANCZOS)
  android=ImageOps.fit(android,(unit_w,unit_h),method=Image.Resampling.LANCZOS)
  canvas.paste(mock,(x,y+title_h))
  canvas.paste(android,(x+unit_w+8,y+title_h))
  d.text((x+2,y+5),theme.upper()+' · '+screen.upper(),font=font,fill='#273442')
  d.text((x+3,y+33),'REFERENCIA ORIGINAL',font=small,fill='#4C5B67')
  d.text((x+unit_w+13,y+33),'ANDROID DEBUG REAL',font=small,fill='#4C5B67')
  d.line([(x+unit_w+4,y+title_h),(x+unit_w+4,y+title_h+unit_h)],fill='#D1CED0',width=2)
dest=OUT/'comparison-owner-vs-android-3x3.jpg'
canvas.save(dest,quality=86,optimize=True)
print('GENERATED',dest,canvas.size)
