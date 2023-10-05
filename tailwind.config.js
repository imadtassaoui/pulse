/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Akira",
        secondary: "Helvetica",
      },
      backgroundImage: {
        men: "url('./public/mens.png')",
        women: "url('./public/womens.png')",
        shop: "url('./public/shop.png')",
        bannerVideo: "url('./public/hero-video.gif')",
      },
      colors: {
        dark: {
          60: "#666",
        },
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slider: "slide 5s linear infinite",
      },
    },
  },
  plugins: [],
};
