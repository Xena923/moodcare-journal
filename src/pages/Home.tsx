import {useNavigate} from 'react-router-dom';
import {Line,LineChart,ResponsiveContainer} from 'recharts';
import {care,moods,trend} from '../data/mock';
import {Button,Panel} from '../components/UI';
import {MoodIcon} from '../components/MoodIcon';
import {PixelRoom} from '../components/PixelRoom';
import {PixelChartDot} from '../components/PixelChartDot';
import type {Mood} from '../types';
export function Home(){
  const nav=useNavigate();
  return <main className="home-page">
    <h1>今天过得怎么样？</h1>
    <p className="muted">欢迎降落。这里收留每一种心情。</p>
    <PixelRoom onDiary={()=>nav('/record')} onCalendar={()=>nav('/trends')} onStar={()=>nav('/regulate')}/>
    <div className="section-heading"><span className="tiny-label">今日心情</span><h2>选一份此刻的感觉</h2></div>
    <div className="mood-grid">{moods.map(m=><button className="mood-tile" key={m} onClick={()=>nav('/record',{state:{mood:m as Mood}})}><MoodIcon mood={m}/><span>{m}</span></button>)}</div>
    <Button onClick={()=>nav('/record')}>✎　记录此刻</Button>
    <Panel className="care home-care"><span className="tiny-label">今日关怀语</span><p>“{care}”</p></Panel>
    <Panel className="home-trend wood-board"><div className="row"><div><span className="tiny-label">墙上的心情地图</span><h3>最近 7 天</h3></div><button className="text-link" onClick={()=>nav('/trends')}>查看趋势 →</button></div><div className="mini-chart"><ResponsiveContainer width="100%" height="100%"><LineChart data={trend}><Line dataKey="score" stroke="#ed3c98" strokeWidth={3} dot={<PixelChartDot/>} isAnimationActive={false}/></LineChart></ResponsiveContainer></div></Panel>
  </main>;
}
