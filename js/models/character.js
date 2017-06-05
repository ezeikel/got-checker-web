// Filename: models/project
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var CharacterModel = Backbone.Model.extend({
    defaults: {
      name: "Harry Potter"
    }
  });
  // Return the model for the module
  return CharacterModel;
});
