define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/home/FooterView',
], function($, _, Backbone, HomeView, FooterView) {

  var Router = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'resource': 'showResource',

      // Default
      '*actions': 'defaultAction'
    },

    showResource: function() {
      // Call render on the module we loaded in via the dependency array
    },

    defaultAction: function() {
      // We have no matching route, lets display the home page
      var homeView = new HomeView();
      homeView.render();
    }
  });

  var initialize = function(){

    var router = new Router();

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    var footerView = new FooterView();

    Backbone.history.start({pushState: true});
  };

  return {
    initialize: initialize
  };
});
