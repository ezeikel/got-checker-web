define([
  'jquery',
  'underscore',
  'backbone',
  'views/personView'], function($, _, Backbone, PersonView) {

    var PersonsView = Backbone.View.extend({
      initialize: function() {
      },
      tagName: "ul",
      render: function() {
        var self = this;
        this.model.each(function(person) {
          var personView = new PersonView({model: person});
          self.$el.append(personView.render().$el);
        });
        return this;
      }
    });
    return PersonsView;
  }
);
