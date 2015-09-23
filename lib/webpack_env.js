var webpack = require('webpack');
var fs = require('fs');
module.exports = exports = function() {
  var env = require(process.env.NODENV_DIR + '/\.' + (process.env.NODE_ENV ? process.env.NODE_ENV + '_':'') + 'env.js');
  if (!env) {
    console.log('WARNING: .env.js file not found or was blank!');
    env = {};
  }
  return new webpack.DefinePlugin(env);
}
