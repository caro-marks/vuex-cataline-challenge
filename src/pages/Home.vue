<template>
  <div class="container">
    <div class="header">
      <img src="@/assets/images/astronaut.svg" alt="" class="img-heading" />
      <div class="text-heading">
        <h1>{{ title }}</h1>
        <span>{{ subtitle }}</span>
      </div>
    </div>
    <div class="cats-box">
      <ul class="cats">
        <li class="cat" v-for="cat in $cats" :key="cat.id">
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
    }
  }
}
</script>

<style>
.header {
  margin-bottom: 2em;
  padding-bottom: 2em;
}
.img-heading {
  width: 400px;
}
h1 {
  margin-bottom: 0.5rem;
}
.guests img {
  width: 50px;
}
</style>
