import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About.vue'
import ToDoList from '../views/ToDoList.vue'
import Front from '../views/Front.vue'
import Login from '../views/Login.vue'

import RestoranHome from '../views/restoran/index.vue'

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
        path: '/login',
        name: 'Login',
        // nama komponen yang di import
        component: Login,
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
      path: '/restoran',
      name: 'restoran',
      // nama komponen yang di import
      component: RestoranHome,
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
    routes,
})

// Middleware in vue
router.beforeEach((to) => {
  // get meta data from route file
  if (to.meta.requiresToken) {
    // if 'token' not in localstorage
    if (!localStorage.getItem('token')) {
      // Redirect if not login
      return '/login'
    }
  } 
})

export default router