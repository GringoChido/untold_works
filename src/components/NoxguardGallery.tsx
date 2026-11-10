const gallery = [
  { src: 'noxguard-packaging.webp', alt: 'Packaging mockup of Noxguard DEF cartons with the brand mark', caption: 'Packaging concept', width: 782, height: 750 },
  { src: 'noxguard-product.webp', alt: 'Label mockup on a Noxguard automotive urea container', caption: 'Product label concept', width: 1260, height: 680 },
  { src: 'noxguard-worker.webp', alt: 'Noxguard team member in a branded shirt and hard hat', caption: 'People', width: 1024, height: 1092 },
];

export const NoxguardGallery = () => (
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
            className={`block h-full w-full ${image.caption === 'Product label concept' ? 'object-contain bg-[#001322]' : 'object-cover'}`}
          />
        </div>
        <figcaption className="lbl border-t-rule border-ink pt-3 text-[14px]">{`Noxguard / ${image.caption}`}</figcaption>
      </figure>
    ))}
  </div>
);
