import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 说是这个插件主要是为了能直接使用this，也就是把axios挂载到Vue实例
import VueAxios from 'vue-axios'

import App from './App.vue'

// 根据前端的跨域方式做跳转
axios.defaults.baseURL = '/api';
// 设置超时时间为8秒
axios.defaults.timeout = 8000;
// 错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data
  if (res.status === 0) {
    // 0表示成功
    return res.data
  } else if (res.status === 10) {
    // 10表示未登录,跳转到登录页面
    window.location.href = '/#/login';
  } else {
    // 其他报错，直接弹出
    alert(res.msg);
  }
})
Vue.use(VueAxios, axios)
// 生产环境提示，默认是false，如果开启，一些vue的底层代码报错等就会出现
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
