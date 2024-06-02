// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:themes/JewelryBoxTheme/panels/LDockablePanel/Panel.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"jimu-container" data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \t\x3cdiv class\x3d"empty-tip"\x3e${nls.emptyDocablePanelTip}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv role\x3d"button" class\x3d"bar" tabindex\x3d"0" data-dojo-attach-point\x3d"barNode" data-dojo-attach-event\x3d"onclick:_onBarClick,onkeydown:_onBarKeyDown"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html require dojo/on dojo/keys dojo/topic dijit/_TemplatedMixin dojo/text!./Panel.html jimu/BaseWidgetPanel jimu/dijit/LoadingIndicator jimu/utils".split(" "),function(k,e,b,p,g,d,h,l,m,n,q,f){return k([n,l],{baseClass:"jimu-panel jimu-ldockable-panel",templateString:m,width:0,postMixInProperties:function(){this.panelNls=window.jimuNls.common},postCreate:function(){this.inherited(arguments);this.maxWidth=this.position.width;b.setAttr(this.domNode,
"tabindex",this.config.tabIndex);var a=this.config.widgets[0];a&&(b.setAttr(this.domNode,"aria-label",a.label),this.expandLabel=this.panelNls.expand.replace("${value}",a.label),this.collapseLabel=this.panelNls.collapse.replace("${value}",a.label),b.setAttr(this.barNode,"aria-label",this.collapseLabel));this.own(g(this.domNode,"focus",e.hitch(this,function(){"minimized"===this.windowState&&this.barNode.focus()})));this.own(g(this.domNode,"keydown",e.hitch(this,function(c){!this.widget&&a&&(this.widget=
this.widgetManager.getWidgetById(a.id));c.keyCode===d.ESCAPE?b.hasClass(c.target,this.baseClass)||c.target===this.barNode&&"minimized"===this.windowState?(c.preventDefault(),f.trapToNextFocusContainer(this.domNode)):(c.target===this.barNode?this.domNode:this.barNode).focus():c.keyCode===d.ENTER&&b.hasClass(c.target,this.baseClass)&&(c.stopPropagation(),c.preventDefault(),this.widget&&f.focusFirstFocusNode(this.widget.domNode))})))},startup:function(){var a=this.getAllWidgetConfigs();a=Array.isArray(this.config.widgets)?
this.config.widgets:[this.config];0<a.length&&b.empty(this.containerNode);this.inherited(arguments)},onOpen:function(){this._setPostionWidthAndLeft();b.setStyle(this.domNode,{width:this.position.width+"px"});0===this.position.width?this.panelManager.minimizePanel(this):this.panelManager.maximizePanel(this)},setPosition:function(a){this.inherited(arguments);h.publish("changeMapPosition",{left:this.position.left+this.position.width})},onMaximize:function(){b.addClass(this.barNode,"max");b.removeClass(this.barNode,
"min");b.removeClass("jimu-layout-manager","ldockable-panel--minimized");this.position.left=0;this.setPosition(this.position);this.inherited(arguments)},onMinimize:function(){b.removeClass(this.barNode,"max");b.addClass(this.barNode,"min");b.addClass("jimu-layout-manager","ldockable-panel--minimized");this.position.left=0-this.position.width;this.setPosition(this.position);this.inherited(arguments)},resize:function(){this._setPostionWidthAndLeft();var a=f.getPositionStyle(this.position);a.position=
"absolute";b.setStyle(this.domNode,a);h.publish("changeMapPosition",{left:this.position.left+this.position.width})},_setPostionWidthAndLeft:function(){if(window.appInfo.isRunInMobile){var a=b.getMarginBox(window.jimuConfig.layoutId);this.position.width=.8*a.w;this.position.width>this.maxWidth&&(this.position.width=this.maxWidth)}else this.position.width=this.position.width},_onBarClick:function(){var a=0;"maximized"===this.windowState?(this.panelManager.minimizePanel(this),b.setAttr(this.barNode,
"aria-label",this.expandLabel),a=this.config.tabIndex):(this.panelManager.maximizePanel(this),b.setAttr(this.barNode,"aria-label",this.collapseLabel));b.setAttr(this.barNode,"tabindex",a);setTimeout(e.hitch(this,function(){this.barNode.focus()}),50)},_onBarKeyDown:function(a){a.keyCode===d.ENTER||a.keyCode===d.SPACE?(a.stopPropagation(),a.preventDefault(),this._onBarClick()):a.keyCode===d.TAB&&("maximized"===this.windowState?(a.preventDefault(),f.focusFirstFocusNode(this.widget.domNode)):a.shiftKey&&
(b.setAttr(this.domNode,"tabindex","-1"),setTimeout(e.hitch(this,function(){b.setAttr(this.domNode,"tabindex",this.config.tabIndex)}),50)))}})});