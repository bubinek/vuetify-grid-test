import Vue from 'vue'
import VueRouter from 'vue-router'
import OldGrid from '../views/OldGrid'
import NewGrid from '../views/NewGrid'

Vue.use(VueRouter)

const routes = [
    {
        path: '/old-grid',
        name: 'OldGrid',
        component: OldGrid,
    },
    {
        path: '/new-grid',
        name: 'NewGrid',
        component: NewGrid,
    },
    {
        path: '/',
        redirect: {
            name: 'OldGrid',
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
