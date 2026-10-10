$ErrorActionPreference='Stop'
$project=(Resolve-Path (Join-Path $PSScriptRoot '..\..\..')).Path
Set-Location $project
$sha=(& git rev-parse HEAD).Trim()
$expected='4624b66056c7a7b143d257aff1c4586d0380646b'
if($sha -ne $expected){throw "Wrong source commit: $sha"}
$summary=@("SOURCE_COMMIT=$sha","OBSERVED_AT_UTC=$([DateTime]::UtcNow.ToString('o'))","APP_LOCAL_ONLY=true")
$steps=@(
  @{label='TYPECHECK'; command='npm';args=@('run','typecheck'); log='p2-typecheck.log'},
  @{label='VITEST'; command='npm';args=@('test'); log='p2-vitest.log'},
  @{label='EXPO_EXPORT_ANDROID_JS'; command='npx';args=@('expo','export','--platform','android','--output-dir','dist-r13-p2-local'); log='p2-expo-export.log'}
)
foreach($step in $steps){
  $watch=[Diagnostics.Stopwatch]::StartNew()
  & $step.command @($step.args) *>&1 | Out-File -Encoding utf8 (Join-Path $PSScriptRoot $step.log)
  $exit=$LASTEXITCODE
  $watch.Stop()
  $summary+=("$($step.label)_EXIT=$exit")
  $summary+=("$($step.label)_MACHINE_SECONDS=$([Math]::Round($watch.Elapsed.TotalSeconds,2))")
  if($exit -ne 0){
    $summary+='STATUS=FAIL'
    $summary | Set-Content -Encoding utf8 (Join-Path $PSScriptRoot 'p2-local-checks.txt')
    throw "P2 check failed: $($step.label)"
  }
}
$summary+='STATUS=PASS'
$summary+='ACTUAL_HUMAN_HOURS=NO MEDIDO'
$summary | Set-Content -Encoding utf8 (Join-Path $PSScriptRoot 'p2-local-checks.txt')
$summary
