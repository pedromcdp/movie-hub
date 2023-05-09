module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          850: "#161F2C",
        },
      },
      backgroundImage: {
        "jumbo-overlay": "url('/assets/overlay.png')",
      },
      fontFamily: {
        sans: ["Calibre", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
