<template>
    <div class='footer'>
        <mu-paper style="width: 100%; ">
            <mu-bottom-nav :value="bottomNav"  shift @change="handleChange">
                <mu-bottom-nav-item value="home" title="首页" icon="home" />
                <mu-bottom-nav-item value="music" title="课程" icon="music_note" />
                <mu-bottom-nav-item value="books" title="发现" icon="books" />
                <mu-bottom-nav-item value="movie" title="Pictures" icon="photo" />
                 <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo" />
            </mu-bottom-nav>
        </mu-paper>
    </div>
</template>
<style>
.footer{
    position:fixed;
    bottom:0;
    width: 100%;
}
</style>

<script>

export default {
    name: 'footer',
    data() {
        return {
            bottomNav: 'movies',
            bottomNavColor: 'music'
        }
    },
    computed: {

    },
    methods: {
        handleChange(val) {
            this.bottomNav = val
            console.log(val)
        }

    }
}
</script>