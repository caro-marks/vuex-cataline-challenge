<template>
  <div class="container">
    <div class="quests-header">
      <Backwards class="back-quests" page="Home" />
      <div class="texts">
        <p class="title">{{ $Cat.title }}</p>
        <p class="subtitle">{{ subtitle }}</p>
      </div>
      <img :src="getIcon($Cat.icon)" class="cat-icon" />
    </div>
    <ul class="quests">
      <!-- <li
          class="quest"
          v-for="quest in $Cat.questions"
          :key="quest.id"
          @click="goToQuest(quest)"
        >
          <span>{{ quest.title }}</span>
        </li> -->
      <ButtonRoot
        v-for="quest in $Cat.questions"
        :key="quest.id"
        :title="quest.title"
        className="dynamic-Quests"
        @click="goToQuest(quest)"
      />
    </ul>
  </div>
</template>
<script>
import Backwards from '@/components/Backwards.vue'
import ButtonRoot from '@/components/ButtonRoot.vue'

export default {
  components: {
    Backwards,
    ButtonRoot
  },
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
    },
    back() {
      this.$store.dispatch('fetchPage', 'Home')
    },
    goToQuest(quest) {
      this.$store.dispatch('fetchQuest', quest)
      this.$store.dispatch('fetchPage', 'Answer')
    }
  }
}
</script>

<style scoped>
.container {
  grid-template-rows: 23% 1fr;
  margin: 0.25em;
  padding: 0.25em;
}
.quests-header {
  padding: 0 0.5em;
  margin: 0.1rem;
  display: grid;
  grid-template-columns: 15% 1fr 20%;
  column-gap: 0.5em;
  align-items: center;
  border-bottom: 1px solid #5d6681;
}
.texts {
  margin: 0.5em;
}
.texts .title {
  font-size: 20px;
  font-weight: bold;
}
.texts .subtitle {
  font-size: 13px;
}
.cat-icon {
  width: 1.5em;
}
.quests {
  padding: 0.1rem;
  margin: 0.1rem;
  display: grid;
  grid-auto-rows: minmax(0, 50px);
  row-gap: 1em;
}
</style>
