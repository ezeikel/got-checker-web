// http://berzniz.com/post/24743062344/handling-handlebarsjs-like-a-pro

define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var CharacterModel = Backbone.Model.extend({
    defaults: {
      name: "Harry Potter"
    }
  });
  return CharacterModel;
});
