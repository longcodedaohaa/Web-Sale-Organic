import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Product from "../components/Product.vue";
import Introduce from "../components/Introduct.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Product",
      component: Product,
    },
    {
      path: "/Introduce",
      component: Introduce,
    },
  ],
});

export default router;
