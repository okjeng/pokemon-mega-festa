const MAIN = [
  { x: 100, y: 40, label: "부산역" },
  { x: 100, y: 140, label: "범내골역" },
  { x: 100, y: 240, label: "전포역" },
  { x: 100, y: 340, label: "광안역" },
  { x: 100, y: 440, label: "센텀시티역" },
];

const BRANCHES = [
  { from: { x: 100, y: 240 }, to: { x: 250, y: 240 }, label: "롯데백화점" },
  { from: { x: 100, y: 340 }, to: { x: 250, y: 340 }, label: "광안리" },
  { from: { x: 100, y: 440 }, to: { x: 250, y: 440 }, label: "BEXCO" },
];

export default function StationMapSvg() {
  return (
    <div className="px-4">
      <svg viewBox="0 0 340 480" className="mx-auto w-full max-w-xs" role="img" aria-label="부산 메가페스타 행사 지도 노선도">
        <line x1={100} y1={40} x2={100} y2={440} stroke="#e5e7eb" strokeWidth={3} />
        {BRANCHES.map((b) => (
          <line key={b.label} x1={b.from.x} y1={b.from.y} x2={b.to.x} y2={b.to.y} stroke="#e5e7eb" strokeWidth={3} />
        ))}
        {BRANCHES.map((b) => (
          <g key={b.label}>
            <circle cx={b.to.x} cy={b.to.y} r={7} fill="#fff" stroke="#111" strokeWidth={2} />
            <text x={b.to.x + 14} y={b.to.y + 4} fontSize={13} fill="#666">
              {b.label}
            </text>
          </g>
        ))}
        {MAIN.map((s) => (
          <g key={s.label}>
            <circle cx={s.x} cy={s.y} r={9} fill="#FFCB05" stroke="#111" strokeWidth={2} />
            <text x={s.x - 16} y={s.y - 14} fontSize={14} fontWeight={700} fill="#111" textAnchor="end">
              {s.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
