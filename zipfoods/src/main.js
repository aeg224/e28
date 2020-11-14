import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/pages/HomePage.vue';
import ProductsPage from '@/components/pages/ProductsPage.vue';
import CategoriesPage from '@/components/pages/CategoriesPage.vue';
import ProductPage from '@/components/pages/ProductPage.vue';
import ContactPage from '@/components/pages/ContactPage.vue';
import ProductCreatePage from '@/components/pages/ProductCreatePage.vue';
import EditPage from '@/components/pages/EditPage.vue';


Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/projects', component: ProductsPage },
    { path: '/categories', component: CategoriesPage },
    { path: '/contact', component: ContactPage },
    { path: '/products/new', component: ProductCreatePage },
    { path: '/products/edit/:test', component: EditPage, props: true },
    { path: '/products/:id', component: ProductPage, props: true }
  ]
})
new Vue({
  router: router, // <-- NEW
  render: h => h(App),
}).$mount('#app')