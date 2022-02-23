const {filterTokensByType} = require("./tokens/fns")
const tokens = require("./tokens/output/light.json")
const colors = filterTokensByType('color', tokens)

console.log(colors)
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors,

    extend: {}, 
  },
  plugins: [],
}
