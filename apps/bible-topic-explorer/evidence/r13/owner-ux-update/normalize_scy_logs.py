from pathlib import Path
root=Path(__file__).parent
for p in root.glob('soundcloud-*.log'):
 try:
  data=p.read_bytes().rstrip(b'\r\n')
  p.write_bytes(data+b'\n')
  print('NORMALIZE',p.name)
 except Exception as exc:print('SKIP',p.name,str(exc))
