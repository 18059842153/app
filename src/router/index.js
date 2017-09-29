import home from '../pages/view/home.vue'
import school from '../pages/view/school.vue'
import find from '../pages/view/find.vue'
import lesson from '../pages/view/lesson.vue'
import personage from '../pages/view/personage.vue'
import VueRouter from 'vue-router'
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/lesson',
			component: lesson
        },
        {
            path: '/school',
			component: school
        },
        {
            path: '/find',
			component: find
        },
        {
            path: '/personage',
			component: personage
        },
    ]
})