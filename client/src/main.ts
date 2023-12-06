import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import './assets/css/index.css';

// Set base URL for backend service
axios.defaults.baseURL = 'http://localhost:8080';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
