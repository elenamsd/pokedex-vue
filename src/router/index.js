import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Pokedex",
    component: () => import("../views/HomeView.vue")
  },
  {
    path: "/:id",
    name: "Pokemon",
    component: () => import("../views/PokedexView.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
