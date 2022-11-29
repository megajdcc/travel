import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import https from 'node:https'
import fs  from 'node:fs'


const options = {
  key: fs.readFileSync('/home/megajdcc/jdcc/certificados/travelpoints.key'),
  cert: fs.readFileSync('/home/megajdcc/jdcc/certificados/travelpoints.crt')
}

export default defineConfig({
  base:import.meta.env === 'production' ? './' : './',
  optimizeDeps: {
    include: [
      "vue-google-maps-community-fork",
      "fast-deep-equal",
    ],
  },

  server:{
    host:'travelpoints.dev',
    port:5173,
    https:https.createServer(options,(req,res) => {
      res.writeHead(200);
      res.end('hello world\n');

    }).listen(8001),
    open:true,

  },

  plugins: [
    vue(),
  ],

  resolve:{
    alias:{
      '@':path.resolve(__dirname,'/src'),
      '@core': path.resolve(__dirname, '/src/core'),
      '@themeConfig':path.resolve(__dirname,'/src/themeConfig.js'),
      'views':path.resolve(__dirname,'/src/views'),
      'libs':path.resolve(__dirname,'/src/libs'),
      'components':path.resolve(__dirname,'src/views/components'),
      '@validations': path.resolve(__dirname, 'src/core/utils/validations/validations.js'),
      'scss':path.resolve(__dirname,'src/assets/scss'),
      // '@axios':path.resolve(__dirname,'src/libs/axios.js')
      'stores':path.resolve(__dirname,'src/stores'),
      'images':path.resolve(__dirname,'src/assets/images'),
      'fonts':path.resolve(__dirname,'src/assets/fonts')

    }
  },

  assetsInclude: ['**/*.png', '**/*.jpeg', '**/*.jpg', '**/*.svg', '**/*.gif']

})
