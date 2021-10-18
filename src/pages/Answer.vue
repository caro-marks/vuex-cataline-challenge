<template>
  <div class="container-answer">
    <div class="quest-header">
      <Backwards page="Quests" />
      <p>{{ $Quest.title }}</p>
    </div>
    <div class="content">
      <p>{{ $Quest.content }}</p>
    </div>
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

<style></style>
