import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional: if using Bootstrap components that require JavaScript
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App)

app.mount('#app')
