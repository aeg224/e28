<template>
    <div>
 <button @click="editProduct">Edit Product</button>

        <div v-if='editing'>
        This should display
        <h2>Edit Product ID {{id}}</h2>

        <div id="inputs">
            <label for="name">Name *1 char min</label>
            <input type="text" v-model="product.name" id="name" />

            <label for="sku">SKU: * 1 char min</label>
            <input type="text" v-model="product.sku" id="sku" />

            <label for="price">Price: *1 int min</label>
            <input type="text" v-model="product.price" id="price" />

            <label for="available">Quantity available: * 1 min</label>
            <input type="text" v-model="product.available" id="available" />

            <label for="weight">Weight (in lbs):</label>
            <input type="text" v-model="product.weight" id="weight" />

            <label for="category">Category:</label>
            <input type="text" v-model="product.category" id="category" />

            <label for="perishable" class="form-checkbox-label">
                <input
                    type="checkbox"
                    v-model="product.perishable"
                    id="perishable"
                />
                Perishable?
            </label>

            <label for="description">Description</label>
            <textarea v-model="product.description" id="description"></textarea>
        </div>

        <button @click="addProduct">Update Product</button>
{{errors}}
        <div v-if='showConfirmationMessage'> Success! </div>
    </div>
    </div>
</template>

<script>
import { axios } from '@/app.js';
export default {
    props: ['id'],
    data() {
        return {
            editing: false,
            errors: null,
            showConfirmationMessage: false,
            product: {},
        };
    },
    methods: {
        addProduct() {

                axios.put('/product/'+this.id, this.product).then((response) =>{

                    if (response.data.errors != null){
                        this.errors = response.data.errors;
                    }else {
                        this.$emit('update-products');
                        this.showConfirmationMessage = true;
                        this.product.name='';
                        this.product.sku='';
                        this.product.price=null;
                        this.product.weight=null;
                        this.product.perishable=false;
                        this.product.description='';
                    }
                })

        },
        getProduct(){
            axios.get('/product/'+this.id).then((response) => {
                console.log(response);
                this.product = response.data.product;
            });

        },
        editProduct(){
            this.editing=true;
        }
    },
    mounted() {
        console.log(this.id);
        this.getProduct();
    },
};
</script>

<style lang='scss' scoped>
#inputs {
    text-align: left;
}
</style>
