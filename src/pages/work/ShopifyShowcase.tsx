import { useState } from 'react';
import './ShopifyShowcase.css';

const screens = [
  { image: 'catalog', title: 'Shop by size and style', caption: 'Shoppers can start with a look they like, then enter their room dimensions and cue length to see which tables fit.', alt: 'Billiard Factory’s Pool Tables catalog, with size and style categories above the product grid' },
  { image: 'room', title: 'Leave room for the shot', caption: 'With a 58-inch cue, a 15-by-18-foot room fits an 8-foot table. A 9-footer needs more space. The planner draws the clearance around each table.', alt: 'Room planner with a scaled pool table, cue clearance, room dimensions and table-size options' },
  { image: 'orbis', title: 'See the cost before adding to cart', caption: 'On the 8-foot Orbis, shoppers can compare standard and premium felt and see a delivery estimate for their ZIP code. Their selections carry through to checkout.', alt: 'Orbis product page showing felt options, premium pricing and local curbside and white-glove delivery estimates', fullCapture: '/images/bf-shopify/orbis.webp' },
];

export function ShopifyShowcase() {
  const [current, setCurrent] = useState(0);
  const screen = screens[current];
  const image = '/images/bf-shopify/' + screen.image;
  function step(direction: number) {
    setCurrent(index => (index + direction + screens.length) % screens.length);
  }
  return (
    <section className="shopify-case" aria-labelledby="project-title">
      <header className="shopify-case-head">
        <div>
          <p className="lbl">Billiard Factory · Shopify Plus</p>
          <h1 id="project-title" className="display">From showroom<br /><em>to checkout.</em></h1>
        </div>
        <p>When we reviewed Billiard Factory’s shopping data, the Estoris cart and checkout stood out as a problem. I led the storefront rebuild. Together, we redesigned the whole purchase flow, from choosing felt and delivery to paying through Shopify Plus.</p>
      </header>
      <section className="shopify-gallery" aria-label="Storefront walkthrough" aria-roledescription="carousel">
        <div className="shopify-screen" data-screen={screen.image}>
          <picture>
            <source media="(max-width: 640px)" srcSet={image + '-mobile.webp'} />
            <img src={image + '.webp'} alt={screen.alt} />
          </picture>
        </div>
        <div className="shopify-controls">
          <div className="shopify-caption" aria-live="polite" aria-atomic="true">
            <span className="shopify-count">0{current + 1} / 0{screens.length}</span>
            <div><h2 className="name">{screen.title}</h2><p>{screen.caption}</p></div>
          </div>
          <div className="shopify-arrows">
            <button type="button" aria-label="Previous storefront screen" onClick={() => step(-1)}>←</button>
            <button type="button" aria-label="Next storefront screen" onClick={() => step(1)}>→</button>
          </div>
        </div>
        <div className="shopify-links">
          <a className="text-link shopify-full-desktop" href={image + '.webp'} target="_blank" rel="noreferrer">Open full capture ↗</a>
          <a className="text-link shopify-full-mobile" href={screen.fullCapture ?? image + '-mobile.webp'} target="_blank" rel="noreferrer">Open full capture ↗</a>
          <a className="text-link" href="https://billiardfactory.com/" target="_blank" rel="noreferrer">Visit Billiard Factory ↗</a>
        </div>
      </section>
    </section>
  );
}
