"""Read-only APK verification for QA artifact: SHA256, ABI, embedded JS and package metadata."""
from pathlib import Path
import zipfile,hashlib,sys
f=Path(sys.argv[1])
print('FILENAME',f.name)
print('BYTES',f.stat().st_size)
print('SHA256',hashlib.sha256(f.read_bytes()).hexdigest())
with zipfile.ZipFile(f) as z:
 names=z.namelist()
 abi=sorted({x.split('/')[1] for x in names if x.startswith('lib/') and x.count('/')>=2})
 print('ABIS',','.join(abi))
 print('BUNDLE_EMBEDDED',any(x.endswith('.android.bundle') for x in names))
 print('NATIVE_LIB_COUNT',sum(x.endswith('.so') for x in names))
 print('APK_MALFORMED_MEMBER',z.testzip())
