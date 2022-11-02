/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        style: {
          w: "#ffffff",
          background: "#161616",

          "g-3": "#333333",
          "g-ed": "#ededed",
          "g-e6": "#e6e6e6",

          "g-0": "#ffffff12",
          "g-2": "#1c1c1c",
        },
      },
    },
    fontFamily: {
      DM: "'DM Sans', sans-serif",
    },
  },
  plugins: [],
};
