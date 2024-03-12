import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/AboutView.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/ProductView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/CartView.vue'),
      },
      {
        path: 'Articles',
        component: () => import('../views/ArticlesView.vue'),
      },
      {
        path: 'login',
        component: () => import('../views/LoginView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/AdminDashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/AdminProducts.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/dashboard/AdminOrders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/AdminCoupons.vue'),
      },
      {
        path: 'article',
        component: () => import('../views/dashboard/AdminArticle.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;