// 项目js入口文件
console.log('ok')

import './css/index.css'

import './css/index.scss'

//如果通过路径的形式去引入node_modules中相关的文件，可以直接省略路径前面的node_modules这一层目录，直接写包的名称，然后后面跟上具体的文件路径
// 不写 node_modules 这一层目录，默认就会去 node_modules 中查找

// bootstrap4已经不默认提供图标了，而是分开了，需要在别的地方下载
// npm i bootstrap -S
// git clone https://github.com/iconic/open-iconic ,将下载好的 open-iconic 放到 node_modules里
import 'bootstrap/dist/css/bootstrap.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'

// class 关键字是ES6中提供的新语法(需要借助第三方loader )，用来实现面向对象编程
// 通过 Babel 将高级语法转换为低级语法
// 第一步
// 在webpack中需要安装如下两套包
// 第一套包 npm i babel-core babel-loader@7 babel-plugin-transform-runtime -D
// 第二套包 npm i babel-preset-env babel-preset-stage-0 -D
// 第二步
// 在 webpack.config.js 文件 module 节点下的rules数组中，添加一个新的匹配规则
// {test:/\.js$/, use:'babel-loader', exclude:/node_modules/}
// 注意，在配置 babel-loader的时候，必须包 node_modules目录通过 exclude排除掉
// 原因1：如果不排除 node_modules， 则babel会把node_modules中的所有第三方js文件都打包编译，这样会非常消耗CPU，打包的速度也会非常慢
// 原因2：如果不排除，项目无法正常运行
// 第三步
// 在项目的根目录中新建一个 .babelrc 的 Babel 配置文件，这个文件必须要符合JSON规范:不能写注释，字符串必须用双引号
// 在 .babelrc 中写如下配置,可以把 presets 翻译成语法
    // {
    //     "presets":["env", "stage-0"], 
    //     "plugins":["transform-runtime"]
    // }
class Person {
    // static 定义静态属性，所谓静态属性就是可以直接通过类名访问的属性
    // 实例属性： 只能通过类的实例来访问的属性，叫做实例属性
    static info = {name : 'stanlong', age:29}
}
// 访问 Person 上的info静态属性
console.log(Person.info)





// function Animal(name){
//     this.name = name
// }

// Animal.info = 123

// var a1 = new Animal('旺财')

// 静态属性
//console.log(Animal.info)

// 实例属性
//console.log(al.name)