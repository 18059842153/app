<template>
    <div class='banner'>
    
    </div>
</template>
<script>
export default {
    name: 'LbBanner',
    data() {
        return {
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    mounted() {
        this.swiper.slideTo(0, 0, false);
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        }
    },
    methods: {

    },

}
</script>