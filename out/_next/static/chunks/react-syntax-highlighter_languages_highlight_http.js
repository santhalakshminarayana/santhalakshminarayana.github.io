(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_http"],{

/***/ "./node_modules/highlight.js/lib/languages/http.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/http.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * @param {string} value\n * @returns {RegExp}\n * */\n\n/**\n * @param {RegExp | string } re\n * @returns {string}\n */\nfunction source(re) {\n  if (!re) return null;\n  if (typeof re === \"string\") return re;\n\n  return re.source;\n}\n\n/**\n * @param {...(RegExp | string) } args\n * @returns {string}\n */\nfunction concat(...args) {\n  const joined = args.map((x) => source(x)).join(\"\");\n  return joined;\n}\n\n/*\nLanguage: HTTP\nDescription: HTTP request and response headers with automatic body highlighting\nAuthor: Ivan Sagalaev <maniac@softwaremaniacs.org>\nCategory: common, protocols\nWebsite: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview\n*/\n\nfunction http(hljs) {\n  const VERSION = 'HTTP/(2|1\\\\.[01])';\n  const HEADER_NAME = /[A-Za-z][A-Za-z0-9-]*/;\n  const HEADERS_AND_BODY = [\n    {\n      className: 'attribute',\n      begin: concat('^', HEADER_NAME, '(?=\\\\:\\\\s)'),\n      starts: {\n        contains: [\n          {\n            className: \"punctuation\",\n            begin: /: /,\n            relevance: 0,\n            starts: {\n              end: '$',\n              relevance: 0\n            }\n          }\n        ]\n      }\n    },\n    {\n      begin: '\\\\n\\\\n',\n      starts: { subLanguage: [], endsWithParent: true }\n    }\n  ];\n\n  return {\n    name: 'HTTP',\n    aliases: ['https'],\n    illegal: /\\S/,\n    contains: [\n      // response\n      {\n        begin: '^(?=' + VERSION + \" \\\\d{3})\",\n        end: /$/,\n        contains: [\n          {\n            className: \"meta\",\n            begin: VERSION\n          },\n          {\n            className: 'number', begin: '\\\\b\\\\d{3}\\\\b'\n          }\n        ],\n        starts: {\n          end: /\\b\\B/,\n          illegal: /\\S/,\n          contains: HEADERS_AND_BODY\n        }\n      },\n      // request\n      {\n        begin: '(?=^[A-Z]+ (.*?) ' + VERSION + '$)',\n        end: /$/,\n        contains: [\n          {\n            className: 'string',\n            begin: ' ',\n            end: ' ',\n            excludeBegin: true,\n            excludeEnd: true\n          },\n          {\n            className: \"meta\",\n            begin: VERSION\n          },\n          {\n            className: 'keyword',\n            begin: '[A-Z]+'\n          }\n        ],\n        starts: {\n          end: /\\b\\B/,\n          illegal: /\\S/,\n          contains: HEADERS_AND_BODY\n        }\n      }\n    ]\n  };\n}\n\nmodule.exports = http;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2h0dHAuanM/YzAxZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEVBQUU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLGdEQUFnRCxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvaHR0cC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7UmVnRXhwfVxuICogKi9cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzb3VyY2UocmUpIHtcbiAgaWYgKCFyZSkgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgcmUgPT09IFwic3RyaW5nXCIpIHJldHVybiByZTtcblxuICByZXR1cm4gcmUuc291cmNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Li4uKFJlZ0V4cCB8IHN0cmluZykgfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb25jYXQoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwiXCIpO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKlxuTGFuZ3VhZ2U6IEhUVFBcbkRlc2NyaXB0aW9uOiBIVFRQIHJlcXVlc3QgYW5kIHJlc3BvbnNlIGhlYWRlcnMgd2l0aCBhdXRvbWF0aWMgYm9keSBoaWdobGlnaHRpbmdcbkF1dGhvcjogSXZhbiBTYWdhbGFldiA8bWFuaWFjQHNvZnR3YXJlbWFuaWFjcy5vcmc+XG5DYXRlZ29yeTogY29tbW9uLCBwcm90b2NvbHNcbldlYnNpdGU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvT3ZlcnZpZXdcbiovXG5cbmZ1bmN0aW9uIGh0dHAoaGxqcykge1xuICBjb25zdCBWRVJTSU9OID0gJ0hUVFAvKDJ8MVxcXFwuWzAxXSknO1xuICBjb25zdCBIRUFERVJfTkFNRSA9IC9bQS1aYS16XVtBLVphLXowLTktXSovO1xuICBjb25zdCBIRUFERVJTX0FORF9CT0RZID0gW1xuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ2F0dHJpYnV0ZScsXG4gICAgICBiZWdpbjogY29uY2F0KCdeJywgSEVBREVSX05BTUUsICcoPz1cXFxcOlxcXFxzKScpLFxuICAgICAgc3RhcnRzOiB7XG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcInB1bmN0dWF0aW9uXCIsXG4gICAgICAgICAgICBiZWdpbjogLzogLyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBiZWdpbjogJ1xcXFxuXFxcXG4nLFxuICAgICAgc3RhcnRzOiB7IHN1Ykxhbmd1YWdlOiBbXSwgZW5kc1dpdGhQYXJlbnQ6IHRydWUgfVxuICAgIH1cbiAgXTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdIVFRQJyxcbiAgICBhbGlhc2VzOiBbJ2h0dHBzJ10sXG4gICAgaWxsZWdhbDogL1xcUy8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIC8vIHJlc3BvbnNlXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXig/PScgKyBWRVJTSU9OICsgXCIgXFxcXGR7M30pXCIsXG4gICAgICAgIGVuZDogLyQvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJtZXRhXCIsXG4gICAgICAgICAgICBiZWdpbjogVkVSU0lPTlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJywgYmVnaW46ICdcXFxcYlxcXFxkezN9XFxcXGInXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBlbmQ6IC9cXGJcXEIvLFxuICAgICAgICAgIGlsbGVnYWw6IC9cXFMvLFxuICAgICAgICAgIGNvbnRhaW5zOiBIRUFERVJTX0FORF9CT0RZXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyByZXF1ZXN0XG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnKD89XltBLVpdKyAoLio/KSAnICsgVkVSU0lPTiArICckKScsXG4gICAgICAgIGVuZDogLyQvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICBiZWdpbjogJyAnLFxuICAgICAgICAgICAgZW5kOiAnICcsXG4gICAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibWV0YVwiLFxuICAgICAgICAgICAgYmVnaW46IFZFUlNJT05cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICAgICAgYmVnaW46ICdbQS1aXSsnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBlbmQ6IC9cXGJcXEIvLFxuICAgICAgICAgIGlsbGVnYWw6IC9cXFMvLFxuICAgICAgICAgIGNvbnRhaW5zOiBIRUFERVJTX0FORF9CT0RZXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHR0cDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/http.js\n");

/***/ })

}]);