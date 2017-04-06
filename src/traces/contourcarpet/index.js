/**
* Copyright 2012-2017, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var ContourCarpet = {};

ContourCarpet.attributes = require('./attributes');
ContourCarpet.supplyDefaults = require('./defaults');
ContourCarpet.colorbar = require('../contour/colorbar');
ContourCarpet.calc = require('./calc');
ContourCarpet.plot = require('./plot');
ContourCarpet.style = require('./style');

ContourCarpet.moduleType = 'trace';
ContourCarpet.name = 'contourcarpet';
ContourCarpet.basePlotModule = require('../../plots/cartesian');
ContourCarpet.categories = ['cartesian', 'carpet', 'contour', 'symbols', 'markerColorscale', 'showLegend', 'hasLines', 'carpetDependent'];
ContourCarpet.meta = {
    hrName: 'contour_carpet',
    description: [].join(' ')
};

module.exports = ContourCarpet;