<template>
  <div class="container">
    <div class="quest-header">
      <Backwards page="Quests" />
      <p>{{ $Quest.title }}</p>
    </div>
    <div class="content" v-html="$Quest.content"></div>
  </div>
</template>

<script>
import Backwards from '@/components/Backwards.vue'
export default {
  components: {
    Backwards
  },
  computed: {
    $Quest() {
      return this.$store.getters.$getQuest
    }
  }
}
</script>

<style scoped>
.container {
  grid-template-rows: 18% 1fr;
  padding: 0.25em;
  margin: 0.25em;
}
.quest-header {
  display: grid;
  grid-template-columns: 15% 1fr;
  column-gap: 0.5em;
  align-self: center;
  align-items: center;
  padding: 0.2em;
  margin: 0.2em;
}
.quests-header p {
  font-size: 16px;
}
.content {
  padding: 1em;
  text-align: justify;
}
a {
  color: aquamarine;
  text-decoration: none;
}
</style>
