(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_sas"],{

/***/ "./node_modules/highlight.js/lib/languages/sas.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/sas.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: SAS\nAuthor: Mauricio Caceres <mauricio.caceres.bravo@gmail.com>\nDescription: Syntax Highlighting for SAS\n*/\n\nfunction sas(hljs) {\n  // Data step and PROC SQL statements\n  const SAS_KEYWORDS =\n    'do if then else end until while ' +\n    '' +\n    'abort array attrib by call cards cards4 catname continue ' +\n    'datalines datalines4 delete delim delimiter display dm drop ' +\n    'endsas error file filename footnote format goto in infile ' +\n    'informat input keep label leave length libname link list ' +\n    'lostcard merge missing modify options output out page put ' +\n    'redirect remove rename replace retain return select set skip ' +\n    'startsas stop title update waitsas where window x systask ' +\n    '' +\n    'add and alter as cascade check create delete describe ' +\n    'distinct drop foreign from group having index insert into in ' +\n    'key like message modify msgtype not null on or order primary ' +\n    'references reset restrict select set table unique update ' +\n    'validate view where';\n\n  // Built-in SAS functions\n  const SAS_FUN =\n    'abs|addr|airy|arcos|arsin|atan|attrc|attrn|band|' +\n    'betainv|blshift|bnot|bor|brshift|bxor|byte|cdf|ceil|' +\n    'cexist|cinv|close|cnonct|collate|compbl|compound|' +\n    'compress|cos|cosh|css|curobs|cv|daccdb|daccdbsl|' +\n    'daccsl|daccsyd|dacctab|dairy|date|datejul|datepart|' +\n    'datetime|day|dclose|depdb|depdbsl|depdbsl|depsl|' +\n    'depsl|depsyd|depsyd|deptab|deptab|dequote|dhms|dif|' +\n    'digamma|dim|dinfo|dnum|dopen|doptname|doptnum|dread|' +\n    'dropnote|dsname|erf|erfc|exist|exp|fappend|fclose|' +\n    'fcol|fdelete|fetch|fetchobs|fexist|fget|fileexist|' +\n    'filename|fileref|finfo|finv|fipname|fipnamel|' +\n    'fipstate|floor|fnonct|fnote|fopen|foptname|foptnum|' +\n    'fpoint|fpos|fput|fread|frewind|frlen|fsep|fuzz|' +\n    'fwrite|gaminv|gamma|getoption|getvarc|getvarn|hbound|' +\n    'hms|hosthelp|hour|ibessel|index|indexc|indexw|input|' +\n    'inputc|inputn|int|intck|intnx|intrr|irr|jbessel|' +\n    'juldate|kurtosis|lag|lbound|left|length|lgamma|' +\n    'libname|libref|log|log10|log2|logpdf|logpmf|logsdf|' +\n    'lowcase|max|mdy|mean|min|minute|mod|month|mopen|' +\n    'mort|n|netpv|nmiss|normal|note|npv|open|ordinal|' +\n    'pathname|pdf|peek|peekc|pmf|point|poisson|poke|' +\n    'probbeta|probbnml|probchi|probf|probgam|probhypr|' +\n    'probit|probnegb|probnorm|probt|put|putc|putn|qtr|' +\n    'quote|ranbin|rancau|ranexp|rangam|range|rank|rannor|' +\n    'ranpoi|rantbl|rantri|ranuni|repeat|resolve|reverse|' +\n    'rewind|right|round|saving|scan|sdf|second|sign|' +\n    'sin|sinh|skewness|soundex|spedis|sqrt|std|stderr|' +\n    'stfips|stname|stnamel|substr|sum|symget|sysget|' +\n    'sysmsg|sysprod|sysrc|system|tan|tanh|time|timepart|' +\n    'tinv|tnonct|today|translate|tranwrd|trigamma|' +\n    'trim|trimn|trunc|uniform|upcase|uss|var|varfmt|' +\n    'varinfmt|varlabel|varlen|varname|varnum|varray|' +\n    'varrayx|vartype|verify|vformat|vformatd|vformatdx|' +\n    'vformatn|vformatnx|vformatw|vformatwx|vformatx|' +\n    'vinarray|vinarrayx|vinformat|vinformatd|vinformatdx|' +\n    'vinformatn|vinformatnx|vinformatw|vinformatwx|' +\n    'vinformatx|vlabel|vlabelx|vlength|vlengthx|vname|' +\n    'vnamex|vtype|vtypex|weekday|year|yyq|zipfips|zipname|' +\n    'zipnamel|zipstate';\n\n  // Built-in macro functions\n  const SAS_MACRO_FUN =\n    'bquote|nrbquote|cmpres|qcmpres|compstor|' +\n    'datatyp|display|do|else|end|eval|global|goto|' +\n    'if|index|input|keydef|label|left|length|let|' +\n    'local|lowcase|macro|mend|nrbquote|nrquote|' +\n    'nrstr|put|qcmpres|qleft|qlowcase|qscan|' +\n    'qsubstr|qsysfunc|qtrim|quote|qupcase|scan|str|' +\n    'substr|superq|syscall|sysevalf|sysexec|sysfunc|' +\n    'sysget|syslput|sysprod|sysrc|sysrput|then|to|' +\n    'trim|unquote|until|upcase|verify|while|window';\n\n  return {\n    name: 'SAS',\n    aliases: [\n      'sas',\n      'SAS'\n    ],\n    case_insensitive: true, // SAS is case-insensitive\n    keywords: {\n      literal:\n        'null missing _all_ _automatic_ _character_ _infile_ ' +\n        '_n_ _name_ _null_ _numeric_ _user_ _webout_',\n      meta:\n        SAS_KEYWORDS\n    },\n    contains: [\n      {\n        // Distinct highlight for proc <proc>, data, run, quit\n        className: 'keyword',\n        begin: /^\\s*(proc [\\w\\d_]+|data|run|quit)[\\s;]/\n      },\n      {\n        // Macro variables\n        className: 'variable',\n        begin: /&[a-zA-Z_&][a-zA-Z0-9_]*\\.?/\n      },\n      {\n        // Special emphasis for datalines|cards\n        className: 'emphasis',\n        begin: /^\\s*datalines|cards.*;/,\n        end: /^\\s*;\\s*$/\n      },\n      { // Built-in macro variables take precedence\n        className: 'built_in',\n        begin: '%(' + SAS_MACRO_FUN + ')'\n      },\n      {\n        // User-defined macro functions highlighted after\n        className: 'name',\n        begin: /%[a-zA-Z_][a-zA-Z_0-9]*/\n      },\n      {\n        className: 'meta',\n        begin: '[^%](' + SAS_FUN + ')[\\(]'\n      },\n      {\n        className: 'string',\n        variants: [\n          hljs.APOS_STRING_MODE,\n          hljs.QUOTE_STRING_MODE\n        ]\n      },\n      hljs.COMMENT('\\\\*', ';'),\n      hljs.C_BLOCK_COMMENT_MODE\n    ]\n  };\n}\n\nmodule.exports = sas;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Nhcy5qcz80MGY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLG1CQUFtQjtBQUNuQixPQUFPO0FBQ1AsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc2FzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBTQVNcbkF1dGhvcjogTWF1cmljaW8gQ2FjZXJlcyA8bWF1cmljaW8uY2FjZXJlcy5icmF2b0BnbWFpbC5jb20+XG5EZXNjcmlwdGlvbjogU3ludGF4IEhpZ2hsaWdodGluZyBmb3IgU0FTXG4qL1xuXG5mdW5jdGlvbiBzYXMoaGxqcykge1xuICAvLyBEYXRhIHN0ZXAgYW5kIFBST0MgU1FMIHN0YXRlbWVudHNcbiAgY29uc3QgU0FTX0tFWVdPUkRTID1cbiAgICAnZG8gaWYgdGhlbiBlbHNlIGVuZCB1bnRpbCB3aGlsZSAnICtcbiAgICAnJyArXG4gICAgJ2Fib3J0IGFycmF5IGF0dHJpYiBieSBjYWxsIGNhcmRzIGNhcmRzNCBjYXRuYW1lIGNvbnRpbnVlICcgK1xuICAgICdkYXRhbGluZXMgZGF0YWxpbmVzNCBkZWxldGUgZGVsaW0gZGVsaW1pdGVyIGRpc3BsYXkgZG0gZHJvcCAnICtcbiAgICAnZW5kc2FzIGVycm9yIGZpbGUgZmlsZW5hbWUgZm9vdG5vdGUgZm9ybWF0IGdvdG8gaW4gaW5maWxlICcgK1xuICAgICdpbmZvcm1hdCBpbnB1dCBrZWVwIGxhYmVsIGxlYXZlIGxlbmd0aCBsaWJuYW1lIGxpbmsgbGlzdCAnICtcbiAgICAnbG9zdGNhcmQgbWVyZ2UgbWlzc2luZyBtb2RpZnkgb3B0aW9ucyBvdXRwdXQgb3V0IHBhZ2UgcHV0ICcgK1xuICAgICdyZWRpcmVjdCByZW1vdmUgcmVuYW1lIHJlcGxhY2UgcmV0YWluIHJldHVybiBzZWxlY3Qgc2V0IHNraXAgJyArXG4gICAgJ3N0YXJ0c2FzIHN0b3AgdGl0bGUgdXBkYXRlIHdhaXRzYXMgd2hlcmUgd2luZG93IHggc3lzdGFzayAnICtcbiAgICAnJyArXG4gICAgJ2FkZCBhbmQgYWx0ZXIgYXMgY2FzY2FkZSBjaGVjayBjcmVhdGUgZGVsZXRlIGRlc2NyaWJlICcgK1xuICAgICdkaXN0aW5jdCBkcm9wIGZvcmVpZ24gZnJvbSBncm91cCBoYXZpbmcgaW5kZXggaW5zZXJ0IGludG8gaW4gJyArXG4gICAgJ2tleSBsaWtlIG1lc3NhZ2UgbW9kaWZ5IG1zZ3R5cGUgbm90IG51bGwgb24gb3Igb3JkZXIgcHJpbWFyeSAnICtcbiAgICAncmVmZXJlbmNlcyByZXNldCByZXN0cmljdCBzZWxlY3Qgc2V0IHRhYmxlIHVuaXF1ZSB1cGRhdGUgJyArXG4gICAgJ3ZhbGlkYXRlIHZpZXcgd2hlcmUnO1xuXG4gIC8vIEJ1aWx0LWluIFNBUyBmdW5jdGlvbnNcbiAgY29uc3QgU0FTX0ZVTiA9XG4gICAgJ2Fic3xhZGRyfGFpcnl8YXJjb3N8YXJzaW58YXRhbnxhdHRyY3xhdHRybnxiYW5kfCcgK1xuICAgICdiZXRhaW52fGJsc2hpZnR8Ym5vdHxib3J8YnJzaGlmdHxieG9yfGJ5dGV8Y2RmfGNlaWx8JyArXG4gICAgJ2NleGlzdHxjaW52fGNsb3NlfGNub25jdHxjb2xsYXRlfGNvbXBibHxjb21wb3VuZHwnICtcbiAgICAnY29tcHJlc3N8Y29zfGNvc2h8Y3NzfGN1cm9ic3xjdnxkYWNjZGJ8ZGFjY2Ric2x8JyArXG4gICAgJ2RhY2NzbHxkYWNjc3lkfGRhY2N0YWJ8ZGFpcnl8ZGF0ZXxkYXRlanVsfGRhdGVwYXJ0fCcgK1xuICAgICdkYXRldGltZXxkYXl8ZGNsb3NlfGRlcGRifGRlcGRic2x8ZGVwZGJzbHxkZXBzbHwnICtcbiAgICAnZGVwc2x8ZGVwc3lkfGRlcHN5ZHxkZXB0YWJ8ZGVwdGFifGRlcXVvdGV8ZGhtc3xkaWZ8JyArXG4gICAgJ2RpZ2FtbWF8ZGltfGRpbmZvfGRudW18ZG9wZW58ZG9wdG5hbWV8ZG9wdG51bXxkcmVhZHwnICtcbiAgICAnZHJvcG5vdGV8ZHNuYW1lfGVyZnxlcmZjfGV4aXN0fGV4cHxmYXBwZW5kfGZjbG9zZXwnICtcbiAgICAnZmNvbHxmZGVsZXRlfGZldGNofGZldGNob2JzfGZleGlzdHxmZ2V0fGZpbGVleGlzdHwnICtcbiAgICAnZmlsZW5hbWV8ZmlsZXJlZnxmaW5mb3xmaW52fGZpcG5hbWV8ZmlwbmFtZWx8JyArXG4gICAgJ2ZpcHN0YXRlfGZsb29yfGZub25jdHxmbm90ZXxmb3Blbnxmb3B0bmFtZXxmb3B0bnVtfCcgK1xuICAgICdmcG9pbnR8ZnBvc3xmcHV0fGZyZWFkfGZyZXdpbmR8ZnJsZW58ZnNlcHxmdXp6fCcgK1xuICAgICdmd3JpdGV8Z2FtaW52fGdhbW1hfGdldG9wdGlvbnxnZXR2YXJjfGdldHZhcm58aGJvdW5kfCcgK1xuICAgICdobXN8aG9zdGhlbHB8aG91cnxpYmVzc2VsfGluZGV4fGluZGV4Y3xpbmRleHd8aW5wdXR8JyArXG4gICAgJ2lucHV0Y3xpbnB1dG58aW50fGludGNrfGludG54fGludHJyfGlycnxqYmVzc2VsfCcgK1xuICAgICdqdWxkYXRlfGt1cnRvc2lzfGxhZ3xsYm91bmR8bGVmdHxsZW5ndGh8bGdhbW1hfCcgK1xuICAgICdsaWJuYW1lfGxpYnJlZnxsb2d8bG9nMTB8bG9nMnxsb2dwZGZ8bG9ncG1mfGxvZ3NkZnwnICtcbiAgICAnbG93Y2FzZXxtYXh8bWR5fG1lYW58bWlufG1pbnV0ZXxtb2R8bW9udGh8bW9wZW58JyArXG4gICAgJ21vcnR8bnxuZXRwdnxubWlzc3xub3JtYWx8bm90ZXxucHZ8b3BlbnxvcmRpbmFsfCcgK1xuICAgICdwYXRobmFtZXxwZGZ8cGVla3xwZWVrY3xwbWZ8cG9pbnR8cG9pc3Nvbnxwb2tlfCcgK1xuICAgICdwcm9iYmV0YXxwcm9iYm5tbHxwcm9iY2hpfHByb2JmfHByb2JnYW18cHJvYmh5cHJ8JyArXG4gICAgJ3Byb2JpdHxwcm9ibmVnYnxwcm9ibm9ybXxwcm9idHxwdXR8cHV0Y3xwdXRufHF0cnwnICtcbiAgICAncXVvdGV8cmFuYmlufHJhbmNhdXxyYW5leHB8cmFuZ2FtfHJhbmdlfHJhbmt8cmFubm9yfCcgK1xuICAgICdyYW5wb2l8cmFudGJsfHJhbnRyaXxyYW51bml8cmVwZWF0fHJlc29sdmV8cmV2ZXJzZXwnICtcbiAgICAncmV3aW5kfHJpZ2h0fHJvdW5kfHNhdmluZ3xzY2FufHNkZnxzZWNvbmR8c2lnbnwnICtcbiAgICAnc2lufHNpbmh8c2tld25lc3N8c291bmRleHxzcGVkaXN8c3FydHxzdGR8c3RkZXJyfCcgK1xuICAgICdzdGZpcHN8c3RuYW1lfHN0bmFtZWx8c3Vic3RyfHN1bXxzeW1nZXR8c3lzZ2V0fCcgK1xuICAgICdzeXNtc2d8c3lzcHJvZHxzeXNyY3xzeXN0ZW18dGFufHRhbmh8dGltZXx0aW1lcGFydHwnICtcbiAgICAndGludnx0bm9uY3R8dG9kYXl8dHJhbnNsYXRlfHRyYW53cmR8dHJpZ2FtbWF8JyArXG4gICAgJ3RyaW18dHJpbW58dHJ1bmN8dW5pZm9ybXx1cGNhc2V8dXNzfHZhcnx2YXJmbXR8JyArXG4gICAgJ3ZhcmluZm10fHZhcmxhYmVsfHZhcmxlbnx2YXJuYW1lfHZhcm51bXx2YXJyYXl8JyArXG4gICAgJ3ZhcnJheXh8dmFydHlwZXx2ZXJpZnl8dmZvcm1hdHx2Zm9ybWF0ZHx2Zm9ybWF0ZHh8JyArXG4gICAgJ3Zmb3JtYXRufHZmb3JtYXRueHx2Zm9ybWF0d3x2Zm9ybWF0d3h8dmZvcm1hdHh8JyArXG4gICAgJ3ZpbmFycmF5fHZpbmFycmF5eHx2aW5mb3JtYXR8dmluZm9ybWF0ZHx2aW5mb3JtYXRkeHwnICtcbiAgICAndmluZm9ybWF0bnx2aW5mb3JtYXRueHx2aW5mb3JtYXR3fHZpbmZvcm1hdHd4fCcgK1xuICAgICd2aW5mb3JtYXR4fHZsYWJlbHx2bGFiZWx4fHZsZW5ndGh8dmxlbmd0aHh8dm5hbWV8JyArXG4gICAgJ3ZuYW1leHx2dHlwZXx2dHlwZXh8d2Vla2RheXx5ZWFyfHl5cXx6aXBmaXBzfHppcG5hbWV8JyArXG4gICAgJ3ppcG5hbWVsfHppcHN0YXRlJztcblxuICAvLyBCdWlsdC1pbiBtYWNybyBmdW5jdGlvbnNcbiAgY29uc3QgU0FTX01BQ1JPX0ZVTiA9XG4gICAgJ2JxdW90ZXxucmJxdW90ZXxjbXByZXN8cWNtcHJlc3xjb21wc3RvcnwnICtcbiAgICAnZGF0YXR5cHxkaXNwbGF5fGRvfGVsc2V8ZW5kfGV2YWx8Z2xvYmFsfGdvdG98JyArXG4gICAgJ2lmfGluZGV4fGlucHV0fGtleWRlZnxsYWJlbHxsZWZ0fGxlbmd0aHxsZXR8JyArXG4gICAgJ2xvY2FsfGxvd2Nhc2V8bWFjcm98bWVuZHxucmJxdW90ZXxucnF1b3RlfCcgK1xuICAgICducnN0cnxwdXR8cWNtcHJlc3xxbGVmdHxxbG93Y2FzZXxxc2NhbnwnICtcbiAgICAncXN1YnN0cnxxc3lzZnVuY3xxdHJpbXxxdW90ZXxxdXBjYXNlfHNjYW58c3RyfCcgK1xuICAgICdzdWJzdHJ8c3VwZXJxfHN5c2NhbGx8c3lzZXZhbGZ8c3lzZXhlY3xzeXNmdW5jfCcgK1xuICAgICdzeXNnZXR8c3lzbHB1dHxzeXNwcm9kfHN5c3JjfHN5c3JwdXR8dGhlbnx0b3wnICtcbiAgICAndHJpbXx1bnF1b3RlfHVudGlsfHVwY2FzZXx2ZXJpZnl8d2hpbGV8d2luZG93JztcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdTQVMnLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgICdzYXMnLFxuICAgICAgJ1NBUydcbiAgICBdLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsIC8vIFNBUyBpcyBjYXNlLWluc2Vuc2l0aXZlXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICdudWxsIG1pc3NpbmcgX2FsbF8gX2F1dG9tYXRpY18gX2NoYXJhY3Rlcl8gX2luZmlsZV8gJyArXG4gICAgICAgICdfbl8gX25hbWVfIF9udWxsXyBfbnVtZXJpY18gX3VzZXJfIF93ZWJvdXRfJyxcbiAgICAgIG1ldGE6XG4gICAgICAgIFNBU19LRVlXT1JEU1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgLy8gRGlzdGluY3QgaGlnaGxpZ2h0IGZvciBwcm9jIDxwcm9jPiwgZGF0YSwgcnVuLCBxdWl0XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICBiZWdpbjogL15cXHMqKHByb2MgW1xcd1xcZF9dK3xkYXRhfHJ1bnxxdWl0KVtcXHM7XS9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIE1hY3JvIHZhcmlhYmxlc1xuICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgIGJlZ2luOiAvJlthLXpBLVpfJl1bYS16QS1aMC05X10qXFwuPy9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFNwZWNpYWwgZW1waGFzaXMgZm9yIGRhdGFsaW5lc3xjYXJkc1xuICAgICAgICBjbGFzc05hbWU6ICdlbXBoYXNpcycsXG4gICAgICAgIGJlZ2luOiAvXlxccypkYXRhbGluZXN8Y2FyZHMuKjsvLFxuICAgICAgICBlbmQ6IC9eXFxzKjtcXHMqJC9cbiAgICAgIH0sXG4gICAgICB7IC8vIEJ1aWx0LWluIG1hY3JvIHZhcmlhYmxlcyB0YWtlIHByZWNlZGVuY2VcbiAgICAgICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgICAgICBiZWdpbjogJyUoJyArIFNBU19NQUNST19GVU4gKyAnKSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFVzZXItZGVmaW5lZCBtYWNybyBmdW5jdGlvbnMgaGlnaGxpZ2h0ZWQgYWZ0ZXJcbiAgICAgICAgY2xhc3NOYW1lOiAnbmFtZScsXG4gICAgICAgIGJlZ2luOiAvJVthLXpBLVpfXVthLXpBLVpfMC05XSovXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdbXiVdKCcgKyBTQVNfRlVOICsgJylbXFwoXSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVCgnXFxcXConLCAnOycpLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzYXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/sas.js\n");

/***/ })

}]);