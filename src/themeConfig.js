// Theme Colors
// Initially this will be blank. Later on when app is initialized we will assign bootstrap colors to this from CSS variables.
export const $themeColors = {}

// App Breakpoints
// Initially this will be blank. Later on when app is initialized we will assign bootstrap breakpoints to this object from CSS variables.
export const $themeBreakpoints = {}

// APP CONFIG
export const $themeConfig = {

   app: {
      appName: 'Travelpoints', 
      // Will update name in navigation menu (Branding)
      // eslint-disable-next-line global-require
      // appLogoImage:`/storage/logotipos/${store.state.sistema.logoblack}`,
      // applogoImageWhite:`/storage/logotipos/${store.state.sistema.logo}`,
   },

   layout: {
      skin: 'dark', // light, dark, bordered, semi-dark
      routerTransition: 'slide-fade', // zoom-fade, slide-fade, fade-bottom, fade, zoom-out, none
      type: 'horizontal', // vertical, horizontal
      contentWidth: 'full', // full, boxed

      menu: {
         hidden: false,
         isCollapsed: false
      },

      navbar: {
         // ? For horizontal menu, navbar type will work for navMenu type
         type: 'static', // static , sticky , floating, hidden
         backgroundColor: 'primary' // BS color options [primary, success, etc]
      },

      footer: {
         type: 'static' // static, sticky, hidden
      },

      customizer: true,
      enableScrollToTop: true
   }

}
