import { Chip } from '../../components/Chip';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { LabelRow } from '../../components/LabelRow';
import { Layout } from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';

const scope = [
  {
    number: '01',
    name: 'Brand',
    detail: 'I led the rebrand across packaged and bulk product touchpoints within Ingenia’s wider team.',
  },
  {
    number: '02',
    name: 'Website',
    detail: 'I delivered a website that explained the product and gave distributors and fleet buyers a clear public destination.',
  },
  {
    number: '03',
    name: 'Photo and video',
    detail: 'I directed photo and video work that showed the product, people and operation buyers would be asked to trust.',
  },
  {
    number: '04',
    name: 'Marketing systems',
    detail: 'I reorganized business and marketing processes so the team could support campaigns and the new brand consistently.',
  },
];

const gallery = [
  { src: 'noxguard-packaging.webp', alt: 'Noxguard DEF cartons with the brand mark across the packaging', caption: 'Packaging', width: 782, height: 750 },
  { src: 'noxguard-product.webp', alt: 'Noxguard automotive urea container with the new label', caption: 'Product', width: 1260, height: 680 },
  { src: 'noxguard-worker.webp', alt: 'Noxguard team member in a branded shirt and hard hat', caption: 'People', width: 1024, height: 1092 },
];

export const Noxguard = () => {
  usePageMeta({
    title: 'Noxguard, Untold.works',
    description:
      'Joshua Semolik led delivery of Noxguard’s rebrand, website, photo and video campaign, and marketing-system reorganization within Ingenia’s team.',
    path: '/work/noxguard',
  });

  return (
    <Layout>
      <Header crumbs={[{ label: 'Work', to: '/' }, { label: 'Brand and product', to: '/brand-and-product' }, { label: 'Noxguard' }]} />
      <main id="main" className="flex flex-col">
        <section className="mt-10 grid bg-ink text-cream md:min-h-[620px] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]" aria-labelledby="noxguard-title">
          <div className="flex min-w-0 flex-col justify-between gap-10 px-6 py-10 md:px-12 md:py-12">
            <div className="flex flex-wrap items-center gap-3.5">
              <span className="lbl">01 · Brand and product</span>
              <Chip className="border-rule border-cream text-[14px] tracking-[0.08em]">Agency collaboration</Chip>
            </div>
            <div className="flex flex-col gap-6">
              <h1 id="noxguard-title" className="display break-words text-[clamp(34px,4.4vw,68px)] leading-[0.92]">
                Noxguard
              </h1>
              <p className="voice max-w-[640px] text-[clamp(24px,2.7vw,34px)] leading-[1.25]">
                A rebrand that had to work from the pallet to the sales conversation.
              </p>
              <p className="max-w-[620px] text-[19px] leading-[1.5]">
                I delivered the Noxguard rebrand, website, photo and video campaign, and business reorganization supporting its marketing systems. I did that work within Ingenia’s wider agency team, which is credited for the overall strategy, design and build.
              </p>
            </div>
            <div className="lbl border-t-rule border-cream/50 pt-3 text-[14px] text-cream/80">
              Brand · Digital · Campaign · Systems
            </div>
          </div>
          <figure className="relative m-0 flex min-h-[340px] items-center bg-[#ededed] md:min-h-0">
            <Img
              src="noxguard-truck.jpg"
              alt="Noxguard branded DEF truck and trailer on a light background"
              sizes="(min-width: 768px) 55vw, 100vw"
              eager
              className="block h-auto w-full object-contain"
            />
            <figcaption className="lbl absolute bottom-0 left-0 bg-ink px-4 py-3 text-[13px] text-cream">
              Noxguard · brand in the field
            </figcaption>
          </figure>
        </section>

        <section className="flex flex-col gap-7 py-20 md:py-24" aria-labelledby="scope-title">
          <LabelRow left="The assignment" right="Four connected parts" />
          <div className="grid gap-x-14 gap-y-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
            <h2 id="scope-title" className="name max-w-[660px] text-[clamp(36px,4.8vw,64px)] leading-[0.98]">
              Make one technical product recognizable at every touchpoint.
            </h2>
            <p className="voice max-w-[520px] text-[22px] leading-[1.4]">
              Distributors and fleets encounter the product on pallets, containers, trucks and screens. The brand and campaign made those encounters consistent; the process work gave the team a way to keep producing and using the assets.
            </p>
          </div>
          <ol className="mt-4 grid border-b-rule border-ink md:grid-cols-2 md:gap-x-10">
            {scope.map((item) => (
              <li key={item.number} className="grid grid-cols-[48px_minmax(0,1fr)] gap-x-4 gap-y-2 border-t-rule border-ink py-7">
                <span className="lbl pt-1 text-[15px]">{item.number}</span>
                <div className="flex flex-col gap-3">
                  <h3 className="name text-[32px] leading-[1.05]">{item.name}</h3>
                  <p className="max-w-[480px] text-[18px] leading-[1.5]">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-y-rule border-ink py-16 md:py-20" aria-labelledby="noxguard-context-title">
          <span className="lbl text-[14px]">The brand in the field</span>
          <h2 id="noxguard-context-title" className="name mt-4 max-w-[900px] text-[clamp(30px,3.5vw,48px)] leading-[1]">A technical product, many points of contact.</h2>
          <div className="mt-8 grid items-start gap-7 border-t border-current pt-6 text-[19px] leading-[1.55] md:grid-cols-2 md:gap-14">
            <p className="m-0">
              Noxguard supplies diesel exhaust fluid to distributors and fleet customers in packaged and bulk forms. That makes the brand a
              working system: it has to be recognizable in a warehouse, on the road and during a product conversation, as well as online.
            </p>
            <p className="m-0">
              Packaging, labels and fleet livery made the product identifiable in the field. The website and photo and video campaign gave buyers a closer look at the people and operation behind it. I led delivery of these connected pieces within Ingenia’s team; no sales or awareness lift is claimed here.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-7 pb-20 md:pb-24" aria-label="Noxguard brand gallery">
          <LabelRow left="The identity in use" right="Packaging · Product · People" />
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((image) => (
              <figure key={image.src} className="m-0 flex flex-col gap-3">
                <div className="aspect-square overflow-hidden bg-[#ededed]">
                  <img
                    src={`/images/${image.src}`}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                    className={`block h-full w-full ${image.caption === 'Product' ? 'object-contain bg-[#001322]' : 'object-cover'}`}
                  />
                </div>
                <figcaption className="lbl border-t-rule border-ink pt-3 text-[14px]">{`Noxguard / ${image.caption}`}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <HouseBar back={{ label: '← Brand', to: '/brand-and-product' }} next={{ label: 'Platforms →', to: '/platforms' }} />
      <Footer />
    </Layout>
  );
};
