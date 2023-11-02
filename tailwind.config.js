/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'login-green': '#97be01',
        'form-green': '#97bf0f',
        'form-border-white': '#f2f3f0',
      },
      backgroundImage: {
        'login-img': "linear-gradient(to top, rgba(150, 190, 0, 0.8), rgba(150, 190, 0, 0.8)), url('./src/assets/login-img.jpg')",
      },
      fontFamily: {
        'titilium': ["Titillium Web", 'sans-serif'],
        'poppins': ["Poppins", "sans-serif"],
      },
      keyframes: {
        'show-message': {
          '0%': { transform: 'translatey(-100%)' },
          '50%': { transform: 'translatey(-50%)' },
          '100%': { transform: 'translatey(0)' }
        },
        'hide-message': {
          '0%': { transform: 'translatey(0)' },
          '50%': { transform: 'translatey(-50%)' },
          '100%': { transform: 'translatey(-110%)' }
        }
      },
      animation: {
        'show-message': 'show-message 0.3s linear forwards', 
        'hide-message': 'hide-message 0.3s linear forwards',
      }
    },
  },
  plugins: [],
}
