"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[389],{3744:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,r]of t)o[e]=r;return o}},7007:(e,t,o)=>{o.d(t,{Z:()=>O});var r=o(821),n={class:"bg-gray-800"},a={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},l={class:"flex items-center justify-between h-16"},s={class:"flex items-center"},c=(0,r.createElementVNode)("div",{class:"flex-shrink-0"},[(0,r.createElementVNode)("img",{class:"h-8 w-8",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-400.svg",alt:"Workflow logo"})],-1),i={class:"hidden md:block"},d={class:"ml-10 flex items-baseline"},u=(0,r.createTextVNode)(" Magazines "),m=(0,r.createTextVNode)(" Category "),h=(0,r.createTextVNode)(" Attachment "),f={class:"hidden md:block"},x={class:"ml-4 flex items-center md:ml-6"},p={class:"ml-3 relative"},g=[(0,r.createElementVNode)("img",{class:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""},null,-1)],v={class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"},w={class:"py-1 rounded-md bg-white shadow-xs",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu"},b=[(0,r.createElementVNode)("button",null,"logout",-1)],y={class:"-mr-2 flex md:hidden"},V=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],N=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)],k={class:"px-2 pt-2 pb-3 sm:px-3"},E=(0,r.createTextVNode)(" Magazines "),C=(0,r.createTextVNode)(" Category "),B=(0,r.createTextVNode)(" Attachment "),M=(0,r.createStaticVNode)('<div class="pt-4 pb-3 border-t border-gray-700"><div class="flex items-center px-5"><div class="flex-shrink-0"><img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt></div></div><div class="mt-3 px-2"><a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Sign out</a></div></div>',1),_={class:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"};const j={components:{Link:o(9038).rU},data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen}}};const O=(0,o(3744).Z)(j,[["render",function(e,t,o,j,O,z){var L=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("nav",n,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",s,[c,(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",d,[(0,r.createVNode)(L,{class:"ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("magazines.index")},{default:(0,r.withCtx)((function(){return[u]})),_:1},8,["href"]),(0,r.createVNode)(L,{class:"ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("categories.index")},{default:(0,r.withCtx)((function(){return[m]})),_:1},8,["href"]),(0,r.createVNode)(L,{class:"ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("attachments.index")},{default:(0,r.withCtx)((function(){return[h]})),_:1},8,["href"])])])]),(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("div",x,[(0,r.createElementVNode)("div",p,[(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("button",{onClick:t[0]||(t[0]=function(){return z.toggle&&z.toggle.apply(z,arguments)}),class:"max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid",id:"user-menu","aria-label":"User menu","aria-haspopup":"true"},g)]),(0,r.createVNode)(r.Transition,{"enter-active-class":"transition ease-out duration-100","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,r.withCtx)((function(){return[(0,r.withDirectives)((0,r.createElementVNode)("div",v,[(0,r.createElementVNode)("div",w,[(0,r.createElementVNode)("form",{onSubmit:t[1]||(t[1]=(0,r.withModifiers)((function(t){return e.form.post(e.route("logout"))}),["prevent"]))},b,32)])],512),[[r.vShow,O.isOpen]])]})),_:1})])])]),(0,r.createElementVNode)("div",y,[(0,r.createElementVNode)("button",{onClick:t[2]||(t[2]=function(){return z.toggle&&z.toggle.apply(z,arguments)}),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"},[((0,r.openBlock)(),(0,r.createElementBlock)("svg",{class:(0,r.normalizeClass)([O.isOpen?"hidden":"block","h-6 w-6"]),stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},V,2)),((0,r.openBlock)(),(0,r.createElementBlock)("svg",{class:(0,r.normalizeClass)([O.isOpen?"block":"hidden","h-6 w-6"]),stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},N,2))])])])]),(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)([O.isOpen?"":"hidden","md:hidden"])},[(0,r.createElementVNode)("div",k,[(0,r.createVNode)(L,{class:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("magazines.index")},{default:(0,r.withCtx)((function(){return[E]})),_:1},8,["href"]),(0,r.createVNode)(L,{class:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("categories.index")},{default:(0,r.withCtx)((function(){return[C]})),_:1},8,["href"]),(0,r.createVNode)(L,{class:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("attachments.index")},{default:(0,r.withCtx)((function(){return[B]})),_:1},8,["href"])]),M],2)]),(0,r.createElementVNode)("main",null,[(0,r.createElementVNode)("div",_,[(0,r.renderSlot)(e.$slots,"default")])])])])}]])},7389:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var r=o(821),n={class:"lg:pt-8 py-8 lg:py-16 px-6 md:px-16 lg:px-24 prose lg:prose-lg mx-auto max-w-2xl lg:max-w-3xl"},a={class:"bg-white shadow-xl px-10 pt-5 pb-10 rounded-md space-y-5"},l=(0,r.createElementVNode)("div",{class:"text-gray-600 text-2xl font-semibold text-center"},"List Attachment",-1),s={class:"flex justify-end"},c=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[(0,r.createElementVNode)("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clip-rule":"evenodd"})],-1),i={class:"w-full"},d={class:"text-gray-700 border border-gray-400"},u={class:"px-4 py-2 flex items-center justify-between"},m={class:"flex space-x-2"},h=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-green-600 hover:text-green-700",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1),f=["onClick"],x=[(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-red-600 hover:text-red-700",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)];var p=o(9038),g=o(9680);const v={layout:o(7007).Z,components:{Link:p.rU},props:["attachments"],setup:function(){return{deletePost:function(e){g.Inertia.delete("/attachments/".concat(e))}}}};const w=(0,o(3744).Z)(v,[["render",function(e,t,o,p,g,v){var w=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createElementVNode)("div",a,[l,(0,r.createElementVNode)("div",s,[(0,r.createVNode)(w,{class:"bg-green-500 py-2 px-4 rounded-md text-white hover:bg-green-700 transition duration-500 ease-in-out",href:e.route("attachments.create")},{default:(0,r.withCtx)((function(){return[c]})),_:1},8,["href"])]),(0,r.createElementVNode)("table",i,[(0,r.createElementVNode)("tbody",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(o.attachments,(function(t){return(0,r.openBlock)(),(0,r.createElementBlock)("tr",d,[(0,r.createElementVNode)("td",u,[(0,r.createTextVNode)((0,r.toDisplayString)(o.attachments.img_url)+" ",1),(0,r.createElementVNode)("div",m,[(0,r.createVNode)(w,{class:"",href:e.route("attachments.edit",{attachment:t})},{default:(0,r.withCtx)((function(){return[h]})),_:2},1032,["href"]),(0,r.createElementVNode)("button",{class:"",onClick:(0,r.withModifiers)((function(e){return p.deletePost("".concat(t.id))}),["prevent"])},x,8,f)])])])})),256))])])])])}]])}}]);