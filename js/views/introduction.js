define([
  'jquery',
  'underscore',
  'backbone'], function($, _, Backbone) {

    var IntroView = Backbone.View.extend({
      tagName: 'section',
      className: 'introduction'
      render: function () {
        return this;
      }
    });

    return IntroView;
});
