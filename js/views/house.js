define([
  'jquery',
  'underscore',
  'backbone'], function($, _, Backbone) {

    var HouseView = Backbone.View.extend({
      tagName: 'li',
      render: function () {
        return this;
      }
    });

    return HouseView;
});
