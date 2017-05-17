define([
  'jquery',
  'underscore',
  'backbone'], function($, _, Backbone) {

    var PersonView = Backbone.View.extend({
      initialize: function() {
      },
      tagName: "li",
      render: function() {
        this.$el.html(this.model.get("title"));

        return this;
      }
    });

    return PersonView;
});
