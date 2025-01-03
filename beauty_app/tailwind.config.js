/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out',
        slideOut: 'slideOut 0.5s ease-out',
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'], 
      },
      colors:{
        custom: 'rgba(72, 91, 96, 1)', 
        custom2: 'rgba(236, 232, 217, 1)',
        custom3: 'rgba(28, 28, 28, 0.40)',
        custom4: 'rgba(28, 28, 28, 0)',
        custom5: 'rgba(255, 249, 186)',
        custom6: 'rgba(255, 238, 61)',
        custom7: 'rgba(120, 119, 109)',
        custom8: 'rgba(255, 182, 193, 1)'
      }
    },
  },
  plugins: [],
}