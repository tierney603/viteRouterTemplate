import { createRouter, createWebHistory } from "vue-router";

import Home from "../src/pages/home/home.vue"
import About from "../src/pages/about/about.vue"

// 路由信息
const routes = [
    {
        path: "/",
        name: "Home",
        alias:'/home',
        component:Home
    },
    {
      path: "/about",
      name: "About",
      component:About
  },{
    path: '/:pathMatch(.*)',
    component: () => import('../src/pages/NotFound.vue')
}

];

// 导出路由
const router=createRouter({
  history: createWebHistory(),
  routes,
  
})
export default router