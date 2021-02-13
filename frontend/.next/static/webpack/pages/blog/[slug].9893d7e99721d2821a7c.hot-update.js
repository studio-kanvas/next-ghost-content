webpackHotUpdate_N_E("pages/blog/[slug]",{

/***/ "./components/bloggy/bloggy.js":
/*!*************************************!*\
  !*** ./components/bloggy/bloggy.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bloggy_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bloggy.styles */ \"./components/bloggy/bloggy.styles.js\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/global */ \"./styles/global.js\");\n/* harmony import */ var _sidebarmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebarmail */ \"./components/sidebarmail/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../title */ \"./components/title/index.js\");\n\n\nvar _jsxFileName = \"/Volumes/Ben Drive/From The Ground Up/website/frontend/components/bloggy/bloggy.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Bloggy = function Bloggy(_ref) {\n  var posts = _ref.posts,\n      post = _ref.post;\n  console.log(posts);\n\n  var timeConvert = function timeConvert(time) {\n    time = time.slice(0, 10);\n    return time;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_bloggy_styles__WEBPACK_IMPORTED_MODULE_1__[\"BlogContainer\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_bloggy_styles__WEBPACK_IMPORTED_MODULE_1__[\"BlogArticles\"], {\n      children: [posts && posts.map(function (post) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          href: \"/blog/\".concat(encodeURIComponent(post.slug)),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_bloggy_styles__WEBPACK_IMPORTED_MODULE_1__[\"Blog\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  src: post.feature_image,\n                  alt: \"From The Ground Up - \".concat(post.title)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 26,\n                  columnNumber: 12\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 25,\n                columnNumber: 11\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n                  children: post.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 32,\n                  columnNumber: 12\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 11\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: post.excerpt\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 11\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 10\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 9\n          }, _this)\n        }, post.excerpt, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 8\n        }, _this);\n      }), post && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_bloggy_styles__WEBPACK_IMPORTED_MODULE_1__[\"Article\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: post.feature_image,\n          alt: \"From The Ground Up - \".concat(post.title)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 6\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_bloggy_styles__WEBPACK_IMPORTED_MODULE_1__[\"FeaturedArticles\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        title: \"Top Articles\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 5\n      }, _this), posts && posts.map(function (post) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_bloggy_styles__WEBPACK_IMPORTED_MODULE_1__[\"TopBlogs\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n              href: \"/blog/\".concat(encodeURIComponent(post.slug)),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                  src: post.feature_image\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 58,\n                  columnNumber: 12\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 11\n              }, _this)\n            }, post.excerpt, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 10\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: post.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 10\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n              className: \"tag\",\n              children: post.tags.map(function (tag) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n                    href: \"/blog/\".concat(encodeURIComponent(tag.slug)),\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                      children: tag.name\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 72,\n                      columnNumber: 15\n                    }, _this)\n                  }, post.excerpt, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 68,\n                    columnNumber: 14\n                  }, _this)\n                }, tag.id, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 67,\n                  columnNumber: 13\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 10\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"updated\",\n              children: [\"Updated \", timeConvert(post.updated_at)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 10\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 9\n          }, _this)]\n        }, post.feature_image, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 8\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sidebarmail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Bloggy;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bloggy);\n\nvar _c;\n\n$RefreshReg$(_c, \"Bloggy\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9nZ3kvYmxvZ2d5LmpzPzhiNTgiXSwibmFtZXMiOlsiQmxvZ2d5IiwicG9zdHMiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInRpbWVDb252ZXJ0IiwidGltZSIsInNsaWNlIiwibWFwIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2x1ZyIsImZlYXR1cmVfaW1hZ2UiLCJ0aXRsZSIsImV4Y2VycHQiLCJ0YWdzIiwidGFnIiwibmFtZSIsImlkIiwidXBkYXRlZF9hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXFCO0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNuQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7O0FBRUEsTUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQzdCQSxRQUFJLEdBQUdBLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQVgsRUFBYyxFQUFkLENBQVA7QUFDQSxXQUFPRCxJQUFQO0FBQ0EsR0FIRDs7QUFLQSxzQkFDQyxxRUFBQyw0REFBRDtBQUFBLDRCQUVDLHFFQUFDLDJEQUFEO0FBQUEsaUJBQ0VMLEtBQUssSUFDTEEsS0FBSyxDQUFDTyxHQUFOLENBQVUsVUFBQ04sSUFBRCxFQUFVO0FBQ25CLDRCQUNDLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxrQkFBV08sa0JBQWtCLENBQUNQLElBQUksQ0FBQ1EsSUFBTixDQUE3QixDQUFWO0FBQUEsaUNBQ0M7QUFBQSxtQ0FDQyxxRUFBQyxtREFBRDtBQUFBLHNDQUNDO0FBQUEsdUNBQ0M7QUFDQyxxQkFBRyxFQUFFUixJQUFJLENBQUNTLGFBRFg7QUFFQyxxQkFBRyxpQ0FBMEJULElBQUksQ0FBQ1UsS0FBL0I7QUFGSjtBQUFB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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTIGZyb20gJy4vYmxvZ2d5LnN0eWxlcyc7XG5pbXBvcnQgKiBhcyBHUyBmcm9tICcuLi8uLi9zdHlsZXMvZ2xvYmFsJztcbmltcG9ydCBTaWRlYmFyTWFpbCBmcm9tICcuLi9zaWRlYmFybWFpbCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL3RpdGxlJztcblxuY29uc3QgQmxvZ2d5ID0gKHsgcG9zdHMsIHBvc3QgfSkgPT4ge1xuXHRjb25zb2xlLmxvZyhwb3N0cyk7XG5cblx0Y29uc3QgdGltZUNvbnZlcnQgPSAodGltZSkgPT4ge1xuXHRcdHRpbWUgPSB0aW1lLnNsaWNlKDAsIDEwKTtcblx0XHRyZXR1cm4gdGltZTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxTLkJsb2dDb250YWluZXI+XG5cdFx0XHR7LyogTGVmdCBTaWRlICovfVxuXHRcdFx0PFMuQmxvZ0FydGljbGVzPlxuXHRcdFx0XHR7cG9zdHMgJiZcblx0XHRcdFx0XHRwb3N0cy5tYXAoKHBvc3QpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvYmxvZy8ke2VuY29kZVVSSUNvbXBvbmVudChwb3N0LnNsdWcpfWB9IGtleT17cG9zdC5leGNlcnB0fT5cblx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdDxTLkJsb2c+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e3Bvc3QuZmVhdHVyZV9pbWFnZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD17YEZyb20gVGhlIEdyb3VuZCBVcCAtICR7cG9zdC50aXRsZX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDI+e3Bvc3QudGl0bGV9PC9oMj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPntwb3N0LmV4Y2VycHR9PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvUy5CbG9nPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KX1cblxuXHRcdFx0XHR7cG9zdCAmJiAoXG5cdFx0XHRcdFx0PFMuQXJ0aWNsZT5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtwb3N0LmZlYXR1cmVfaW1hZ2V9IGFsdD17YEZyb20gVGhlIEdyb3VuZCBVcCAtICR7cG9zdC50aXRsZX1gfSAvPlxuXHRcdFx0XHRcdDwvUy5BcnRpY2xlPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9TLkJsb2dBcnRpY2xlcz5cblxuXHRcdFx0ey8qIFJpZ2h0IFNpZGUgKi99XG5cdFx0XHQ8Uy5GZWF0dXJlZEFydGljbGVzPlxuXHRcdFx0XHQ8VGl0bGUgdGl0bGU9XCJUb3AgQXJ0aWNsZXNcIiAvPlxuXHRcdFx0XHR7cG9zdHMgJiZcblx0XHRcdFx0XHRwb3N0cy5tYXAoKHBvc3QpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxTLlRvcEJsb2dzIGtleT17cG9zdC5mZWF0dXJlX2ltYWdlfT5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9ibG9nLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBvc3Quc2x1Zyl9YH0ga2V5PXtwb3N0LmV4Y2VycHR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17cG9zdC5mZWF0dXJlX2ltYWdlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+e3Bvc3QudGl0bGV9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwidGFnXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtwb3N0LnRhZ3MubWFwKCh0YWcpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17dGFnLmlkfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL2Jsb2cvJHtlbmNvZGVVUklDb21wb25lbnQodGFnLnNsdWcpfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtwb3N0LmV4Y2VycHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT57dGFnLm5hbWV9PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXBkYXRlZFwiPlVwZGF0ZWQge3RpbWVDb252ZXJ0KHBvc3QudXBkYXRlZF9hdCl9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvUy5Ub3BCbG9ncz5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdDxTaWRlYmFyTWFpbCAvPlxuXHRcdFx0PC9TLkZlYXR1cmVkQXJ0aWNsZXM+XG5cdFx0PC9TLkJsb2dDb250YWluZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nZ3k7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/bloggy/bloggy.js\n");

/***/ })

})