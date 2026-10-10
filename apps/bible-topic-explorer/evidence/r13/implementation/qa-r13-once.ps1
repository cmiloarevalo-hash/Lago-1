$ErrorActionPreference='Stop'
$project='C:\RC02Q\r13-a1\apps\bible-topic-explorer'
$e=Join-Path $project 'evidence\r13\implementation\android'
New-Item -ItemType Directory -Force $e | Out-Null
$results=New-Object 'System.Collections.Generic.List[string]'
$global:adbCalls=0
function Note([string]$m){$results.Add("$([DateTime]::UtcNow.ToString('o')) $m");Write-Output $m}
function A([string[]]$parameters){
 $global:adbCalls++
 $prior=$ErrorActionPreference;$ErrorActionPreference='Continue'
 try{$r=& adb.exe @parameters 2>&1;$exit=$LASTEXITCODE}finally{$ErrorActionPreference=$prior}
 if($exit -ne 0){throw "ADB command failed: $($parameters -join ' ') [$exit] $r"}
 return $r
}
function Dump([string]$label){
 [void](A -parameters @('shell','uiautomator','dump','/sdcard/la-u-r13.xml'))
 [void](A -parameters @('pull','/sdcard/la-u-r13.xml',(Join-Path $e ($label+'.xml'))))
 return [xml](Get-Content (Join-Path $e ($label+'.xml')) -Raw -Encoding UTF8)
}
function Snap([string]$label){
 [void](A -parameters @('shell','screencap','-p','/sdcard/la-u-r13.png'))
 [void](A -parameters @('pull','/sdcard/la-u-r13.png',(Join-Path $e ($label+'.png'))))
 Note "PNG $label"
}
function Visible([string]$pattern,[string]$label){
 $xml=Dump $label
 $found=@($xml.SelectNodes('//node') | Where-Object {$_.text -match $pattern -or $_.'content-desc' -match $pattern})
 if($found.Count -eq 0){throw "NOT_VISIBLE $pattern"}
 Note "VISIBLE_PASS $label $pattern"
}
function Tap([string]$pattern,[string]$scope,[int]$attempts=10){
 for($i=0;$i -le $attempts;$i++){
  $xml=Dump ($scope+'-'+$i)
  $nodes=@($xml.SelectNodes('//node') | Where-Object {($_.clickable -eq 'true' -or $_.checkable -eq 'true') -and ($_.text -match $pattern -or $_.'content-desc' -match $pattern)})
  foreach($n in $nodes){
   if($n.bounds -match '^\[(\d+),(\d+)\]\[(\d+),(\d+)\]$'){
    $x1=[int]$Matches[1];$y1=[int]$Matches[2];$x2=[int]$Matches[3];$y2=[int]$Matches[4]
    if(($y2 -gt $y1) -and ($y1 -ge 64) -and ($y2 -le 2280)){
     [void](A -parameters @('shell','input','tap',"$([int](($x1+$x2)/2))","$([int](($y1+$y2)/2))"))
     Start-Sleep -Milliseconds 450
     Note "TAP_PASS $pattern scroll=$i"
     return
    }
   }
  }
  if($i -eq $attempts){break}
  $pos=if($scope -like 'menu*'){'290'}else{'540'}
  [void](A -parameters @('shell','input','swipe',$pos,'1870',$pos,'800','420'))
  Start-Sleep -Milliseconds 180
 }
 throw "TAP_NOT_FOUND $pattern ($scope)"
}
function Menu([string]$pattern){
 [void](A -parameters @('shell','input','tap','110','199'))
 Start-Sleep -Milliseconds 300
 Tap $pattern 'menu' 12
}
function Case([string]$id,[scriptblock]$action){
 try{& $action;Note "CASE $id PASS"}catch{Note "CASE $id FAIL $($_.Exception.Message)"}
}
try{
 $sha=(& git.exe -C 'C:\RC02Q\r13-a1' rev-parse HEAD).Trim()
 Note "SHA $sha"
 if($sha -ne '0b609f7ce3a5bb398dea7161afa06bc38045820e'){throw 'WRONG_COMMIT_ABORT'}
 $source=Join-Path $project 'android\app\build\outputs\apk\debug\app-debug.apk'
 if(!(Test-Path $source)){throw 'NO_QA_APK'}
 $metadata=& "$env:LOCALAPPDATA\Android\Sdk\build-tools\36.0.0\aapt.exe" dump badging $source
 if(($metadata|Select-Object -First 1) -notmatch 'com.lago.bibletopicexplorer.qa'){throw 'PRODUCTION_PACKAGE_GUARD'}
 Note "PACKAGE_QA_CONFIRMED"
 [void](A -parameters @('reconnect','offline'))
 [void](A -parameters @('install','-r',$source))
 [void](A -parameters @('shell','settings','put','system','font_scale','1.0'))
 [void](A -parameters @('shell','am','force-stop','com.lago.bibletopicexplorer.qa'))
 [void](A -parameters @('shell','am','start','-n','com.lago.bibletopicexplorer.qa/.MainActivity'))
 Start-Sleep -Seconds 9
 Case 'C0_SHA_SCREEN_AND_TABS' {
  Visible 'Tu lectura puede comenzar' 'c0-home';Snap 'c0-home'
  $xml=Dump 'c0-tabs'
  foreach($t in @('Hoy','Explorar','Leer','Biblioteca')){if(@($xml.SelectNodes('//node')|Where-Object {$_.text -eq $t -or $_.'content-desc' -eq $t}).Count -eq 0){throw "MISSING_TAB $t"}}
  Note 'FOUR_TABS_PASS'
 }
 Case 'C1_PLANS_SEVEN_DAYS' {
  Menu 'Planes de lectura';Visible 'Planes de lectura' 'c1-plans';Snap 'c1-plans'
  Tap 'Ver plan Encuentro' 'c1-plan-choice'
  Visible 'de 7 días completados' 'c1-detail';Tap 'Abrir día 1' 'c1-days'
  Visible 'Día 1' 'c1-day1';Snap 'c1-day1'
  Tap 'Leer Marcos' 'c1-reader-btn'
  Visible 'Marcos 1:14' 'c1-verse';Snap 'c1-verse'
  [void](A -parameters @('shell','input','keyevent','4'))
  Visible 'Día 1' 'c1-back'
  Note 'PLAN_BACK_RESTORED'
 }
 Case 'C2_PASTORAL_ACCORDION_SOURCES' {
  Menu 'Guía pastoral';Visible 'Guía pastoral' 'c2-root'
  Tap 'Acogida con respeto' 'c2-heading'
  Visible 'Propósito' 'c2-expanded';Snap 'c2-expanded'
  1..5 | ForEach-Object {[void](A -parameters @('shell','input','swipe','520','1870','520','710','400'))}
  Visible 'Fuentes y referencias' 'c2-sources';Snap 'c2-sources'
 }
 Case 'C3_GAMES_INTERACTIVE' {
  Menu 'Dinámicas y juegos';Visible 'Dinámicas pastorales' 'c3-activities'
  Tap 'Jugar trivia' 'c3-play';Visible 'Juegos bíblicos' 'c3-game'
  Tap '^Lucas$' 'c3-answer';Visible 'Respuesta correcta' 'c3-scored';Snap 'c3-scored'
  Tap 'Verdadero/falso' 'c3-modes';Visible 'Pregunta 1' 'c3-truefalse'
  Tap 'Ordenar versículos' 'c3-order';Visible 'Salmos 23' 'c3-sequence';Snap 'c3-sequence'
 }
 Case 'C4_HYMNAL_RIGHTS_READER' {
  Menu 'Cancionero';Visible 'Cancionero' 'c4-root'
  Tap 'Abrir título Luz en el camino' 'c4-title'
  Visible 'Cuando el día parece largo' 'c4-original';Snap 'c4-original'
  [void](A -parameters @('shell','input','keyevent','4'))
  Visible 'Crear mi letra privada' 'c4-back'
  Tap 'Abrir título Alabar' 'c4-pending'
  Visible 'LICENCIA_PENDIENTE' 'c4-rights';Snap 'c4-rights'
 }
 Case 'C5_YOUTUBE_PENDING_AND_VISIBLE_CODE' {
  Menu 'YouTube visible';Visible 'PENDIENTE_PLAYLIST' 'c5-pending';Snap 'c5-pending'
  Note 'YT_PLAYBACK_NOT_RUN_NO_APPROVED_PLAYLIST'
 }
 Case 'C6_PRIVATE_BOOKS_ROUTE_REUSED' {
  Menu 'Mis libros PDF/EPUB';Visible 'Mis libros PDF/EPUB' 'c6-books';Snap 'c6-books'
 }
 Case 'C7_NEW_PALETTES_APPEAR' {
  [void](A -parameters @('shell','input','tap','916','197'))
  Visible 'Ajustes' 'c7-settings'
  Tap 'Marino claro' 'c7-marine' 4
  Visible 'Apariencia' 'c7-theme';Snap 'c7-marine'
  Tap 'Blanco y negro' 'c7-contrast' 4
  Snap 'c7-contrast'
  [void](A -parameters @('shell','settings','put','system','font_scale','1.6'))
  Snap 'c7-contrast-160'
  [void](A -parameters @('shell','settings','put','system','font_scale','2.0'))
  Snap 'c7-contrast-200'
  [void](A -parameters @('shell','settings','put','system','font_scale','1.0'))
  Note 'NEW_THEME_100_160_200_VISUAL_CAPTURES'
 }
}finally{
 try{[void](A -parameters @('shell','settings','put','system','font_scale','1.0'))}catch{}
 Note "ADB_COMMANDS $global:adbCalls"
 $results | Set-Content -Encoding utf8 (Join-Path $e 'qa-run.log')
}
