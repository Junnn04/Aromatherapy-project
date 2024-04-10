import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/front/FrontView.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/front/HomeView.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("../views/front/AboutView.vue"),
      },
      {
        path: "products",
        component: () => import("../views/front/ProductsView.vue"),
      },
      {
        path: "product/:id",
        component: () => import("../views/front/ProductView.vue"),
      },
      {
        path: "cart",
        component: () => import("../views/front/CartView.vue"),
      },
      {
        path: "Checkout",
        component: () => import("../views/front/CheckoutView.vue"),
      },
      {
        path: "Checkout/:orderId",
        component: () => import("../views/front/PayView.vue"),
      },
      {
        path: "checkoutSuccess",
        component: () => import("../views/front/CheckoutSuccessView.vue"),
      },
      {
        path: "Articles",
        component: () => import("../views/front/ArticlesView.vue"),
      },
      {
        path: "login",
        component: () => import("../views/front/LoginView.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("../views/dashboard/AdminDashboard.vue"),
    children: [
      {
        path: "products",
        component: () => import("../views/dashboard/AdminProducts.vue"),
      },
      {
        path: "orders",
        component: () => import("../views/dashboard/AdminOrders.vue"),
      },
      {
        path: "coupons",
        component: () => import("../views/dashboard/AdminCoupons.vue"),
      },
      {
        path: "article",
        component: () => import("../views/dashboard/AdminArticle.vue"),
      },
      {
        path: "picture",
        component: () => import("../views/dashboard/AdminPicture.vue"),
      },
    ],
  },
  {
    path: "/:pathMath(.*)*",
    component: () => import("../views/front/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
  scrollBehavior() {
    // 每次切换路由时都将页面滚动到顶部
    return { x: 0, y: 0 };
  },
});

// 监听路由切换前的事件
router.beforeEach((to, from, next) => {
  // 手动将页面滚动到顶部
  window.scrollTo(0, 0);
  next();
});

export default router;
