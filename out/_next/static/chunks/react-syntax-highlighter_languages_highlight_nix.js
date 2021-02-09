(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_nix"],{

/***/ "./node_modules/highlight.js/lib/languages/nix.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/nix.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Nix\nAuthor: Domen Kožar <domen@dev.si>\nDescription: Nix functional language\nWebsite: http://nixos.org/nix\n*/\n\nfunction nix(hljs) {\n  const NIX_KEYWORDS = {\n    keyword:\n      'rec with let in inherit assert if else then',\n    literal:\n      'true false or and null',\n    built_in:\n      'import abort baseNameOf dirOf isNull builtins map removeAttrs throw ' +\n      'toString derivation'\n  };\n  const ANTIQUOTE = {\n    className: 'subst',\n    begin: /\\$\\{/,\n    end: /\\}/,\n    keywords: NIX_KEYWORDS\n  };\n  const ATTRS = {\n    begin: /[a-zA-Z0-9-_]+(\\s*=)/,\n    returnBegin: true,\n    relevance: 0,\n    contains: [\n      {\n        className: 'attr',\n        begin: /\\S+/\n      }\n    ]\n  };\n  const STRING = {\n    className: 'string',\n    contains: [ ANTIQUOTE ],\n    variants: [\n      {\n        begin: \"''\",\n        end: \"''\"\n      },\n      {\n        begin: '\"',\n        end: '\"'\n      }\n    ]\n  };\n  const EXPRESSIONS = [\n    hljs.NUMBER_MODE,\n    hljs.HASH_COMMENT_MODE,\n    hljs.C_BLOCK_COMMENT_MODE,\n    STRING,\n    ATTRS\n  ];\n  ANTIQUOTE.contains = EXPRESSIONS;\n  return {\n    name: 'Nix',\n    aliases: [ \"nixos\" ],\n    keywords: NIX_KEYWORDS,\n    contains: EXPRESSIONS\n  };\n}\n\nmodule.exports = nix;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL25peC5qcz80NmFlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL25peC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogTml4XG5BdXRob3I6IERvbWVuIEtvxb5hciA8ZG9tZW5AZGV2LnNpPlxuRGVzY3JpcHRpb246IE5peCBmdW5jdGlvbmFsIGxhbmd1YWdlXG5XZWJzaXRlOiBodHRwOi8vbml4b3Mub3JnL25peFxuKi9cblxuZnVuY3Rpb24gbml4KGhsanMpIHtcbiAgY29uc3QgTklYX0tFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6XG4gICAgICAncmVjIHdpdGggbGV0IGluIGluaGVyaXQgYXNzZXJ0IGlmIGVsc2UgdGhlbicsXG4gICAgbGl0ZXJhbDpcbiAgICAgICd0cnVlIGZhbHNlIG9yIGFuZCBudWxsJyxcbiAgICBidWlsdF9pbjpcbiAgICAgICdpbXBvcnQgYWJvcnQgYmFzZU5hbWVPZiBkaXJPZiBpc051bGwgYnVpbHRpbnMgbWFwIHJlbW92ZUF0dHJzIHRocm93ICcgK1xuICAgICAgJ3RvU3RyaW5nIGRlcml2YXRpb24nXG4gIH07XG4gIGNvbnN0IEFOVElRVU9URSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46IC9cXCRcXHsvLFxuICAgIGVuZDogL1xcfS8sXG4gICAga2V5d29yZHM6IE5JWF9LRVlXT1JEU1xuICB9O1xuICBjb25zdCBBVFRSUyA9IHtcbiAgICBiZWdpbjogL1thLXpBLVowLTktX10rKFxccyo9KS8sXG4gICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICBiZWdpbjogL1xcUysvXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBjb25zdCBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBjb250YWluczogWyBBTlRJUVVPVEUgXSxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogXCInJ1wiLFxuICAgICAgICBlbmQ6IFwiJydcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcIicsXG4gICAgICAgIGVuZDogJ1wiJ1xuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgY29uc3QgRVhQUkVTU0lPTlMgPSBbXG4gICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgU1RSSU5HLFxuICAgIEFUVFJTXG4gIF07XG4gIEFOVElRVU9URS5jb250YWlucyA9IEVYUFJFU1NJT05TO1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdOaXgnLFxuICAgIGFsaWFzZXM6IFsgXCJuaXhvc1wiIF0sXG4gICAga2V5d29yZHM6IE5JWF9LRVlXT1JEUyxcbiAgICBjb250YWluczogRVhQUkVTU0lPTlNcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuaXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/nix.js\n");

/***/ })

}]);