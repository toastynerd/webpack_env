var webpack = require('webpack');
var fs = require('fs');
module.exports = exports = function() {
  var env = require(process.env.NODENV_DIR + '/\.' + (process.env.NODE_ENV ? process.env.NODE_ENV + '_':'') + 'env.js');
  return new webpack.DefinePlugin(env);
}
