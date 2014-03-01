'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        yeoman: yeomanConfig,
        watch: {
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    'index.html',
                    '<%= yeoman.app %>/**/*.html',
                    '{.tmp,<%= yeoman.app %>}/css/**/*.css',
                    '{.tmp,<%= yeoman.app %>}/js/**/*.js',
                    '{.tmp,<%= yeoman.app %>}/data/**/*.{json,xml}',
                    '<%= yeoman.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, '.')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, '.')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            '<%= yeoman.dist %>/*',
                            '!<%= yeoman.dist %>/.git*'
                        ]
                    }
                ]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'src/**/*.js'
            ]
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        concat: {
            options: {
                banner: "(function(angular) {",
                footer: "}(angular));"
            },
            dist: {
                src: [
                    'src/directives/chart.js',
                    'src/services/chartFactory.js'
                ],
                dest: '<%= yeoman.dist %>/<%= pkg.name %>.js'
            },
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v.<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: '<%= yeoman.dist %>/<%= pkg.name %>.js',
                dest: '<%= yeoman.dist %>/<%= pkg.name %>.min.js'
            }
        },
        bump: {
            options: {
                files: ['package.json', 'bower.json', 'README.md', 'index.html'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['-a'], // '-a' for all files
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'origin master',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
            }
        }
    });

    grunt.registerTask('server', function (target) {

        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'connect:livereload',
            'open',
            'watch'
        ]);

    });

    grunt.registerTask('test', [
        'clean:server',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'concat',
        'uglify'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);

    grunt.registerTask('release', [
        'bump'
    ]);

};
