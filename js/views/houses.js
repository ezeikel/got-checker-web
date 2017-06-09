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
        _.bindAll(this, 'render');

        // Create a collection
        this.collection = new Houses();

        // Fetch the collection and call render() method
        var that = this;
        this.collection.fetch({
          data: {
            pageSize: 50
          },
          success: function (collection, response, options) {
            that.render();
          },
          error: function (collection, response, options) {
            console.log('There was an error in fetch.');
          }
        });
      },
      tagName: 'section',
      template: Handlebars.getTemplate('houses'),
      render: function() {
        this.$el.html(this.template({ houses : this.collection.toJSON() }));
        //debugger;
        return this;
      }
    });

    return HousesView;
});
