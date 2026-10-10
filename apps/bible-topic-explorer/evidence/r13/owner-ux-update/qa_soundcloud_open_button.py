"""Check Android dispatch for main official SoundCloud button, no playback; QA package only."""
from pathlib import Path
import sys,time
HERE=Path(__file__).parent
sys.path.insert(0,str(HERE.parent/'android-visual-qa'))
import qa_device as q
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
def click(name):
 q.click(name);time.sleep(1.2)
# Return to first tab, open SoundCloud section and use only its official homepage action.
click('Hoy')
click('SoundCloud')
click('Abrir SoundCloud ↗')
time.sleep(2)
# A different foreground task, chooser or Chrome is acceptable external handoff.
result=q.adb('shell','dumpsys','activity','activities').stdout
for line in result.splitlines():
 if 'topResumedActivity=' in line or 'mResumedActivity:' in line:
  print('FOREGROUND',line.strip(),flush=True)
try:
 rows=[x[0] for x in q.nodes()]
 print('AFTER_OPEN_LABELS',repr(rows[:16]),flush=True)
except Exception as exc:
 print('UI_DUMP_NOT_AVAILABLE',str(exc),flush=True)
print('BUTTON_TAPPED_NO_AUDIO_IN_APP',flush=True)
