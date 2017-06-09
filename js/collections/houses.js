define([
  'underscore',
  'backbone',
  'models/house'], function(_, Backbone, House) {

  var Houses = Backbone.Collection.extend({
    model: House,
    url: 'https://www.anapioficeandfire.com/api/houses',
  });

  return Houses;
});
