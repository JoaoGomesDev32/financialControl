import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import './assets/style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'


const app = createApp(App)
app.use(vuetify)
app.use(Toast)
app.mount('#app')
