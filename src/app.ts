import { pages } from 'weapp-vite/auto-routes'
import { createApp } from 'wevu'
import { createRouter } from 'wevu/router'

createApp({
  setup() {
    createRouter({
      routes: pages.map(page => ({
        path: page,
        name: page.split('/')[1],
      })),
    })

    return {}
  },
})
