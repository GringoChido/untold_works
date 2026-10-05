import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Img } from '../components/Img';
import { Layout } from '../components/Layout';
import { PortfolioFilm } from '../components/PortfolioFilm';
import { clBaileyFactoryFilm } from '../data/campaignMedia';
import { usePageMeta } from '../hooks/usePageMeta';
import { tones } from '../theme';

const films = [
  {
    id: 'creative-velocity-brady',
    kind: 'Velocity Pro / On-camera performance',
    title: 'At the table with Brady.',
    detail: 'Brady presents the Velocity Pro through an on-camera product demonstration. Performance, product detail and the edit carry the story.',
    src: '/video/velocity-pro-brady.mp4',
    mobileSrc: '/video/velocity-pro-brady-mobile.mp4',
    poster: '/images/velocity-pro-brady-poster.webp',
    width: 1280,
    height: 720,
    label: 'At the Table with Brady: Velocity Pro product demonstration',
    controlLabel: 'Velocity Pro product film with Brady',
    caption: 'Velocity Pro / On-camera talent: Brady',
    duration: '1:35',
    format: 'landscape',
    to: '/work/billiard-factory-and-c-l-bailey',
    action: 'See the Billiard Factory work',
  },
  {
    id: 'creative-velocity-ball-launch',
    kind: 'Velocity / Product concept film',
    title: 'A reveal at a different scale.',
    detail: 'Oversized billiard balls roll out of a shipping container. Scale, motion and sound turn a product reveal into an imagined world.',
    src: '/video/velocity-ball-launch.mp4',
    mobileSrc: '/video/velocity-ball-launch-mobile.mp4',
    poster: '/images/velocity-ball-launch-poster.webp',
    width: 720,
    height: 1280,
    label: 'Velocity billiard ball-set launch film with oversized balls rolling from a branded shipping container',
    controlLabel: 'Velocity ball-set launch film',
    caption: 'Velocity / Ball-set reveal',
    duration: '0:28',
    format: 'portrait',
    to: '/work/billiard-factory-and-c-l-bailey',
    action: 'See the Billiard Factory work',
  },
  {
    id: 'creative-cl-bailey-factory-event',
    kind: 'C.L. Bailey / AI campaign film',
    title: 'The Factory Event, out in the world.',
    detail: 'A complete campaign film made with AI, prepared for the October 16–31, 2026 Factory Event. The outdoor and transit advertising scenes are creative visualizations.',
    src: clBaileyFactoryFilm.src,
    mobileSrc: clBaileyFactoryFilm.mobileSrc,
    poster: clBaileyFactoryFilm.poster,
    width: clBaileyFactoryFilm.width,
    height: clBaileyFactoryFilm.height,
    label: clBaileyFactoryFilm.title,
    controlLabel: 'C.L. Bailey Factory Event AI campaign film',
    caption: 'C.L. Bailey Factory Event / Created with AI',
    duration: '1:05',
    format: 'wide',
    to: '/work/c-l-bailey-factory-event',
    action: 'Explore the campaign',
  },
] as const;

const images = [
  {
    id: 'mercer',
    src: 'bf-mercer-room.jpg',
    alt: 'AI room visualization with a pale wood pool table, black lounge chair and sculptural light in warm afternoon sun',
    kind: 'Billiard Factory / AI room study',
    title: 'Mercer / Quiet hours.',
    detail: 'An imagined room brings table, artwork, lighting and materials into one composition.',
    portrait: false,
    to: '/work/spring-stuebner-store',
    action: 'Explore the shoppable rooms',
  },
  {
    id: 'viking',
    src: 'bf-viking-room.jpg',
    alt: 'AI room visualization of a dining table set for brunch, with patterned wallpaper, exposed wood beams and a chandelier',
    kind: 'Billiard Factory / AI room study',
    title: 'Viking / Sunday brunch.',
    detail: 'A dining scene explores another way a game room can fit into daily life.',
    portrait: false,
    to: '/work/spring-stuebner-store',
    action: 'Explore the shoppable rooms',
  },
  {
    id: 'home-field',
    src: 'home-field-shot.jpg',
    alt: 'AI-created Home Field campaign scene of a player in a cap lining up a shot across a green pool table',
    kind: 'Home Field / AI campaign image',
    title: 'A moment around the table.',
    detail: 'Made with Higgsfield for Home Field: a campaign idea carried into a photographic scene.',
    portrait: false,
    to: '/work/home-field',
    action: 'Explore Home Field',
  },
  {
    id: 'lighting',
    src: 'bf-fall-light.webp',
    alt: 'AI-assisted seasonal product visualization of a warm rectangular chandelier over a wood pool table beside a blue dusk window',
    kind: 'Billiard Factory / AI-assisted product image',
    title: 'The light sets the room.',
    detail: 'Seasonal storefront imagery gives lighting and the pool table a shared setting.',
    portrait: true,
    to: '/work/billiard-factory-and-c-l-bailey',
    action: 'See the seasonal storefront work',
  },
] as const;

const process = [
  { number: '01', title: 'Brief.', detail: 'Start with the audience, product and story. Decide what the image or film needs to help someone see.' },
  { number: '02', title: 'Reference.', detail: 'Use product references and a clear visual direction to guide framing, light, materials and movement.' },
  { number: '03', title: 'Make.', detail: 'Direct the performance or develop images and motion with AI, then shape the sequence and sound.' },
  { number: '04', title: 'Review.', detail: 'Check product details, composition and pacing. Refine the work for the page, screen or campaign where it will appear.' },
] as const;

const connections = [
  { to: '/about#toolkit', title: 'The tools behind the work.', detail: 'How I use Higgsfield, ChatGPT and Claude Code in daily practice.' },
  { to: '/work/engine-room', title: 'From creative to campaign.', detail: 'The Marketing Engine connects briefs, assets, review and delivery.' },
  { to: '/work/billiard-factory-and-c-l-bailey', title: 'The work around the images.', detail: 'See the wider Billiard Factory brand, retail and commerce transformation.' },
] as const;

export const PhotographyAndVideo = () => {
  usePageMeta({
    title: 'Photography & Video — Human Direction and Applied AI | Untold.works',
    description: 'Explore a growing collection of product films, AI-made image studies and campaign creative, with the references, human direction and review behind the work.',
    path: '/photography-and-video',
  });

  return (
    <Layout tone={tones.close}>
      <Header crumbs={[{ label: 'Applied AI', to: '/#ai' }, { label: 'Photography & video' }]} />
      <main id="main" className="creative-collection">
        <section className="creative-collection-hero" aria-labelledby="creative-collection-title">
          <p className="lbl creative-collection-eyebrow">Creative practice / Human direction</p>
          <h1 id="creative-collection-title" className="display creative-collection-title">Photography<br />&amp; video.</h1>
          <div className="creative-collection-intro">
            <p className="voice creative-collection-statement">The idea, the image,<br />the way it moves.</p>
            <div className="creative-collection-summary">
              <p>A growing collection of product films, AI-made image studies and campaign creative. On-camera performance and imagined worlds share the same starting point: a clear story and the creative judgment to shape it.</p>
              <nav className="creative-collection-nav" aria-label="Explore photography and video">
                <a href="#films" className="text-link">Films <span aria-hidden="true">↓</span></a>
                <a href="#images" className="text-link">Images <span aria-hidden="true">↓</span></a>
                <a href="#process" className="text-link">The process <span aria-hidden="true">↓</span></a>
              </nav>
            </div>
          </div>
        </section>

        <section id="films" className="creative-collection-section" aria-labelledby="creative-collection-films-title">
          <div className="creative-collection-section-head">
            <div><p className="lbl">01 / In motion</p><h2 id="creative-collection-films-title" className="name">Direction you can watch.</h2></div>
            <p>Performance, product and imagination. Play each film with its original framing and sound.</p>
          </div>
          <div className="creative-collection-films">
            {films.map((film) => (
              <article key={film.id} className={`creative-collection-film${film.format === 'portrait' ? ' creative-collection-film--portrait' : ''}${film.format === 'wide' ? ' creative-collection-film--wide' : ''}`} aria-labelledby={`${film.id}-title`}>
                <div className="creative-collection-meta"><span className="lbl">{film.kind}</span><span>{film.duration}</span></div>
                <PortfolioFilm
                  id={film.id}
                  src={film.src}
                  mobileSrc={film.mobileSrc}
                  poster={film.poster}
                  width={film.width}
                  height={film.height}
                  label={film.label}
                  controlLabel={film.controlLabel}
                  caption={film.caption}
                  nativeControls
                  autoPlayWhenVisible={false}
                  className="creative-collection-player"
                />
                <h3 id={`${film.id}-title`} className="name creative-collection-item-title">{film.title}</h3>
                <p className="creative-collection-item-detail">{film.detail}</p>
                <Link to={film.to} className="text-link creative-collection-item-link">{film.action}<span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </section>

        <section id="images" className="creative-collection-section" aria-labelledby="creative-collection-images-title">
          <div className="creative-collection-section-head">
            <div><p className="lbl">02 / Still images</p><h2 id="creative-collection-images-title" className="name">Rooms, light and atmosphere.</h2></div>
            <p>Selected AI-made and AI-assisted imagery from room direction and campaign work.</p>
          </div>
          <div className="creative-collection-images">
            {images.map((item) => (
              <figure key={item.id} className={`creative-collection-image${item.portrait ? ' creative-collection-image--portrait' : ''}`}>
                <Img src={item.src} alt={item.alt} sizes="(max-width: 767px) 100vw, 50vw" className="creative-collection-image-media" />
                <figcaption className="creative-collection-image-caption">
                  <span className="lbl">{item.kind}</span>
                  <h3 className="name creative-collection-item-title">{item.title}</h3>
                  <p className="creative-collection-item-detail">{item.detail}</p>
                  <Link to={item.to} className="text-link creative-collection-item-link">{item.action}<span aria-hidden="true">↗</span></Link>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="process" className="creative-collection-section" aria-labelledby="creative-collection-process-title">
          <div className="creative-collection-section-head">
            <div><p className="lbl">03 / How it gets made</p><h2 id="creative-collection-process-title" className="name">A direction before a tool.</h2></div>
            <p>Years behind the lens shape how I work with AI: light, framing, composition and pacing still matter.</p>
          </div>
          <ol className="creative-collection-process">
            {process.map((step) => (
              <li key={step.number} className="creative-collection-step">
                <span className="lbl">{step.number}</span>
                <h3 className="name">{step.title}</h3>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
          <nav className="creative-collection-connections" aria-label="Explore the tools and connected work">
            {connections.map((item) => (
              <Link to={item.to} key={item.to}>
                <strong className="name">{item.title}</strong>
                <span>{item.detail}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
        </section>
      </main>
      <Footer />
    </Layout>
  );
};
