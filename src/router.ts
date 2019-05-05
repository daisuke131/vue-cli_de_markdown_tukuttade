import Vue from 'vue'
import Router from 'vue-router'
import Markdown from './views/Markdown.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'markdown',
      component: Markdown
    }
  ]
})
