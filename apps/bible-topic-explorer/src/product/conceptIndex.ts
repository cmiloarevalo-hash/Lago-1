import {topicCatalog, type TopicDefinition} from './topics';
import {conceptPreviews, previewByTopicId, type ConceptPreview, type ConceptPassage} from './conceptPreviews';

export type ExploreMode = 'words'|'topics';
export interface TopicUiState {mode:ExploreMode; family?:string; topicId?:string; scrollY:number; listScrollY?:number; selectedLetter?:string;}
export const initialTopicUiState:TopicUiState={mode:'topics',scrollY:0,selectedLetter:'A'};
export const conceptFamilies=Array.from(new Set(topicCatalog.map(topic=>topic.family)));
export function familyTopics(family:string):readonly TopicDefinition[]{return topicCatalog.filter(topic=>topic.family===family);}
export function availablePreview(topicId:string):ConceptPreview|undefined{return previewByTopicId.get(topicId);}
export function topicReviewStatus(topicId:string):'PROPUESTO'|'EN_REVISION'|'VALIDADO'{return availablePreview(topicId)?.status??'PROPUESTO';}
export function reviewMessage(topicId:string):string {
 const p=availablePreview(topicId);
 return p?.status==='EN_REVISION'
   ? 'Muestra contrastada inicialmente con RV1909; revisión contextual y aprobación pastoral humana pendientes.'
   : p ? 'Referencias propuestas; revisión contextual y aprobación pastoral humana pendientes.'
   : 'Ficha contextual y referencias pendientes de revisión editorial; no se muestran pasajes aún.';
}
export function focusMatchesVerse(verse:{verse:number;sourceVerseLabel:string}, target:{verse?:number;sourceVerseLabel?:string;verseEnd?:number;sourceVerseLabels?:readonly string[]}):boolean{
 if(target.sourceVerseLabels?.length)return target.sourceVerseLabels.includes(verse.sourceVerseLabel);
 if(target.sourceVerseLabel!==undefined)return target.sourceVerseLabel===verse.sourceVerseLabel;
 return target.verse!==undefined && verse.verse>=target.verse && verse.verse<=(target.verseEnd??target.verse);
}
export function isFirstFocusedVerse(verse:{verse:number;sourceVerseLabel:string}, target:{verse?:number;sourceVerseLabel?:string;sourceVerseLabels?:readonly string[]}):boolean{
 if(target.sourceVerseLabel!==undefined)return verse.sourceVerseLabel===target.sourceVerseLabel;
 return target.verse!==undefined&&verse.verse===target.verse;
}
// No corpus LIKE/searchTopic scan: this is a fixed 100-item in-memory view, 23 review-state previews.
export const conceptPreviewStats={canonicalTopics:topicCatalog.length,pilot:conceptPreviews.length,initialContextSamples:conceptPreviews.filter(x=>x.status==='EN_REVISION').length,awaitingContext:topicCatalog.length-conceptPreviews.filter(x=>x.status==='EN_REVISION').length,passages:conceptPreviews.flatMap(x=>x.passages).length} as const;
export type {ConceptPassage};
