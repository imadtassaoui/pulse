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
        account: "url('./public/image1.png')",
        contact: "url('./public/image2.png')",
        shop1: "url('./public/shop1.png')",
        shop2: "url('./public/shop2.png')",
        shop3: "url('./public/shop3.png')",
        models: "url('./public/models.png')",
        modelMan: "url('./public/model-man.png')",
        modelWoman: "url('./public/model-woman.png')",
        hero: "url('./public/Hero.png')",
        modelSearch: "url('./public/model-search.png')",
      },
      colors: {
        dark: {
          20: "#ccc",
          60: "#666",
          30: "#B3B3B3",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
