<template>
  <div :class="['custom-button', this.className]">
    <img v-if="this.iconPath" :src="getIcon()" />
    <span>{{ this.title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    iconPath: String,
    className: String
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
  cursor: pointer;
  transition: all 0.6s;
  border-radius: 10px;
  align-items: center;
}
.dynamic-Cats {
  grid-template-columns: 15% 1fr;
}
.dynamic-Quests {
  padding: 0 1.5em;
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
