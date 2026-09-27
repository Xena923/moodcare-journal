import type {Mood} from '../types';

const palette:Record<Mood,{frame:string;face:string}>={
  开心:{frame:'#ff7b00',face:'#ffe14f'},
  平静:{frame:'#06a77d',face:'#68f7c3'},
  低落:{frame:'#2774e6',face:'#7dd9ff'},
  焦虑:{frame:'#7a42d8',face:'#d293ff'},
  生气:{frame:'#e83263',face:'#ff8a9f'},
  疲惫:{frame:'#6659a8',face:'#c9b9ee'},
};

export function MoodIcon({mood}:{mood:Mood}){
  const colors=palette[mood];
  return <svg className="mood-icon" viewBox="0 0 32 32" shapeRendering="crispEdges" aria-hidden="true">
    <rect x="2" y="2" width="28" height="28" fill={colors.frame}/>
    <rect x="5" y="5" width="22" height="22" fill={colors.face}/>
    <rect x="7" y="7" width="5" height="3" fill="#fff8dd" opacity=".65"/>
    {mood==='疲惫'?<><rect x="10" y="15" width="4" height="1.5" fill="#534a45"/><rect x="19" y="15" width="4" height="1.5" fill="#534a45"/></>:<><rect x="10" y="13" width="3" height="3" fill="#534a45"/><rect x="20" y="13" width="3" height="3" fill="#534a45"/></>}
    {mood==='开心'&&<path d="M11 20h2v2h6v-2h2v-2h2v2h-2v3H11v-3H9v-2h2z" fill="#6d5147"/>}
    {mood==='平静'&&<rect x="12" y="21" width="9" height="2" fill="#6d5147"/>}
    {mood==='低落'&&<path d="M12 23v-2h2v-2h6v2h2v2h-2v-2h-6v2z" fill="#6d5147"/>}
    {mood==='焦虑'&&<><rect x="14" y="21" width="5" height="3" fill="#6d5147"/><rect x="7" y="18" width="2" height="4" fill="#93b9d4"/></>}
    {mood==='生气'&&<><rect x="9" y="10" width="5" height="2" fill="#6d5147"/><rect x="19" y="10" width="5" height="2" fill="#6d5147"/><rect x="12" y="21" width="9" height="2" fill="#6d5147"/></>}
    {mood==='疲惫'&&<rect x="14" y="21" width="6" height="2" fill="#6d5147"/>}
  </svg>;
}
