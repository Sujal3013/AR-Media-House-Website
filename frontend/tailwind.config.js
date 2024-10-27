/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/index.css"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        xl: "0 0 10px rgba(0,0,0,0.2)",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        "playfair-display": ["Playfair-Display", "serif"],
      },
      colors: {
        // ...colors,
        primary: {
          100: "#FFE9DD",
          200: "#FFC9AA",
          300: "#FFB78E",
          400: "#FFA572",
          500: "#FF9356",
          600: "#D47B48",
          700: "#AA6239 ",
          800: "#804A2B",
          900: "#55311D",
          1000: "#331D11",
        },
        secondary: {
          100: "#CECDCD",
          200: "#838181",
          300: "#5A5857",
          400: "#312E2D",
          500: "#080403",
          600: "#070303",
          700: "#050302",
          800: "#040202",
          900: "#030101",
          1000: "#020101",
        },
        tertiary: {
          500: "#F4F4F4",
          600: "#E4E4E4",
          800: "#BBBBBB",
        },
        additional: {
          200: "#F7F7F7",
        },
      },
      keyframes: {
        "scroll-up-icon": {
          "0%, 100%": {
            transform: "translateY(0rem)",
            opacity: 1,
          },
          "35%": {
            transform: "translateY(-0.5rem)",
            opacity: 0,
          },
          "70%": {
            transform: "translateY(0.5rem)",
            opacity: 0,
          },
        },
        "scroll-auto": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "scroll-delay-auto": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "scroll-up": "scroll-up-icon 1s ease-in-out infinite",
        "scroll-auto": "scroll-auto 20s linear infinite",
        "scroll-auto-delayed": "scroll-delay-auto 20s linear infinite",
      },
      padding: {
        "screen-padding": "6vw",
      },
      backgroundSize: {
        "55%": "55%",
      },
    },
  },
  plugins: [],
};
