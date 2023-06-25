import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Header from '../components/Header.vue'

let routes = [
    {
        path: '/',
        name: 'Home',
        //使用import可以路由懒加载，不然太多组件一起加载会造成白屏
        //component: () => import('../views/Home.vue')
        component: Home
    },
    {
        path: '/header',
        name: 'Header',
        component: Header
    },
    //{
        //配置404页面
        //path: '/:catchAll(.*)',
        //name: '404',
        //component: () => import('')
    //}
]
const router = createRouter({
    //history: createWebHistory(process.env.BASE_URL),  //这样写会报错
    history: createWebHistory(),
    routes
})
export default router