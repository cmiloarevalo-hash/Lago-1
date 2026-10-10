from pathlib import Path
here=Path(__file__).parent
for name in ('source-typecheck.log','source-vitest.log'):
 p=here/name
 p.write_bytes(p.read_bytes().rstrip(b'\r\n')+b'\n')
 print('NORMALIZED',name)
