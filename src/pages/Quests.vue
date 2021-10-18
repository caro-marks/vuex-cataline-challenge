<template>
  <div class="container-quests">
    <div class="quests-header">
      <Backwards class="back-quests" page="Home" />
      <div class="texts">
        <p class="title">{{ $Cat.title }}</p>
        <p class="subtitle">{{ subtitle }}</p>
      </div>
      <img :src="getIcon($Cat.icon)" class="cat-icon" />
    </div>
    <div class="quests-box">
      <ul class="quests">
        <li
          class="quest"
          v-for="quest in $Cat.questions"
          :key="quest.id"
          @click="goToQuest(quest)"
        >
          <span>{{ quest.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Backwards from '@/components/Backwards.vue'

export default {
  components: {
    Backwards
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

<style>
.container-quests {
  width: 90%;
  margin: 0.5em;
}
.quests-header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 0.9em;
  align-items: center;
  padding: 2rem;
  margin-bottom: 1em;
  border-bottom: 1px solid #5d6681;
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
  margin-top: 1.5em;
  display: grid;
  grid-template-rows: auto;
  row-gap: 2em;
  margin: 0.5em;
}
.quest {
  padding: 0.5em;
  width: 100%;
  cursor: pointer;
  border-radius: 15px;
  transition: all 0.6s;
}
.quest span {
  font-size: 16px;
}
.quest:hover {
  background-color: #5d6681;
}
</style>
