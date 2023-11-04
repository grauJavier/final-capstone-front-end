/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lime-green': '#f1f1f1',
        'golden-yellow': '#ffc600',
        'turquoise-blue': '#10bbb5',
        'charcoal-gray': '#252525',
        'platinum': '#e4e5e9',
      },
    },
  },
  plugins: [],
};
