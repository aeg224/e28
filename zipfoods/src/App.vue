<template>
  <div id="app">
    <img alt="ZipFoods logo" id="logo" src="@/assets/images/zipfoods-logo.png">


    <home-page></home-page>
    <products-page></products-page>
    <categories-page></categories-page>

  </div>
</template>

<script>
import HomePage from '@/components/pages/HomePage.vue';
import ProductsPage from '@/components/pages/ProductsPage.vue';
import CategoriesPage from '@/components/pages/CategoriesPage.vue';

export default {
  name: 'App',
  components: {
    'home-page': HomePage,
    'products-page': ProductsPage,
    'categories-page': CategoriesPage,
  }
}
</script>

<style lang='scss'>
@import '@/assets/scss/zipfoods.scss';
</style>
}
