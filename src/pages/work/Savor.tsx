import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { LabelRow } from '../../components/LabelRow';
import { Layout } from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';
import { tones } from '../../theme';

export const Savor = () => {
  usePageMeta({
    title: 'Savor, Untold.works',
    description: 'Website and content storytelling for Savor through IDW Studio, including work alongside its Chef Series team.',
    path: '/work/savor',
  });

  return (
    <Layout tone={tones.websites}>
      <Header crumbs={[{ label: 'Work', to: '/' }, { label: 'Savor' }]} />
      <main id="main" className="flex flex-col">
        <section className="grid items-end gap-10 pb-16 pt-16 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.75fr)] md:gap-20 md:pb-20 md:pt-24" aria-labelledby="savor-title">
          <div>
            <p className="lbl m-0 mb-7">Independent case / Website & content</p>
            <h1 id="savor-title" className="display m-0 text-[clamp(64px,8vw,126px)]">Savor</h1>
            <p className="chapter-statement m-0 mt-8 max-w-[790px] text-[clamp(32px,4vw,56px)] leading-[1.08]">Explain unfamiliar food technology through familiar food.</p>
          </div>
          <div className="border-t border-current pt-6">
            <p className="m-0 text-[21px] leading-[1.45]">Joshua contributed website and content storytelling for Savor through IDW Studio. The site starts with foods people know, then explains the company’s process and applications so visitors can evaluate an unfamiliar ingredient.</p>
          </div>
        </section>

        <figure className="m-0">
          <Img src="savor-site.jpg" alt="The live Savor home page introducing fats made from carbon" sizes="(min-width: 1440px) 1312px, 100vw" eager className="block aspect-[16/9] w-full object-cover object-top" />
          <figcaption className="lbl flex flex-wrap justify-between gap-3 border-b border-current py-4 text-[13px]">
            <span>Savor / live site</span><a href="https://www.savor.it/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Visit savor.it ↗</a>
          </figcaption>
        </figure>

        <section className="grid gap-12 py-20 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-20 md:py-28" aria-labelledby="savor-story-title">
          <div>
            <LabelRow left="The work" right="Site · story" />
            <h2 id="savor-story-title" className="name m-0 mt-8 max-w-[600px] text-[clamp(38px,4.5vw,66px)]">Start with something people know.</h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="voice m-0 max-w-[700px] text-[clamp(24px,2.6vw,35px)] leading-[1.28]">The site moves from what Savor makes to how it works, where it can be used and why the company exists.</p>
            <p className="m-0 max-w-[690px] text-[18px] leading-[1.55]">A visitor can begin with a culinary use, then explore process, mission and evidence at their own pace. Joshua’s credited scope is website, content and storytelling through IDW Studio.</p>
            <dl className="m-0 border-b border-current">
              <div className="grid gap-2 border-t border-current py-4 sm:grid-cols-[150px_minmax(0,1fr)]"><dt className="lbl">Client</dt><dd className="m-0">Savor</dd></div>
              <div className="grid gap-2 border-t border-current py-4 sm:grid-cols-[150px_minmax(0,1fr)]"><dt className="lbl">Joshua’s role</dt><dd className="m-0">Website and content storytelling</dd></div>
              <div className="grid gap-2 border-t border-current py-4 sm:grid-cols-[150px_minmax(0,1fr)]"><dt className="lbl">Engagement</dt><dd className="m-0">Through IDW Studio</dd></div>
              <div className="grid gap-2 border-t border-current py-4 sm:grid-cols-[150px_minmax(0,1fr)]"><dt className="lbl">Status</dt><dd className="m-0">Live website</dd></div>
            </dl>
          </div>
        </section>

        <section className="grid gap-10 pb-24 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16 md:pb-32" aria-labelledby="chef-title">
          <figure className="m-0">
            <Img src="savor-chef-series.jpg" alt="IDW Studio Chef Series frame showing a chef and food preparation" sizes="(min-width: 900px) 50vw, 100vw" className="block aspect-[4/3] w-full object-cover" />
            <figcaption className="lbl border-b border-current py-4 text-[13px]">Chef Series / IDW Studio production frame</figcaption>
          </figure>
          <div className="flex flex-col items-start gap-7">
            <LabelRow left="The wider story" right="Chef Series" />
            <h2 id="chef-title" className="name m-0 text-[clamp(38px,4.3vw,62px)]">Let the kitchen show the product.</h2>
            <p className="m-0 max-w-[650px] text-[19px] leading-[1.5]">The published series shows chefs using Savor in working kitchens at Atelier Crenn, SingleThread, ONE65 and Jane the Bakery. Preparations make the ingredient visible in real culinary work. Joshua contributed content and storytelling; IDW led the broader brief, production, social edits and post work.</p>
            <Link to="/work/savor-chef-series" className="text-link">Explore the Chef Series work <span aria-hidden="true">↗</span></Link>
            <a href="https://idw.studio/cs/savor" target="_blank" rel="noopener noreferrer" className="text-link">See IDW Studio’s case <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
      <HouseBar back={{ label: '← Selected work', to: '/' }} next={{ label: 'Next: Brand & product →', to: '/brand-and-product' }} />
      <Footer />
    </Layout>
  );
};
