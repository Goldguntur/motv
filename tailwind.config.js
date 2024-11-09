/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#F01E2C",
        secondary: "#121214",
      },
      fontFamily: {
        montserrat: ["Montserrat-Regular", "sans-serif"],
        montserratBold: ["Montserrat-Bold", "sans-serif"],
        montserratSemiBold: ["Montserrat-SemiBold", "sans-serif"],
        montserratItalic: ["Montserrat-Italic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
