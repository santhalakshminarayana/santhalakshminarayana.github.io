(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_apache"],{

/***/ "./node_modules/highlight.js/lib/languages/apache.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/apache.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Apache config\nAuthor: Ruslan Keba <rukeba@gmail.com>\nContributors: Ivan Sagalaev <maniac@softwaremaniacs.org>\nWebsite: https://httpd.apache.org\nDescription: language definition for Apache configuration files (httpd.conf & .htaccess)\nCategory: common, config\nAudit: 2020\n*/\n\n/** @type LanguageFn */\nfunction apache(hljs) {\n  const NUMBER_REF = {\n    className: 'number',\n    begin: /[$%]\\d+/\n  };\n  const NUMBER = {\n    className: 'number',\n    begin: /\\d+/\n  };\n  const IP_ADDRESS = {\n    className: \"number\",\n    begin: /\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?/\n  };\n  const PORT_NUMBER = {\n    className: \"number\",\n    begin: /:\\d{1,5}/\n  };\n  return {\n    name: 'Apache config',\n    aliases: [ 'apacheconf' ],\n    case_insensitive: true,\n    contains: [\n      hljs.HASH_COMMENT_MODE,\n      {\n        className: 'section',\n        begin: /<\\/?/,\n        end: />/,\n        contains: [\n          IP_ADDRESS,\n          PORT_NUMBER,\n          // low relevance prevents us from claming XML/HTML where this rule would\n          // match strings inside of XML tags\n          hljs.inherit(hljs.QUOTE_STRING_MODE, { relevance: 0 })\n        ]\n      },\n      {\n        className: 'attribute',\n        begin: /\\w+/,\n        relevance: 0,\n        // keywords aren’t needed for highlighting per se, they only boost relevance\n        // for a very generally defined mode (starts with a word, ends with line-end\n        keywords: {\n          nomarkup:\n            'order deny allow setenv rewriterule rewriteengine rewritecond documentroot ' +\n            'sethandler errordocument loadmodule options header listen serverroot ' +\n            'servername'\n        },\n        starts: {\n          end: /$/,\n          relevance: 0,\n          keywords: { literal: 'on off all deny allow' },\n          contains: [\n            {\n              className: 'meta',\n              begin: /\\s\\[/,\n              end: /\\]$/\n            },\n            {\n              className: 'variable',\n              begin: /[\\$%]\\{/,\n              end: /\\}/,\n              contains: [\n                'self',\n                NUMBER_REF\n              ]\n            },\n            IP_ADDRESS,\n            NUMBER,\n            hljs.QUOTE_STRING_MODE\n          ]\n        }\n      }\n    ],\n    illegal: /\\S/\n  };\n}\n\nmodule.exports = apache;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FwYWNoZS5qcz9mMGFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGVBQWU7QUFDL0Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYXBhY2hlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBBcGFjaGUgY29uZmlnXG5BdXRob3I6IFJ1c2xhbiBLZWJhIDxydWtlYmFAZ21haWwuY29tPlxuQ29udHJpYnV0b3JzOiBJdmFuIFNhZ2FsYWV2IDxtYW5pYWNAc29mdHdhcmVtYW5pYWNzLm9yZz5cbldlYnNpdGU6IGh0dHBzOi8vaHR0cGQuYXBhY2hlLm9yZ1xuRGVzY3JpcHRpb246IGxhbmd1YWdlIGRlZmluaXRpb24gZm9yIEFwYWNoZSBjb25maWd1cmF0aW9uIGZpbGVzIChodHRwZC5jb25mICYgLmh0YWNjZXNzKVxuQ2F0ZWdvcnk6IGNvbW1vbiwgY29uZmlnXG5BdWRpdDogMjAyMFxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGFwYWNoZShobGpzKSB7XG4gIGNvbnN0IE5VTUJFUl9SRUYgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICBiZWdpbjogL1skJV1cXGQrL1xuICB9O1xuICBjb25zdCBOVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICBiZWdpbjogL1xcZCsvXG4gIH07XG4gIGNvbnN0IElQX0FERFJFU1MgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm51bWJlclwiLFxuICAgIGJlZ2luOiAvXFxkezEsM31cXC5cXGR7MSwzfVxcLlxcZHsxLDN9XFwuXFxkezEsM30oOlxcZHsxLDV9KT8vXG4gIH07XG4gIGNvbnN0IFBPUlRfTlVNQkVSID0ge1xuICAgIGNsYXNzTmFtZTogXCJudW1iZXJcIixcbiAgICBiZWdpbjogLzpcXGR7MSw1fS9cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQXBhY2hlIGNvbmZpZycsXG4gICAgYWxpYXNlczogWyAnYXBhY2hlY29uZicgXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzZWN0aW9uJyxcbiAgICAgICAgYmVnaW46IC88XFwvPy8sXG4gICAgICAgIGVuZDogLz4vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIElQX0FERFJFU1MsXG4gICAgICAgICAgUE9SVF9OVU1CRVIsXG4gICAgICAgICAgLy8gbG93IHJlbGV2YW5jZSBwcmV2ZW50cyB1cyBmcm9tIGNsYW1pbmcgWE1ML0hUTUwgd2hlcmUgdGhpcyBydWxlIHdvdWxkXG4gICAgICAgICAgLy8gbWF0Y2ggc3RyaW5ncyBpbnNpZGUgb2YgWE1MIHRhZ3NcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwgeyByZWxldmFuY2U6IDAgfSlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgICAgYmVnaW46IC9cXHcrLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAvLyBrZXl3b3JkcyBhcmVu4oCZdCBuZWVkZWQgZm9yIGhpZ2hsaWdodGluZyBwZXIgc2UsIHRoZXkgb25seSBib29zdCByZWxldmFuY2VcbiAgICAgICAgLy8gZm9yIGEgdmVyeSBnZW5lcmFsbHkgZGVmaW5lZCBtb2RlIChzdGFydHMgd2l0aCBhIHdvcmQsIGVuZHMgd2l0aCBsaW5lLWVuZFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgIG5vbWFya3VwOlxuICAgICAgICAgICAgJ29yZGVyIGRlbnkgYWxsb3cgc2V0ZW52IHJld3JpdGVydWxlIHJld3JpdGVlbmdpbmUgcmV3cml0ZWNvbmQgZG9jdW1lbnRyb290ICcgK1xuICAgICAgICAgICAgJ3NldGhhbmRsZXIgZXJyb3Jkb2N1bWVudCBsb2FkbW9kdWxlIG9wdGlvbnMgaGVhZGVyIGxpc3RlbiBzZXJ2ZXJyb290ICcgK1xuICAgICAgICAgICAgJ3NlcnZlcm5hbWUnXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIGVuZDogLyQvLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICBrZXl3b3JkczogeyBsaXRlcmFsOiAnb24gb2ZmIGFsbCBkZW55IGFsbG93JyB9LFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgICBiZWdpbjogL1xcc1xcWy8sXG4gICAgICAgICAgICAgIGVuZDogL1xcXSQvXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgICAgICAgIGJlZ2luOiAvW1xcJCVdXFx7LyxcbiAgICAgICAgICAgICAgZW5kOiAvXFx9LyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICAnc2VsZicsXG4gICAgICAgICAgICAgICAgTlVNQkVSX1JFRlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgSVBfQUREUkVTUyxcbiAgICAgICAgICAgIE5VTUJFUixcbiAgICAgICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREVcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIGlsbGVnYWw6IC9cXFMvXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBhY2hlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/apache.js\n");

/***/ })

}]);