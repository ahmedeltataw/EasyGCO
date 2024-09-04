module.exports = {
  plugins: [
    require('postcss-preset-env')({
      autoprefixer: { grid: true }, // Enable Autoprefixer with grid support
      browsers: 'last 2 versions',
      stage: 3
    }),
    require('postcss-csso')(), // Enable CSSO minification
    require('postcss-flexbugs-fixes')(),
    require("postcss-pxtorem"),
    
  ]
};