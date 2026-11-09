import { useEffect, useRef, useState } from 'react';
import './ConsultingOpening.css';

const areas = [
  { name: 'Brand & story', line: 'Give your idea a voice of its own.', image: 'film-edit', alt: 'A photographer compares negatives through a loupe.' },
  { name: 'Experiences', line: 'Bring your brand into the places people use it.', image: 'street', alt: 'Two people look at a phone together on a city street.' },
  { name: 'AI & operations', line: 'Give your team more time for the work that matters.', image: 'workstation', alt: 'An editor adjusts an image on a laptop.' },
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
          <p className="lbl">Independent AI creative studio</p>
          <h1 id="business-title">What are you<br />trying to make<br /><em>happen?</em></h1>
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
