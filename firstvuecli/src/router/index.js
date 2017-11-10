import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Multiple from '@/components/Multiple'
import New from '@/components/New'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/multiple',
      name: 'Multiple',
      components:{       //单页面，多路由
        default:Multiple,
        left:Hi1,
        right:Hi2
      }
    },
    {
      path: '/news/:newId/:newTitle',//url传参
      name: 'New',
      component:New
    },
    {
      path: '/hi',
      name: 'Hi',
      component: Hi,
      children:[           //子路由
        {path:'hi1',component:Hi1},
        {path:'hi2',component:Hi2},
      ]
    },
    {
      path: '/redirect',
      name: 'Redirect',
      redirect:'/hi'
    },
    {
      path:'/good/:newId/:newTitle',
      name:'Good',
      redirect:'/news/:newId/:newTitle'//重定向
    },
    {
      path:'/count',
      name:'Count',
      component:Count
    }
  ]
})
