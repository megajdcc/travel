export default [
   {
      path: '/',
      name: 'inicio',
      component: () => import('views/paginas/index.vue'),
      meta: {
         layout: 'public',
         resource: 'Auth',
      },

   },

   {
      path: '/que-es-travel-points',
      name: 'about',
      component: () => import('views/paginas/about.vue'),
      meta: {
         layout: 'public',
         resource: 'Auth',
         pageTitle: 'Acerca de Travel Points (about)',
         breadcrumb: [
            {
               text: 'Home',
               to: { name: 'inicio' },
               active: false,
            },

            {
               text: 'About',
               to: { name: 'about' },
               active: true,
            }

         ]
      },

   },

   {
      path: '/porque-afiliar-mi-negocio',
      name: 'negocio.about',
      component: () => import('views/paginas/aboutNegocio.vue'),
      meta: {
         layout: 'public',
         resource: 'Auth',
         pageTitle: 'Porque afiliar mi negocio',
         breadcrumb: [
            {
               text: 'Home',
               to: { name: 'inicio' },
               active: false,
            },

            {
               text: 'Porque afiliar mi negocio',
               active: true,
            }

         ]
      },

   },

   {
      path: '/politicas-privacidad',
      name: 'politicas.privacidad',
      component: () => import('views/paginas/politicas/index.vue'),
      meta: {
         layout: 'public',
         resource: 'Auth',
         pageTitle: 'Políticas de privacidad',
         breadcrumb: [
            {
               text: 'Home',
               to: { name: 'inicio' },
               active: false,
            },

            {
               text: 'Políticas',
               active: true,
            }

         ]
      },

   },

   {
      path: '/terminos-y-condiciones',
      name: 'terminos-condiciones',
      component: () => import('views/paginas/terminosCondiciones.vue'),
      meta: {
         layout: 'public',
         resource: 'Auth',
         pageTitle: 'Términos y Condiciones',
         breadcrumb: [
            {
               text: 'Home',
               to: { name: 'inicio' },
               active: false,
            },

            {
               text: 'para usuarios Turistas',
               active: true,
            }

         ]
      },

   },

   {
      path: '/faqs',
      component: () => import('views/paginas/faqs.vue'),
      name: 'faqs',
      meta: {
         layout  : 'public',
         resource: 'Auth',
         action  : 'read'
      }

   },



]
