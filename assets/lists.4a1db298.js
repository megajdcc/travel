import{u as g,r as o,o as d,v as R,w as s,a as t,l as n,a6 as S,b as e,c as F,N as C,M as L,e as B,d as T,h as v,p as $}from"./index.757ffe30.js";import{u as k}from"./useUsersList.c84a1084.js";import{u as M}from"./rol.cc109475.js";import"./ToastificationContent.bac8106d.js";/* empty css                                                                              */import"./useFilterTable.1019926e.js";const N=e("h5",null," Filtro ",-1),O=e("label",null,"Rol de usuario",-1),q={__name:"UsersListFilters",props:{roleFilter:{type:Number,required:!1},roleOptions:{type:Array,required:!0}},emits:["update:roleFilter"],setup(r,{emit:c}){const l=g();return(i,_)=>{const p=o("b-card-header"),m=o("b-col"),b=o("b-row"),f=o("b-card-body"),h=o("b-card");return d(),R(h,{"no-body":""},{default:s(()=>[t(p,{class:"pb-1"},{default:s(()=>[N]),_:1}),t(f,null,{default:s(()=>[t(b,null,{default:s(()=>[t(m,{cols:"12",md:"4",class:"mb-md-0 mb-2"},{default:s(()=>[O,t(n(S),{dir:n(l).isRTL?"rtl":"ltr",value:r.roleFilter,options:r.roleOptions,class:"w-100",reduce:a=>a.id,onInput:_[0]||(_[0]=a=>i.$emit("update:roleFilter",a))},null,8,["dir","value","options","reduce"])]),_:1})]),_:1})]),_:1})]),_:1})}}},D=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"First"),e("th",{scope:"col"},"Last"),e("th",{scope:"col"},"Handle")])],-1),I=e("tbody",null,[e("tr",null,[e("th",{scope:"row"},"1"),e("td",null,"Mark"),e("td",null,"Otto"),e("td",null,"@mdo")]),e("tr",null,[e("th",{scope:"row"},"2"),e("td",null,"Jacob"),e("td",null,"Thornton"),e("td",null,"@fat")]),e("tr",null,[e("th",{scope:"row"},"3"),e("td",{colspan:"2"},"Larry the Bird"),e("td",null,"@twitter")])],-1),P=[D,I],V={__name:"MiTable",props:{classTable:String,variant:{type:String,required:!1}},setup(r){return(c,l)=>(d(),F("table",{class:C(["table table-hover",[r.classTable]])},P,2))}};const A={class:"container-fluid w-100 px-0 mx-0"},z={__name:"lists",setup(r){const c=M(),l=B(),i=T();g(),v(()=>l.loading),i.eliminar();const{fetchUsers:_,tableColumns:p,perPage:m,currentPage:b,totalUsers:f,dataMeta:h,perPageOptions:a,searchQuery:E,sortBy:H,isSortDirDesc:J,refUserListTable:Q,refetchData:j,resolveUserRoleVariant:G,resolveUserRoleIcon:K,roleFilter:u}=k(),w=v(()=>c.getRols);return(W,y)=>{const x=o("b-card");return d(),F("div",A,[t(q,{roleFilter:n(u),"onUpdate:roleFilter":y[0]||(y[0]=U=>$(u)?u.value=U:null),"role-options":n(w)},null,8,["roleFilter","role-options"]),t(x,{"no-body":"",class:"mb-0 p-2"},{default:s(()=>[t(V)]),_:1})])}}},se=L(z,[["__scopeId","data-v-71e9f0b6"]]);export{se as default};
