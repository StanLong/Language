// node 中向外暴漏成员的方式
//module.exports={}

// 在es6中夜规定了如何导入和到处模块
//导入模块
// import 模块名称 from  '模块标识符'
// import '表示路径'
//外暴露成员
// 在 es6 中，使用 export.default 和 export 

var info ={
    name : 'stanlong',
    age : 29
}

export default info
// export default 向外暴露的成员可以使用任意变量来接收
// 在一个模块中 export default 只运行向外暴露一次
// 在一个模块中  export default 和 export 可以同时使用
// exports 可以暴露多个成员
 
export var title = "小行星"
export var content = "红暗星"
// 注意使用 export 向外暴露的成员只能使用 {} 的形式来接收, 而且必须严格按照导出的名称来接收，如果名称不一样必须用 as 起别名，
// 暴露的多个成员可以按需导入

// 在node中， 导入成员 使用 var 名称 = require('模块标识符') 
// 暴露成员使用 module.exports 和 exports
