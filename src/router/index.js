import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About.vue'
import ToDoList from '../views/ToDoList.vue'
import Front from '../views/Front.vue'

import MyPonyAsiaSwitching from '../views/myponyasia/Switcher.vue'
import MyPonyAsiaHome from '../views/myponyasia/Home.vue'
import MyPonyAsiaAnime from '../views/myponyasia/Anime.vue'
import MyPonyAsiaStreaming from '../views/myponyasia/Streaming.vue'

import Admin1 from '../views/Admin/Admin1.vue'
import Admin2 from '../views/Admin/Admin2.vue'

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
        path: '/admin1',
        name: 'Admin1',
        // nama komponen yang di import
        component: Admin1,
    },
    {
        path: '/admin2',
        name: 'Admin2',
        // nama komponen yang di import
        component: Admin2,
    },


    // MyPonyAsia Links
    {
        path: '/myponyasia',
        name: 'MPASwitching',
        component: MyPonyAsiaSwitching,
        // children: [
          
        // ]
    },
    {
      path: '/myponyasia/home',
      name: 'MPAHome',
      component: MyPonyAsiaHome,
    },
    {
      path: '/myponyasia/streaming',
      name: 'MPAStreaming',
      component: MyPonyAsiaStreaming,
    },
    {
      path: '/myponyasia/anime',
      name: 'MPAAnime',
      component: MyPonyAsiaAnime,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router