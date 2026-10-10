$ErrorActionPreference='Stop'
$root=(Resolve-Path (Join-Path $PSScriptRoot '..\..\..')).Path
Set-Location (Join-Path $root 'android')
if((Get-Content 'app\build.gradle' -Raw) -notmatch "applicationId 'com.lago.bibletopicexplorer.qa'"){throw 'QA package guard failed'}
$watch=[Diagnostics.Stopwatch]::StartNew()
& .\gradlew.bat :app:assembleDebug --offline --console=plain *>&1 | Out-File -Encoding utf8 (Join-Path $PSScriptRoot 'p2-qa-debug-gradle.log')
$exit=$LASTEXITCODE;$watch.Stop()
@("PACKAGE=com.lago.bibletopicexplorer.qa","VARIANT=Debug (never production APK)","GRADLE_EXIT=$exit","OBSERVED_SECONDS=$([Math]::Round($watch.Elapsed.TotalSeconds,2))") | Set-Content -Encoding utf8 (Join-Path $PSScriptRoot 'p2-qa-debug-build.txt')
if($exit -ne 0){throw "QA debug build failed: $exit"}
