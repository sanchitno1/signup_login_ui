
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/signin',
    component: () => import('components/signin.vue')
  },
  {
    path: '/welcome',
    component: () => import('components/welcome.vue')
  },
  {
    path: '/submitted',
    component: () => import('components/submitted.vue')
  },
  {
    path: '/password',
    component: () => import('components/password.vue')
  },
  {
    path: '/signup',
    component: () => import('components/signup.vue')
  }
]

export default routes
