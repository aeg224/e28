<!--

!-->
<template>
    <div>
        <div class="product-name"><h1>{{productName}} </h1></div>
        <img
            class="product-thumb"
            :src="imageSource"
        />
        <p class="product-description">{{ productDescription }}</p>
        <div class="product-price">${{ productPrice }}</div>

        <edit-page :id=id></edit-page>
        
    </div>
</template>

<script>
  import { axios } from '@/app.js';
  import EditPage from '@/components/pages/EditPage.vue';

    export default {
        components:{
            'edit-page': EditPage,
        },
        name: 'product-page',
        props: ['id', 'name'],
        data: function(){
            return{
                products: [],
                productName: '',
                productDescription: '',
                productPrice: '',
                
            };
        },
        created: function(){
            
        },
        computed: {
            imageSource(){
                try{
                    return require('@/assets/images/products/'+this.id+'.jpg');
                } catch(e){
                    return require('@/assets/images/products/image-not-available.jpg');
                }
            }
        },
        methods: {
            getInfo(){
                var SIZE=this.products.length;
                var i;
                console.log("inside getinfo");
                console.log(this.products[this.id]);

                for (i=0; i<SIZE; ++i){
                    if (this.id == this.products[i].id){
                        console.log(i);
                        this.productName=this.products[i].name;
                        this.productDescription=this.products[i].description;
                        this.productPrice=this.products[i].price;
                    }
                }
            },
            updateProducts() {
                axios.get('product').then((response) => {
                console.log(response);
                this.products = response.data.product;
                console.log("inside update");
                this.getInfo();

                });
            },
        },
        mounted(){
            this.updateProducts();
                console.log("inside mounted");
                console.log(this.products);
        }
    }
</script>

<style>
</style>