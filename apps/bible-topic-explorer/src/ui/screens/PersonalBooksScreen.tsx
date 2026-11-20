import {useCallback,useEffect,useMemo,useState} from 'react';
import {ScrollView,StyleSheet,Text,View} from 'react-native';
import {useSQLiteContext} from 'expo-sqlite';
import {SQLitePersonalBooksRepository} from '../../db/sqlitePersonalBooksRepository';
import {pickPrivatePersonalBook,previewPrivatePdf,readPrivateEpub,type EpubChapter} from '../../db/personalBookFiles';
import {bookProgressLabel,type PersonalBook} from '../../product/personalBooks';
import {Action,Body,Card,Metadata,Screen,ScreenTitle,Section,StatusBanner,Subhead} from '../primitives';
import {spacing,type Theme,type as typography} from '../theme';

export function PersonalBooksScreen({theme,bookId,onSelect,onBack,readingScale=1}:{theme:Theme;bookId?:string;onSelect:(id:string)=>void;onBack:()=>void;readingScale?:number}){
 const db=useSQLiteContext(),repo=useMemo(()=>new SQLitePersonalBooksRepository(db),[db]);
 const [books,setBooks]=useState<readonly PersonalBook[]>([]);
 const [busy,setBusy]=useState(false),[message,setMessage]=useState(''),[error,setError]=useState('');
 const [chapters,setChapters]=useState<readonly EpubChapter[]>([]);
 const [loadingChapters,setLoadingChapters]=useState(false);
 const selected=books.find(x=>x.id===bookId);
 const refresh=useCallback(async()=>{try{setBooks(await repo.list());}catch{setError("The private book index could not be consulted.");}},[repo]);
 useEffect(()=>{void refresh();},[refresh]);
 useEffect(()=>{let active=true;setChapters([]);setLoadingChapters(false);
  if(!selected||selected.format!=='epub')return()=>{active=false;};
  setLoadingChapters(true);
  void readPrivateEpub(selected.uri).then(list=>{if(active){setChapters(list);setError('');}}).catch(()=>{if(active)setError("Could not read this EPUB; the original document is preserved.");}).finally(()=>{if(active)setLoadingChapters(false);});
  return()=>{active=false;};
 },[selected?.id,selected?.uri,selected?.format]);
 const importBook=async()=>{
  if(busy)return;setBusy(true);setError('');setMessage('');
  try{
   const imported=await pickPrivatePersonalBook();
   if(!imported){setMessage("Selection cancelled: no file was saved.");return;}
   await repo.insert(imported);await refresh();setMessage("Document copied to the private storage of Bible – Pastoral Guide, without uploading it to the internet.");onSelect(imported.id);
  }catch{setError("The file could not be imported. Check format (PDF or EPUB), size and available space.");}
  finally{setBusy(false);}
 };
 const updateProgress=async(p:number,ch:number)=>{
  if(!selected)return;
  try{await repo.updateProgress(selected.id,p,ch);setBooks(prev=>prev.map(b=>b.id===selected.id?{...b,progress:p,chapterIndex:ch}:b));setMessage('Avance guardado en este dispositivo.');setError('');}
  catch{setError("Local progress could not be saved.");}
 };
 const openPdf=async()=>{
  if(!selected)return;setError('');
  try{await previewPrivatePdf(selected);}catch{setError("There is no supported PDF viewer or local permission is missing. The private file remains saved, without being sent to any service.");}
 };
 const chapterIndex=selected?Math.min(selected.chapterIndex,Math.max(0,chapters.length-1)):0;
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
  <Action theme={theme} variant="tertiary" label={selected?"← My books":"← Return to menu"} onPress={onBack}/>
  <ScreenTitle theme={theme}>My PDF/EPUB books</ScreenTitle>
  <Body theme={theme} muted>Personal documents that you choose from the Android system selector. Private local copy, no account, no sync, no auto-upload.</Body>
  {error?<StatusBanner theme={theme} kind="warning">{error}</StatusBanner>:null}
  {message?<StatusBanner theme={theme} kind="success">{message}</StatusBanner>:null}
  {selected?<>
    <Card theme={theme} featured>
     <Subhead theme={theme}>{selected.name}</Subhead>
     <Metadata theme={theme}>{selected.format.toUpperCase()} · {Math.round(selected.size/1024)} KB · {bookProgressLabel(selected)}</Metadata>
    </Card>
    {selected.format==='pdf'?<Section theme={theme} title="Local PDF reading">
      <Body theme={theme}>Open with a reader application installed on Android. The document is temporarily shared with the application of your choice; The U does not upload it to the network.</Body>
      <Action theme={theme} label="Open PDF in device reader ↗" onPress={()=>{void openPdf();}}/>
      <Body theme={theme} muted>The progress is manually noted here because The U does not receive the current page from the external viewer.</Body>
      <View style={styles.inline}>
       <Action theme={theme} variant="secondary" label="− 10 %" disabled={selected.progress===0} onPress={()=>{void updateProgress(Math.max(0,selected.progress-10),0);}}/>
       <Action theme={theme} variant="secondary" label="+ 10 %" disabled={selected.progress===100} onPress={()=>{void updateProgress(Math.min(100,selected.progress+10),0);}}/>
      </View>
    </Section>:<Section theme={theme} title="Offline EPUB Reading">
      <Body theme={theme} muted>Text view without EPUB styles, images or scripts. The original format version requires a compatible reader.</Body>
      {loadingChapters?<StatusBanner theme={theme} kind="info">Preparing local chapters…</StatusBanner>:null}
      {chapters.length?<><Metadata theme={theme}>Section {chapterIndex+1} de {chapters.length} · {chapters[chapterIndex].title}</Metadata>
       <View style={styles.inline}>
        <Action theme={theme} variant="secondary" label="← Previous" disabled={chapterIndex===0} onPress={()=>{void updateProgress(Math.round(chapterIndex/chapters.length*100),chapterIndex-1);}}/>
        <Action theme={theme} variant="secondary" label="Next →" disabled={chapterIndex===chapters.length-1} onPress={()=>{void updateProgress(Math.round((chapterIndex+2)/chapters.length*100),chapterIndex+1);}}/>
       </View>
       <Card theme={theme}><Subhead theme={theme}>{chapters[chapterIndex].title}</Subhead>
        <Text selectable style={[typography.body,{color:theme.text,fontSize:Math.max(16,17*readingScale),lineHeight:Math.max(24,26*readingScale)}]}>{chapters[chapterIndex].text}</Text>
       </Card>
      </>:null}
    </Section>}
    <StatusBanner theme={theme} kind="info">The progress is private and can be resumed. We don't delete your files, notes or highlights.</StatusBanner>
  </>:<>
    <Section theme={theme} title="Add a book">
     <Action theme={theme} label="Choose PDF or EPUB from my device" loading={busy} onPress={()=>{void importBook();}}/>
     <Metadata theme={theme}>PDF up to 100 MB; EPUB up to 25 MB. The EPUB reads as local text; PDF uses an installed application. Files are not imported from the cloud automatically.</Metadata>
    </Section>
    <Section theme={theme} title={"My documents ·"+books.length}>
      {books.length?books.map(book=><Card key={book.id} theme={theme}>
       <Subhead theme={theme}>{book.name}</Subhead><Metadata theme={theme}>{book.format.toUpperCase()} · {bookProgressLabel(book)}</Metadata>
       <Action theme={theme} variant="secondary" label={'Retomar '+book.name} onPress={()=>onSelect(book.id)}/>
      </Card>):<Body theme={theme} muted>No documents yet. Your existing WEBP Bible files and notes do not change.</Body>}
    </Section>
  </>}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl},inline:{flexDirection:'row',flexWrap:'wrap',gap:spacing.sm}});
