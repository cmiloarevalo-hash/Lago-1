"""La U 1.3: reproduce six theme-graded editorial photos from licensed sources.

Sources and attribution: see assets/editorial/PHOTO_LICENSES.md.
Photos remain offline; no runtime image-service/API connection is required.
All colour/gradient and fine-grain treatments are performed locally by Pillow/NumPy.
"""
from pathlib import Path
from PIL import Image, ImageOps, ImageEnhance, ImageFilter
import numpy as np

ROOT=Path(__file__).parent.parent/"assets"/"editorial"
SOURCES=ROOT/"source"
THEMES={
 "coral":  {"wash":(255,238,236),"glow":(254,200,203),"shadow":(147,89,119)},
 "natural":{"wash":(247,245,232),"glow":(224,217,178),"shadow":(74,102,89)},
 "marine": {"wash":(248,246,235),"glow":(221,222,209),"shadow":(44,79,111)}
}
def grade(source,size,name,kind,pal):
 im=ImageOps.fit(Image.open(SOURCES/source).convert("RGB"),size,method=Image.Resampling.LANCZOS,centering=(.51,.49 if kind=="landscape" else .56))
 im=ImageEnhance.Color(im).enhance(.77 if kind=="landscape" else .83)
 src=np.array(im,dtype=np.float32)/255.
 # Shadows lifted to preserve the atmospheric photographic detail at small screen sizes.
 src=np.power(src,.78 if kind=="landscape" else .72)
 h,w=src.shape[:2]
 xx=np.linspace(0,1,w,dtype=np.float32)[None,:,None]
 yy=np.linspace(0,1,h,dtype=np.float32)[:,None,None]
 # Warm ivory paper falloff creates legible left-side editorial copy without
 # replacing texture with a flat colour block. Book hero copy sits at bottom.
 if kind=="landscape":
  left=.73*np.power(1-xx,1.65)*np.power(1-yy,.55)
  bottom=.12*yy
  alpha=np.clip(.06+left+bottom,0,.80)
 else:
  left=.45*np.power(1-xx,1.45)
  bottom=.45*np.power(yy,1.35)
  alpha=np.clip(.09+left+bottom,0,.68)
 wash=np.array(pal["wash"],dtype=np.float32).reshape(1,1,3)/255.
 src=src*(1-alpha)+wash*alpha
 # Rose/sage/golden light across clouds and books; no artificial sun/icons.
 glow=np.array(pal["glow"],dtype=np.float32).reshape(1,1,3)/255.
 focus=np.exp(-(((xx-.77)/.35)**2 + ((yy-.28)/.65)**2))
 src=np.clip(src*(1-.12*focus)+glow*(.12*focus),0,1)
 # Fine film-grain, deterministic, for more organic editorial depth.
 rng=np.random.default_rng(20261010+len(name)*43+(0 if kind=="landscape" else 500))
 noise=rng.normal(0,.0065,(h,w,1)).astype(np.float32)
 vignette=np.maximum(0,((xx-.5)**2+(yy-.48)**2)-.19)*.10
 src=np.clip(src+noise-vignette,0,1)
 out=Image.fromarray(np.uint8(np.round(src*255)),"RGB")
 # Export stable, offline resource with high-quality but reasonable APK size.
 dest=ROOT/f"{'landscape' if kind=='landscape' else 'book'}-{name}.png"
 out.save(dest,optimize=True)
 print(dest.name,dest.stat().st_size)
for name,pal in THEMES.items():
 grade("sunrise-jordan-moore.jpg",(1100,650),name,"landscape",pal)
 grade("bible-sixteen-miles-out.jpg",(1100,675),name,"book",pal)
