import { results } from "@/data/athlete"; 
 
const W = 1100; 
const H = 390; 
const PAD_L = 58; 
const PAD_R = 28; 
const PAD_T = 28; 
const PAD_B = 74; 
const MIN = 1.55; 
const MAX = 2.10; 
const PREVIOUS_TARGET = 2.05; 
const CURRENT_TARGET = 2.10; 
 
const chrono = [...results].reverse(); 
const plotW = W - PAD_L - PAD_R; 
const plotH = H - PAD_T - PAD_B; 
const y = (v: number) => PAD_T + plotH * (1 - (v - MIN) / (MAX - MIN)); 
const x = (i: number) => PAD_L + (plotW * i) / (chrono.length - 1); 
 
export function ProgressionChart() { 
  const points = chrono.map((r, i) => `${x(i)},${y(r.height)}`).join(" "); 
 
  return ( 
    <div className="result-scroll overflow-x-auto border border-line bg-white/50"> 
      <svg  
        viewBox={`0 0 ${W} ${H}`} 
        className="min-w-[900px] w-full" 
        role="img" 
        aria-label="High jump performance progression from 1.63 metres in 2022 to 2.01 metres in 2026" 
      > 
        {[1.6, 1.7, 1.8, 1.9, 2.0, 2.1].map((v) => ( 
          <g key={v}> 
            <line x1={PAD_L} y1={y(v)} x2={W - PAD_R} y2={y(v)} stroke="#ddd5c8" strokeWidth="1" /> 
            <text x={PAD_L - 12} y={y(v) + 4} textAnchor="end" fontSize="12" fill="#6d7178"> 
              {v.toFixed(2)} 
            </text> 
          </g> 
        ))} 
 
        {/* Previous target - achieved */} 
        <line 
          x1={PAD_L} 
          y1={y(PREVIOUS_TARGET)} 
          x2={W - PAD_R} 
          y2={y(PREVIOUS_TARGET)} 
          stroke="#9a7634" 
          strokeWidth="2" 
        /> 
        <text 
          x={W - 180} 
          y={y(PREVIOUS_TARGET) - 8} 
          textAnchor="middle" 
          fontSize="12" 
          fontWeight="700" 
          fill="#9a7634" 
        > 
          Initial target 2.05 m 
        </text> 
 
        {/* Current target */} 
        <line 
          x1={PAD_L} 
          y1={y(CURRENT_TARGET)} 
          x2={W - PAD_R} 
          y2={y(CURRENT_TARGET)} 
          stroke="#861f32" 
          strokeWidth="2" 
          strokeDasharray="8 7" 
        /> 
        <text 
          x={W - 180} 
          y={y(CURRENT_TARGET) - 8} 
          textAnchor="middle" 
          fontSize="12" 
          fontWeight="700" 
          fill="#861f32" 
        > 
          current target  2.10 m 
        </text> 
 
        <polyline points={points} fill="none" stroke="#861f32" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" /> 
 
        {chrono.map((r, i) => ( 
          <g key={`${r.date}-${r.meet}`}> 
            <circle 
              cx={x(i)} 
              cy={y(r.height)} 
              r={r.pb ? 7 : 4.5} 
              fill={r.pb ? "#c9a45c" : "#861f32"} 
              stroke="#f5f1e8" 
              strokeWidth="3" 
            /> 
            <text 
              x={x(i)} 
              y={H - 44} 
              textAnchor="end" 
              transform={`rotate(-40 ${x(i)} ${H - 44})`} 
              fontSize="10.5" 
              fill="#6d7178" 
            > 
              {r.date} 
            </text> 
            {(r.pb || i === 0) && ( 
              <text 
                x={x(i)} 
                y={y(r.height) - 13} 
                textAnchor="middle" 
                fontSize="12" 
                fontWeight="700" 
                fill={r.pb ? "#9a7634" : "#861f32"} 
              > 
                {r.height.toFixed(2)} 
              </text> 
            )} 
          </g> 
        ))} 
      </svg> 
    </div> 
  ); 
}