<template>
    <div class='footer'>
        <mu-paper style="width: 100%; ">
            <mu-bottom-nav :value="bottomNav"  @change="handleChange">
                 <!--  <router-link to="/foo">Go to Foo</router-link> -->        
                <mu-bottom-nav-item  value="home" title="首页" icon="home" to='/'/>
                <mu-bottom-nav-item value="lesson" title="课程" icon="music_note" to='/lesson' />
                <mu-bottom-nav-item value="school" title="学校" icon="location_on"  to='/school'/>
                <mu-bottom-nav-item value="find" title="发现" icon="ondemand_video" to='/find'/>
                 <mu-bottom-nav-item value="personage" title="我的" icon="photo" to='/personage' />
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
            bottomNav: 'home',
          /*   bottomNavColor: 'home' */
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