import{$ as Y,d as R,B as v,h as k,E as Z,j as ee,t as oe,e as O,r as t,l as a,o as m,v as x,w as e,a as o,c as D,a0 as ae,b as c,q as L,a1 as te,p as N,O as A,P as re,Q as se,k as j,n as ne,m as _,s as F}from"./index.757ffe30.js";import{u as ie}from"./vee-validate.esm.ea8486e3.js";import ce from"./PaginateTable.c102cc01.js";function le(f){Object.keys(f).forEach(l=>{Object.keys(f[l]).forEach(r=>{Y[l][r]=f[l][r]})})}function ue(f){const l=R(),r=v(10),u=v(1),h=v(0),d=v([]),b=v([{label:"10",value:10},{label:"25",value:25},{label:"50",value:50},{label:"100",value:100},{label:"Todas",value:0}]),y=k(()=>{const s=d.value.length;return{from:r.value*(u.value-1)+(s?1:0),to:r.value*(u.value-1)+s,of:h.value}}),n=()=>{g(s=>{d.value=s})};Z([u,r],()=>{n()}),ee(()=>n());const g=s=>{l.misReferidos({usuario_id:f,perPage:r.value,currentPage:u.value}).then(({usuarios:p,total:w})=>{s(p),h.value=w}).catch(p=>{toast.error("Error cargado data")})};return{perPageOptions:b,currentPage:u,perPage:r,total:h,dataMeta:y,refetchData:n,fetchData:g,usuarios:d}}const de=c("h2",{class:"fw-bolder"},"Mis Referidos",-1),pe={class:"d-flex align-items-center shadow-lg",style:{cursor:"pointer","border-radius":"10px",border:"1px dotted rgba(0,0,0,0.5)",padding:".5rem"}},_e={class:"flex-shrink-1"},me={class:"flex-grow-1 ms-1"},fe={__name:"list",setup(f){const l=R(),{usuario:r}=oe(l),u=O(),{perPageOptions:h,currentPage:d,perPage:b,total:y,dataMeta:n,refetchData:g,fetchData:s,usuarios:p}=ue(r.value.id);return k(()=>u.loading),(w,P)=>{const M=t("b-avatar"),C=t("b-col"),S=t("b-row"),E=t("b-container"),V=t("b-card");return a(p).length?(m(),x(V,{key:0},{header:e(()=>[de]),default:e(()=>[o(E,{fluid:""},{default:e(()=>[o(S,null,{default:e(()=>[(m(!0),D(te,null,ae(a(p),(i,$)=>(m(),x(C,{cols:"12",class:"p-1",key:$,md:"4"},{default:e(()=>[c("section",pe,[c("article",_e,[o(M,{src:i.imagen,alt:i.nombre_completo||i.username,size:"md"},null,8,["src","alt"])]),c("main",me,[c("h3",null,L(i.nombre_completo||i.username),1)])])]),_:2},1024))),128))]),_:1}),o(S,null,{default:e(()=>[o(C,{cols:"12"},{default:e(()=>[o(ce,{dataMeta:a(n),perPage:a(b),"onUpdate:perPage":P[0]||(P[0]=i=>N(b)?b.value=i:null),total:a(y),currentPage:a(d)},null,8,["dataMeta","perPage","total","currentPage"])]),_:1})]),_:1})]),_:1})]),_:1})):A("",!0)}}},be=c("header",{class:"d-flex justify-content-between align-items-center w-100"},[c("h2",{class:"fw-bolder"},"Mi c\xF3digo de referidor")],-1),ge=c("h2",null,"Gana puntos ($Tp) env\xEDando tu c\xF3digo de referidor a tus amigos.",-1),ve=c("p",{class:"text-justify"},[_("Aumenta tus puntos ($Tp) por cada Amigo que se haya registrado con tu c\xF3digo de referidor y haya consumado una reserva. "),c("br"),_(" Por cada reserva consumada de tus referidos tu ganar\xE1s saldo ($Tp) que luego podr\xE1s usar en nuestras tiendas de destinos que tenemos para T\xED.")],-1),he={key:0,class:"btn-group btn-group-sm"},$e={__name:"index",setup(f){const l=O(),r=R();le({mixed:{required:"Este Campo es importante",default:"Este Campo es important",notType:"Este campo debe ser ${type} y se ha pasado ${notType}"},string:{length:"Este campo debe ser una cadena"}});const u=re({codigo_referidor:se().required()}),{useFieldModel:h,errors:d,handleSubmit:b,meta:y}=ie({initialValues:r.usuario,validationSchema:u}),[n]=h(["codigo_referidor"]),g=k(()=>r.usuario),s=v(""),p=v(window.location.origin),w=k(()=>`${p.value}/register/${n.value}`),P=()=>{s.value=`https://www.facebook.com/sharer/sharer.php?u=${w.value}`,window.open(s.value,"_blank")},M=()=>{s.value=`https://wa.me/?text=Registrate en ${p.value} y gana puntos $Tp  con TravelPoint. ${w.value}`,window.open(s.value,"_blank")},C=()=>{navigator.clipboard.writeText(w.value),toast.success("Link Copiado.")},S=b((i,$)=>{r.crearLinkReferido(i).then(({result:q})=>{q?toast.success("Su c\xF3digo de referido ha sido creado con \xE9xito..."):toast.error("Su c\xF3digo de referido no se pudo crear, int\xE9ntelo de nuevo mas tarde...")})}),E=k(()=>l.loading),V=k(()=>`${window.location.origin}/register/`);return(i,$)=>{const q=t("b-input-group-prepend"),U=t("b-form-input"),T=t("b-button"),I=t("b-input-group-append"),W=t("b-input-group"),z=t("b-form-invalid-feedback"),G=t("b-form-group"),B=t("font-awesome"),Q=t("b-form"),H=t("b-card"),J=j("loading"),K=j("ripple");return m(),D("div",null,[o(H,null,{header:e(()=>[be]),default:e(()=>[ge,ve,o(Q,{onSubmit:ne(a(S),["prevent"])},{default:e(()=>[o(G,{label:"Comparte tu link"},{default:e(()=>[o(W,{class:"w-100"},{default:e(()=>[o(q,{"is-text":""},{default:e(()=>[_(L(a(V)),1)]),_:1}),o(U,{modelValue:a(n),"onUpdate:modelValue":$[0]||($[0]=X=>N(n)?n.value=X:null),disabled:!!a(g).codigo_referidor,state:a(y).valid},null,8,["modelValue","disabled","state"]),o(I,null,{default:e(()=>[a(g).codigo_referidor?(m(),x(T,{key:0,onClick:C,variant:"primary",class:"py-0 fw-bolder"},{default:e(()=>[_(" Copiar link ")]),_:1})):F((m(),x(T,{key:1,variant:"primary",type:"submit",class:"py-0 fw-bolder",disabled:!a(n)},{default:e(()=>[_(" Crear Link ")]),_:1},8,["disabled"])),[[J,a(E)]])]),_:1})]),_:1}),o(z,{state:a(d).codigo_referidor?!1:null},{default:e(()=>[_(L(a(d).codigo_referidor),1)]),_:1},8,["state"])]),_:1}),a(g).codigo_referidor?(m(),D("div",he,[F((m(),x(T,{onClick:P,style:{background:"#376BC8"},variant:"primary"},{default:e(()=>[o(B,{icon:["fab","facebook"]}),_(" Facebook ")]),_:1})),[[K,50]]),o(T,{onClick:M,variant:"success"},{default:e(()=>[o(B,{icon:["fab","whatsapp"]}),_(" WhatsApp ")]),_:1})])):A("",!0)]),_:1},8,["onSubmit"])]),_:1}),o(fe,{class:"mt-1"})])}}};export{$e as default};
