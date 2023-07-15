
const routes = [
  {
    path: '/',
    component: () => import('pages/Login.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      {
        path: "",
        component: () => import('pages/dashboard/Events.vue')
      },
      {
        path: "eventos",
        component: () => import('pages/dashboard/Events.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
