"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledContainer = exports.StyledIconWrapper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

var StyledIconWrapper = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n"])));

exports.StyledIconWrapper = StyledIconWrapper;

var StyledContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  margin: 0 0 16px;\n  border: 1px solid #ebedf0;\n  border-radius: 2px;\n  transition: all 0.2s;\n\n  .text-divider {\n    display: table;\n\n    &::before,\n    &::after {\n      position: relative;\n      display: table-cell;\n      border-top: 1px solid #e8e8e8;\n      transform: translateY(50%);\n      content: '';\n      content: '';\n    }\n\n    &::before {\n      top: 50%;\n      width: 5%;\n    }\n\n    &::after {\n      top: 50%;\n      width: 95%;\n      width: 95%;\n    }\n\n    & > span {\n      display: inline-block;\n      padding: 0 10px;\n      font-weight: 500;\n      font-size: 16px;\n      font-variant: tabular-nums;\n      line-height: 1.5;\n      white-space: nowrap;\n      text-align: center;\n    }\n  }\n\n  .divider {\n    position: relative;\n    top: -0.06em;\n    display: block;\n    clear: both;\n    box-sizing: border-box;\n    width: 100%;\n    min-width: 100%;\n    height: 1px;\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    font-variant: tabular-nums;\n    line-height: 1.5;\n    list-style: none;\n    background: none;\n    border: dashed #e8e8e8;\n    border-width: 1px 0 0;\n    font-feature-settings: 'tnum';\n  }\n\n  .code-box-demo {\n    padding: 42px 24px 50px;\n    transition: all 0.2s;\n  }\n\n  .code-box-meta {\n    font-size: 14px;\n    line-height: 2;\n  }\n\n  .code-box .ant-divider {\n    margin: 0;\n  }\n\n  .code-box-description {\n    padding: 18px 24px 12px;\n  }\n\n  .code-box-action {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40px;\n    font-size: 16px;\n  }\n\n  .code-box-action .anticon {\n    margin: 0 8px;\n    cursor: pointer;\n  }\n\n  .container_editor_area {\n    padding: 16px;\n    border-top: 1px solid rgb(232, 232, 232);\n  }\n\n  .container__editor {\n    font-variant-ligatures: common-ligatures;\n    border-radius: 3px;\n  }\n\n  .container__editor textarea {\n    background-color: none;\n    outline: 0;\n  }\n\n  .button {\n    display: inline-block;\n    padding: 0 6px;\n    color: #fff;\n    text-decoration: none;\n    background: #000;\n  }\n\n  .button:hover {\n    background: linear-gradient(45deg, #e42b66, #e2433f);\n  }\n\n  /* Syntax highlighting */\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: #90a4ae;\n  }\n  .token.punctuation {\n    color: #9e9e9e;\n  }\n  .namespace {\n    opacity: 0.7;\n  }\n  .token.property,\n  .token.tag,\n  .token.boolean,\n  .token.number,\n  .token.constant,\n  .token.symbol,\n  .token.deleted {\n    color: #e91e63;\n  }\n  .token.selector,\n  .token.attr-name,\n  .token.string,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #4caf50;\n  }\n  .token.operator,\n  .token.entity,\n  .token.url,\n  .language-css .token.string,\n  .style .token.string {\n    color: #795548;\n  }\n  .token.atrule,\n  .token.attr-value,\n  .token.keyword {\n    color: #3f51b5;\n  }\n  .token.function {\n    color: #f44336;\n  }\n  .token.regex,\n  .token.important,\n  .token.variable {\n    color: #ff9800;\n  }\n  .token.important,\n  .token.bold {\n    font-weight: bold;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n  .token.entity {\n    cursor: help;\n  }\n"])));

exports.StyledContainer = StyledContainer;