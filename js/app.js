define([
  'jquery',
  'underscore',
  'backbone',
  'router',
], function ($, _, Backbone, Router) {

  var initialize = function () {
    console.log('Initalizing app..');
    Router.initialize();
    };

  return {
    initialize: initialize
  };
});
