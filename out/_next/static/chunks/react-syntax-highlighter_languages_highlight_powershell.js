(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_powershell"],{

/***/ "./node_modules/highlight.js/lib/languages/powershell.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/powershell.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: PowerShell\nDescription: PowerShell is a task-based command-line shell and scripting language built on .NET.\nAuthor: David Mohundro <david@mohundro.com>\nContributors: Nicholas Blumhardt <nblumhardt@nblumhardt.com>, Victor Zhou <OiCMudkips@users.noreply.github.com>, Nicolas Le Gall <contact@nlegall.fr>\nWebsite: https://docs.microsoft.com/en-us/powershell/\n*/\n\nfunction powershell(hljs) {\n  const TYPES = [\n    \"string\",\n    \"char\",\n    \"byte\",\n    \"int\",\n    \"long\",\n    \"bool\",\n    \"decimal\",\n    \"single\",\n    \"double\",\n    \"DateTime\",\n    \"xml\",\n    \"array\",\n    \"hashtable\",\n    \"void\"\n  ];\n\n  // https://msdn.microsoft.com/en-us/library/ms714428(v=vs.85).aspx\n  const VALID_VERBS =\n    'Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|' +\n    'Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|' +\n    'Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|' +\n    'Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|' +\n    'ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|' +\n    'Limit|Merge|Out|Publish|Restore|Save|Sync|Unpublish|Update|' +\n    'Approve|Assert|Complete|Confirm|Deny|Disable|Enable|Install|Invoke|Register|' +\n    'Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|' +\n    'Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|' +\n    'Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|' +\n    'Unprotect|Use|ForEach|Sort|Tee|Where';\n\n  const COMPARISON_OPERATORS =\n    '-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|' +\n    '-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|' +\n    '-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|' +\n    '-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|' +\n    '-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|' +\n    '-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|' +\n    '-split|-wildcard|-xor';\n\n  const KEYWORDS = {\n    $pattern: /-?[A-z\\.\\-]+\\b/,\n    keyword:\n      'if else foreach return do while until elseif begin for trap data dynamicparam ' +\n      'end break throw param continue finally in switch exit filter try process catch ' +\n      'hidden static parameter',\n    // \"echo\" relevance has been set to 0 to avoid auto-detect conflicts with shell transcripts\n    built_in:\n      'ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp ' +\n      'cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx ' +\n      'fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group ' +\n      'gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi ' +\n      'iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh ' +\n      'popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp ' +\n      'rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp ' +\n      'spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write'\n    // TODO: 'validate[A-Z]+' can't work in keywords\n  };\n\n  const TITLE_NAME_RE = /\\w[\\w\\d]*((-)[\\w\\d]+)*/;\n\n  const BACKTICK_ESCAPE = {\n    begin: '`[\\\\s\\\\S]',\n    relevance: 0\n  };\n\n  const VAR = {\n    className: 'variable',\n    variants: [\n      {\n        begin: /\\$\\B/\n      },\n      {\n        className: 'keyword',\n        begin: /\\$this/\n      },\n      {\n        begin: /\\$[\\w\\d][\\w\\d_:]*/\n      }\n    ]\n  };\n\n  const LITERAL = {\n    className: 'literal',\n    begin: /\\$(null|true|false)\\b/\n  };\n\n  const QUOTE_STRING = {\n    className: \"string\",\n    variants: [\n      {\n        begin: /\"/,\n        end: /\"/\n      },\n      {\n        begin: /@\"/,\n        end: /^\"@/\n      }\n    ],\n    contains: [\n      BACKTICK_ESCAPE,\n      VAR,\n      {\n        className: 'variable',\n        begin: /\\$[A-z]/,\n        end: /[^A-z]/\n      }\n    ]\n  };\n\n  const APOS_STRING = {\n    className: 'string',\n    variants: [\n      {\n        begin: /'/,\n        end: /'/\n      },\n      {\n        begin: /@'/,\n        end: /^'@/\n      }\n    ]\n  };\n\n  const PS_HELPTAGS = {\n    className: \"doctag\",\n    variants: [\n      /* no paramater help tags */\n      {\n        begin: /\\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/\n      },\n      /* one parameter help tags */\n      {\n        begin: /\\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\\s+\\S+/\n      }\n    ]\n  };\n\n  const PS_COMMENT = hljs.inherit(\n    hljs.COMMENT(null, null),\n    {\n      variants: [\n        /* single-line comment */\n        {\n          begin: /#/,\n          end: /$/\n        },\n        /* multi-line comment */\n        {\n          begin: /<#/,\n          end: /#>/\n        }\n      ],\n      contains: [ PS_HELPTAGS ]\n    }\n  );\n\n  const CMDLETS = {\n    className: 'built_in',\n    variants: [\n      {\n        begin: '('.concat(VALID_VERBS, ')+(-)[\\\\w\\\\d]+')\n      }\n    ]\n  };\n\n  const PS_CLASS = {\n    className: 'class',\n    beginKeywords: 'class enum',\n    end: /\\s*[{]/,\n    excludeEnd: true,\n    relevance: 0,\n    contains: [ hljs.TITLE_MODE ]\n  };\n\n  const PS_FUNCTION = {\n    className: 'function',\n    begin: /function\\s+/,\n    end: /\\s*\\{|$/,\n    excludeEnd: true,\n    returnBegin: true,\n    relevance: 0,\n    contains: [\n      {\n        begin: \"function\",\n        relevance: 0,\n        className: \"keyword\"\n      },\n      {\n        className: \"title\",\n        begin: TITLE_NAME_RE,\n        relevance: 0\n      },\n      {\n        begin: /\\(/,\n        end: /\\)/,\n        className: \"params\",\n        relevance: 0,\n        contains: [ VAR ]\n      }\n      // CMDLETS\n    ]\n  };\n\n  // Using statment, plus type, plus assembly name.\n  const PS_USING = {\n    begin: /using\\s/,\n    end: /$/,\n    returnBegin: true,\n    contains: [\n      QUOTE_STRING,\n      APOS_STRING,\n      {\n        className: 'keyword',\n        begin: /(using|assembly|command|module|namespace|type)/\n      }\n    ]\n  };\n\n  // Comperison operators & function named parameters.\n  const PS_ARGUMENTS = {\n    variants: [\n      // PS literals are pretty verbose so it's a good idea to accent them a bit.\n      {\n        className: 'operator',\n        begin: '('.concat(COMPARISON_OPERATORS, ')\\\\b')\n      },\n      {\n        className: 'literal',\n        begin: /(-)[\\w\\d]+/,\n        relevance: 0\n      }\n    ]\n  };\n\n  const HASH_SIGNS = {\n    className: 'selector-tag',\n    begin: /@\\B/,\n    relevance: 0\n  };\n\n  // It's a very general rule so I'll narrow it a bit with some strict boundaries\n  // to avoid any possible false-positive collisions!\n  const PS_METHODS = {\n    className: 'function',\n    begin: /\\[.*\\]\\s*[\\w]+[ ]??\\(/,\n    end: /$/,\n    returnBegin: true,\n    relevance: 0,\n    contains: [\n      {\n        className: 'keyword',\n        begin: '('.concat(\n          KEYWORDS.keyword.toString().replace(/\\s/g, '|'\n          ), ')\\\\b'),\n        endsParent: true,\n        relevance: 0\n      },\n      hljs.inherit(hljs.TITLE_MODE, {\n        endsParent: true\n      })\n    ]\n  };\n\n  const GENTLEMANS_SET = [\n    // STATIC_MEMBER,\n    PS_METHODS,\n    PS_COMMENT,\n    BACKTICK_ESCAPE,\n    hljs.NUMBER_MODE,\n    QUOTE_STRING,\n    APOS_STRING,\n    // PS_NEW_OBJECT_TYPE,\n    CMDLETS,\n    VAR,\n    LITERAL,\n    HASH_SIGNS\n  ];\n\n  const PS_TYPE = {\n    begin: /\\[/,\n    end: /\\]/,\n    excludeBegin: true,\n    excludeEnd: true,\n    relevance: 0,\n    contains: [].concat(\n      'self',\n      GENTLEMANS_SET,\n      {\n        begin: \"(\" + TYPES.join(\"|\") + \")\",\n        className: \"built_in\",\n        relevance: 0\n      },\n      {\n        className: 'type',\n        begin: /[\\.\\w\\d]+/,\n        relevance: 0\n      }\n    )\n  };\n\n  PS_METHODS.contains.unshift(PS_TYPE);\n\n  return {\n    name: 'PowerShell',\n    aliases: [\n      \"ps\",\n      \"ps1\"\n    ],\n    case_insensitive: true,\n    keywords: KEYWORDS,\n    contains: GENTLEMANS_SET.concat(\n      PS_CLASS,\n      PS_FUNCTION,\n      PS_USING,\n      PS_ARGUMENTS,\n      PS_TYPE\n    )\n  };\n}\n\nmodule.exports = powershell;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Bvd2Vyc2hlbGwuanM/NTA4ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcG93ZXJzaGVsbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogUG93ZXJTaGVsbFxuRGVzY3JpcHRpb246IFBvd2VyU2hlbGwgaXMgYSB0YXNrLWJhc2VkIGNvbW1hbmQtbGluZSBzaGVsbCBhbmQgc2NyaXB0aW5nIGxhbmd1YWdlIGJ1aWx0IG9uIC5ORVQuXG5BdXRob3I6IERhdmlkIE1vaHVuZHJvIDxkYXZpZEBtb2h1bmRyby5jb20+XG5Db250cmlidXRvcnM6IE5pY2hvbGFzIEJsdW1oYXJkdCA8bmJsdW1oYXJkdEBuYmx1bWhhcmR0LmNvbT4sIFZpY3RvciBaaG91IDxPaUNNdWRraXBzQHVzZXJzLm5vcmVwbHkuZ2l0aHViLmNvbT4sIE5pY29sYXMgTGUgR2FsbCA8Y29udGFjdEBubGVnYWxsLmZyPlxuV2Vic2l0ZTogaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvcG93ZXJzaGVsbC9cbiovXG5cbmZ1bmN0aW9uIHBvd2Vyc2hlbGwoaGxqcykge1xuICBjb25zdCBUWVBFUyA9IFtcbiAgICBcInN0cmluZ1wiLFxuICAgIFwiY2hhclwiLFxuICAgIFwiYnl0ZVwiLFxuICAgIFwiaW50XCIsXG4gICAgXCJsb25nXCIsXG4gICAgXCJib29sXCIsXG4gICAgXCJkZWNpbWFsXCIsXG4gICAgXCJzaW5nbGVcIixcbiAgICBcImRvdWJsZVwiLFxuICAgIFwiRGF0ZVRpbWVcIixcbiAgICBcInhtbFwiLFxuICAgIFwiYXJyYXlcIixcbiAgICBcImhhc2h0YWJsZVwiLFxuICAgIFwidm9pZFwiXG4gIF07XG5cbiAgLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczcxNDQyOCh2PXZzLjg1KS5hc3B4XG4gIGNvbnN0IFZBTElEX1ZFUkJTID1cbiAgICAnQWRkfENsZWFyfENsb3NlfENvcHl8RW50ZXJ8RXhpdHxGaW5kfEZvcm1hdHxHZXR8SGlkZXxKb2lufExvY2t8JyArXG4gICAgJ01vdmV8TmV3fE9wZW58T3B0aW1pemV8UG9wfFB1c2h8UmVkb3xSZW1vdmV8UmVuYW1lfFJlc2V0fFJlc2l6ZXwnICtcbiAgICAnU2VhcmNofFNlbGVjdHxTZXR8U2hvd3xTa2lwfFNwbGl0fFN0ZXB8U3dpdGNofFVuZG98VW5sb2NrfCcgK1xuICAgICdXYXRjaHxCYWNrdXB8Q2hlY2twb2ludHxDb21wYXJlfENvbXByZXNzfENvbnZlcnR8Q29udmVydEZyb218JyArXG4gICAgJ0NvbnZlcnRUb3xEaXNtb3VudHxFZGl0fEV4cGFuZHxFeHBvcnR8R3JvdXB8SW1wb3J0fEluaXRpYWxpemV8JyArXG4gICAgJ0xpbWl0fE1lcmdlfE91dHxQdWJsaXNofFJlc3RvcmV8U2F2ZXxTeW5jfFVucHVibGlzaHxVcGRhdGV8JyArXG4gICAgJ0FwcHJvdmV8QXNzZXJ0fENvbXBsZXRlfENvbmZpcm18RGVueXxEaXNhYmxlfEVuYWJsZXxJbnN0YWxsfEludm9rZXxSZWdpc3RlcnwnICtcbiAgICAnUmVxdWVzdHxSZXN0YXJ0fFJlc3VtZXxTdGFydHxTdG9wfFN1Ym1pdHxTdXNwZW5kfFVuaW5zdGFsbHwnICtcbiAgICAnVW5yZWdpc3RlcnxXYWl0fERlYnVnfE1lYXN1cmV8UGluZ3xSZXBhaXJ8UmVzb2x2ZXxUZXN0fFRyYWNlfENvbm5lY3R8JyArXG4gICAgJ0Rpc2Nvbm5lY3R8UmVhZHxSZWNlaXZlfFNlbmR8V3JpdGV8QmxvY2t8R3JhbnR8UHJvdGVjdHxSZXZva2V8VW5ibG9ja3wnICtcbiAgICAnVW5wcm90ZWN0fFVzZXxGb3JFYWNofFNvcnR8VGVlfFdoZXJlJztcblxuICBjb25zdCBDT01QQVJJU09OX09QRVJBVE9SUyA9XG4gICAgJy1hbmR8LWFzfC1iYW5kfC1ibm90fC1ib3J8LWJ4b3J8LWNhc2VzZW5zaXRpdmV8LWNjb250YWluc3wtY2VxfC1jZ2V8LWNndHwnICtcbiAgICAnLWNsZXwtY2xpa2V8LWNsdHwtY21hdGNofC1jbmV8LWNub3Rjb250YWluc3wtY25vdGxpa2V8LWNub3RtYXRjaHwtY29udGFpbnN8JyArXG4gICAgJy1jcmVwbGFjZXwtY3NwbGl0fC1lcXwtZXhhY3R8LWZ8LWZpbGV8LWdlfC1ndHwtaWNvbnRhaW5zfC1pZXF8LWlnZXwtaWd0fCcgK1xuICAgICctaWxlfC1pbGlrZXwtaWx0fC1pbWF0Y2h8LWlufC1pbmV8LWlub3Rjb250YWluc3wtaW5vdGxpa2V8LWlub3RtYXRjaHwnICtcbiAgICAnLWlyZXBsYWNlfC1pc3wtaXNub3R8LWlzcGxpdHwtam9pbnwtbGV8LWxpa2V8LWx0fC1tYXRjaHwtbmV8LW5vdHwnICtcbiAgICAnLW5vdGNvbnRhaW5zfC1ub3Rpbnwtbm90bGlrZXwtbm90bWF0Y2h8LW9yfC1yZWdleHwtcmVwbGFjZXwtc2hsfC1zaHJ8JyArXG4gICAgJy1zcGxpdHwtd2lsZGNhcmR8LXhvcic7XG5cbiAgY29uc3QgS0VZV09SRFMgPSB7XG4gICAgJHBhdHRlcm46IC8tP1tBLXpcXC5cXC1dK1xcYi8sXG4gICAga2V5d29yZDpcbiAgICAgICdpZiBlbHNlIGZvcmVhY2ggcmV0dXJuIGRvIHdoaWxlIHVudGlsIGVsc2VpZiBiZWdpbiBmb3IgdHJhcCBkYXRhIGR5bmFtaWNwYXJhbSAnICtcbiAgICAgICdlbmQgYnJlYWsgdGhyb3cgcGFyYW0gY29udGludWUgZmluYWxseSBpbiBzd2l0Y2ggZXhpdCBmaWx0ZXIgdHJ5IHByb2Nlc3MgY2F0Y2ggJyArXG4gICAgICAnaGlkZGVuIHN0YXRpYyBwYXJhbWV0ZXInLFxuICAgIC8vIFwiZWNob1wiIHJlbGV2YW5jZSBoYXMgYmVlbiBzZXQgdG8gMCB0byBhdm9pZCBhdXRvLWRldGVjdCBjb25mbGljdHMgd2l0aCBzaGVsbCB0cmFuc2NyaXB0c1xuICAgIGJ1aWx0X2luOlxuICAgICAgJ2FjIGFzbnAgY2F0IGNkIENGUyBjaGRpciBjbGMgY2xlYXIgY2xoeSBjbGkgY2xwIGNscyBjbHYgY25zbiBjb21wYXJlIGNvcHkgY3AgJyArXG4gICAgICAnY3BpIGNwcCBjdXJsIGN2cGEgZGJwIGRlbCBkaWZmIGRpciBkbnNuIGVicCBlY2hvfDAgZXBhbCBlcGNzdiBlcHNuIGVyYXNlIGV0c24gZXhzbiBmYyBmaHggJyArXG4gICAgICAnZmwgZnQgZncgZ2FsIGdicCBnYyBnY2IgZ2NpIGdjbSBnY3MgZ2RyIGdlcnIgZ2h5IGdpIGdpbiBnamIgZ2wgZ20gZ21vIGdwIGdwcyBncHYgZ3JvdXAgJyArXG4gICAgICAnZ3NuIGdzbnAgZ3N2IGd0eiBndSBndiBnd21pIGggaGlzdG9yeSBpY20gaWV4IGloeSBpaSBpcGFsIGlwY3N2IGlwbW8gaXBzbiBpcm0gaXNlIGl3bWkgJyArXG4gICAgICAnaXdyIGtpbGwgbHAgbHMgbWFuIG1kIG1lYXN1cmUgbWkgbW91bnQgbW92ZSBtcCBtdiBuYWwgbmRyIG5pIG5tbyBucHNzYyBuc24gbnYgb2d2IG9oICcgK1xuICAgICAgJ3BvcGQgcHMgcHVzaGQgcHdkIHIgcmJwIHJjamIgcmNzbiByZCByZHIgcmVuIHJpIHJqYiBybSBybWRpciBybW8gcm5pIHJucCBycCByc24gcnNucCAnICtcbiAgICAgICdydWpiIHJ2IHJ2cGEgcndtaSBzYWpiIHNhbCBzYXBzIHNhc3Ygc2JwIHNjIHNjYiBzZWxlY3Qgc2V0IHNoY20gc2kgc2wgc2xlZXAgc2xzIHNvcnQgc3AgJyArXG4gICAgICAnc3BqYiBzcHBzIHNwc3Ygc3RhcnQgc3R6IHN1amIgc3Ygc3dtaSB0ZWUgdHJjbSB0eXBlIHdnZXQgd2hlcmUgd2piIHdyaXRlJ1xuICAgIC8vIFRPRE86ICd2YWxpZGF0ZVtBLVpdKycgY2FuJ3Qgd29yayBpbiBrZXl3b3Jkc1xuICB9O1xuXG4gIGNvbnN0IFRJVExFX05BTUVfUkUgPSAvXFx3W1xcd1xcZF0qKCgtKVtcXHdcXGRdKykqLztcblxuICBjb25zdCBCQUNLVElDS19FU0NBUEUgPSB7XG4gICAgYmVnaW46ICdgW1xcXFxzXFxcXFNdJyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBWQVIgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwkXFxCL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIGJlZ2luOiAvXFwkdGhpcy9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwkW1xcd1xcZF1bXFx3XFxkXzpdKi9cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgTElURVJBTCA9IHtcbiAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICBiZWdpbjogL1xcJChudWxsfHRydWV8ZmFsc2UpXFxiL1xuICB9O1xuXG4gIGNvbnN0IFFVT1RFX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3RyaW5nXCIsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cIi8sXG4gICAgICAgIGVuZDogL1wiL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9AXCIvLFxuICAgICAgICBlbmQ6IC9eXCJAL1xuICAgICAgfVxuICAgIF0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIEJBQ0tUSUNLX0VTQ0FQRSxcbiAgICAgIFZBUixcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICBiZWdpbjogL1xcJFtBLXpdLyxcbiAgICAgICAgZW5kOiAvW15BLXpdL1xuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBBUE9TX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvJy8sXG4gICAgICAgIGVuZDogLycvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL0AnLyxcbiAgICAgICAgZW5kOiAvXidAL1xuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBQU19IRUxQVEFHUyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZG9jdGFnXCIsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIC8qIG5vIHBhcmFtYXRlciBoZWxwIHRhZ3MgKi9cbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXC4oc3lub3BzaXN8ZGVzY3JpcHRpb258ZXhhbXBsZXxpbnB1dHN8b3V0cHV0c3xub3Rlc3xsaW5rfGNvbXBvbmVudHxyb2xlfGZ1bmN0aW9uYWxpdHkpL1xuICAgICAgfSxcbiAgICAgIC8qIG9uZSBwYXJhbWV0ZXIgaGVscCB0YWdzICovXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwuKHBhcmFtZXRlcnxmb3J3YXJkaGVscHRhcmdldG5hbWV8Zm9yd2FyZGhlbHBjYXRlZ29yeXxyZW1vdGVoZWxwcnVuc3BhY2V8ZXh0ZXJuYWxoZWxwKVxccytcXFMrL1xuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBQU19DT01NRU5UID0gaGxqcy5pbmhlcml0KFxuICAgIGhsanMuQ09NTUVOVChudWxsLCBudWxsKSxcbiAgICB7XG4gICAgICB2YXJpYW50czogW1xuICAgICAgICAvKiBzaW5nbGUtbGluZSBjb21tZW50ICovXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogLyMvLFxuICAgICAgICAgIGVuZDogLyQvXG4gICAgICAgIH0sXG4gICAgICAgIC8qIG11bHRpLWxpbmUgY29tbWVudCAqL1xuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46IC88Iy8sXG4gICAgICAgICAgZW5kOiAvIz4vXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBjb250YWluczogWyBQU19IRUxQVEFHUyBdXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IENNRExFVFMgPSB7XG4gICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnKCcuY29uY2F0KFZBTElEX1ZFUkJTLCAnKSsoLSlbXFxcXHdcXFxcZF0rJylcbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgUFNfQ0xBU1MgPSB7XG4gICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBlbnVtJyxcbiAgICBlbmQ6IC9cXHMqW3tdLyxcbiAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogWyBobGpzLlRJVExFX01PREUgXVxuICB9O1xuXG4gIGNvbnN0IFBTX0ZVTkNUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICBiZWdpbjogL2Z1bmN0aW9uXFxzKy8sXG4gICAgZW5kOiAvXFxzKlxce3wkLyxcbiAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogXCJmdW5jdGlvblwiLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNsYXNzTmFtZTogXCJrZXl3b3JkXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJ0aXRsZVwiLFxuICAgICAgICBiZWdpbjogVElUTEVfTkFNRV9SRSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgIGNsYXNzTmFtZTogXCJwYXJhbXNcIixcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogWyBWQVIgXVxuICAgICAgfVxuICAgICAgLy8gQ01ETEVUU1xuICAgIF1cbiAgfTtcblxuICAvLyBVc2luZyBzdGF0bWVudCwgcGx1cyB0eXBlLCBwbHVzIGFzc2VtYmx5IG5hbWUuXG4gIGNvbnN0IFBTX1VTSU5HID0ge1xuICAgIGJlZ2luOiAvdXNpbmdcXHMvLFxuICAgIGVuZDogLyQvLFxuICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBRVU9URV9TVFJJTkcsXG4gICAgICBBUE9TX1NUUklORyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIGJlZ2luOiAvKHVzaW5nfGFzc2VtYmx5fGNvbW1hbmR8bW9kdWxlfG5hbWVzcGFjZXx0eXBlKS9cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgLy8gQ29tcGVyaXNvbiBvcGVyYXRvcnMgJiBmdW5jdGlvbiBuYW1lZCBwYXJhbWV0ZXJzLlxuICBjb25zdCBQU19BUkdVTUVOVFMgPSB7XG4gICAgdmFyaWFudHM6IFtcbiAgICAgIC8vIFBTIGxpdGVyYWxzIGFyZSBwcmV0dHkgdmVyYm9zZSBzbyBpdCdzIGEgZ29vZCBpZGVhIHRvIGFjY2VudCB0aGVtIGEgYml0LlxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdvcGVyYXRvcicsXG4gICAgICAgIGJlZ2luOiAnKCcuY29uY2F0KENPTVBBUklTT05fT1BFUkFUT1JTLCAnKVxcXFxiJylcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2xpdGVyYWwnLFxuICAgICAgICBiZWdpbjogLygtKVtcXHdcXGRdKy8sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBIQVNIX1NJR05TID0ge1xuICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLXRhZycsXG4gICAgYmVnaW46IC9AXFxCLyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICAvLyBJdCdzIGEgdmVyeSBnZW5lcmFsIHJ1bGUgc28gSSdsbCBuYXJyb3cgaXQgYSBiaXQgd2l0aCBzb21lIHN0cmljdCBib3VuZGFyaWVzXG4gIC8vIHRvIGF2b2lkIGFueSBwb3NzaWJsZSBmYWxzZS1wb3NpdGl2ZSBjb2xsaXNpb25zIVxuICBjb25zdCBQU19NRVRIT0RTID0ge1xuICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICBiZWdpbjogL1xcWy4qXFxdXFxzKltcXHddK1sgXT8/XFwoLyxcbiAgICBlbmQ6IC8kLyxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIGJlZ2luOiAnKCcuY29uY2F0KFxuICAgICAgICAgIEtFWVdPUkRTLmtleXdvcmQudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHMvZywgJ3wnXG4gICAgICAgICAgKSwgJylcXFxcYicpLFxuICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7XG4gICAgICAgIGVuZHNQYXJlbnQ6IHRydWVcbiAgICAgIH0pXG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IEdFTlRMRU1BTlNfU0VUID0gW1xuICAgIC8vIFNUQVRJQ19NRU1CRVIsXG4gICAgUFNfTUVUSE9EUyxcbiAgICBQU19DT01NRU5ULFxuICAgIEJBQ0tUSUNLX0VTQ0FQRSxcbiAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgIFFVT1RFX1NUUklORyxcbiAgICBBUE9TX1NUUklORyxcbiAgICAvLyBQU19ORVdfT0JKRUNUX1RZUEUsXG4gICAgQ01ETEVUUyxcbiAgICBWQVIsXG4gICAgTElURVJBTCxcbiAgICBIQVNIX1NJR05TXG4gIF07XG5cbiAgY29uc3QgUFNfVFlQRSA9IHtcbiAgICBiZWdpbjogL1xcWy8sXG4gICAgZW5kOiAvXFxdLyxcbiAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtdLmNvbmNhdChcbiAgICAgICdzZWxmJyxcbiAgICAgIEdFTlRMRU1BTlNfU0VULFxuICAgICAge1xuICAgICAgICBiZWdpbjogXCIoXCIgKyBUWVBFUy5qb2luKFwifFwiKSArIFwiKVwiLFxuICAgICAgICBjbGFzc05hbWU6IFwiYnVpbHRfaW5cIixcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgYmVnaW46IC9bXFwuXFx3XFxkXSsvLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICApXG4gIH07XG5cbiAgUFNfTUVUSE9EUy5jb250YWlucy51bnNoaWZ0KFBTX1RZUEUpO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1Bvd2VyU2hlbGwnLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgIFwicHNcIixcbiAgICAgIFwicHMxXCJcbiAgICBdLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBHRU5UTEVNQU5TX1NFVC5jb25jYXQoXG4gICAgICBQU19DTEFTUyxcbiAgICAgIFBTX0ZVTkNUSU9OLFxuICAgICAgUFNfVVNJTkcsXG4gICAgICBQU19BUkdVTUVOVFMsXG4gICAgICBQU19UWVBFXG4gICAgKVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBvd2Vyc2hlbGw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/powershell.js\n");

/***/ })

}]);