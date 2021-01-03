//Adding routes in case that we will add more routes in the future
import Vue from 'vue';
import VueRouter from 'vue-router'

import DashbordPage from './pages/DashbordPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        name:"Dashbord",
        component: DashbordPage
    }
]


const router = new VueRouter({
    mode:'history',
    routes
})

export default router;