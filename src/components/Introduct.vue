<template>
    <div class="About">
        <div class="Add"></div>
        <div class="content">
            <h1>Welcome to <router-link to="/">orgnicstore.com</router-link> - Your Source for Natural and High-Quality
                Cereal Grains!</h1>
            <div class="item">
                <h2>🌾 About Us:</h2>
                <p>Hello at <router-link to="/">orgnicstore.com</router-link>, where we take pride in being a reliable
                    destination for those seeking quality
                    and natural cereal grains. We are committed to bringing you the best products, carefully selected from
                    high-quality sources.</p>
            </div>
            <div class="item">
                <h2>🌿 High-Quality Products:</h2>
                <p>At <router-link to="/">orgnicstore.com</router-link>, we offer a variety of cereal grains, from organic,
                    sugar-free products to high-fiber
                    cereal grains that promote heart health and support weight loss.</p>

            </div>
            <div class="item">
                <h2>👨‍🌾 Sustainable Agricultural Origin:</h2>
                <p>We support farmers and producers with a commitment to sustainable agriculture, ensuring that every
                    product you purchase from <router-link to="/">orgnicstore.com</router-link> is not only good for your
                    health but also beneficial for the
                    environment.</p>
            </div>

            <div class="item">
                <h2>🛍️ Easy Online Shopping:</h2>
                <p>With <router-link to="/">orgnicstore.com</router-link>, you can comfortably browse and place orders right
                    from your sofa. We commit to
                    making every shopping transaction a seamless and enjoyable experience.</p>
            </div>
            <div class="item">
                <h2>📦 Fast Delivery:</h2>
                <p>We understand that you want to receive your products promptly. Therefore, we promise fast and secure
                    delivery to your doorstep.</p>
            </div>
            <div class="item">
                <h2>🤝 Dedicated Customer Support:</h2>
                <p>Our customer support team is always ready to assist. If you have any questions or need assistance, feel
                    free to contact us.</p>
            </div>
            <p class="mt-5">Join <router-link to="/">orgnicstore.com</router-link> to experience delicious and high-quality cereal
                grains! Thank you for visiting!</p>
            <address>
                <p><strong><router-link to="/">orgnicstore.com</router-link></strong></p>
                <p>Email: <a href="mailto:admin@organicstore.com">admin@organicstore.com</a></p>
                <p>Phone: <a href="tel:0123456789">0123456789</a></p>
            </address>
        </div>
        <div class="Add"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.About {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
}

.content {
    display: block;
}

.item {
    margin-top: 50px;
}

h1,
h2 {
    color: #333;
}

h2 {
    border-bottom: 2px solid #333;
    padding-bottom: 5px;
    margin-top: 20px;
}

p {
    color: #555;
}

address {
    margin-top: 20px;
}

a {
    color: #007BFF;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>