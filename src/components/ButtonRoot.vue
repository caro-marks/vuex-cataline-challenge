<template>
  <div class="custom-button">
    <img :src="getIcon()" />
    <span>{{ this.title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    iconPath: String
  },
  methods: {
    getIcon() {
      return require(`@/assets/images/${this.iconPath}`)
    }
  }
}
</script>

<style>
.custom-button {
  display: grid;
  grid-template-columns: 15% 1fr;
  /* border: 1px dashed teal; */
  margin: 0.2em;
  padding: 0.5em 0.2em;
  cursor: pointer;
  transition: all 0.6s;
  border-radius: 10px;
  align-items: center;
}
.custom-button img {
  width: 50%;
}
.custom-button span {
  font-size: 16px;
}
.custom-button:hover {
  background-color: #5d6681;
}
</style>
