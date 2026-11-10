import { LabelRow } from './LabelRow';
import './IngeniaDiagrams.css';

const destinations = [
  { audience: 'Journalists', destination: 'Media Center', task: 'Find company news' },
  { audience: 'Shareholders', destination: 'Investors', task: 'Read financial results' },
  { audience: 'Job seekers', destination: 'Work with us', task: 'Explore open roles' },
];

export function FemsaNavigation() {
  return (
    <figure id="project-diagram" className="ingenia-diagram">
      <figcaption><LabelRow left="Coca-Cola FEMSA" right="Navigation map" /></figcaption>
      <div className="navigation-tree">
        <div className="navigation-root">
          <strong className="display">Corporate <br />navigation</strong>
          <span>One publishing system in MODX</span>
        </div>
        <ul>
          {destinations.map(({ audience, destination, task }) => (
            <li key={destination}>
              <div><span className="lbl">{audience}</span><strong className="name">{destination}</strong></div>
              <span className="navigation-task">{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}

const stages = [
  {
    title: 'Request form', caption: 'The rep enters their contact details.',
    drawing: <><path d="M36 7h66l18 18v60H36z" fill="var(--paper)" stroke="currentColor" strokeWidth="3" /><path d="M102 7v18h18" fill="none" stroke="currentColor" strokeWidth="3" /><path d="M48 26h32" stroke="currentColor" strokeWidth="6" /><path d="M48 45h58M48 58h58M48 71h38" stroke="currentColor" strokeWidth="2" /><path d="M90 68h16v7H90z" fill="var(--orange)" /></>,
  },
  {
    title: 'Branded card', caption: 'Their details go into a template managed by marketing.',
    drawing: <><path d="M9 18h132v64H9z" fill="currentColor" /><circle cx="37" cy="43" r="9" fill="var(--paper)" /><path d="M21 66a16 16 0 0 1 32 0" fill="var(--paper)" /><path d="M65 37h54M65 48h40" stroke="var(--paper)" strokeWidth="4" /><path d="M65 64h25" stroke="var(--orange)" strokeWidth="5" /></>,
  },
  {
    title: 'QR code', caption: 'A scan from a phone or a printed sign opens the card.',
    drawing: <><path d="M30 27V9h18m55 0h17v18m0 40v17h-17m-55 0H30V67" fill="none" stroke="var(--orange)" strokeWidth="4" /><g fill="none" stroke="currentColor" strokeWidth="4"><path d="M43 21h19v19H43zM86 21h19v19H86zM43 55h19v19H43z" /></g><path fill="currentColor" d="M49 27h7v7h-7zM92 27h7v7h-7zM49 61h7v7h-7zM69 21h8v13h-8zM67 40h14v8H67zM43 45h11v5H43zM69 54h8v13h-8zM77 68h13v7H77zM82 48h8v11h-8zM90 56h15v7H90zM99 66h6v9h-6z" /></>,
  },
  {
    title: 'Wallet pass', caption: 'The rep can keep the pass in Apple Wallet or Google Wallet.',
    drawing: <><rect x="49" y="3" width="54" height="85" rx="7" fill="currentColor" /><rect x="53" y="10" width="46" height="70" rx="3" fill="var(--paper)" /><path d="M57 32h38v24H57z" fill="var(--orange)" /><path d="M57 40h38v25H57z" fill="currentColor" /><path d="M62 48h20m-20 7h13" stroke="var(--paper)" strokeWidth="3" /><path d="M69 83h14" stroke="var(--paper)" strokeWidth="2" /></>,
  },
];

export function TekniPlexCardFlow() {
  return (
    <figure id="project-diagram" className="ingenia-diagram">
      <figcaption><LabelRow left="TekniPlex" right="Digital card workflow" /></figcaption>
      <ol className="card-workflow">
        {stages.map(({ title, caption, drawing }) => (
          <li key={title}>
            <div className="workflow-drawing"><svg viewBox="0 0 150 92" aria-hidden="true" focusable="false">{drawing}</svg></div>
            <strong className="name">{title}</strong>
            <p>{caption}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
