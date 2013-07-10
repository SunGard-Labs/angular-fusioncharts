describe('fcChartFactory', function () {
    'use strict';

    var factory;

    beforeEach(module('fusioncharts'));

    beforeEach(inject(function (fcChartFactory) {
        factory = fcChartFactory;
    }));

    it('should create a chart object', function () {
        var chart = factory.create();
        expect(FusionCharts).toHaveBeenCalled();
        expect(chart.destroy).toBeDefined();
        expect(chart.renderData).toBeDefined();
        expect(chart.renderDataUrl).toBeDefined();
    });

});
