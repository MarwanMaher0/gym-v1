import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Gym",
      component: () => import("../views/index.vue"),
    },
    // auth
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/auth/login.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/auth/register.vue"),
    },
    // ecom
    {
      path: "/shop",
      name: "shop",
      component: () => import("../views/ecom/index.vue"),
    },
    {
      path: "/ecom/cart",
      name: "Cart",
      component: () => import("../views/ecom/cart.vue"),
    },
    {
      path: "/ecom/wishlist",
      name: "Wishlist",
      component: () => import("../views/ecom/Wishlist.vue"),
    },
  ],
});

export default router;
