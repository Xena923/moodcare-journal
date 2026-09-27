type PixelRoomProps={onDiary:()=>void;onCalendar:()=>void;onStar:()=>void};

export function PixelRoom({onDiary,onCalendar,onStar}:PixelRoomProps){
  return <section className="cosmic-stage" aria-label="心晴宇宙互动入口">
    <img className="cosmic-collage" src="/assets/mood-geocities-collage.jpg" alt="黑色星空中散落着月亮、星球、小屋、日记和情绪图标的原创像素拼贴" fetchPriority="high"/>
    <div className="stage-title" aria-hidden="true"><span>MOOD</span><span>CARE</span></div>
    <button type="button" className="portal-button" onClick={onDiary}>
      <span className="portal-orb mini-planet planet-yellow" aria-hidden="true"/><b>写下今天</b><small>打开情绪日记</small>
    </button>
    <button type="button" className="stage-ticket ticket-left" onClick={onCalendar}><span className="mini-planet planet-cyan" aria-hidden="true"/>看心情轨迹</button>
    <button type="button" className="stage-ticket ticket-right" onClick={onStar}><span className="mini-planet planet-pink" aria-hidden="true"/>去放松一下</button>
  </section>;
}
