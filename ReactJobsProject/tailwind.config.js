module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['roboto', 'sans-serif'], // replace with your font   
      },

    },
    gridtemplatecolumns: {'70/30': '70% 28%',},
  },
  plugins: [],
}
