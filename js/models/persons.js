define([
  'underscore',
  'backbone',
  'models/person'], function(_, Backbone, Person) {

  var Persons = Backbone.Collection.extend({model: Person});

  return Persons;
});
