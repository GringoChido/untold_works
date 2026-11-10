import { useEffect, useRef, useState } from 'react';
import './CollaboratorLogos.css';

const collaborators = [
  ['billiard-factory', 'Billiard Factory'],
  ['lalah-hathaway', 'Lalah Hathaway'],
  ['coca-cola-femsa', 'Coca-Cola FEMSA'],
  ['nba', 'NBA'],
  ['blue-note-entertainment-group', 'Blue Note Entertainment Group'],
  ['superfly', 'Superfly'],
  ['tekniplex', 'TekniPlex'],
  ['wnba', 'WNBA'],
  ['bonnaroo', 'Bonnaroo Music & Arts Festival'],
  ['noxguard', 'Noxguard'],
  ['derrick-hodge', 'Derrick Hodge'],
  ['lowepro', 'Lowepro'],
  ['outside-lands', 'Outside Lands Music & Arts Festival'],
  ['cl-bailey', 'The C.L. Bailey Co.'],
  ['howard-stern-show', 'The Howard Stern Show'],
  ['sacramento-kings', 'Sacramento Kings'],
  ['joby', 'JOBY'],
  ['second-son-productions', 'Second Son Productions'],
  ['velocity', 'Velocity'],
  ['chief-adjuah', 'Chief Adjuah'],
  ['norcal-cannabis', 'NorCal Cannabis Company'],
  ['black-radio-experience', 'The Black Radio Experience'],
  ['level-best', 'The Level Best'],
  ['color-of-noize', 'Color of Noize'],
  ['black-radio-production', 'Black Radio Production'],
  ['ingenia', 'Ingenia'],
];

export function CollaboratorLogos() {
  const list = useRef<HTMLUListElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const rail = list.current;
    if (!rail || paused) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    let dragging = false;
    let frame = 0;
    let lastTime = 0;
    let fraction = 0;

    function advance(time: number) {
      if (!rail) return;
      // Keep fractional movement so slow scrolling stays smooth on high-refresh screens.
      const elapsed = lastTime ? Math.min(time - lastTime, 64) : 0;
      lastTime = time;
      fraction += elapsed * 0.032;
      const pixels = Math.floor(fraction);
      if (pixels) {
        fraction -= pixels;
        const loopWidth = rail.scrollWidth / 2;
        rail.scrollLeft = (rail.scrollLeft + pixels) % loopWidth;
      }
      frame = requestAnimationFrame(advance);
    }

    function updatePlayback() {
      cancelAnimationFrame(frame);
      lastTime = 0;
      if (visible && !document.hidden && !motion.matches && !dragging) {
        frame = requestAnimationFrame(advance);
      }
    }
    function startDrag() { dragging = true; updatePlayback(); }
    function endDrag() { if (dragging) { dragging = false; updatePlayback(); } }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    });
    observer.observe(rail);
    document.addEventListener('visibilitychange', updatePlayback);
    motion.addEventListener('change', updatePlayback);
    rail.addEventListener('pointerdown', startDrag);
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener('visibilitychange', updatePlayback);
      motion.removeEventListener('change', updatePlayback);
      rail.removeEventListener('pointerdown', startDrag);
      window.removeEventListener('pointerup', endDrag);
      window.removeEventListener('pointercancel', endDrag);
    };
  }, [paused]);

  return (
    <section className="collaborator-logos" aria-labelledby="collaborator-title">
      <div className="collaborator-heading">
        <h2 id="collaborator-title" className="name">Clients &amp; project collaborators</h2>
        <button className="collaborator-playback" type="button" aria-controls="collaborator-list"
          aria-label={paused ? 'Resume logo scrolling' : 'Pause logo scrolling'}
          onClick={() => setPaused(!paused)}>{paused ? 'Resume' : 'Pause'}</button>
      </div>
      <ul id="collaborator-list" ref={list} aria-labelledby="collaborator-title" tabIndex={0}>
        {[false, true].map(duplicate => collaborators.map(([slug, name]) => (
          <li key={slug + duplicate} aria-hidden={duplicate || undefined}>
            <img src={'/images/collaborators/' + slug + '.webp'} alt={duplicate ? '' : name} title={name} width="480" height="200" loading="lazy" decoding="async" />
          </li>
        )))}
      </ul>
    </section>
  );
}
