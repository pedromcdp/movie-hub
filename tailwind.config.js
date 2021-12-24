module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          850: "#161F2C",
        },
      },
      backgroundImage: {
        "jumbo-overlay": "url('/images/overlay.png')",
      },
      fontFamily: {
        sans: ["Calibre", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
