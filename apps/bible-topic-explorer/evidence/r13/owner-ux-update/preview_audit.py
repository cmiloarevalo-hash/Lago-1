from pathlib import Path
import json
p=Path(__file__).resolve().parents[3]/'src/product/conceptPreviews.ts'
s=p.read_text(encoding='utf-8')
blob=s.split('export const conceptPreviews:readonly ConceptPreview[] = ',1)[1].split('\n];',1)[0]+'\n]'
rows=json.loads(blob)
for x in rows:
 print(json.dumps({'id':x['topicId'],'subtopic':x['subtopic'],'synopsis':x['synopsis'],'passages':[(p['reference'],p['rationale']) for p in x['passages']]},ensure_ascii=False))
print('COUNT',len(rows))
