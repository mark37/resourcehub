import{a as ie}from"./chunk-OM7FV6A4.js";import{c as ne}from"./chunk-YQQQOGC2.js";import{a as oe}from"./chunk-VNPCTRMG.js";import{a as q,b as re}from"./chunk-XPFQ4BUM.js";import"./chunk-D4TQYBNJ.js";import{a as te}from"./chunk-F3BHP4ZP.js";import{c as B,e as y,f as U,g as G,h as H,i as F,k as z,n as $,o as W,u as X,w as J}from"./chunk-D4KUVVV6.js";import{$a as A,A as T,B as b,Ba as v,H as x,I as _,Ob as ee,T as s,Ta as N,U as f,Va as w,Wb as S,Xb as E,Y as g,Za as j,_ as m,_a as M,ab as R,ba as L,da as I,db as D,ea as P,eb as h,fa as n,fb as V,ga as i,gb as O,ha as a,ia as k,ja as c,jb as Q,ka as d,kb as Y,ob as K,ra as r,ta as C,zb as Z}from"./chunk-IEDQEACJ.js";import"./chunk-GAL4ENT6.js";function ge(e,p){if(e&1&&a(0,"app-error-label",22),e&2){let t=d();m("childForm",t.loginForm)("childFormName","email")}}function he(e,p){if(e&1&&a(0,"app-error-label",22),e&2){let t=d();m("childForm",t.loginForm)("childFormName","password")}}function be(e,p){if(e&1&&a(0,"fa-icon",23),e&2){let t=d();m("icon",t.faCircleNotch)}}function ve(e,p){if(e&1&&(n(0,"div",24),r(1),i()),e&2){let t=d();s(),C(" ",t.errors_message," ")}}var se=(()=>{class e{togglePassword(){this.isInputPass=!this.isInputPass}onSubmit(){this.loginForm.valid?(this.isLoading=!0,this.http.login(this.loginForm.value).subscribe({next:t=>{localStorage.setItem("access_token",t.data.token),t.data.user.is_admin?this.router.navigate(["/admin"]):this.router.navigate(["/student"]),this.isLoading=!1},error:t=>{console.log(t),this.showError=!0,this.errors_message=t.error.message,this.isLoading=!1}})):this.formSubmitted=!0}constructor(t,l,o){this.http=t,this.formBuilder=l,this.router=o,this.faCircleNotch=Q,this.faEye=Z,this.faEyeSlash=K,this.formSubmitted=!1,this.isLoading=!1,this.showError=!1,this.loginForm=new H({email:new F(null),password:new F(null)}),this.isInputPass=!0,this.loginForm=this.formBuilder.nonNullable.group({email:[null,[y.required,y.email]],password:[null,[y.required,y.minLength(6)]]})}static{this.\u0275fac=function(l){return new(l||e)(f(te),f(X),f(h))}}static{this.\u0275cmp=b({type:e,selectors:[["app-login"]],standalone:!0,features:[v],decls:33,vars:9,consts:[["aria-modal","true","role","dialog",1,"h-full","bg-gray-100","fixed","w-full","h-modal","md:h-full","justify-center","items-center","flex","flex-col",2,"z-index","60"],[1,"flex","items-start","py-3","px-5","w-full","justify-center","md:justify-between"],["src","../assets/img/resourcehub-log.png",1,"h-11"],[1,"relative","p-4","w-full","max-w-xl","h-auto"],[1,"bg-white","h-auto","p-5","md:p-16","rounded-xl","shadow-2xl"],[1,"flex","flex-col"],[1,"flex","justify-between","text-blue-600","font-semibold"],["href","/#"],[1,"flex","flex-col","p-3","md:p-10",3,"ngSubmit","formGroup"],[1,"mb-5"],["type","text","formControlName","email","placeholder","Enter your email",1,"input-txt"],[3,"childForm","childFormName",4,"ngIf"],[1,"flex"],["formControlName","password","placeholder","Enter your Password",1,"input-txt","rounded-r-none","border-r-0",3,"type"],["type","button",1,"input-txt","w-12","rounded-l-none","border-l-0",3,"click"],[3,"icon"],[1,"hover:cursor-pointer","text-blue-600","mt-1","text-xs","text-right"],["type","submit",1,"btn-blue","w-full","mt-5",3,"disabled"],["animation","spin",3,"icon",4,"ngIf"],["class","error-label m-2",4,"ngIf"],[1,"hover:cursor-pointer","ml-3","mt-5","text-xs","text-center"],["href","#/signup",1,"text-blue-600","hover:cursor-pointer"],[3,"childForm","childFormName"],["animation","spin",3,"icon"],[1,"error-label","m-2"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"div",1)(2,"div"),a(3,"img",2),i()(),n(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div"),r(9," Sign In "),i(),n(10,"a",7),r(11," x "),i()(),n(12,"form",8),c("ngSubmit",function(){return o.onSubmit()}),n(13,"div",9),a(14,"input",10),g(15,ge,1,2,"app-error-label",11),i(),n(16,"div")(17,"div",12),a(18,"input",13),n(19,"button",14),c("click",function(){return o.togglePassword()}),a(20,"fa-icon",15),i()(),g(21,he,1,2,"app-error-label",11),i(),n(22,"span",16),r(23,"Forgot password?"),i(),n(24,"div")(25,"button",17),g(26,be,1,1,"fa-icon",18),r(27),i(),g(28,ve,2,1,"div",19),i(),n(29,"span",20),r(30," Dont have and account? "),n(31,"a",21),r(32,"Register"),i()()()()()()()),l&2&&(s(12),m("formGroup",o.loginForm),s(3),m("ngIf",o.formSubmitted),s(3),m("type",o.isInputPass?"password":"text"),s(2),m("icon",o.isInputPass?o.faEye:o.faEyeSlash),s(),m("ngIf",o.formSubmitted),s(4),m("disabled",o.isLoading),s(),m("ngIf",o.isLoading),s(),C(" ",o.isLoading?"Logging in":"Login"," "),s(),m("ngIf",o.errors_message))},dependencies:[q,J,z,B,U,G,$,W,w,N,E,S]})}}return e})();var xe=(e,p)=>p.name;function _e(e,p){e&1&&a(0,"hr",30)}function Ce(e,p){if(e&1){let t=k();g(0,_e,1,0,"hr",30),n(1,"button",31),c("click",function(){let o=x(t).$implicit,u=d(2);return _(u.navigateTo(o.loc))}),r(2),i()}if(e&2){let t=p.$implicit;L(t.name==="About Us"?0:-1),s(2),C(" ",t.name," ")}}function ye(e,p){if(e&1){let t=k();n(0,"div",21)(1,"div",22)(2,"div",23)(3,"button",24),c("click",function(){x(t);let o=d();return _(o.toggleMenu("menuList"))}),a(4,"fa-icon",9),i(),n(5,"button",25),c("click",function(){x(t);let o=d();return _(o.navigateTo("login"))}),r(6," Log In "),i(),n(7,"button",26),c("click",function(){x(t);let o=d();return _(o.navigateTo("signup"))}),r(8," Sign Up "),i()(),n(9,"div",27),I(10,Ce,3,2,"button",28,xe),i()(),a(12,"div",29),i()}if(e&2){let t=d();s(4),m("icon",t.faXmark),s(6),P(t.menuList)}}var me=(()=>{class e{navigateTo(t){this.router.navigate(["/"+t])}toggleMenu(t){this.modals[t]=!this.modals[t]}constructor(t){this.router=t,this.faBars=Y,this.faXmark=ee,this.modals=[],this.menuList=[{name:"Home",loc:""},{name:"Dashboard",loc:""},{name:"Scholarships",loc:""},{name:"Part-time Jobs",loc:""},{name:"History",loc:""},{name:"About Us",loc:""},{name:"User Agreement",loc:""},{name:"Term of Use",loc:""}]}static{this.\u0275fac=function(l){return new(l||e)(f(h))}}static{this.\u0275cmp=b({type:e,selectors:[["app-landing-page"]],standalone:!0,features:[v],decls:59,vars:2,consts:[[1,"relative"],[1,"w-full","flex","justify-between","shadow-md"],[1,"my-3","ml-3","md:ml-10"],["src","../assets/img/resourcehub-log.png",1,"h-11"],[1,"mt-5","mb-3","mr-10","hidden","md:block"],[1,"mr-5","text-blue-600","font-semibold","hover:opacity-75",3,"click"],[1,"btn-blue",3,"click"],[1,"mt-5","mb-3","mr-5","md:mr-10","block","md:hidden"],[3,"click"],[3,"icon"],[1,"flex","flex-col"],["src","../assets/img/landing-page.png",1,"block"],[1,"w-full","absolute","top-0","mt-10","md:mt-60","flex","flex-col","justify-center","text-white","text-lg"],[1,"flex","justify-center","w-full","text-normal","md:text-xl"],[1,"flex","justify-center","w-full","px-5","text-3xl","md:text-6xl","text-center","font-semibold","md:font-bold"],[1,"flex","justify-between","mt-5","text-sm","md:text-normal"],[1,"flex","justify-between"],[1,"btn-blue","mr-10","text-sm","md:text-normal",3,"click"],[1,"flex","flex-col","mt-10","mx-5","md:mx-20"],[1,"text-blue-600","font-semibold"],[1,"relative","bottom-0"],[1,"show","md:hidden"],[1,"fixed","block","w-3/5","top-0","right-0","bottom-0","bg-white","h-full","z-50","border","font-semibold"],[1,"h-36","bg-slate-200","flex","flex-col"],[1,"text-right","mr-3","mt-3",3,"click"],[1,"text-right","mt-12","mr-4",3,"click"],[1,"text-right","mr-4",3,"click"],[1,"mt-5","flex","flex-col","font-normal"],[1,"text-right","mt-1","mr-4","focus:opacity-75"],[1,"opacity-50","fixed","inset-0","z-40","bg-black"],[1,"py-2"],[1,"text-right","mt-1","mr-4","focus:opacity-75",3,"click"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),a(3,"img",3),i(),n(4,"div",4)(5,"button",5),c("click",function(){return o.navigateTo("login")}),r(6,"LOGIN"),i(),n(7,"button",6),c("click",function(){return o.navigateTo("signup")}),r(8,"SIGN UP"),i()(),n(9,"div",7)(10,"button",8),c("click",function(){return o.toggleMenu("menuList")}),a(11,"fa-icon",9),i()()(),n(12,"div",10)(13,"div",0)(14,"div"),a(15,"img",11),i(),n(16,"div",12)(17,"div",13),r(18,"WELCOME TO FINANCIAL RESOURCE HUB"),i(),n(19,"div",14),r(20,"EMPOWERING STUDENTS "),a(21,"br"),r(22,"FINANCIALLY"),i()()()(),n(23,"div",15),a(24,"div"),n(25,"div",16)(26,"button",17),c("click",function(){return o.navigateTo("student/scholarship")}),r(27,"FIND SCHOLARSHIPS"),i(),n(28,"button",6),c("click",function(){return o.navigateTo("student/part-time")}),r(29,"FIND PART-TIME JOBS"),i()(),a(30,"div"),i(),n(31,"div",18)(32,"span"),r(33," Recognizing the challenges faced by college students in locating both scholarships and part-time job opportunities in one place, this research will delve into the development and implementation of an innovative online web application designed at consolidating students' access to financial aid possibilities. This integrated system offers students a streamlined approach to financial aid and employment opportunities, combining a scholarship application system with a part-time job search function, enhanced by geolocation features. By providing a comprehensive resource, the web application aims to simplify access to financial aid, reduce application barriers, and connect students with part-time job opportunities in their vicinity, thereby supporting their educational and financial stability.\xA0 "),i(),a(34,"br")(35,"br"),n(36,"span"),r(37," By facilitating access to scholarships and part-time job opportunities, the web application contributes to students' financial stability and fosters their active involvement in their studies. This integration enhances the visibility of scholarships, streamline applications, and offer students a comprehensive resource for financial aid and job opportunities. "),i(),a(38,"br")(39,"br"),n(40,"span"),r(41," For "),n(42,"span",19),r(43,"College Students"),i(),r(44,", using the web application offers several benefits. First, it can save time searching for financial aid and employment opportunities. The system simplifies the scholarship application process and connects students with part-time jobs, eliminating the need to visit and track opportunities across multiple websites. The app allows students to search for scholarships and part-time job openings based on various criteria, including managing their applications, and receiving updates. Additionally, the geolocation feature helps identify opportunities near location, ensuring a good school-work balance. "),i(),a(45,"br")(46,"br"),n(47,"span"),r(48," For the "),n(49,"span",19),r(50,"Local Government Unit"),i(),r(51,", the web application allows them to connect with a much larger number of college students, increasing their reach and making it easier to find the best candidates "),i(),a(52,"br")(53,"br"),n(54,"span"),r(55," The relevance of the website is underscored by the increasing reliance on digital platforms for accessing information and services. With college students being a tech-savvy demographic, offering them a unified whole for scholarship and job searches that aligns with their preferences for convenience and efficiency. "),i(),a(56,"br"),i(),a(57,"app-footer",20),i(),g(58,ye,13,1,"div",21)),l&2&&(s(11),m("icon",o.faBars),s(47),L(o.modals.menuList?58:-1))},dependencies:[E,S,ie],styles:[".landing-image-mobile[_ngcontent-%COMP%]{clip-path:polygon(0% 0%,100% 0%,100% 40.3%,50% 48%,0% 39.5%)}.landing-image-md[_ngcontent-%COMP%]{clip-path:polygon(0% 0%,100% 0%,100% 73.4%,48.4% 98.5%,0% 71.7%)}"]})}}return e})();var ce=[{path:"",component:me},{path:"login",component:se},{path:"signup",loadChildren:()=>import("./chunk-YCMDJDXJ.js").then(e=>e.SignupModule)},{path:"student",loadChildren:()=>import("./chunk-7THS5VFD.js").then(e=>e.StudentPageModule)},{path:"admin",loadChildren:()=>import("./chunk-5FGGWYFI.js").then(e=>oe)}];var pe=(e,p)=>{let t=T(h),l=localStorage.getItem("access_token"),o=e.url.includes("check-email"),u=e.clone({headers:e.headers.set("Accept","application/json").set("Authorization",`Bearer ${l}`),withCredentials:!o});return p(u)};var de={providers:[j(A(),M([pe])),V(ce,O()),ne({customOptions:[{import:"formats/font",whitelist:["mirza","roboto","aref","serif","sansserif","monospace"]}]}),re()]};var ue=(()=>{class e{navigateTo(t){this.router.navigate(["/"+t])}constructor(t){this.router=t,this.title="resourcehub-client"}static{this.\u0275fac=function(l){return new(l||e)(f(h))}}static{this.\u0275cmp=b({type:e,selectors:[["app-root"]],standalone:!0,features:[v],decls:2,vars:0,consts:[[1,"h-svh"]],template:function(l,o){l&1&&(n(0,"div",0),a(1,"router-outlet"),i())},dependencies:[w,D],styles:[".landing-image[_ngcontent-%COMP%]{clip-path:polygon(0% 0%,100% 0%,100% 73.4%,48.4% 98.5%,0% 71.7%)}"]})}}return e})();R(ue,de).catch(e=>console.error(e));
