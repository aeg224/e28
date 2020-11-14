<template>
  <div id="app">
    <img alt="ZipFoods logo" id="logo" src="@/assets/images/zipfoods-logo.png">
<nav>
    <ul>
        <li>
            <router-link
                v-for="link in links"
                v-bind:key="link"
                v-bind:to="paths[link]"
                exact
                >{{ link }}</router-link>
        </li>
    </ul>
</nav>

<router-view :products="products" v-on:update-products='updateProducts()'></router-view>

  </div>
</template>

<script>
  import { axios } from '@/app.js';
  export default {
      name: 'App',
      data: function(){
        return{
          links: ['home', 'projects', 'categories', 'new'],
          products: [],
          paths: {
            home: '/',
            projects: '/projects',
            categories: '/categories',
            contact: '/contact',
            new: '/products/new',
            },
        };
      },
      methods: {
          updateProducts() {
            axios.get('product').then((response) => {
                console.log(response);
                this.products = response.data.product;
            });
          },

      },
      mounted() {
        this.updateProducts();
    },
};
</script>

<style lang='scss'>
@import '@/assets/scss/zipfoods.scss';
</style>
}
