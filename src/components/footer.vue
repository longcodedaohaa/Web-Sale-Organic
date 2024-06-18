<template>
    <div class=" mt-0 p-5 " style="width: 100%;">
        <div class=" row justify-content-center mt-3" style="width: 100%">
            <div class="col">
                <h3>{{ title }}</h3>
                <p>{{ p }}</p>
                <div class="subscribe bg-white p-3 border border-3 border-dark-subtle" style="width: fit-content">
                    <input v-model="inputValue" placeholder="Enter your email_" class="border border-0 bg-transparent"
                        style="outline: none;">
                    <button class="boder border-0 bg-transparent">SUBSCRIBE</button>
                </div>
                <div class=" mt-4 d-flex gap-4 itemContact">
                    <router-link to="" class=" boder rounded-circle" style="padding: 10px 10px; font-size: 16px">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                            <path
                                d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z">
                            </path>
                        </svg>
                    </router-link>
                    <router-link to="" class=" boder rounded-circle" style="padding: 10px 10px; font-size: 16px">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                            <path
                                d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z">
                            </path>
                            <circle cx="16.806" cy="7.207" r="1.078"></circle>
                            <path
                                d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z">
                            </path>
                        </svg>
                    </router-link>
                    <router-link to="" class=" boder rounded-circle" style="padding: 10px 10px; font-size: 16px">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                            <path
                                d="M5.077 9.457c0-.778.136-1.513.404-2.199a5.63 5.63 0 0 1 1.121-1.802 7.614 7.614 0 0 1 1.644-1.329 7.513 7.513 0 0 1 2.002-.844 8.57 8.57 0 0 1 2.185-.281c1.139 0 2.199.241 3.182.721a6.021 6.021 0 0 1 2.391 2.094c.614.915.919 1.95.919 3.104 0 .692-.068 1.369-.207 2.031a8.28 8.28 0 0 1-.646 1.913 6.605 6.605 0 0 1-1.082 1.617 4.723 4.723 0 0 1-1.568 1.114 4.962 4.962 0 0 1-2.045.417c-.489 0-.977-.115-1.459-.346-.482-.23-.828-.546-1.036-.951-.073.281-.173.687-.306 1.218-.128.53-.214.872-.252 1.027-.04.154-.114.411-.222.767a5.183 5.183 0 0 1-.281.769l-.344.674a7.98 7.98 0 0 1-.498.838c-.181.262-.405.575-.672.935l-.149.053-.099-.108c-.107-1.133-.162-1.811-.162-2.035 0-.663.079-1.407.235-2.233.153-.825.395-1.862.72-3.109.325-1.246.511-1.979.561-2.196-.229-.467-.345-1.077-.345-1.827 0-.599.187-1.16.562-1.688.376-.526.851-.789 1.427-.789.441 0 .783.146 1.028.439.246.292.366.66.366 1.109 0 .476-.158 1.165-.476 2.066-.318.902-.476 1.575-.476 2.022 0 .453.162.832.486 1.129a1.68 1.68 0 0 0 1.179.449c.396 0 .763-.09 1.104-.271a2.46 2.46 0 0 0 .849-.733 6.123 6.123 0 0 0 1.017-2.225c.096-.422.17-.823.216-1.2.049-.379.07-.737.07-1.077 0-1.247-.396-2.219-1.183-2.915-.791-.696-1.821-1.042-3.088-1.042-1.441 0-2.646.466-3.611 1.401-.966.932-1.452 2.117-1.452 3.554 0 .317.048.623.139.919.089.295.186.53.291.704.104.171.202.338.291.492.09.154.137.264.137.33 0 .202-.053.465-.16.79-.111.325-.242.487-.4.487-.015 0-.077-.011-.185-.034a2.21 2.21 0 0 1-.979-.605 3.17 3.17 0 0 1-.659-1.022 6.986 6.986 0 0 1-.352-1.169 4.884 4.884 0 0 1-.132-1.153z">
                            </path>
                        </svg>
                    </router-link>
                    <router-link to="" class=" boder rounded-circle" style="padding: 10px 10px; font-size: 16px">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                            <path
                                d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z" />
                        </svg>
                    </router-link>
                </div>
            </div>
            <div class="col-md-auto">
                <h3>CUSTOMER SERVICE</h3>
                <div class="d-flex flex-column">
                    <router-link to="" class=" text-decoration-none text-dark link-danger">About Us</router-link>
                    <router-link to="" class=" text-decoration-none text-dark link-danger">FAQ</router-link>
                    <router-link to="" class=" text-decoration-none text-dark link-danger">Contact Us</router-link>
                    <router-link to="" class=" text-decoration-none text-dark link-danger">Track and manage my
                        order</router-link>
                    <router-link to="" class=" text-decoration-none text-dark link-danger">1 in your Wishlist</router-link>
                    <router-link to="" class=" text-decoration-none text-dark link-danger">1 in your cart </router-link>
                </div>
            </div>
            <div class="col col-lg-2">
                <h4>SHOP FOODS</h4>

                <div class="d-flex flex-column">
                    <router-link to="/seeds" class=" text-decoration-none text-dark link-danger">Seeds &amp;
                        Butters</router-link>
                    <router-link to="/sweeteners"
                        class=" text-decoration-none text-dark link-danger">Sweeteners</router-link>
                    <router-link to="/savory-ingredient" class=" text-decoration-none text-dark link-danger">Savory
                        Ingredient</router-link>
                    <router-link to="/legume" class=" text-decoration-none text-dark link-danger">Legumes &amp;
                        Lentils</router-link>
                    <router-link to="/nuts" class=" text-decoration-none text-dark link-danger">Nuts &amp;
                        Butters</router-link>
                    <router-link to="/grains" class=" text-decoration-none text-dark link-danger">Grains &amp;
                        Rices</router-link>
                    <router-link to="/cacao-cocoa-chocolate" class=" text-decoration-none text-dark link-danger">Cacao &amp;
                        Coffee</router-link>
                    <router-link to="/dried-fruit" class=" text-decoration-none text-dark link-danger">Dried
                        Fruit</router-link>
                </div>
            </div>
            <div class="col col-lg-3">
                <h4>SHOP HERBS &amp; BOTANICALS</h4>

                <div>
                    <router-link to="/culinary-herbs-spices" class=" text-decoration-none text-dark link-danger">Culinary
                        Botanicals</router-link>
                    <router-link to="/mushrooms-seaweed" class=" text-decoration-none text-dark link-danger">Mushrooms &amp;
                        Seaweed</router-link>
                    <router-link to="/botanical-herbs" class=" text-decoration-none text-dark link-danger">Herbal
                        Botanicals</router-link>
                    <router-link to="/tea" class=" text-decoration-none text-dark link-danger">Teas</router-link>
                    <router-link to="/ingredient"
                        class=" text-decoration-none text-dark link-danger">Ingredients</router-link>
                </div>
            </div>
        </div>
        <div class="mt-5 boder border-top">
            <div class="d-flex justify-content-between mt-3">
                <p>Copyright © 2021 OM Foods Inc. All rights reserved.</p>
                <div>
                    <a href="https://policies.google.com/privacy" class="ms-4 text-decoration-none text-black "
                        style="font-size: 10px">Privacy policy</a>
                    <a href="https://policies.google.com/terms" class="ms-4 text-decoration-none text-black "
                        style="font-size: 10px">Terms of Service</a>
                    <a href="https://policies.google.com/technologies" class="ms-4 text-decoration-none text-black "
                        style="font-size: 10px">Cookie Policy</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'We have high standards for our emails too.',
            p: 'Sign up for Organic Matters updates to receive information about new product arrivals, future events and specials.',
            inputValue: ''
        };
    },
}
</script>

<style>
.itemContact a {
    background: white;
    transition: all 0.15s ease-in-out;
}

.itemContact a:hover {
    background: none;
}

ul {
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
}
</style>