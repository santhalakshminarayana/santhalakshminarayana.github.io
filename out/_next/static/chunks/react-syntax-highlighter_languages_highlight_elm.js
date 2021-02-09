(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_elm"],{

/***/ "./node_modules/highlight.js/lib/languages/elm.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/elm.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Elm\nAuthor: Janis Voigtlaender <janis.voigtlaender@gmail.com>\nWebsite: https://elm-lang.org\nCategory: functional\n*/\n\n/** @type LanguageFn */\nfunction elm(hljs) {\n  const COMMENT = {\n    variants: [\n      hljs.COMMENT('--', '$'),\n      hljs.COMMENT(\n        /\\{-/,\n        /-\\}/,\n        {\n          contains: ['self']\n        }\n      )\n    ]\n  };\n\n  const CONSTRUCTOR = {\n    className: 'type',\n    begin: '\\\\b[A-Z][\\\\w\\']*', // TODO: other constructors (built-in, infix).\n    relevance: 0\n  };\n\n  const LIST = {\n    begin: '\\\\(',\n    end: '\\\\)',\n    illegal: '\"',\n    contains: [\n      {\n        className: 'type',\n        begin: '\\\\b[A-Z][\\\\w]*(\\\\((\\\\.\\\\.|,|\\\\w+)\\\\))?'\n      },\n      COMMENT\n    ]\n  };\n\n  const RECORD = {\n    begin: /\\{/,\n    end: /\\}/,\n    contains: LIST.contains\n  };\n\n  const CHARACTER = {\n    className: 'string',\n    begin: '\\'\\\\\\\\?.',\n    end: '\\'',\n    illegal: '.'\n  };\n\n  return {\n    name: 'Elm',\n    keywords:\n      'let in if then else case of where module import exposing ' +\n      'type alias as infix infixl infixr port effect command subscription',\n    contains: [\n\n      // Top-level constructions.\n\n      {\n        beginKeywords: 'port effect module',\n        end: 'exposing',\n        keywords: 'port effect module where command subscription exposing',\n        contains: [\n          LIST,\n          COMMENT\n        ],\n        illegal: '\\\\W\\\\.|;'\n      },\n      {\n        begin: 'import',\n        end: '$',\n        keywords: 'import as exposing',\n        contains: [\n          LIST,\n          COMMENT\n        ],\n        illegal: '\\\\W\\\\.|;'\n      },\n      {\n        begin: 'type',\n        end: '$',\n        keywords: 'type alias',\n        contains: [\n          CONSTRUCTOR,\n          LIST,\n          RECORD,\n          COMMENT\n        ]\n      },\n      {\n        beginKeywords: 'infix infixl infixr',\n        end: '$',\n        contains: [\n          hljs.C_NUMBER_MODE,\n          COMMENT\n        ]\n      },\n      {\n        begin: 'port',\n        end: '$',\n        keywords: 'port',\n        contains: [COMMENT]\n      },\n\n      // Literals and names.\n\n      CHARACTER,\n      hljs.QUOTE_STRING_MODE,\n      hljs.C_NUMBER_MODE,\n      CONSTRUCTOR,\n      hljs.inherit(hljs.TITLE_MODE, {\n        begin: '^[_a-z][\\\\w\\']*'\n      }),\n      COMMENT,\n\n      {\n        begin: '->|<-'\n      } // No markup, relevance booster\n    ],\n    illegal: /;/\n  };\n}\n\nmodule.exports = elm;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2VsbS5qcz81MDUxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9lbG0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEVsbVxuQXV0aG9yOiBKYW5pcyBWb2lndGxhZW5kZXIgPGphbmlzLnZvaWd0bGFlbmRlckBnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL2VsbS1sYW5nLm9yZ1xuQ2F0ZWdvcnk6IGZ1bmN0aW9uYWxcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBlbG0oaGxqcykge1xuICBjb25zdCBDT01NRU5UID0ge1xuICAgIHZhcmlhbnRzOiBbXG4gICAgICBobGpzLkNPTU1FTlQoJy0tJywgJyQnKSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgL1xcey0vLFxuICAgICAgICAvLVxcfS8sXG4gICAgICAgIHtcbiAgICAgICAgICBjb250YWluczogWydzZWxmJ11cbiAgICAgICAgfVxuICAgICAgKVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBDT05TVFJVQ1RPUiA9IHtcbiAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICBiZWdpbjogJ1xcXFxiW0EtWl1bXFxcXHdcXCddKicsIC8vIFRPRE86IG90aGVyIGNvbnN0cnVjdG9ycyAoYnVpbHQtaW4sIGluZml4KS5cbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBMSVNUID0ge1xuICAgIGJlZ2luOiAnXFxcXCgnLFxuICAgIGVuZDogJ1xcXFwpJyxcbiAgICBpbGxlZ2FsOiAnXCInLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiW0EtWl1bXFxcXHddKihcXFxcKChcXFxcLlxcXFwufCx8XFxcXHcrKVxcXFwpKT8nXG4gICAgICB9LFxuICAgICAgQ09NTUVOVFxuICAgIF1cbiAgfTtcblxuICBjb25zdCBSRUNPUkQgPSB7XG4gICAgYmVnaW46IC9cXHsvLFxuICAgIGVuZDogL1xcfS8sXG4gICAgY29udGFpbnM6IExJU1QuY29udGFpbnNcbiAgfTtcblxuICBjb25zdCBDSEFSQUNURVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1xcJ1xcXFxcXFxcPy4nLFxuICAgIGVuZDogJ1xcJycsXG4gICAgaWxsZWdhbDogJy4nXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRWxtJyxcbiAgICBrZXl3b3JkczpcbiAgICAgICdsZXQgaW4gaWYgdGhlbiBlbHNlIGNhc2Ugb2Ygd2hlcmUgbW9kdWxlIGltcG9ydCBleHBvc2luZyAnICtcbiAgICAgICd0eXBlIGFsaWFzIGFzIGluZml4IGluZml4bCBpbmZpeHIgcG9ydCBlZmZlY3QgY29tbWFuZCBzdWJzY3JpcHRpb24nLFxuICAgIGNvbnRhaW5zOiBbXG5cbiAgICAgIC8vIFRvcC1sZXZlbCBjb25zdHJ1Y3Rpb25zLlxuXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdwb3J0IGVmZmVjdCBtb2R1bGUnLFxuICAgICAgICBlbmQ6ICdleHBvc2luZycsXG4gICAgICAgIGtleXdvcmRzOiAncG9ydCBlZmZlY3QgbW9kdWxlIHdoZXJlIGNvbW1hbmQgc3Vic2NyaXB0aW9uIGV4cG9zaW5nJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBMSVNULFxuICAgICAgICAgIENPTU1FTlRcbiAgICAgICAgXSxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxXXFxcXC58OydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnaW1wb3J0JyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIGtleXdvcmRzOiAnaW1wb3J0IGFzIGV4cG9zaW5nJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBMSVNULFxuICAgICAgICAgIENPTU1FTlRcbiAgICAgICAgXSxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxXXFxcXC58OydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAndHlwZScsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogJ3R5cGUgYWxpYXMnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIENPTlNUUlVDVE9SLFxuICAgICAgICAgIExJU1QsXG4gICAgICAgICAgUkVDT1JELFxuICAgICAgICAgIENPTU1FTlRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2luZml4IGluZml4bCBpbmZpeHInLFxuICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICAgICAgQ09NTUVOVFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ3BvcnQnLFxuICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAga2V5d29yZHM6ICdwb3J0JyxcbiAgICAgICAgY29udGFpbnM6IFtDT01NRU5UXVxuICAgICAgfSxcblxuICAgICAgLy8gTGl0ZXJhbHMgYW5kIG5hbWVzLlxuXG4gICAgICBDSEFSQUNURVIsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAgQ09OU1RSVUNUT1IsXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7XG4gICAgICAgIGJlZ2luOiAnXltfYS16XVtcXFxcd1xcJ10qJ1xuICAgICAgfSksXG4gICAgICBDT01NRU5ULFxuXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnLT58PC0nXG4gICAgICB9IC8vIE5vIG1hcmt1cCwgcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICBdLFxuICAgIGlsbGVnYWw6IC87L1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVsbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/elm.js\n");

/***/ })

}]);