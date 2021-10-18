<template>
  <div class="container-home">
    <div class="home-header">
      <img src="@/assets/images/astronaut.svg" alt="" class="img-heading" />
      <div class="text-heading">
        <p>{{ title }}</p>
        <span>{{ subtitle }}</span>
      </div>
    </div>
    <div class="cats-box">
      <ul class="cats">
        <li
          class="cat"
          v-for="cat in $cats"
          :key="cat.id"
          @click="goToCat(cat)"
        >
          <img :src="getIcon(cat.icon)" alt="" />
          <span>{{ cat.title }}</span>
        </li>
      </ul>
    </div>
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
  width: 90%;
  padding: 0.5em;
}
.home-header {
  padding: 1rem 0.25rem;
}
.text-heading {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.text-heading p {
  font-size: 20px;
  font-weight: Bold;
  margin: 0.5rem 0;
}
.text-heading span {
  margin-top: 0.5em;
  font-size: 13px;
  font-weight: regular;
}
.cats {
  margin-top: 2em;
}
.cat {
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: center;
  padding: 0.5em;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.6s;
  border-radius: 15px;
}
.cat img {
  width: 10%;
  margin: 1.5rem;
}
.cat:hover {
  background-color: #5d6681;
}
</style>
