<template>
  <div class="container">
    <MdPreview class="md-preview" :editorId="id" :modelValue="text" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import underStandPromise from '@/docs/learn/javascript/理解期约.md?raw'

const id = 'preview-only';
const text = ref(underStandPromise);
const scrollElement = document.documentElement;
</script>

<style scoped>
.container {
  width: 99vw;
  min-height: 100vh;
  display: flex;
}

.md-preview {
  max-width: 50%;
  margin: 0 auto;
}

@media screen and (max-width: 992px) {
  .md-preview {
    max-width: 100%;
  }
}
</style>