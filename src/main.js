import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
const FastClick = require('fastclick');
FastClick.attach(document.body);
Vue.config.productionTip = false;



// router.beforeEach(function (to,from,next) {
//   let token=localStorage.getItem("token")||"";
//   if (token){
//     next()
//   }else {
//     if (to.path !=="/login"){
//       localStorage.clear();
//       next({path:'/login'})//如果没有token或者token过期,清除缓存跳转到登录页
//     }else {
//       next()
//     }
//   }
// });
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
