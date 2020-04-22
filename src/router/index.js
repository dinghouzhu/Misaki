import Vue from 'vue'
import VueRouter from "vue-router";
import Router from 'vue-router'
import Welcome from '../components/index';
import Mulu from '../components/HeadButton';

Vue.use(Router);
// 重写路由的push方法
//  * 解决，相同路由跳转时，报错
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
};
export default new Router({
  //mode:'history',
  routes: [
    {
      name:'logo',
      path:'/',
      component: resolve=>require(['../components/logo'],resolve),
      meta:{
        keepAlive:true,
        title:'跳转页'
      }
    },

    {
      path: '/Home',
      name: 'Home',
      component: Welcome,
      children:[
        {
          name:'login',
          path:'/login',
          component: resolve=>require(['../page/login'],resolve),
          meta:{
            keepAlive:true,
            title:'登录页',
            index: 0,
          }
        },
        {
          name:'pay',
          path:'/wx',
          component: resolve=>require(['../components/wx'],resolve),
          meta:{
            keepAlive:false,
            title:'打赏',
          }
        },
        {
          name:'Jurisdiction',
          path:'/juri',
          component: resolve=>require(['../components/Jurisdiction'],resolve),
          meta:{
            keepAlive:true,
            title:'权限设置',

          }
        },
        {
          name:'Misaki',
          path:'/Misaki',
          component:resolve=>require(['../components/Misaki'],resolve),
          meta:{
            keepAlive:true,
            title:'Misaki',
            index: 1,
          }
        },
        {
          name:'Mine',
          path:'/mine',
          component:resolve=>require(['../page/Mine'],resolve),
          meta:{
            keepAlive:true,
            title:'个人主页',

          }
        },
        {
          name:'mulu',
          path:'/mulu',
          component:Mulu,
          meta:{
            keepAlive:true,
            title:'目录页页',
            index: 3,
          }
        },
        {
          name:'neirong',
          path:'/neirong',
          component:resolve=>require(['../page/Neirong'],resolve),
          meta:{
            keepAlive:true,
            title:'内容页',
            index: 4,
          }
        },
      ]
    },

    {
      name:'NotFound',
      path: "/404",
      component:resolve=>require(['../components/notFound'],resolve)
    },
    {
      name:'NotFound',
      path: "*",
      redirect: "/404"
    }


  ]
})
