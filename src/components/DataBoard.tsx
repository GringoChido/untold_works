import { useState } from 'react';

type Frame = 'today' | 'week' | 'month' | 'year';
type Cell = { value: string; change: number; tally: [number, number, number] };

const frames: { id: Frame; label: string; sees: string; span: string; decision: string; owner: string; sure: string }[] = [
  { id: 'today', label: 'Today', span: 'yesterday', sees: 'What changed since yesterday, and the one thing worth acting on now.',
    decision: 'Ads are still pointing at a product that sold out this morning. Point them at what is in stock.', owner: 'Marketing lead', sure: 'High' },
  { id: 'week', label: 'This week', span: 'last week', sees: 'Which campaign is working, which one is not, and where to move the spend.',
    decision: 'Email brought in more orders than ads for the second week running. Send the follow-up on Thursday and trim the ad budget.', owner: 'Marketing lead', sure: 'Medium' },
  { id: 'month', label: 'This month', span: 'last month', sees: 'What paid for itself, what to repeat and what to stop.',
    decision: 'Search visits fell while everything else grew. Refresh the three pages that lost the most visits.', owner: 'Website lead', sure: 'Medium' },
  { id: 'year', label: 'This year', span: 'last year', sees: 'What worked across the year, so next year’s plan and budget start from evidence.',
    decision: 'Two of the five campaigns brought in most of the orders. Build next year’s calendar around those two.', owner: 'Owner', sure: 'High' },
];

const sources: { name: string; metric: string; data: Record<Frame, Cell> }[] = [
  { name: 'Store', metric: 'Online revenue', data: {
    today: { value: '$3,400', change: 17, tally: [5, 1, 0] }, week: { value: '$21,600', change: 9, tally: [4, 2, 0] },
    month: { value: '$88,200', change: 12, tally: [5, 1, 0] }, year: { value: '$942k', change: 21, tally: [6, 0, 0] } } },
  { name: 'Website', metric: 'Visits', data: {
    today: { value: '1,240', change: 6, tally: [3, 2, 0] }, week: { value: '8,310', change: 3, tally: [4, 1, 0] },
    month: { value: '34,900', change: 5, tally: [4, 1, 0] }, year: { value: '401k', change: 14, tally: [4, 1, 0] } } },
  { name: 'Search', metric: 'Visits from search', data: {
    today: { value: '310', change: -4, tally: [3, 2, 0] }, week: { value: '2,050', change: -9, tally: [2, 1, 2] },
    month: { value: '8,400', change: -18, tally: [1, 1, 3] }, year: { value: '118k', change: 2, tally: [3, 2, 0] } } },
  { name: 'Ads', metric: 'Ad clicks', data: {
    today: { value: '402', change: 11, tally: [2, 1, 2] }, week: { value: '2,760', change: -6, tally: [2, 3, 0] },
    month: { value: '11,300', change: 4, tally: [3, 2, 0] }, year: { value: '127k', change: 8, tally: [3, 2, 0] } } },
  { name: 'Email', metric: 'Orders from email', data: {
    today: { value: '14', change: 27, tally: [4, 0, 0] }, week: { value: '96', change: 22, tally: [4, 0, 0] },
    month: { value: '371', change: 15, tally: [3, 1, 0] }, year: { value: '3,980', change: 31, tally: [4, 0, 0] } } },
  { name: 'Social', metric: 'People reached', data: {
    today: { value: '6,900', change: 3, tally: [2, 1, 0] }, week: { value: '51,200', change: 12, tally: [3, 0, 0] },
    month: { value: '204k', change: 9, tally: [2, 1, 0] }, year: { value: '2.3M', change: 44, tally: [3, 0, 0] } } },
  { name: 'Inquiries', metric: 'New inquiries', data: {
    today: { value: '9', change: 50, tally: [2, 1, 0] }, week: { value: '47', change: 7, tally: [2, 1, 0] },
    month: { value: '188', change: 10, tally: [3, 0, 0] }, year: { value: '2,140', change: 18, tally: [3, 0, 0] } } },
  { name: 'Follow-up', metric: 'Answered within an hour', data: {
    today: { value: '6 of 9', change: -12, tally: [1, 1, 1] }, week: { value: '71%', change: -5, tally: [2, 1, 0] },
    month: { value: '78%', change: 6, tally: [2, 1, 0] }, year: { value: '74%', change: 11, tally: [2, 1, 0] } } },
];

const state = ([, watch, off]: [number, number, number]) => (off > 0 ? 'off' : watch > 1 ? 'watch' : 'on');

// A steady, invented trend line for each source and time frame.
const line = (seed: number, change: number) => {
  let x = seed * 9301 + 49297;
  const points: number[] = [];
  for (let i = 0; i < 22; i += 1) {
    x = (x * 233 + 71) % 1009;
    points.push(50 + (x / 1009 - 0.5) * 34 + (change / 60) * (i - 11) * 2.4);
  }
  const min = Math.min(...points); const max = Math.max(...points);
  return points.map((p, i) => `${(i / 21 * 100).toFixed(1)},${(28 - ((p - min) / (max - min || 1)) * 24).toFixed(1)}`).join(' ');
};

export function DataBoard() {
  const [frame, setFrame] = useState<Frame>('today');
  const now = frames.find((f) => f.id === frame)!;
  const index = frames.findIndex((f) => f.id === frame);
  return <div className="board">
    <div className="board-top">
      <div className="board-tabs" role="group" aria-label="Time frame">{frames.map((f) =>
        <button key={f.id} type="button" aria-pressed={frame === f.id} onClick={() => setFrame(f.id)}>{f.label}</button>)}</div>
      <p className="board-sample">Sample business. Every figure is invented.</p>
    </div>
    <p className="board-sees" aria-live="polite">{now.sees}</p>
    <div className="board-grid" aria-live="polite">{sources.map((source, n) => {
      const cell = source.data[frame]; const [on, watch, off] = cell.tally; const total = on + watch + off;
      return <div key={source.name} className={`board-cell is-${state(cell.tally)}`}>
        <b>{source.name}</b>
        <span className="board-metric">{source.metric}</span>
        <p className="board-value"><strong>{cell.value}</strong><i className={cell.change < 0 ? 'down' : 'up'}>{cell.change < 0 ? '▼' : '▲'} {Math.abs(cell.change)}%</i></p>
        <svg viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true"><polyline points={line(n * 7 + index + 1, cell.change)} /></svg>
        <div className="board-bar" aria-hidden="true"><i style={{ flex: on }} /><i className="w" style={{ flex: watch }} /><i className="o" style={{ flex: off }} /></div>
        <span className="board-tally">{on} on target · {watch} to watch · {off} off<span className="sr-only"> of {total} numbers, against {now.span}</span></span>
      </div>;
    })}</div>
    <div className="board-decision" aria-live="polite">
      <span>What to do</span>
      <p>{now.decision}</p>
      <dl><div><dt>Owner</dt><dd>{now.owner}</dd></div><div><dt>How sure</dt><dd>{now.sure}</dd></div></dl>
    </div>
  </div>;
}
