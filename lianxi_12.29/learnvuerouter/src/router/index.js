import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'

//1.安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象

const routes = [
    {
        path: '/',
        //重定向
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/user/:userId',
        component: User
    }
]
const router = new VueRouter({
    routes,
    mode: 'history',
    // linkActiveClass: 'active'
})

//3. 将router对象传入到vue实例中
export default router