if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/inputex-loader/inputex-loader.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/inputex-loader/inputex-loader.js",
    code: []
};
_yuitest_coverage["build/inputex-loader/inputex-loader.js"].code=["/* This file is auto-generated by src/loader/scripts/meta_join.js */","","YUI().use(function(Y) {","   var CONFIG = {","      groups: {","         'inputex': {","            base: 'inputex/src/',","            combine: false,","            modules: {","    \"inputex\": {","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"intl\",","            \"pluginhost-base\",","            \"pluginhost-config\",","            \"base-pluginhost\",","            \"node-pluginhost\",","            \"plugin\",","            \"node\"","        ],","        \"skinnable\": true","    },","    \"inputex-autocomplete\": {","        \"ix_provides\": \"autocomplete\",","        \"requires\": [","            \"inputex-string\",","            \"autocomplete\"","        ],","        \"skinnable\": true","    },","    \"inputex-base\": {","        \"requires\": [","            \"inputex\",","            \"widget\",","            \"widget-stdmod\"","        ]","    },","    \"inputex-builder\": {","        \"requires\": [","            \"inputex\",","            \"inputex-autocomplete\",","            \"inputex-base\",","            \"inputex-button\",","            \"inputex-checkbox\",","            \"inputex-choice\",","            \"inputex-color\",","            \"inputex-combine\",","            \"inputex-datatable\",","            \"inputex-date\",","            \"inputex-datepicker\",","            \"inputex-dateselectmonth\",","            \"inputex-datesplit\",","            \"inputex-datetime\",","            \"inputex-ddlist\",","            \"inputex-dsselect\",","            \"inputex-email\",","            \"inputex-field\",","            \"inputex-file\",","            \"inputex-form\",","            \"inputex-group\",","            \"inputex-hidden\",","            \"inputex-imagecropper\",","            \"inputex-inplaceedit\",","            \"inputex-integer\",","            \"inputex-ipv4\",","            \"inputex-jsonschema\",","            \"inputex-jsontreeinspector\",","            \"inputex-keyopvalue\",","            \"inputex-keyvalue\",","            \"inputex-lens\",","            \"inputex-linkedcombo\",","            \"inputex-list\",","            \"inputex-map\",","            \"inputex-menu\",","            \"inputex-multiautocomplete\",","            \"inputex-multiselect\",","            \"inputex-number\",","            \"inputex-object\",","            \"inputex-panel\",","            \"inputex-password\",","            \"inputex-radio\",","            \"inputex-ratingstars\",","            \"inputex-ratingstarsform\",","            \"inputex-rpc\",","            \"inputex-rte\",","            \"inputex-select\",","            \"inputex-serialize\",","            \"inputex-slider\",","            \"inputex-smdtester\",","            \"inputex-string\",","            \"inputex-stringavailability\",","            \"inputex-textarea\",","            \"inputex-textautotag\",","            \"inputex-time\",","            \"inputex-timeinterval\",","            \"inputex-timerange\",","            \"inputex-tinymce\",","            \"inputex-tree\",","            \"inputex-type\",","            \"inputex-uneditable\",","            \"inputex-uppercase\",","            \"inputex-url\",","            \"inputex-vector\",","            \"inputex-visus\"","        ],","        \"skinnable\": true","    },","    \"inputex-button\": {","        \"requires\": [","            \"inputex\"","        ]","    },","    \"inputex-checkbox\": {","        \"ix_provides\": \"boolean\",","        \"requires\": [","            \"inputex-field\"","        ],","        \"skinnable\": true","    },","    \"inputex-choice\": {","        \"requires\": [","            \"inputex\"","        ]","    },","    \"inputex-color\": {","        \"ix_provides\": \"color\",","        \"requires\": [","            \"inputex-field\",","            \"node-event-delegate\",","            \"event-outside\",","            \"overlay\"","        ],","        \"skinnable\": true","    },","    \"inputex-combine\": {","        \"ix_provides\": \"combine\",","        \"requires\": [","            \"inputex-group\"","        ],","        \"skinnable\": true","    },","    \"inputex-datatable\": {","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-group\",","            \"inputex-panel\",","            \"datatable\"","        ],","        \"skinnable\": true","    },","    \"inputex-date\": {","        \"ix_provides\": \"date\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-string\"","        ],","        \"skinnable\": true","    },","    \"inputex-datepicker\": {","        \"ix_provides\": \"datepicker\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-date\",","            \"event-outside\",","            \"node-event-delegate\",","            \"overlay\",","            \"calendar\"","        ],","        \"skinnable\": true","    },","    \"inputex-dateselectmonth\": {","        \"ix_provides\": \"dateselectmonth\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-combine\",","            \"inputex-string\",","            \"inputex-select\"","        ]","    },","    \"inputex-datesplit\": {","        \"ix_provides\": \"datesplit\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-combine\",","            \"inputex-integer\"","        ]","    },","    \"inputex-datetime\": {","        \"ix_provides\": \"datetime\",","        \"requires\": [","            \"inputex-datepicker\",","            \"inputex-combine\",","            \"inputex-time\"","        ]","    },","    \"inputex-ddlist\": {","        \"requires\": [","            \"inputex-field\",","            \"array-extras\",","            \"sortable\",","            \"substitute\"","        ],","        \"skinnable\": true","    },","    \"inputex-dsselect\": {","        \"ix_provides\": \"dsselect\",","        \"requires\": [","            \"inputex-select\",","            \"datasource\"","        ]","    },","    \"inputex-email\": {","        \"ix_provides\": \"email\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-string\"","        ]","    },","    \"inputex-field\": {","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex\",","            \"intl\"","        ],","        \"skinnable\": true","    },","    \"inputex-file\": {","        \"ix_provides\": \"file\",","        \"requires\": [","            \"inputex-field\"","        ]","    },","    \"inputex-form\": {","        \"ix_provides\": \"form\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"io-base\",","            \"inputex-group\",","            \"json\",","            \"inputex-button\"","        ],","        \"skinnable\": true","    },","    \"inputex-group\": {","        \"ix_provides\": \"group\",","        \"requires\": [","            \"inputex-field\"","        ],","        \"skinnable\": true","    },","    \"inputex-hidden\": {","        \"ix_provides\": \"hidden\",","        \"requires\": [","            \"inputex-field\"","        ]","    },","    \"inputex-imagecropper\": {","        \"ix_provides\": \"imagecropper\",","        \"requires\": [","            \"inputex-field\"","        ],","        \"skinnable\": true","    },","    \"inputex-inplaceedit\": {","        \"ix_provides\": \"inplaceedit\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-field\",","            \"inputex-button\",","            \"anim\",","            \"inputex-visus\"","        ],","        \"skinnable\": true","    },","    \"inputex-integer\": {","        \"ix_provides\": \"integer\",","        \"requires\": [","            \"inputex-string\"","        ]","    },","    \"inputex-ipv4\": {","        \"ix_provides\": \"ipv4\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-string\"","        ]","    },","    \"inputex-jsonschema\": {","        \"requires\": [","            \"inputex\"","        ]","    },","    \"inputex-jsontreeinspector\": {","        \"requires\": [","            \"inputex\"","        ],","        \"skinnable\": true","    },","    \"inputex-keyopvalue\": {","        \"ix_provides\": \"keyopvalue\",","        \"requires\": [","            \"inputex-keyvalue\"","        ]","    },","    \"inputex-keyvalue\": {","        \"ix_provides\": \"keyvalue\",","        \"requires\": [","            \"inputex-combine\"","        ]","    },","    \"inputex-lens\": {","        \"ix_provides\": \"lens\",","        \"requires\": [","            \"inputex-group\",","            \"inputex-inplaceedit\"","        ]","    },","    \"inputex-linkedcombo\": {","        \"requires\": [","            \"inputex-select\",","            \"inputex-choice\"","        ]","    },","    \"inputex-list\": {","        \"ix_provides\": \"list\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-field\",","            \"anim\"","        ],","        \"skinnable\": true","    },","    \"inputex-map\": {","        \"ix_provides\": \"map\",","        \"requires\": [","            \"inputex-field\"","        ]","    },","    \"inputex-menu\": {","        \"ix_provides\": \"menu\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-field\",","            \"node-event-delegate\",","            \"node-menunav\",","            \"substitute\"","        ],","        \"skinnable\": true","    },","    \"inputex-multiautocomplete\": {","        \"ix_provides\": \"multiautocomplete\",","        \"requires\": [","            \"inputex-autocomplete\",","            \"json\",","            \"inputex-ddlist\"","        ]","    },","    \"inputex-multiselect\": {","        \"ix_provides\": \"multiselect\",","        \"requires\": [","            \"inputex-select\",","            \"inputex-ddlist\"","        ]","    },","    \"inputex-number\": {","        \"ix_provides\": \"number\",","        \"requires\": [","            \"inputex-string\"","        ]","    },","    \"inputex-object\": {","        \"ix_provides\": \"object\",","        \"requires\": [","            \"inputex-list\",","            \"inputex-combine\",","            \"inputex-string\"","        ]","    },","    \"inputex-panel\": {","        \"requires\": [","            \"inputex\",","            \"panel\",","            \"inputex-base\"","        ]","    },","    \"inputex-password\": {","        \"ix_provides\": \"password\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-string\"","        ],","        \"skinnable\": true","    },","    \"inputex-radio\": {","        \"ix_provides\": \"radio\",","        \"requires\": [","            \"selector\",","            \"event-delegate\",","            \"inputex-field\",","            \"inputex-choice\",","            \"inputex-string\"","        ],","        \"skinnable\": true","    },","    \"inputex-ratingstars\": {","        \"ix_provides\": \"ratingstars\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-field\"","        ],","        \"skinnable\": true","    },","    \"inputex-ratingstarsform\": {","        \"ix_provides\": \"ratingstarsform\",","        \"requires\": [","            \"inputex-ratingstars\",","            \"inputex-form\"","        ]","    },","    \"inputex-rpc\": {","        \"requires\": [","            \"json\",","            \"inputex\",","            \"io\",","            \"inputex-jsonschema\",","            \"jsonp\"","        ]","    },","    \"inputex-rte\": {","        \"ix_provides\": \"html\",","        \"requires\": [","            \"inputex-field\",","            \"yui2-editor\"","        ]","    },","    \"inputex-select\": {","        \"ix_provides\": \"select\",","        \"requires\": [","            \"inputex-field\",","            \"inputex-choice\"","        ]","    },","    \"inputex-serialize\": {","        \"ix_provides\": \"serialize\",","        \"requires\": [","            \"inputex-string\",","            \"json\"","        ]","    },","    \"inputex-slider\": {","        \"ix_provides\": \"slider\",","        \"requires\": [","            \"inputex-field\",","            \"slider\"","        ],","        \"skinnable\": true","    },","    \"inputex-smdtester\": {","        \"requires\": [","            \"inputex-rpc\",","            \"inputex-jsontreeinspector\"","        ]","    },","    \"inputex-string\": {","        \"ix_provides\": \"string\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-field\",","            \"event-key\"","        ],","        \"skinnable\": true","    },","    \"inputex-stringavailability\": {","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-string\",","            \"event-key\",","            \"io\",","            \"json-parse\"","        ],","        \"skinnable\": true","    },","    \"inputex-textarea\": {","        \"ix_provides\": \"text\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-string\"","        ]","    },","    \"inputex-textautotag\": {","        \"ix_provides\": \"autotag\",","        \"requires\": [","            \"inputex-textautotag\"","        ]","    },","    \"inputex-time\": {","        \"ix_provides\": \"time\",","        \"requires\": [","            \"inputex-combine\",","            \"inputex-select\"","        ]","    },","    \"inputex-timeinterval\": {","        \"ix_provides\": \"timeinterval\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-combine\",","            \"inputex-select\"","        ]","    },","    \"inputex-timerange\": {","        \"ix_provides\": \"timerange\",","        \"requires\": [","            \"inputex-combine\",","            \"inputex-select\"","        ]","    },","    \"inputex-tinymce\": {","        \"ix_provides\": \"tinymce\",","        \"requires\": [","            \"inputex-field\"","        ]","    },","    \"inputex-tree\": {","        \"ix_provides\": \"tree\",","        \"requires\": [","            \"inputex-string\",","            \"inputex-list\",","            \"inputex-inplaceedit\"","        ]","    },","    \"inputex-type\": {","        \"ix_provides\": \"type\",","        \"requires\": [","            \"inputex-field\",","            \"inputex-group\",","            \"inputex-select\",","            \"inputex-list\",","            \"inputex-string\",","            \"inputex-checkbox\",","            \"inputex-integer\"","        ],","        \"skinnable\": true","    },","    \"inputex-uneditable\": {","        \"ix_provides\": \"uneditable\",","        \"requires\": [","            \"inputex-field\",","            \"inputex-visus\"","        ]","    },","    \"inputex-uppercase\": {","        \"ix_provides\": \"uppercase\",","        \"requires\": [","            \"inputex-string\"","        ]","    },","    \"inputex-url\": {","        \"ix_provides\": \"url\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-string\"","        ],","        \"skinnable\": true","    },","    \"inputex-vector\": {","        \"ix_provides\": \"vector\",","        \"requires\": [","            \"inputex-combine\"","        ]","    },","    \"inputex-visus\": {","        \"requires\": [","            \"inputex\",","            \"dump\"","        ]","    }","}","         }","      }","   };","","   if (typeof YUI_config === 'undefined') {","      YUI_config = {groups: {}};","   }","   if (typeof YUI_config.groups === 'undefined') {","      YUI_config.groups = {};","   }","   Y.mix(YUI_config.groups, CONFIG.groups);","","   // Loop through all modules","   var modules = YUI_config.groups.inputex.modules,","       allModules = [],","       modulesByType = {};","   for(var moduleName in modules) {","     if (modules.hasOwnProperty(moduleName) ) {","       ","       // Build a list of all inputEx modules","       allModules.push(moduleName);","       ","       // Build a reverse index on which module provides what type","       if(modules[moduleName].ix_provides) {","          modulesByType[modules[moduleName].ix_provides] = moduleName;","       }","       ","     }","   }","   YUI_config.groups.inputex.allModules = allModules;","   YUI_config.groups.inputex.modulesByType = modulesByType;","","","});",""];
/* This file is auto-generated by src/loader/scripts/meta_join.js */

_yuitest_coverage["build/inputex-loader/inputex-loader.js"].lines = {"3":0,"4":0,"743":0,"744":0,"746":0,"747":0,"749":0,"752":0,"755":0,"756":0,"759":0,"762":0,"763":0,"768":0,"769":0};
_yuitest_coverage["build/inputex-loader/inputex-loader.js"].functions = {"(anonymous 1):3":0};
_yuitest_coverage["build/inputex-loader/inputex-loader.js"].coveredLines = 15;
_yuitest_coverage["build/inputex-loader/inputex-loader.js"].coveredFunctions = 1;
_yuitest_coverline("build/inputex-loader/inputex-loader.js", 3);
YUI().use(function(Y) {
   _yuitest_coverfunc("build/inputex-loader/inputex-loader.js", "(anonymous 1)", 3);
_yuitest_coverline("build/inputex-loader/inputex-loader.js", 4);
var CONFIG = {
      groups: {
         'inputex': {
            base: 'inputex/src/',
            combine: false,
            modules: {
    "inputex": {
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "intl",
            "pluginhost-base",
            "pluginhost-config",
            "base-pluginhost",
            "node-pluginhost",
            "plugin",
            "node"
        ],
        "skinnable": true
    },
    "inputex-autocomplete": {
        "ix_provides": "autocomplete",
        "requires": [
            "inputex-string",
            "autocomplete"
        ],
        "skinnable": true
    },
    "inputex-base": {
        "requires": [
            "inputex",
            "widget",
            "widget-stdmod"
        ]
    },
    "inputex-builder": {
        "requires": [
            "inputex",
            "inputex-autocomplete",
            "inputex-base",
            "inputex-button",
            "inputex-checkbox",
            "inputex-choice",
            "inputex-color",
            "inputex-combine",
            "inputex-datatable",
            "inputex-date",
            "inputex-datepicker",
            "inputex-dateselectmonth",
            "inputex-datesplit",
            "inputex-datetime",
            "inputex-ddlist",
            "inputex-dsselect",
            "inputex-email",
            "inputex-field",
            "inputex-file",
            "inputex-form",
            "inputex-group",
            "inputex-hidden",
            "inputex-imagecropper",
            "inputex-inplaceedit",
            "inputex-integer",
            "inputex-ipv4",
            "inputex-jsonschema",
            "inputex-jsontreeinspector",
            "inputex-keyopvalue",
            "inputex-keyvalue",
            "inputex-lens",
            "inputex-linkedcombo",
            "inputex-list",
            "inputex-map",
            "inputex-menu",
            "inputex-multiautocomplete",
            "inputex-multiselect",
            "inputex-number",
            "inputex-object",
            "inputex-panel",
            "inputex-password",
            "inputex-radio",
            "inputex-ratingstars",
            "inputex-ratingstarsform",
            "inputex-rpc",
            "inputex-rte",
            "inputex-select",
            "inputex-serialize",
            "inputex-slider",
            "inputex-smdtester",
            "inputex-string",
            "inputex-stringavailability",
            "inputex-textarea",
            "inputex-textautotag",
            "inputex-time",
            "inputex-timeinterval",
            "inputex-timerange",
            "inputex-tinymce",
            "inputex-tree",
            "inputex-type",
            "inputex-uneditable",
            "inputex-uppercase",
            "inputex-url",
            "inputex-vector",
            "inputex-visus"
        ],
        "skinnable": true
    },
    "inputex-button": {
        "requires": [
            "inputex"
        ]
    },
    "inputex-checkbox": {
        "ix_provides": "boolean",
        "requires": [
            "inputex-field"
        ],
        "skinnable": true
    },
    "inputex-choice": {
        "requires": [
            "inputex"
        ]
    },
    "inputex-color": {
        "ix_provides": "color",
        "requires": [
            "inputex-field",
            "node-event-delegate",
            "event-outside",
            "overlay"
        ],
        "skinnable": true
    },
    "inputex-combine": {
        "ix_provides": "combine",
        "requires": [
            "inputex-group"
        ],
        "skinnable": true
    },
    "inputex-datatable": {
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-group",
            "inputex-panel",
            "datatable"
        ],
        "skinnable": true
    },
    "inputex-date": {
        "ix_provides": "date",
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-string"
        ],
        "skinnable": true
    },
    "inputex-datepicker": {
        "ix_provides": "datepicker",
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-date",
            "event-outside",
            "node-event-delegate",
            "overlay",
            "calendar"
        ],
        "skinnable": true
    },
    "inputex-dateselectmonth": {
        "ix_provides": "dateselectmonth",
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-combine",
            "inputex-string",
            "inputex-select"
        ]
    },
    "inputex-datesplit": {
        "ix_provides": "datesplit",
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-combine",
            "inputex-integer"
        ]
    },
    "inputex-datetime": {
        "ix_provides": "datetime",
        "requires": [
            "inputex-datepicker",
            "inputex-combine",
            "inputex-time"
        ]
    },
    "inputex-ddlist": {
        "requires": [
            "inputex-field",
            "array-extras",
            "sortable",
            "substitute"
        ],
        "skinnable": true
    },
    "inputex-dsselect": {
        "ix_provides": "dsselect",
        "requires": [
            "inputex-select",
            "datasource"
        ]
    },
    "inputex-email": {
        "ix_provides": "email",
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-string"
        ]
    },
    "inputex-field": {
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex",
            "intl"
        ],
        "skinnable": true
    },
    "inputex-file": {
        "ix_provides": "file",
        "requires": [
            "inputex-field"
        ]
    },
    "inputex-form": {
        "ix_provides": "form",
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "io-base",
            "inputex-group",
            "json",
            "inputex-button"
        ],
        "skinnable": true
    },
    "inputex-group": {
        "ix_provides": "group",
        "requires": [
            "inputex-field"
        ],
        "skinnable": true
    },
    "inputex-hidden": {
        "ix_provides": "hidden",
        "requires": [
            "inputex-field"
        ]
    },
    "inputex-imagecropper": {
        "ix_provides": "imagecropper",
        "requires": [
            "inputex-field"
        ],
        "skinnable": true
    },
    "inputex-inplaceedit": {
        "ix_provides": "inplaceedit",
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-field",
            "inputex-button",
            "anim",
            "inputex-visus"
        ],
        "skinnable": true
    },
    "inputex-integer": {
        "ix_provides": "integer",
        "requires": [
            "inputex-string"
        ]
    },
    "inputex-ipv4": {
        "ix_provides": "ipv4",
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-string"
        ]
    },
    "inputex-jsonschema": {
        "requires": [
            "inputex"
        ]
    },
    "inputex-jsontreeinspector": {
        "requires": [
            "inputex"
        ],
        "skinnable": true
    },
    "inputex-keyopvalue": {
        "ix_provides": "keyopvalue",
        "requires": [
            "inputex-keyvalue"
        ]
    },
    "inputex-keyvalue": {
        "ix_provides": "keyvalue",
        "requires": [
            "inputex-combine"
        ]
    },
    "inputex-lens": {
        "ix_provides": "lens",
        "requires": [
            "inputex-group",
            "inputex-inplaceedit"
        ]
    },
    "inputex-linkedcombo": {
        "requires": [
            "inputex-select",
            "inputex-choice"
        ]
    },
    "inputex-list": {
        "ix_provides": "list",
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-field",
            "anim"
        ],
        "skinnable": true
    },
    "inputex-map": {
        "ix_provides": "map",
        "requires": [
            "inputex-field"
        ]
    },
    "inputex-menu": {
        "ix_provides": "menu",
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-field",
            "node-event-delegate",
            "node-menunav",
            "substitute"
        ],
        "skinnable": true
    },
    "inputex-multiautocomplete": {
        "ix_provides": "multiautocomplete",
        "requires": [
            "inputex-autocomplete",
            "json",
            "inputex-ddlist"
        ]
    },
    "inputex-multiselect": {
        "ix_provides": "multiselect",
        "requires": [
            "inputex-select",
            "inputex-ddlist"
        ]
    },
    "inputex-number": {
        "ix_provides": "number",
        "requires": [
            "inputex-string"
        ]
    },
    "inputex-object": {
        "ix_provides": "object",
        "requires": [
            "inputex-list",
            "inputex-combine",
            "inputex-string"
        ]
    },
    "inputex-panel": {
        "requires": [
            "inputex",
            "panel",
            "inputex-base"
        ]
    },
    "inputex-password": {
        "ix_provides": "password",
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-string"
        ],
        "skinnable": true
    },
    "inputex-radio": {
        "ix_provides": "radio",
        "requires": [
            "selector",
            "event-delegate",
            "inputex-field",
            "inputex-choice",
            "inputex-string"
        ],
        "skinnable": true
    },
    "inputex-ratingstars": {
        "ix_provides": "ratingstars",
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-field"
        ],
        "skinnable": true
    },
    "inputex-ratingstarsform": {
        "ix_provides": "ratingstarsform",
        "requires": [
            "inputex-ratingstars",
            "inputex-form"
        ]
    },
    "inputex-rpc": {
        "requires": [
            "json",
            "inputex",
            "io",
            "inputex-jsonschema",
            "jsonp"
        ]
    },
    "inputex-rte": {
        "ix_provides": "html",
        "requires": [
            "inputex-field",
            "yui2-editor"
        ]
    },
    "inputex-select": {
        "ix_provides": "select",
        "requires": [
            "inputex-field",
            "inputex-choice"
        ]
    },
    "inputex-serialize": {
        "ix_provides": "serialize",
        "requires": [
            "inputex-string",
            "json"
        ]
    },
    "inputex-slider": {
        "ix_provides": "slider",
        "requires": [
            "inputex-field",
            "slider"
        ],
        "skinnable": true
    },
    "inputex-smdtester": {
        "requires": [
            "inputex-rpc",
            "inputex-jsontreeinspector"
        ]
    },
    "inputex-string": {
        "ix_provides": "string",
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-field",
            "event-key"
        ],
        "skinnable": true
    },
    "inputex-stringavailability": {
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-string",
            "event-key",
            "io",
            "json-parse"
        ],
        "skinnable": true
    },
    "inputex-textarea": {
        "ix_provides": "text",
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-string"
        ]
    },
    "inputex-textautotag": {
        "ix_provides": "autotag",
        "requires": [
            "inputex-textautotag"
        ]
    },
    "inputex-time": {
        "ix_provides": "time",
        "requires": [
            "inputex-combine",
            "inputex-select"
        ]
    },
    "inputex-timeinterval": {
        "ix_provides": "timeinterval",
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-combine",
            "inputex-select"
        ]
    },
    "inputex-timerange": {
        "ix_provides": "timerange",
        "requires": [
            "inputex-combine",
            "inputex-select"
        ]
    },
    "inputex-tinymce": {
        "ix_provides": "tinymce",
        "requires": [
            "inputex-field"
        ]
    },
    "inputex-tree": {
        "ix_provides": "tree",
        "requires": [
            "inputex-string",
            "inputex-list",
            "inputex-inplaceedit"
        ]
    },
    "inputex-type": {
        "ix_provides": "type",
        "requires": [
            "inputex-field",
            "inputex-group",
            "inputex-select",
            "inputex-list",
            "inputex-string",
            "inputex-checkbox",
            "inputex-integer"
        ],
        "skinnable": true
    },
    "inputex-uneditable": {
        "ix_provides": "uneditable",
        "requires": [
            "inputex-field",
            "inputex-visus"
        ]
    },
    "inputex-uppercase": {
        "ix_provides": "uppercase",
        "requires": [
            "inputex-string"
        ]
    },
    "inputex-url": {
        "ix_provides": "url",
        "lang": [
            "en",
            "fr",
            "de",
            "es",
            "fr",
            "it",
            "nl"
        ],
        "requires": [
            "inputex-string"
        ],
        "skinnable": true
    },
    "inputex-vector": {
        "ix_provides": "vector",
        "requires": [
            "inputex-combine"
        ]
    },
    "inputex-visus": {
        "requires": [
            "inputex",
            "dump"
        ]
    }
}
         }
      }
   };

   _yuitest_coverline("build/inputex-loader/inputex-loader.js", 743);
if (typeof YUI_config === 'undefined') {
      _yuitest_coverline("build/inputex-loader/inputex-loader.js", 744);
YUI_config = {groups: {}};
   }
   _yuitest_coverline("build/inputex-loader/inputex-loader.js", 746);
if (typeof YUI_config.groups === 'undefined') {
      _yuitest_coverline("build/inputex-loader/inputex-loader.js", 747);
YUI_config.groups = {};
   }
   _yuitest_coverline("build/inputex-loader/inputex-loader.js", 749);
Y.mix(YUI_config.groups, CONFIG.groups);

   // Loop through all modules
   _yuitest_coverline("build/inputex-loader/inputex-loader.js", 752);
var modules = YUI_config.groups.inputex.modules,
       allModules = [],
       modulesByType = {};
   _yuitest_coverline("build/inputex-loader/inputex-loader.js", 755);
for(var moduleName in modules) {
     _yuitest_coverline("build/inputex-loader/inputex-loader.js", 756);
if (modules.hasOwnProperty(moduleName) ) {
       
       // Build a list of all inputEx modules
       _yuitest_coverline("build/inputex-loader/inputex-loader.js", 759);
allModules.push(moduleName);
       
       // Build a reverse index on which module provides what type
       _yuitest_coverline("build/inputex-loader/inputex-loader.js", 762);
if(modules[moduleName].ix_provides) {
          _yuitest_coverline("build/inputex-loader/inputex-loader.js", 763);
modulesByType[modules[moduleName].ix_provides] = moduleName;
       }
       
     }
   }
   _yuitest_coverline("build/inputex-loader/inputex-loader.js", 768);
YUI_config.groups.inputex.allModules = allModules;
   _yuitest_coverline("build/inputex-loader/inputex-loader.js", 769);
YUI_config.groups.inputex.modulesByType = modulesByType;


});

