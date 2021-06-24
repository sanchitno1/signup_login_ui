const routes = [
  {
    path: '/',
    component: () => import('components/signup.vue'),
    
  },
  {
    path: '/signin',
    component: () => import('components/signin.vue')
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
    path:'/welcome',
    component:() => import('components/welcome.vue')
  },
  {
    path:'/signup',
    component:() => import('components/signup.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

