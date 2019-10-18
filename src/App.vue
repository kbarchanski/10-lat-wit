<template>
  <div class="container" id="app">
    <h1>Przygarnij psa</h1>
    <div class="form-group">
      <label for="filter">Filtruj</label>
      <input class="form-control" id="filter" v-model="value" />
    </div>

    <h2>Nasze pieski</h2>
    <div class="dogs">
      <figure v-for="(dog, index) in dogs" :key="index" class="figure">
        <img
          :src="`https://loremflickr.com/240/240/dog?lock=${index + 1}`"
          class="figure-img img-fluid rounded ml-1"
          :alt="dog"
        />
        <figcaption class="figure-caption">
          {{ dog }}
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',

  data () {
    return {
      value: 'wartość początkowa',
      dogs: ['Abadon', 'Abar', 'Abi', 'Abis', 'Abrams', 'Abraxas', 'Abu', 'Babi', 'Baca', 'Bachus', 'Baddy', 'Badyl', 'Dalia', 'Dalima'],
    }
  },
}
</script>

<style>
</style>
