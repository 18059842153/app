import banner from './banner/'
import search from './search/'
import location from './location/'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
const components = [
    banner,
    search,
    location,
    swiper,
    swiperSlide

]
const install = function (Vue) {
    if (install.installed) return

    components.map(component => {
        Vue.component(component.name, component)
    })
}
export default {
    version: '1.0.1',
    install,
    banner,
    search,
    location,
    swiper,
    swiperSlide
 

}