define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var BlankView = Backbone.View.extend({
    render: function() {
      this.$el.html('house VIEW');

      return this;
    }
  });
  return BlankView;
});
