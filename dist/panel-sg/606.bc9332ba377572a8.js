"use strict";(self.webpackChunkPanelSG=self.webpackChunkPanelSG||[]).push([[606],{3606:(Qe,b,u)=>{u.r(b),u.d(b,{DeceModule:()=>qe});var g=u(6895),p=u(668),c=u(433);class Z{constructor(){this.form=new c.cw({CI:new c.NI("",[c.kI.required,c.kI.maxLength(10),c.kI.maxLength(10),c.kI.pattern("[0-9]*")]),name:new c.NI("",[c.kI.required,c.kI.minLength(3),c.kI.pattern("^[a-zA-Z\xf1\xe1\xe9\xed\xf6\xe4\xeb\xe9\xf6\xe5\xe7 ]*$")]),lastName:new c.NI("",[c.kI.required,c.kI.minLength(3),c.kI.pattern("^[a-zA-Z\xf1\xe1\xe9\xed\xf6\xe4\xeb\xe9\xf6\xe5\xe7 ]*$")]),address:new c.NI("",[c.kI.minLength(2)]),phone:new c.NI("",[c.kI.required,c.kI.minLength(6),c.kI.maxLength(10),c.kI.pattern("[0-9]*")]),email:new c.NI("",[c.kI.required,c.kI.email]),nameInstitution:new c.NI(!1)})}}var e=u(8256),_=u(2126),T=u(9456),C=u(4323),w=u(2340),y=u(529);let x=(()=>{class t{constructor(n){this.http=n,this.URL=w.N.api+"/api/1.0"}createDece(n){return this.http.post(`${this.URL}/dece`,n)}getAllDece(){return this.http.get(`${this.URL}/dece`)}getDece(n){return this.http.get(`${this.URL}/dece/${n}`)}updateDece(n,o){return this.http.put(`${this.URL}/dece/${n}`,o)}deleteDece(n){return this.http.delete(`${this.URL}/dece/${n}`)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(y.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function N(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",31),e.BQk())}function A(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",32),e.BQk())}function U(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",33),e.BQk())}function D(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",32),e.BQk())}function q(t,i){if(1&t&&(e.TgZ(0,"div",29),e.YNc(1,N,2,0,"ng-container",30),e.YNc(2,A,2,0,"ng-container",30),e.YNc(3,U,2,0,"ng-container",30),e.YNc(4,D,2,0,"ng-container",30),e.qZA()),2&t){const n=e.oxw();let o,r,l,a;e.xp6(1),e.Q6J("ngIf",null==(o=n.formDece.form.get("CI"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(r=n.formDece.form.get("CI"))||null==r.errors?null:r.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(l=n.formDece.form.get("CI"))||null==l.errors?null:l.errors.pattern),e.xp6(1),e.Q6J("ngIf",null==(a=n.formDece.form.get("CI"))||null==a.errors?null:a.errors.maxlength)}}function Q(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",34),e.BQk())}function E(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",35),e.BQk())}function J(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",36),e.BQk())}function k(t,i){if(1&t&&(e.TgZ(0,"div",29),e.YNc(1,Q,2,0,"ng-container",30),e.YNc(2,E,2,0,"ng-container",30),e.YNc(3,J,2,0,"ng-container",30),e.qZA()),2&t){const n=e.oxw();let o,r,l;e.xp6(1),e.Q6J("ngIf",null==(o=n.formDece.form.get("name"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(r=n.formDece.form.get("name"))||null==r.errors?null:r.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(l=n.formDece.form.get("name"))||null==l.errors?null:l.errors.pattern)}}function Y(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",37),e.BQk())}function F(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",35),e.BQk())}function R(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",36),e.BQk())}function L(t,i){if(1&t&&(e.TgZ(0,"div",29),e.YNc(1,Y,2,0,"ng-container",30),e.YNc(2,F,2,0,"ng-container",30),e.YNc(3,R,2,0,"ng-container",30),e.qZA()),2&t){const n=e.oxw();let o,r,l;e.xp6(1),e.Q6J("ngIf",null==(o=n.formDece.form.get("lastName"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(r=n.formDece.form.get("lastName"))||null==r.errors?null:r.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(l=n.formDece.form.get("lastName"))||null==l.errors?null:l.errors.pattern)}}function S(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",35),e.BQk())}function B(t,i){if(1&t&&(e.TgZ(0,"div",29),e.YNc(1,S,2,0,"ng-container",30),e.qZA()),2&t){const n=e.oxw();let o;e.xp6(1),e.Q6J("ngIf",null==(o=n.formDece.form.get("address"))||null==o.errors?null:o.errors.minlength)}}function j(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",38),e.BQk())}function M(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",32),e.BQk())}function O(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",32),e.BQk())}function $(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",39),e.BQk())}function z(t,i){if(1&t&&(e.TgZ(0,"div",29),e.YNc(1,j,2,0,"ng-container",30),e.YNc(2,M,2,0,"ng-container",30),e.YNc(3,O,2,0,"ng-container",30),e.YNc(4,$,2,0,"ng-container",30),e.qZA()),2&t){const n=e.oxw();let o,r,l,a;e.xp6(1),e.Q6J("ngIf",null==(o=n.formDece.form.get("phone"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(r=n.formDece.form.get("phone"))||null==r.errors?null:r.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(l=n.formDece.form.get("phone"))||null==l.errors?null:l.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==(a=n.formDece.form.get("phone"))||null==a.errors?null:a.errors.pattern)}}function G(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",40),e.BQk())}function K(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",41),e.BQk())}function P(t,i){if(1&t&&(e.TgZ(0,"div",29),e.YNc(1,G,2,0,"ng-container",30),e.YNc(2,K,2,0,"ng-container",30),e.qZA()),2&t){const n=e.oxw();let o,r;e.xp6(1),e.Q6J("ngIf",null==(o=n.formDece.form.get("email"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(r=n.formDece.form.get("email"))||null==r.errors?null:r.errors.email)}}function H(t,i){if(1&t&&(e.TgZ(0,"option",42),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.Q6J("value",n.nameInstitution),e.xp6(1),e.hij(" ",n.nameInstitution," ")}}let X=(()=>{class t{constructor(n,o,r,l,a,s){this.notification=n,this.institutionService=o,this.personService=r,this.deceService=l,this.route=a,this.router=s,this.formDece=new Z,this.instituciones=[]}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.formDece.form.reset(),this.getInstitutions(),this.getDece()}update(){const{CI:n,name:o,lastName:r,address:l,phone:a,email:s,nameInstitution:m}=this.formDece.form.value;this.deceService.updateDece(this.id,{CI:n,name:o,lastName:r,address:l,phone:a,email:s,nameInstitution:m}).subscribe(f=>{const{message:v}=f;console.log(v),this.notification.showSuccess("Actualizado","Dece actualizado  con exito"),this.router.navigate(["../../listar"],{relativeTo:this.route})},f=>{this.notification.showError("Error ",0===f.status?"No se pudo conectar con el servidor":f.error)})}getDece(){this.deceService.getDece(this.id).subscribe(n=>{const{message:o,data:r}=n;this.dece=r,console.log(o),this.setValues(this.dece)},n=>{0===n.status?this.notification.showError("Error ","No se pudo conectar con el servidor"):console.log(n)})}setValues(n){this.formDece.form.setValue({CI:n.CI,name:n.name,lastName:n.lastName,address:n.address,phone:n.phone,email:n.email,nameInstitution:n.nameInstitution}),this.formDece.form.markAllAsTouched()}getInstitutions(){this.institutionService.getAllInstitution().subscribe(n=>{const{message:o,data:r}=n;this.instituciones=r,console.log(o)},n=>{0===n.status?this.notification.showError("Error ","No se pudo conectar con el servidor"):console.log(n)})}cancel(){this.router.navigate(["../../listar"],{relativeTo:this.route})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_.T),e.Y36(T.b),e.Y36(C.J),e.Y36(x),e.Y36(p.gz),e.Y36(p.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-editar"]],decls:66,vars:9,consts:[[1,"w-[95%]","lg:h-[95%]","m-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden"],[1,"w-full","lg:h-[10%]","text-center","text-2xl","font-bold","text-camelot","py-4","flex","items-center","justify-center","uppercase"],[1,"w-full","lg:h-[93%]","py-4",3,"formGroup","ngSubmit"],[1,"w-full","flex","flex-col","items-center"],[1,"lg:w-[60%]","w-[80%]","h-[10%]","text-start","text-lg","font-bold","text-camelot-400","border-b-2","border-camelot","py-2","mb-2"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-2","mb-4","grid-cols-1"],[1,"w-full","col-span-1","text-camelot","text-lg","mt-2","py-1","text-left"],["for","name"],[1,"w-full","col-span-1","text-nile-blue","text-lg","flex","items-center","justify-center","mt-1"],["type","text","id","CIS","formControlName","CI","placeholder","Ingrese el CI",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3"],["class","text-red-200 text-xl rounded pl-2 flex","role","alert",4,"ngIf"],["type","text","id","name","formControlName","name","placeholder","Ingrese los nombres ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3"],["type","text","id","lastName","formControlName","lastName","placeholder","Ingrese los apellidos ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["for","address"],["type","text","id","address","formControlName","address","placeholder","Ingrese la direcci\xf3n ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["type","text","id","phone","formControlName","phone","placeholder","Ingrese el tel\xe9fono ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["type","email","id","email","formControlName","email","placeholder","Ingrese el correo electr\xf3nico ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],[1,"lg:w-[60%]","w-[80%]","h-[8%]","text-start","text-lg","font-bold","text-camelot-400","border-b-2","border-camelot","flex","items-center"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-4","mb-4","grid-cols-1"],[1,"w-full","col-span-2","text-camelot","text-lg","mr-2","text-left"],["for","institucion"],[1,"w-full","col-span-2","text-nile-blue","text-lg"],["id","selectTeacher","formControlName","nameInstitution",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["value","0"],[3,"value",4,"ngFor","ngForOf"],[1,"lg:w-[60%]","w-[80%]","grid","grid-cols-1","mb-4"],[1,"w-full","flex","text-camelot","text-lg","mr-2","mb-2","justify-end"],["type","button",1,"border-2","border-camelot","text-base","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","hover:bg-nile-blue","hover:text-cameo","mr-2",3,"click"],["type","submit",1,"border-2","border-camelot","text-base","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","hover:bg-nile-blue","hover:text-cameo",3,"disabled"],["role","alert",1,"text-red-200","text-xl","rounded","pl-2","flex"],[4,"ngIf"],["title","C\xe9dula requerida",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Longitud de 10 caracteres requerida",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Solo se permiten n\xfameros",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer"],["title","Nombre requerido",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Longitud minima requerida",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Solo se permiten letras",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Apellidos requeridos",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Telefono es requerido",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Solo se permiten n\xfameros",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Email requerido",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Email invalido",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],[3,"value"]],template:function(n,o){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Editar datos del encargado de DECE "),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return o.update()}),e.TgZ(4,"fieldset",3)(5,"div",4),e._uU(6," Datos personales "),e.qZA(),e.TgZ(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10,"CI:"),e.qZA()(),e.TgZ(11,"div",8),e._UZ(12,"input",9),e.YNc(13,q,5,4,"div",10),e.qZA()(),e.TgZ(14,"div",5)(15,"div",6)(16,"label",7),e._uU(17," Nombres:"),e.qZA()(),e.TgZ(18,"div",8),e._UZ(19,"input",11),e.YNc(20,k,4,3,"div",10),e.qZA()(),e.TgZ(21,"div",5)(22,"div",6)(23,"label",7),e._uU(24," Apellidos :"),e.qZA()(),e.TgZ(25,"div",8),e._UZ(26,"input",12),e.YNc(27,L,4,3,"div",10),e.qZA()(),e.TgZ(28,"div",5)(29,"div",6)(30,"label",13),e._uU(31," Direcci\xf3n :"),e.qZA()(),e.TgZ(32,"div",8),e._UZ(33,"input",14),e.YNc(34,B,2,1,"div",10),e.qZA()(),e.TgZ(35,"div",5)(36,"div",6)(37,"label",7),e._uU(38," Tel\xe9fono :"),e.qZA()(),e.TgZ(39,"div",8),e._UZ(40,"input",15),e.YNc(41,z,5,4,"div",10),e.qZA()(),e.TgZ(42,"div",5)(43,"div",6)(44,"label",7),e._uU(45,"Correo electr\xf3nico :"),e.qZA()(),e.TgZ(46,"div",8),e._UZ(47,"input",16),e.YNc(48,P,3,2,"div",10),e.qZA()(),e.TgZ(49,"div",17),e._uU(50," Datos de la instituci\xf3n "),e.qZA(),e.TgZ(51,"div",18)(52,"div",19)(53,"label",20),e._uU(54," Instituci\xf3n: "),e.qZA()(),e.TgZ(55,"div",21)(56,"select",22)(57,"option",23),e._uU(58,"Seleccione una instituci\xf3n"),e.qZA(),e.YNc(59,H,2,2,"option",24),e.qZA()()(),e.TgZ(60,"div",25)(61,"div",26)(62,"button",27),e.NdJ("click",function(){return o.cancel()}),e._uU(63," Cancelar "),e.qZA(),e.TgZ(64,"button",28),e._uU(65," Editar "),e.qZA()()()()()()),2&n){let r,l,a,s,m,d;e.xp6(3),e.Q6J("formGroup",o.formDece.form),e.xp6(10),e.Q6J("ngIf",(null==(r=o.formDece.form.get("CI"))?null:r.invalid)&&(null==(r=o.formDece.form.get("CI"))?null:r.touched)),e.xp6(7),e.Q6J("ngIf",(null==(l=o.formDece.form.get("name"))?null:l.invalid)&&(null==(l=o.formDece.form.get("name"))?null:l.touched)),e.xp6(7),e.Q6J("ngIf",(null==(a=o.formDece.form.get("lastName"))?null:a.invalid)&&(null==(a=o.formDece.form.get("lastName"))?null:a.touched)),e.xp6(7),e.Q6J("ngIf",(null==(s=o.formDece.form.get("address"))?null:s.invalid)&&(null==(s=o.formDece.form.get("address"))?null:s.touched)),e.xp6(7),e.Q6J("ngIf",(null==(m=o.formDece.form.get("phone"))?null:m.invalid)&&(null==(m=o.formDece.form.get("phone"))?null:m.touched)),e.xp6(7),e.Q6J("ngIf",(null==(d=o.formDece.form.get("email"))?null:d.invalid)&&(null==(d=o.formDece.form.get("email"))?null:d.touched)),e.xp6(11),e.Q6J("ngForOf",o.instituciones),e.xp6(5),e.Q6J("disabled",o.formDece.form.invalid)}},dependencies:[g.sg,g.O5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.sg,c.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),t})();var h=u(6561);function V(t,i){1&t&&(e.TgZ(0,"div",2),e._UZ(1,"div",3),e.TgZ(2,"div",4)(3,"div",5),e._UZ(4,"div",6),e.TgZ(5,"div",7)(6,"span",8),e._uU(7,"Cargando"),e.qZA(),e.TgZ(8,"span",9),e._uU(9,"..."),e.qZA()()()()())}function W(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"tr")(1,"td",23),e._uU(2),e.qZA(),e.TgZ(3,"td",23),e._uU(4),e.qZA(),e.TgZ(5,"td",23),e._uU(6),e.qZA(),e.TgZ(7,"td",23),e._uU(8),e.qZA(),e.TgZ(9,"td",23),e._uU(10),e.qZA(),e.TgZ(11,"td",24)(12,"label",25)(13,"div",26),e._uU(14),e.qZA()()(),e.TgZ(15,"td",27)(16,"button",28),e._UZ(17,"i",29),e.qZA(),e.TgZ(18,"button",30),e.NdJ("click",function(){const l=e.CHM(n).$implicit,a=e.oxw(2);return e.KtG(a.deleteDece(l.id))}),e._UZ(19,"i",31),e.qZA()()()}if(2&t){const n=i.$implicit;e.xp6(2),e.hij(" ",n.CI," "),e.xp6(2),e.AsE(" ",n.name," ",n.lastName," "),e.xp6(2),e.hij(" ",n.email," "),e.xp6(2),e.hij(" ",n.phone," "),e.xp6(2),e.hij(" ",n.nameInstitution," "),e.xp6(3),e.Q6J("ngClass",n.status?"bg-green bg-opacity-25 ":"bg-red bg-opacity-25 "),e.xp6(1),e.hij(" ",n.status?"Activo":"Inactivo"," "),e.xp6(2),e.Q6J("routerLink","../editar/"+n.id)}}function ee(t,i){1&t&&(e.TgZ(0,"div",42),e._uU(1," Activo "),e.qZA())}function te(t,i){1&t&&(e.TgZ(0,"div",43),e._uU(1," Inactivo "),e.qZA())}function ne(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"div",32)(1,"div",33)(2,"div",34),e._uU(3,"CI:"),e.qZA(),e.TgZ(4,"div",35),e._uU(5),e.qZA()(),e.TgZ(6,"div",33)(7,"div",34),e._uU(8," Nombres: "),e.qZA(),e.TgZ(9,"div",35),e._uU(10),e.qZA()(),e.TgZ(11,"div",33)(12,"div",34),e._uU(13,"Email:"),e.qZA(),e.TgZ(14,"div",35),e._uU(15),e.qZA()(),e.TgZ(16,"div",33)(17,"div",34),e._uU(18," Tel\xe9fono: "),e.qZA(),e.TgZ(19,"div",35),e._uU(20),e.qZA()(),e.TgZ(21,"div",33)(22,"div",34),e._uU(23," Instituci\xf3n: "),e.qZA(),e.TgZ(24,"div",35),e._uU(25),e.qZA()(),e.TgZ(26,"div",33)(27,"div",34),e._uU(28,"Estado:"),e.qZA(),e.TgZ(29,"div",35)(30,"label",36),e.YNc(31,ee,2,0,"div",37),e.YNc(32,te,2,0,"div",38),e.qZA()()(),e.TgZ(33,"div",39)(34,"button",40),e._uU(35," Editar "),e.qZA(),e.TgZ(36,"button",41),e.NdJ("click",function(){const l=e.CHM(n).$implicit,a=e.oxw(2);return e.KtG(a.deleteDece(l.id))}),e._uU(37," Eliminar "),e.qZA()()()}if(2&t){const n=i.$implicit;e.xp6(5),e.hij(" ",n.CI," "),e.xp6(5),e.AsE(" ",n.name," ",n.lastName," "),e.xp6(5),e.hij(" ",n.email," "),e.xp6(5),e.hij(" ",n.phone," "),e.xp6(5),e.hij(" ",n.nameInstitution," "),e.xp6(6),e.Q6J("ngIf",n.status),e.xp6(1),e.Q6J("ngIf",!n.status),e.xp6(2),e.Q6J("routerLink","../editar/"+n.id)}}function oe(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"div",10)(1,"div",11),e._uU(2," Gesti\xf3n de encargados del DECE "),e.qZA(),e.TgZ(3,"div",12)(4,"div",13)(5,"input",14),e.NdJ("ngModelChange",function(r){e.CHM(n);const l=e.oxw();return e.KtG(l.search=r)}),e.qZA(),e.TgZ(6,"button",15),e._uU(7," Registrar DECE "),e.qZA()(),e.TgZ(8,"div",16)(9,"table",17)(10,"thead",18)(11,"tr")(12,"th",19),e._uU(13," CI "),e.qZA(),e.TgZ(14,"th",19),e._uU(15," Nombres "),e.qZA(),e.TgZ(16,"th",19),e._uU(17," Email "),e.qZA(),e.TgZ(18,"th",19),e._uU(19," Tel\xe9fono "),e.qZA(),e.TgZ(20,"th",19),e._uU(21," Estado "),e.qZA(),e.TgZ(22,"th",19),e._uU(23," Instituci\xf3n "),e.qZA(),e.TgZ(24,"th",19),e._uU(25," Acciones "),e.qZA()()(),e.TgZ(26,"tbody"),e.YNc(27,W,20,9,"tr",20),e.ALo(28,"filterTables"),e.qZA()()(),e.TgZ(29,"div",21),e.YNc(30,ne,38,9,"div",22),e.ALo(31,"filterTables"),e.qZA()()()}if(2&t){const n=e.oxw();e.xp6(5),e.Q6J("ngModel",n.search),e.xp6(1),e.Q6J("routerLink","../registrar"),e.xp6(21),e.Q6J("ngForOf",e.xi3(28,4,n.deces,n.search)),e.xp6(3),e.Q6J("ngForOf",e.xi3(31,7,n.deces,n.search))}}let I=(()=>{class t{constructor(n,o,r){this.notification=n,this.deceService=o,this.filterTable=r,this.deces=[],this.search="",this.loading=!0}ngOnInit(){this.getDeces()}getDeces(){this.deceService.getAllDece().subscribe(n=>{this.deces=n.data,console.log(n),this.loading=!1},n=>{this.loading=!0,0===n.status?this.notification.showError("Error","No se pudo conectar con el servidor"):(console.log(n),this.notification.showError("Error","No se pudo obtener los datos"))})}deleteDece(n){this.notification.showConfirm("warning","Eliminar","\xbfEst\xe1 seguro de eliminar este registro?","Si, eliminar","Cancelar").then(o=>{o.isConfirmed&&this.deceService.deleteDece(n).subscribe(r=>{console.log(r.message),this.notification.showSuccess("Eliminado","Registro eliminado correctamente"),this.ngOnInit()},r=>{0===r.status?this.notification.showError("Error","No se pudo conectar con el servidor"):(console.log(r),this.notification.showError("Error",r.error.error))})})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_.T),e.Y36(x),e.Y36(h.u))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-listar"]],features:[e._Bn([h.u])],decls:2,vars:2,consts:[["class","fixed inset-0 flex items-center justify-center z-50",4,"ngIf"],["class","transition ease-in-out delay-150 w-[95%] h-[90%] lg:h-[95%] lg:m-2 mx-4 my-2 bg-cameo border-4 border-camelot rounded-lg overflow-x-hidden duration-300",4,"ngIf"],[1,"fixed","inset-0","flex","items-center","justify-center","z-50"],[1,"fixed","inset-0","bg-black","opacity-50"],[1,"flex","items-center","justify-center"],[1,"flex","flex-col","items-center"],[1,"animate-spin","rounded-full","h-20","w-20","border-t-4","border-b-4","border-primary"],[1,"flex","items-center","mt-2"],[1,"text-xl","font-bold","mr-1"],[1,"text-xl","animate-bounce"],[1,"transition","ease-in-out","delay-150","w-[95%]","h-[90%]","lg:h-[95%]","lg:m-2","mx-4","my-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden","duration-300"],[1,"grid","grid-cols-1","mx-4","text-center","text-3xl","font-bold","text-camelot","py-2"],[1,"grid","grid-cols-1","mx-4"],[1,"flex"],["placeholder","Buscar por nombre",1,"mx-3","px-2","py3","border-b-2","border-camelot","rounded-lg","bg-none","text-camelot","text-xs","font-semibold","tracking-wide","w-[40%]","lg:w-[20%]","focus:outline-none","focus:border-camelot-400",3,"ngModel","ngModelChange"],["type","button",1,"px-2","py-3","bg-nile-blue","text-cameo","text-xs","font-bold","uppercase","rounded","shadow","hover:shadow-lg","outline-none","focus:outline-none","ease-linear","transition-all","duration-150",3,"routerLink"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","shadow","hidden","lg:block"],[1,"w-full","lg:h-[85%]","my-2"],[1,"bg-nile-blue-200","border-b-2","border-nile-blue","text-cameo"],[1,"p-3","text-sm","font-semibold","tracking-wide","text-center"],[4,"ngFor","ngForOf"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","lg:hidden"],["class","w-full flex flex-col mb-2 border border-camelot rounded-lg hover:shadow-sm hover:shadow-camelot-300",4,"ngFor","ngForOf"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-left"],[1,"p-3","text-sm","text-black-100","tracking-wide"],[1,"pl-[0.15rem]","hover:cursor-pointer","flex","flex-col","items-center","justify-center"],[1,"bg-opacity-25","rounded-lg","p-2","text-nile-blue","font-bold","text-center","tracking-wider","text-sm",3,"ngClass"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-center","flex","flex-row","items-center","justify-center"],["type","button","title","Editar dece",1,"px-2",3,"routerLink"],[1,"fa-solid","fa-pen-to-square","text-3xl","text-nile-blue-200","hover:text-camelot-400"],["type","button","title","Eliminar dece",1,"px-2",3,"click"],[1,"fa","fa-trash","text-3xl","text-red-500","font-bold","hover:text-nile-blue"],[1,"w-full","flex","flex-col","mb-2","border","border-camelot","rounded-lg","hover:shadow-sm","hover:shadow-camelot-300"],[1,"w-full","grid","grid-cols-5","break-all","items-left","space-x-2","text","pl-2","py-2","pr-2"],[1,"col-span-2","break-all","font-bold","text-camelot"],[1,"col-span-3","break-all","text-nile-blue"],["for","flexSwitchCheckDefault",1,"inline-block","pl-[0.15rem]","hover:cursor-pointer"],["class","bg-green bg-opacity-25 rounded-lg p-2 text-nile-blue text-center tracking-wider text-sm",4,"ngIf"],["class","bg-red bg-opacity-25 rounded-lg p-2 text-nile-blue text-center tracking-wider text-sm",4,"ngIf"],[1,"flex","flex-row","gap-2","justify-end","my-2"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"routerLink"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"click"],[1,"bg-green","bg-opacity-25","rounded-lg","p-2","text-nile-blue","text-center","tracking-wider","text-sm"],[1,"bg-red","bg-opacity-25","rounded-lg","p-2","text-nile-blue","text-center","tracking-wider","text-sm"]],template:function(n,o){1&n&&(e.YNc(0,V,10,0,"div",0),e.YNc(1,oe,32,10,"div",1)),2&n&&(e.Q6J("ngIf",o.loading),e.xp6(1),e.Q6J("ngIf",!o.loading))},dependencies:[g.mk,g.sg,g.O5,p.rH,c.Fj,c.JJ,c.On,h.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),t})();function re(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",30),e.BQk())}function ie(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",31),e.BQk())}function le(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",32),e.BQk())}function ce(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",31),e.BQk())}function ae(t,i){if(1&t&&(e.TgZ(0,"div",28),e.YNc(1,re,2,0,"ng-container",29),e.YNc(2,ie,2,0,"ng-container",29),e.YNc(3,le,2,0,"ng-container",29),e.YNc(4,ce,2,0,"ng-container",29),e.qZA()),2&t){const n=e.oxw();let o,r,l,a;e.xp6(1),e.Q6J("ngIf",null==(o=n.formDece.form.get("CI"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(r=n.formDece.form.get("CI"))||null==r.errors?null:r.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(l=n.formDece.form.get("CI"))||null==l.errors?null:l.errors.pattern),e.xp6(1),e.Q6J("ngIf",null==(a=n.formDece.form.get("CI"))||null==a.errors?null:a.errors.maxlength)}}function se(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",33),e.BQk())}function ue(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",34),e.BQk())}function me(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",35),e.BQk())}function de(t,i){if(1&t&&(e.TgZ(0,"div",28),e.YNc(1,se,2,0,"ng-container",29),e.YNc(2,ue,2,0,"ng-container",29),e.YNc(3,me,2,0,"ng-container",29),e.qZA()),2&t){const n=e.oxw();let o,r,l;e.xp6(1),e.Q6J("ngIf",null==(o=n.formDece.form.get("name"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(r=n.formDece.form.get("name"))||null==r.errors?null:r.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(l=n.formDece.form.get("name"))||null==l.errors?null:l.errors.pattern)}}function fe(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",36),e.BQk())}function ge(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",34),e.BQk())}function pe(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",35),e.BQk())}function _e(t,i){if(1&t&&(e.TgZ(0,"div",28),e.YNc(1,fe,2,0,"ng-container",29),e.YNc(2,ge,2,0,"ng-container",29),e.YNc(3,pe,2,0,"ng-container",29),e.qZA()),2&t){const n=e.oxw();let o,r,l;e.xp6(1),e.Q6J("ngIf",null==(o=n.formDece.form.get("lastName"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(r=n.formDece.form.get("lastName"))||null==r.errors?null:r.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(l=n.formDece.form.get("lastName"))||null==l.errors?null:l.errors.pattern)}}function xe(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",34),e.BQk())}function he(t,i){if(1&t&&(e.TgZ(0,"div",28),e.YNc(1,xe,2,0,"ng-container",29),e.qZA()),2&t){const n=e.oxw();let o;e.xp6(1),e.Q6J("ngIf",null==(o=n.formDece.form.get("address"))||null==o.errors?null:o.errors.minlength)}}function ve(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",37),e.BQk())}function be(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",31),e.BQk())}function Ze(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",31),e.BQk())}function Te(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",38),e.BQk())}function Ie(t,i){if(1&t&&(e.TgZ(0,"div",28),e.YNc(1,ve,2,0,"ng-container",29),e.YNc(2,be,2,0,"ng-container",29),e.YNc(3,Ze,2,0,"ng-container",29),e.YNc(4,Te,2,0,"ng-container",29),e.qZA()),2&t){const n=e.oxw();let o,r,l,a;e.xp6(1),e.Q6J("ngIf",null==(o=n.formDece.form.get("phone"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(r=n.formDece.form.get("phone"))||null==r.errors?null:r.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(l=n.formDece.form.get("phone"))||null==l.errors?null:l.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==(a=n.formDece.form.get("phone"))||null==a.errors?null:a.errors.pattern)}}function Ce(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",39),e.BQk())}function we(t,i){1&t&&(e.ynx(0),e._UZ(1,"i",40),e.BQk())}function ye(t,i){if(1&t&&(e.TgZ(0,"div",28),e.YNc(1,Ce,2,0,"ng-container",29),e.YNc(2,we,2,0,"ng-container",29),e.qZA()),2&t){const n=e.oxw();let o,r;e.xp6(1),e.Q6J("ngIf",null==(o=n.formDece.form.get("email"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(r=n.formDece.form.get("email"))||null==r.errors?null:r.errors.email)}}function Ne(t,i){if(1&t&&(e.TgZ(0,"option",41),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.Q6J("value",n.nameInstitution),e.xp6(1),e.hij(" ",n.nameInstitution," ")}}const Ae=[{path:"",component:I,pathMatch:"full"},{path:"registrar",component:(()=>{class t{constructor(n,o,r,l,a){this.notification=n,this.institutionService=o,this.deceService=r,this.route=l,this.router=a,this.formDece=new Z,this.instituciones=[]}ngOnInit(){this.formDece.form.reset(),this.getInstitutions()}create(){const{CI:n,name:o,lastName:r,address:l,phone:a,email:s,nameInstitution:m}=this.formDece.form.value;this.deceService.createDece({CI:n,name:o,lastName:r,address:l,phone:a,email:s,nameInstitution:m}).subscribe(f=>{const{message:v}=f;console.log(v),this.notification.showSuccess("Dece","Registrado con \xe9xito"),this.router.navigate(["../listar"],{relativeTo:this.route})},f=>{0===f.status?this.notification.showError("Error","Error de conexi\xf3n con el servidor"):(this.notification.showError("Error",f.error.error||"Error al registrar"),console.log(f.error))})}getInstitutions(){this.institutionService.getAllInstitution().subscribe(n=>{const{message:o,data:r}=n;this.instituciones=r,console.log(o)})}cancel(){this.router.navigate(["../listar"],{relativeTo:this.route})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_.T),e.Y36(T.b),e.Y36(x),e.Y36(p.gz),e.Y36(p.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-registrar"]],decls:66,vars:9,consts:[[1,"w-[95%]","lg:h-[95%]","m-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden"],[1,"w-full","lg:h-[10%]","text-center","text-2xl","font-bold","text-camelot","py-4","flex","items-center","justify-center","uppercase"],[1,"w-full","lg:h-[93%]","pb-2",3,"formGroup","ngSubmit"],[1,"w-full","flex","flex-col","items-center"],[1,"lg:w-[60%]","w-[80%]","h-[8%]","text-start","text-lg","font-bold","text-camelot-400","border-b-2","border-camelot","flex","items-center"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-2","mb-4","grid-cols-1"],[1,"w-full","col-span-1","text-camelot","text-lg","mt-2","py-1","text-left"],["for","name"],[1,"w-full","col-span-1","text-nile-blue","text-lg","flex","items-center","justify-center","mt-1"],["type","text","id","CIS","formControlName","CI","placeholder","Ingrese el CI",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3"],["class","text-red-200 text-xl rounded pl-2 flex","role","alert",4,"ngIf"],["type","text","id","name","formControlName","name","placeholder","Ingrese los nombres ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3"],["type","text","id","lastName","formControlName","lastName","placeholder","Ingrese los apellidos ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["for","address"],["type","text","id","address","formControlName","address","placeholder","Ingrese la direcci\xf3n ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["type","text","id","phone","formControlName","phone","placeholder","Ingrese el tel\xe9fono ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["type","email","id","email","formControlName","email","placeholder","Ingrese el correo electr\xf3nico ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-4","mb-4","grid-cols-1"],[1,"w-full","col-span-2","text-camelot","text-lg","mr-2","text-left"],["for","institucion"],[1,"w-full","col-span-2","text-nile-blue","text-lg"],["id","selectTeacher","formControlName","nameInstitution",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400"],["value","0"],[3,"value",4,"ngFor","ngForOf"],[1,"lg:w-[60%]","w-[80%]","grid","grid-cols-1","mb-4"],[1,"w-full","flex","text-camelot","text-lg","mr-2","mb-2","justify-end"],["type","button",1,"border-2","border-camelot","text-lg","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","hover:bg-nile-blue","hover:text-cameo","mr-2",3,"click"],["type","submit",1,"border-2","border-camelot","text-lg","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","hover:bg-nile-blue","hover:text-cameo",3,"disabled"],["role","alert",1,"text-red-200","text-xl","rounded","pl-2","flex"],[4,"ngIf"],["title","C\xe9dula requerida",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Longitud de 10 caracteres requerida",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Solo se permiten n\xfameros",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer"],["title","Nombre requerido",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Longitud minima requerida",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Solo se permiten letras",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Apellidos requeridos",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Telefono es requerido",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Solo se permiten n\xfameros",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Email requerido",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],["title","Email invalido",1,"fa","fa-exclamation-circle","animate-bounce","cursor-pointer","px-1"],[3,"value"]],template:function(n,o){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Registro de encargado del DECE "),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return o.create()}),e.TgZ(4,"fieldset",3)(5,"div",4),e._uU(6," Datos personales "),e.qZA(),e.TgZ(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10,"CI:"),e.qZA()(),e.TgZ(11,"div",8),e._UZ(12,"input",9),e.YNc(13,ae,5,4,"div",10),e.qZA()(),e.TgZ(14,"div",5)(15,"div",6)(16,"label",7),e._uU(17," Nombres:"),e.qZA()(),e.TgZ(18,"div",8),e._UZ(19,"input",11),e.YNc(20,de,4,3,"div",10),e.qZA()(),e.TgZ(21,"div",5)(22,"div",6)(23,"label",7),e._uU(24," Apellidos :"),e.qZA()(),e.TgZ(25,"div",8),e._UZ(26,"input",12),e.YNc(27,_e,4,3,"div",10),e.qZA()(),e.TgZ(28,"div",5)(29,"div",6)(30,"label",13),e._uU(31," Direcci\xf3n :"),e.qZA()(),e.TgZ(32,"div",8),e._UZ(33,"input",14),e.YNc(34,he,2,1,"div",10),e.qZA()(),e.TgZ(35,"div",5)(36,"div",6)(37,"label",7),e._uU(38," Tel\xe9fono :"),e.qZA()(),e.TgZ(39,"div",8),e._UZ(40,"input",15),e.YNc(41,Ie,5,4,"div",10),e.qZA()(),e.TgZ(42,"div",5)(43,"div",6)(44,"label",7),e._uU(45,"Correo electr\xf3nico :"),e.qZA()(),e.TgZ(46,"div",8),e._UZ(47,"input",16),e.YNc(48,ye,3,2,"div",10),e.qZA()(),e.TgZ(49,"div",4),e._uU(50," Datos de la instituci\xf3n "),e.qZA(),e.TgZ(51,"div",17)(52,"div",18)(53,"label",19),e._uU(54," Instituci\xf3n: "),e.qZA()(),e.TgZ(55,"div",20)(56,"select",21)(57,"option",22),e._uU(58,"Seleccione una instituci\xf3n"),e.qZA(),e.YNc(59,Ne,2,2,"option",23),e.qZA()()(),e.TgZ(60,"div",24)(61,"div",25)(62,"button",26),e.NdJ("click",function(){return o.cancel()}),e._uU(63," Cancelar "),e.qZA(),e.TgZ(64,"button",27),e._uU(65," Registrar "),e.qZA()()()()()()),2&n){let r,l,a,s,m,d;e.xp6(3),e.Q6J("formGroup",o.formDece.form),e.xp6(10),e.Q6J("ngIf",(null==(r=o.formDece.form.get("CI"))?null:r.invalid)&&(null==(r=o.formDece.form.get("CI"))?null:r.touched)),e.xp6(7),e.Q6J("ngIf",(null==(l=o.formDece.form.get("name"))?null:l.invalid)&&(null==(l=o.formDece.form.get("name"))?null:l.touched)),e.xp6(7),e.Q6J("ngIf",(null==(a=o.formDece.form.get("lastName"))?null:a.invalid)&&(null==(a=o.formDece.form.get("lastName"))?null:a.touched)),e.xp6(7),e.Q6J("ngIf",(null==(s=o.formDece.form.get("address"))?null:s.invalid)&&(null==(s=o.formDece.form.get("address"))?null:s.touched)),e.xp6(7),e.Q6J("ngIf",(null==(m=o.formDece.form.get("phone"))?null:m.invalid)&&(null==(m=o.formDece.form.get("phone"))?null:m.touched)),e.xp6(7),e.Q6J("ngIf",(null==(d=o.formDece.form.get("email"))?null:d.invalid)&&(null==(d=o.formDece.form.get("email"))?null:d.touched)),e.xp6(11),e.Q6J("ngForOf",o.instituciones),e.xp6(5),e.Q6J("disabled",o.formDece.form.invalid)}},dependencies:[g.sg,g.O5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.sg,c.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),t})()},{path:"editar/:id",component:X},{path:"listar",component:I}];let Ue=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(Ae),p.Bz]}),t})();var De=u(4466);let qe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.ez,Ue,c.UX,c.u5,De.m]}),t})()}}]);