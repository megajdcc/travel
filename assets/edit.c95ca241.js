import{f as n}from"./form.ae2fb6cc.js";import{d as c,t as p,h as m,j as l,E as d,A as f}from"./index.48deae7d.js";import"./rol.11a007b1.js";import"./component.cc197936.js";import"./useUsersList.b15a26a0.js";import"./ToastificationContent.c7cb0cdb.js";/* empty css                                                                              */import"./useFilterTable.ed5bc676.js";const E={props:["id"],setup(e){const a=c(),{id:r}=p(e),u=m(()=>a.usuarios),s=()=>{u.value.length?a.capturarUsuario(Number(r.value)):a.getUsuario(r.value).then(t=>{a.capturarUsuari(Number(r.value))})};return l(()=>{s()}),d([r],()=>{s()}),()=>f(n,{on:{save:(t,i)=>{a.guardar(t).then(({result:o,usuario:h})=>{o?toast.success("Se ha actualizado con \xE9xito al usuario..."):toast.error("No se pudo actualizar al usuario, int\xE9ntelo de nuevo mas tarde")}).catch(o=>{console.log(o),o.response.status===422&&i.setErrors(o.response.data.errors)})}}})}};export{E as default};