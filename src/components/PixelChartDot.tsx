export function PixelChartDot({cx=0,cy=0}:{cx?:number;cy?:number}){
  return <g shapeRendering="crispEdges"><rect x={cx-6} y={cy-6} width="12" height="12" fill="#52258f"/><rect x={cx-3} y={cy-3} width="6" height="6" fill="#ffe94d"/></g>;
}
