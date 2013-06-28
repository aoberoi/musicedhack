define([
  'jquery',
  'underscore',
  'backbone',
  'models/thing/ThingModel',
  'collections/things/ThingsCollection',
  'text!templates/things/thingsListTemplate.html'

], function($, _, Backbone, ThingModel, ThingsCollection, thingsListTemplate){
  var ThingsListView = Backbone.View.extend({
    el: $("#things-list"),

    render: function(){

      var data = {
        things: this.collection.models,
        _: _
      };

      var compiledTemplate = _.template( thingsListTemplate, data );
      $el.html( compiledTemplate ); 
    }
  });
  return ThingsListView;
});
