<template>
    <div class="product">
        <div class="product-name"><a :href="'/products/'+ product.id">{{ product.name }}</a></div>
        <img
            class="product-thumb"
            :src="imageSource"
        />
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
        },
        computed: {
            imageSource(){
                try{
                    return require('@/assets/images/products/'+this.product.id+'.jpg');
                } catch(e){
                    return require('@/assets/images/products/image-not-available.jpg');
                }
            }
        },
    };
</script>

<style>
</style>