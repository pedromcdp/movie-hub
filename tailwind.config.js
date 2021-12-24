module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "jumbo-overlay": "url('/images/overlay.svg')",
      },
      fontFamily: {
        sans: ["Calibre", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
