import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/views/LoginPage.vue'
import GeoLocationComponent from '@/components/views/GeoLocationComponent.vue'
import CacheComponent from '@/components/views/CacheComponent.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/login', component: LoginPage },
<<<<<<< HEAD
        { path: '/geoLocation', component: GeoLocationComponent }
        
=======
        { path: '/geoLocation', component: GeoLocationComponent },
        { path: '/cache', component: CacheComponent }
>>>>>>> 8b1add6e15078664775684e909e355f3f97cdd1b
    ]
})