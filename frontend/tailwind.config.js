/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        "playfair-display": ["Playfair-Display", "serif"]
      },
      colors: {
        // ...colors,
        primary : {
          50: '#EFF9FF',
          100: '#DEF2FF',
          200: '#B6E8FF',
          300: "#75D8FF",
          400: '#2CC4FF',
          500: '#F39A25',
          600: '#008AD4',
          700: '#006EAB',
          800: '#005D8D',
          900: '#064D74',
          950: "#04314D",
        },
        secondary: {
          50: '#FBFFE5',
          100: '#F3FFC7',
          200: '#E6FF95',
          300: "#D2FE58",
          400: '#BCF526',
          500: '#050D2E',
          600: '#040A25',
          700: '#5B8506',
          800: '#4A690B',
          900: '#3E580F',
          950: "#1F3201",
        },
        tertiary: {
          500: "#F8F8F8",
        },
      },
      padding: {
        "screen-padding": "6vw",
      }
    },
  },
  plugins: [],
}

