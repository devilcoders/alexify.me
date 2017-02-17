module.exports = {
  plugins: [
    require('postcss-css-variables'),
    require('postcss-conditionals'),
    require('postcss-custom-media'),
    require('css-mqpacker'),
    require('postcss-import'),
    require('immutable-css'),
    require('postcss-reporter')
  ]
}