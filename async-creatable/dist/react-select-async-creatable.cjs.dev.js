'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('@babel/runtime/helpers/extends');
var React = require('react');
var Select = require('../../dist/Select-893a3776.cjs.dev.js');
var useAsync = require('../../dist/useAsync-6d052b01.cjs.dev.js');
var useStateManager = require('../../dist/useStateManager-7748b351.cjs.dev.js');
var useCreatable = require('../../dist/useCreatable-603a2d0e.cjs.dev.js');
require('@babel/runtime/helpers/objectSpread2');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/inherits');
require('@babel/runtime/helpers/createSuper');
require('@babel/runtime/helpers/toConsumableArray');
require('../../dist/index-d1cb43f3.cjs.dev.js');
require('@emotion/react');
require('@babel/runtime/helpers/slicedToArray');
require('@babel/runtime/helpers/objectWithoutProperties');
require('@babel/runtime/helpers/typeof');
require('@babel/runtime/helpers/taggedTemplateLiteral');
require('@babel/runtime/helpers/defineProperty');
require('react-dom');
require('@floating-ui/dom');
require('use-isomorphic-layout-effect');
require('memoize-one');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var AsyncCreatableSelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var stateManagerProps = useAsync.useAsync(props);
  var creatableProps = useStateManager.useStateManager(stateManagerProps);
  var selectProps = useCreatable.useCreatable(creatableProps);
  return /*#__PURE__*/React__namespace.createElement(Select.Select, _extends({
    ref: ref
  }, selectProps));
});
var AsyncCreatableSelect$1 = AsyncCreatableSelect;

exports["default"] = AsyncCreatableSelect$1;
