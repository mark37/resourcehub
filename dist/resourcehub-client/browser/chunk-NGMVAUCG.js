import{a as I,c as he}from"./chunk-XKDEQOB3.js";import{a as N,b as V}from"./chunk-PKJUAQOY.js";import{b as z,c as X,e as b,f as Z,g as ee,h as te,i as c,k as ie,n as ne,o as oe,p as re,q as ae,r as le,w as me,y as se}from"./chunk-POSQ46WM.js";import{a as xe}from"./chunk-EDMWRYVU.js";import{A as P,E as U,F as k,Gb as de,Ha as y,Ia as $,K as g,Kb as ue,L as x,Oa as W,P as B,Wa as H,X as m,Xa as K,Y as F,Ya as Q,_a as J,aa as d,ca as a,cc as fe,dc as ge,ea as T,fa as E,ja as n,ka as i,kb as Y,la as _,ma as v,n as D,na as f,nb as A,oa as p,pb as pe,ra as L,sa as G,ta as q,ua as w,ub as _e,va as l,vb as ce,wa as h,xa as C}from"./chunk-7PEPAECK.js";import"./chunk-GAL4ENT6.js";function Ce(){return new te({id:new c(null),first_name:new c(null),middle_name:new c(null),last_name:new c(null),suffix_name:new c(null),email:new c(null),password:new c(null),password_confirmation:new c(null),contact_number:new c(null),gender:new c(null),birthdate:new c(null),province_code:new c(null),municipality_code:new c(null),barangay_code:new c(null),address:new c(null),place_of_birth:new c(null),lib_school_id:new c(null),lib_education_level_id:new c(null),lib_year_level_id:new c(null),lib_academic_program_id:new c(null),gwa:new c(null),scholar_flag:new c(!1),shiftee_flag:new c(!1),irregular_flag:new c(!1),pwd_flag:new c(!1),course_code:new c(null),year_level:new c(null),ofw_flag:new c(!1),solo_parent_flag:new c(!1),fathers_name:new c(null),fathers_occupation:new c(null),fathers_company:new c(null),mothers_name:new c(null),mothers_occupation:new c(null),mothers_company:new c(null),average_monthly_income:new c(null),cor_url:new c(null),photo_url:new c(null),grade_url:new c(null)})}var Te=["emailInput"],O=t=>({"border-b-blue-600":t}),be=t=>({invisible:t}),j=t=>({"bg-gray-300":t}),Ie=(t,s)=>({"text-blue-500":t,"text-red-600":s});function Ne(t,s){t&1&&l(0," | Personal Information ")}function Ve(t,s){t&1&&l(0," | Academic Information ")}function Me(t,s){t&1&&l(0," | Parent's Information ")}function Ae(t,s){if(t&1&&(n(0,"span",10),d(1,Ne,1,0)(2,Ve,1,0)(3,Me,1,0),i()),t&2){let e,o=p();m(),E((e=o.page)===1?1:e===2?2:e===3?3:-1)}}function Oe(t,s){t&1&&(n(0,"div",14),l(1," These information will be used for all of your applications "),i())}function je(t,s){if(t&1&&_(0,"app-error-label",31),t&2){let e=p(3);a("childForm",e.signUpForm)("childFormName","email")}}function Re(t,s){t&1&&(n(0,"span",44),l(1," Password does not match "),i())}function De(t,s){if(t&1&&_(0,"fa-icon",45),t&2){let e=p(3);a("icon",e.faCircleNotch)}}function Be(t,s){if(t&1){let e=v();n(0,"div",16)(1,"div",18)(2,"div",19)(3,"div",20)(4,"div"),l(5," Sign Up "),i(),n(6,"a",21),l(7," x "),i()(),n(8,"div",22)(9,"div",23)(10,"label",24),l(11,"Email"),i(),n(12,"input",25,0),f("keypress",function(r){g(e);let u=w(33),S=p(2);return x(S.handleKeyPress(r,u))}),i(),d(14,je,1,2,"app-error-label",26),i(),n(15,"div")(16,"label",27),l(17,"Password (6+ Character)"),i(),n(18,"div",8)(19,"input",28),f("keypress",function(r){g(e);let u=w(33),S=p(2);return x(S.handleKeyPress(r,u))}),i(),n(20,"button",29),f("click",function(){g(e);let r=p(2);return x(r.togglePassword())}),_(21,"fa-icon",30),i()(),_(22,"app-error-label",31),i(),n(23,"div")(24,"label",32),l(25,"Confirm Password"),i(),n(26,"input",33),f("keypress",function(r){g(e);let u=w(33),S=p(2);return x(S.handleKeyPress(r,u))}),i(),d(27,Re,2,0,"span",34),n(28,"span",35),l(29),i()(),n(30,"div",36)(31,"div",37)(32,"button",38,1),f("click",function(){g(e);let r=p(2);return x(r.navigatePage(1))}),d(34,De,1,1,"fa-icon",39),l(35),i(),n(36,"span",40),l(37," By proceeding you agree to "),n(38,"span",41),f("click",function(){g(e);let r=p(2);return x(r.toggleModal("terms-of-use"))}),l(39,"Terms of Use"),i(),l(40," and "),n(41,"span",41),f("click",function(){g(e);let r=p(2);return x(r.toggleModal("user-agreement"))}),l(42,"User Agreement"),i()()()(),n(43,"span",42),l(44," Already on ResourceHub? "),n(45,"a",43),l(46,"Sign In"),i()()()()()()}if(t&2){let e=p(2);m(14),a("ngIf",e.formSubmitted),m(5),a("type",e.isInputPass?"password":"text"),m(2),a("icon",e.isInputPass?e.faEye:e.faEyeSlash),m(),a("childForm",e.signUpForm)("childFormName","password"),m(4),a("type",e.isInputPass?"password":"text"),m(),a("ngIf",e.signUpForm.value.password!==e.signUpForm.value.password_confirmation),m(2),h(e.email_err),m(3),a("disabled",!e.signUpForm.valid||e.checking_email||e.signUpForm.value.password!==e.signUpForm.value.password_confirmation),m(2),a("ngIf",e.checking_email),m(),C(" ",e.checking_email?"Checking Email":"Proceed"," ")}}function Le(t,s){if(t&1&&_(0,"app-error-label",31),t&2){let e=p(4);a("childForm",e.signUpForm)("childFormName","first_name")}}function Ge(t,s){if(t&1&&_(0,"app-error-label",31),t&2){let e=p(4);a("childForm",e.signUpForm)("childFormName","last_name")}}function qe(t,s){if(t&1&&(n(0,"option",88),l(1),i()),t&2){let e=s.$implicit;a("value",e.code),m(),h(e.suffix_desc)}}function $e(t,s){if(t&1&&_(0,"app-error-label",31),t&2){let e=p(4);a("childForm",e.signUpForm)("childFormName","birthdate")}}function We(t,s){if(t&1&&_(0,"app-error-label",31),t&2){let e=p(4);a("childForm",e.signUpForm)("childFormName","gender")}}function He(t,s){if(t&1&&_(0,"app-error-label",31),t&2){let e=p(4);a("childForm",e.signUpForm)("childFormName","contact_number")}}function Ke(t,s){if(t&1&&(n(0,"option",88),l(1),i()),t&2){let e=s.$implicit;a("value",e.code),m(),h(e.name)}}function Qe(t,s){if(t&1&&_(0,"app-error-label",31),t&2){let e=p(4);a("childForm",e.signUpForm)("childFormName","province_code")}}function Je(t,s){if(t&1&&(n(0,"option",88),l(1),i()),t&2){let e=s.$implicit;a("value",e.code),m(),h(e.name)}}function Ye(t,s){if(t&1&&_(0,"app-error-label",31),t&2){let e=p(4);a("childForm",e.signUpForm)("childFormName","municipality_code")}}function ze(t,s){if(t&1&&(n(0,"option",88),l(1),i()),t&2){let e=s.$implicit;a("value",e.code),m(),C(" ",e.name,"")}}function Xe(t,s){if(t&1&&_(0,"app-error-label",31),t&2){let e=p(4);a("childForm",e.signUpForm)("childFormName","barangay_code")}}function Ze(t,s){if(t&1&&_(0,"app-error-label",31),t&2){let e=p(4);a("childForm",e.signUpForm)("childFormName","address")}}function et(t,s){if(t&1&&_(0,"app-error-label",31),t&2){let e=p(4);a("childForm",e.signUpForm)("childFormName","place_of_birth")}}function tt(t,s){if(t&1){let e=v();n(0,"div",48)(1,"div")(2,"label",51),l(3,"First Name"),i(),_(4,"input",52),d(5,Le,1,2,"app-error-label",26),i(),n(6,"div")(7,"label",53),l(8,"Middle Name (optional)"),i(),_(9,"input",54),i(),n(10,"div",55)(11,"div",56)(12,"label",57),l(13,"Last Name"),i(),_(14,"input",58),d(15,Ge,1,2,"app-error-label",26),i(),n(16,"div",59)(17,"label",60),l(18,"Suffix"),i(),n(19,"select",61),d(20,qe,2,2,"option",62),i()()(),n(21,"div",63)(22,"div")(23,"label",64),l(24,"Date of Birth"),i(),_(25,"input",65),d(26,$e,1,2,"app-error-label",26),i(),n(27,"div")(28,"label",66),l(29,"Gender"),i(),n(30,"select",67)(31,"option",68),l(32,"Male"),i(),n(33,"option",69),l(34,"Female"),i()(),d(35,We,1,2,"app-error-label",26),i()(),n(36,"div")(37,"label",70),l(38,"Contact Number"),i(),_(39,"input",71),d(40,He,1,2,"app-error-label",26),i(),n(41,"div",72),_(42,"input",73),n(43,"label",74),l(44,"Are you a Person With Disabilities (PWD)?"),i()(),n(45,"div")(46,"label",75),l(47,"Province"),i(),n(48,"select",76),f("change",function(){g(e);let r=p(3);return x(r.getDemog("psgc/provinces",r.signUpForm.value.province_code,"municipalities"))}),d(49,Ke,2,2,"option",62),i(),d(50,Qe,1,2,"app-error-label",26),i(),n(51,"div",77)(52,"label",78),l(53,"Municipality"),i(),n(54,"select",79),f("change",function(){g(e);let r=p(3);return x(r.getDemog("psgc/municipalities",r.signUpForm.value.municipality_code,"barangays"))}),d(55,Je,2,2,"option",62),i(),d(56,Ye,1,2,"app-error-label",26),i(),n(57,"div",77)(58,"label",80),l(59,"Barangay"),i(),n(60,"select",81),d(61,ze,2,2,"option",62),i(),d(62,Xe,1,2,"app-error-label",26),i(),n(63,"div",59)(64,"label",82),l(65,"Address: lot #, house #, building, etc..."),i(),_(66,"input",83),d(67,Ze,1,2,"app-error-label",26),i(),n(68,"div")(69,"label",84),l(70,"Place of Birth"),i(),_(71,"input",85),d(72,et,1,2,"app-error-label",26),i(),n(73,"div",86)(74,"button",87),f("click",function(){g(e);let r=p(3);return x(r.navigatePage(2))}),l(75," Next "),i()()()}if(t&2){let e=p(3);m(5),a("ngIf",e.formSubmitted),m(10),a("ngIf",e.formSubmitted),m(5),a("ngForOf",e.suffixes),m(6),a("ngIf",e.formSubmitted),m(9),a("ngIf",e.formSubmitted),m(4),a("showMaskTyped",!0),m(),a("ngIf",e.formSubmitted),m(9),a("ngForOf",e.provinces),m(),a("ngIf",e.formSubmitted),m(),a("ngClass",y(17,be,!e.signUpForm.value.province_code)),m(4),a("ngForOf",e.municipalities),m(),a("ngIf",e.formSubmitted),m(),a("ngClass",y(19,be,!e.signUpForm.value.municipality_code)),m(4),a("ngForOf",e.barangays),m(),a("ngIf",e.formSubmitted),m(5),a("ngIf",e.formSubmitted),m(5),a("ngIf",e.formSubmitted)}}function it(t,s){if(t&1&&(n(0,"option",88),l(1),i()),t&2){let e=s.$implicit;a("value",e.id),m(),h(e.desc)}}function nt(t,s){if(t&1&&_(0,"app-error-label",31),t&2){let e=p(4);a("childForm",e.signUpForm)("childFormName","lib_school_id")}}function ot(t,s){if(t&1&&(n(0,"option",88),l(1),i()),t&2){let e=s.$implicit;a("value",e.id),m(),h(e.desc)}}function rt(t,s){if(t&1&&_(0,"app-error-label",31),t&2){let e=p(4);a("childForm",e.signUpForm)("childFormName","lib_academic_program_id")}}function at(t,s){if(t&1&&(n(0,"option",88),l(1),i()),t&2){let e=s.$implicit;a("value",e.id),m(),h(e.desc)}}function lt(t,s){if(t&1&&_(0,"app-error-label",31),t&2){let e=p(4);a("childForm",e.signUpForm)("childFormName","lib_year_level_id")}}function mt(t,s){if(t&1){let e=v();n(0,"div")(1,"input",110,4),f("change",function(r){g(e);let u=p(4);return x(u.onFileSelected(r,"cor_url"))}),i(),n(3,"button",109),f("click",function(){g(e);let r=w(2);return x(r.click())}),_(4,"fa-icon",30),l(5),i()()}if(t&2){let e=p(4);m(3),a("ngClass",y(3,j,e.signUpForm.value.cor_url)),m(),a("icon",e.faArrowUpFromBracket),m(),C(" ",e.signUpForm.value.cor_url?"Change":"Upload"," COR/SOA/Enrollment Certificate ")}}function st(t,s){if(t&1){let e=v();n(0,"div",49)(1,"div")(2,"label",89),l(3,"School/ University Enrolled at"),i(),n(4,"select",90),d(5,it,2,2,"option",62),i(),d(6,nt,1,2,"app-error-label",26),i(),n(7,"div")(8,"label",91),l(9,"Course"),i(),n(10,"select",92),d(11,ot,2,2,"option",62),i(),d(12,rt,1,2,"app-error-label",26),i(),n(13,"div")(14,"label",93),l(15,"Year Level"),i(),n(16,"select",94),d(17,at,2,2,"option",62),i(),d(18,lt,1,2,"app-error-label",26),i(),n(19,"div",95)(20,"div"),_(21,"input",96),n(22,"label",97),l(23,"Are you already a GRANTEE of a scholarship program?"),i()(),n(24,"div"),_(25,"input",98),n(26,"label",99),l(27,"Are you a SHIFTEE?"),i()(),n(28,"div"),_(29,"input",100),n(30,"label",101),l(31,"Are you an IRREGULAR student?"),i()(),n(32,"div",102)(33,"label",103),l(34,"General Weighted Average (GWA)"),i(),_(35,"input",104),i()(),n(36,"div",105),d(37,mt,6,5,"div",106),n(38,"div",107),l(39),i(),n(40,"div")(41,"input",108,2),f("change",function(r){g(e);let u=p(3);return x(u.onFileSelected(r,"photo_url"))}),i(),n(43,"button",109),f("click",function(){g(e);let r=w(42);return x(r.click())}),_(44,"fa-icon",30),l(45),i()(),n(46,"div",107),l(47),i(),n(48,"div")(49,"input",110,3),f("change",function(r){g(e);let u=p(3);return x(u.onFileSelected(r,"grade_url"))}),i(),n(51,"button",109),f("click",function(){g(e);let r=w(50);return x(r.click())}),_(52,"fa-icon",30),l(53),i()(),n(54,"div",107),l(55),i(),n(56,"span",111),l(57),i()(),n(58,"div",112)(59,"button",113),f("click",function(){g(e);let r=p(3);return x(r.navigatePage(3))}),l(60," Next "),i()()()}if(t&2){let e=p(3);m(5),a("ngForOf",e.schools),m(),a("ngIf",e.formSubmitted),m(5),a("ngForOf",e.courses),m(),a("ngIf",e.formSubmitted),m(5),a("ngForOf",e.year_levels),m(),a("ngIf",e.formSubmitted),m(19),a("ngIf",!e.student_email),m(2),C(" ",e.signUpForm.value==null||e.signUpForm.value.cor_url==null?null:e.signUpForm.value.cor_url.name," "),m(4),a("ngClass",y(18,j,e.signUpForm.value.photo_url)),m(),a("icon",e.faArrowUpFromBracket),m(),C(" ",e.signUpForm.value.photo_url?"Change":"Upload"," File 2x2 Picture "),m(2),C(" ",e.signUpForm.value==null||e.signUpForm.value.photo_url==null?null:e.signUpForm.value.photo_url.name," "),m(4),a("ngClass",y(20,j,e.signUpForm.value.grade_url)),m(),a("icon",e.faArrowUpFromBracket),m(),C(" ",e.signUpForm.value.grade_url?"Change":"Upload"," Report of Grade "),m(2),C(" ",e.signUpForm.value==null||e.signUpForm.value.grade_url==null?null:e.signUpForm.value.grade_url.name," "),m(2),h(e.file_err_message),m(2),a("disabled",!e.signUpForm.valid)}}function pt(t,s){if(t&1&&(n(0,"option",88),l(1),i()),t&2){let e=s.$implicit;a("value",e.id),m(),h(e.desc)}}function _t(t,s){if(t&1&&_(0,"app-error-label",31),t&2){let e=p(4);a("childForm",e.signUpForm)("childFormName","average_monthly_income")}}function ct(t,s){if(t&1&&(n(0,"div",140),l(1),i()),t&2){let e=p(4);a("ngClass",$(2,Ie,e.sucess_form,!e.sucess_form)),m(),C(" ",e.submit_message," ")}}function dt(t,s){t&1&&(n(0,"a",141),l(1,"Back to landing page"),i())}function ut(t,s){if(t&1&&_(0,"fa-icon",45),t&2){let e=p(5);a("icon",e.faCircleNotch)}}function ft(t,s){if(t&1){let e=v();n(0,"button",113),f("click",function(){g(e);let r=p(4);return x(r.onSubmit())}),d(1,ut,1,1,"fa-icon",39),l(2," Submit "),i()}if(t&2){let e=p(4);a("disabled",e.is_saving)("disabled",!e.signUpForm.valid),m(),a("ngIf",e.is_saving)}}function gt(t,s){if(t&1&&(n(0,"div",50)(1,"div",114),_(2,"input",115),n(3,"label",116),l(4,"One or both parents is an overseas filipino worker (OFW)"),i()(),n(5,"div",114),_(6,"input",117),n(7,"label",118),l(8,"Solo Parent"),i()(),n(9,"fieldset",119)(10,"legend",120),l(11,"Father's Information"),i(),n(12,"div",121)(13,"div")(14,"label",122),l(15,"Name of Father"),i(),_(16,"input",123),i(),n(17,"div")(18,"label",124),l(19,"Occupation"),i(),_(20,"input",125),i(),n(21,"div")(22,"label",126),l(23,"Company"),i(),_(24,"input",127),i()()(),n(25,"fieldset",119)(26,"legend",120),l(27,"Mother's Information"),i(),n(28,"div",121)(29,"div")(30,"label",128),l(31,"Name of Mother"),i(),_(32,"input",129),i(),n(33,"div")(34,"label",130),l(35,"Occupation"),i(),_(36,"input",131),i(),n(37,"div")(38,"label",132),l(39,"Company"),i(),_(40,"input",133),i()()(),n(41,"div",134)(42,"label",135),l(43,"Average Monthly Income"),i(),n(44,"select",136),d(45,pt,2,2,"option",62),i(),d(46,_t,1,2,"app-error-label",26),i(),d(47,ct,2,5,"div",137),n(48,"div",112),d(49,dt,2,0,"a",138)(50,ft,3,3,"button",139),i()()),t&2){let e=p(3);m(45),a("ngForOf",e.incomes),m(),a("ngIf",e.formSubmitted),m(),a("ngIf",e.submit_message),m(2),a("ngIf",e.signUpForm.disabled),m(),a("ngIf",e.signUpForm.enabled)}}function xt(t,s){if(t&1){let e=v();n(0,"div",17)(1,"div",19)(2,"div",46)(3,"button",47),f("click",function(){g(e);let r=p(2);return x(r.navigatePage(1))}),l(4," Part 1 "),i(),n(5,"button",47),f("click",function(){g(e);let r=p(2);return x(r.navigatePage(2))}),l(6," Part 2 "),i(),n(7,"button",47),f("click",function(){g(e);let r=p(2);return x(r.navigatePage(3))}),l(8," Part 3 "),i()(),d(9,tt,76,21,"div",48)(10,st,61,22,"div",49)(11,gt,51,5,"div",50),i()()}if(t&2){let e,o=p(2);m(3),T(y(10,O,+o.page==1)),a("disabled",!o.signUpForm.valid&&o.page<2),m(2),T(y(12,O,+o.page==2)),a("disabled",!o.signUpForm.valid&&o.page<3),m(2),T(y(14,O,+o.page==3)),a("disabled",!o.signUpForm.valid&&o.page===1),m(2),E((e=o.page)===1?9:e===2?10:e===3?11:-1)}}function ht(t,s){t&1&&(n(0,"div",16)(1,"div",142)(2,"div",19)(3,"div",143)(4,"div",144),l(5," Reviewing your Account "),i(),n(6,"div",145),l(7," Please wait for 1-2 working days for us to review and activate your account. Expect a message that will be sent to your device through SMS and Email for updates. Thank you! "),i(),n(8,"div",146)(9,"a",147)(10,"span",148),l(11,"Back to Home"),i()()()()()()())}function Ct(t,s){if(t&1&&(n(0,"form",15),d(1,Be,47,11,"div",16)(2,xt,12,16,"div",17)(3,ht,12,0,"div",16),i()),t&2){let e=p();a("formGroup",e.signUpForm),m(),E(e.page===0?1:e.page>=1&&e.page<=3?2:3)}}function bt(t,s){if(t&1&&(n(0,"div",149)(1,"div",150),_(2,"fa-icon",151),i(),n(3,"div",150),l(4," Loading libraries... "),i()()),t&2){let e=p();m(2),a("icon",e.faCircleNotch)}}function vt(t,s){if(t&1){let e=v();n(0,"app-terms-of-use",152),f("toggleModal",function(){g(e);let r=p();return x(r.toggleModal("terms-of-use"))}),i()}}function yt(t,s){if(t&1){let e=v();n(0,"app-user-agreement",152),f("toggleModal",function(){g(e);let r=p();return x(r.toggleModal("user-agreement"))}),i()}}var ve=(()=>{class t{resendCode(){}toggleOTPPage(){this.showOTPPage=!this.showOTPPage}navigatePage(e){e>=1&&e<=3?!this.email_valid&&e===1?(console.log("test"),this.checkEmail(e)):(e===1&&this.loadLibraries(),this.signUpForm.valid?(this.formSubmitted=!1,this.page=e,this.toggleRequired(e)):this.formSubmitted=!0):this.page=e}checkEmail(e){this.checking_email=!0,this.http.checkEmail({params:{email:this.signUpForm.value.email}}).subscribe({next:o=>{let r=this.signUpForm.value.email.split("@");this.toggleRequired(e),this.student_email=this.emails_domain.includes(r[1]),this.checking_email=!1,this.loadLibraries(),this.page=1},error:o=>{console.log(o),console.log(this.signUpForm),this.email_err=o.error.message,this.checking_email=!1}})}onSubmit(){this.signUpForm.patchValue({ofw_flag:this.signUpForm.value.ofw_flag?1:0,scholar_flag:this.signUpForm.value.scholar_flag?1:0,shiftee_flag:this.signUpForm.value.shiftee_flag?1:0,irregular_flag:this.signUpForm.value.irregular_flag?1:0,pwd_flag:this.signUpForm.value.irregular_flag?1:0,solo_parent_flag:this.signUpForm.value.irregular_flag?1:0});let e=new FormData;Object.keys(this.signUpForm.controls).forEach(o=>{let r=this.signUpForm.get(o);r?.value instanceof File?e.append(o,r.value):r&&e.append(o,r.value??"")}),this.is_saving=!0,this.http.register(e).subscribe({next:o=>{this.sucess_form=!0,this.signUpForm.disable(),this.submit_message=o.message,this.is_saving=!1},error:o=>{this.submit_message=o.error.message,this.is_saving=!1}})}toggleRequired(e){let o=["first_name","last_name","contact_number","gender","birthdate","province_code","municipality_code","barangay_code","address","place_of_birth"],r=["lib_school_id","course_code","year_level","photo_url","grade_url"],u=["average_monthly_income"];switch(e){case 1:this.clearValidator(r),this.clearValidator(u),this.addValidator(o);break;case 2:this.clearValidator(u),this.addValidator(r);break;case 3:this.addValidator(u);break;default:break}}get f(){return this.signUpForm.controls}addValidator(e){e.forEach(o=>{o==="contact_number"?this.signUpForm.get(o)?.setValidators([b.required,b.minLength(11),b.maxLength(11)]):this.signUpForm.get(o)?.setValidators([b.required]),this.signUpForm.get(o)?.updateValueAndValidity()})}clearValidator(e){e.forEach(o=>{this.signUpForm.get(o)?.clearValidators(),this.signUpForm.get(o)?.updateValueAndValidity()})}loadLibraries(){if(!this.suffixes&&!this.provinces&&!this.schools&&!this.courses&&!this.year_levels&&!this.incomes){this.loading_libraries=!0;let e=this.http.get("libraries/suffix-names"),o=this.http.get("psgc/provinces",{params:{per_page:"all"}}),r=this.http.get("libraries/school",{params:{per_page:"all"}}),u=this.http.get("libraries/academic-programs",{params:{per_page:"all"}}),S=this.http.get("libraries/year-level",{params:{per_page:"all"}}),we=this.http.get("libraries/monthly-income",{params:{per_page:"all"}});D([e,o,r,u,S,we]).subscribe({next:([M,Fe,Ee,Pe,Ue,ke])=>{this.suffixes=M.data,this.provinces=Fe.data,this.schools=Ee.data,this.courses=Pe.data,this.year_levels=Ue.data,this.incomes=ke.data,this.loading_libraries=!1},error:M=>console.log(M)})}}handleKeyPress(e,o){e.key==="Enter"&&o.click()}getDemog(e,o,r){e==="psgc/provinces"&&(this.signUpForm.patchValue({municipality_code:null,barangay_code:null}),this.municipalities=null,this.barangays=null),this.http.get(e+"/"+o,{params:{include:r}}).subscribe({next:u=>{this[r]=u.data[r]},error:u=>console.log(u)})}togglePassword(){this.isInputPass=!this.isInputPass}onFileSelected(e,o){this.file_err_message=null;let r=e.target.files?.[0];r&&["image/jpeg","image/png","application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(r.type)?this.signUpForm.patchValue({[o]:r}):(this.file_err_message="Invalid file type. Only PDF, DOC, DOCX, JPG, and PNG files are allowed.",this.signUpForm.patchValue({[o]:null})),console.log(this.signUpForm.value)}createForm(){this.signUpForm=this.formBuilder.nonNullable.group({id:[null],first_name:[null],middle_name:[null],last_name:[null],suffix_name:["NA"],contact_number:[null],email:[null,[b.required,b.email]],password:[null,[b.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*\\-_]).{6,}$")]],password_confirmation:[null,[b.required,b.minLength(6)]],gender:[null],birthdate:[null],province_code:["0306900000"],municipality_code:[null],barangay_code:[null],address:[null],scholar_flag:[!1],shiftee_flag:[!1],irregular_flag:[!1],pwd_flag:[!1],place_of_birth:[null],lib_school_id:[null],lib_education_level_id:[3],lib_year_level_id:[null],lib_academic_program_id:[null],gwa:[null],ofw_flag:[!1],solo_parent_flag:[!1],fathers_name:[null],fathers_occupation:[null],fathers_company:[null],mothers_name:[null],mothers_occupation:[null],mothers_company:[null],average_monthly_income:[null],cor_url:[null],photo_url:[null],grade_url:[null]}),this.getDemog("psgc/provinces",this.signUpForm.value.province_code,"municipalities"),this.show_form=!0}closeSignUp(){this.closeSignUpPage.emit()}toggleModal(e){this.modals[e]=!this.modals[e]}constructor(e,o,r){this.formBuilder=e,this.http=o,this.cdRef=r,this.closeSignUpPage=new B,this.faArrowUpFromBracket=ce,this.faCircleNotch=pe,this.faEye=de,this.faEyeSlash=_e,this.modals=[],this.page=0,this.signUpForm=Ce(),this.showOTPPage=!1,this.formSubmitted=!1,this.emails_domain=["student.tsu.edu.ph","tarlac.sti.edu.ph","cldhei.edu.ph","pwutarlac.edu.ph"],this.email_valid=!1,this.checking_email=!1,this.student_email=!1,this.is_saving=!1,this.sucess_form=!1,this.loading_libraries=!1,this.isInputPass=!0,this.show_form=!1}ngOnInit(){this.createForm()}ngAfterViewInit(){this.show_form&&this.emailInput&&(this.cdRef.detectChanges(),this.emailInput.nativeElement.focus())}static{this.\u0275fac=function(o){return new(o||t)(F(me),F(xe),F(W))}}static{this.\u0275cmp=U({type:t,selectors:[["app-signup-page"]],viewQuery:function(o,r){if(o&1&&L(Te,5),o&2){let u;G(u=q())&&(r.emailInput=u.first)}},inputs:{withStudentEmail:"withStudentEmail"},outputs:{closeSignUpPage:"closeSignUpPage"},decls:11,vars:5,consts:[["emailInput",""],["proceedBtn",""],["filePhoto",""],["fileRog",""],["fileCOR",""],[1,"h-fit","w-full","md:h-full","justify-center","items-center","flex","flex-col"],[1,"flex","py-3","px-5","w-4/5"],[1,"flex","flex-col","md:flex-row","md:justify-between","w-full"],[1,"flex"],["src","../assets/img/resourcehub-log.png",1,"h-11"],[1,"text-blue-600","font-normal","mt-3","ml-5"],["class","text-sm mt-3",4,"ngIf"],[3,"formGroup",4,"ngIf"],["class","flex flex-col justify-center h-96",4,"ngIf"],[1,"text-sm","mt-3"],[3,"formGroup"],[1,"relative","p-4","w-full","max-w-xl","h-auto"],[1,"relative","p-4","w-full","max-w-5xl"],[1,"bg-white","h-auto","p-5","md:p-10","rounded-xl","border","border-slate-200","shadow-2xl"],[1,"flex","flex-col"],[1,"flex","justify-between","text-blue-600","font-semibold"],["tabindex","0","href","/#"],[1,"flex","flex-col","p-3","md:p-10"],[1,"mb-5"],["id","email",1,"text-xs","text-gray-400"],["id","email","formControlName","email","type","text","placeholder","Enter your email",1,"input-txt","-mb-2",3,"keypress"],[3,"childForm","childFormName",4,"ngIf"],["for","password",1,"text-xs","text-gray-400"],["id","password","formControlName","password","placeholder","Enter your Password",1,"input-txt","rounded-r-none","border-r-0",3,"keypress","type"],["type","button",1,"input-txt","w-12","rounded-l-none","border-l-0",3,"click"],[3,"icon"],[3,"childForm","childFormName"],["for","password_confirmation",1,"text-xs","text-gray-400"],["id","password_confirmation","formControlName","password_confirmation","placeholder","Confirm your Password",1,"input-txt",3,"keypress","type"],["class","error-label",4,"ngIf"],[1,"text-sm","italic","text-red-600","pt-2"],[1,"flex","flex-col","md:flex-row","justify-center"],[1,"flex","flex-col","w-full","md:w-3/5"],[1,"btn-blue-nr","mt-5","h-14",3,"click","disabled"],["animation","spin","class","mr-1",3,"icon",4,"ngIf"],[1,"text-center","text-xs","mt-1"],[1,"text-sky-400","hover:cursor-pointer",3,"click"],[1,"hover:cursor-pointer","ml-3","mt-5","text-xs","text-center"],["href","#/login",1,"text-blue-600","hover:cursor-pointer"],[1,"error-label"],["animation","spin",1,"mr-1",3,"icon"],[1,"grid","grid-cols-3","font-semibold","text-center","text-gray-500"],[1,"border-b-2","hover:cursor-pointer",3,"click","disabled"],[1,"flex","flex-col","md:grid","md:grid-cols-3","md:gap-4","p-3","md:p-10"],[1,"flex","flex-col","w-full"],[1,"md:grid","md:grid-cols-2","md:gap-4"],["for","first_name",1,"text-xs","text-gray-400"],["id","first_name","formControlName","first_name","type","text",1,"input-txt","-mb-2"],["for","middle_name",1,"text-xs","text-gray-400"],["id","middle_name","formControlName","middle_name","type","text",1,"input-txt","-mb-2"],[1,"grid","grid-cols-6"],[1,"col-span-4"],["for","last_name",1,"text-xs","text-gray-400"],["id","last_name","formControlName","last_name","type","text",1,"input-txt","-mb-2"],[1,"col-span-2"],["for","suffix_name",1,"text-xs","text-gray-400"],["id","suffix_name","formControlName","suffix_name",1,"input-txt","-mb-2"],[3,"value",4,"ngFor","ngForOf"],[1,"grid","grid-cols-2"],["for","birthdate",1,"text-xs","text-gray-400"],["id","birthdate","formControlName","birthdate","type","date","placeholder","mm/dd/yyyy",1,"input-txt","text-sm","placeholder:text-gray-400"],["for","gender",1,"text-xs","text-gray-400"],["id","gender","formControlName","gender",1,"input-txt","-mb-2"],["value","M"],["value","F"],["for","contact_number",1,"text-xs","text-gray-400"],["id","contact_number","mask","(9999) 999-9999","formControlName","contact_number","type","text",1,"input-txt","-mb-2",3,"showMaskTyped"],[1,"mt-4"],["id","pwd_flag","formControlName","pwd_flag","type","checkbox",1,"checkbox"],["for","pwd_flag",1,"pl-2"],["for","province_code",1,"text-xs","text-gray-400"],["id","province_code","formControlName","province_code",1,"input-txt","-mb-2",3,"change"],[3,"ngClass"],["for","municipality_code",1,"text-xs","text-gray-400"],["id","municipality_code","formControlName","municipality_code",1,"input-txt","-mb-2",3,"change"],["for","barangay_code",1,"text-xs","text-gray-400"],["id","barangay_code","formControlName","barangay_code",1,"input-txt","-mb-2"],["for","address",1,"text-xs","text-gray-400"],["id","address","formControlName","address","type","text",1,"input-txt","-mb-2"],["for","place_of_birth",1,"text-xs","text-gray-400"],["id","place_of_birth","formControlName","place_of_birth","type","text",1,"input-txt","-mb-2"],[1,"md:col-span-3","flex","justify-end","mt-5"],[1,"btn-blue",3,"click"],[3,"value"],["for","lib_school_id",1,"text-xs","text-gray-400"],["id","lib_school_id","formControlName","lib_school_id",1,"input-txt","-mb-2"],["for","lib_academic_program_id",1,"text-xs","text-gray-400"],["id","lib_academic_program_id","formControlName","lib_academic_program_id",1,"input-txt","-mb-2"],["for","lib_year_level_id",1,"text-xs","text-gray-400"],["id","lib_year_level_id","formControlName","lib_year_level_id",1,"input-txt","-mb-2"],[1,"grid","grid-col-3","gap-x-4","mt-3"],["id","scholar_flag","formControlName","scholar_flag","type","checkbox",1,"rounded-md","text-lg","mr-1"],["for","scholar_flag"],["id","shiftee_flag","formControlName","shiftee_flag","type","checkbox",1,"rounded-md","text-lg","mr-1"],["for","shiftee_flag"],["id","irregular_flag","formControlName","irregular_flag","type","checkbox",1,"rounded-md","text-lg","mr-1"],["for","irregular_flag"],[1,"flex","flex-row"],["for","gwa"],["id","gwa","formControlName","gwa","type","text","max","5.0","min","1.0",1,"input-txt","w-28","ml-3"],[1,"grid","grid-cols-2","gap-x-4","mt-3","w-full"],[4,"ngIf"],[1,"font-semibold","text-sm","mt-2"],["type","file","accept",".jpg,.jpeg,.png",1,"hidden",3,"change"],[1,"btn-blue-nr","text-white","w-full","text-sm","mt-2",3,"click","ngClass"],["type","file","accept",".pdf,.doc,.docx",1,"hidden",3,"change"],[1,"italic","text-red-500","text-xs"],[1,"md:col-span-2","flex","justify-end","mt-5"],[1,"btn-blue",3,"click","disabled"],[1,"col-span-2","flex","justify-left","mt-2"],["id","ofw_flag","formControlName","ofw_flag","type","checkbox",1,"rounded-md","text-lg","mr-1"],["for","ofw_flag"],["id","solo_parent_flag","formControlName","solo_parent_flag","type","checkbox",1,"rounded-md","text-lg","mr-1"],["for","solo_parent_flag"],[1,"border","border-gray-400"],[1,"ml-3"],[1,"flex","flex-col","m-3","px-1"],["for","fathers_name",1,"text-xs"],["id","fathers_name","formControlName","fathers_name","type","text",1,"input-txt","-mb-2"],["for","fathers_occupation",1,"text-xs"],["id","fathers_occupation","formControlName","fathers_occupation","type","text",1,"input-txt","-mb-2"],["for","fathers_company",1,"text-xs"],["id","fathers_company","formControlName","fathers_company","type","text",1,"input-txt","-mb-2"],["for","mothers_name",1,"text-xs"],["id","mothers_name","formControlName","mothers_name","type","text",1,"input-txt","-mb-2"],["for","mothers_occupation",1,"text-xs"],["id","mothers_occupation","formControlName","mothers_occupation","type","text",1,"input-txt","-mb-2"],["for","mothers_company",1,"text-xs"],["id","mothers_company","formControlName","mothers_company","type","text",1,"input-txt","-mb-2"],[1,"md:col-span-2"],["for","average_monthly_income",1,"text-xs"],["id","average_monthly_income","formControlName","average_monthly_income","type","text",1,"input-txt","-mb-2"],["class","flex italic text-sm ",3,"ngClass",4,"ngIf"],["class","btn-blue","href","/#",4,"ngIf"],["class","btn-blue",3,"disabled","click",4,"ngIf"],[1,"flex","italic","text-sm",3,"ngClass"],["href","/#",1,"btn-blue"],[1,"bg-white","h-auto","p-5","md:p-10","rounded-xl","shadow-2xl"],[1,"flex","flex-col","p-3","md:p-10","text-center"],[1,"text-3xl","font-semibold"],[1,"text-justify","mt-5"],[1,"flex","flex-col","w-full","justify-center"],["href","/",1,"btn-blue-nr","mt-5","h-12"],[1,"pt-2"],[1,"flex","flex-col","justify-center","h-96"],[1,"flex","justify-center"],["animation","spin",1,"text-blue-600",3,"icon"],[3,"toggleModal"]],template:function(o,r){o&1&&(n(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",8),_(4,"img",9),d(5,Ae,4,1,"span",10),i(),d(6,Oe,2,0,"div",11),i()(),d(7,Ct,4,2,"form",12)(8,bt,5,1,"div",13),i(),d(9,vt,1,0,"app-terms-of-use")(10,yt,1,0,"app-user-agreement")),o&2&&(m(5),E(r.page!==4?5:-1),m(),a("ngIf",r.page>=1&&r.page<=3),m(),a("ngIf",r.show_form&&!r.loading_libraries),m(),a("ngIf",!r.show_form||r.loading_libraries),m(),E(r.modals["terms-of-use"]?9:r.modals["user-agreement"]?10:-1))},dependencies:[H,K,Q,fe,N,V,ie,ae,le,X,z,re,Z,ee,ne,oe,I,he]})}}return t})();var ye=(()=>{class t{openSignUpPage(e){this.showSignupPage=!0,this.withStudentEmail=e}closeSignUpPage(){this.showSignupPage=!1}navigateTo(e){this.router.navigate([e])}constructor(e){this.router=e,this.faArrowLeft=ue,this.showSignupPage=!1,this.withStudentEmail=!1}static{this.\u0275fac=function(o){return new(o||t)(F(Y))}}static{this.\u0275cmp=U({type:t,selectors:[["app-signup"]],decls:1,vars:1,consts:[[3,"closeSignUpPage","withStudentEmail"]],template:function(o,r){o&1&&(n(0,"app-signup-page",0),f("closeSignUpPage",function(){return r.closeSignUpPage()}),i()),o&2&&a("withStudentEmail",r.withStudentEmail)},dependencies:[ve]})}}return t})();var wt=[{path:"",component:ye}],Se=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=k({type:t})}static{this.\u0275inj=P({imports:[A.forChild(wt),A]})}}return t})();var li=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=k({type:t})}static{this.\u0275inj=P({imports:[J,Se,ge,N,V,se,I]})}}return t})();export{li as SignupModule};