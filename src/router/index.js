import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/HelloWorld';
import dashboard from '@/components/dashboard';
import Login from '@/components/pages/Login';
import Signout from '@/components/pages/Signout';
import Products from '@/components/pages/Products';
import Orders from '@/components/pages/orders';
import Itemdata from '@/components/pages/itemdata';
import Homepage from '@/components/Homepage'
import CustomerOrders from '@/components/pages/CustomerOrders';

Vue.use(VueRouter);
export default new VueRouter({
    routes:[
    {
        path:'*',
        redirect:'login',
        
    },
    {
        path:'/login',
        name:'Login',
        component:Login,
    
    },
    {
        path:'/',
        name:'Homepage',
        component:Homepage,
        children:[
            {
                path:'Customer_order',
                name:'CustomerOrders',
                component:CustomerOrders,
            },
            {
                path:'itemdata/:itemId',
                name:'Itemdata',
                component:Itemdata,
            },

        ],
        
        
    },
    {
        path:'/admin',
        name:'dashboard',
        component:dashboard,       
        children:[
            {
                path:'products',
                name:'Product',
                component:Products,
                meta:{requiresAuth:true},
            },
            {
                path:'Orders',
                name:'Order',
                component:Orders,
                meta:{requiresAuth:true},
            },
        ],
    },
    
    ],
});