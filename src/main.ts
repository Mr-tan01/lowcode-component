import 'leaflet/dist/leaflet.css'
import 'leaflet'
import 'mars2d/dist/mars2d.css'
import 'mars2d'

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
