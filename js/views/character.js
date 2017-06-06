define([
  'jquery',
  'underscore',
  'handlebars',
  'templates',
  'backbone'
], function($, _, Handlebars, Templates, Backbone) {

  var CharacterView = Backbone.View.extend({
    template: Handlebars.getTemplate('characters'),
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));

      return this;
    }
  });
  return CharacterView;
});
