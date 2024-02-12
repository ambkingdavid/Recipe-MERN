/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': {
          100: '#7c5d3d',
          200: '#a65111',
        },
        'steal_blue': '#317ac1',
        'dark_slate_gray': '#384454'
      }
    },
  },
  plugins: [],
}
