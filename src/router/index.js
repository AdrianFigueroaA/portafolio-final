import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    alias: ["/inicio", "/home", "/portada", "/"],
  },
  {
    path: '/contacto',
    name: 'Contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')
  },
  {
    path: '/experiencias',
    name: 'Experiencias',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "experiencias" */ '../views/Experiencias.vue')
  },
  {
    path: '/herramientas',
    name: 'Herramientas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "herramientas" */ '../views/Herramientas.vue')
  },
  {
    path: '/intereses',
    name: 'Intereses',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "intereses" */ '../views/Intereses.vue')
  },
  {
    path: '/trabajos',
    name: 'Trabajos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "trabajos" */ '../views/Trabajos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
