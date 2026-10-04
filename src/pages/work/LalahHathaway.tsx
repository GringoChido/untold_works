import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { LabelRow } from '../../components/LabelRow';
import { Layout } from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';
import { tones } from '../../theme';

const destinations = ['Music', 'Videos', 'Tour', 'Merch', 'Bio', 'Socials', 'Contact'];

export const LalahHathaway = () => {
  usePageMeta({
    title: 'Lalah Hathaway — Made in Chicago | Untold.works',
    description:
      'An interactive artist website for Lalah Hathaway, built with AI from a supplied main image, video content and music. Seven room objects open the Made in Chicago experience.',
    path: '/work/lalah-hathaway',
  });

  return (
    <Layout tone={tones.websites}>
      <Header crumbs={[{ label: 'Work', to: '/' }, { label: 'Websites', to: '/websites' }, { label: 'Lalah Hathaway' }]} />
      <main id="main" className="flex flex-col">
        <section className="pb-11 pt-12 md:pb-16 md:pt-16" aria-labelledby="lalah-title">
          <p className="lbl m-0 text-[13px]">03 / Websites · Built with AI</p>
          <h1 id="lalah-title" className="display m-0 mt-5 max-w-[1050px] text-[clamp(54px,7.2vw,108px)] leading-[0.9]">
            One room.<br />A whole world.
          </h1>
          <div className="mt-9 grid items-start gap-4 border-t border-current pt-5 md:grid-cols-[minmax(180px,0.38fr)_minmax(0,1fr)] md:gap-10">
            <span className="lbl text-[13px]">Lalah Hathaway / Made in Chicago / 2026</span>
            <p className="voice m-0 max-w-[850px] text-[clamp(23px,2.25vw,31px)] leading-[1.25]">
              I built an interactive artist site with AI around supplied photography, video and music, giving seven parts of Lalah’s work one discoverable destination.
            </p>
          </div>
        </section>

        <figure className="m-0">
          <div className="overflow-hidden bg-ink">
            <Img
              src="lalah-made-in-chicago.jpg"
              alt="The Made in Chicago website: Lalah Hathaway in a room lined with records, with the album title and interactive room navigation"
              sizes="(min-width: 1440px) 1312px, 100vw"
              eager
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="lbl flex flex-wrap items-center justify-between gap-4 border-b border-current py-4 text-[13px]">
            <span>The live experience / Lalah Hathaway</span>
            <a href="https://lalahhathaway.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              Explore the site ↗
            </a>
          </figcaption>
        </figure>

        <section className="pb-20 pt-20 md:pb-24 md:pt-24" aria-labelledby="lalah-story-title">
          <LabelRow left="The build" right="Image · Video · Music" />
          <div className="grid items-start gap-x-14 gap-y-8 pt-7 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <h2 id="lalah-story-title" className="name m-0 max-w-[540px] text-[clamp(39px,4.3vw,66px)] leading-[0.98]">
              The room is the navigation.
            </h2>
            <p className="voice m-0 max-w-[690px] text-[clamp(25px,2.7vw,37px)] leading-[1.24]">
              I started with the main image, video content and music, then used AI to build the interactive Made in Chicago experience around them.
            </p>
          </div>
          <p className="m-0 mt-8 max-w-[980px] border-t border-current pt-5 text-[19px] leading-[1.55]">
            Seven objects open music, videos, tour, merch, biography, socials and contact. Fans can move from the visual world to listening, a show, a purchase or a direct connection without leaving the artist’s own site.
          </p>
        </section>

        <section className="border-t border-current pb-20 pt-8 md:pb-24" aria-labelledby="lalah-direction-title">
          <LabelRow left="Creative direction" right="The supplied image stays central" />
          <div className="grid items-start gap-x-14 gap-y-8 pt-7 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <h2 id="lalah-direction-title" className="name m-0 max-w-[540px] text-[clamp(36px,4vw,60px)] leading-[0.98]">
              The photograph became the interface.
            </h2>
            <p className="m-0 max-w-[660px] text-[19px] leading-[1.55]">
              The room is the supplied main image, kept intact. I built the title in layers of type and the original photo pixels, then mapped interactive areas to objects already in the scene. Subtle pointer movement adds depth without replacing the room.
            </p>
          </div>
          <p className="m-0 mt-8 max-w-[980px] border-t border-current pt-5 text-[19px] leading-[1.55]">
            Album actions open a Listen and Story panel with official music links. The video starts only when a visitor chooses to play it. Closing the panel returns keyboard focus to the action that opened it.
          </p>
        </section>

        <section className="flex flex-col gap-10 pb-24 md:pb-32" aria-labelledby="lalah-interaction-title">
          <LabelRow left={<span id="lalah-interaction-title">How it works</span>} right="One scene · Seven destinations" />
          <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-20">
            <div className="flex flex-col gap-7">
              <ol className="m-0 grid list-none grid-cols-2 gap-x-8 border-b border-current p-0 sm:grid-cols-3">
                {destinations.map((destination, index) => (
                  <li key={destination} className="flex items-baseline gap-4 border-t border-current py-4">
                    <span className="lbl text-[12px]">{String(index + 1).padStart(2, '0')}</span>
                    <span className="name text-[clamp(19px,2vw,28px)] leading-none">{destination}</span>
                  </li>
                ))}
              </ol>
              <p className="m-0 max-w-[620px] text-[17px] leading-[1.5]">
                Each destination starts from an object already in the supplied photograph. One visual asset becomes a navigational system, while the artist’s official music and actions stay easy to find.
              </p>
            </div>
            <div className="border-t border-current pt-5">
              <span className="lbl text-[13px]">Designed for every way in</span>
              <p className="voice mt-6 max-w-[470px] text-[clamp(23px,2.5vw,32px)] leading-[1.3]">
                Hover and keyboard focus light up the objects. On touch screens, the glows stay visible. A pause control and reduced-motion setting keep the room comfortable to explore.
              </p>
              <a href="https://lalahhathaway.com" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex border-b border-current pb-1 text-[16px] font-semibold no-underline">
                Visit lalahhathaway.com ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <HouseBar back={{ label: '← Websites', to: '/websites' }} next={{ label: 'Campaigns →', to: '/campaigns' }} />
      <Footer />
    </Layout>
  );
};
