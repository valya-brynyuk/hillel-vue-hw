import { createApp } from 'vue'
import 'element-plus/es/components/message/style/css'
import ElementPlus from 'element-plus'
import App from './App.vue'
import {router} from "./routes.js";

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router);
app.mount('#app')
