import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/views/LoginPage.vue'
import GeoLocationComponent from '@/components/views/GeoLocationComponent.vue'
import CacheComponent from '@/components/views/CacheComponent.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/login', component: LoginPage },
        { path: '/geoLocation', component: GeoLocationComponent },
        { path: '/cache', component: CacheComponent }
    ]
})