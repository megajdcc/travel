/* empty css                                                                              */import{M as u,r as c,o as e,c as n,b as a,v as o,N as _,q as r,O as s}from"./index.430ac3f7.js";const m={props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1},avatar:{type:Boolean,default:!1},avatarSrc:{type:String,required:!1}}},x={class:"toastification"},v={class:"d-flex align-items-start"},y={class:"d-flex flex-grow-1"},k=["textContent"],C=["textContent"];function g(d,l,t,h,p,S){const i=c("font-awesome"),f=c("b-avatar");return e(),n("div",x,[a("div",v,[t.avatar?(e(),o(f,{key:1,size:"lg",src:t.avatarSrc,class:"me-2 flex-shrink-0"},null,8,["src"])):(e(),o(i,{key:0,icon:t.icon,size:"2x",class:"me-2 flex-shrink-0"},null,8,["icon"])),a("div",y,[a("div",null,[t.title?(e(),n("h5",{key:0,class:_(["mb-0 fw-bolder toastification-title",`text-${t.variant}`]),textContent:r(t.title)},null,10,k)):s("",!0),t.text?(e(),n("small",{key:1,class:"d-inline-block text-body",textContent:r(t.text)},null,8,C)):s("",!0)]),a("span",{class:"cursor-pointer toastification-close-icon ml-auto",onClick:l[0]||(l[0]=b=>d.$emit("close-toast"))},[t.hideClose?s("",!0):(e(),o(i,{key:0,icon:"xmark"}))])])])])}const z=u(m,[["render",g],["__scopeId","data-v-6d4f10ea"]]);export{z as T};