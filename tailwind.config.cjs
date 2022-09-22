/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1080px",
      },
    },
    extend: {
      colors: {
        botnight: "#12403C",
        melsun: "#F2D09D",
        cadnium: "#EF8428",
        rush: "#461708",
      },
    },
  },
  plugins: [],
};
