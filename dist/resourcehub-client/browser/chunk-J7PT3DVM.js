import{a as pe,b as _e,c as he,d as R}from"./chunk-TZ5NYXRZ.js";import{a as B}from"./chunk-VAB7MJUI.js";import{a as X}from"./chunk-F3BHP4ZP.js";import{b as Z,c as $,f as N,j as P,p as ee,q as te,r as ie,v as L}from"./chunk-D4KUVVV6.js";import{B as E,Ba as J,C as T,Cb as ce,Fa as V,Gb as me,H as f,I as u,Qa as G,Ra as K,Sa as Q,Sb as W,T as o,Ta as A,U as k,Ub as de,Va as F,Wb as D,Xb as O,Y as _,_ as s,ba as b,fa as r,ga as a,ha as p,hb as q,ia as v,ja as x,jb as j,ka as d,mb as ne,ra as l,rb as oe,sa as U,ta as M,tb as ae,ua as I,vb as re,wa as z,x as S,xa as h,xb as se,ya as C,yb as le,za as y}from"./chunk-IEDQEACJ.js";import{f as ve}from"./chunk-GAL4ENT6.js";var fe=ve(he());function Me(t,m){if(t&1&&p(0,"fa-icon",10),t&2){let e=d();s("icon",e.faCircleNotch)}}function Se(t,m){if(t&1&&p(0,"fa-icon",11),t&2){let e=d();s("icon",e.faPaperPlane)}}var Y=(()=>{class t{sendSMS(){if(this.message&&this.message!==""){this.is_saving=!0;let e={message:this.message,contact_number:this.selected_user.contact_number};this.http.post("send-sms",e).subscribe({next:n=>{console.log(n),this.is_saving=!1},error:n=>console.log(n)})}}getSegmentCount(e){return Math.ceil(e/160)}constructor(e){this.http=e,this.faPaperPlane=W,this.faCircleNotch=j,this.is_saving=!1}ngOnInit(){console.log(this.selected_user)}static{this.\u0275fac=function(n){return new(n||t)(k(X))}}static{this.\u0275cmp=E({type:t,selectors:[["app-messaging-sms"]],inputs:{selected_user:"selected_user"},standalone:!0,features:[J],decls:16,vars:6,consts:[[1,"p-3","bg-white"],[1,"flex","justify-center"],[1,"flex","flex-col","w-3/5","shadow-md","p-3","rounded-md","border","border-gray-300","my-5","bg-slate-50"],["rows","4",1,"input-txt",3,"ngModelChange","ngModel"],[1,"flex","justify-end","mb-5"],[1,"pb-5"],[1,"flex","justify-end"],[1,"btn-blue",3,"click","disabled"],["animation","spin","class","mr-1",3,"icon",4,"ngIf"],["class","mr-1",3,"icon",4,"ngIf"],["animation","spin",1,"mr-1",3,"icon"],[1,"mr-1",3,"icon"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div")(5,"label"),l(6,"Message Content"),a(),r(7,"textarea",3),y("ngModelChange",function(w){return C(i.message,w)||(i.message=w),w}),a()(),r(8,"div",4),l(9),a()(),r(10,"div",5)(11,"div",6)(12,"button",7),x("click",function(){return i.sendSMS()}),_(13,Me,1,1,"fa-icon",8)(14,Se,1,1,"fa-icon",9),l(15," Send "),a()()()()()()),n&2&&(o(7),h("ngModel",i.message),o(2),I(" ",i.message?i.message.length:0,"/",i.message?i.getSegmentCount(i.message.length):1," "),o(3),s("disabled",i.is_saving||!i.message&&i.message!==""),o(),s("ngIf",i.is_saving),o(),s("ngIf",!i.is_saving))},dependencies:[L,$,N,P,F,A,O,D]})}}return t})();var Te=(t,m,e)=>({"bg-orange-100 hover:bg-orange-200":t,"bg-red-200 hover:bg-red-300":m,"hover:bg-sky-100":e}),ue=(t,m,e)=>({"bg-orange-500":t,"bg-green-500":m,"bg-red-500":e});function ke(t,m){if(t&1){let e=v();r(0,"span",13)(1,"button",14),x("click",function(){f(e);let i=d();return u(i.toggleModal("closeAll"))}),p(2,"fa-icon",15),a()()}if(t&2){let e=d();o(2),s("icon",e.faArrowLeft)}}function Ue(t,m){if(t&1){let e=v();r(0,"div")(1,"button",16),x("click",function(){f(e);let i=d();return u(i.getAllData())}),p(2,"fa-icon",15),a()()}if(t&2){let e=d();o(2),s("icon",e.faFileExcel)}}function Ie(t,m){if(t&1&&(r(0,"option",38),l(1),a()),t&2){let e=m.$implicit;s("value",e),o(),U(e)}}function Ve(t,m){if(t&1&&(r(0,"option",38),l(1),a()),t&2){let e=m.$implicit;s("value",e),o(),U(e)}}function Ae(t,m){if(t&1&&(r(0,"option",38),l(1),a()),t&2){let e=m.$implicit;s("value",e),o(),U(e)}}function Fe(t,m){t&1&&l(0," Unverified ")}function Ne(t,m){t&1&&l(0," Rejected ")}function Pe(t,m){t&1&&l(0," Verified ")}function Le(t,m){if(t&1){let e=v();r(0,"tr",40)(1,"td",25)(2,"button",41),x("click",function(){let i=f(e).$implicit,c=d(3);return u(c.toggleModal("user-information",i))}),r(3,"span",42),l(4),a()(),l(5),a(),r(6,"td",43),l(7),p(8,"br"),r(9,"span",44),l(10),p(11,"br"),l(12),p(13,"br"),l(14," \xA0 "),a()(),r(15,"td",45)(16,"span",46),p(17,"fa-icon",47),_(18,Fe,1,0)(19,Ne,1,0)(20,Pe,1,0),a()(),r(21,"td",45)(22,"button",48),x("click",function(){let i=f(e).$implicit,c=d(3);return u(c.toggleModal("show-sms",i))}),l(23," SMS "),p(24,"fa-icon",49),a()(),r(25,"td",45)(26,"label",50)(27,"input",51),y("ngModelChange",function(i){let c=f(e).$implicit;return C(c.is_active,i)||(c.is_active=i),u(i)}),x("click",function(){let i=f(e).$implicit,c=d(3);return u(c.toggleActive(i))}),a(),p(28,"div",52),a()()()}if(t&2){let e=m.$implicit,n=d(3);s("ngClass",V(17,Te,e.user_verified===null,e.user_verified===0,e.user_verified===1)),o(4),I("",e.first_name[0],"",e.last_name[0],""),o(),z(" ",e.first_name," ",e.middle_name," ",e.suffix_name!=="NA"?e.suffix_name:""," ",e.last_name," "),o(2),M(" ",e.school.desc," "),o(3),M(" ",e.email," "),o(2),M(" ",e.contact_number," "),o(4),s("ngClass",V(21,ue,!e.user_verified,e.user_verified===1,e.user_verified===0)),o(),s("icon",e.user_verified?e.user_verified===1?n.faCircleCheck:n.faXmarkCircle:n.faClock),o(),b(e.user_verified===null?18:-1),o(),b(e.user_verified===0?19:-1),o(),b(e.user_verified===1?20:-1),o(4),s("icon",n.faPaperPlane),o(3),h("ngModel",e.is_active)}}function je(t,m){t&1&&(r(0,"tr")(1,"td",53),l(2,"No records found..."),a()())}function We(t,m){if(t&1&&(r(0,"tbody"),_(1,Le,29,25,"tr",39)(2,je,3,0,"tr",7),a()),t&2){let e=d(2);o(),s("ngForOf",e.userList),o(),s("ngIf",e.userList.length===0)}}function De(t,m){if(t&1&&(r(0,"div",54)(1,"div",55),p(2,"fa-icon",56),a(),r(3,"div",57),l(4," Loading list... "),a()()),t&2){let e=d(2);o(2),s("icon",e.faCircleNotch)}}function Oe(t,m){if(t&1){let e=v();r(0,"app-page-controller",58),x("movePage",function(i){f(e);let c=d(2);return u(c.loadList(i))}),a()}if(t&2){let e=d(2);s("meta",e.meta)}}function Xe(t,m){if(t&1){let e=v();r(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"span",21),l(5,"Email Type"),a(),r(6,"select",22),y("ngModelChange",function(i){f(e);let c=d();return C(c.emailType,i)||(c.emailType=i),u(i)}),r(7,"option",23),l(8,"All"),a(),_(9,Ie,2,2,"option",24),a()(),r(10,"div",20)(11,"span",21),l(12,"Category"),a(),r(13,"select",22),y("ngModelChange",function(i){f(e);let c=d();return C(c.is_verified,i)||(c.is_verified=i),u(i)}),r(14,"option",23),l(15,"All"),a(),_(16,Ve,2,2,"option",24),a()(),r(17,"div",25)(18,"span",21),l(19,"Active Status"),a(),r(20,"select",22),y("ngModelChange",function(i){f(e);let c=d();return C(c.active_status,i)||(c.active_status=i),u(i)}),r(21,"option",23),l(22,"All"),a(),_(23,Ae,2,2,"option",24),a()(),r(24,"div",26)(25,"button",27),x("click",function(){f(e);let i=d();return u(i.loadList())}),p(26,"fa-icon",28),r(27,"span",29),l(28,"Apply"),a()()()()(),r(29,"div",30)(30,"table",31)(31,"thead")(32,"tr",29)(33,"th",32),l(34,"Name"),a(),r(35,"th",32),l(36,"Details"),a(),r(37,"th",33),l(38,"Status"),a(),r(39,"th",34),l(40,"Action"),a(),r(41,"th",35),l(42,"Active Status"),a()()(),_(43,We,3,2,"tbody",7),a(),_(44,De,5,1,"div",36),a(),_(45,Oe,1,1,"app-page-controller",37),a()}if(t&2){let e=d();o(6),h("ngModel",e.emailType),o(),s("ngValue",null),o(2),s("ngForOf",e.studentEmailList),o(4),h("ngModel",e.is_verified),o(),s("ngValue",null),o(2),s("ngForOf",e.category),o(4),h("ngModel",e.active_status),o(),s("ngValue",null),o(2),s("ngForOf",e.activeStatus),o(3),s("icon",e.faFilter),o(17),s("ngIf",!e.isLoading),o(),s("ngIf",e.isLoading),o(),s("ngIf",e.userList.length>0)}}function Re(t,m){if(t&1&&(r(0,"div",10)(1,"span",59),p(2,"fa-icon",15),l(3),a()()),t&2){let e=d();o(),s("ngClass",V(3,ue,e.selected_user.user_verified===null,e.selected_user.user_verified===1,e.selected_user.user_verified===0)),o(),s("icon",e.selected_user.user_verified===null?e.faClock:e.selected_user.user_verified===1?e.faCircleCheck:e.faXmarkCircle),o(),M(" ",e.selected_user.user_verified===null?"Pending":e.selected_user.user_verified===1?"Verified":"Rejected"," ")}}function Be(t,m){if(t&1&&p(0,"app-messaging-sms",60),t&2){let e=d();s("selected_user",e.selected_user)}}function Ye(t,m){if(t&1&&p(0,"app-user-information",60),t&2){let e=d();s("selected_user",e.selected_user)}}function qe(t,m){if(t&1&&p(0,"fa-icon",56),t&2){let e=d(2);s("icon",e.faCircleNotch)}}function He(t,m){if(t&1&&p(0,"fa-icon",56),t&2){let e=d(2);s("icon",e.faCircleNotch)}}function ze(t,m){if(t&1){let e=v();r(0,"div",12)(1,"button",61),x("click",function(){f(e);let i=d();return u(i.verifyUser(!1))}),_(2,qe,1,1,"fa-icon",62),l(3," Reject "),a(),r(4,"button",63),x("click",function(){f(e);let i=d();return u(i.verifyUser(!0))}),_(5,He,1,1,"fa-icon",62),l(6," Verify "),a()()}if(t&2){let e=d();o(),s("disabled",e.updating_user),o(),s("ngIf",e.updating_user),o(2),s("disabled",e.updating_user),o(),s("ngIf",e.updating_user)}}var ge=(()=>{class t{loadList(e){this.isLoading=!0;let n={};n.page=e??1,n.user_info=1,this.active_status&&(n.active_status=this.active_status),this.emailType&&(n.email_used=this.emailType),this.is_verified&&(n.is_verified=this.is_verified),this.lib_cat_id&&(n.lib_cat_id=this.lib_cat_id),this.start_date&&(n.start_date=this.start_date),this.end_date&&(n.end_date=this.end_date),console.log(n),this.http.get("user-information",{params:n}).subscribe({next:i=>{console.log(i),this.userList=i.data,this.meta=i.meta,this.isLoading=!1},error:i=>console.log(i)})}toggleActive(e){e.is_active=!e.is_active,this.http.update("user-information/",e.id,e).subscribe({next:()=>console.log("updated successfully"),error:n=>console.log(n)})}toggleModal(e,n){this.selected_user=n,e==="closeAll"?(this.modals["user-information"]=!1,this.modals["show-sms"]=!1):(console.log(this.selected_user),this.modals[e]=!this.modals[e])}verifyUser(e){this.updating_user=!0,this.selected_user.user_verified=e===!0?1:0,this.http.update("user-information/",this.selected_user.id,this.selected_user).subscribe({next:n=>{console.log(this.selected_user),this.updating_user=!1},error:n=>console.log(n)})}getAllData(){let e={};e.user_info=1,e.per_page=20,this.active_status&&(e.active_status=this.active_status),this.is_verified&&(e.is_verified=this.is_verified),this.lib_cat_id&&(e.lib_cat_id=this.lib_cat_id),this.start_date&&(e.start_date=this.start_date),this.end_date&&(e.end_date=this.end_date),this.allApplicantArray=[];let n=i=>{e.page=i,this.http.get("user-information",{params:e}).subscribe({next:c=>{console.log(c);let w=c.data.map(g=>({last_name:g.last_name,first_name:g.first_name,email:g.email,contact_number:g.contact_number,is_scholar:g.scholar_flag?"Yes":"No",is_irregular:g.irregular_flag?"Yes":"No",is_shiftee:g.shiftee_flag?"Yes":"No",is_parent_ofw:g.parents.ofw_flag?"Yes":"No",course:g.academic_program.desc,year_level:g.year_level.desc,school:g.school.desc,verified_account:g.user_verified?"Yes":"No",active_account:g.is_active?"Yes":"No"}));this.allApplicantArray.push(...w),i<c.meta.last_page?n(i+1):this.exportToExcel(this.allApplicantArray)},error:c=>console.log(c)})};n(1)}exportToExcel(e){let i={Sheets:{data:_e.json_to_sheet(e)},SheetNames:["data"]},c=pe(i,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(c,"user_list")}saveAsExcelFile(e,n){let i="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",c=new Blob([e],{type:i});(0,fe.saveAs)(c,`${n}.xlsx`)}constructor(e){this.http=e,this.faPenToSquare=ne,this.faTableColumns=oe,this.faFilter=re,this.faCircleNotch=j,this.faArrowLeft=ce,this.faCircleCheck=ae,this.faXmarkCircle=de,this.faClock=me,this.faArrowRight=le,this.faPaperPlane=W,this.faFileExcel=se,this.userList=[],this.active_status=!1,this.category=["pending","verified","rejected"],this.activeStatus=["active","inactive"],this.studentEmailList=["school","personal"],this.scholarPartTime=[{id:2,title:"Scholarship"},{id:1,title:"Part-time Jobs"}],this.max_date=G(new Date,"yyyy-MM-dd","en","Asia/manila"),this.isLoading=!1,this.modals=[],this.updating_user=!1}ngOnInit(){this.loadList()}static{this.\u0275fac=function(n){return new(n||t)(k(X))}}static{this.\u0275cmp=E({type:t,selectors:[["app-manage-user"]],decls:18,vars:7,consts:[[1,"flex","flex-col","w-full","px-5","overflow-y-auto"],[1,"flex","flex-col","mt-5","min-h-screen"],[1,"flex","justify-between"],[1,"flex","justify-between","w-full"],["class","text-blue-600",4,"ngIf"],[1,"font-semibold","text-xl"],[1,"text-sm","font-normal"],[4,"ngIf"],["class","bg-white select-none",4,"ngIf"],[1,"flex","flex-col"],[1,"flex","justify-end","bg-white","rounded-md","-mb-3","p-3"],[3,"selected_user",4,"ngIf"],[1,"flex","justify-center","bg-white","rounded-md","shadow-md","my-3","py-3","px-3","-mt-3"],[1,"text-blue-600"],[3,"click"],[3,"icon"],[1,"btn-blue-nr","bg-green-700","my-3","px-2","ml-1",3,"click"],[1,"bg-white","select-none"],[1,"bg-white","w-full"],[1,"flex","flex-row","justify-end","bg-gray-200","m-3","rounded-md","py-2","text-xs"],[1,"mr-3"],[1,"pt-2","mr-1"],[1,"input-txt","capitalize",3,"ngModelChange","ngModel"],[3,"ngValue"],[3,"value",4,"ngFor","ngForOf"],[1,""],[1,"mt-2.5"],[1,"mt-1","bg-blue-600","rounded-md","px-2","text-white","mx-2","py-1",3,"click"],[1,"mr-1",3,"icon"],[1,"text-sm"],[1,"flex","flex-col","w-full","bg-white","p-3","min-h-96"],[1,"table-auto"],[1,"w-4/12"],[1,"w-2/12"],[1,"w-1/12"],[1,"w-1/12","text-xs"],["class","flex flex-col my-20 text-lg",4,"ngIf"],[3,"meta","movePage",4,"ngIf"],[3,"value"],["class","text-sm",3,"ngClass",4,"ngFor","ngForOf"],[1,"text-sm",3,"ngClass"],[1,"mt-2","mr-3","name-icon","hover:opacity-75",3,"click"],[1,"font-medium","text-gray-900","text-sm","xl:text-lg","select-none"],[1,"text-left","text-xs"],[1,"italic"],[1,"text-center"],[1,"px-2","py-1","text-xs","rounded-full","text-white",3,"ngClass"],[1,"mr-2",3,"icon"],[1,"rounded-md","bg-gray-500","w-14","py-1","text-xs","text-white","hover:opacity-75",3,"click"],[1,"ml-1",3,"icon"],[1,"inline-flex","relative","items-center","cursor-pointer"],["type","checkbox",1,"sr-only","peer",3,"ngModelChange","click","ngModel"],[1,"w-12","h-6","bg-gray-200","peer-focus:outline-none","peer-focus:ring-4","peer-focus:ring-blue-300","rounded-full","peer","peer-checked:after:translate-x-full","peer-checked:after:border-white","after:content-['']","after:absolute","after:top-[2px]","after:left-[3px]","after:bg-white","after:border-gray-300","after:border","after:rounded-full","after:h-5","after:w-5","after:transition-all","peer-checked:bg-blue-600","disabled:opacity-7"],["colspan","4",1,"text-center","italic"],[1,"flex","flex-col","my-20","text-lg"],[1,"flex","justify-center","text-center","text-blue-500"],["animation","spin",3,"icon"],[1,"flex","justify-center"],[3,"movePage","meta"],[1,"px-3","py-1","rounded-full","text-sm","text-white","select-none",3,"ngClass"],[3,"selected_user"],[1,"btn-blue","bg-red-500","mr-3","px-10",3,"click","disabled"],["animation","spin",3,"icon",4,"ngIf"],[1,"btn-blue","px-10",3,"click","disabled"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div"),_(5,ke,3,1,"span",4),r(6,"span",5),l(7," User Accounts "),p(8,"br"),r(9,"span",6),l(10," Listing of Users, Viewing of User Information, Approving and Rejecting of Pending Accounts, Disabling of Accounts "),a()()(),_(11,Ue,3,1,"div",7),a()(),_(12,Xe,46,13,"div",8),r(13,"div",9),_(14,Re,4,7,"div",10)(15,Be,1,1,"app-messaging-sms",11)(16,Ye,1,1,"app-user-information",11)(17,ze,7,4,"div",12),a()()()),n&2&&(o(5),s("ngIf",i.modals["user-information"]||i.modals["show-sms"]),o(6),s("ngIf",!i.modals["user-information"]||!i.modals["show-sms"]),o(),s("ngIf",!i.modals["user-information"]&&!i.modals["show-sms"]),o(2),b(i.selected_user?14:-1),o(),s("ngIf",i.modals["show-sms"]),o(),s("ngIf",i.modals["user-information"]),o(),b(i.modals["user-information"]&&(i.updating_user||i.selected_user&&i.selected_user.user_verified===null)?17:-1))},dependencies:[K,Q,A,D,R,te,ie,Z,ee,N,P,B,Y],styles:["td[_ngcontent-%COMP%]{padding:0 5px}"]})}}return t})();var Je=[{path:"",component:ge}],xe=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=T({type:t})}static{this.\u0275inj=S({imports:[q.forChild(Je),q]})}}return t})();var xt=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=T({type:t})}static{this.\u0275inj=S({imports:[F,xe,O,R,L,B,Y]})}}return t})();export{xt as ManageUserModule};
