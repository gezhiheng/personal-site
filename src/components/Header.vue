<script setup>
import Type from '@/components/Type.vue'

</script>

<template>
  <div class="header-container">
    <div>我是葛智恒，</div>
    <div>或者叫我Henry，主用</div>
    <div class="vue-text">
      Vue.js。
    </div>
    <div>喜欢篮球⛹️，</div>
    <Type></Type>
  </div>
</template>

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

.vue-text {
  width: 3.5em;
  background: -webkit-linear-gradient(315deg,#42d392 35%,#647eff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
