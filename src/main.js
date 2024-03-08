import { createApp } from 'vue'
import App from './App.vue'
import Vue3Lottie from 'vue3-lottie'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './style.css'

const vuetify = createVuetify({
  components,
  directives,
})
const app = createApp(App)
app.use(Vue3Lottie)
app.use(router)
app.use(vuetify)
app.mount('#app')

console.log('%c Welcome to Henry`s Site! ','color:#42cdf6;font-size:20px;background:#fff;padding:8px;')
