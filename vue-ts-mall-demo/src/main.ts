import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 使用element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 完整引入
// 设置app数据类型any.
// const app = createApp(App)
const app: any = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
