import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        name: '',
        component: () => import('../views/HomePage.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/ProductsPage.vue')
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/ProductPage.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/CartPage.vue')
      },
      {
        path: 'order/:id',
        name: 'order',
        component: () => import('../views/OrderPage.vue')
      },
      {
        path: 'complete',
        name: 'complete',
        component: () => import('../views/CompleteOrder.vue')
      },
      {
        path: 'favorite',
        name: 'favorite',
        component: () => import('../views/FavoritePage.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutUsView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/admin/LoginView.vue')
  },

  {
    path: '/admin',
    component: () => import('../views/admin/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'coupon',
        component: () => import('../views/admin/AdminCoupon.vue')
      },
      {
        path: 'order',
        component: () => import('../views/admin/OrderView.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
