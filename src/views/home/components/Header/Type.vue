<template>
  <span>偶尔</span>
  <span ref="text"></span>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
import TypeIt from 'typeit'

const text = ref(null)
onMounted(() => {
  new (TypeIt)(text.value, {
      strings: ['打打游戏。', '听听歌。', '看看NBA。', '摸摸鱼。'],
      cursorChar: "<span class='cursorChar'>_<span>",
      cursorSpeed: 500,
      speed: 100,
      deleteSpeed: 60,
      cursorSpeed: 1000,
      nextStringDelay: 750,
      lifeLike: true,
      breakLines: false,
      loop: true,
  }).go()
})
</script>
  
<style scoped>
span {
  color: var(--primary-text);
  font-size: 3.5em;
}

@media screen and (max-width: 992px) {
  span {
    font-size: 1.3em;
  }
}
</style>
