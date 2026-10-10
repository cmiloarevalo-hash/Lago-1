from pathlib import Path
root=Path(__file__).parent
for file in ('source-typecheck-final.log','source-typecheck.log','source-vitest-final.log','source-vitest.log'):
 p=root/file;p.write_bytes(p.read_bytes().rstrip(b'\r\n')+b'\n')
 print('NORMALIZED',file)
