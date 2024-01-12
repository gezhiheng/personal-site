<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import down from '@/assets/down.json'

</script>

<template>
  <Vue3Lottie :animationData="down" :height="200" :width="200" class="lottie"/>
</template>

<style scoped>
.lottie {
  width: 10em;
}

@media screen and (max-width: 992px) {
  .lottie {
    width: 5em;
  }
}
</style>