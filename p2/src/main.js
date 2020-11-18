import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MasterParkList from '@/components/MasterParkList.vue';
import ParkPage from '@/components/ParkPage.vue';
import ContactPage from '@/components/ContactPage.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: MasterParkList, props: true },
    { path: '/parks/:id', component: ParkPage, props: true },
    { path: '/contact', component: ContactPage },
  ]
})


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
