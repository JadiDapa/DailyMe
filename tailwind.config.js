/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        cereal: ["AirbnbCereal-Regular", "sans-serif"],
        "cereal-bold": ["AirbnbCereal-Bold", "sans-serif"],
        "cereal-light": ["AirbnbCereal-Light", "sans-serif"],
        "cereal-medium": ["AirbnbCereal-Medium", "sans-serif"],
        "cereal-extrabold": ["AirbnbCereal-ExtraBold", "sans-serif"],
        "cereal-black": ["AirbnbCereal-Black", "sans-serif"],
      },
      colors: {
        primary: "#3843FF",
        info: "#12A4ED",
        error: "#E3524F",
        warning: "#FEA800",
        success: "#3BA935",
        orange: "#F15223",
        purple: "#721785",
        pink: "#FF7D7D",
        teal: "#2D9E64",
        black: "#040415",
      },
    },
  },
  plugins: [],
};
