import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Admin from '@/pages/Admin';
import Cart from '@/pages/Cart';
/** Admin Commponents */
// import Index from '@/pages/admin/Index'
// import New from '@/pages/admin/New'
// import Products from '@/pages/admin/Products'
// import Edit from '@/pages/admin/Edit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart
    }
  ]
})
