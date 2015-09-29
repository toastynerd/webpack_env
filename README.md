Webpack Env
================
[![Build Status](https://travis-ci.org/toastynerd/webpack_env.svg)](https://travis-ci.org/toastynerd/webpack_env)
A webpack pluggin for creating ENV varialbe like globals in webpack

First add Webpack Env as a webpack pluggin, using gulp this would 
look something like this:
```
//gulpfile.js
var gulp = require('gulp');
var webpack = require('webpack');
var webpackEnv = require('webpack-env');

gulp.task('webpack', function() {
  return gulp.src('./entry.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      },
      plugins: [webpackEnv]
    }))
    .pipe(gulp.dest('build/'));
});
```
Create a `.env.js` file in the same directory as your gulpfile.js.
This file should export an object that contains the eventual globals
you want your webpack code to contain:
```
module.exports = {
  SOME_VAR: 'some val'
}
```
Weback Env also supports having multiple files for multiple environments
to create a production set of globals just create a `.production_env.js`
file and run gulp with NODE_ENV set to 'production'
