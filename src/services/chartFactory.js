/* global fc */
/* global FusionCharts */
fc.provider('fcChartFactory', function() {

    'use strict';

    var provider = this;
    var idCounter = 0;

    provider.useFlash = false;
    provider.defaultChartType = 'Column3D';

    function getId(element, chart) {

        var id = element.attr('id');

        if( !id ) {
            // FusionCharts requires an id on the element
            id = chart.id + 'Id';
            element.attr('id', id);
        }

        return id;

    }

    provider.$get = ['$q', '$http', function($q, $http) {

        // The chart API. What a directive needs to work with a chart.
        // Preserve name from minification.
        provider.FCChart = function(chartType, chartId, width, height) {

            chartType = chartType || provider.defaultChartType;

            if( provider.useFlash ) {
                chartType += '.swf';
            }

            if( !chartId ) {
                chartId = 'fcChart' + idCounter++;
            }

            // keep FusionCharts object hidden.
            var chart = new FusionCharts( chartType, chartId, width, height );

            function determineDataType(data) {

                // angular automatically translates json coming from $http into an object and leaves xml
                // as a string.
                if( angular.isString(data) ) {
                    return 'xml';
                } else {
                    return 'json';
                }

            }

            function wasDestroyed(c) {
                return !c.id;
            }

            // disposes of the chart in FusionCharts
            this.destroy = function() {
                chart.dispose();
            };

            /**
             * Render the chart with the provided data
             * @param elem Element that will contain the chart.
             * @param d The data as a string (usually xml) or as an object
             * @param dataType Optional. Can be "json" or "xml". If not provided, the dataType is guessed.
             */
            this.renderData = function(elem, d, dataType) {

                var id = getId(elem, chart);

                $q.when(d).then(function(data) {

                    // ensure the chart was not destroyed before the promise got resolved
                    if( !wasDestroyed(chart) ) {

                        chart.setChartData(data, dataType || determineDataType(data) );

                        if( !chart.hasRendered() ) {
                            chart.render(id);
                        }

                    }

                });

            };

            /**
             * Render the chart with the data fetched from the provided Url
             * @param elem Element that will contain the chart.
             * @param dataUrl The URL from where to GET the data.
             * @param dataType Optional. Can be "json" or "xml". If not provided, the dataType is guessed.
             */
            this.renderDataUrl = function(elem, dataUrl, dataType) {

                if( angular.isString( dataUrl ) ) {

                    var deferred = $q.defer();

                    $http.get(dataUrl).success(function(data) {
                        deferred.resolve(data);
                    }).error( function( response, code, headers, config) {
                        deferred.reject('Failed to load data at: ' + config.url);
                    });

                    this.renderData(elem, deferred.promise, dataType);

                } else {

                    throw new Error('The dataUrl must be a string');

                }
            };
        };

        return {

            create: function(chartType, chartId, width, height) {
                return new provider.FCChart(chartType, chartId, width, height);
            }

        };

    }];

});
