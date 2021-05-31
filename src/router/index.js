import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/login'
import Home from '../pages/home'
import NotFound '../pages/errorPage/404'
import Forbidden from '..pages/errorPage/403'
import Layout from '../pages/layout'
Vue.use(VueRouter)
const routes=[{
  path:'/',
  name:'home',
  component:Home
}]
const router=new VueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes
})
export default router