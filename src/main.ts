import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/index'  //routes
import { createPinia } from 'pinia'  //pinia
import ElementPlus from 'element-plus'
//import 'element-plus/lib/theme-chalk/index.css'

const pinia = createPinia()
//createApp(App).mount('#app')
const app = createApp(App)
app.use(router)  //routes
app.use(pinia)  //pinia
app.use(ElementPlus)
app.mount('#app')
