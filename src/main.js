import { createApp } from 'vue';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import SplitButton from 'primevue/splitbutton';
import Card from 'primevue/card';

const app = createApp(App);
app.use(PrimeVue);
app.component('v-toolbar', Toolbar);
app.component('v-card', Card);
app.mount('#app');