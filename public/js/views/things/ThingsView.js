define([
  'jquery',
  'underscore',
  'backbone',
  'models/thing/ThingModel',
  'collections/things/ThingsCollection',
  'views/thing/ThingsListView',
  'text!templates/things/thingsTemplate.html'
], function($, _, Backbone, ThingModel, ThingsCollection, ThingsListView, thingsTemplate){

  var ThingsView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      this.$el.html(thingsTemplate);

      // array of ThingModel instances
      var things = [];

      var thingsCollection = new ThingsCollection(things);
      var thingsListView = new ThingsListView({ collection: thingsCollection}); 

      thingsListView.render(); 
    }
  });

  return ThingsView;
});
