<script setup>

</script>

<template>
  <div class="menu-container">
    <span class="name">GEZHIHENG</span>
    <button class="nav-btn">show more</button>
    <ul class="list">
      <li>首页</li>
      <li>关于</li>
      <li>文章</li>
      <li>找我</li>
    </ul>
  </div>
</template>

<style scoped>
* {
  color: #4a4a4a;
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
      display: block;
      margin: 8px 16px 8px 0;
    }

    .list {
      display: none;
    }
  }
}
</style>
