const fs = require('fs')
// const Promise = require('bluebird') // 比较老的Node版本需要引入Promise库

// 示例1 传统的callback方式，官方的默认写法
fs.readFile('./package.json', (err, data) => {
    if (err) return console.log(err)

    data = JSON.parse(data)
    console.log('Callback:',data.name)
})

// 示例2 通过Promise（库）包装一下。过渡时期的做法（2017年的做法）
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
    console.log('Promise:',data.name)
})
.catch(err => {
    // 捕获错误，做出相应的处理
    console.log(err)
})

// 示例3 Node 8.*版本后，使用util.promisify包装一个回调式的API
const util = require('util')

util.promisify(fs.readFile)('./package.json')
.then(JSON.parse)
.then(data => {
    console.log('util.promisify:',data.name)
})
.catch(err => {
    console.log(err)
})