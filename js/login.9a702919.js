(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a55b:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"reg"}},[e("b-container",{staticClass:"mt-4"},[e("b-row",{staticClass:"justify-content-center"},[e("b-col",{attrs:{cols:"8",lg:"6"}},[e("b-form",{on:{submit:function(s){return s.preventDefault(),t.onSubmit(s)},reset:t.onReset}},[e("b-form-group",{attrs:{id:"input-group-1",label:"帳號","label-for":"input-1",state:t.accountState,description:"帳號長度為 4 ~ 20 個字","invalid-feedback":"帳號格式不符"}},[e("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"請輸入帳號",state:t.accountState},model:{value:t.account,callback:function(s){t.account=s},expression:"account"}})],1),e("b-form-group",{attrs:{id:"input-group-2",label:"密碼","label-for":"input-2",state:t.passwordState,description:"密碼長度為 4 ~ 20 個字","invalid-feedback":"密碼格式不符"}},[e("b-form-input",{attrs:{id:"input-2",type:"password",required:"",placeholder:"請輸入密碼",state:t.passwordState},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}})],1),e("div",{staticClass:"text-center"},[e("b-btn",{staticClass:"mx-1",attrs:{variant:"success",type:"submit"}},[t._v("登入")]),e("b-btn",{staticClass:"mx-1",attrs:{variant:"danger",type:"reset"}},[t._v("重置")])],1)],1)],1)],1)],1)],1)},n=[],o={name:"Reg",data:function(){return{account:"",password:""}},computed:{accountState:function(){return 0===this.account.length?null:this.account.length>=4&&this.account.length<=20},passwordState:function(){return 0===this.password.length?null:this.password.length>=4&&this.password.length<=20}},methods:{onSubmit:function(){var t=this;this.accountState&&this.passwordState&&this.axios.post("https://album2020.herokuapp.com/users/login",this.$data).then((function(s){s.data.success?(t.$store.commit("login",s.data.result),t.$swal({icon:"success",title:"登入成功"}).then((function(){t.$router.push("/album")}))):t.$swal({icon:"error",title:"發生錯誤",text:s.data.message})})).catch((function(s){t.$swal({icon:"error",title:"母丟哦",text:s.response.data.message})}))},onReset:function(){this.account="",this.password=""}}},r=o,i=e("2877"),c=Object(i["a"])(r,a,n,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=login.9a702919.js.map