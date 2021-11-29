<template>
  <div class="container">
    <Pokedex></Pokedex>
  </div>
</template>

<script>
import Pokedex from "@/components/Pokedex.vue";

export default {
  name: "PokedexView",
  components: {
    Pokedex
  },
};
</script>

<style scoped>
.container {
  background-image: url("https://get.wallhere.com/photo/pixel-art-grass-sky-Pok-mon-horizon-cloud-grassland-flock-meadow-plain-prairie-computer-wallpaper-ecosystem-89641.png");
  background-position: center;
  background-size: cover;
  height: 100vh;
  text-align: center;
}
</style>
