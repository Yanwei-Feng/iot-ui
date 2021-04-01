"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CodeBox = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _reactSimpleCodeEditor = _interopRequireDefault(require("react-simple-code-editor"));

var _reactCopyToClipboard = _interopRequireDefault(require("react-copy-to-clipboard"));

var _reactUse = require("react-use");

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _clipboard = _interopRequireDefault(require("react-feather/dist/icons/clipboard"));

var _code = _interopRequireDefault(require("react-feather/dist/icons/code"));

var _prismCore = require("prismjs/components/prism-core");

var _style = require("./style");

require("prismjs/components/prism-clike");

require("prismjs/components/prism-javascript");

require("prismjs/components/prism-markup");

require('prismjs/components/prism-jsx');

var CodeBox = function CodeBox(_ref) {
  var code = _ref.code,
      title = _ref.title,
      desc = _ref.desc,
      children = _ref.children;

  var _useToggle = (0, _reactUse.useToggle)(false),
      _useToggle2 = (0, _slicedToArray2.default)(_useToggle, 2),
      isEditVisible = _useToggle2[0],
      toggleEditVisible = _useToggle2[1];

  return /*#__PURE__*/_react.default.createElement(_style.StyledContainer, null, /*#__PURE__*/_react.default.createElement("section", {
    className: "code-box-demo"
  }, " ", children), /*#__PURE__*/_react.default.createElement("section", {
    className: "code-box-meta"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-divider"
  }, /*#__PURE__*/_react.default.createElement("span", null, title || '示例')), /*#__PURE__*/_react.default.createElement("div", {
    className: "code-box-description"
  }, /*#__PURE__*/_react.default.createElement("p", null, desc || '暂无描述')), /*#__PURE__*/_react.default.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "code-box-action"
  }, /*#__PURE__*/_react.default.createElement(_reactCopyToClipboard.default, {
    text: code,
    onCopy: function onCopy() {
      return alert('复制成功');
    }
  }, /*#__PURE__*/_react.default.createElement(_clipboard.default, {
    "data-place": "top",
    "data-tip": "\u590D\u5236\u4EE3\u7801"
  })), /*#__PURE__*/_react.default.createElement(_style.StyledIconWrapper, {
    onClick: toggleEditVisible
  }, /*#__PURE__*/_react.default.createElement(_code.default, {
    "data-place": "top",
    "data-tip": isEditVisible ? '收起代码' : '显示代码'
  })))), renderEditor(), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, null));

  function renderEditor() {
    if (!isEditVisible) return null;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "container_editor_area"
    }, /*#__PURE__*/_react.default.createElement(_reactSimpleCodeEditor.default, {
      readOnly: true,
      value: code,
      onValueChange: function onValueChange() {},
      highlight: function highlight(code) {
        return (0, _prismCore.highlight)(code, _prismCore.languages.jsx);
      },
      padding: 10,
      className: "container__editor",
      style: {
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 14
      }
    }));
  }
};

exports.CodeBox = CodeBox;
var _default = CodeBox;
exports.default = _default;