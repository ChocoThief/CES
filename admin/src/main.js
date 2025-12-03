import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { setupResponseInterceptor } from './lib/axios'
import { useAuthStore } from './stores/auth'
import './assets/index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Pinia 설치 후 axios 인터셉터 설정
const authStore = useAuthStore()
setupResponseInterceptor(router, authStore)

app.mount('#app')
