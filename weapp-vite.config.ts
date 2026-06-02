import type { Resolver } from 'weapp-vite/auto-import-components/resolvers'
import { defineConfig } from 'weapp-vite'

const myResolver: Resolver = {
  components: {
    'my-image': '/ui/image',
    'my-cell': '/ui/cell',
    'my-cell-group': '/ui/cell-group',
  },
}

export default defineConfig(() => ({
  weapp: {
    srcRoot: 'src',
    autoRoutes: true,
    autoImportComponents: {
      globs: [

      ],
      resolvers: [
        myResolver,
      ],
    },
    vue: {
      template: {
        scopedSlotsCompiler: 'augmented',
        scopedSlotsRequireProps: false,
        slotSingleRootNoWrapper: true,
        slotMultipleInstance: true,
      },
    },
  },
}))
