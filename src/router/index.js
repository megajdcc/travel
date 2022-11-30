
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router';
import { canNavigate } from 'libs/acl/routeProtection'

import dashboard from './routes/dashboard'
import pages from './routes/pages'
import calidad from './routes/calidad'
import paginas from './routes/paginas';

// const routes = [
//    {
//       path:'/',
//       component:() => import('views/Home.vue'),
//       name:'inicio',
//       meta:{
//          layout:'public',
//          resource:'Auth',
//          action:'read'

//       }
//    },
//    {
//       path:'/login',
//       component:() => import('views/auth/login.vue'),
//       name:'login',
//       meta:{
//          resource:'Auth',
//          action:'read',
//          layout:'full'
//       }
//    }

// ];

import Error404 from 'views/error/Error404.vue'


const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   
   routes:[
      ...paginas,
      ...dashboard,
      ...pages,
      ...calidad,

      { path: '/:pathMatch(.*)*', name: 'not-found', component:Error404,meta:{layout:'full'}  },
      // if you omit the last `*`, the `/` character in params will be encoded when resolving or pushing
      { path: '/:pathMatch(.*)', name: 'bad-not-found', component: Error404, meta: { layout: 'full' } },
   ],

   strict:true
})

// bad example if using named routes:
router.resolve({
   name: 'bad-not-found',
   params: { pathMatch: 'not/found' },
}).href // '/not%2Ffound'
// good example:
router.resolve({
   name: 'not-found',
   params: { pathMatch: ['not', 'found'] },
}).href // '/not/found'


router.beforeEach((to,_,next) => {
   const isLoggedIn = (localStorage.getItem('token')) ? true : false;

   if (!canNavigate(to) && !isLoggedIn) {
      return next({ name: 'login' })
   } else if (!canNavigate(to) && isLoggedIn) {
      return false;
      // return next({ name: 'misc-not-authorized' })
   } else if (to.meta.redirectIfLoggedIn === true && isLoggedIn) {
      return false;
      // return next({ name: 'home' })
   } else {
      // document.documentElement.scrollTo({
      //    top: 0,
      //    behavior: 'smooth',
      // })
      next();
   }

})

router.afterEach(() => {

   // Remove initial loading
   const appLoading = document.getElementById('loading-bg')

   if (appLoading) {
      appLoading.style.display = 'none'
   }

})

export default router;
