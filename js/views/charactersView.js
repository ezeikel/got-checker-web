define([
  'jquery',
  'underscore',
  'backbone'], function($, _, Backbone) {

    var CharactersView = Backbone.View.extend({
      render: function() {
        this.$el.html("CHARACTERS VIEW");

        return this;
      }
    });

    return CharactersView;  
});
