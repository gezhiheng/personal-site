<script setup>
import Type from './Type.vue'
import DownAnimate from './DownAnimate.vue'

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
      <Type class="type-animate"></Type>
    </div>
    <div class="avatar">
      <img class="curry" src="@/assets/images/avatar.jpg" >
    </div>
  </div>
  <DownAnimate class="down-animate"></DownAnimate>
</template>

<style scoped>
span {
  color: var(--primary-text);
}

.header-container {
  margin-top: 18vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .intro span {
    font-size: 3.5em;
    display: block;
  }

  .avatar {
    margin: auto;

    .curry {
      width: 300px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 0 0 120px;
      border: 4px solid var(--primary-blue);
    }

    &::before {
      content: "";
      position: absolute;
      margin: 0 0 0 120px;
      width: 300px;
      height: 300px;
      border: 4px solid var(--primary-blue);
      border-radius: 50%;
      background: transparent;
      -webkit-animation: pulse 2s cubic-bezier(.57, .06, .27, .84) infinite;
      animation: pulse 2s cubic-bezier(.57, .06, .27, .84) infinite;
      z-index: 0;
    }
  }
}

.type-animate {
  margin-top: 0;
}

.down-animate {
  margin-top: 50px;
}

@media screen and (max-width: 992px) {
  * {
    font-size: 1.2em;
  }
  .header-container {
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: start;

    .intro span {
      font-size: 1.3em;
      display: block;
    }

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

  .type-animate {
    margin-top: 0;
  }

  .down-animate {
    margin-top: -60px;
  }
}

.vue-text {
  width: 3.5em;
  background: -webkit-linear-gradient(315deg,#42d392 35%,#647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
</style>