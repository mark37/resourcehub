import{a as L}from"./chunk-R2GSYOXI.js";import{b as me,c as V,e as h,f as T,g as de,h as w,i as p,j as ce,k as se,l as pe,n as ue,o as fe,p as _e,q as xe,r as ge,s as ve,t as he,u as ye,v as be,w as Ce,x as Ee,y as we}from"./chunk-75IZLKSV.js";import{a as O}from"./chunk-WZ454HCT.js";import{A as F,Ba as X,Ca as Z,Da as ee,E as M,F as I,Fa as te,Ha as k,Ia as ie,J,K as g,Ka as q,L as v,La as G,P as Q,Ua as ne,Va as oe,Vb as Me,Wa as re,X as r,Xa as N,Y as E,Ya as ae,Za as P,aa as u,ca as a,cc as D,dc as j,ja as n,jb as le,ka as t,la as c,ma as y,mb as $,na as _,oa as s,ob as A,ra as H,sa as z,sb as Se,ta as K,va as o,wa as x,wb as Fe,xa as b,ya as Y}from"./chunk-QPUKBYNP.js";import{a as S}from"./chunk-GAL4ENT6.js";function Ie(){return new w({ofw_flag:new p(!1),fathers_name:new p(null),fathers_occupation:new p(null),fathers_company:new p(null),mothers_name:new p(null),mothers_occupation:new p(null),mothers_company:new p(null),average_monthly_income:new p(null)})}function ke(){return new w({id:new p(null),lib_education_level_id:new p(null),lib_academic_program_id:new p(null),school_name:new p(null),start_year:new p(null),end_year:new p(null)})}function Ne(){return new w({id:new p(null),full_name:new p(null),company_name:new p(null),contact_number:new p(null)})}function Pe(){return new w({id:new p(null),employer_name:new p(null),position:new p(null),job_description:new p(null),start_date:new p(null),end_date:new p(null)})}function Ve(){return new w({id:new p(null),lib_school_id:new p(null),lib_academic_program_id:new p(null),lib_year_level_id:new p(null)})}var Ue=["confirmCode"];function Be(i,d){if(i&1&&c(0,"fa-icon",23),i&2){let e=s();a("icon",e.faCircleNotch)}}function Ye(i,d){if(i&1&&c(0,"fa-icon",24),i&2){let e=s();a("icon",e.faBan)}}var U=(()=>{class i{onSubmit(){this.is_loading=!0;let e={is_active:!1};this.confirm_code===this.confirmation_code?this.http.update("user-information/",this.selected_application_id,e).subscribe({next:()=>{this.is_loading=!1,this.message="Code Match, account deactivated",localStorage.clear(),this.router.navigate(["/"])},error:m=>{console.log(m),this.is_loading=!1,this.generateCode()}}):(this.generateCode(),this.message="Code mismatch, please try again")}generateCode(){this.is_loading=!1,this.confirmation_code=null,this.confirm_code=Math.floor(Math.random()*1e3).toString().padStart(4,"0")}closeModal(){this.toggleCancelModal.emit()}constructor(e,m){this.http=e,this.router=m,this.toggleCancelModal=new Q,this.faBan=Fe,this.faCircleNotch=A,this.confirm_code="0000",this.is_loading=!1,this.message=null}ngOnChanges(e){this.generateCode()}ngAfterViewInit(){this.inputElement.nativeElement.focus()}static{this.\u0275fac=function(m){return new(m||i)(E(O),E(le))}}static{this.\u0275cmp=M({type:i,selectors:[["app-deactivate-account"]],viewQuery:function(m,l){if(m&1&&H(Ue,5),m&2){let f;z(f=K())&&(l.inputElement=f.first)}},inputs:{selected_application_id:"selected_application_id"},outputs:{toggleCancelModal:"toggleCancelModal"},standalone:!0,features:[J,te],decls:32,vars:7,consts:[["confirmCode",""],["id","defaultModal","tabindex","-1","aria-modal","true","role","dialog",1,"overflow-y-auto","overflow-x-hidden","fixed","top-0","right-0","left-0","w-full","md:inset-0","h-modal","md:h-full","justify-center","items-center","flex",2,"z-index","60"],[1,"relative","p-4","w-full","max-w-3xl","h-auto","md:h-auto"],[1,"relative","bg-white","rounded-lg","shadow","dark:bg-gray-700"],[1,"flex","justify-between","items-start","py-3","px-5","rounded-t","border-b","bg-blue-500","dark:border-gray-600"],[1,"mt-2","text-sm","font-bold","text-white","dark:text-white"],[1,"overflow-y-auto","h-96","scrollbar-thin","scrollbar-thumb-gray-400","scrollbar-track-gray-100"],[1,"flex","item-start","flex-wrap","pb-5"],[1,"grid","grid-cols-3","px-5","py-5","mt-10","mx-10","w-full","bg-blue-50","rounded-lg","text-center"],[1,"col-span-3","text-left","mb-2","pb-2","border-b","border-slate-200"],[1,"col-span-1","text-sm","px-5","py-2","mt-2"],[1,"block","mb-3"],[1,"font-bold","text-2xl","select-none"],["for","confirmCode"],["name","confirmCode","minlength","4","maxlength","4","type","text",1,"mt-2","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","pl-3","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"keyup.enter","ngModelChange","ngModel"],[1,"col-span-1","mt-11"],["type","button",1,"my-auto","text-white","bg-blue-500","enabled:hover:ring-2","enabled:focus:outline-none","enabled:hover:ring-blue-300","disabled:bg-gray-300","font-medium","rounded","text-sm","px-6","py-2.5","text-center","transition","duration-150","ease-in-out",3,"click","disabled"],["class","mx-0 my-0 text-white","animation","spin",3,"icon",4,"ngIf"],["class","mx-0 my-0 text-white",3,"icon",4,"ngIf"],[1,"px-5","mx-10","mt-5","italic","text-sm","text-blue-500"],[1,"flex","justify-end","py-4","px-5","space-x-4","rounded-b","border-t","border-gray-200"],["type","button",1,"text-white","bg-gray-400","hover:ring-2","focus:outline-none","hover:ring-gray-200","rounded","text-sm","font-medium","my-2","px-6","py-2.5","transition","duration-150","ease-in-out",3,"click","disabled"],[1,"opacity-50","fixed","inset-0","z-[59]","bg-black"],["animation","spin",1,"mx-0","my-0","text-white",3,"icon"],[1,"mx-0","my-0","text-white",3,"icon"]],template:function(m,l){if(m&1){let f=y();n(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h3",5),o(5," Deactivate Account "),t()(),n(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9),o(10," Your are about to deactivate your account. Please enter the generated cancel code in order to proceed. "),t(),n(11,"div",10)(12,"span",11),o(13,"Deactivate Code"),t(),n(14,"span",12),o(15),t()(),n(16,"div",10)(17,"label",13),o(18,"Enter Code"),t(),n(19,"input",14,0),_("keyup.enter",function(){return g(f),v(l.onSubmit())}),ee("ngModelChange",function(B){return g(f),Z(l.confirmation_code,B)||(l.confirmation_code=B),v(B)}),t()(),n(21,"div",15)(22,"button",16),_("click",function(){return g(f),v(l.onSubmit())}),u(23,Be,1,1,"fa-icon",17)(24,Ye,1,1,"fa-icon",18),o(25," Deactivate "),t()()(),n(26,"div",19),o(27),t()()(),n(28,"div",20)(29,"button",21),_("click",function(){return g(f),v(l.closeModal())}),o(30,"Close"),t()()()()(),c(31,"div",22)}m&2&&(r(15),x(l.confirm_code),r(4),X("ngModel",l.confirmation_code),r(3),a("disabled",!l.confirmation_code||l.is_loading),r(),a("ngIf",l.is_loading),r(),a("ngIf",!l.is_loading),r(3),b(" ",l.message," "),r(2),a("disabled",l.is_loading))},dependencies:[j,D,Ee,V,T,ye,be,ce,P,N]})}}return i})();var Ge=(i,d)=>({"bg-blue-500":i,"bg-orange-500":d}),W=i=>({"bg-slate-50":i});function $e(i,d){if(i&1&&c(0,"fa-icon",9),i&2){let e=s();a("icon",e.faEdit)}}function Re(i,d){if(i&1&&c(0,"app-user-information",11),i&2){let e=s(2);a("selected_user",e.selected_user)}}function We(i,d){if(i&1&&(n(0,"div"),u(1,Re,1,1,"app-user-information",10),t()),i&2){let e=s();r(),a("ngIf",e.show_form)}}function Je(i,d){if(i&1&&(n(0,"option",74),o(1),t()),i&2){let e=d.$implicit;a("value",e.id),r(),x(e.desc)}}function Qe(i,d){if(i&1&&(n(0,"option",74),o(1),t()),i&2){let e=d.$implicit;a("value",e.id),r(),x(e.desc)}}function He(i,d){if(i&1&&(n(0,"option",74),o(1),t()),i&2){let e=d.$implicit;a("value",e.id),r(),x(e.desc)}}function ze(i,d){if(i&1&&c(0,"fa-icon",75),i&2){let e=s(2);a("icon",e.faCircleNotch)}}function Ke(i,d){if(i&1&&(n(0,"option",74),o(1),t()),i&2){let e=d.$implicit;a("value",e.id),r(),x(e.desc)}}function Xe(i,d){if(i&1&&c(0,"fa-icon",75),i&2){let e=s(2);a("icon",e.faCircleNotch)}}function Ze(i,d){if(i&1&&(n(0,"option",74),o(1),t()),i&2){let e=d.$implicit;a("value",e.id),r(),x(e.desc)}}function et(i,d){if(i&1&&(n(0,"option",74),o(1),t()),i&2){let e=d.$implicit;a("value",e.id),r(),x(e.desc)}}function tt(i,d){if(i&1&&c(0,"fa-icon",76),i&2){let e=s(2);a("icon",e.faAdd)}}function it(i,d){if(i&1&&c(0,"fa-icon",75),i&2){let e=s(2);a("icon",e.faCircleNotch)}}function nt(i,d){if(i&1){let e=y();n(0,"tr",78)(1,"td"),o(2),t(),n(3,"td"),o(4),t(),n(5,"td"),o(6),t(),n(7,"td")(8,"button",79),_("click",function(){let l=g(e).$implicit,f=s(3);return v(f.loadSelected(f.educationForm,l))}),c(9,"fa-icon",80),t()()()}if(i&2){let e=d.$implicit,m=d.odd,l=s(3);a("ngClass",k(6,W,m)),r(2),x(e.school_name),r(2),x(e.educationLevel.desc),r(2),Y("",e.start_year," to ",e.end_year,""),r(3),a("icon",l.faEdit)}}function ot(i,d){if(i&1&&(n(0,"tbody"),u(1,nt,10,8,"tr",77),t()),i&2){let e=s(2);r(),a("ngForOf",e.educationList)}}function rt(i,d){if(i&1&&(n(0,"div",81),c(1,"fa-icon",75),t()),i&2){let e=s(2);r(),a("icon",e.faCircleNotch)}}function at(i,d){if(i&1&&c(0,"fa-icon",76),i&2){let e=s(2);a("icon",e.faAdd)}}function lt(i,d){if(i&1&&c(0,"fa-icon",75),i&2){let e=s(2);a("icon",e.faCircleNotch)}}function mt(i,d){if(i&1){let e=y();n(0,"tr",83)(1,"td"),o(2),t(),n(3,"td",84)(4,"span",85),o(5),t(),c(6,"br"),n(7,"span"),o(8,"Job Description:"),t(),o(9),t(),n(10,"td"),o(11),q(12,"date"),q(13,"date"),t(),n(14,"td")(15,"button",79),_("click",function(){let l=g(e).$implicit,f=s(3);return v(f.loadSelected(f.workExperienceForm,l))}),c(16,"fa-icon",80),t()()()}if(i&2){let e=d.$implicit,m=d.odd,l=s(3);a("ngClass",k(13,W,m)),r(2),x(e.employer_name),r(3),x(e.position),r(4),b(" ",e.job_description," "),r(2),Y("",G(12,7,e.start_date,"MMM yyyy")," to ",e.end_date?G(13,10,e.end_date,"MMM yyyy"):"Present",""),r(5),a("icon",l.faEdit)}}function dt(i,d){i&1&&(n(0,"tr")(1,"td",86),o(2,"No work experience recorded"),t()())}function ct(i,d){if(i&1&&(n(0,"tbody"),u(1,mt,17,15,"tr",82)(2,dt,3,0,"tr",7),t()),i&2){let e=s(2);r(),a("ngForOf",e.workExperienceList),r(),a("ngIf",!e.workExperienceList)}}function st(i,d){if(i&1&&(n(0,"div",87),c(1,"fa-icon",75),t()),i&2){let e=s(2);r(),a("icon",e.faCircleNotch)}}function pt(i,d){if(i&1&&c(0,"fa-icon",76),i&2){let e=s(2);a("icon",e.faAdd)}}function ut(i,d){if(i&1&&c(0,"fa-icon",75),i&2){let e=s(2);a("icon",e.faCircleNotch)}}function ft(i,d){if(i&1){let e=y();n(0,"tr",78)(1,"td"),o(2),t(),n(3,"td"),o(4),t(),n(5,"td"),o(6),t(),n(7,"td")(8,"button",79),_("click",function(){let l=g(e).$implicit,f=s(3);return v(f.loadSelected(f.referenceForm,l))}),c(9,"fa-icon",80),t()()()}if(i&2){let e=d.$implicit,m=d.odd,l=s(3);a("ngClass",k(5,W,m)),r(2),x(e.full_name),r(2),x(e.company_name),r(2),x(e.contact_number),r(3),a("icon",l.faEdit)}}function _t(i,d){if(i&1&&(n(0,"tbody"),u(1,ft,10,7,"tr",77),t()),i&2){let e=s(2);r(),a("ngForOf",e.referenceList)}}function xt(i,d){if(i&1&&(n(0,"div",81),c(1,"fa-icon",75),t()),i&2){let e=s(2);r(),a("icon",e.faCircleNotch)}}function gt(i,d){if(i&1){let e=y();n(0,"div")(1,"fieldset",12)(2,"legend",13),o(3,"Current School Information"),t(),n(4,"form",14)(5,"div")(6,"label",15),o(7,"School"),t(),n(8,"select",16),u(9,Je,2,2,"option",17),t()(),n(10,"div")(11,"label",15),o(12,"Course"),t(),n(13,"select",18),u(14,Qe,2,2,"option",17),t()(),n(15,"div")(16,"label",15),o(17,"Year Level"),t(),n(18,"select",19),u(19,He,2,2,"option",17),t()(),n(20,"div",20)(21,"button",21),_("click",function(){g(e);let l=s();return v(l.updateAcademicInfo())}),u(22,ze,1,1,"fa-icon",22),o(23," Update "),t()()()(),n(24,"fieldset",12)(25,"legend",23),o(26,"Parents Information"),t(),n(27,"form",24)(28,"div",25)(29,"div",26),c(30,"input",27),n(31,"label",28),o(32,"One or both parents is an overseas filipino worker (OFW)"),t()(),n(33,"div")(34,"label"),o(35,"Fathers Name"),t(),c(36,"input",29),t(),n(37,"div")(38,"label"),o(39,"Mothers Name"),t(),c(40,"input",30),t(),n(41,"div")(42,"label"),o(43,"Fathers Occupation"),t(),c(44,"input",31),t(),n(45,"div")(46,"label"),o(47,"Mothers Occupation"),t(),c(48,"input",32),t(),n(49,"div")(50,"label"),o(51,"Fathers Company"),t(),c(52,"input",33),t(),n(53,"div")(54,"label"),o(55,"Mothers Company"),t(),c(56,"input",34),t(),n(57,"div",35)(58,"label"),o(59,"Households Average Monthly Income"),t(),n(60,"select",36),u(61,Ke,2,2,"option",17),t()(),n(62,"div",37)(63,"button",21),_("click",function(){g(e);let l=s();return v(l.onSubmit("parent-information",l.parentsForm,"parentsInformation","parentsForm"))}),u(64,Xe,1,1,"fa-icon",22),o(65," Update "),t()()()()(),n(66,"fieldset",38)(67,"legend",39),o(68,"Educational Background"),t(),n(69,"form",40)(70,"div",41)(71,"div")(72,"label"),o(73,"Name of School"),t(),c(74,"input",42),t(),n(75,"div")(76,"label"),o(77,"Education Level"),t(),n(78,"select",43)(79,"option",44),o(80,"-"),t(),u(81,Ze,2,2,"option",17),t()(),n(82,"div")(83,"label"),o(84,"Program (optional)"),t(),n(85,"select",45)(86,"option",44),o(87,"-"),t(),u(88,et,2,2,"option",17),t()(),n(89,"div")(90,"label"),o(91,"Year Attended (Start)"),t(),c(92,"input",46),t(),n(93,"div")(94,"label"),o(95,"Year Attended (End)"),t(),c(96,"input",47),t()(),n(97,"div",48)(98,"button",49),_("click",function(){g(e);let l=s();return v(l.onSubmit("user-education",l.educationForm,"educationList","educationForm"))}),u(99,tt,1,1,"fa-icon",50)(100,it,1,1,"fa-icon",22),o(101),t()()(),n(102,"div",51)(103,"table",52)(104,"thead")(105,"tr")(106,"th"),o(107,"Name of school"),t(),n(108,"th"),o(109,"Education Level"),t(),n(110,"th"),o(111,"Year Attended"),t(),n(112,"th"),o(113,"Action"),t()()(),u(114,ot,2,1,"tbody",7),t(),u(115,rt,2,1,"div",53),t()(),n(116,"fieldset",38)(117,"legend",54),o(118,"Work Experience"),t(),n(119,"form",55)(120,"div",56)(121,"div")(122,"label",57),o(123,"Employer name"),t(),c(124,"input",58),t(),n(125,"div")(126,"label",59),o(127,"Position"),t(),c(128,"input",60),t(),n(129,"div")(130,"label",61),o(131,"Appointment Date"),t(),c(132,"input",62),t(),n(133,"div")(134,"label",63),o(135,"End of Contract"),t(),c(136,"input",64),t(),n(137,"div",65)(138,"div")(139,"label"),o(140,"Job Description"),t(),c(141,"textarea",66),t()(),n(142,"div",67)(143,"button",49),_("click",function(){g(e);let l=s();return v(l.onSubmit("user-employment",l.workExperienceForm,"workExperienceList","workExperienceForm"))}),u(144,at,1,1,"fa-icon",50)(145,lt,1,1,"fa-icon",22),o(146),t()()()(),n(147,"div",51)(148,"table",52)(149,"thead")(150,"tr")(151,"th"),o(152,"Name of Employer"),t(),n(153,"th"),o(154,"Job Position"),t(),n(155,"th"),o(156,"Date"),t(),n(157,"th"),o(158,"Action"),t()()(),u(159,ct,3,2,"tbody",7),t(),u(160,st,2,1,"div",68),t()(),n(161,"fieldset",38)(162,"legend",69),o(163,"References"),t(),n(164,"form",40)(165,"div",70)(166,"div")(167,"label"),o(168,"Name"),t(),c(169,"input",71),t(),n(170,"div")(171,"label"),o(172,"Company name / Job title (optional)"),t(),c(173,"input",72),t(),n(174,"div")(175,"label"),o(176,"Contact Number"),t(),c(177,"input",73),t()(),n(178,"div",48)(179,"button",49),_("click",function(){g(e);let l=s();return v(l.onSubmit("user-reference",l.referenceForm,"referenceList","referenceForm"))}),u(180,pt,1,1,"fa-icon",50)(181,ut,1,1,"fa-icon",22),o(182),t()()(),n(183,"div",51)(184,"table",52)(185,"thead")(186,"tr")(187,"th"),o(188,"Name of school"),t(),n(189,"th"),o(190,"Company / Job Title"),t(),n(191,"th"),o(192,"Contact Number"),t(),n(193,"th"),o(194,"Action"),t()()(),u(195,_t,2,1,"tbody",7),t(),u(196,xt,2,1,"div",53),t()()()}if(i&2){let e=s();r(4),a("formGroup",e.userForm),r(5),a("ngForOf",e.school_list),r(5),a("ngForOf",e.academic_programs),r(5),a("ngForOf",e.year_level_list),r(2),a("disabled",!e.userForm.valid||e.isFormSaving["user-information"]),r(),a("ngIf",e.isFormSaving["user-information"]),r(5),a("formGroup",e.parentsForm),r(34),a("ngForOf",e.income_list),r(2),a("disabled",!e.parentsForm.valid||e.isFormSaving["parent-information"]),r(),a("ngIf",e.isFormSaving["parent-information"]),r(5),a("formGroup",e.educationForm),r(10),a("ngValue",null),r(2),a("ngForOf",e.education_levels),r(5),a("ngValue",null),r(2),a("ngForOf",e.academic_programs),r(10),a("disabled",!e.educationForm.valid||e.isFormSaving["user-education"]),r(),a("ngIf",!e.isFormSaving["user-education"]&&!e.educationForm.value.id),r(),a("ngIf",e.isFormSaving["user-education"]),r(),b(" ",e.educationForm.value.id?"Update":"Add"," "),r(13),a("ngIf",!e.isFormSaving["user-education"]),r(),a("ngIf",e.isFormSaving["user-education"]),r(4),a("formGroup",e.workExperienceForm),r(24),a("disabled",!e.workExperienceForm.valid||e.isFormSaving["user-employment"]),r(),a("ngIf",!e.isFormSaving["user-employment"]&&!e.workExperienceForm.value.id),r(),a("ngIf",e.isFormSaving["user-employment"]),r(),b(" ",e.workExperienceForm.value.id?"Update":"Add"," "),r(13),a("ngIf",!e.isFormSaving["user-employment"]),r(),a("ngIf",e.isFormSaving["user-employment"]),r(4),a("formGroup",e.referenceForm),r(15),a("disabled",!e.referenceForm.valid||e.isFormSaving["user-reference"]),r(),a("ngIf",!e.isFormSaving["user-reference"]&&!e.referenceForm.value.id),r(),a("ngIf",e.isFormSaving["user-reference"]),r(),b(" ",e.referenceForm.value.id?"Update":"Add"," "),r(13),a("ngIf",!e.isFormSaving["user-reference"]),r(),a("ngIf",e.isFormSaving["user-reference"])}}function vt(i,d){if(i&1){let e=y();n(0,"app-deactivate-account",88),_("toggleCancelModal",function(){g(e);let l=s();return v(l.toggleCancelModal())}),t()}if(i&2){let e=s();a("selected_application_id",e.selected_user_id)}}var Te=(()=>{class i{convertDates(e){return e?ne(e,"yyyy-MM","en","Asia/manila"):null}updateAcademicInfo(){this.isFormSaving["user-information"]=!0,this.http.update("user-information/",this.userForm.value.id,this.userForm.value).subscribe({next:e=>{this.isFormSaving["user-information"]=!1,console.log(e)},error:e=>console.log(e)})}onSubmit(e,m,l,f){m.value.start_date&&m.patchValue({start_date:this.convertDates(m.value.start_date),end_date:this.convertDates(m.value.end_date)}),this.http.post(e,m.value).subscribe({next:C=>{this[f].reset(),this.loadData(e,l)},error:C=>console.log(C)})}loadData(e,m){this.isFormSaving[e]=!0;let l={user_id:this.selected_user.id};this.http.get(e,{params:l}).subscribe({next:f=>{this[m]=f.data,m==="parentsInformation"&&this.parentsForm.patchValue(S({},f.data)),this.isFormSaving[e]=!1},error:f=>console.log(f)})}loadSelected(e,m){e.patchValue(S({},m))}loadUserInformation(e){this.show_form=!1;let m={user_info:1};this.http.get("user-information",{params:m}).subscribe({next:l=>{console.log(l),this.selected_user=l.data[0],this.show_form=!0,this.userForm.patchValue(S({},l.data[0])),console.log(this.userForm.value),e||this.createForms()},error:l=>console.log(l)})}deactivateAccount(){this.selected_user_id=this.userForm.value.id,this.toggleCancelModal()}toggleCancelModal(){console.log("test"),this.modals["deactivate-account"]=!this.modals["deactivate-account"]}createForms(){this.loadData("user-education","educationList"),this.loadData("user-employment","workExperienceList"),this.loadData("user-reference","referenceList"),this.loadData("parent-information","parentsInformation"),this.createEducationForm(),this.createReferenceForm(),this.createWorkExperienceForm(),this.createParentsForm()}loadLibraries(e,m){this.http.get("libraries/"+e).subscribe({next:l=>{this[m]=l.data},error:l=>console.log(l)})}createEducationForm(){this.educationForm=this.formBuilder.group({id:[null],lib_education_level_id:[null,h.required],lib_academic_program_id:[null],school_name:[null,h.required],start_year:[null,h.required],end_year:[null,h.required]})}createReferenceForm(){this.referenceForm=this.formBuilder.group({id:[null],full_name:[null,h.required],company_name:[null],contact_number:[null,h.required]})}createWorkExperienceForm(){this.workExperienceForm=this.formBuilder.group({id:[null],employer_name:[null,h.required],position:[null,h.required],job_description:[null],start_date:[null,h.required],end_date:[null,h.required]})}createParentsForm(){this.parentsForm=this.formBuilder.group({ofw_flag:[!1],fathers_name:[null],fathers_occupation:[null],fathers_company:[null],mothers_name:[null],mothers_occupation:[null],mothers_company:[null],average_monthly_income:[null,h.required]})}toggleEditForm(){this.showUpdateForm=!this.showUpdateForm,this.education_levels||this.loadLibraries("education-level","education_levels"),this.academic_programs||this.loadLibraries("academic-programs","academic_programs"),this.income_list||this.loadLibraries("monthly-income","income_list"),this.school_list||this.loadLibraries("school","school_list"),this.year_level_list||this.loadLibraries("year-level","year_level_list"),this.loadUserInformation(!0)}constructor(e,m){this.http=e,this.formBuilder=m,this.faEdit=Se,this.faAdd=Me,this.faCircleNotch=A,this.educationForm=ke(),this.referenceForm=Ne(),this.workExperienceForm=Pe(),this.parentsForm=Ie(),this.userForm=Ve(),this.show_form=!1,this.showUpdateForm=!1,this.isFormSaving=[],this.modals=[]}ngOnInit(){this.loadUserInformation()}static{this.\u0275fac=function(m){return new(m||i)(E(O),E(Ce))}}static{this.\u0275cmp=M({type:i,selectors:[["app-manage-profile"]],decls:13,vars:9,consts:[[1,"bg-gray-100","p-5","min-h-screen"],[1,"flex","justify-between","mb-3"],[1,"font-semibold","text-lg","text-blue-600"],[1,"flex","justify-end","text-sm"],[1,"btn-blue","bg-gray-400",3,"click"],[1,"btn-blue",3,"click","ngClass"],["class","text-white",3,"icon",4,"ngIf"],[4,"ngIf"],[3,"selected_application_id","toggleCancelModal",4,"ngIf"],[1,"text-white",3,"icon"],[3,"selected_user",4,"ngIf"],[3,"selected_user"],[1,"rounded-md","border","border-gray-400","bg-white"],[1,"ml-5","px-4","font-semibold","bg-gray-200","py-2","rounded-mx"],[1,"flex","flex-col","md:grid","md:grid-cols-3","gap-4","p-3","mx-4","border-b-2","border-gray-200",3,"formGroup"],["for","school"],["formControlName","lib_school_id","name","lib_school_id","id","lib_school_id",1,"input-txt"],[3,"value",4,"ngFor","ngForOf"],["formControlName","lib_academic_program_id","name","lib_academic_program_id","id","lib_academic_program_id",1,"input-txt"],["formControlName","lib_year_level_id","name","lib_year_level_id","id","lib_year_level_id",1,"input-txt"],[1,"flex","justify-center","col-span-3"],[1,"btn-blue-nr","w-32","text-sm","py-1.5",3,"click","disabled"],["animation","spin",3,"icon",4,"ngIf"],[1,"ml-5","px-4","font-semibold","bg-rose-200","py-2","rounded-mx"],[1,"flex","p-3","mx-4","border-b-2","border-gray-200",3,"formGroup"],[1,"flex","flex-col","md:grid","md:grid-cols-2","md:gap-x-16","md:mx-24"],[1,"col-span-2","flex","justify-center","mb-3"],["id","ofw_flag","formControlName","ofw_flag","type","checkbox",1,"rounded-md","text-lg","mr-1"],["for","ofw_flag"],["formControlName","fathers_name","type","text",1,"input-txt"],["formControlName","mothers_name","type","text",1,"input-txt"],["formControlName","fathers_occupation","type","text",1,"input-txt"],["formControlName","mothers_occupation","type","text",1,"input-txt"],["formControlName","fathers_company","type","text",1,"input-txt"],["formControlName","mothers_company","type","text",1,"input-txt"],[1,"col-span-2"],["id","average_monthly_income","formControlName","average_monthly_income",1,"input-txt"],[1,"col-span-2","flex","justify-end","md:justify-center","mt-3"],[1,"rounded-md","border","border-gray-400","bg-white","mt-3"],[1,"ml-5","px-4","font-semibold","bg-blue-200","py-2","rounded-mx"],[1,"flex","flex-col","md:flex-row","p-3","mx-4","border-b-2","border-gray-200",3,"formGroup"],[1,"flex","flex-col","md:grid","md:grid-cols-5","md:gap-x-4"],["formControlName","school_name","type","text",1,"input-txt"],["formControlName","lib_education_level_id",1,"input-txt"],[3,"ngValue"],["formControlName","lib_academic_program_id",1,"input-txt"],["formControlName","start_year","type","number","id","year","name","year","min","1900","max","2100","placeholder","YYYY",1,"input-txt"],["formControlName","end_year","type","number","id","year","name","year","min","1900","max","2100","placeholder","YYYY",1,"input-txt"],[1,"ml-3","mt-6","flex","justify-end"],[1,"btn-blue-nr","w-20","text-sm","py-1.5",3,"click","disabled"],[3,"icon",4,"ngIf"],[1,"shadow-md","p-4","border","border-gray-400","rounded-md","m-4"],[1,"table-auto","w-full","bg-white","select-none"],["class","w-full flex justify-center text-blue-500",4,"ngIf"],[1,"ml-5","px-4","font-semibold","bg-orange-200","py-2","rounded-mx"],[1,"flex","flex-col","p-3","mx-4","border-b-2","border-gray-200",3,"formGroup"],[1,"flex","flex-col","md:grid","grid-cols-4","gap-x-4"],["for","employer_name"],["formControlName","employer_name","id","employer_name","type","text",1,"input-txt"],["for","position"],["formControlName","position","id","position","type","text",1,"input-txt"],["for","start_date"],["formControlName","start_date","type","month","id","start_date","name","start_date","placeholder","yyyy/MM/dd",1,"input-txt"],["for","end_date"],["formControlName","end_date","type","month","id","end_date","name","end_date","placeholder","yyyy/MM/dd",1,"input-txt"],[1,"col-span-4"],["rows","2","formControlName","job_description","type","text",1,"input-txt"],[1,"col-span-4","flex","justify-end"],["class","w-full flex justify-center",4,"ngIf"],[1,"ml-5","px-4","font-semibold","bg-green-200","py-2","rounded-mx"],[1,"flex","flex-col","md:grid","grid-cols-3","gap-x-4"],["formControlName","full_name","type","text",1,"input-txt"],["formControlName","company_name","type","text",1,"input-txt"],["formControlName","contact_number","type","text",1,"input-txt"],[3,"value"],["animation","spin",3,"icon"],[3,"icon"],["class","hover:bg-blue-50",3,"ngClass",4,"ngFor","ngForOf"],[1,"hover:bg-blue-50",3,"ngClass"],[3,"click"],[1,"text-orange-500",3,"icon"],[1,"w-full","flex","justify-center","text-blue-500"],["class","hover:bg-blue-100",3,"ngClass",4,"ngFor","ngForOf"],[1,"hover:bg-blue-100",3,"ngClass"],[1,"text-left"],[1,"font-semibold"],["colspan","4",1,"text-center","italic","py-5"],[1,"w-full","flex","justify-center"],[3,"toggleCancelModal","selected_application_id"]],template:function(m,l){m&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),o(3," User Profile "),t(),n(4,"div",3)(5,"button",4),_("click",function(){return l.deactivateAccount()}),o(6," Deactivate Account "),t(),n(7,"button",5),_("click",function(){return l.toggleEditForm()}),u(8,$e,1,1,"fa-icon",6),o(9),t()()(),u(10,We,2,1,"div",7)(11,gt,197,35,"div",7),t(),u(12,vt,1,1,"app-deactivate-account",8)),m&2&&(r(7),a("ngClass",ie(6,Ge,l.showUpdateForm,!l.showUpdateForm)),r(),a("ngIf",!l.showUpdateForm),r(),b(" ",l.showUpdateForm?"Back":"Update"," "),r(),a("ngIf",!l.showUpdateForm),r(),a("ngIf",l.showUpdateForm),r(),a("ngIf",l.modals["deactivate-account"]))},dependencies:[oe,re,N,D,L,se,xe,ge,V,pe,me,_e,T,de,he,ve,ue,fe,U,ae],styles:["td[_ngcontent-%COMP%]{text-align:center}"]})}}return i})();var ht=[{path:"",component:Te}],Ae=(()=>{class i{static{this.\u0275fac=function(m){return new(m||i)}}static{this.\u0275mod=I({type:i})}static{this.\u0275inj=F({imports:[$.forChild(ht),$]})}}return i})();var zt=(()=>{class i{static{this.\u0275fac=function(m){return new(m||i)}}static{this.\u0275mod=I({type:i})}static{this.\u0275inj=F({imports:[P,Ae,j,L,we,U]})}}return i})();export{zt as ManageProfileModule};
