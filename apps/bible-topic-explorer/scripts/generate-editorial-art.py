"""Original La U R1.3 atmospheric editorial illustrations.
All pixels are created programmatically; no image from the reference mockups
or third-party photograph is embedded. Python 3 + Pillow. Deterministic seeds.
"""
from PIL import Image, ImageDraw, ImageFilter
from pathlib import Path
from math import sin, cos, pi
import random
OUT = Path(__file__).parent.parent / "assets" / "editorial"
OUT.mkdir(parents=True, exist_ok=True)
THEMES = {
    "coral": {"sky":(255,235,230),"horizon":(247,191,185),"mountains":(156,110,136),"near":(88,78,108),"wood":(208,173,153),"ink":(115,74,87)},
    "natural":{"sky":(247,243,224),"horizon":(218,206,162),"mountains":(119,134,116),"near":(57,83,76),"wood":(186,160,125),"ink":(74,95,67)},
    "marine":{"sky":(246,242,223),"horizon":(220,208,168),"mountains":(85,114,139),"near":(20,55,82),"wood":(166,146,121),"ink":(30,63,85)}
}
def mix(a,b,t): return tuple(int(a[i]*(1-t)+b[i]*t) for i in range(3))
def scenery(name,c):
    rng=random.Random(510+len(name)); W,H=1100,650
    im=Image.new("RGB",(W,H)); px=im.load()
    for y in range(H):
        t=min(1,y/(H*.72)); col=mix(c["sky"],c["horizon"],t)
        for x in range(W):
            light=max(0,1-abs(x-W*.72)/(W*.55))*.06
            grain=rng.randrange(-3,4)
            px[x,y]=tuple(max(0,min(255,int(v+(255-v)*light+grain))) for v in col)
    glow=Image.new("RGBA",(W,H),(0,0,0,0));g=ImageDraw.Draw(glow)
    sx,sy=int(W*.73),int(H*.30)
    for k in range(170,0,-1):
        a=int(0.14*(170-k)*.15) if k>45 else 1
        g.ellipse((sx-k*1.55,sy-k*1.55,sx+k*1.55,sy+k*1.55),fill=(255,248,223,a))
    g.ellipse((sx-21,sy-21,sx+21,sy+21),fill=(255,248,226,170))
    im=Image.alpha_composite(im.convert("RGBA"),glow.filter(ImageFilter.GaussianBlur(12)))
    d=ImageDraw.Draw(im,"RGBA")
    for band in range(6):
        base=285+band*49; amp=48+band*13
        pts=[(0,H)]
        for x in range(-10,W+25,12):
            n=sin(x*.0065+band*1.31)*amp*.55+sin(x*.018+band*2)*amp*.27+sin(x*.037+band)*amp*.12
            pts.append((x,base+n))
        pts.extend([(W,H),(0,H)])
        cl=mix(c["horizon"],c["mountains"] if band<4 else c["near"],min(1,.25+band*.18))
        d.polygon(pts,fill=(*cl,int(115+band*24)))
        if band<5:
            d.line(pts[1:-2],fill=(*mix(cl,(255,255,252),.5),26),width=3)
    # shoreline and reflected light on a broad lake
    d.polygon([(0,530),(W,540),(W,H),(0,H)],fill=(*mix(c["near"],c["horizon"],.47),120))
    for n in range(700):
        y=rng.randint(531,H-8); x=rng.randint(0,W)
        length=rng.randint(5,44)*(1+(y-530)/220)
        r=abs(x-sx); al=int(max(0,46-r*.08))
        d.line([(x,y),(min(W,x+length),y)],fill=(255,245,220,al),width=1)
    # mist strata
    fog=Image.new("RGBA",(W,H),(0,0,0,0));fd=ImageDraw.Draw(fog)
    for cy in [370,425,505,570]:
        fd.ellipse((-140,cy-35,W+100,cy+45),fill=(*c["sky"],38))
    im=Image.alpha_composite(im,fog.filter(ImageFilter.GaussianBlur(35)))
    d=ImageDraw.Draw(im,"RGBA")
    # tall tapering forest silhouettes for near depth on edges
    def pine(x,y,hei,col):
        d.line((x,y,x,y-hei),fill=(*col,160),width=max(1,int(hei/28)))
        for k in range(6):
            ty=y-hei*(.94-k*.135); half=hei*(.085+k*.02)
            d.polygon([(x,ty-hei*.13),(x-half,ty+hei*.13),(x+half,ty+hei*.13)],fill=(*col,125))
    for i in range(70):
        x=rng.choice([rng.randrange(0,230),rng.randrange(W-200,W)])
        y=rng.randrange(450,600); height=rng.randrange(24,118)
        pine(x,y,height,mix(c["near"],(28,40,39),.34))
    im.convert("RGB").save(OUT/f"landscape-{name}.png",optimize=True)
def books(name,c):
    rng=random.Random(779+len(name));W,H=1100,675
    base=Image.new("RGB",(W,H));px=base.load()
    for y in range(H):
        co=mix(c["sky"],c["horizon"],min(1,y/H*.9))
        for x in range(W):
            v=int(8*sin(x/55)+5*sin(y/42+x/71)+rng.randrange(-4,5))
            px[x,y]=tuple(max(0,min(255,z+v)) for z in co)
    base=base.filter(ImageFilter.GaussianBlur(1))
    d=ImageDraw.Draw(base,"RGBA")
    # soft window and greenery behind the desk
    d.rounded_rectangle((68,-100,445,445),35,fill=(255,255,252,96),outline=(255,255,255,100),width=12)
    for i in range(60):
        x=rng.randint(10,330);y=rng.randint(10,400);rr=rng.randint(6,34)
        d.ellipse((x-rr,y-rr,x+rr,y+rr),fill=(*mix(c["near"],(89,124,86),.45),rng.randint(15,70)))
    # wooden tabletop with soft grain
    desk_y=405
    d.polygon([(0,desk_y),(W,desk_y-24),(W,H),(0,H)],fill=(*c["wood"],156))
    for y in range(desk_y+10,H,20):
        d.line([(0,y),(W,y-rng.randint(0,8))],fill=(*c["ink"],rng.randint(8,20)),width=rng.randint(1,3))
    # ceramic mug with curved handle
    d.ellipse((855,267,1026,332),fill=(245,239,221,255),outline=(*c["ink"],75),width=4)
    d.rounded_rectangle((865,292,1017,458),20,fill=(*mix(c["near"],(32,36,35),.15),235))
    d.ellipse((867,277,1015,312),fill=(246,239,229,245))
    d.ellipse((878,284,1003,311),fill=(94,67,54,190))
    d.arc((992,324,1090,420),-100,140,fill=(*c["near"],160),width=19)
    # book cast shadow
    shadow=Image.new("RGBA",(W,H),(0,0,0,0));sd=ImageDraw.Draw(shadow)
    sd.ellipse((185,402,903,607),fill=(35,35,27,90))
    base=Image.alpha_composite(base.convert("RGBA"),shadow.filter(ImageFilter.GaussianBlur(30)))
    d=ImageDraw.Draw(base,"RGBA")
    # book brown cover, spine, and open curved pages
    d.polygon([(153,430),(443,352),(566,405),(850,361),(930,522),(574,550),(480,518),(200,557)],fill=(78,58,51,205))
    left=[(171,410),(430,334),(554,398),(566,526),(459,476),(198,522)]
    right=[(554,398),(666,330),(856,353),(918,501),(636,476),(566,526)]
    d.polygon(left,fill=(253,246,229,255),outline=(205,185,158,245),width=5)
    d.polygon(right,fill=(250,241,224,255),outline=(201,183,151,245),width=5)
    for layer in range(8):
        dy=layer*3
        d.arc((200,401+dy,562,514+dy),-150,16,fill=(177,144,115,35),width=2)
        d.arc((556,370+dy,904,514+dy),160,331,fill=(177,144,115,35),width=2)
    for row in range(13):
        off=row*9
        d.line([(245,418+off*.62),(465,368+off*.76)],fill=(102,90,80,64),width=2)
        d.line([(637,371+off*.76),(843,391+off*.81)],fill=(102,90,80,56),width=2)
    d.line([(555,401),(570,527)],fill=(*c["ink"],125),width=4)
    # foreground branch / graceful leaves
    d.arc((925,265,1220,700),125,285,fill=(*c["near"],160),width=6)
    for i in range(12):
        x=935+i*13;y=465+i*16
        r=19+i%3*3
        d.ellipse((x-r,y-r,x+r,y+r),fill=(*mix(c["near"],(129,149,111),.5),105))
    base.convert("RGB").save(OUT/f"book-{name}.png",optimize=True)
for name,palette in THEMES.items():
    scenery(name,palette)
    books(name,palette)
print("Created six original editorial images in",OUT)
