define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

  var NavView = Backbone.View.extend({
    events: {
      "click": "onClick"
    },

    onClick: function(e) {
      var $li = $(e.target);
      Backbone.history.navigate($li.attr("data-url"), {trigger: true});
    }
  });

  var navView = new NavView({ el: "#nav" });

  return NavView;
});
