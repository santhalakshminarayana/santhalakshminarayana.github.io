(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_inform7"],{

/***/ "./node_modules/highlight.js/lib/languages/inform7.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/inform7.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Inform 7\nAuthor: Bruno Dias <bruno.r.dias@gmail.com>\nDescription: Language definition for Inform 7, a DSL for writing parser interactive fiction.\nWebsite: http://inform7.com\n*/\n\nfunction inform7(hljs) {\n  const START_BRACKET = '\\\\[';\n  const END_BRACKET = '\\\\]';\n  return {\n    name: 'Inform 7',\n    aliases: ['i7'],\n    case_insensitive: true,\n    keywords: {\n      // Some keywords more or less unique to I7, for relevance.\n      keyword:\n        // kind:\n        'thing room person man woman animal container ' +\n        'supporter backdrop door ' +\n        // characteristic:\n        'scenery open closed locked inside gender ' +\n        // verb:\n        'is are say understand ' +\n        // misc keyword:\n        'kind of rule'\n    },\n    contains: [\n      {\n        className: 'string',\n        begin: '\"',\n        end: '\"',\n        relevance: 0,\n        contains: [\n          {\n            className: 'subst',\n            begin: START_BRACKET,\n            end: END_BRACKET\n          }\n        ]\n      },\n      {\n        className: 'section',\n        begin: /^(Volume|Book|Part|Chapter|Section|Table)\\b/,\n        end: '$'\n      },\n      {\n        // Rule definition\n        // This is here for relevance.\n        begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\\b/,\n        end: ':',\n        contains: [\n          {\n            // Rule name\n            begin: '\\\\(This',\n            end: '\\\\)'\n          }\n        ]\n      },\n      {\n        className: 'comment',\n        begin: START_BRACKET,\n        end: END_BRACKET,\n        contains: ['self']\n      }\n    ]\n  };\n}\n\nmodule.exports = inform7;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2luZm9ybTcuanM/MmU1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9pbmZvcm03LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBJbmZvcm0gN1xuQXV0aG9yOiBCcnVubyBEaWFzIDxicnVuby5yLmRpYXNAZ21haWwuY29tPlxuRGVzY3JpcHRpb246IExhbmd1YWdlIGRlZmluaXRpb24gZm9yIEluZm9ybSA3LCBhIERTTCBmb3Igd3JpdGluZyBwYXJzZXIgaW50ZXJhY3RpdmUgZmljdGlvbi5cbldlYnNpdGU6IGh0dHA6Ly9pbmZvcm03LmNvbVxuKi9cblxuZnVuY3Rpb24gaW5mb3JtNyhobGpzKSB7XG4gIGNvbnN0IFNUQVJUX0JSQUNLRVQgPSAnXFxcXFsnO1xuICBjb25zdCBFTkRfQlJBQ0tFVCA9ICdcXFxcXSc7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0luZm9ybSA3JyxcbiAgICBhbGlhc2VzOiBbJ2k3J10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgLy8gU29tZSBrZXl3b3JkcyBtb3JlIG9yIGxlc3MgdW5pcXVlIHRvIEk3LCBmb3IgcmVsZXZhbmNlLlxuICAgICAga2V5d29yZDpcbiAgICAgICAgLy8ga2luZDpcbiAgICAgICAgJ3RoaW5nIHJvb20gcGVyc29uIG1hbiB3b21hbiBhbmltYWwgY29udGFpbmVyICcgK1xuICAgICAgICAnc3VwcG9ydGVyIGJhY2tkcm9wIGRvb3IgJyArXG4gICAgICAgIC8vIGNoYXJhY3RlcmlzdGljOlxuICAgICAgICAnc2NlbmVyeSBvcGVuIGNsb3NlZCBsb2NrZWQgaW5zaWRlIGdlbmRlciAnICtcbiAgICAgICAgLy8gdmVyYjpcbiAgICAgICAgJ2lzIGFyZSBzYXkgdW5kZXJzdGFuZCAnICtcbiAgICAgICAgLy8gbWlzYyBrZXl3b3JkOlxuICAgICAgICAna2luZCBvZiBydWxlJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdcIicsXG4gICAgICAgIGVuZDogJ1wiJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICAgICAgICAgIGJlZ2luOiBTVEFSVF9CUkFDS0VULFxuICAgICAgICAgICAgZW5kOiBFTkRfQlJBQ0tFVFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VjdGlvbicsXG4gICAgICAgIGJlZ2luOiAvXihWb2x1bWV8Qm9va3xQYXJ0fENoYXB0ZXJ8U2VjdGlvbnxUYWJsZSlcXGIvLFxuICAgICAgICBlbmQ6ICckJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gUnVsZSBkZWZpbml0aW9uXG4gICAgICAgIC8vIFRoaXMgaXMgaGVyZSBmb3IgcmVsZXZhbmNlLlxuICAgICAgICBiZWdpbjogL14oQ2hlY2t8Q2Fycnkgb3V0fFJlcG9ydHxJbnN0ZWFkIG9mfFRvfFJ1bGV8V2hlbnxCZWZvcmV8QWZ0ZXIpXFxiLyxcbiAgICAgICAgZW5kOiAnOicsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8gUnVsZSBuYW1lXG4gICAgICAgICAgICBiZWdpbjogJ1xcXFwoVGhpcycsXG4gICAgICAgICAgICBlbmQ6ICdcXFxcKSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgICAgICBiZWdpbjogU1RBUlRfQlJBQ0tFVCxcbiAgICAgICAgZW5kOiBFTkRfQlJBQ0tFVCxcbiAgICAgICAgY29udGFpbnM6IFsnc2VsZiddXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluZm9ybTc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/inform7.js\n");

/***/ })

}]);