import{a as W}from"./chunk-H4D7RIYB.js";import{a as xe,b as Ce,c as D,d as j,e as we}from"./chunk-AK2PK4S4.js";import"./chunk-EBK7TJOP.js";import"./chunk-CH35XRDS.js";import{c as oe,f as re,j as ae,m as se,x as L}from"./chunk-75IZLKSV.js";import{a as E}from"./chunk-WZ454HCT.js";import{A as v,Ab as me,Ba as z,Bb as pe,Ca as N,Da as H,E as T,Eb as de,F as k,Fa as X,Gb as fe,Hb as ue,Jb as _e,K as p,Ka as Z,L as d,La as ee,P as B,Tb as ge,Ua as J,Ub as he,V as G,Wa as te,X as r,Xa as P,Y as b,Ya as ie,Za as S,aa as h,ca as s,cc as I,dc as V,fa as M,fb as ne,ha as $,ia as U,ja as o,ka as a,la as f,ma as C,mb as y,na as g,nb as le,oa as c,ob as ce,ra as F,sa as A,ta as R,ua as Y,va as m,wa as O,xa as w,ya as K}from"./chunk-QPUKBYNP.js";import"./chunk-GAL4ENT6.js";var Pe=(i,u)=>u.position.position;function Se(i,u){if(i&1&&f(0,"fa-icon",34),i&2){let e=c();s("icon",e.faCircleNotch)}}function Le(i,u){if(i&1&&f(0,"fa-icon",25),i&2){let e=c();s("icon",e.faLocationCrosshairs)}}function Ie(i,u){if(i&1&&f(0,"map-circle",35),i&2){let e=c();s("center",e.center)("radius",e.radius)("options",e.circleOptions)}}function Ve(i,u){if(i&1){let e=C();o(0,"map-marker",37,1),g("mapClick",function(){p(e);let t=Y(1),l=c().$implicit,_=c(2);return d(_.openInfoWindow(t,l.title))}),a()}if(i&2){let e=c().$implicit,n=c(2);s("position",e.position.position)("options",n.markerOptions)}}function Ee(i,u){if(i&1&&h(0,Ve,2,2,"map-marker",36),i&2){let e=u.$implicit,n=c(2);s("ngIf",n.with_radius?n.isMarkerWithinRadius(e.position.position):!0)}}function De(i,u){if(i&1&&$(0,Ee,1,1,"map-marker",20,Pe),i&2){let e=c();U(e.markerPositions)}}function je(i,u){if(i&1&&(o(0,"span",47),f(1,"fa-icon",25),m(2," Applied "),a()),i&2){let e=c(3);r(),s("icon",e.faCheckCircle)}}function We(i,u){if(i&1&&(o(0,"span",48),f(1,"fa-icon",25),m(2," Post saved "),a()),i&2){let e=c(3);r(),s("icon",e.faCheckCircle)}}function Fe(i,u){if(i&1&&h(0,je,3,1,"span",47)(1,We,3,1,"span",48),i&2){let e=c().$implicit;M(e.applicants[0].is_applied?0:1)}}function Ae(i,u){if(i&1){let e=C();o(0,"div",38)(1,"span",39)(2,"div")(3,"span",40),m(4,"Date published:"),a(),m(5),Z(6,"date"),a(),o(7,"div"),h(8,Fe,2,1),a()(),o(9,"span",41),m(10),a(),o(11,"span",42),m(12),a(),o(13,"div",43)(14,"button",44),g("click",function(){let t=p(e).$implicit,l=c();return d(l.openWindowFromDetails(t.latitude,t.longitude,t.title))}),f(15,"fa-icon",45),m(16," location "),a(),o(17,"button",46),g("click",function(){let t=p(e).$implicit,l=c();return d(l.toggleModal("view-details",t))}),m(18," view details "),f(19,"fa-icon",25),a()()()}if(i&2){let e=u.$implicit,n=c();r(5),w(" ",ee(6,7,e.date_published,"MMM dd, yyyy")," "),r(3),M(e.applicants&&e.applicants.length>0?8:-1),r(2),O(e.title),r(2),K("Slots: ",e.posting_applications_count,"/",e.slot,""),r(3),s("icon",n.faLocationDot),r(4),s("icon",n.faArrowRight)}}function Re(i,u){if(i&1){let e=C();o(0,"div",49)(1,"div",50),f(2,"img",51),a(),o(3,"div",52)(4,"span",53),m(5,"No scanned Part-time Job Posts"),a(),o(6,"div",54),m(7,"Scanned part-time job posting show up here"),a(),o(8,"button",55),g("click",function(){p(e);let t=c();return d(t.loadPartTime(!0,1))}),m(9," VIEW ALL POSTING "),a()()()}}function Oe(i,u){if(i&1){let e=C();o(0,"app-post-details",56),g("toggleModal",function(){p(e);let t=c();return d(t.toggleModal("view-details"))}),a()}if(i&2){let e=c();s("selected_posting",e.selected_posting)("isAuthenticated",e.isAuthenticated)}}var be=(()=>{class i{addMarker(){this.markerPositions=[],Object.entries(this.partTimeList).length>0&&Object.entries(this.partTimeList).forEach(([e,n],t)=>{let l={position:{lat:n.latitude,lng:n.longitude},visible:!1};this.markerPositions.push({title:n.title,position:l})})}openInfoWindow(e,n){this.marker_title=n,this.infoWindow&&this.infoWindow.open(e)}openWindowFromDetails(e,n,t){let l=this.markerPositions.findIndex(_=>_.position.position.lat===e&&_.position.position.lng===n);l!==-1&&(this.marker_title=t,this.infoWindow&&this.infoWindow.open(this.markerRefs.get(l)))}loadPartTime(e,n){this.isLoading=!0;let t={};t.page=n??1,t.per_page="all",t.lib_posting_category_id=1,t.is_published="published",e===!1?(this.with_radius=!0,t.radius=this.radius,t.lat=this.center.lat,t.lng=this.center.lng):(this.with_radius=!1,this.search=null),this.search&&(t.search=this.search);let l;localStorage.getItem("access_token")?l="posting-information":l="public-info",this.http.get(l,{params:t}).subscribe({next:_=>{this.partTimeList=_.data,this.addMarker(),this.isLoading=!1},error:_=>console.log(_)})}toggleModal(e,n){this.selected_posting=n,this.modals[e]=!this.modals[e],this.modals[e]||this.loadPartTime(!1)}getDistanceFromCenter(e){let t=this.degreesToRadians(e.lat-this.center.lat),l=this.degreesToRadians(e.lng-this.center.lng),_=this.degreesToRadians(this.center.lat),x=this.degreesToRadians(e.lat),q=Math.sin(t/2)*Math.sin(t/2)+Math.sin(l/2)*Math.sin(l/2)*Math.cos(_)*Math.cos(x);return 6371e3*(2*Math.atan2(Math.sqrt(q),Math.sqrt(1-q)))}degreesToRadians(e){return e*(Math.PI/180)}isMarkerWithinRadius(e){return this.getDistanceFromCenter(e)<=this.radius}updateMarkers(){this.markerPositions.forEach(e=>{e.visible=this.isMarkerWithinRadius(e.position)})}useDeviceLocation(){this.gettingLocation=!0,navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{this.center={lat:e.coords.latitude,lng:e.coords.longitude},this.zoom=14,this.loadPartTime(!1,1),this.gettingLocation=!1},e=>{console.error("Error obtaining location",e),alert("Unable to retrieve location. Please check permissions.")}):alert("Geolocation is not supported by this browser.")}toggleLocationSelection(){this.updatingLocation=!this.updatingLocation,this.loadPartTime(!1,1)}getMapWidth(){let e=this.screenWidth;return e>=768&&(e=this.screenWidth/5*2.73),e-40+"px"}getMapHeight(){return this.screenHeight*.73+"px"}getMapHeightStr(){return"h-"+this.screenHeight*.73+"px"}adjustCenterLocation(e){e?.latLng&&(this.center=e?.latLng?.toJSON())}constructor(e){this.http=e,this.faLocationCrosshairs=ue,this.faCircleNotch=ce,this.faArrowRight=de,this.faSearch=he,this.faFilter=pe,this.faCheckCircle=me,this.faLocationDot=ge,this.partTimeList=[],this.modals=[],this.isLoading=!1,this.isAuthenticated=!1,this.options={mapId:"DEMO_MAP_ID",zoom:14,fullscreenControl:!1,draggableCursor:"default",draggingCursor:"grab"},this.center={lat:15.475578308105469,lng:120.59635162353516},this.zoom=14,this.radius=1500,this.circleOptions={fillColor:"blue",fillOpacity:.2,strokeColor:"blue",strokeOpacity:.5,strokeWeight:2,clickable:!1},this.markerOptions={draggable:!1},this.centerMarkerOptions={draggable:!1,icon:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"},this.markerPositions=[],this.with_radius=!0,this.gettingLocation=!1,this.updatingLocation=!1,this.screenWidth=window.innerWidth,this.screenHeight=window.innerHeight}ngOnInit(){this.loadPartTime(!1,1)}static{this.\u0275fac=function(n){return new(n||i)(b(E))}}static{this.\u0275cmp=T({type:i,selectors:[["app-part-time"]],viewQuery:function(n,t){if(n&1&&(F(D,5),F(j,5)),n&2){let l;A(l=R())&&(t.infoWindow=l.first),A(l=R())&&(t.markerRefs=l)}},decls:44,vars:24,consts:[["map",""],["markerRefs","mapMarker"],[1,"flex","flex-col","mt-5","mx-5","md:mx-20"],[1,"flex","flex-col","md:flex-row","justify-between"],[1,"font-semibold","text-2xl","text-blue-600","block","basis-1/2"],[1,"flex","flex-col","md:flex-row","mt-5"],[1,"h-4/5","flex","flex-col","w-full","md:w-3/5","mr-0","md:mr-5","mt-5","md:mt-0","mb-5"],[1,"flex","justify-between","my-1"],[1,"flex","flex-col"],["type","range","min","500","max","5000","id","myRange",1,"ml-2","slider",3,"change","ngModelChange","ngModel"],[1,"w-1/2","flex","justify-end"],[1,"text-white","bg-blue-600","rounded-md","py-1","px-3","md:px-2","disabled:bg-gray-300",3,"click","disabled"],["animation","spin",3,"icon",4,"ngIf"],[3,"icon",4,"ngIf"],[1,"bg-orange-500","text-white","px-4","md:px-2","py-1.5","text-sm","rounded-md","ml-2","disabled:bg-gray-300",3,"click","disabled"],[1,"block","md:hidden",3,"icon"],[1,"hidden","md:block","md:ml-2"],[1,"overflow-y-auto"],[3,"mapClick","center","width","height","options"],[3,"center","radius","options",4,"ngIf"],[3,"position","options"],[1,"h-4/5","md:w-2/5","mt-5","md:mt-0"],[1,"flex","flex-row","justify-between","text-base","w-full","my-3","md:mt-0"],[1,"w-8/12","flex","item-start"],[1,"input-txt","rounded-l-md","rounded-r-none","border-r-0","w-8","p-1","pl-2"],[3,"icon"],["type","text","placeholder","Search part-time jobs",1,"input-txt","placeholder:italic","rounded-md","rounded-l-none","border-l-0",3,"ngModelChange","keydown.enter","ngModel"],[1,"flex","item-start","text-xs"],[1,"px-3","btn-blue-nr","ml-3",3,"click","disabled"],[1,"md:pl-1"],[1,"overflow-y-auto","max-h-[650px]"],["class","flex flex-col md:mr-3 mt-3 p-5 border border-gray-300 shadow-md rounded-lg ",4,"ngFor","ngForOf"],["class","flex flex-col w-full",4,"ngIf"],[3,"selected_posting","isAuthenticated","toggleModal",4,"ngIf"],["animation","spin",3,"icon"],[3,"center","radius","options"],[3,"position","options","mapClick",4,"ngIf"],[3,"mapClick","position","options"],[1,"flex","flex-col","md:mr-3","mt-3","p-5","border","border-gray-300","shadow-md","rounded-lg"],[1,"text-gray-500","text-xs","flex","justify-between"],[1,"italic"],[1,"text-xl","font-semibold"],[1,"text-gray-500","text-sm"],[1,"flex","justify-center","mt-3","text-xs"],[1,"btn-blue","bg-orange-500","rounded-r-none",3,"click"],[1,"pr-1",3,"icon"],[1,"btn-blue","rounded-l-none",3,"click"],[1,"text-xs","bg-green-500","text-white","py-1","px-2","rounded-full","select-none"],[1,"text-xs","bg-blue-500","text-white","py-1","px-2","rounded-full","select-none"],[1,"flex","flex-col","w-full"],[1,"flex","justify-center"],["src","../assets/img/no-recent.png",1,"h-18"],[1,"flex","flex-col","justify-center","mb-5","w-3/5","mx-auto","text-center"],[1,"font-semibold"],[1,"mt-3","text-sm"],[1,"text-blue-600","font-semibold","mt-3",3,"click"],[3,"toggleModal","selected_posting","isAuthenticated"]],template:function(n,t){if(n&1){let l=C();o(0,"div",2)(1,"div",3)(2,"div",4),m(3,"Part-time jobs"),a()(),o(4,"div",5)(5,"div",6)(6,"div",7)(7,"div",8)(8,"div"),m(9),o(10,"input",9),g("change",function(){return p(l),d(t.loadPartTime(!1,1))}),H("ngModelChange",function(x){return p(l),N(t.radius,x)||(t.radius=x),d(x)}),a()()(),o(11,"div",10)(12,"button",11),g("click",function(){return p(l),d(t.useDeviceLocation())}),h(13,Se,1,1,"fa-icon",12)(14,Le,1,1,"fa-icon",13),a(),o(15,"button",14),g("click",function(){return p(l),d(t.toggleLocationSelection())}),f(16,"fa-icon",15),o(17,"span",16),m(18),a()()()(),o(19,"div",17)(20,"google-map",18,0),g("mapClick",function(x){return p(l),d(t.updatingLocation?t.adjustCenterLocation(x):null)}),h(22,Ie,1,3,"map-circle",19)(23,De,2,0),f(24,"map-marker",20),o(25,"map-info-window"),m(26),a()()()(),o(27,"div",21)(28,"div",22)(29,"div",23)(30,"div",24),f(31,"fa-icon",25),a(),o(32,"input",26),H("ngModelChange",function(x){return p(l),N(t.search,x)||(t.search=x),d(x)}),g("keydown.enter",function(){return p(l),d(t.loadPartTime(!1,1))}),a()(),o(33,"div",27)(34,"button",28),g("click",function(){return p(l),d(t.loadPartTime(!1,1))}),o(35,"span",29),m(36,"Search"),a()(),o(37,"button",28),g("click",function(){return p(l),d(t.loadPartTime(!0,1))}),o(38,"span",29),m(39,"All"),a()()()(),o(40,"div",30),h(41,Ae,20,10,"div",31)(42,Re,10,0,"div",32),a()()()(),h(43,Oe,1,2,"app-post-details",33)}n&2&&(r(9),w(" Radius (",t.radius,"m): "),r(),z("ngModel",t.radius),r(2),s("disabled",t.gettingLocation),r(),s("ngIf",t.gettingLocation),r(),s("ngIf",!t.gettingLocation),r(),s("disabled",t.gettingLocation),r(),s("icon",t.faLocationDot),r(2),O(t.updatingLocation?"Save Location":"Manual Location"),r(2),s("center",t.center)("width",t.getMapWidth())("height",t.getMapHeight())("options",t.options),r(2),s("ngIf",!t.updatingLocation&&t.with_radius),r(),M(t.updatingLocation?-1:23),r(),s("position",t.center)("options",t.centerMarkerOptions),r(2),w(" ",t.marker_title," "),r(5),s("icon",t.faSearch),r(),z("ngModel",t.search),r(2),s("disabled",t.isLoading),r(3),s("disabled",t.isLoading),r(4),s("ngForOf",t.partTimeList),r(),s("ngIf",t.partTimeList.length===0),r(),s("ngIf",t.modals["view-details"]))},dependencies:[te,P,I,xe,Ce,D,j,oe,se,re,ae,W,ie],styles:["google-map[_ngcontent-%COMP%]{width:100%;height:100%}"]})}}return i})();var ze=[{path:"",component:be}],ye=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=k({type:i})}static{this.\u0275inj=v({imports:[y.forChild(ze),y]})}}return i})();function Ne(i,u){if(i&1){let e=C();o(0,"div")(1,"button",11),g("click",function(){p(e);let t=c();return d(t.closeModal())}),f(2,"fa-icon",12),m(3," Back "),a()()}if(i&2){let e=c();r(2),s("icon",e.faArrowLeft)}}function He(i,u){if(i&1&&f(0,"div",13),i&2){let e=c();s("innerHTML",e.htmlContent,G)}}function Je(i,u){if(i&1){let e=C();o(0,"div",14)(1,"div",15),m(2),f(3,"br"),m(4," Are you sure you want to apply to this job posting? "),a(),o(5,"div",16)(6,"button",17),g("click",function(){p(e);let t=c();return d(t.toggleConfirmation())}),m(7," Cancel "),a(),o(8,"button",18),g("click",function(){p(e);let t=c();return d(t.onSubmit(!0))}),m(9," Apply "),a()()()}if(i&2){let e=c();r(2),w(" You are applying to ",e.selected_posting.title,". ")}}function Qe(i,u){if(i&1){let e=C();o(0,"div",19)(1,"button",20),g("click",function(){p(e);let t=c();return d(t.onSubmit())}),f(2,"fa-icon",12),m(3," Save post "),a(),o(4,"button",18),g("click",function(){p(e);let t=c();return d(t.toggleConfirmation())}),f(5,"fa-icon",12),m(6," Apply now "),a()()}if(i&2){let e=c();r(2),s("icon",e.faSave),r(3),s("icon",e.faFileLines)}}var ve=(()=>{class i{savePost(){let e={posting_id:this.selected_posting.id};this.http.post("posting-application",e).subscribe({next:n=>{this.closeModal()},error:n=>console.log(n)})}toggleConfirmation(){this.showConfirmation=!this.showConfirmation}onSubmit(e){let n={};n.posting_id=this.selected_posting.id,e&&(n.is_applied=1),n.date_applied=J(new Date,"yyyy-MM-dd","en","Asia/manila"),this.http.post("posting-application",n).subscribe({next:()=>{this.closeModal()},error:t=>console.log(t)})}applyPost(){let e={posting_id:this.selected_posting.id,is_applied:1,date_applied:J(new Date,"yyyy-MM-dd","en","Asia/manila")};this.http.post("posting-application",e).subscribe({next:n=>{this.closeModal()},error:n=>console.log(n)})}closeModal(){this.toggleModal.emit()}constructor(e,n){this.http=e,this.sanitizer=n,this.htmlContent=null,this.toggleModal=new B,this.faSave=fe,this.faFileLines=le,this.faArrowLeft=_e,this.showConfirmation=!1}ngOnInit(){console.log(this.selected_posting),this.htmlContent=this.sanitizer.bypassSecurityTrustHtml(this.selected_posting.description)}static{this.\u0275fac=function(n){return new(n||i)(b(E),b(ne))}}static{this.\u0275cmp=T({type:i,selectors:[["app-job-details"]],inputs:{selected_posting:"selected_posting",isAuthenticated:"isAuthenticated"},outputs:{toggleModal:"toggleModal"},standalone:!0,features:[X],decls:13,vars:5,consts:[["id","defaultModal","tabindex","-1","aria-modal","true","role","dialog",1,"overflow-y-auto","overflow-x-hidden","fixed","top-0","right-0","left-0","w-full","md:inset-0","h-modal","md:h-full","justify-center","items-center","flex",2,"z-index","60"],[1,"relative","p-4","w-full","max-w-3xl","h-auto","md:h-auto"],[1,"relative","bg-white","rounded-lg","shadow"],[1,"flex","flex-col","md:flex-row","justify-between","items-start","py-3","px-5","text-blue-600"],[4,"ngIf"],[1,"my-2","md:text-2xl","font-bold","text-gray-800"],[1,"overflow-y-auto","min-h-[300px]","max-h-[620px]","scrollbar-thin","scrollbar-thumb-gray-400","scrollbar-track-gray-100","px-5","pb-5","flex","flex-col","md:flex-row"],[3,"innerHTML",4,"ngIf"],["class","flex flex-col w-full my-auto",4,"ngIf"],["class","flex justify-center py-2 px-5 space-x-4 rounded-b border-t border-gray-200",4,"ngIf"],[1,"opacity-50","fixed","inset-0","z-50","bg-black"],[1,"mt-3",3,"click"],[3,"icon"],[3,"innerHTML"],[1,"flex","flex-col","w-full","my-auto"],[1,"flex","justify-center"],[1,"flex","justify-center","mt-5"],[1,"btn-blue","bg-gray-400","mr-3",3,"click"],[1,"btn-blue",3,"click"],[1,"flex","justify-center","py-2","px-5","space-x-4","rounded-b","border-t","border-gray-200"],[1,"btn-blue","bg-orange-500",3,"click"]],template:function(n,t){n&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),h(4,Ne,4,1,"div",4),o(5,"h3",5),m(6),a(),f(7,"div"),a(),o(8,"div",6),h(9,He,1,1,"div",7)(10,Je,10,1,"div",8),a(),h(11,Qe,7,2,"div",9),a()()(),f(12,"div",10)),n&2&&(r(4),s("ngIf",!t.showConfirmation),r(2),w(" ",t.selected_posting.title," "),r(3),s("ngIf",!t.showConfirmation),r(),s("ngIf",t.showConfirmation),r(),s("ngIf",!t.showConfirmation))},dependencies:[V,I,S,P,L],styles:[".ql-indent-1[_ngcontent-%COMP%]{display:block;margin-left:20px;color:#7fffd4}"]})}}return i})();var bt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=k({type:i})}static{this.\u0275inj=v({imports:[S,ye,V,we,y,L,ve,W]})}}return i})();export{bt as PartTimeModule};
