import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/main.scss'
import vuex from './store.js'

createApp(App).use(vuex).mount('#app')
