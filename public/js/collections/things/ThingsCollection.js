define([
  'jquery',
  'underscore',
  'backbone',
  'models/thing/ThingModel'
], function($, _, Backbone, ThingModel){
  var ThingsCollection = Backbone.Collection.extend({
    model: ThingModel,

    initialize: function(models){
      this.add(models);
    }

  });
 
  return ThingsCollection;
});
