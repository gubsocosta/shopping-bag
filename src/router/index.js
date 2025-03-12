import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Basket from '../views/Basket.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shopping-basket',
    name: 'basket',
    component: Basket
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
