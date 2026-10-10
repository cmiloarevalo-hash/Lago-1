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
 const refresh=useCallback(async()=>{try{setBooks(await repo.list());}catch{setError('No se pudo consultar el índice privado de libros.');}},[repo]);
 useEffect(()=>{void refresh();},[refresh]);
 useEffect(()=>{let active=true;setChapters([]);setLoadingChapters(false);
  if(!selected||selected.format!=='epub')return()=>{active=false;};
  setLoadingChapters(true);
  void readPrivateEpub(selected.uri).then(list=>{if(active){setChapters(list);setError('');}}).catch(()=>{if(active)setError('No se pudo leer este EPUB; se conserva el documento original.');}).finally(()=>{if(active)setLoadingChapters(false);});
  return()=>{active=false;};
 },[selected?.id,selected?.uri,selected?.format]);
 const importBook=async()=>{
  if(busy)return;setBusy(true);setError('');setMessage('');
  try{
   const imported=await pickPrivatePersonalBook();
   if(!imported){setMessage('Selección cancelada: no se guardó ningún archivo.');return;}
   await repo.insert(imported);await refresh();setMessage('Documento copiado al almacenamiento privado de La U, sin subirlo a internet.');onSelect(imported.id);
  }catch{setError('No se pudo importar el archivo. Comprueba formato (PDF o EPUB), tamaño y espacio disponible.');}
  finally{setBusy(false);}
 };
 const updateProgress=async(p:number,ch:number)=>{
  if(!selected)return;
  try{await repo.updateProgress(selected.id,p,ch);setBooks(prev=>prev.map(b=>b.id===selected.id?{...b,progress:p,chapterIndex:ch}:b));setMessage('Avance guardado en este dispositivo.');setError('');}
  catch{setError('No se pudo guardar el avance local.');}
 };
 const openPdf=async()=>{
  if(!selected)return;setError('');
  try{await previewPrivatePdf(selected);}catch{setError('No existe un visor PDF compatible o falta permiso local. El archivo privado sigue guardado, sin enviarse a ningún servicio.');}
 };
 const chapterIndex=selected?Math.min(selected.chapterIndex,Math.max(0,chapters.length-1)):0;
 return <Screen theme={theme}><ScrollView contentContainerStyle={styles.stack}>
  <Action theme={theme} variant="tertiary" label={selected?'← Mis libros':'← Volver al menú'} onPress={onBack}/>
  <ScreenTitle theme={theme}>Mis libros PDF/EPUB</ScreenTitle>
  <Body theme={theme} muted>Documentos personales que eliges desde el selector del sistema Android. Copia local privada, sin cuenta, sincronización ni subida automática.</Body>
  {error?<StatusBanner theme={theme} kind="warning">{error}</StatusBanner>:null}
  {message?<StatusBanner theme={theme} kind="success">{message}</StatusBanner>:null}
  {selected?<>
    <Card theme={theme} featured>
     <Subhead theme={theme}>{selected.name}</Subhead>
     <Metadata theme={theme}>{selected.format.toUpperCase()} · {Math.round(selected.size/1024)} KB · {bookProgressLabel(selected)}</Metadata>
    </Card>
    {selected.format==='pdf'?<Section theme={theme} title="Lectura PDF local">
      <Body theme={theme}>Abrir con una aplicación lectora instalada en Android. El documento se comparte temporalmente con la aplicación que tú elijas; La U no lo sube a la red.</Body>
      <Action theme={theme} label="Abrir PDF en lector del dispositivo ↗" onPress={()=>{void openPdf();}}/>
      <Body theme={theme} muted>El avance se anota manualmente aquí porque La U no recibe la página actual del visor externo.</Body>
      <View style={styles.inline}>
       <Action theme={theme} variant="secondary" label="− 10 %" disabled={selected.progress===0} onPress={()=>{void updateProgress(Math.max(0,selected.progress-10),0);}}/>
       <Action theme={theme} variant="secondary" label="+ 10 %" disabled={selected.progress===100} onPress={()=>{void updateProgress(Math.min(100,selected.progress+10),0);}}/>
      </View>
    </Section>:<Section theme={theme} title="Lectura EPUB sin conexión">
      <Body theme={theme} muted>Vista de texto sin estilos, imágenes ni scripts del EPUB. La versión con formato original requiere un lector compatible.</Body>
      {loadingChapters?<StatusBanner theme={theme} kind="info">Preparando capítulos locales…</StatusBanner>:null}
      {chapters.length?<><Metadata theme={theme}>Sección {chapterIndex+1} de {chapters.length} · {chapters[chapterIndex].title}</Metadata>
       <View style={styles.inline}>
        <Action theme={theme} variant="secondary" label="← Anterior" disabled={chapterIndex===0} onPress={()=>{void updateProgress(Math.round(chapterIndex/chapters.length*100),chapterIndex-1);}}/>
        <Action theme={theme} variant="secondary" label="Siguiente →" disabled={chapterIndex===chapters.length-1} onPress={()=>{void updateProgress(Math.round((chapterIndex+2)/chapters.length*100),chapterIndex+1);}}/>
       </View>
       <Card theme={theme}><Subhead theme={theme}>{chapters[chapterIndex].title}</Subhead>
        <Text selectable style={[typography.body,{color:theme.text,fontSize:Math.max(16,17*readingScale),lineHeight:Math.max(24,26*readingScale)}]}>{chapters[chapterIndex].text}</Text>
       </Card>
      </>:null}
    </Section>}
    <StatusBanner theme={theme} kind="info">El avance es privado y se puede retomar. No eliminamos tus archivos, notas ni destacados.</StatusBanner>
  </>:<>
    <Section theme={theme} title="Añadir un libro">
     <Action theme={theme} label="Elegir PDF o EPUB de mi dispositivo" loading={busy} onPress={()=>{void importBook();}}/>
     <Metadata theme={theme}>PDF hasta 100 MB; EPUB hasta 25 MB. El EPUB se lee como texto local; PDF usa una aplicación instalada. No se importan archivos desde la nube automáticamente.</Metadata>
    </Section>
    <Section theme={theme} title={'Mis documentos · '+books.length}>
      {books.length?books.map(book=><Card key={book.id} theme={theme}>
       <Subhead theme={theme}>{book.name}</Subhead><Metadata theme={theme}>{book.format.toUpperCase()} · {bookProgressLabel(book)}</Metadata>
       <Action theme={theme} variant="secondary" label={'Retomar '+book.name} onPress={()=>onSelect(book.id)}/>
      </Card>):<Body theme={theme} muted>Sin documentos aún. Tus archivos bíblicos RV1909 y notas existentes no cambian.</Body>}
    </Section>
  </>}
 </ScrollView></Screen>;
}
const styles=StyleSheet.create({stack:{gap:spacing.md,paddingBottom:spacing.xxl},inline:{flexDirection:'row',flexWrap:'wrap',gap:spacing.sm}});
