export default [
  {
    path: '/home',
    name: 'home',
    meta:{
      resource: 'home',
      action: 'read',
      layout:'vertical'
    },
    component: () => import('views/home.vue'),
  },
]
