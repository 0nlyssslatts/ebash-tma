/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
   
    extend: {
      fontFamily: {
        blackout: ['var(--font-blackout)']
      },
      colors: {
        background: '#232323',
        secondary: '#1C1C1C',
        text: '#FFFFFF',
        textgreen: '#96FFCE',
        backgroundgreen: '#96FFCE0D',

      }
    }
  },
  plugins: []
}
