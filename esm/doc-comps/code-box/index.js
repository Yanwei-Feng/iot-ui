import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
import Editor from 'react-simple-code-editor';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useToggle } from 'react-use';
import ReactTooltip from 'react-tooltip';
import IconCopy from 'react-feather/dist/icons/clipboard';
import IconCode from 'react-feather/dist/icons/code';
import { highlight as _highlight, languages } from 'prismjs/components/prism-core';
import { StyledContainer, StyledIconWrapper } from './style';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';

require('prismjs/components/prism-jsx');

export var CodeBox = function CodeBox(_ref) {
  var code = _ref.code,
      title = _ref.title,
      desc = _ref.desc,
      children = _ref.children;

  var _useToggle = useToggle(false),
      _useToggle2 = _slicedToArray(_useToggle, 2),
      isEditVisible = _useToggle2[0],
      toggleEditVisible = _useToggle2[1];

  return /*#__PURE__*/React.createElement(StyledContainer, null, /*#__PURE__*/React.createElement("section", {
    className: "code-box-demo"
  }, " ", children), /*#__PURE__*/React.createElement("section", {
    className: "code-box-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-divider"
  }, /*#__PURE__*/React.createElement("span", null, title || '示例')), /*#__PURE__*/React.createElement("div", {
    className: "code-box-description"
  }, /*#__PURE__*/React.createElement("p", null, desc || '暂无描述')), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "code-box-action"
  }, /*#__PURE__*/React.createElement(CopyToClipboard, {
    text: code,
    onCopy: function onCopy() {
      return alert('复制成功');
    }
  }, /*#__PURE__*/React.createElement(IconCopy, {
    "data-place": "top",
    "data-tip": "\u590D\u5236\u4EE3\u7801"
  })), /*#__PURE__*/React.createElement(StyledIconWrapper, {
    onClick: toggleEditVisible
  }, /*#__PURE__*/React.createElement(IconCode, {
    "data-place": "top",
    "data-tip": isEditVisible ? '收起代码' : '显示代码'
  })))), renderEditor(), /*#__PURE__*/React.createElement(ReactTooltip, null));

  function renderEditor() {
    if (!isEditVisible) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "container_editor_area"
    }, /*#__PURE__*/React.createElement(Editor, {
      readOnly: true,
      value: code,
      onValueChange: function onValueChange() {},
      highlight: function highlight(code) {
        return _highlight(code, languages.jsx);
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
export default CodeBox;