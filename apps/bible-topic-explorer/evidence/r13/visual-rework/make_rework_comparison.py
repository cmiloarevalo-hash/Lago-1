"""Side-by-side emulator screenshots: original 7f5c1a1 and focal photo rework.
Only scales screenshots; never fabricates app UI.
"""
from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
out=Path(__file__).parent
base=out.parent/"android-visual-qa"
themes=["coral","natural","marine"]
w,h,gap=270,600,14
header=65;row_header=40
canvas=Image.new("RGB",(6*(w+gap)+gap,header+2*(h+row_header+gap)+gap),(244,243,241))
d=ImageDraw.Draw(canvas)
font=ImageFont.truetype("C:/Windows/Fonts/arial.ttf",22)
small=ImageFont.truetype("C:/Windows/Fonts/arial.ttf",16)
for idx,theme in enumerate(themes):
 for version,which in enumerate(["ANTES · ARTE PLANO","AHORA · FOTOGRAFÍA"]):
  x=gap+(idx*2+version)*(w+gap)
  d.text((x+8,17),theme.upper(),fill=(33,42,45),font=font)
  d.text((x+8,42),which,fill=(84,93,98),font=small)
  for row,screen in enumerate(["hoy","planes"]):
   y=header+row*(h+row_header+gap)
   f=(base/f"{theme}-{screen}.png") if version==0 else (out/f"rework-{theme}-{screen}.png")
   if not f.exists():raise FileNotFoundError(f)
   im=Image.open(f).convert("RGB").resize((w,h),Image.Resampling.LANCZOS)
   canvas.paste(im,(x,y+row_header))
   d.text((x+8,y+8),("HOY" if row==0 else "PLANES"),fill=(47,55,65),font=small)
canvas.save(out/"visual-rework-before-after.jpg",quality=87,optimize=True)
print("COMPARED",out/"visual-rework-before-after.jpg")
