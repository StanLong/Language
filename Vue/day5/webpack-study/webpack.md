#Webpack

## 再网页中会引用哪些常用的静态资源？
+ JS
 -  .js	.jsx .coffee .ts(TypeScript 类C#语言)
+ CSS
 - .css .less .sacc .scss
+ Images
 - .jpg .png .gif .bmp .svg
+ 字体文件(Fonts)
 - .svg .ttf .eot .woff .woff2
+ 模板文件
 - .ejs .jade .vue(在webpack中定义组件的方式)

## 网页中引入静态资源多了以后会有什么问题
1. 网页加载速度慢，会发起很多二次请求
2. 要处理错综复杂的依赖关系

## 如何解决上述两个问题
1. 合并、压缩、精灵图、图片的base64编码
2. 可以使用 requireJS，webpack可以解决各个包之间复杂的依赖关系

## 什么是webpack
webpack 基于Node.js开发出来的一个前端项目构建工具

## 如何完美实现上述两个问题的解决方案
1. 使用Guip， 基于task任务
2. 使用webpack，基于整个项目进行构建

## webpack 安装的两种方式
1. 运行 npm i webpack -g 全局安装webpack
* webpack4 运行 npm i webpack -g 会报错,执行如下两条命令
 - npm install --save-dev webpack
 - npm install webpack-cli -D
2. 在项目根目录中运行 npm i webpack --save-dev 安装到项目依赖中

## webpack 的相关使用命令
+ npm init -y 初始化webpack
+ webpack .\src\main.js -o .\dist\bundle.js  (webpack 4.* 的版本需要跟 -o 参数) 把 src/main.js 打包成 dist/bundle.js 方便浏览器识别
 - 如果不想写后面的打包路径，需要的项目根目录下创建 webpcak.config.js 文件，在改文件中配置打包路径的入口和出口参数

## 其他安装
+ 安装jquery
 - npm i jquery -S
+ 安装 webpack-dev-server 这个工具实现自动打包编译的功能
 - npm i webpack-dev-server -D
+ 安装 html-webpack-plugin -D 把页面加载到内存
 - npm install html-webpack-plugin -D
+ 安装 css loader
 - npm i style-loader css-loader -D
+ 安装 less loader
 - npm i less sass-loader -D
+ 安装 scss 加载器
 - npm i node-sass sass-loader -D
+ 安装 url loader
 - npm i url-loader file-loader -D
+ 安装 bootstrape
 - npm i bootstrap -S

