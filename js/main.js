'use strict';

require.config({
  paths: {
    jquery: './lib/jquery.min',
    handlebars: './lib/handlebars.min',
    underscore: './lib/underscore.min',
    backbone: './lib/backbone.min'
  }
});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App) {
  // The "app" dependency is pass in as "App"
  App.initialize()
});
