define([
  'jquery',
  'underscore',
  'handlebars',
  'templates',
  'backbone',
  'router'
], function($, _, Handlebars, Templates, Backbone) {

  var NavigationView = Backbone.View.extend({
    initialize: function () {
      this.render();
    },
    template: Handlebars.getTemplate('navigation'),
    events: {
    'click a:not([data-bypass])': 'goToLink'
    },
    goToLink: function(e) {

      var $a = $(e.target);
      e.preventDefault();
      //app.router.navigate(href, true);
      this.goTo($a.attr('data-url'));
      //Backbone.history.navigate($a.attr('data-url'), true);

    },
    render: function() {
      this.$el.html(this.template());

      return this;
    }
  });
  return NavigationView;
});
