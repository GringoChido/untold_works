import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      cream: '#F2EBDD',
      ink: '#23231F',
      vermilion: '#C96E48',
      ember: '#954126',
      panel: '#23231F',
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
