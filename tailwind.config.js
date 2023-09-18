module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        slate: {
          850: "#161F2C",
        },
      },
      backgroundImage: {
        "jumbo-overlay": "url('/assets/jumbo_overlay.svg')",
      },
      fontFamily: {
        sans: ["Calibre", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
