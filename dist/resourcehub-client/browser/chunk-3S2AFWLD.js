import{a as H}from"./chunk-JD5J2SHZ.js";import{f as E,j as A,x as j}from"./chunk-WBDN5LS2.js";import{a as B}from"./chunk-FHEZCTWS.js";import{Ba as y,Ca as S,Da as k,E as h,Fa as D,Fb as L,Ib as z,K as d,L as p,P as b,Ua as M,Vb as N,X as l,Xa as I,Y as x,Za as V,aa as g,bc as W,ca as a,cc as q,fa as w,fb as T,ja as s,jb as P,ka as r,la as m,ma as f,na as u,nb as F,oa as o,va as c,xa as C}from"./chunk-WRVIYC7E.js";function O(i,_){if(i&1){let t=f();s(0,"div")(1,"button",11),u("click",function(){d(t);let e=o();return p(e.closeModal())}),m(2,"fa-icon",12),c(3," Back "),r()()}if(i&2){let t=o();l(2),a("icon",t.faArrowLeft)}}function X(i,_){if(i&1){let t=f();s(0,"div",13)(1,"quill-editor",14),k("ngModelChange",function(e){d(t);let v=o();return S(v.selected_posting.description,e)||(v.selected_posting.description=e),p(e)}),r()()}if(i&2){let t=o();l(),y("ngModel",t.selected_posting.description),a("modules",t.editorConfig)}}function Q(i,_){if(i&1){let t=f();s(0,"div",15)(1,"div",16),c(2),m(3,"br"),c(4),r(),s(5,"div",17)(6,"button",18),u("click",function(){d(t);let e=o();return p(e.toggleConfirmation())}),c(7," Cancel "),r(),s(8,"button",19),u("click",function(){d(t);let e=o();return p(e.onSubmit(!0))}),c(9," Apply "),r()()()}if(i&2){let t=o();l(2),C(" You are applying to ",t.selected_posting.title,". "),l(2),C(" Are you sure you want to apply to this ",t.selected_posting.lib_posting_category_id==="1"?"job":"scholarship"," posting? ")}}function R(i,_){if(i&1){let t=f();s(0,"button",19),u("click",function(){d(t);let e=o(2);return p(e.toggleConfirmation())}),m(1,"fa-icon",12),c(2," Apply now "),r()}if(i&2){let t=o(2);l(),a("icon",t.faFileLines)}}function Y(i,_){}function G(i,_){if(i&1){let t=f();s(0,"button",23),u("click",function(){d(t);let e=o(3);return p(e.onSubmit())}),m(1,"fa-icon",12),c(2," Save post "),r()}if(i&2){let t=o(3);l(),a("icon",t.faSave)}}function J(i,_){if(i&1){let t=f();g(0,G,3,1,"button",22),s(1,"button",19),u("click",function(){d(t);let e=o(2);return p(e.isAuthenticated?e.toggleConfirmation():e.navigateTo())}),m(2,"fa-icon",12),c(3," Apply now "),r()}if(i&2){let t=o(2);a("ngIf",t.isAuthenticated),l(2),a("icon",t.faFileLines)}}function K(i,_){if(i&1&&(s(0,"div",20),g(1,R,3,1,"button",21)(2,Y,0,0)(3,J,4,2),r()),i&2){let t=o();l(),w(t.selected_posting.applicants&&t.selected_posting.applicants.length>0&&!t.selected_posting.applicants[0].is_applied?1:t.selected_posting.applicants&&t.selected_posting.applicants.length>0&&t.selected_posting.applicants[0].is_applied===1?2:3)}}var _t=(()=>{class i{navigateTo(){this.router.navigate(["login"])}toggleConfirmation(){this.showConfirmation=!this.showConfirmation}onSubmit(t){let n={};n.posting_id=this.selected_posting.id,t&&(n.is_applied=1,n.date_applied=M(new Date,"yyyy-MM-dd","en","Asia/manila")),console.log(n),this.http.post("posting-application",n).subscribe({next:()=>this.closeModal(),error:e=>console.log(e)})}closeModal(){this.toggleModal.emit()}constructor(t,n,e){this.http=t,this.sanitizer=n,this.router=e,this.toggleModal=new b,this.faSave=L,this.faFileLines=F,this.faArrowLeft=z,this.faXmark=N,this.htmlContent=null,this.showConfirmation=!1,this.editorConfig={toolbar:[]}}ngOnInit(){console.log(this.selected_posting),this.htmlContent=this.sanitizer.bypassSecurityTrustHtml(this.selected_posting.description)}static{this.\u0275fac=function(n){return new(n||i)(x(B),x(T),x(P))}}static{this.\u0275cmp=h({type:i,selectors:[["app-post-details"]],inputs:{selected_posting:"selected_posting",isAuthenticated:"isAuthenticated"},outputs:{toggleModal:"toggleModal"},standalone:!0,features:[D],decls:13,vars:5,consts:[["id","defaultModal","tabindex","-1","aria-modal","true","role","dialog",1,"overflow-y-auto","overflow-x-hidden","fixed","top-0","right-0","left-0","w-full","md:inset-0","h-modal","md:h-full","justify-center","items-center","flex",2,"z-index","60"],[1,"relative","p-4","w-full","max-w-3xl","h-auto","md:h-auto"],[1,"relative","bg-white","rounded-lg","shadow"],[1,"flex","flex-col","md:flex-row","justify-between","items-start","py-3","px-5","text-blue-600"],[4,"ngIf"],[1,"my-2","md:text-2xl","font-bold","text-gray-800"],[1,"overflow-y-auto","min-h-[300px]","max-h-[620px]","scrollbar-thin","scrollbar-thumb-gray-400","scrollbar-track-gray-100","px-5","pb-5","flex","flex-col","md:flex-row"],["class","w-full",4,"ngIf"],["class","flex flex-col w-full my-auto",4,"ngIf"],["class","flex justify-center py-2 px-5 space-x-4 rounded-b border-t border-gray-200",4,"ngIf"],[1,"opacity-50","fixed","inset-0","z-50","bg-black"],[1,"mt-3",3,"click"],[3,"icon"],[1,"w-full"],["disabled","",1,"h-96","w-full","rounded","hover:cursor-default",3,"ngModelChange","ngModel","modules"],[1,"flex","flex-col","w-full","my-auto"],[1,"flex","justify-center"],[1,"flex","justify-center","mt-5"],[1,"btn-blue","bg-gray-400","mr-3",3,"click"],[1,"btn-blue",3,"click"],[1,"flex","justify-center","py-2","px-5","space-x-4","rounded-b","border-t","border-gray-200"],[1,"btn-blue"],["class","btn-blue bg-orange-500",3,"click",4,"ngIf"],[1,"btn-blue","bg-orange-500",3,"click"]],template:function(n,e){n&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),g(4,O,4,1,"div",4),s(5,"h3",5),c(6),r(),m(7,"div"),r(),s(8,"div",6),g(9,X,2,2,"div",7)(10,Q,10,2,"div",8),r(),g(11,K,4,1,"div",9),r()()(),m(12,"div",10)),n&2&&(l(4),a("ngIf",!e.showConfirmation),l(2),C(" ",e.selected_posting.title," "),l(3),a("ngIf",!e.showConfirmation),l(),a("ngIf",e.showConfirmation),l(),a("ngIf",!e.showConfirmation))},dependencies:[V,I,j,E,A,q,W,H]})}}return i})();export{_t as a};
