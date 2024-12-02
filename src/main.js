import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Vue3Typer from 'vue3-typer';

import './style.css';

import { gsap } from 'gsap';

const app = createApp(App);

app.component('Vue3Typer', Vue3Typer);

app.use(router);

app.mount('#app');


