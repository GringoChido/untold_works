import { useEffect, useRef, useState } from 'react';
import './ConsultingOpening.css';

const areas = [
  { name: 'Brand & story', line: 'Make it easy to understand what you sell.', image: 'film-edit', alt: 'A photographer compares negatives through a loupe.' },
  { name: 'Experiences', line: 'Help someone find your café, choose a product or book a visit.', image: 'street', alt: 'Two people look at a phone together on a city street.' },
  { name: 'AI & operations', line: 'Get each inquiry to someone who can follow up.', image: 'workstation', alt: 'An editor adjusts an image on a laptop.' },
];

export function ConsultingOpening() {
  const [selected, setSelected] = useState(0);
  const track = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function update() {
      if (!track.current || !panel.current) return;
      const distance = track.current.offsetHeight - panel.current.offsetHeight;
      if (distance <= 0) return;
      const progress = Math.min(1, Math.max(0, -track.current.getBoundingClientRect().top / distance));
      setSelected(Math.round(progress * (areas.length - 1)));
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  function choose(index: number) {
    if (!track.current || !panel.current) return;
    setSelected(index);
    const distance = track.current.offsetHeight - panel.current.offsetHeight;
    if (distance > 0) {
      const top = window.scrollY + track.current.getBoundingClientRect().top;
      window.scrollTo({ top: top + distance * index / (areas.length - 1), behavior: 'instant' });
    }
  }

  return <section className="consulting-track" ref={track} aria-labelledby="business-title">
    <div className="consulting-panel" ref={panel}>
      <div className="consulting-opening">
        <div>
          <p className="lbl">Creative &amp; AI for small businesses</p>
          <h1 id="business-title">Help customers<br />take the <em>next step.</em></h1>
          <p className="consulting-caption" aria-live="polite">{areas[selected].line}</p>
        </div>
        <div className="consulting-print">
          {areas.map((area, i) => <img key={area.image} hidden={selected !== i} src={'/images/consulting/' + area.image + '.jpg'} alt={area.alt} />)}
        </div>
      </div>
      <div className="consulting-rail" role="group" aria-label="Explore Untold’s work">
        {areas.map((area, index) => <button key={area.name} type="button" aria-pressed={selected === index} onClick={() => choose(index)}>{area.name}</button>)}
      </div>
    </div>
  </section>;
}
