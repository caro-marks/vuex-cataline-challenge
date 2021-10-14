<template>
  <div class="asks-page">
    <header class="header">
      <img src="" alt="asking questions" />
      {{ title }}
    </header>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      title: ''
    }
  }
}
</script>

<style scoped>
.asks-page {
  display: grid;
  grid-auto-flow: row;
  row-gap: 0.5rem;
}
</style>
