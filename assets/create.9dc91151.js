import{f as e}from"./formulario.2b613096.js";import{u}from"./solicitudNegocio.c4ac5d37.js";import{f as c,j as d,A as m}from"./index.0b260ec5.js";/* empty css                                                                   */import"./InputFile.ed7bd890.js";import"./vee-validate.esm.282a3e43.js";import"./categoria.f7a435fd.js";import"./useDireccion.8a00cef6.js";import"./CurrencyInput.316973ed.js";import"./index.20dcc5e0.js";const j={setup(){const s=u(),t=c();return d(()=>s.clear()),()=>m(e,{onSave(r,i){s.guardar(r).then(({result:o,solicitud:a})=>{o?(toast.success("Se ha  guardado con \xE9xito la solicitud"),t.push({name:"socio.negocio.solicitudes.edit",params:{id:a.id}})):toast.info("NO se pudo guardar la solicitud")}).catch(o=>{console.log(o),o.response.status===422&&i.setErrors(o.response.data.errors)})}})}};export{j as default};
