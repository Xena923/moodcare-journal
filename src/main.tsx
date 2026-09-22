import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes,useLocation,useNavigate} from 'react-router-dom';
import {Header,Tabs} from './components/UI';
import {useEntries} from './hooks/useEntries';
import {Home} from './pages/Home';
import {Record} from './pages/Record';
import {Analysis} from './pages/Analysis';
import {Regulate} from './pages/Regulate';
import {Breathe} from './pages/Breathe';
import {Trends} from './pages/Trends';
import {Diary} from './pages/Diary';
import {Me} from './pages/Me';
import './style.css';
function App(){const {entries,addEntry,updateEntry}=useEntries();const nav=useNavigate();const location=useLocation();const title=location.pathname==='/'?'心晴日记':location.pathname.startsWith('/analysis')?'情绪分析':location.pathname==='/record'?'记录心情':location.pathname==='/regulate'?'自我调节':location.pathname==='/breathe'?'呼吸练习':location.pathname==='/trends'?'情绪趋势':location.pathname==='/diary'?'我的日记':'我的';return <div className="app-shell"><Header title={title} back={['/record','/regulate','/breathe'].includes(location.pathname)||location.pathname.startsWith('/analysis')?()=>nav(-1):undefined}/><Routes><Route path="/" element={<Home/>}/><Route path="/record" element={<Record addEntry={addEntry}/>}/><Route path="/analysis/:id" element={<Analysis entries={entries}/>}/><Route path="/regulate" element={<Regulate/>}/><Route path="/breathe" element={<Breathe entries={entries} updateEntry={updateEntry}/>}/><Route path="/trends" element={<Trends entries={entries}/>}/><Route path="/diary" element={<Diary entries={entries}/>}/><Route path="/me" element={<Me/>}/></Routes><Tabs/></div>}
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>);
