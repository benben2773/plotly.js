/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

/*
 * Export the plotly.js API methods.
 *
 * This file is browserify'ed into a standalone 'Plotly' object.
 *
 */

var Plotly = require('./plotly');

// export the version found in the package.json
exports.version = require('../package.json').version;

// plot api
exports.plot = Plotly.plot;
exports.newPlot = Plotly.newPlot;
exports.restyle = Plotly.restyle;
exports.relayout = Plotly.relayout;
exports.redraw = Plotly.redraw;
exports.extendTraces = Plotly.extendTraces;
exports.prependTraces = Plotly.prependTraces;
exports.addTraces = Plotly.addTraces;
exports.deleteTraces = Plotly.deleteTraces;
exports.moveTraces = Plotly.moveTraces;
exports.setPlotConfig = require('./plot_api/set_plot_config');

// plot icons
exports.Icons = require('../build/ploticon');

// unofficial 'beta' plot methods, use at your own risk
exports.Plots = Plotly.Plots;
exports.Fx = Plotly.Fx;
exports.Snapshot = Plotly.Snapshot;
exports.PlotSchema = Plotly.PlotSchema;
exports.Queue = Plotly.Queue;

// export d3 used in the bundle
exports.d3 = require('d3');

Plotly.register([
    require('./traces/bar'),
    require('./traces/box'),
    require('./traces/heatmap'),
    require('./traces/histogram'),
    require('./traces/histogram2d'),
    require('./traces/histogram2dcontour'),
    require('./traces/pie'),
    require('./traces/contour'),
    require('./traces/scatter3d'),
    require('./traces/surface'),
    require('./traces/mesh3d'),
    require('./traces/scattergeo'),
    require('./traces/choropleth'),
    require('./traces/scattergl')
]);