<script setup>
import { watchEffect, ref } from 'vue'
import MarkdownIt from 'markdown-it'
import markdownItHighlightjs from 'markdown-it-highlightjs'
import markdownItCodeCopy from 'markdown-it-code-copy'

const props = defineProps({
  markdownText: String
})

// 用于存放最终解析出来的dom
const markdownDom = ref('')

// 初始化 markdown-it 实例
const md = new MarkdownIt()
// 配置代码高亮插件
md.use(markdownItHighlightjs)
// 配置代码块复制插件
md.use(markdownItCodeCopy)

// 解析markdown
const handleMarkdown = () => {
    // 判断markdown为空不解析
    if (!props.markdownText) {
        return
    }

    // 解析markdown获取HTML
    const html = md.render(props.markdownText)

    markdownDom.value = html
}

watchEffect(() => {
    handleMarkdown()
})
</script>

<template>
  <span v-html="markdownDom"></span>
</template>