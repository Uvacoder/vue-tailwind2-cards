import Admin1 from '../views/Admin/Admin1.vue'
import Admin2 from '../views/Admin/Admin2.vue'
import Admin3 from '../views/Admin/Admin3.vue'
import Admin4 from '../views/Admin/Admin4.vue'

const route = [
  // Admin Template
  {
    path: '/admin1',
    name: 'Admin1',
    component: Admin1,
  },
  {
      path: '/admin2',
      name: 'Admin2',
      component: Admin2,
  },
  {
      path: '/admin3',
      name: 'Admin3',
      component: Admin3,
  },
  {
      path: '/admin4',
      name: 'Admin4',
      component: Admin4,
  },
  // End Admin Template
]

export default route