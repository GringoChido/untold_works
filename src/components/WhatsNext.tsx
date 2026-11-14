import './WhatsNext.css';

const mail = 'mailto:joshua@untold.works?subject=Let%E2%80%99s%20discuss%20a%20project';

export const WhatsNext = () => (
  <section className="wn-close" aria-labelledby="wn-close-title">
    <div>
      <p className="lbl">Your next project</p>
      <h2 id="wn-close-title" className="name">What’s<br />next<span>?</span></h2>
      <p className="wn-close-q">What are you trying to make happen, and where does it get stuck today?</p>
      <a href={mail}>joshua@untold.works <span aria-hidden="true">↗</span></a>
    </div>
  </section>
);
