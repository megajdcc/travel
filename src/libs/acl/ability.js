import { createMongoAbility } from '@casl/ability'
import { initialAbility } from './config'

//  Capacidad de lectura de localStorage
// * Maneja la recuperación automática de habilidades anteriores si ya ha iniciado sesión como usuario
// ? Puede actualizar esto si almacena las habilidades del usuario en un lugar más seguro
// ! Cualquiera puede actualizar localStorage, así que tenga cuidado y actualice esto
// const userData = JSON.parse(localStorage.getItem('userData'))


const habilidades = (localStorage.getItem('habilidades')) ? JSON.parse(localStorage.getItem('habilidades')) : null;



let existingAbility = habilidades ? habilidades : null

if (existingAbility) {

   existingAbility = [...existingAbility, ...initialAbility];
}

export default createMongoAbility(existingAbility || initialAbility)