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
  padding: 1em;
  border-radius: 30px;
}
</style>
