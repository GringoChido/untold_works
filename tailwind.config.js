import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      cream: '#F5F3EF',
      ink: '#141210',
      vermilion: '#FF4D17',
      sage: '#8B9E82',
      ochre: '#D8B47F',
      teal: '#2A5C5F',
      burgundy: '#6B1E2F',
      panel: '#2A2622',
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
