define([
  'jquery',
  'handlebars',
  'underscore',
  'backbone'
], function($, Handlebars, _, Backbone) {
  var CharacterView = Backbone.View.extend({
    template: Handlebars.compile($('#characterTemplate').html()),
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      
      return this;
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return CharacterView;
});
