webpackJsonp([20],{"8TuW":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Dd8w"),o=r.n(n),a=r("cH33"),m=r("9WlX"),i={mixins:[a.a,m.a],data:function(){return{numMax:0,form:{date:new Date,department:null,project:null,num:0},rules:{date:[{required:!0,message:"请输入日期",trigger:"blur"}],department:[{required:!0,message:"请输入部门名称",trigger:"blur"}],project:[{required:!0,message:"请输入物品名称",trigger:"blur"}],num:[{required:!0,message:"请输入物品数量",trigger:"change"},{type:"number",min:1,message:"物品数量最小为1",trigger:"change"}]},pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}}]}}},computed:{infoTitle:function(){var e=this.form.project,t=this.dictProject(e,"name"),r=this.dictProject(e,"num"),n=this.dictProject(e,"unit");return this.form.project?t+"剩余"+r+n:"选择物品后 在这里会提示剩余数量"}},watch:{"form.project":{handler:function(e){this.form.num=0,this.numMax=e?this.dictProject(e,"num"):0},deep:!0}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.vuexProjectsUpdateNum({id:t.form.project,change:-t.form.num}),t.vuexProjectsLoad(),t.vuexHistoryOutPush(o()({},t.form,{date:String(t.form.date),creatDate:String(new Date)})),t.vuexHistoryOutLoad(),t.form.department=null,t.form.project=null,t.form.num=1,t.$message({message:"保存成功",type:"success"})})}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Container",[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{label:"日期",prop:"date"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期",clearable:!1,"picker-options":e.pickerOptions},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"部门",prop:"department"}},[r("DepartmentSelect",{model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"物品",prop:"project"}},[r("ProjectSelect",{attrs:{nonempty:!0},model:{value:e.form.project,callback:function(t){e.$set(e.form,"project",t)},expression:"form.project"}})],1),e._v(" "),e.form.project?r("el-form-item",{attrs:{label:"数量",prop:"num"}},[r("el-input-number",{attrs:{step:1,max:e.numMax},model:{value:e.form.num,callback:function(t){e.$set(e.form,"num",t)},expression:"form.num"}})],1):e._e(),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v("保存")])],1)],1),e._v(" "),r("el-alert",{attrs:{title:e.infoTitle}})],1)},staticRenderFns:[]},u=r("VU/8")(i,l,!1,null,null,null);t.default=u.exports}});
//# sourceMappingURL=20.19c083c08444baedac44.js.map