"use strict";(self.webpackChunkPanelSG=self.webpackChunkPanelSG||[]).push([[789],{8789:(O,_,a)=>{a.r(_),a.d(_,{TestQuestionModule:()=>S});var d=a(6895),c=a(668),s=a(433);class b{constructor(){this.form=new s.cw({name:new s.NI("",[s.kI.required,s.kI.minLength(3)]),description:new s.NI("",[s.kI.required,s.kI.minLength(3)])})}}class x{constructor(){this.form=new s.cw({nameAnswer:new s.NI("",[s.kI.required]),valueAnswer:new s.NI("",[s.kI.required,s.kI.minLength(1),s.kI.maxLength(2),s.kI.pattern("[0-9]*")])})}}var e=a(8256),h=a(2031),m=a(2126),g=a(4204);function w(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"tr",28)(1,"td",29),e._uU(2),e.qZA(),e.TgZ(3,"td",29),e._uU(4),e.qZA(),e.TgZ(5,"td",30)(6,"button",31),e.NdJ("click",function(){const i=e.CHM(t).$implicit,u=e.oxw(2);return e.KtG(u.deleteRespuesta(i.id))}),e._uU(7," Eliminar "),e.qZA()()()}if(2&r){const t=l.$implicit;e.xp6(2),e.hij(" ",t.nameAnswer," "),e.xp6(2),e.hij(" ",t.valueAnswer," ")}}function Z(r,l){if(1&r&&(e.TgZ(0,"div",23)(1,"table",24)(2,"thead",25)(3,"tr")(4,"th",26),e._uU(5," Descripci\xf3n "),e.qZA(),e.TgZ(6,"th",26),e._uU(7," Valor "),e.qZA(),e.TgZ(8,"th",26),e._uU(9," Acciones "),e.qZA()()(),e.TgZ(10,"tbody"),e.YNc(11,w,8,2,"tr",27),e.qZA()()()),2&r){const t=e.oxw();e.xp6(11),e.Q6J("ngForOf",t.listaRespuestas)}}function T(r,l){1&r&&(e.TgZ(0,"div",32)(1,"div",33),e._uU(2," No hay respuestas registradas "),e.qZA()())}function A(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div",34)(1,"div",35)(2,"div",36),e._uU(3," Respuestas "),e.qZA(),e.TgZ(4,"form",37),e.NdJ("ngSubmit",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.addRespuesta())}),e.TgZ(5,"fieldset",3)(6,"div",38)(7,"div",39)(8,"label",40),e._uU(9,"Descripci\xf3n:"),e.qZA()(),e.TgZ(10,"div",41)(11,"input",42),e.NdJ("mouseover",function(){e.CHM(t);const n=e.oxw();let i;return e.KtG((null==(i=n.formRespuesta.form.get("nameAnswer"))?null:i.invalid)&&(null==(i=n.formRespuesta.form.get("nameAnswer"))?null:i.touched)&&n.notification.showTooltip(n.controlError.getErrorMessage(n.formRespuesta.form,"nameAnswer")))})("mouseout",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.notification.close())}),e.qZA()()(),e.TgZ(12,"div",38)(13,"div",39)(14,"label",43),e._uU(15,"Valor:"),e.qZA()(),e.TgZ(16,"div",41)(17,"input",44),e.NdJ("mouseover",function(){e.CHM(t);const n=e.oxw();let i;return e.KtG((null==(i=n.formRespuesta.form.get("valueAnswer"))?null:i.invalid)&&(null==(i=n.formRespuesta.form.get("valueAnswer"))?null:i.touched)&&n.notification.showTooltip(n.controlError.getErrorMessage(n.formRespuesta.form,"valueAnswer")))})("mouseout",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.notification.close())}),e.qZA()()(),e.TgZ(18,"div",45)(19,"div",46)(20,"button",47),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.closeModal())}),e._uU(21," Cancelar "),e.qZA(),e.TgZ(22,"button",48),e._uU(23," Guardar "),e.qZA()()()()()()()}if(2&r){const t=e.oxw();e.xp6(4),e.Q6J("formGroup",t.formRespuesta.form),e.xp6(18),e.Q6J("disabled",t.formRespuesta.form.invalid)}}let y=(()=>{class r{constructor(t,o,n,i,u,f){this.controlError=t,this.notification=o,this.changeDetectorRef=n,this.questionService=i,this.router=u,this.route=f,this.modalActivate=!1,this.formRespuesta=new x,this.formPreguntas=new b,this.listaRespuestas=[]}ngOnInit(){this.formRespuesta.form.reset(),this.formPreguntas.form.reset(),this.id=this.route.snapshot.paramMap.get("id"),this.getTest()}getTest(){this.questionService.getQuestion(this.id).subscribe(t=>{this.testQuestion=t,this.setValues(this.testQuestion)},t=>{console.log(t)})}setValues(t){this.formPreguntas.form.patchValue({name:t.nameQuestion}),this.formPreguntas.form.patchValue({description:t.descriptionQuestion});for(let o=0;o<t.answer.length;o++)this.listaRespuestas.push({id:o+1,nameAnswer:t.answer[o].nameAnswer,valueAnswer:t.answer[o].valueAnswer}),this.changeDetectorRef.detectChanges(),this.formRespuesta.form.reset();this.formPreguntas.form.markAllAsTouched()}update(){this.testQuestion={nameQuestion:this.formPreguntas.form.value.name,descriptionQuestion:this.formPreguntas.form.value.descripcion,answer:this.listaRespuestas},this.questionService.updateQuestion(this.id,this.testQuestion).subscribe(t=>{this.notification.showSuccess("Actualizado","Pregunta actualizada correctamente"),this.router.navigate(["../../listar"],{relativeTo:this.route})},t=>{this.notification.showError("Error",0===t.status?"Error de conexi\xf3n con el servidor, int\xe9ntelo mas tarde":t.error.error)})}openModal(){this.modalActivate=!0}closeModal(){this.modalActivate=!1}addRespuesta(){this.listaRespuestas.push({id:this.listaRespuestas.length+1,nameAnswer:this.formRespuesta.form.value.nameAnswer,valueAnswer:this.formRespuesta.form.value.valueAnswer}),this.changeDetectorRef.detectChanges(),this.formRespuesta.form.reset(),this.closeModal()}deleteRespuesta(t){this.listaRespuestas=this.listaRespuestas.filter(o=>o.id!==t)}cancel(){this.router.navigate(["../../listar"],{relativeTo:this.route})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(h.Q),e.Y36(m.T),e.Y36(e.sBO),e.Y36(g.R),e.Y36(c.F0),e.Y36(c.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-editar"]],decls:33,vars:5,consts:[[1,"w-[95%]","lg:h-[95%]","m-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden"],[1,"w-full","lg:h-[10%]","text-center","text-2xl","font-bold","text-camelot","py-4","flex","items-center","justify-center"],[1,"w-full","lg:h-[90%]","py-2",3,"formGroup","ngSubmit"],[1,"w-full","flex","flex-col","items-center"],[1,"lg:w-[60%]","w-[80%]","h-[8%]","text-start","text-lg","font-bold","text-camelot-400","border-b-2","border-camelot","flex","items-center"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-2","mb-4","grid-cols-1"],[1,"w-full","col-span-1","text-camelot","text-lg","mt-2","py-1","text-left"],["for","name"],[1,"w-full","col-span-1","text-nile-blue","text-lg","flex","items-center","justify-center","mt-1"],["type","text","id","name","formControlName","name","placeholder","Ingrese la pregunta ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["for","description"],["type","text","id","descripcion","formControlName","description","placeholder","Ingrese el tipo de pregunta ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-1","mb-4","grid-cols-1"],[1,"w-2/6","col-span-1","bg-camelot","text-white","text-lg","mt-2","py-1","px-2","text-center","rounded-lg","cursor-pointer",3,"click"],["aria-hidden","true",1,"fa","fa-plus-circle","icon-agregar"],[1,"text-center","text-white","rounded-lg","py-2","px-4","hover:bg-camelot-700"],["class","lg:w-[40%] w-[80%] grid lg:grid-cols-1 mb-4 grid-cols-1",4,"ngIf"],["class","lg:w-[60%] w-[80%] grid lg:grid-cols-1 mb-4 grid-cols-1 text-center",4,"ngIf"],[1,"lg:w-[60%]","w-[80%]","grid","grid-cols-1","mb-4"],[1,"w-full","flex","text-camelot","text-lg","mr-2","justify-end"],["type","button",1,"border-2","border-camelot","text-lg","text-nile-blue","bg-cameo","rounded-lg","p-3","hover:bg-nile-blue","hover:text-cameo","mr-2",3,"click"],["type","submit",1,"border-2","border-camelot","text-lg","text-nile-blue","bg-cameo","rounded-lg","p-3","hover:bg-nile-blue","hover:text-cameo",3,"disabled"],["class","modal",4,"ngIf"],[1,"lg:w-[40%]","w-[80%]","grid","lg:grid-cols-1","mb-4","grid-cols-1"],[1,"w-full","lg:h-[85%]","my-2"],[1,"bg-nile-blue-200","border-b-2","border-nile-blue","text-cameo"],[1,"p-3","text-sm","font-semibold","tracking-wide","text-center"],["class","bg-nile-blue-100 border-b border-nile-blue-200 text-camelot",4,"ngFor","ngForOf"],[1,"bg-nile-blue-100","border-b","border-nile-blue-200","text-camelot"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-left"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-center"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"click"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-1","mb-4","grid-cols-1","text-center"],["role","alert",1,"bg-red-700","text-red-200","px-4","py-2","text-lg","font-bold","rounded-xl","relative"],[1,"modal"],[1,"lg:w-[25%]","w-[80%]","m-2","bg-cameo","border-4","border-camelot","rounded-2xl","overflow-x-hidden","flex","flex-col","items-center","justify-center"],[1,"w-full","text-center","text-2xl","font-bold","text-camelot","py-6","flex","items-center","justify-center","uppercase"],[1,"w-full","py-4",3,"formGroup","ngSubmit"],[1,"grid","lg:grid-cols-3","mb-4","grid-cols-1","items-center"],[1,"col-span-1"],["for","nameAnswer",1,"text-camelot","font-semibold"],[1,"col-span-2"],["type","text","id","nameAnswer","formControlName","nameAnswer",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["for","valueAnswer",1,"text-camelot","font-semibold"],["type","text","id","valueAnswer","formControlName","valueAnswer",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],[1,"grid","grid-cols-1","mb-4"],[1,"w-full","flex","text-camelot","text-lg","mr-2","mb-2","justify-end","px-2"],["type","button",1,"border-2","border-camelot","text-lg","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","hover:bg-nile-blue","hover:text-cameo","mr-2",3,"click"],["type","submit",1,"border-2","border-camelot","text-lg","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","hover:bg-nile-blue","hover:text-cameo","mr-2",3,"disabled"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Editar preguntas para el test del docente "),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return o.update()}),e.TgZ(4,"fieldset",3)(5,"div",4),e._uU(6," Datos de la pregunta "),e.qZA(),e.TgZ(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10," Ingrese la pregunta: "),e.qZA()(),e.TgZ(11,"div",8)(12,"textarea",9),e.NdJ("mouseover",function(){let i;return(null==(i=o.formPreguntas.form.get("name"))?null:i.invalid)&&(null==(i=o.formPreguntas.form.get("name"))?null:i.touched)&&o.notification.showTooltip(o.controlError.getErrorMessage(o.formPreguntas.form,"name"))})("mouseout",function(){return o.notification.close()}),e.qZA()()(),e.TgZ(13,"div",5)(14,"div",6)(15,"label",10),e._uU(16," Tipo de pregunta: "),e.qZA()(),e.TgZ(17,"div",8)(18,"input",11),e.NdJ("mouseover",function(){let i;return(null==(i=o.formPreguntas.form.get("description"))?null:i.invalid)&&(null==(i=o.formPreguntas.form.get("description"))?null:i.touched)&&o.notification.showTooltip(o.controlError.getErrorMessage(o.formPreguntas.form,"description"))})("mouseout",function(){return o.notification.close()}),e.qZA()()(),e.TgZ(19,"div",12)(20,"div",13),e.NdJ("click",function(){return o.openModal()}),e._UZ(21,"i",14),e.TgZ(22,"a",15),e._uU(23," Agregar respuesta "),e.qZA()()(),e.YNc(24,Z,12,1,"div",16),e.YNc(25,T,3,0,"div",17),e.TgZ(26,"div",18)(27,"div",19)(28,"button",20),e.NdJ("click",function(){return o.cancel()}),e._uU(29," Cancelar "),e.qZA(),e.TgZ(30,"button",21),e._uU(31," Editar "),e.qZA()()()()()(),e.YNc(32,A,24,2,"div",22)),2&t&&(e.xp6(3),e.Q6J("formGroup",o.formPreguntas.form),e.xp6(21),e.Q6J("ngIf",o.listaRespuestas.length>0),e.xp6(1),e.Q6J("ngIf",0==o.listaRespuestas.length),e.xp6(5),e.Q6J("disabled",o.formPreguntas.form.invalid||o.listaRespuestas.length<=1),e.xp6(2),e.Q6J("ngIf",o.modalActivate))},dependencies:[d.sg,d.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),r})();var v=a(6561);function C(r,l){1&r&&(e.TgZ(0,"div",3),e._UZ(1,"div",4),e.TgZ(2,"div",3)(3,"div",5),e._UZ(4,"div",6),e.TgZ(5,"div",7)(6,"span",8),e._uU(7,"Cargando"),e.qZA(),e.TgZ(8,"span",9),e._uU(9,"..."),e.qZA()()()()())}function R(r,l){if(1&r&&(e.TgZ(0,"div",33)(1,"div",34),e._uU(2),e.qZA(),e.TgZ(3,"div",35),e._uU(4),e.qZA()()),2&r){const t=l.$implicit;e.xp6(2),e.hij(" ",t.nameAnswer,": "),e.xp6(2),e.hij(" ",t.valueAnswer," ")}}function q(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"tr",25)(1,"td",26),e._uU(2),e.qZA(),e.TgZ(3,"td",26),e._uU(4),e.qZA(),e.TgZ(5,"td",26),e.YNc(6,R,5,2,"div",27),e.qZA(),e.TgZ(7,"td",28)(8,"button",29),e._UZ(9,"i",30),e.qZA(),e.TgZ(10,"button",31),e.NdJ("click",function(){const i=e.CHM(t).$implicit,u=e.oxw(3);return e.KtG(u.delete(i._id))}),e._UZ(11,"i",32),e.qZA()()()}if(2&r){const t=l.$implicit;e.xp6(2),e.hij(" ",t.nameQuestion," "),e.xp6(2),e.hij(" ",t.descriptionQuestion," "),e.xp6(2),e.Q6J("ngForOf",t.answer),e.xp6(2),e.Q6J("routerLink","../editar/"+t._id)}}function E(r,l){if(1&r&&(e.TgZ(0,"tbody"),e.YNc(1,q,12,4,"tr",24),e.ALo(2,"filterTables"),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,t.question,t.search))}}function U(r,l){if(1&r&&(e.TgZ(0,"div",33)(1,"div",34),e._uU(2),e.qZA(),e.TgZ(3,"div",35),e._uU(4),e.qZA()()),2&r){const t=l.$implicit;e.xp6(2),e.hij(" ",t.nameAnswer,": "),e.xp6(2),e.hij(" ",t.valueAnswer," ")}}function J(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div",36)(1,"div",37)(2,"div",38),e._uU(3,"Nombre:"),e.qZA(),e.TgZ(4,"div",39),e._uU(5),e.qZA()(),e.TgZ(6,"div",37)(7,"div",38),e._uU(8,"Tipo:"),e.qZA(),e.TgZ(9,"div",39),e._uU(10),e.qZA()(),e.TgZ(11,"div",37)(12,"div",38),e._uU(13," Respuestas: "),e.qZA(),e.TgZ(14,"div",39),e.YNc(15,U,5,2,"div",27),e.qZA()(),e.TgZ(16,"div",40)(17,"button",41),e._uU(18," Editar "),e.qZA(),e.TgZ(19,"button",42),e.NdJ("click",function(){const i=e.CHM(t).$implicit,u=e.oxw(2);return e.KtG(u.delete(i._id))}),e._uU(20," Eliminar "),e.qZA()()()}if(2&r){const t=l.$implicit;e.xp6(5),e.hij(" ",t.nameQuestion," "),e.xp6(5),e.hij(" ",t.descriptionQuestion," "),e.xp6(5),e.Q6J("ngForOf",t.answer),e.xp6(2),e.Q6J("routerLink","../editar/"+t._id)}}function k(r,l){1&r&&(e.TgZ(0,"div",43),e._uU(1," No hay datos para mostrar "),e.qZA())}function N(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div",10)(1,"div",11),e._uU(2," Gesti\xf3n del test docente "),e.qZA(),e.TgZ(3,"div",12)(4,"div",13)(5,"input",14),e.NdJ("ngModelChange",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.search=n)}),e.qZA(),e.TgZ(6,"button",15),e._uU(7," Registrar Pregunta "),e.qZA()()(),e.TgZ(8,"div",16)(9,"table",17)(10,"thead",18)(11,"tr")(12,"th",19),e._uU(13," Nombre "),e.qZA(),e.TgZ(14,"th",19),e._uU(15," Tipo "),e.qZA(),e.TgZ(16,"th",19),e._uU(17," Respuestas "),e.qZA(),e.TgZ(18,"th",19)(19,"label",3),e._uU(20,"Acciones"),e.qZA()()()(),e.YNc(21,E,3,4,"tbody",20),e.qZA()(),e.TgZ(22,"div",21),e.YNc(23,J,21,4,"div",22),e.ALo(24,"filterTables"),e.qZA(),e.YNc(25,k,2,0,"div",23),e.qZA()}if(2&r){const t=e.oxw();e.xp6(5),e.Q6J("ngModel",t.search),e.xp6(1),e.Q6J("routerLink","../registrar"),e.xp6(15),e.Q6J("ngIf",t.question.length>0),e.xp6(2),e.Q6J("ngForOf",e.xi3(24,5,t.question,t.search)),e.xp6(2),e.Q6J("ngIf",0===t.question.length)}}let Q=(()=>{class r{constructor(t,o){this.questionService=t,this.notification=o,this.question=[],this.search="",this.loading=!0}ngOnInit(){this.questionService.getAllQuestion().subscribe(t=>{const{message:o,data:n}=t;this.question=n,this.loading=!1,console.log(o)},t=>{this.notification.showError("Error",0===t.status?"Error de conexi\xf3n con el servidor, int\xe9ntelo mas tarde":t.error.error)})}delete(t){this.notification.showConfirm("warning","Peligro","\xbfEst\xe1 seguro de eliminar la pregunta?","Eliminar","Cancelar").then(o=>{o.isConfirmed&&this.questionService.deleteQuestion(t).subscribe(n=>{const{message:i}=n;this.notification.showSuccess("Eliminado","Pregunta eliminada correctamente"),console.log(i),this.ngOnInit()},n=>{console.log(n),this.ngOnInit(),this.notification.showError("Error","No se pudo eliminar la pregunta")})})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(g.R),e.Y36(m.T))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-listar"]],features:[e._Bn([v.u])],decls:3,vars:2,consts:[[1,"transition","ease-in-out","delay-150","w-[95%]","h-[90%]","lg:h-[95%]","lg:m-2","mx-4","my-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden","duration-300","flex","justify-center"],["class","flex items-center justify-center",4,"ngIf"],["class","w-full",4,"ngIf"],[1,"flex","items-center","justify-center"],[1,"fixed","inset-0","bg-black","opacity-50"],[1,"flex","flex-col","items-center"],[1,"animate-spin","rounded-full","h-20","w-20","border-t-4","border-b-4","border-primary"],[1,"flex","items-center","mt-2"],[1,"text-xl","font-bold","mr-1"],[1,"text-xl","animate-bounce"],[1,"w-full"],[1,"grid","grid-cols-1","mx-4","text-center","text-3xl","font-bold","text-camelot","my-5"],[1,"grid","grid-cols-1","mx-4"],[1,"flex"],["placeholder","Buscar por nombre, tipo...",1,"mx-3","px-2","py-3","border-b-2","border-camelot","rounded-lg","bg-none","text-camelot","text-xs","font-semibold","tracking-wide","lg:w-[20%]","focus:outline-none","focus:border-camelot-400",3,"ngModel","ngModelChange"],["type","button",1,"px-2","py-3","bg-nile-blue","text-cameo","text-xs","font-bold","uppercase","rounded","shadow","hover:shadow-lg","outline-none","focus:outline-none","ease-linear","transition-all","duration-150",3,"routerLink"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","shadow","hidden","lg:block"],[1,"*","w-full","lg:h-[85%]","my-2"],[1,"bg-nile-blue-200","border-b-2","border-nile-blue","text-cameo"],[1,"p-3","text-sm","font-semibold","tracking-wide","text-center"],[4,"ngIf"],[1,"w-full","lg:h-auto","px-4","py-2","rounded-lg","lg:hidden"],["class","w-full h-full flex flex-col mb-2 border border-camelot rounded-lg hover:shadow-sm hover:shadow-camelot-300",4,"ngFor","ngForOf"],["class","mx-4 flex bg-red-700 text-red text-xl rounded-lg font-bold items-center justify-center py-2 text-center",4,"ngIf"],["class","bg-nile-blue-100 border-b border-nile-blue-200 text-camelot",4,"ngFor","ngForOf"],[1,"bg-nile-blue-100","border-b","border-nile-blue-200","text-camelot"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-left"],["class","grid grid-cols-3",4,"ngFor","ngForOf"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-center","flex","flex-row","items-center","justify-center"],["type","button","title","Editar pregunta",1,"px-2",3,"routerLink"],[1,"fa-solid","fa-pen-to-square","text-3xl","text-nile-blue-200","hover:text-camelot-400"],["type","button","title","Eliminar pregunta",1,"px-2",3,"click"],[1,"fa","fa-trash","text-3xl","text-red-500","font-bold","hover:text-nile-blue"],[1,"grid","grid-cols-3"],[1,"col-span-2","text-camelot","text-sm","font-semibold"],[1,"col-span-1","text-nile-blue","text-sm"],[1,"w-full","h-full","flex","flex-col","mb-2","border","border-camelot","rounded-lg","hover:shadow-sm","hover:shadow-camelot-300"],[1,"w-full","grid","grid-cols-5","break-all","items-left","space-x-2","text","pl-2","py-2","pr-2"],[1,"col-span-2","break-all","font-bold","text-camelot"],[1,"col-span-3","break-all","text-nile-blue"],[1,"flex","flex-row","gap-2","justify-end","my-2"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"routerLink"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"click"],[1,"mx-4","flex","bg-red-700","text-red","text-xl","rounded-lg","font-bold","items-center","justify-center","py-2","text-center"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.YNc(1,C,10,0,"div",1),e.YNc(2,N,26,8,"div",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",o.loading),e.xp6(1),e.Q6J("ngIf",!o.loading))},dependencies:[d.sg,d.O5,c.rH,s.Fj,s.JJ,s.On,v.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),r})();function M(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"tr",28)(1,"td",29),e._uU(2),e.qZA(),e.TgZ(3,"td",29),e._uU(4),e.qZA(),e.TgZ(5,"td",30)(6,"button",31),e.NdJ("click",function(){const i=e.CHM(t).$implicit,u=e.oxw(2);return e.KtG(u.deleteRespuesta(i.id))}),e._uU(7," Eliminar "),e.qZA()()()}if(2&r){const t=l.$implicit;e.xp6(2),e.hij(" ",t.nameAnswer," "),e.xp6(2),e.hij(" ",t.valueAnswer," ")}}function I(r,l){if(1&r&&(e.TgZ(0,"div",23)(1,"table",24)(2,"thead",25)(3,"tr")(4,"th",26),e._uU(5," Descripci\xf3n "),e.qZA(),e.TgZ(6,"th",26),e._uU(7," Valor "),e.qZA(),e.TgZ(8,"th",26),e._uU(9," Acciones "),e.qZA()()(),e.TgZ(10,"tbody"),e.YNc(11,M,8,2,"tr",27),e.qZA()()()),2&r){const t=e.oxw();e.xp6(11),e.Q6J("ngForOf",t.listaRespuestas)}}function F(r,l){1&r&&(e.TgZ(0,"div",32)(1,"div",33),e._uU(2," No hay respuestas registradas "),e.qZA()())}function j(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div",34)(1,"div",35)(2,"div",36),e._uU(3," Respuestas "),e.qZA(),e.TgZ(4,"form",37),e.NdJ("ngSubmit",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.addRespuesta())}),e.TgZ(5,"fieldset",3)(6,"div",38)(7,"div",39)(8,"label",40),e._uU(9,"Descripci\xf3n:"),e.qZA()(),e.TgZ(10,"div",41)(11,"input",42),e.NdJ("mouseover",function(){e.CHM(t);const n=e.oxw();let i;return e.KtG((null==(i=n.formRespuesta.form.get("nameAnswer"))?null:i.invalid)&&(null==(i=n.formRespuesta.form.get("nameAnswer"))?null:i.touched)&&n.notification.showTooltip(n.controlError.getErrorMessage(n.formRespuesta.form,"nameAnswer")))})("mouseout",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.notification.close())}),e.qZA()()(),e.TgZ(12,"div",38)(13,"div",39)(14,"label",43),e._uU(15,"Valor:"),e.qZA()(),e.TgZ(16,"div",41)(17,"input",44),e.NdJ("mouseover",function(){e.CHM(t);const n=e.oxw();let i;return e.KtG((null==(i=n.formRespuesta.form.get("valueAnswer"))?null:i.invalid)&&(null==(i=n.formRespuesta.form.get("valueAnswer"))?null:i.touched)&&n.notification.showTooltip(n.controlError.getErrorMessage(n.formRespuesta.form,"valueAnswer")))})("mouseout",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.notification.close())}),e.qZA()()(),e.TgZ(18,"div",45)(19,"div",46)(20,"button",47),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.closeModal())}),e._uU(21," Cancelar "),e.qZA(),e.TgZ(22,"button",48),e._uU(23," Guardar "),e.qZA()()()()()()()}if(2&r){const t=e.oxw();e.xp6(4),e.Q6J("formGroup",t.formRespuesta.form),e.xp6(18),e.Q6J("disabled",t.formRespuesta.form.invalid)}}let P=(()=>{class r{constructor(t,o,n,i,u,f){this.controlError=t,this.notification=o,this.changeDetectorRef=n,this.questionService=i,this.router=u,this.route=f,this.modalActivate=!1,this.formRespuesta=new x,this.formPreguntas=new b,this.listaRespuestas=[]}ngOnInit(){this.formRespuesta.form.reset(),this.formPreguntas.form.reset()}create(){this.testQuestion={nameQuestion:this.formPreguntas.form.value.name,descriptionQuestion:this.formPreguntas.form.value.description,answer:this.listaRespuestas},this.questionService.createQuestion(this.testQuestion).subscribe(t=>{this.notification.showSuccess("Registro","Pregunta registrada con \xe9xito"),this.router.navigate(["../listar"],{relativeTo:this.route})},t=>{this.notification.showError("Error",0===t.status?"Error de conexi\xf3n con el servidor, int\xe9ntelo mas tarde":t.error.error)})}openModal(){this.modalActivate=!0}closeModal(){this.modalActivate=!1}addRespuesta(){this.listaRespuestas.push({id:this.listaRespuestas.length+1,nameAnswer:this.formRespuesta.form.value.nameAnswer,valueAnswer:this.formRespuesta.form.value.valueAnswer}),this.changeDetectorRef.detectChanges(),this.formRespuesta.form.reset(),this.closeModal()}deleteRespuesta(t){this.listaRespuestas=this.listaRespuestas.filter(o=>o.id!==t)}cancel(){this.router.navigate(["../listar"],{relativeTo:this.route})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(h.Q),e.Y36(m.T),e.Y36(e.sBO),e.Y36(g.R),e.Y36(c.F0),e.Y36(c.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-registrar"]],decls:33,vars:5,consts:[[1,"w-[95%]","lg:h-[95%]","m-2","bg-cameo","border-4","border-camelot","rounded-lg","overflow-x-hidden"],[1,"w-full","lg:h-[10%]","text-center","text-2xl","font-bold","text-camelot","py-4","flex","items-center","justify-center"],[1,"w-full","lg:h-[90%]","py-2",3,"formGroup","ngSubmit"],[1,"w-full","flex","flex-col","items-center"],[1,"lg:w-[60%]","w-[80%]","h-[8%]","text-start","text-lg","font-bold","text-camelot-400","border-b-2","border-camelot","flex","items-center"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-2","mb-4","grid-cols-1"],[1,"w-full","col-span-1","text-camelot","text-lg","mt-2","py-1","text-left"],["for","name"],[1,"w-full","col-span-1","text-nile-blue","text-lg","flex","items-center","justify-center","mt-1"],["type","text","id","name","formControlName","name","placeholder","Ingrese la pregunta ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["for","description"],["type","text","id","descripcion","formControlName","description","placeholder","Ingrese el tipo de pregunta ",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-1","mb-4","grid-cols-1"],[1,"w-2/6","col-span-1","bg-camelot","text-white","text-lg","mt-2","py-1","px-2","text-center","rounded-lg","cursor-pointer",3,"click"],["aria-hidden","true",1,"fa","fa-plus-circle","icon-agregar"],[1,"text-center","text-white","rounded-lg","py-2","px-4","hover:bg-camelot-700"],["class","lg:w-[40%] w-[80%] grid lg:grid-cols-1 mb-4 grid-cols-1",4,"ngIf"],["class","lg:w-[60%] w-[80%] grid lg:grid-cols-1 mb-4 grid-cols-1 text-center",4,"ngIf"],[1,"lg:w-[60%]","w-[80%]","grid","grid-cols-1","mb-4"],[1,"w-full","flex","text-camelot","text-lg","mr-2","justify-end"],["type","button",1,"border-2","border-camelot","text-lg","text-nile-blue","bg-cameo","rounded-lg","p-3","hover:bg-nile-blue","hover:text-cameo","mr-2",3,"click"],["type","submit",1,"border-2","border-camelot","text-lg","text-nile-blue","bg-cameo","rounded-lg","p-3","hover:bg-nile-blue","hover:text-cameo",3,"disabled"],["class","modal",4,"ngIf"],[1,"lg:w-[40%]","w-[80%]","grid","lg:grid-cols-1","mb-4","grid-cols-1"],[1,"w-full","lg:h-[85%]","my-2"],[1,"bg-nile-blue-200","border-b-2","border-nile-blue","text-cameo"],[1,"p-3","text-sm","font-semibold","tracking-wide","text-center"],["class","bg-nile-blue-100 border-b border-nile-blue-200 text-camelot",4,"ngFor","ngForOf"],[1,"bg-nile-blue-100","border-b","border-nile-blue-200","text-camelot"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-left"],[1,"p-3","text-sm","text-black-100","tracking-wide","text-center"],["type","button",1,"border-2","border-camelot","text-sm","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","mr-2",3,"click"],[1,"lg:w-[60%]","w-[80%]","grid","lg:grid-cols-1","mb-4","grid-cols-1","text-center"],["role","alert",1,"bg-red-700","text-red-200","px-4","py-2","text-lg","font-bold","rounded-xl","relative"],[1,"modal"],[1,"lg:w-[25%]","w-[80%]","m-2","bg-cameo","border-4","border-camelot","rounded-2xl","overflow-x-hidden","flex","flex-col","items-center","justify-center"],[1,"w-full","text-center","text-2xl","font-bold","text-camelot","py-6","flex","items-center","justify-center","uppercase"],[1,"w-full","py-4",3,"formGroup","ngSubmit"],[1,"grid","lg:grid-cols-3","mb-4","grid-cols-1","items-center"],[1,"col-span-1"],["for","nameAnswer",1,"text-camelot","font-semibold"],[1,"col-span-2"],["type","text","id","nameAnswer","formControlName","nameAnswer",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],["for","valueAnswer",1,"text-camelot","font-semibold"],["type","text","id","valueAnswer","formControlName","valueAnswer",1,"w-full","border-2","border-camelot","rounded-lg","focus:ring-camelot-400","focus:border-camelot-400","pl-3","py-1",3,"mouseover","mouseout"],[1,"grid","grid-cols-1","mb-4"],[1,"w-full","flex","text-camelot","text-lg","mr-2","mb-2","justify-end","px-2"],["type","button",1,"border-2","border-camelot","text-lg","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","hover:bg-nile-blue","hover:text-cameo","mr-2",3,"click"],["type","submit",1,"border-2","border-camelot","text-lg","text-nile-blue","bg-cameo","rounded-lg","px-2","py-1","hover:bg-nile-blue","hover:text-cameo","mr-2",3,"disabled"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Registro de preguntas del test para el docente "),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return o.create()}),e.TgZ(4,"fieldset",3)(5,"div",4),e._uU(6," Datos de la pregunta "),e.qZA(),e.TgZ(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10," Ingrese la pregunta: "),e.qZA()(),e.TgZ(11,"div",8)(12,"textarea",9),e.NdJ("mouseover",function(){let i;return(null==(i=o.formPreguntas.form.get("name"))?null:i.invalid)&&(null==(i=o.formPreguntas.form.get("name"))?null:i.touched)&&o.notification.showTooltip(o.controlError.getErrorMessage(o.formPreguntas.form,"name"))})("mouseout",function(){return o.notification.close()}),e.qZA()()(),e.TgZ(13,"div",5)(14,"div",6)(15,"label",10),e._uU(16," Tipo de pregunta: "),e.qZA()(),e.TgZ(17,"div",8)(18,"input",11),e.NdJ("mouseover",function(){let i;return(null==(i=o.formPreguntas.form.get("description"))?null:i.invalid)&&(null==(i=o.formPreguntas.form.get("description"))?null:i.touched)&&o.notification.showTooltip(o.controlError.getErrorMessage(o.formPreguntas.form,"description"))})("mouseout",function(){return o.notification.close()}),e.qZA()()(),e.TgZ(19,"div",12)(20,"div",13),e.NdJ("click",function(){return o.openModal()}),e._UZ(21,"i",14),e.TgZ(22,"a",15),e._uU(23," Agregar respuesta "),e.qZA()()(),e.YNc(24,I,12,1,"div",16),e.YNc(25,F,3,0,"div",17),e.TgZ(26,"div",18)(27,"div",19)(28,"button",20),e.NdJ("click",function(){return o.cancel()}),e._uU(29," Cancelar "),e.qZA(),e.TgZ(30,"button",21),e._uU(31," Registrar "),e.qZA()()()()()(),e.YNc(32,j,24,2,"div",22)),2&t&&(e.xp6(3),e.Q6J("formGroup",o.formPreguntas.form),e.xp6(21),e.Q6J("ngIf",o.listaRespuestas.length>0),e.xp6(1),e.Q6J("ngIf",0==o.listaRespuestas.length),e.xp6(5),e.Q6J("disabled",o.formPreguntas.form.invalid||o.listaRespuestas.length<=1),e.xp6(2),e.Q6J("ngIf",o.modalActivate))},dependencies:[d.sg,d.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}"]}),r})();var p=a(7574);const Y=[{path:"listar",component:Q,canActivate:[p.a],data:{requiredRole:"ADMIN"},title:"Test Docente"},{path:"registrar",component:P,canActivate:[p.a],data:{requiredRole:"ADMIN"},title:"Test Docente"},{path:"editar/:id",component:y,canActivate:[p.a],data:{requiredRole:"ADMIN"},title:"Test Docente"}];let G=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[c.Bz.forChild(Y),c.Bz]}),r})();var L=a(4466);let S=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[d.ez,G,s.UX,s.u5,L.m]}),r})()}}]);