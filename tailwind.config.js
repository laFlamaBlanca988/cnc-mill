/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      xxs: "400px",
      xs: "501px",
      sm: "640px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        "main-blue": "#1D71BB",
        "light-blue": "#668ec8",
        "heading-blue": "#273389",
      },
      backgroundImage: {},
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideFromBottom: {
          "0%": { transform: "translateY(1000px)" },
          "100%": { transform: "translateY(0)" },
        },
        slideFromLeft: {
          "0%": { transform: "translateX(-1000px)" },
          "100%": { transform: "translateX(0)" },
        },
        slideTruckFromLeft: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(0)" },
        },
        slideFromRight: {
          "0%": { transform: "translateX(1000px)" },
          "100%": { transform: "translateX(0)" },
        },
        slideNavbarFromRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideFromLeft: "slideFromLeft 1.2s ease-in-out",
        slideFromRight: "slideFromRight 1.2s ease-in-out",
        slideFromBottom: "slideFromBottom 1.5 ease-in-out",
        slideTruckFromLeft: "slideTruckFromLeft 1s ease-in-out",
        slideNavbarFromRight: "slideNavbarFromRight 0.3s ease-in-out",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss"), require("flowbite/plugin")],
};
