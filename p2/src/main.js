import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


Vue.config.productionTip = false
Vue.use(VueRouter);
import HomePage from '@/components/HomePage.vue';

import ParkPage from '@/components/ParkPage.vue';
import ContactPage from '@/components/ContactPage.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage, props: true },
    { path: '/parks/:id', component: ParkPage, props: true },
    { path: '/contact', component: ContactPage },
  ]
})



new Vue({
  router: router, 
  render: h => h(App),
}).$mount('#app')
