import{a as Z,b as ce}from"./chunk-PDWRVGJG.js";import{a as ae}from"./chunk-QCPNHBTQ.js";import"./chunk-XOS4ZH2T.js";import{c as le}from"./chunk-X2E2UYKM.js";import{a as se}from"./chunk-2YPZSWQQ.js";import{a as me}from"./chunk-2DQQDRCS.js";import{c as $,e as b,f as J,g as X,h as P,i as E,k as q,n as W,o as Q,w as Y,y as K}from"./chunk-WBDN5LS2.js";import{a as re}from"./chunk-E4IS3X2R.js";import{D as M,E as C,Eb as ne,Fa as w,K as f,L as g,Vb as oe,X as r,Xa as A,Y as x,Za as S,aa as u,bb as D,bc as L,ca as l,cb as O,cc as I,db as B,eb as G,f as T,fa as k,g as N,ha as V,ia as j,ib as H,ja as n,jb as h,ka as i,kb as U,la as m,lb as z,ma as y,na as d,oa as c,ob as ee,pb as te,q as R,tb as ie,va as a,xa as v}from"./chunk-WRVIYC7E.js";import"./chunk-GAL4ENT6.js";function be(t,p){if(t&1&&m(0,"app-error-label",23),t&2){let e=c(2);l("childForm",e.loginForm)("childFormName","email")}}function Ce(t,p){if(t&1&&m(0,"app-error-label",23),t&2){let e=c(2);l("childForm",e.loginForm)("childFormName","password")}}function ye(t,p){if(t&1&&m(0,"fa-icon",24),t&2){let e=c(2);l("icon",e.faCircleNotch)}}function we(t,p){if(t&1&&(n(0,"div",25),a(1),i()),t&2){let e=c(2);r(),v(" ",e.errors_message," ")}}function Se(t,p){if(t&1){let e=y();n(0,"div",6)(1,"div",7)(2,"div"),a(3," Sign In "),i(),n(4,"a",8),a(5," x "),i()(),n(6,"form",9),d("ngSubmit",function(){f(e);let o=c();return g(o.onSubmit())}),n(7,"div",10),m(8,"input",11),u(9,be,1,2,"app-error-label",12),i(),n(10,"div")(11,"div",13),m(12,"input",14),n(13,"button",15),d("click",function(){f(e);let o=c();return g(o.togglePassword())}),m(14,"fa-icon",16),i()(),u(15,Ce,1,2,"app-error-label",12),i(),n(16,"button",17),d("click",function(){f(e);let o=c();return g(o.toggleForgotPass())}),a(17,"Forgot password?"),i(),n(18,"div")(19,"button",18),u(20,ye,1,1,"fa-icon",19),a(21),i(),u(22,we,2,1,"div",20),i(),n(23,"span",21),a(24," Dont have and account? "),n(25,"a",22),a(26,"Register"),i()()()()}if(t&2){let e=c();r(6),l("formGroup",e.loginForm),r(3),l("ngIf",e.formSubmitted),r(3),l("type",e.isInputPass?"password":"text"),r(2),l("icon",e.isInputPass?e.faEye:e.faEyeSlash),r(),l("ngIf",e.formSubmitted),r(4),l("disabled",e.isLoading),r(),l("ngIf",e.isLoading),r(),v(" ",e.isLoading?"Logging in":"Login"," "),r(),l("ngIf",e.errors_message)}}function Ee(t,p){t&1&&(n(0,"div",30),a(1," Reset your password "),i())}function Le(t,p){t&1&&(n(0,"div",31),a(1," To reset your password please provide us your email address and we will send you an instructions on how to reset you password. "),i())}function Ie(t,p){if(t&1&&(n(0,"div",37),a(1),i()),t&2){let e=c(3);r(),v(" ",e.reset_err_message," ")}}function Fe(t,p){if(t&1&&m(0,"fa-icon",24),t&2){let e=c(3);l("icon",e.faCircleNotch)}}function ke(t,p){if(t&1){let e=y();n(0,"form",32)(1,"div")(2,"label"),a(3,"email"),i(),m(4,"input",33),i(),u(5,Ie,2,1,"div",34),n(6,"div",35)(7,"button",36),d("click",function(){f(e);let o=c(2);return g(o.resetPassword())}),u(8,Fe,1,1,"fa-icon",19),a(9," Reset Password "),i()()()}if(t&2){let e=c(2);l("formGroup",e.emailResetForm),r(5),l("ngIf",e.reset_err_message),r(2),l("disabled",!e.emailResetForm.valid||e.resetting_pass),r(),l("ngIf",e.resetting_pass)}}function Pe(t,p){if(t&1&&(n(0,"div",38),a(1),n(2,"a",39),a(3,"Back to Login"),i()()),t&2){let e=c(2);r(),v(" ",e.reset_message," ")}}function Te(t,p){if(t&1&&(n(0,"div",6),u(1,Ee,2,0,"div",26)(2,Le,2,0,"div",27)(3,ke,10,4,"form",28)(4,Pe,4,1,"div",29),i()),t&2){let e=c();r(),l("ngIf",!e.reset_message),r(),l("ngIf",!e.reset_message),r(),l("ngIf",!e.reset_message),r(),l("ngIf",e.reset_message)}}var ue=(()=>{class t{toggleForgotPass(){this.emailResetForm.value.email||(this.emailResetForm=this.formBuilder.nonNullable.group({email:[null,[b.required,b.email]]})),this.showForgotPass=!this.showForgotPass}togglePassword(){this.isInputPass=!this.isInputPass}resetPassword(){this.resetting_pass=!0,console.log(this.emailResetForm.value),this.http.forgotPass(this.emailResetForm.value).subscribe({next:e=>{console.log(e),this.resetting_pass=!1,this.reset_message=e.status},error:e=>{console.log(e),this.resetting_pass=!1,this.reset_err_message=e.error.email}})}onSubmit(){this.loginForm.valid?(this.isLoading=!0,this.http.login(this.loginForm.value).subscribe({next:e=>{localStorage.setItem("access_token",e.data.token),e.data.user.is_admin?this.router.navigate(["/admin"]):this.router.navigate(["/student"]),this.isLoading=!1},error:e=>{console.log(e),this.showError=!0,this.errors_message=e.error.message,this.isLoading=!1}})):this.formSubmitted=!0}constructor(e,s,o){this.http=e,this.formBuilder=s,this.router=o,this.faCircleNotch=ee,this.faEye=ne,this.faEyeSlash=ie,this.formSubmitted=!1,this.isLoading=!1,this.showError=!1,this.loginForm=new P({email:new E(null),password:new E(null)}),this.emailResetForm=new P({email:new E(null)}),this.showForgotPass=!1,this.isInputPass=!0,this.reset_message=null,this.reset_err_message=null,this.resetting_pass=!1,this.loginForm=this.formBuilder.nonNullable.group({email:[null,[b.required,b.email]],password:[null,[b.required,b.minLength(6)]]})}static{this.\u0275fac=function(s){return new(s||t)(x(re),x(Y),x(h))}}static{this.\u0275cmp=C({type:t,selectors:[["app-login"]],standalone:!0,features:[w],decls:8,vars:2,consts:[["aria-modal","true","role","dialog",1,"h-full","bg-gray-100","fixed","w-full","h-modal","md:h-full","justify-center","items-center","flex","flex-col",2,"z-index","60"],[1,"flex","items-start","py-3","px-5","w-full","justify-center","md:justify-between"],["src","../assets/img/resourcehub-log.png",1,"h-11"],[1,"relative","p-4","w-full","max-w-xl","h-auto"],[1,"bg-white","h-auto","p-5","md:p-16","rounded-xl","shadow-2xl"],["class","flex flex-col",4,"ngIf"],[1,"flex","flex-col"],[1,"flex","justify-between","text-blue-600","font-semibold"],["href","/#"],[1,"flex","flex-col","p-3","md:p-10",3,"ngSubmit","formGroup"],[1,"mb-5"],["type","text","formControlName","email","placeholder","Enter your email",1,"input-txt"],[3,"childForm","childFormName",4,"ngIf"],[1,"flex"],["formControlName","password","placeholder","Enter your Password",1,"input-txt","rounded-r-none","border-r-0",3,"type"],["type","button",1,"input-txt","w-12","rounded-l-none","border-l-0",3,"click"],[3,"icon"],["type","button",1,"hover:cursor-pointer","text-blue-600","mt-1","text-xs","text-right",3,"click"],["type","submit",1,"btn-blue","w-full","mt-5",3,"disabled"],["animation","spin",3,"icon",4,"ngIf"],["class","error-label m-2",4,"ngIf"],[1,"hover:cursor-pointer","ml-3","mt-5","text-xs","text-center"],["href","#/signup",1,"text-blue-600","hover:cursor-pointer"],[3,"childForm","childFormName"],["animation","spin",3,"icon"],[1,"error-label","m-2"],["class","font-semibold text-xl mb-8 text-center",4,"ngIf"],["class","text-sm mb-3",4,"ngIf"],[3,"formGroup",4,"ngIf"],["class","flex flex-col text-center",4,"ngIf"],[1,"font-semibold","text-xl","mb-8","text-center"],[1,"text-sm","mb-3"],[3,"formGroup"],["type","text","formControlName","email",1,"input-txt"],["class","italic text-xs text-red-500",4,"ngIf"],[1,"flex","justify-end","mt-3"],[1,"btn-blue-nr","px-5",3,"click","disabled"],[1,"italic","text-xs","text-red-500"],[1,"flex","flex-col","text-center"],["href","/",1,"bg-blue-500","px-5","py-1","rounded-md","text-white","mt-3"]],template:function(s,o){s&1&&(n(0,"div",0)(1,"div",1)(2,"div"),m(3,"img",2),i()(),n(4,"div",3)(5,"div",4),u(6,Se,27,9,"div",5)(7,Te,5,4,"div",5),i()()()),s&2&&(r(6),l("ngIf",!o.showForgotPass),r(),l("ngIf",o.showForgotPass))},dependencies:[Z,K,q,$,J,X,W,Q,S,A,I,L]})}}return t})();var Ne=(t,p)=>p.name;function Re(t,p){t&1&&m(0,"hr",30)}function Me(t,p){if(t&1){let e=y();u(0,Re,1,0,"hr",30),n(1,"button",31),d("click",function(){let o=f(e).$implicit,_=c(2);return g(_.navigateTo(o.loc))}),a(2),i()}if(t&2){let e=p.$implicit;k(e.name==="About Us"?0:-1),r(2),v(" ",e.name," ")}}function Ve(t,p){if(t&1){let e=y();n(0,"div",21)(1,"div",22)(2,"div",23)(3,"button",24),d("click",function(){f(e);let o=c();return g(o.toggleMenu("menuList"))}),m(4,"fa-icon",9),i(),n(5,"button",25),d("click",function(){f(e);let o=c();return g(o.navigateTo("login"))}),a(6," Log In "),i(),n(7,"button",26),d("click",function(){f(e);let o=c();return g(o.navigateTo("signup"))}),a(8," Sign Up "),i()(),n(9,"div",27),V(10,Me,3,2,"button",28,Ne),i()(),m(12,"div",29),i()}if(t&2){let e=c();r(4),l("icon",e.faXmark),r(6),j(e.menuList)}}var fe=(()=>{class t{navigateTo(e){this.router.navigate(["/"+e])}toggleMenu(e){this.modals[e]=!this.modals[e]}constructor(e){this.router=e,this.faBars=te,this.faXmark=oe,this.modals=[],this.menuList=[{name:"Home",loc:""},{name:"Dashboard",loc:""},{name:"Scholarships",loc:""},{name:"Part-time Jobs",loc:""},{name:"History",loc:""},{name:"About Us",loc:""},{name:"User Agreement",loc:""},{name:"Term of Use",loc:""}]}static{this.\u0275fac=function(s){return new(s||t)(x(h))}}static{this.\u0275cmp=C({type:t,selectors:[["app-landing-page"]],standalone:!0,features:[w],decls:39,vars:2,consts:[[1,"relative"],[1,"w-full","flex","justify-between","shadow-md"],[1,"my-3","ml-3","md:ml-10"],["src","../assets/img/resourcehub-log.png",1,"h-11"],[1,"mt-5","mb-3","mr-10","hidden","md:block"],[1,"mr-5","text-blue-600","font-semibold","hover:opacity-75",3,"click"],[1,"btn-blue",3,"click"],[1,"mt-5","mb-3","mr-5","md:mr-10","block","md:hidden"],[3,"click"],[3,"icon"],[1,"flex","flex-col"],["src","../assets/img/landing-page.png",1,"block"],[1,"w-full","absolute","top-0","mt-10","md:mt-60","flex","flex-col","justify-center","text-white","text-lg"],[1,"flex","justify-center","w-full","text-normal","md:text-xl"],[1,"flex","justify-center","w-full","px-5","text-3xl","md:text-6xl","text-center","font-semibold","md:font-bold"],[1,"flex","justify-between","mt-5","text-sm","md:text-normal"],[1,"flex","justify-between"],[1,"btn-blue","mr-10","text-sm","md:text-normal",3,"click"],[1,"flex","flex-col","mt-10","mb-20","mx-5","md:mx-20"],[1,"text-justify"],[1,"relative","bottom-0"],[1,"show","md:hidden"],[1,"fixed","block","w-3/5","top-0","right-0","bottom-0","bg-white","h-full","z-50","border","font-semibold"],[1,"h-36","bg-slate-200","flex","flex-col"],[1,"text-right","mr-3","mt-3",3,"click"],[1,"text-right","mt-12","mr-4",3,"click"],[1,"text-right","mr-4",3,"click"],[1,"mt-5","flex","flex-col","font-normal"],[1,"text-right","mt-1","mr-4","focus:opacity-75"],[1,"opacity-50","fixed","inset-0","z-40","bg-black"],[1,"py-2"],[1,"text-right","mt-1","mr-4","focus:opacity-75",3,"click"]],template:function(s,o){s&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),m(3,"img",3),i(),n(4,"div",4)(5,"button",5),d("click",function(){return o.navigateTo("login")}),a(6,"LOGIN"),i(),n(7,"button",6),d("click",function(){return o.navigateTo("signup")}),a(8,"SIGN UP"),i()(),n(9,"div",7)(10,"button",8),d("click",function(){return o.toggleMenu("menuList")}),m(11,"fa-icon",9),i()()(),n(12,"div",10)(13,"div",0)(14,"div"),m(15,"img",11),i(),n(16,"div",12)(17,"div",13),a(18,"WELCOME TO FINANCIAL RESOURCE HUB"),i(),n(19,"div",14),a(20,"EMPOWERING STUDENTS "),m(21,"br"),a(22,"FINANCIALLY"),i()()()(),n(23,"div",15),m(24,"div"),n(25,"div",16)(26,"button",17),d("click",function(){return o.navigateTo("student/scholarship")}),a(27,"FIND SCHOLARSHIPS"),i(),n(28,"button",6),d("click",function(){return o.navigateTo("student/part-time")}),a(29,"FIND PART-TIME JOBS"),i()(),m(30,"div"),i(),n(31,"div",18)(32,"span",19),a(33," Recognizing the challenges faced by College Students in locating both Scholarship Programs and Part-time job Opportunities in one place, this web application is designed to consolidate students' access to financial aid resources. "),m(34,"br")(35,"br"),a(36," ResourceHub offers users a streamlined approach for searching and applying for financial aid and employment opportunities, combining Scholarship and Part-time job components enhanced by a Geolocation feature enabling nearby searching for employment opportunities. By facilitating access to Scholarships Programs and Part-time Jobs, ResourceHub contributes to students' financial stability and fosters their active involvement in their studies. "),i()(),m(37,"app-footer",20),i(),u(38,Ve,13,1,"div",21)),s&2&&(r(11),l("icon",o.faBars),r(27),k(o.modals.menuList?38:-1))},dependencies:[I,L,ae],styles:[".landing-image-mobile[_ngcontent-%COMP%]{clip-path:polygon(0% 0%,100% 0%,100% 40.3%,50% 48%,0% 39.5%)}.landing-image-md[_ngcontent-%COMP%]{clip-path:polygon(0% 0%,100% 0%,100% 73.4%,48.4% 98.5%,0% 71.7%)}"]})}}return t})();var ge=[{path:"",component:fe},{path:"login",component:ue},{path:"signup",loadChildren:()=>import("./chunk-5UPKS2PW.js").then(t=>t.SignupModule)},{path:"student",loadChildren:()=>import("./chunk-WRD3TQE5.js").then(t=>t.StudentPageModule)},{path:"admin",loadChildren:()=>import("./chunk-OCWZBE4K.js").then(t=>se)},{path:"reset-password",loadChildren:()=>import("./chunk-C6OFEOSO.js").then(t=>me)}];var _e=(t,p)=>{let e=M(h),s=localStorage.getItem("access_token"),o=t.url.includes("check-email"),_=t.clone({headers:t.headers.set("Accept","application/json").set("Authorization",`Bearer ${s}`),withCredentials:!o});return p(_).pipe(R(F=>F.status===401?(e.navigate(["/"]),T(F)):N(()=>F)))};var xe={providers:[D(B(),O([_e])),U(ge,z()),le({customOptions:[{import:"formats/font",whitelist:["mirza","roboto","aref","serif","sansserif","monospace"]}]}),ce()]};var he=(()=>{class t{navigateTo(e){this.router.navigate(["/"+e])}constructor(e){this.router=e,this.title="resourcehub-client"}static{this.\u0275fac=function(s){return new(s||t)(x(h))}}static{this.\u0275cmp=C({type:t,selectors:[["app-root"]],standalone:!0,features:[w],decls:2,vars:0,consts:[[1,"h-svh"]],template:function(s,o){s&1&&(n(0,"div",0),m(1,"router-outlet"),i())},dependencies:[S,H],styles:[".landing-image[_ngcontent-%COMP%]{clip-path:polygon(0% 0%,100% 0%,100% 73.4%,48.4% 98.5%,0% 71.7%)}"]})}}return t})();G(he,xe).catch(t=>console.error(t));
