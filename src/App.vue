<script setup>
import Menu from '@/components/Menu.vue'
import Header from '@/components/Header.vue'
import MainLayout from '@/components/MainLayout.vue'

</script>

<template>
  <img src="../src/assets/background-image.jpg" class="background-image">
  <Menu></Menu>
  <Header></Header>
  <MainLayout></MainLayout>
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
</style>
