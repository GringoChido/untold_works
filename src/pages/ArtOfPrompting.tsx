import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Img } from '../components/Img';
import { Layout } from '../components/Layout';
import { PromptAnatomy } from '../components/PromptAnatomy';
import { PortfolioFilm } from '../components/PortfolioFilm';
import { clBaileyFactoryFilm } from '../data/campaignMedia';
import { usePageMeta } from '../hooks/usePageMeta';
import { tones } from '../theme';

const supportingFilms = [
  {
    id: 'creative-velocity-brady',
    kind: 'Velocity Pro / On-camera performance',
    title: 'At the table with Brady.',
    detail: 'A real on-camera performance brings the product to life. Work with talent, product demonstration and editing informs the decisions I now write into a prompt.',
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
    detail: 'An imagined launch explores scale, anticipation and movement. Oversized billiard balls turn an everyday product into the center of a much larger scene.',
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
  { number: '01', title: 'Start with the idea.', output: 'Audience · Product · Story', detail: 'I begin with the audience, the product and the story. What should someone notice, feel or understand, and where will the finished asset live?' },
  { number: '02', title: 'Anchor it in the product.', output: 'References · Details · Proportions', detail: 'Product photographs, details, materials and proportions give the work its foundation. I collect the references that the finished image needs to respect.' },
  { number: '03', title: 'Write the image.', output: 'Prompt · Product image', detail: 'I describe the framing, camera position, light, surfaces and atmosphere. Specific choices in the prompt give an image a direction I can review.' },
  { number: '04', title: 'Build the scene.', output: 'Product image · Lifestyle image', detail: 'I inspect the result, adjust the prompt and make another pass. A product image becomes a reference for the room, setting or lifestyle moment around it.' },
  { number: '05', title: 'Give it movement.', output: 'Copy · Storyboard · Motion', detail: 'I develop the copy, storyboard, action and camera movement. A still image becomes a starting frame for a sequence, with pacing and continuity to work through.' },
  { number: '06', title: 'Make the final edit.', output: 'Edit · Sound · Channel versions', detail: 'I choose the takes, shape the sequence and work with sound. Then I adapt the finished piece into shorter cuts, crops and assets for a page, a campaign or social media.' },
] as const;

const campaignScenes = [
  { src: 'clb-ooh-newspaper.png', alt: 'A reader holding a newspaper with C.L. Bailey Factory Event advertising in a campaign mockup', caption: 'Campaign mockup / Newspaper' },
  { src: 'clb-ooh-celebration-la.png', alt: 'C.L. Bailey lifestyle campaign visual presented on a Los Angeles billboard mockup', caption: 'Campaign mockup / City billboard' },
  { src: 'clb-ooh-train-pair.png', alt: 'Paired C.L. Bailey Factory Event advertisements in a train interior mockup', caption: 'Campaign mockup / Transit' },
] as const;

const connections = [
  { to: '/about#toolkit', title: 'The tools behind the practice.', detail: 'How I use Higgsfield, ChatGPT and Claude Code to develop ideas and build the work around them.' },
  { to: '/work/engine-room', title: 'Carry it into the campaign.', detail: 'The Marketing Engine connects the brief, creative assets, review and delivery.' },
  { to: '/work/billiard-factory-and-c-l-bailey', title: 'See it in use.', detail: 'Explore the wider Billiard Factory brand, retail and commerce work.' },
] as const;

export const ArtOfPrompting = () => {
  usePageMeta({
    title: 'The Art of Prompting — Images and Motion | Untold.works',
    description: 'Joshua Semolik’s evolving practice of turning ideas into precise prompts, product images, lifestyle scenes, motion, finished films and campaign assets.',
    path: '/art-of-prompting',
  });

  return (
    <Layout tone={tones.close}>
      <Header crumbs={[{ label: 'Applied AI', to: '/#ai' }, { label: 'The art of prompting' }]} />
      <main id="main" className="creative-collection prompting-page">
        <section className="prompting-hero" aria-labelledby="prompting-title">
          <p className="lbl prompting-eyebrow">Creative practice / Image making with AI</p>
          <div className="prompting-hero-grid">
            <h1 id="prompting-title" className="display prompting-title">The art<br />of prompting.</h1>
            <div className="prompting-hero-copy">
              <p>I’m learning to bring my experience in photography, film and creative direction into the prompt. Light, framing, materials, performance and pacing become things I describe, test and refine. The more precise the direction, the closer the work gets to the idea.</p>
              <nav className="creative-collection-nav" aria-label="Explore the art of prompting">
                <a href="#films" className="text-link">The film <span aria-hidden="true">↓</span></a>
                <a href="#process" className="text-link">The process <span aria-hidden="true">↓</span></a>
                <a href="#images" className="text-link">Image studies <span aria-hidden="true">↓</span></a>
              </nav>
            </div>
          </div>
        </section>

        <section id="films" className="prompting-feature" aria-labelledby="prompting-film-title">
          <div className="creative-collection-meta"><span className="lbl">Featured film / C.L. Bailey</span><span>1:05</span></div>
          <PortfolioFilm id="creative-cl-bailey-factory-event" src={clBaileyFactoryFilm.src} mobileSrc={clBaileyFactoryFilm.mobileSrc} poster="/images/cl-bailey-waterfront-poster.jpg" width={clBaileyFactoryFilm.width} height={clBaileyFactoryFilm.height} label={clBaileyFactoryFilm.title} controlLabel="C.L. Bailey Factory Event AI campaign film" caption="C.L. Bailey Factory Event / Created with AI" nativeControls autoPlayWhenVisible={false} className="prompting-feature-player" />
          <div className="prompting-feature-copy">
            <div><p className="lbl">From a premise to a campaign world</p><h2 id="prompting-film-title" className="name">The Factory Event,<br />imagined.</h2></div>
            <div><p>“You keep putting it off. So it starts showing up everywhere.” I carried that idea through city streets, a newspaper, a train journey and the game room in a film created entirely with AI.</p><p>The film is prepared for the October 16–31, 2026 Factory Event. The outdoor and transit advertising scenes are creative visualizations.</p><Link to="/work/c-l-bailey-factory-event" className="text-link creative-collection-item-link">Explore the campaign <span aria-hidden="true">↗</span></Link></div>
          </div>
          <div className="prompting-scenes" aria-label="C.L. Bailey campaign mockups">
            {campaignScenes.map((scene) => <figure key={scene.src}><Img src={scene.src} alt={scene.alt} sizes="(max-width: 599px) 100vw, 33vw" /><figcaption className="lbl">{scene.caption}</figcaption></figure>)}
          </div>
        </section>

        <section id="process" className="creative-collection-section" aria-labelledby="prompting-process-title">
          <div className="prompting-practice-intro">
            <h2 id="prompting-process-title" className="name">From an idea to an image.<br />Then into motion.</h2>
            <div><p>A product image can become a lifestyle scene. That scene can become a moving sequence, then a finished film and a set of campaign assets. This is a growing record of that practice and what I’m learning along the way.</p><p>The prompt changes as I review the work. Each pass makes the product, the scene and the story more specific.</p></div>
          </div>
          <ol className="creative-collection-process prompting-process">
            {process.map((step) => <li key={step.number} className="creative-collection-step"><span className="lbl">{step.number}</span><h3 className="name">{step.title}</h3><p>{step.detail}</p><span className="prompting-step-output">{step.output}</span></li>)}
          </ol>
        </section>

        <section id="inside-the-prompt" className="creative-collection-section" aria-labelledby="prompting-anatomy-title">
          <div className="creative-collection-section-head"><div><p className="lbl">Inside the direction</p><h2 id="prompting-anatomy-title" className="name">What a precise prompt carries.</h2></div><p>The eye for an image becomes a set of choices I can put into words, test and improve.</p></div>
          <PromptAnatomy />
        </section>

        <section id="images" className="creative-collection-section" aria-labelledby="creative-collection-images-title">
          <div className="creative-collection-section-head"><div><p className="lbl">Image studies / Product and atmosphere</p><h2 id="creative-collection-images-title" className="name">From product to place.</h2></div><p>Selected AI-made and AI-assisted room studies and campaign scenes explore light, materials, composition and the life around a product.</p></div>
          <div className="creative-collection-images">
            {images.map((item) => <figure key={item.id} className={`creative-collection-image${item.portrait ? ' creative-collection-image--portrait' : ''}`}><Img src={item.src} alt={item.alt} sizes="(max-width: 767px) 100vw, 50vw" className="creative-collection-image-media" /><figcaption className="creative-collection-image-caption"><span className="lbl">{item.kind}</span><h3 className="name creative-collection-item-title">{item.title}</h3><p className="creative-collection-item-detail">{item.detail}</p><Link to={item.to} className="text-link creative-collection-item-link">{item.action}<span aria-hidden="true">↗</span></Link></figcaption></figure>)}
          </div>
        </section>

        <section id="more-films" className="creative-collection-section" aria-labelledby="prompting-more-films-title">
          <div className="creative-collection-section-head"><div><p className="lbl">More ways to tell the story</p><h2 id="prompting-more-films-title" className="name">Performance. Product. Possibility.</h2></div><p>On-camera product storytelling and an imagined launch bring different kinds of creative judgment to the work.</p></div>
          <div className="creative-collection-films">
            {supportingFilms.map((film) => <article key={film.id} className={`creative-collection-film${film.format === 'portrait' ? ' creative-collection-film--portrait' : ''}`} aria-labelledby={`${film.id}-title`}><div className="creative-collection-meta"><span className="lbl">{film.kind}</span><span>{film.duration}</span></div><PortfolioFilm id={film.id} src={film.src} mobileSrc={film.mobileSrc} poster={film.poster} width={film.width} height={film.height} label={film.label} controlLabel={film.controlLabel} caption={film.caption} nativeControls autoPlayWhenVisible={false} className="creative-collection-player" /><h3 id={`${film.id}-title`} className="name creative-collection-item-title">{film.title}</h3><p className="creative-collection-item-detail">{film.detail}</p><Link to={film.to} className="text-link creative-collection-item-link">{film.action}<span aria-hidden="true">↗</span></Link></article>)}
          </div>
        </section>

        <section className="creative-collection-section" aria-labelledby="prompting-delivery-title">
          <div className="creative-collection-section-head"><div><p className="lbl">Put the work to use</p><h2 id="prompting-delivery-title" className="name">An asset has somewhere to go.</h2></div><p>The finished work appears on a page, in shorter social cuts and in other campaign assets. The brief and the destination stay connected through the tools and workflow around the creative.</p></div>
          <nav className="creative-collection-connections" aria-label="Explore the tools and connected work">{connections.map((item) => <Link to={item.to} key={item.to}><strong className="name">{item.title}</strong><span>{item.detail}</span><span aria-hidden="true">↗</span></Link>)}</nav>
        </section>
      </main>
      <Footer />
    </Layout>
  );
};
