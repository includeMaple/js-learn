import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderList from './pages/orderList'
import OrderConfirm from './pages/orderConfirm'
import OrderPay from './pages/orderPay'
import Alipay from './pages/alipay'

Vue.use(Router)

export default new Router({
	routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/index',
      component: Home,
      children: [
        {
          path: '/index',
          name: 'nav-home',
          component: Index
        },
        {
          path: '/product/:id',
          name: 'product',
          component: Product
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: Detail
        }
      ]
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        {
          path: 'list', // 注意这个子路由前面没有/
          name: 'orderList',
          component: OrderList
        },
        {
          path: 'confirm',
          name: 'orderConfirm',
          component: OrderConfirm
        },
        {
          path: 'pay',
          name: 'orderPay',
          component: OrderPay
        },
        {
          path: 'alipay',
          name: 'alipay',
          component: Alipay
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
