import Vue from 'vue'

// 1.导入 vue-router 的包
// npm i vue-router -S
import VueRouter from 'vue-router'

// 2.手动安装 VueRouter
Vue.use(VueRouter)

import account from './main/account.vue'
import goodslist from './main/GoodsList.vue'
import login from './main/subcom/login.vue'
import register from './main/subcom/register.vue'

//3. 创建路由对象
var router = new VueRouter({
    routes:[
        {
            path:'/account',
            component: account,
            children:[
                {path:'login', component: login},
                {path:'register', component: register}
            ]
        },
        {path:'/goodslist', component: goodslist},
    ]
})


export default router