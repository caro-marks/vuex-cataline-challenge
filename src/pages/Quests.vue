<template>
  <div class="container">
    <div class="header">
      <div class="texts">
        <p class="title">{{ $Cat.title }}</p>
        <p class="subtitle">{{ subtitle }}</p>
      </div>
      <img :src="getIcon($Cat.icon)" alt="" />
    </div>
  </div>
  <div class="quests-box">
    <ul class="quests">
      <li class="quest" v-for="quest in $Cat.questions" :key="quest.id">
        <p class="quest">{{ quest.title }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      subtitle: 'Selecione uma pergunta'
    }
  },
  computed: {
    $Cat() {
      return this.$store.getters.$getCat
    }
  },
  methods: {
    getIcon(id) {
      return require(`@/assets/images/${id}`)
    }
  }
}
</script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: 80% 1fr;
}
/* p {
  font-style: italic;
} */
</style>
