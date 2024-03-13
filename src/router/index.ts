import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Home from '@/views/home.vue';
import LayOut from '@/layout/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LayOut,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;