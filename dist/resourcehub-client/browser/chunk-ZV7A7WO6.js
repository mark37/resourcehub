import{a as w}from"./chunk-HZSLE5ZP.js";import{a as de}from"./chunk-6U3CYYRU.js";import{b as G,c as $,e as _,f as R,g as J,h as E,i as s,k as W,l as H,n as z,o as K,p as Q,q as X,r as Z,s as ee,t as te,u as ne,w as ie}from"./chunk-V2SSCOFE.js";import{B as U,C as F,Da as S,Ea as j,Ga as P,H as v,Ha as k,I as y,Lb as ae,Qa as O,Ra as L,Sa as D,T as r,Ta as q,U as I,Ua as Y,Ub as le,Va as B,Vb as me,Y as f,_ as a,fa as i,ga as t,ha as d,hb as T,ia as b,ja as g,jb as oe,ka as p,nb as re,ra as o,sa as x,ta as h,ua as N,x as C}from"./chunk-WXNTJ4HU.js";import{a as M}from"./chunk-GAL4ENT6.js";function ce(){return new E({ofw_flag:new s(!1),fathers_name:new s(null),fathers_occupation:new s(null),fathers_company:new s(null),mothers_name:new s(null),mothers_occupation:new s(null),mothers_company:new s(null),average_monthly_income:new s(null)})}function pe(){return new E({id:new s(null),lib_education_level_id:new s(null),lib_academic_program_id:new s(null),school_name:new s(null),start_year:new s(null),end_year:new s(null)})}function se(){return new E({id:new s(null),full_name:new s(null),company_name:new s(null),contact_number:new s(null)})}function fe(){return new E({id:new s(null),employer_name:new s(null),position:new s(null),job_description:new s(null),start_date:new s(null),end_date:new s(null)})}var ge=(n,c)=>({"bg-gray-400":n,"bg-orange-500":c}),V=n=>({"bg-slate-50":n});function ve(n,c){if(n&1&&d(0,"fa-icon",8),n&2){let e=p();a("icon",e.faEdit)}}function ye(n,c){if(n&1&&d(0,"app-user-information",10),n&2){let e=p(2);a("selected_user",e.selected_user)}}function he(n,c){if(n&1&&(i(0,"div"),f(1,ye,1,1,"app-user-information",9),t()),n&2){let e=p();r(),a("ngIf",e.show_form)}}function be(n,c){if(n&1&&(i(0,"option",65),o(1),t()),n&2){let e=c.$implicit;a("value",e.id),r(),x(e.desc)}}function Ee(n,c){if(n&1&&d(0,"fa-icon",66),n&2){let e=p(2);a("icon",e.faCircleNotch)}}function Ce(n,c){if(n&1&&(i(0,"option",65),o(1),t()),n&2){let e=c.$implicit;a("value",e.id),r(),x(e.desc)}}function Fe(n,c){if(n&1&&(i(0,"option",65),o(1),t()),n&2){let e=c.$implicit;a("value",e.id),r(),x(e.desc)}}function Se(n,c){if(n&1&&d(0,"fa-icon",67),n&2){let e=p(2);a("icon",e.faAdd)}}function we(n,c){if(n&1&&d(0,"fa-icon",66),n&2){let e=p(2);a("icon",e.faCircleNotch)}}function Me(n,c){if(n&1){let e=b();i(0,"tr",69)(1,"td"),o(2),t(),i(3,"td"),o(4),t(),i(5,"td"),o(6),t(),i(7,"td")(8,"button",70),g("click",function(){let l=v(e).$implicit,u=p(3);return y(u.loadSelected(u.educationForm,l))}),d(9,"fa-icon",71),t()()()}if(n&2){let e=c.$implicit,m=c.odd,l=p(3);a("ngClass",S(6,V,m)),r(2),x(e.school_name),r(2),x(e.educationLevel.desc),r(2),N("",e.start_year," to ",e.end_year,""),r(3),a("icon",l.faEdit)}}function Ie(n,c){if(n&1&&(i(0,"tbody"),f(1,Me,10,8,"tr",68),t()),n&2){let e=p(2);r(),a("ngForOf",e.educationList)}}function Ne(n,c){if(n&1&&(i(0,"div",72),d(1,"fa-icon",66),t()),n&2){let e=p(2);r(),a("icon",e.faCircleNotch)}}function Pe(n,c){if(n&1&&d(0,"fa-icon",67),n&2){let e=p(2);a("icon",e.faAdd)}}function ke(n,c){if(n&1&&d(0,"fa-icon",66),n&2){let e=p(2);a("icon",e.faCircleNotch)}}function Te(n,c){if(n&1){let e=b();i(0,"tr",74)(1,"td"),o(2),t(),i(3,"td",75)(4,"span",76),o(5),t(),d(6,"br"),i(7,"span"),o(8,"Job Description:"),t(),o(9),t(),i(10,"td"),o(11),P(12,"date"),P(13,"date"),t(),i(14,"td")(15,"button",70),g("click",function(){let l=v(e).$implicit,u=p(3);return y(u.loadSelected(u.workExperienceForm,l))}),d(16,"fa-icon",71),t()()()}if(n&2){let e=c.$implicit,m=c.odd,l=p(3);a("ngClass",S(13,V,m)),r(2),x(e.employer_name),r(3),x(e.position),r(4),h(" ",e.job_description," "),r(2),N("",k(12,7,e.start_date,"MMM yyyy")," to ",e.end_date?k(13,10,e.end_date,"MMM yyyy"):"Present",""),r(5),a("icon",l.faEdit)}}function Ve(n,c){n&1&&(i(0,"tr")(1,"td",77),o(2,"No work experience recorded"),t()())}function Ae(n,c){if(n&1&&(i(0,"tbody"),f(1,Te,17,15,"tr",73)(2,Ve,3,0,"tr",7),t()),n&2){let e=p(2);r(),a("ngForOf",e.workExperienceList),r(),a("ngIf",!e.workExperienceList)}}function Ue(n,c){if(n&1&&(i(0,"div",78),d(1,"fa-icon",66),t()),n&2){let e=p(2);r(),a("icon",e.faCircleNotch)}}function je(n,c){if(n&1&&d(0,"fa-icon",67),n&2){let e=p(2);a("icon",e.faAdd)}}function Oe(n,c){if(n&1&&d(0,"fa-icon",66),n&2){let e=p(2);a("icon",e.faCircleNotch)}}function Le(n,c){if(n&1){let e=b();i(0,"tr",69)(1,"td"),o(2),t(),i(3,"td"),o(4),t(),i(5,"td"),o(6),t(),i(7,"td")(8,"button",70),g("click",function(){let l=v(e).$implicit,u=p(3);return y(u.loadSelected(u.referenceForm,l))}),d(9,"fa-icon",71),t()()()}if(n&2){let e=c.$implicit,m=c.odd,l=p(3);a("ngClass",S(5,V,m)),r(2),x(e.full_name),r(2),x(e.company_name),r(2),x(e.contact_number),r(3),a("icon",l.faEdit)}}function De(n,c){if(n&1&&(i(0,"tbody"),f(1,Le,10,7,"tr",68),t()),n&2){let e=p(2);r(),a("ngForOf",e.referenceList)}}function qe(n,c){if(n&1&&(i(0,"div",72),d(1,"fa-icon",66),t()),n&2){let e=p(2);r(),a("icon",e.faCircleNotch)}}function Ye(n,c){if(n&1){let e=b();i(0,"div")(1,"fieldset",11)(2,"legend",12),o(3,"Parents Information"),t(),i(4,"form",13)(5,"div",14)(6,"div",15),d(7,"input",16),i(8,"label",17),o(9,"One or both parents is an overseas filipino worker (OFW)"),t()(),i(10,"div")(11,"label"),o(12,"Fathers Name"),t(),d(13,"input",18),t(),i(14,"div")(15,"label"),o(16,"Mothers Name"),t(),d(17,"input",19),t(),i(18,"div")(19,"label"),o(20,"Fathers Occupation"),t(),d(21,"input",20),t(),i(22,"div")(23,"label"),o(24,"Mothers Occupation"),t(),d(25,"input",21),t(),i(26,"div")(27,"label"),o(28,"Fathers Company"),t(),d(29,"input",22),t(),i(30,"div")(31,"label"),o(32,"Mothers Company"),t(),d(33,"input",23),t(),i(34,"div",24)(35,"label"),o(36,"Households Average Monthly Income"),t(),i(37,"select",25),f(38,be,2,2,"option",26),t()(),i(39,"div",27)(40,"button",28),g("click",function(){v(e);let l=p();return y(l.onSubmit("parent-information",l.parentsForm,"parentsInformation","parentsForm"))}),f(41,Ee,1,1,"fa-icon",29),o(42," Update "),t()()()()(),i(43,"fieldset",30)(44,"legend",31),o(45,"Educational Background"),t(),i(46,"form",13)(47,"div",32)(48,"div")(49,"label"),o(50,"Name of School"),t(),d(51,"input",33),t(),i(52,"div")(53,"label"),o(54,"Education Level"),t(),i(55,"select",34)(56,"option",35),o(57,"-"),t(),f(58,Ce,2,2,"option",26),t()(),i(59,"div")(60,"label"),o(61,"Program (optional)"),t(),i(62,"select",36)(63,"option",35),o(64,"-"),t(),f(65,Fe,2,2,"option",26),t()(),i(66,"div")(67,"label"),o(68,"Year Attended (Start)"),t(),d(69,"input",37),t(),i(70,"div")(71,"label"),o(72,"Year Attended (End)"),t(),d(73,"input",38),t()(),i(74,"div",39)(75,"button",40),g("click",function(){v(e);let l=p();return y(l.onSubmit("user-education",l.educationForm,"educationList","educationForm"))}),f(76,Se,1,1,"fa-icon",41)(77,we,1,1,"fa-icon",29),o(78),t()()(),i(79,"div",42)(80,"table",43)(81,"thead")(82,"tr")(83,"th"),o(84,"Name of school"),t(),i(85,"th"),o(86,"Education Level"),t(),i(87,"th"),o(88,"Year Attended"),t(),i(89,"th"),o(90,"Action"),t()()(),f(91,Ie,2,1,"tbody",7),t(),f(92,Ne,2,1,"div",44),t()(),i(93,"fieldset",30)(94,"legend",45),o(95,"Work Experience"),t(),i(96,"form",46)(97,"div",47)(98,"div")(99,"label",48),o(100,"Employer name"),t(),d(101,"input",49),t(),i(102,"div")(103,"label",50),o(104,"Position"),t(),d(105,"input",51),t(),i(106,"div")(107,"label",52),o(108,"Appointment Date"),t(),d(109,"input",53),t(),i(110,"div")(111,"label",54),o(112,"End of Contract"),t(),d(113,"input",55),t(),i(114,"div",56)(115,"div")(116,"label"),o(117,"Job Description"),t(),d(118,"textarea",57),t()(),i(119,"div",58)(120,"button",40),g("click",function(){v(e);let l=p();return y(l.onSubmit("user-employment",l.workExperienceForm,"workExperienceList","workExperienceForm"))}),f(121,Pe,1,1,"fa-icon",41)(122,ke,1,1,"fa-icon",29),o(123),t()()()(),i(124,"div",42)(125,"table",43)(126,"thead")(127,"tr")(128,"th"),o(129,"Name of Employer"),t(),i(130,"th"),o(131,"Job Position"),t(),i(132,"th"),o(133,"Date"),t(),i(134,"th"),o(135,"Action"),t()()(),f(136,Ae,3,2,"tbody",7),t(),f(137,Ue,2,1,"div",59),t()(),i(138,"fieldset",30)(139,"legend",60),o(140,"References"),t(),i(141,"form",13)(142,"div",61)(143,"div")(144,"label"),o(145,"Name"),t(),d(146,"input",62),t(),i(147,"div")(148,"label"),o(149,"Company name / Job title (optional)"),t(),d(150,"input",63),t(),i(151,"div")(152,"label"),o(153,"Contact Number"),t(),d(154,"input",64),t()(),i(155,"div",39)(156,"button",40),g("click",function(){v(e);let l=p();return y(l.onSubmit("user-reference",l.referenceForm,"referenceList","referenceForm"))}),f(157,je,1,1,"fa-icon",41)(158,Oe,1,1,"fa-icon",29),o(159),t()()(),i(160,"div",42)(161,"table",43)(162,"thead")(163,"tr")(164,"th"),o(165,"Name of school"),t(),i(166,"th"),o(167,"Company / Job Title"),t(),i(168,"th"),o(169,"Contact Number"),t(),i(170,"th"),o(171,"Action"),t()()(),f(172,De,2,1,"tbody",7),t(),f(173,qe,2,1,"div",44),t()()()}if(n&2){let e=p();r(4),a("formGroup",e.parentsForm),r(34),a("ngForOf",e.income_list),r(2),a("disabled",!e.parentsForm.valid||e.isFormSaving["parent-information"]),r(),a("ngIf",e.isFormSaving["parent-information"]),r(5),a("formGroup",e.educationForm),r(10),a("ngValue",null),r(2),a("ngForOf",e.education_levels),r(5),a("ngValue",null),r(2),a("ngForOf",e.academic_programs),r(10),a("disabled",!e.educationForm.valid||e.isFormSaving["user-education"]),r(),a("ngIf",!e.isFormSaving["user-education"]&&!e.educationForm.value.id),r(),a("ngIf",e.isFormSaving["user-education"]),r(),h(" ",e.educationForm.value.id?"Update":"Add"," "),r(13),a("ngIf",!e.isFormSaving["user-education"]),r(),a("ngIf",e.isFormSaving["user-education"]),r(4),a("formGroup",e.workExperienceForm),r(24),a("disabled",!e.workExperienceForm.valid||e.isFormSaving["user-employment"]),r(),a("ngIf",!e.isFormSaving["user-employment"]&&!e.workExperienceForm.value.id),r(),a("ngIf",e.isFormSaving["user-employment"]),r(),h(" ",e.workExperienceForm.value.id?"Update":"Add"," "),r(13),a("ngIf",!e.isFormSaving["user-employment"]),r(),a("ngIf",e.isFormSaving["user-employment"]),r(4),a("formGroup",e.referenceForm),r(15),a("disabled",!e.referenceForm.valid||e.isFormSaving["user-reference"]),r(),a("ngIf",!e.isFormSaving["user-reference"]&&!e.referenceForm.value.id),r(),a("ngIf",e.isFormSaving["user-reference"]),r(),h(" ",e.referenceForm.value.id?"Update":"Add"," "),r(13),a("ngIf",!e.isFormSaving["user-reference"]),r(),a("ngIf",e.isFormSaving["user-reference"])}}var _e=(()=>{class n{convertDates(e){return e?O(e,"yyyy-MM","en","Asia/manila"):null}onSubmit(e,m,l,u){m.value.start_date&&m.patchValue({start_date:this.convertDates(m.value.start_date),end_date:this.convertDates(m.value.end_date)}),this.http.post(e,m.value).subscribe({next:A=>{this[u].reset(),this.loadData(e,l)},error:A=>console.log(A)})}loadData(e,m){this.isFormSaving[e]=!0;let l={user_id:this.selected_user.id};this.http.get(e,{params:l}).subscribe({next:u=>{this[m]=u.data,m==="parentsInformation"&&this.parentsForm.patchValue(M({},u.data)),this.isFormSaving[e]=!1},error:u=>console.log(u)})}loadSelected(e,m){e.patchValue(M({},m))}loadUserInformation(e){this.show_form=!1;let m={user_info:1};this.http.get("user-information",{params:m}).subscribe({next:l=>{this.selected_user=l.data[0],this.show_form=!0,e||this.createForms()},error:l=>console.log(l)})}deactivateAccount(){console.log("test")}createForms(){this.loadData("user-education","educationList"),this.loadData("user-employment","workExperienceList"),this.loadData("user-reference","referenceList"),this.loadData("parent-information","parentsInformation"),this.createEducationForm(),this.createReferenceForm(),this.createWorkExperienceForm(),this.createParentsForm()}loadLibraries(e,m){this.http.get("libraries/"+e).subscribe({next:l=>{this[m]=l.data},error:l=>console.log(l)})}createEducationForm(){this.educationForm=this.formBuilder.group({id:[null],lib_education_level_id:[null,_.required],lib_academic_program_id:[null],school_name:[null,_.required],start_year:[null,_.required],end_year:[null,_.required]})}createReferenceForm(){this.referenceForm=this.formBuilder.group({id:[null],full_name:[null,_.required],company_name:[null],contact_number:[null,_.required]})}createWorkExperienceForm(){this.workExperienceForm=this.formBuilder.group({id:[null],employer_name:[null,_.required],position:[null,_.required],job_description:[null],start_date:[null,_.required],end_date:[null,_.required]})}createParentsForm(){this.parentsForm=this.formBuilder.group({ofw_flag:[!1],fathers_name:[null],fathers_occupation:[null],fathers_company:[null],mothers_name:[null],mothers_occupation:[null],mothers_company:[null],average_monthly_income:[null,_.required]})}toggleEditForm(){this.showUpdateForm=!this.showUpdateForm,this.education_levels||this.loadLibraries("education-level","education_levels"),this.academic_programs||this.loadLibraries("academic-programs","academic_programs"),this.income_list||this.loadLibraries("monthly-income","income_list"),this.loadUserInformation(!0)}constructor(e,m){this.http=e,this.formBuilder=m,this.faEdit=re,this.faAdd=ae,this.faCircleNotch=oe,this.educationForm=pe(),this.referenceForm=se(),this.workExperienceForm=fe(),this.parentsForm=ce(),this.show_form=!1,this.showUpdateForm=!1,this.isFormSaving=[]}ngOnInit(){this.loadUserInformation()}static{this.\u0275fac=function(m){return new(m||n)(I(de),I(ne))}}static{this.\u0275cmp=U({type:n,selectors:[["app-manage-profile"]],decls:12,vars:8,consts:[[1,"bg-gray-100","p-5","min-h-screen"],[1,"flex","justify-between","mb-3"],[1,"font-semibold","text-lg","text-blue-600"],[1,"flex","justify-end","text-sm"],[1,"btn-blue","bg-gray-400",3,"click"],[1,"btn-blue",3,"click","ngClass"],["class","text-white",3,"icon",4,"ngIf"],[4,"ngIf"],[1,"text-white",3,"icon"],[3,"selected_user",4,"ngIf"],[3,"selected_user"],[1,"rounded-md","border","border-gray-400","bg-white"],[1,"ml-5","px-4","font-semibold","bg-gray-200","py-2","rounded-mx"],[1,"flex","p-3","mx-4","border-b-2","border-gray-200",3,"formGroup"],[1,"grid","grid-cols-2","gap-x-16","mx-24"],[1,"col-span-2","flex","justify-center","mb-3"],["id","ofw_flag","formControlName","ofw_flag","type","checkbox",1,"rounded-md","text-lg","mr-1"],["for","ofw_flag"],["formControlName","fathers_name","type","text",1,"input-txt"],["formControlName","mothers_name","type","text",1,"input-txt"],["formControlName","fathers_occupation","type","text",1,"input-txt"],["formControlName","mothers_occupation","type","text",1,"input-txt"],["formControlName","fathers_company","type","text",1,"input-txt"],["formControlName","mothers_company","type","text",1,"input-txt"],[1,"col-span-2"],["id","average_monthly_income","formControlName","average_monthly_income",1,"input-txt"],[3,"value",4,"ngFor","ngForOf"],[1,"col-span-2","flex","justify-center","mt-3"],[1,"btn-blue-nr","w-32","text-sm","py-1.5",3,"click","disabled"],["animation","spin",3,"icon",4,"ngIf"],[1,"rounded-md","border","border-gray-400","bg-white","mt-3"],[1,"ml-5","px-4","font-semibold","bg-blue-200","py-2","rounded-mx"],[1,"grid","grid-cols-5","gap-x-4"],["formControlName","school_name","type","text",1,"input-txt"],["formControlName","lib_education_level_id",1,"input-txt"],[3,"ngValue"],["formControlName","lib_academic_program_id",1,"input-txt"],["formControlName","start_year","type","number","id","year","name","year","min","1900","max","2100","placeholder","YYYY",1,"input-txt"],["formControlName","end_year","type","number","id","year","name","year","min","1900","max","2100","placeholder","YYYY",1,"input-txt"],[1,"ml-3","mt-6"],[1,"btn-blue-nr","w-20","text-sm","py-1.5",3,"click","disabled"],[3,"icon",4,"ngIf"],[1,"shadow-md","p-4","border","border-gray-400","rounded-md","m-4"],[1,"table-auto","w-full","bg-white","select-none"],["class","w-full flex justify-center text-blue-500",4,"ngIf"],[1,"ml-5","px-4","font-semibold","bg-orange-200","py-2","rounded-mx"],[1,"flex","flex-col","p-3","mx-4","border-b-2","border-gray-200",3,"formGroup"],[1,"grid","grid-cols-4","gap-x-4"],["for","employer_name"],["formControlName","employer_name","id","employer_name","type","text",1,"input-txt"],["for","position"],["formControlName","position","id","position","type","text",1,"input-txt"],["for","start_date"],["formControlName","start_date","type","month","id","start_date","name","start_date","placeholder","yyyy/MM/dd",1,"input-txt"],["for","end_date"],["formControlName","end_date","type","month","id","end_date","name","end_date","placeholder","yyyy/MM/dd",1,"input-txt"],[1,"col-span-4"],["rows","2","formControlName","job_description","type","text",1,"input-txt"],[1,"col-span-4","flex","justify-end"],["class","w-full flex justify-center",4,"ngIf"],[1,"ml-5","px-4","font-semibold","bg-green-200","py-2","rounded-mx"],[1,"grid","grid-cols-3","gap-x-4"],["formControlName","full_name","type","text",1,"input-txt"],["formControlName","company_name","type","text",1,"input-txt"],["formControlName","contact_number","type","text",1,"input-txt"],[3,"value"],["animation","spin",3,"icon"],[3,"icon"],["class","hover:bg-blue-50",3,"ngClass",4,"ngFor","ngForOf"],[1,"hover:bg-blue-50",3,"ngClass"],[3,"click"],[1,"text-orange-500",3,"icon"],[1,"w-full","flex","justify-center","text-blue-500"],["class","hover:bg-blue-100",3,"ngClass",4,"ngFor","ngForOf"],[1,"hover:bg-blue-100",3,"ngClass"],[1,"text-left"],[1,"font-semibold"],["colspan","4",1,"text-center","italic","py-5"],[1,"w-full","flex","justify-center"]],template:function(m,l){m&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),o(3," User Profile "),t(),i(4,"div",3)(5,"button",4),g("click",function(){return l.deactivateAccount()}),o(6," Deactivate Account "),t(),i(7,"button",5),g("click",function(){return l.toggleEditForm()}),f(8,ve,1,1,"fa-icon",6),o(9),t()()(),f(10,he,2,1,"div",7)(11,Ye,174,29,"div",7),t()),m&2&&(r(7),a("ngClass",j(5,ge,l.showUpdateForm,!l.showUpdateForm)),r(),a("ngIf",!l.showUpdateForm),r(),h(" ",l.showUpdateForm?"Cancel":"Update"," "),r(),a("ngIf",!l.showUpdateForm),r(),a("ngIf",l.showUpdateForm))},dependencies:[L,D,q,le,w,W,X,Z,$,H,G,Q,R,J,te,ee,z,K,Y],styles:["td[_ngcontent-%COMP%]{text-align:center}"]})}}return n})();var Be=[{path:"",component:_e}],xe=(()=>{class n{static{this.\u0275fac=function(m){return new(m||n)}}static{this.\u0275mod=F({type:n})}static{this.\u0275inj=C({imports:[T.forChild(Be),T]})}}return n})();var st=(()=>{class n{static{this.\u0275fac=function(m){return new(m||n)}}static{this.\u0275mod=F({type:n})}static{this.\u0275inj=C({imports:[B,xe,me,w,ie]})}}return n})();export{st as ManageProfileModule};