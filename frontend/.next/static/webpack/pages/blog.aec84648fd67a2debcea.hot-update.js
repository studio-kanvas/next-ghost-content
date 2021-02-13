webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/hero/hero.js":
/*!*********************************!*\
  !*** ./components/hero/hero.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hero_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero.styles */ \"./components/hero/hero.styles.js\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/global */ \"./styles/global.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n\n\nvar _jsxFileName = \"/Volumes/Ben Drive/From The Ground Up/website/frontend/components/hero/hero.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Hero = function Hero(_ref) {\n  var message = _ref.message,\n      href = _ref.href,\n      link = _ref.link,\n      arrow = _ref.arrow,\n      background = _ref.background,\n      height = _ref.height,\n      tags = _ref.tags;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_hero_styles__WEBPACK_IMPORTED_MODULE_1__[\"HeroBackground\"], {\n    background: background,\n    height: height,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_global__WEBPACK_IMPORTED_MODULE_2__[\"MaxContainer\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_hero_styles__WEBPACK_IMPORTED_MODULE_1__[\"Message\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: message\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 6\n        }, _this), href && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: href,\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_global__WEBPACK_IMPORTED_MODULE_2__[\"SecondaryButton\"], {\n            children: link\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 8\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 7\n        }, _this), message === 'Blog' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_hero_styles__WEBPACK_IMPORTED_MODULE_1__[\"Tags\"], {\n          children: tags.tags.map(function (tag) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                href: \"/blog/\".concat(encodeURIComponent(tag.slug)),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  children: tag.slug\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 23,\n                  columnNumber: 12\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 22,\n                columnNumber: 11\n              }, _this)\n            }, tag.slug, false, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 10\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 7\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 5\n      }, _this), arrow && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_global__WEBPACK_IMPORTED_MODULE_2__[\"Arrow\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__[\"IoIosArrowDown\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 6\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZXJvL2hlcm8uanM/NzNjYiJdLCJuYW1lcyI6WyJIZXJvIiwibWVzc2FnZSIsImhyZWYiLCJsaW5rIiwiYXJyb3ciLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwidGFncyIsIm1hcCIsInRhZyIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE4RDtBQUFBLE1BQTNEQyxPQUEyRCxRQUEzREEsT0FBMkQ7QUFBQSxNQUFsREMsSUFBa0QsUUFBbERBLElBQWtEO0FBQUEsTUFBNUNDLElBQTRDLFFBQTVDQSxJQUE0QztBQUFBLE1BQXRDQyxLQUFzQyxRQUF0Q0EsS0FBc0M7QUFBQSxNQUEvQkMsVUFBK0IsUUFBL0JBLFVBQStCO0FBQUEsTUFBbkJDLE1BQW1CLFFBQW5CQSxNQUFtQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUMxRSxzQkFDQyxxRUFBQywyREFBRDtBQUFrQixjQUFVLEVBQUVGLFVBQTlCO0FBQTBDLFVBQU0sRUFBRUMsTUFBbEQ7QUFBQSwyQkFDQyxxRUFBQywyREFBRDtBQUFBLDhCQUNDLHFFQUFDLG9EQUFEO0FBQUEsZ0NBQ0M7QUFBQSxvQkFBS0w7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELEVBRUVDLElBQUksaUJBQ0oscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUVBLElBQVo7QUFBa0Isa0JBQVEsTUFBMUI7QUFBQSxpQ0FDQyxxRUFBQyw4REFBRDtBQUFBLHNCQUFxQkM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsRUFPRUYsT0FBTyxLQUFLLE1BQVosaUJBQ0EscUVBQUMsaURBQUQ7QUFBQSxvQkFDRU0sSUFBSSxDQUFDQSxJQUFMLENBQVVDLEdBQVYsQ0FBYyxVQUFDQyxHQUFELEVBQVM7QUFDdkIsZ0NBQ0M7QUFBQSxxQ0FDQyxxRUFBQyxnREFBRDtBQUFNLG9CQUFJLGtCQUFXQyxrQkFBa0IsQ0FBQ0QsR0FBRyxDQUFDRSxJQUFMLENBQTdCLENBQVY7QUFBQSx1Q0FDQztBQUFBLDRCQUFJRixHQUFHLENBQUNFO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxlQUFTRixHQUFHLENBQUNFLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQU9BLFdBUkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELEVBc0JFUCxLQUFLLGlCQUNMLHFFQUFDLG9EQUFEO0FBQUEsK0JBQ0MscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBZ0NBLENBakNEOztLQUFNSixJO0FBbUNTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaGVyby9oZXJvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUyBmcm9tICcuL2hlcm8uc3R5bGVzJztcbmltcG9ydCAqIGFzIEdTIGZyb20gJy4uLy4uL3N0eWxlcy9nbG9iYWwnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IElvSW9zQXJyb3dEb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuXG5jb25zdCBIZXJvID0gKHsgbWVzc2FnZSwgaHJlZiwgbGluaywgYXJyb3csIGJhY2tncm91bmQsIGhlaWdodCwgdGFncyB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFMuSGVyb0JhY2tncm91bmQgYmFja2dyb3VuZD17YmFja2dyb3VuZH0gaGVpZ2h0PXtoZWlnaHR9PlxuXHRcdFx0PEdTLk1heENvbnRhaW5lcj5cblx0XHRcdFx0PFMuTWVzc2FnZT5cblx0XHRcdFx0XHQ8aDE+e21lc3NhZ2V9PC9oMT5cblx0XHRcdFx0XHR7aHJlZiAmJiAoXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPXtocmVmfSBwYXNzSHJlZj5cblx0XHRcdFx0XHRcdFx0PEdTLlNlY29uZGFyeUJ1dHRvbj57bGlua308L0dTLlNlY29uZGFyeUJ1dHRvbj5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdHttZXNzYWdlID09PSAnQmxvZycgJiYgKFxuXHRcdFx0XHRcdFx0PFMuVGFncz5cblx0XHRcdFx0XHRcdFx0e3RhZ3MudGFncy5tYXAoKHRhZykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXt0YWcuc2x1Z30+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvYmxvZy8ke2VuY29kZVVSSUNvbXBvbmVudCh0YWcuc2x1Zyl9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+e3RhZy5zbHVnfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvUy5UYWdzPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvUy5NZXNzYWdlPlxuXHRcdFx0XHR7YXJyb3cgJiYgKFxuXHRcdFx0XHRcdDxHUy5BcnJvdz5cblx0XHRcdFx0XHRcdDxJb0lvc0Fycm93RG93biAvPlxuXHRcdFx0XHRcdDwvR1MuQXJyb3c+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0dTLk1heENvbnRhaW5lcj5cblx0XHQ8L1MuSGVyb0JhY2tncm91bmQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hero/hero.js\n");

/***/ })

})