
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') },
      { path: '/country_and_carrier_identifiers', component: () => import('pages/country_and_carrier_identifiers.vue') },
      { path: '/subscriptions/click', component: () => import('pages/subscriptions/click.vue') },
      { path: '/subscriptions/pin', component: () => import('pages/subscriptions/pin.vue') },
      { path: '/subscriptions/sms', component: () => import('pages/subscriptions/sms.vue') },
      { path: '/otp/click', component: () => import('pages/otp/click.vue') },
      { path: '/otp/pin', component: () => import('pages/otp/pin.vue') },
      { path: '/otp/sms', component: () => import('pages/otp/sms.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/error404.vue')
  }
]

export default routes
