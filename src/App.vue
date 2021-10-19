<template>
  <div id="app">
    <transition mode="out-in">
      <component :is="$page" />
    </transition>
  </div>
</template>

<script>
import Home from '@/pages/Home.vue'
import Answer from '@/pages/Answer.vue'
import Quests from '@/pages/Quests.vue'

export default {
  components: { Home, Answer, Quests },
  computed: {
    $page() {
      return this.$store.getters.$getPage
    }
  },
  created() {
    return this.$store.dispatch('fetchCats')
  }
}
</script>

<style scoped>
#app {
  background: #3f4452;
  /* border: 1px dashed thistle; */
  border-radius: 10px;
  padding: 0.5em;
  margin: 0.5em;
  width: 400px;
  height: auto;
  box-shadow: 8px 16px 32px 16px rgba(123, 234, 456, 0.2);
}
.container {
  border-radius: 10px;
  border: 1px dashed white;
  margin: 0.1em;
  padding: 0.1em;
  display: grid;
  height: 500px;
}
</style>
