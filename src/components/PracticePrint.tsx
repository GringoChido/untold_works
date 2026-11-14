/** Original spot-color prints for the homepage. Each bend uses a straight stem and a round return. */
export function PracticePrint({ plate }: { plate: 'intelligence' | 'offer' | 'reach' | 'make' | 'measure' }) {
  if (plate === 'intelligence') {
    return <svg className="practice-print intelligence-print" viewBox="0 0 640 420" aria-hidden="true" focusable="false">
      <circle cx="398" cy="168" r="79" fill="var(--burnt)" />
      {[0, 1, 2, 3].map(i => {
        const r = 106 + i * 28;
        return <path key={i} d={`M 660 ${168-r} H398 a ${r} ${r} 0 1 0 0 ${2*r} H660`} fill="none" stroke="currentColor" strokeWidth="19" />;
      })}
      <path d="M662 168 H539 Q484 168 484 222 V420" fill="none" stroke="var(--burnt)" strokeWidth="16" />
    </svg>;
  }
  if (plate === 'offer') {
    return <svg className="practice-print" viewBox="0 0 560 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      {Array.from({ length: 15 }, (_, i) => <rect key={i} x={32+i*35} y="0" width="12" height="190" />)}
      <circle cx="320" cy="142" r="116" fill="var(--paper-tone)" /><circle cx="320" cy="142" r="105" fill="var(--burnt)" />
    </svg>;
  }
  if (plate === 'reach') {
    return <svg className="practice-print" viewBox="0 0 560 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      {['var(--petrol)', 'var(--paper-tone)', 'var(--burnt)', 'var(--ink-tone)'].map((color,i) =>
        <path key={color} d={`M${170+i*24} -5 h20 V65 L${80+i*115+56} 196 h-55 L${170+i*24} 65Z`} fill={color} />)}
    </svg>;
  }
  if (plate === 'make') {
    return <svg className="practice-print make-print" viewBox="0 0 400 310" aria-hidden="true" focusable="false">
      {[0,1,2].map(i => <path key={i} transform={`translate(${i*56} ${i*19})`} d="M30 -70 V118 A95 95 0 0 0 220 118 V-70" fill="none" stroke={['#db865a','#e9b174','#f0e5cd'][i]} strokeWidth="34" />)}
    </svg>;
  }
  return <svg className="practice-print measure-print" viewBox="0 0 480 210" aria-hidden="true" focusable="false">
    {Array.from({length:12}, (_, row) => Array.from({length:28}, (_,col) => {
      const wave = Math.sin(col / 7 + row / 7);
      return <circle key={row+'-'+col} cx={col*18} cy={row*18+7+8*wave} r={2.7+3.4*(1+wave)/2} fill={row===5?'var(--burnt)':'currentColor'} />;
    }))}
  </svg>;
}
