"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[496],{3744:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,r]of t)o[e]=r;return o}},7007:(e,t,o)=>{o.d(t,{Z:()=>z});var r=o(821),a={class:"bg-gray-800"},n={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},l={class:"flex items-center justify-between h-16"},s={class:"flex items-center"},i=(0,r.createElementVNode)("div",{class:"flex-shrink-0"},[(0,r.createElementVNode)("img",{class:"h-8 w-8",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-400.svg",alt:"Workflow logo"})],-1),c={class:"hidden md:block"},d={class:"ml-10 flex items-baseline"},u=(0,r.createTextVNode)(" Magazines "),m=(0,r.createTextVNode)(" Category "),f=(0,r.createTextVNode)(" Attachment "),p={class:"hidden md:block"},g={class:"ml-4 flex items-center md:ml-6"},x={class:"ml-3 relative"},h=[(0,r.createElementVNode)("img",{class:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""},null,-1)],v={class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"},b={class:"py-1 rounded-md bg-white shadow-xs",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu"},y=[(0,r.createElementVNode)("button",null,"logout",-1)],w={class:"-mr-2 flex md:hidden"},V=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],N=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)],E={class:"px-2 pt-2 pb-3 sm:px-3"},k=(0,r.createTextVNode)(" Magazines "),C=(0,r.createTextVNode)(" Category "),B=(0,r.createTextVNode)(" Attachment "),M=(0,r.createStaticVNode)('<div class="pt-4 pb-3 border-t border-gray-700"><div class="flex items-center px-5"><div class="flex-shrink-0"><img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt></div></div><div class="mt-3 px-2"><a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Sign out</a></div></div>',1),_={class:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"};const O={components:{Link:o(9038).rU},data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen}}};const z=(0,o(3744).Z)(O,[["render",function(e,t,o,O,z,T){var j=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("nav",a,[(0,r.createElementVNode)("div",n,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",s,[i,(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",d,[(0,r.createVNode)(j,{class:"ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("magazines.index")},{default:(0,r.withCtx)((function(){return[u]})),_:1},8,["href"]),(0,r.createVNode)(j,{class:"ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("categories.index")},{default:(0,r.withCtx)((function(){return[m]})),_:1},8,["href"]),(0,r.createVNode)(j,{class:"ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("attachments.index")},{default:(0,r.withCtx)((function(){return[f]})),_:1},8,["href"])])])]),(0,r.createElementVNode)("div",p,[(0,r.createElementVNode)("div",g,[(0,r.createElementVNode)("div",x,[(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("button",{onClick:t[0]||(t[0]=function(){return T.toggle&&T.toggle.apply(T,arguments)}),class:"max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid",id:"user-menu","aria-label":"User menu","aria-haspopup":"true"},h)]),(0,r.createVNode)(r.Transition,{"enter-active-class":"transition ease-out duration-100","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,r.withCtx)((function(){return[(0,r.withDirectives)((0,r.createElementVNode)("div",v,[(0,r.createElementVNode)("div",b,[(0,r.createElementVNode)("form",{onSubmit:t[1]||(t[1]=(0,r.withModifiers)((function(t){return e.form.post(e.route("logout"))}),["prevent"]))},y,32)])],512),[[r.vShow,z.isOpen]])]})),_:1})])])]),(0,r.createElementVNode)("div",w,[(0,r.createElementVNode)("button",{onClick:t[2]||(t[2]=function(){return T.toggle&&T.toggle.apply(T,arguments)}),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"},[((0,r.openBlock)(),(0,r.createElementBlock)("svg",{class:(0,r.normalizeClass)([z.isOpen?"hidden":"block","h-6 w-6"]),stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},V,2)),((0,r.openBlock)(),(0,r.createElementBlock)("svg",{class:(0,r.normalizeClass)([z.isOpen?"block":"hidden","h-6 w-6"]),stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},N,2))])])])]),(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)([z.isOpen?"":"hidden","md:hidden"])},[(0,r.createElementVNode)("div",E,[(0,r.createVNode)(j,{class:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("magazines.index")},{default:(0,r.withCtx)((function(){return[k]})),_:1},8,["href"]),(0,r.createVNode)(j,{class:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("categories.index")},{default:(0,r.withCtx)((function(){return[C]})),_:1},8,["href"]),(0,r.createVNode)(j,{class:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("attachments.index")},{default:(0,r.withCtx)((function(){return[B]})),_:1},8,["href"])]),M],2)]),(0,r.createElementVNode)("main",null,[(0,r.createElementVNode)("div",_,[(0,r.renderSlot)(e.$slots,"default")])])])])}]])},7496:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var r=o(821),a={class:"lg:pt-8 py-8 lg:py-16 px-6 md:px-16 lg:px-24 prose lg:prose-lg mx-auto max-w-2xl lg:max-w-3xl"},n={class:"bg-white shadow px-10 py-5 rounded-md space-y-8 bg-opacity-50 backdrop-filter backdrop-blur"},l=(0,r.createElementVNode)("div",{class:"text-gray-600 text-2xl font-semibold text-center"},"Create Magazine",-1),s={class:"space-y-4"},i={class:"space-y-1"},c=(0,r.createElementVNode)("label",{for:"name",class:"text-md font-medium text-gray-700"}," Title ",-1),d={class:"space-y-1"},u=(0,r.createElementVNode)("label",{for:"image_url",class:"text-md font-medium text-gray-700"}," Image ",-1),m=["src"],f=(0,r.createElementVNode)("button",{class:"bg-blue-500 px-6 py-2 rounded-md text-white hover:bg-blue-700"}," Create ",-1);var p=o(9038);const g={layout:o(7007).Z,setup:function(){return{form:(0,p.cI)({name:"",image_url:""})}},data:function(){return{url:null}},methods:{previewImage:function(e){var t=e.target.files[0];this.url=URL.createObjectURL(t)}}};const x=(0,o(3744).Z)(g,[["render",function(e,t,o,p,g,x){return(0,r.openBlock)(),(0,r.createElementBlock)("div",a,[(0,r.createElementVNode)("div",n,[l,(0,r.createElementVNode)("form",{onSubmit:t[3]||(t[3]=(0,r.withModifiers)((function(t){return p.form.post(e.route("magazines.store"))}),["prevent"]))},[(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("div",i,[c,(0,r.withDirectives)((0,r.createElementVNode)("input",{class:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500",type:"text",name:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return p.form.name=e})},null,512),[[r.vModelText,p.form.name]])]),(0,r.createElementVNode)("div",d,[u,(0,r.createElementVNode)("input",{class:"w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500",type:"file",name:"image_url",onChange:t[1]||(t[1]=function(){return x.previewImage&&x.previewImage.apply(x,arguments)}),onInput:t[2]||(t[2]=function(e){return p.form.image_url=e.target.files[0]})},null,32),g.url?((0,r.openBlock)(),(0,r.createElementBlock)("img",{key:0,src:g.url,class:"w-6/12 rounded"},null,8,m)):(0,r.createCommentVNode)("",!0)]),f])],32)])])}]])}}]);