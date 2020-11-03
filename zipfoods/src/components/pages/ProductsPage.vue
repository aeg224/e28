<template>
    <div id="products">
        <h2>Products</h2>
        <show-product
            v-for="product in products"
            :key="product.id"
            :product="product"
        ></show-product>
    </div>
</template>

<script>
    import { products } from '@/products.js';
    import ShowProduct from '@/components/ShowProduct.vue';

    export default {
        name: 'products-page',
        components:{
            'show-product': ShowProduct,
        },
        data: function(){
            return{
                products: products
            };
        },
    }
</script>

<style>
</style>