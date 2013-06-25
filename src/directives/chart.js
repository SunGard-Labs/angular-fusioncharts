fc.directive('fcChart', ['$timeout', function($timeout) {
    var counter = 0;

    function renderData(scope, chartObj, render) {
        chartObj.setChartData(scope.chartData, scope.chartDataType);
        if( render === undefined || render ) {
            chartObj.render(scope.id);
        }
    }

    return {
        restrict: 'AE',
        scope: {
            chartId: '@fcChartId',
            type: '@fcChartType',
            width: '@width',
            height: '@height',
            id: '@id',
            chartData: '@fcData',
            chartDataType: '@fcDataType'
        },
        replace: true,
        link: function(scope, element, attrs) {
            $timeout(function() {
                scope.chartId = scope.chartId || scope.id || 'fcChart' + (counter++);
                if( !scope.id ) {
                    scope.id = scope.chartId + 'Id';
                    element.attr('id', scope.id);
                }
                scope.type = scope.type || 'Column3D';
                scope.chartDataType = scope.chartDataType || 'xmlurl'; //xmlurl, xml, jsonurl, json

                var chartObj = new FusionCharts( scope.type, scope.chartId, scope.width, scope.height );
                console.log(chartObj);

                scope.$watch('type', function(newVal, oldVal) {
                    if( newVal === oldVal ) {
                        return;
                    }

                    if(chartObj) {
                        chartObj.dispose();
                    }
                    chartObj = new FusionCharts( scope.type, scope.chartId, scope.width, scope.height );
                    renderData(scope, chartObj);
                });

                // chartData
                scope.$watch('chartData', function(newVal, oldVal) {
                    renderData(scope, chartObj, newVal === oldVal);
                });

                // cleanup after ourselves
                scope.$on('$destroy', function() {
                    chartObj.dispose();
                });
            });

        }
    };
}]);