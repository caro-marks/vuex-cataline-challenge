<template>
  <div class="container-button">
    <img src="@/assets/images/arrow-left.svg" alt="" @click="back" />
  </div>
</template>

<script>
export default {
  props: {
    page: String
  },
  methods: {
    back() {
      this.$store.dispatch('fetchPage', this.page)
    }
  }
}
</script>

<style>
.container-button img {
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  transition: 0.2s ease-in-out;
  padding: 5px;
  width: 39px;
  margin-top: 10px;
}
.container-button img:hover {
  background-color: black;
}
</style>
