webpackHotUpdate_N_E("pages/academy",{

/***/ "./components/hero/hero.js":
/*!*********************************!*\
  !*** ./components/hero/hero.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hero_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero.styles */ \"./components/hero/hero.styles.js\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/global */ \"./styles/global.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n\n\nvar _jsxFileName = \"/Volumes/Ben Drive/From The Ground Up/website/frontend/components/hero/hero.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Hero = function Hero(_ref) {\n  var message = _ref.message,\n      href = _ref.href,\n      link = _ref.link,\n      arrow = _ref.arrow,\n      background = _ref.background,\n      height = _ref.height,\n      tags = _ref.tags,\n      postAuthor = _ref.postAuthor,\n      postTag = _ref.postTag,\n      createdAt = _ref.createdAt;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_hero_styles__WEBPACK_IMPORTED_MODULE_1__[\"HeroBackground\"], {\n    background: background,\n    height: height,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_global__WEBPACK_IMPORTED_MODULE_2__[\"MaxContainer\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_hero_styles__WEBPACK_IMPORTED_MODULE_1__[\"Message\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: message\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 6\n        }, _this), href && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: href,\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_global__WEBPACK_IMPORTED_MODULE_2__[\"SecondaryButton\"], {\n            children: link\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 8\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 7\n        }, _this), message === 'Blog' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_hero_styles__WEBPACK_IMPORTED_MODULE_1__[\"Tags\"], {\n          children: tags && tags.tags.map(function (tag) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                href: \"/blog/\".concat(encodeURIComponent(tag.slug)),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  children: tag.slug\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 26,\n                  columnNumber: 13\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 25,\n                columnNumber: 12\n              }, _this)\n            }, tag.slug, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 11\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 7\n        }, _this), postAuthor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_hero_styles__WEBPACK_IMPORTED_MODULE_1__[\"SingleArticle\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [\"By \", postAuthor]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 8\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: createdAt\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 8\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: postTag.map(function (tag) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                href: tag.slug,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 12\n                }, _this)\n              }, tag.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 11\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 8\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 7\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 5\n      }, _this), arrow && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_global__WEBPACK_IMPORTED_MODULE_2__[\"Arrow\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__[\"IoIosArrowDown\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 6\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZXJvL2hlcm8uanM/NzNjYiJdLCJuYW1lcyI6WyJIZXJvIiwibWVzc2FnZSIsImhyZWYiLCJsaW5rIiwiYXJyb3ciLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwidGFncyIsInBvc3RBdXRob3IiLCJwb3N0VGFnIiwiY3JlYXRlZEF0IiwibWFwIiwidGFnIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2x1ZyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBOEY7QUFBQSxNQUEzRkMsT0FBMkYsUUFBM0ZBLE9BQTJGO0FBQUEsTUFBbEZDLElBQWtGLFFBQWxGQSxJQUFrRjtBQUFBLE1BQTVFQyxJQUE0RSxRQUE1RUEsSUFBNEU7QUFBQSxNQUF0RUMsS0FBc0UsUUFBdEVBLEtBQXNFO0FBQUEsTUFBL0RDLFVBQStELFFBQS9EQSxVQUErRDtBQUFBLE1BQW5EQyxNQUFtRCxRQUFuREEsTUFBbUQ7QUFBQSxNQUEzQ0MsSUFBMkMsUUFBM0NBLElBQTJDO0FBQUEsTUFBckNDLFVBQXFDLFFBQXJDQSxVQUFxQztBQUFBLE1BQXpCQyxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQzFHLHNCQUNDLHFFQUFDLDJEQUFEO0FBQWtCLGNBQVUsRUFBRUwsVUFBOUI7QUFBMEMsVUFBTSxFQUFFQyxNQUFsRDtBQUFBLDJCQUNDLHFFQUFDLDJEQUFEO0FBQUEsOEJBQ0MscUVBQUMsb0RBQUQ7QUFBQSxnQ0FFQztBQUFBLG9CQUFLTDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQsRUFHRUMsSUFBSSxpQkFDSixxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBRUEsSUFBWjtBQUFrQixrQkFBUSxNQUExQjtBQUFBLGlDQUNDLHFFQUFDLDhEQUFEO0FBQUEsc0JBQXFCQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixFQVNFRixPQUFPLEtBQUssTUFBWixpQkFDQSxxRUFBQyxpREFBRDtBQUFBLG9CQUNFTSxJQUFJLElBQ0pBLElBQUksQ0FBQ0EsSUFBTCxDQUFVSSxHQUFWLENBQWMsVUFBQ0MsR0FBRCxFQUFTO0FBQ3RCLGdDQUNDO0FBQUEscUNBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxvQkFBSSxrQkFBV0Msa0JBQWtCLENBQUNELEdBQUcsQ0FBQ0UsSUFBTCxDQUE3QixDQUFWO0FBQUEsdUNBQ0M7QUFBQSw0QkFBSUYsR0FBRyxDQUFDRTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsZUFBU0YsR0FBRyxDQUFDRSxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFPQSxXQVJEO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRixFQXdCRU4sVUFBVSxpQkFDVixxRUFBQywwREFBRDtBQUFBLGtDQUNDO0FBQUEsOEJBQVNBLFVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUM7QUFBQSxzQkFBTUU7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZELGVBR0M7QUFBQSxzQkFDRUQsT0FBTyxDQUFDRSxHQUFSLENBQVksVUFBQ0MsR0FBRCxFQUFTO0FBQ3JCLGtDQUNDLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksRUFBRUEsR0FBRyxDQUFDRSxJQUFoQjtBQUFBLHVDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxpQkFBMkJGLEdBQUcsQ0FBQ0csRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERDtBQUtBLGFBTkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsRUF5Q0VYLEtBQUssaUJBQ0wscUVBQUMsb0RBQUQ7QUFBQSwrQkFDQyxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFtREEsQ0FwREQ7O0tBQU1KLEk7QUFzRFNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9oZXJvL2hlcm8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTIGZyb20gJy4vaGVyby5zdHlsZXMnO1xuaW1wb3J0ICogYXMgR1MgZnJvbSAnLi4vLi4vc3R5bGVzL2dsb2JhbCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgSW9Jb3NBcnJvd0Rvd24gfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XG5cbmNvbnN0IEhlcm8gPSAoeyBtZXNzYWdlLCBocmVmLCBsaW5rLCBhcnJvdywgYmFja2dyb3VuZCwgaGVpZ2h0LCB0YWdzLCBwb3N0QXV0aG9yLCBwb3N0VGFnLCBjcmVhdGVkQXQgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxTLkhlcm9CYWNrZ3JvdW5kIGJhY2tncm91bmQ9e2JhY2tncm91bmR9IGhlaWdodD17aGVpZ2h0fT5cblx0XHRcdDxHUy5NYXhDb250YWluZXI+XG5cdFx0XHRcdDxTLk1lc3NhZ2U+XG5cdFx0XHRcdFx0ey8qIElmIGhlcm8gaGFzIENUQSBidXR0b24gKi99XG5cdFx0XHRcdFx0PGgxPnttZXNzYWdlfTwvaDE+XG5cdFx0XHRcdFx0e2hyZWYgJiYgKFxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj17aHJlZn0gcGFzc0hyZWY+XG5cdFx0XHRcdFx0XHRcdDxHUy5TZWNvbmRhcnlCdXR0b24+e2xpbmt9PC9HUy5TZWNvbmRhcnlCdXR0b24+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7LyogR2VuZXJhbCBCbG9nICovfVxuXHRcdFx0XHRcdHttZXNzYWdlID09PSAnQmxvZycgJiYgKFxuXHRcdFx0XHRcdFx0PFMuVGFncz5cblx0XHRcdFx0XHRcdFx0e3RhZ3MgJiZcblx0XHRcdFx0XHRcdFx0XHR0YWdzLnRhZ3MubWFwKCh0YWcpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e3RhZy5zbHVnfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2Jsb2cvJHtlbmNvZGVVUklDb21wb25lbnQodGFnLnNsdWcpfWB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+e3RhZy5zbHVnfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC9TLlRhZ3M+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7LyogSW50ZXJuYWwgQXJ0aWNsZSBQYWdlICovfVxuXHRcdFx0XHRcdHtwb3N0QXV0aG9yICYmIChcblx0XHRcdFx0XHRcdDxTLlNpbmdsZUFydGljbGU+XG5cdFx0XHRcdFx0XHRcdDxkaXY+Qnkge3Bvc3RBdXRob3J9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXY+e2NyZWF0ZWRBdH08L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHR7cG9zdFRhZy5tYXAoKHRhZykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17dGFnLnNsdWd9IGtleT17dGFnLmlkfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT48L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9TLlNpbmdsZUFydGljbGU+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9TLk1lc3NhZ2U+XG5cdFx0XHRcdHthcnJvdyAmJiAoXG5cdFx0XHRcdFx0PEdTLkFycm93PlxuXHRcdFx0XHRcdFx0PElvSW9zQXJyb3dEb3duIC8+XG5cdFx0XHRcdFx0PC9HUy5BcnJvdz5cblx0XHRcdFx0KX1cblx0XHRcdDwvR1MuTWF4Q29udGFpbmVyPlxuXHRcdDwvUy5IZXJvQmFja2dyb3VuZD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hero/hero.js\n");

/***/ })

})