const co = require('co')
const fetch = require('node-fetch') // Node实现的fetch
// 实例1: 使用co库 向co里传入一个generator function
co(function *() {
    const res = yield fetch('https://api.douban.com/v2/movie/1291843')

    const movie = yield res.json()
    const summary = movie.summary

    console.log('summary', summary)
})

// 实例2
function run (generator) {
    const iterator = generator() // 调用generator生成迭代器对象
    const it  = iterator.next()
    const promise = it.value

    promise.then(data => {
        const it2 = iterator.next(data)
        const promise2 = it2.value

        promise2.then(data2 => {
            iterator.next(data2)
        })
    })
}

run(function *() {
    const res = yield fetch('https://api.douban.com/v2/movie/1291843')

    const movie = yield res.json()
    const summary = movie.summary

    console.log('summary ', summary)
})
