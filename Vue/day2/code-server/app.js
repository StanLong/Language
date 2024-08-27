// 导入 http 内置模块
const http = require('http')

// 这个核心模块， 能够帮我们解析url地址， 从而拿到 pathname query
const urlModule = require('url')

// 创建一个http 服务器
const server = http.createServer()

// 监听 http 服务的 request 请求
server.on('request', function(req, res){
    //const url = req.url;
    const {pathname:url, query} = urlModule.parse(req.url, true) 

    var data = {
        name : 'xjj',
        age : 18,
        gender : '女孩子'
    }

    if(url==='/getScript'){
        // 拼接一个合法的js脚本
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        // 通过res.end发送给客户端,客户端把这个字符串当作js代码去解析执行
        res.end(scriptStr)
    }else {
        res.end('404')
    }

})

// 指定端口号并启动服务监听
server.listen(3000, function(){
    console.log('server listen at http://127.0.0.1:3000')
})