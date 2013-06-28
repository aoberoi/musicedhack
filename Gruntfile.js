var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({
    // Project configuration.
    pkg: grunt.file.readJSON('package.json')
    // TODO: compile templates using handlebars
    // TODO: compile sass using compass
    // TODO: write minification for scripts and css using requirejs
    // TODO: jshint
    // TODO: testing
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-requirejs'); // calls to uglify binary
  grunt.loadNpmTasks('grunt-contrib-compass');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Default task(s).
  //grunt.registerTask('default', ['uglify']);

};
