<template>
  <div class="container">
    <h1>🍃 {{ pokemonName }} 🐸</h1>
    <img :src="pokemonImg" :alt="pokemonName" />
    <h2>{{ pokemonId }}</h2>
  </div>
</template>

<script>
const API_URL = "https://pokeapi.co/api/v2/pokemon/";
export default {

  name: "Pokedex",
  data() {
    return {
      pokemonName: "",
      pokemonImg: "",
      pokemonId: Number(this.$route.params.id)
    };
  },

  mounted() {
    this.fetchApi();
  },

  methods: {
    fetchApi() {
      fetch(`${API_URL}${this.pokemonId}`)
        .then(response => response.json())
        .then(data => {
          this.pokemonName = data.name;
          this.pokemonImg = data.sprites.front_default;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 600px;
  height: 800px;
  background-color: red;
}
img {
  width: 200px;
  height: 200px;
}
</style>
