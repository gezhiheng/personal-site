<script setup>
import Menu from '@/components/Menu'
import Header from './components/Header'
import DocsLinks from './components/DocsLinks'

</script>

<template>
  <div class="background"></div>
  <div class="home-container">
    <Menu class="menu"></Menu>
    <Header class="header"></Header>
    <DocsLinks />
  </div>
</template>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu {
  width: 100%;
  right: 0;
}
</style>./components/DocsLinks