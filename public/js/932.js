"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[932],{3744:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,r]of t)o[e]=r;return o}},7071:(e,t,o)=>{o.d(t,{Z:()=>T});var r=o(821),n={class:"bg-gray-800"},a={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},l={class:"flex items-center justify-between h-16"},s={class:"flex items-center"},c={class:"flex-shrink-0"},d=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1),i={class:"hidden md:block"},u={class:"ml-10 flex items-baseline"},m=(0,r.createTextVNode)(" Magazines "),h=(0,r.createTextVNode)(" Category "),g=(0,r.createTextVNode)(" Attachment "),x={class:"hidden md:block"},f={class:"ml-4 flex items-center md:ml-6"},p=[(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})],-1)],v={class:"-mr-2 flex md:hidden"},w=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],k=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)],y={class:"px-2 pt-2 pb-3 sm:px-3"},V=(0,r.createTextVNode)(" Magazines "),N=(0,r.createTextVNode)(" Category "),b=(0,r.createTextVNode)(" Attachment "),E={class:"pt-4 pb-3 border-t border-gray-700"},C={class:"flex items-center px-5"},B={class:"flex-shrink-0"},z=[(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})],-1)],M={class:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"};var _=o(9038),j=o(9680);const O={components:{Link:_.rU},data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen},logout:function(){j.Inertia.post("/logout")}}};const T=(0,o(3744).Z)(O,[["render",function(e,t,o,_,j,O){var T=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("nav",n,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("div",c,[(0,r.createVNode)(T,{class:"bg-indigo-500 py-2 rounded-md text-gray-100 hover:shadow-md hover:bg-indigo-700 hover:text-gray-300 transition",href:e.route("home.index")},{default:(0,r.withCtx)((function(){return[d]})),_:1},8,["href"])]),(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",u,[(0,r.createVNode)(T,{class:"ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("magazines.index")},{default:(0,r.withCtx)((function(){return[m]})),_:1},8,["href"]),(0,r.createVNode)(T,{class:"ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("categories.index")},{default:(0,r.withCtx)((function(){return[h]})),_:1},8,["href"]),(0,r.createVNode)(T,{class:"ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("attachments.index")},{default:(0,r.withCtx)((function(){return[g]})),_:1},8,["href"])])])]),(0,r.createElementVNode)("div",x,[(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("button",{class:"text-gray-200 hover:text-gray-300 transition",onClick:t[0]||(t[0]=function(){return O.logout&&O.logout.apply(O,arguments)})},p)])]),(0,r.createElementVNode)("div",v,[(0,r.createElementVNode)("button",{onClick:t[1]||(t[1]=function(){return O.toggle&&O.toggle.apply(O,arguments)}),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"},[((0,r.openBlock)(),(0,r.createElementBlock)("svg",{class:(0,r.normalizeClass)([j.isOpen?"hidden":"block","h-6 w-6"]),stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},w,2)),((0,r.openBlock)(),(0,r.createElementBlock)("svg",{class:(0,r.normalizeClass)([j.isOpen?"block":"hidden","h-6 w-6"]),stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},k,2))])])])]),(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)([j.isOpen?"":"hidden","md:hidden"])},[(0,r.createElementVNode)("div",y,[(0,r.createVNode)(T,{class:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("magazines.index")},{default:(0,r.withCtx)((function(){return[V]})),_:1},8,["href"]),(0,r.createVNode)(T,{class:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("categories.index")},{default:(0,r.withCtx)((function(){return[N]})),_:1},8,["href"]),(0,r.createVNode)(T,{class:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",href:e.route("attachments.index")},{default:(0,r.withCtx)((function(){return[b]})),_:1},8,["href"])]),(0,r.createElementVNode)("div",E,[(0,r.createElementVNode)("div",C,[(0,r.createElementVNode)("div",B,[(0,r.createElementVNode)("button",{class:"text-gray-200 hover:text-gray-300",onClick:t[2]||(t[2]=function(){return O.logout&&O.logout.apply(O,arguments)})},z)])])])],2)]),(0,r.createElementVNode)("main",null,[(0,r.createElementVNode)("div",M,[(0,r.renderSlot)(e.$slots,"default")])])])])}]])},9932:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var r=o(821),n={class:"lg:pt-8 py-8 lg:py-16 px-6 md:px-10 lg:px-16 prose lg:prose-lg mx-auto max-w-4xl lg:max-w-6xl space-y-2"},a=(0,r.createElementVNode)("div",{class:"text-gray-600 text-2xl font-semibold text-center"},"Data Magazines",-1),l=(0,r.createTextVNode)(" Add "),s={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center"},c={class:"w-56 h-80 rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out bg-opacity-50 backdrop-filter backdrop-blur"},d={class:"h-72"},i=["src","alt"],u={class:"w-full h-full rounded-b-2xl text-gray-700 font-semibold text-center"},m={class:"align-middle"};var h=o(9038);const g={layout:o(7071).Z,components:{Link:h.rU},props:["magazines"]};const x=(0,o(3744).Z)(g,[["render",function(e,t,o,h,g,x){var f=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[a,(0,r.createElementVNode)("div",null,[(0,r.createVNode)(f,{class:"bg-green-600 py-2 px-5 ml-2 rounded-md text-white hover:bg-green-700 transition duration-500 ease-in-out",href:e.route("magazines.create")},{default:(0,r.withCtx)((function(){return[l]})),_:1},8,["href"])]),(0,r.createElementVNode)("div",s,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(o.magazines,(function(t){return(0,r.openBlock)(),(0,r.createBlock)(f,{class:"mt-5",href:e.route("magazines.edit",{magazine:t})},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",d,[(0,r.createElementVNode)("img",{class:"object-cover h-full w-full rounded-t-2xl",src:"../storage/magazines/"+t.image_url,alt:t.name},null,8,i)]),(0,r.createElementVNode)("div",u,[(0,r.createElementVNode)("span",m,(0,r.toDisplayString)(t.name),1)])])]})),_:2},1032,["href"])})),256))])])}]])}}]);