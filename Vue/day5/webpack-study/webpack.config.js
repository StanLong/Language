const path = require('path')
// 启用热更新
const webpack = require('webpack') // wbpack4启用热更新的不需要配置
// 导入在内存中生成html页面的插件, 只要是插件都一定归档到 plugins 节点中去
const htmlWebpackPlugin = require('html-webpack-plugin')


// 通过node中的模块操作，向外暴露了一个配置对象
module.exports={
    // 在配置文件中需要手动指定webpack打包的入口和出口
    entry: path.join(__dirname, './src/main.js'), // 指定webpack打包的文件
    output:{
        path: path.join(__dirname, './dist'), // 输出的文件目录
        filename:'bundle.js' // 指定输出的文件名称
    },
    devServer:{ // 配置 dev-server 命令参数的第二种方式
        // --open --port 3000 --contentBase src --hot
        open: true, // 自动打开浏览器
        port:3000, // 设置启动时候的运行端口
        //contentBase:'src', // 指定托管的根目录
        hot:true // 启用热更新
    },
    plugins:[ // 配置插件的节点 // wbpack4启用热更新的不需要配置
        new webpack.HotModuleReplacementPlugin(), // new 一个热更新的模块对象
        new htmlWebpackPlugin({ // 创建一个在内存中生成html的插件
            template:path.join(__dirname, './src/index.html'), // 指定在内存中生成的模板页面
            filename:'index.html' // 指定生成的页面名称
        })
    ],
    module:{ // 用于配置所有的第三方模块加载器
        rules:[ // 第三方模块的匹配规则
            {test: /\.css$/, use:['style-loader', 'css-loader']}, // 配置处理 .css 文件的第三方loader,从右往左调用
            {test: /\.less$/, use:['style-loader', 'css-loader', 'less-loader']}, // 配置处理 .less 文件的第三方loader,从右往左调用
            {test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader']}, // 配置处理 .scss 文件的第三方loader,从右往左调用
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use:'url-loader?limit=43,923&name=[hash:8]-[name].[ext]'} // 配置处理 图片 文件的第三方loader, limit是固定参数
            // limit 给定的值就图片的大小，单位是 byte， 如果我们引用的图片大于或等于给定的 limit 值， 则不会被转为 base64格式的字符串，否则会转为base64字符串
        ]

    }
}