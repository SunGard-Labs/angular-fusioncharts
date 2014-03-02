var fc = angular.module('fusioncharts', []);

fc.directive('fcChart', ['fcChartFactory', '$timeout', function(fcChartFactory, $timeout) {

    'use strict';

    return {

        restrict: 'AE',

        scope: {

            chartId: '@fcChartId',
            type: '@fcChartType',
            width: '@width',
            height: '@height',
            data: '=fcData', // if string: xml.
            dataType: '@fcDataType', // xml or json. Not xmlurl or jsonurl
            dataUrl: '@fcDataUrl' // use content-type to detect data type

        },

        replace: true,

        link: function(scope, element, attrs) {

            // holds the current chart instance
            var chart, handle;

            function renderData() {

                // this could be invoked twice in a $apply cycle if the type and data has changed for example
                // make sure rendering happens only once.
                if( !handle ) {

                    handle = $timeout(function() {

                        if( scope.data ) {

                            chart.renderData(element, scope.data, scope.dataType);

                        } else if( angular.isString( scope.dataUrl ) ) {

                            chart.renderDataUrl(element, scope.dataUrl, scope.dataType);

                        } else {

                            throw new Error('No data to get. Use the fc-data or fc-data-url attributes.');

                        }

                        handle = null;

                    });

                }
            }

            function createChart(type) {

                if( chart ) {
                    // dispose of previously created chart because the chart type has changed
                    chart.destroy();
                }

                chart = fcChartFactory.create(type, scope.chartId, scope.width, scope.height);

                renderData();

            }

            function reRenderOnChange(newVal, oldVal) {

                if( newVal && newVal !== oldVal ) {
                    renderData();
                }

            }

            // creates the chart and re-creates it if chart type changes
            scope.$watch('type', createChart);

            // watch if data changes
            scope.$watch('data', reRenderOnChange, !angular.isUndefined(attrs.dynamic));

            // watch if the data URL changes
            scope.$watch('dataUrl', reRenderOnChange);

            // cleanup after ourselves
            scope.$on('$destroy', function() {
                chart.destroy();
            });

        }
    };
}]);
