import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import { BASE_SERVER_URL } from '@/const/commonConst';
import './assets/css/index.css';

// Set base URL for backend service
axios.defaults.baseURL = BASE_SERVER_URL;

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
