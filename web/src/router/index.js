import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/views/LoginPage.vue'
import GeoLocationComponent from '@/components/views/GeoLocationComponent.vue'
import CacheComponent from '@/components/views/CacheComponent.vue'
import LeaderboardComponent from '@/components/views/LeaderboardComponent.vue'
import CreateCacheComponent from '@/components/views/CreateCacheComponent.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/login', component: LoginPage },
        { path: '/geoLocation', component: GeoLocationComponent },
        { path: '/cache', component: CacheComponent },
        { path: '/leaderboard', component: LeaderboardComponent },
        { path: '/createCache', component: CreateCacheComponent },
        
    ]
})