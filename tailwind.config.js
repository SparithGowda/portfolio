/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {animation: {
      fadePop: "fadePop 0.8s ease-out forwards"
    },
    keyframes: {
      fadePop: {
        "0%": { opacity: "0", transform: "translateY(20px) scale(0.95)" },
        "100%": { opacity: "1", transform: "translateY(0) scale(1)" }
      }
    }

    },
  },
  plugins: [],
}

