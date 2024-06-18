<template>
    <div class="w-100 d-block p-3">
        <div v-if="call === 'listProduct'">
            <div class="w-100 d-flex justify-content-around align-items-center">
                <h1>All Product</h1>
                <div>
                    <button v-on:click="call = 'yourCart'" :class="{ barActive: call === 'yourCart' }"
                        class="border border-0 fs-3 icon-link icon-link-hover position-relative"
                        style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="bi"
                            aria-hidden="true">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M8.418 3.25c.28-.59.884-1 1.582-1h4c.698 0 1.301.41 1.582 1c.683.006 1.216.037 1.692.223a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.776 1.998l.742 2.722l.28.841l.024.03c.901 1.154.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91c-.858-3.431-1.287-5.147-.386-6.301l.024-.03l.28-.841l.742-2.722c.237-.871.41-1.505.776-1.999a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222m.002 1.502c-.662.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.176.237-.28.568-.57 1.635l-.57 2.089C6.384 9 7.778 9 9.684 9h4.631c1.907 0 3.3 0 4.32.18l-.569-2.089c-.29-1.067-.394-1.398-.57-1.635a1.75 1.75 0 0 0-.768-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998"
                                clip-rule="evenodd" />
                        </svg><span
                            class=" position-absolute fs-6 z-1 bg-black rounded-circle text-white d-flex align-items-center justify-content-center"
                            style="top: -10px; right: -10px; width: 20px; height: 20px"> {{ cart.length }}</span>
                    </button>
                </div>
            </div>
            <div class="List-Product">
                <itemProductVue v-for="product in products" :key="product.id" :product="product" @add-to-cart="addToCart" />
            </div>
        </div>
        <div class="ViewCart" v-if="call === 'yourCart'">
            <div class="w-100 d-flex justify-content-between align-items-center">
                <h1>Your cart</h1>
                <button v-on:click="call = 'listProduct'" :class="{ barActive: call === 'listProduct' }"
                    class="border border-0 bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
                    </svg>
                </button>
            </div>
            <div>
                <div v-if="cart.length > 0">
                    <div v-for="cartItem in cart" :key="cartItem.id"
                        class="w-100 bg-white d-flex align-items-end justify-content-between m-3 rounded-2">
                        <div class="d-flex h-100 gap-3">
                            <img :src="cartItem.image" style="height:150px" />
                            <div class="product-details">
                                <h2>{{ cartItem.name }}</h2>
                                <p>Code: <span>{{ cartItem.code }}</span></p>
                                <p class="price">Price: {{ cartItem.price }}/kg</p>
                            </div>
                        </div>
                        <button class="btn btn-danger m-2" @click="removeFromCart(cartItem)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="M5.75 3V1.5h4.5V3zm-1.5 0V1a1 1 0 0 1 1-1h5.5a1 1 0 0 1 1 1v2h2.5a.75.75 0 0 1 0 1.5h-.365l-.743 9.653A2 2 0 0 1 11.148 16H4.852a2 2 0 0 1-1.994-1.847L2.115 4.5H1.75a.75.75 0 0 1 0-1.5zm-.63 1.5h8.76l-.734 9.538a.5.5 0 0 1-.498.462H4.852a.5.5 0 0 1-.498-.462z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div v-else class=" text-center w-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" style="color: red">
                        <g fill="none" stroke="currentColor" stroke-width="1.5">
                            <path
                                d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4" />
                            <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 13v4m8-4v4m-4-4v4" />
                            <path stroke-linecap="round"
                                d="M3.864 16.455c.546 2.183.819 3.274 1.632 3.91C6.31 21 7.435 21 9.685 21h4.63c2.25 0 3.375 0 4.19-.635c.813-.636 1.086-1.727 1.631-3.91c.858-3.432 1.287-5.147.387-6.301C19.622 9 17.853 9 14.316 9H9.685c-3.538 0-5.306 0-6.207 1.154c-.529.677-.6 1.548-.394 2.846" />
                        </g>
                    </svg>
                    <h1>Your cart is empty. Start shopping now!</h1>
                </div>

                <div class="w-100 text-end">
                    <button class="btn btn-success mt-3" v-on:click="call = 'Oder'" v-if="cart.length > 0"
                        :class="{ barActive: call === 'Oder' }">Oder</button>
                </div>
            </div>
        </div>
        <div class="oderYour" v-if="call === 'Oder'">
            <div class="d-flex gap-5">
                <button class=" btn boder-none bg-transparent" v-on:click="call = 'yourCart'"
                    :class="{ barActive: call === 'yourCart' }">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g transform="rotate(-90 12 12)">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="m12 5l6 6m-6-6l-6 6m6-6v14" />
                        </g>
                    </svg>
                </button>
                <div>
                    <h1>Shipment Details</h1>
                </div>
            </div>
            <div class="w-100 bg-white rounded-4 p-3">
                <div class="w-100 p-3">
                    <label for="Address" class="w-100 border-bottom border-1 border-black w-100 px-2 mt-3">Address*: <input
                            type="text" class=" bg-transparent border border-0"
                            style="outline: none; width: 90%"></label><br>
                    <label for="firstName" class="w-100 border-bottom border-1 border-black w-100 px-2 mt-3">First Name*:
                        <input type="text" class=" bg-transparent border border-0"
                            style="outline: none; width: 90%"></label><br>
                    <label for="lastName" class="w-100 border-bottom border-1 border-black w-100 px-2 mt-3">Last Name*:
                        <input type="text" class="  bg-transparent border border-0"
                            style="outline: none; width: 90%"></label><br>
                    <label for="tel" class="w-100 border-bottom border-1 border-black w-100 px-2 mt-3">Tel*: <input
                            type="number" maxlength="10" class=" bg-transparent border border-0"
                            style="outline: none; width: 90%"></label>
                </div>
                <div class="mt-3">
                    <h4>Product you ordered</h4>
                    <div class="d-flex h-100 gap-3 mt-3" style="height: 100px" v-for="cartItem in cart" :key="cartItem.id">
                        <img :src="cartItem.image" style="height: 100px" />
                        <div class="product-details">
                            <h2>{{ cartItem.name }}</h2>
                            <p>Code: <span>{{ cartItem.code }}</span></p>
                            <p class="price">Price: {{ cartItem.price }}/kg</p>
                        </div>
                    </div>
                    <div class="w-100 text-end px-4">
                        <p>Total: {{ totalPrice }}</p>
                    </div>
                </div>
                <div class="w-100 p-3 border-top d-flex justify-content-between border-black">
                    <p>Total Invoice: {{ totalInvoice.toFixed(2) }}</p>
                    <button class="btn border-5 bg-success text-white">Confirm</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import itemProductVue from './itemProduct.vue';

export default {
    components: {
        itemProductVue,
    },
    data() {
        return {
            cart: [],
            call: "listProduct",
            shippingFee: 0.00,
            products: [
                {
                    id: "0",
                    name: 'ACTIVATED CHARCOAL, POWDER ',
                    code: 'M900 - 025',
                    image: 'https://www.omfoods.com/cdn/shop/products/e445252ef4f40674d6795591129d6c2a_578x.progressive.jpg?v=1595021905',
                    price: '11.00'
                },
                {
                    id: "1",
                    name: 'ALMOND BUTTER, ROASTED, SMOOTH',
                    code: 'NB101 - 1',
                    image: 'https://www.omfoods.com/cdn/shop/products/fc2001d08d743a46c1e3d83e0f3911ff_578x.progressive.jpg?v=1579909150',
                    price: '24.50'
                },
                {
                    id: "2",
                    name: 'ALMOND FLOUR, BLANCHED',
                    code: 'N106 - 1',
                    image: 'https://www.omfoods.com/cdn/shop/products/eb020fa87fd0ddac3aab5579e82b587f_e63d8ee4-dc52-4adc-a6cb-84f5c42168d0_578x.progressive.jpg?v=1613592532',
                    price: '23.00'
                },
                {
                    id: "3",
                    name: 'ALMONDS, NONPAREIL',
                    code: 'N115 - 1',
                    image: 'https://www.omfoods.com/cdn/shop/files/af4e8404105c258adcb44cd3da649071_578x.progressive.jpg?v=1684965892',
                    price: '15.75'
                },
                {
                    id: "4",
                    name: 'ALMONDS, TAMARI ROASTED',
                    code: 'N107 - 1',
                    image: 'https://www.omfoods.com/cdn/shop/files/78913a1a56df8b74449968eb185b326c_578x.progressive.jpg?v=1689272895',
                    price: '18.50'
                },
                {
                    id: "5",
                    name: 'APRICOTS, TURKISH, PITTED, UNSULFURED',
                    code: 'F20 - 1',
                    image: 'https://www.omfoods.com/cdn/shop/products/de680b153b75c8d8e4475595814707f5_578x.progressive.jpg?v=1571714046',
                    price: '14.25'
                },
                {
                    id: "6",
                    name: 'CACAO & GOJI, CHUNKS OF ENERGY',
                    code: 'CECA - 025',
                    image: 'https://www.omfoods.com/cdn/shop/products/88dcd390a90b9b513d3ac01cbf0c70b8_30a3f32f-22e6-4ff5-b87d-83082a433814_578x.progressive.jpg?v=1604701486',
                    price: '5.25'
                },
                {
                    id: "7",
                    name: 'CAJUN SEASONING',
                    code: 'HCX3 - 025',
                    image: 'https://www.omfoods.com/cdn/shop/products/cajun__33479_578x.progressive.jpg?v=1571714077',
                    price: '6.25'
                },
                {
                    id: "8",
                    name: 'CAROB & SUPERGREENS, CHUNKS OF ENERGY',
                    code: 'CECU - 025',
                    image: 'https://www.omfoods.com/cdn/shop/products/fd78103410a1f503ddc960483f8ba7a2_c2cd3750-b58b-4990-96cc-de68e7778831_578x.progressive.jpg?v=1604701490',
                    price: '5.250'
                },
                {
                    id: "9",
                    name: 'CHAGA MUSHROOM, WILD HARVESTED, CHUNKS OR PIECES',
                    code: 'B430 - 025',
                    image: 'https://www.omfoods.com/cdn/shop/products/IMG_1901_2_578x.progressive.jpg?v=1571714078',
                    price: '16.25'
                },
                {
                    id: "10",
                    name: 'CHILI BEANS, SMALL RED',
                    code: 'L260 - 5',
                    image: 'https://www.omfoods.com/cdn/shop/products/small_red_b__09525_578x.progressive.jpg?v=1571714047',
                    price: '18.75'
                },
                {
                    id: "11",
                    name: 'CHILI POWDER BLEND, SALT FREE',
                    code: 'HCX2 - 025',
                    image: 'https://www.omfoods.com/cdn/shop/products/chili_powder__41158_f6931ec4-a265-42e7-8bb7-25479a8f7718_578x.progressive.jpg?v=1571714068',
                    price: '6.25'
                },
                {
                    id: "12",
                    name: 'CHLORELLA, TABLETS',
                    code: 'B850 - 025',
                    image: 'https://www.omfoods.com/cdn/shop/products/d67e22b5e183ba43a7c4cd3e08ca18ec_69d20c1f-10af-403a-9155-6632d2e27a93_578x.progressive.jpg?v=1604683820',
                    price: '9.25'
                },


            ],
        }
    },
    computed: {
        shippingFee() {
            const cartTotal = this.cart.reduce((total, product) => total + parseFloat(product.price), 0);

            if (cartTotal < 147.5) {
                return 10;
            } else {
                return 0;
            }
        },
        isFreeShippingEligible() {
            const cartTotal = this.cart.reduce((total, product) => total + parseFloat(product.price), 0);
            return cartTotal >= 147.50;
        },
        totalPrice() {
            const cartTotal = this.cart.reduce((total, product) => total + parseFloat(product.price), 0);
            const totalWithShipping = cartTotal + this.shippingFee;
            return totalWithShipping.toFixed(2);
        },
        totalInvoice() {
            const cartTotal = this.cart.reduce((total, product) => total + parseFloat(product.price), 0);
            return cartTotal + this.shippingFee;
        },
    },
    methods: {
        addToCart(product) {
            // Add the selected product to the cart
            this.cart.push(product);
            console.log("Added to cart:", product);
        },
        removeFromCart(product) {
            this.cart = this.cart.filter(item => item.id !== product.id);
        },
        checkout() {
            this.cart = [];
        },

    },


}
</script>

<style>
.List-Product {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
    gap: 10px;
    justify-content: center;
    justify-items: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
}
</style>