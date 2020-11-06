<template>
    <div>
        <div class="product-name"><h1>{{productName}}</h1></div>
        <img
            class="product-thumb"
            :src="require('@/assets/images/products/'+id+'.jpg')"
        />
        <p class="product-description">{{ productDescription }}</p>
        <div class="product-price">${{ productPrice }}</div>
    </div>
</template>

<script>
    import { products } from '@/products.js';

    export default {
        name: 'product-page',
        props: ['id', 'name'],
        data: function(){
            return{
                products: products,
                productName: '',
                productDescription: '',
                productPrice: '',
                
            };
        },
        created: function(){
            this.getInfo();
        },
        methods: {
            getInfo(){
                this.productName="strawberries";
                    this.products.forEach(this.processData)
            },
            processData(item){     
                        console.log(item.price);
                    if (this.id == item.id){
                        this.productName=item.name;
                        this.productDescription=item.description;
                        this.productPrice=item.price;

            }


            },
        }
    }
</script>

<style>
</style>