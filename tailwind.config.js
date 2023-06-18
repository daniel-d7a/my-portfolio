/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "portfolio-black": "#151515",
        "portfolio-neon-green": "#4EE1A0",
        "portfolio-gray": "#242424",
        "portfolio-off-white": "#D9D9D9",
      },

      fontFamily: {
        "space-grotesk" : "'Space Grotesk', sans-serif",
      },
    },
  },
  plugins: [],
};

