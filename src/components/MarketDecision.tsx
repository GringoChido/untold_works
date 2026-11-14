import { useState } from 'react';

const markets = [
  { name: 'North', inquiries: 80, bookings: 8 },
  { name: 'South', inquiries: 48, bookings: 12 },
];
const decisions = [
  { label: 'Test more in South', result: 'Move $200 from North to South for one week. South has the lower cost per booking. Check that it holds as spend rises.' },
  { label: 'Hold the split', result: 'Keep $1,200 in each market for one week. Review response times in North and see whether more of its inquiries become bookings.' },
  { label: 'Test more in North', result: 'Move $200 from South to North for one week. North brings in cheaper inquiries. Check whether its team can turn those extra inquiries into bookings.' },
];
export function MarketDecision() {
  const [metric, setMetric] = useState<'inquiries' | 'bookings'>('inquiries');
  const [choice, setChoice] = useState<number | null>(null);
  const selected = choice === null ? null : decisions[choice];
  const max = Math.max(...markets.map(m => m[metric]));
  return <div className="market-console">
    <p className="folio">Market comparison · Fictional data</p>
    <h3>Where would you move $200?</h3>
    <p>Two teams spent $1,200 each last week. Both have open appointments. Switch the measure to see what your budget bought.</p>
    <div className="market-tabs" role="group" aria-label="Comparison metric">{(['inquiries','bookings'] as const).map(key =>
      <button key={key} type="button" aria-pressed={metric === key} onClick={() => setMetric(key)}>{key === 'inquiries' ? 'Inquiries' : 'Bookings'}</button>)}</div>
    <div aria-live="polite">{markets.map(m => <div key={m.name} className="market-row">
      <div><strong>{m.name}</strong><span>{m[metric]} {metric} · ${(1200 / m[metric]).toFixed(0)} each</span></div>
      <div className="meter" aria-hidden="true"><i style={{width: (m[metric] / max * 100) + '%'}} /></div>
    </div>)}</div>
    <div className="decision-buttons" role="group" aria-label="Next week's budget">{decisions.map((d,i) =>
      <button key={d.label} type="button" aria-pressed={choice === i} onClick={() => setChoice(i)}>{d.label}</button>)}</div>
    <div aria-live="polite">{selected && <p className="decision-result"><b>Your test plan</b> {selected.result}</p>}</div>
  </div>;
}
