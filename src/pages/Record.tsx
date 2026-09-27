import {useEffect,useRef,useState} from 'react';
import {useLocation,useNavigate} from 'react-router-dom';
import {moods,tags} from '../data/mock';
import {Button,Panel} from '../components/UI';
import {MoodIcon} from '../components/MoodIcon';
import type {Entry,Mood} from '../types';
export function Record({addEntry}:{addEntry:(e:Entry)=>void}){
  const nav=useNavigate();
  const location=useLocation();
  const initial=(location.state as {mood?:Mood}|null)?.mood;
  const [selected,setSelected]=useState<Mood[]>(initial?[initial]:[]);
  const [intensity,setIntensity]=useState(3);
  const [content,setContent]=useState('');
  const [chosenTags,setChosenTags]=useState<string[]>([]);
  const [error,setError]=useState('');
  const [submitting,setSubmitting]=useState(false);
  const timer=useRef<number|undefined>(undefined);
  useEffect(()=>()=>window.clearTimeout(timer.current),[]);
  function toggleMood(m:Mood){setError('');setSelected(current=>current.includes(m)?current.filter(x=>x!==m):current.length<3?[...current,m]:current)}
  function submit(){
    if(submitting)return;
    if(!selected.length){setError('请至少选择一个情绪');return}
    const id=crypto.randomUUID();
    addEntry({id,date:new Date().toISOString().slice(0,10),moods:selected,intensity,content:content.trim(),tags:chosenTags});
    setSubmitting(true);
    timer.current=window.setTimeout(()=>nav('/analysis/'+id),1350);
  }
  return <main className="record-page">
    <div className="eyebrow">冒险日志 · 写给自己的片刻</div><h1>记录此刻</h1>
    <Panel className="dialog-panel"><span className="dialog-corner">◆</span><h3>现在有哪些感受？</h3><p className="muted">选择 1 到 3 个，把心情放上小木牌。</p>
      <div className="chips mood-chips">{moods.map(m=><button key={m} aria-pressed={selected.includes(m)} className={'chip mood-chip '+(selected.includes(m)?'selected':'')} onClick={()=>toggleMood(m)}><MoodIcon mood={m}/><span>{m}</span></button>)}</div>
      {error&&<p className="error">{error}</p>}
    </Panel>
    <Panel className="wood-board"><h3>情绪有多强烈？</h3><div className="scale heart-scale">{[1,2,3,4,5].map(n=><button key={n} aria-label={n+' 级情绪强度'} aria-pressed={intensity===n} className={n<=intensity?'filled':''} onClick={()=>setIntensity(n)}>{n<=intensity?'♥':'♡'}</button>)}</div><div className="scale-label"><span>轻轻的</span><span>很强烈</span></div></Panel>
    <Panel className="journal-paper"><label htmlFor="story"><h3>发生了什么？</h3></label><textarea id="story" value={content} onChange={e=>setContent(e.target.value)} placeholder="把今天的故事写在这里……" rows={5}/></Panel>
    <Panel className="dialog-panel"><h3>和哪些场景有关？</h3><div className="chips tag-chips">{tags.map(t=><button key={t} aria-pressed={chosenTags.includes(t)} className={'chip small '+(chosenTags.includes(t)?'selected':'')} onClick={()=>setChosenTags(current=>current.includes(t)?current.filter(x=>x!==t):[...current,t])}>{t}</button>)}</div></Panel>
    <Button onClick={submit} disabled={submitting}>写进今天的日记</Button>
    {submitting&&<div className="save-overlay" role="status" aria-live="polite"><div className="save-spark">✦</div><div className="closing-book"><span>✿</span></div><p>今天的心情已经放进日记里啦</p></div>}
  </main>;
}
