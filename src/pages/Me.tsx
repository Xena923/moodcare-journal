import {useNavigate} from 'react-router-dom';
import {Button,Panel} from '../components/UI';
export function Me(){const nav=useNavigate();return <main><div className="eyebrow">关于我的小空间</div><h1>我的</h1><Panel className="care"><h3>欢迎来到心晴日记</h3><p>这里是一个记录情绪、练习自我关怀的小空间。</p></Panel><Panel><h3>我的记录</h3><p>日记仅保存在当前浏览器中。</p><Button soft onClick={()=>nav('/diary')}>查看日记 →</Button></Panel><Panel><h3>关怀练习</h3><p>需要放松时，可以随时做一次呼吸练习。</p><Button soft onClick={()=>nav('/breathe')}>开始呼吸 →</Button></Panel><p className="disclaimer">本产品用于日常情绪记录与自我关怀，不提供医学诊断，也不能替代专业心理咨询或医疗服务。</p></main>}
