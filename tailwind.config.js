/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontBigShouldersStencilText: ["Big Shoulders Stencil Text", "cursive"],
      },
    },
  },
  plugins: [],
};
