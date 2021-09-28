import LandingPage1 from '../views/landingpage/landingpage1.vue'
import LandingPage2 from '../views/landingpage/landingpage2.vue'

const route = [
  // Landing Page Links
  {
    path: '/landingpage1',
    name: 'LandingPage1',
    component: LandingPage1,
  },
  {
    path: '/landingpage2',
    name: 'LandingPage2',
    component: LandingPage2,
  },
  // End Landing Page Links
]

export default route