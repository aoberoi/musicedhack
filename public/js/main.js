require.config({
  paths: {
    jquery: 'libs/jquery/jquery-1.9.1.min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    socketio: '../socket.io/socket.io',
    templates: '../templates'
  },

  shim: {
    "backbone" : {
      deps: [ 'underscore', 'jquery' ],
      exports: 'Backbone'
    },
    "underscore" : {
      exports: '_'
    },
    "socketio" : {
      exports: 'io'
    }
  }
});

require([
  // Load our app module and pass it to our definition function
  'musicedhack',
], function(MusicEdHack){
  MusicEdHack.initialize();
});
