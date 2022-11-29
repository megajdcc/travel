import{B as h,h as k,j as R,G,o as m,c as y,T as B,N,l as x,I as J,r as s,v as T,w as o,a,b as r,q as $,e as L,k as K,s as P,a1 as M,a0 as O,O as W,E as X,ad as Y,m as A}from"./index.757ffe30.js";import{u as Z}from"./faq.87869443.js";let V;const ee=new Uint8Array(16);function te(){if(!V&&(V=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!V))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return V(ee)}const l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).slice(1));function ae(e,t=0){return(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase()}const oe=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),F={randomUUID:oe};function H(e,t,i){if(F.randomUUID&&!t&&!e)return F.randomUUID();e=e||{};const c=e.random||(e.rng||te)();if(c[6]=c[6]&15|64,c[8]=c[8]&63|128,t){i=i||0;for(let n=0;n<16;++n)t[i+n]=c[n];return t}return ae(c)}const ne={__name:"AppCollapse",props:{accordion:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},type:{type:String,default:"default"}},setup(e){const t=e,i=h(""),c={default:"collapse-default",border:"collapse-border",shadow:"collapse-shadow",margin:"collapse-margin"},n=k(()=>{const d=[];return d.push(c[t.type]),d});return R(()=>{i.value=H()}),G("parent",{...t,collapseID:i}),(d,u)=>(m(),y("div",{role:"tablist",class:N(["collapse-icon",x(n)])},[B(d.$slots,"default")],2))}},se={class:"lead collapse-title"},le={__name:"AppCollapseItem",props:{isVisible:{type:Boolean,default:!1},title:{type:String,required:!0}},emits:["visible"],setup(e,{emit:t}){const i=e,c=J("parent"),n=h(!1),d=h(""),u=c.hover,p=k(()=>{c.accor&&`${c.collapseID}`});R(()=>{d.value=H(),n.value=i.isVisible});const _=(b=!0)=>{n.value=b,t("visible",b)},v=()=>{u.value&&_(!0)},I=()=>{u.value&&_(!1)};return(b,f)=>{const S=s("b-card-header"),U=s("b-card-body"),g=s("b-collapse"),C=s("b-card");return m(),T(C,{"no-body":"",class:N({open:n.value}),onMouseenter:v,onMouseleave:I},{default:o(()=>[a(S,{class:N({collapsed:!n.value}),"aria-expanded":n.value?"true":"false","aria-controls":d.value,role:"tab","data-toggle":"collapse",onClick:f[0]||(f[0]=q=>_(!n.value))},{default:o(()=>[B(b.$slots,"header",{},()=>[r("span",se,$(e.title),1)])]),_:3},8,["class","aria-expanded","aria-controls"]),a(g,{id:d.value,modelValue:n.value,"onUpdate:modelValue":f[1]||(f[1]=q=>n.value=q),accordion:x(p),role:"tabpanel"},{default:o(()=>[a(U,null,{default:o(()=>[B(b.$slots,"default")]),_:3})]),_:3},8,["id","modelValue","accordion"])]),_:3},8,["class"])}}},ce={key:0},re={class:"d-flex align-items-center"},de={class:"mb-0 fw-bolder"},ie={class:"fw-bolder"},ue=["innerHTML"],pe={__name:"FaqQuestionAnswer",props:{options:{type:Object,default:()=>{}}},setup(e){const t=L(),i=k(()=>t.loading);return(c,n)=>{const d=s("b-avatar"),u=K("loading");return e.options?P((m(),y("div",ce,[r("div",re,[a(d,{rounded:"",size:"42",variant:"light-primary",class:"me-1"}),r("div",null,[r("h4",de,$(e.options.nombre),1)])]),a(ne,{id:"faq-payment-qna",accordion:"",type:"margin",class:"mt-2"},{default:o(()=>[(m(!0),y(M,null,O(e.options.faqs,(p,_)=>(m(),T(le,{key:_,title:p.pregunta},{header:o(()=>[r("h4",ie,$(p.pregunta),1)]),default:o(()=>[r("div",{innerHTML:p.respuesta},null,8,ue)]),_:2},1032,["title"]))),128))]),_:1})])),[[u,x(i)]]):W("",!0)}}},_e="/travel/assets/banner.c55d3927.png",me="/travel/assets/faq-illustrations.0a8a9367.svg";const be={class:"container-fluid"},fe={id:"faq-search-filter"},ve=r("h2",{class:"text-primary"}," Respondamos algunas preguntas ",-1),ge={id:"faq-tabs"},he={class:"fw-bolder"},ye={class:"faq-contact"},xe=r("h2",null,"\xBFA\xFAn tienes una pregunta?",-1),qe=r("h4",null,"01 800 400 INFO (4636), (322) 225 9635.",-1),we=r("span",{class:"text-body"},"\xA1Siempre estamos felices de ayudar!",-1),Ve=r("h4",null,"soporte@infochannel.si",-1),$e=r("span",{class:"text-body"},"\xA1La mejor manera de obtener una respuesta m\xE1s r\xE1pida!",-1),Se={__name:"faqs",setup(e){const t=L(),i=Z(),c=h([]),n=h(""),d=()=>{i.getCategorias(n.value).then(u=>{c.value=u})};return R(()=>d()),X([n],()=>{d()}),k(()=>t.loading),(u,p)=>{const _=s("b-card-text"),v=s("font-awesome"),I=s("b-input-group-prepend"),b=s("b-form-input"),f=s("b-input-group"),S=s("b-form"),U=s("b-card-body"),g=s("b-card"),C=s("b-tab"),q=s("b-img"),E=s("b-tabs"),D=s("b-col"),j=s("b-link"),Q=s("b-row");return m(),y("div",be,[r("section",fe,[a(g,{"no-body":"",class:"faq-search",style:Y({backgroundImage:`url(${x(_e)})`})},{default:o(()=>[a(U,{class:"text-center"},{default:o(()=>[ve,a(_,{class:"mb-2"},{default:o(()=>[A(" o elige una categor\xEDa para encontrar r\xE1pidamente la ayuda que necesitas ")]),_:1}),a(S,{class:"faq-search-input"},{default:o(()=>[a(f,{class:"input-group-merge"},{default:o(()=>[a(I,{"is-text":""},{default:o(()=>[a(v,{icon:"search"})]),_:1}),a(b,{id:"searchbar",modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=w=>n.value=w),placeholder:"Busca la pregunta"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["style"])]),r("section",ge,[a(E,{vertical:"","content-class":"col-12 col-md-8 col-lg-9",pills:"","nav-wrapper-class":"faq-navigation col-md-4 col-lg-3 col-12","nav-class":"nav-left"},{"tabs-end":o(()=>[a(q,{fluid:"",src:x(me),class:"d-none d-md-block mt-auto"},null,8,["src"])]),default:o(()=>[(m(!0),y(M,null,O(c.value,(w,z)=>(m(),T(C,{key:z,active:!z},{title:o(()=>[r("span",he,$(w.nombre),1)]),default:o(()=>[a(pe,{options:w},null,8,["options"])]),_:2},1032,["active"]))),128))]),_:1})]),r("section",ye,[a(Q,{class:"mt-5 pt-75 text-center"},{default:o(()=>[a(D,{cols:"12"},{default:o(()=>[xe,a(_,{class:"mb-3"},{default:o(()=>[A(" Si no puede encontrar una pregunta en nuestras preguntas frecuentes, siempre puede contactarnos. \xA1Te responderemos en breve! ")]),_:1})]),_:1}),a(D,{sm:"6"},{default:o(()=>[a(g,{class:"shadow-none py-1 faq-contact-card"},{default:o(()=>[a(j,{href:"tel:018004004636",target:"_blank"},{default:o(()=>[a(v,{icon:"phone",size:"2x",class:"mb-1"})]),_:1}),qe,we]),_:1})]),_:1}),a(D,{sm:"6"},{default:o(()=>[a(g,{class:"shadow-none py-1 faq-contact-card"},{default:o(()=>[a(j,{href:"mailto:soporte@infochannel.si",target:"_blank"},{default:o(()=>[a(v,{icon:"envelope",size:"2x",class:"mb-1"})]),_:1}),Ve,$e]),_:1})]),_:1})]),_:1})])])}}};export{Se as default};
