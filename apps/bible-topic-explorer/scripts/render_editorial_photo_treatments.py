"""La U: high-fidelity, high-contrast editorial art treatments.

Reproducible offline assets. Source-photo licenses and attribution:
assets/editorial/PHOTO_LICENSES.md. Never copies Owner reference images.
Uses Pillow + NumPy only at build time, never at runtime.
"""
from pathlib import Path
from PIL import Image, ImageOps, ImageEnhance, ImageDraw, ImageFilter
import numpy as np
import math, random

ROOT=Path(__file__).parent.parent/"assets"/"editorial"
SOURCES=ROOT/"source"
PALETTES={
 "coral":{"paper":(255,246,245),"light":(255,223,218),"tint":(194,95,119),"leaf":(177,62,94),"stem":(145,54,82)},
 "natural":{"paper":(249,247,236),"light":(250,229,189),"tint":(121,140,93),"leaf":(87,111,67),"stem":(73,91,59)},
 "marine":{"paper":(246,249,251),"light":(226,235,232),"tint":(59,101,134),"leaf":(52,85,104),"stem":(32,65,88)},
}
def grade(source,size,theme,kind,pal):
 image=ImageOps.fit(Image.open(SOURCES/source).convert("RGB"),size,method=Image.Resampling.LANCZOS,centering=(.51,.49 if kind=="landscape" else .56))
 image=ImageEnhance.Color(image).enhance(1.24 if kind=="landscape" else 1.18)
 image=ImageEnhance.Contrast(image).enhance(1.11)
 src=np.asarray(image,dtype=np.float32)/255
 src=np.power(src,.92 if kind=="landscape" else .88)
 height,width=src.shape[:2]
 x=np.linspace(0,1,width,dtype=np.float32)[None,:,None]
 y=np.linspace(0,1,height,dtype=np.float32)[:,None,None]
 # Real photographic contrast is preserved. Wash ONLY the copy zones:
 # upper-left of landscape and lower-left of plan photography.
 if kind=="landscape":
  veil=np.clip(.05+.67*(1-x)**2.1*(1-y)**.62,0,.71)
 else:
  veil=np.clip(.04+.20*(1-x)**1.8+.53*y**3.1,0,.61)
 paper=np.array(pal["paper"],dtype=np.float32).reshape(1,1,3)/255
 src=src*(1-veil)+paper*veil
 # Differentiated photographic colour grading: restrained colour in highlights,
 # stronger natural light and shadows, not a uniform opaque pastel filter.
 light=np.array(pal["light"],dtype=np.float32).reshape(1,1,3)/255
 tint=np.array(pal["tint"],dtype=np.float32).reshape(1,1,3)/255
 spot=np.exp(-((x-.76)**2/.16+(y-.18)**2/.18))
 src=src*(1-.12*spot)+light*(.12*spot)
 shadows=(1-src.mean(axis=2,keepdims=True))**2
 src=src*(1-.12*shadows)+tint*(.12*shadows)
 rng=np.random.default_rng(190913+len(theme)*101+(kind=="book")*17)
 src=np.clip(src+rng.normal(0,.0035,(height,width,1)).astype(np.float32),0,1)
 destination=ROOT/f"{kind}-{theme}.png"
 Image.fromarray(np.uint8(np.round(src*255)),"RGB").save(destination,optimize=True)
 print(destination.name,destination.stat().st_size)

def botanical(theme,pal):
 """Original, stylized leaf silhouettes for book hero; transparent overlay only."""
 scale=3;W,H=360*scale,560*scale
 art=Image.new("RGBA",(W,H),(0,0,0,0));d=ImageDraw.Draw(art,"RGBA")
 def point(x,y):return (int(x*scale),int(y*scale))
 rng=random.Random(1609)
 stem=pal["stem"];leaf=pal["leaf"]
 # Main curling stem enters on right and bends toward photo centre.
 base=[(355,550),(325,492),(328,432),(279,381),(290,310),(244,253),(246,195),(193,146),(201,93),(155,37)]
 def spline(points):
  for i in range(len(points)-1):
   start,end=points[i],points[i+1]
   d.line([point(*start),point(*end)],fill=(*stem,170),width=3*scale,joint="curve")
 spline(base)
 for i in range(1,len(base)-1):
  sx,sy=base[i]
  for direction in [-1,1]:
   length=rng.randrange(40,72);dy=-rng.randrange(26,62)
   tx=sx+direction*length;ty=sy+dy
   d.line([point(sx,sy),point(tx,ty)],fill=(*stem,136),width=2*scale)
   # Two tapered leaves, built from curved contour with a visible midrib.
   cx,cy=(sx+tx)/2,(sy+ty)/2
   dx=tx-sx;dy2=ty-sy
   r=math.hypot(dx,dy2);nx=-dy2/r;ny=dx/r
   for t in [.46,.78]:
    mx=sx+dx*t;my=sy+dy2*t
    side=direction if t>.6 else -direction
    tipx=mx+dx*.20+side*nx*22;tipy=my+dy2*.20+side*ny*22
    # Original tapered botanical leaf: two smooth, asymmetric lens edges.
    vx=tipx-mx;vy=tipy-my
    size=math.hypot(vx,vy);px=-vy/size;py=vx/size
    left=[];right=[]
    for j in range(15):
     u=j/14;bulge=math.sin(math.pi*u)**0.88
     cx=mx+vx*u;cy=my+vy*u
     left.append((cx+px*17*bulge,cy+py*17*bulge))
     right.append((cx-px*11*bulge,cy-py*11*bulge))
    d.polygon([point(*p) for p in left+list(reversed(right))],fill=(*leaf,174 if i%2 else 157))
    d.line([point(mx,my),point(tipx,tipy)],fill=(*stem,95),width=scale)
 art=art.resize((360,560),Image.Resampling.LANCZOS)
 target=ROOT/f"botanical-{theme}.png";art.save(target,optimize=True)
 print(target.name,target.stat().st_size)

for theme,pal in PALETTES.items():
 grade("sunrise-jordan-moore.jpg",(1100,650),theme,"landscape",pal)
 grade("bible-sixteen-miles-out.jpg",(1100,675),theme,"book",pal)
 botanical(theme,pal)
