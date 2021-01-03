import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/Home.vue'
// import HomeSmall from '../components/HomeSmall.vue'
// import ABout from '../components/About.vue'

const Home = () => import('../components/Home.vue')
const HomeSmall = () => import('../components/HomeSmall.vue')
const ABout = () => import('../components/ABout.vue')
const Profile = () => import('../components/Profile.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        },
        children: [
            {
                path: 'small',
                component: HomeSmall
            },
        ]
    },
    {
        path: '/about/:userId',
        component: ABout,
        meta: {
            title: '关于'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '档案'
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

//导航守卫 
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title
    next()
})

router.afterEach((to, from) => {
    document.title = to.matched[0].meta.title
})

export default router