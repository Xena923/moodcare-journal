import {useNavigate} from 'react-router-dom';
import {Button,Panel} from '../components/UI';
import {emoji} from '../data/mock';
import type {Entry} from '../types';
export function Diary({entries}:{entries:Entry[]}){const nav=useNavigate();return <main><div className="eyebrow">一点一滴，都值得记住</div><h1>我的日记</h1><Button onClick={()=>nav('/record')}>＋ 写一篇新日记</Button><div className="entry-list">{entries.map(e=><Panel key={e.id}><div className="row"><span className="tiny-label">{e.date}</span><span>{e.moods.map(m=>emoji[m]).join(' ')}</span></div><h3>{e.moods.join(' · ')}</h3><p>{e.content||'今天留下一份心情记录。'}</p><div className="entry-tags">{e.tags.map(t=><span key={t}>{t}</span>)}{e.feedback&&<span>练习后：{e.feedback}</span>}</div></Panel>)}</div></main>}
