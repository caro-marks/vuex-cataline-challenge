<template>
  <div class="asks-page">
    <header class="header">
      <img src="@/assets/images/astronaut.svg" alt="asking questions" />
      Perguntas Frequentes
    </header>
    <button v-for="cat in $allCats" :key="cat.id">
      {{ cat.title }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      title: ''
    }
  },
  computed: {
    $allCats() {
      return this.$store.getters.$allCats
    }
  },
  created() {
    this.$store.dispatch('fetchCats')
    console.log(this.$store.state.cats)
  }
}
</script>

<style scoped>
.asks-page {
  display: grid;
  grid-auto-flow: row;
  row-gap: 0.5rem;
}
.header {
  display: grid;
}
</style>
