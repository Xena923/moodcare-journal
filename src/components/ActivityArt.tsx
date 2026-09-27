type ActivityArtProps={scene:'lake'|'music'|'forest'};

export function ActivityArt({scene}:ActivityArtProps){
  if(scene==='music')return <svg className="activity-art" viewBox="0 0 300 102" shapeRendering="crispEdges" aria-hidden="true">
    <rect width="300" height="102" fill="#e9dfd9"/><rect y="76" width="300" height="26" fill="#ab8064"/><rect y="78" width="300" height="4" fill="#805f50"/>
    <rect x="36" y="63" width="230" height="12" fill="#765543"/><rect x="45" y="74" width="18" height="22" fill="#765543"/><rect x="239" y="74" width="18" height="22" fill="#765543"/>
    <rect x="103" y="25" width="99" height="44" fill="#b37f60"/><rect x="109" y="31" width="87" height="31" fill="#eac8a1"/>
    <rect x="124" y="9" width="57" height="56" fill="#645e6a"/><rect x="130" y="15" width="45" height="44" fill="#8d8497"/><rect x="138" y="23" width="29" height="28" fill="#d9c5ad"/><rect x="145" y="30" width="15" height="14" fill="#736274"/><rect x="150" y="34" width="5" height="6" fill="#e9d9bf"/>
    <rect x="183" y="29" width="4" height="27" fill="#645e6a"/><rect x="180" y="25" width="12" height="5" fill="#645e6a"/>
    <rect x="61" y="45" width="9" height="19" fill="#9a9475"/><rect x="52" y="38" width="27" height="10" fill="#c9bca3"/>
    <text x="221" y="37" fill="#a489a2" fontSize="19" fontFamily="monospace">♫</text><text x="250" y="23" fill="#b596b0" fontSize="13" fontFamily="monospace">♪</text>
  </svg>;
  if(scene==='forest')return <svg className="activity-art" viewBox="0 0 300 102" shapeRendering="crispEdges" aria-hidden="true">
    <rect width="300" height="102" fill="#dbe4c7"/><rect y="69" width="300" height="33" fill="#8aab7b"/><path d="M123 102l24-37h48l39 37z" fill="#ddc59a"/><path d="M147 65l-19 37M195 65l35 37" stroke="#b49872" strokeWidth="4"/>
    <rect x="35" y="37" width="14" height="53" fill="#806149"/><rect x="26" y="19" width="33" height="32" fill="#5e8663"/><rect x="30" y="8" width="25" height="34" fill="#77996c"/><rect x="25" y="32" width="38" height="12" fill="#77996c"/>
    <rect x="253" y="32" width="11" height="55" fill="#806149"/><rect x="241" y="23" width="37" height="32" fill="#6e9370"/><rect x="247" y="10" width="28" height="27" fill="#8fac79"/>
    <rect x="96" y="50" width="8" height="24" fill="#816248"/><rect x="88" y="38" width="24" height="23" fill="#67906d"/>
    <rect x="212" y="50" width="7" height="22" fill="#816248"/><rect x="204" y="42" width="24" height="19" fill="#74996f"/>
    <rect x="65" y="76" width="4" height="5" fill="#ead8aa"/><rect x="226" y="80" width="5" height="6" fill="#ead8aa"/>
  </svg>;
  return <svg className="activity-art" viewBox="0 0 300 102" shapeRendering="crispEdges" aria-hidden="true">
    <rect width="300" height="102" fill="#b7c8c0"/><rect y="66" width="300" height="36" fill="#90afa9"/><rect y="76" width="300" height="7" fill="#bfd4c3"/><rect y="88" width="300" height="4" fill="#d7e2d0"/>
    <path d="M0 57l38-25 37 25 33-21 46 25 32-19 47 20 28-25 39 20v14H0z" fill="#819b8c"/><path d="M0 68l41-15 28 14 43-12 33 13 35-12 39 10 36-12 45 13v13H0z" fill="#6c8c7d"/>
    <rect x="217" y="22" width="22" height="22" fill="#f1dfb6"/><rect x="221" y="18" width="14" height="4" fill="#f1dfb6"/>
    <rect x="23" y="58" width="7" height="34" fill="#7a6954"/><rect x="14" y="43" width="25" height="22" fill="#739478"/><rect x="10" y="52" width="33" height="13" fill="#86a181"/>
    <rect x="273" y="55" width="7" height="34" fill="#7a6954"/><rect x="265" y="43" width="24" height="21" fill="#749477"/><rect x="261" y="53" width="32" height="11" fill="#8da681"/>
    <rect x="82" y="83" width="63" height="4" fill="#6e917f"/><rect x="182" y="87" width="48" height="3" fill="#6e917f"/>
  </svg>;
}
