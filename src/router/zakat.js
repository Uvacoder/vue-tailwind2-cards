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
    meta: { requiresToken: true }
  },
  {
    path: '/zakatCalculate',
    name: 'zakatCalculate',
    component: zakatCalculate,
    meta: { requiresToken: true }
  },
  {
    path: '/zakatadmin',
    name: 'ZakatAdmin',
    component: ZakatAdmin,
    meta: { requiresToken: true },
    children: [
      {
        path: 'fitrah',
        component: FitrahAdmin,
        meta: { requiresToken: true }
      },
      {
        path: 'mal',
        component: MalAdmin,
        meta: { requiresToken: true }
      },
      {
        path: 'infaq',
        component: InfaqAdmin,
        meta: { requiresToken: true }
      },
      {
        path: 'mustahik',
        component: Mustahik,
        meta: { requiresToken: true }
      },
    ]
  },
  // End Zakat Page Links
]

export default route