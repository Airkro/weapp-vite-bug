import { defineConfig } from 'weapp-vite'

export default defineConfig({
  weapp: {
    srcRoot: 'src',
    autoRoutes: false,
    autoImportComponents: {
      globs: [],
    },
    vue: {
      template: {
        scopedSlotsCompiler: 'auto',
        scopedSlotsRequireProps: true,
        slotSingleRootNoWrapper: true,
      },
    },
  },
})
