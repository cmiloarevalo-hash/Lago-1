from pathlib import Path
p=Path(__file__).with_name('qa_owner_ux_android.py')
s=p.read_text(encoding='utf-8')
for a,b in [
 ('Qué bueno que estás aquí','bueno que'),
 ('Música en SoundCloud','SoundCloud'),
 ('Tu música, en SoundCloud','Tu m'),
 ('Guía pastoral','pastoral'),
 ('Protección y consentimiento','consentimiento'),
 ('Prevenir riesgos','Prevenir riesgos'),
 ('Información sobre las fichas','informaci'),
 ('Ocultar información sobre las fichas','Ocultar informaci'),
 ('Las fichas y sus referencias aún están pendientes','Las fichas y sus referencias'),
 ('Explorar temas','Explorar temas'),
 ('Temas bíblicos','Temas'),
 ('Índice A','100 temas'),
 ('Ver los 100 temas A','Ver los 100 temas'),
 ]:
 s=s.replace(a,b)
p.write_text(s,encoding='utf-8')
print('QA_HELPER_ASCII_UPDATED')
