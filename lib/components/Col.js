'use strict';

exports.__esModule = true;
exports.default = Col;

var _flexboxgrid = require('flexboxgrid');

var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createProps = require('../createProps');

var _createProps2 = _interopRequireDefault(_createProps);

var _types = require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  xs: _types.ColumnSizeType,
  sm: _types.ColumnSizeType,
  md: _types.ColumnSizeType,
  lg: _types.ColumnSizeType,
  xsOffset: _react.PropTypes.number,
  smOffset: _react.PropTypes.number,
  mdOffset: _react.PropTypes.number,
  lgOffset: _react.PropTypes.number,
  first: _types.ViewportSizeType,
  last: _types.ViewportSizeType,
  reverse: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  tagName: _react.PropTypes.string,
  children: _react.PropTypes.node
};

var classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset'
};

function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function getClassNames(props) {
  var extraClasses = [];

  if (props.className) {
    extraClasses.push(props.className);
  }

  if (props.first) {
    extraClasses.push(_flexboxgrid2.default['first-' + props.first]);
  }

  if (props.last) {
    extraClasses.push(_flexboxgrid2.default['last-' + props.last]);
  }

  if (props.reverse) {
    extraClasses.push(_flexboxgrid2.default.reverse);
  }

  return Object.keys(props).filter(function (key) {
    return classMap[key];
  }).map(function (key) {
    return _flexboxgrid2.default[isInteger(props[key]) ? classMap[key] + '-' + props[key] : classMap[key]];
  }).concat(extraClasses);
}

function Col(props) {
  var classNames = getClassNames(props);

  return _react2.default.createElement(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, classNames));
}

Col.propTypes = propTypes;