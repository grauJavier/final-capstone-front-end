/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'limerick': '#98BF11',
        'platinum': '#E4E5E9',
        'argent': '#C1C1C1',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'titillium': ['Titillium Web', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
