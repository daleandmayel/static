webpackJsonp([21],{C5Wu:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Dd8w"),o=r.n(n),a={mixins:[r("cH33").a],data:function(){return{form:{date:new Date,project:null,num:1},rules:{date:[{required:!0,message:"请输入日期",trigger:"blur"}],project:[{required:!0,message:"请输入物品名称",trigger:"blur"}],num:[{required:!0,message:"请输入物品数量",trigger:"change"},{type:"number",min:1,message:"物品数量最小为1",trigger:"change"}]},pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}}]}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.vuexProjectsUpdateNum({id:t.form.project,change:t.form.num}),t.vuexProjectsLoad(),t.vuexHistoryInPush(o()({},t.form,{date:String(t.form.date),creatDate:String(new Date)})),t.vuexHistoryInLoad(),t.form.project=null,t.form.num=1,t.$message({message:"保存成功",type:"success"})})}}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Container",[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{label:"日期",prop:"num"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期",clearable:!1,"picker-options":e.pickerOptions},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"物品",prop:"project"}},[r("ProjectSelect",{model:{value:e.form.project,callback:function(t){e.$set(e.form,"project",t)},expression:"form.project"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"数量",prop:"num"}},[r("el-input-number",{attrs:{step:1},model:{value:e.form.num,callback:function(t){e.$set(e.form,"num",t)},expression:"form.num"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]},m=r("VU/8")(a,i,!1,null,null,null);t.default=m.exports}});
//# sourceMappingURL=21.fbcb42c9d8b74effed8e.js.map