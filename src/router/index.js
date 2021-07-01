import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About.vue'
import ToDoList from '../views/ToDoList.vue'
import Front from '../views/Front.vue'
import Switching from '../views/myanimeasia/Switcher.vue'

const routes = [
    // Route untuk about
    {
        path: '/',
        name: 'Front',
        // nama komponen yang di import
        component: Front,
    },
    {
        path: '/about',
        name: 'About',
        // nama komponen yang di import
        component: About,
    },
    // Route Untuk Home
    {
        path: '/ToDoList',
        name: 'ToDoList',
        // nama komponen yang di import
        component: ToDoList,
    },
    {
        path: '/myponyasia',
        name: 'myponyasia',
        component: Switching,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router