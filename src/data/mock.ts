import type {Entry,Mood} from '../types';
export const moods: Mood[]=['开心','平静','低落','焦虑','生气','疲惫'];
export const emoji: Record<Mood,string>={开心:'✦',平静:'☁',低落:'☂',焦虑:'◌',生气:'✷',疲惫:'☾'};
export const tags=['工作','学习','求职','恋爱','家庭','社交','睡眠','金钱','自我评价'];
export const trend=[{day:'周一',score:2.8},{day:'周二',score:3.2},{day:'周三',score:2.5},{day:'周四',score:3.6},{day:'周五',score:3.0},{day:'周六',score:4.1},{day:'周日',score:3.8}];
export const mockEntries:Entry[]=[{id:'mock-1',date:'2026-09-21',moods:['平静'],intensity:3,content:'散步时吹到了舒服的晚风。',tags:['自我评价']},{id:'mock-2',date:'2026-09-20',moods:['开心'],intensity:4,content:'和朋友一起吃了晚饭。',tags:['社交']},{id:'mock-3',date:'2026-09-19',moods:['焦虑'],intensity:3,content:'准备下周的工作汇报。',tags:['工作']}];
export const care='慢一点也没关系。此刻的感受，值得被认真听见。';
