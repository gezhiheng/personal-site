<script setup>
import Menu from '@/components/Menu'
import Header from './components/Header'
import About from './components/about'
import Blog from './components/blog'
import Contact from './components/contact'

</script>

<template>
  <div class="background"></div>
  <div class="home-container">
    <Menu class="menu"></Menu>
    <Header class="header"></Header>
    <About></About>
    <Blog></Blog>
    <Contact></Contact>
  </div>
</template>

<style scoped>
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

.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu {
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1;
}
.header {
  margin-top: 15vh;
  min-height: 85vh;
  z-index: 0;
}
</style>@/components/contact@/components/about@/views/home/components/about@/views/home/components/blog@/views/home/components/contact