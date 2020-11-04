<template>
    <div class="product">
        <div class="product-name"><a :href="'/products/'+ product.id">{{ product.name }}</a></div>
        <img
            class="product-thumb"
            :src="require('@/assets/images/products/'+product.id+'.jpg')"
        />
        <p class="product-description">{{ product.description }}</p>
        <div class="product-price">${{ product.price }}</div>
    </div>
</template>

<script>

    export default {
        name: 'show-products',
        props: ['product'],
        data: function(){
            return{
                id_info: this.product.id,
            };
        }
    };
</script>

<style>
</style>