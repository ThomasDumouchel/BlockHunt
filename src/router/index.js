import { createWebHistory, createRouter } from "vue-router"
import LoginPage from "@/components/views/LoginPage.vue"

const routes = [
    {
        path: "/",
        name: "Login",
        component: LoginPage,
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router