import {Line,LineChart,ResponsiveContainer,XAxis,YAxis,Tooltip,CartesianGrid} from 'recharts';
import {emoji,trend} from '../data/mock';
import {Panel} from '../components/UI';
import {PixelChartDot} from '../components/PixelChartDot';
import type {Entry} from '../types';
export function Trends({entries}:{entries:Entry[]}){
  const counts=new Map<string,number>();const scenes=new Map<string,number>();
  entries.forEach(e=>{e.moods.forEach(m=>counts.set(m,(counts.get(m)||0)+1));e.tags.forEach(t=>scenes.set(t,(scenes.get(t)||0)+1))});
  const top=[...counts].sort((a,b)=>b[1]-a[1])[0]?.[0]||'平静';
  const scene=[...scenes].sort((a,b)=>b[1]-a[1])[0]?.[0]||'工作';
  const today=new Date();const recent=entries.filter(e=>new Date(e.date).getTime()>=today.getTime()-7*86400000);
  let streak=0;for(let d=0;d<30;d++){const date=new Date();date.setDate(date.getDate()-d);const key=date.toISOString().slice(0,10);if(entries.some(e=>e.date===key))streak++;else if(d>0)break}
  return <main className="trends-page"><div className="eyebrow">心情花园 · 心情足迹</div><h1>看见自己的变化</h1>
    <div className="garden-banner mood-observatory" aria-hidden="true"><img src="/assets/mood-geocities-collage.jpg" alt=""/><span className="observatory-orbit"><i/></span><span className="observatory-copy"><b>MOOD ORBIT</b><small>本周情绪观测站</small></span><span className="observatory-stars">✦ · ✧</span></div>
    <div className="stats"><Panel className="stat-sign"><b>{streak}</b><span>连续记录天数</span></Panel><Panel className="stat-sign"><b>{recent.length}</b><span>本周记录次数</span></Panel></div>
    <Panel className="notice-board"><div className="row"><div><span className="tiny-label">星星彩板 · 心情曲线</span><h3>最近 7 天情绪趋势</h3></div><span className="tiny-label">1 到 5 分</span></div><div className="trend-chart"><ResponsiveContainer width="100%" height="100%"><LineChart data={trend} margin={{top:12,right:8,bottom:0,left:-24}}><CartesianGrid stroke="#d99bc8" strokeDasharray="2 3"/><XAxis dataKey="day" tick={{fontSize:11,fill:'#59266f'}}/><YAxis domain={[1,5]} ticks={[1,2,3,4,5]} tick={{fontSize:11,fill:'#59266f'}}/><Tooltip contentStyle={{background:'#fff5ad',border:'2px solid #58217c',borderRadius:0}}/><Line dataKey="score" stroke="#ed3c98" strokeWidth={3} dot={<PixelChartDot/>} isAnimationActive={false}/></LineChart></ResponsiveContainer></div><p className="hint">图表为演示用示例数据</p></Panel>
    <div className="stats"><Panel className="stat-sign"><span className="tiny-label">高频情绪</span><h3>{emoji[top as keyof typeof emoji]||'✦'} {top}</h3></Panel><Panel className="stat-sign"><span className="tiny-label">高频场景</span><h3>⌂ {scene}</h3></Panel></div>
    <Panel className="wall-calendar"><span className="tiny-label">墙上挂历 · 情绪日历</span><div className="calendar">{Array.from({length:28},(_,i)=><span key={i} className={i%7===1||i%7===4?'marked':''}>{i+1}</span>)}</div><p className="hint">示例日历 · 浅绿色表示已记录</p></Panel>
    <Panel className="care weekly-letter"><span className="tiny-label">AI 周报 · 写给你的一封信</span><h3>这一周，你正在认真照顾自己</h3><p>情绪有起伏很正常。周末的心情有所回升，留意那些让你感到放松的小事。</p></Panel>
  </main>;
}
