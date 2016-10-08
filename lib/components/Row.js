'use strict';

exports.__esModule = true;
exports.default = Row;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flexboxgrid = require('flexboxgrid');

var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

var _createProps = require('../createProps');

var _createProps2 = _interopRequireDefault(_createProps);

var _types = require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

var propTypes = {
  reverse: _react.PropTypes.bool,
  start: _types.ViewportSizeType,
  center: _types.ViewportSizeType,
  end: _types.ViewportSizeType,
  top: _types.ViewportSizeType,
  middle: _types.ViewportSizeType,
  bottom: _types.ViewportSizeType,
  around: _types.ViewportSizeType,
  between: _types.ViewportSizeType,
  className: _react.PropTypes.string,
  tagName: _react.PropTypes.string,
  children: _react.PropTypes.node
};

function getClassNames(props) {
  var modificators = [props.className, _flexboxgrid2.default.row];

  for (var i = 0; i < rowKeys.length; ++i) {
    var key = rowKeys[i];
    var value = props[key];
    if (value) {
      modificators.push(_flexboxgrid2.default[key + '-' + value]);
    }
  }

  if (props.reverse) {
    modificators.push(_flexboxgrid2.default.reverse);
  }

  return modificators;
}

function Row(props) {
  return _react2.default.createElement(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, getClassNames(props)));
}

Row.propTypes = propTypes;