import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../view/home'
import attention from '../view/attention'
import conversation from '../view/conversation'
import information from '../view/information'
import recommend from '../view/recommend'
import location from '../view/location'
Vue.use(VueRouter)

let router= new VueRouter({
    routes:[{
        path:'/home/recommend',
        name:'home',
        component:home,
        children:[
            {
                path:'/home/recommend',
                name:'/homerecommend',
                component:recommend,
            },{
                path:'/home/location',
                name:'location',
                component:location,
            },
        ]
    },{
        path:'/attention',
        name:'attention',
        component:attention
    },{
        path:'/conversation',
        name:'conversation',
        component:conversation
    },{
        path:'/information',
        name:'information',
        component:information
    },{
        path:'*',
        redirect:'/home/recommend'
    }]
})

export default router;

