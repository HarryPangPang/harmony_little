import Vue from 'vue'
import Router from 'vue-router'
import LoginUser from '@/components/LoginUser'
import RegisterUser from '@/components/RegisterUser'
import SubmitEvent from '@/components/SubmitEvent'
import MainHome from '@/components/MainHome'
import EventHistory from '@/components/EventHistory'
import EventMember from '@/components/EventMember'
import EventHistoryDetail from '@/components/EventHistoryDetail'


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
    },
    {
      path: '/MainHome',
      name: 'MainHome',
      component: MainHome   
    },{
      path: '/EventHistory',
      name: 'EventHistory',
      component: EventHistory  
    },
    {
      path: '/EventMember',
      name: 'EventMember',
      component: EventMember  
    },
    {
      path: '/EventHistoryDetail',
      name: 'EventHistoryDetail',
      component: EventHistoryDetail  
    }
  ]
})
