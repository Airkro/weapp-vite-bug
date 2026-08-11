import { defineConfig } from 'weapp-vite'

export default defineConfig({
  weapp: {
    srcRoot: 'src',
    autoRoutes: {
      enabled: true,
      typedRouter: true,
      include: [
        'pages/**',
        'subs/**',
      ],
    },
    subPackages: {
      subs: {},
    },
    buildScope:{
      include:['pages']
    }
  },
})
