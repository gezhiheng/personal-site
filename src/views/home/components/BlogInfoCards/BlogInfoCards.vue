<script setup>
import { reactive,onMounted } from 'vue'
import scrollReveal from 'scrollreveal'
import { masonryItems } from './constants'

const data = reactive({scrollReveal: scrollReveal()})
const retScroll = () => {
  // reveal()的类名可以为id (#reveal-top) 也可以为class(.reveal-top) 名称随意 并且也支持并集class写法 注意必须设置类否则无法使用
  data.scrollReveal.reveal('#reveal-top', {
    // 动画的时长
    duration: 600,
    // 延迟时间
    delay: 500,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    origin: 'top',
    // 回滚的时候是否再次触发动画
    reset: false,
    // 延时执行方式（always（一直延时执行），once（只延时执行一次），onload（只在加载时延时执行））
    // useDelay: 'once',
    cleanup: true,
    // 在移动端是否使用动画
    mobile: true,
    desktop: true,  
    // 滚动的距离，单位可以用%，rem等
    distance: '10px',
    // 其他可用的动画效果
    opacity: 0.001,
    // 执行速度 线性函数啥的
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    // 执行方式（缩放）
    interval: 200,
  })
}
onMounted(() => {
  retScroll()
})
</script>

<template>
  <div class="container">
    <div class="masonry-container">
      <div
        id="reveal-top"
        v-for="(item, index) in masonryItems"
      >
      <v-card
        class="mx-auto"
        max-width="344"
      >
        <v-img
          height="200px"
          :src="item.imageSrc"
          cover
        ></v-img>
        <v-card-title>
          Top western road trips
        </v-card-title>
        <v-card-subtitle style="margin-bottom: 10px;">
          1,000 miles of wonder
        </v-card-subtitle>
      </v-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-image: url('./background.svg');
  background-repeat: repeat;
  min-height: 100vh;
  width: 100%;
}

.masonry-container {
  margin: 30px auto;
  width: 60%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* 列宽自适应，最小300px，平均分配宽度 */
  gap: 20px; /* 项目之间的间隔 */
}

@media screen and (max-width: 992px) {
  .masonry-container {
    width: 100%;
  }
}
</style>
