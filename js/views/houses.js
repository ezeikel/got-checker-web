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

        this.page = 1;
        this.pageSize = 50;

        this.fetchData(this.page, this.pageSize);
      },
      template: Handlebars.getTemplate('houses'),
      events: {
        'click .btn' : 'btnClickHandler'
      },
      fetchData: function(page, pageSize) {
        var that = this;

        this.collection.fetch({
          data: {
            page: page,
            pageSize: pageSize
          },
          success: function (collection, response, options) {
            var headers = options.xhr.getAllResponseHeaders(); // get all headers

            // TODO: Link header does show up for some reason
            var linkHeader = options.xhr.getResponseHeader('content-type'); // get specific header

            that.render();
          },
          error: function () {
            console.error('There was an error in fetch');
          }
        });
      },
      btnClickHandler: function (e) {
        var target = $(e.target);
        var direction = target.hasClass('btn__prev') ? 'prev' : 'next';

        if(direction === 'next') {
          this.collection.length;

          // TODO: Fix this. Won't work if data fits exactly and length is equal to page size but no more data after that.
          // Cant access link header in xhr object for some reason 😡
          if (this.collection.length === this.pageSize) {
            this.page =  this.page + 1;
          } else {
            return; // don't bother calling the api for the same data
          }

        } else {
          if (this.page <= 1) {
            return; // don't bother calling the api for the same data
          } else {
            this.page =  this.page -1;
          }
        }

        this.fetchData(this.page, this.pageSize);
        this.render();
      },
      render: function() {
        this.$el.html(this.template({ houses : this.collection.toJSON() }));

        return this;
      }
    });

    return HousesView;
});
