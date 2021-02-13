webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/bloggy/bloggy.styles.js":
/*!********************************************!*\
  !*** ./components/bloggy/bloggy.styles.js ***!
  \********************************************/
/*! exports provided: BlogContainer, BlogArticles, Blog, FeaturedArticles, TopBlogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlogContainer\", function() { return BlogContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlogArticles\", function() { return BlogArticles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Blog\", function() { return Blog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FeaturedArticles\", function() { return FeaturedArticles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TopBlogs\", function() { return TopBlogs; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/global */ \"./styles/global.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\n\nvar BlogContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_styles_global__WEBPACK_IMPORTED_MODULE_1__[\"FlexEven\"]).withConfig({\n  displayName: \"bloggystyles__BlogContainer\",\n  componentId: \"sc-1h563in-0\"\n})([\"align-items:stretch;justify-content:center;margin-top:7rem;gap:3rem;div:nth-child(1){flex:2;}div:nth-child(2){flex:1;}\"]);\nvar BlogArticles = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"bloggystyles__BlogArticles\",\n  componentId: \"sc-1h563in-1\"\n})([\"flex:2;h2{font-size:3.5rem;color:#000;}a{color:#555;text-decoration:none;}\"]);\nvar Blog = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ul.withConfig({\n  displayName: \"bloggystyles__Blog\",\n  componentId: \"sc-1h563in-2\"\n})([\"margin-bottom:5rem;li{img{width:100%;height:auto;}}\"]);\nvar FeaturedArticles = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"bloggystyles__FeaturedArticles\",\n  componentId: \"sc-1h563in-3\"\n})([\"flex:1;\"]);\nvar TopBlogs = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_styles_global__WEBPACK_IMPORTED_MODULE_1__[\"FlexEven\"]).withConfig({\n  displayName: \"bloggystyles__TopBlogs\",\n  componentId: \"sc-1h563in-4\"\n})([\"align-items:center;justify-content:center;margin-bottom:3.5rem;& > div:nth-child(1){flex:1;img{width:8rem;height:8rem;object-fit:cover;border-radius:50%;}}& > div:nth-child(2){position:relative;bottom:0.5rem;margin-left:0.25rem;flex:2.5;.tag{padding-top:0.75rem;font-size:1.4rem;color:#666;li{display:inline;padding-right:0.5rem;a,a:visited{text-decoration:none;font-family:\", \";color:#000;}&::after{content:' /';}&:nth-last-child(1)::after{content:'';}}}.updated{padding-top:0.5rem;font-size:1.3rem;color:#777;}}\"], function (props) {\n  return props.theme.fonts.header;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9nZ3kvYmxvZ2d5LnN0eWxlcy5qcz9mMTNjIl0sIm5hbWVzIjpbIkJsb2dDb250YWluZXIiLCJzdHlsZWQiLCJHUyIsIkJsb2dBcnRpY2xlcyIsImRpdiIsIkJsb2ciLCJ1bCIsIkZlYXR1cmVkQXJ0aWNsZXMiLCJUb3BCbG9ncyIsInByb3BzIiwidGhlbWUiLCJmb250cyIsImhlYWRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsYUFBYSxHQUFHQyxpRUFBTSxDQUFDQyx1REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDhIQUFuQjtBQWFBLElBQU1DLFlBQVksR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxrRkFBbEI7QUFZQSxJQUFNQyxJQUFJLEdBQUdKLHlEQUFNLENBQUNLLEVBQVY7QUFBQTtBQUFBO0FBQUEsMkRBQVY7QUFVQSxJQUFNQyxnQkFBZ0IsR0FBR04seURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxlQUF0QjtBQUlBLElBQU1JLFFBQVEsR0FBR1AsaUVBQU0sQ0FBQ0MsdURBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSwwZ0JBNEJELFVBQUNPLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0FBWixDQUFrQkMsTUFBN0I7QUFBQSxDQTVCQyxDQUFkIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ibG9nZ3kvYmxvZ2d5LnN0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgR1MgZnJvbSAnLi4vLi4vc3R5bGVzL2dsb2JhbCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuZXhwb3J0IGNvbnN0IEJsb2dDb250YWluZXIgPSBzdHlsZWQoR1MuRmxleEV2ZW4pYFxuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbi10b3A6IDdyZW07XG5cdGdhcDogM3JlbTtcblx0ZGl2Om50aC1jaGlsZCgxKSB7XG5cdFx0ZmxleDogMjtcblx0fVxuXHRkaXY6bnRoLWNoaWxkKDIpIHtcblx0XHRmbGV4OiAxO1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgQmxvZ0FydGljbGVzID0gc3R5bGVkLmRpdmBcblx0ZmxleDogMjtcblx0aDIge1xuXHRcdGZvbnQtc2l6ZTogMy41cmVtO1xuXHRcdGNvbG9yOiAjMDAwO1xuXHR9XG5cdGEge1xuXHRcdGNvbG9yOiAjNTU1O1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IEJsb2cgPSBzdHlsZWQudWxgXG5cdG1hcmdpbi1ib3R0b206IDVyZW07XG5cdGxpIHtcblx0XHRpbWcge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0fVxuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgRmVhdHVyZWRBcnRpY2xlcyA9IHN0eWxlZC5kaXZgXG5cdGZsZXg6IDE7XG5gO1xuXG5leHBvcnQgY29uc3QgVG9wQmxvZ3MgPSBzdHlsZWQoR1MuRmxleEV2ZW4pYFxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0bWFyZ2luLWJvdHRvbTogMy41cmVtO1xuXHQmID4gZGl2Om50aC1jaGlsZCgxKSB7XG5cdFx0ZmxleDogMTtcblx0XHRpbWcge1xuXHRcdFx0d2lkdGg6IDhyZW07XG5cdFx0XHRoZWlnaHQ6IDhyZW07XG5cdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHR9XG5cdH1cblx0JiA+IGRpdjpudGgtY2hpbGQoMikge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRib3R0b206IDAuNXJlbTtcblx0XHRtYXJnaW4tbGVmdDogMC4yNXJlbTtcblx0XHRmbGV4OiAyLjU7XG5cdFx0LnRhZyB7XG5cdFx0XHRwYWRkaW5nLXRvcDogMC43NXJlbTtcblx0XHRcdGZvbnQtc2l6ZTogMS40cmVtO1xuXHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRsaSB7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRcdFx0cGFkZGluZy1yaWdodDogMC41cmVtO1xuXHRcdFx0XHRhLFxuXHRcdFx0XHRhOnZpc2l0ZWQge1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmhlYWRlcn07XG5cdFx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0XHRcdGNvbnRlbnQ6ICcgLyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0JjpudGgtbGFzdC1jaGlsZCgxKTo6YWZ0ZXIge1xuXHRcdFx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC51cGRhdGVkIHtcblx0XHRcdHBhZGRpbmctdG9wOiAwLjVyZW07XG5cdFx0XHRmb250LXNpemU6IDEuM3JlbTtcblx0XHRcdGNvbG9yOiAjNzc3O1xuXHRcdH1cblx0fVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/bloggy/bloggy.styles.js\n");

/***/ })

})