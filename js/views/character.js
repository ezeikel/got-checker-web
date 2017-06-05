define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var CharacterView = Backbone.View.extend({
    render: function() {
      var template = _.template($('#characterTemplate').html());
      var html = template(this.model.toJSON());
      this.$el.html(html);

      return this;
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return CharacterView;
});
