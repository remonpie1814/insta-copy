module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "850px" },
      sm: { max: "450px" },
      tall: { raw: "(max-height: 800px)" },
      short: { raw: "(max-height: 400px)" },
    },
    extend: {
      colors: {
        gray: { 300: "#e4e4e4", 500: "#979797" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
        yellow: { 100: "#fff4bd" },
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
