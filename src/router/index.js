import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About.vue'
import ToDoList from '../views/ToDoList.vue'
import Front from '../views/Front.vue'

import MyPonyAsiaSwitching from '../views/myponyasia/Switcher.vue'
import MyPonyAsiaHome from '../views/myponyasia/Home.vue'

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

    // MyPonyAsia Links
    {
        path: '/myponyasia',
        name: 'MyPonyAsiaSwitching',
        component: MyPonyAsiaSwitching,
        children: [
          {
            path: '/myponyasia/home',
            name: 'MyPonyAsiaHome',
            component: MyPonyAsiaHome,
          },
          {
            path: '/myponyasia/home',
            name: 'MyPonyAsiaHome',
            component: MyPonyAsiaHome,
          },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router