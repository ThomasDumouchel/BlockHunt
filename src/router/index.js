import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/views/LoginPage.vue'
import GeoLocationComponent from '@/components/views/GeoLocationComponent.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/login', component: LoginPage },
        { path: '/geoLocation', component: GeoLocationComponent }
    ]
})