import{M as oo,d as lo,e as ao,h as to,t as we,I as no,B as V,P as io,Q as w,a5 as L,ab as ze,j as so,E as he,r as b,k as de,o as r,c as O,b as d,q as c,a as e,w as o,s as v,v as g,m as i,l,p,a7 as f,a6 as W,ac as uo,ad as Se,O as P,n as ro,Y as co,Z as mo}from"./index.757ffe30.js";/* empty css                                                                   */import{_ as Ce}from"./InputFile.9017f652.js";import{u as po}from"./vee-validate.esm.ea8486e3.js";import{u as fo}from"./solicitudNegocio.bfc3edf3.js";import{u as _o}from"./categoria.72077af0.js";import{u as go}from"./useDireccion.ca9593cd.js";import{_ as bo}from"./CurrencyInput.cb27c024.js";const z=h=>(co("data-v-d811e646"),h=h(),mo(),h),vo=z(()=>d("h2",null,"Informaci\xF3n de negocio",-1)),Vo=z(()=>d("hr",null,null,-1)),xo=z(()=>d("h2",null,"Informaci\xF3n de contacto del negocio",-1)),ko=z(()=>d("hr",null,null,-1)),yo=z(()=>d("h2",null,"Ubicaci\xF3n del negocio",-1)),wo=z(()=>d("hr",null,null,-1)),zo=z(()=>d("hr",null,null,-1)),ho={class:"form-group"},So=z(()=>d("label",{for:"map-canvas",class:"me-1"},"Posici\xF3n en el mapa:",-1)),Co=z(()=>d("p",null,[d("ul",null,[d("li",null,"Arrastra el marcador hacia la ubicaci\xF3n del hotel."),d("li",null,"Puedes apoyarte escribiendo una ubicaci\xF3n como una ciudad, municipio, colonia, etc. y seleccionar una de las opciones sugeridas.")]),i(" Las coordenadas de la ubicaci\xF3n se crean automaticamente. ")],-1)),Mo={class:"d-none"},Uo={class:"input-group mt-2 d-flex justify-content-center",id:"myAutocomplete"},jo={class:"input-group-text bg-secondary"},qo=z(()=>d("h2",null,"Im\xE1genes del negocio",-1)),Lo=z(()=>d("hr",null,null,-1)),Po={class:"text-danger"},$o={key:0,class:"btn-group btn-group-sm"},No={key:0},Eo={key:1},Ro={__name:"formulario",props:{titulo:{type:String,default:"\xA1Afilia tu negocio!",required:!1},subTitulo:{type:String,default:"Env\xEDanos una solicitud para publicar tu negocio en nuestro directorio.",required:!1},admin:{type:Boolean,default:!1,required:!1}},emits:["save"],setup(h,{emit:Me}){const x=fo(),Ue=lo(),je=ao(),re=_o(),N=to(()=>je.loading);we(x);const ce=no("$uri"),{categorias:me}=we(re),qe=V(window.location.origin);V("");const Q=V(!0),pe=V(10);V([]);const fe=V(""),_e=V(null),ge=V(null),be=V(null),Y=V(null),Z=V(null),Le=V(null),{meta:Io,errors:n,handleSubmit:Pe,useFieldModel:$e,resetForm:Ao,handleReset:Do,setValues:Ne}=po({initialValues:{...x.solicitud,logo:null,foto:null},validateOnMount:!1,validationSchema:io({nombre:w().required(),breve:w().required(),categoria_id:w().required(),tipo_comision:L().required(),comision:L().required(),descripcion:w().required(),url:w().required(),email:w().email(),telefono:w().required(),sitio_web:w().url().nullable(),direccion:w().required(),codigo_postal:w().required(),estado_id:L().required(),ciudad_id:L().required(),lat:L().required(),lng:L().required(),logo:ze().nullable(),foto:ze().nullable(),comentario:w().nullable()})}),[H,J,K,E,U,X,ee,oe,le,ae,te,ne,R,ie,j,q,I,A,se]=$e(["nombre","breve","categoria_id","tipo_comision","comision","descripcion","url","email","telefono","sitio_web","direccion","codigo_postal","estado_id","ciudad_id","lat","lng","logo","foto","comentario"]),D=Pe((u,t)=>{Me("save",u,t)}),ve=V({content:"<strong>M\xE9xio City</strong>"}),Ee=V({mapTypeControl:!1,zoomControl:!0}),{paises:Re,ciudades:Ie,estados:Ae,cargarCiudades:Ve,pais_id:T}=go(),xe=()=>{me.value.length||re.getCategorias(),x.solicitud.id&&(Y.value=ce+"/"+x.solicitud.logo,Z.value=`${ce}/${x.solicitud.foto}`,T.value=x.solicitud.estado.pais_id,Ve(x.solicitud.estado_id))};so(()=>{xe(),_e.value.$mapPromise.then(u=>{var t=document.getElementById("myAutocomplete");t.index=1,u.controls[google.maps.ControlPosition.TOP_CENTER].push(t)})}),he(x,()=>{xe(),Ne({...x.solicitud,logo:null,foto:null})});const ke=()=>Number(j.value),ye=()=>Number(q.value),De=u=>{j.value=Number(u.latLng.lat()),q.value=Number(u.latLng.lng())},Te=u=>{},Fe=u=>{typeof u!="string"&&(I.value=u,Y.value=URL.createObjectURL(u))},Ge=u=>{typeof u!="string"&&(A.value=u,Z.value=URL.createObjectURL(u))},Be=()=>{situacion.value=3,D()},Oe=()=>{situacion.value=4,D()},We=()=>{situacion.value=2,D()},Qe=u=>{Q.value=!1;var t="";u.address_components&&(t=[u.address_components[0]&&u.address_components[0].short_name||"",u.address_components[1]&&u.address_components[1].short_name||"",u.address_components[2]&&u.address_components[2].short_name||""].join(" ")),pe.value=17,j.value=Number(u.geometry.location.lat()),q.value=Number(u.geometry.location.lng()),fe.value={url:u.icon,size:new google.maps.Size(71,71),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,34),scaledSize:new google.maps.Size(35,35)},Q.value=!0,ve.value.content="<div><strong>"+u.name+"</strong><br>"+t};return he(R,u=>{Ve(u)}),(u,t)=>{const s=b("font-awesome"),S=b("b-form-input"),_=b("b-form-invalid-feedback"),ue=b("b-form-textarea"),m=b("b-col"),Ye=b("b-form-radio-group"),y=b("b-row"),C=b("b-input-group-prepend"),M=b("b-input-group"),$=b("b-container"),F=b("b-card"),Ze=b("GMapAutocomplete"),He=b("GMapInfoWindow"),Je=b("GMapMarker"),Ke=b("GMapMap"),G=b("b-button"),Xe=b("b-form"),k=de("b-tooltip"),eo=de("maska"),B=de("loading");return r(),O("div",null,[d("h1",null,c(h.titulo),1),d("p",null,c(h.subTitulo),1),e(Xe,{onSubmit:ro(l(D),["prevent"]),ref_key:"formSolicitud",ref:Le},{default:o(()=>[e(F,null,{default:o(()=>[vo,Vo,e($,{fluid:""},{default:o(()=>[e(y,null,{default:o(()=>[e(m,{cols:"12",md:"8"},{default:o(()=>[v((r(),g(f,null,{label:o(()=>[i(" Nombre del negocio: "),e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"}),e(s,{icon:"circle-info",class:"text-warning",size:"sm"})]),default:o(()=>[e(S,{modelValue:l(H),"onUpdate:modelValue":t[0]||(t[0]=a=>p(H)?H.value=a:null),state:!l(n).nombre},null,8,["modelValue","state"]),e(_,{state:!l(n).nombre},{default:o(()=>[i(c(l(n).nombre),1)]),_:1},8,["state"])]),_:1})),[[k,"Los socios de TravelPoints pueden encontrar su negocio por su nombre.",void 0,{hover:!0}]]),v((r(),g(f,null,{label:o(()=>[i(" Descripci\xF3n corta: "),e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"}),e(s,{icon:"circle-info",class:"text-warning",size:"sm"})]),default:o(()=>[e(ue,{modelValue:l(J),"onUpdate:modelValue":t[1]||(t[1]=a=>p(J)?J.value=a:null),state:!l(n).breve,placeholder:"Ejemplo: Restaurante de mariscos",rows:4},null,8,["modelValue","state"]),e(_,{state:!l(n).breve},{default:o(()=>[i(c(l(n).breve),1)]),_:1},8,["state"])]),_:1})),[[k,"Describe tu negocio de manera concisa. M\xE1ximo 80 car\xE1cteres.",void 0,{hover:!0}]])]),_:1}),e(m,{cols:"12",md:"4"},{default:o(()=>[e(f,null,{label:o(()=>[i(" Categor\xEDa del negocio: "),e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"})]),default:o(()=>[e(l(W),{modelValue:l(K),"onUpdate:modelValue":t[2]||(t[2]=a=>p(K)?K.value=a:null),reduce:a=>a.value,options:l(me).map(a=>({label:a.categoria,value:a.id})),placeholder:"Seleccione Categor\xEDa"},null,8,["modelValue","reduce","options"]),e(_,{state:!l(n).categoria_id},{default:o(()=>[i(c(l(n).categoria_id),1)]),_:1},8,["state"])]),_:1}),v((r(),g(f,null,{label:o(()=>[i(" Tipo de pago: "),e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"}),e(s,{icon:"circle-info",class:"text-warning",size:"sm"})]),default:o(()=>[e(Ye,{modelValue:l(E),"onUpdate:modelValue":t[3]||(t[3]=a=>p(E)?E.value=a:null),options:[{text:"Comisi\xF3n",value:1},{text:"Monto F\xEDjo",value:2}],"button-variant":"outline-primary px-1 ",state:!l(n).tipo_comision,class:"w-100",buttons:"","value-field":"value",onChange:t[4]||(t[4]=a=>U.value=10),size:"md btn-group mx-0 px-0 w-100 fw-bolder fs-5"},null,8,["modelValue","state"]),e(_,{state:!l(n).tipo_comision},{default:o(()=>[i(c(l(n).tipo_comision),1)]),_:1},8,["state"])]),_:1})),[[k,"Elija entre pagar una comisi\xF3n o un monto fijo por persona",void 0,{hover:!0}]]),l(E)==1?v((r(),g(f,{key:0},{label:o(()=>[i(" Comisi\xF3n: "),e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"}),e(s,{icon:"circle-info",class:"text-warning",size:"sm"})]),default:o(()=>[e(S,{type:"number",max:100,min:6,modelValue:l(U),"onUpdate:modelValue":t[5]||(t[5]=a=>p(U)?U.value=a:null),state:!l(n).comision},null,8,["modelValue","state"]),e(_,{state:!l(n).comision},{default:o(()=>[i(c(l(n).comision),1)]),_:1},8,["state"])]),_:1})),[[k,"Se te cobrar\xE1 este porcentaje por cada venta que registres en nuestro sistema. Una mayor comisi\xF3n significa un mejor posicionamiento.",void 0,{hover:!0}]]):v((r(),g(f,{key:1},{label:o(()=>[i(" Monto: "),e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"}),e(s,{icon:"circle-info",class:"text-warning",size:"sm"})]),default:o(()=>[e(bo,{modelValue:l(U),"onUpdate:modelValue":t[6]||(t[6]=a=>p(U)?U.value=a:null),modelModifiers:{valor:!0},options:l(uo),class:"form-control"},null,8,["modelValue","options"]),e(_,{state:!l(n).comision},{default:o(()=>[i(c(l(n).comision),1)]),_:1},8,["state"])]),_:1})),[[k,"Se te cobrar\xE1 este monto por cada venta que registres en el sistema a cada persona",void 0,{hover:!0}]])]),_:1})]),_:1}),e(y,null,{default:o(()=>[e(m,{cols:"12"},{default:o(()=>[v((r(),g(f,null,{label:o(()=>[i(" Descripci\xF3n del negocio: "),e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"}),e(s,{icon:"circle-info",class:"text-warning",size:"sm"})]),default:o(()=>[e(ue,{modelValue:l(X),"onUpdate:modelValue":t[7]||(t[7]=a=>p(X)?X.value=a:null),state:!l(n).descripcion,row:3,placeholder:"Descripci\xF3n del negocio"},null,8,["modelValue","state"]),e(_,{state:!l(n).descripcion},{default:o(()=>[i(c(l(n).descripcion),1)]),_:1},8,["state"])]),_:1})),[[k,"Explica con m\xE1s detalle acerca de tu negocio. Los socios de TravelPoints tambien pueden encontrar tu negocio por su descripci\xF3n. Puedes agregar palabras claves para facilitar la busqueda.",void 0,{hover:!0}]])]),_:1}),e(m,{cols:"12"},{default:o(()=>[v((r(),g(f,null,{label:o(()=>[i(" Enlace desea del perfil de negocio: "),e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"}),e(s,{icon:"circle-info",class:"text-warning",size:"sm"})]),default:o(()=>[e(M,null,{default:o(()=>[e(C,{"is-text":""},{default:o(()=>[i(c(qe.value)+"/ ",1)]),_:1}),e(S,{modelValue:l(ee),"onUpdate:modelValue":t[8]||(t[8]=a=>p(ee)?ee.value=a:null),state:!l(n).url,placeholder:"nombre-de-negocio"},null,8,["modelValue","state"])]),_:1}),e(_,{state:!l(n).url},{default:o(()=>[i(c(l(n).url),1)]),_:1},8,["state"])]),_:1})),[[k,"Este ser\xE1 el enlace directo al perfil de t\xFA negocio.",void 0,{hover:!0}]])]),_:1})]),_:1})]),_:1})]),_:1}),e(F,null,{default:o(()=>[xo,ko,e($,{fluid:""},{default:o(()=>[e(y,null,{default:o(()=>[e(m,{cols:"12",md:"6"},{default:o(()=>[e(f,null,{label:o(()=>[i(" Correo electr\xF3nco del negocio: "),e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"})]),default:o(()=>[e(M,null,{default:o(()=>[e(C,{"is-text":""},{default:o(()=>[e(s,{icon:["fas","at"]})]),_:1}),e(S,{type:"email",modelValue:l(oe),"onUpdate:modelValue":t[9]||(t[9]=a=>p(oe)?oe.value=a:null),state:!l(n).email,placeholder:"Correo electr\xF3nico del negocio"},null,8,["modelValue","state"])]),_:1}),e(_,{state:!l(n).email},{default:o(()=>[i(c(l(n).email),1)]),_:1},8,["state"])]),_:1})]),_:1}),e(m,{cols:"12",md:"6"},{default:o(()=>[e(f,null,{label:o(()=>[i(" N\xFAmero telef\xF3nico del negocio: "),e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"})]),default:o(()=>[e(M,null,{default:o(()=>[e(C,{"is-text":""},{default:o(()=>[e(s,{icon:"phone"})]),_:1}),v(e(S,{modelValue:l(le),"onUpdate:modelValue":t[10]||(t[10]=a=>p(le)?le.value=a:null),state:!l(n).telefono,placeholder:"N\xFAmero telef\xF3nico"},null,8,["modelValue","state"]),[[eo,"+#############"]])]),_:1}),e(_,{state:!l(n).telefono},{default:o(()=>[i(c(l(n).telefono),1)]),_:1},8,["state"])]),_:1})]),_:1}),e(m,{cols:"12"},{default:o(()=>[v((r(),g(f,null,{label:o(()=>[i(" Sitio web del negocio: ")]),default:o(()=>[e(M,null,{default:o(()=>[e(C,{"is-text":""},{default:o(()=>[e(s,{icon:"globe"})]),_:1}),e(S,{modelValue:l(ae),"onUpdate:modelValue":t[11]||(t[11]=a=>p(ae)?ae.value=a:null),placeholder:"Sitio web del negocio"},null,8,["modelValue"])]),_:1}),e(_,{state:!l(n).sitio_web},{default:o(()=>[i(c(l(n).sitio_web),1)]),_:1},8,["state"])]),_:1})),[[k,"Si no tienes sitio web del negocio, dejalo en blanco",void 0,{hover:!0}]])]),_:1})]),_:1})]),_:1})]),_:1}),e(F,null,{default:o(()=>[yo,wo,e($,{fluid:""},{default:o(()=>[e(y,null,{default:o(()=>[e(m,{cols:"12",md:"8"},{default:o(()=>[e(f,null,{label:o(()=>[i(" Direcci\xF3n del negocio: "),e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"})]),default:o(()=>[e(M,null,{default:o(()=>[e(C,{"is-text":""},{default:o(()=>[e(s,{icon:"map"})]),_:1}),e(S,{modelValue:l(te),"onUpdate:modelValue":t[12]||(t[12]=a=>p(te)?te.value=a:null),state:!l(n).direccion,placeholder:"Direcci\xF3n del negocio"},null,8,["modelValue","state"])]),_:1}),e(_,{state:!l(n).direccion},{default:o(()=>[i(c(l(n).direccion),1)]),_:1},8,["state"])]),_:1})]),_:1}),e(m,{cols:"12",md:"4"},{default:o(()=>[e(f,null,{label:o(()=>[i(" C\xF3digo postal del negocio: "),e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"})]),default:o(()=>[e(M,null,{default:o(()=>[e(C,{"is-text":""},{default:o(()=>[e(s,{icon:"envelope"})]),_:1}),e(S,{modelValue:l(ne),"onUpdate:modelValue":t[13]||(t[13]=a=>p(ne)?ne.value=a:null),state:!l(n).codigo_postal,placeholder:"C\xF3digo postal del negocio"},null,8,["modelValue","state"])]),_:1}),e(_,{state:!l(n).codigo_postal},{default:o(()=>[i(c(l(n).codigo_postal),1)]),_:1},8,["state"])]),_:1})]),_:1})]),_:1}),e(y,null,{default:o(()=>[e(m,{cols:"12",md:"4"},{default:o(()=>[e(f,null,{label:o(()=>[i(" Pais: "),e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"})]),default:o(()=>[e(l(W),{modelValue:l(T),"onUpdate:modelValue":t[14]||(t[14]=a=>p(T)?T.value=a:null),modelModifiers:{value:!0},reduce:a=>a.value,options:l(Re).map(a=>({label:a.pais,value:a.id}))},null,8,["modelValue","reduce","options"])]),_:1})]),_:1}),e(m,{cols:"12",md:"4"},{default:o(()=>[e(f,null,{label:o(()=>[i(" Estado: "),e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"})]),default:o(()=>[e(l(W),{modelValue:l(R),"onUpdate:modelValue":t[15]||(t[15]=a=>p(R)?R.value=a:null),modelModifiers:{value:!0},reduce:a=>a.value,options:l(Ae).map(a=>({label:a.estado,value:a.id}))},null,8,["modelValue","reduce","options"]),e(_,{state:!l(n).estado_id},{default:o(()=>[i(c(l(n).estado_id),1)]),_:1},8,["state"])]),_:1})]),_:1}),e(m,{cols:"12",md:"4"},{default:o(()=>[e(f,null,{label:o(()=>[i(" Ciudad: ")]),default:o(()=>[e(l(W),{modelValue:l(ie),"onUpdate:modelValue":t[16]||(t[16]=a=>p(ie)?ie.value=a:null),modelModifiers:{value:!0},reduce:a=>a.value,options:l(Ie).map(a=>({label:a.ciudad,value:a.id}))},null,8,["modelValue","reduce","options"]),e(_,{state:!l(n).ciudad_id},{default:o(()=>[i(c(l(n).ciudad_id),1)]),_:1},8,["state"])]),_:1})]),_:1})]),_:1}),zo,e(y,null,{default:o(()=>[e(m,null,{default:o(()=>[d("div",ho,[So,e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"}),Co])]),_:1})]),_:1}),e(y,null,{default:o(()=>[e(m,null,{default:o(()=>[d("div",Mo,[d("div",Uo,[d("div",jo,[e(s,{icon:"search"})]),e(Ze,{class:"w-75",onPlace_changed:Qe,style:{"z-index":"8000 !important"}})])]),e(Ke,{ref_key:"input",ref:_e,center:{lat:ke(),lng:ye()},zoom:pe.value,options:Ee.value,style:{width:"100%",height:"250px",display:"flex","justify-content":"center"}},{default:o(()=>[(r(),g(Je,{key:0,position:{lat:ke(),lng:ye()},visible:Q.value,draggable:!0,clickable:!0,icon:fe.value,onMouseup:De,onPosition_changed:t[17]||(t[17]=a=>Te())},{default:o(()=>[e(He,{options:ve.value},null,8,["options"])]),_:1},8,["position","visible","icon"]))]),_:1},8,["center","zoom","options"])]),_:1})]),_:1}),e(y,null,{default:o(()=>[e(m,{md:"6"},{default:o(()=>[v((r(),g(f,{label:"Latitud"},{default:o(()=>[e(M,null,{default:o(()=>[e(C,{"is-text":""},{default:o(()=>[e(s,{icon:"map-marked-alt"})]),_:1}),e(S,{modelValue:l(j),"onUpdate:modelValue":t[18]||(t[18]=a=>p(j)?j.value=a:null),state:!l(n).lat,readonly:""},null,8,["modelValue","state"])]),_:1}),e(_,{state:!l(n).lat},{default:o(()=>[i(c(l(n).lat),1)]),_:1},8,["state"])]),_:1})),[[k,"La latitud se establece cuando busca un lugar en el mapa",void 0,{hover:!0}]])]),_:1}),e(m,{md:"6"},{default:o(()=>[v((r(),g(f,{label:"Longitud"},{default:o(()=>[e(M,null,{default:o(()=>[e(C,{"is-text":""},{default:o(()=>[e(s,{icon:"map-marked-alt"})]),_:1}),e(S,{modelValue:l(q),"onUpdate:modelValue":t[19]||(t[19]=a=>p(q)?q.value=a:null),state:!l(n).lng,readonly:""},null,8,["modelValue","state"])]),_:1}),e(_,{state:!l(n).lng},{default:o(()=>[i(c(l(n).lng),1)]),_:1},8,["state"])]),_:1})),[[k,"La longitud se establece cuando busca un lugar en el mapa",void 0,{hover:!0}]])]),_:1})]),_:1})]),_:1})]),_:1}),e(F,null,{default:o(()=>[qo,Lo,e($,{fluid:""},{default:o(()=>[e(y,null,{default:o(()=>[e(m,{cols:"12",md:"6"},{default:o(()=>[v((r(),g(f,{description:"Presiona encima del recuadro para buscar una imagen."},{label:o(()=>[i(" Adjunta el logo de tu negocio: "),e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"}),e(s,{icon:"circle-info",class:"text-warning",size:"sm"})]),default:o(()=>[d("section",{class:"content-logo",onClick:t[20]||(t[20]=()=>ge.value.$el.click()),style:Se(`background:url(${Y.value})`)},null,4),e(Ce,{modelValue:l(I),"onUpdate:modelValue":t[21]||(t[21]=a=>p(I)?I.value=a:null),ref_key:"refLogo",ref:ge,plain:"",accept:".jpb, .png",hidden:"",onInput:Fe,state:!l(n).logo},null,8,["modelValue","state"]),e(_,{state:!l(n).logo},{default:o(()=>[i(c(l(n).logo),1)]),_:1},8,["state"])]),_:1})),[[k,"Este logo aparecer\xE1 en el perfil de negocio, se recomienda una imagen cuadrada de m\xEDnimo 300x300 px y un peso inferior a 2mb. La imagen debe estar en formato jpg o png",void 0,{hover:!0}]])]),_:1}),e(m,{cols:"12",md:"6"},{default:o(()=>[v((r(),g(f,{description:"Presiona encima del recuadro para buscar una imagen."},{label:o(()=>[i(" Adjunta una fotograf\xEDa de tu negocio: "),e(s,{icon:"asterisk",class:"me-1",color:"#ac4953",size:"xs"}),e(s,{icon:"circle-info",class:"text-warning",size:"sm"})]),default:o(()=>[d("section",{class:"content-logo",onClick:t[22]||(t[22]=a=>be.value.$el.click()),style:Se(`background:url(${Z.value})`)},null,4),e(Ce,{modelValue:l(A),"onUpdate:modelValue":t[23]||(t[23]=a=>p(A)?A.value=a:null),ref_key:"refFoto",ref:be,plain:"",accept:".jpb, .png",hidden:"",onInput:Ge,state:!l(n).foto},null,8,["modelValue","state"]),e(_,{state:!l(n).foto},{default:o(()=>[i(c(l(n).foto),1)]),_:1},8,["state"])]),_:1})),[[k,"Esta ser\xE1 la imagen de portada de tu negocio. Se recomienda una imagen horizontal panoramica y un peso inferior a 2mb, la imagen debe estar en formato jgg o png.",void 0,{hover:!0}]])]),_:1})]),_:1}),l(x).solicitud.id?(r(),g(y,{key:0},{default:o(()=>[e(m,{cols:"12"},{default:o(()=>[e(f,{label:"Comentario",description:"Cuando una solicitud de negocio es regresada para su modificaci\xF3n, por lo general te la env\xEDan con un comentario,este es el comentario"},{default:o(()=>[e(ue,{modelValue:l(se),"onUpdate:modelValue":t[24]||(t[24]=a=>p(se)?se.value=a:null),rows:3,readonly:!u.$can("delete","solicitudes")},null,8,["modelValue","readonly"])]),_:1})]),_:1})]),_:1})):P("",!0)]),_:1})]),_:1}),e($,{fluid:"",class:"mb-1 mx-0 px-0"},{default:o(()=>[e(y,null,{default:o(()=>[e(m,{cols:"12",md:"8"},{default:o(()=>[d("span",null,[i("Los campos marcados con "),d("strong",Po,[e(s,{icon:"asterisk",class:"",size:"xs"})]),i(" son obligatorios")])]),_:1}),e(m,{cols:"12",md:"4",class:"d-flex justify-content-end"},{default:o(()=>[[3,4].includes(l(x).situacion)?P("",!0):(r(),O("div",$o,[h.admin?P("",!0):v((r(),g(G,{key:0,type:"submit",variant:"primary"},{default:o(()=>[e(s,{icon:"paper-plane",class:"me-1"}),l(x).id&&l(x).usuario_id===l(Ue).usuario.id?(r(),O("span",No," Reenviar solicitud ")):(r(),O("span",Eo,"Enviar Solicitud"))]),_:1})),[[B,l(N)]]),h.admin?v((r(),g(G,{key:1,type:"button",variant:"success",title:"Aceptar solicitud",onClick:Be},{default:o(()=>[e(s,{icon:"check"}),i(" Aceptar Solicitud ")]),_:1})),[[B,l(N)]]):P("",!0),h.admin?v((r(),g(G,{key:2,type:"button",variant:"danger",title:"Rechazar solicitud",onClick:Oe},{default:o(()=>[e(s,{icon:"xmark"}),i(" Rechazar Solicitud ")]),_:1})),[[B,l(N)]]):P("",!0),h.admin?v((r(),g(G,{key:3,type:"button",variant:"info",title:"Regresar solicitud para su modificaci\xF3n",onClick:We},{default:o(()=>[e(s,{icon:"arrow-left"}),i(" Regresar Solicitud ")]),_:1})),[[B,l(N)]]):P("",!0)]))]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])}}},Zo=oo(Ro,[["__scopeId","data-v-d811e646"]]);export{Zo as f};
