import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    // pages

    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/pages/profile.vue"),
    },
    {
      path: "/coaches",
      name: "coaches",
      component: () => import("../views/pages/coaches.vue"),
    },
    {
      path: "/CoachDetails/:id",
      name: "CoachDetails",
      component: () => import("../views/pages/CoachDetails.vue"),
    },
    {
      path: "/BMI",
      name: "BMI",
      component: () => import("../views/pages/bmi.vue"),
    },
    {
      path: "/dume",
      name: "dume",
      component: () => import("../views/pages/dume.vue"),
    },
  ],
});

export default router;
