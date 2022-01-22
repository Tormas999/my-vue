import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import List from '../views/List.vue'

const Order = () =>
    import ('../views/Order.vue')
const Personal = () =>
    import ('../views/Personal.vue')
const Login = () =>
    import ('../views/Login.vue')


Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Main,
        children: [{
                path: '/',
                component: List
            },
            {
                path: '/order',
                component: Order
            }, {
                path: '/personal',
                component: Personal
            }
        ]
    },
    {
        path: '/login',
        component: Login
    }
]

const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'aa'
})

router.beforeEach((to, from, next) => {
    if (to.meta.isLogin) {
        const user = localStorage.getItem('username');
        console.log(user);
        if (user) {
            next();
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

export default router