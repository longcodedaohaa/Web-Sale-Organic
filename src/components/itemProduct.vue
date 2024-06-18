<template>
    <div class="product-card rounded">
        <img :src="product.image" alt="Product Image" />
        <div class="product-details p-3">
            <h2>{{ product.name }}</h2>
            <p>Code: <span>{{ product.code }}</span></p>
            <p class="price">Price: {{ product.price }}/kg</p>
        </div>
        <button class="btn btn-outline-danger w-100" v-on:click="addProductToCart">Add to cart</button>
        <button v-if="inCart" class="btn btn-danger w-100 mt-2" @click="removeProductFromCart">Remove from cart</button>
    </div>
</template>
  
<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
        inCart: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            cart: [],
        }
    },
    methods: {
        addProductToCart() {
            this.$emit('add-to-cart', this.product);
            console.log(this.product)
        },
        removeProductFromCart() {
            this.$emit('remove-from-cart', this.product);
        },
    },

};
</script>
  
<style scoped>
.product-card {
    background: white;
    width: 350px;
    height: fit-content;
}

.product-card img {
    width: 100%;
}
</style>
  