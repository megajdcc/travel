import { createApp } from 'vue'

import BootstrapVue3 from 'bootstrap-vue-3'

// import 'bootstrap/dist/css/bootstrap.css'


// import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
// import './style.css'
import '@/assets/scss/app.scss'
import 'scss/paginas/style.scss'
import 'scss/style.scss'
// import 'scss/loader.css'


import ElementPlus from 'element-plus'


import i18n from '@/libs/i18n'
import router from './router';
import store from './stores';
import toast from '@/libs/toastification'
import axios from 'libs/axios'

import {maska} from 'maska'


import FeatherIcon from '@core/components/feather-icon/FeatherIcon.vue';

// Font Awesome

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import VueGoogleMaps from 'vue-google-maps-community-fork'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas,fab)

// ScrollPerfect 
import VuePerfectScrollbar from 'components/VuePerfectScrollbar.vue'

import App from 'views/App.vue'

import { abilitiesPlugin } from '@casl/vue'
import ability from 'libs/acl/ability'



// Global Components
import './global-components'

// Directivas
import vRipple from './directives/vRipple'





import lodash  from 'lodash'

window._ = lodash

window.clone = function (obj) {
  return JSON.parse(JSON.stringify(obj));
}

const app = createApp(App)

app.use(abilitiesPlugin,ability,{
   useGlobalProperties:true
})

app.use(VueGoogleMaps,{

  load: {
    key: 'AIzaSyCNWsVH2kmknm6knGSRKDuzGeMWM1PT6gA',
    libraries: 'places',
  },
  installComponents: true

});


app.use(BootstrapVue3);
app.use(ElementPlus);
app.use(i18n);
app.use(router);
app.use(store);

app.use(toast, {
  hideProgressBar: false,
  closeOnClick: false,
  closeButton: false,
  icon: false,
  timeout: 3000,
  transition: 'Vue-Toastification__fade',
  position:'bottom-right'
})


// controladores de errores

// app.config.errorHandler = (error) => {
//    console.log(error)
// }

app.component('font-awesome', FontAwesomeIcon)
app.component('vue-perfect-scrollbar',VuePerfectScrollbar)
app.directive('ripple',vRipple);
app.component(FeatherIcon.name,FeatherIcon);
app.config.globalProperties.$http = axios;
app.config.globalProperties.$uri = axios.getUri()
app.provide('$uri',axios.getUri())
app.directive('maska', maska);
router.isReady().then(() => app.mount('#app'))
// app.mount('#app')