"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6152],{

/***/ 13802:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11151);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/



function _createMdxContent(props) {
  var _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p",
    code: "code",
    pre: "pre"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components),
      {
    MakeCodeExtensionFooter
  } = _components;

  if (!MakeCodeExtensionFooter) _missingMdxReference("MakeCodeExtensionFooter", true);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h1, {
    id: "light-level",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#light-level",
    "aria-label": "light level permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Light level"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The light level extension reports light level as a floating\npoint value between 0.0 and 100.0.\nThe ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "lightLevel"), " method returns the current light level."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The following program outputs the light level whenever the light level changes by 5 percent:"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-blocks"
  }, "{\"source\":\"modules.lightLevel1.onLightLevelChangedBy(5, () => {\\n    led.plotBarGraph(modules.lightLevel1.lightLevel(), 100)\\n})\",\"rendered\":{\"req\":{\"code\":\"modules.lightLevel1.onLightLevelChangedBy(5, () => {\\n    led.plotBarGraph(modules.lightLevel1.lightLevel(), 100)\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac-light-level=github:microsoft/pxt-jacdac/light-level#v1.9.28\"},\"type\":\"renderblocks\",\"id\":\"25d9aaf8a32f04c096381b66cee1d54f\"},\"url\":\"/images/makecode/25d9aaf8a32f04c096381b66cee1d54f.png\"}}\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MakeCodeExtensionFooter, {
    serviceName: "lightlevel"
  }));
}

function MDXContent(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components);
  return MDXLayout ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXLayout, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_createMdxContent, props)) : _createMdxContent(props);
}

/* harmony default export */ __webpack_exports__["default"] = (MDXContent);

function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-clients-makecode-extensions-lightlevel-mdx-76482e08db8d477daea6.js.map