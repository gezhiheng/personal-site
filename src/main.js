import { createApp } from 'vue'
import App from './App.vue'
import Vue3Lottie from 'vue3-lottie'
import router from './router'

import './style.css'

const app = createApp(App)
app.use(Vue3Lottie)
app.use(router)
app.mount('#app')
console.log('main.js')