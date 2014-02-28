angular.module('SampleApp', [ 'fusioncharts', 'ngRoute' ]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', { templateUrl: 'app/partials/home.html', controller: HomeCtrl }).
      when('/:action/', { templateUrl: 'app/partials/demo.html', controller: DemoCtrl }).
      when('/:action/:name', { templateUrl: 'app/partials/demo.html', controller: DemoCtrl }).
      otherwise({redirectTo: '/'});

}]);

