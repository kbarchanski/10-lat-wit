<template>
  <div class="container" id="app">
    <h1>Przygarnij psa</h1>
    <div class="form-group position-relative">
      <label for="filter">Filtruj</label>
      <input class="form-control" id="filter" autocomplete="off" v-model="value" />
      <div v-if="typeahead.length" class="dropdown-menu" :class="{'show': showDropdown}">
        <a
          v-for="dog of typeahead"
          :key="dog"
          class="dropdown-item"
          href="#"
          @click="selectItem(dog)"
        >
          {{ dog }}
        </a>
      </div>
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
      <b-alert v-else show dismissible variant="warning" @dismissed="reset()">
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
      showDropdown: false,
    }
  },

  computed: {
    typeahead () {
      if (this.value) {
        const regex = new RegExp(this.value, 'i')
        return this.dogs.filter(dog => regex.test(dog))
      }
      return []
    },
  },

  watch : {
    value () {
      this.showDropdown = true
    },
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
    },
    selectItem (dog) {
      this.value = dog
      this.showDropdown = false
      this.search()
    },
  }
}
</script>

<style>
  .dropdown-menu {
    top: 100%;
  }
</style>
