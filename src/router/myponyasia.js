import MyPonyAsiaSwitching from '../views/myponyasia/Switcher.vue'
import MyPonyAsiaHome from '../views/myponyasia/Home.vue'
import MyPonyAsiaAnime from '../views/myponyasia/Anime.vue'
import MyPonyAsiaAnime2 from '../views/myponyasia/Anime2.vue'
import MyPonyAsiaStreaming from '../views/myponyasia/Streaming.vue'
import MyPonyAsiaStreaming2 from '../views/myponyasia/Streaming2.vue'
import MyPonyAsiaFind from '../views/myponyasia/Find.vue'
import MyPonyAsiaFindBy from '../views/myponyasia/FindBy.vue'
import MyPonyAsiaAbout from '../views/myponyasia/About.vue'
import MyPonyAsiaPrivacyPolicy from '../views/myponyasia/PrivacyPolicy.vue'

import MyPonyAsiaPonyHome from '../views/myponyasia/pony/Home.vue'

const routes = [
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
      {
        path: '/myponyasia/:findBy',
        name: 'MPAFind',
        component: MyPonyAsiaFind,
      },
      {
        path: '/myponyasia/:findBy/:id',
        name: 'MPAFindBy',
        component: MyPonyAsiaFindBy,
      },
      {
        path: '/myponyasia/about',
        name: 'MPAAbout',
        component: MyPonyAsiaAbout,
      },
      {
        path: '/myponyasia/privacy',
        name: 'MPAPrivacyPolicy',
        component: MyPonyAsiaPrivacyPolicy,
      },
      // End MyPonyAsia Links
      
      // MyPonyAsia Pony Links
      {
        path: '/myponyasia/pony/home',
        name: 'MyPonyAsiaPonyHome',
        component: MyPonyAsiaPonyHome,
      },
      // End MyPonyAsia Pony Links
]

export default routes
