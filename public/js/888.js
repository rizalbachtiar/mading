"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[888],{3744:(e,l)=>{l.Z=(e,l)=>{const t=e.__vccOpts||e;for(const[e,o]of l)t[e]=o;return t}},7888:(e,l,t)=>{t.r(l),t.d(l,{default:()=>b});var o=t(821),r={class:"min-w-screen min-h-screen flex items-center justify-center p-5 bg-cover",style:{"background-image":"url('/images/class.jpg')"}},n={class:"bg-white rounded-3xl shadow-xl w-1/2 bg-opacity-50 backdrop-filter backdrop-blur overflow-hidden"},a={class:"md:flex w-full"},s={class:"w-full py-10 px-5 md:px-10 space-y-10"},d=(0,o.createElementVNode)("div",{class:"text-center"},[(0,o.createElementVNode)("h1",{class:"text-3xl font-bold text-gray-900"},"LOGIN")],-1),c={class:"flex flex-col w-full px-3 mb-5"},i=(0,o.createElementVNode)("label",{for:"",class:"font-semibold px-1"},"Username",-1),m={class:"flex flex-col w-full px-3 mb-5"},u=(0,o.createElementVNode)("label",{for:"",class:"font-semibold px-1"},"Password",-1),f=(0,o.createElementVNode)("div",{class:"flex -mx-3 pt-5"},[(0,o.createElementVNode)("div",{class:"w-full px-3 mb-5"},[(0,o.createElementVNode)("button",{class:"block w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-600 rounded-full px-3 py-3 font-semibold text-gray-200 hover:text-gray-300 shadow-xl"},"LOGIN")])],-1);var p=t(9038);const x={setup:function(){return{form:(0,p.cI)({email:"",password:""})}}};const b=(0,t(3744).Z)(x,[["render",function(e,l,t,p,x,b){return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",s,[d,(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("form",{onSubmit:l[2]||(l[2]=(0,o.withModifiers)((function(l){return p.form.post(e.route("auth-login"))}),["prevent"]))},[(0,o.createElementVNode)("div",c,[i,(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":l[0]||(l[0]=function(e){return p.form.email=e}),class:"px-2 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-indigo-500",type:"text",name:"username",placeholder:"Username"},null,512),[[o.vModelText,p.form.email]])]),(0,o.createElementVNode)("div",m,[u,(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":l[1]||(l[1]=function(e){return p.form.password=e}),class:"px-2 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-indigo-500",type:"password",name:"password",placeholder:"*******"},null,512),[[o.vModelText,p.form.password]])]),f],32)])])])])])}]])}}]);