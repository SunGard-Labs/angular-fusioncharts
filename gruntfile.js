module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        banner: "(function(angular) {",
        footer: "}(angular));"
      },
      dist: {
        src: ['src/main.js',
              'src/services/chartFactory.js',
              'src/directives/chart.js'],
        dest: 'build/<%= pkg.name %>.js'
      },

    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v.<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};