import { defineConfig } from 'weapp-vite'

export default defineConfig({
  weapp: {
    srcRoot: 'src',
    autoRoutes: {
      include: ['pages/**/index', 'subs/**/index'],
      watch: true,
    },
    subPackages: {
      subs: {},
    },
    autoImportComponents: {
      globs: [],
    },
  },
})
