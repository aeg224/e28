import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import MasterParkList from '@/components/MasterParkList.vue';
//import ParkPage from '@/components/ParkPage.vue';
//import ContactPage from '@/components/ContactPage.vue';
import store from '@/common/store.js';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: () => import ('@/components/MasterParkList.vue'), props: true },
    { path: '/parks/:id', component: () => import ('@/components/ParkPage.vue'), props: true, meta: {requiresAuth: true}},
    { path: '/contact', component: () => import ('@/components/ContactPage.vue'), meta: {requiresAuth: true}},
    { path: '/error', component: () => import ('@/components/401.vue')},
    { path: '/login', component: () => import ('@/components/AuthGate.vue')},
    { path: '/exit', component: () => import ('@/components/Exit.vue')},
  ]
})

router.beforeEach(async (to, from, next) => {

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  const decide = () => {
      if (requiresAuth && !store.state.user) {
          next('/error');
      }
      else {
          next();
      }
  }
  
  // If we don't have the user yet, dispatch our Vuex authUser action
  if (store.state.user === null) {
      store.dispatch('authUser').then(() => {
          decide();
      });
  } else {
      decide();
  }

});

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
