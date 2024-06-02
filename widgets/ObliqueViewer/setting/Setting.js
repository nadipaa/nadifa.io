// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/ObliqueViewer/setting/FormatFields/FormatFieldsSettings":function(){define("dojo/_base/declare dojo/_base/lang dojo/query dojo/json dojo/dom-class dojo/text!./FormatFieldsSettings.html dojo/i18n!../nls/strings dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin esri/domUtils".split(" "),function(k,h,f,e,g,n,m,l,p,q,b){return k([l,p,q],{templateString:n,widgetsInTemplate:!0,_supportsTime:{shortDate:!0,shortDateLE:!0},constructor:function(a){k.safeMixin(this,
a);this._i18n=m},show:function(){this.loadSettings();this.startup()},_getFormatter:function(){var a=this.fieldValue,c=a.type;f(".formatTime").addClass("settingsHidden");f(".esriObliqueViewerFieldFormat, .legendTitle, .format").forEach(function(d){b.hide(d)});if(a=a.format)(a=e.parse(a))&&(c in this.obliqueViewer.esriDataType.decimal||c in this.obliqueViewer.esriDataType.integer)?(c in this.obliqueViewer.esriDataType.decimal&&this._formatNumberSelect.set("value",a.places,!1),this._formatNumberCheck.set("value",
a.digitSeparator,!1),c in this.obliqueViewer.esriDataType.decimal?f(".esriObliqueViewerFieldFormat, .legendTitle, .formatNumber").forEach(function(d){if(d=b.getNode(d))d.style.display="table"}):f(".esriObliqueViewerFieldFormat, .legendTitle, .formatInteger").forEach(function(d){b.show(d)})):a&&c in this.obliqueViewer.esriDataType.date?(f(".formatTime").removeClass("settingsHidden"),f(".esriObliqueViewerFieldFormat, .legendTitle, .esriObliqueViewerFormatDate").forEach(function(d){b.show(d)}),-1<a.dateFormat.indexOf("LETime")||
-1<a.dateFormat.indexOf("LEShortTime")||-1<a.dateFormat.indexOf("LELongTime")?(this._formatDateSelect.set("value","shortDateLE",!1),this._formatTimeCheck.set("checked",!0),this._formatTimeSelect.set("value",a.dateFormat.split("shortDateLE")[1],!1),this._enableUpdateTime(!0)):-1<a.dateFormat.indexOf("Time")?(this._formatDateSelect.set("value","shortDate",!1),this._formatTimeCheck.set("checked",!0),this._formatTimeSelect.set("value",a.dateFormat.split("shortDate")[1],!1),this._enableUpdateTime(!0)):
(this._formatDateSelect.set("value",a.dateFormat,!1),this._enableUpdateTime(a.dateFormat in this._supportsTime))):f(".esriObliqueViewerFieldFormat, .legendTitle").forEach(function(d){b.hide(d)})},_setFormatter:function(a,c){var d=e.parse(this.fieldValue.format);f(".formatTime").addClass("settingsHidden");if("dateFormat"===a){c=c||this._formatDateSelect.get("value");var r=c in this._supportsTime,t=r&&this._formatTimeCheck.get("checked")?this._formatTimeSelect.get("value"):"";f(".formatTime").removeClass("settingsHidden");
this._enableUpdateTime(r);d[a]=c+t}else d[a]="places"===a?parseInt(c,10):c;this.fieldValue.format=e.stringify(d);this.obliqueViewer.updateFieldFormat()},_enableUpdateTime:function(a){this._formatTimeCheck.set("disabled",!a);g[a?"remove":"add"](this._formatTimeSelect.domNode,"settingsHidden");g[a?"remove":"add"](this.timeCheckboxLbl,"disabled");a||this._formatTimeCheck.set("checked",!1)},_setFormatHandles:function(){this._formatDateSelect.on("change",h.hitch(this,"_setFormatter","dateFormat"));this._formatTimeSelect.on("change",
h.hitch(this,"_setFormatter","dateFormat",null));this._formatNumberSelect.on("change",h.hitch(this,"_setFormatter","places"));this._formatNumberCheck.on("change",h.hitch(this,"_setFormatter","digitSeparator"));this._formatTimeCheck.on("change",h.hitch(this,function(){var a=this._formatTimeCheck.get("checked");g[a?"remove":"add"](this._formatTimeSelect.domNode,"settingsHidden");this._setFormatter("dateFormat")}))},loadSettings:function(){this.obliqueViewer.selectedField?(g.remove(this._formatFieldsContainer,
"settingsHidden"),this.fieldValue=this.obliqueViewer.selectedField,this._setFormatHandles(),this._getFormatter()):g.add(this._formatFieldsContainer,"settingsHidden")},_saveSettings:function(){},_handleOKButtonClick:function(){this._saveSettings();this.dialog.hide()},hide:function(){this.dialog.hide()}})})},"widgets/ObliqueViewer/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/ObliqueViewer/setting/FormatFields/FormatFieldsSettings.html":'\x3cdiv data-dojo-attach-point\x3d"_formatFieldsContainer"\x3e\r\n    \x3ctable class\x3d"esriObliqueViewerSettingsContainerTable"\x3e\r\n        \x3ctr\x3e\r\n            \x3ctd\x3e\r\n                \x3cfieldset class\x3d"esriObliqueViewerFieldFormat"\x3e\r\n\r\n                    \x3cdiv class\x3d"format formatNumber"\x3e\r\n                        \x3cselect data-dojo-attach-point\x3d"_formatNumberSelect" class\x3d"esriObliqueViewerFieldFormatSelect formatNumber formatter format"\r\n                            data-dojo-type\x3d"dijit.form.Select"\x3e\r\n                            \x3coption value\x3d\'0\' selected\x3d"selected"\x3e0 ${_i18n.decimalPlaces}\x3c/option\x3e\r\n                            \x3coption value\x3d\'1\'\x3e1 ${_i18n.decimalPlace}\x3c/option\x3e\r\n                            \x3coption value\x3d\'2\'\x3e2 ${_i18n.decimalPlaces}\x3c/option\x3e\r\n                            \x3coption value\x3d\'3\'\x3e3 ${_i18n.decimalPlaces}\x3c/option\x3e\r\n                            \x3coption value\x3d\'4\'\x3e4 ${_i18n.decimalPlaces}\x3c/option\x3e\r\n                            \x3coption value\x3d\'5\'\x3e5 ${_i18n.decimalPlaces}\x3c/option\x3e\r\n                            \x3coption value\x3d\'6\'\x3e6 ${_i18n.decimalPlaces}\x3c/option\x3e\r\n                            \x3coption value\x3d\'7\'\x3e7 ${_i18n.decimalPlaces}\x3c/option\x3e\r\n                            \x3coption value\x3d\'8\'\x3e8 ${_i18n.decimalPlaces}\x3c/option\x3e\r\n                        \x3c/select\x3e\r\n                        \x3cbr /\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv class\x3d"formatNumber formatter formatInteger format"\x3e\r\n                        \x3clabel class\x3d"checkbox"\x3e\r\n                            \x3cinput data-dojo-attach-point\x3d"_formatNumberCheck" data-dojo-type\x3d"dijit.form.CheckBox" /\x3e\x26nbsp;${_i18n.separator}\x3c/label\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv class\x3d"esriObliqueViewerFormatDate format"\x3e\r\n                        \x3cselect data-dojo-attach-point\x3d"_formatDateSelect" class\x3d"esriObliqueViewerFieldFormatSelect formatter"\r\n                            data-dojo-type\x3d"dijit.form.Select"\x3e\r\n                            \x3coption value\x3d"shortDate" selected\x3d"selected"\x3e12/21/1997\x3c/option\x3e\r\n                            \x3coption value\x3d"shortDateLE" selected\x3d"selected"\x3e21/12/1997\x3c/option\x3e\r\n                            \x3coption value\x3d"longMonthDayYear"\x3eDecember 21, 1997\x3c/option\x3e\r\n                            \x3coption value\x3d"dayShortMonthYear"\x3e21 Dec 1997\x3c/option\x3e\r\n                            \x3coption value\x3d"longDate"\x3eSunday, December 21, 1997\x3c/option\x3e\r\n                            \x3coption value\x3d"longMonthYear"\x3eDecember 1997\x3c/option\x3e\r\n                            \x3coption value\x3d"shortMonthYear"\x3eDec 1997\x3c/option\x3e\r\n                            \x3coption value\x3d"year"\x3e1997\x3c/option\x3e\r\n                        \x3c/select\x3e\r\n                        \x3cdiv class\x3d"formatTime hide"\x3e\r\n                            \x3clabel data-dojo-attach-point\x3d"timeCheckboxLbl" class\x3d"timeCheckbox disabled"\x3e\r\n                                \x3cinput data-dojo-attach-point\x3d"_formatTimeCheck" data-dojo-type\x3d"dijit.form.CheckBox" /\x3e\x26nbsp;${_i18n.showTime}\x3c/label\x3e\r\n                            \x3cbr /\x3e\r\n                            \x3cselect data-dojo-attach-point\x3d"_formatTimeSelect" class\x3d"esriObliqueViewerFieldFormatSelect formatter hide"\r\n                                data-dojo-type\x3d"dijit.form.Select"\x3e\r\n                                \x3coption value\x3d"ShortTime" selected\x3d"selected"\x3e6:00 PM\x3c/option\x3e\r\n                                \x3coption value\x3d"LongTime"\x3e6:00:00 PM\x3c/option\x3e\r\n                                \x3coption value\x3d"ShortTime24"\x3e18:00\x3c/option\x3e\r\n                                \x3coption value\x3d"LongTime24"\x3e18:00:00\x3c/option\x3e\r\n                            \x3c/select\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                \x3c/fieldset\x3e\r\n            \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n    \x3c/table\x3e\r\n\x3c/div\x3e',
"url:widgets/ObliqueViewer/setting/Setting.html":'\x3cdiv style\x3d"width: 100%; height: 100%;"\x3e\r\n    \x3cdiv class\x3d"settings-section" data-dojo-attach-point\x3d"searchesSection"\x3e\r\n      \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n        \x3ctbody\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"first"\x3e${nls.layerSelect}:\x3c/td\x3e\r\n            \x3ctd class\x3d"second"\x3e\r\n              \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"mapLayerSelect" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"first"\x3e${nls.elevationFieldSelect}:\x3c/td\x3e\r\n            \x3ctd class\x3d"second"\x3e\r\n              \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"elevationFieldSelect" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"first"\x3e${nls.azimuthFieldSelect}:\x3c/td\x3e\r\n            \x3ctd class\x3d"second"\x3e\r\n              \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"azimuthFieldSelect" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"first"\x3e${nls.searchRadiusSelect}:\x3c/td\x3e\r\n            \x3ctd class\x3d"second"\x3e\r\n              \x3ctable\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd\x3e\r\n                      \x3cselect style\x3d"width: 100px; margin: 10px 0 10px 7px;" data-dojo-attach-point\x3d"searchRadiusSelect" data-dojo-type\x3d"dijit/form/NumberSpinner"\x3e\r\n                      \x3c/select\x3e\r\n                  \x3c/td\x3e\r\n                  \x3ctd\x3e\r\n                      \x3cselect style\x3d"width: 170px; margin: 10px 0;" data-dojo-attach-point\x3d"searchUnitSelect" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                      \x3c/select\x3e\r\n                  \x3c/td\x3e   \r\n                \x3c/tr\x3e\r\n              \x3c/table\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"first"\x3e${nls.rasterInfoFieldsSelect}:\x3cbr/\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"fieldLimitLabel"\x3e(${nls.fieldLimitText})\x3c/label\x3e\r\n                              \x3c/td\x3e\r\n            \x3ctd class\x3d"second"\x3e\r\n              \x3cselect style\x3d"margin: 0 10px;" data-dojo-attach-point\x3d"rasterInfoFieldsSelect" data-dojo-type\x3d"dojox/form/CheckedMultiSelect" multiple\x3d"true"\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"formatFieldSettingsDiv"\x3e\x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n  \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"thumbnailCheckbox" data-dojo-type\x3d"dijit/form/CheckBox" /\x3e\r\n              \x3clabel style\x3d"margin: 0 15px;"\x3e${nls.showThumbnailText}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"autoSyncCheckbox" data-dojo-type\x3d"dijit/form/CheckBox" checked /\x3e\r\n              \x3clabel style\x3d"margin: 0 15px;"\x3e${nls.autoSyncText}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"distanceToolCheckbox" data-dojo-type\x3d"dijit/form/CheckBox" /\x3e\r\n              \x3clabel style\x3d"margin: 0 15px;"\x3e${nls.distanceToolText}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/tbody\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"errorSection"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  ',
"url:widgets/ObliqueViewer/setting/css/style.css":".jimu-widget-ObliqueViewer-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-ObliqueViewer-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-ObliqueViewer-setting .dijitSelect{height: 30px; width: 96%;}.jimu-widget-ObliqueViewer-setting .dijitTextBox {margin-left: 10px; width: 17em;}.jimu-widget-ObliqueViewer-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-ObliqueViewer-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; vertical-align:middle;}.jimu-widget-ObliqueViewer-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; padding-right:15px;}.jimu-widget-ObliqueViewer-setting .input-table \x3e tbody \x3e tr \x3e .second{width:200px;}.jimu-widget-ObliqueViewer-setting .input-table \x3e tbody \x3e tr \x3e .third{width:35px;}.settingsHidden {display: none !important;}.dojoxCheckedMultiSelect {margin-top: 4px; margin-bottom: 3px;}.jimu-widget-ObliqueViewer-setting .dojoxCheckedMultiSelect .dojoxCheckedMultiSelectWrapper {height: 175px; margin: 0px; width: 270px;}.jimu-widget-ObliqueViewer-setting .esriObliqueViewerFieldFormat .formatTime,.jimu-widget-ObliqueViewer-setting .esriObliqueViewerFieldFormat .formatTime \x3e table{margin-top: 12px;}.jimu-widget-ObliqueViewer-setting .esriObliqueViewerFieldFormat .esriObliqueViewerFormatDate table {table-layout: fixed; width: 230px;}.jimu-widget-ObliqueViewer-setting .dojoxCheckedMultiSelectHover .dojoxCheckedMultiSelectWrapper {border: 1px solid #b5bcc7; background-color: transparent;}.jimu-widget-ObliqueViewer-setting .dojoxMultiSelectItem:hover {background-color: #a8d6f1;}.jimu-widget-ObliqueViewer-setting .dojoxCheckedMultiSelect .dojoxCheckedMultiSelectWrapper\x3ediv {width: 110%;}.jimu-widget-ObliqueViewer-setting .dojoxMultiSelectItemLabel {width: 100%;}",
"*now":function(k){k(['dojo/i18n!*preload*widgets/ObliqueViewer/setting/nls/Setting*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting dojo/_base/array dojo/dom-class dojo/dom-style dojo/html dojo/_base/lang esri/lang ./FormatFields/FormatFieldsSettings dojo/on dijit/form/CheckBox dijit/form/Select dojox/form/CheckedMultiSelect dijit/form/NumberTextBox dijit/form/NumberSpinner".split(" "),function(k,h,f,e,g,n,m,l,p,q){return k([f,h],{baseClass:"jimu-widget-ObliqueViewer-setting",_layerFieldMap:{},_hasSupportedLayer:!1,esriDataType:{decimal:{esriFieldTypeDouble:1,
esriFieldTypeSingle:1},integer:{esriFieldTypeInteger:1,esriFieldTypeSmallInteger:1},date:{esriFieldTypeDate:1},string:{esriFieldTypeString:1},notRequired:{esriFieldTypeGeometry:1,esriFieldTypeBlob:1}},startup:function(){this.inherited(arguments);this.config.ObliqueViewer||(this.config.ObliqueViewer={});this._populateLayers();this._hasSupportedLayer&&(this._allFields=l.clone(this._layerFieldMap[this.mapLayerSelect.get("value")]),this._addDefaultFormatToField(),this._populateFields(),this._setupRadiusSelector(),
this._populateUnits(),this._populateFormatFields());this.rasterInfoFieldsSelect&&(this._multiSelectClick(),this.own(this.rasterInfoFieldsSelect.on("click",l.hitch(this,this._multiSelectClick))));this.setConfig(this.config)},_addDefaultFormatToField:function(){e.forEach(this._allFields,function(b){b&&b.type&&(b.type in this.esriDataType.integer?b.format='{"places":0, "digitSeparator":true}':b.type in this.esriDataType.decimal?b.format='{"places":2, "digitSeparator":true}':b.type in this.esriDataType.date&&
(b.format='{"dateFormat":"shortDateShortTime", "timezone":"utc"}'))},this);this.config.ObliqueViewer.rasterInfoFields.forEach(function(b){this._allFields.forEach(function(a){b.name===a.name&&(a.format=b.format)})},this)},_setupRadiusSelector:function(){this.searchRadiusSelect.set("smallDelta",1);this.searchRadiusSelect.set("constraints",{min:0,max:100});this.searchRadiusSelect.set("rangeMessage",this.nls.outOfRangeMessage)},_populateUnits:function(){var b=["meters","feet","yards","kilometers","miles"],
a=Object.keys(window.jimuNls.units),c=this.searchUnitSelect;e.forEach(a,function(d){-1!==e.indexOf(b,d)&&c.addOption({label:window.jimuNls.units[d],value:d})},this);this.config.ObliqueViewer.searchUnit&&this.searchUnitSelect.set("value",this.config.ObliqueViewer.searchUnit)},_multiSelectClick:function(b){var a=this.rasterInfoFieldsSelect.get("value");if(b&&b.srcElement&&b.srcElement.classList.contains("dojoxMultiSelectItemLabel")){b=this._getFieldNameFromAlias(b.srcElement.innerText);var c=a.indexOf(b);
-1<c?a.splice(c,1):a.push(b);this.rasterInfoFieldsSelect.set("value",a);this._setSelectedFieldObject(b);this.formatFieldSettings.loadSettings()}else 3<a.length?(n.set(this.fieldLimitLabel,"visibility","visible"),this.rasterInfoFieldsSelect.set("value",a.slice(0,3))):n.set(this.fieldLimitLabel,"visibility","hidden")},_setSelectedFieldObject:function(b){var a={};this._allFields.some(function(c){if(c.name===b)return a.name=b,a.type=c.type,a.format=c.format,!0});this.selectedField=a},_getFieldNameFromAlias:function(b){var a;
this._allFields.some(function(c){if(c.alias===b)return a=c.name,!0});return a},_checkForImageServiceLayers:function(){},_populateLayers:function(){var b=0;e.forEach(this.map.itemInfo.itemData.operationalLayers,function(a){a&&a.layerObject&&this._isImageServiceLayer(a.layerObject)&&(b++,this.mapLayerSelect.addOption({value:a.title,label:a.title}),this._layerFieldMap[a.title]=[],this._layerFieldMap[a.title]=a.layerObject.fields)},this);this.mapLayerSelect.on("change",l.hitch(this,this._populateFields));
0===b?(g.add(this.searchesSection,"settingsHidden"),m.set(this.errorSection,this.nls.errorSectionMessage),this._hasSupportedLayer=!1):(g.remove(this.searchesSection,"settingsHidden"),m.set(this.errorSection,""),this._hasSupportedLayer=!0)},_isImageServiceLayer:function(b){return"esri.layers.ArcGISImageServiceLayer"===b.declaredClass||"esri.layers.ArcGISImageServiceVectorLayer"===b.declaredClass},_populateFields:function(){var b=this.config.ObliqueViewer,a=b.elevationField?b.elevationField.toLowerCase():
"elevation";b=b.azimuthField?b.azimuthField.toLowerCase():"azimuth";this._clearFields(this.elevationFieldSelect);this._clearFields(this.azimuthFieldSelect);this._clearFields(this.rasterInfoFieldsSelect);this._addFields(this.elevationFieldSelect,a);this._addFields(this.azimuthFieldSelect,b);this._addFields(this.rasterInfoFieldsSelect);this.rasterInfoFieldsSelect.set("value",this._getValuesFromRasterInfoFieldObj())},_populateFormatFields:function(){this.formatFieldSettings=new q({obliqueViewer:this},
this.formatFieldSettingsDiv);this.formatFieldSettings.show()},_clearFields:function(b){var a=b.getOptions();e.forEach(a,function(c){b.removeOption(c)},this)},_addFields:function(b,a){var c;e.forEach(this._allFields,function(d){a&&-1<d.name.toLowerCase().indexOf(a)&&(c=d.name);"esriFieldTypeGeometry"!==d.type&&b.addOption({value:d.name,label:d.alias||d.name})},this);a&&b.set("value",c)},_getDefaultFields:function(){var b,a=this._allFields,c=[];if(!a||!a.length)return g.add(this.searchesSection,"settingsHidden"),
m.set(this.errorSection,this.nls.errorSectionMessage),console.log("No fields found.");for(b=0;3>b;b++)c.push(a[b].alias);return c},_getRasterInfoFieldsObj:function(){var b=[];e.forEach(this.rasterInfoFieldsSelect.get("value"),function(a){e.forEach(this._allFields,function(c){if(c.name===a||c.alias===a)c.display=!0,b.push(l.clone(c))})},this);return b},_getValuesFromRasterInfoFieldObj:function(){var b=[];this.config.ObliqueViewer.rasterInfoFields.forEach(function(a){b.push(a.name)});return b},updateFieldFormat:function(){var b=
this.selectedField;this._allFields.some(function(a){if(a.name===b.name)return a.format=b.format,!0})},setConfig:function(b){this.config=b;this.thumbnailCheckbox.set("checked",this.config.ObliqueViewer.showThumbnail);this.autoSyncCheckbox.set("checked",this.config.ObliqueViewer.autoSync);this.distanceToolCheckbox.set("checked",this.config.ObliqueViewer.showDistanceTools);p.isDefined(this.config.ObliqueViewer.searchRadius)&&this.searchRadiusSelect.set("value",this.config.ObliqueViewer.searchRadius);
this.config.ObliqueViewer.searchUnit&&this.searchUnitSelect.set("value",this.config.ObliqueViewer.searchUnit);this.config.ObliqueViewer.layerTitle&&this.mapLayerSelect.set("value",this.config.ObliqueViewer.layerTitle);this.config.ObliqueViewer.elevationField&&this.elevationFieldSelect.set("value",this.config.ObliqueViewer.elevationField);this.config.ObliqueViewer.azimuthField&&this.azimuthFieldSelect.set("value",this.config.ObliqueViewer.azimuthField);0<this.config.ObliqueViewer.rasterInfoFields.length?
this.rasterInfoFieldsSelect.set("value",this._getValuesFromRasterInfoFieldObj()):this.rasterInfoFieldsSelect.set("value",this._getDefaultFields())},getConfig:function(){this.config.ObliqueViewer.autoSync=this.autoSyncCheckbox.checked;this.config.ObliqueViewer.showThumbnail=this.thumbnailCheckbox.checked;this.config.ObliqueViewer.showDistanceTools=this.distanceToolCheckbox.checked;this.searchRadiusSelect.get("value")&&(this.config.ObliqueViewer.searchRadius=this.searchRadiusSelect.get("value"));this.config.ObliqueViewer.searchUnit=
this.searchUnitSelect.get("value");this.config.ObliqueViewer.layerTitle=this.mapLayerSelect.get("value");this.config.ObliqueViewer.elevationField=this.elevationFieldSelect.get("value");this.config.ObliqueViewer.azimuthField=this.azimuthFieldSelect.get("value");this.config.ObliqueViewer.rasterInfoFields=this._getRasterInfoFieldsObj();return this.config}})});