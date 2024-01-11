<script setup>
import Menu from '@/components/Menu.vue'
import Header from '@/components/Header.vue'
import MainLayout from '@/components/MainLayout.vue'

</script>

<template>
  <div class="background">
  </div>
  <div class="main-container">
    <Menu class="menu"></Menu>
    <Header class="header"></Header>
    <MainLayout class="main-layout"></MainLayout>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.background {
  background-image: url('../src/assets/background.svg');
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

.menu {
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1;
}
.header {
  margin-top: 20vh; 
}
.main-layout {
  position: absolute;
  top: 40vh;
  left: 0;
  width: 100%;
  height: 200vh;
}
</style>
