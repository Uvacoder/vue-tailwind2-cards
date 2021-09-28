import ZakatAdmin from '../views/zakat/ZakatAdmin.vue'
  import FitrahAdmin from '../components/zakat/zakatadmin/ZakatFitrahContent.vue'
  import MalAdmin from '../components/zakat/zakatadmin/ZakatMalContent.vue'
  import InfaqAdmin from '../components/zakat/zakatadmin/InfaqContent.vue'
  import Mustahik from '../components/zakat/zakatadmin/MustahikContent.vue'

import zakatHome from '../views/zakat/zakatHome.vue'
import zakatCalculate from '../views/zakat/zakatCalculate.vue'

const route = [
  // Zakat Page Links
  {
    path: '/zakathome',
    name: 'zakatHome',
    component: zakatHome,
  },
  {
    path: '/zakatCalculate',
    name: 'zakatCalculate',
    component: zakatCalculate,
  },
  {
    path: '/zakatadmin',
    name: 'ZakatAdmin',
    component: ZakatAdmin,
    children: [
      {
        path: 'fitrah',
        component: FitrahAdmin,
      },
      {
        path: 'mal',
        component: MalAdmin,
      },
      {
        path: 'infaq',
        component: InfaqAdmin,
      },
      {
        path: 'mustahik',
        component: Mustahik,
      },
    ]
  },
  // End Zakat Page Links
]

export default route