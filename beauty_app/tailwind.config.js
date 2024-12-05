/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custom: 'rgba(72, 91, 96, 1)', 
        custom2: 'rgba(236, 232, 217, 1)',
        custom3: 'rgba(28, 28, 28, 0.40)',
        custom4: 'rgba(28, 28, 28, 0)'
      }
    },
  },
  plugins: [],
}