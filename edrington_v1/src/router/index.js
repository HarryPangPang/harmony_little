import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RegisterUser from '@/components/RegisterUser'
import SubmitEvent from '@/components/SubmitEvent'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
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
