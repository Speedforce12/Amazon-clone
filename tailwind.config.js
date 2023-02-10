/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: "#131921",
        amazon_yellow: "#febd69",
        amazon_light: "#232F3E",
        footerBottom: "#131A22",
        quantity_box: "#F0F2F2",
        whiteText: "#ffffff",
        lightText: "#ccc",
      },
      boxShadow: {
        testShadow: "0px 0px 32px 1px rgba(199,199,199,1)",
        amazonInput: "0 0 3px 2px rgb(228 121 17 / 50%)",
      },
    },
  },
  plugins: [],
};
