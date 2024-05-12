/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "londrina-solid": ["Londrina Solid", "sans-serif"],
      londrina: ["Londrina Solid", "sans-serif"],
      delius: ["Delius"],
      "londrina-solid": ["Londrina Solid", "sans-serif"],
      "short-stack": ["Short Stack", "cursive"],
      'londrina': ['Londrina Solid', 'sans-serif'],
      'short-stack': ['Short Stack', 'cursive']
    },
    extend: {
      fontFamily: {
        sans: ['Gloria Hallelujah', 'Londrina Solid', 'Short Stack', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
