import Vue from 'vue'

// 导入vue组件
import app from './App.vue'

import router from './router.js'

// 导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.css'

import './css/app.css'

// 导入 MintUI(导入了所有的组件)
//MintUI 官网 https://mint-ui.github.io/#!/zh-cn
import MintUI from 'mint-ui'

// 导入 MintUI 样式
import 'mint-ui/lib/style.css'

// 将 MintUI 安装到Vue中
Vue.use(MintUI) // 把所有的组件注册为全局组件



var vm = new Vue({
    el:'#app',
    render: c=> c(app), //render 会把el指定的容器中所有的内容都清空覆盖， 所有不要把 router-view 和 router-link直接写到el控制的元素中
    router // 4. 将路由对象挂载到 vm 上
})

// 注意 App 这个组件是通过vm实例的render函数渲染出来的，render 函数如果要渲染组件，渲染出来的组件只能放到 el:'#app' 所指定的元素中
// Account 和 GoodsList 组件， 是通过路由匹配监听到的，所有这两个组件只能展示到属于路由的 <router-view></router-view>中去