import { createApp } from 'vue'
import {router} from './route.js'
import VueAxios from "vue-axios";
import axios from "axios";
import VueParticlesBg from "particles-bg-vue";



import App from './App.vue'
createApp(App).use(VueAxios, axios).use(router).use(VueParticlesBg).mount('#app')
