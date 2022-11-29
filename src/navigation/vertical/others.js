export default [
  {
    header: 'Others',
  },
  {
    title: 'Access Control',
    route: 'access-control',
    icon: 'shield',
    // acl: {
    action: 'read',
    resource: 'ACL',
    // },
  },
  {
    title: 'Menu Levels',
    icon: 'bars',
    children: [
      {
        title: 'Menu Level 2.1',
        route: null,
      },
      {
        title: 'Menu Level 2.2',
        children: [
          {
            title: 'Menu Level 3.1',
            route: null,
          },
          {
            title: 'Menu Level 3.2',
            route: null,
          },
        ],
      },
    ],
  },
  {
    title: 'Disabled Menu',
    route: null,
    icon: 'eye-slash',
    disabled: true,
  },
  {
    title: 'Raise Support',
    href: 'https://pixinvent.ticksy.com/',
    icon: 'life-ring',
  },
  {
    title: 'Documentation',
    href: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation',
    icon: 'file',
  },
]
