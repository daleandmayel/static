webpackJsonp([9],{EN1b:function(e,t){},tFlq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n("v/lQ"),r=n("cH33"),u={mixins:[l.a,r.a],props:{value:{required:!1,default:""}},data:function(){return{currentValue:{}}},computed:{options:function(){return this.vuexDepartmentsValid.map(function(e){return{value:e.id,label:e.name,price:e.price,num:e.num}})}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",{attrs:{filterable:"",placeholder:"请选择部门","no-data-text":"请先录入备选部门"},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)},staticRenderFns:[]};var c=n("VU/8")(u,a,!1,function(e){n("EN1b")},null,null);t.default=c.exports}});
//# sourceMappingURL=9.695270a8eaedce19d3fb.js.map