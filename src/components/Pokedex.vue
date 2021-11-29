<template>
  <div class="container">
    <img class="pokedex" src="https://wallpaperaccess.com/full/5818306.jpg" alt="pokedex">
    <div class="screen">
      <div class="pokeImage">
        <img class="pokemon" :src="pokemonImg" :alt="pokemonName" />
      </div>
      <div class="pokeInfo">
        <h2>{{ pokemonId }}</h2>
        <h2> {{ pokemonName }} </h2>
      </div>
    </div>
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
}
.pokemon {
  width: 100px;
  height: 100px;
}
.pokedex {
  width: 227px;
  height: 437px;
}
.screen {
  /* background-color: aquamarine; */
  width: 227px;
  height: 237px;
  display: flex;
  flex-direction: column;
  position: relative;
  transform: translate(186px, -340px);

}
.pokeInfo {
  display: flex;
  justify-content: space-around;
  font-size: 10px;
}

</style>
