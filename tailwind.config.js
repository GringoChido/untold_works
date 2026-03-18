/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        untold: {
          beige: '#F5F3EF',
          orange: '#FF4D17',
          black: '#000000',
          gray: '#4A4A4A',
          border: '#D9D5CF',
        },
        stereo: {
          wood: '#5C3A1E',
          metal: '#2A2A2A',
          felt: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Libre Caslon Text"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        led: ['"Share Tech Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
