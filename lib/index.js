'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _borders2 = require('./_borders');

var _borders3 = _interopRequireDefault(_borders2);

var _colors2 = require('./_colors');

var _colors3 = _interopRequireDefault(_colors2);

var _flex2 = require('./_flex');

var _flex3 = _interopRequireDefault(_flex2);

var _typography2 = require('./_typography');

var _typography3 = _interopRequireDefault(_typography2);

var _whitespace2 = require('./_whitespace');

var _whitespace3 = _interopRequireDefault(_whitespace2);

var _utilities2 = require('./_utilities');

var _utilities3 = _interopRequireDefault(_utilities2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (variables) {
  return Object.assign({}, (0, _borders3.default)(variables), (0, _colors3.default)(variables), _flex3.default, _typography3.default, _whitespace3.default, _utilities3.default);
};