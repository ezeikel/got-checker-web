define([
  'jquery',
  'underscore',
  'backbone',
  'views/charactersView',
  'views/housesView'
], function($, _, Backbone, CharactersView, HousesView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      "characters": "viewCharacters",
      "houses": "viewHouses",
      "*other": "defaultRoute"
    },

    viewCharacters: function() {
      var view = new CharactersView({el: "#container"});
      view.render();
    },

    viewHouses: function() {
      var view = new HousesView({el: "#container "});
      view.render();
    }
  });

  var initialize = function() {
    var router = new AppRouter();

    Backbone.history.start();

  };

  return {
    initialize: initialize
  };
});
