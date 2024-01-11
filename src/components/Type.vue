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
* {
  color: #4a4a4a;
  font-size: 1.8em;
}

@media screen and (max-width: 992px) {
  * {
    font-size: 1.5em;
  }
}
</style>
