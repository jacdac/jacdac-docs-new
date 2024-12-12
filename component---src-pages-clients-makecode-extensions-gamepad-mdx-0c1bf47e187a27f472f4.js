"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4146],{

/***/ 12258:
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
    h2: "h2",
    pre: "pre"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components),
      {
    MakeCodeExtensionFooter
  } = _components;

  if (!MakeCodeExtensionFooter) _missingMdxReference("MakeCodeExtensionFooter", true);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h1, {
    id: "gamepad",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#gamepad",
    "aria-label": "gamepad permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Gamepad"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The gamepad extension supports a two axis directional joystick\nvia methods ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "x"), " and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "y"), " that return values in the range -100.0 to +100.0.\nEvents are generated by various motions of the joystick, as well\nas optional buttons that may be associated with the joystick."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "coordinates",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#coordinates",
    "aria-label": "coordinates permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Coordinates"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-blocks"
  }, "{\"source\":\"basic.forever(() => {\\n    plot(modules.gamepad1.x(), modules.gamepad1.y())\\n})\\n\\nfunction plot(x: number, y: number) {\\n        basic.clearScreen();\\n        let dispX = 2;\\n        let dispY = 2;\\n        if (x < -30)\\n            dispX--;\\n        if (x < -60)\\n            dispX--;\\n        if (x > 30)\\n            dispX++;\\n        if (x > 60)\\n            dispX++;\\n        if (y < -30)\\n            dispY--;\\n        if (y < -60)\\n            dispY--;\\n        if (y > 30)\\n            dispY++;\\n        if (y > 60)\\n            dispY++;\\n        led.plot(dispX, dispY);\\n}\\n\",\"rendered\":{\"req\":{\"code\":\"basic.forever(() => {\\n    plot(modules.gamepad1.x(), modules.gamepad1.y())\\n})\\n\\nfunction plot(x: number, y: number) {\\n        basic.clearScreen();\\n        let dispX = 2;\\n        let dispY = 2;\\n        if (x < -30)\\n            dispX--;\\n        if (x < -60)\\n            dispX--;\\n        if (x > 30)\\n            dispX++;\\n        if (x > 60)\\n            dispX++;\\n        if (y < -30)\\n            dispY--;\\n        if (y < -60)\\n            dispY--;\\n        if (y > 30)\\n            dispY++;\\n        if (y > 60)\\n            dispY++;\\n        led.plot(dispX, dispY);\\n}\\n\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac-gamepad=github:microsoft/pxt-jacdac/gamepad#v1.9.28\"},\"type\":\"renderblocks\",\"id\":\"4d9ea6a97f400c8becb9bec7afdae137\"},\"url\":\"/images/makecode/4d9ea6a97f400c8becb9bec7afdae137.png\"}}\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "events",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#events",
    "aria-label": "events permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Events"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-blocks"
  }, "{\"source\":\"modules.gamepad1.onEvent(jacdac.GamepadEvent.ButtonsChanged, function () {\\n    if (modules.gamepad1.isButtonDown(jacdac.GamepadButtons.Left)) {\\n        led.stopAnimation()\\n        basic.showArrow(ArrowNames.West)\\n    } else if (modules.gamepad1.isButtonDown(jacdac.GamepadButtons.Right)) {\\n        led.stopAnimation()\\n        basic.showArrow(ArrowNames.East)\\n    } else if (modules.gamepad1.isButtonDown(jacdac.GamepadButtons.Up)) {\\n        led.stopAnimation()\\n        basic.showArrow(ArrowNames.North)\\n    } else if (modules.gamepad1.isButtonDown(jacdac.GamepadButtons.Down)) {\\n        led.stopAnimation()\\n        basic.showArrow(ArrowNames.South)\\n    }\\n})\",\"rendered\":{\"req\":{\"code\":\"modules.gamepad1.onEvent(jacdac.GamepadEvent.ButtonsChanged, function () {\\n    if (modules.gamepad1.isButtonDown(jacdac.GamepadButtons.Left)) {\\n        led.stopAnimation()\\n        basic.showArrow(ArrowNames.West)\\n    } else if (modules.gamepad1.isButtonDown(jacdac.GamepadButtons.Right)) {\\n        led.stopAnimation()\\n        basic.showArrow(ArrowNames.East)\\n    } else if (modules.gamepad1.isButtonDown(jacdac.GamepadButtons.Up)) {\\n        led.stopAnimation()\\n        basic.showArrow(ArrowNames.North)\\n    } else if (modules.gamepad1.isButtonDown(jacdac.GamepadButtons.Down)) {\\n        led.stopAnimation()\\n        basic.showArrow(ArrowNames.South)\\n    }\\n})\",\"options\":{\"pixelDensity\":1,\"package\":\"jacdac-gamepad=github:microsoft/pxt-jacdac/gamepad#v1.9.28\"},\"type\":\"renderblocks\",\"id\":\"af1b92896d3d302bd423078dc3ee712b\"},\"url\":\"/images/makecode/af1b92896d3d302bd423078dc3ee712b.png\"}}\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MakeCodeExtensionFooter, {
    serviceName: "gamepad"
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
//# sourceMappingURL=component---src-pages-clients-makecode-extensions-gamepad-mdx-0c1bf47e187a27f472f4.js.map