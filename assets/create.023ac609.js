import{f as e}from"./formulario.96a09d01.js";import{u}from"./solicitudNegocio.6b5837db.js";import{f as c,j as d,A as m}from"./index.52d87dda.js";/* empty css                                                                   */import"./InputFile.5366d57c.js";import"./vee-validate.esm.76ebddbf.js";import"./categoria.2f2b18e2.js";import"./useDireccion.4b4aece7.js";import"./CurrencyInput.51bd406b.js";import"./index.3ae85341.js";const j={setup(){const s=u(),t=c();return d(()=>s.clear()),()=>m(e,{onSave(r,i){s.guardar(r).then(({result:o,solicitud:a})=>{o?(toast.success("Se ha  guardado con \xE9xito la solicitud"),t.push({name:"socio.negocio.solicitudes.edit",params:{id:a.id}})):toast.info("NO se pudo guardar la solicitud")}).catch(o=>{console.log(o),o.response.status===422&&i.setErrors(o.response.data.errors)})}})}};export{j as default};
