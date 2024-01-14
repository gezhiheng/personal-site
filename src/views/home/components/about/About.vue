<script setup>
import RenderMarkdown from '@/components/RenderMarkdown'
import atricle from '../../../../assets/docs/Elementplus的el-input获取焦点.md?raw'

const text = '# test\nThis is a test\n```vue\n  code \n```'
</script>

<template>
  <div class="about">
    <h1>关于我</h1>
    <RenderMarkdown class="content" :markdownText="atricle" />
  </div>
</template>

<style scoped>
.about {
  background-color: #ffffff;
  height: 100vh;
  width: 100%;
}

.content {
  display: block;
  margin: 0 auto;
  width: 60%;
}

@media screen and (max-width: 992px) {
  .content {
    width: 90%;
  }
}
</style>