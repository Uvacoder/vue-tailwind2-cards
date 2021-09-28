import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About.vue'
import ToDoList from '../views/ToDoList.vue'
import Front from '../views/Front.vue'

import MPALinks from './myponyasia.js'
import AdminLinks from './admins.js'
import ZakatLinks from './zakat.js'
import CloneLinks from './Webclones.js'
import LandingPageLinks from './landingPage.js'

const routes = [
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

    // Spread operator (loop all array/object)
    ...MPALinks,
    ...AdminLinks,
    ...ZakatLinks,
    ...CloneLinks,
    ...LandingPageLinks,

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router