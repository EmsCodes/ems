/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    colors: {
      dark: "#C4AE96",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      accent: "#F56457",
      pink: "#F56457",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      secondaryGray: "#505050",
      gray: "#252525",
      primaryWhite: "#F7F7F7",
      gray_light: "#d3dce6",
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Playfair Display", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
