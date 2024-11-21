import{a as q}from"./chunk-433CJ5A5.js";import{f as M,j as A,x as j}from"./chunk-Q6K6O4DU.js";import{a as O}from"./chunk-VIMBL3MD.js";import{Ba as y,Ca as S,Da as k,E as C,Fa as I,Gb as U,Jb as z,K as p,L as m,P as w,Ua as D,Vb as W,X as s,Xa as E,Y as g,Za as P,aa as x,bc as B,ca as a,cc as N,fa as b,fb as T,ja as r,jb as V,ka as l,la as f,ma as _,na as u,nb as F,oa as o,va as c,xa as h,zb as L}from"./chunk-DRSRU523.js";function X(e,d){if(e&1){let t=_();r(0,"div")(1,"button",9),u("click",function(){p(t);let i=o();return m(i.closeModal())}),f(2,"fa-icon",10),c(3," Back "),l()()}if(e&2){let t=o();s(2),a("icon",t.faArrowLeft)}}function Y(e,d){if(e&1){let t=_();r(0,"div",15)(1,"quill-editor",16),k("ngModelChange",function(i){p(t);let v=o(2);return S(v.selected_posting.description,i)||(v.selected_posting.description=i),m(i)}),l()()}if(e&2){let t=o(2);s(),y("ngModel",t.selected_posting.description),a("modules",t.editorConfig)}}function H(e,d){if(e&1){let t=_();r(0,"div",17)(1,"div",18),c(2),f(3,"br"),c(4),l(),r(5,"div",19)(6,"button",20),u("click",function(){p(t);let i=o(2);return m(i.toggleConfirmation())}),c(7," Cancel "),l(),r(8,"button",21),u("click",function(){p(t);let i=o(2);return m(i.onSubmit(!0))}),c(9," Apply "),l()()()}if(e&2){let t=o(2);s(2),h(" You are applying to ",t.selected_posting.title,". "),s(2),h(" Are you sure you want to apply to this ",t.selected_posting.lib_posting_category_id==="1"?"job":"scholarship"," posting? ")}}function Q(e,d){if(e&1){let t=_();r(0,"div",22)(1,"div",23),f(2,"fa-icon",10)(3,"br"),l(),r(4,"div",24),c(5," Application Submitted! "),l(),r(6,"div",25),c(7," We've received your application and will be processed. Expect an update via SMS within 3-5 business days. Please check your registered email for more details upon receiving the text. Thank You! "),l(),r(8,"div",18)(9,"button",26),u("click",function(){p(t);let i=o(2);return m(i.closeModal())}),c(10," Back "),l()()()}if(e&2){let t=o(2);s(2),a("icon",t.faCircleCheck)}}function R(e,d){if(e&1&&(r(0,"div",11),x(1,Y,2,2,"div",12)(2,H,10,2,"div",13)(3,Q,11,1,"div",14),l()),e&2){let t=o();s(),a("ngIf",!t.showConfirmation&&!t.showSuccessfullApplication),s(),a("ngIf",t.showConfirmation&&!t.showSuccessfullApplication),s(),a("ngIf",t.showSuccessfullApplication&&!t.showConfirmation)}}function G(e,d){if(e&1){let t=_();r(0,"button",21),u("click",function(){p(t);let i=o(3);return m(i.toggleConfirmation())}),f(1,"fa-icon",10),c(2," Apply now "),l()}if(e&2){let t=o(3);s(),a("icon",t.faFileLines)}}function J(e,d){if(e&1&&x(0,G,3,1,"button",29),e&2){let t=o(2);a("ngIf",t.withUserEducation)}}function K(e,d){}function Z(e,d){if(e&1){let t=_();r(0,"button",31),u("click",function(){p(t);let i=o(3);return m(i.onSubmit())}),f(1,"fa-icon",10),c(2," Save post "),l()}if(e&2){let t=o(3);s(),a("icon",t.faSave)}}function $(e,d){if(e&1){let t=_();x(0,Z,3,1,"button",30),r(1,"button",21),u("click",function(){p(t);let i=o(2);return m(i.isAuthenticated?i.toggleConfirmation():i.navigateTo())}),f(2,"fa-icon",10),c(3," Apply now "),l()}if(e&2){let t=o(2);a("ngIf",t.isAuthenticated),s(2),a("icon",t.faFileLines)}}function tt(e,d){if(e&1&&(r(0,"div",27),x(1,J,1,1,"button",28)(2,K,0,0)(3,$,4,2),l()),e&2){let t=o();s(),b(t.selected_posting.applicants&&t.selected_posting.applicants.length>0&&!t.selected_posting.applicants[0].is_applied?1:t.selected_posting.applicants&&t.selected_posting.applicants.length>0&&t.selected_posting.applicants[0].is_applied===1?2:3)}}var gt=(()=>{class e{navigateTo(){this.router.navigate(["login"])}toggleConfirmation(){this.showConfirmation=!this.showConfirmation}onSubmit(t){let n={};n.posting_id=this.selected_posting.id,t&&(n.is_applied=1,n.date_applied=D(new Date,"yyyy-MM-dd","en","Asia/manila")),this.http.post("posting-application",n).subscribe({next:()=>{this.showConfirmation=!1,t&&(this.showSuccessfullApplication=!0)},error:i=>console.log(i)})}closeModal(){this.toggleModal.emit()}loadUserInformation(t){let n={user_info:1};this.http.get("user-information",{params:n}).subscribe({next:i=>{this.withUserEducation=i.data[0].user_education.length>0,this.show_form=!0},error:i=>console.log(i)})}constructor(t,n,i){this.http=t,this.sanitizer=n,this.router=i,this.toggleModal=new w,this.faSave=U,this.faFileLines=F,this.faArrowLeft=z,this.faXmark=W,this.faCircleCheck=L,this.showConfirmation=!1,this.showSuccessfullApplication=!1,this.editorConfig={toolbar:[]},this.withUserEducation=!1,this.show_form=!1}ngOnInit(){this.loadUserInformation(),this.isAuthenticated=!!localStorage.getItem("access_token"),console.log(this.selected_posting)}static{this.\u0275fac=function(n){return new(n||e)(g(O),g(T),g(V))}}static{this.\u0275cmp=C({type:e,selectors:[["app-post-details"]],inputs:{selected_posting:"selected_posting",isAuthenticated:"isAuthenticated"},outputs:{toggleModal:"toggleModal"},standalone:!0,features:[I],decls:11,vars:4,consts:[["id","defaultModal","tabindex","-1","aria-modal","true","role","dialog",1,"overflow-y-auto","overflow-x-hidden","fixed","top-0","right-0","left-0","w-full","md:inset-0","h-modal","md:h-full","justify-center","items-center","flex",2,"z-index","60"],[1,"relative","p-4","w-full","max-w-3xl","h-auto","md:h-auto"],[1,"relative","bg-white","rounded-lg","shadow"],[1,"flex","flex-col","md:flex-row","justify-between","items-start","py-3","px-5","text-blue-600"],[4,"ngIf"],[1,"my-2","md:text-2xl","font-bold","text-gray-800"],["class","overflow-y-auto min-h-[300px] max-h-[620px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 px-5 pb-5 flex flex-col md:flex-row",4,"ngIf"],["class","flex justify-center py-2 px-5 space-x-4 rounded-b border-t border-gray-200",4,"ngIf"],[1,"opacity-50","fixed","inset-0","z-50","bg-black"],[1,"mt-3",3,"click"],[3,"icon"],[1,"overflow-y-auto","min-h-[300px]","max-h-[620px]","scrollbar-thin","scrollbar-thumb-gray-400","scrollbar-track-gray-100","px-5","pb-5","flex","flex-col","md:flex-row"],["class","w-full",4,"ngIf"],["class","flex flex-col w-full my-auto",4,"ngIf"],["class","flex flex-col w-2/5 mx-auto",4,"ngIf"],[1,"w-full"],["disabled","",1,"h-96","w-full","rounded","hover:cursor-default",3,"ngModelChange","ngModel","modules"],[1,"flex","flex-col","w-full","my-auto"],[1,"flex","justify-center"],[1,"flex","justify-center","mt-5"],[1,"btn-blue","bg-gray-400","mr-3",3,"click"],[1,"btn-blue",3,"click"],[1,"flex","flex-col","w-2/5","mx-auto"],[1,"flex","justify-center","text-blue-500","text-4xl"],[1,"flex","justify-center","text-xl","text-blue-600","font-semibold"],[1,"flex","justify-center","text-justify","text-sm","my-5"],[1,"btn-blue-nr","w-full",3,"click"],[1,"flex","justify-center","py-2","px-5","space-x-4","rounded-b","border-t","border-gray-200"],[1,"btn-blue"],["class","btn-blue",3,"click",4,"ngIf"],["class","btn-blue bg-orange-500",3,"click",4,"ngIf"],[1,"btn-blue","bg-orange-500",3,"click"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),x(4,X,4,1,"div",4),r(5,"h3",5),c(6),l(),f(7,"div"),l(),x(8,R,4,3,"div",6)(9,tt,4,1,"div",7),l()()(),f(10,"div",8)),n&2&&(s(4),a("ngIf",!i.showConfirmation),s(2),h(" ",i.selected_posting.title," "),s(2),a("ngIf",i.show_form),s(),a("ngIf",i.show_form&&!i.showConfirmation&&!i.showSuccessfullApplication))},dependencies:[P,E,j,M,A,N,B,q]})}}return e})();export{gt as a};