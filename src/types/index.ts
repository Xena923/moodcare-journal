export type Mood = '开心'|'平静'|'低落'|'焦虑'|'生气'|'疲惫';
export type Entry = {id:string;date:string;moods:Mood[];intensity:number;content:string;tags:string[];feedback?:string};
