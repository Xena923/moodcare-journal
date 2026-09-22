import {useNavigate} from 'react-router-dom';
import {Line,LineChart,ResponsiveContainer} from 'recharts';
import {care,emoji,moods,trend} from '../data/mock';
import {Button,Panel} from '../components/UI';
import type {Mood} from '../types';
export function Home(){const nav=useNavigate();return <main><div className="eyebrow">TUESDAY · 心情小站</div><h1>今天过得怎么样？</h1><p className="muted">选一个最接近此刻的心情吧。</p><div className="mood-grid">{moods.map(m=><button className="mood-tile" key={m} onClick={()=>nav('/record',{state:{mood:m as Mood}})}><span>{emoji[m]}</span>{m}</button>)}</div><Button onClick={()=>nav('/record')}>✎　记录此刻</Button><Panel className="care"><span className="tiny-label">今日关怀语</span><p>“{care}”</p></Panel><Panel><div className="row"><div><span className="tiny-label">情绪天气</span><h3>最近 7 天</h3></div><button className="text-link" onClick={()=>nav('/trends')}>查看趋势 →</button></div><div className="mini-chart"><ResponsiveContainer width="100%" height="100%"><LineChart data={trend}><Line dataKey="score" stroke="#799677" strokeWidth={3} dot={{fill:'#799677',r:4}}/></LineChart></ResponsiveContainer></div></Panel></main>}
