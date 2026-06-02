import { defineConfig } from 'weapp-vite'

export default defineConfig(() => ({
  weapp: {
    srcRoot: 'src',
    autoRoutes: true,
    autoImportComponents: {
      globs: [],
    },
    vue: {
      template: {
        scopedSlotsCompiler: 'augmented' as const,
        scopedSlotsRequireProps: false,
      },
    },
  },
}))
