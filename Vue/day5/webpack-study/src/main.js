// 项目js的入口文件
// 安装 jquery 模块 npm i jquery 
// import *** from *** 是 es6 中导入模块的方式
import $ from 'jquery'

// 使用import 语法导入css样式表
// 处理非 js 文件，需要手动安装第三方合适的 loader 加载器
// 1、npm i style-loader css-loader -D
// 2、再webpack.config.js这个配置文件里面新增一个配置节点，叫做module，它是一个对象
// 再这个 module 对象上有一个rules属性的数组，存放了第三方的文件和匹配的处理规则
import './css/index.css'

// npm i less -D
// npm i less-loader -D
import './css/index.less'

// npm i node-sass -D
// npm i sass-loader -D
import './css/index.scss'

$(function(){
    $('li:odd').css('backgroundColor', 'green')
    $('li:even').css('backgroundColor', function(){
        return '#' + 'D97634'
    })
})