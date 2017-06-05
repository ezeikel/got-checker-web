// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/character',
  'views/house',
  'views/character'
], function($, _, Backbone, CharacterModel, HouseView, CharacterView) {
  var Router = Backbone.Router.extend({
    routes: {
      'house': 'viewHouse',
      'character': 'viewCharacter',
      '*other': 'defaultRoute'
    }
  });

  var initialize = function() {

    console.log('Initialize router..');

    var router = new Router;

    router.on('route:viewHouse', function() {
      // Call render on the module we loaded in via the dependency array
      var view = new HouseView({ el: '#container'});
      view.render();
    });

    router.on('route:viewCharacter', function() {
      // Call render on the module we loaded in via the dependency array
      var character = new CharacterModel({ name: 'Mo Money' });
      var view = new CharacterView({ el: '#container', model: character});
      view.render();
    });

    router.on('route:defaultRoute', function(actions) {
      // We have no matching route, lets just log what the URL was
      console.log('No route could be found for ', actions);
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
