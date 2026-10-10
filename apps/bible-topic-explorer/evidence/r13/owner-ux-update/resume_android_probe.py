from pathlib import Path
p=Path(__file__).with_name('qa_activities_sources.py')
s=p.read_text(encoding='utf-8')
header=s.split('# Always target QA package')[0]
tail="tap('← Volver')\n"+s.split("tap('← Volver')\n",1)[1]
out=p.with_name('qa_activities_sources_part2.py')
out.write_text(header+tail,encoding='utf-8')
print(out)
