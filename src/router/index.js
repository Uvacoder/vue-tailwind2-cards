import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'

const routes = [
    // Route untuk about
    {
        path: '/about',
        name: 'About',
        // nama komponen yang di import
        component: About,
    },
    // Route Untuk Home
    {
        path: '/home',
        name: 'Home',
        // nama komponen yang di import
        component: Home,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router