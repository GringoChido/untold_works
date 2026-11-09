import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { LabelRow } from '../../components/LabelRow';
import { Layout } from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';
import { EMAIL } from '../../site';

const projectContact = `mailto:${EMAIL}?subject=${encodeURIComponent('Artist or brand website project')}`;
const fulfillment = ['Choose products', 'Reserve stock', 'Verify payment', 'Confirm the order', 'Pack and label', 'Record carrier handoff', 'Send tracking'];

export const LalahHathaway = () => {
  usePageMeta({
    title: 'Lalah Hathaway: Artist Experience & Commerce | Untold.works',
    description:
      'Made in Chicago: an immersive artist website, newsletter migration and custom merchandise operations. Artist site live; public merchandise checkout awaiting launch.',
    path: '/work/lalah-hathaway',
  });

  return (
    <Layout>
      <Header crumbs={[{ label: 'Work', to: '/' }, { label: 'Websites', to: '/websites' }, { label: 'Lalah Hathaway' }]} />
      <main id="main" className="flex flex-col">
        <section className="pb-11 pt-12 md:pb-16 md:pt-16" aria-labelledby="lalah-title">
          <p className="lbl m-0 text-[13px]">Artist experience · Audience · Commerce</p>
          <h1 id="lalah-title" className="display m-0 mt-5 max-w-[1050px] text-[clamp(54px,7.2vw,108px)] leading-[0.9]">
            One room.<br />A whole world.
          </h1>
          <div className="mt-9 grid items-start gap-4 border-t border-current pt-5 md:grid-cols-[minmax(180px,0.38fr)_minmax(0,1fr)] md:gap-10">
            <span className="lbl text-[13px]">Lalah Hathaway / Made in Chicago / 2026</span>
            <p className="voice m-0 max-w-[850px] text-[clamp(23px,2.25vw,31px)] leading-[1.25]">
              I brought the album’s visual world into an interactive artist website, then connected audience signup, newsletter migration and the merchandise operations behind the experience.
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
            <span>The artist website is live</span>
            <a href="https://lalahhathaway.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              Explore the site ↗
            </a>
          </figcaption>
        </figure>

        <section className="py-16 md:py-20" aria-labelledby="lalah-challenge-title">
          <LabelRow left="The assignment" right="Creative idea · Working experience" />
          <div className="grid items-start gap-x-14 gap-y-8 pt-7 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <h2 id="lalah-challenge-title" className="name m-0 max-w-[540px] text-[clamp(36px,4vw,60px)] leading-[0.98]">
              Give the album a world fans can use.
            </h2>
            <div className="flex flex-col gap-5 text-[19px] leading-[1.55]">
              <p className="m-0">The team supplied the photography, artwork, listening-room concept, music, films and creative feedback. I developed the website around those materials, giving fans clear routes to listen, watch, explore, find a show and join the mailing list.</p>
              <p className="m-0">Replacing the previous website platform also meant carrying its practical services forward. The work expanded into newsletter migration, custom merchandise checkout, inventory controls, customer communications and staff fulfillment tools.</p>
            </div>
          </div>
          <p className="m-0 mt-8 border-t border-current pt-5 text-[16px] leading-[1.6]"><strong>My contribution:</strong> Creative development, interaction design, website development with AI, campaign integration, newsletter migration, ecommerce development and launch coordination. The artist team supplied the original media, room concept and creative feedback; I developed the digital treatment and implementation.</p>
          <div className="mt-9 grid gap-7 sm:grid-cols-3">
            <div className="border-t border-current pt-5"><p className="name m-0 text-[clamp(25px,2.6vw,36px)] leading-[1.05]">One connected experience</p><p className="mb-0 mt-3 text-[16px] leading-[1.5]">Music, films, tour information, audience signup and merchandise.</p></div>
            <div className="border-t border-current pt-5"><p className="name m-0 text-[clamp(25px,2.6vw,36px)] leading-[1.05]">3,233 contacts</p><p className="mb-0 mt-3 text-[16px] leading-[1.5]">Historically subscribed contacts imported into the new newsletter platform.</p></div>
            <div className="border-t border-current pt-5"><p className="name m-0 text-[clamp(25px,2.6vw,36px)] leading-[1.05]">Merchandise operations</p><p className="mb-0 mt-3 text-[16px] leading-[1.5]">Backend and staff tools deployed. Public vinyl and T-shirt checkout awaiting launch.</p></div>
          </div>
        </section>

        <section className="border-t border-current pb-16 pt-8 md:pb-20" aria-labelledby="lalah-direction-title">
          <LabelRow left="Creative development" right="The supplied photograph stays central" />
          <div className="grid items-start gap-x-14 gap-y-8 pt-7 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <h2 id="lalah-direction-title" className="name m-0 max-w-[540px] text-[clamp(36px,4vw,60px)] leading-[0.98]">
              The photograph became the interface.
            </h2>
            <div className="flex flex-col gap-5 text-[19px] leading-[1.55]">
              <p className="m-0">Records, books, the speaker and turntable became invitations to explore. Layered typography, subtle movement and amber interaction effects brought the room to life while preserving the supplied portrait and composition.</p>
              <p className="m-0">Client feedback shaped the lighting, navigation and final treatment. On mobile, a clear menu gives visitors access to every destination. Keyboard navigation, visible focus states, reduced-motion support and a pause control provide other ways through the experience.</p>
              <p className="m-0">I extended the visual language into vinyl and T-shirt mockups, social video cards and sharing artwork, adapting the supplied media and approved product references for each format.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-current pb-16 pt-8 md:pb-20" aria-labelledby="lalah-campaign-title">
          <LabelRow left="Campaign integration" right="Listen · Watch · Attend · Subscribe" />
          <div className="grid items-start gap-x-14 gap-y-8 pt-7 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <h2 id="lalah-campaign-title" className="name m-0 max-w-[540px] text-[clamp(36px,4vw,60px)] leading-[0.98]">
              Keep the story connected to the next action.
            </h2>
            <div className="flex flex-col gap-5 text-[19px] leading-[1.55]">
              <p className="m-0">The album leads the music experience, supported by listening links, its story, supplied films, the Chicago inspiration playlist and Lalah’s wider catalog. As the release progressed, I changed the shared album action from presave to “Listen to the album.”</p>
              <p className="m-0">Tour information connects to Bandsintown, with a saved schedule and ticket links when the live widget cannot load. Newsletter signup provides inline feedback and email confirmation. Search metadata and social sharing artwork carry the same campaign identity beyond the site.</p>
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
              <p className="m-0">I configured MailerLite, connected the custom signup form, authenticated the sending domain and tested the double-opt-in journey through delivery and confirmation.</p>
              <p className="m-0">The historical review covered 11 supplied files containing 5,466 unique email addresses. I reconciled duplicates and conflicting records, then imported 3,233 historically subscribed contacts. Unsubscribed, never-subscribed and unknown-status contacts stayed outside the active import.</p>
              <p className="m-0">The result was a consolidated mailing foundation that preserved the subscription information available in the original records.</p>
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
              <p className="m-0">I developed the product presentation, shopping bag and Stripe-hosted checkout for the vinyl and five T-shirt sizes. Server-controlled prices, one shipping charge per order and stock reservations connect the customer’s selections to available inventory.</p>
              <p className="m-0">Verified payments create order records, confirm the purchase to the customer and alert the team. The protected staff manager supports order review, inventory adjustments and tracking. A separate collaboration product links to its external seller.</p>
              <p className="m-0">The fulfillment process uses the team’s existing FedEx account. Staff record a created label first, then confirm carrier handoff before the system queues the customer’s tracking email.</p>
            </div>
          </div>
          <ol className="m-0 mt-9 grid list-none gap-x-7 p-0 sm:grid-cols-2 lg:grid-cols-4" aria-label="Merchandise fulfillment workflow">
            {fulfillment.map((step, index) => <li key={step} className="flex gap-4 border-t border-current py-4"><span className="lbl text-[12px]">{String(index + 1).padStart(2, '0')}</span><span className="text-[16px] leading-[1.4]">{step}</span></li>)}
          </ol>
        </section>

        <section className="border-t border-current pb-20 pt-8 md:pb-24" aria-labelledby="lalah-outcome-title">
          <LabelRow left="Delivery and handoff" right="Published experience · Prepared operations" />
          <div className="grid items-start gap-x-14 gap-y-8 pt-7 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <h2 id="lalah-outcome-title" className="name m-0 max-w-[540px] text-[clamp(36px,4vw,60px)] leading-[0.98]">
              A creative experience with a working handoff.
            </h2>
            <div className="flex flex-col gap-5 text-[19px] leading-[1.55]">
              <p className="m-0">I prepared the source, documentation and backups, coordinated the hosting transition with Prismatic, and verified the published site. Staff instructions and a practice environment support the merchandise handoff.</p>
              <p className="m-0">Merchandise verification included a Stripe sandbox purchase, inventory changes, cancellation handling, repeated payment notifications and actual test-email delivery. These checks covered the customer confirmation, staff alert and shipment message.</p>
              <p className="m-0"><strong>Current status:</strong> The artist website is live and the newsletter migration is complete. The merchandise backend and staff manager are deployed; public vinyl and T-shirt checkout remains closed pending final operational sign-off and launch checks.</p>
              <a href={projectContact} className="mt-2 inline-flex w-fit border-b border-current pb-1 text-[16px] font-semibold no-underline">Discuss an artist or brand project ↗</a>
            </div>
          </div>
        </section>
      </main>
      <HouseBar back={{ label: '← Websites', to: '/websites' }} next={{ label: 'Campaigns →', to: '/campaigns' }} />
      <Footer />
    </Layout>
  );
};
