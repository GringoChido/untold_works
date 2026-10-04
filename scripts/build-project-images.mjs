// Build responsive images from project source files kept in this repository.
import sharp from 'sharp';
import { mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');
const destination = join(root, 'public/images');
const manifestPath = join(root, 'src/data/images.json');
const images = [
  ['assets/platforms/marketing-engine-calendar.png', 'marketing-engine-calendar', 'marketing-engine-calendar.png'],
  ['assets/platforms/marketing-engine-overview.png', 'marketing-engine-overview', 'marketing-engine-overview.png'],
  ['assets/platforms/marketing-engine-home-field-assets.png', 'marketing-engine-home-field-assets', 'marketing-engine-home-field-assets.png'],
  ['assets/platforms/marketing-engine-home-field-briefs.png', 'marketing-engine-home-field-briefs', 'marketing-engine-home-field-briefs.png'],
  ['assets/platforms/marketing-engine-home-field-social.png', 'marketing-engine-home-field-social', 'marketing-engine-home-field-social.png'],
  ['assets/campaigns/cl-bailey-factory-event-still.jpg', 'cl-bailey-factory-event-still', 'cl-bailey-factory-event-still.jpg'],
  ['assets/campaigns/clb-ooh-celebration-la.png', 'clb-ooh-celebration-la', 'clb-ooh-celebration-la.png'],
  ['assets/campaigns/clb-ooh-train-pair.png', 'clb-ooh-train-pair', 'clb-ooh-train-pair.png'],
  ['assets/campaigns/clb-ooh-newspaper.png', 'clb-ooh-newspaper', 'clb-ooh-newspaper.png'],
  ['assets/music/black-radio-experience-stage-clean.png', 'black-radio-experience-stage-clean', 'black-radio-experience-stage-clean.png'],
  ['assets/music/robtober-2026-poster-clean.png', 'robtober-2026-poster-clean', 'robtober-2026-poster-clean.png'],
  ['assets/music/chief-adjuah-live.jpg', 'chief-adjuah-live', 'chief-adjuah-live.jpg'],
  ['assets/music/glasper-london-portrait.jpg', 'glasper-london-portrait', 'glasper-london-portrait.jpg'],
  ['assets/music/blue-note-london-arrivals.jpg', 'blue-note-london-arrivals', 'blue-note-london-arrivals.jpg'],
  ['assets/music/blue-note-london-marquee.jpg', 'blue-note-london-marquee', 'blue-note-london-marquee.jpg'],
  ['assets/music/blue-note-london-opening.jpg', 'blue-note-london-opening', 'blue-note-london-opening.jpg'],
  ['assets/music/blue-note-la-band.jpg', 'blue-note-la-band', 'blue-note-la-band.jpg'],
  ['assets/music/blue-note-la-keys.jpg', 'blue-note-la-keys', 'blue-note-la-keys.jpg'],
  ['assets/music/blue-note-la-lounge.jpg', 'blue-note-la-lounge', 'blue-note-la-lounge.jpg'],
  ['assets/music/blue-note-la-glasper.jpg', 'blue-note-la-glasper', 'blue-note-la-glasper.jpg'],
  ['assets/music/glasper-r-r-now-still.jpg', 'glasper-r-r-now-still', 'glasper-r-r-now-still.jpg'],
  ['assets/grfp/grfp-home-live.png', 'grfp-home-live', 'grfp-home-live.png'],
  ['assets/home/untold-human-direction-tablet.png', 'untold-human-direction-tablet', 'untold-human-direction-tablet.png'],
  ['assets/home/untold-downtown-hero-clear-street.png', 'untold-downtown-hero-clear-street', 'untold-downtown-hero-clear-street.png'],
  ['assets/bf-web/bf-fall-opener.webp', 'bf-fall-opener', 'bf-fall-opener.webp'],
  ['assets/bf-web/bf-fall-tunbridge.webp', 'bf-fall-tunbridge', 'bf-fall-tunbridge.webp'],
  ['assets/bf-web/bf-fall-light.webp', 'bf-fall-light', 'bf-fall-light.webp'],
  ['assets/bf-web/bf-fall-rug.webp', 'bf-fall-rug', 'bf-fall-rug.webp'],
  ['assets/bf-web/bf-fall-wall.webp', 'bf-fall-wall', 'bf-fall-wall.webp'],
  ['assets/home/untold-idea-form.png', 'untold-idea-form', 'untold-idea-form.png'],
  ['assets/home/savor-butter.webp', 'savor-butter', 'savor-butter.webp'],
  ['assets/home/bf-mercer-room.jpg', 'bf-mercer-room', 'bf-mercer-room.jpg'],
  ['assets/home/bf-viking-room.jpg', 'bf-viking-room', 'bf-viking-room.jpg'],
  ['assets/home/glasper-blue-note-london.jpg', 'glasper-blue-note-london', 'glasper-blue-note-london.jpg'],
  ['assets/home/savor-plated-dish.webp', 'savor-plated-dish', 'savor-plated-dish.webp'],
  ['assets/tierra/00-cover.png', 'tierra-cover'],
  ['assets/tierra/01-one-build-three-cues.png', 'tierra-line'],
  ['assets/tierra/cascabel-hero.png', 'tierra-cascabel'],
  ['assets/tierra/brasa-hero.png', 'tierra-brasa'],
  ['assets/tierra/cauce-hero.png', 'tierra-cauce'],
  ['assets/campaigns/preferred-customer-event.png', 'preferred-customer-event'],
  ['assets/platforms/casa-schuck-dashboard-demo.png', 'casa-schuck-dashboard-demo'],
  ['assets/platforms/engine-room-studio.png', 'engine-room-studio'],
  ['assets/platforms/engine-room-studio-artwork.png', 'engine-room-studio-artwork'],
  ['assets/campaigns/season-opener-artwork.png', 'season-opener-artwork'],
  ['assets/campaigns/messes-happen-production-frame.jpg', 'messes-happen-production-frame'],
  ['assets/campaigns/glasper-selected-cover-art.png', 'glasper-selected-cover-art'],
  ['assets/campaigns/glasper-let-go-cover.jpg', 'glasper-let-go-cover'],
  ['assets/campaigns/glasper-code-derivation-cover.jpg', 'glasper-code-derivation-cover'],
  ['assets/concepts/content-factory-concept.png', 'content-factory-concept'],
  ['assets/concepts/off-storis-concept.png', 'off-storis-concept'],
  ['assets/concepts/voztre-concept.png', 'voztre-concept'],
  ['assets/concepts/village-tenders-concept.png', 'village-tenders-concept'],
  ['assets/concepts/release-films-concept.png', 'release-films-concept'],
  ['assets/concepts/blue-note-la-concept.png', 'blue-note-la-concept'],
  ['assets/spring-gallery/collections-live.jpg', 'spring-gallery-collections-live', 'spring-gallery-collections-live.jpg'],
  ['assets/spring-gallery/skylar-pit-lane-live.jpg', 'spring-gallery-skylar-live', 'spring-gallery-skylar-live.jpg'],
];

await mkdir(destination, { recursive: true });

// Crop the existing Studio screenshot to its actual top work surface for the
// 16:10 portfolio frame. The full original remains available above.
await sharp(join(root, 'assets/platforms/engine-room-studio.png'))
  .extract({ left: 0, top: 0, width: 1440, height: 900 })
  .png()
  .toFile(join(root, 'assets/platforms/engine-room-studio-artwork.png'));

// Keep source artwork intact inside an editorial 16:10 canvas. The campaign
// banner contains text across its full width, so cropping would remove copy.
const seasonBanner = await sharp(join(root, 'assets/campaigns/season-opener-banner.jpg'))
  .resize({ width: 1500 })
  .toBuffer();
const seasonRules = Buffer.from('<svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg"><path d="M50 171 H1550 M50 829 H1550" stroke="#B89A58" stroke-width="2"/><circle cx="50" cy="171" r="5" fill="#B89A58"/><circle cx="1550" cy="829" r="5" fill="#B89A58"/></svg>');
await sharp({ create: { width: 1600, height: 1000, channels: 3, background: '#14352A' } })
  .composite([
    { input: seasonBanner, left: 50, top: 226 },
    { input: seasonRules, left: 0, top: 0 },
  ])
  .png()
  .toFile(join(root, 'assets/campaigns/season-opener-artwork.png'));

// These are two verified releases from the four-record case. Do not substitute
// the similarly named Black Radio Recovered remix cover for Black Radio III.
const releaseRules = Buffer.from('<svg width="1200" height="750" xmlns="http://www.w3.org/2000/svg"><path d="M60 88 H1140 M60 662 H1140" stroke="#B89A58" stroke-width="2"/><path d="M600 115 V635" stroke="#B89A58" stroke-width="1" opacity=".6"/></svg>');
await sharp({ create: { width: 1200, height: 750, channels: 3, background: '#1D252D' } })
  .composite([
    { input: join(root, 'assets/campaigns/glasper-let-go-cover.jpg'), left: 85, top: 125 },
    { input: join(root, 'assets/campaigns/glasper-code-derivation-cover.jpg'), left: 615, top: 125 },
    { input: releaseRules, left: 0, top: 0 },
  ])
  .png()
  .toFile(join(root, 'assets/campaigns/glasper-selected-cover-art.png'));

const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
for (const [file, base, manifestKey] of images) {
  const image = sharp(join(root, file));
  const { width, height } = await image.metadata();
  if (!width || !height) throw new Error(`Missing image dimensions: ${file}`);
  const widths = [...new Set([480, 800, 1200, 1600, 2400, Math.min(width, 2400)].filter((value) => value <= width))].sort((a, b) => a - b);
  for (const target of widths) {
    await sharp(join(root, file))
      .resize({ width: target, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(join(destination, `${base}-${target}.webp`));
  }
  // Source photos stay in assets/; remove older oversized web copies so they
  // cannot be shipped by a later deploy after changing the responsive set.
  for (const existing of await readdir(destination)) {
    const match = existing.match(new RegExp(`^${base}-(\\d+)\\.webp$`));
    if (match && !widths.includes(Number(match[1]))) await unlink(join(destination, existing));
  }
  manifest[manifestKey ?? `${base}.png`] = { base, width, height, widths };
  console.log(`${file} → ${base}: ${widths.join(', ')}`);
}
// The narrow hero uses the same framing as the desktop image's mobile crop,
// without downloading the parts that are outside the mobile viewport.
for (const width of [480, 700]) {
  await sharp(join(root, 'assets/home/untold-downtown-hero-clear-street.png'))
    .extract({ left: 603, top: 0, width: 700, height: 941 })
    .resize({ width })
    .webp({ quality: 77, effort: 5 })
    .toFile(join(destination, `untold-downtown-hero-clear-street-mobile-${width}.webp`));
}
const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(manifestPath, JSON.stringify(sorted, null, 1) + '\n');
