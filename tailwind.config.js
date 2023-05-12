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
      secondary_gray: "#353535",
      primary_gray: "#202020",
      primary_white: "#F7F7F7",
      light_gray: "#505050",
      white: "#fff",
      light_beige: "#EDE5D8",
      // gray: {
      //   900: "#252525",
      // },
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
