/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F4D36", // Deep green
        secondary: "#4E7C59", // Earth green
        accent: "#7FB77E", // Leaf green
        softBeige: "#F4F6F3", // Background
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}
