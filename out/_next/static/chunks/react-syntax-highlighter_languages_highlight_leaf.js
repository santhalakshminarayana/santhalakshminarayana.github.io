(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_leaf"],{

/***/ "./node_modules/highlight.js/lib/languages/leaf.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/leaf.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Leaf\nAuthor: Hale Chan <halechan@qq.com>\nDescription: Based on the Leaf reference from https://vapor.github.io/documentation/guide/leaf.html.\n*/\n\nfunction leaf(hljs) {\n  return {\n    name: 'Leaf',\n    contains: [\n      {\n        className: 'function',\n        begin: '#+' + '[A-Za-z_0-9]*' + '\\\\(',\n        end: / \\{/,\n        returnBegin: true,\n        excludeEnd: true,\n        contains: [\n          {\n            className: 'keyword',\n            begin: '#+'\n          },\n          {\n            className: 'title',\n            begin: '[A-Za-z_][A-Za-z_0-9]*'\n          },\n          {\n            className: 'params',\n            begin: '\\\\(',\n            end: '\\\\)',\n            endsParent: true,\n            contains: [\n              {\n                className: 'string',\n                begin: '\"',\n                end: '\"'\n              },\n              {\n                className: 'variable',\n                begin: '[A-Za-z_][A-Za-z_0-9]*'\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = leaf;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2xlYWYuanM/MmU5YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9sZWFmLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBMZWFmXG5BdXRob3I6IEhhbGUgQ2hhbiA8aGFsZWNoYW5AcXEuY29tPlxuRGVzY3JpcHRpb246IEJhc2VkIG9uIHRoZSBMZWFmIHJlZmVyZW5jZSBmcm9tIGh0dHBzOi8vdmFwb3IuZ2l0aHViLmlvL2RvY3VtZW50YXRpb24vZ3VpZGUvbGVhZi5odG1sLlxuKi9cblxuZnVuY3Rpb24gbGVhZihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0xlYWYnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW46ICcjKycgKyAnW0EtWmEtel8wLTldKicgKyAnXFxcXCgnLFxuICAgICAgICBlbmQ6IC8gXFx7LyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgICBiZWdpbjogJyMrJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgICAgYmVnaW46ICdbQS1aYS16X11bQS1aYS16XzAtOV0qJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXCgnLFxuICAgICAgICAgICAgZW5kOiAnXFxcXCknLFxuICAgICAgICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAnXCInLFxuICAgICAgICAgICAgICAgIGVuZDogJ1wiJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAnW0EtWmEtel9dW0EtWmEtel8wLTldKidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsZWFmO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/leaf.js\n");

/***/ })

}]);