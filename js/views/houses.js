define([
  'jquery',
  'underscore',
  'handlebars',
  'templates',
  'backbone',
  'models/house',
  'collections/houses'
], function($, _, Handlebars, Templates, Backbone, House, Houses) {

    var HousesView = Backbone.View.extend({
      initialize: function() {

        this.collection = new Houses();

        var that = this;
        this.collection.fetch({
          data: {
            pageSize: 50
          },
          success: function () {
            that.render();
          },
          error: function () {
            console.error('There was an error in fetch');
          }
        });
      },
      template: Handlebars.getTemplate('houses'),
      render: function() {
        this.$el.html(this.template({ houses : this.collection.toJSON() }));

        return this;
      }
    });

    return HousesView;
});
