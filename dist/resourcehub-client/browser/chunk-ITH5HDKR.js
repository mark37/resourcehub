import{a as h}from"./chunk-K5LJX3T7.js";import{a as B}from"./chunk-DQGUWOJX.js";import{B as I,C as g,Cb as D,Da as H,Ga as T,H as u,Ha as k,I as _,Ra as M,Sa as F,T as l,Ta as N,U as C,Ua as L,Va as j,Wb as q,Xb as z,Y as f,_ as s,eb as A,fa as r,ga as o,ha as d,hb as w,ia as v,ja as p,jb as P,ka as c,mb as U,ra as a,rb as V,sa as S,ta as b,vb as O,wa as E,wb as R,x}from"./chunk-IEDQEACJ.js";import"./chunk-GAL4ENT6.js";var J=t=>({"bg-sky-50":t});function Y(t,m){if(t&1&&(r(0,"div",27)(1,"div")(2,"button",28),a(3),o()(),r(4,"div")(5,"span",29),a(6),o(),d(7,"br"),a(8),d(9,"br"),r(10,"span",30),a(11),T(12,"date"),o()()()),t&2){let e=m.$implicit;l(3),b(" ",e.title[0]," "),l(3),S(e.title),l(2),b(" ",e.lib_posting_category_id==="1"?"Part-time Job Post":"Scholarhip Post"," "),l(3),b("Date Created: ",k(12,4,e.created_at,"MMM dd, yyyy HH:mm a"),"")}}function K(t,m){t&1&&(r(0,"div",31),a(1," No Draft Post Found "),o())}function Q(t,m){if(t&1){let e=v();r(0,"tr",32)(1,"td"),a(2),o(),r(3,"td",33)(4,"button",34),p("click",function(){let n=u(e).$implicit,y=c();return _(y.toggleModal("user-details",n))}),a(5," view details "),o()()()}if(t&2){let e=m.$implicit,i=m.odd;s("ngClass",H(5,J,i)),l(2),E("",e.last_name,", ",e.first_name," ",e.middle_name," ",e.suffix_name!=="NA"?e.suffix_name:"","")}}function X(t,m){t&1&&(r(0,"tr")(1,"td",35),a(2,"No Pending User for Verification"),o()())}function Z(t,m){if(t&1&&d(0,"fa-icon",49),t&2){let e=c(3);s("icon",e.faCircleNotch)}}function ee(t,m){if(t&1&&d(0,"fa-icon",49),t&2){let e=c(3);s("icon",e.faCircleNotch)}}function te(t,m){if(t&1){let e=v();r(0,"div",45)(1,"button",46),p("click",function(){u(e);let n=c(2);return _(n.verifyUser(!1))}),f(2,Z,1,1,"fa-icon",47),a(3," Reject "),o(),r(4,"button",48),p("click",function(){u(e);let n=c(2);return _(n.verifyUser(!0))}),f(5,ee,1,1,"fa-icon",47),a(6," Approve "),o()()}if(t&2){let e=c(2);l(),s("disabled",e.updating_user),l(),s("ngIf",e.updating_user),l(2),s("disabled",e.updating_user),l(),s("ngIf",e.updating_user)}}function ie(t,m){if(t&1){let e=v();r(0,"div",36)(1,"div",37)(2,"div",38)(3,"div",39)(4,"div")(5,"button",40),p("click",function(){u(e);let n=c();return _(n.toggleModal("user-details"))}),d(6,"fa-icon",7),a(7," Back "),o()(),r(8,"h3",41),a(9," Applicant Information "),o(),d(10,"div"),o(),r(11,"div",42),d(12,"app-user-information",43),o(),f(13,te,7,4,"div",44),o()()()}if(t&2){let e=c();l(6),s("icon",e.faArrowLeft),l(6),s("selected_user",e.selected_user),l(),s("ngIf",!e.selected_user.is_approved)}}function ne(t,m){t&1&&d(0,"div",50)}var W=(()=>{class t{loadDraftPost(){this.loading_draft_post=!0;let e={};e.per_page="all",e.is_published="unpublished",this.http.get("posting-information",{params:e}).subscribe({next:i=>{console.log(i),this.draft_posts=i.data,this.isLoading=!1},error:i=>console.log(i)})}loadList(e){this.isLoading=!0;let i={};i.per_page="all",i.user_info=1,i.is_verified="pending",this.http.get("user-information",{params:i}).subscribe({next:n=>{this.userList=n.data,this.loadDraftPost()},error:n=>console.log(n)})}toggleModal(e,i){this.selected_user=i,this.modals[e]=!this.modals[e],this.modals["user-details"]||this.loadList()}navigateTo(e){this.router.navigate([e])}verifyUser(e){this.updating_user=!0,this.selected_user.user_verified=e===!0?1:0,this.selected_user.is_active=e===!0?1:0,this.http.update("user-information/",this.selected_user.id,this.selected_user).subscribe({next:i=>{console.log(this.selected_user),this.updating_user=!1,this.toggleModal("user-details")},error:i=>console.log(i)})}constructor(e,i){this.http=e,this.router=i,this.faPenToSquare=U,this.faTableColumns=V,this.faFilter=O,this.faArrowUpRightFromSquare=R,this.faArrowLeft=D,this.faCircleNotch=P,this.userList=[],this.isLoading=!1,this.modals=[],this.updating_user=!1,this.loading_draft_post=!1}ngOnInit(){this.loadList()}static{this.\u0275fac=function(i){return new(i||t)(C(B),C(A))}}static{this.\u0275cmp=I({type:t,selectors:[["app-home"]],decls:37,vars:8,consts:[[1,"flex","flex-col","w-full","px-5","bg-gray-200","h-screen"],[1,"flex","flex-col","justify-center","h-48","w-full","text-white","bg-gradient-to-r","from-blue-600","via-blue-900","to-blue-600","rounded-b-2xl"],[1,"text-center"],[1,"text-center","text-4xl","font-semibold"],[1,"flex","justify-between","mt-5"],[1,"font-bold","text-blue-600","text-2xl"],[1,"btn-blue-nr","w-1/5",3,"click"],[3,"icon"],[1,"grid","grid-cols-2","gap-4","mt-3"],[1,"flex","flex-col"],[1,"bg-white","rounded-lg"],[1,"flex","justify-between","m-3"],[1,"font-semibold"],[1,"text-xs","text-blue-500"],[3,"click"],[1,"ml-1",3,"icon"],[1,"m-3"],["class","mb-2 pb-2 flex flex-row",4,"ngFor","ngForOf"],["class","flex justify-center italic",4,"ngIf"],[1,"flex","flex-col","bg-white","p-3","rounded-lg"],[1,"m-3","font-semibold"],[1,"flex","flex-col","w-full","select-none"],[1,"table-auto"],["class"," hover:bg-sky-100",3,"ngClass",4,"ngFor","ngForOf"],[4,"ngIf"],["id","defaultModal","tabindex","-1","class","overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 w-full md:inset-0 h-modal md:h-full justify-center items-center flex","aria-modal","true","role","dialog","style","z-index:60",4,"ngIf"],["class","opacity-50 fixed inset-0 z-50 bg-black",4,"ngIf"],[1,"mb-2","pb-2","flex","flex-row"],[1,"text-2xl","w-12","h-12","bg-gray-300","font-semibold","mt-4","mr-2","rounded-md","capitalize","opacity-75"],[1,"font-semibold","text-xl","capitalize"],[1,"italic","text-xs"],[1,"flex","justify-center","italic"],[1,"hover:bg-sky-100",3,"ngClass"],[1,"text-xs"],[1,"font-semibold","text-blue-500","opacity-75",3,"click"],["rowspan","2",1,"italic","text-sm"],["id","defaultModal","tabindex","-1","aria-modal","true","role","dialog",1,"overflow-y-auto","overflow-x-hidden","fixed","top-0","right-0","left-0","w-full","md:inset-0","h-modal","md:h-full","justify-center","items-center","flex",2,"z-index","60"],[1,"relative","p-4","w-full","max-w-3xl","h-auto","md:h-auto"],[1,"relative","bg-white","rounded-lg","shadow"],[1,"flex","justify-between","items-start","py-3","px-5","text-blue-600"],[1,"mt-3",3,"click"],[1,"my-2","text-2xl","font-bold"],[1,"overflow-y-auto","max-h-96","scrollbar-thin","scrollbar-thumb-gray-400","scrollbar-track-gray-100","p-5"],[3,"selected_user"],["class","flex justify-center py-3 px-5 space-x-4 rounded-b border-t border-gray-200",4,"ngIf"],[1,"flex","justify-center","py-3","px-5","space-x-4","rounded-b","border-t","border-gray-200"],[1,"btn-blue","bg-red-500","mr-2","w-28",3,"click","disabled"],["animation","spin",3,"icon",4,"ngIf"],[1,"btn-blue","bg-blue-500","w-28",3,"click","disabled"],["animation","spin",3,"icon"],[1,"opacity-50","fixed","inset-0","z-50","bg-black"]],template:function(i,n){i&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),a(3," WELCOME TO THE FINANCIAL RESOURCE HUB "),o(),r(4,"div",3),a(5," EMPOWERING STUDENTS "),d(6,"br"),a(7," FINANCIALLY "),o()(),r(8,"div",4)(9,"div",5),a(10," Admin Home "),o(),r(11,"button",6),p("click",function(){return n.navigateTo("admin/dashboard")}),d(12,"fa-icon",7),a(13," Create Post "),o()(),r(14,"div",8)(15,"div",9)(16,"div",10)(17,"div",11)(18,"div",12),a(19,"Draft Posts"),o(),r(20,"div",13)(21,"button",14),p("click",function(){return n.navigateTo("admin/dashboard")}),a(22," See all "),d(23,"fa-icon",15),o()()(),r(24,"div",16),f(25,Y,13,7,"div",17)(26,K,2,0,"div",18),o()()(),r(27,"div",19)(28,"div",20),a(29," Pending Accounts "),o(),r(30,"div",21)(31,"table",22)(32,"tbody"),f(33,Q,6,7,"tr",23)(34,X,3,0,"tr",24),o()()()()()(),f(35,ie,14,3,"div",25)(36,ne,1,0,"div",26)),i&2&&(l(12),s("icon",n.faPenToSquare),l(11),s("icon",n.faArrowUpRightFromSquare),l(2),s("ngForOf",n.draft_posts),l(),s("ngIf",(n.draft_posts==null?null:n.draft_posts.length)===0),l(7),s("ngForOf",n.userList),l(),s("ngIf",(n.userList==null?null:n.userList.length)===0),l(),s("ngIf",n.modals["user-details"]),l(),s("ngIf",n.modals["user-details"]))},dependencies:[M,F,N,q,h,L],styles:["td[_ngcontent-%COMP%]{padding:5px;text-align:center}"]})}}return t})();var oe=[{path:"",component:W}],G=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=g({type:t})}static{this.\u0275inj=x({imports:[w.forChild(oe),w]})}}return t})();var ye=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=g({type:t})}static{this.\u0275inj=x({imports:[j,G,z,h]})}}return t})();export{ye as HomeModule};
