define([
  'jquery',
  'underscore',
  'backbone'], function($, _, Backbone) {

    var IntroView = Backbone.View.extend({
      tagName: 'section',
      className: 'introduction',
      render: function () {
        $(this.el).html('<h1>Welcome to GoT Checker! 😎</h2>');
        return this;
      }
    });

    return IntroView;
});
