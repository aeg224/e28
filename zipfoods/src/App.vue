<template>
  <div id="app">
    <img alt="ZipFoods logo" id="logo" src="@/assets/images/zipfoods-logo.png">
<nav>
    <ul>
        <li v-for='link in links' :key='link'>
            <a href='#' @click='page = link'>{{ link }}</a>
        </li>
    </ul>
</nav>

<component v-bind:is='linkComponents[page]'></component>



  </div>
</template>

<script>
import HomePage from '@/components/pages/HomePage.vue';
import ProductsPage from '@/components/pages/ProductsPage.vue';
import CategoriesPage from '@/components/pages/CategoriesPage.vue';

export default {
  name: 'App',
  data: function(){
    return{
    page: 'home',

    links: ['home', 'products', 'categories'],

    linkComponents: {
        home: 'home-page',
        products: 'products-page',
        categories: 'categories-page'
    } 
   };
  },
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
