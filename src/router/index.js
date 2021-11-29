import Vue from "vue";
import VueRouter from "vue-router";
import PokedexView from "../views/PokedexView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Pokedex",
    component: PokedexView
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
