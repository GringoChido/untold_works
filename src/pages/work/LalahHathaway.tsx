import { useProjectEmail } from '../../components/ProjectInquiries';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { LabelRow } from '../../components/LabelRow';
import { Layout } from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';
export const LalahHathaway = () => {
  const projectContact = useProjectEmail();
  usePageMeta({
    title: 'Lalah Hathaway: Artist Experience & Commerce | Untold.works',
    description:
      'Made in Chicago: an immersive artist website, newsletter migration and custom merchandise operations. Artist site live; public merchandise checkout awaiting launch.',
    path: '/work/lalah-hathaway',
  });

  return (
    <Layout>
      <Header crumbs={[{ label: 'Work', to: '/' }, { label: 'Digital experiences', to: '/websites' }, { label: 'Lalah Hathaway' }]} />
      <main id="main" className="flex flex-col">
        <section className="pb-11 pt-12 md:pb-16 md:pt-16" aria-labelledby="lalah-title">
          <p className="lbl m-0 text-[13px]">Artist experience · Audience · Commerce</p>
          <h1 id="lalah-title" className="display m-0 mt-5 max-w-[1050px] text-[clamp(54px,7.2vw,108px)] leading-[0.9]">
            One room.<br />A whole world.
          </h1>
          <div className="mt-9 grid items-start gap-4 border-t border-current pt-5 md:grid-cols-[minmax(180px,0.38fr)_minmax(0,1fr)] md:gap-10">
            <span className="lbl text-[13px]">Lalah Hathaway / Made in Chicago / 2026</span>
            <p className="voice m-0 max-w-[850px] text-[clamp(23px,2.25vw,31px)] leading-[1.25]">
              Seven objects hidden in a portrait invite fans to explore Lalah Hathaway’s new album. A record, a speaker and a turntable each take you somewhere different.
            </p>
          </div>
        </section>

        <figure className="m-0">
          <div className="overflow-hidden bg-ink">
            <Img
              src="lalah-made-in-chicago-live.png"
              alt="The Made in Chicago website: Lalah Hathaway in a room lined with records, with the album title and interactive room navigation"
              sizes="(min-width: 1440px) 1312px, 100vw"
              eager
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="lbl flex flex-wrap items-center justify-between gap-4 border-b border-current py-4 text-[13px]">
            <span>The artist website is live</span>
            <a href="https://lalahhathaway.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              Explore the site ↗
            </a>
          </figcaption>
        </figure>

        <section className="border-t border-current pb-16 pt-8 md:pb-20" aria-labelledby="lalah-direction-title">
          <LabelRow left="Creative direction" right="Made in Chicago" />
          <div className="grid items-start gap-x-14 gap-y-8 pt-7 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <h2 id="lalah-direction-title" className="name m-0 max-w-[540px] text-[clamp(36px,4vw,60px)] leading-[0.98]">
              The photograph became the interface.
            </h2>
            <div className="flex flex-col gap-5 text-[19px] leading-[1.55]">
              <p className="m-0">The team brought the original media, room concept and creative feedback. My idea was to hide the navigation inside the photograph. I built the first version with AI in about five days, so we could try it together.</p>
              <p className="m-0">We refined the light and movement around each object. A mobile menu and keyboard controls give fans another way to find the music, films and live dates.</p>
              <p className="m-0">I extended the visual language into vinyl and T-shirt mockups, social video cards and sharing artwork, adapting the supplied media and approved product references for each format.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-current pb-16 pt-8 md:pb-20" aria-labelledby="lalah-audience-title">
          <LabelRow left="Audience migration" right="Existing relationships, carried forward" />
          <div className="grid items-start gap-x-14 gap-y-8 pt-7 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <h2 id="lalah-audience-title" className="name m-0 max-w-[540px] text-[clamp(36px,4vw,60px)] leading-[0.98]">
              Bring the existing audience with you.
            </h2>
            <div className="flex flex-col gap-5 text-[19px] leading-[1.55]">
              <p className="m-0">I moved 3,233 historically subscribed contacts to MailerLite and tested the new signup through email confirmation.</p>
              <details><summary className="cursor-pointer underline underline-offset-4">How I reconciled the audience records</summary><p className="mt-3">I checked 11 files containing 5,466 unique addresses and reconciled duplicates and conflicting records. Unsubscribed, never-subscribed and unknown-status contacts stayed outside the active import.</p></details>
            </div>
          </div>
        </section>

        <section className="border-t border-current pb-16 pt-8 md:pb-20" aria-labelledby="lalah-commerce-title">
          <LabelRow left="Merchandise development" right="Customer experience · Staff handoff" />
          <div className="grid items-start gap-x-14 gap-y-8 pt-7 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <h2 id="lalah-commerce-title" className="name m-0 max-w-[540px] text-[clamp(36px,4vw,60px)] leading-[0.98]">
              Build the process behind the purchase.
            </h2>
            <div className="flex flex-col gap-5 text-[19px] leading-[1.55]">
              <p className="m-0">I built the checkout for vinyl and T-shirts. The store reserves stock at checkout. When payment clears, the buyer gets a confirmation and the team gets the order.</p>
              <p className="m-0">Staff use a private order screen to pack the order, record the FedEx handoff and send tracking. I provided a practice environment and instructions for the team.</p>
              <p className="m-0">The artist site is live. Staff tools are deployed, and public vinyl and T-shirt checkout remains closed pending launch.</p>
            </div>
          </div>
          <div className="mt-8">
              <a href={projectContact} className="mt-2 inline-flex w-fit border-b border-current pb-1 text-[16px] font-semibold no-underline">Discuss an artist or brand project ↗</a>
          </div>
        </section>
      </main>
      <HouseBar back={{ label: '← Digital experiences', to: '/websites' }} next={{ label: 'Campaigns →', to: '/campaigns' }} />
      <Footer />
    </Layout>
  );
};
