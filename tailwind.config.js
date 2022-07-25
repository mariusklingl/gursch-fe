/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        headLine: ["Metrophobic"],
      },
      boxShadow: {
        fensterItem: "5px 5px 20px 5px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
