<template>
  <div class="home">
    <Pokedex :id="id"></Pokedex>
  </div>
</template>

<script>
import Pokedex from "@/components/Pokedex.vue";

export default {
  name: "Home",
  components: {
    Pokedex
  },
};
</script>
