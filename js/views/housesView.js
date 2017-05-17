define([
  'jquery',
  'underscore',
  'backbone'], function($, _, Backbone) {

    var HousesView = Backbone.View.extend({
      render: function() {
        this.$el.html("HOUSES VIEW");

        return this;
      }
    });

    return HousesView;
});
