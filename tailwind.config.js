module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        100: "#2b3945",
        200: "#202c37",
        300: "#111517",
      },
      gray: {
        100: "#fafafa",
        200: "#858585",
      },
      black: "#000",
      white: "#fff",
    },
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
