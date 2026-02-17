import { SlideCollection } from '../types';

export const slideCollections: SlideCollection[] = [
  // ── 1. Vintage Kodachrome ──
  {
    id: 'vintage-light',
    title: 'Faded Summers',
    subtitle: 'Warm light, old film, the colors your grandparents remember',
    scene: 'vintage',
    track: {
      id: '24',
      name: 'Handle With Care',
      artist: 'Traveling Wilburys',
      spotifyId: '6h326kxYtieTzeWLiH30dz',
      previewUrl: 'https://p.scdn.co/mp3-preview/a18d424f5bff45eadf48d5d4e03a858f83c58e52',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=90', alt: 'Golden mountain lake at sunset' },
      { url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=90', alt: 'Sun rays through valley' },
      { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90', alt: 'Mountain peaks above clouds' },
      { url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=90', alt: 'Misty forest morning' },
      { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=90', alt: 'Sunlight filtering through trees' },
      { url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1920&q=90', alt: 'Rolling green hills' },
    ],
  },

  // ── 2. Keith Haring / Pop Energy ──
  {
    id: 'pop-energy',
    title: 'Radiant City',
    subtitle: 'Bold lines, electric color, raw street energy',
    scene: 'haring',
    track: {
      id: '19',
      name: 'Pump Up The Volume',
      artist: 'M|A|R|R|S',
      spotifyId: '3CqQIRZng2MVh3k1H2jHHN',
      previewUrl: 'https://p.scdn.co/mp3-preview/3c7e8621f2131e4427dc6283f55abb377c43c2ba',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=1920&q=90', alt: 'Vibrant street mural' },
      { url: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1920&q=90', alt: 'Neon graffiti wall' },
      { url: 'https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?w=1920&q=90', alt: 'Bold pop art colors' },
      { url: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1920&q=90', alt: 'Abstract geometric mural' },
      { url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1920&q=90', alt: 'Colorful art installation' },
      { url: 'https://images.unsplash.com/photo-1533158388470-9a56699990c6?w=1920&q=90', alt: 'Urban street art explosion' },
    ],
  },

  // ── 3. Big Sur ──
  {
    id: 'pacific-fog',
    title: 'Pacific Fog',
    subtitle: 'Coastal mist, deep blue, the edge of the continent',
    scene: 'bigsur',
    track: {
      id: '45',
      name: 'Cortez the Killer',
      artist: 'Neil Young',
      spotifyId: '0mzzFxYs8wPfKwNIq4WTq1',
      previewUrl: 'https://p.scdn.co/mp3-preview/9d034d87064ced4e31935e9c836d527a775dfc29',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1920&q=90', alt: 'Foggy coastal cliffs' },
      { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=90', alt: 'Ocean waves at dusk' },
      { url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=90', alt: 'Misty coastline aerial' },
      { url: 'https://images.unsplash.com/photo-1484291150605-0860ed671425?w=1920&q=90', alt: 'Lone cypress in fog' },
      { url: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=1920&q=90', alt: 'Dramatic ocean sunset' },
      { url: 'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=1920&q=90', alt: 'Rocky Pacific shoreline' },
    ],
  },

  // ── 4. Polaroid Summer ──
  {
    id: 'polaroid-days',
    title: 'Instant Memory',
    subtitle: 'Cream borders, warm tones, pinned to the wall',
    scene: 'polaroid',
    track: {
      id: '50',
      name: 'I Get Around',
      artist: 'The Beach Boys',
      spotifyId: '4voEoczU7Ijborps9XF1n3',
      previewUrl: 'https://p.scdn.co/mp3-preview/5bf399850bcb1bb4be611faefced089288f38f39',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1920&q=90', alt: 'Golden hour through trees' },
      { url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&q=90', alt: 'Camping under stars' },
      { url: 'https://images.unsplash.com/photo-1530569673472-307dc017a82d?w=1920&q=90', alt: 'Wildflowers in field' },
      { url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=90', alt: 'Lake with mountain reflection' },
      { url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1920&q=90', alt: 'Vintage car on road' },
      { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=90', alt: 'Portrait in warm light' },
    ],
  },

  // ── 5. Tokyo Neon ──
  {
    id: 'neon-nights',
    title: 'Neon & Rain',
    subtitle: 'Electric reflections, wet streets, the city never sleeps',
    scene: 'tokyo',
    track: {
      id: '13',
      name: "Steppin' Out",
      artist: 'Joe Jackson',
      spotifyId: '2KY0QUeRY3IPuJI1gyU9BJ',
      previewUrl: 'https://p.scdn.co/mp3-preview/a8756c5f1adc3879b923ef47df631cfe0403b7ad',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1920&q=90', alt: 'Tokyo neon street' },
      { url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&q=90', alt: 'Japanese temple at night' },
      { url: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=1920&q=90', alt: 'Rain-soaked neon alley' },
      { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=90', alt: 'City skyline at blue hour' },
      { url: 'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=1920&q=90', alt: 'Neon signs reflected in puddle' },
      { url: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1920&q=90', alt: 'Tokyo crossing at night' },
    ],
  },

  // ── 6. Brutalist / Concrete ──
  {
    id: 'concrete-proof',
    title: 'Proof Sheet',
    subtitle: 'No effects, no vignette. The image is the statement.',
    scene: 'brutalist',
    track: {
      id: '30',
      name: 'Waiting Room',
      artist: 'Fugazi',
      spotifyId: '5FFowl1Ve4S5OehL6OywSg',
      previewUrl: 'https://p.scdn.co/mp3-preview/12e9573f0dd77e6d45be2e19039ca2a982b200b7',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1920&q=90', alt: 'Brutalist concrete building' },
      { url: 'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=1920&q=90', alt: 'Geometric architecture' },
      { url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90', alt: 'Minimal concrete stairway' },
      { url: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1920&q=90', alt: 'Sharp architectural lines' },
      { url: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=1920&q=90', alt: 'Abstract building facade' },
      { url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=90', alt: 'Minimal interior space' },
    ],
  },

  // ── 7. Campfire / Desert Night ──
  {
    id: 'desert-fire',
    title: 'Ember & Dust',
    subtitle: 'Firelight rising, stories in the smoke, desert night sky',
    scene: 'campfire',
    track: {
      id: '59',
      name: 'De Usuahia a la Quiaca',
      artist: 'Gustavo Santaolalla',
      spotifyId: '1MDiG9pP31fvDpAjmNHDEz',
      previewUrl: 'https://p.scdn.co/mp3-preview/5b608905fb0082e93e504432bcdbd2e1e999a19b',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=1920&q=90', alt: 'Campfire under stars' },
      { url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&q=90', alt: 'Desert canyon at dusk' },
      { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=90', alt: 'Mountain silhouette at sunset' },
      { url: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1920&q=90', alt: 'Desert road at twilight' },
      { url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1920&q=90', alt: 'Golden hour over plains' },
      { url: 'https://images.unsplash.com/photo-1475274047050-1d0c55b7b10c?w=1920&q=90', alt: 'Starry night sky' },
    ],
  },

  // ── 8. Cinema ──
  {
    id: 'cinema-scope',
    title: 'Wide Angle',
    subtitle: 'Letterboxed, deliberate, every frame a painting',
    scene: 'cinema',
    track: {
      id: '43',
      name: 'Love & Hate',
      artist: 'Michael Kiwanuka',
      spotifyId: '2TWG1zX5vzOD2aJxfJ5W5U',
      previewUrl: 'https://p.scdn.co/mp3-preview/466a62cb84d809b5b15afb0464262bd1fc55dc46',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1500313830540-7b6650a74eb0?w=1920&q=90', alt: 'Dramatic cloudy landscape' },
      { url: 'https://images.unsplash.com/photo-1494797262163-102fae527f47?w=1920&q=90', alt: 'Lone figure on empty road' },
      { url: 'https://images.unsplash.com/photo-1485470733090-0aae1788d668?w=1920&q=90', alt: 'Cinematic urban silhouette' },
      { url: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1920&q=90', alt: 'Train tracks vanishing point' },
      { url: 'https://images.unsplash.com/photo-1488188840666-e2308741a62f?w=1920&q=90', alt: 'Vast ocean horizon' },
      { url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=90', alt: 'Snow-covered peaks under stars' },
    ],
  },
];
