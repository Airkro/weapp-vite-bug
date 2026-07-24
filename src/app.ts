import { pages } from 'weapp-vite/auto-routes'
import { createApp } from 'wevu'
import { createRouter } from 'wevu/router'

createApp({
  setup() {
    const router = createRouter({
      routes: pages.map(page => ({
        path: page,
        name: page.split('/')[1],
      })),
    })

    router.beforeEach((to, from) => {
      console.log('beforeEach', to, from)
    })

    router.afterEach((to, from) => {
      console.log('afterEach', to, from)
    })

    return {}
  },
})

wx.onAppRoute((io) => {
  console.log('onAppRoute', io)
})
