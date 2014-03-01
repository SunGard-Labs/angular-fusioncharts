function HomeCtrl($scope) {

}

function DemoCtrl($scope, $location, $routeParams, $http, $q, $timeout) {
  $scope.view = 'json';
  $scope.demos = [
    {
      name: '100PStArea1',
      chartType: 'StackedArea2D'
    },
    {
      name: '100PStBar2D1',
      chartType: 'StackedBar2D'
    },
    {
      name: '100PStBar3D2',
      chartType: 'StackedBar3D'
    },
    {
      name: '100PStCol2D1',
      chartType: 'StackedColumn2D'
    },
    {
      name: '100PStCol3D3',
      chartType: 'StackedColumn3D'
    },
    {
      name: '3DChart_Area_1',
      chartType: 'MSCombi3D'
    },
    {
      name: '3DChart_Area_2',
      chartType: 'MSCombi3D'
    },
    {
      name: '3DChart_Col_1',
      chartType: 'MSCombi3D'
    },
    {
      name: '3DChart_Col_2',
      chartType: 'MSCombi3D'
    },
    {
      name: '3DChart_Col_3',
      chartType: 'MSCombi3D'
    },
    {
      name: '3DChart_Line_1',
      chartType: 'MSCombi3D'
    },
    {
      name: 'Area1',
      chartType: 'Area2D'
    },
    {
      name: 'Area2',
      chartType: 'Area2D'
    },
    {
      name: 'linewithanchor',
      chartType: 'Area2D'
    },
    {
      name: 'Bar2D1',
      chartType: 'Bar2D'
    },
    {
      name: 'Bar2D2',
      chartType: 'Bar2D'
    },
    {
      name: 'Bar2D3',
      chartType: 'Bar2D'
    },
    {
      name: 'PizzaData11',
      chartType: 'Bar2D'
    },
    {
      name: 'Bubble1',
      chartType: 'Bubble'
    },
    {
      name: 'Bubble2',
      chartType: 'Bubble'
    },
    {
      name: 'Bubble3',
      chartType: 'Bubble'
    },
    {
      name: 'Bubble4',
      chartType: 'Bubble'
    },
    {
      name: 'Col2D1',
      chartType: 'Column2D'
    },
    {
      name: 'Col2D2',
      chartType: 'Column2D'
    },
    {
      name: 'animation1',
      chartType: 'Column2D'
    },
    {
      name: 'animation',
      chartType: 'Column2D'
    },
    {
      name: 'bevel',
      chartType: 'Column2D'
    },
    {
      name: 'Col3D1',
      chartType: 'Column3D'
    },
    {
      name: 'Col3D2',
      chartType: 'Column3D'
    },
    {
      name: 'Col3D3',
      chartType: 'Column3D'
    },
    {
      name: 'Col3D4',
      chartType: 'Column3D'
    },
    {
      name: 'Col3D5',
      chartType: 'Column3D'
    },
    {
      name: 'Col3D6',
      chartType: 'Column3D'
    },
    {
      name: 'Col3DLineDY1',
      chartType: 'MSColumn3DLineDY'
    },
    {
      name: 'Col3DLineDY2',
      chartType: 'MSColumn3DLineDY'
    },
    {
      name: 'Col3DLineDY3',
      chartType: 'MSColumn3DLineDY'
    },
    {
      name: 'Col3DLineDY4',
      chartType: 'MSColumn3DLineDY'
    },
    {
      name: 'Col3DLineSY1',
      chartType: 'MSColumnLine3D'
    },
    {
      name: 'Col3DLineSY2',
      chartType: 'MSColumnLine3D'
    },
    {
      name: 'Combi2D1',
      chartType: 'MSCombi2D'
    },
    {
      name: 'Combi2D2',
      chartType: 'MSCombi2D'
    },
    {
      name: 'Combi2D3',
      chartType: 'MSCombi2D'
    },
    {
      name: 'Combi2D4',
      chartType: 'MSCombi2D'
    },
    {
      name: '3DChart_Combi_1',
      chartType: 'MSCombi3D'
    },
    {
      name: '3DChart_Combi_2',
      chartType: 'MSCombi3D'
    },
    {
      name: '3DChart_Combi_3',
      chartType: 'MSCombi3D'
    },
    {
      name: '3DChart_Combi_4',
      chartType: 'MSCombi3D'
    },
    {
      name: 'CombiDY2D1',
      chartType: 'MSCombiDY2D'
    },
    {
      name: 'CombiDY2D2',
      chartType: 'MSCombiDY2D'
    },
    {
      name: 'CombiDY2D3',
      chartType: 'MSCombiDY2D'
    },
    {
      name: 'CombiDY2D4',
      chartType: 'MSCombiDY2D'
    },
    {
      name: 'CombiDY2D5',
      chartType: 'MSCombiDY2D'
    },
    {
      name: 'CombiDY2D6',
      chartType: 'MSCombiDY2D'
    },
    {
      name: 'MSStCol2DLine1',
      chartType: 'MSStackedColumn2DLineDY'
    },
    {
      name: 'Donut1',
      chartType: 'Doughnut3D'
    },
    {
      name: 'Donut2D1',
      chartType: 'Doughnut2D'
    },
    {
      name: 'glow',
      chartType: 'Doughnut2D'
    },
    {
      name: 'Donut2',
      chartType: 'Doughnut3D'
    },
    {
      name: 'Donut3',
      chartType: 'Column3D'
    },
    {
      name: 'blur',
      chartType: 'Line'
    },
    {
      name: 'Line1',
      chartType: 'Line'
    },
    {
      name: 'Line2',
      chartType: 'Line'
    },
    {
      name: 'Line3',
      chartType: 'Line'
    },
    {
      name: 'marimekko1',
      chartType: 'Marimekko'
    },
    {
      name: 'marimekko2',
      chartType: 'Marimekko'
    },
    {
      name: 'marimekko3',
      chartType: 'Marimekko'
    },
    {
      name: 'marimekko4',
      chartType: 'Marimekko'
    },
    {
      name: 'MSMerimekko',
      chartType: 'Marimekko'
    },
    {
      name: 'MSArea1',
      chartType: 'MSArea'
    },
    {
      name: 'MSBar2D1',
      chartType: 'MSBar2D'
    },
    {
      name: 'MSBar2D2',
      chartType: 'MSBar2D'
    },
    {
      name: 'MSBar3D1',
      chartType: 'MSBar3D'
    },
    {
      name: 'MSCol2D1',
      chartType: 'MSColumn2D'
    },
    {
      name: 'MSCol2D2',
      chartType: 'MSColumn2D'
    },
    {
      name: 'MSCol2D3',
      chartType: 'MSColumn2D'
    },
    {
      name: 'MSCol2D4',
      chartType: 'MSColumn2D'
    },
    {
      name: 'MSCol3D1',
      chartType: 'MSColumn3D'
    },
    {
      name: 'MSCol3D2',
      chartType: 'MSColumn3D'
    },
    {
      name: 'MSCol3D3',
      chartType: 'MSColumn3D'
    },
    {
      name: 'MSCol3D4',
      chartType: 'MSColumn3D'
    },
    {
      name: 'font',
      chartType: 'MSColumn3D'
    },
    {
      name: 'MSCombi2D',
      chartType: 'MSCombi2D'
    },
    {
      name: 'MSLine1',
      chartType: 'MSLine'
    },
    {
      name: 'MSLine2',
      chartType: 'MSLine'
    },
    {
      name: 'MSLine3',
      chartType: 'MSLine'
    },
    {
      name: 'MSLine4',
      chartType: 'MSLine'
    },
    {
      name: 'MSLine5',
      chartType: 'MSLine'
    },
    {
      name: 'shadow',
      chartType: 'MSLine'
    },
    {
      name: 'pareto1',
      chartType: 'Pareto2D'
    },
    {
      name: 'Pareto2D',
      chartType: 'Pareto2D'
    },
    {
      name: 'pareto2',
      chartType: 'Pareto2D'
    },
    {
      name: 'Pareto3D',
      chartType: 'Pareto3D'
    },
    {
      name: 'pareto3',
      chartType: 'Pareto2D'
    },
    {
      name: 'pareto4',
      chartType: 'Pareto3D'
    },
    {
      name: 'Pie2D1',
      chartType: 'Pie2D'
    },
    {
      name: 'Pie2D3',
      chartType: 'Pie2D'
    },
    {
      name: 'Pie3D1',
      chartType: 'Pie3D'
    },
    {
      name: 'Pie3D2',
      chartType: 'Pie3D'
    },
    {
      name: 'Pie3D3',
      chartType: 'Pie3D'
    },
    {
      name: 'Pie3D4',
      chartType: 'Pie3D'
    },
    {
      name: 'ScrollArea1',
      chartType: 'ScrollArea2D'
    },
    {
      name: 'ScrollCol1',
      chartType: 'ScrollColumn2D'
    },
    {
      name: 'ScrollCol2',
      chartType: 'ScrollColumn2D'
    },
    {
      name: 'ScrollCombi1',
      chartType: 'ScrollCombi2D'
    },
    {
      name: 'ScrollCombiDY1',
      chartType: 'ScrollCombiDY2D'
    },
    {
      name: 'ScrollLine1',
      chartType: 'ScrollLine2D'
    },
    {
      name: 'ScrollStCol1',
      chartType: 'ScrollStackedColumn2D'
    },
    {
      name: 'StArea1',
      chartType: 'StackedArea2D'
    },
    {
      name: 'StArea2',
      chartType: 'StackedArea2D'
    },
    {
      name: 'StArea3',
      chartType: 'StackedArea2D'
    },
    {
      name: 'StBar2D1',
      chartType: 'StackedBar2D'
    },
    {
      name: 'StBar2D2',
      chartType: 'StackedBar2D'
    },
    {
      name: 'StBar3D1',
      chartType: 'StackedBar3D'
    },
    {
      name: 'StCol2D1',
      chartType: 'StackedColumn2D'
    },
    {
      name: 'StMSCol',
      chartType: 'MSStackedColumn2D'
    },
    {
      name: 'StCol2DSingleLine1',
      chartType: 'StackedColumn2DLine'
    },
    {
      name: 'StCol3D1',
      chartType: 'StackedColumn3D'
    },
    {
      name: 'StCol3D2',
      chartType: 'StackedColumn3D'
    },
    {
      name: 'StCol3D3',
      chartType: 'StackedColumn3D'
    },
    {
      name: 'StCol3DLineDY1',
      chartType: 'StackedColumn3DLineDY'
    },
    {
      name: 'StCol3DLineDY2',
      chartType: 'StackedColumn3DLineDY'
    },
    {
      name: 'StCol3DSingleLine1',
      chartType: 'StackedColumn3DLine'
    },
    {
      name: 'XYPlot1',
      chartType: 'Scatter'
    },
    {
      name: 'XYPlot3',
      chartType: 'Scatter'
    },
    {
      name: 'XYPlot4',
      chartType: 'Scatter'
    },
    {
      name: 'XYPlot5',
      chartType: 'Scatter'
    },
    {
      name: 'XYPlot6',
      chartType: 'Scatter'
    },
    {
      name: 'XYPlot7',
      chartType: 'Scatter'
    },
    {
      name: 'ZoomLine1',
      chartType: 'ZoomLine'
    },
    {
      name: 'Zoomline4',
      chartType: 'ZoomLine'
    },
    {
      name: 'ZoomLine3',
      chartType: 'ZoomLine'
    },
    {
      name: 'Zoomline',
      chartType: 'ZoomLine'
    }
  ];
  $scope.$on(
    "$routeChangeSuccess",
    function ($currentRoute, $previousRoute) {
      if ($routeParams.name) {
        $scope.selectName($routeParams.name);
      } else {
        $scope.selectFirst();
      }
      $scope.action = $routeParams.action;
      if ($scope.action === 'code') {
        if (!$scope.selected.code) {
          $q.all([$http.get($scope.selected.xmlUrl), $http.get($scope.selected.jsonUrl)])
            .then(function (data) {
              var xml = data[0],
                json = data[1];
              $scope.selected.code = {
                json: JSON.stringify(json, undefined, 2),
                xml: xml.data
              };
            });
        }
      }
    }
  );
  $scope.navClass = function (page) {
    var routeMatch = $location.path().match(/\/(\w+)\//);
    $scope.currentRoute = routeMatch && routeMatch[1] || 'demo';
    return page === $scope.currentRoute ? 'active' : '';
  };

  $scope.selectFirst = function () {
    if (!$scope.selected) {
      $scope.selected = $scope.demos[0];
    }
  };
  $scope.$watch('selected', function (newValue, oldValue) {
    if ((newValue !== oldValue) || !($location.path().match($scope.action + '/'))) {
      $location.path('/' + $scope.action + '/' + $scope.selected.name);
    }
  });
  $scope.selectName = function () {
    var name = $routeParams.name;
    angular.forEach($scope.demos, function (demo) {
      if (demo.name === name) {
        $scope.selected = demo;
      }
    });
  };
  angular.forEach($scope.demos, function (demo) {
    demo.xmlUrl = 'app/data/xml/' + demo.name + '.xml';
    demo.jsonUrl = 'app/data/json/' + demo.name + '.json';
  });
  $scope.selectFirst();
}
