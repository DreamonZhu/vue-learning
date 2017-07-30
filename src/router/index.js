import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import sellers from '@/components/sellers/sellers';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/sellers',
      name: 'sellers',
      component: sellers
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
  ]
});
