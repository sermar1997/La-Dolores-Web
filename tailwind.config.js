/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#FCF8F8',
          100: '#F9F1F1',
          200: '#F0DCDC',
          300: '#E7C7C7',
          400: '#D69D9D',
          500: '#C57373',
          600: '#B14848',
          700: '#8E3A3A',
          800: '#6B2B2B',
          900: '#481D1D',
        },
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
