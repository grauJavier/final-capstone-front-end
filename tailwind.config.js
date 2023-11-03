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
        'lime-green': '#f1f1f1',
        'golden-yellow': '#ffc600',
        'turquoise-blue': '#10bbb5',
        'charcoal-gray': '#252525',
      },
      backgroundImage: {
        'login-img': "linear-gradient(to top, rgba(150, 190, 0, 0.8), rgba(150, 190, 0, 0.8)), url('./src/assets/login-img.jpg')",
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
        },
        'hover-button': {
          '0%,100%': {
            'background-color': '#97bf0f',
            'color': '#f2f3f0',
          }
        }
      },
      animation: {
        'show-message': 'show-message 0.3s linear forwards', 
        'hide-message': 'hide-message 0.3s linear forwards',
        'hover-button': 'hover-button 1s ease-in-out forwards'
      },
      dropShadow: {
        'logo': '0px 15px 60px rgba(255,255,255, 0.8)',
      }
    },
  },
  plugins: [],
}
