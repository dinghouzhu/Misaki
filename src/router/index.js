import Vue from 'vue'
import VueRouter from "vue-router";
import Router from 'vue-router'
import Welcome from '../components/index';
import NotFound from '../components/notFound';

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
            title:'跳转页'
          }
        },
        {
          name:'Jurisdiction',
          path:'/juri',
          component: resolve=>require(['../components/Jurisdiction'],resolve),
          meta:{
            keepAlive:true,
            title:'权限设置'
          }
        },
        {
          name:'Misaki',
          path:'/Misaki',
          component:resolve=>require(['../components/Misaki'],resolve),
          meta:{
            keepAlive:true,
            title:'Misaki'
          }
        },
        {
          name:'mulu',
          path:'/mulu',
          component:resolve=>require(['../components/HeadButton'],resolve),
          meta:{
            keepAlive:true,
            title:'目录页'
          }
        },



      ]
    },

    {
      name:'NotFound',
      path: "/404",
      component: NotFound
    },
    {
      name:'NotFound',
      path: "*",
      redirect: "/404"
    }


  ]
})
