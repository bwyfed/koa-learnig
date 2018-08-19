const fs = require('fs')

// 示例1 第一阶段，通过传入回调函数实现异步操作
function readFile (cb) {
    fs.readFile('./package.json', (err, data) => {
        if (err) return cb(err)
        cb && cb(null, data)
    })
}

readFile((err, data) => {
    if (!err) {
        data = JSON.parse(data)
        console.log('第一阶段，回调函数')
        console.log(data.name)
    }
})

// 示例2 第二阶段，使用Promise 
function readFileAsync (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
}
readFileAsync('./package.json')
    .then(data => {
        data = JSON.parse(data)
        console.log('第二阶段，Promise')
        console.log(data.name)
    })
    .catch(err => {
        console.log(err)
    })

// 示例3 第三个阶段，使用generator function
const co = require('co')
const util = require('util')
co(function *() {
    let data = yield util.promisify(fs.readFile)('./package.json')
    data = JSON.parse(data)
    console.log('第三阶段，generator function')
    console.log(data.name)
})

//示例4: 第四个阶段 Async 统一世界
const readAsync = util.promisify(fs.readFile)

async function init() {
    let data = await readAsync('./package.json')
    data = JSON.parse(data)
    console.log('第四阶段，async function')
    console.log(data.name)
}

init()

