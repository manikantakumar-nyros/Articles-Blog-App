import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateArticle from './views/CreateArticle.vue'
import Details from './views/ArticleDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create_article',
      name: 'create_article',
      component: CreateArticle
    },
    {
      path: '/category/:name',
      name: 'home',
      component: Home
    },
    ,
    {
      path: '/details/:id',
      name: 'details',
      component: Details
    }
  ]
})
