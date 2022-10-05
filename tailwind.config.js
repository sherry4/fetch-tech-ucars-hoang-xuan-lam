/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "main-car": "url(/images/car-bg.jpg')",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        grayText: "#E3E3E3",
        blackText: "#232323",
        lightGray: "#5F5F5F",
        popoverText: "#8C8C8C",
        popoverGrayText: "#B4B4B4",
        blueText: "#0F5EDD",
        lightBlue: "#E5EEFB",
        buttonRed: "#EE1B24",
        bgGray: "#F1F1F1",
        menuBg: "#323435",
        darkBlue: "#2F465F",
        hover: "#F4F5F5",
        veryLightGray: "#FAFAFA",
        darkGreen: "#1F7B4D",
        lightGreen: "#CEF7E2",
      },
      boxShadow: {
        standard: "0px 2px 4px 0px rgba(35, 35, 35, 0.1)",
        nav: "0px -1px 0px 0px #F1F1F1 inset",
        modal: "0px 4px 8px 0px #2323231A, 0px -1px 2px 0px #23232314",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
