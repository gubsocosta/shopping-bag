import {createRouter, createWebHashHistory} from 'vue-router';
import HomePageView from '../views/HomePageView.vue';
import ShopppingBasketView from '../views/ShopppingBasketView.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePageView
  },
  {
    path: '/basket',
    name: 'ShoppingBasket',
    component: ShopppingBasketView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
