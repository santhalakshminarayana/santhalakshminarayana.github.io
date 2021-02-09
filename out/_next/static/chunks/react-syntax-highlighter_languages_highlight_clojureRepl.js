(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_clojureRepl"],{

/***/ "./node_modules/highlight.js/lib/languages/clojure-repl.js":
/*!*****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/clojure-repl.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Clojure REPL\nDescription: Clojure REPL sessions\nAuthor: Ivan Sagalaev <maniac@softwaremaniacs.org>\nRequires: clojure.js\nWebsite: https://clojure.org\nCategory: lisp\n*/\n\n/** @type LanguageFn */\nfunction clojureRepl(hljs) {\n  return {\n    name: 'Clojure REPL',\n    contains: [{\n      className: 'meta',\n      begin: /^([\\w.-]+|\\s*#_)?=>/,\n      starts: {\n        end: /$/,\n        subLanguage: 'clojure'\n      }\n    }]\n  };\n}\n\nmodule.exports = clojureRepl;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Nsb2p1cmUtcmVwbC5qcz8xNDlkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Nsb2p1cmUtcmVwbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQ2xvanVyZSBSRVBMXG5EZXNjcmlwdGlvbjogQ2xvanVyZSBSRVBMIHNlc3Npb25zXG5BdXRob3I6IEl2YW4gU2FnYWxhZXYgPG1hbmlhY0Bzb2Z0d2FyZW1hbmlhY3Mub3JnPlxuUmVxdWlyZXM6IGNsb2p1cmUuanNcbldlYnNpdGU6IGh0dHBzOi8vY2xvanVyZS5vcmdcbkNhdGVnb3J5OiBsaXNwXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY2xvanVyZVJlcGwoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDbG9qdXJlIFJFUEwnLFxuICAgIGNvbnRhaW5zOiBbe1xuICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICBiZWdpbjogL14oW1xcdy4tXSt8XFxzKiNfKT89Pi8sXG4gICAgICBzdGFydHM6IHtcbiAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgIHN1Ykxhbmd1YWdlOiAnY2xvanVyZSdcbiAgICAgIH1cbiAgICB9XVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb2p1cmVSZXBsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/clojure-repl.js\n");

/***/ })

}]);