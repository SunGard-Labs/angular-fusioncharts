angular.module('SampleApp', [ 'fusioncharts' ]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', { templateUrl: 'app/partials/home.html', controller: HomeCtrl }).
      when('/demo', { templateUrl: 'app/partials/demo.html', controller: DemoCtrl }).
      otherwise({redirectTo: '/'});
}]);

