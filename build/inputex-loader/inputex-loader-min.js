YUI().use(function(e){var t={groups:{inputex:{base:"inputex/src/",combine:!1,modules:{inputex:{requires:["intl","pluginhost-base","pluginhost-config","base-pluginhost","node-pluginhost","plugin","node","intl"],skinnable:!0},"inputex-autocomplete":{ix_provides:"autocomplete",requires:["inputex-string","autocomplete"],skinnable:!0},"inputex-base":{requires:["inputex","widget","widget-stdmod"]},"inputex-builder":{requires:["inputex","inputex-autocomplete","inputex-base","inputex-button","inputex-checkbox","inputex-choice","inputex-color","inputex-combine","inputex-datatable","inputex-date","inputex-datepicker","inputex-dateselectmonth","inputex-datesplit","inputex-datetime","inputex-ddlist","inputex-dsselect","inputex-email","inputex-field","inputex-file","inputex-form","inputex-group","inputex-hidden","inputex-imagecropper","inputex-inplaceedit","inputex-integer","inputex-ipv4","inputex-jsonschema","inputex-jsontreeinspector","inputex-keyopvalue","inputex-keyvalue","inputex-lens","inputex-linkedcombo","inputex-list","inputex-map","inputex-menu","inputex-multiautocomplete","inputex-multiselect","inputex-number","inputex-object","inputex-panel","inputex-password","inputex-radio","inputex-ratingstars","inputex-ratingstarsform","inputex-rpc","inputex-rte","inputex-select","inputex-serialize","inputex-slider","inputex-smdtester","inputex-string","inputex-stringavailability","inputex-textarea","inputex-textautotag","inputex-time","inputex-timeinterval","inputex-timerange","inputex-tinymce","inputex-tree","inputex-type","inputex-uneditable","inputex-uppercase","inputex-url","inputex-vector","inputex-visus"],skinnable:!0},"inputex-button":{requires:["inputex"]},"inputex-calendarNavigationPlugin":{lang:["en","fr"],requires:["intl","plugin","inputex-panel","inputex-group","inputex-select","inputex-string","align-plugin"],skinnable:!0},"inputex-checkbox":{ix_provides:"boolean",requires:["inputex-field"],skinnable:!0},"inputex-choice":{requires:["inputex"]},"inputex-color":{ix_provides:"color",requires:["inputex-field","node-event-delegate","event-outside","overlay"],skinnable:!0},"inputex-combine":{ix_provides:"combine",requires:["inputex-group"],skinnable:!0},"inputex-datatable":{lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-group","inputex-panel","datatable"],skinnable:!0},"inputex-date":{ix_provides:"date",lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-string"],skinnable:!0},"inputex-datepicker":{ix_provides:"datepicker",lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-date","event-outside","node-event-delegate","overlay","calendar"],skinnable:!0},"inputex-dateselectmonth":{ix_provides:"dateselectmonth",lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-combine","inputex-string","inputex-select"]},"inputex-datesplit":{ix_provides:"datesplit",lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-combine","inputex-integer"]},"inputex-datetime":{ix_provides:"datetime",requires:["inputex-datepicker","inputex-combine","inputex-time"]},"inputex-ddlist":{requires:["inputex-field","array-extras","sortable","substitute"],skinnable:!0},"inputex-dsselect":{ix_provides:"dsselect",requires:["inputex-select","datasource"]},"inputex-email":{ix_provides:"email",lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-string"]},"inputex-field":{lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex","intl"],skinnable:!0},"inputex-file":{ix_provides:"file",requires:["inputex-field"]},"inputex-form":{ix_provides:"form",lang:["en","fr","de","ca","es","fr","it","nl"],requires:["io-base","inputex-group","json","inputex-button"],skinnable:!0},"inputex-group":{ix_provides:"group",requires:["inputex-field"],skinnable:!0},"inputex-hidden":{ix_provides:"hidden",requires:["inputex-field"]},"inputex-imagecropper":{ix_provides:"imagecropper",requires:["inputex-field"],skinnable:!0},"inputex-inplaceedit":{ix_provides:"inplaceedit",lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-field","inputex-button","anim-base","anim-color","inputex-visus"],skinnable:!0},"inputex-integer":{ix_provides:"integer",requires:["inputex-string"]},"inputex-ipv4":{ix_provides:"ipv4",lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-string"]},"inputex-jsonschema":{requires:["inputex"]},"inputex-jsontreeinspector":{requires:["inputex"],skinnable:!0},"inputex-keyopvalue":{ix_provides:"keyopvalue",requires:["inputex-keyvalue"]},"inputex-keyvalue":{ix_provides:"keyvalue",requires:["inputex-combine"]},"inputex-lens":{ix_provides:"lens",requires:["inputex-group","inputex-inplaceedit"]},"inputex-linkedcombo":{requires:["inputex-select","inputex-choice"]},"inputex-list":{ix_provides:"list",lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-field","anim-base","anim-color"],skinnable:!0},"inputex-map":{ix_provides:"map",requires:["inputex-field"]},"inputex-menu":{ix_provides:"menu",lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-field","node-event-delegate","node-menunav","substitute"],skinnable:!0},"inputex-multiautocomplete":{ix_provides:"multiautocomplete",requires:["inputex-autocomplete","json","inputex-ddlist"]},"inputex-multiselect":{ix_provides:"multiselect",requires:["inputex-select","inputex-ddlist"]},"inputex-number":{ix_provides:"number",requires:["inputex-string"]},"inputex-object":{ix_provides:"object",requires:["inputex-list","inputex-combine","inputex-string"]},"inputex-panel":{requires:["inputex","panel","inputex-base"]},"inputex-password":{ix_provides:"password",lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-string"],skinnable:!0},"inputex-radio":{ix_provides:"radio",requires:["selector","event-delegate","inputex-field","inputex-choice","inputex-string"],skinnable:!0},"inputex-ratingstars":{ix_provides:"ratingstars",lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-field"],skinnable:!0},"inputex-ratingstarsform":{ix_provides:"ratingstarsform",requires:["inputex-ratingstars","inputex-form"]},"inputex-rpc":{requires:["json","inputex","io","inputex-jsonschema","jsonp"]},"inputex-rte":{ix_provides:"html",requires:["inputex-field","yui2-editor"]},"inputex-select":{ix_provides:"select",requires:["inputex-field","inputex-choice"]},"inputex-serialize":{ix_provides:"serialize",requires:["inputex-string","json"]},"inputex-slider":{ix_provides:"slider",requires:["inputex-field","slider"],skinnable:!0},"inputex-smdtester":{requires:["inputex-rpc","inputex-jsontreeinspector"]},"inputex-string":{ix_provides:"string",lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-field","event-key"],skinnable:!0},"inputex-stringavailability":{lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-string","event-key","io","json-parse"],skinnable:!0},"inputex-textarea":{ix_provides:"text",lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-string"]},"inputex-textautotag":{ix_provides:"autotag",requires:["inputex-textarea"]},"inputex-time":{ix_provides:"time",requires:["inputex-combine","inputex-select"]},"inputex-timeinterval":{ix_provides:"timeinterval",lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-combine","inputex-select"]},"inputex-timerange":{ix_provides:"timerange",requires:["inputex-combine","inputex-select"]},"inputex-tinymce":{ix_provides:"tinymce",requires:["inputex-field"]},"inputex-tree":{ix_provides:"tree",requires:["inputex-string","inputex-list","inputex-inplaceedit"]},"inputex-type":{ix_provides:"type",requires:["inputex-field","inputex-group","inputex-select","inputex-list","inputex-string","inputex-checkbox","inputex-integer"],skinnable:!0},"inputex-uneditable":{ix_provides:"uneditable",requires:["inputex-field","inputex-visus"]},"inputex-uppercase":{ix_provides:"uppercase",requires:["inputex-string"]},"inputex-url":{ix_provides:"url",lang:["en","fr","de","ca","es","fr","it","nl"],requires:["inputex-string"],skinnable:!0},"inputex-vector":{ix_provides:"vector",requires:["inputex-combine"]},"inputex-visus":{requires:["inputex","dump"]}}}}};typeof YUI_config=="undefined"&&(YUI_config={groups:{}}),typeof YUI_config.groups=="undefined"&&(YUI_config.groups={}),e.mix(YUI_config.groups,t.groups);var n=YUI_config.groups.inputex.modules,r=[],i={};for(var s in n)n.hasOwnProperty(s)&&(r.push(s),n[s].ix_provides&&(i[n[s].ix_provides]=s));YUI_config.groups.inputex.allModules=r,YUI_config.groups.inputex.modulesByType=i});
