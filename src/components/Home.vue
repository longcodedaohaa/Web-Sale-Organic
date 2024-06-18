<script>
import CardBooth from './cardBooth.vue';
import slideBanner from './slideBanner.vue';
export default {
    components: { CardBooth, slideBanner}
}
</script>

<template>
    <slideBanner />
    <div class=" booth w-100 mt-5">
        <div class="Add"> </div>
        <div class="cardBooth p-0" style="border: none">
            <CardBooth />
        </div>
        <div class="Add"> </div>
    </div>
</template>


<style>
.booth {
    display: grid;
    grid-template-columns: 1fr 20fr 1fr;
}
</style>