// 由于webpack是基于node构建的，所有webpack的配置文件中，任何合法的node代码都是支持的
var path = require('path')

// 在内存中根据指定的页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
// 如果要配置插件，需要在导出的对象中挂载一个 plugins 节点
var htmlWebpackPlugin = require('html-webpack-plugin')

// 配置vue插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 当以命令行的形式运行webpack或webpack-dev-server的时候，工具会发现我们并没有提供要打包文件的入口和出口
// 此时工具会检查项目根目录中的配置文件 webpack.config.js 并读取这个文件
// 然后就拿到了导出的这个配置对象，进行打包构建
module.exports = {
    entry: path.join(__dirname, './src/main.js'), // 入口文件
    output:{ // 指定输出选项
        path: path.join(__dirname, './dist'), // 输出路径
        filename: 'bundle.js' // 指定输出的文件名称
    },
    plugins:[ // 所有webpack 插件的配置节点
        new htmlWebpackPlugin({
            template : path.join(__dirname, './src/index.html'), // 指定模板文件路径
            filename:'index.html' // 设置生成的内存页面名称
        }),
        // 配置vue插件
        new VueLoaderPlugin()
    ],
    module:{ //配置所有第三方loader模块
        rules:[ // 第三方模块的匹配规则
            {test: /\.css$/, use:['style-loader', 'css-loader']}, // 配置处理 .css 文件的第三方loader,从右往左调用
            {test: /\.less$/, use:['style-loader', 'css-loader', 'less-loader']}, // 配置处理 .less 文件的第三方loader,从右往左调用
            {test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader']}, // 配置处理 .scss 文件的第三方loader,从右往左调用
            {test:/\.js$/, use:'babel-loader', exclude:/node_modules/}, // 配置 babel 来转换高级的 ES 语法
            {test:/\.vue$/, use:'vue-loader'} // 处理 .vue 文件的loader
        ]
    },
    resolve:{ // 在项目中导入vue的包，第二种方式
        alias:{ // 修改vue被导入时候的包的路径
            //'vue$':'vue/dist/vue.js' 
        }
    }
}