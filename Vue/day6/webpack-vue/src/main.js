// 项目js入口文件
console.log('ok')

// 安装Vue 
// npm i vue -S
// npm i vue-loader vue-template-compiler -D
// 在webpack中尝试使用Vue 
//import Vue from 'vue' // 在webpack中使用 import Vue from 'vue' 导入的vue构造函数功能不完整，值提供了 runtime-only的方式
// 回顾包的查找规则
//1、找项目根目录中有没有 node_modules 的文件夹
//2、在 node_modules中根据包名，找到对应的vue文件夹
//3、在vue文件夹中，找一个叫package.json的包配置文件
//4、在package.json文件中，查找一个main属性[main属性指定了这个包在被加载时候的入口文件]

// 在项目中导入vue的包，第一种方式
import Vue from '../node_modules/vue/dist/vue.js'

// 在项目中导入vue的包，第二种方式
//import Vue from 'vue'

// 1、导入 login 组件
import login from './login.vue'

var vm = new Vue({
    el:'#app',
    data:{
        msg : '123'
    },
    // render:function(createElements){ // 在webpack种如果想要通过vue把一个组将放到页面种去展示， vm 实例种的 render 函数可以实现
    //     return createElements(login)
    // }
    // 上面三行可简写为 
    // 1、 function 可简写为箭头函数
    // render: createElements =>{
    //     return createElements(login)
    // }
    // 2、createElements 可简写为c
    // render: c =>{
    //     return c(login)
    // }
    // 3、函数只有一行代码，大括号可以不要了
    // render: c =>  return c(login)
    // 4、如果不写{}，默认return，最终简写结果如下
    render : c => c(login) 
})

// 总结梳理webpack如何使用vue：
// 安装vue的包 npm i vue -S
// 安装 解析.vue文件的loader npm i vue-loader vue-template-compiler -D
// 在 webpack.config.js 配置vue插件和loader
// 导入vue的包 import Vue from 'vue'
// 定义一个.vue结尾的组件，组件由 template scripte style 三部分组成
// 使用 import 导入这个组件
// 创建 vm 的实例




import m1, {title as title123, content } from './test.js'
console.log(m1);
console.log(title123 + '-------' + content);
console.log(content);


