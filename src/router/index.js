import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CarList from "../views/CarList.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import Detial from "../views/Detial.vue";
import Cart from "../views/Cart.vue";
import UserProfile from "../dashboard/user-profile/UserProfile.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/car-list",
      name: "carlist",
      component: CarList,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/car-list/:id",
      name: "detial",
      component: Detial,
    },
    {
      path: "/:notfound",
      name: "notfound",
      component: NotFound,
    },
    {
      path: "/user-profile",
      name: "userprofile",
      component: UserProfile,
    },
    {
      path: "/cart/:notfound",
      name: "notfound",
      component: NotFound,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
  ],
});

export default router;
