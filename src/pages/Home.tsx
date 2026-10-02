import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { Chip } from '../components/Chip';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LabelRow } from '../components/LabelRow';
import { Layout } from '../components/Layout';
import { categoryBySlug, layerChipClasses, type CardColor, type Visual } from '../data/categories';
import { usePageMeta } from '../hooks/usePageMeta';
import { FEATURE_SCALE } from '../site';

type HomeCard = { slug: string; index: string; name: string; color: CardColor; caption: string; visual: Visual; rows: string[] };

const cards: HomeCard[] = [
  {
    slug: 'platforms',
    index: '01',
    name: 'Platforms',
    color: 'ink',
    caption: 'The engine behind the story.',
    visual: {
      type: 'engine-room-diagram',
      nodes: ['Campaign calendar', 'Deliverable kits', 'Approval queue', 'Klaviyo email', 'Content Factory (built by Brady)', 'Facebook, Instagram'],
      tag: 'Billiard Factory',
    },
    rows: ['Marketing and operations platforms', 'Publishing engines', 'Dealer portals and AI concierge', 'Commerce and ERP'],
  },
  {
    slug: 'brand-and-product',
    index: '02',
    name: 'Brand and product',
    color: 'ochre',
    caption: 'The story you can hold.',
    visual: {
      type: 'image',
      src: 'spring-stuebner-plot.svg',
      alt: 'The Spring Stuebner store plan, 34 coded stations',
      tag: 'Spring Stuebner store plan',
      fit: 'contain',
    },
    rows: ['Retail store concepts', 'Brand systems and guidelines', 'Product design'],
  },
  {
    slug: 'websites',
    index: '03',
    name: 'Websites',
    color: 'burgundy',
    caption: 'Where people find it.',
    visual: { type: 'image', src: 'elena-home.jpg', alt: 'The home page of elenapinderhughes.com', tag: 'elenapinderhughes.com', fit: 'cover' },
    rows: ['Artist sites', 'Trade and retail sites', 'Hospitality sites'],
  },
  {
    slug: 'campaigns',
    index: '04',
    name: 'Campaigns',
    color: 'teal',
    caption: 'Where it gets told.',
    visual: {
      type: 'image',
      src: 'clb-factory-event-page.jpg',
      alt: 'The C.L. Bailey Factory Event landing page, a subway billboard in the hero',
      tag: 'C.L. Bailey Factory Event',
      fit: 'cover',
    },
    rows: ['Seasonal campaigns and events', 'Album releases and live music', 'Landing pages and lead capture', 'Film and social'],
  },
];

type Layer = { n: string; name: string; line: string; category: string | null };

const layers: Layer[] = [
  { n: '01', name: 'The story', line: 'What people see, hear and share.', category: 'campaigns' },
  { n: '02', name: 'Channels', line: 'Every place the story lives, on screen and in the store.', category: 'websites' },
  { n: '03', name: 'Publishing', line: 'The calendar and the engine that keep it going out every day.', category: 'platforms' },
  { n: '04', name: 'Brand', line: 'The rules that keep it sounding like one company.', category: 'brand-and-product' },
  { n: '05', name: 'Product and place', line: 'The things people buy, and the rooms they buy them in.', category: 'brand-and-product' },
  { n: '06', name: 'Operations', line: 'The commerce, inventory and CRM underneath every sale.', category: 'platforms' },
  { n: '07', name: 'Command', line: 'One place where every team plans, reviews and ships.', category: 'platforms' },
  { n: '08', name: 'Scale', line: 'Turns on at launch.', category: null },
];

const LayerRow = ({ layer, dimmed = false }: { layer: Layer; dimmed?: boolean }) => {
  const category = layer.category ? categoryBySlug(layer.category) : null;
  const dim = dimmed ? 'opacity-60' : '';
  return (
    <li className="grid grid-cols-[40px_minmax(0,1fr)] items-center gap-x-6 gap-y-2 border-t border-cream/35 py-4 md:grid-cols-[56px_230px_minmax(0,1fr)_200px]">
      <span className={`lbl text-[14px] ${dim}`}>{layer.n}</span>
      <span className={`name text-[26px] leading-none tracking-[-0.02em] ${dim}`}>{layer.name}</span>
      <span className={`voice col-start-2 text-[21px] leading-[1.3] md:col-auto ${dim}`}>{layer.line}</span>
      <span className="col-start-2 justify-self-start md:col-auto md:justify-self-end">
        {category ? (
          <Link to={`/${category.slug}`} className="no-underline">
            <Chip className={layerChipClasses[category.color]}>{category.name}</Chip>
          </Link>
        ) : (
          <Chip className="border-rule border-dashed border-vermilion text-vermilion">Flagged off</Chip>
        )}
      </span>
    </li>
  );
};

export const Home = () => {
  usePageMeta({
    title: 'Untold.works, the portfolio of Joshua Semolik',
    description:
      'The portfolio of Joshua Semolik. I work where product, strategy and storytelling meet, and I build the system that keeps the story running. Platforms, brand and product, websites and campaigns, with AI as the crew.',
    path: '/',
  });

  return (
    <Layout rail={`Untold.works, the portfolio of Joshua Semolik`}>
      <Header />
      <main id="main" className="flex flex-col">
        <section className="flex flex-col gap-10 pb-[72px] pt-16 md:pt-24" aria-labelledby="headline">
          <h1 id="headline" className="grid grid-cols-1 items-end gap-x-12 gap-y-7 md:grid-cols-[auto_auto] md:justify-between">
            <span className="flex flex-col gap-3.5">
              <span className="display text-[clamp(36px,8.2vw,118px)] leading-[0.84] md:whitespace-nowrap">Storytelling</span>
              <span className="voice text-[clamp(22px,2.5vw,36px)] leading-[1.1]">is the craft.</span>
            </span>
            <span className="flex flex-col gap-3.5">
              <span className="display text-[clamp(36px,8.2vw,118px)] leading-[0.84] md:whitespace-nowrap">AI</span>
              <span className="voice text-[clamp(22px,2.5vw,36px)] leading-[1.1]">is the crew.</span>
            </span>
          </h1>
          <p className="voice max-w-[900px] text-[clamp(20px,2vw,28px)] leading-[1.35]">
            I work where product, strategy and storytelling meet, and I build the system that keeps the story running.
          </p>
          <div className="lbl flex flex-wrap justify-between gap-6 border-t-rule border-ink pt-3.5 text-[17px]">
            <span>Brand, product and marketing since 1999</span>
            <span>Built with AI since 2024</span>
          </div>
        </section>

        <section id="work" className="flex scroll-mt-6 flex-col gap-6 pb-[104px]" aria-label="Work">
          <LabelRow left="Work" right="01–04" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {cards.map((card, i) => (
              <Card
                key={card.slug}
                size="home"
                index={card.index}
                name={card.name}
                color={card.color}
                caption={card.caption}
                visual={card.visual}
                rows={card.rows}
                to={`/${card.slug}`}
                barRight={`Open ${card.name} →`}
                eager={i < 2}
              />
            ))}
          </div>
        </section>

        <section id="system" className="pb-[104px]" aria-labelledby="system-headline">
          <div className="flex flex-col gap-7 bg-ink px-6 pb-10 pt-12 text-cream md:px-12">
            <LabelRow left="The support system" right="How the four fit together" className="border-cream/50" />
            <div className="flex max-w-[1000px] flex-col gap-[18px]">
              <h2 id="system-headline" className="name text-[clamp(36px,4.4vw,60px)] leading-[0.98]">
                A story is only as good as the system behind it.
              </h2>
              <p className="voice text-[clamp(19px,1.9vw,24px)] leading-[1.4]">
                Before a company can tell its story, it needs the plan, the brand, the product, the publishing, the channels and the
                operations underneath. At Billiard Factory we built all of it. I designed it and directed the build, with AI as the crew and
                the team in the loop.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="lbl py-2.5 text-[13px] text-cream/70">Seen by the customer ↑</div>
              <ol className="flex flex-col border-b border-cream/35">
                {layers.slice(0, 7).map((layer) => (
                  <LayerRow key={layer.n} layer={layer} />
                ))}
                <LayerRow layer={layers[7]} dimmed={!FEATURE_SCALE} />
              </ol>
              <div className="lbl py-2.5 text-[13px] text-cream/70">Never seen, always running ↓</div>
            </div>
          </div>
        </section>

        <section id="how" className="flex flex-col gap-7 pb-[104px]" aria-labelledby="how-headline">
          <LabelRow left="How it gets made" right="Claude · ChatGPT · Gemini · Higgsfield" />
          <div className="flex max-w-[1000px] flex-col gap-6 pt-2">
            <h2 id="how-headline" className="name text-[clamp(36px,4.6vw,64px)] leading-[0.98]">
              The tools keep changing. The story doesn’t.
            </h2>
            <p className="voice text-[clamp(20px,2vw,26px)] leading-[1.4]">
              For almost three decades I was the creative waiting on a developer. Not anymore. I started telling stories in broadcast in
              1999 and have switched tools every few years since. AI is the biggest switch yet: Claude, ChatGPT, Gemini and Higgsfield now
              write the code, render the rooms and ship the pages. None of them know why anyone should care. That part is still the job, and
              the team stays in the loop the whole way.
            </p>
            <Link to="/about" className="lbl house-underline self-start">
              About, clients and career →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
};
