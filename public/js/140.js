"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[140],{3744:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,r]of t)o[e]=r;return o}},7071:(e,t,o)=>{o.d(t,{Z:()=>I});var r=o(821),n={class:"bg-gray-800"},a={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},l={class:"flex items-center justify-between h-16"},s={class:"flex items-center"},c={class:"flex-shrink-0"},d=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1),i={class:"hidden md:block"},u={class:"ml-10 flex items-baseline"},m=(0,r.createTextVNode)(" Magazines "),g=(0,r.createTextVNode)(" Category "),x=(0,r.createTextVNode)(" Attachment "),f={class:"hidden md:block"},h={class:"ml-4 flex items-center md:ml-6"},p=[(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})],-1)],v={class:"-mr-2 flex md:hidden"},w=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],y=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)],V={class:"px-2 pt-2 pb-3 sm:px-3"},b=(0,r.createTextVNode)(" Magazines "),N=(0,r.createTextVNode)(" Category "),k=(0,r.createTextVNode)(" Attachment "),E={class:"pt-4 pb-3 border-t border-gray-700"},C={class:"flex items-center px-5"},B={class:"flex-shrink-0"},M=[(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})],-1)],_={class:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"};var j=o(9038),O=o(9680);const z={components:{Link:j.rU},data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen},logout:function(){O.Inertia.post("/logout")}}};const I=(0,o(3744).Z)(z,[["render",function(e,t,o,j,O,z){var I=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("nav",n,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("div",c,[(0,r.createVNode)(I,{class:"bg-indigo-500 py-2 rounded-md text-gray-100 hover:shadow-md hover:bg-indigo-700 hover:text-gray-300 transition",href:e.route("home.index")},{default:(0,r.withCtx)((function(){return[d]})),_:1},8,["href"])]),(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",u,[(0,r.createVNode)(I,{class:"ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("magazines.index")},{default:(0,r.withCtx)((function(){return[m]})),_:1},8,["href"]),(0,r.createVNode)(I,{class:"ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("categories.index")},{default:(0,r.withCtx)((function(){return[g]})),_:1},8,["href"]),(0,r.createVNode)(I,{class:"ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("attachments.index")},{default:(0,r.withCtx)((function(){return[x]})),_:1},8,["href"])])])]),(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("div",h,[(0,r.createElementVNode)("button",{class:"text-gray-200 hover:text-gray-300 transition",onClick:t[0]||(t[0]=function(){return z.logout&&z.logout.apply(z,arguments)})},p)])]),(0,r.createElementVNode)("div",v,[(0,r.createElementVNode)("button",{onClick:t[1]||(t[1]=function(){return z.toggle&&z.toggle.apply(z,arguments)}),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"},[((0,r.openBlock)(),(0,r.createElementBlock)("svg",{class:(0,r.normalizeClass)([O.isOpen?"hidden":"block","h-6 w-6"]),stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},w,2)),((0,r.openBlock)(),(0,r.createElementBlock)("svg",{class:(0,r.normalizeClass)([O.isOpen?"block":"hidden","h-6 w-6"]),stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},y,2))])])])]),(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)([O.isOpen?"":"hidden","md:hidden"])},[(0,r.createElementVNode)("div",V,[(0,r.createVNode)(I,{class:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("magazines.index")},{default:(0,r.withCtx)((function(){return[b]})),_:1},8,["href"]),(0,r.createVNode)(I,{class:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("categories.index")},{default:(0,r.withCtx)((function(){return[N]})),_:1},8,["href"]),(0,r.createVNode)(I,{class:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("attachments.index")},{default:(0,r.withCtx)((function(){return[k]})),_:1},8,["href"])]),(0,r.createElementVNode)("div",E,[(0,r.createElementVNode)("div",C,[(0,r.createElementVNode)("div",B,[(0,r.createElementVNode)("button",{class:"text-gray-200 hover:text-gray-300",onClick:t[2]||(t[2]=function(){return z.logout&&z.logout.apply(z,arguments)})},M)])])])],2)]),(0,r.createElementVNode)("main",null,[(0,r.createElementVNode)("div",_,[(0,r.renderSlot)(e.$slots,"default")])])])])}]])},1140:(e,t,o)=>{o.r(t),o.d(t,{default:()=>h});var r=o(821),n={class:"lg:pt-8 py-8 lg:py-16 px-6 md:px-16 lg:px-24 prose lg:prose-lg mx-auto max-w-2xl lg:max-w-3xl"},a={class:"bg-white shadow-xl px-10 py-5 rounded-md space-y-8"},l=(0,r.createElementVNode)("div",{class:"text-gray-600 text-2xl font-semibold text-center"},"Create Category",-1),s={class:"space-y-4"},c={class:"space-y-1"},d=(0,r.createElementVNode)("label",{for:"name",class:"text-md font-medium text-gray-700"}," Nama Category ",-1),i={class:"space-y-1"},u=(0,r.createElementVNode)("label",{for:"image_url",class:"text-md font-medium text-gray-700"}," Image ",-1),m=["src"],g=(0,r.createElementVNode)("button",{class:"bg-blue-500 px-6 py-2 rounded-md text-white hover:bg-blue-700"}," Create ",-1);var x=o(9038);const f={layout:o(7071).Z,setup:function(){return{form:(0,x.cI)({name:"",image_url:""})}},data:function(){return{url:null}},methods:{previewImage:function(e){var t=e.target.files[0];this.url=URL.createObjectURL(t)}}};const h=(0,o(3744).Z)(f,[["render",function(e,t,o,x,f,h){return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createElementVNode)("div",a,[l,(0,r.createElementVNode)("form",{onSubmit:t[3]||(t[3]=(0,r.withModifiers)((function(t){return x.form.post(e.route("categories.store"))}),["prevent"]))},[(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("div",c,[d,(0,r.withDirectives)((0,r.createElementVNode)("input",{class:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500",type:"text",name:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return x.form.name=e})},null,512),[[r.vModelText,x.form.name]])]),(0,r.createElementVNode)("div",i,[u,(0,r.createElementVNode)("input",{class:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500",type:"file",name:"image_url",onChange:t[1]||(t[1]=function(){return h.previewImage&&h.previewImage.apply(h,arguments)}),onInput:t[2]||(t[2]=function(e){return x.form.image_url=e.target.files[0]})},null,32),f.url?((0,r.openBlock)(),(0,r.createElementBlock)("img",{key:0,src:f.url,class:"w-6/12 rounded"},null,8,m)):(0,r.createCommentVNode)("",!0)]),g])],32)])])}]])}}]);