<script setup>
import Type from '@/components/Type.vue'

</script>

<template>
  <div class="header-container">
    <div class="intro">
      <span>我是葛智恒，</span>
      <span>或者叫我Henry，主用</span>
      <span class="vue-text">
        Vue.js。
      </span>
      <span>喜欢篮球 ⛹️，</span>
      <Type></Type>
    </div>
    <div class="avatar">
      <img src="@/assets/images/avatar.jpg" class="curry">
    </div>
  </div>
</template>

<style scoped>
* {
  color: #4a4a4a;
  font-size: 1.8em;
}

.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .intro span {
    font-size: 1em;
    display: block;
  }

  .avatar {
    .curry {
      width: 365px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 0 0 60px;
      border: 4px solid var(--primary-blue);
    }

    &::before {
      content: "";
      position: absolute;
      margin: 0 0 0 60px;
      width: 365px;
      height: 365px;
      border: 4px solid var(--primary-blue);
      border-radius: 50%;
      background: transparent;
      -webkit-animation: pulse 2s cubic-bezier(.57, .06, .27, .84) infinite;
      animation: pulse 2s cubic-bezier(.57, .06, .27, .84) infinite;
      z-index: 0;
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    border-color: var(--primary-blue);
  }

  100% {
    transform: scale(1.2);
    border-color: transparent;
  }
}

@media screen and (max-width: 992px) {
  * {
    font-size: 1.3em;
  }

  .header-container {
    display: flex;
    flex-direction: column;
    justify-content: start;

    .avatar {
      .curry {
        width: 200px;
        margin: 30px 0 0 0;
        border-radius: 50%;
        border: 4px solid var(--primary-blue);
        overflow: hidden;
      }

      &::before {
        content: "";
        position: absolute;
        margin: 30px 0 0 0;
        width: 200px;
        height: 200px;
        border: 4px solid var(--primary-blue);
        border-radius: 50%;
        background: transparent;
        animation: pulse 2s cubic-bezier(.57, .06, .27, .84) infinite;
        z-index: 0;
      }
    }
  }

  span {
    display: block;
  }
}

.vue-text {
  width: 3.5em;
  background: -webkit-linear-gradient(315deg,#42d392 35%,#647eff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
