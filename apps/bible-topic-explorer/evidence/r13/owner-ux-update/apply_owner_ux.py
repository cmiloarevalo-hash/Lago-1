from pathlib import Path
ROOT=Path(__file__).resolve().parents[3]
def edit(rel,func):
 p=ROOT/rel
 s=p.read_text(encoding='utf-8')
 t=func(s)
 assert t!=s,rel
 p.write_text(t,encoding='utf-8',newline='\n')
 print('EDIT',rel,flush=True)
def change(s,a,b):
 assert a in s,a[:70]
 return s.replace(a,b)
def nav(s):
 return change(change(s,"| { kind: 'youtube'; origin: TabId };","| { kind: 'soundcloud'; origin: TabId };"),"if(a.kind==='youtube'&&b.kind==='youtube')return a.origin===b.origin;","if(a.kind==='soundcloud'&&b.kind==='soundcloud')return a.origin===b.origin;")
edit('src/product/navigation.ts',nav)
def drawer(s):
 s=change(s,"|'youtube';available:true","|'soundcloud';available:true")
 s=change(s," {id:'songs',label:'Cancionero',symbol:'♫',group:'Pastoral y música',kind:'songs',available:true},\n","")
 s=change(s," {id:'youtube',label:'YouTube · vídeo visible',symbol:'▶',group:'Pastoral y música',kind:'youtube',available:true},"," {id:'soundcloud',label:'SoundCloud · música',symbol:'♫',group:'Pastoral y música',kind:'soundcloud',available:true},")
 return s
edit('src/product/secondaryMenu.ts',drawer)
def app(s):
 s=change(s,"import {YouTubeScreen} from './src/ui/screens/YouTubeScreen';","import {SoundCloudScreen} from './src/ui/screens/SoundCloudScreen';")
 s=change(s,"else if(item.kind==='youtube')navigate({kind:'youtube',origin:activeTab});","else if(item.kind==='soundcloud')navigate({kind:'soundcloud',origin:activeTab});")
 s=change(s,"route.kind==='youtube'?<YouTubeScreen theme={theme} onBack={back}/>:","route.kind==='soundcloud'?<SoundCloudScreen theme={theme} onBack={back}/>:")
 s=change(s,"onOpenYouTube={()=>navigate({kind:'youtube',origin:'today'})}","onOpenSoundCloud={()=>navigate({kind:'soundcloud',origin:'today'})}")
 s=change(s,"{mode:'topics',scrollY:0}","{mode:'topics',scrollY:0}")
 return s
edit('App.tsx',app)
def today(s):
 s=change(s,"onOpenYouTube","onOpenSoundCloud")
 s=change(s,"description:'Palabras y temas'","description:'100 temas'")
 s=change(s,"title:'YouTube',description:'Vídeo visible',tint:'#E7F0E9'","title:'SoundCloud',description:'Música oficial',tint:'#FFF0E4'")
 s=change(s,"{item.icon}</Text>","{item.icon}</Text>")
 s=change(s,"item.key==='musica'?'#256844'","item.key==='musica'?'#F05B13'")
 s=change(s,"100 temas y búsqueda literal separados.","100 temas para explorar la Palabra.")
 return s
edit('src/ui/screens/TodayScreen.tsx',today)
def library(s):
 s=change(s,"import {highlightDisplayName,verseDisplayName} from '../../product/libraryPresentation';","import {verseDisplayName} from '../../product/libraryPresentation';")
 s=change(s,"const sortedNotes=[...verseNotes].sort(canonicalOrder);const sortedHighlights=[...highlights].sort(canonicalOrder);","const sortedNotes=[...verseNotes].sort(canonicalOrder);")
 row='    <Section theme={theme} title="Destacados" description="Rosa, lavanda o durazno.">{sortedHighlights.length?sortedHighlights.map(item=><SettingRow key={item.bookId+\'-\'+item.chapter+\'-\'+item.sourceVerseLabel} theme={theme} label={highlightDisplayName(item)} value="Abrir →" onPress={()=>onOpenReader(item.bookId,item.chapter,Number.parseInt(item.sourceVerseLabel,10),item.sourceVerseLabel)}/>):<Body theme={theme} muted>Destaca un versículo desde el lector.</Body>}</Section>\n'
 s=change(s,row,"")
 # Keep storage untouched, still read highlights only to avoid SQLite schema changes. Hide visible section.
 return s
edit('src/ui/screens/LibraryScreen.tsx',library)
def pastoral(s):
 s=change(s,"import {useState} from 'react';","import {useRef,useState} from 'react';")
 s=change(s,"const [expanded,setExpanded]=useState<string|null>(null),[linkError,setLinkError]=useState('');","const [expanded,setExpanded]=useState<string|null>(null),[linkError,setLinkError]=useState('');\n const scrollRef=useRef<ScrollView>(null);\n const headings=useRef<Record<string,number>>({});\n const focusNext=useRef<string|null>(null);\n const scrollToOpen=()=>{const id=focusNext.current;if(!id)return;const y=headings.current[id];if(y===undefined)return;scrollRef.current?.scrollTo({y:Math.max(0,y-14),animated:true});focusNext.current=null;};")
 s=change(s,"<ScrollView contentContainerStyle={styles.stack}>","<ScrollView ref={scrollRef} contentContainerStyle={styles.stack} onContentSizeChange={scrollToOpen}>")
 s=change(s,"<View key={item.id} style={[styles.accordion,","<View key={item.id} onLayout={e=>{headings.current[item.id]=e.nativeEvent.layout.y;if(focusNext.current===item.id)requestAnimationFrame(scrollToOpen);}} style={[styles.accordion,")
 s=change(s,"onPress={()=>setExpanded(v=>v===item.id?null:item.id)}","onPress={()=>{focusNext.current=open?null:item.id;setExpanded(open?null:item.id);}}")
 return s
edit('src/ui/screens/PastoralScreen.tsx',pastoral)
def topicState(s):
 s=change(s,"family?:string; topicId?:string; scrollY:number;","family?:string; topicId?:string; scrollY:number; listScrollY?:number; selectedLetter?:string;")
 s=change(s,"initialTopicUiState:TopicUiState={mode:'words',scrollY:0}","initialTopicUiState:TopicUiState={mode:'topics',scrollY:0,selectedLetter:'A'}")
 return s
edit('src/product/conceptIndex.ts',topicState)
