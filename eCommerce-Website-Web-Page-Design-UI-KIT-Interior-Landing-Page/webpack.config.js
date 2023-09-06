const path = require('path');

module.exports = {
  mode:'development',
  entry: {
    bundle:'./src/index.js',
    main:"./src/data.js"

  },
    
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  watch:true
};