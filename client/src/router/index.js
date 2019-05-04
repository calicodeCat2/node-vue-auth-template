import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/globals/Header'
import Home from '@/components/Home'
import Dashboard from '@/components/dashboard/Dashboard'
import Register from '@/components/authVues/Register'
import Login from '@/components/authVues/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
