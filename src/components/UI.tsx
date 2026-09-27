import type {ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import {BookOpen,Heart,House,UserRound} from 'lucide-react';
export function Panel({children,className=''}:{children:ReactNode;className?:string}){return <section className={'panel '+className}>{children}</section>}
export function Button({children,onClick,type='button',soft=false,disabled=false}:{children:ReactNode;onClick?:()=>void;type?:'button'|'submit';soft?:boolean;disabled?:boolean}){return <button type={type} onClick={onClick} disabled={disabled} className={'pixel-btn '+(soft?'soft':'')}>{children}</button>}
export function Header({title,back}:{title:string;back?:()=>void}){return <header className="topbar">{back&&<button className="back" onClick={back} aria-label="返回">←</button>}<span className="brand-mark" aria-hidden="true"><i/></span><strong>{title}</strong><span className="top-spark">✦</span></header>}
export function Tabs(){return <nav className="tabs" aria-label="底部导航">{([['/','今日',House],['/diary','日记',BookOpen],['/trends','心情',Heart],['/me','我的',UserRound]] as const).map(([path,label,Icon])=><NavLink key={path} to={path} end={path==='/'} className={({isActive})=>isActive?'tab active':'tab'}><Icon size={20}/><span>{label}</span></NavLink>)}</nav>}
