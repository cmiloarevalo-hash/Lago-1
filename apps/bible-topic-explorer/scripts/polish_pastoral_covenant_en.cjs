'use strict';
/** Targeted editorial refinements in the EN guide, doctrinal equivalence still requires human approval. */
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.resolve(__dirname,'../src/product/pastoralTopics.en.ts');
let content=fs.readFileSync(file,'utf8');
const pairs=[
 ['Jeremiah had announced a new alliance:','Jeremiah had announced a new covenant:'],
 ['The word alliance means a bond of commitment.','The word covenant refers to a binding commitment.'],
 ['By speaking of a new alliance at the Last Supper,','By speaking of a new covenant at the Last Supper,'],
 ['For example, a prophet was a person who communicated a message from God to his people; A psalm is a prayer or a song.','For example, a prophet was a person who communicated a message from God to the people; a psalm is a prayer or a song.'],
 ['Luke explains that people who were rejected because of their behavior or the way others judged them to come to Jesus.','Luke explains that people rejected because of their behavior or by others’ judgments came to Jesus.'],
 ["What does Jesus' sacrifice for love of humanity mean to me?","What does Jesus' sacrifice, offered out of love for humanity, mean to me?"]
];
for(const [before,after] of pairs){assert(content.includes(before),'Missing review target: '+before);content=content.replace(before,after);}
fs.writeFileSync(file,content,'utf8');console.log('Guide refinement PASS: '+pairs.length+' targeted improvements in English only.');
