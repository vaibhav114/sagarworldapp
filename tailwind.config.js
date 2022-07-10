/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        mobileL: "426px",
        tablet: "769px",
        laptop: "1024px",
      },
    },
    colors: {
      white: "#fff",
      "very-light-gray": "#fafafa",
      "dark-gray": "#858585",
      "dark-blue-dark-background": "#202c37",
      "dark-blue-light-text": "#111517",
      "dark-blue": "#2b3945",
    },
    fontFamilys: {
      sans: ["Nunito Sans", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
