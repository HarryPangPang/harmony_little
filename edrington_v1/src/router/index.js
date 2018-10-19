import Vue from 'vue'
import Router from 'vue-router'
import LoginUser from '@/components/LoginUser'
import RegisterUser from '@/components/RegisterUser'
import SubmitEvent from '@/components/SubmitEvent'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginUser',
      component: LoginUser
    },
    {
      path: '/RegisterUser',
      name: 'RegisterUser',
      component: RegisterUser
    },
    {
      path: '/SubmitEvent',
      name: 'SubmitEvent',
      component: SubmitEvent
    }
  ]
})
