(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_autohotkey"],{

/***/ "./node_modules/highlight.js/lib/languages/autohotkey.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/autohotkey.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: AutoHotkey\nAuthor: Seongwon Lee <dlimpid@gmail.com>\nDescription: AutoHotkey language definition\nCategory: scripting\n*/\n\n/** @type LanguageFn */\nfunction autohotkey(hljs) {\n  const BACKTICK_ESCAPE = {\n    begin: '`[\\\\s\\\\S]'\n  };\n\n  return {\n    name: 'AutoHotkey',\n    case_insensitive: true,\n    aliases: ['ahk'],\n    keywords: {\n      keyword: 'Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group',\n      literal: 'true false NOT AND OR',\n      built_in: 'ComSpec Clipboard ClipboardAll ErrorLevel'\n    },\n    contains: [\n      BACKTICK_ESCAPE,\n      hljs.inherit(hljs.QUOTE_STRING_MODE, {\n        contains: [BACKTICK_ESCAPE]\n      }),\n      hljs.COMMENT(';', '$', {\n        relevance: 0\n      }),\n      hljs.C_BLOCK_COMMENT_MODE,\n      {\n        className: 'number',\n        begin: hljs.NUMBER_RE,\n        relevance: 0\n      },\n      {\n        // subst would be the most accurate however fails the point of\n        // highlighting. variable is comparably the most accurate that actually\n        // has some effect\n        className: 'variable',\n        begin: '%[a-zA-Z0-9#_$@]+%'\n      },\n      {\n        className: 'built_in',\n        begin: '^\\\\s*\\\\w+\\\\s*(,|%)'\n        // I don't really know if this is totally relevant\n      },\n      {\n        // symbol would be most accurate however is highlighted just like\n        // built_in and that makes up a lot of AutoHotkey code meaning that it\n        // would fail to highlight anything\n        className: 'title',\n        variants: [\n          {\n            begin: '^[^\\\\n\";]+::(?!=)'\n          },\n          {\n            begin: '^[^\\\\n\";]+:(?!=)',\n            // zero relevance as it catches a lot of things\n            // followed by a single ':' in many languages\n            relevance: 0\n          }\n        ]\n      },\n      {\n        className: 'meta',\n        begin: '^\\\\s*#\\\\w+',\n        end: '$',\n        relevance: 0\n      },\n      {\n        className: 'built_in',\n        begin: 'A_[a-zA-Z0-9]+'\n      },\n      {\n        // consecutive commas, not for highlighting but just for relevance\n        begin: ',\\\\s*,'\n      }\n    ]\n  };\n}\n\nmodule.exports = autohotkey;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2F1dG9ob3RrZXkuanM/MDQ4MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHFCQUFxQjtBQUNyQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixXQUFXO0FBQ1g7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9hdXRvaG90a2V5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBBdXRvSG90a2V5XG5BdXRob3I6IFNlb25nd29uIExlZSA8ZGxpbXBpZEBnbWFpbC5jb20+XG5EZXNjcmlwdGlvbjogQXV0b0hvdGtleSBsYW5ndWFnZSBkZWZpbml0aW9uXG5DYXRlZ29yeTogc2NyaXB0aW5nXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYXV0b2hvdGtleShobGpzKSB7XG4gIGNvbnN0IEJBQ0tUSUNLX0VTQ0FQRSA9IHtcbiAgICBiZWdpbjogJ2BbXFxcXHNcXFxcU10nXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQXV0b0hvdGtleScsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBhbGlhc2VzOiBbJ2FoayddLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOiAnQnJlYWsgQ29udGludWUgQ3JpdGljYWwgRXhpdCBFeGl0QXBwIEdvc3ViIEdvdG8gTmV3IE9uRXhpdCBQYXVzZSByZXR1cm4gU2V0QmF0Y2hMaW5lcyBTZXRUaW1lciBTdXNwZW5kIFRocmVhZCBUaHJvdyBVbnRpbCBhaGtfaWQgYWhrX2NsYXNzIGFoa19waWQgYWhrX2V4ZSBhaGtfZ3JvdXAnLFxuICAgICAgbGl0ZXJhbDogJ3RydWUgZmFsc2UgTk9UIEFORCBPUicsXG4gICAgICBidWlsdF9pbjogJ0NvbVNwZWMgQ2xpcGJvYXJkIENsaXBib2FyZEFsbCBFcnJvckxldmVsJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIEJBQ0tUSUNLX0VTQ0FQRSxcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7XG4gICAgICAgIGNvbnRhaW5zOiBbQkFDS1RJQ0tfRVNDQVBFXVxuICAgICAgfSksXG4gICAgICBobGpzLkNPTU1FTlQoJzsnLCAnJCcsIHtcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9KSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiBobGpzLk5VTUJFUl9SRSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBzdWJzdCB3b3VsZCBiZSB0aGUgbW9zdCBhY2N1cmF0ZSBob3dldmVyIGZhaWxzIHRoZSBwb2ludCBvZlxuICAgICAgICAvLyBoaWdobGlnaHRpbmcuIHZhcmlhYmxlIGlzIGNvbXBhcmFibHkgdGhlIG1vc3QgYWNjdXJhdGUgdGhhdCBhY3R1YWxseVxuICAgICAgICAvLyBoYXMgc29tZSBlZmZlY3RcbiAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICBiZWdpbjogJyVbYS16QS1aMC05I18kQF0rJSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICAgICAgYmVnaW46ICdeXFxcXHMqXFxcXHcrXFxcXHMqKCx8JSknXG4gICAgICAgIC8vIEkgZG9uJ3QgcmVhbGx5IGtub3cgaWYgdGhpcyBpcyB0b3RhbGx5IHJlbGV2YW50XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBzeW1ib2wgd291bGQgYmUgbW9zdCBhY2N1cmF0ZSBob3dldmVyIGlzIGhpZ2hsaWdodGVkIGp1c3QgbGlrZVxuICAgICAgICAvLyBidWlsdF9pbiBhbmQgdGhhdCBtYWtlcyB1cCBhIGxvdCBvZiBBdXRvSG90a2V5IGNvZGUgbWVhbmluZyB0aGF0IGl0XG4gICAgICAgIC8vIHdvdWxkIGZhaWwgdG8gaGlnaGxpZ2h0IGFueXRoaW5nXG4gICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ15bXlxcXFxuXCI7XSs6Oig/IT0pJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdeW15cXFxcblwiO10rOig/IT0pJyxcbiAgICAgICAgICAgIC8vIHplcm8gcmVsZXZhbmNlIGFzIGl0IGNhdGNoZXMgYSBsb3Qgb2YgdGhpbmdzXG4gICAgICAgICAgICAvLyBmb2xsb3dlZCBieSBhIHNpbmdsZSAnOicgaW4gbWFueSBsYW5ndWFnZXNcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnXlxcXFxzKiNcXFxcdysnLFxuICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOiAnQV9bYS16QS1aMC05XSsnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBjb25zZWN1dGl2ZSBjb21tYXMsIG5vdCBmb3IgaGlnaGxpZ2h0aW5nIGJ1dCBqdXN0IGZvciByZWxldmFuY2VcbiAgICAgICAgYmVnaW46ICcsXFxcXHMqLCdcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXV0b2hvdGtleTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/autohotkey.js\n");

/***/ })

}]);