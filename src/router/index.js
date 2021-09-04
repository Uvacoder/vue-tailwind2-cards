import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About.vue'
import ToDoList from '../views/ToDoList.vue'
import Front from '../views/Front.vue'

import MyPonyAsiaSwitching from '../views/myponyasia/Switcher.vue'
import MyPonyAsiaHome from '../views/myponyasia/Home.vue'
import MyPonyAsiaAnime from '../views/myponyasia/Anime.vue'
import MyPonyAsiaAnime2 from '../views/myponyasia/Anime2.vue'
import MyPonyAsiaStreaming from '../views/myponyasia/Streaming.vue'
import MyPonyAsiaStreaming2 from '../views/myponyasia/Streaming2.vue'

import Admin1 from '../views/Admin/Admin1.vue'
import Admin2 from '../views/Admin/Admin2.vue'

import Spotify2021 from '../views/gabut/spotify2021.vue'

import LandingPage1 from '../views/landingpage/landingpage1.vue'

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

    // Admin Template
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
    // End Admin Template


    // MyPonyAsia Links
    {
        path: '/myponyasia',
        name: 'MPASwitching',
        component: MyPonyAsiaSwitching,
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
      path: '/myponyasia/streaming2',
      name: 'MPAStreaming2',
      component: MyPonyAsiaStreaming2,
    },
    {
      path: '/myponyasia/anime',
      name: 'MPAAnime',
      component: MyPonyAsiaAnime,
    },
    {
      path: '/myponyasia/anime2',
      name: 'MPAAnime2',
      component: MyPonyAsiaAnime2,
    },
    // End MyPonyAsia Links

    // Gabut (Clone) Links
    {
      path: '/spotify2021',
      name: 'Spotify2021',
      component: Spotify2021,
    },
    // End Gabut (Clone) Links

    // Landing Page Links
    {
      path: '/landingpage1',
      name: 'LandingPage1',
      component: LandingPage1,
    },
    // End Landing Page Links
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router