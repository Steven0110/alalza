
const routes = [
  {
    path: '/',
    component: () => import('pages/Login.vue'),
  },
  {
    path: '/registro',
    component: () => import('pages/Registro.vue'),
  },
  {
    path: '/recuperar',
    component: () => import('pages/Forgot.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      {
        path: "/",
        component: () => import('pages/dashboard/Main.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Login.vue')
  }
]

export default routes
