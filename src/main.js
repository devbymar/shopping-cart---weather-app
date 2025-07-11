import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import axiosInstance from './plugins/axios'

import "vue-toastification/dist/index.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

const pinia = createPinia()

app.config.globalProperties.$axios = axiosInstance

    app.use(router)
    .use(pinia)
    .use(Toast)
    .mount('#app')
