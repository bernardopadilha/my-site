/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/background.png')",
        'banner': "url('/banner.png')",
      }
    },

    colors: {
      white: "#fff",
      body: "#252526",
      text: "#252526",
      purple500:"#8B5CF6",
      blue600: "#0284C7",
      separatorHeader: "#CCCCCC",
      separatorCard: "#D9D9D9"

    },

    fontFamily: {
      "Poppins": "Poppins, sans-serif"
    }
  },
  plugins: [],
}

