<template>
  <div class="container" id="app">
    <h1>Przygarnij psa</h1>
    <div class="form-group">
      <label for="filter">Filtruj</label>
      <input class="form-control" id="filter" v-model="value" />
    </div>
    <button class="btn btn-primary" @click="search">Szukaj</button>

    <h2>Nasze pieski</h2>
    <div class="dogs">
      <template v-if="filteredDogs.length">
        <figure v-for="(dog, index) in filteredDogs" :key="index" class="figure">
          <img
            :src="`https://loremflickr.com/240/240/dog?lock=${index + 1}`"
            class="figure-img img-fluid rounded ml-1"
            :alt="dog"
          />
          <figcaption class="figure-caption">
            {{ dog }}
          </figcaption>
        </figure>
      </template>
      <b-alert show dismissible variant="warning" @dismissed="reset()">
        Przykro nam, nie znaleźliśmy psa, którego szukasz
      </b-alert>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',

  data () {
    return {
      value: '',
      dogs: ['Abadon', 'Abar', 'Abi', 'Abis', 'Abrams', 'Abraxas', 'Abu', 'Babi', 'Baca', 'Bachus', 'Baddy', 'Badyl', 'Dalia', 'Dalima'],
      filteredDogs: [],
    }
  },

  created () {
    // prawie to samo co
    // this.filteredDogs = [...this.dogs]
    // z ta roznica, ze this.$set tworzy reaktywna wartosc filtered dogs
    this.$set(this, 'filteredDogs', [...this.dogs])
    
    // alternatywna metoda, ale ryzykowna, bo moze spowodowac duplikacje danych w tablicy
    // this.filteredDogs.push(...this.dogs)
  },

  methods: {
    search () {
      const regex = new RegExp(this.value, 'i')
      this.$set(this, 'filteredDogs', this.dogs.filter(dog => regex.test(dog)))
    },
    reset () {
      this.$set(this, 'filteredDogs', [...this.dogs])
      // mozna tez wyczyscic input
      // this.value = ''
    }
  }
}
</script>

<style>
</style>
