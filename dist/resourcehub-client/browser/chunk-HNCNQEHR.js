import{a as A}from"./chunk-5FEFHWZP.js";import{a as ge,b as he,c as j,d as xe,e as Ce}from"./chunk-Q5VZLXNX.js";import"./chunk-JXDKFL5N.js";import"./chunk-YG456BZV.js";import{a as D}from"./chunk-7RGY2OD3.js";import{c as ie,f as ne,j as oe,m as re,v as I}from"./chunk-V2SSCOFE.js";import{Ab as fe,B as T,Ba as Y,C as M,Ga as K,H as p,Ha as X,I as d,Jb as ue,Kb as _e,M as H,Qa as R,S as J,Sa as Z,T as r,Ta as S,U as w,Ua as ee,Ub as V,Va as L,Vb as E,Y as h,_ as s,ba as k,bb as te,da as q,ea as B,fa as o,ga as a,ha as u,hb as y,ia as C,ib as ae,ja as _,jb as se,ka as l,na as G,oa as Q,pa as $,qa as U,ra as c,sa as P,ta as b,tb as le,ub as ce,x as v,xa as F,xb as me,ya as W,yb as pe,za as O,zb as de}from"./chunk-WXNTJ4HU.js";import"./chunk-GAL4ENT6.js";var ke=(i,f)=>f.position.position;function Pe(i,f){if(i&1&&u(0,"fa-icon",34),i&2){let e=l();s("icon",e.faCircleNotch)}}function Se(i,f){if(i&1&&u(0,"fa-icon",25),i&2){let e=l();s("icon",e.faLocationCrosshairs)}}function Le(i,f){if(i&1&&u(0,"map-circle",35),i&2){let e=l();s("center",e.center)("radius",e.radius)("options",e.circleOptions)}}function Ie(i,f){if(i&1){let e=C();o(0,"map-marker",37,1),_("mapClick",function(){p(e);let t=U(1),m=l().$implicit,g=l(2);return d(g.openInfoWindow(t,m.title))}),a()}if(i&2){let e=l().$implicit,n=l(2);s("position",e.position.position)("options",n.markerOptions)}}function Ve(i,f){if(i&1&&h(0,Ie,2,2,"map-marker",36),i&2){let e=f.$implicit,n=l(2);s("ngIf",n.with_radius?n.isMarkerWithinRadius(e.position.position):!0)}}function Ee(i,f){if(i&1&&q(0,Ve,1,1,"map-marker",20,ke),i&2){let e=l();B(e.markerPositions)}}function De(i,f){if(i&1&&(o(0,"span",45),u(1,"fa-icon",25),c(2," Applied "),a()),i&2){let e=l(3);r(),s("icon",e.faCheckCircle)}}function je(i,f){if(i&1&&(o(0,"span",46),u(1,"fa-icon",25),c(2," Post saved "),a()),i&2){let e=l(3);r(),s("icon",e.faCheckCircle)}}function Ae(i,f){if(i&1&&h(0,De,3,1,"span",45)(1,je,3,1,"span",46),i&2){let e=l().$implicit;k(e.applicants[0].is_applied?0:1)}}function Fe(i,f){if(i&1){let e=C();o(0,"div",38)(1,"span",39)(2,"div")(3,"span",40),c(4,"Date published:"),a(),c(5),K(6,"date"),a(),o(7,"div"),h(8,Ae,2,1),a()(),o(9,"span",41),c(10),a(),o(11,"span",42),c(12),a(),o(13,"div",43)(14,"button",44),_("click",function(){let t=p(e).$implicit,m=l();return d(m.toggleModal("view-details",t))}),c(15," view details "),u(16,"fa-icon",25),a()()()}if(i&2){let e=f.$implicit,n=l();r(5),b(" ",X(6,5,e.date_published,"MMM dd, yyyy")," "),r(3),k(e.applicants&&e.applicants.length>0?8:-1),r(2),P(e.title),r(2),P(e.job_status),r(4),s("icon",n.faArrowRight)}}function We(i,f){if(i&1){let e=C();o(0,"div",47)(1,"div",48),u(2,"img",49),a(),o(3,"div",50)(4,"span",51),c(5,"No scanned Part-time Job Posts"),a(),o(6,"div",52),c(7,"Scanned part-time job posting show up here"),a(),o(8,"button",53),_("click",function(){p(e);let t=l();return d(t.loadPartTime(!0,1))}),c(9," VIEW ALL POSTING "),a()()()}}function Oe(i,f){if(i&1){let e=C();o(0,"app-post-details",54),_("toggleModal",function(){p(e);let t=l();return d(t.toggleModal("view-details"))}),a()}if(i&2){let e=l();s("selected_posting",e.selected_posting)("isAuthenticated",e.isAuthenticated)}}var be=(()=>{class i{addMarker(){this.markerPositions=[],Object.entries(this.partTimeList).length>0&&Object.entries(this.partTimeList).forEach(([e,n],t)=>{let m={position:{lat:n.latitude,lng:n.longitude},visible:!1};this.markerPositions.push({title:n.title,position:m})})}openInfoWindow(e,n){this.marker_title=n,this.infoWindow&&this.infoWindow.open(e)}loadPartTime(e,n){this.isLoading=!0;let t={};t.page=n??1,t.per_page=10,t.lib_posting_category_id=1,t.is_published="published",e===!1?(this.with_radius=!0,t.radius=this.radius,t.lat=this.center.lat,t.lng=this.center.lng):(this.search=null,this.with_radius=!1),this.search&&(t.search=this.search);let m=this.isAuthenticated?"posting-information":"public-info";this.http.get(m,{params:t}).subscribe({next:g=>{this.partTimeList=g.data,this.addMarker(),this.isLoading=!1},error:g=>console.log(g)})}toggleModal(e,n){this.selected_posting=n,this.modals[e]=!this.modals[e]}getDistanceFromCenter(e){let t=this.degreesToRadians(e.lat-this.center.lat),m=this.degreesToRadians(e.lng-this.center.lng),g=this.degreesToRadians(this.center.lat),x=this.degreesToRadians(e.lat),N=Math.sin(t/2)*Math.sin(t/2)+Math.sin(m/2)*Math.sin(m/2)*Math.cos(g)*Math.cos(x);return 6371e3*(2*Math.atan2(Math.sqrt(N),Math.sqrt(1-N)))}degreesToRadians(e){return e*(Math.PI/180)}isMarkerWithinRadius(e){return this.getDistanceFromCenter(e)<=this.radius}updateMarkers(){this.markerPositions.forEach(e=>{e.visible=this.isMarkerWithinRadius(e.position)})}useDeviceLocation(){this.gettingLocation=!0,navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{this.center={lat:e.coords.latitude,lng:e.coords.longitude},this.zoom=14,this.loadPartTime(!1,1),this.gettingLocation=!1},e=>{console.error("Error obtaining location",e),alert("Unable to retrieve location. Please check permissions.")}):alert("Geolocation is not supported by this browser.")}toggleLocationSelection(){this.updatingLocation=!this.updatingLocation,this.loadPartTime(!1,1)}getMapWidth(){let e=this.screenWidth;return e>=768&&(e=this.screenWidth/5*2.73),e-40+"px"}getMapHeight(){return this.screenHeight*.73+"px"}getMapHeightStr(){return"h-"+this.screenHeight*.73+"px"}adjustCenterLocation(e){e?.latLng&&(this.center=e?.latLng?.toJSON())}constructor(e){this.http=e,this.faLocationCrosshairs=de,this.faCircleNotch=se,this.faArrowRight=me,this.faSearch=_e,this.faFilter=ce,this.faCheckCircle=le,this.faLocationDot=ue,this.partTimeList=[],this.modals=[],this.isLoading=!1,this.isAuthenticated=!1,this.options={mapId:"DEMO_MAP_ID",zoom:14,fullscreenControl:!1,draggableCursor:"default",draggingCursor:"grab"},this.center={lat:15.475578308105469,lng:120.59635162353516},this.zoom=14,this.radius=1500,this.circleOptions={fillColor:"blue",fillOpacity:.2,strokeColor:"blue",strokeOpacity:.5,strokeWeight:2,clickable:!1},this.markerOptions={draggable:!1},this.centerMarkerOptions={draggable:!1,icon:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"},this.markerPositions=[],this.with_radius=!0,this.gettingLocation=!1,this.updatingLocation=!1,this.screenWidth=window.innerWidth,this.screenHeight=window.innerHeight}ngOnInit(){this.loadPartTime(!1,1),localStorage.getItem("access_token")?this.isAuthenticated=!0:this.isAuthenticated=!1}static{this.\u0275fac=function(n){return new(n||i)(w(D))}}static{this.\u0275cmp=T({type:i,selectors:[["app-part-time"]],viewQuery:function(n,t){if(n&1&&G(j,5),n&2){let m;Q(m=$())&&(t.infoWindow=m.first)}},decls:44,vars:24,consts:[["map",""],["marker","mapMarker"],[1,"flex","flex-col","mt-5","mx-5","md:mx-20"],[1,"flex","flex-col","md:flex-row","justify-between"],[1,"font-semibold","text-2xl","text-blue-600","block","basis-1/2"],[1,"flex","flex-col","md:flex-row","mt-5"],[1,"h-4/5","flex","flex-col","w-full","md:w-3/5","mr-0","md:mr-5","mt-5","md:mt-0","mb-5"],[1,"flex","justify-between","my-1"],[1,"flex","flex-col"],["type","range","min","500","max","5000","id","myRange",1,"ml-2","slider",3,"change","ngModelChange","ngModel"],[1,"w-1/2","flex","justify-end"],[1,"text-white","bg-blue-600","rounded-md","py-1","px-3","md:px-2","disabled:bg-gray-300",3,"click","disabled"],["animation","spin",3,"icon",4,"ngIf"],[3,"icon",4,"ngIf"],[1,"bg-orange-500","text-white","px-4","md:px-2","py-1.5","text-sm","rounded-md","ml-2","disabled:bg-gray-300",3,"click","disabled"],[1,"block","md:hidden",3,"icon"],[1,"hidden","md:block","md:ml-2"],[1,"overflow-y-auto"],[3,"mapClick","center","width","height","options"],[3,"center","radius","options",4,"ngIf"],[3,"position","options"],[1,"h-4/5","md:w-2/5","mt-5","md:mt-0"],[1,"flex","flex-row","justify-between","text-base","w-full","my-3","md:mt-0"],[1,"w-8/12","flex","item-start"],[1,"input-txt","rounded-l-md","rounded-r-none","border-r-0","w-8","p-1","pl-2"],[3,"icon"],["type","text","placeholder","Search part-time jobs",1,"input-txt","placeholder:italic","rounded-md","rounded-l-none","border-l-0",3,"ngModelChange","keydown.enter","ngModel"],[1,"flex","item-start","text-xs"],[1,"px-3","btn-blue-nr","ml-3",3,"click","disabled"],[1,"md:pl-1"],[1,"overflow-y-auto","max-h-[650px]"],["class","flex flex-col md:mr-3 mt-3 p-5 border border-gray-300 shadow-md rounded-lg ",4,"ngFor","ngForOf"],["class","flex flex-col w-full",4,"ngIf"],[3,"selected_posting","isAuthenticated","toggleModal",4,"ngIf"],["animation","spin",3,"icon"],[3,"center","radius","options"],[3,"position","options","mapClick",4,"ngIf"],[3,"mapClick","position","options"],[1,"flex","flex-col","md:mr-3","mt-3","p-5","border","border-gray-300","shadow-md","rounded-lg"],[1,"text-gray-500","text-xs","flex","justify-between"],[1,"italic"],[1,"text-xl","font-semibold"],[1,"text-gray-500"],[1,"flex","justify-center","mt-3"],[1,"btn-blue",3,"click"],[1,"text-xs","bg-green-500","text-white","py-1","px-2","rounded-full","select-none"],[1,"text-xs","bg-blue-500","text-white","py-1","px-2","rounded-full","select-none"],[1,"flex","flex-col","w-full"],[1,"flex","justify-center"],["src","../assets/img/no-recent.png",1,"h-18"],[1,"flex","flex-col","justify-center","mb-5","w-3/5","mx-auto","text-center"],[1,"font-semibold"],[1,"mt-3","text-sm"],[1,"text-blue-600","font-semibold","mt-3",3,"click"],[3,"toggleModal","selected_posting","isAuthenticated"]],template:function(n,t){if(n&1){let m=C();o(0,"div",2)(1,"div",3)(2,"div",4),c(3,"Part-time jobs"),a()(),o(4,"div",5)(5,"div",6)(6,"div",7)(7,"div",8)(8,"div"),c(9),o(10,"input",9),_("change",function(){return p(m),d(t.loadPartTime(!1,1))}),O("ngModelChange",function(x){return p(m),W(t.radius,x)||(t.radius=x),d(x)}),a()()(),o(11,"div",10)(12,"button",11),_("click",function(){return p(m),d(t.useDeviceLocation())}),h(13,Pe,1,1,"fa-icon",12)(14,Se,1,1,"fa-icon",13),a(),o(15,"button",14),_("click",function(){return p(m),d(t.toggleLocationSelection())}),u(16,"fa-icon",15),o(17,"span",16),c(18),a()()()(),o(19,"div",17)(20,"google-map",18,0),_("mapClick",function(x){return p(m),d(t.updatingLocation?t.adjustCenterLocation(x):null)}),h(22,Le,1,3,"map-circle",19)(23,Ee,2,0),u(24,"map-marker",20),o(25,"map-info-window"),c(26),a()()()(),o(27,"div",21)(28,"div",22)(29,"div",23)(30,"div",24),u(31,"fa-icon",25),a(),o(32,"input",26),O("ngModelChange",function(x){return p(m),W(t.search,x)||(t.search=x),d(x)}),_("keydown.enter",function(){return p(m),d(t.loadPartTime(!1,1))}),a()(),o(33,"div",27)(34,"button",28),_("click",function(){return p(m),d(t.loadPartTime(!1,1))}),o(35,"span",29),c(36,"Search"),a()(),o(37,"button",28),_("click",function(){return p(m),d(t.loadPartTime(!0,1))}),o(38,"span",29),c(39,"All"),a()()()(),o(40,"div",30),h(41,Fe,17,8,"div",31)(42,We,10,0,"div",32),a()()()(),h(43,Oe,1,2,"app-post-details",33)}n&2&&(r(9),b(" Radius (",t.radius,"m): "),r(),F("ngModel",t.radius),r(2),s("disabled",t.gettingLocation),r(),s("ngIf",t.gettingLocation),r(),s("ngIf",!t.gettingLocation),r(),s("disabled",t.gettingLocation),r(),s("icon",t.faLocationDot),r(2),P(t.updatingLocation?"Save Location":"Manual Location"),r(2),s("center",t.center)("width",t.getMapWidth())("height",t.getMapHeight())("options",t.options),r(2),s("ngIf",!t.updatingLocation&&t.with_radius),r(),k(t.updatingLocation?-1:23),r(),s("position",t.center)("options",t.centerMarkerOptions),r(2),b(" ",t.marker_title," "),r(5),s("icon",t.faSearch),r(),F("ngModel",t.search),r(2),s("disabled",t.isLoading),r(3),s("disabled",t.isLoading),r(4),s("ngForOf",t.partTimeList),r(),s("ngIf",t.partTimeList.length===0),r(),s("ngIf",t.modals["view-details"]))},dependencies:[Z,S,V,ge,he,j,xe,ie,re,ne,oe,A,ee],styles:["google-map[_ngcontent-%COMP%]{width:100%;height:100%}"]})}}return i})();var Re=[{path:"",component:be}],we=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=M({type:i})}static{this.\u0275inj=v({imports:[y.forChild(Re),y]})}}return i})();function ze(i,f){if(i&1){let e=C();o(0,"div")(1,"button",11),_("click",function(){p(e);let t=l();return d(t.closeModal())}),u(2,"fa-icon",12),c(3," Back "),a()()}if(i&2){let e=l();r(2),s("icon",e.faArrowLeft)}}function Ne(i,f){if(i&1&&u(0,"div",13),i&2){let e=l();s("innerHTML",e.htmlContent,J)}}function He(i,f){if(i&1){let e=C();o(0,"div",14)(1,"div",15),c(2),u(3,"br"),c(4," Are you sure you want to apply to this job posting? "),a(),o(5,"div",16)(6,"button",17),_("click",function(){p(e);let t=l();return d(t.toggleConfirmation())}),c(7," Cancel "),a(),o(8,"button",18),_("click",function(){p(e);let t=l();return d(t.onSubmit(!0))}),c(9," Apply "),a()()()}if(i&2){let e=l();r(2),b(" You are applying to ",e.selected_posting.title,". ")}}function Je(i,f){if(i&1){let e=C();o(0,"div",19)(1,"button",20),_("click",function(){p(e);let t=l();return d(t.onSubmit())}),u(2,"fa-icon",12),c(3," Save post "),a(),o(4,"button",18),_("click",function(){p(e);let t=l();return d(t.toggleConfirmation())}),u(5,"fa-icon",12),c(6," Apply now "),a()()}if(i&2){let e=l();r(2),s("icon",e.faSave),r(3),s("icon",e.faFileLines)}}var ye=(()=>{class i{savePost(){let e={posting_id:this.selected_posting.id};this.http.post("posting-application",e).subscribe({next:n=>{this.closeModal()},error:n=>console.log(n)})}toggleConfirmation(){this.showConfirmation=!this.showConfirmation}onSubmit(e){let n={};n.posting_id=this.selected_posting.id,e&&(n.is_applied=1),n.date_applied=R(new Date,"yyyy-MM-dd","en","Asia/manila"),this.http.post("posting-application",n).subscribe({next:()=>{this.closeModal()},error:t=>console.log(t)})}applyPost(){let e={posting_id:this.selected_posting.id,is_applied:1,date_applied:R(new Date,"yyyy-MM-dd","en","Asia/manila")};this.http.post("posting-application",e).subscribe({next:n=>{this.closeModal()},error:n=>console.log(n)})}closeModal(){this.toggleModal.emit()}constructor(e,n){this.http=e,this.sanitizer=n,this.htmlContent=null,this.toggleModal=new H,this.faSave=pe,this.faFileLines=ae,this.faArrowLeft=fe,this.showConfirmation=!1}ngOnInit(){this.htmlContent=this.sanitizer.bypassSecurityTrustHtml(this.selected_posting.description)}static{this.\u0275fac=function(n){return new(n||i)(w(D),w(te))}}static{this.\u0275cmp=T({type:i,selectors:[["app-job-details"]],inputs:{selected_posting:"selected_posting",isAuthenticated:"isAuthenticated"},outputs:{toggleModal:"toggleModal"},standalone:!0,features:[Y],decls:13,vars:5,consts:[["id","defaultModal","tabindex","-1","aria-modal","true","role","dialog",1,"overflow-y-auto","overflow-x-hidden","fixed","top-0","right-0","left-0","w-full","md:inset-0","h-modal","md:h-full","justify-center","items-center","flex",2,"z-index","60"],[1,"relative","p-4","w-full","max-w-3xl","h-auto","md:h-auto"],[1,"relative","bg-white","rounded-lg","shadow"],[1,"flex","flex-col","md:flex-row","justify-between","items-start","py-3","px-5","text-blue-600"],[4,"ngIf"],[1,"my-2","md:text-2xl","font-bold","text-gray-800"],[1,"overflow-y-auto","min-h-[300px]","max-h-[620px]","scrollbar-thin","scrollbar-thumb-gray-400","scrollbar-track-gray-100","px-5","pb-5","flex","flex-col","md:flex-row"],[3,"innerHTML",4,"ngIf"],["class","flex flex-col w-full my-auto",4,"ngIf"],["class","flex justify-center py-2 px-5 space-x-4 rounded-b border-t border-gray-200",4,"ngIf"],[1,"opacity-50","fixed","inset-0","z-50","bg-black"],[1,"mt-3",3,"click"],[3,"icon"],[3,"innerHTML"],[1,"flex","flex-col","w-full","my-auto"],[1,"flex","justify-center"],[1,"flex","justify-center","mt-5"],[1,"btn-blue","bg-gray-400","mr-3",3,"click"],[1,"btn-blue",3,"click"],[1,"flex","justify-center","py-2","px-5","space-x-4","rounded-b","border-t","border-gray-200"],[1,"btn-blue","bg-orange-500",3,"click"]],template:function(n,t){n&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),h(4,ze,4,1,"div",4),o(5,"h3",5),c(6),a(),u(7,"div"),a(),o(8,"div",6),h(9,Ne,1,1,"div",7)(10,He,10,1,"div",8),a(),h(11,Je,7,2,"div",9),a()()(),u(12,"div",10)),n&2&&(r(4),s("ngIf",!t.showConfirmation),r(2),b(" ",t.selected_posting.title," "),r(3),s("ngIf",!t.showConfirmation),r(),s("ngIf",t.showConfirmation),r(),s("ngIf",!t.showConfirmation))},dependencies:[E,V,L,S,I],styles:[".ql-indent-1[_ngcontent-%COMP%]{display:block;margin-left:20px;color:#7fffd4}"]})}}return i})();var bt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=M({type:i})}static{this.\u0275inj=v({imports:[L,we,E,Ce,y,I,ye,A]})}}return i})();export{bt as PartTimeModule};
