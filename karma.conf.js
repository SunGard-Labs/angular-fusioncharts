// Karma configuration
// Generated on Thu Oct 03 2013 14:05:38 GMT+0200 (SAST)

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        'app/vendor/jquery/dist/jquery.js',
        'app/vendor/angular/angular.js',
        'app/vendor/angular-route/angular-route.js',
        'app/vendor/angular-mocks/angular-mocks.js',
        'src/directives/*.js',
        'src/services/*.js',
        'test/spec/**/*.js'
    ],

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: dots || progress || growl
    reporters: ['dots'],

    // web server port
    port: 8080,

    // cli runner port
    runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 10000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
