<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <img src="../src/assets/background-image.jpg" class="background-image">
  <div class="content"></div>
  <RouterView />
</template>

<style scoped>
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  z-index: -1;
}

.content {
  background-color: white;
  margin-top: 60vh;
  width: 100%;
  height: 100vh;
}
</style>
