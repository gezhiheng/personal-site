<script setup>
import { ref } from 'vue'

const showVerticalMenu = ref(false)
const menuBtnOnclick = () => {
  showVerticalMenu.value = !showVerticalMenu.value
}
</script>

<template>
  <div class="horizontal-nav">
    <span class="name">GEZHIHENG</span>
    <ul class="horizontal-list">
      <li>首页</li>
      <li>关于</li>
      <li>博客</li>
      <li>找我</li>
    </ul>
  </div>
  <div class="vertical-nav">
    <div class="nav">
      <span class="name">GEZHIHENG</span>
      <button class="nav-btn" :class="{ 'nav-close-btn': showVerticalMenu }" @click="menuBtnOnclick"></button>
    </div>
    <ul v-if="showVerticalMenu" class="vertical-list">
      <li>首页</li>
      <li>关于</li>
      <li>博客</li>
      <li>找我</li>
    </ul>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  color: var(--primary-text);
  font-size: 1.1em;
  list-style: none;
}

.horizontal-nav {
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-bg-color);
  box-shadow: var(--shadow);
  
  .name {
    margin: 0 0 0 36px;
  }

  .nav-btn {
    display: none;
  }
  
  .horizontal-list {
    display: flex;
    flex-direction: row;

    li {
      list-style: none;
      cursor: pointer;
      margin: 8px 16px;
    }

    li:last-child {
      margin-right: 32px;
    }

    li:hover {
      color: var(--primary-blue);
    }
  }
}

.vertical-nav {
  display: none;
}

@media screen and (max-width: 992px) {
  .horizontal-nav {
    display: none;
  }

  .vertical-nav {
    width: 100%;
    display: block;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: var(--primary-bg-color);
    box-shadow: var(--shadow);
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .name {
      margin: 0 0 0 16px;
    }

    .vertical-list {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      padding: 6px;
      li {
        padding: 3px;
        text-align: center;
      }
      li:hover {
        color: var(--primary-blue);
      }
    }

    .nav-btn {
      background-image: url('@/assets/menu-btn.svg');
      background-size: cover; /* 确保SVG图标覆盖整个按钮 */
      background-repeat: no-repeat; /* 防止SVG图标重复显示 */
      background-color: transparent;
      border: none; /* 可以去除按钮边框 */
      cursor: pointer; /* 添加指针样式 */
      width: 24px;
      height: 24px;
      display: block;
      margin: 8px 16px 8px 0;
    }

    .nav-close-btn {
      background-image: url('@/assets/close.svg');
    }
  }
}
</style>