import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Gamer2 from '../views/Gamer2.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gamer2',
    name: 'Gamer2',
    component: Gamer2
  },
 
]

const router = new VueRouter({
  mode: 'history',
  routes,
  
})

export default router
