// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/character',
  'views/navigation',
  'views/house',
  'views/character'
], function($, _, Backbone, CharacterModel, NavigationView, HouseView, CharacterView) {

  var Router = Backbone.Router.extend({
    initialize: function() {
      console.info('init property being called...');
    },
    routes: {
      'houses': 'viewHouse',
      'characters': 'viewCharacter',
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
    
    // This is so that router.naviate can be shared to all views that are created
    Backbone.View.prototype.goTo = function (loc) {
      router.navigate(loc, true);
    };

    // TODO: Maybe this should be moved somewhere else
    var navigation = new NavigationView({el: '#navigation'});
    navigation.render();

    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
