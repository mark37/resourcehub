import{a as W}from"./chunk-FHEZCTWS.js";import{A as u,E as v,F as h,Ia as I,Ib as $,K as C,L as _,Mb as B,Ob as q,Rb as z,Ta as P,Va as j,Vb as U,Wa as D,X as r,Y as g,Za as O,aa as p,bc as X,ca as c,cc as G,fa as A,gb as N,ib as L,ja as o,jb as R,ka as i,la as m,ma as y,mb as M,na as x,oa as f,p as F,qb as H,rb as E,va as a,vb as J,w as T,wa as S,wb as V,xa as b,ya as w}from"./chunk-WRVIYC7E.js";var ee=(e,s)=>({"bg-blue-500 px-2 rounded-lg text-white":e,"text-blue-500":s});function te(e,s){if(e&1){let t=y();o(0,"div",13),x("click",function(){let l=C(t).$implicit,d=f();return _(l.location===""?d.toggleMenu("menuList"):d.navigateTo(l.location))}),m(1,"fa-icon",14),a(2),i()}if(e&2){let t=s.$implicit,n=f();c("ngClass",I(3,ee,n.current_url==="/admin/"+t.location,n.modals.menuList&&t.location==="")),r(),c("icon",t.icon),r(),b(" ",t.name," ")}}function ie(e,s){if(e&1&&(o(0,"div",24)(1,"span",25)(2,"span",21),a(3),i(),a(4),i(),o(5,"span",26),a(6),i()()),e&2){let t=s.$implicit;r(3),S(t.name),r(),w(" ",t.message," ",t.program," "),r(2),b("",t.type," ")}}function ne(e,s){if(e&1&&(o(0,"div",24)(1,"span",25)(2,"span",21),a(3),i(),a(4),i(),o(5,"span",26),a(6),i()()),e&2){let t=s.$implicit;r(3),S(t.name),r(),w(" ",t.message," ",t.program," "),r(2),b("",t.type," ")}}function oe(e,s){if(e&1){let t=y();o(0,"div")(1,"div",15)(2,"div",16)(3,"div",17)(4,"div"),a(5,"Notifications"),i(),o(6,"button",18),x("click",function(){C(t);let l=f();return _(l.toggleMenu("menuList"))}),m(7,"fa-icon",19),i()(),o(8,"div",20)(9,"div",21),a(10,"High Priority"),i(),p(11,ie,7,4,"div",22),o(12,"div",23),a(13,"Other Nofications"),i(),p(14,ne,7,4,"div",22),i()()()()}if(e&2){let t=f();r(7),c("icon",t.faXmark),r(4),c("ngForOf",t.notfications),r(3),c("ngForOf",t.notfications)}}var K=(()=>{class e{navigateTo(t){t==="create-post"?this.router.navigate(["admin/dashboard"],{queryParams:{create_post:!0}}):this.router.navigate(["admin/"+t])}toggleMenu(t,n){this.modals[t]=!this.modals[t]}signOut(){this.http.signout().subscribe({next:t=>{localStorage.clear(),this.router.navigate(["/"])},error:t=>console.log(t)})}constructor(t,n,l){this.http=t,this.router=n,this.location=l,this.faXmark=U,this.faArrowLeft=$,this.faGear=B,this.faArrowRightFromBracket=H,this.faPenToSquare=E,this.menuList=[{name:"Home",location:"home",icon:q},{name:"Dashboard",location:"dashboard",icon:V},{name:"Notifications",location:"",icon:z},{name:"Create Post",location:"create-post",icon:E},{name:"Manage Users",location:"manage-user",icon:J}],this.notfications=[{name:"Juan Dela Cruz",message:"turned an application form in",program:"CHED-Tulong Dunong Program",type:"Scholarship"},{name:"Mari Makiing",message:"submitted an application form in",program:"Property Consultan Job Post",type:"Part-time Job"},{name:"Juan Dela Cruz",message:"turned an application form in",program:"CHED-Tulong Dunong Program",type:"Scholarship"},{name:"Mari Makiing",message:"submitted an application form in",program:"Property Consultan Job Post",type:"Part-time Job"}],this.modals=[],this.navigationEnd$=this.router.events.pipe(F(d=>d instanceof N),T(()=>{this.current_url=this.location.path()}))}ngOnInit(){this.current_url=this.location.path(),this.navigationEnd$.subscribe()}static{this.\u0275fac=function(n){return new(n||e)(g(W),g(R),g(P))}}static{this.\u0275cmp=v({type:e,selectors:[["app-sidenav"]],decls:20,vars:3,consts:[[1,"fixed","flex","flex-col","w-2/12","ml-1.5","h-full","select-none"],[1,"static"],[1,"static","bg-blue-600","p-3","rounded-xl","flex","flex-col","justify-center","w-full"],[1,"basis-full","flex","justify-center"],["src","../assets/img/resourcehub-logo-inv.png",1,"h-10"],[1,"flex","justify-center","text-white","pb-3"],[1,"pb-1"],[1,"flex","flex-col","mt-5","mx-5"],["class","py-3 font-semibold hover:cursor-pointer hover:opacity-60",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"absolute","bottom-10","w-full","text-center","flex","flex-col"],[1,"flex","justify-center"],[1,"py-2","mb-5","w-3/5","font-semibold","hover:cursor-pointer","hover:opacity-60","text-center","border-2","rounded-lg",3,"click"],[1,"mr-2",3,"icon"],[1,"py-3","font-semibold","hover:cursor-pointer","hover:opacity-60",3,"click","ngClass"],[1,"pr-2",3,"icon"],[1,"border-2","border-blue-400","fixed","block","w-1/4","top-56","rounded-lg","left-60","bg-white","h-3/5","z-50","overflow-y-auto"],[1,"flex","flex-col","mx-3"],[1,"text-blue-600","text-2xl","flex","justify-between","mt-5","font-semibold"],[1,"text-left","ml-3","hover:opacity-75","text-blue-600","text-base",3,"click"],[3,"icon"],[1,"flex","flex-col","mt-5"],[1,"font-semibold"],["class","border-b border-b-blue-300 pl-3 flex flex-col text-blue-500 mt-3 hover:bg-sky-100 hover:cursor-pointer rounded-md",4,"ngFor","ngForOf"],[1,"font-semibold","mt-5"],[1,"border-b","border-b-blue-300","pl-3","flex","flex-col","text-blue-500","mt-3","hover:bg-sky-100","hover:cursor-pointer","rounded-md"],[1,"text-base"],[1,"text-gray-500","text-sm"]],template:function(n,l){n&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),m(4,"img",4),i(),o(5,"span",5),a(6,"Welcome to the Admin Interface"),i(),m(7,"hr",6),i(),o(8,"div",7),p(9,te,3,6,"div",8),i(),o(10,"div",9)(11,"div",10)(12,"div",11),x("click",function(){return l.signOut()}),m(13,"fa-icon",12),a(14," Sign Out "),i()(),o(15,"div"),a(16," ResourceHub \xA9 2025 "),m(17,"br"),a(18," All rights reserved "),i()()()(),p(19,oe,15,3,"div")),n&2&&(r(9),c("ngForOf",l.menuList),r(4),c("icon",l.faArrowRightFromBracket),r(6),A(l.modals.menuList?19:-1))},dependencies:[j,D,X]})}}return e})();var Q=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=v({type:e,selectors:[["app-admin"]],decls:6,vars:0,consts:[[1,"flex","flex-row","gap-4","pt-5"],[1,"flex","basis-2/12","bg-white"],[1,"w-full"],[1,"basis-10/12","bg-gray-200","w-full"],[1,"flex","flex-col"]],template:function(n,l){n&1&&(o(0,"div",0)(1,"div",1),m(2,"app-sidenav",2),i(),o(3,"div",3)(4,"div",4),m(5,"router-outlet"),i()()())},dependencies:[L,K]})}}return e})();var ae=[{path:"",component:Q,children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"home",loadChildren:()=>import("./chunk-BGS7OEOD.js").then(e=>e.HomeModule)},{path:"manage-user",loadChildren:()=>import("./chunk-MCECUTQT.js").then(e=>e.ManageUserModule)},{path:"dashboard",loadChildren:()=>import("./chunk-RB33C53L.js").then(e=>e.DashboardModule)},{path:"communicate",loadChildren:()=>import("./chunk-DGU33RBF.js").then(e=>e.CommunicateModule)}]}],Y=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=h({type:e})}static{this.\u0275inj=u({imports:[M.forChild(ae),M]})}}return e})();var we=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=h({type:e})}static{this.\u0275inj=u({imports:[O,Y,G]})}}return e})();export{we as a};