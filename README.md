# AngularJS Integration For FusionCharts

Version: 0.0.1

## About angular-fusioncharts

For live examples and more on this project, visit its [GitHub page](http://sungard-labs.github.io/angular-fusioncharts).

## Compatibility and Requirements

angular-fusioncharts was designed to work with FusionCharts Suite XT and AngularJS version 1.x.

angular-fusioncharts currently depends on the following libraries:

- [FusionCharts Suite XT](http://www.fusioncharts.com) vCurrent
- [AngularJS](http://www.angularjs.org) v1.x

Note that FusionCharts will load the jQuery library it comes bundled with. You may prefer to include your own.

## Installing

```
bower install angular-fusioncharts
```

## fcChart Directive

The ```fcChart``` directive provides a lightweight wrapper around FusionCharts and lets you insert a chart in your page. The JavaScript charts will be used by default. If for some reason you want to use the flash based charts, you will need to
tell the fcChartFactoryProvider about it at config time:

```javascript
myModule.config( [ 'fcChartFactoryProvider', function(chartFactory) {
    chartFactory.useFlash = true; // use flash if the platform supports it.
}]);
```

### Directive Info

This directive creates an isolate scope.
This directive can be used as an element or attribute.

### Usage

```
<fc-chart fc-chart-type="Bar2D" fc-data="monthlySales" width="100%">
```

### Attributes

One of fc-data and fc-data-url is required.

Attribute        | Type             | Description
-----------------|------------------|----------------------------------------------------------
fc-chart-type    | string           | One of the Chart Types listed below. Default: Column3D.
fc-data          | object/string    | The chart data & settings expected by fusion charts. Use a string for xml.
fc-data-url      | string           | A URL pointing to the chart's data.
fc-data-type     | string           | Can be xml or json, but will be guessed if not provided.
dynamic          | -                | By being present, tells fcChart to use object comparison for fc-data's watch.
width            | number           | The width of the chart.
height           | number           | The height of the chart.

### Chart Types

#### Single Series Charts

Chart Type      | fc-chart-type
----------------|---------------
Column 3D       | Column3D
Column 2D       | Column2D
Line 2D         | Line
Area 2D         | Area2D
Bar 2D          | Bar2D
Pie 2D          | Pie2D
Pie 3D          | Pie3D
Doughnut 2D     | Doughnut2D
Doughnut 3D     | Doughnut3D
Pareto 2D       | Pareto2D
Pareto 3D       | Pareto3D

#### Multi-series Charts

Chart Type             | fc-chart-type
-----------------------|---------------
Multi-series Column 2D | MSColumn2D
Multi-series Column 3D | MSColumn3D
Multi-series Line 2D   | MSLine
Multi-series Bar 2D    | MSBar2D
Multi-series Bar 3D    | MSBar3D
Multi-series Area 2D   | MSArea
Marimekko              | Marimekko
Zoom Line              | ZoomLine

#### Stacked Charts

Chart Type                     | fc-chart-type
-------------------------------|------------------
Stacked Column 3D              | StackedColumn3D
Stacked Column 2D              | StackedColumn2D
Stacked Bar 2D                 | StackedBar2D
Stacked Bar 3D                 | StackedBar3D
Stacked Area 2D                | StackedArea2D
Multi-series Stacked Column 2D | MSStackedColumn2D

### Combination Charts

Chart Type                     | fc-chart-type
-------------------------------|------------------
True 3D Chart (Multi-series 3D Single Y Combination chart - Column + Line + Area) | MSCombi3D
Multi-series 2D Single Y Combination Chart (Column + Line + Area) | MSCombi2D
Multi-series Column 3D + Multi-series Line - Single Y Axis | MSColumnLine3D
Stacked Column2D + Line single Y Axis | StackedColumn2DLine
Stacked Column3D + Line single Y Axis | StackedColumn3DLine
Multi-series 2D Dual Y Combination Chart (Column + Line + Area) | MSCombiDY2D
Multi-series Column 3D + Multi-series Line - Dual Y Axis | MSColumn3DLineDY
Stacked Column 3D + Line Dual Y Axis | StackedColumn3DLineDY
Multi-series Stacked Column 2D + Line Dual Y Axis | MSStackedColumn2DLineDY

#### XY Plot Charts

Chart Type     | fc-chart-type
---------------|------------------
Scatter Chart  | Scatter
Bubble Chart   | Bubble

#### Scroll Charts

Chart Type                      | fc-chart-type
--------------------------------|------------------
Scroll Column 2D                | ScrollColumn2D
Scroll Line 2D                  | ScrollLine2D
Scroll Area 2D                  | ScrollArea2D
Scroll Stacked Column 2D        | ScrollStackedColumn2D
Scroll Combination 2D (Single Y)| ScrollCombi2D
Scroll Combination 2D (Dual Y)  | ScrollCombiDY2D

#### Others

Chart Type                    | fc-chart-type
------------------------------|------------------
Single Series Grid Component  | SSGrid


## Running unit tests
### Setup
Run the following commands before running test-cases for the first time:

1. `npm install` - This will install Bower globally and Karma test runner locally.
2. `bower install` - This will install components that are needed to run test-cases.

### Running
Tests can be run using following command: `karma start`

## How to Contribute

If you would like to contribute to angular-fusioncharts' source code, please read the [guidelines for pull requests and contributions](CONTRIBUTING.md). Following these guidelines will help make your contributions easier to bring in to the next release.

## Getting Help

StackOverflow is a good place to start, but be sure to read the [documentation for FusionCharts](http://www.fusioncharts.com/support/documentation/), and of course the [AngularJS documentation](http://docs.angularjs.org/api/)

## Release Notes

For change logs and release notes, see the [changelog](CHANGELOG.md) file.

## MIT License

Copyright © 2013 SunGard

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
