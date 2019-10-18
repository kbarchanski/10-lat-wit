<template>
  <div class="form-group position-relative">
    <label for="filter">Filtruj</label>
    <input
      class="form-control"
      id="filter"
      autocomplete="off"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
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
</template>

<script>
export default {
  name: 'InputWithDropdown',

  props: {
    value: {
      type: String,
      required: true,
    },
    dogs: {
      type: Array,
      required: true,
    },
  },

  data () {
    return {
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

  methods: {
    selectItem(dog) {
      this.showDropdown = false
      this.$emit('selectItem', dog)
    }
  }
}
</script>

<style>

</style>