<template>
  <div class="container-home">
    <img src="@/assets/images/astronaut.svg" alt="astronaut" />
    <div class="text-header">
      <p>{{ title }}</p>
      <span>{{ subtitle }}</span>
    </div>
    <ul class="cats">
      <li class="cat" v-for="cat in $cats" :key="cat.id" @click="goToCat(cat)">
        <img :src="getIcon(cat.icon)" alt="" />
        <span>{{ cat.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Perguntas Frequentes',
      subtitle: 'Escolha a categoria desejada'
    }
  },
  computed: {
    $cats() {
      return this.$store.getters.$allCats
    }
  },
  methods: {
    getIcon(id) {
      return require(`@/assets/images/${id}`)
    },
    goToCat(cat) {
      this.$store.dispatch('fetchCat', cat)
      this.$store.dispatch('fetchPage', 'Quests')
    }
  }
}
</script>

<style>
.container-home {
  border-radius: 10px;
  border: 1px dashed white;
  margin: 0.1em;
  padding: 0.1em;
  display: grid;
}
.text-header {
  border-radius: 10px;
  border: 1px dashed tomato;
  margin: 0.1em;
  padding: 0.1em;
  display: grid;
  grid-template-rows: 3fr 2fr;
}
.text-header p {
  font-size: 20px;
  font-weight: Bold;
  padding: 0.1rem 0;
}
.text-header span {
  margin: 0.1rem;
  font-size: 13px;
  font-weight: regular;
}
.cats {
  border-radius: 10px;
  border: 1px dashed tomato;
  margin: 0.1em;
  padding: 0.1em;
  display: grid;
  grid-template-rows: auto;
  row-gap: 0.1rem;
}
.cat {
  display: grid;
  grid-template-columns: 15% 1fr;
  border-radius: 10px;
  border: 1px dashed teal;
  padding: 0.2em;
  margin: 0.2em;
  cursor: pointer;
  transition: all 0.6s;
  border-radius: 10px;
  border-radius: 100px;
  align-items: center;
}
.cat img {
  width: 50%;
}
.cat span {
  font-size: 16px;
}
.cat:hover {
  background-color: #5d6681;
}
</style>
