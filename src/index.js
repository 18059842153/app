import './styles/index.css'
import App from './pages/app/app.vue'
import lbCom from './components'
import stores from './stores'
import mixin from './mixins/mixin'
 import router from './router' 
import Vue from 'vue'
import VueRouter from 'vue-router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(lbCom)
Vue.use(MuseUI)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
 let store = new Vuex.Store(stores)


new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})