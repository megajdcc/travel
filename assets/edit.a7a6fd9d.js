import{f as i}from"./form.2c0b0bfe.js";import{u as p}from"./rol.8e4f4619.js";import{t as n,ai as f,j as m,E as d,A as h}from"./index.70b226c4.js";import"./permiso.3ecec98d.js";const E={props:["id"],setup(u){const o=p(),{id:t}=n(u),{roles:a}=n(o),s=()=>{a.value.length?o.capturarRol(Number(t.value)):o.getRol(t.value).then(e=>{o.capturarRol(Number(t.value))})};return f(()=>s()),m(()=>s()),d([t,a],()=>{s()}),()=>h(i,{on:{save:(e,c)=>{o.guardarRol(e).then(({result:r,message:l,rol:v})=>{r?toast.success(l):toast.error(l)}).catch(r=>{console.log(r),r.response.status===422&&c.setErrors(r.response.data.errors)})}}})}};export{E as default};