import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from '@/common/store.js';

Vue.config.productionTip = false;
Vue.use(VueRouter);


// As shown in class, components are imported during the route declaration.
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: () => import('@/components/MasterParkList.vue'), props: true, meta: { title: 'Home' } },
    { path: '/parks/:id', component: () => import('@/components/ParkPage.vue'), props: true, meta: { requiresAuth: true, title: 'Park Page' } },
    { path: '/contact', component: () => import('@/components/ContactPage.vue'), meta: { requiresAuth: true, title: 'Contact Page' } },
    { path: '/error', component: () => import('@/components/401.vue'), meta: { title: 'Error' } },
    { path: '/login', component: () => import('@/components/AuthGate.vue'), meta: { title: 'Auth' } },
    { path: '/exit', component: () => import('@/components/Exit.vue'), meta: { title: 'Exit' } },
  ]
})


/* This is essentially the same as the beforeEach method demonstrate in class. 
* However, it also redirects the user to the error page and resets the title according to the metadata.
*/
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const decide = () => {

    // changes title
    document.title = to.meta.title
    if (requiresAuth && !store.state.user) {
      next('/error');
    }
    else {
      next();
    }
  }

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
