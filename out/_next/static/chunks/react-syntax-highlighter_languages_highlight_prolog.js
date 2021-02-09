(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_prolog"],{

/***/ "./node_modules/highlight.js/lib/languages/prolog.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/prolog.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Prolog\nDescription: Prolog is a general purpose logic programming language associated with artificial intelligence and computational linguistics.\nAuthor: Raivo Laanemets <raivo@infdot.com>\nWebsite: https://en.wikipedia.org/wiki/Prolog\n*/\n\nfunction prolog(hljs) {\n  const ATOM = {\n\n    begin: /[a-z][A-Za-z0-9_]*/,\n    relevance: 0\n  };\n\n  const VAR = {\n\n    className: 'symbol',\n    variants: [\n      {\n        begin: /[A-Z][a-zA-Z0-9_]*/\n      },\n      {\n        begin: /_[A-Za-z0-9_]*/\n      }\n    ],\n    relevance: 0\n  };\n\n  const PARENTED = {\n\n    begin: /\\(/,\n    end: /\\)/,\n    relevance: 0\n  };\n\n  const LIST = {\n\n    begin: /\\[/,\n    end: /\\]/\n  };\n\n  const LINE_COMMENT = {\n\n    className: 'comment',\n    begin: /%/,\n    end: /$/,\n    contains: [ hljs.PHRASAL_WORDS_MODE ]\n  };\n\n  const BACKTICK_STRING = {\n\n    className: 'string',\n    begin: /`/,\n    end: /`/,\n    contains: [ hljs.BACKSLASH_ESCAPE ]\n  };\n\n  const CHAR_CODE = {\n    className: 'string', // 0'a etc.\n    begin: /0'(\\\\'|.)/\n  };\n\n  const SPACE_CODE = {\n    className: 'string',\n    begin: /0'\\\\s/ // 0'\\s\n  };\n\n  const PRED_OP = { // relevance booster\n    begin: /:-/\n  };\n\n  const inner = [\n\n    ATOM,\n    VAR,\n    PARENTED,\n    PRED_OP,\n    LIST,\n    LINE_COMMENT,\n    hljs.C_BLOCK_COMMENT_MODE,\n    hljs.QUOTE_STRING_MODE,\n    hljs.APOS_STRING_MODE,\n    BACKTICK_STRING,\n    CHAR_CODE,\n    SPACE_CODE,\n    hljs.C_NUMBER_MODE\n  ];\n\n  PARENTED.contains = inner;\n  LIST.contains = inner;\n\n  return {\n    name: 'Prolog',\n    contains: inner.concat([\n      { // relevance booster\n        begin: /\\.$/\n      }\n    ])\n  };\n}\n\nmodule.exports = prolog;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Byb2xvZy5qcz80Mzk2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcHJvbG9nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBQcm9sb2dcbkRlc2NyaXB0aW9uOiBQcm9sb2cgaXMgYSBnZW5lcmFsIHB1cnBvc2UgbG9naWMgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgYXNzb2NpYXRlZCB3aXRoIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIGFuZCBjb21wdXRhdGlvbmFsIGxpbmd1aXN0aWNzLlxuQXV0aG9yOiBSYWl2byBMYWFuZW1ldHMgPHJhaXZvQGluZmRvdC5jb20+XG5XZWJzaXRlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Qcm9sb2dcbiovXG5cbmZ1bmN0aW9uIHByb2xvZyhobGpzKSB7XG4gIGNvbnN0IEFUT00gPSB7XG5cbiAgICBiZWdpbjogL1thLXpdW0EtWmEtejAtOV9dKi8sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgY29uc3QgVkFSID0ge1xuXG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1tBLVpdW2EtekEtWjAtOV9dKi9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvX1tBLVphLXowLTlfXSovXG4gICAgICB9XG4gICAgXSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBQQVJFTlRFRCA9IHtcblxuICAgIGJlZ2luOiAvXFwoLyxcbiAgICBlbmQ6IC9cXCkvLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIGNvbnN0IExJU1QgPSB7XG5cbiAgICBiZWdpbjogL1xcWy8sXG4gICAgZW5kOiAvXFxdL1xuICB9O1xuXG4gIGNvbnN0IExJTkVfQ09NTUVOVCA9IHtcblxuICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgIGJlZ2luOiAvJS8sXG4gICAgZW5kOiAvJC8sXG4gICAgY29udGFpbnM6IFsgaGxqcy5QSFJBU0FMX1dPUkRTX01PREUgXVxuICB9O1xuXG4gIGNvbnN0IEJBQ0tUSUNLX1NUUklORyA9IHtcblxuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC9gLyxcbiAgICBlbmQ6IC9gLyxcbiAgICBjb250YWluczogWyBobGpzLkJBQ0tTTEFTSF9FU0NBUEUgXVxuICB9O1xuXG4gIGNvbnN0IENIQVJfQ09ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLCAvLyAwJ2EgZXRjLlxuICAgIGJlZ2luOiAvMCcoXFxcXCd8LikvXG4gIH07XG5cbiAgY29uc3QgU1BBQ0VfQ09ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvMCdcXFxccy8gLy8gMCdcXHNcbiAgfTtcblxuICBjb25zdCBQUkVEX09QID0geyAvLyByZWxldmFuY2UgYm9vc3RlclxuICAgIGJlZ2luOiAvOi0vXG4gIH07XG5cbiAgY29uc3QgaW5uZXIgPSBbXG5cbiAgICBBVE9NLFxuICAgIFZBUixcbiAgICBQQVJFTlRFRCxcbiAgICBQUkVEX09QLFxuICAgIExJU1QsXG4gICAgTElORV9DT01NRU5ULFxuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgQkFDS1RJQ0tfU1RSSU5HLFxuICAgIENIQVJfQ09ERSxcbiAgICBTUEFDRV9DT0RFLFxuICAgIGhsanMuQ19OVU1CRVJfTU9ERVxuICBdO1xuXG4gIFBBUkVOVEVELmNvbnRhaW5zID0gaW5uZXI7XG4gIExJU1QuY29udGFpbnMgPSBpbm5lcjtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdQcm9sb2cnLFxuICAgIGNvbnRhaW5zOiBpbm5lci5jb25jYXQoW1xuICAgICAgeyAvLyByZWxldmFuY2UgYm9vc3RlclxuICAgICAgICBiZWdpbjogL1xcLiQvXG4gICAgICB9XG4gICAgXSlcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9sb2c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/prolog.js\n");

/***/ })

}]);