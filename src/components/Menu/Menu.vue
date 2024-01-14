<script setup>

</script>

<template>
  <div class="menu-container">
    <span class="name">GEZHIHENG</span>
    <button class="nav-btn"></button>
    <ul class="list">
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
}

.menu-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  
  .name {
    margin: 0 0 0 36px;
  }

  .nav-btn {
    display: none;
  }
  
  .list {
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

@media screen and (max-width: 992px) {
  .menu-container {

    .name {
      margin: 0 0 0 16px;
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

    .list {
      display: none;
    }
  }
}
</style>