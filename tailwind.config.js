/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          50: "#fffaec",
          100: "#fff3d3",
          200: "#ffe3a5",
          300: "#ffce6d",
          400: "#ffad32",
          500: "#ff920a",
          600: "#f17300",
          700: "#cc5802",
          800: "#a1440b",
          900: "#823a0c",
          950: "#461b04",
        },
        primary: {
          50: "#f0f7ff",
          100: "#dfedff",
          200: "#b9dbfe",
          300: "#7bbffe",
          400: "#349efc",
          500: "#0a83ed",
          600: "#0065cb",
          700: "#0050a4",
          800: "#054a91",
          900: "#0a3a70",
          950: "#07244a",
        },
      },
    },
  },
  plugins: [],
};
