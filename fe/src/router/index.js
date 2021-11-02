import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
       path: '/',
        component: () => import('../page/Home')
    },
  { 
      path: '/sample-page', 
      component: () => import('../page/Sample')
     }
]

const router = new VueRouter({
  routes 
})

export default router;