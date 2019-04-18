// 1.Require能方法接受一个数组和一个回调函数将模块引入
// 2.Define定义的模块能够正确返回内容
// 3.可以利用该逻辑引入js文件
let fs = require("fs");
let path = require("path");
console.log(fs)
    //引入require方法可以读取到所有的数组里面的文件
function require(str, cb) {
    //读取文件
    // str = "index.js"

    // let file = fs.readFileSync(path.join(__dirname, "web", "index.js"))
    // console.log(file)

}
require("index.js", () => {
    console.log(1)
})

// function define(arr, cb) {

// }