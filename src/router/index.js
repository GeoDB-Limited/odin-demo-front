import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateRequest from '../views/CreateRequest.vue'
import Request from '../views/Request'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CreateRequest',
    component: CreateRequest
  },
  {
    path: '/request/:requestId',
    name: 'Request',
    component: Request,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
