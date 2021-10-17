<template>
  <div class="container">
    <img src="@/assets/images/arrow-back.svg" alt="" />
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      const prev = this.$store.getters.$getPrev
      this.$store.dispatch('fetchPrev', this.$store.getters.$getPage)
      this.$store.dispatch('fetchPage', prev)
    }
  }
}
</script>

<style>
img {
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  transition: 0.2s ease-in-out;
  padding: 5px;
  width: 39px;
  margin-top: 10px;
}
img:hover {
  background-color: black;
}
</style>
