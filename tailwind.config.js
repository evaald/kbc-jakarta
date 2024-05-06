const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      primary: "#f5eddb",
      normal: "#BE8511",
    },
    fontFamily: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    backgroundImage: {
      beranda: 'url("./Image/HeaderBeranda.jpg")',
      aboutus: 'url("./Image/HeaderAboutUs.jpg")',
    },
  },
  plugins: [flowbite.plugin()],
};