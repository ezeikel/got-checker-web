// http://berzniz.com/post/24743062344/handling-handlebarsjs-like-a-pro

define([
  'jquery',
  'handlebars'
], function($, Handlebars){
    return Handlebars.getTemplate = function(name) {
    	if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
    		$.ajax({
    			url : 'templates/' + name + '.hbs',
    			success : function(data) {
    				if (Handlebars.templates === undefined) {
    					Handlebars.templates = {};
    				}
    				Handlebars.templates[name] = Handlebars.compile(data);
    			},
    			async : false
    		});
    	}
    	return Handlebars.templates[name];
    };
});
