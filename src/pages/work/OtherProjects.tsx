import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { LabelRow } from '../../components/LabelRow';
import { Layout } from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';
import { tones } from '../../theme';

const featured = [
  {
    name: 'Noxguard',
    to: '/work/noxguard',
    image: 'noxguard-packaging.webp',
    alt: 'Noxguard branded cartons on a pallet',
    label: 'Agency collaboration',
    description: 'Joshua led rebrand, site, photo/video and marketing-system delivery within Ingenia’s wider team.',
  },
] as const;

const more = [
  { name: 'Casa Schuck operations dashboard', detail: 'Working hotel operations demo using sample data.', to: '/work/casa-schuck-ops-dashboard', status: 'Demo' },
  { name: "Ki'bok Coffee", detail: 'A live café site with English, Spanish and Japanese paths.', to: '/work/kibok-coffee', status: 'Live site' },
  { name: 'OMI lead intake', detail: 'Lead intake and routing connected to a CRM.', to: '/work/omi-lead-intake', status: 'Project record' },
] as const;

const archives = [
  { name: 'Brand & product', to: '/brand-and-product' },
  { name: 'Platforms', to: '/platforms' },
  { name: 'Websites', to: '/websites' },
  { name: 'Campaigns', to: '/campaigns' },
] as const;

export const OtherProjects = () => {
  usePageMeta({
    title: 'Other Projects — Joshua Semolik | Untold.works',
    description: 'Creative direction and hands-on AI application builds across independent assignments and agency collaborations, from brand storytelling to working digital tools.',
    path: '/work/other-projects',
  });
  return (
    <Layout tone={tones.websites}>
      <Header crumbs={[{ label: 'Selected work', to: '/#work' }, { label: 'Other projects' }]} />
      <main id="main" className="flex flex-col">
        <section className="grid gap-8 border-b border-current pb-16 pt-16 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.6fr)] md:items-end md:gap-16 md:pb-20 md:pt-24" aria-labelledby="other-title">
          <div>
            <p className="lbl m-0 mb-7">03 / Other projects</p>
            <h1 id="other-title" className="display m-0 text-[clamp(58px,7vw,112px)]">Other projects.</h1>
          </div>
          <p className="m-0 max-w-[550px] border-t border-current pt-5 text-[21px] leading-[1.45]">These assignments solve different audience problems: make a new ingredient understandable, route a lead or organize a bilingual visitor journey.</p>
        </section>

        <section className="grid gap-10 py-20 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-16 md:py-24" aria-labelledby="savor-feature-title">
          <figure className="m-0">
            <Link to="/work/savor" className="block overflow-hidden bg-ink" aria-label="Explore Savor">
              <Img src="savor-site.jpg" alt="The live Savor website introducing fats made from carbon" sizes="(min-width: 900px) 55vw, 100vw" eager className="block aspect-[16/10] w-full object-cover object-top" />
            </Link>
            <figcaption className="lbl border-b border-current py-4 text-[13px]">Savor / live website</figcaption>
          </figure>
          <div className="flex flex-col items-start gap-7">
            <LabelRow left="Featured agency collaboration" right="Site · Content" />
            <h2 id="savor-feature-title" className="name m-0 text-[clamp(42px,4.6vw,68px)]">Savor</h2>
            <p className="chapter-statement m-0 text-[clamp(28px,3vw,42px)] leading-[1.12]">Explain fats made from carbon through familiar food.</p>
            <p className="m-0 max-w-[640px] text-[19px] leading-[1.5]">Website and chef content help explain Savor’s unfamiliar production process through foods and kitchens people recognize. Joshua contributed storytelling through IDW Studio; the broader Chef Series production was IDW-led.</p>
            <Link to="/work/savor" className="text-link">Explore the Savor case <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="pb-20 md:pb-28" aria-labelledby="other-featured-title">
          <LabelRow left={<span id="other-featured-title">More selected work</span>} right="Team roles and live status" />
          <div className="mt-8 grid gap-8">
            {featured.map((item) => (
              <article key={item.to} className="grid gap-8 md:grid-cols-2 md:gap-16">
                <Link to={item.to} className="block overflow-hidden bg-ink" aria-label={'Explore ' + item.name}>
                  <Img src={item.image} alt={item.alt} sizes="(min-width: 900px) 45vw, 100vw" className="block aspect-[16/10] w-full object-cover" />
                </Link>
                <div>
                  <div className="lbl flex justify-between gap-5 border-b border-current py-4 text-[12px]"><span>{item.label}</span><span>{item.name}</span></div>
                  <h3 className="name m-0 mt-7 text-[clamp(30px,3.1vw,45px)]">{item.name}</h3>
                  <p className="m-0 mt-4 max-w-[610px] text-[18px] leading-[1.5]">{item.description}</p>
                  <Link to={item.to} className="text-link mt-7">Explore the work <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-t border-current py-20 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:gap-16 md:py-28" aria-labelledby="more-records-title">
          <div>
            <p className="lbl m-0">Focused builds and systems</p>
            <h2 id="more-records-title" className="name m-0 mt-7 text-[clamp(36px,4vw,60px)]">More project records.</h2>
            <p className="max-w-[490px] text-[18px] leading-[1.5]">Each record identifies the audience task and whether the result is live, a demo or a documented build.</p>
          </div>
          <div className="border-b border-current">
            {more.map((item) => (
              <Link key={item.to} to={item.to} className="grid gap-3 border-t border-current py-6 no-underline sm:grid-cols-[minmax(0,1fr)_minmax(150px,0.55fr)_20px]">
                <span className="flex flex-col gap-2"><strong className="name text-[27px]">{item.name}</strong><span className="text-[16px] leading-[1.4]">{item.detail}</span></span>
                <span className="lbl pt-1">{item.status}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="pb-24 md:pb-32" aria-labelledby="archive-title">
          <LabelRow left={<span id="archive-title">Browse by capability</span>} right="Full cross-project archive" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {archives.map((item) => <Link key={item.to} to={item.to} className="name flex justify-between gap-5 border border-current p-6 text-[28px] no-underline">{item.name}<span aria-hidden="true">↗</span></Link>)}
          </div>
        </section>
      </main>
      <HouseBar back={{ label: '← Selected work', to: '/#work' }} next={{ label: 'Next: About Joshua →', to: '/about' }} />
      <Footer />
    </Layout>
  );
};
