import{A as _,B as x,Ba as F,C as P,D as M,G as b,M as g,N as r,P as I,Q as S,U as a,Wa as T,b as L,c as f,d as l,h as z,ha as Z,i as v,la as A,ma as R,p as u,r as O,s as h,x as E}from"./chunk-IEDQEACJ.js";import{a as c,b as p}from"./chunk-GAL4ENT6.js";var N=["*"],d=class{_clearListeners(){for(let o of this._listeners)o.remove();this._listeners=[]}constructor(o){this._ngZone=o,this._pending=[],this._listeners=[],this._targetStream=new l(void 0)}getLazyEmitter(o){return this._targetStream.pipe(O(e=>{let t=new L(n=>{if(!e){this._pending.push({observable:t,observer:n});return}let s=e.addListener(o,y=>{this._ngZone.run(()=>n.next(y))});if(!s){n.complete();return}return this._listeners.push(s),()=>s.remove()});return t}))}setTarget(o){let e=this._targetStream.value;o!==e&&(e&&(this._clearListeners(),this._pending=[]),this._targetStream.next(o),this._pending.forEach(t=>t.observable.subscribe(t.observer)),this._pending=[])}destroy(){this._clearListeners(),this._pending=[],this._targetStream.complete()}},m={center:{lat:37.421995,lng:-122.084092},zoom:17,mapTypeId:"roadmap"},j="500px",B="500px",C=(()=>{class i{set center(e){this._center=e}set zoom(e){this._zoom=e}set options(e){this._options=e||m}constructor(e,t,n){if(this._elementRef=e,this._ngZone=t,this._eventManager=new d(_(r)),this.height=j,this.width=B,this._options=m,this.mapInitialized=new g,this.authFailure=new g,this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=T(n),this._isBrowser){let s=window;s.google,this._existingAuthFailureCallback=s.gm_authFailure,s.gm_authFailure=()=>{this._existingAuthFailureCallback&&this._existingAuthFailureCallback(),this.authFailure.emit()}}}ngOnChanges(e){(e.height||e.width)&&this._setSize();let t=this.googleMap;t&&(e.options&&t.setOptions(this._combineOptions()),e.center&&this._center&&t.setCenter(this._center),e.zoom&&this._zoom!=null&&t.setZoom(this._zoom),e.mapTypeId&&this.mapTypeId&&t.setMapTypeId(this.mapTypeId))}ngOnInit(){this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),google.maps.Map?this._initialize(google.maps.Map):this._ngZone.runOutsideAngular(()=>{google.maps.importLibrary("maps").then(e=>this._initialize(e.Map))}))}_initialize(e){this._ngZone.runOutsideAngular(()=>{this.googleMap=new e(this._mapEl,this._combineOptions()),this._eventManager.setTarget(this.googleMap),this.mapInitialized.emit(this.googleMap)})}ngOnDestroy(){if(this.mapInitialized.complete(),this._eventManager.destroy(),this._isBrowser){let e=window;e.gm_authFailure=this._existingAuthFailureCallback}}fitBounds(e,t){this._assertInitialized(),this.googleMap.fitBounds(e,t)}panBy(e,t){this._assertInitialized(),this.googleMap.panBy(e,t)}panTo(e){this._assertInitialized(),this.googleMap.panTo(e)}panToBounds(e,t){this._assertInitialized(),this.googleMap.panToBounds(e,t)}getBounds(){return this._assertInitialized(),this.googleMap.getBounds()||null}getCenter(){return this._assertInitialized(),this.googleMap.getCenter()}getClickableIcons(){return this._assertInitialized(),this.googleMap.getClickableIcons()}getHeading(){return this._assertInitialized(),this.googleMap.getHeading()}getMapTypeId(){return this._assertInitialized(),this.googleMap.getMapTypeId()}getProjection(){return this._assertInitialized(),this.googleMap.getProjection()||null}getStreetView(){return this._assertInitialized(),this.googleMap.getStreetView()}getTilt(){return this._assertInitialized(),this.googleMap.getTilt()}getZoom(){return this._assertInitialized(),this.googleMap.getZoom()}get controls(){return this._assertInitialized(),this.googleMap.controls}get data(){return this._assertInitialized(),this.googleMap.data}get mapTypes(){return this._assertInitialized(),this.googleMap.mapTypes}get overlayMapTypes(){return this._assertInitialized(),this.googleMap.overlayMapTypes}_resolveMap(){return this.googleMap?Promise.resolve(this.googleMap):this.mapInitialized.pipe(u(1)).toPromise()}_setSize(){if(this._mapEl){let e=this._mapEl.style;e.height=this.height===null?"":G(this.height)||j,e.width=this.width===null?"":G(this.width)||B}}_combineOptions(){let e=this._options||{};return p(c({},e),{center:this._center||e.center||m.center,zoom:this._zoom??e.zoom??m.zoom,mapTypeId:this.mapTypeId||e.mapTypeId||m.mapTypeId,mapId:this.mapId||e.mapId})}_assertInitialized(){this.googleMap}static{this.\u0275fac=function(t){return new(t||i)(a(I),a(r),a(S))}}static{this.\u0275cmp=x({type:i,selectors:[["google-map"]],inputs:{height:"height",width:"width",mapId:"mapId",mapTypeId:"mapTypeId",center:"center",zoom:"zoom",options:"options"},outputs:{mapInitialized:"mapInitialized",authFailure:"authFailure",boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},exportAs:["googleMap"],standalone:!0,features:[b,F],ngContentSelectors:N,decls:2,vars:0,consts:[[1,"map-container"]],template:function(t,n){t&1&&(A(),Z(0,"div",0),R(1))},encapsulation:2,changeDetection:0})}}return i})(),W=/([A-Za-z%]+)$/;function G(i){return i==null?"":W.test(i)?i:`${i}px`}var de=(()=>{class i{set options(e){this._options.next(e||{})}set center(e){this._center.next(e)}set radius(e){this._radius.next(e)}constructor(e,t){this._map=e,this._ngZone=t,this._eventManager=new d(_(r)),this._options=new l({}),this._center=new l(void 0),this._radius=new l(void 0),this._destroyed=new f,this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.circleClick=this._eventManager.getLazyEmitter("click"),this.circleDblclick=this._eventManager.getLazyEmitter("dblclick"),this.circleDrag=this._eventManager.getLazyEmitter("drag"),this.circleDragend=this._eventManager.getLazyEmitter("dragend"),this.circleDragstart=this._eventManager.getLazyEmitter("dragstart"),this.circleMousedown=this._eventManager.getLazyEmitter("mousedown"),this.circleMousemove=this._eventManager.getLazyEmitter("mousemove"),this.circleMouseout=this._eventManager.getLazyEmitter("mouseout"),this.circleMouseover=this._eventManager.getLazyEmitter("mouseover"),this.circleMouseup=this._eventManager.getLazyEmitter("mouseup"),this.radiusChanged=this._eventManager.getLazyEmitter("radius_changed"),this.circleRightclick=this._eventManager.getLazyEmitter("rightclick"),this.circleInitialized=new g}ngOnInit(){this._map._isBrowser&&this._combineOptions().pipe(u(1)).subscribe(e=>{google.maps.Circle&&this._map.googleMap?this._initialize(this._map.googleMap,google.maps.Circle,e):this._ngZone.runOutsideAngular(()=>{Promise.all([this._map._resolveMap(),google.maps.importLibrary("maps")]).then(([t,n])=>{this._initialize(t,n.Circle,e)})})})}_initialize(e,t,n){this._ngZone.runOutsideAngular(()=>{this.circle=new t(n),this._assertInitialized(),this.circle.setMap(e),this._eventManager.setTarget(this.circle),this.circleInitialized.emit(this.circle),this._watchForOptionsChanges(),this._watchForCenterChanges(),this._watchForRadiusChanges()})}ngOnDestroy(){this._eventManager.destroy(),this._destroyed.next(),this._destroyed.complete(),this.circle?.setMap(null)}getBounds(){return this._assertInitialized(),this.circle.getBounds()}getCenter(){return this._assertInitialized(),this.circle.getCenter()}getDraggable(){return this._assertInitialized(),this.circle.getDraggable()}getEditable(){return this._assertInitialized(),this.circle.getEditable()}getRadius(){return this._assertInitialized(),this.circle.getRadius()}getVisible(){return this._assertInitialized(),this.circle.getVisible()}_combineOptions(){return v([this._options,this._center,this._radius]).pipe(z(([e,t,n])=>p(c({},e),{center:t||e.center,radius:n!==void 0?n:e.radius})))}_watchForOptionsChanges(){this._options.pipe(h(this._destroyed)).subscribe(e=>{this._assertInitialized(),this.circle.setOptions(e)})}_watchForCenterChanges(){this._center.pipe(h(this._destroyed)).subscribe(e=>{e&&(this._assertInitialized(),this.circle.setCenter(e))})}_watchForRadiusChanges(){this._radius.pipe(h(this._destroyed)).subscribe(e=>{e!==void 0&&(this._assertInitialized(),this.circle.setRadius(e))})}_assertInitialized(){}static{this.\u0275fac=function(t){return new(t||i)(a(C),a(r))}}static{this.\u0275dir=M({type:i,selectors:[["map-circle"]],inputs:{options:"options",center:"center",radius:"radius"},outputs:{centerChanged:"centerChanged",circleClick:"circleClick",circleDblclick:"circleDblclick",circleDrag:"circleDrag",circleDragend:"circleDragend",circleDragstart:"circleDragstart",circleMousedown:"circleMousedown",circleMousemove:"circleMousemove",circleMouseout:"circleMouseout",circleMouseover:"circleMouseover",circleMouseup:"circleMouseup",radiusChanged:"radiusChanged",circleRightclick:"circleRightclick",circleInitialized:"circleInitialized"},exportAs:["mapCircle"],standalone:!0})}}return i})();var ce=(()=>{class i{set options(e){this._options.next(e||{})}set position(e){this._position.next(e)}constructor(e,t,n){this._googleMap=e,this._elementRef=t,this._ngZone=n,this._eventManager=new d(_(r)),this._options=new l({}),this._position=new l(void 0),this._destroy=new f,this.closeclick=this._eventManager.getLazyEmitter("closeclick"),this.contentChanged=this._eventManager.getLazyEmitter("content_changed"),this.domready=this._eventManager.getLazyEmitter("domready"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed"),this.infoWindowInitialized=new g}ngOnInit(){this._googleMap._isBrowser&&this._combineOptions().pipe(u(1)).subscribe(e=>{google.maps.InfoWindow?this._initialize(google.maps.InfoWindow,e):this._ngZone.runOutsideAngular(()=>{google.maps.importLibrary("maps").then(t=>{this._initialize(t.InfoWindow,e)})})})}_initialize(e,t){this._ngZone.runOutsideAngular(()=>{this.infoWindow=new e(t),this._eventManager.setTarget(this.infoWindow),this.infoWindowInitialized.emit(this.infoWindow),this._watchForOptionsChanges(),this._watchForPositionChanges()})}ngOnDestroy(){this._eventManager.destroy(),this._destroy.next(),this._destroy.complete(),this.infoWindow&&this.close()}close(){this._assertInitialized(),this.infoWindow.close()}getContent(){return this._assertInitialized(),this.infoWindow.getContent()||null}getPosition(){return this._assertInitialized(),this.infoWindow.getPosition()||null}getZIndex(){return this._assertInitialized(),this.infoWindow.getZIndex()}openAdvancedMarkerElement(e,t){this.open({getAnchor:()=>e},void 0,t)}open(e,t,n){this._assertInitialized();let s=e?e.getAnchor():void 0;(this.infoWindow.get("anchor")!==s||!s)&&(this._elementRef.nativeElement.style.display="",n&&this.infoWindow.setContent(n),this.infoWindow.open({map:this._googleMap.googleMap,anchor:s,shouldFocus:t}))}_combineOptions(){return v([this._options,this._position]).pipe(z(([e,t])=>p(c({},e),{position:t||e.position,content:this._elementRef.nativeElement})))}_watchForOptionsChanges(){this._options.pipe(h(this._destroy)).subscribe(e=>{this._assertInitialized(),this.infoWindow.setOptions(e)})}_watchForPositionChanges(){this._position.pipe(h(this._destroy)).subscribe(e=>{e&&(this._assertInitialized(),this.infoWindow.setPosition(e))})}_assertInitialized(){}static{this.\u0275fac=function(t){return new(t||i)(a(C),a(I),a(r))}}static{this.\u0275dir=M({type:i,selectors:[["map-info-window"]],hostAttrs:[2,"display","none"],inputs:{options:"options",position:"position"},outputs:{closeclick:"closeclick",contentChanged:"contentChanged",domready:"domready",positionChanged:"positionChanged",zindexChanged:"zindexChanged",infoWindowInitialized:"infoWindowInitialized"},exportAs:["mapInfoWindow"],standalone:!0})}}return i})();var H={position:{lat:37.421995,lng:-122.084092}},pe=(()=>{class i{set title(e){this._title=e}set position(e){this._position=e}set label(e){this._label=e}set clickable(e){this._clickable=e}set options(e){this._options=e}set icon(e){this._icon=e}set visible(e){this._visible=e}constructor(e,t){this._googleMap=e,this._ngZone=t,this._eventManager=new d(_(r)),this.animationChanged=this._eventManager.getLazyEmitter("animation_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.clickableChanged=this._eventManager.getLazyEmitter("clickable_changed"),this.cursorChanged=this._eventManager.getLazyEmitter("cursor_changed"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.draggableChanged=this._eventManager.getLazyEmitter("draggable_changed"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.flatChanged=this._eventManager.getLazyEmitter("flat_changed"),this.iconChanged=this._eventManager.getLazyEmitter("icon_changed"),this.mapMousedown=this._eventManager.getLazyEmitter("mousedown"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.mapMouseup=this._eventManager.getLazyEmitter("mouseup"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.shapeChanged=this._eventManager.getLazyEmitter("shape_changed"),this.titleChanged=this._eventManager.getLazyEmitter("title_changed"),this.visibleChanged=this._eventManager.getLazyEmitter("visible_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed"),this.markerInitialized=new g}ngOnInit(){this._googleMap._isBrowser&&(google.maps.Marker&&this._googleMap.googleMap?this._initialize(this._googleMap.googleMap,google.maps.Marker):this._ngZone.runOutsideAngular(()=>{Promise.all([this._googleMap._resolveMap(),google.maps.importLibrary("marker")]).then(([e,t])=>{this._initialize(e,t.Marker)})}))}_initialize(e,t){this._ngZone.runOutsideAngular(()=>{this.marker=new t(this._combineOptions()),this._assertInitialized(),this.marker.setMap(e),this._eventManager.setTarget(this.marker),this.markerInitialized.next(this.marker)})}ngOnChanges(e){let{marker:t,_title:n,_position:s,_label:y,_clickable:w,_icon:k,_visible:D}=this;t&&(e.options&&t.setOptions(this._combineOptions()),e.title&&n!==void 0&&t.setTitle(n),e.position&&s&&t.setPosition(s),e.label&&y!==void 0&&t.setLabel(y),e.clickable&&w!==void 0&&t.setClickable(w),e.icon&&k&&t.setIcon(k),e.visible&&D!==void 0&&t.setVisible(D))}ngOnDestroy(){this.markerInitialized.complete(),this._eventManager.destroy(),this.marker?.setMap(null)}getAnimation(){return this._assertInitialized(),this.marker.getAnimation()||null}getClickable(){return this._assertInitialized(),this.marker.getClickable()}getCursor(){return this._assertInitialized(),this.marker.getCursor()||null}getDraggable(){return this._assertInitialized(),!!this.marker.getDraggable()}getIcon(){return this._assertInitialized(),this.marker.getIcon()||null}getLabel(){return this._assertInitialized(),this.marker.getLabel()||null}getOpacity(){return this._assertInitialized(),this.marker.getOpacity()||null}getPosition(){return this._assertInitialized(),this.marker.getPosition()||null}getShape(){return this._assertInitialized(),this.marker.getShape()||null}getTitle(){return this._assertInitialized(),this.marker.getTitle()||null}getVisible(){return this._assertInitialized(),this.marker.getVisible()}getZIndex(){return this._assertInitialized(),this.marker.getZIndex()||null}getAnchor(){return this._assertInitialized(),this.marker}_resolveMarker(){return this.marker?Promise.resolve(this.marker):this.markerInitialized.pipe(u(1)).toPromise()}_combineOptions(){let e=this._options||H;return p(c({},e),{title:this._title||e.title,position:this._position||e.position,label:this._label||e.label,clickable:this._clickable??e.clickable,map:this._googleMap.googleMap,icon:this._icon||e.icon,visible:this._visible??e.visible})}_assertInitialized(){}static{this.\u0275fac=function(t){return new(t||i)(a(C),a(r))}}static{this.\u0275dir=M({type:i,selectors:[["map-marker"]],inputs:{title:"title",position:"position",label:"label",clickable:"clickable",options:"options",icon:"icon",visible:"visible"},outputs:{animationChanged:"animationChanged",mapClick:"mapClick",clickableChanged:"clickableChanged",cursorChanged:"cursorChanged",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",draggableChanged:"draggableChanged",mapDragstart:"mapDragstart",flatChanged:"flatChanged",iconChanged:"iconChanged",mapMousedown:"mapMousedown",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",mapMouseup:"mapMouseup",positionChanged:"positionChanged",mapRightclick:"mapRightclick",shapeChanged:"shapeChanged",titleChanged:"titleChanged",visibleChanged:"visibleChanged",zindexChanged:"zindexChanged",markerInitialized:"markerInitialized"},exportAs:["mapMarker"],standalone:!0,features:[b]})}}return i})();var ue=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=P({type:i})}static{this.\u0275inj=E({})}}return i})();export{C as a,de as b,ce as c,pe as d,ue as e};