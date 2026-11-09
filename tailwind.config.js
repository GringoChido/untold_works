import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      cream: '#F5F2EA',
      ink: '#211E1B',
      vermilion: '#FF5526',
      ember: '#A53616',
      panel: '#211E1B',
    },
    fontFamily: {
      sans: ['Archivo', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      borderWidth: { rule: '1.5px' },
      spacing: { rail: '56px' },
    },
  },
  plugins: [
    plugin(({ addUtilities }) =>
      addUtilities({
        '.wdth-62': { fontStretch: '62%' },
        '.wdth-100': { fontStretch: '100%' },
        '.wdth-125': { fontStretch: '125%' },
      }),
    ),
  ],
};
