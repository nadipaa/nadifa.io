// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/_base/array dojo/dom-class dojo/dom-construct dojo/dom-style dojo/on esri/geometry/geometryEngine esri/geometry/Polyline esri/geometry/webMercatorUtils esri/graphic esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query jimu/CSVUtils jimu/utils".split(" "),function(C,q,v,t,k,m,D,u,x,E,y,z,F,A,B,G,H,I,J,K){return C("ProximityInfo",null,{constructor:function(a,
c,b){this.tab=a;this.container=c;this.parent=b;this.graphicsLayer=this.buffer=this.incident=this.featureLayer=null;this.specialFields={}},updateForIncident:function(a,c,b){if(this.featureLayer)this.processIncident(a,c,b);else if(0<this.tab.tabLayers.length){var e=new F(this.tab.tabLayers[0].url);u(e,"load",q.hitch(this,function(){e.capabilities&&-1<e.capabilities.indexOf("Query")?(this.featureLayer=e,this.processIncident(a,c,b)):this._processError()}));u(this.parent.opLayers,"layerInfosFilterChanged",
q.hitch(this,this._layerFilterChanged))}},_layerFilterChanged:function(a){if(null!==this.featureLayer&&null!==this.incident&&null!==this.buffer&&null!==this.graphicsLayer){var c=this.tab.tabLayers[0].id;t.forEach(a,q.hitch(this,function(b){c===b.id&&this.processIncident(this.incident,this.buffer,this.graphicsLayer)}))}},processIncident:function(a,c,b){this.container.innerHTML="";k.add(this.container,"loading");var e=[];this.incident=a;this.buffer=c;this.graphicsLayer=b;this.graphicsLayer.clear();
var g=this.tab.tabLayers[0].id,f="";this.parent.opLayers.traversal(function(d){if(g===d.id&&d.getFilter())return f=d.getFilter(),!0});b=new I;b.returnGeometry=!0;b.geometry=c.geometry;b.where=f;b.outFields=this._getFields(this.featureLayer);b.outSpatialReference=this.parent.map.spatialReference;this.featureLayer.queryFeatures(b,q.hitch(this,function(d){var n=this._getFields(this.featureLayer);d=d.features;if(0<d.length)for(var l=0;l<d.length;l++){for(var h=d[l],r={DISTANCE:this._getDistance(a.geometry,
h.geometry)},p=0;p<n.length;p++)r[n[p]]=h.attributes[n[p]];h.attributes=r;e.push(h)}this._processResults(e)}),q.hitch(this,this._processError))},_processError:function(){this.container.innerHTML="";k.remove(this.container,"loading");this.container.innerHTML=this.parent.nls.noFeaturesFound},_processResults:function(a){this.container.innerHTML="";k.remove(this.container,"loading");this.graphicsLayer.clear();if(0===a.length)this.container.innerHTML=this.parent.nls.noFeaturesFound;else{a.sort(this._compareDistance);
var c=m.create("div",{id:"tpc",style:"width:"+220*(a.length+1)+"px;"},this.container);k.add(c,"IMT_tabPanelContent");var b=m.create("div",{},c);k.add(b,"IMTcol");b=m.create("div",{innerHTML:this.parent.nls.downloadCSV},b);k.add(b,"btnExport");u(b,"click",q.hitch(this,this._exportToCSV,a));b=this.parent.nls[this.parent.config.distanceUnits];for(var e=0;e<a.length;e++){var g=e+1,f=a[e],d=f.geometry,n=d;"point"!==d.type&&(n=d.getExtent().getCenter());f=f.attributes;var l=b+": "+Math.round(100*f.DISTANCE)/
100;d="";var h=0,r;for(r in f)"DISTANCE"!==r&&3>h&&(d+=this._getFieldValue(r,f[r])+"\x3cbr/\x3e",h+=1);h=m.create("div",{id:"Feature_"+g},c);k.add(h,"IMTcolRec");var p=m.create("div",{},h);k.add(p,"IMTcolRecBar");var w=m.create("div",{innerHTML:g},p);k.add(w,"IMTcolRecNum");D.set(w,"backgroundColor",this.parent.config.color);u(w,"click",q.hitch(this,this._zoomToLocation,n));l=m.create("div",{innerHTML:l},p);k.add(l,"IMTcolDistance");this.parent.config.enableRouting&&(l=m.create("div",{},p),k.add(l,
"IMTcolDir"),u(l,"click",q.hitch(this,this._routeToIncident,n)));d=m.create("div",{innerHTML:K.sanitizeHTML(d?d:"")},h);k.add(d,"IMTcolInfo");d=new B(B.STYLE_SOLID,new v.fromString(this.parent.config.color),1);d=new A(A.STYLE_CIRCLE,24,d,new v.fromString(this.parent.config.color));h=new G;h.setFamily("Arial");h.setSize("12px");g=new H(g+"",h,new v.fromString("#ffffff"));g.setOffset(0,-4);this.graphicsLayer.add(new z(n,d,f));this.graphicsLayer.add(new z(n,g,f))}}},_exportToCSV:function(a){if(0===a.length)return!1;
var c=this.tab.layers,b=[],e=[];t.forEach(a,function(f){b.push(f.attributes)});for(var g in b[0])e.push(g);J.exportCSV(c,b,e)},_getFields:function(a){var c=[];if(this.tab.advConfig&&this.tab.advConfig.fields&&0<this.tab.advConfig.fields.length)t.forEach(this.tab.advConfig.fields,function(d){c.push(d.expression)});else{var b=a.infoTemplate?a.infoTemplate.info.fieldInfos:a.fields;for(var e=0;e<b.length;e++){var g=b[e];"undefined"!==typeof g.visible?g.visible&&c.push(g.fieldName):c.push(g.name)}}var f=
{};t.forEach(a.fields,function(d){if("esriFieldTypeDate"===d.type||d.domain)f[d.name]=d});this.specialFields=f;return c},_getFieldValue:function(a,c){var b=c;this.specialFields[a]&&(a=this.specialFields[a],"esriFieldTypeDate"===a.type?b=(new Date(c)).toLocaleString():t.some(a.domain.codedValues,function(e){if(e.code===c)return b=e.name,!0}));return b},_getDistance:function(a,c){var b=0;4326===a.spatialReference.wkid&&(a=y.geographicToWebMercator(a));b="point"===a.type?a:a.getExtent().getCenter();
4326===c.spatialReference.wkid&&(c=y.geographicToWebMercator(c));a="point"===c.type?c:c.getExtent().getCenter();c=this.parent.config.distanceUnits;var e=new E(b.spatialReference);e.addPath([b,a]);b=b.spatialReference.isWebMercator()?x.geodesicLength(e,9001):x.planarLength(e,9001);switch(c){case "miles":b*=6.21371E-4;break;case "kilometers":b*=.001;break;case "feet":b*=3.28084;break;case "yards":b*=1.09361;break;case "nauticalMiles":b*=5.39957E-4}return b},_compareDistance:function(a,c){return a.attributes.DISTANCE<
c.attributes.DISTANCE?-1:a.attributes.DISTANCE>c.attributes.DISTANCE?1:0},_zoomToLocation:function(a){this.parent.zoomToLocation(a)},_routeToIncident:function(a){this.parent.routeToIncident(a)}})});