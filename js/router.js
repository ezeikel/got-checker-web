// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/character',
  'views/navigation',
  'views/house',
  'views/houses',
  'views/character'
], function($, _, Backbone, Character, NavigationView, HouseView, HousesView, CharacterView) {

  var Router = Backbone.Router.extend({
    initialize: function() {
      console.info('init property being called...');

      // TODO: Move this somewhere else
      // Overwrite the sync method to pass over the Same Origin Policy
      Backbone._sync = Backbone.sync;
      // override original sync method to
      Backbone.sync = function(method, model, options) {
        options || (options = {});
        if (!options.crossDomain) {
          options.crossDomain = true;
        }
        return Backbone._sync(method, model, options);
      };

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
      var view = new HousesView({ el: '#container'});
      view.render();
    });

    router.on('route:viewCharacter', function() {
      // Call render on the module we loaded in via the dependency array
      var character = new Character({ name: 'Mo Money' });
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
